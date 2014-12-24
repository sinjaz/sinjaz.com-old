'use strict';

describe('Component: footerComponent', function () {

  describe('Directive: footerComponent', function () {
    var element, scope, $compile;

    beforeEach(function () {

      module('sinjaz');

      inject(function ($rootScope, _$compile_) {
        scope = $rootScope.$new();
        $compile = _$compile_;
      });

    });

    it('should have the component class', function () {
      element = angular.element('<footer-component></footer-component>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element).toHaveClass('footer-component');
    });

    it('should render text', function () {
      element = angular.element('<footer-component></footer-component>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element.text()).toContain('footer');
    });

  });

  describe('Controller: footerComponentCtrl', function () {

    var Ctrl, scope, element;

    beforeEach(function () {

      module('sinjaz');

      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<footer-component></footer-component>');
        Ctrl = $controller('footerComponentCtrl', {
          $scope: scope,
          $element: element
        });
      });
    });

    it('should render a message', function () {
      expect(scope.text).toContain('footer');
    });
  });

});