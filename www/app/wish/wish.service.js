(function() {
  var app = angular.module("optimus.wish");

  app.factory("WishService", function(WishDataService) {

    var _create = function(wish) {
      return WishDataService.create(wish);
    }

    var _getAll = function() {
      return WishDataService.getAll();
    }

    var _getById = function(wish_id) {
      return WishDataService.getById(wish_id);
    }

    var _getMyWishlist = function() {
      return WishDataService.getMyWishlist();
    }

    var _toggleWishUpvote = function(wish_id,wish_upvotes) {
      return WishDataService.toggleWishUpvote(wish_id,wish_upvotes)
    }

    var _toggleWishDownvote = function(wish_id,wish_downvotes) {
      return WishDataService.toggleWishDownvote(wish_id,wish_downvotes)
    }

    return {
      create: _create,
      getAll: _getAll,
      getById:_getById,
      getMyWishlist: _getMyWishlist,
      toggleWishUpvote: _toggleWishUpvote,
      toggleWishDownvote: _toggleWishDownvote
    }
  })
})()
