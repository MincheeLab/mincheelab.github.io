/* global angular */
"use strict";angular.module("app",["ngRoute","ngSanitize","ui.router","ui.bootstrap","restangular"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e){var r=document.URL.search("http://localhost")>=0?!0:!1;e.otherwise("/"),r&&console.log("¡¡¡¡ DEV MODE ON !!!!"),t.state("home",{url:"/",templateUrl:"views/home.html"}).state("workshops",{url:"/workshops",templateUrl:"views/workshops.html"}).state("workshops.item",{url:"/:wsday",controller:"WorkshopItemCtrl",templateUrl:"views/workshop.html"}).state("projects",{url:"/projects",templateUrl:"views/projects.html"}).state("projects.item",{url:"/:project",controller:"ProjectCtrl",templateUrl:"views/project.html"})}]).controller("WorkshopItemCtrl",["$scope","$stateParams",function(t,e){t.ws=e.wsday}]);