var app = angular.module('flotterAppDirectives', []);

app.directive('flot', function() {
  return {
    scope: { graphdata: '=flot', click: '&' },
    replace: false,
    link: function( scope, elm ) {
      scope.$watch('graphdata', function( data ) {
        if ( !data.series || !data.options ) return;
        console.log(data.series, data.options);
        $.plot( elm, data.series, data.options );
      }, true);
      //
      elm.bind('plotclick', function( event, pos, item ) {
        //console.log(vent, pos, item]);
        var args = { x: pos.x, y: pos.y };
        if ( item ) {
          args.dataIndex = item.dataIndex;
          args.seriesIndex = item.seriesIndex;
        }
        scope.click({ args: args });
      });
      //
      elm.bind('plotselected', function( event, ranges ) {
        console.log([ event, ranges ]);
      });
    }
  };
});

