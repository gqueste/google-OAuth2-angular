angular.module('authentication').

    config(function($routeProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

    });