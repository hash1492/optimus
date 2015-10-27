(function() {
  var app = angular.module("optimus.wish");

  app.factory("WishDataService", function(BaseDataService) {

    var _getAll = function(user) {
      var url = "/wish/getAll";
      return BaseDataService.http_get(url);
    }

    var _getById = function(wish_id) {
      var url = "/wish/getById/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _toggleWishUpvote = function(wish_id) {
      var url = "/wish/toggleWishUpvote/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _toggleWishDownvote = function(wish_id, upvote_downvote) {
      var url = "/wish/toggleWishDownvote/" + wish_id;
      return BaseDataService.http_get(url);
    }

    return {
      getAll: _getAll,
      getById: _getById,
      toggleWishUpvote: _toggleWishUpvote
      toggleWishDownvote: _toggleWishDownvote,
    }
  })
})()
