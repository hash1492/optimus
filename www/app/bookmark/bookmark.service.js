(function() {
  var app = angular.module("optimus.bookmark");

  app.factory("BookmarkService", function(BookmarkDataService) {

    var _toggleWishBookmark = function(wish_id) {
      return BookmarkDataService.toggleWishBookmark(wish_id);
    }

    var _getAll = function() {
      return BookmarkDataService.getAll();
    }

    return {
      toggleWishBookmark: _toggleWishBookmark,
      getAll: _getAll
    }
  })
})()
