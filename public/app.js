angular.module('app', [])

.controller('AppCtrl', function($scope, $timeout) {
  $scope.message = "Hello";
  var date = new Date(2014, 3, 11, 18);
  $scope.countdown = countdown(date);

  (function tick() {
    $scope.countdown = countdown(date);
    $timeout(tick, 1000);
  })();
});

$(function(){
  $('h2').fitText();
});
