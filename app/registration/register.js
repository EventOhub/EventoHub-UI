'use strict';
var resisterModule = angular.module('myApp.register', ['ui.router']);
resisterModule.config(function ($stateProvider, $urlRouterProvider) {
   $stateProvider.state('register', {
        url : '/register' ,
        templateUrl: 'registration/register.html',
        controller: 'registerCtrl'
    });
});

//Controller
resisterModule.controller('registerCtrl', ['$scope', 'dataFactory', function (scope, dataFactory) {
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
    scope.checkUsername = function (){
        scope.unAvailabilityMsg = '';
        var requestBody = {username: scope.user.username};
        dataFactory.checkUserName(requestBody)
        .success(function (response){
            scope.unAvailable = true;
            if(response.json.userNameAvailable === 0){
                scope.unAvailabilityMsg = 'User name is available.';
            }else if(response.json.userNameAvailable === 1){
                scope.unAvailabilityMsg = 'User name is already taken. Please chose another user name.';
            }
        }).error(function (error) {
            scope.unAvailable = false;
        });
    };

}]);
