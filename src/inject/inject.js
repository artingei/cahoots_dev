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
 			console.log(json);
 			
 			if (json.hasOwnProperty(cleanUrl)) {
 				console.log("yeah"); //DEBUG
 				//var obj = jQuery.parseJSON(json);
 				//console.log(obj[toString(cleanUrl)]);

 				/*
 				$.each(json.toString(cleanUrl).author, function(i, v) {
 					alert(name);
 					
 					var found = $('*:contains('v.name')');
 					if (found) {
 						console.log("found");
 					}
 					
 				});
				*/
				
 			}
 			
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