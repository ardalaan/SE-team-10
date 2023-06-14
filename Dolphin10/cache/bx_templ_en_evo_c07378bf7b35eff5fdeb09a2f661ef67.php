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
    <body class="bx-def-font">
        <?=$this->processInjection($GLOBALS['_page']['name_index'], "injection_header")?>
        <div class="main" style="border-width:0px; width:625px;">
            <div class="dbContent"><?=$a['page_main_code'];?></div>
        </div>
    </body>
</html>
