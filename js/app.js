var app = angular.module('Destinations', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
      .when('/home', {
         controller: 'HomeController',
         templateUrl: 'templates/home.html'
      })
      .when('/interests', {
         controller: 'InterestsController',
         templateUrl: 'templates/interests.html'
      })
      .when('/saved', {
         controller: 'SavedController',
         templateUrl: 'templates/saved.html'
      })
      .otherwise({
         redirectTo: '/home'
      });
}]);