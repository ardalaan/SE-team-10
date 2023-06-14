<div class="sys_cal_wrapper">
    <div class="top_settings_block">
    <div class="tsb_cnt_out bx-def-btc-margin-out">
        <div class="tsb_cnt_in bx-def-btc-padding-in">
            <?=$a['top_controls'];?>
        </div>
    </div>
</div>
    <div class="sys_cal_table_wrp bx-def-bc-margin-sec">
        <table class="sys_cal_table">
            <tr>
                <?php if(is_array($a['bx_repeat:week_names'])) for($i=0; $i<count($a['bx_repeat:week_names']); $i++){ ?>
                    <th><?=$a['bx_repeat:week_names'][$i]['name'];?></th>
                <?php } else if(is_string($a['bx_repeat:week_names'])) echo $a['bx_repeat:week_names']; ?>
            </tr>
            <?php if(is_array($a['bx_repeat:calendar_row'])) for($i=0; $i<count($a['bx_repeat:calendar_row']); $i++){ ?>
                <tr>
                    <?php if(is_array($a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'])) for($ii=0; $ii<count($a['bx_repeat:calendar_row'][$i]['bx_repeat:cell']); $ii++){ ?>
                        <td class="<?=$a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'][$ii]['class'];?>" valign="top">
                            <u class="bx-def-font-small"><?=$a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'][$ii]['day'];?></u>
                            <?php if($a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'][$ii]['bx_if:num']['condition']){ ?>
                                <a href="<?=$a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'][$ii]['bx_if:num']['content']['href'];?>"><b class="bx-def-font-h2"><?=$a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'][$ii]['bx_if:num']['content']['num'];?></b> <span class="bx-phone-hide"><?=$a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'][$ii]['bx_if:num']['content']['entries'];?></span></a>
                            <?php } ?>
                        </td>
                    <?php } else if(is_string($a['bx_repeat:calendar_row'][$i]['bx_repeat:cell'])) echo $a['bx_repeat:calendar_row'][$i]['bx_repeat:cell']; ?>
                </tr>
            <?php } else if(is_string($a['bx_repeat:calendar_row'])) echo $a['bx_repeat:calendar_row']; ?>    
        </table>
    </div>
    <div class="dbBottomMenu">
        <?=$a['bottom_controls'];?>
    </div>
</div>
