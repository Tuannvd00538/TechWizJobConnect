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

    $scope.dataSearchHome = {
        location: ''
    }

    var location = JSON.parse(localStorage.getItem('location'));

    if (location != null) {
        $scope.locations = location;
    } else {
        $http.get("http://amz.comcobinh.com/api/v1/locations")
            .then(function (response) {
                localStorage.setItem('location', JSON.stringify(response.data));
                $scope.locations = response.data;
            });
    }

    $scope.getTimeFormat = function(time) {

        var dArr = time.split('-'),
            d = dArr[2].split(' ');
        var strDate = dArr[1] + '/' + d[0] + '/' + dArr[0] + ' ' + d[1];
        var datum = Date.parse(strDate);
        return datum/1000;
    };

    $http.get("http://amz.comcobinh.com/api/v1/job?count=5")
        .then((response) => {
            $scope.jobs = response.data.jobs;
        });
});

app.controller('DetailController', function ($scope, $http, $window, $sce, $location, $rootScope, $timeout) {
    onLoadPage($scope, $rootScope);

    var paramValue = $location.search().id;

    $scope.getTimeFormat = function(time) {

        var dArr = time.split('-'),
            d = dArr[2].split(' ');
        var strDate = dArr[1] + '/' + d[0] + '/' + dArr[0] + ' ' + d[1];
        var datum = Date.parse(strDate);
        return datum/1000;
    };

    if (paramValue != undefined || paramValue != null) {

        $scope.keyword = "";

        $http.get("http://amz.comcobinh.com/api/v1/job/" + paramValue)
            .then((response) => {
                $scope.jobs = response.data;
                $scope.keyword = response.data.keyword.split(", ");

                $http.get("http://amz.comcobinh.com/api/v1/job?search=" + $scope.keyword[0] + "&count=3")
                    .then((response) => {
                        $scope.related = response.data.jobs;
                    });
            });
    } else {
        $window.location.href = "/";
    }
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