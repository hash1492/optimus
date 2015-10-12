(function () {
  var app = angular.module('optimus', [
    'ionic',
    'optimus.auth',
    'optimus.wish',
    'optimus.category',
    'optimus.comment',
    'optimus.bookmark'
  ])

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('app',{
      url: '/app',
      abstract: true,
      templateUrl: 'app/app.base.tpl.html',
      controller: 'AppBaseCtrl'
    })

    // Instead
  	$urlRouterProvider.otherwise(function ($injector) {
  		var $state = $injector.get("$state");
  		$state.go('app.auth.register');
  	});

  })

  app.constant("REST_BASE_URL","http://localhost:1337");


})()
