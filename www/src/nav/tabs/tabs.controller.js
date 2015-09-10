"use strict";

// angular.module('places')
// .controller('TabsCtrl',function($scope,$ionicModal){
// 	$scope.openModal = function(){
// 		$ionicModal.fromTemplateUrl('src/nav/modal/more-modal.html',{
// 			scope: $scope,
// 			animation: 'slide-in-up'
// 		}).then(function(modal){
// 			$scope.modal = modal;
// 			$scope.modal = modal.show();
// 		});
// 	}
// });

angular.module('places')
.controller('ModalCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('src/nav/modal/more-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});