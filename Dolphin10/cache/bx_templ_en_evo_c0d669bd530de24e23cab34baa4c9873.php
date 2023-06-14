<div class="ordered_block">
	<?=$a['sort_block'];?>
	<?php if($a['bx_if:show_with_photos']['condition']){ ?>
		<input class="bx-def-margin-sec-left" type="checkbox" <?=$a['bx_if:show_with_photos']['content']['photo_checked'];?> id="photos_only" name="photos_only" value="on" onclick="oBrowsePage.LocationChange(this, '<?=$a['bx_if:show_with_photos']['content']['photo_location'];?>')" /><label for="photos_only"><?=$a['bx_if:show_with_photos']['content']['photo_caption'];?></label>
	<?php } ?>
	<input class="bx-def-margin-sec-left" type="checkbox" <?=$a['online_checked'];?> id="online_only" name="online_only" value="on" onclick="oBrowsePage.LocationChange(this, '<?=$a['online_location'];?>')"/><label for="online_only"><?=$a['online_caption'];?></label>
</div>
<div class="per_page_block">
	<?=$a['per_page_block'];?>
</div>
<div class="clear_both"></div>