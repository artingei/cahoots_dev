chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		var url = window.location.href;
		var cleanUrl = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
		console.log(cleanUrl); //debug
		console.log(chrome.extension.getURL('sites.json'));

		
		$.getJSON(chrome.extension.getURL('sites.json'), function(sites) {
    		console.log(sites); //debug
    		console.log(sites.url);
			if (sites.hasOwnProperty("www.zeit.de")) {
				console.log(yeah);
			};

		    });
		
		// ----------------------------------------------------------

	}
	}, 10);
});