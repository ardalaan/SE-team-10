<?=$a['main_menu'];?>
<?=$a['sub_menu'];?>
<script type="text/javascript">
	function BxEvoTopMenu(oOptions){}

	BxEvoTopMenu.prototype.showCaptionSubmenu = function(oLink) {
		return this.showSubmenu(oLink, 'sys_ph_caption_submenu');
    };

    BxEvoTopMenu.prototype.showSubmenuSubmenu = function(oLink) {
    	return this.showSubmenu(oLink, 'sys_ph_submenu_submenu');
    };

    BxEvoTopMenu.prototype.showSubmenu = function(oLink, sPopupId) {
    	$('#' + sPopupId).dolPopup({
    		pointer:{
    			el:$(oLink)
    		},
            onBeforeShow: function() {
            	$(oLink).find('.sys-icon').removeClass('chevron-down').addClass('chevron-up');
            },
            onHide: function() {
            	$(oLink).find('.sys-icon').addClass('chevron-down').removeClass('chevron-up');
            }
        });

    	return false;
    };

    var oBxEvoTopMenu = new BxEvoTopMenu({});
</script>