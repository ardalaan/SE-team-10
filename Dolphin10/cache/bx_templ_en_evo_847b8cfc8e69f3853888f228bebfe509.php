<div class="sys_sub_menu_holder" data-anchor-target=".sys_sub_menu" data-start="@class:sys_sub_menu_holder sys_smh_hidden" data-top-top="@class:sys_sub_menu_holder sys_smh_visible"></div>
<div class="sys_sub_menu" data-start="@class:sys_sub_menu sys_sm_relative" data-top-top="@class:sys_sub_menu sys_sm_fixed">
	<div class="sys_sm sys_main_page_width">
	    <div class="sys_sm_cnt bx-def-margin-sec-leftright clearfix">
	        <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_sub_menu_before")?>
	            <?=$a['sub_menu'];?>
	        <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_sub_menu_after")?> 
	    </div>
	</div>
</div>