'use strict';

angular.module('angularFacebookModule')
  .directive('grooFacebook', ['$facebook', '$q', '$window', '$timeout', '$document', function($facebook, $q, $window, $timeout, $document){
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
			$window.fbAsyncInit = angular.bind(this, $facebook.init);

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
