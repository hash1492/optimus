(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishlistCtrl',['$scope','$state','WishService','BookmarkService',
  function($scope,$state,WishService, BookmarkService){
    // console.log('WishlistCtrl called');

    WishService.getMyWishlist()
    .then(function(response) {
      console.log(response);
      $scope.wishes = response.data;
    })
    .catch(function(err) {
      console.log(err);
    })

    $scope.gotoWishDetail = function(wish_id) {
      $state.go('app.wish.wish-detail',{ wish_id: wish_id });
    }


  }])
})()
