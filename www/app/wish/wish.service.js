(function() {
  var app = angular.module("optimus.wish");

  app.factory("WishService", function(WishDataService) {

    var _getAll = function() {
      return WishDataService.getAll();
    }

    var _getById = function(wish_id) {
      return WishDataService.getById();
    }

    var _upvoteDownvoteWish = function(wish_id, upvote_downvote) {
      return WishDataService.upvoteDownvoteWish(wish_id, upvote_downvote)
    }

    return {
      getAll: _getAll,
      getById:_getById,
      upvoteDownvoteWish: _upvoteDownvoteWish
    }
  })
})()
