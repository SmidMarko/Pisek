<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'             => ':attribute mora biti sprejet.',
    'active_url'           => ':attribute ni veljaven URL.',
    'after'                => ':attribute mora biti datum po :date.',
    'after_or_equal'       => ':attribute mora biti datum po :date ali enak.',
    'alpha'                => ':attribute lahko vsebuje samo črke.',
    'alpha_dash'           => ':attribute lahko vsebuje le črke, številke in pomišljaje.',
    'alpha_num'            => ':attribute lahko vsebuje samo črke in številke.',
    'array'                => ':attribute mora biti polje.',
    'before'               => ':attribute mora biti datum pred :date.',
    'before_or_equal'      => ':attribute mora biti datum pred ali enak datumu :date.',
    'between'              => [
        'numeric' => ':attribute mora biti med :min in :max.',
        'file'    => ':attribute mora biti med :min in :max kilobajti.',
        'string'  => ':attribute mora biti med znaki :min in :max.',
        'array'   => ':attribute mora imeti med :min in :max elementa.',
    ],
    'boolean'              => 'Polje :attribute mora biti true ali false.',
    'confirmed'            => 'Potrditev :attribute se ne ujema.',
    'date'                 => ':attribute ni veljaven datum.',
    'date_format'          => ':attribute se ne ujema z obliko :format.',
    'different'            => ':attribute in :other morata biti različna.',
    'digits'               => ':attribute mora biti :digits števk.',
    'digits_between'       => ':attribute mora biti med :min in :max števkami.',
    'dimensions'           => ':attribute ima neveljavne dimenzije slike.',
    'distinct'             => 'Polje :attribute ima podvojeno vrednost.',
    'email'                => ':attribute mora biti veljaven e-poštni naslov.',
    'exists'               => 'Izbrani :attribute ni veljaven.',
    'file'                 => ':attribute mora biti datoteka.',
    'filled'               => 'Polje :attribute je obvezno.',
    'image'                => ':attribute mora biti slika.',
    'in'                   => 'Izbrani :attribute ni veljaven.',
    'in_array'             => 'Polje :attribute ne obstaja v :other.',
    'integer'              => ':attribute mora biti celo število.',
    'ip'                   => ':attribute mora biti veljaven naslov IP.',
    'json'                 => ':attribute mora biti veljaven niz JSON.',
    'max'                  => [
        'numeric' => ':attribute ne sme biti večji od :max.',
        'file'    => ':attribute ne sme biti večji od :max kilobajtov.',
        'string'  => ':attribute ne sme biti daljši od :max znakov.',
        'array'   => ':attribute ne sme imeti več kot :max elementov.',
    ],
    'mimes'                => ':attribute mora biti datoteka tipa: :values.',
    'mimetypes'            => ':attribute mora biti datoteka tipa: :values.',
    'min'                  => [
        'numeric' => ':attribute mora biti vsaj :min.',
        'file'    => ':attribute mora imeti najmanj :min kilobajtov.',
        'string'  => ':attribute mora imeti najmanj :min znakov.',
        'array'   => ':attribute mora imeti vsaj :min elementov.',
    ],
    'not_in'               => 'Izbrani :attribute ni veljaven.',
    'numeric'              => ':attribute mora biti številka.',
    'present'              => 'Polje :attribute mora biti prisotno.',
    'regex'                => 'Format :attribute je neveljaven.',
    'required'             => 'Polje :attribute je obvezno.',
    'required_if'          => 'Polje :attribute je obvezno.',
    'required_unless'      => 'Polje :attribute je obvezno, razen če je :other v :values.',
    'required_with'        => 'Polje :attribute je obvezno, če je prisotno :values.',
    'required_with_all'    => 'Polje :attribute je obvezno, če je prisotno :values.',
    'required_without'     => 'Polje :attribute je obvezno, če :values ni prisotno.',
    'required_without_all' => 'Polje :attribute je obvezno, če ni prisotna nobena od :values.',
    'same'                 => ':attribute in :other se morata ujemati.',
    'size'                 => [
        'numeric' => ':attribute mora biti :size.',
        'file'    => ':attribute mora biti :size kilobajtov.',
        'string'  => ':attribute mora vsebovati znake :size.',
        'array'   => ':attribute mora vsebovati elemente :size.',
    ],
    'string'               => ':attribute mora biti niz.',
    'timezone'             => ':attribute mora biti veljavno območje.',
    'unique'               => ':attribute je že zaseden.',
    'uploaded'             => ':attribute ni bilo mogoče naložiti.',
    'url'                  => 'Format :attribute je neveljaven.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'sporočilo po meri',
        ],
    ],

    'value_different' => ':attribute in :other morata biti različna.',
    'login' => 'Podčrtaji ali velike črke niso dovoljeni v vrednosti :attribute',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],

];
