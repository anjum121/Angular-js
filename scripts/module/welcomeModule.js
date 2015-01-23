/**
 * Created by anjum on 1/6/15.
 */
(
  function(){
    "use strict";

    angular
      .module("welcome.module",[
        'ui.router'
      ])
      .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/welcome');

        $stateProvider
          .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            controller:  'HomeData as vm'
          })
      });


  }()
);
