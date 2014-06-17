chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		var url = window.location.href;
		var cleanUrl = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
		console.log(cleanUrl);

		// Get local stored .json containing site urls and IDs
		$.getJSON(chrome.extension.getURL('test.json'), function(json) {
 			// Check if sites.json contains the clean URL of the current page
 			if (json.hasOwnProperty(cleanUrl)) {
 				// Iterate trough the .json file and see if any key for v.name is found in the .html document
 				$.each(json[cleanUrl].authors, function(i,v) {
 					if (document.documentElement.innerHTML.indexOf(v.name) > 0) {
 						console.log("found ID:"+v.id);
 						// Send message containing the ID to page_action
 						chrome.runtime.sendMessage({id: v.id}, function(response) {
  							console.log(v.id);
						});
 					}
 				});	
 			}
		});

		
		// ----------------------------------------------------------

	}
	}, 10);
});