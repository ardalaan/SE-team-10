<td class="top" style="display:none">
    <a class="top_link" href="<?=$a['link'];?>"<?php if($a['bx_if:show_onclick']['condition']){ ?> onclick="<?=$a['bx_if:show_onclick']['content']['onclick'];?>"<?php } ?><?php if($a['bx_if:show_target']['condition']){ ?> target="<?=$a['bx_if:show_target']['content']['target'];?>"<?php } ?>>
    	<span class="down bx-def-padding-sec-leftright"><?=$a['text'];?></span>
    </a>
    <?php if($a['bx_if:show_submenus']['condition']){ ?>
	    <div class="more_sub">
	        <ul class="more_sub"><?=$a['bx_if:show_submenus']['content']['sub_menus'];?></ul>
	    </div>
    <?php } ?>
</td>