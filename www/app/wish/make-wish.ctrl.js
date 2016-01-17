(function(){
  var app = angular.module('optimus.wish');

  app.controller('MakeWishCtrl',['$scope','$state','$stateParams','WishService','CategoryService','$ionicLoading',
  function($scope,$state,$stateParams,WishService,CategoryService,$ionicLoading){
    // console.log('MakeWishCtrl called');

    $scope.wish = {
      upvotes: 0,
      downvotes: 0,
      platforms: {
        ios: false,
        android: false,
        web: false
      },
      similar_apps: []
    };

    // Get all categories
    CategoryService.getAll()
    .then(function(response) {
      console.log(response);
      $scope.categories = response.data;
    })
    .catch(function(err) {
      console.log(err);
    })


    // Make the wish
    $scope.makeWish = function() {
      console.log($scope.wish);
      $ionicLoading.show({
        template: 'Making wish...'
      });
      WishService.create($scope.wish)
      .then(function(response) {
        console.log(response);
        $ionicLoading.hide();
        $state.go("app.wish.wish-feed");
      })
      .catch(function(err) {
        console.log(err);
        $ionicLoading.hide();
      })
    }


  }])
})()
