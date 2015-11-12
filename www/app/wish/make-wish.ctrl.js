(function(){
  var app = angular.module('optimus.wish');

  app.controller('MakeWishCtrl',['$scope','$stateParams','WishService','CategoryService',
  function($scope,$stateParams,WishService,CategoryService){
    // console.log('MakeWishCtrl called');

    $scope.wish = {
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
      WishService.create($scope.wish)
      .then(function(response) {
        console.log(response);
        $scope.categories = response.data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }


  }])
})()
