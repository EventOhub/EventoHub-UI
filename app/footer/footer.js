'use strict';
appModule.directive('footer', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "footer/footer.html",
    controller: ['$scope', '$filter', function ($scope, $filter) {
      var websiteDesc , websiteGenre, footerOptions, copyrights;
      websiteDesc  = 'EventoHub is a platform for artists.';
      websiteGenre = 'musicians, photographers, wsdding planners etc.';
      footerOptions = ['About us', 'Find us on social sites'];
      copyrights = '2016 Copyright EventoHub.com';
      $scope.websiteDesc = websiteDesc;
      $scope.websiteGenre = websiteGenre;
      $scope.footerOptions = footerOptions;
      $scope.copyrights = copyrights;
    }]
  }
});
