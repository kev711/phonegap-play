var pictureSource;    //Source var
var destinationType;  //Destination var

//Add event listener to run when the device is ready
document.addEventListener("deviceready", onDeviceReady, false);

//Device is ready
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}    

//Will run if data photo is taken
function onPhotoDataSuccess(imageData) {
    //Set image handler
    var dataImage = document.getElementById('dataImage');

    //Unhide
    dataImage.style.display = 'block';

    // Show photo from data
    dataImage.src = "data:image/jpeg;base64," + imageData;
}

//Will run if url photo is taken
function onPhotoURISuccess(imageURI) {
    //Set image handler
    var uriImage = document.getElementById('uriImage');

    // Unhide image elements
    uriImage.style.display = 'block';

    //Show photo from uri
    uriImage.src = imageURI;
}

//Capture picture
function takePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onError, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}


//Get photo from gallery
function getPhoto(source) {
    // Retrieve image file from gallery
        navigator.camera.getPicture(onPhotoURISuccess, onError, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}


function onError(message) {
    alert('Error: ' + message);
}
