"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state,$stateParams, FirebaseList) {

		$scope.currentId = $state.params.id;
		$scope.list = FirebaseList.all();

	});




