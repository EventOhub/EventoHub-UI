'use strict';
angular.module('myApp.dashboard', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
    abstract: true,
    url : '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl'
  }).state('dashboard.view', {
  url : '',
  templateUrl: 'dashboard/viewProfile.html'
});
})
    .controller('dashboardCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {
        console.log('controller initialted..');
}]);
