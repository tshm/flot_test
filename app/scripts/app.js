var app = angular.module('flotterApp', ['flotterAppDirectives']);

app.controller('MainCtrl', ['$scope', function( $scope ) {
  'use strict';

  $scope.series = [];
  $scope.series.push({ title:'AA', array:[5,4,2,3] });
  $scope.series.push({ title:'BB', array:[1,9,2,8] });
  $scope.series.push({ title:'CC', array:[3,1,9,8] });

  $scope.graphdata = {
    series: [],
    options: {
      series: {
        //bars: { barWidth: binsize }
        //lines: { show: true },
        //points: { show: true }
      },
      //selection: {mode: 'x'},
      grid: { hoverable: true, clickable: true }
    }
  };

  $scope.selectColumn = function( index ) {
    $scope.selectedIndex = index;
    var data = [];
    for ( var i = 0; i < $scope.series[ index ].array.length; i++ ) {
      data.push([ i, $scope.series[ index ].array[i] ]);
    }
    $scope.graphdata.series = [{ label: $scope.series[ index ].title, data: data }];
  };

  $scope.graphdata.series.push({ label: 'xx', data: [[1,1],[2,3],[4,5]] });

}]);  // Main Controller
