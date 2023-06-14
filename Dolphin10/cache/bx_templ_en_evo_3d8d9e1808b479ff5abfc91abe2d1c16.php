<!DOCTYPE html>
<html>
	<head>
		<title><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></title>
		<base href="http://localhost:8080/SE-team-10/Dolphin10/" />
		<meta http-equiv="Content-Type" content="text/html; charset=<?=$this->parseSystemKey('page_charset', $mixedKeyWrapperHtml);?>" />
        <bx_include_css />
        <bx_include_js />
        <?=$this->parseSystemKey('dol_images', $mixedKeyWrapperHtml);?>
        <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_head")?>
	</head>
    <body <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_body")?> class="bx-def-font bx-def-padding-sec">
        <?=$this->processInjection($GLOBALS['_page']['name_index'], "mobile_injection_header")?>
        <div id="FloatDesc" style="position:absolute;display:none;z-index:100;"></div>
		<div class="disignBoxFirst bx-def-border">
			<div class="boxFirstHeader bx-def-bh-margin"><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></div>
			<div class="boxContent">
				<div class="clear_both"></div>
					<?=$a['page_code'];?>
				<div class="clear_both"></div>
			</div>
        </div>
        <?=$this->processInjection($GLOBALS['_page']['name_index'], "mobile_injection_footer")?>
	</body>
</html>
