/**
 * @ngdoc function
 * @name helloWorldAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloWorldAngularApp
 */
(
  function(){
    'use strict';
angular.module('helloWorldAngularApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    var vm = this;

    vm.gridOptions = {};


    vm.reset = reset;


      function reset() {
        console.info('reset fired');
        vm.gridOptions.data = [];
        vm.gridOptions.columnDefs = [];
        console.info('reset fire finished');
      }

    }
  ]
  )
  }
)();
