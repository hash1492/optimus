(function() {
  var app = angular.module("optimus.storage", ['ngStorage']);

  app.provider("StorageService", function($localStorageProvider) {

    var _get = function (key) {
      if(key){
        return localStorage.getItem(key);
      }
      else {
        return localStorage;
      }
    }

    var _set = function (key, value) {
      localStorage.setItem(key, value);
    }

    var _delete = function (key) {
      localStorage.removeItem(key);
    }

    return {
      get: _get,
      set: _set,
      delete: _delete,
      $get: function($localStorage) {
        return {
          get: _get,
          set: _set,
          delete: _delete
        }
      }
    }

  })
})()
