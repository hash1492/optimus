(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishDetailCtrl',['$scope','$stateParams','WishService','BookmarkService','CommentService','$ionicLoading','$ionicPopup',
  function($scope,$stateParams,WishService,BookmarkService,CommentService,$ionicLoading, $ionicPopup){
    // console.log('WishDetailCtrl called');

    var wish_id = $stateParams.wish_id;
    $ionicLoading.show();
    // Get wish by id
    WishService.getById(wish_id)
    .then(function(response) {
      console.log(response);
      $scope.wish = response.data;
      $ionicLoading.hide();
    })
    .catch(function(err) {
      $ionicLoading.hide();
      console.log(err);
    })

    // Toggle wish upvote
    $scope.toggleWishUpvote = function() {
      console.log("toggleWishUpvote called");
      WishService.toggleWishUpvote(wish_id, $scope.wish.upvotes)
      .then(function(response) {
        console.log(response);
        $scope.wish.upvotes = response.data.upvotes;
        $scope.wish.is_upvoted = !$scope.wish.is_upvoted;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // Toggle wish downvote
    $scope.toggleWishDownvote = function() {
      console.log("toggleWishDownvote called");
      WishService.toggleWishDownvote(wish_id, $scope.wish.downvotes)
      .then(function(response) {
        console.log(response);
        $scope.wish.downvotes = response.data.downvotes;
        $scope.wish.is_downvoted = !$scope.wish.is_downvoted;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // Toggle wish bookmark
    $scope.toggleWishBookmark = function() {
      console.log("toggleBookmark called");
      BookmarkService.toggleWishBookmark(wish_id)
      .then(function(response) {
        console.log(response);
        $scope.wish.is_bookmarked = !$scope.wish.is_bookmarked;
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

    $scope.comment = {
      text: ""
    };
    // Add a comment
    $scope.addComment = function() {
      // console.log("addComment called");
      var comment = {};
      comment.wish_id = wish_id;
      comment.comment = $scope.comment.text;
      console.log(comment);
      CommentService.create(comment)
      .then(function(response) {
        console.log(response);
        $scope.comment.text = "";
        $scope.comments.push(response.data);
      })
      .catch(function(err) {
        console.log(err);
      })
    }


    $scope.suggestApp = function () {
      // Suggest an app popup
     var myPopup = $ionicPopup.show({
       template: '<input type="text" ng-model="suggestion.name">',
       title: 'Suggest an app',
       subTitle: "Suggest an app that might fulfill the user's wish",
       scope: $scope,
       buttons: [
         { text: 'Cancel' },
         {
           text: '<b>Suggest</b>',
           type: 'button-positive',
           onTap: function(e) {
             console.log("suggestion made");
           }
         }
       ]
     });

     myPopup.then(function(res) {
       console.log('Tapped!', res);
     });
    }



  }])
})()
