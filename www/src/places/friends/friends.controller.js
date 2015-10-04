angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		
		$scope.friendlist = FriendsService.getGroupedFriends();
		 console.log("guefygfer",FriendsService.getGroupedFriends());
		$ionicLoading.hide();



	});
