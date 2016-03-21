'use strict';
appModule.directive('autocomplete', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "common/autocomplete/autocomplete.html",
    scope: {
      datasource: '=',
      identifier: '=',
      label: '='
    },
    controller: ['$scope', '$filter', function ($scope, $filter) {
      $scope.selectedItem = "";
      $scope.autocompleteItemList = [];
      $scope.showItemList = false;
      $scope.onChangeFunc = function(selectedItem){
        $scope.showItemList = true;
        $scope.autocompleteItemList = [];
        if(selectedItem !== ''){
          $.each($scope.datasource,function(key,val){
            if(val.value.toUpperCase().indexOf(selectedItem.toUpperCase()) != -1){
              $scope.autocompleteItemList.push(val);
            }
          });
        }
      };
      $scope.setItem = function(val){
        $scope.selectedItem = val.value ;
        $scope.showItemList = false;
      };
    }]
  }
});
