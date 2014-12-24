'use strict';

angular.module('sinjaz.components')
	.controller('navbarComponentCtrl', function ($scope, $element, $window) {
		
		$scope.scrollAmount = 10;

		angular.element($window).bind("scroll", function() {
			$scope.scrollAmount = Math.min(angular.element(document).scrollTop(), 90);
			$scope.$digest();
		});

		$scope.getHeaderStyle = function(){
			return {
				'background': 'rgba(255,255,255,'+($scope.scrollAmount/100)+')'
			};
		}
	})
	.component('navbar', function () {
	return {
		controller: 'navbarComponentCtrl'
	};
});
