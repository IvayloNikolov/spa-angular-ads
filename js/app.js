'use strict';

var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource']);

adsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "partials/home.html",
        controller:  'homeCtrl',
        replace: true
    })
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
    $routeProvider.when('/myAds',{
        templateUrl:"partials/myAds.html",
        controller: 'PrivateAdsCtrl',
        replace: true
    })
    $routeProvider.when('/postAd',{
        templateUrl:"partials/postAd.html",
        controller: 'PostAdCtrl',
        replace: true
    })
    $routeProvider.when('/logOut',{
        templateUrl:"partials/logOut.html",
        controller: 'LogOutCtrl',
        replace: true
    })
    $routeProvider.when('/editProfile', {
        templateUrl: 'partials/editProfile.html',
        controller: 'EditProfileCtrl',
        replace: true
    })
    $routeProvider.when('/edit/:id', {
        templateUrl: 'partials/editAd.html',
        controller: 'EditAdCtrl'
    })
    $routeProvider.when('/delete/:id', {
        templateUrl: 'partials/deleteAd.html',
        controller: 'DeleteAdCtrl'
    })
    $routeProvider.when('/view/:pageId/:adsNumber', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    })
}])
adsApp.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++)
            input.push(i);
        return input;
    };
});