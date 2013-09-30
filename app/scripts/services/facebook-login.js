'use strict';

angular.module('angularFacebookModule', [])
  .factory('$facebook', ['$q', '$rootScope', '$window', function ($q, $rootScope, $window) {
  	var _defer = $q.defer();
    var _user, _auth, _lastResponse;
  	
  	// Public API here
    return {
      init: function () {
      	// Creating promises facebook init
		_defer.promise.then(function(){     
			//Initialization of facebook SDK
			FB.init({
				appId      : '302003373271202', // App ID
				channelUrl : '//groo.dev:9000/views/channel.html', // Channel File
				status     : true, // check login status
				cookie     : true, // enable cookies to allow the server to access the session
				xfbml      : true // parse XFBML
			});

			//Register event for authentication
			FB.Event.subscribe('auth.authResponseChange', function(response) {
				_lastResponse = response;
				if (response.status === 'connected') {
					_auth = response; 			 		
			 		//Broadcast the event connected
			 		$rootScope.$broadcast('connected');
				} else if (response.status === 'not_authorized') {			
				  FB.login();
				} else {
				  FB.login();
				}
  			});
		});
		
        $rootScope.$apply(function() {
        	_defer.resolve();
        }); 
      },
      consumeApi: function(url) {
		return FB.api(url, function(response) {
			return response;
		});
      },
      getUser: function() {
      	return _user;
      },
      getAuth: function() {
      	return _auth;
      },
      isConnected: function() {
      	return (_auth.status === 'connected') ? true : false;
      },
      logout: function() {
      	_defer.promise.then(function(){
      		FB.logout(function(response) {
				// user is now logged out
				_lastResponse = response;
				$rootScope.$broadcast('disconnected');
			});
      	});

      	
      	_defer.resolve();
      	
      }

    };
  }]);
