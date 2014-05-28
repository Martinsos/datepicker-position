'use strict';

angular.module('datepickerPosition', ['ui.bootstrap.datepicker'])

/**
 * @ngdoc directive
 * @name datepickerPosition
 * @description
 * Directive that positions datepicker popup to the right or left. Bootstrap support only to the left.
 * This directive should be added to datepicker element (input) and given alignment value.
 * Currently implemented values are 'right' and 'left'.
 * If directive is not added to the element or it is added but has invalid value, alignment to the left will be used.
 */
.directive('datepickerPosition', [
  function() {
    return {
      restrict: 'A',
      scope: true,
      priority: 1,
      link: function(scope, element, attrs) {
        // I polute scope here, but it seems to be the best way!
        scope._getDatepickerInputWidth = function() {
          return element.outerWidth(); // width + padding + border
        };
        scope._getDatepickerPosition = function() {
          return attrs.datepickerPosition;
        };
      }
    };
}])

/**
 * @ngdoc directive
 * @name datepickerPositionInner
 * @description
 * Directive that aligns datepicker popup according to the input element.
 * It must be placed on datepicker popup element (in bootstrap template).
 */
.directive('datepickerPositionInner', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch('position', function(position) {
          if (position && scope._getDatepickerInputWidth) {
            if (scope._getDatepickerPosition() == 'right') {
              var positionShift = element.outerWidth() - scope._getDatepickerInputWidth();
              position.left -= positionShift;
            }
          }
        });
      }
    };
}]);
