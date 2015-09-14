"use strict";

angular.module('places')
.directive('backImg', function(){
    return {



    link:function(scope, element, attrs){


        var url = attrs.backImg;
        var content = element.find('p');
        var content2 = element.find('h2');


    	// console.log("content: ",content);

        content.css({
            'background': 'url(' + url +')',
            'background-size' : 'cover',
            'color':'white',
            'font-weight':'900',
            'padding-left':'10px',
            'text-shadow':'2px 2px #000'
        });

        content2.css({
        	'font-size':'20px'
        });
    }

    }
  });