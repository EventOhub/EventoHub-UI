'use strict';
angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'homepageCtrl'
  });
}])
.controller('homepageCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {
  var location = [];
  var services = ['Band - Alternative Rock', 'Band - Pop', 'Band - Punk'];

  getLocation();

    function getLocation() {
        dataFactory.getLocation()
            .success(function (loc) {
                location = loc.json;
                console.log(JSON.stringify(location));
            })
            .error(function (error) {
                console.log('error ----');
            });
    }

  // location autocomplete functionality -- start
  scope.location = location;
  scope.selectedLocation = "";
  scope.autocompleteLocationList = [];
  scope.showLocationList = false;
  scope.onChangeLocationFunc = function(selectedLocation){
    scope.showLocationList = true;
    scope.autocompleteLocationList = [];
    if(selectedLocation !== ''){
      $.each(location,function(key,val){
        if(val.value.toUpperCase().indexOf(selectedLocation.toUpperCase()) != -1){
          scope.autocompleteLocationList.push(val);
        }
      });
    }
  };
  scope.setLocation = function(location){
    scope.selectedLocation = location.value ;
    scope.showLocationList = false;
  };

// location autocomplete functionality -- end

// services autocomplete functionality -- start

scope.services = services;
scope.selectedService = "";
scope.autocompleteServiceList = [];
scope.showServiceList = false;
scope.onChangeServiceFunc = function(selectedService){
  scope.showServiceList = true;
  scope.autocompleteServiceList = [];
  if(selectedService !== ''){
    $.each(services,function(key,val){
      if(val.toUpperCase().indexOf(selectedService.toUpperCase()) != -1){
        scope.autocompleteServiceList.push(val);
      }
    });
  }
};
scope.setService = function(service){
  scope.selectedService = service ;
  scope.showServiceList = false;
};

// services autocomplete functionality -- end
  // to make the material_select render -- overriding the default browser select
  scope.initializeSelect = function () {
    $('select').material_select();
    $(".button-collapse").sideNav();

  };
  // Below the initialization of materialize is done, as its overriding the default behaviour of select.
  //the below code needs to be added to the successcallback of the service
  setTimeout(function () {
    scope.initializeSelect();
  }, 100);

}]);
