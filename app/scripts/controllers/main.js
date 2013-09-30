'use strict';

angular.module('angularFacebookApp')
  .controller('MainCtrl', ['$scope', '$facebook', '$rootScope', function ($scope, $facebook, $rootScope) {
    // Update UI on reder finish and facebook sdk initialized
    $scope.$on('$viewContentLoaded', function(){    	
    	$rootScope.$on('connected', function(){
      		$scope.isConnected = $facebook.isConnected();
		    $scope.$apply();	
      	});
		
		$rootScope.$on('disconnected', function(){
      		$scope.isConnected = false;
		    $scope.$apply();	
      	});


    });



    $scope.user = function(){
    	$facebook.consumeApi('/me');
    };

    $scope.logout = function() {
    	$facebook.logout();
    };
  }]);
