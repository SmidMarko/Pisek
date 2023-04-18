<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\LoginModule\Platform\PlatformContext;

class RedirectController extends Controller
{

    public function __construct(PlatformContext $context) {
        $this->context = $context;    
    }
    
    public function continue(Request $request) {
        $continueURL = $this->context->continueUrl($request->get('alternative_url'));
        if(str_contains($continueURL, 'http://pisek-novi.acm.si/oauth/authorize')){
            str_replace('http://pisek-novi.acm.si/oauth/authorize', 'http://pisek-novi.acm.si/login_module/oauth/authorize', $continueURL);
        }
        return redirect($continueURL);
        //return redirect($this->context->continueUrl($request->get('alternative_url'))); // TODO odstraniii
    }
}