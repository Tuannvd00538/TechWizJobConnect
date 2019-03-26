var app = angular.module("JOBB", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html'
        })
        .when('/detail', {
            templateUrl: 'pages/detail.html'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html'
        })
        .when('/alljob', {
            templateUrl: 'pages/alljob.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

function onLoadPage() {
    $(".page_loader").fadeIn("fast");
    $("#page_scroller").click();
    setTimeout(function () {
        $(".page_loader").fadeOut("fast");
    }, 500);
}

// app.controller('FormSignUp', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
//     $scope.userSignupData = {
//         "name": "",
//         "email": "",
//         "password": "",
//         "password_confirmation": ""
//     };

//     $scope.userLoginData = {
//         "email": "",
//         "password": ""
//     };

//     $scope.handleSign = function () {
//         console.log($scope.userSignupData);
//         // $http({
//         //     method: 'POST',
//         //     url: 'https://youtube-api-challenger.appspot.com/members',
//         //     data: $scope.userSignupData
//         // })
//         //     .then(function mySuccess(response) {
//         //         $scope.alertSuccess = true;
//         //         $scope.alertError = false;
//         //         $timeout(window.location.href = 'index.html', 2000);
//         //     },
//         //         function myError(response) {
//         //             $scope.alertError = true;
//         //             $scope.alertSuccess = false;
//         //         })
//     };

//     $scope.handleLogin = function () {
//         console.log($scope.userLoginData);
//         // var name = angular.element($('#name')).val();
//         // $http({
//         //     method : "POST",
//         //     url : "https://youtube-api-challenger.appspot.com/authentication",
//         //     data: JSON.stringify($scope.loginData)
//         // }).then(function mySuccess(response) {
//         //     localStorage.setItem("secretToken", response.data.data.attributes.secretToken);
//         //     localStorage.setItem("name", name);
//         //     $scope.loggedInUsername = name;
//         //     $scope.isLoggedIn = true;
//         //     $location.path("/");
//         // }, function myError(response) {
//         //     console.log(response.statusText);
//         //     $scope.isLoggedIn = false;
//         // });
//     }
// });

app.controller('JobbController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {

});

app.controller('DetailController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage();
});

app.controller('ContactController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage();
});

app.controller('AllJob', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage();
});