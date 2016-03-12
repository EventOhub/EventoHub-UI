'use strict';
angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'homepageCtrl'
  });
}])
.controller('homepageCtrl', ['$scope', function (scope) {
  var states = ['Rajasthan', 'Maharashtra', 'UP', 'Punjab'];
  var services = ['Band - Alternative Rock', 'Band - Pop', 'Band - Punk'];

  // state autocomplete functionality -- start
  scope.states = states;
  scope.selectedState = "";
  scope.autocompleteStateList = [];
  scope.showStateList = false;
  scope.onChangeStateFunc = function(selectedState){
    scope.showStateList = true;
    scope.autocompleteStateList = [];
    if(selectedState !== ''){
      $.each(states,function(key,val){
        if(val.toUpperCase().indexOf(selectedState.toUpperCase()) != -1){
          scope.autocompleteStateList.push(val);
        }
      });
    }
  };
  scope.setState = function(state){
    scope.selectedState = state ;
    scope.showStateList = false;
  };

// state autocomplete functionality -- end

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
}]);
