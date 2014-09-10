/* global angular */
'use strict';


angular.module('app', [
  'ngRoute',
//  'ngSanitize',
//  'ngCookies',
  'ui.router',
  'ui.bootstrap',
  'restangular'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true); //.hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home',{
      url: '/',
      controller: 'HomeCtrl',
      templateUrl: 'views/home.html',
    })
    .state('workshops', {
      url: 'workshops',
      templateUrl: 'views/workshops.html'
    })
    .state('projects', {
      url: 'projects',
      templateUrl: 'views/projects.html'
    });
  }
])


.config([
  'RestangularProvider',
  '$httpProvider',
  '$sceDelegateProvider',
  '$locationProvider',
  function ( RestangularProvider, $httpProvider, $sceDelegateProvider, $locationProvider) {
        
    RestangularProvider.setRequestSuffix('.json');
    // RestangularProvider.setDefaultHttpFields({cache: true});
    
    // change api endpoint for dev mode only...
    var dev = (document.URL.match(/^http:\/\/192/) || document.URL.match(/^http:\/\/0/) || document.URL.match(/^http:\/\/127/) || document.URL.match(/^http:\/\/172.24/)) ? 'app_dev.php' : '';
    if (dev) {
      $locationProvider.html5Mode(false); //.hashPrefix('!');
      $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://192.168.33.10/**']);
      RestangularProvider.setBaseUrl('http://192.168.33.10/' + dev + '/api');
      console.log('¡¡¡¡ DEV MODE ON !!!!');
    } else {
      RestangularProvider.setBaseUrl('https://api.usj.edu.mo/api');
    }

    RestangularProvider.setResponseExtractor(function(response, operation) {
      var newResponse = response;
      if (operation === 'getList') {
        if (!angular.isUndefined(response.data)) {
          newResponse = response.data;
          newResponse._metadata = response._metadata;
          newResponse._preset   = response._preset;
        }
      }
      return newResponse;
    });
    
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
])

.run([
  '$rootScope',
  function ($rootScope) {
        
  }
])


.controller('WorkshopsCtrl',[
  '$scope',
  function($scope) {
  }
])

.controller('HomeCtrl',[
  '$scope',
  function($scope) {
    $scope.slides = [
      { image: 'images/bckg2.jpg', text: 'Your Fab Lab in Macau'}
    ]
  }
])
;