
<script>
    function bx_forum_search () {
        var sVal = $('#bx_forum_search_input').val();
        document.location = "<?=$a['base_url_forum'];?>?action=goto&search=1#action=goto&search_result=1&text=" + encodeURIComponent(sVal) + "&type=msgs&forum=0&u=&disp=posts&start=0";
        return false;
    }
</script>

<form onsubmit="return bx_forum_search()">

    <div class="bx-def-margin-sec-bottom">
        <div class="forum_form_field bx-def-round-corners-with-border">
            <input id="bx_forum_search_input" name="forum_search" class="bx-def-font-large" />
        </div>
    </div>

    <div>
        <button class="bx-btn" onclick="return bx_forum_search()">Search</button>
        <div class="clear_both"></div>
    </div>

</form>
