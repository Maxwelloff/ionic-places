angular.module('places')

.factory('FirebaseList', ['$firebaseArray', function ($firebaseArray) {

  var ref = new Firebase("https://ionic-places-maxwell.firebaseio.com/places");
  var sync = $firebaseArray(ref);
  // console.log(sync);

  return {
    all: function() {
      return sync;
    },
    get: function(placeId) {
      // Simple index lookup
      return list[placeId];
    }
  }
}])