(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishFeedCtrl',['$scope','WishService',
  function($scope,WishService){
    console.log('WishFeedCtrl called');

    $scope.wishes = [1,2,3,4,5];

    WishService.getAll()
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

    $scope.bookmarkWish = function(wish_id) {
      BookmarkService.toggleBookmark(wish_id)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    $scope.upvoteDownvoteWish = function(wish_id,upvote_downvote) {

      WishService.upvoteDownvoteWish(wish_id, upvote_downvote)
      .then(function(response) {
        console.log(response);
        $scope.wishes = response.data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

  }])
})()
