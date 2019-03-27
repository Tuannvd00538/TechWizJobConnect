var app = angular.module("JOBB", []);

app.controller('HandleAuthorization', function ($scope, $window, $timeout) {

    var userLogin = JSON.parse(localStorage.getItem('isLogin'));

    if (userLogin != null) {
        $window.location.href = '/';
    }

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

    $scope.SIGNUP = 'http://amz.comcobinh.com/api/v1/auth/register';
    $scope.LOGIN = 'http://amz.comcobinh.com/api/v1/auth/signin';

    $scope.handleSign = function () {
        $.ajax({
            url: $scope.SIGNUP,
            type: "POST",
            data: $scope.userSignupData,
            success: function (response) {
                $scope.userLoginData = {
                    "email": $scope.SIGNUP.email,
                    "password": $scope.SIGNUP.password
                };
                swal("Thành công!", "Tạo tài khoản thành công, vui lòng đăng nhập!", "success");
                $window.location.href = '/login.html';
            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("Lỗi!", "Có lỗi xảy ra, vui lòng thử lại sau!", "error");
            }
        });
    };

    $scope.handleLogin = function () {
        $.ajax({
            url: $scope.LOGIN,
            type: "POST",
            data: $scope.userLoginData,
            success: function (response) {
                localStorage.setItem('isLogin', JSON.stringify(response));
                $window.location.href = '/';
            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("Lỗi!", "Tài khoản hoặc mật khẩu không chính xác!", "error");
            }
        });
    }
});