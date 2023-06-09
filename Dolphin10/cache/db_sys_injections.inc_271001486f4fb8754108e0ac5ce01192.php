<?php $mixedData=array (
  'page_0' => 
  array (
    'injection_header' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'flash_integration',
        'key' => 'injection_header',
        'type' => 'php',
        'data' => 'return getRayIntegrationJS(true);',
        'replace' => 0,
      ),
      1 => 
      array (
        'page_index' => 0,
        'name' => 'messenger_invitation',
        'key' => 'injection_header',
        'type' => 'php',
        'data' => 'return BxDolService::call(\'messenger\', \'get_invitation\');',
        'replace' => 0,
      ),
      2 => 
      array (
        'page_index' => 0,
        'name' => 'bx_simple_messenger_core_init',
        'key' => 'injection_header',
        'type' => 'php',
        'data' => 'return BxDolService::call(\'simple_messenger\', \'get_messenger_core\');',
        'replace' => 0,
      ),
    ),
    'banner_bottom' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'banner_bottom',
        'key' => 'banner_bottom',
        'type' => 'php',
        'data' => 'return banner_put_nv(4);',
        'replace' => 0,
      ),
    ),
    'banner_right' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'banner_right',
        'key' => 'banner_right',
        'type' => 'php',
        'data' => 'return banner_put_nv(3);',
        'replace' => 0,
      ),
    ),
    'banner_top' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'banner_top',
        'key' => 'banner_top',
        'type' => 'php',
        'data' => 'return banner_put_nv(1);',
        'replace' => 0,
      ),
    ),
    'banner_left' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'banner_left',
        'key' => 'banner_left',
        'type' => 'php',
        'data' => 'return banner_put_nv(2);',
        'replace' => 0,
      ),
    ),
    'injection_footer' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'sys_confirm_popup',
        'key' => 'injection_footer',
        'type' => 'php',
        'data' => 'return $GLOBALS[\'oSysTemplate\']->parseHtmlByName(\'transBoxConfirm.html\', array());',
        'replace' => 0,
      ),
      1 => 
      array (
        'page_index' => 0,
        'name' => 'sys_prompt_popup',
        'key' => 'injection_footer',
        'type' => 'php',
        'data' => 'return $GLOBALS[\'oSysTemplate\']->parseHtmlByName(\'transBoxPrompt.html\', array());',
        'replace' => 0,
      ),
      2 => 
      array (
        'page_index' => 0,
        'name' => 'sys_body',
        'key' => 'injection_footer',
        'type' => 'text',
        'data' => '',
        'replace' => 0,
      ),
      3 => 
      array (
        'page_index' => 0,
        'name' => 'bx_chat_plus',
        'key' => 'injection_footer',
        'type' => 'php',
        'data' => 'return BxDolService::call(\'chat_plus\', \'helpdesk_code\');',
        'replace' => 0,
      ),
    ),
    'injection_head' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'sys_head',
        'key' => 'injection_head',
        'type' => 'text',
        'data' => '',
        'replace' => 0,
      ),
      1 => 
      array (
        'page_index' => 0,
        'name' => 'bx_sctr_style',
        'key' => 'injection_head',
        'type' => 'php',
        'data' => 'return BxDolService::call(\'site_customize\', \'get_site_style\');',
        'replace' => 0,
      ),
    ),
    'injection_between_top_menu_content' => 
    array (
      0 => 
      array (
        'page_index' => 0,
        'name' => 'bx_sctr_block',
        'key' => 'injection_between_top_menu_content',
        'type' => 'php',
        'data' => 'return BxDolService::call(\'site_customize\', \'get_customize_block\');',
        'replace' => 0,
      ),
    ),
  ),
); ?>