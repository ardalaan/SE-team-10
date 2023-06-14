<div class="sys-profile-cover bx-def-margin-top bx-def-border bx-def-round-corners">
	<div class="sys-profile-cover-bg-l1<?=$a['background_class'];?>"<?php if($a['bx_if:show_background']['condition']){ ?> style="background-image: url(<?=$a['bx_if:show_background']['content']['background'];?>)"<?php } ?>></div>
	<div class="sys-profile-cover-bg-l2"></div>
	<?php if($a['bx_if:show_actions']['condition']){ ?>
		<div class="sys-profile-cover-actions bx-def-padding">
                    <?php if($a['bx_if:show_actions']['content']['bx_if:show_action_thumbnail']['condition']){ ?>
                        <a class="bx-btn bx-btn-small sys-pca-change-background" href="<?=$a['bx_if:show_actions']['content']['bx_if:show_action_thumbnail']['content']['href_upload_thumbnail'];?>" title="Change Thumbnail"> <i class="sys-icon user sys-pca-icon"></i><span class="sys-pca-text" >Change Thumbnail</span></a>
                    <?php } ?>
                    <?php if($a['bx_if:show_actions']['content']['bx_if:show_action_cover']['condition']){ ?>
                        <a class="bx-btn bx-btn-small sys-pca-change-background" href="<?=$a['bx_if:show_actions']['content']['bx_if:show_action_cover']['content']['href_upload'];?>" title="Change Cover"><i class="sys-icon picture-o sys-pca-icon"></i><span class="sys-pca-text">Change Cover</span></a>
                    <?php } ?>
		</div>
	<?php } ?>
	<div class="sys-profile-cover-cnt">
		<div class="sys-profile-cover-thumbnail">
			<?php if($a['bx_if:show_thumbnail_image']['condition']){ ?>
				<a class="sys-pct-link" href="<?=$a['bx_if:show_thumbnail_image']['content']['thumbnail_href'];?>">
					<img class="sys-pct-image" src="<?=$a['bx_if:show_thumbnail_image']['content']['thumbnail'];?>" src-2x="<?=$a['bx_if:show_thumbnail_image']['content']['thumbnail2x'];?>" />
				</a>
			<?php } ?>
			<?php if($a['bx_if:show_thumbnail_letter_text']['condition']){ ?><p class="sys-pct-letter"><?=$a['bx_if:show_thumbnail_letter_text']['content']['letter'];?></p><?php } ?>
			<?php if($a['bx_if:show_thumbnail_letter_link']['condition']){ ?>
				<a class="sys-pct-link" href="<?=$a['bx_if:show_thumbnail_letter_link']['content']['thumbnail_href'];?>">
					<p class="sys-pct-letter"><?=$a['bx_if:show_thumbnail_letter_link']['content']['letter'];?></p>
				</a>
			<?php } ?>
		</div>
		<div class="sys-profile-cover-text">
			<div class="sys-profile-cover-text-cnt">
				<h1 class="sys-pct-nickname bx-def-font-h1"><?=$a['nickname'];?></h1>
				<p class="sys-pct-status bx-def-padding-sec-top"><?=$a['status'];?></p>
			</div>
		</div>
		<div class="sys-profile-cover-menu">
			<div class="sys-profile-cover-menu-cnt">
				<?php if(is_array($a['bx_repeat:menu_items'])) for($i=0; $i<count($a['bx_repeat:menu_items']); $i++){ ?>
					<a class="sys-pcm-item bx-def-margin-left-auto" href="<?=$a['bx_repeat:menu_items'][$i]['href'];?>"<?php if($a['bx_repeat:menu_items'][$i]['bx_if:show_onclick']['condition']){ ?> onclick="<?=$a['bx_repeat:menu_items'][$i]['bx_if:show_onclick']['content']['onclick'];?>"<?php } ?><?php if($a['bx_repeat:menu_items'][$i]['bx_if:show_target']['condition']){ ?> target="<?=$a['bx_repeat:menu_items'][$i]['bx_if:show_target']['content']['target'];?>"<?php } ?>><?=$a['bx_repeat:menu_items'][$i]['caption'];?></a>
				<?php } else if(is_string($a['bx_repeat:menu_items'])) echo $a['bx_repeat:menu_items']; ?>
			</div>
		</div>
	</div>
</div>
