<?php

namespace App\Http\Middleware;

use Closure;
use App\LoginModule\Platform\PlatformContext;
use Illuminate\Support\Facades\Auth;

class AutoAuthorization
{

    private $context;


    public function __construct(PlatformContext $context) {
        $this->context = $context;
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if(str_contains($request->fullUrl(), 'http://pisek-novi.acm.si/oauth/authorize')){
            str_replace('http://pisek-novi.acm.si/oauth/authorize', 'http://pisek-novi.acm.si/login_module/oauth/authorize', $request->fullUrl());
        }
        if($client = $this->context->client()) {
            $pms_active = (bool) Auth::guard($guard)->user()->authConnections()->where('provider', 'pms')->where('active', '1')->first();
            $generated_account = Auth::guard($guard)->user()->creator_client_id == $client->id;
            if(($client->autoapprove_authorization && $pms_active) || $generated_account) {
                $url = str_replace('/oauth/authorize?', '/oauth/auto_authorize?', $request->fullUrl());
                return redirect($url);
            }
        }
        
        return $next($request);
    }

}
