'use strict';
angular.module('myApp.login', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login', {
    url : '/login',
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
})
.controller('loginCtrl', ['$scope', 'dataFactory', '$location', function ($scope, dataFactory, $location) {
  $scope.login = function(){
    $location.path('dashboard');
  };
}]);
