angular.module('authentication').

    controller('IndexCtrl', ['$scope', 'GoogleAuthentication', function($scope, GoogleAuthentication){

        $scope.authentication = GoogleAuthentication;

        $scope.handleAuthClick = function() {
            GoogleAuthentication.fetchGoogleMail();
        };

    }]);