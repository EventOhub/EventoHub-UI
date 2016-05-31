appModule.factory('dataFactory', ['$http', function($http) {
  var urlBase = 'http://ec2-52-36-42-96.us-west-2.compute.amazonaws.com:9000';
//var urlBase = 'http://localhost:8085';
  var dataFactory = {};

  dataFactory.getLocation = function () {
    return $http.get(urlBase + '/geolocation/location');
  };
  dataFactory.getServices = function () {
    return $http.get(urlBase + '/services/getServices');
  };

  dataFactory.signup = function (requestBody) {
    return $http.post(urlBase + '/user/signup', requestBody);
  };

  dataFactory.verifyOtp = function (requestBody) {
    return $http.post(urlBase + '/user/verifyOtp', requestBody);
  };

  dataFactory.checkUserName = function (requestBody) {
    return $http.post(urlBase + '/user/checkUserName', requestBody);
  };

  dataFactory.checkUserDetails = function (requestBody) {
    return $http.post(urlBase + '/user/checkUser', requestBody);
  };

  return dataFactory;
}]);
