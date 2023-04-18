<?php
namespace App\LoginModule\Profile\Verification;

use App\LoginModule\Platform\PlatformContext;
use App\VerificationMethod;
use Carbon\Carbon;
use App\Verification as VerificationModel;

class Verification {


    const STATE_NOT_VERIFIED = 'NOT_VERIFIED';
    const STATE_VERIFICATION_REQUIRED = 'VERIFICATION_REQUIRED';
    const STATE_IN_PROCESS = 'IN_PROCESS';
    const STATE_ACTION_REQUIRED = 'ACTION_REQUIRED';
    const STATE_REFRESH_REQUIRED = 'REFRESH_REQUIRED';
    const STATE_OBSOLETE = 'OBSOLETE';
    const STATE_VERIFIED = 'VERIFIED';
    const STATE_REJECTED = 'REJECTED';

    const ATTRIBUTES = [
        'first_name',
        'last_name',
        'graduation_grade',
        'graduation_year',
        'country_code',
        'role',
        'primary_email',
        'secondary_email',
        'student_id',
        'birthday'
    ];    

    protected $context;
    protected $methods_cache = null;
    protected $verifications_cache = null;
    protected $verifications_global_cache = null;


    public function __construct(PlatformContext $context) {
        $this->context = $context;
    }


    public function attributes() {
        if($client = $this->context->client()) {
            return $client->verifiable_attributes;
        }
        return [];
    }


    public function methods() {
        if($this->methods_cache === null) {
            if($client = $this->context->client()) {
                $this->methods_cache = $client->verification_methods;
            } else {
                $this->methods_cache = collect();
            }
        }
        return $this->methods_cache;
    }


    public function getMethodByName($name) {
        $methods = $this->methods();
        foreach($methods as $method) {
            if($method->name == $name) {
                return $method;
            }
        }        
        return false;
    }


    public function verifications($user) {
        if($this->verifications_cache === null) {
            $q = $user->verifications()
                ->with('method')
                ->whereIn('method_id', $this->methods()->pluck('id'));
                
            if($client = $this->context->client()) {
                $q->where(function($q) use ($client) {
                    $q->whereNull('client_id');
                    $q->orWhere('client_id', $client->id);
                });
            } else {
                $q->whereNull('client_id');
            }
            $this->verifications_cache = $q->get()->map(function($verification) {
                $verification->state = $this->verificationState($verification);
                return $verification;
            });
        }
        return $this->verifications_cache;
    }


    public function verificationState($verification) {
        if(!$verification) {
            return self::STATE_NOT_VERIFIED;
        }
        if($this->verificationExpired($verification, true)) {
            return self::STATE_REFRESH_REQUIRED;
        }
        if($this->verificationExpired($verification)) {
            return self::STATE_OBSOLETE;
        }
        if($verification->status == 'pending') {
            $has_action = $verification->method->name == 'peer';
            return $has_action ? self::STATE_ACTION_REQUIRED : self::STATE_IN_PROCESS;
        }
        if($verification->status == 'approved') {
            return self::STATE_VERIFIED;
        }
        return self::STATE_REJECTED;
    }


    public function authReady($user) {
        if($client = $this->context->client()) {        
            $this->autoVerificationAttempt($user, $client);
        }
        $unverified_attributes = array_intersect(
            $this->attributes(),
            $this->unverifiedAttributes($user)
        );
        return count($unverified_attributes) == 0;
    }


    public function verifiedAttributes($user) {
        $states = $this->attributesState($user);
        $res = [];
        foreach($states as $attribute => $state) {
            if($state == self::STATE_VERIFIED) {
                $res[] = $attribute;
            }
        }
        return $res;
    }


    public function unverifiedAttributes($user) {
        $states = $this->attributesState($user);
        $res = [];
        foreach($states as $attribute => $state) {
            if($state != self::STATE_VERIFIED) {
                $res[] = $attribute;
            }
        }
        return $res;
    }



    public function verificationsGlobal($user) {
        if($this->verifications_global_cache === null) {
            $this->verifications_global_cache = $user->verifications()
                ->get()
                ->map(function($verification) {
                    $verification->state = $this->verificationState($verification);
                    return $verification;
                });
        }
        return $this->verifications_global_cache;
    }


