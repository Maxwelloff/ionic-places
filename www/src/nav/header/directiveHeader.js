"use strict";
angular.module('places')
.directive('siteHeader', function () {
    return {
        restrict: 'E',
        template: '<button class="btn">{{back}}</button><button class="btn">{{forward}}</button>',
        scope: {
            back: '@back',
            forward: '@forward',
            icons: '@icons'
        },
        link: function(scope, element, attrs) {
     		element.on('click', function() {
         		$window.history.back();
     		});
 		}
    };
});
