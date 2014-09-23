// break controller
'use strict';

module.exports = function(app) {
  app.controller('breakController', function($scope, breakService) {

    $scope.currentBreak = '';

    $scope.getBreak = function() {
      breakService.getBreak().success(function(data) {
        var randomSeed = Math.floor((Math.random() * data.length));
 	    	$scope.currentBreak = data[randomSeed];
      });
    };

    $scope.getAllBreaks = function() {
      breakService.getBreak().success(function(data) {
 	    	$scope.currentBreak = data;
      });
    };
  });
};
