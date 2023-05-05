<?php
return [

    'header' => 'Verifikacija',
    'not_required' => 'Za uporabo te platforme ni zahtevana verifikacija.',
    'header_verifications' => 'Zadnje verifikacije',
    'header_recommended_methods' => 'Priporočene metode verifikacije za zahtevane verifikacije.',
    'header_alternative_methods' => 'Alternativne metode verifikacije',
    'header_optional_methods' => 'Druge metode za neobvezno verifikacijo',

    'btn_verify' => 'Preveri',

    'completed' => 'Vse zahtevane metode verifikacije so bile potrjene.',

    'unverified_attributes' => 'Za dostop do :platform_name, moramo preveriti naslednje informacije:',
    'profile_not_completed' => 'Nekatera polja je treba preveriti, preden lahko nadaljujete.',
    'user_attributes' => 'Informacije',

    'approved_attributes' => 'Preverjene informacije',
    'rejected_attributes' => 'Zavrnjene informacije',

    'methods_header' => 'Na voljo je več metod:',
    'methods' => [
        'email_code' => 'Sending a code by email',
        'email_domain' => 'Zagotavljanje preverjenega e-poštnega sporočila iz domene slovenske akademije',
        'id_upload' => 'Naložite sliko uporabnika, ki drži svoj ID in kodo.',
        'classroom_upload' => 'Naložite sliko učitelja v učilnici z nekaj učenci ali sodelavci, ki drži kodo.',
        'peer' => 'Potrditev statusa s strani sodelavca',
        'imported_data' => 'Uvoženi podatki',
        'manual' => 'Zahtevajte ročno verifikacijo.'
    ],


    'states' => [
        'NOT_VERIFIED' => 'Ni preverjeno',
        'VERIFICATION_REQUIRED' => 'Verifikacija je zahtevana',
        'IN_PROCESS' => 'Preverjanje poverilni je v teku',
        'ACTION_REQUIRED' => 'Nadaljujte s preverjanjem',
        'REFRESH_REQUIRED' => 'Verifikacijo je potrebno osvežiti',
        'OBSOLETE' => 'Verifikacija je zastarela',
        'VERIFIED' => 'Preverjeno',
        'REJECTED' => 'Zavrnjen',
    ],

    'btn_profile' => 'Nazaj na profil',

    'msg_verification_added' => 'Končano! Preverjene informacije:',

    'email_code' => [
        'step1_help' => 'Izberite e-poštni naslov.',
        'no_emails' => 'You need to edit your profile and add an email, before using the email verification.',
        'email' => 'E-poštni naslov',
        'code' => 'Koda',
        'send_code' => 'Pošlji kodo',
        'resend_code' => 'Kliknite tukaj za ponovno pošiljanje kode.',
        'error' => 'Napačna koda za preverjanje e-pošte.',
        'step2_help' => 'Vnesite kodo, ki ste jo prejeli po e-pošti. Če je niste prejeli, se prepričajte, da je navedeni e-poštni naslov pravilen, preverite mapo za nezaželeno pošto in nas s tega e-poštnega naslova kontaktirajte na :admin_email .',
    ],

    'email_domain' => [
        'step1_help' => 'Navedite e-poštni naslov iz ene od predlaganih domen. Na ta naslov vam bomo poslali kodo, ki jo lahko uporabite za navedbo svojega statusa.',
        'wrong_code' => 'Napačna koda',
        'account' => 'Račun',
        'domain' => 'Omogočene domene',
        'step2_help' => 'Prosim preverite svoj epoštni naslov <a href="mailto::email">:email</a> in vnesite kodo tukaj.',
        'validate' => 'Validacijska koda'
    ],

    'imported_data' => 'Ni razpoložljivih ukrepov',

    'id_upload' => [
        'help' => 'Besedilo za pomoč tukaj',
        'file' => 'Izberite datoteko',
        'list' => 'Seznam polj, ki jih lahko ta metoda preveri'
    ],

    'classroom_upload' => [
        'help' => 'Za učilnico vnesite besedilo pomoči tukaj'
    ],

    'peer' => [
        'help' => 'Besedilo pomoči za potrditev učitelja tukaj',
        'email' => 'E-pošti naslov ali prijava',
        'user_not_found' => 'Uporabnik ni najden',
        'code' => 'Koda',
        'wrong_code' => 'Napačna koda',
        'link_code' => 'Vnesite kodo',
        'code_help' => 'Besedilo za pomoč',
    ],

    'upload' => [
        'file' => 'Izberite datoteko',
        'file_size' => 'Velikost datoteke ne sme presegati :size megabyte(s). Dovoljene končnice: .gif .jpg .png',
        'link_view_file' => 'Prikaži datoteko'
    ],
    
    'manual' => [
        'help' => 'Pošlji e-pošto sporočilo na naslov <a href="mailto::client_email">:client_email</a> in pojasni svojo situacijo. V sporočilu navedite e-poštni naslov, ki ste ga uporabili za registracijo, in pojasnite, zakaj ne morete uporabiti razpoložljivega samodejnega sistema za preverjanje, ter predložite nekaj dokazov o svojem statusu ali način, kako ga lahko preverimo. Če bomo vaš status lahko preverili, ga bomo potrdili ročno.'
    ]

];