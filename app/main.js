'use strict';
var angular = require('angular');
var uiRouter = require('../node_modules/ui-router/release/angular-ui-router.js');
var angularMaterial = require('angular-material');
var customCss = require('./main.scss');

angular.module('webapp', [uiRouter])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "./template/home.html",
                controller: "homeCtrl"
            });
    }]);
    
var homeCtrl = require('./homeCtrl.js');