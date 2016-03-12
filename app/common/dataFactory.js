angular.module('customersApp')
.factory('dataFactory', ['$http', function($http) {

  var urlBase = '/api/customers';
  var dataFactory = {};

  dataFactory.getCustomers = function () {
    return $http.get(urlBase);
  };

  return dataFactory;
}]);
