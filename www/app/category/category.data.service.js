(function() {
  var app = angular.module("optimus.category");

  app.factory("CategoryDataService", function(BaseDataService) {

    var _getAll = function() {
      var url = "/category/getAll";
      return BaseDataService.http_get(url);
    }

    return {
      getAll: _getAll
    }
  })
})()
