'use strict';

angular.module('sinjaz.components')
  .controller('footerComponentCtrl', function ($scope, $element) {
    $scope.text = 'footer component';
  })
  .component('footer', function () {
    return {
      controller: 'footerComponentCtrl'
    };
  });