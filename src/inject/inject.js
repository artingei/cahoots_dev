$(document).ready(function() {
	var url = window.location.href;
	var cleanUrl = url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
	console.log(cleanUrl);

	// Get local stored .json containing site urls and IDs
	$.getJSON(chrome.extension.getURL('sites.json'), function(json) {
		// Check if sites.json contains the clean URL of the current page
		if (json.hasOwnProperty(cleanUrl)) {
			// Send site url and site info from json to event page
			chrome.runtime.sendMessage({method: "set_site", site: cleanUrl});
			// Iterate trough the .json file and see if any key for v.name is found in the .html document
			$.each(json[cleanUrl].authors, function(i,v) {
				var index = document.documentElement.innerHTML.indexOf(v.name);
				if (document.documentElement.innerHTML.indexOf(v.name) > 0) {
					console.log( index );
					//$( "*:eq("+index+")" ).css( "color", "red" );
					// Send message containing the ID to event page
					chrome.runtime.sendMessage({method: "set_id", id: v.id});
				}
			});	
		}
	});

});