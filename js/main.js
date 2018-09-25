
(function(){
	var video = document.querySelector('video'); //I am selecting the <video> tag
	var constraints={ 							// I am creating an array of constraints for the getUserMedia method
			video:true,
			audio:true
	};
	window.AudioContext = window.AudioContext || window.webkitAudioContext; //getting the audio context based on browser

	const context = new AudioContext();			//I create the context object
	
	navigator.mediaDevices.getUserMedia(constraints).then(function(stream){ //stream is the main object, but it cant be directly accessed
		video.srcObject=stream;				//I assigned stream object as the video source 
		video.play();						//I play the video, which will feed the <video> tag
		const microphone = context.createMediaStreamSource(stream);	//I create an object the microphone and feed it the stream
	    microphone.connect(context.destination);   //I connect the mic with the context.
	  
	}).catch(function(err){
		
	});
	

})();
	
	
