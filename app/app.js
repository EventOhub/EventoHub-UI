'use strict';
// Declare app level module which depends on views, and components
var appModule = angular.module('myApp', ['ngRoute','myApp.homepage','myApp.register', 'myApp.dashboard']);

appModule.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
