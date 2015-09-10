angular.module('places').factory("FirebaseService", function ($firebaseAuth) {

	var ref = new Firebase('https://ionic-places-maxwell.firebaseio.com/');
	var auth = $firebaseAuth(ref);

	return {

		login: function (email,password) {
			
 				var promise = auth.$authWithPassword({
                    email: email, 
                    password: password
                }).then(function(){
                    console.log('Login successful');
                    return promise;
                }).catch(function(error) {
                    console.log("Authentication failed:", error);
                    return promise;
                });
                return promise;
		},

		signUp: function (email, password) {

			var promise = auth.$createUser({
				email: email,
				password: password
			}).catch(function (error) {
				alert("FirebaseService. " + error);
				return promise;

			});

			return promise;

		},

		logOut: function (){
			auth.$unauth;
			console.log("logouuuut");
			$state.go('tab.login');
		}


	}

});