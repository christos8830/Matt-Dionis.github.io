'use strict';

angular.module('greekFest')

  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home.html'
      })
      .when('/entertainment', {
        templateUrl: '/app/entertainment.html'
      })
      .when('/food', {
        templateUrl: '/app/food.html'
      })
      .when('/resources', {
        templateUrl: '/app/resources.html'
      })
      .otherwise({redirectTo: '/'});
});
