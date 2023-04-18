<?php

    namespace App\OAuthClient\Providers;

use App\Http\Controllers\Auth\ArnesAAIController;
use App\OAuthClient\Providers\ProviderInterface;

    class ArnesProvider implements ProviderInterface {

        public function getAuthorizationURL() {
            return config('saml2.samlIdpDiscovery') . '?entityID=' . config('saml2.sp')['entityId'] . '&return=' . config('saml2.samlIdpDiscoveryReturn');
        }


        public function getPreferencesURL($auth_connection) {
            return $this->getAuthorizationURL();
        }


        public function callback(\Illuminate\Http\Request $request) {
            return null;
        }


        public function getLogoutURL($access_token, $redirect_url) {
            return ArnesAAIController::redirectSamlRequestUrl('logout');
        }


        public function getFixedFields() {
            return [];
        }

    }
