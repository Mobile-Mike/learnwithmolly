'use strict';

/**
 * @ngdoc function
 * @name learnwithmollyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnwithmollyApp
 */
angular.module('learnwithmollyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
