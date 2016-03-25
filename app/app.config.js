'use strict';

angular.module('greekFest')
  .config(function($mdIconProvider, $routeProvider) {
    $mdIconProvider
      .defaultIconSet('resources/svg/mdi.svg');

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
      .when('/sponsorship', {
        templateUrl: '/app/sponsorship.html'
      })
      .otherwise({redirectTo: '/'});
});
