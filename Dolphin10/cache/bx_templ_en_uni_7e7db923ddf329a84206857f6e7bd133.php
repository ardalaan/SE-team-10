<div class="adm-top-menu bx-def-margin-sec-right">
    <?php if(is_array($a['bx_repeat:items'])) for($i=0; $i<count($a['bx_repeat:items']); $i++){ ?>
        <div class="adm-tm-item" onmouseover="javascript:$(this).addClass('adm-tm-item-active');" onmouseout="javascript:$(this).removeClass('adm-tm-item-active');">
            <a href="<?=$a['bx_repeat:items'][$i]['url'];?>" title="<?=$a['bx_repeat:items'][$i]['caption'];?>" target="<?=$a['bx_repeat:items'][$i]['target'];?>" <?php if($a['bx_repeat:items'][$i]['bx_if:show_onclick']['condition']){ ?>onclick="javascript:<?=$a['bx_repeat:items'][$i]['bx_if:show_onclick']['content']['onclick'];?>"<?php } ?>>
                <div class="adm-tm-item-icon">
                    <?=$a['bx_repeat:items'][$i]['icon'];?>
                </div>
            </a>
        </div>
    <?php } else if(is_string($a['bx_repeat:items'])) echo $a['bx_repeat:items']; ?>
    <?=$a['addons'];?>
</div>
