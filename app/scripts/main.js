console.log("this is require j2s");

require.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery',
    'domReady': '../bower_components/requirejs-domready/domReady',
    'angular': '../bower_components/angular/angular',
    'angular-route':  '../bower_components/angular-route/angular-route',
  },

  shim: {
    'jquery': {
      deps: [],
      exports: '$'
    },
    "angular": {
      exports: "angular"
    },
    "angular-route": {
      deps: ["angular"]
    },
  }
});

console.log("require config done !");

console.log("define begin ...");
define("functestApp", ["angular", "angular-route"], function(angular) {
  console.log("define staff");
  var app = angular.module("functestApp", ["ngRoute"] );
  return app;
});

// require(['angular', 'angular-route'], function(angular, angularRoute){
//   console.log("angular staff done!");
// });

require(['domReady', 'jquery'], function(domReady ,$){
  $('#for-test').addClass('text-danger');
})






