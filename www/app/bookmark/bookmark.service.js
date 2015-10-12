(function() {
  var app = angular.module("optimus.bookmark");

  app.factory("BookmarkService", function(WishDataService) {

    var _toggleBookmark = function(wish_id) {
      return BookmarkDataService.toggleBookmark(wish_id);
    }

    return {
      toggleBookmark: _toggleBookmark
    }
  })
})()
