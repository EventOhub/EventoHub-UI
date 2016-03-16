appModule.factory('dataFactory', ['$http', function($http) {
$http.defaults.useXDomain = true;
  var urlBase = 'http://ec2-52-36-42-96.us-west-2.compute.amazonaws.com:9000';
  var dataFactory = {};

  dataFactory.getLocation = function (id) {
    return $http.get(urlBase + '/geolocation/states/'+id);
  };

  return dataFactory;
}]);
