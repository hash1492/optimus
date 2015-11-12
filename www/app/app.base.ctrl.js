(function(){
  var app = angular.module('optimus')

  app.controller('AppBaseCtrl',['$scope','$rootScope','$state',
   function($scope,$rootScope,$state){
    // console.log("AppBaseCtrl called");

    $rootScope.gotoProfile = function() {
      $state.go("app.wish.wishlist");
    }

    $rootScope.gotoWishlist = function() {
      $state.go("app.wish.wishlist");
    }

    $rootScope.gotoBookmarks = function() {
      $state.go("app.bookmark.bookmarks");
    }

    $rootScope.gotoLogin = function() {
      $state.go("app.auth.login");
    }

  }])
})()
