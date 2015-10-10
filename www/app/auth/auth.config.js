(function(){

  var app = angular.module('optimus.auth',[]);

  app.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('app.auth', {
			url: "/auth",
			templateUrl: "app/auth/auth.base.tpl.html",
			controller: "AuthBaseCtrl",
			cache:false,
      abstract:true
		})
    .state('app.auth.register', {
			url: "/register",
			templateUrl: "app/auth/register.tpl.html",
			controller: "RegisterCtrl",
			cache:false
		})
	})

})()
