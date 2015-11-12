(function() {
  var app = angular.module("optimus.wish");

  app.factory("WishDataService", function(BaseDataService) {

    var _create = function(wish) {
      var url = "/wish/create";
      return BaseDataService.http_post(url, wish);
    }

    var _getAll = function(user) {
      var url = "/wish/getAll";
      return BaseDataService.http_get(url);
    }

    var _getById = function(wish_id) {
      var url = "/wish/getById/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _toggleWishUpvote = function(wish_id) {
      var url = "/upvote/toggleWishUpvote/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _toggleWishDownvote = function(wish_id, upvote_downvote) {
      var url = "/downvote/toggleWishDownvote/" + wish_id;
      return BaseDataService.http_get(url);
    }

    return {
      create: _create,
      getAll: _getAll,
      getById: _getById,
      toggleWishUpvote: _toggleWishUpvote,
      toggleWishDownvote: _toggleWishDownvote,
    }
  })
})()
