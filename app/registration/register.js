'use strict';
var resisterModule = angular.module('myApp.register', []);

resisterModule.controller('registerCtrl', function($scope) {
  $scope.signUp = true;
  $scope.user = {username: '',userType: 'vendor',emailId: '', countryCode: '+91', mobileNo: '', password: ''};
  $scope.signUpAction = function(){
      console.log($scope.user);
      $scope.signUp = false;
  }; 
  
});