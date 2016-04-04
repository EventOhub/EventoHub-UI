'use strict';
angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])
.controller('loginCtrl', ['$scope', 'dataFactory', '$location', function ($scope, dataFactory, $location) {
  $scope.login = function(){
    $location.path('dashboard');
  }
}]);
