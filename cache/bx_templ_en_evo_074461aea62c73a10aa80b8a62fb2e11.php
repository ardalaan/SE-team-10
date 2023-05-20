<?php if($a['bx_if:select_target']['condition']){ ?><?=$a['bx_if:select_target']['content']['top_controls'];?><?php } ?>
<div class="buttons_content bx-def-bc-margin">
    <?=$a['content'];?>
</div>
<div class="buttons_bar bx-def-bc-margin-thd">
	<?php if(is_array($a['bx_repeat:buttons'])) for($i=0; $i<count($a['bx_repeat:buttons']); $i++){ ?>
	    <button class="bx-btn" type="<?=$a['bx_repeat:buttons'][$i]['btn_type'];?>" name="<?=$a['bx_repeat:buttons'][$i]['btn_name'];?>" onclick="<?=$a['bx_repeat:buttons'][$i]['btn_action'];?>"><?=$a['bx_repeat:buttons'][$i]['btn_value'];?></button>
	<?php } else if(is_string($a['bx_repeat:buttons'])) echo $a['bx_repeat:buttons']; ?>
	<button class="bx-btn" type="button" name="close" onclick="javascript:oBxSctrMain.showBlock();">
	    Close
	</button>
	<div class="clear_both"></div>
</div>
<script type="text/javascript">
    $.colorInput.defaults.cellSize = 10;
    $.colorInput.defaults.hueWidth = 22;
    $.colorInput.defaults.hideInput = false;
    $.colorInput.defaults.hoverSelect = false;
    $.colorInput.defaults.cancelOnClick = [];
    $.colorInput.defaults.acceptCancelButtons = true;
    $.colorInput.defaults.showLeft = false;
    $("#site_customize .input_wrapper_text").colorInput();
</script>
