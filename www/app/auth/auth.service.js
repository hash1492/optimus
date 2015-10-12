(function() {
  var app = angular.module("optimus.auth");

  app.factory("AuthService", function(AuthDataService) {

    var _login = function(user) {
      return AuthDataService.login(user);
    }

    var _register = function(user) {
      return AuthDataService.register(user);
    }

    return {
      login: _login,
      register: _register
    }
  })
})()
