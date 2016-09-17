'use strict';
// Declare app level module which depends on views, and components
var appModule = angular.module('myApp', ['ui.router','myApp.homepage']);

appModule.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/homepage');
});
