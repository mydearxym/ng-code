'use strict';

/**
 * @ngdoc overview
 * @name functestApp
 * @description
 * # functestApp
 *
 * Main module of the application.
 */


require(["functestApp"], function(app) {
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  console.log("see me 3?");
});

/*
require(['angular', 'angular-route'], function(angular, angularRoute){

  angular
  .module('functestApp', [
    // 'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
    ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });

});
*/


// angular
//   .module('functestApp', [
//     // 'ngAnimate',
//     // 'ngCookies',
//     // 'ngResource',
//     'ngRoute',
//     // 'ngSanitize',
//     // 'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
