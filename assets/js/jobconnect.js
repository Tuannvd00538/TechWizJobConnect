var app = angular.module("JobConnect", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html'
        })
        .when('/signup', {
            templateUrl: 'pages/signup.html'
        })
        .when('/login', {
            templateUrl: 'pages/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('FormSignUp', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    $scope.userSignupData = {
        "name": "",
        "email": "",
        "password": "",
        "password_confirmation": ""
    };

    $scope.userLoginData = {
        "email": "",
        "password": ""
    };

    $scope.handleSign = function () {
        console.log($scope.userSignupData);
        // $http({
        //     method: 'POST',
        //     url: 'https://youtube-api-challenger.appspot.com/members',
        //     data: $scope.userSignupData
        // })
        //     .then(function mySuccess(response) {
        //         $scope.alertSuccess = true;
        //         $scope.alertError = false;
        //         $timeout(window.location.href = 'index.html', 2000);
        //     },
        //         function myError(response) {
        //             $scope.alertError = true;
        //             $scope.alertSuccess = false;
        //         })
    };

    $scope.handleLogin = function () {
        console.log($scope.userLoginData);
        // var name = angular.element($('#name')).val();
        // $http({
        //     method : "POST",
        //     url : "https://youtube-api-challenger.appspot.com/authentication",
        //     data: JSON.stringify($scope.loginData)
        // }).then(function mySuccess(response) {
        //     localStorage.setItem("secretToken", response.data.data.attributes.secretToken);
        //     localStorage.setItem("name", name);
        //     $scope.loggedInUsername = name;
        //     $scope.isLoggedIn = true;
        //     $location.path("/");
        // }, function myError(response) {
        //     console.log(response.statusText);
        //     $scope.isLoggedIn = false;
        // });
    }
});

app.controller('HomeController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {

});