(function() {
  var app = angular.module("optimus.wish");

  app.factory("WishDataService", function(BaseDataService) {

    var _create = function(wish) {
      var url = "/wish/create";
      return BaseDataService.http_post(url, wish);
    }

    var _getAll = function(page_number) {
      var url = "/wish/getAll/" + page_number;
      return BaseDataService.http_get(url);
    }

    var _getById = function(wish_id) {
      var url = "/wish/getById/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _getMyWishlist = function(page_number) {
      var url = "/wish/getMyWishlist/" + page_number;
      return BaseDataService.http_get(url);
    }

    var _toggleWishUpvote = function(wish_id,wish_upvotes) {
      var url = "/upvote/toggleWishUpvote/" + wish_id + "/" + wish_upvotes;
      return BaseDataService.http_get(url);
    }

    var _toggleWishDownvote = function(wish_id, wish_downvotes) {
      var url = "/downvote/toggleWishDownvote/" + wish_id + "/" + wish_downvotes;
      return BaseDataService.http_get(url);
    }

    return {
      create: _create,
      getAll: _getAll,
      getById: _getById,
      getMyWishlist: _getMyWishlist,
      toggleWishUpvote: _toggleWishUpvote,
      toggleWishDownvote: _toggleWishDownvote
    }
  })
})()
