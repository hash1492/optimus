(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishFeedCtrl',['$scope','$state','WishService','BookmarkService','$ionicLoading',
  function($scope,$state,WishService, BookmarkService,$ionicLoading){
    // console.log('WishFeedCtrl called');
    $ionicLoading.show();
    WishService.getAll()
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

    // Toggle wish upvote
    $scope.toggleWishUpvote = function(wish) {
      console.log("toggleWishUpvote called");
      WishService.toggleWishUpvote(wish.id,wish.upvotes)
      .then(function(response) {
        console.log(response);
        wish.upvotes = response.data.upvotes;
        wish.is_upvoted = !wish.is_upvoted
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // Toggle wish downvote
    $scope.toggleWishDownvote = function(wish) {
      console.log("toggleWishDownvote called");

      WishService.toggleWishDownvote(wish.id,wish.downvotes)
      .then(function(response) {
        console.log(response);
        wish.downvotes = response.data.downvotes;
        wish.is_downvoted = !wish.is_downvoted;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // Toggle wish bookmark
    $scope.toggleWishBookmark = function(wish) {
      console.log("toggleBookmark called");
      BookmarkService.toggleWishBookmark(wish.id)
      .then(function(response) {
        console.log(response);
        wish.is_bookmarked = !wish.is_bookmarked;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

  }])
})()
