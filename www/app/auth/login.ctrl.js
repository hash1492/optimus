(function(){
  var app = angular.module('optimus.auth');

  app.controller('LoginCtrl',['$scope','AuthService','$state', function($scope,AuthService,$state){
    console.log('LoginCtrl called');

    $scope.user = {};

    $scope.login = function() {
      console.log($scope.user);
      AuthService.login($scope.user)
      .then(function(response) {
        console.log(response);
        $state.go("app.wish.wish-feed");
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // $scope.loginWithFB = function() {
    //   console.log("loginWithFB called");
    //   facebookConnectPlugin.login(["email"], function(response) {
    //     console.log(response);
    //     facebookConnectPlugin.api("me?fields=id,name,picture{url},email,first_name,last_name",["public_profile","email"],function(response) {
    //       console.log(response);
    //       var user = {};
    //       user.name = response.name;
    //       user.email = response.email;
    //
    //       $scope.register(user)
    //
    //     }, function(err) {
    //       console.log(err);
    //     })
    //   },function(err) {
    //     console.log(err);
    //   })
    // }
  }])
})()
