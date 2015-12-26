(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishlistCtrl',['$scope','$state','WishService','BookmarkService','$ionicLoading',
  function($scope,$state,WishService, BookmarkService, $ionicLoading){
    // console.log('WishlistCtrl called');
    $ionicLoading.show();
    WishService.getMyWishlist()
    .then(function(response) {
      console.log(response);
      $scope.wishes = response.data;
      $ionicLoading.hide();
    })
    .catch(function(err) {
      console.log(err);
      $ionicLoading.hide();
    })

    $scope.gotoWishDetail = function(wish_id) {
      $state.go('app.wish.wish-detail',{ wish_id: wish_id });
    }


  }])
})()
