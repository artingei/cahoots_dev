chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		var uri = window.location.href;
		var cleanUri = uri.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
		console.log(cleanUri); //debug

		if (jQuery) {  
    		console.log("yes");
		}

		$.getJSON(chrome.extension.getURL('sites.json'), function(sites) {
 			console.log(sites);
		});



		//var file = chrome.extension.getURL('sites.json');
		//var sites = JSON.parse('chrome-extension://nfjiejigebdablphnidgdcolmbfepgjg/sites.json');
		//console.log(sites);


		/*
		$.getJSON('chrome-extension://nfjiejigebdablphnidgdcolmbfepgjg/sites.json', function(sites) {
			$.each( sites, function(key, val) {
				console.log(key+": "+val);
			});
    		console.log(sites); //debug
    		console.log(sites.url);
			//if (sites.hasOwnProperty("www.zeit.de")) {
			//	console.log(yeah);
			//};

		    });
		*/
		
		// ----------------------------------------------------------

	}
	}, 10);
});