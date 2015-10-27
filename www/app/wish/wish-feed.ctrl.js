(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishFeedCtrl',['$scope','$state','WishService','BookmarkService',
  function($scope,$state,WishService, BookmarkService){
    console.log('WishFeedCtrl called');

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

    // Toggle wish upvote
    $scope.toggleWishUpvote = function() {
      console.log("toggleWishUpvote called");
      WishService.toggleWishUpvote(wish_id)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // Toggle wish downvote
    $scope.toggleWishDownvote = function() {
      console.log("toggleWishDownvote called");
      WishService.toggleWishDownvote(wish_id)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // Toggle wish bookmark
    $scope.toggleWishBookmark = function() {
      console.log("toggleBookmark called");
      BookmarkService.toggleBookmark(wish_id)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

  }])
})()
