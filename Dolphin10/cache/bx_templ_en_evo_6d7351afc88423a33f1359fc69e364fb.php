<?=$a['content'];?>
<script type="text/javascript" language="javascript">
	$('.bx-splash .bx-btn-sa-join').bind('click', function() {
		showPopupJoinForm();

		return false;
	});

	$('.bx-splash .bx-btn-sa-login').bind('click', function() {
		showPopupLoginForm();

		return false;
	});
</script>