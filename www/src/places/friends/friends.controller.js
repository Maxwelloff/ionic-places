angular.module('places')
	.controller('FriendsCtrl', function($scope, $ionicLoading,FriendsService) {

		$ionicLoading.show({
			content: 'Loading...',
			showBackdrop: false
		});

		// FriendsService.getGroupedFriends().then(function(data){

		// 	$scope.grouped = data;
		// 	$ionicLoading.hide();

		// });
		$scope.friendlist = FriendsService.getGroupedFriends();
		 console.log("guefygfer",FriendsService.getGroupedFriends());
		$ionicLoading.hide();



	});
