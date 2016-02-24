'use strict';
angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/homepage', {
            templateUrl: 'homepage/homepage.html',
            controller: 'homepageCtrl'
        });
}])
    .controller('homepageCtrl', ['$scope', function (scope) {
        var states = ['Rajasthan', 'Maharashtra', 'UP'];
        scope.states = states;


        // to make the material_select render -- overriding the default browser select
        scope.initializeSelect = function () {
            $('select').material_select();
            $(".button-collapse").sideNav();

        };

        // Below the initialization of materialize is done, as its overriding the default behaviour of select.
        //the below code needs to be added to the successcallback of the service    
        setTimeout(function () {
            scope.initializeSelect();
        }, 100);

}]);