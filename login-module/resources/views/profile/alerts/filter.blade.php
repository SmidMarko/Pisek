@if(count($rejected_attributes))
    <div class="alert alert-danger">
        <div>
            @lang('profile.profile_filter', [
                'platform_name' => $platform_name
            ])
        </div>
        <strong>
            <ul>
                @foreach($rejected_attributes as $attr => $info)
                    <li>
                        @lang('profile.'.$attr): 
                        @if($attr == 'role')
                            @lang('profile.roles.'.$info['current_value']) &rarr; @lang('profile.roles.'.$info['required_value'])
                        @elseif($attr == 'gender')
                            @lang('profile.genders.'.$info['current_value']) &rarr; @lang('profile.genders.'.$info['required_value'])
                        @else
                            {{ $info['current_value'] }} &rarr; {{ $info['required_value'] }} 
                        @endif
                    </li>
                @endforeach
            </ul>
        </strong>
    </div>
@endif