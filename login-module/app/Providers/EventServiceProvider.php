<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

use App\LoginModule\AuthConnector;
use Session;
use Auth;
use Slides\Saml2\Saml2User;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'Illuminate\Auth\Events\Login' => [
            'App\Listeners\AuthLogin',
        ],
        'Laravel\Passport\Events\AccessTokenCreated' => [
            'App\Listeners\AccessTokenCreated',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        // User was authenticated on idp and can be logged in
        Event::listen(\Slides\Saml2\Events\SignedIn::class, function (\Slides\Saml2\Events\SignedIn $event) {
            $messageId = $event->getAuth()->getLastMessageId();
            
            // your own code preventing reuse of a $messageId to stop replay attacks
            $samlUser = $event->getSaml2User();
            $tenant = $samlUser->getTenant()->getAttributes();

            $displayName = explode(' ', $samlUser->getAttributes()['displayName'][0]);

            $auth = [
                'uid' => $samlUser->getUserId(),
                'attributes' => $samlUser->getAttributes(),
                'assertion' => $samlUser->getRawSamlAssertion(),
                'provider' => $tenant['key'],
                'first_name' => $displayName[0],
                'last_name' => $displayName[1],
                'access_token' => $samlUser->getSessionIndex()
            ];

            AuthConnector::connect($auth);

        });
    }
}
