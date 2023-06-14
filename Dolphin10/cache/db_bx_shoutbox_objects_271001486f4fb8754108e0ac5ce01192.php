<?php $mixedData=array (
  'bx_shoutbox' => 
  array (
    'id' => 1,
    'name' => 'bx_shoutbox',
    'title' => '_bx_shoutbox',
    'table' => 'bx_shoutbox_messages',
    'code_allow_use' => '',
    'code_allow_delete' => '',
    'code_allow_block' => '',
  ),
  'bx_events' => 
  array (
    'id' => 2,
    'name' => 'bx_events',
    'title' => '_sys_module_events',
    'table' => 'bx_events_shoutbox',
    'code_allow_use' => 'return BxDolService::call("events", "is_fan", array($iHandler));',
    'code_allow_delete' => 'return BxDolService::call("events", "is_entry_admin", array($iHandler));',
    'code_allow_block' => '',
  ),
  'bx_groups' => 
  array (
    'id' => 3,
    'name' => 'bx_groups',
    'title' => '_sys_module_groups',
    'table' => 'bx_groups_shoutbox',
    'code_allow_use' => 'return BxDolService::call("groups", "is_fan", array($iHandler));',
    'code_allow_delete' => 'return BxDolService::call("groups", "is_entry_admin", array($iHandler));',
    'code_allow_block' => '',
  ),
); ?>