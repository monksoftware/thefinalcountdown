angular.module('app', [])

.directive('countdown', function($timeout) {
  return {
    restrict: "A",
    template: "{{ countdown.toString() }}",
    link: function(scope, element, attributes) {
      var date = attributes.date.split('-');
      var time = attributes.time.split(':');
      date = new Date(date[0], date[1] - 1, date[2], time[0], time[1]);

      (function tick() {
        scope.countdown = countdown(date);
        var newLeft = parseInt($("#man").css('left')) + 50;
        if(newLeft < (window.outerWidth - 200)){
          $("#man").css('left', newLeft+"px");
        }else{
          $("#man").css('left', "150px");
        }
        $timeout(tick, 1000);
      })();
    }
  }
})

.controller('AppCtrl', function($scope, $timeout) {});

$(function(){
  $('h2').fitText();
});