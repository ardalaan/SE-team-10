<div class="dbTopMenuPopupCnt">
	<?php if(is_array($a['bx_repeat:items'])) for($i=0; $i<count($a['bx_repeat:items']); $i++){ ?>
	    <div id="<?=$a['bx_repeat:items'][$i]['id'];?>-act" class="active bx-def-margin-sec-top-auto" <?=$a['bx_repeat:items'][$i]['show_active'];?>>
	        <?php if($a['bx_repeat:items'][$i]['bx_if:icon_act']['condition']){ ?><img <?=$a['bx_repeat:items'][$i]['bx_if:icon_act']['content']['class'];?> src="<?=$a['bx_repeat:items'][$i]['bx_if:icon_act']['content']['src'];?>" /><?php } ?>
	        <?php if($a['bx_repeat:items'][$i]['bx_if:texticon_act']['condition']){ ?><i class="sys-icon <?=$a['bx_repeat:items'][$i]['bx_if:texticon_act']['content']['icon'];?>"></i><?php } ?>
	        <span <?=$a['bx_repeat:items'][$i]['class'];?>><?=$a['bx_repeat:items'][$i]['title'];?></span>
	    </div>
	    <div id="<?=$a['bx_repeat:items'][$i]['id'];?>-pas" class="notActive bx-def-margin-sec-top-auto" <?=$a['bx_repeat:items'][$i]['show_passive'];?>>
	        <?php if($a['bx_repeat:items'][$i]['bx_if:icon_pas']['condition']){ ?><img <?=$a['bx_repeat:items'][$i]['bx_if:icon_pas']['content']['class'];?> src="<?=$a['bx_repeat:items'][$i]['bx_if:icon_pas']['content']['src'];?>" /><?php } ?>
	        <?php if($a['bx_repeat:items'][$i]['bx_if:texticon_pas']['condition']){ ?><i class="sys-icon <?=$a['bx_repeat:items'][$i]['bx_if:texticon_pas']['content']['icon'];?>"></i><?php } ?>
	        <a id="<?=$a['bx_repeat:items'][$i]['id'];?>" <?=$a['bx_repeat:items'][$i]['class'];?> <?=$a['bx_repeat:items'][$i]['href'];?> <?=$a['bx_repeat:items'][$i]['target'];?> <?=$a['bx_repeat:items'][$i]['on_click'];?>><?=$a['bx_repeat:items'][$i]['title'];?></a>
	    </div>
	<?php } else if(is_string($a['bx_repeat:items'])) echo $a['bx_repeat:items']; ?>
</div>