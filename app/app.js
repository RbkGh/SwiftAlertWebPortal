'use strict';

/**
 * @ngdoc overview
 * @name helloWorldAngularApp
 * @description
 * # helloWorldAngularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('helloWorldAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid'
  ]);
app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://swiftalertmain.dal.jelastic.vps-host.net/swiftalert/**'
    //'http://192.168.115.1:8080/**'
  ]);
}]);
app.config(function ($routeProvider) {


    $routeProvider
      .when('/',
        {
          templateUrl: 'partials/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'

        })
      .when('/main',
        {
          templateUrl: 'partials/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        })
      .when('/about',
        {
          templateUrl: 'partials/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
      .otherwise({
        redirectTo: '/'
      });
  }).run(run);

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {

  // keep user logged in after page refresh
  //$rootScope.globals = $cookieStore.get('globals') || {};
  //if ($rootScope.globals.currentUser) {
  //  $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  //}

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in and trying to access a restricted page
    //var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
    //var loggedIn = $rootScope.globals.currentUser;
    //if (restrictedPage && !loggedIn) {
    //  $location.path('/login');
    //}
  });
}






