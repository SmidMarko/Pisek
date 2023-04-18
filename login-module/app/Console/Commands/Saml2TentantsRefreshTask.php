<?php

namespace App\Console\Commands;

use App\Http\Controllers\Auth\ArnesAAIController;
use Illuminate\Console\Command;
use DOMDocument;
use DOMXPath;
use App\Http\Controllers\Controller;
use Slides\Saml2\Models\Tenant;
use Slides\Saml2\Repositories\TenantRepository;

class Saml2TentantsRefreshTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tenants:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates saml2_tenants table (idp providers)';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Load the Arnes metadata (XML) from the URL into a DOMDocument object
        $xml = new DOMDocument();
        $xml->load(config('saml2.samlIdpMetadata'));

        // Create a new DOMXPath object for the XML data
        $xpath = new DOMXPath($xml);

        // Register the namespace used in the SAML metadata schema
        $xpath->registerNamespace('md', 'urn:oasis:names:tc:SAML:2.0:metadata');

        $tenantRepository = new TenantRepository();

        // Find and loop through all EntityDescriptors that contain '/idp' (sign that it's identity provider) in attribute 'entityID' and update or insert them one by one
        $entityDescriptors = $xpath->query("//md:EntityDescriptor[contains(@entityID, '/idp')]");
        foreach ($entityDescriptors as $entityDescriptor) {
            // Extract data from the child element
            $entityID = $entityDescriptor->getAttribute('entityID');
            $singleSignOnServiceNode = $xpath->query("//md:EntityDescriptor[@entityID='$entityID']/md:IDPSSODescriptor/md:SingleSignOnService")->item(0);
            $singleLogoutServiceNode = $xpath->query("//md:EntityDescriptor[@entityID='$entityID']/md:IDPSSODescriptor/md:SingleLogoutService")->item(0);
            $x509CertificateNode = $xpath->query("//md:EntityDescriptor[@entityID='$entityID']/md:IDPSSODescriptor/md:KeyDescriptor/ds:KeyInfo/ds:X509Data/ds:X509Certificate")->item(0);

            if($singleLogoutServiceNode && $singleSignOnServiceNode && $x509CertificateNode){
                $idpData = array(
                    'singleSignOnService' => $singleSignOnServiceNode->getAttribute('Location'),
                    'singleLogoutService' => $singleLogoutServiceNode->getAttribute('Location'),
                    'x509Certificate' => $x509CertificateNode->nodeValue
                );
                
                // Save tenant to file. If it already exists update it
                $tenant = $tenantRepository->findByKey(ArnesAAIController::convertEntityIDToKey($entityID));
                if($tenant){
                    if(!$tenant = ArnesAAIController::updateTenantToDB($entityID, $idpData, $tenant)){
                        $this->info('Something went wrong when updating tenant to db for entityID: '.$entityID);
                    }else {
                        $this->info('Tenant was updated successfuly for entityID: '.$entityID);
                    }
                }else{
                    if(!$tenant = ArnesAAIController::saveTenantToDB($entityID, $idpData)){
                        $this->info('Something went wrong when saving tenant to db for entityID: '.$entityID);
                    }else {
                        $this->info('Tenant was saved successfuly for entityID: '.$entityID);
                    }
                }

            } else {
                // Something went wrong while fetching data. 
                $this->info('Something went wrong when fetching metadata for entityID: '.$entityID);
            }

        }

        $this->info('Saml2TentantsRefreshTask perfomerd successfully');
    }
}
