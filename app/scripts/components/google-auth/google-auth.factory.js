angular.module('google.auth').

    factory('GoogleAuthentication', ['$q', function($q){

        var clientId = 'CLIENT_ID_PROVIDED_BY_GOOGLE';
        var apiKey = 'API_KEY_PROVIDED_BY_GOOGLE';
        var scopes = 'https://www.googleapis.com/auth/userinfo.email';

        var userMail = {};

        return {
            fetchGoogleMail : fetchGoogleMail,
            getUserMail : getUserMail,
            isConnected : isConnected
        };

        function authenticate(callback){
            gapi.client.setApiKey(apiKey);
            gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, callback);
        }

        function handleResultMail(authResult){
            if (authResult && !authResult.error) {
                apiCallGetUserInfo().then(function(resp){
                    userMail.mail = resp.email;
                });
            } else {
                userMail.error = 'Authentication failed';
            }
        }

        function fetchGoogleMail(){
            authenticate(handleResultMail);
        }

        function apiCallGetUserInfo(){
            return $q(function(resolve) {
                gapi.client.load('oauth2', 'v2', function() {
                    var request = gapi.client.oauth2.userinfo.get();
                    request.execute(function(resp) {
                        resolve(resp);
                    });
                });
            });
        }

        function getUserMail(){
            return userMail;
        }

        function isConnected(){
            return userMail.mail && !userMail.error;
        }

    }]);