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

		//getFriends: function() {
			//return sync;
			//return $http.get("api/friends.json");
		//}
	}

});

// .factory('FirebaseFriendList', ['$firebaseArray', function ($firebaseArray) {

//   var ref = new Firebase("https://ionic-places-maxwell.firebaseio.com/friendlist");
//   var sync = $firebaseArray(ref);
//   // console.log(sync);

//   return {
//     all: function() {
//       return sync;
//     },
//     get: function(placeId) {
//       // Simple index lookup
//       return list[placeId];
//     }
//   }
// }])
