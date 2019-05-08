const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.ts([
   'resources/ts/vendor.ts',
   'resources/ts/polyfills.ts',
], 'public/js/vendor.js');

mix.ts([
   'resources/ts/main.ts'
], 'public/js/app.js').version();

mix.sass('resources/sass/app.scss', 'public/css');
   