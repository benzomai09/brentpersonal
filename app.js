/*==================================
--------- Brent Random Apps ---------

====================================*/

var app = angular.Module("brentApp", []);

app.controller('homeCtrl', function($scope, $http, $timeout) {
    console.log("Yey!");
    $scope.waw = "Hello World!";
});