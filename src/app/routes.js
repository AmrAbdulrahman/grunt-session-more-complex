(function() {
  'use strict';

  angular
    .module('ngApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/landing');
      $urlRouterProvider.when('/', '/landing');
      
      $stateProvider
        .state('landing', {
          url: '/landing',
          templateUrl: 'app/states/landing/landing.html'
        });
    });
})();