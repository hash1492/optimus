(function() {
  var app = angular.module("optimus.auth");

  app.factory("AuthDataService", function(BaseDataService) {

    var _login = function(user) {
      var url = "/user/login";
      return BaseDataService.http_post(url,user);
    }

    var _register = function(user) {
      var url = "/user/register";
      return BaseDataService.http_post(url,user);
    }

    return {
      login: _login,
      register: _register
    }
  })
})()
