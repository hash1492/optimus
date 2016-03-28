(function () {
  var app = angular.module('optimus', [
    'ionic',
    // Local Modules
    'optimus.storage',
    'optimus.auth',
    'optimus.wish',
    'optimus.category',
    'optimus.comment',
    'optimus.bookmark',
    // Third Party Modules
    'ngStorage',
    'yaru22.angular-timeago'
  ])

  app.run(function($ionicPlatform, StorageService, $state) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
      console.log(StorageService.get("optimus_session"));
      if(JSON.parse(StorageService.get("optimus_session"))){
        $state.go("app.wish.wish-feed");
      }
      else{
        $state.go("app.auth.login");
      }
    });
  })

  app.config(['$httpProvider','StorageServiceProvider',
    function ($httpProvider,StorageServiceProvider) {

      var interceptor = [
      function () {
        return {
          request: function (config) {

            if(config.url.indexOf("http://localhost:1337") > -1 || config.url.indexOf("http://rocky-ravine-69769.herokuapp.com") > -1){
              // Check if the localstorage has optimus_session
              if(StorageServiceProvider.get("optimus_session")){
                var optimus_session = JSON.parse(StorageServiceProvider.get("optimus_session"));
              }
              else {
                var optimus_session = null;
              }

              // Check if the token exists. If so, add it to the request header
              if(optimus_session && optimus_session.token){
                config.headers.authorization = optimus_session.token;
              }
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
  // app.constant("REST_BASE_URL","http://192.168.0.105:1337");
  // app.constant("REST_BASE_URL","http://rocky-ravine-69769.herokuapp.com");


})()
