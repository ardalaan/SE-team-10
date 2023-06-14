<!DOCTYPE html>
<html>
	<title><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></title>
   	<meta http-equiv="Content-Type" content="text/html; charset=<?=$this->parseSystemKey('page_charset', $mixedKeyWrapperHtml);?>" />
    <base href="http://localhost:8080/SE-team-10/Dolphin10/" />	
	<bx_include_css />
	<bx_include_js />
    <?=$this->processInjection($GLOBALS['_page']['name_index'], "mobile_injection_head")?>
    <script>
        $(document).ready(function () {
            // highlight rows when user touches them
            $('.bx-sys-row').bind('touchstart', function (e) {
                $(this).addClass('bx-sys-mobile-box-bg-sel');
            });
            $('.bx-sys-row').bind('touchcancel touchend', function (e) {
                $('.bx-sys-mobile-box-bg-sel').removeClass('bx-sys-mobile-box-bg-sel');
            });
            // don't hightlight row when user press on links inside rows
            $('.bx-sys-row a').bind('touchstart', function (e) {
                e.stopPropagation();
            });
            // don't fire touch event for row when user press on links inside rows
            $('.bx-sys-row a').bind('click', function (e) {
                e.stopPropagation();
            });
        });
    </script>
</head>
<body class="bx-def-font bx-sys-mobile-page bx-sys-mobile-text">
    <?=$this->processInjection($GLOBALS['_page']['name_index'], "mobile_injection_header")?>
    <?=$a['page_main_code'];?>
    <?=$this->processInjection($GLOBALS['_page']['name_index'], "mobile_injection_footer")?>
</body>
</html>
