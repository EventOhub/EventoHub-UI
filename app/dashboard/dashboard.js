'use strict';
angular.module('myApp.dashboard', ['ngRoute', 'ui.router'])

.config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl'
  });
  //$routeProvider.when('/', {redirectTo: '/homepage' });

    //$urlRouterProvider.otherwise("dashboard")
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.html'
            })
            .state('dashboard.editProfile', {
                //url: '/editProfile',
            parent: 'dashboard',
                templateUrl: 'dashboard/editProfile.html'
            })
            .state('dashboard.viewProfile', {
                //url: '/viewProfile',
            parent: 'dashboard',
                templateUrl: 'dashboard/viewProfile.html'
            });
}])
    .controller('dashboardCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {
        console.log('controller initialted..');
}]);
