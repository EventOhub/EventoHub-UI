'use strict';
angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'homepageCtrl'
  });
  $routeProvider.when('/', {redirectTo: '/homepage' });
}])
.controller('homepageCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {

  getLocation();
  getServices();

  function getLocation() {
    dataFactory.getLocation()
    .success(function (loc) {
      scope.location = loc.json;
    })
    .error(function (error) {
      console.log('error : '+error);
    });
  }

  scope.localeId = "locale";
  scope.localeLabel = "Select a location"


  function getServices() {
    dataFactory.getServices()
    .success(function (ser) {
      scope.services = ser.json;
    })
    .error(function (error) {
      console.log('error : '+error);
    });
  }


  scope.serviceId = "service";
  scope.serviceLabel = "Select a service"

  $(".button-collapse").sideNav();

}]);
