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
    
    
    $translateProvider.translations('en', {
      welcomeTo: 'Welcome to',
      mincheeLab: 'Minchee Lab',
      navHome: 'Home',
      navWorkshops: 'Workshops',
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
      getInTouch: 'get in touch with us',
      workshopsSchedule: 'Workshops Schedule',
      workshops2014: 'Season 2014/2015',
      
    });
    $translateProvider.translations('zh', {
      welcomeTo: 'ZHWelcome to',
      mincheeLab: 'ZHMinchee Lab',
      navHome: 'ZHHome',
      navWorkshops: 'ZHWorkshops',
      joinWorkshop: 'Join a Workshop!',
      schedule2014: 'the schedule for 2014-2015 is now available, get it while it is hot ;-)',
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

.directive('navMenu',[
  '$state',
  function($state) {
    return function(scope, element, attrs) {
      var links = element.find('a'),
          onClass = attrs.navMenu || 'active',
          link,
          url,
          currentLink,
          urlMap = {},
          i;

      for (i = 0; i < links.length; i++) {
        link = angular.element(links[i]);
        url = link.attr('ui-sref');
        if (url) {
          urlMap[url] = link;
        }
      }
      
      var activateLink = function(newLink) {
        var pathLink = urlMap[newLink];
        if (pathLink) {
          if (currentLink) {
            currentLink.parent().removeClass(onClass);
          }
          currentLink = pathLink;
          currentLink.parent().addClass(onClass);
        }
      };
      activateLink($state.current.name);
      
      scope.$on('$stateChangeStart', function(event, next){
        activateLink(next.name);
      });
    };
  }
])

;