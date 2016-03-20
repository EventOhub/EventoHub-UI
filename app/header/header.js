'use strict';
appModule.directive('header', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "header/header.html",
    controller: ['$scope', '$filter','$location', function ($scope, $filter, $location) {
      var headerOptions, brandName, loginAction, contactUsAction, joinUsAction, execute;
      headerOptions  = [{displayName: 'Login', action: 'loginAction'},
                        {displayName: 'Contact us', action: 'contactUsAction'},
                        {displayName: 'Join us',  action: 'joinUsAction'}];
      brandName = 'EventoHub';
      $scope.headerOptions = headerOptions;
      $scope.brandName = brandName;

      $scope.execute = function(action) {
          $scope[action]();
      };
      $scope.loginAction = function(){
          $location.path("/dashboard");
          console.log($location.path());
      };
      $scope.contactUsAction = function(){
          console.log('Contact Us');
      };
      $scope.joinUsAction = function(){
          $('#registrationModal').openModal();
      };

    }]
  }
});
