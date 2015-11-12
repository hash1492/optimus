(function(){

  var app = angular.module('optimus.wish',[]);

  app.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('app.wish', {
			url: "/wish",
			templateUrl: "app/wish/wish.base.tpl.html",
			controller: "WishBaseCtrl",
			cache:false,
      abstract:true
		})
    .state('app.wish.wish-feed', {
			url: "/wish-feed",
			templateUrl: "app/wish/wish-feed.tpl.html",
			controller: "WishFeedCtrl",
			cache:false
		})
    .state('app.wish.wish-detail', {
			url: "/wish-detail/:wish_id",
			templateUrl: "app/wish/wish-detail.tpl.html",
			controller: "WishDetailCtrl",
			cache:false
		})
    .state('app.wish.make-wish', {
			url: "/make-wish",
			templateUrl: "app/wish/make-wish.tpl.html",
			controller: "MakeWishCtrl",
			cache:false
		})
    // .state('app.auth.login', {
		// 	url: "/login",
		// 	templateUrl: "app/auth/login.tpl.html",
		// 	controller: "LoginCtrl",
		// 	cache:false
		// })
	})

})()
