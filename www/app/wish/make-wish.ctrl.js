(function(){
  var app = angular.module('optimus.wish');

  app.controller('MakeWishCtrl',['$scope','$stateParams','WishService','CategoryService',
  function($scope,$stateParams,WishService,CategoryService){
    console.log('MakeWishCtrl called');

    $scope.wish = {};

    CategoryService.getAll()
    .then(function(response) {
      console.log(response);
      $scope.categories = response.data;
    })
    .catch(function(err) {
      console.log(err);
    })

    $scope.makeWish = function() {
      console.log($scope.wish);
    }


  }])
})()
