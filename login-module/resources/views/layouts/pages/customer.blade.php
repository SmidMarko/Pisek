<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/manifest.js') }}"></script>
</head>
<body {!! Request::is('profile') ? 'data-spy="scroll" data-target="#contextualNav"' : '' !!}>
    <script>
        window.user_logged = {!! Auth::check() ? 'true' : 'false' !!};
    </script>
    @yield('navigation')
    @yield('header')
    <div class="container">
        @yield('aside')
        @include('layouts.components.content_wrapper')
    </div>
</body>
</html>