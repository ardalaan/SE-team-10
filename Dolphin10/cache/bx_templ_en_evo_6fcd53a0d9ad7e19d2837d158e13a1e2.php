<div id="BxWmap<?=$a['suffix'];?>" class="bx_wmap <?=$a['subclass'];?> bx-def-border">
    
</div>
<script type="text/javascript">

    bx_map_loading ('BxWmap<?=$a['suffix'];?>', 1);

    BxWmapInitCallback<?=$a['suffix'];?> = function ()	{

        if ('undefined' != typeof(glBxWmap<?=$a['suffix'];?>))
            return;

        glBxWmap<?=$a['suffix'];?> = new BxWmap (glMap<?=$a['suffix'];?>, '<?=$a['data_url'];?>', 'glBxWmap<?=$a['suffix'];?>', 'BxWmap<?=$a['suffix'];?>');

        glBxWmap<?=$a['suffix'];?>.setParts('<?=$a['parts'];?>');

        glBxWmap<?=$a['suffix'];?>.setCustom('<?=$a['custom'];?>');

        glBxWmap<?=$a['suffix'];?>.setShadowUrl('<?=$a['shadow_url'];?>');

        glBxWmap<?=$a['suffix'];?>.setSaveDataUrl('<?=$a['save_data_url'];?>');

		google.maps.event.addListener(glMap<?=$a['suffix'];?>, "dragend", function() { 
			glBxWmap<?=$a['suffix'];?>.updateLocations();
		});

		google.maps.event.addListener(glMap<?=$a['suffix'];?>, "zoomend", function(oldLevel,  newLevel) { 
            glBxWmap<?=$a['suffix'];?>.updateLocations();
        });        
        
        glBxWmap<?=$a['suffix'];?>.setSaveLocationUrl('<?=$a['save_location_url'];?>');

        glBxWmap<?=$a['suffix'];?>.updateLocations();        

        bx_map_loading ('BxWmap<?=$a['suffix'];?>', 0);
    }    

    BxWmapOnloadCallback<?=$a['suffix'];?> = function ()	{

        var mapOptions = {
            scrollwheel: false,
            draggable: (1 == <?=$a['map_is_dragable'];?>) ? true : false,
            zoom: <?=$a['map_zoom'];?>,
            center: new google.maps.LatLng(<?=$a['map_lat'];?>, <?=$a['map_lng'];?>),
            panControl: false,
            overviewMapControl: (1 == <?=$a['map_is_overview_control'];?> ? true : false),
            overviewMapControlOptions: { opened: false },
            disableDoubleClickZoom: false,
            zoomControl: true,
            zoomControlOptions: { style: google.maps.ZoomControlStyle.DEFAULT },
            mapTypeControl: (1 == <?=$a['map_is_type_control'];?> ? true : false),
            mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DEFAULT },
            scaleControl: (1 == <?=$a['map_is_scale_control'];?> ? true : false),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

		switch ('<?=$a['map_control'];?>') {
			case 'large': mapOptions.zoomControlOptions.style = google.maps.ZoomControlStyle.LARGE; break;
            case 'small': mapOptions.zoomControlOptions.style = google.maps.ZoomControlStyle.SMALL; break;
            case 'none': mapOptions.zoomControl = false; break;
		}

        switch ('<?=$a['map_type'];?>') {
            case 'satellite': mapOptions.mapTypeId = google.maps.MapTypeId.SATELLITE; break;
            case 'hybrid': mapOptions.mapTypeId = google.maps.MapTypeId.HYBRID; break;
            case 'terrain': mapOptions.mapTypeId = google.maps.MapTypeId.TERRAIN; break;
        }

        glMap<?=$a['suffix'];?> = new google.maps.Map(document.getElementById('BxWmap<?=$a['suffix'];?>'), mapOptions);

        google.maps.event.addListener(glMap<?=$a['suffix'];?>, "tilesloaded", BxWmapInitCallback<?=$a['suffix'];?>);
    }


    google.load("maps", "3", {other_params: "language=<?=$a['lang'];?>&key=<?=$a['key'];?>"});
    google.setOnLoadCallback(BxWmapOnloadCallback<?=$a['suffix'];?>);

</script>
