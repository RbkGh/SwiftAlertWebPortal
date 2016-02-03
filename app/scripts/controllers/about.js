'use strict';

/**
 * @ngdoc function
 * @name helloWorldAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloWorldAngularApp
 */
angular.module('helloWorldAngularApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
