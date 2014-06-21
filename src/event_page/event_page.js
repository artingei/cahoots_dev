var id;
var site;
var siteinfo;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.method == "set_id") {
		id = request.id;
		chrome.tabs.query({active:true, currentWindow:true}, function (tabs) {  
			chrome.pageAction.show(tabs[0].id);
		});
	} else if (request.method == "get_id") {
		sendResponse(id);
	} else if (request.method == "set_site") {
		site = request.site;
	} else if (request.method == "get_site") {
		sendResponse(site);
	} else if (request.method == "set_siteinfo") {
		siteinfo = request.siteinfo;
	} else if (request.method == "get_siteinfo") {
		sendResponse(siteinfo);
	}
});


