'use strict';

/**
 * @ngdoc overview
 * @name dxbApp
 * @description
 * # dxbApp
 *
 * Main module of the application.
 */
angular
  .module('dxbApp', [
    'worldMaps.module',
    'welcome.module',
    //'ui.router',
    'maps.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
