/* global angular */
'use strict';


angular.module('app', [
  'ngRoute',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'pascalprecht.translate'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$translateProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
    var isDev = (document.URL.search('http://localhost') >= 0) ? true : false;
//    $locationProvider.html5Mode(true);  
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
    .state('about',{
      url: '/about',
      templateUrl: 'views/about.html'
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
    })
    .state('equipment',{
      url: '/equipment',
      templateUrl: 'views/equipment.html'
    });
    
    
    $translateProvider.translations('en', {
      welcomeTo: 'Welcome to',
      mincheeLab: 'Minchee Lab',
      navHome: 'Home',
      navAbout: 'About',
      navWorkshops: 'Workshops',
      navProjects: 'Projects',
      navDiscussions: 'Discussions',
      navEquipment: 'Equipment',
      joinWorkshop: 'Join a Workshop!',
      schedule2014: 'the schedule for 2014-2015 is now available, get it while it is hot ;-)',
      learn: 'Learn',
      make: 'Make',
      share: 'Share',
      learnText: 'Let\'s learn together something new everyday. Life is too short to not discover new things.',
      makeText: 'Customize stuff, build your own objects and connect them to the Internet of Things.',
      shareText: 'Because doing alone is no fun and because we are always learning more with others.',
      quoteGershenfeld: 'Give ordinary people the right tools, and they will design and build the most extraordinary things.',
      quoteBanzi: '',
      getInTouch: 'get social with us',
      workshopsSchedule: 'Workshops Schedule',
      workshops2014: 'Season 2014/2015',
      
    });
    $translateProvider.translations('zh', {
      welcomeTo: '歡迎來到',
      mincheeLab: 'Minchee Lab 勉智實驗室',
      navHome: '首頁',
      navWorkshops: '工作坊時間表',
      navProjects: 'Projects',
      navDiscussions: 'Discussions',
      joinWorkshop: '參加我們的工作坊！',
      schedule2014: '2014 至 2015 的工作坊時間已經推出, 快D黎睇下啦 ;-)',
      learn: '學習',
      make: '製作',
      share: '分享',
      learnText: '一齊黎參與學習最新既技術！',
      makeText: '個人化物件，製作屬於自己既用具，仲可以連接物聯網',
      shareText: '自己一個做唔好玩架，因為我地通過其他人學習知道得更多',
      quoteGershenfeld: '比一般人士正確的工具，之後他們可以設計，製作非一般既物件',
      quoteBanzi: '',
      getInTouch: '聯絡我地啦！',
      workshopsSchedule: '工作坊時間表',
      workshops2014: '2014/2015季度',
    });
    $translateProvider.preferredLanguage('en');
//    $translateProvider.determinePreferredLanguage();
  }
])


.controller('NavBarCtrl', [
  '$scope',
  '$rootScope',
  '$translate',
  function($scope, $rootScope, $translate) {
    $rootScope.currentLanguage = $translate.preferredLanguage();
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
      $rootScope.currentLanguage = langKey;
    };
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