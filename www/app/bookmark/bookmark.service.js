(function() {
  var app = angular.module("optimus.bookmark");

  app.factory("BookmarkService", function(WishDataService) {

    var _toggleWishBookmark = function(wish_id) {
      return BookmarkDataService.toggleWishBookmark(wish_id);
    }

    return {
      toggleWishBookmark: _toggleWishBookmark
    }
  })
})()
