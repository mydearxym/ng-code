'use strict';

/**
 * @ngdoc function
 * @name functestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the functestApp
 */

require(["functestApp"], function(app) {
 	console.log("about.js");

 	app.controller('AboutCtrl', function ($scope) {
 		$scope.awesomeThings = [
 		'HTML5 Boilerplate',
 		'AngularJS',
 		'Karma'
 		];
  });

});


// angular.module('functestApp')
//   .controller('AboutCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });
