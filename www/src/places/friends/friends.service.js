angular.module('places')
.factory('FriendsService', function ($firebaseArray,$filter) {
	var ref = new Firebase("https://ionic-places-maxwell.firebaseio.com/friendlist");
	var sync = $firebaseArray(ref);
	return {

		getGroupedFriends: function () {

			//return this.getFriends().then(function(result){
			//	return $filter('groupByFirstLetter')(result.data);
			//});
			 // console.log("sync ",sync);
			return sync;
			
		}

	}

});


