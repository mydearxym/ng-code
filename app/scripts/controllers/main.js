'use strict';

/**
 * @ngdoc function
 * @name functestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the functestApp
 */
angular.module('functestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
