'use strict';

angular.module('angularFacebookApp')
  .controller('MainCtrl', function ($scope, facebookLogin, FB) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log(FB);
    // facebookLogin.setUser();
  });
