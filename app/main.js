'use strict';
var angular = require('angular');
var ui_router = require('../node_modules/ui-router/release/angular-ui-router.js');
var angular_material = require('angular-material');


angular.module('webapp', [ui_router])
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