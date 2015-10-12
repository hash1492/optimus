(function(){
  var app = angular.module('optimus');

  app.factory('BaseDataService',function($http, REST_BASE_URL) {

    var _http_get = function(url) {
      return $http.get(REST_BASE_URL + url)
      .then(function(response) {
        return response;
        // console.log(response);
      })
      .catch(function(err) {
        return err;
        // console.log(err);
      })
    }

    var _http_post = function(url, data) {
      return $http.post(REST_BASE_URL + url, data)
      .then(function(response) {
        return response;
        // console.log(response);
      })
      .catch(function(err) {
        return err;
        // console.log(err);
      })
    }

    return {
      http_get: _http_get,
      http_post: _http_post
    }

  })
})()
