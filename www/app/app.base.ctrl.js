(function(){
  var app = angular.module('optimus')

  app.controller('AppBaseCtrl',['$scope','$rootScope','$state','StorageService',
   function($scope,$rootScope,$state,StorageService){
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

    $rootScope.gotoMakeWish = function() {
      $state.go("app.wish.make-wish");
    }

    $rootScope.gotoWishFeed = function() {
      $state.go("app.wish.wish-feed");
    }

    $rootScope.logout = function() {
      StorageService.delete("optimus_session");
      $state.go("app.auth.login");
    }


  }])
})()
