<?php $mixedData=array (
  'Profile' => 
  array (
    0 => 
    array (
      'Caption' => '_Simle Messenger',
      'Icon' => '',
      'Url' => '',
      'Script' => '',
      'Eval' => 'return BxDolService::call(\'simple_messenger\', \'get_messenger_field\', array({ID}));',
      'bDisplayInSubMenuHeader' => 0,
    ),
    1 => 
    array (
      'Caption' => '{evalResult}',
      'Icon' => 'edit',
      'Url' => 'pedit.php?ID={ID}',
      'Script' => '',
      'Eval' => 'if ({ID} == {member_id} || isAdmin({member_id}) || isModerator({member_id})) return _t(\'{cpt_edit}\');',
      'bDisplayInSubMenuHeader' => 0,
    ),
    2 => 
    array (
      'Caption' => '{evalResult}',
      'Icon' => 'envelope',
      'Url' => 'mail.php?mode=compose&recipient_id={ID}',
      'Script' => '',
      'Eval' => 'if ({ID} == {member_id}) return;
return _t(\'{cpt_send_letter}\');',
      'bDisplayInSubMenuHeader' => 0,
    ),
    3 => 
    array (
      'Caption' => '{cpt_fave}',
      'Icon' => 'asterisk',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFaveAdd({ID}, {member_id});',
      'bDisplayInSubMenuHeader' => 0,
    ),
    4 => 
    array (
      'Caption' => '{cpt_remove_fave}',
      'Icon' => 'asterisk',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFaveCancel({ID}, {member_id});',
      'bDisplayInSubMenuHeader' => 0,
    ),
    5 => 
    array (
      'Caption' => '{cpt_befriend}',
      'Icon' => 'plus',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFriendAdd({ID}, {member_id});',
      'bDisplayInSubMenuHeader' => 0,
    ),
    6 => 
    array (
      'Caption' => '{cpt_remove_friend}',
      'Icon' => 'minus',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFriendCancel({ID}, {member_id}, false);',
      'bDisplayInSubMenuHeader' => 0,
    ),
    7 => 
    array (
      'Caption' => '{cpt_greet}',
      'Icon' => 'hand-o-right',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'if ({ID} == {member_id}) return;

return "$.post(\'greet.php\', { sendto: \'{ID}\' }, function(sData){ $(\'#ajaxy_popup_result_div_{ID}\').html(sData) } );return false;";
',
      'bDisplayInSubMenuHeader' => 0,
    ),
    8 => 
    array (
      'Caption' => '{cpt_get_mail}',
      'Icon' => 'envelope-o',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'if ({ID} == {member_id}) return;

$bAnonymousMode  = \'{anonym_mode}\';

if ( !$bAnonymousMode ) {
    return "$.post(\'freemail.php\', { ID: \'{ID}\' }, function(sData){ $(\'#ajaxy_popup_result_div_{ID}\').html(sData) } );return false;";
}
',
      'bDisplayInSubMenuHeader' => 0,
    ),
    9 => 
    array (
      'Caption' => '{cpt_share}',
      'Icon' => 'share-square-o',
      'Url' => '',
      'Script' => 'return launchTellFriendProfile({ID});',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    10 => 
    array (
      'Caption' => '{cpt_report}',
      'Icon' => 'exclamation-circle',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'if ({ID} == {member_id}) return;

return  "$.post(\'list_pop.php?action=spam\', { ID: \'{ID}\' }, function(sData){ $(\'#ajaxy_popup_result_div_{ID}\').html(sData) } );return false;";
',
      'bDisplayInSubMenuHeader' => 0,
    ),
    11 => 
    array (
      'Caption' => '{cpt_block}',
      'Icon' => 'ban',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'if ( {ID} == {member_id} || isBlocked({member_id}, {ID}) ) return;

return  "$.post(\'list_pop.php?action=block\', { ID: \'{ID}\' }, function(sData){ $(\'#ajaxy_popup_result_div_{ID}\').html(sData) } );return false;";
',
      'bDisplayInSubMenuHeader' => 0,
    ),
    12 => 
    array (
      'Caption' => '{cpt_unblock}',
      'Icon' => 'ban',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'if ({ID} == {member_id} || !isBlocked({member_id}, {ID}) ) return;

return "$.post(\'list_pop.php?action=unblock\', { ID: \'{ID}\' }, function(sData){ $(\'#ajaxy_popup_result_div_{ID}\').html(sData) } );return false;";
',
      'bDisplayInSubMenuHeader' => 0,
    ),
    13 => 
    array (
      'Caption' => '{sbs_profile_title}',
      'Icon' => 'paperclip',
      'Url' => '',
      'Script' => '{sbs_profile_script}',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    14 => 
    array (
      'Caption' => '{cpt_activate}',
      'Icon' => 'check',
      'Url' => '',
      'Script' => 'getHtmlData(\'ajaxy_popup_result_div_{ID}\', \'list_pop.php?action={act_activate}&ID={ID}\', false, \'post\'); return false;',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    15 => 
    array (
      'Caption' => '{cpt_ban}',
      'Icon' => 'exclamation-circle',
      'Url' => '',
      'Script' => 'getHtmlData(\'ajaxy_popup_result_div_{ID}\', \'list_pop.php?action={act_ban}&ID={ID}\', false, \'post\'); return false;',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    16 => 
    array (
      'Caption' => '{evalResult}',
      'Icon' => 'comments-o',
      'Url' => '',
      'Script' => 'window.open( \'modules/boonex/messenger/popup.php?rspId={ID}\' , \'Messenger\', \'width=550,height=500,toolbar=0,directories=0,menubar=0,status=0,location=0,scrollbars=0,resizable=1\', 0);',
      'Eval' => 'return BxDolService::call(\'messenger\', \'get_action_link\', array({member_id}, {ID}));',
      'bDisplayInSubMenuHeader' => 0,
    ),
    17 => 
    array (
      'Caption' => '{cpt_delete}',
      'Icon' => 'times',
      'Url' => '',
      'Script' => 'getHtmlData(\'ajaxy_popup_result_div_{ID}\', \'list_pop.php?action=delete&ID={ID}\', false, \'post\', true); return false;',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    18 => 
    array (
      'Caption' => '{cpt_delete_spam}',
      'Icon' => 'times',
      'Url' => '',
      'Script' => 'getHtmlData(\'ajaxy_popup_result_div_{ID}\', \'list_pop.php?action=delete_spam&ID={ID}\', false, \'post\', true); return false;',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    19 => 
    array (
      'Caption' => '{cpt_feature}',
      'Icon' => 'asterisk',
      'Url' => '',
      'Script' => 'getHtmlData(\'ajaxy_popup_result_div_{ID}\', \'list_pop.php?action={act_feature}&ID={ID}\', false, \'post\'); return false;',
      'Eval' => '',
      'bDisplayInSubMenuHeader' => 0,
    ),
    20 => 
    array (
      'Caption' => '{evalResult}',
      'Icon' => 'magic',
      'Url' => '',
      'Script' => '$(\'#profile_customize_page\').fadeIn(\'slow\');',
      'Eval' => 'return array(\'evalResult\' => defined(\'BX_PROFILE_PAGE\') && {ID} == {member_id} && getParam(\'bx_profile_customize_enable\') == \'on\' ? _t( \'_Customize\' ) : null, \'evalResultCssClassWrapper\' => \'bx-phone-hide\');',
      'bDisplayInSubMenuHeader' => 0,
    ),
  ),
  'ProfileTitle' => 
  array (
    0 => 
    array (
      'Caption' => '{cpt_am_friend_add}',
      'Icon' => 'plus',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFriendAdd({ID}, {member_id}, false);',
      'bDisplayInSubMenuHeader' => 1,
    ),
    1 => 
    array (
      'Caption' => '{cpt_am_friend_accept}',
      'Icon' => 'plus',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFriendAccept({ID}, {member_id}, false);',
      'bDisplayInSubMenuHeader' => 1,
    ),
    2 => 
    array (
      'Caption' => '{cpt_am_friend_cancel}',
      'Icon' => 'minus',
      'Url' => '',
      'Script' => '{evalResult}',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getScriptFriendCancel({ID}, {member_id}, false);',
      'bDisplayInSubMenuHeader' => 1,
    ),
    3 => 
    array (
      'Caption' => '{cpt_am_profile_message}',
      'Icon' => 'envelope',
      'Url' => '{evalResult}',
      'Script' => '',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getUrlProfileMessage({ID});',
      'bDisplayInSubMenuHeader' => 1,
    ),
    4 => 
    array (
      'Caption' => '{cpt_am_profile_account_page}',
      'Icon' => 'tachometer',
      'Url' => '{evalResult}',
      'Script' => '',
      'Eval' => 'return $GLOBALS[\'oTopMenu\']->getUrlAccountPage({ID});',
      'bDisplayInSubMenuHeader' => 1,
    ),
  ),
); ?>