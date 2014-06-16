chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		var url = window.location.href;
		var cleanUrl = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
		
		console.log(cleanUrl); //DEBUG

		$.getJSON(chrome.extension.getURL('test.json'), function(json) {
 			//console.log(json);
 			//console.log(cleanUrl);
 			//console.log(json[cleanUrl].authors);
 			
 			// Check if sites.json contains the clean URL of the current page
 			if (json.hasOwnProperty(cleanUrl)) {
 				$.each(json[cleanUrl].authors, function(i,v) {
 					if (document.documentElement.innerHTML.indexOf(v.name) > 0) {
 						console.log(v.id);
 					}
 				});
				
 			}
 			
 			
		});

		
		// ----------------------------------------------------------

	}
	}, 10);
});