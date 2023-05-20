<div class="adm-dashboard-help">
	<?=$a['content'];?>
	<div class="adm-ds-help-btn bx-def-margin-sec-top">
		<script>
			function bx_adm_hide_help() {
			    $.post('http://localhost:8080/dolphin4/administration/', {hide_admin_help:1}, function(data) {
			        $(".adm-ds-help").parents().filter(".disignBoxFirst:first").slideUp(function () {
			            $(this).remove();
			        });
			    });
			}
		</script>
		<button class="bx-btn bx-btn-small" onclick="bx_adm_hide_help()">Don't show it anymore</button>
	</div>
</div>