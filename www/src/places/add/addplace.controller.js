angular.module('places')
	.controller('AddPlaceCtrl', function($scope, $cordovaCamera) {

		
			document.addEventListener("deviceready", function () {

		    var options = {
		      quality: 50,
		      destinationType: Camera.DestinationType.DATA_URL,
		      sourceType: Camera.PictureSourceType.CAMERA,
		      allowEdit: true,
		      encodingType: Camera.EncodingType.JPEG,
		      targetWidth: 1000,
		      targetHeight: 1000,
		      popoverOptions: CameraPopoverOptions,
		      saveToPhotoAlbum: false
		    };

		    $scope.takePicture = function () {	

			    $cordovaCamera.getPicture(options).then(function(imageData) {
			      var image = document.getElementById('myImage');
			      image.src = "data:image/jpeg;base64," + imageData;
			    }, function(err) {
			      // error
			    });
			}
	  	}, false);
		
	});