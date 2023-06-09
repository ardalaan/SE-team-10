<script type="text/javascript">
    var oShoutBox = new BxShoutBox(<?=$a['options'];?>);

    $('#shoutbox_msg_field').parent().addClass('shoutbox_send_field');

    // reduce margin between messages and write mesasge blocks
    $('#shoutbox_msg_field').parents('.bx-form-element').removeClass('bx-def-margin-top-auto').addClass('bx-def-margin-sec-top');        
    
    // set fixed width for messages box
    var elShoutbox = $('.' + oShoutBox.sMessagesContainer);
    if(elShoutbox) {
        var iBoxPadding = 0;
        var iShoutboxParentWidth = elShoutbox.parents('.form_advanced_wrapper').innerWidth();
        elShoutbox.css('width', iShoutboxParentWidth - iBoxPadding - 1);
        $('#shoutbox_msg_field').css('width', iShoutboxParentWidth - iBoxPadding - 1);        
    } 

    // make messages content autoscrolling or not, depending on scroll position
    oShoutBox.scrollContent();

    $(document).ready(function () {
        // enable emoji
        $('.shoutbox_send_field input').addEmojiInput();

        // display initial messages
        oShoutBox.getMessages();
    });
</script>
