<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>{{config('app.name')}}</title>
    <link href="https://unpkg.com/maplibre-gl@3.1.0/dist/maplibre-gl.css" rel="stylesheet" />
    @vite('resources/css/app.css')
    @inertiaHead
</head>
<body class="w-screen h-screen flex flex-col">
@inertia
@vite('resources/js/app.js')
</body>
</html>
