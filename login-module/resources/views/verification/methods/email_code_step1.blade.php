@extends('layouts.popup')

@section('content')
	@if(count($errors) > 0)
		<div class="alert-section">
			@include('ui.errors')
		</div>
	@endif
    <div class="panel-body">
        <div class="sectionTitle">
            <i class="fas fa-envelope icon"></i>
            @lang('verification.methods.email_code')
        </div>
        @if(count($emails))
            <p class="help-block">
                @lang('verification.email_code.step1_help', [
                    'admin_email' => '<a href="mailto:'.config('mail.from.address').'">'.config('mail.from.address').'</a>'
                ])
            </p>
            {!! BootForm::horizontal(['url' => '/verification/email_code', 'class' => 'form-horizontal verificationForm']) !!}
				{!! BootForm::select('role', trans('verification.email_code.email'), $emails) !!}
				<button type="submit" class="btn btn-rounded btn-primary btn-centered">
					<i class="fas fa-check icon"></i> @lang('verification.email_code.send_code')
				</button>
            {!! BootForm::close() !!}
        @else
            <div class="alert alert-warning">@lang('verification.email_code.no_emails')</div>
        @endif
		<div class="form-group text-center">
			<a class="btn-link" href="/verification">@lang('ui.close')</a>
		</div>
	</div>
@endsection
