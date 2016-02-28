'use strict';
appModule.directive('header', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "header/header.html",
    controller: ['$scope', '$filter', function ($scope, $filter) {
      var headerOptions, brandName,
      headerOptions  = ['Login','Contact us','Join us'];
      brandName = 'EventoHub';
      $scope.headerOptions = headerOptions;
      $scope.brandName = brandName;
    }]
  }
});
