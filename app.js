angular.module('myApp', [
  'ui.bootstrap',
  'datepickerPosition',
]);

// Override angular bootstrap template so one in /template directory is used instead
angular.module("template/datepicker/popup.html", []);