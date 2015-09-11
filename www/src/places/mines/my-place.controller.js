"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state) {

		var list =[
			{
				name:'Bar des Robots',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/1'
			},
			{
				name:'Restaurant des Robots',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/2'
			},
			{
				name:'Club des Robots',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/3'
			},
			{
				name:'Android Bar',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/4'
			},
			{
				name:'An Other Spot',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/5'
			},
			{
				name:'An Other Spot',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/6'
			},
			{
				name:'An Other Spot',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/7'
			},
			{
				name:'An Other Spot',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/8'
			},
			{
				name:'An Other Spot',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/627/200/9'
			}
		];

		//duplicate data to test performance
		for (var i = 0; i < 5; i++) {
			list = list.concat(list.slice(0))
		}
		//properties
		$scope.list = list;

		$scope.ok = true;


	});