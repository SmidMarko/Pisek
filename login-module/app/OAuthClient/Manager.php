<?php

    namespace App\OAuthClient;

    use App\OAuthClient\Providers\FacebookProvider;
    use App\OAuthClient\Providers\GoogleProvider;
    use App\OAuthClient\Providers\PMSProvider;
    use App\OAuthClient\Providers\ArnesProvider;
    use App\OAuthClient\Providers\FranceConnectProvider;
    use App\OAuthClient\Providers\DefaultProvider;


    class Manager {

        const PROVIDERS = [
            // disabled temporary
            'facebook' => FacebookProvider::class,
            'google' => GoogleProvider::class,
            'pms' => PMSProvider::class,
            'arnes' => ArnesProvider::class,
            'idpgesssiidp' => ArnesProvider::class,
            'idpmfuniljsi' => ArnesProvider::class,
            'radiusnibsiid' => ArnesProvider::class,
            'idpdobasiidp' => ArnesProvider::class,
            'idpkisiidp20' => ArnesProvider::class,
            'aainukuniljs' => ArnesProvider::class,
            'idpaaiarnessi' => ArnesProvider::class,
            'idpijssisimpl' => ArnesProvider::class,
            'idpzrsssiidp' => ArnesProvider::class,
            'idpuniljsiid' => ArnesProvider::class,
            'idpalmamatersi' => ArnesProvider::class,
            'idpscsgsiidp' => ArnesProvider::class,
            'idpuirssiidp' => ArnesProvider::class,
            'idpgeozssiid' => ArnesProvider::class,
            'idpklinikagoln' => ArnesProvider::class,
            'idpungsiidp2' => ArnesProvider::class,
            'idpvrtecvrhnik' => ArnesProvider::class,
            'idpnmssiidp2' => ArnesProvider::class,
            'idpaaitestarn' => ArnesProvider::class,
            'idpgjpsiidp2' => ArnesProvider::class,
            'idpscptujsiid' => ArnesProvider::class,
            'idpgsfsahosts' => ArnesProvider::class,
            'gimbidp1gimb' => ArnesProvider::class,
            'idpzagsiidp2' => ArnesProvider::class,
            'ediizumsiidp' => ArnesProvider::class,
            'idpgimnazijara' => ArnesProvider::class,
            'idpscnmsiidp' => ArnesProvider::class,
            'idpuprsiidp2' => ArnesProvider::class,
            'ldapacademiasi' => ArnesProvider::class,
            'idpaaiumsiid' => ArnesProvider::class,
            'aaikcljsiidp' => ArnesProvider::class
            //'france_connect' => FranceConnectProvider::class
        ];

        const DEFAULT_PROVIDER = DefaultProvider::class;

        const SUPPORT_LOGOUT = ['facebook', 'google', 'france_connect', 'idpgesssiidp','idpmfuniljsi','radiusnibsiid','idpdobasiidp','idpkisiidp20','aainukuniljs','idpaaiarnessi','idpijssisimpl','idpzrsssiidp','idpuniljsiid','idpalmamatersi','idpscsgsiidp','idpuirssiidp','idpgeozssiid','idpklinikagoln','idpungsiidp2','idpvrtecvrhnik','idpnmssiidp2','idpaaitestarn','idpgjpsiidp2','idpscptujsiid','idpgsfsahosts','gimbidp1gimb','idpzagsiidp2','ediizumsiidp','idpgimnazijara','idpscnmsiidp','idpuprsiidp2','ldapacademiasi','idpaaiumsiid','aaikcljsiidp']; // available at logout page

        const SUPPORT_REMOVE = ['facebook', 'google', 'france_connect', 'idpgesssiidp','idpmfuniljsi','radiusnibsiid','idpdobasiidp','idpkisiidp20','aainukuniljs','idpaaiarnessi','idpijssisimpl','idpzrsssiidp','idpuniljsiid','idpalmamatersi','idpscsgsiidp','idpuirssiidp','idpgeozssiid','idpklinikagoln','idpungsiidp2','idpvrtecvrhnik','idpnmssiidp2','idpaaitestarn','idpgjpsiidp2','idpscptujsiid','idpgsfsahosts','gimbidp1gimb','idpzagsiidp2','ediizumsiidp','idpgimnazijara','idpscnmsiidp','idpuprsiidp2','ldapacademiasi','idpaaiumsiid','aaikcljsiidp']; // remove button available at auth methods page


        static function providers() {
            return array_keys(self::PROVIDERS);
        }

        static function provider($name) {
            $provider = self::PROVIDERS[$name] ? self::PROVIDERS[$name] : self::DEFAULT_PROVIDER;
            return new $provider;
        }

    }