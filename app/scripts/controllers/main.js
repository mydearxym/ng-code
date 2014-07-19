'use strict';

/**
 * @ngdoc function
 * @name functestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the functestApp
 */




require(["functestApp"], function(app) {
 	console.log("main.js");
 	app.controller('MainCtrl', function ($scope) {
 		$scope.awesomeThings = [
 		'HTML5 Boilerplate',
 		'AngularJS',
 		'Karma'
 		];
 	});
});

 // require(['angular', 'angular-route'], function(angular, angularRoute){

 // 	angular.module('functestApp')
 // 	.controller('MainCtrl', function ($scope) {
 // 		$scope.awesomeThings = [
 // 		'HTML5 Boilerplate',
 // 		'AngularJS',
 // 		'Karma'
 // 		];
 // 	});
 // });


// angular.module('functestApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });
