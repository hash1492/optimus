(function() {
  var app = angular.module("optimus.category");

  app.factory("CommentService", function(CommentDataService) {

    var _getAll = function(wish_id) {
      return CommentDataService.getAll(wish_id);
    }

    var _create = function(comment) {
      return CommentDataService.create(comment);
    }

    return {
      getAll: _getAll,
      create: _create
    }
  })
})()
