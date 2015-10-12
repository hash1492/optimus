(function() {
  var app = angular.module("optimus.bookmark");

  app.factory("BookmarkDataService", function(BaseDataService) {

    var _toggleBookmark = function(wish_id) {
      var url = "/bookmark/toggleBookmark/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _getAll = function(user) {
      var url = "/bookmark/getAll";
      return BaseDataService.http_get(url);
    }

    return {
      toggleBookmark: _toggleBookmark,
      getAll: _getAll
    }
  })
})()
