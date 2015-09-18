angular.module('places').filter('groupByFirstLetter',function(){
	return function(array) {
		console.log("aray --> ",array);
		return _.groupBy([{"nom":"test"}], function(n) {

			console.log("n ",n);
			return n.nom.substring(0,1);
		});
	};
});