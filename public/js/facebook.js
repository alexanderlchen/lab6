function checkLoginState(){
	FB.getLoginStatus(function(response){
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response){
	console.log('Facebook login status changed.'); 
	console.log(response); 

	if (response.status == 'connected') {
		console.log('Successfully logged in with Facebook'); 
		//Logged into your app and Facebook. Get name and picture 
		FB.api('/me?fields=name. first_name, picture.width(480)',changeUser); 
	}
}

function changeUser(response){
	//hide the Facebook login button
	//find the <p> element with the facebookLogin class  
	$('.facebookLogin').hide();
	//Change "Scott Klemmer" to your name 
	console.log(response);
	$('.fbName').text(response.name);
	//Set up your photo as the profile picture 
	$('.img-responsive').attr("src", response.picture.data.url);
}