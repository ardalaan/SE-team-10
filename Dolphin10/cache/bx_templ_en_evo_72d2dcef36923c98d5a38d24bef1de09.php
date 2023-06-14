<div class="bx-def-padding-thd">
<div class="quick_links_elink">
	<div class="lcont_top">
		<a href="<?=$a['category_url'];?>" <?=$a['onclick'];?> <?=$a['target'];?>  class="main_l bx-def-font-large"><?=$a['category_name'];?></a>
		<div class="js_control_section" id="js_control_section<?=$a['unit_id'];?>" title="Show / Hide" bxchild="lcont_other<?=$a['unit_id'];?>" style="background-position: 0px 0px;"></div>
	</div>
	<div class="quick_links_elink_lcont" id="lcont_other<?=$a['unit_id'];?>">
		<div class="quick_links_elink_pic"><?=$a['category_cover_image'];?></div>
		<div class="lcont_other" >
			<?=$a['sub_categories_list'];?>
			<div class="clear_both"></div>
		</div>
	</div>
	<script type="text/javascript">
		var oShowHideController<?=$a['unit_id'];?> = new ShowHideController();
		$("#js_control_section<?=$a['unit_id'];?>").click( function() { oShowHideController<?=$a['unit_id'];?>.ShowHideToggle(this) } );
	</script>
</div>
</div>
