var app = angular.module("JobConnect", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller("myCtrl", function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});