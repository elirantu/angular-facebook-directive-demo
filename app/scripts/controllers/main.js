'use strict';

angular.module('angularFacebookApp')
  .controller('MainCtrl', ['$scope', '$facebook', '$rootScope', function ($scope, $facebook, $rootScope) {

    // Update UI on reder finish and facebook sdk initialized
    $scope.$on('$viewContentLoaded', function(){    	
    	$rootScope.$on('connected', function(){
      		//Get basic authentiation info
      		$scope.isConnected = $facebook.isConnected();
      		$scope.auth = $facebook.getAuth();
      		
      		//Get User information
      		$facebook.consumeApi('/me?fields=picture.type(normal),name', 'response_user');

      		//Get User information
      		$facebook.consumeApi('/me/friends?fields=picture.type(square),name', 'response_list_friends');
      		$scope.$apply();
      	});
		
		$rootScope.$on('disconnected', function(){
      		$scope.isConnected = false;
		    $scope.$apply();
      	});
		
		$rootScope.$on('response_user', function(event){
      		 $scope.user = $facebook.getUser();
      		 $scope.$apply();
      	});

      	$rootScope.$on('response_list_friends', function(event){
      		 $scope.friends = $facebook.getUser().data;
      		 $scope.$apply();
      	});

      	// Always enter the event; control event
		$rootScope.$on('response', function(event){
      		$scope.lastResponse = $facebook.getLastResponse();
      		$scope.$apply();
      	});

    });

    $scope.logout = function() {
    	$facebook.logout();
    };

    $scope.getApi = function(url, eventName) {
    	$facebook.consumeApi(url, eventName);
    };


  }]);
