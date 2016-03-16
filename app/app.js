'use strict';
// Declare app level module which depends on views, and components
var appModule = angular.module('myApp', ['ngRoute','myApp.homepage','myApp.register']);

appModule.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);

appModule.controller('appController', ['$scope', function(scope) {
   
}]);
