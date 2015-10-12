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

    var _upvoteDownvoteWish = function(wish_id, upvote_downvote) {
      var url = "/wish/upvoteDownvote/" + wish_id + "/" + upvote_downvote;
      return BaseDataService.http_get(url);
    }
    return {
      getAll: _getAll,
      getById: _getById
    }
  })
})()
