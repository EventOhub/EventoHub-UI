'use strict';
appModule.directive('header', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "header/header.html",
    controller: ['$scope', '$filter','$location', function ($scope, $filter, $location) {
      var headerOptions, brandName, loginAction, contactUsAction, joinUsAction, execute;
      headerOptions  = [{displayName: 'Login', action: 'loginAction', path:'dashboard'},
      {displayName: 'Contact us', action: 'contactUsAction'},
      {displayName: 'Join us',  action: 'joinUsAction'}];
      brandName = 'EventoHub';
      $scope.headerOptions = headerOptions;
      $scope.brandName = brandName;
    }]
  }
});
