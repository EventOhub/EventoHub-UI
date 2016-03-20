appModule.factory('dataFactory', ['$http', function($http) {
  var urlBase = 'http://ec2-52-36-42-96.us-west-2.compute.amazonaws.com:9000';
  var dataFactory = {};

  dataFactory.getLocation = function () {
    return $http.get(urlBase + '/geolocation/location');
  };

  return dataFactory;
}]);
