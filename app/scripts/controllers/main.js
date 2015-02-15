'use strict';

/**
 * @ngdoc function
 * @name learnwithmollyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnwithmollyApp
 */
angular.module('learnwithmollyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
