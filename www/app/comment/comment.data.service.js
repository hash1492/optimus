(function() {
  var app = angular.module("optimus.comment");

  app.factory("CommentDataService", function(BaseDataService) {

    var _getAll = function(wish_id) {
      var url = "/comment/getAll/" + wish_id;
      return BaseDataService.http_get(url);
    }

    var _create = function(comment) {
      var url = "/comment/create";
      return BaseDataService.http_post(url,comment);
    }

    return {
      getAll: _getAll,
      create: _create
    }
  })
})()
