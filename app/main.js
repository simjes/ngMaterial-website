'use strict';
var angular = require('angular');
var uiRouter = require('./../node_modules/ui-router/release/angular-ui-router.js');
var angularMaterialCss = require('./../node_modules/angular-material/angular-material.scss');
var angularMaterial = require('./../node_modules/angular-material/index.js');

var customCss = require('./main.scss');

angular.module('webapp', [uiRouter, 'ngAnimate', 'ngAria', 'ngMaterial', 'proCard'])
    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "./template/home.html",
                controller: "homeCtrl"
            })
            .state('projects', {
                url: "/projects",
                templateUrl: "./template/projects.html",
                controller: "projectCtrl"
            });

        var darkTheme = $mdThemingProvider.extendPalette('grey', {
            '100': '232228', //background
            '500': '2b2a30', //navbar
            'contrastDefaultColor': 'light',    //overriden for tabs 
            'contrastLightColors': '100',       //overriden for tabs
            'contrastStrongLightColors': '500'  //overriden for tabs
        });

        $mdThemingProvider.definePalette('darkTheme', darkTheme);

        $mdThemingProvider.theme('default')
            .primaryPalette('darkTheme', {
                'default': '500'
            })
            .accentPalette('red')
            .backgroundPalette('darkTheme', {
                'default': '100'
            })
            .dark();
    }]);
    
var projectCardDir = require('./directives/projectCard.js');

var homeCtrl = require('./controllers/homeCtrl.js');
var tabsCtrl = require('./controllers/tabsCtrl.js');
var projectCtrl= require('./controllers/projectCtrl.js');