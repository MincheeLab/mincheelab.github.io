/* global angular */
'use strict';


angular.module('app', [
  'ngRoute',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'restangular'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    var isDev = (document.URL.search('http://localhost') >= 0) ? true : false;
    $locationProvider.html5Mode(true);  
    $urlRouterProvider.otherwise('/');
    if (isDev) {
      $locationProvider.html5Mode(false);  
      console.log('¡¡¡¡ DEV MODE ON !!!!');
    }
    
    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'views/home.html',
    })
    .state('workshops', {
      url: '/workshops',
      templateUrl: 'views/workshops.html'
    })
    .state('workshops.item',{
      url: '/:wsday',
      controller: 'WorkshopItemCtrl',
      templateUrl: 'views/workshop.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html'
    })
    .state('projects.item',{
      url: '/:project',
      controller: 'ProjectCtrl',
      templateUrl: 'views/project.html'
    });
  }
])


.controller('WorkshopItemCtrl',[
  '$scope',
  '$stateParams',
  function($scope, $stateParams) {
    $scope.ws = $stateParams.wsday;
  }
])
;