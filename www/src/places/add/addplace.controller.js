angular.module('places')
	.controller('AddPlaceCtrl', function($scope, $cordovaCamera, $state, $firebaseArray) {

		var imageBase64;
		$scope.form = {};

		document.addEventListener("deviceready", function () {

			var options = {
		      quality: 50,
		      destinationType: Camera.DestinationType.DATA_URL,
		      sourceType: Camera.PictureSourceType.CAMERA,
		      allowEdit: true,
		      encodingType: Camera.EncodingType.JPEG,
		      targetWidth: 500,
		      targetHeight: 500,
		      popoverOptions: CameraPopoverOptions,
		      saveToPhotoAlbum: false
		    };

		    $scope.takePicture = function () {	

			    $cordovaCamera.getPicture(options).then(function(imageData) {
			    	imageBase64 = imageData;	
			      var image = document.getElementById('myImage');
			      image.src = "data:image/jpeg;base64," + imageData;
			    }, function(err) {
			      // error
			    });
			}
	  	}, false);


		

	  	$scope.addPicture = function() {
		  
		    var firebaseObj = new Firebase("https://ionic-places-maxwell.firebaseio.com/places");
		    var fb = $firebaseArray(firebaseObj);

		
			var titleee = $scope.form.titleee;
			var description = $scope.form.description;
		    fb.$add({

		    	description: description,
		        image: imageBase64,
		        title: titleee
		    }).then(function(ref) {
		    	 $state.go('tab.my-place');
		        //console.log(ref);
		    }, function(error) {
		        //console.log("Error:", error);
		    });
 
		}
		
	});