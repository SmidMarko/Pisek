<div class="alert alert-danger">
    @if($message)
        <h1>{{ $message }}</h1>
    @endif
    <a href="{{ url('/auth') }}" class="btn btn-primary btn-wide btn-rounded">Back to login</a>
</div>