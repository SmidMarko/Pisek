@foreach($providers as $provider)
    @if(isset($connected[$provider]))
        <li class="list-group-item">
            {{ trans('auth_connections')[$provider] }}
            <span class="label label-success">
                <i class="fas fa-check"></i>
                @lang('auth_methods.active')
            </span>
            @if(isset($support_remove[$provider]))
                <form method="post" action="/oauth_client/remove/{{ $provider }}" style="display: inline">
                    {{ csrf_field() }}
                    <button class="btn-link btn-link-danger pull-right" type="submit">
                        <i class="fas fa-trash-alt icon"></i>
                        @lang('auth_methods.btn_remove')
                        </button>
                </form>
            @endif
        </li>
    @endif
@endforeach
