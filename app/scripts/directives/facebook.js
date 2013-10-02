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
  	var template = '<fb:login-button show-faces="false" width="200" max-rows="1" ng-model="showFaces"></fb:login-button>';
  	return {
  		replace:false,
  		link: function postLink(scope, element, attrs) {
  			scope.showFaces = true;
  			element.html(template);
  		}
  	}
  })
  .directive('grooFacebookUser', function(){
  	return {

  		template: '<div class="media"> <a class="pull-left" href="#"> <img class="media-object" src="{{user.picture.data.url}}"> </a> <div class="media-body"> <h4 class="media-heading">{{user.name}}</h4> ... </div></div>'
  	}
  })
  .directive('grooFacebookFriendlist', function(){
  	return {
  		template:'<h2 ng-hide="friends">loading your friends ...</h2><div class="media" ng-repeat="friend in friends" ng-show="friends"> <a class="pull-left" href="#"> <img class="media-object" src="{{friend.picture.data.url}}"> </a> <div class="media-body"> <h4 class="media-heading">{{friend.name}}</h4> ... </div></div>'
  	}
  });
