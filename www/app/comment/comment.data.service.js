(function() {
  var app = angular.module("optimus.comment");

  app.factory("CommentDataService", function(BaseDataService) {

    var _getAll = function() {
      var url = "/comment/getAll";
      return BaseDataService.http_get(url);
    }

    return {
      getAll: _getAll
    }
  })
})()
