'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource']);

adsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "partials/home.html",
        controller:  'homeCtrl',
        replace: true
    });
    $routeProvider.when('/login', {
        templateUrl: "partials/login.html",
        controller: 'loginCtrl',
        replace: true
    })
    $routeProvider.when('/register',{
        templateUrl:"partials/register.html",
        controller: 'registerCtrl',
        replace: true
    })

}])
