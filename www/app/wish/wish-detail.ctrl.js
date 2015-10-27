(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishDetailCtrl',['$scope','$stateParams','WishService','BookmarkService',
  function($scope,$stateParams,WishService,BookmarkService){
    console.log('WishDetailCtrl called');

    var wish_id = $stateParams.wish_id;

    // Get wish by id
    WishService.getById(wish_id)
    .then(function(response) {
      console.log(response);
      $scope.wish = response.data;
    })
    .catch(function(err) {
      console.log(err);
    })

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
