'use strict';
// Declare app level module which depends on views, and components
var appModule = angular.module('myApp', ['ui.router','myApp.homepage','myApp.register', 'myApp.dashboard','myApp.login']);

appModule.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homepage');
});
