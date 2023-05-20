<?php $mixedData=array (
  'top' => 
  array (
    0 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => false,
        'content' => 
        array (
          'class' => '',
        ),
      ),
      'menu_caption' => '<b class="menu_item_username">admin</b>',
      'menu_link' => 'javascript:void(0)',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<div class="menu_item_indent"></div>
<div class="menu_item_thumbnail bx-def-margin-sec-right">
	
	
		<i class="sys-icon user"></i>
	
	<i class="sys-online-offline-changer sys-icon circle sys-status-offline" title="Offline"></i>
</div>',
      'bubble_box' => NULL,
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 1,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 1,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Presence</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => 'bx_import(\'BxDolUserStatusView\');
$oStatusView = new BxDolUserStatusView();
return $oStatusView->getMemberMenuStatuses();',
        'content' => 
        array (
          'menu_id' => 1,
          'menu_name' => 'MemberBlock',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 1,
              'item_link' => 'http://localhost:8080/dolphin4/admin',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => '<b class="menu_item_username">admin</b>',
              'bx_if:part_image' => 
              array (
                'condition' => '',
                'content' => 
                array (
                  'item_img' => '',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 1,
              'item_link' => 'http://localhost:8080/dolphin4/admin',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => '<b class="menu_item_username">admin</b>',
              'bx_if:part_image' => 
              array (
                'condition' => '',
                'content' => 
                array (
                  'item_img' => '',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
  'top_extra' => 
  array (
    0 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item ',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'javascript:void(0)',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<i class="sys-icon envelope" alt="" ></i>',
      'bubble_box' => '<div class="bubble" id="bubble_Mail" style="display:none">
    <span class="bubble_count">0</span>
</div>    
',
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 2,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 2,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Mail</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => 'bx_import( \'BxTemplMailBox\' );
// return list of messages ;
return BxTemplMailBox::get_member_menu_messages_list({ID});',
        'content' => 
        array (
          'menu_id' => 2,
          'menu_name' => 'Mail',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 2,
              'item_link' => 'mail.php?mode=inbox',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Mail',
              'bx_if:part_image' => 
              array (
                'condition' => 'envelope',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon envelope" alt="Mail" ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 2,
              'item_link' => 'mail.php?mode=inbox',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Mail',
              'bx_if:part_image' => 
              array (
                'condition' => 'envelope',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon envelope" alt="Mail" ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    1 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item ',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'javascript:void(0)',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<i class="sys-icon users" alt="" ></i>',
      'bubble_box' => '<div class="bubble" id="bubble_Friends" style="display:none">
    <span class="bubble_count">0</span>
</div>    
',
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 3,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 3,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Friends</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => 'bx_import( \'BxDolFriendsPageView\' );
return BxDolFriendsPageView::get_member_menu_friends_list({ID});',
        'content' => 
        array (
          'menu_id' => 3,
          'menu_name' => 'Friends',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 3,
              'item_link' => 'viewFriends.php?iUser=1',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Friends',
              'bx_if:part_image' => 
              array (
                'condition' => 'users',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon users" alt="Friends" ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 3,
              'item_link' => 'viewFriends.php?iUser=1',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Friends',
              'bx_if:part_image' => 
              array (
                'condition' => 'users',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon users" alt="Friends" ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    2 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item ',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'javascript:void(0)',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<i class="sys-icon bell" alt="" ></i>',
      'bubble_box' => '<div class="bubble" id="bubble_Spy" style="display:none">
    <span class="bubble_count">0</span>
</div>    
',
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 20,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 20,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Notifications</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => 'BxDolService::call(\'spy\', \'get_member_menu_spy_data\'); ',
        'content' => 
        array (
          'menu_id' => 20,
          'menu_name' => 'Spy',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 20,
              'item_link' => 'm/spy/',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Notifications',
              'bx_if:part_image' => 
              array (
                'condition' => 'bell',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon bell" alt="Notifications" ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 20,
              'item_link' => 'm/spy/',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Notifications',
              'bx_if:part_image' => 
              array (
                'condition' => 'bell',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon bell" alt="Notifications" ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    3 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item ',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'javascript:void(0)',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<i class="sys-icon shopping-cart" alt="" ></i>',
      'bubble_box' => '<div class="bubble" id="bubble_ShoppingCart" style="display:none">
    <span class="bubble_count">0</span>
</div>    
',
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 4,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 4,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Shopping Cart</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => 'bx_import(\'BxDolPayments\');
return BxDolPayments::getInstance()->getCartItems();',
        'content' => 
        array (
          'menu_id' => 4,
          'menu_name' => 'ShoppingCart',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 4,
              'item_link' => 'cart.php',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Shopping Cart',
              'bx_if:part_image' => 
              array (
                'condition' => 'shopping-cart',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon shopping-cart" alt="Shopping Cart" ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 4,
              'item_link' => 'cart.php',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Shopping Cart',
              'bx_if:part_image' => 
              array (
                'condition' => 'shopping-cart',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon shopping-cart" alt="Shopping Cart" ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    4 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item ',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'http://localhost:8080/dolphin4/administration/',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<i class="sys-icon wrench" alt="" ></i>',
      'bubble_box' => NULL,
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 5,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 5,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Go to admin panel</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => '',
        'content' => 
        array (
          'menu_id' => 5,
          'menu_name' => 'AdminPanel',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 5,
              'item_link' => 'http://localhost:8080/dolphin4/administration/',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Admin Panel',
              'bx_if:part_image' => 
              array (
                'condition' => 'wrench',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon wrench" alt="Admin Panel" ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 5,
              'item_link' => 'http://localhost:8080/dolphin4/administration/',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Admin Panel',
              'bx_if:part_image' => 
              array (
                'condition' => 'wrench',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon wrench" alt="Admin Panel" ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    5 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item extra_item_add_content',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'javascript:void(0)',
      'extended_action' => NULL,
      'target' => NULL,
      'menu_image' => '<i class="sys-icon plus" alt="" ></i>',
      'bubble_box' => '<div class="bubble" id="bubble_AddContent" style="display:none">
    <span class="bubble_count"></span>
</div>    
',
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 6,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 6,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Add New ...</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => 'bx_import( \'BxDolUserStatusView\' );
$oStatusView = new BxDolUserStatusView();
return $oStatusView -> getStatusField({ID});',
        'content' => 
        array (
          'menu_id' => 6,
          'menu_name' => 'AddContent',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 6,
              'item_link' => 'javascript:void(0);',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Add New ...',
              'bx_if:part_image' => 
              array (
                'condition' => 'plus',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon plus" alt="Add New ..." ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 6,
              'item_link' => 'javascript:void(0);',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Add New ...',
              'bx_if:part_image' => 
              array (
                'condition' => 'plus',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon plus" alt="Add New ..." ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    6 => 
    array (
      'bx_if:show_class' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'class' => 'extra_item bx-phone-hide',
        ),
      ),
      'menu_caption' => NULL,
      'menu_link' => 'javascript:void(0)',
      'extended_action' => 'onclick="oBxSctrMain.showBlock();"',
      'target' => NULL,
      'menu_image' => '<i class="sys-icon magic" alt="" ></i>',
      'bubble_box' => NULL,
      'indent' => 'menu_item_bottom',
      'item_link_indent' => 'bottom_indent',
      'menu_id' => 17,
      'bx_if:menu_desc' => 
      array (
        'condition' => true,
        'content' => 
        array (
          'menu_id' => 17,
          'desc_window' => '<table class="description bx-def-padding-sec bx-def-round-corners bx-def-shadow">
    <tr><td>Customize site layout</td></tr>
</table>
',
          'desc_indent' => 'description_bottom',
        ),
      ),
      'bx_if:sub_menu' => 
      array (
        'condition' => '',
        'content' => 
        array (
          'menu_id' => 17,
          'menu_name' => 'SiteCustomizer',
          'bx_if:reduce_element_top' => 
          array (
            'condition' => true,
            'content' => 
            array (
              'menu_id' => 17,
              'item_link' => '',
              'extended_action' => '',
              'cover' => 'top_cover',
              'item_name' => 'Site Customizer',
              'bx_if:part_image' => 
              array (
                'condition' => 'magic',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon magic" alt="Site Customizer" ></i>',
                ),
              ),
            ),
          ),
          'bx_if:reduce_element_bottom' => 
          array (
            'condition' => false,
            'content' => 
            array (
              'menu_id' => 17,
              'item_link' => '',
              'extended_action' => '',
              'cover' => 'bottom_cover',
              'item_name' => 'Site Customizer',
              'bx_if:part_image' => 
              array (
                'condition' => 'magic',
                'content' => 
                array (
                  'item_img' => '<i class="sys-icon magic" alt="Site Customizer" ></i>',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
  'bubbles' => '"Mail" : {count:\'0\'}, 
"Friends" : {count:\'0\'}, 
"Spy" : {count:\'0\'}, 
"ShoppingCart" : {count:\'0\'}, 
"AddContent" : {count:\'\'}, 
',
); ?>