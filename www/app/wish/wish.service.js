(function() {
  var app = angular.module("optimus.wish");

  app.factory("WishService", function(WishDataService) {

    var _getAll = function() {
      return WishDataService.getAll();
    }

    var _getById = function(wish_id) {
      return WishDataService.getById(wish_id);
    }

    var _toggleWishUpvote = function(wish_id) {
      return WishDataService.toggleWishUpvote(wish_id)
    }

    var _toggleWishDownvote = function(wish_id) {
      return WishDataService.toggleWishDownvote(wish_id)
    }

    return {
      getAll: _getAll,
      getById:_getById,
      toggleWishUpvote: _toggleWishUpvote
      toggleWishDownvote: _toggleWishDownvote,
    }
  })
})()