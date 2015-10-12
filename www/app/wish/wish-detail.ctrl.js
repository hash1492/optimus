(function(){
  var app = angular.module('optimus.wish');

  app.controller('WishDetailCtrl',['$scope','$stateParams','WishService',
  function($scope,$stateParams,WishService){
    console.log('WishFeedCtrl called');

    var wish_id = $stateParams.wish_id;

    WishService.getById(wish_id)
    .then(function(response) {
      console.log(response);
      $scope.wish = response.data;
    })
    .catch(function(err) {
      console.log(err);
    })



  }])
})()
