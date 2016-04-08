'use strict';
angular.module('myApp.error', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/error', {
    templateUrl: 'error/error.html',
    controller: 'errorPageCtrl'
  });
}])
.controller('errorPageCtrl', ['$scope', function (scope) {
        $scope.message = 'Sorry, you are at the wrong page !';
    });