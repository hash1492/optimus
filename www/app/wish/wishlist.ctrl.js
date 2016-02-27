(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishlistCtrl',['$scope','$state','WishService','BookmarkService','$ionicLoading',
  function($scope,$state,WishService, BookmarkService, $ionicLoading){
    // console.log('WishlistCtrl called');
    var page_number = 0;
    $scope.wishes = [];

    $scope.getWishes = function() {
      $scope.fetching_wishes = true;
      $ionicLoading.show();
      WishService.getMyWishlist(page_number)
      .then(function(response) {
        console.log(response);
        if(response.data.length < 10){
          $scope.wishes_fetched = true;
        }
        $scope.wishes = response.data;
        page_number++;
        $scope.fetching_wishes = false;
        $ionicLoading.hide();
      })
      .catch(function(err) {
        console.log(err);
        $ionicLoading.hide();
      })
    }
    $scope.getWishes();



    $scope.gotoWishDetail = function(wish_id) {
      $state.go('app.wish.wish-detail',{ wish_id: wish_id });
    }


  }])
})()
