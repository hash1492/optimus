(function(){

  var app = angular.module('optimus.bookmark',[]);

  app.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('app.bookmark', {
			url: "/bookmark",
			templateUrl: "app/bookmark/bookmark.base.tpl.html",
			controller: "BookmarkBaseCtrl",
			cache:false,
      abstract:true
		})
    .state('app.bookmark.bookmarks', {
			url: "/bookmarks",
			templateUrl: "app/bookmark/bookmarks.tpl.html",
			controller: "BookmarksCtrl",
			cache:false
		})
	})


})()
