(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishDetailCtrl',['$scope','$stateParams','WishService','BookmarkService','CommentService',
  function($scope,$stateParams,WishService,BookmarkService,CommentService){
    // console.log('WishDetailCtrl called');

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
        $scope.wish.upvotes = response.data.upvote_count;
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
        $scope.wish.downvotes = response.data.downvote_count;
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

    // Gell all comments
    var getAllComments = function() {
      console.log("getAllComments called");
      CommentService.getAll(wish_id)
      .then(function(response) {
        console.log(response);
        $scope.comments = response.data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }();

    $scope.comment = "";
    // Add a comment
    $scope.addComment = function() {
      // console.log("addComment called");
      var comment = {};
      comment.wish_id = wish_id;
      comment.comment = $scope.comment;
      console.log(comment);
      CommentService.create(comment)
      .then(function(response) {
        console.log(response);
        $scope.comment = "";
        $scope.comments.push(response.data);
      })
      .catch(function(err) {
        console.log(err);
      })
    }



  }])
})()
