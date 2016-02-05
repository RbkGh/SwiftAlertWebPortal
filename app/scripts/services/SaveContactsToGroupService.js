/**
 * Created by Rodney on 05-Feb-16.
 */
(
  function () {
  'use strict';

  angular
    .module('helloWorldAngularApp')
    .factory('SaveContactsToGroupService', SaveContactsToGroupService);

    SaveContactsToGroupService.$inject = ['$http', '$q', '$cookieStore', '$timeout'];
    function SaveContactsToGroupService($http, $q, $cookieStore, $timeout){

      var service = {};
      service.postContactsToGroup = postContactsToGroup;
      return service;

      function postContactsToGroup(requestData){
        var deferred = $q.defer();

        $http.post(
          //'http://swiftalertmain.dal.jelastic.vps-host.net/swiftalert/alertsms/v1/groups/contacts/add',
          'http://localhost:8080/alertsms/v1/groups/contacts/add',
          requestData,
          {
            headers: {

              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        ).then(function successCallBack(response){
          //{
          //  "status": "00"
          //  "message": "Success"
          //  "responseObject": {
          //  "numberOfContactsSaved": 230
          //}-
          //}
          deferred.resolve(response.data);
        },function errorCallBack(response){
          deferred.reject(response);

        });
        return deferred.promise;

      }
    }
  })();
