'use strict';

angular.module('sinjaz')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  });
