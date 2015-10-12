(function(){
  var app = angular.module('optimus.auth');

  app.controller('RegisterCtrl',['$scope','AuthService', function($scope,AuthService){
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

    $scope.register = function(user) {
      console.log(user);
      AuthService.register(user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    $scope.loginWithFB = function() {
      console.log("loginWithFB called");
      facebookConnectPlugin.login(["email"], function(response) {
        console.log(response);
        facebookConnectPlugin.api("me?fields=id,name,picture{url},email,first_name,last_name",["public_profile","email"],function(response) {
          console.log(response);
          var user = {};
          user.name = response.name;
          user.email = response.email;

          $scope.register(user)

        }, function(err) {
          console.log(err);
        })
      },function(err) {
        console.log(err);
      })
    }
  }])
})()
