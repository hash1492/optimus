(function () {
  var app = angular.module('optimus', [
    'ionic',
    // Local Modules
    'optimus.auth',
    'optimus.wish',
    'optimus.category',
    'optimus.comment',
    'optimus.bookmark',
    // Third Party Modules
    'ngStorage',
    'yaru22.angular-timeago'
  ])

  app.run(function($ionicPlatform, $localStorage, $state) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

      if($localStorage.optimus_session){
        $state.go("app.wish.wish-feed");
      }
      else{
        $state.go("app.auth.login");
      }
    });
  })

  app.config(['$httpProvider','$localStorageProvider',

    function ($httpProvider,$localStorageProvider) {

      var interceptor = [
      function () {
        return {
          request: function (config) {
            if($localStorageProvider.get("optimus_session") && $localStorageProvider.get("optimus_session").token){
              config.headers.authorization = $localStorageProvider.get("optimus_session").token;
            }
            return config;
          },

          response: function (result) {
            return result;
          },

          responseError: function (rejection) {

          }
        };
      }];
      $httpProvider.interceptors.push(interceptor);
    }
  ]);

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
  		$state.go('app.auth.login');
  	});

  })

  app.constant("REST_BASE_URL","http://localhost:1337");


})()
