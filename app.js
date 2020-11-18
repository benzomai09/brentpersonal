/*==================================
--------- Brent Random Apps ---------

====================================*/

var app = angular.module("brentApp", []);

app.controller('homeCtrl', function($scope, $http, $timeout) {
    console.log("Yey!");
    $scope.waw = "Hello World!";
});