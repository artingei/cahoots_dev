chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		$(document).ready(function(){
			$.getJSON('http://artingei.de/cahoots/www.zeit.de.json', function(jd) {
		    	console.log(jd);
		    	//$('#test').html('<p> Name: ' + data.general_info.title + '</p>');
		    	$.each(jd.people, function(key, value) {
		    		if ( window.find(key, false) ) {
		    			alert('ARSCHLOCH');
		    		}


		    		//alert(key);
		    		//if window.find() {
		    		//	console.log('yeah');
		    		//}
		    	});

		    	document.getElementByClass('header_author').innerHTML
		             // $('#stage').html('<p> Name: ' + jd.name + '</p>');
		             // $('#stage').append('<p>Age : ' + jd.age+ '</p>');
		             // $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
		    });
		});
		// ----------------------------------------------------------

	}
	}, 10);
});