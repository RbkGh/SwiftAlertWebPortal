/**
 * Created by Rodney on 01-Feb-16.
 */
(function () {
  'use strict';

  angular
    .module('helloWorldAngularApp')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', '$q', '$cookieStore', '$timeout'];
  function AuthService($http, $q, $cookieStore, $timeout) {
    var service = {};

    service.Login = Login;
    return service;
    var userObj;

    function getUserObj() {
      return userObj;
    }

    function Login(userName, password) {

      var deferred = $q.defer();

      $http.post(
        'http://swiftalertmain.dal.jelastic.vps-host.net/swiftalert/alertsms/v1/authentication/login',
        //'http://192.168.158.1:8080/alertsms/v1/authentication/login',
        {
          userName: userName,
          password: password
        },
        {
          headers: {
            //'Access-Control-Allow-Origin':'http://localhost:63342',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      ).then(function successCallBack(response) {
          //{
          //  "status": "00"
          //  "message": "Success"
          //  "responseObject": {
          //  "userName": "rbk.unlimited@gmail.com"
          //  "toKen": "9EA4F71A-A21F-4B85-8573-85975AA670E6"
          //  "lastLoginTime": null
          //  "deviceId": null
          //}-
          //}

          deferred.resolve(response.data);
        }
        ,
        function errorCallBack(error) {

          deferred.reject(error);

        });

      return deferred.promise;
    }
  }
})();
