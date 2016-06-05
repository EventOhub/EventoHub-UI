'use strict';
angular.module('myApp.dashboard', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
    url : '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl'
  });
})
    .controller('dashboardCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {
        console.log('controller initialted..');
}]);
