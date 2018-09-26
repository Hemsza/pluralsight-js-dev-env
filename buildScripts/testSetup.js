// This file isn't transpiled, so must use commonJS and ES5

//registering babel to transpile before our tests run.
require('babel-register')();

//Disable webpack feature tha mocha doesn't understand
require.extensions['.css'] = function() {};
