(function() {
  var app = angular.module("optimus.bookmark");

  app.factory("BookmarkDataService", function(BaseDataService) {

    var _toggleWishBookmark = function(wish_id) {
      var url = "/bookmark/toggleWishBookmark/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _getAll = function() {
      var url = "/bookmark/getAll";
      return BaseDataService.http_get(url);
    }

    return {
      toggleWishBookmark: _toggleWishBookmark,
      getAll: _getAll
    }
  })
})()
