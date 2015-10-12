(function() {
  var app = angular.module("optimus.category");

  app.factory("CategoryService", function(CategoryDataService) {

    var _getAll = function() {
      return CategoryDataService.getAll();
    }

    return {
      getAll: _getAll
    }
  })
})()
