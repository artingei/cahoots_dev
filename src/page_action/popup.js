chrome.runtime.sendMessage({'method':'get_site'},function(response_site){
    var site = response_site;
    chrome.runtime.sendMessage({'method':'get_id'},function(response_id){
        var id = response_id;
        $.getJSON("../../db.json", function(db) {
            $.each(db.sites, function(i,v) {
                if ( v.site_id == site ) {
                    document.getElementById('paper_name2').innerHTML = v.name;
                    document.getElementById('paper_description').innerHTML = v.info;
                }
            });


            $.each(db.authors, function(i,v) {
                if (v.id == id) {
                    $('select').append('<option selected id="author_title_short">'+v.name+'</option>');
                    $.each(v.cahoots, function(j,w){
                        //$('#cahoots').append( '<li class="cahoot_item">'+w.name+'<a class="quelle" href="'+w.more_info+'">Info</a><a class="quelle" href="'+w.src+'">Source</a></li>' );
                        $('#cahoots').append( '<li class="cahoot_item"><a title="Mehr Infos zu dieser Organisation" href="'+w.more_info+'">'+w.name+'</a><a class="quelle" href="'+w.src+'">Quelle</a></li>' );
                    });
                }
            });
        });

    });
});

