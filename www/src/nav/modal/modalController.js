"use strict";

angular.module('places')
.controller('ModalCtrl',function($rootScope,$scope){
	$scope.openModal = function(){
		$scope.modal.show();
	};
	$scope.closeModal = function(){
		
	}
})