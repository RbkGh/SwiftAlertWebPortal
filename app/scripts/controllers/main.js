'use strict';

/**
 * @ngdoc function
 * @name helloWorldAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloWorldAngularApp
 */
angular.module('helloWorldAngularApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