    public function attributeVerifiedGlobal($user, $attribute) {
        $verifications = $this->verificationsGlobal($user);
        foreach($verifications as $verification) {
            foreach($verification->user_attributes as $attr) {
                if($attr == $attribute && $verification->state == self::STATE_VERIFIED) {
                    return true;
                }
            }
        }
        return false;
    }


    public function attributesState($user) {
        $verifications = $this->verifications($user);
        $res = array_fill_keys($this->attributes(), self::STATE_NOT_VERIFIED);

        foreach($verifications as $verification) {
            foreach($verification->user_attributes as $attribute) {
                if(!isset($res[$attribute])) {
                    $res[$attribute] = self::STATE_NOT_VERIFIED;
                }
                if($res[$attribute] != self::STATE_VERIFIED) {
                    $res[$attribute] = $verification->state;
                };
            }
        }
        return $res;
    }


    private function verificationExpired($verification, $expiration_alert = false) {
        if($verification->status != 'approved' || !$verification->approved_at) {
            return false;
        }

        $methods = $this->methods()->pluck('pivot', 'id');
        if(isset($methods[$verification->method_id])) {
            $expiration = $methods[$verification->method_id]->expiration;
            if(!$expiration) {
                return false;
            }
            if($expiration_alert) {
                $expiration = max(0, $expiration - config('verification.expiration_alert_interval'));
            }
            $expire_at = Carbon::parse($verification->approved_at)->addDays($expiration);
            return Carbon::now()->gt($expire_at);
        }
        return false;
    }


    public static function clear($user, $user_attributes) {
        if(!is_array($user_attributes)) {
            $user_attributes = [$user_attributes];
        }
        $verifications = $user->verifications()->where('status', 'approved')->get();
        foreach($verifications as $verification) {
            $intersection = array_intersect($user_attributes, $verification->user_attributes);
            if(count($intersection) > 0) {
                $verification->delete();
            }
        }
    }


    public static function stateLabel($verification) {
        if($verification->state == self::STATE_VERIFIED) {
            $c = 'label-success';
            $i = 'fas fa-check';
        } else if($verification->state == self::STATE_IN_PROCESS) {
            $c = 'label-warning';
            $i = 'fas fa-clock';
        } else if($verification->state == self::STATE_ACTION_REQUIRED) {
            $c = 'label-info';
            $i = 'fas fa-exclamation';
        } else {
            $c = 'label-danger';
            $i = 'fas fa-bell';
        }
        return
            '<span class="label '.$c.'">'.
                '<i class="'.$i.' icon"></i>'.
                trans('verification.states.'.$verification->state).
            '</span>';
    }



    public function autoVerificationAttempt($user, $client) {
        if($user->role != 'teacher') {
            return;
        }

        // check if email_domain method available
        $method = $this->getMethodByName('email_domain');
        if(!$method) {
            return;
        }

        // collect verified emails
        $verifications = $this->verifications($user);
        $verified_emails = [];
        foreach($verifications as $verification) {
            if($verification->status != 'approved') {
                continue;
            }
            if($verification->method->name == 'email_domain') {
                return;
            }
            if(array_search('primary_email', $verification->user_attributes) !== false) {
                $verified_emails[] = $user->primary_email;
            }
            if(array_search('secondary_email', $verification->user_attributes) !== false) {
                $verified_emails[] = $user->secondary_email;
            }            
        }

        // find verified email from official domain
        $official_domains = $client->official_domains->pluck('id', 'domain')->toArray();
        $official_email = false;
        foreach($verified_emails as $email) {
            $tmp = explode('@', $email);
            if(count($tmp) == 2 && isset($official_domains[$tmp[1]])) {
                $official_email = $email;
                break;
            }
        }

        if($official_email !== false) {
            // create verification
            $verification = new VerificationModel([
                'user_id' => $user->id,
                'client_id' => $client->id,
                'method_id' => $method->id,
                'email' => $official_email,
                'status' => 'approved',
                'user_attributes' => $method->user_attributes
            ]);
            $verification->save();
            //reset cache
            $this->verifications_cache = null;
        }
    }

}
