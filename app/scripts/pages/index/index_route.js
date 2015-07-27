angular.module('authentication').

    config(function($stateProvider){
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: 'partials/index.jade',
                controller: 'IndexCtrl',
                onEnter: ['$state', function($state){

                }]
            })
    });