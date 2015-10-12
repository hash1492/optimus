(function() {
  var app = angular.module("optimus.category");

  app.factory("CommentService", function(CommentDataService) {

    var _getAll = function() {
      return CommentDataService.getAll();
    }

    return {
      getAll: _getAll
    }
  })
})()
