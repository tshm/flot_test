var app = angular.module('flotterApp', ['flotterAppDirectives']);

app.controller('MainCtrl', ['$scope', function( $scope ) {
  'use strict';

  $scope.series = [
    { show: true,  label:'A', data:5 },
    { show: false, label:'B', data:1 },
    { show: true,  label:'C', data:3 }
  ];

  $scope.graphdata = {
    series: [],
    options: {
      series: {
        pie: { show: true }
      },
      grid: { clickable: true }
    }
  };

  $scope.plotclick = function( arg ) {
    console.log( arg.series );
    for ( var i = 0; i < $scope.series.length; ++i ) {
      if ( $scope.series[i].label === arg.series.label ) {
        $scope.series[i].show = false;
      }
    }
  };

  $scope.$watch('series', function( series ) {
    $scope.graphdata.series = [];
    for ( var i = 0; i < series.length; ++i ) {
      if ( series[i].show ) {
        $scope.graphdata.series.push( series[i] );
      }
    }
  }, true);

}]);  // Main Controller
