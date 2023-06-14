<div class="dbTopMenu">
	<?php if(is_array($a['bx_repeat:items'])) for($i=0; $i<count($a['bx_repeat:items']); $i++){ ?>
	    <?=$this->parseSystemKey('content', $mixedKeyWrapperHtml);?>
	<?php } else if(is_string($a['bx_repeat:items'])) echo $a['bx_repeat:items']; ?>
</div>