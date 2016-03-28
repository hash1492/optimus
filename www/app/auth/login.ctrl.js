(function(){
  var app = angular.module('optimus.auth');

  app.controller('LoginCtrl',['$scope','AuthService','$state','StorageService','$ionicHistory',
  function($scope,AuthService,$state,StorageService,$ionicHistory){
    console.log('LoginCtrl called');
    $ionicHistory.clearHistory();

    $scope.user = {
      email: "hash_1492@yahoo.com",
      password: "123456"
    };

    $scope.login = function() {
      console.log($scope.user);
      AuthService.login($scope.user)
      .then(function(response) {
        console.log(response);
        // Set the token info in localstorage
        StorageService.set("optimus_session",JSON.stringify(response.data));
        $state.go("app.wish.wish-feed");
      }, function(err) {
        console.log(err);
        if(err.data === "INCORRECT_PASSWORD"){
          alert("Incorrect Password");
        }
        if(err.data === "INCORRECT_EMAIL"){
          alert("User doesn't exist");
        }
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

    $scope.gotoRegister = function() {
      $state.go("app.auth.register");
    }
  }])
})()
