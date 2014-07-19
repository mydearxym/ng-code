'use strict';

/**
 * @ngdoc function
 * @name functestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the functestApp
 */
angular.module('functestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
