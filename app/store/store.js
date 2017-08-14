'use strict';

angular.module('myApp.store', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/store', {
    templateUrl: 'store/store.html',
    controller: 'StoreCtrl'
  });
}])

.controller('StoreCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/products.json').success(function (data) {
      $scope.store = data;
  });
}]);