'use strict';

angular.module('sinjaz')
  .config(function ($stateProvider, stateFactory) {
    $stateProvider.state('index', stateFactory('Index', {
      url: '/'
    }));
  })
  .controller('IndexCtrl', function ($scope, AwesomeRepository, $window, data) {

    AwesomeRepository.getAll().then(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    data.getArticles(function (response) {
      $scope.articles = response;
    });

    $scope.getArticleStyle = function(item){
      if(item.image){
        return {
          'background-image'  : 'url('+item.image+')',
          'padding-left'      : '175px',
          'background-size'   : '165px 165px',
          'background-repeat' : 'no-repeat'
        }
      }
    }

  });
