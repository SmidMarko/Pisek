<?php

namespace App\Http\Controllers\Auth;

use DOMDocument;
use DOMXPath;
use App\Http\Controllers\Controller;
use Slides\Saml2\Models\Tenant;
use Slides\Saml2\Repositories\TenantRepository;

class ArnesAAIController extends Controller
{
    function generatePostRequest($endpointUrl, $postData) {
        $request = \Illuminate\Http\Request::create($endpointUrl, 'POST', $postData);
        return $request;
    }

    // Method that intercepts response from idp and redirects it to correct idp endpoint
    public function acs(\Illuminate\Http\Request $request) {
        $uuid = session('idpUUID'); 
        $request = $this->generatePostRequest('127.0.0.1:8282/saml/'.$uuid.'/acs', ['form_params' => [
            'SAMLResponse' => $request->input('SAMLResponse'),
            'RelayState' => $request->input('RelayState'),
            'SigAlg' => $request->input('SigAlg'),
            'Signature' => $request->input('Signature'),
        ],]);

        $response = app()->handle($request);
        return $response;
    }

    public function sls(\Illuminate\Http\Request $request) {
        return redirect($this->redirectSamlRequestUrl('sls', http_build_query($request->query())));
    }

    public function idp_ds_return(\Illuminate\Http\Request $request) {
        $params = [];

        parse_str($request->getQueryString(), $params);
        $entityID = $params['entityID'];

        $uuid = null;
        // 1. Check if provided entityID already exists in the DB
        $tenantRepository = new TenantRepository();
        $tenant = $tenantRepository->findByKey($this->convertEntityIDToKey($entityID));
        if($tenant) {
            // Tenant exists
            $uuid = $tenant['uuid'];
        }
        else{
            // 2. Tenant doesn't exists so we have to add new
            // Get the data from the IDP xml
            $idpData = $this->getIDPData($this->convertEntityIDToKey($entityID));

            // 3. Save new tenant to database
            $tenant = $this->saveTenantToDB($entityID, $idpData);

            // We set the id if saving was successful
            if($tenant) {
                $uuid = $tenant['uuid'];
            }
            
        }
        // 4. Add idp UUID to session and redirect user to the requested URL if $uuid is set
        if($uuid){
            session()->put('idpUUID', $uuid);
            return redirect($this->redirectSamlRequestUrl('login'));
        }

    }


    public function getIDPData($entityID) {
        // Load the XML data from the URL into a DOMDocument object
        $xml = new DOMDocument();
        $xml->load(config('saml2.samlIdpMetadata'));

        // Create a new DOMXPath object for the XML data
        $xpath = new DOMXPath($xml);

        // Register the namespace used in the SAML metadata schema
        $xpath->registerNamespace('md', 'urn:oasis:names:tc:SAML:2.0:metadata');

        $singleSignOnServiceNode = $xpath->query("//md:EntityDescriptor[@entityID='$entityID']/md:IDPSSODescriptor/md:SingleSignOnService")->item(0);
        $singleLogoutServiceNode = $xpath->query("//md:EntityDescriptor[@entityID='$entityID']/md:IDPSSODescriptor/md:SingleLogoutService")->item(0);
        $x509CertificateNode = $xpath->query("//md:EntityDescriptor[@entityID='$entityID']/md:IDPSSODescriptor/md:KeyDescriptor/ds:KeyInfo/ds:X509Data/ds:X509Certificate")->item(0);

        if($singleLogoutServiceNode && $singleSignOnServiceNode && $x509CertificateNode){
            $idpData = array(
                'singleSignOnService' => $singleSignOnServiceNode->getAttribute('Location'),
                'singleLogoutService' => $singleLogoutServiceNode->getAttribute('Location'),
                'x509Certificate' => $x509CertificateNode->nodeValue
            );

            return $idpData;
        }

        return null;
    }

    public static function saveTenantToDB($entityID, $idpData){
        $class = config('saml2.tenantModel', Tenant::class);
        $tenant = new $class([
            'key' => ArnesAAIController::convertEntityIDToKey($entityID),
            'uuid' => \Ramsey\Uuid\Uuid::uuid4(),
            'idp_entity_id' => $entityID,
            'idp_login_url' => $idpData['singleSignOnService'],
            'idp_logout_url' => $idpData['singleLogoutService'],
            'idp_x509_cert' => $idpData['x509Certificate'],
            'relay_state_url' => null,
            'name_id_format' => 'persistent',
            'metadata' => [],
        ]);

        if(!$tenant->save()) {
            // Tenant was not saved succesfully
            return null;
        }

        return $tenant;
    }

    public static function updateTenantToDB($entityID, $idpData, $tenant) {
        $tenant->update(array_filter([
            'key' => ArnesAAIController::convertEntityIDToKey($entityID),
            'idp_entity_id' => $entityID,
            'idp_login_url' => $idpData['singleSignOnService'],
            'idp_logout_url' => $idpData['singleLogoutService'],
            'idp_x509_cert' => $idpData['x509Certificate']
        ]));

        if(!$tenant->save()) {
            // Tenant was not updated succesfully
            return null;
        }

        return $tenant;
    }

    // Field 'key' in 'saml2_tenants' table is limited to have 16 characters so we have to trim the entityID to fit the requirements
    public static function convertEntityIDToKey($entityID) {
        return str_replace('-','',str_replace('/','', str_replace('.', '', substr($entityID, 8,16))));
    }

    // Redirects user based on his previous selection of idp
    public static function redirectSamlRequestUrl($location, $queryString = null){
        $uuid = session('idpUUID');
        if($uuid) {
            return "/saml/".$uuid."/".$location.($queryString ? '?'.$queryString : '');
        } else {
            // Check if $location = 'logout' and user is already logged in and has set logout_providers.
            $logoutProviders = session('logout_providers');
            if($location == 'logout' && isset($logoutProviders) && count($logoutProviders) == 1)
            {
                // Get the UUID data from database
                $tenantRepository = new TenantRepository();
                if($tenant = $tenantRepository->findByKey($logoutProviders[0])){
                    session()->put('idpUUID', $tenant->uuid);
                    return "/saml/".$tenant->uuid."/".$location.($queryString ? '?'.$queryString : '');
                }
            }
            return view('saml.error', [
                'message' => "Redirect failed because idpUUID is not stored in session"
            ]);
        }
    }


}