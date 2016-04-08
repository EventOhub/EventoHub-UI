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
    scope.isAgree = false;
    scope.userId = '';
    scope.signUpAction = function () {
        console.log(scope.user);
        console.log(scope.isAgree);
        if(scope.isAgree)
        {
            $(".loaderOverlay").show();
            dataFactory.signup(scope.user)
            .success(function (response) {
                scope.userId = response.json.insertId;
                console.log('Insert ID: ' + response.json.insertId);
                $("#registration").hide();
                $("#verification").show();
                $(".loaderOverlay").hide();
            })
            .error(function (error) {
                console.log('error : ' + error);
            });
        }else{
            //Show error in UI
        }
        
        //$scope.signUp = false;
    };
    
    //OTP verification
    scope.otp = '';
    scope.otpVerified = false;
    scope.otpVerificationMsg = '';
    scope.verifyOTP = function (){
        var requestBody = {authToken: scope.otp, userId: scope.userId };
        dataFactory.verifyOtp(requestBody)
        .success(function (response){
            scope.otpVerified = true;
            scope.otpVerificationMsg = response.json;
            console.log(response);
        }).error(function (error) {
                scope.otpVerified = false;
                scope.otpVerificationMsg = response.err;
            });
    };
    
    //Username availability check
    scope.unAvailable = false;
    scope.msg = '';
    scope.checkUsername = function (){
        dataFactory.checkUserName(scope.user.username)
        .success(function (response){
            //TODO
            //console.log(response);
        }).error(function (error) {
            //TODO
            //console.log('error : ' + error);
        });
    };

}]);
