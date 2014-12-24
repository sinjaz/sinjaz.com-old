'use strict';

var components = angular.module('sinjaz.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('sinjaz', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'sinjaz.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch'
]);
angular.componentFactory.moduleDecorator(app);