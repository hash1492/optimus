(function(){
  var app = angular.module('optimus.auth');

  app.controller('RegisterCtrl',['$scope', function($scope){
    console.log('RegisterCtrl called');

    $scope.user = {};

    $scope.show_password = false;

    $scope.input_type = "password";

    $scope.showHidePassword = function() {
      if($scope.show_password){
        $scope.input_type = "text";
      }
      else{
        $scope.input_type = "password";
      }
    }

    $scope.register = function() {
      console.log($scope.user);
    }

    $scope.loginWithFB = function() {
      console.log("loginWithFB called");
    }
  }])
})()
