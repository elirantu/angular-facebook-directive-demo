'use strict';

angular.module('angularFacebookModule', [])
 //  .config(['$q', 'facebookLogin', function($q, facebookLogin){
 //  	// inicialize promise
	// console.log('angularFacebookModule config');	
 //  }])
  .factory('facebookLogin', ['$q', '$rootScope', '$window', function ($q, $rootScope, $window) {
  	var _defer;

    // Public API here
    return {
      init: function () {
      	// Creating promises facebook init
		_defer = $q.defer();
		_defer.promise.then(function(){     
			FB.init({
				appId      : '302003373271202', // App ID
				channelUrl : '//groo.dev:9000/views/channel.html', // Channel File
				status     : true, // check login status
				cookie     : true, // enable cookies to allow the server to access the session
				xfbml      : true  // parse XFBML
			});

			//Register event for authAutologin
			FB.Event.subscribe('auth.authResponseChange', function(response) {
				if (response.status === 'connected') {
				    this.setUser();
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
      setUser: function() {
      	console.log('Welcome!  Fetching your information.... ', FB);
      	_defer = $q.defer();
		_defer.promise.then(function(){     
			$window.FB.api('/me', function(response) {
				console.log('Good to see you, ' + response.name + '.');
			});
		});
		_defer.resolve();

      }
    };
  }])
  .directive('grooFacebook', ['facebookLogin', '$q', '$window', '$timeout', '$document', function(facebookLogin, $q, $window, $timeout, $document){
	var template = '<div id="fb-root"></div>';
	return {
		restric:'A',
		replace:true,
		link: function postLink(scope, element, attrs){
			var d = $document[0];
			// Script Facebook Async 
			angular.element(document).ready(function(){
				// Creating call async sdk   
				var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement('script'); js.id = id; js.async = true;
				js.src = "//connect.facebook.net/en_US/all.js";
				ref.parentNode.insertBefore(js, ref);
			});

			// Load FB SDK
			$window.fbAsyncInit = angular.bind(this, facebookLogin.init);
			

			// Add fb-root tag
			element.html(template);
			
	  	}
	  }  	
  }])
  .directive('grooFacebookButton', function(){
  	var template = '<fb:login-button show-faces="{{showFaces}}" width="200" max-rows="1" ng-model="showFaces"></fb:login-button>';
  	return {
  		replace:true,
  		link: function postLink(scope, element, attrs) {
  			scope.showFaces = true;
  			element.html(template);
  		}
  	}
  });
