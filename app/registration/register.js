'use strict';
var resisterModule = angular.module('myApp.register', []);
resisterModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'registration/register.html',
        controller: 'registerCtrl'
    });
}])

resisterModule.controller('registerCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {
    //$scope.signUp = true;
    scope.user = {
        username: '',
        userType: 'vendor',
        emailId: '',
        countryCode: '+91',
        phoneNumber: '',
        password: '',
        name:''
    };
    scope.signUpAction = function () {
        //console.log(scope.user);

        dataFactory.signup(scope.user)
            .success(function (response) {
                console.log('success' + response.json.insertId);
            })
            .error(function (error) {
                console.log('error : ' + error);
            });
        //$scope.signUp = false;
    };

}]);
