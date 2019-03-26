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
        .when('/term', {
            templateUrl: 'pages/term.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

function onLoadPage($scope, $rootScope) {
    $(".page_loader").fadeIn("fast");
    $("#page_scroller").click();
    setTimeout(function () {
        $(".page_loader").fadeOut("fast");
    }, 500);
    var userLogin = JSON.parse(localStorage.getItem('isLogin'));

    $rootScope.isLogin = false;

    if (userLogin != null) {
        $rootScope.isLogin = true;
        $rootScope.nameIsLogin = userLogin.user.name;
    }
}

app.controller('JobbController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage($scope, $rootScope);
});

app.controller('DetailController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage($scope, $rootScope);
});

app.controller('ContactController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage($scope, $rootScope);
});

app.controller('AllJob', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage($scope, $rootScope);
});

app.controller('TermController', function ($scope, $http, $document, $sce, $location, $rootScope, $timeout) {
    onLoadPage($scope, $rootScope);
});