<!DOCTYPE html>
<html dir="<?=$this->parseSystemKey('dir', $mixedKeyWrapperHtml);?>">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<meta http-equiv="Content-Type" content="text/html; charset=<?=$this->parseSystemKey('page_charset', $mixedKeyWrapperHtml);?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
		<title><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></title>

		<bx_include_css />

		<bx_include_js />

		<?=$this->parseSystemKey('dol_images', $mixedKeyWrapperHtml);?>
        <?=$this->parseSystemKey('dol_lang', $mixedKeyWrapperHtml);?>
        <?=$this->parseSystemKey('dol_options', $mixedKeyWrapperHtml);?>

		<script defer type="text/javascript">
			var site_url = 'http://localhost:8080/SE-team-10/Dolphin10/';
			var aUserInfoTimers = new Array();
			var glUserInfoDisabled = 'yes';
    		$(document).ready( function() {
    			/*--- Init RSS Feed Support ---*/
			    $( 'div.RSSAggrCont' ).dolRSSFeed();

			    /*--- Init Retina Support ---*/
				$('img.bx-img-retina').dolRetina();
		    } );
        </script>

        <?=$this->parseSystemKey('extra_js', $mixedKeyWrapperHtml);?>

	   <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_head")?>
    </head>
    <body <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_body")?> class="bx-def-font">
        <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_header")?>
        <div id="FloatDesc"></div>
