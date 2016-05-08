'use strict';
// Declare app level module which depends on views, and components
var appModule = angular.module('myApp', ['ngRoute','ui.router','myApp.homepage','myApp.register', 'myApp.dashboard','myApp.login']);

appModule.config(['$routeProvider', function ($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/homepage'});
}]);
