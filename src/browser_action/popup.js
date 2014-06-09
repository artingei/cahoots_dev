chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    // Since there can only be one active tab in one active window, 
    //  the array has only one element
    var tab = array_of_Tabs[0];
    // Example:
    var url = tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
    // document.getElementById('currentLink').innerHTML = url;
    // document.getElementById('url').innerHTML = url;

    $.getJSON('../../test.json', function(jd) {
    	console.log(jd)
        document.getElementById('description_paper').innerHTML = jd.general_info.description;
        document.getElementById('author_title_short').innerHTML = jd.people.jbittner.name;
        document.getElementById('description_author').innerHTML = jd.people.jbittner.description;
        document.getElementById('src_author').href = jd.people.jbittner.src;
        document.getElementById('src_paper').href = jd.general_info.src;
        $.each(jd.people.jbittner.cahoots, function(i, item) {
            // $('#cahoots').append('<li class="cahoot_item" ><a href="'+ jd.people.jbittner.cahoots[i].url +'">'+ jd.people.jbittner.cahoots[i].name +'</a></li>');
             $('#cahoot'+[i]).append(jd.people.jbittner.cahoots[i].name);
            //$('.accordion').append('<dt>'+jd.people.jbittner.cahoots[i].name+'</dt><dd>'+jd.people.jbittner.cahoots[i].description+'</dd>');
        });
        
             // $('#stage').html('<p> Name: ' + jd.name + '</p>');
             // $('#stage').append('<p>Age : ' + jd.age+ '</p>');
             // $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
    });

    // $.getJSON('http://artingei.de/cahoots/www.zeit.de.json', function( data ) {
    // 	$('#test').html('<p> Name: ' + data.general_info.title + '</p>');
    //  	console.log(data)
    // )};
    
    //$("body").append('Test');

});

