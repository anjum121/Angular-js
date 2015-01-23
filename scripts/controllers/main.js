'use strict';

/**
 * @ngdoc function
 * @name dxbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dxbApp
 */
angular.module('dxbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
