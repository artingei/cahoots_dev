chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    // Since there can only be one active tab in one active window, 
    //  the array has only one element
    var tab = array_of_Tabs[0];
    // Example:
    var url = tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[1];
    document.getElementById('subtitle').innerHTML = url;

    $.getJSON("http://artingei.de/+++/mysql/"+url+".json", function(jd) {
        //DEBUG
        console.log(jd);
        var num = jd.people.jbittner.cahoots;
        console.log(num.length);
        document.getElementById('title').innerHTML = "Ãœber " + jd.general_info.title;
        document.getElementById('description').innerHTML = jd.general_info.description + '</a> <a class="quelle indesc" href="'+jd.general_info.src+'"> [QUELLE]</a>';
        //document.getElementById('author_title').innerHTML = "FÃ¼r <span class='auth'>" + jd.people.jbittner.name + "</span> wurden die folgenden <span id='total_cahoots'>"+jd.people.jbittner.cahoots.length+"</span>Verbindungen gefunden:"; 
        document.getElementById('author_title').innerHTML = "FÃ¼r <span class='auth'>" + jd.people.jbittner.name + "</span> wurden die folgenden Verbindungen gefunden:"; 
        $.each(jd.people.jbittner.cahoots, function(i, item) {
            //$('#cahoots').append('<li>' + jd.people.jbittner.cahoots[i].name + '</li>');
            //$('#cahoots').append('<li class="cahoot_item" ><a href="'+ jd.people.jbittner.cahoots[i].url +'">'+ jd.people.jbittner.cahoots[i].name +'</a></li>');
            $('#cahoots').append('<li class="cahoot_item" ><a class="links" title="Mehr Infos zu dieser Organisation" href="'+ jd.people.jbittner.cahoots[i].url +'">'+ jd.people.jbittner.cahoots[i].name +'</a> <a class="quelle" href="'+jd.people.jbittner.cahoots[i].src+'">[QUELLE]</a></li>');
        });
    });
});