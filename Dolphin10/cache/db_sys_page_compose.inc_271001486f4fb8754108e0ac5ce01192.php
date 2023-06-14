<?php $mixedData=array (
  'ads' => 
  array (
    'Title' => 'Ads View',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          74 => 
          array (
            'Func' => 'AdDescription',
            'Content' => '',
            'Caption' => '_Description',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          75 => 
          array (
            'Func' => 'AdPhotos',
            'Content' => '',
            'Caption' => '_bx_ads_Ad_photos',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          76 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_Comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          77 => 
          array (
            'Func' => 'AdInfo',
            'Content' => '',
            'Caption' => '_Info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          78 => 
          array (
            'Func' => 'AdCustomInfo',
            'Content' => '',
            'Caption' => '_bx_ads_Custom_Values',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          79 => 
          array (
            'Func' => 'ActionList',
            'Content' => '',
            'Caption' => '_Actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          80 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          81 => 
          array (
            'Func' => 'Rate',
            'Content' => '',
            'Caption' => '_Rate',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          82 => 
          array (
            'Func' => 'UserOtherAds',
            'Content' => '',
            'Caption' => '_bx_ads_Users_other_listing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          86 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'location_block\', array(\'ads\', $this->oAds->oCmtsView->getId()));',
            'Caption' => '_Location',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'ads_home' => 
  array (
    'Title' => 'Ads Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          84 => 
          array (
            'Func' => 'featured',
            'Content' => '',
            'Caption' => '_bx_ads_last_featured',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          85 => 
          array (
            'Func' => 'categories',
            'Content' => '',
            'Caption' => '_bx_ads_Categories',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          87 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'homepage_part_block\', array (\'ads\'));',
            'Caption' => '_Map',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          83 => 
          array (
            'Func' => 'last',
            'Content' => '',
            'Caption' => '_bx_ads_last_ads',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'articles_home' => 
  array (
    'Title' => 'Articles Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          99 => 
          array (
            'Func' => 'Latest',
            'Content' => '',
            'Caption' => '_articles_bcaption_latest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          101 => 
          array (
            'Func' => 'Categories',
            'Content' => '',
            'Caption' => '_articles_bcaption_categories',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          102 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_articles_bcaption_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'articles_single' => 
  array (
    'Title' => 'Articles View Article',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          92 => 
          array (
            'Func' => 'Content',
            'Content' => '',
            'Caption' => '_articles_bcaption_view_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          93 => 
          array (
            'Func' => 'Comment',
            'Content' => '',
            'Caption' => '_articles_bcaption_view_comment',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          94 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_articles_bcaption_view_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          95 => 
          array (
            'Func' => 'Action',
            'Content' => '',
            'Caption' => '_articles_bcaption_view_action',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          96 => 
          array (
            'Func' => 'Vote',
            'Content' => '',
            'Caption' => '_articles_bcaption_view_vote',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          97 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'browse_page' => 
  array (
    'Title' => 'All Members',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          37 => 
          array (
            'Func' => 'SearchedMembersBlock',
            'Content' => '',
            'Caption' => '_People',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          36 => 
          array (
            'Func' => 'SettingsBlock',
            'Content' => '',
            'Caption' => '_Browse',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_avatar_main' => 
  array (
    'Title' => 'Avatar',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          104 => 
          array (
            'Func' => 'Wide',
            'Content' => '',
            'Caption' => '_bx_ava_block_wide',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          103 => 
          array (
            'Func' => 'Tight',
            'Content' => '',
            'Caption' => '_bx_ava_block_tight',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_blogs' => 
  array (
    'Title' => 'Blogs View Post',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          109 => 
          array (
            'Func' => 'PostView',
            'Content' => '',
            'Caption' => '_Title',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          110 => 
          array (
            'Func' => 'PostComments',
            'Content' => '',
            'Caption' => '_Comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          111 => 
          array (
            'Func' => 'PostOverview',
            'Content' => '',
            'Caption' => '_bx_blog_post_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          112 => 
          array (
            'Func' => 'PostRate',
            'Content' => '',
            'Caption' => '_Rate',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          113 => 
          array (
            'Func' => 'PostActions',
            'Content' => '',
            'Caption' => '_Actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          114 => 
          array (
            'Func' => 'PostSocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          115 => 
          array (
            'Func' => 'PostCategories',
            'Content' => '',
            'Caption' => '_bx_blog_Categories',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          116 => 
          array (
            'Func' => 'PostTags',
            'Content' => '',
            'Caption' => '_Tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_blogs_home' => 
  array (
    'Title' => 'Blogs Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          118 => 
          array (
            'Func' => 'Latest',
            'Content' => '',
            'Caption' => '_bx_blog_Latest_posts',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          120 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_bx_blog_Calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          119 => 
          array (
            'Func' => 'Top',
            'Content' => '',
            'Caption' => '_bx_blog_Top_blog',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_chat_plus' => 
  array (
    'Title' => 'Chat+',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          121 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'chat_plus\', \'chat_block\', array());',
            'Caption' => '_bx_chat_plus_chat',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_events_main' => 
  array (
    'Title' => 'Events Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          138 => 
          array (
            'Func' => 'UpcomingPhoto',
            'Content' => '',
            'Caption' => '_bx_events_block_upcoming_photo',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          139 => 
          array (
            'Func' => 'UpcomingList',
            'Content' => '',
            'Caption' => '_bx_events_block_upcoming_list',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          140 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'homepage_part_block\', array (\'events\'));',
            'Caption' => '_Map',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          141 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_bx_events_block_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_events_my' => 
  array (
    'Title' => 'Events User',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          144 => 
          array (
            'Func' => 'Owner',
            'Content' => '',
            'Caption' => '_bx_events_block_administration',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          145 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_events_block_user_events',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_events_view' => 
  array (
    'Title' => 'Events View Event',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          132 => 
          array (
            'Func' => 'Desc',
            'Content' => '',
            'Caption' => '_bx_events_block_desc',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          133 => 
          array (
            'Func' => 'Photos',
            'Content' => '',
            'Caption' => '_bx_events_block_photos',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          134 => 
          array (
            'Func' => 'Videos',
            'Content' => '',
            'Caption' => '_bx_events_block_videos',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          135 => 
          array (
            'Func' => 'Sounds',
            'Content' => '',
            'Caption' => '_bx_events_block_sounds',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          136 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_events_block_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          137 => 
          array (
            'Func' => 'ForumFeed',
            'Content' => '',
            'Caption' => '_sys_block_title_forum_feed',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          123 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_events_block_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          124 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_events_block_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          125 => 
          array (
            'Func' => 'Rate',
            'Content' => '',
            'Caption' => '_bx_events_block_rate',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          126 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          127 => 
          array (
            'Func' => 'Files',
            'Content' => '',
            'Caption' => '_bx_events_block_files',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          128 => 
          array (
            'Func' => 'Participants',
            'Content' => '',
            'Caption' => '_bx_events_block_participants',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          129 => 
          array (
            'Func' => 'ParticipantsUnconfirmed',
            'Content' => '',
            'Caption' => '_bx_events_block_participants_unconfirmed',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          130 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'location_block\', array(\'events\', $this->aDataEntry[$this->_oDb->_sFieldId]));',
            'Caption' => '_Location',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          131 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'shoutbox\', \'get_shoutbox\', array(\'bx_events\', $this->aDataEntry[$this->_oDb->_sFieldId]));',
            'Caption' => '_Chat',
            'Visible' => 'non,memb',
            'DesignBox' => 11,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_files_albums_my' => 
  array (
    'Title' => '',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          175 => 
          array (
            'Func' => 'add',
            'Content' => '',
            'Caption' => '_bx_files_albums_add',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          174 => 
          array (
            'Func' => 'adminShort',
            'Content' => '',
            'Caption' => '_bx_files_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          176 => 
          array (
            'Func' => 'adminFull',
            'Content' => '',
            'Caption' => '_bx_files_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          177 => 
          array (
            'Func' => 'adminFullDisapproved',
            'Content' => '',
            'Caption' => '_bx_files_albums_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          178 => 
          array (
            'Func' => 'edit',
            'Content' => '',
            'Caption' => '_bx_files_album_edit',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          179 => 
          array (
            'Func' => 'delete',
            'Content' => '',
            'Caption' => '_bx_files_album_delete',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          180 => 
          array (
            'Func' => 'organize',
            'Content' => '',
            'Caption' => '_bx_files_album_organize',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          181 => 
          array (
            'Func' => 'addObjects',
            'Content' => '',
            'Caption' => '_bx_files_album_add_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          182 => 
          array (
            'Func' => 'manageObjects',
            'Content' => '',
            'Caption' => '_bx_files_album_manage_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          183 => 
          array (
            'Func' => 'manageObjectsDisapproved',
            'Content' => '',
            'Caption' => '_bx_files_album_manage_objects_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          184 => 
          array (
            'Func' => 'manageObjectsPending',
            'Content' => '',
            'Caption' => '_bx_files_album_manage_objects_pending',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          185 => 
          array (
            'Func' => 'adminAlbumShort',
            'Content' => '',
            'Caption' => '_bx_files_album_main_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          186 => 
          array (
            'Func' => 'albumObjects',
            'Content' => '',
            'Caption' => '_bx_files_album_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          187 => 
          array (
            'Func' => 'my',
            'Content' => '',
            'Caption' => '_bx_files_albums_my',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_files_albums_owner' => 
  array (
    'Title' => 'Files Profile Folders',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          188 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_files_albums_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          189 => 
          array (
            'Func' => 'Favorited',
            'Content' => '',
            'Caption' => '_bx_files_favorited',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_files_album_view' => 
  array (
    'Title' => 'Files View Folder',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          156 => 
          array (
            'Func' => 'Objects',
            'Content' => '',
            'Caption' => '',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          157 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_files_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          158 => 
          array (
            'Func' => 'Author',
            'Content' => '',
            'Caption' => '_bx_files_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          159 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_files_info_album',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          160 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_files_actions',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_files_home' => 
  array (
    'Title' => 'Files Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          169 => 
          array (
            'Func' => 'Featured',
            'Content' => '',
            'Caption' => '_bx_files_featured',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          170 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_bx_files_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          171 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_Tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          172 => 
          array (
            'Func' => 'Albums',
            'Content' => '',
            'Caption' => '_bx_files_albums',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_files_view' => 
  array (
    'Title' => 'Files View File',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          161 => 
          array (
            'Func' => 'ViewFile',
            'Content' => '',
            'Caption' => '_bx_files_view',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          162 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_bx_files_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          163 => 
          array (
            'Func' => 'FileInfo',
            'Content' => '',
            'Caption' => '_bx_files_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          164 => 
          array (
            'Func' => 'MainFileInfo',
            'Content' => '',
            'Caption' => '_bx_files_info_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          165 => 
          array (
            'Func' => 'ActionList',
            'Content' => '',
            'Caption' => '_bx_files_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          166 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          167 => 
          array (
            'Func' => 'LastAlbums',
            'Content' => '',
            'Caption' => '_bx_files_albums_latest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          168 => 
          array (
            'Func' => 'RelatedFiles',
            'Content' => '',
            'Caption' => '_bx_files_related',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_groups_main' => 
  array (
    'Title' => 'Groups Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          217 => 
          array (
            'Func' => 'LatestFeaturedGroup',
            'Content' => '',
            'Caption' => '_bx_groups_block_latest_featured_group',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          218 => 
          array (
            'Func' => 'Recent',
            'Content' => '',
            'Caption' => '_bx_groups_block_recent',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          219 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'homepage_part_block\', array (\'groups\'));',
            'Caption' => '_Map',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          220 => 
          array (
            'Func' => 'Categories',
            'Content' => '',
            'Caption' => '_bx_groups_block_categories',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_groups_my' => 
  array (
    'Title' => 'Groups User',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          221 => 
          array (
            'Func' => 'Owner',
            'Content' => '',
            'Caption' => '_bx_groups_block_administration_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          222 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_groups_block_users_groups',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_groups_view' => 
  array (
    'Title' => 'Groups View Group',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          210 => 
          array (
            'Func' => 'Desc',
            'Content' => '',
            'Caption' => '_bx_groups_block_desc',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          211 => 
          array (
            'Func' => 'Photo',
            'Content' => '',
            'Caption' => '_bx_groups_block_photo',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          212 => 
          array (
            'Func' => 'Video',
            'Content' => '',
            'Caption' => '_bx_groups_block_video',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          213 => 
          array (
            'Func' => 'Sound',
            'Content' => '',
            'Caption' => '_bx_groups_block_sound',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          214 => 
          array (
            'Func' => 'Files',
            'Content' => '',
            'Caption' => '_bx_groups_block_files',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          215 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_groups_block_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          216 => 
          array (
            'Func' => 'ForumFeed',
            'Content' => '',
            'Caption' => '_sys_block_title_forum_feed',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          202 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_groups_block_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          203 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_groups_block_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          204 => 
          array (
            'Func' => 'Rate',
            'Content' => '',
            'Caption' => '_bx_groups_block_rate',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          205 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          206 => 
          array (
            'Func' => 'Fans',
            'Content' => '',
            'Caption' => '_bx_groups_block_fans',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          207 => 
          array (
            'Func' => 'FansUnconfirmed',
            'Content' => '',
            'Caption' => '_bx_groups_block_fans_unconfirmed',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          208 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'location_block\', array(\'groups\', $this->aDataEntry[$this->_oDb->_sFieldId]));',
            'Caption' => '_Location',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          209 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'shoutbox\', \'get_shoutbox\', array(\'bx_groups\', $this->aDataEntry[$this->_oDb->_sFieldId]));',
            'Caption' => '_Chat',
            'Visible' => 'non,memb',
            'DesignBox' => 11,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_gsearch' => 
  array (
    'Title' => 'Search Google',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          199 => 
          array (
            'Func' => 'SearchForm',
            'Content' => '',
            'Caption' => '_bx_gsearch_box_title_search_form',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          200 => 
          array (
            'Func' => 'SearchResults',
            'Content' => '',
            'Caption' => '_bx_gsearch_box_title_search_results',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_mbp_join' => 
  array (
    'Title' => 'Membership Join',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          444 => 
          array (
            'Func' => 'Select',
            'Content' => '',
            'Caption' => '_membership_bcaption_purchase_level',
            'Visible' => 'non',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_mbp_my_membership' => 
  array (
    'Title' => 'Membership My',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          445 => 
          array (
            'Func' => 'Current',
            'Content' => '',
            'Caption' => '_membership_bcaption_my_status',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          446 => 
          array (
            'Func' => 'Available',
            'Content' => '',
            'Caption' => '_membership_bcaption_select_level',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pfw_cart' => 
  array (
    'Title' => 'Payflow Shopping Cart',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 50,
        'Blocks' => 
        array (
          242 => 
          array (
            'Func' => 'Featured',
            'Content' => '',
            'Caption' => '_bx_pfw_bcpt_cart_featured',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 50,
        'Blocks' => 
        array (
          243 => 
          array (
            'Func' => 'Common',
            'Content' => '',
            'Caption' => '_bx_pfw_bcpt_cart_common',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pfw_details' => 
  array (
    'Title' => 'Payflow Payment Settings',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          246 => 
          array (
            'Func' => 'Details',
            'Content' => '',
            'Caption' => '_bx_pfw_bcpt_details',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pfw_history' => 
  array (
    'Title' => 'Payflow Cart History',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          244 => 
          array (
            'Func' => 'History',
            'Content' => '',
            'Caption' => '_bx_pfw_bcpt_cart_history',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pfw_orders' => 
  array (
    'Title' => 'Payflow Order Administration',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          245 => 
          array (
            'Func' => 'Orders',
            'Content' => '',
            'Caption' => '_bx_pfw_bcpt_processed_orders',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_albums_my' => 
  array (
    'Title' => '',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          273 => 
          array (
            'Func' => 'add',
            'Content' => '',
            'Caption' => '_bx_photos_albums_add',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          272 => 
          array (
            'Func' => 'adminShort',
            'Content' => '',
            'Caption' => '_bx_photos_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          274 => 
          array (
            'Func' => 'adminFull',
            'Content' => '',
            'Caption' => '_bx_photos_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          275 => 
          array (
            'Func' => 'adminFullDisapproved',
            'Content' => '',
            'Caption' => '_bx_photos_albums_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          276 => 
          array (
            'Func' => 'edit',
            'Content' => '',
            'Caption' => '_bx_photos_album_edit',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          277 => 
          array (
            'Func' => 'delete',
            'Content' => '',
            'Caption' => '_bx_photos_album_delete',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          278 => 
          array (
            'Func' => 'organize',
            'Content' => '',
            'Caption' => '_bx_photos_album_organize',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          279 => 
          array (
            'Func' => 'addObjects',
            'Content' => '',
            'Caption' => '_bx_photos_album_add_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          280 => 
          array (
            'Func' => 'manageObjects',
            'Content' => '',
            'Caption' => '_bx_photos_album_manage_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          281 => 
          array (
            'Func' => 'manageObjectsDisapproved',
            'Content' => '',
            'Caption' => '_bx_photos_album_manage_objects_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          282 => 
          array (
            'Func' => 'manageObjectsPending',
            'Content' => '',
            'Caption' => '_bx_photos_album_manage_objects_pending',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          283 => 
          array (
            'Func' => 'adminAlbumShort',
            'Content' => '',
            'Caption' => '_bx_photos_album_main_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          284 => 
          array (
            'Func' => 'albumObjects',
            'Content' => '',
            'Caption' => '_bx_photos_album_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          285 => 
          array (
            'Func' => 'my',
            'Content' => '',
            'Caption' => '_bx_photos_albums_my',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_albums_owner' => 
  array (
    'Title' => 'Photos Profile Albums',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          286 => 
          array (
            'Func' => 'ProfilePhotos',
            'Content' => '',
            'Caption' => '_bx_photos_photo_album_block',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          287 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_photos_albums_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          288 => 
          array (
            'Func' => 'Favorited',
            'Content' => '',
            'Caption' => '_bx_photos_favorited',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_album_view' => 
  array (
    'Title' => 'Photos View Album',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          267 => 
          array (
            'Func' => 'Objects',
            'Content' => '',
            'Caption' => '',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          268 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_photos_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          269 => 
          array (
            'Func' => 'Author',
            'Content' => '',
            'Caption' => '_bx_photos_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          270 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_photos_info_album',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          271 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_photos_actions',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_crop' => 
  array (
    'Title' => 'Photos Crop Photo',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          291 => 
          array (
            'Func' => 'Crop',
            'Content' => '',
            'Caption' => '_bx_photos_crop',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_home' => 
  array (
    'Title' => 'Photos Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          260 => 
          array (
            'Func' => 'Cover',
            'Content' => '',
            'Caption' => '_bx_photos_cover',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          263 => 
          array (
            'Func' => 'LatestFile',
            'Content' => '',
            'Caption' => '_bx_photos_latest_file',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          264 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_bx_photos_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      3 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          265 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_bx_photos_top_menu_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          261 => 
          array (
            'Func' => 'Albums',
            'Content' => '',
            'Caption' => '_bx_photos_albums',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          266 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_bx_photos_top_menu_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_rate' => 
  array (
    'Title' => 'Photos Rate',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          289 => 
          array (
            'Func' => 'RatedSet',
            'Content' => '',
            'Caption' => '_bx_photos_previous_rated',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          290 => 
          array (
            'Func' => 'RateObject',
            'Content' => '',
            'Caption' => '_bx_photos_rate_header',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_view' => 
  array (
    'Title' => 'Photos View Photo',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          252 => 
          array (
            'Func' => 'ViewFile',
            'Content' => '',
            'Caption' => '_bx_photos_view',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          253 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_bx_photos_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          254 => 
          array (
            'Func' => 'FileAuthor',
            'Content' => '',
            'Caption' => '_bx_photos_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          255 => 
          array (
            'Func' => 'MainFileInfo',
            'Content' => '',
            'Caption' => '_bx_photos_info_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          256 => 
          array (
            'Func' => 'ActionList',
            'Content' => '',
            'Caption' => '_bx_photos_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          257 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          258 => 
          array (
            'Func' => 'ViewAlbum',
            'Content' => '',
            'Caption' => '_bx_photos_album_photos_rest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pmt_cart' => 
  array (
    'Title' => 'Payment Shopping Cart',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 50,
        'Blocks' => 
        array (
          247 => 
          array (
            'Func' => 'Featured',
            'Content' => '',
            'Caption' => '_payment_bcpt_cart_featured',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 50,
        'Blocks' => 
        array (
          248 => 
          array (
            'Func' => 'Common',
            'Content' => '',
            'Caption' => '_payment_bcpt_cart_common',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pmt_details' => 
  array (
    'Title' => 'Payment Settings',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          251 => 
          array (
            'Func' => 'Details',
            'Content' => '',
            'Caption' => '_payment_bcpt_details',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pmt_history' => 
  array (
    'Title' => 'Payment Cart History',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          249 => 
          array (
            'Func' => 'History',
            'Content' => '',
            'Caption' => '_payment_bcpt_cart_history',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_pmt_orders' => 
  array (
    'Title' => 'Payment Order Administration',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          250 => 
          array (
            'Func' => 'Orders',
            'Content' => '',
            'Caption' => '_payment_bcpt_processed_orders',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sites_hon' => 
  array (
    'Title' => 'Sites Rate',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          327 => 
          array (
            'Func' => 'ViewRate',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_rate',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          326 => 
          array (
            'Func' => 'ViewPreviously',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_previously',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sites_main' => 
  array (
    'Title' => 'Sites Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          316 => 
          array (
            'Func' => 'ViewRecent',
            'Content' => '',
            'Caption' => '_bx_sites_caption_public_last_featured',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          317 => 
          array (
            'Func' => 'ViewAll',
            'Content' => '',
            'Caption' => '_bx_sites_caption_public_latest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          313 => 
          array (
            'Func' => 'ViewFeature',
            'Content' => '',
            'Caption' => '_bx_sites_caption_public_feature',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          314 => 
          array (
            'Func' => 'Categories',
            'Content' => '',
            'Caption' => '_bx_sites_caption_categories',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          315 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_bx_sites_caption_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sites_profile' => 
  array (
    'Title' => 'Sites User',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          318 => 
          array (
            'Func' => 'Administration',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_administration',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          319 => 
          array (
            'Func' => 'Owner',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_owner_sites',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sites_view' => 
  array (
    'Title' => 'Sites View Page',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          323 => 
          array (
            'Func' => 'ViewImage',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_image',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          324 => 
          array (
            'Func' => 'ViewDescription',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_description',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          325 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          320 => 
          array (
            'Func' => 'ViewInformation',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_information',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          321 => 
          array (
            'Func' => 'ViewActions',
            'Content' => '',
            'Caption' => '_bx_sites_bcaption_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          322 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sounds_albums_my' => 
  array (
    'Title' => '',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          347 => 
          array (
            'Func' => 'add',
            'Content' => '',
            'Caption' => '_bx_sounds_albums_add',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          346 => 
          array (
            'Func' => 'adminShort',
            'Content' => '',
            'Caption' => '_bx_sounds_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          348 => 
          array (
            'Func' => 'adminFull',
            'Content' => '',
            'Caption' => '_bx_sounds_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          349 => 
          array (
            'Func' => 'adminFullDisapproved',
            'Content' => '',
            'Caption' => '_bx_sounds_albums_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          350 => 
          array (
            'Func' => 'edit',
            'Content' => '',
            'Caption' => '_bx_sounds_album_edit',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          351 => 
          array (
            'Func' => 'delete',
            'Content' => '',
            'Caption' => '_bx_sounds_album_delete',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          352 => 
          array (
            'Func' => 'organize',
            'Content' => '',
            'Caption' => '_bx_sounds_album_organize',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          353 => 
          array (
            'Func' => 'addObjects',
            'Content' => '',
            'Caption' => '_bx_sounds_album_add_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          354 => 
          array (
            'Func' => 'manageObjects',
            'Content' => '',
            'Caption' => '_bx_sounds_album_manage_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          355 => 
          array (
            'Func' => 'manageObjectsDisapproved',
            'Content' => '',
            'Caption' => '_bx_sounds_album_manage_objects_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          356 => 
          array (
            'Func' => 'manageObjectsNotProcessed',
            'Content' => '',
            'Caption' => '_bx_sounds_album_manage_objects_not_processed',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          357 => 
          array (
            'Func' => 'manageObjectsFailed',
            'Content' => '',
            'Caption' => '_bx_sounds_album_manage_objects_failed',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          358 => 
          array (
            'Func' => 'adminAlbumShort',
            'Content' => '',
            'Caption' => '_bx_sounds_album_main_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          359 => 
          array (
            'Func' => 'albumObjects',
            'Content' => '',
            'Caption' => '_bx_sounds_album_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          360 => 
          array (
            'Func' => 'my',
            'Content' => '',
            'Caption' => '_bx_sounds_albums_my',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sounds_albums_owner' => 
  array (
    'Title' => 'Sounds Profile Albums',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          361 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_sounds_albums_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          362 => 
          array (
            'Func' => 'Favorited',
            'Content' => '',
            'Caption' => '_bx_sounds_favorited',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sounds_album_view' => 
  array (
    'Title' => 'Sounds View Album',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          328 => 
          array (
            'Func' => 'Objects',
            'Content' => '',
            'Caption' => '',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          329 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_sounds_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          330 => 
          array (
            'Func' => 'Author',
            'Content' => '',
            'Caption' => '_bx_sounds_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          331 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_sounds_info_album',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          332 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_sounds_actions',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sounds_home' => 
  array (
    'Title' => 'Sounds Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          342 => 
          array (
            'Func' => 'Special',
            'Content' => '',
            'Caption' => '_bx_sounds_special',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          343 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_bx_sounds_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          344 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_bx_sounds_top_menu_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          341 => 
          array (
            'Func' => 'Albums',
            'Content' => '',
            'Caption' => '_bx_sounds_albums',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          345 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_bx_sounds_top_menu_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sounds_rate' => 
  array (
    'Title' => 'Sounds Rate',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          363 => 
          array (
            'Func' => 'RatedSet',
            'Content' => '',
            'Caption' => '_bx_sounds_previous_rated',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          364 => 
          array (
            'Func' => 'RateObject',
            'Content' => '',
            'Caption' => '_bx_sounds_rate_header',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_sounds_view' => 
  array (
    'Title' => 'Sounds Listen Sound',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          333 => 
          array (
            'Func' => 'ViewFile',
            'Content' => '',
            'Caption' => '_bx_sounds_view',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          334 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_bx_sounds_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          335 => 
          array (
            'Func' => 'FileAuthor',
            'Content' => '',
            'Caption' => '_bx_sounds_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          336 => 
          array (
            'Func' => 'MainFileInfo',
            'Content' => '',
            'Caption' => '_bx_sounds_info_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          337 => 
          array (
            'Func' => 'ActionList',
            'Content' => '',
            'Caption' => '_bx_sounds_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          338 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          339 => 
          array (
            'Func' => 'ViewAlbum',
            'Content' => '',
            'Caption' => '_bx_sounds_album_sounds_rest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_store_main' => 
  array (
    'Title' => 'Store Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          382 => 
          array (
            'Func' => 'LatestFeaturedProduct',
            'Content' => '',
            'Caption' => '_bx_store_block_latest_featured_product',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          383 => 
          array (
            'Func' => 'Recent',
            'Content' => '',
            'Caption' => '_bx_store_block_recent',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          384 => 
          array (
            'Func' => 'Categories',
            'Content' => '',
            'Caption' => '_bx_store_block_categories',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          385 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_bx_store_block_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_store_my' => 
  array (
    'Title' => 'Store User',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          386 => 
          array (
            'Func' => 'Owner',
            'Content' => '',
            'Caption' => '_bx_store_block_administration_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          387 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_store_block_users_products',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_store_view' => 
  array (
    'Title' => 'Store View Product',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          377 => 
          array (
            'Func' => 'Desc',
            'Content' => '',
            'Caption' => '_bx_store_block_desc',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          378 => 
          array (
            'Func' => 'Photo',
            'Content' => '',
            'Caption' => '_bx_store_block_photo',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          379 => 
          array (
            'Func' => 'Video',
            'Content' => '',
            'Caption' => '_bx_store_block_video',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          380 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_store_block_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          381 => 
          array (
            'Func' => 'ForumFeed',
            'Content' => '',
            'Caption' => '_sys_block_title_forum_feed',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          372 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_store_block_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          373 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_store_block_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          374 => 
          array (
            'Func' => 'Files',
            'Content' => '',
            'Caption' => '_bx_store_block_items',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          375 => 
          array (
            'Func' => 'Rate',
            'Content' => '',
            'Caption' => '_bx_store_block_rate',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          376 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_videos_albums_my' => 
  array (
    'Title' => '',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          418 => 
          array (
            'Func' => 'add',
            'Content' => '',
            'Caption' => '_bx_videos_albums_add',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          417 => 
          array (
            'Func' => 'adminShort',
            'Content' => '',
            'Caption' => '_bx_videos_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          419 => 
          array (
            'Func' => 'adminFull',
            'Content' => '',
            'Caption' => '_bx_videos_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          420 => 
          array (
            'Func' => 'adminFullDisapproved',
            'Content' => '',
            'Caption' => '_bx_videos_albums_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          421 => 
          array (
            'Func' => 'edit',
            'Content' => '',
            'Caption' => '_bx_videos_album_edit',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          422 => 
          array (
            'Func' => 'delete',
            'Content' => '',
            'Caption' => '_bx_videos_album_delete',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          423 => 
          array (
            'Func' => 'organize',
            'Content' => '',
            'Caption' => '_bx_videos_album_organize',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          424 => 
          array (
            'Func' => 'addObjects',
            'Content' => '',
            'Caption' => '_bx_videos_album_add_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          425 => 
          array (
            'Func' => 'manageObjects',
            'Content' => '',
            'Caption' => '_bx_videos_album_manage_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          426 => 
          array (
            'Func' => 'manageObjectsDisapproved',
            'Content' => '',
            'Caption' => '_bx_videos_album_manage_objects_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          427 => 
          array (
            'Func' => 'manageObjectsNotProcessed',
            'Content' => '',
            'Caption' => '_bx_videos_album_manage_objects_not_processed',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          428 => 
          array (
            'Func' => 'manageObjectsFailed',
            'Content' => '',
            'Caption' => '_bx_videos_album_manage_objects_failed',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          429 => 
          array (
            'Func' => 'adminAlbumShort',
            'Content' => '',
            'Caption' => '_bx_videos_album_main_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          430 => 
          array (
            'Func' => 'albumObjects',
            'Content' => '',
            'Caption' => '_bx_videos_album_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          431 => 
          array (
            'Func' => 'my',
            'Content' => '',
            'Caption' => '_bx_videos_albums_my',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_videos_albums_owner' => 
  array (
    'Title' => 'Videos Profile Albums',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          432 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_videos_albums_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          433 => 
          array (
            'Func' => 'Favorited',
            'Content' => '',
            'Caption' => '_bx_videos_favorited',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_videos_album_view' => 
  array (
    'Title' => 'Videos View Album',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          398 => 
          array (
            'Func' => 'Objects',
            'Content' => '',
            'Caption' => '',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          399 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_videos_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          400 => 
          array (
            'Func' => 'Author',
            'Content' => '',
            'Caption' => '_bx_videos_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          401 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_videos_info_album',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          402 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_videos_actions',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_videos_home' => 
  array (
    'Title' => 'Videos Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          413 => 
          array (
            'Func' => 'LatestFile',
            'Content' => '',
            'Caption' => '_bx_videos_latest_file',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          411 => 
          array (
            'Func' => 'Albums',
            'Content' => '',
            'Caption' => '_bx_videos_albums',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          414 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_bx_videos_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          415 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_bx_videos_top_menu_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          416 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_bx_videos_top_menu_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_videos_rate' => 
  array (
    'Title' => 'Videos Rate',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          434 => 
          array (
            'Func' => 'RatedSet',
            'Content' => '',
            'Caption' => '_bx_videos_previous_rated',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          435 => 
          array (
            'Func' => 'RateObject',
            'Content' => '',
            'Caption' => '_bx_videos_rate_header',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_videos_view' => 
  array (
    'Title' => 'Videos View Video',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          403 => 
          array (
            'Func' => 'ViewFile',
            'Content' => '',
            'Caption' => '_bx_videos_view',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          404 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_bx_videos_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          405 => 
          array (
            'Func' => 'FileAuthor',
            'Content' => '',
            'Caption' => '_bx_videos_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          406 => 
          array (
            'Func' => 'MainFileInfo',
            'Content' => '',
            'Caption' => '_bx_videos_info_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          407 => 
          array (
            'Func' => 'ActionList',
            'Content' => '',
            'Caption' => '_bx_videos_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          408 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          409 => 
          array (
            'Func' => 'ViewAlbum',
            'Content' => '',
            'Caption' => '_bx_videos_album_videos_rest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_wmap' => 
  array (
    'Title' => 'World Map',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          440 => 
          array (
            'Func' => 'Map',
            'Content' => '',
            'Caption' => '_bx_wmap_block_title_block_map',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_wmap_edit' => 
  array (
    'Title' => 'World Map Edit',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          441 => 
          array (
            'Func' => 'MapEdit',
            'Content' => '',
            'Caption' => '_bx_wmap_block_title_block_map_edit',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'categ_calendar' => 
  array (
    'Title' => 'Categories Calendar',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          60 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_categ_caption_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          61 => 
          array (
            'Func' => 'CategoriesDate',
            'Content' => '',
            'Caption' => '_categ_caption_day',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'categ_module' => 
  array (
    'Title' => 'Categories Module',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          64 => 
          array (
            'Func' => 'Common',
            'Content' => '',
            'Caption' => '_categ_caption_common',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          65 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_categ_caption_all',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'categ_search' => 
  array (
    'Title' => 'Categories Search',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          62 => 
          array (
            'Func' => 'Form',
            'Content' => '',
            'Caption' => '_categ_caption_search_form',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
          63 => 
          array (
            'Func' => 'Founded',
            'Content' => '',
            'Caption' => '_categ_caption_founded',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'communicator_page' => 
  array (
    'Title' => 'Communicator',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          50 => 
          array (
            'Func' => 'Connections',
            'Content' => '',
            'Caption' => '_sys_cnts_bcpt_connections',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          51 => 
          array (
            'Func' => 'FriendRequests',
            'Content' => '',
            'Caption' => '_sys_cnts_bcpt_friend_requests',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'feedback' => 
  array (
    'Title' => 'Feedback',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          151 => 
          array (
            'Func' => 'Content',
            'Content' => '',
            'Caption' => '_feedback_bcaption_view_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          152 => 
          array (
            'Func' => 'Comment',
            'Content' => '',
            'Caption' => '_feedback_bcaption_view_comment',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          153 => 
          array (
            'Func' => 'Action',
            'Content' => '',
            'Caption' => '_feedback_bcaption_view_action',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          154 => 
          array (
            'Func' => 'Vote',
            'Content' => '',
            'Caption' => '_feedback_bcaption_view_vote',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          155 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'forums_home' => 
  array (
    'Title' => 'Forums Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          198 => 
          array (
            'Func' => 'RecentTopics',
            'Content' => '',
            'Caption' => '_bx_forums_recent_topics',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          196 => 
          array (
            'Func' => 'Search',
            'Content' => '',
            'Caption' => '_bx_forums_quick_search',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          197 => 
          array (
            'Func' => 'ShortIndex',
            'Content' => '',
            'Caption' => '_bx_forums_index',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'forums_index' => 
  array (
    'Title' => 'Forums Index',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          195 => 
          array (
            'Func' => 'FullIndex',
            'Content' => '',
            'Caption' => '_bx_forums_index',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'friends' => 
  array (
    'Title' => 'Friends',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          33 => 
          array (
            'Func' => 'Friends',
            'Content' => '',
            'Caption' => '_Member Friends',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          34 => 
          array (
            'Func' => 'FriendsRequests',
            'Content' => '',
            'Caption' => '_Member Friends Requests',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          35 => 
          array (
            'Func' => 'FriendsMutual',
            'Content' => '',
            'Caption' => '_Member Friends Mutual',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          371 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'spy\', \'get_spy_block_friends\', array($this->iProfileID));',
            'Caption' => '_bx_spy_friends',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'index' => 
  array (
    'Title' => 'Homepage',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          12 => 
          array (
            'Func' => 'RSS',
            'Content' => 'https://www.boonex.com/notes/featured_posts/?rss=1#4',
            'Caption' => '_BoonEx News',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
          292 => 
          array (
            'Func' => 'PHP',
            'Content' => 'require_once(BX_DIRECTORY_PATH_MODULES . \'boonex/photos/classes/BxPhotosSearch.php\');
 $oMedia = new BxPhotosSearch();
 $aVisible[] = BX_DOL_PG_ALL;
 if ($this->iMemberID > 0)
 $aVisible[] = BX_DOL_PG_MEMBERS;
 $aCode = $oMedia->getBrowseBlock(array(\'allow_view\'=>$aVisible), array(\'menu_top\'=>true, \'sorting\' => getParam(\'bx_photos_mode_index\'), \'per_page\'=>(int)getParam(\'bx_photos_number_index\')));
 return array($aCode[\'code\'], $aCode[\'menu_top\'], $aCode[\'menu_bottom\'], $aCode[\'wrapper\']);',
            'Caption' => '_bx_photos_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          390 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wall\', \'view_block_index_outline\');',
            'Caption' => '_wall_pc_view_index_ol',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          391 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wall\', \'post_block_index_timeline\');',
            'Caption' => '_wall_pc_post_index_tl',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          392 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wall\', \'view_block_index_timeline\');',
            'Caption' => '_wall_pc_view_index_tl',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          10 => 
          array (
            'Func' => 'Members',
            'Content' => '',
            'Caption' => '_Members',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          5 => 
          array (
            'Func' => 'Subscribe',
            'Content' => '',
            'Caption' => '_Subscribe_block_caption',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          4 => 
          array (
            'Func' => 'SiteStats',
            'Content' => '',
            'Caption' => '_Site Stats',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 3600,
          ),
          308 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'quotes\', \'get_quote_unit\');',
            'Caption' => '_bx_quotes_bcaption_quotes',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          309 => 
          array (
            'Func' => 'PHP',
            'Content' => 'BxDolService::call(\'shoutbox\', \'get_shoutbox\');',
            'Caption' => '_bx_shoutbox',
            'Visible' => 'non,memb',
            'DesignBox' => 11,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'join' => 
  array (
    'Title' => 'Join Page',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          48 => 
          array (
            'Func' => 'JoinForm',
            'Content' => '',
            'Caption' => '_Join_now',
            'Visible' => 'non',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'mail_page' => 
  array (
    'Title' => 'Mail Messages',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          38 => 
          array (
            'Func' => 'MailBox',
            'Content' => '',
            'Caption' => '_Mail box',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          39 => 
          array (
            'Func' => 'Contacts',
            'Content' => '',
            'Caption' => '_My contacts',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'mail_page_compose' => 
  array (
    'Title' => 'Mail Compose Message',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          42 => 
          array (
            'Func' => 'ComposeMessage',
            'Content' => '',
            'Caption' => '_COMPOSE_H',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          43 => 
          array (
            'Func' => 'Contacts',
            'Content' => '',
            'Caption' => '_My contacts',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'mail_page_view' => 
  array (
    'Title' => 'Mail View Message',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          40 => 
          array (
            'Func' => 'ViewMessage',
            'Content' => '',
            'Caption' => '_Mail box',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          41 => 
          array (
            'Func' => 'Archives',
            'Content' => '',
            'Caption' => '_Archive',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'member' => 
  array (
    'Title' => 'Account',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          14 => 
          array (
            'Func' => 'QuickLinks',
            'Content' => '',
            'Caption' => '_Quick Links',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          395 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wall\', \'view_block_account_timeline\', array($this->iMember));',
            'Caption' => '_wall_pc_view_account_tl',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          15 => 
          array (
            'Func' => 'FriendRequests',
            'Content' => '',
            'Caption' => '_sys_bcpt_member_friend_requests',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          16 => 
          array (
            'Func' => 'NewMessages',
            'Content' => '',
            'Caption' => '_sys_bcpt_member_new_messages',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          17 => 
          array (
            'Func' => 'AccountControl',
            'Content' => '',
            'Caption' => '_sys_bcpt_member_account_control',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'news_home' => 
  array (
    'Title' => 'News Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          237 => 
          array (
            'Func' => 'Latest',
            'Content' => '',
            'Caption' => '_news_bcaption_latest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          240 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_news_bcaption_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          241 => 
          array (
            'Func' => 'Featured',
            'Content' => '',
            'Caption' => '_news_bcaption_featured',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'news_single' => 
  array (
    'Title' => 'News View Article',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          231 => 
          array (
            'Func' => 'Content',
            'Content' => '',
            'Caption' => '_news_bcaption_view_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          232 => 
          array (
            'Func' => 'Comment',
            'Content' => '',
            'Caption' => '_news_bcaption_view_comment',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          233 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_news_bcaption_view_info',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          234 => 
          array (
            'Func' => 'Action',
            'Content' => '',
            'Caption' => '_news_bcaption_view_action',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          235 => 
          array (
            'Func' => 'Vote',
            'Content' => '',
            'Caption' => '_news_bcaption_view_vote',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          236 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'pedit' => 
  array (
    'Title' => 'Profile Edit',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          66 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_edit_profile_info',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          67 => 
          array (
            'Func' => 'Privacy',
            'Content' => '',
            'Caption' => '_edit_profile_privacy',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          68 => 
          array (
            'Func' => 'Membership',
            'Content' => '',
            'Caption' => '_edit_profile_membership',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          105 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'avatar\', \'manage_avatars\', array ((int)$_REQUEST[\'ID\']));',
            'Caption' => '_bx_ava_manage_avatars',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          310 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'simple_messenger\', \'get_settings\');',
            'Caption' => '_simple_messenger_bcaption_settings',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'poll_home' => 
  array (
    'Title' => 'Polls Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          300 => 
          array (
            'Func' => 'LatestHome',
            'Content' => '',
            'Caption' => '_bx_poll_latest_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          301 => 
          array (
            'Func' => 'FeaturedHome',
            'Content' => '',
            'Caption' => '_bx_poll_featured',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'profile' => 
  array (
    'Title' => 'Profile',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          19 => 
          array (
            'Func' => 'Cover',
            'Content' => '',
            'Caption' => '_sys_bcpt_profile_cover',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          294 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'photos\', \'get_profile_album_block\', array($this->oProfileGen->_iProfileID), \'Search\');',
            'Caption' => '_bx_photos_photo_album_block',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          20 => 
          array (
            'Func' => 'ActionsMenu',
            'Content' => '',
            'Caption' => '_Actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          21 => 
          array (
            'Func' => 'FriendRequest',
            'Content' => '',
            'Caption' => '_FriendRequest',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          23 => 
          array (
            'Func' => 'PFBlock',
            'Content' => '21',
            'Caption' => '_FieldCaption_Admin Controls_View',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          24 => 
          array (
            'Func' => 'PFBlock',
            'Content' => '17',
            'Caption' => '_FieldCaption_General Info_View',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          25 => 
          array (
            'Func' => 'RateProfile',
            'Content' => '',
            'Caption' => '_rate profile',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          443 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wmap\', \'location_block\', array(\'profiles\', $this->oProfileGen->_iProfileID));',
            'Caption' => '_Location',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      3 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          22 => 
          array (
            'Func' => 'Description',
            'Content' => '',
            'Caption' => '_Description',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          122 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'custom_rss\', \'gen_custom_rss_block\', array($this->oProfileGen->_iProfileID));',
            'Caption' => '_crss_Custom_Feeds',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          393 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wall\', \'post_block_profile_timeline\', array($this->oProfileGen->_iProfileID));',
            'Caption' => '_wall_pc_post_profile_tl',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          394 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'wall\', \'view_block_profile_timeline\', array($this->oProfileGen->_iProfileID));',
            'Caption' => '_wall_pc_view_profile_tl',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'profile_info' => 
  array (
    'Title' => 'Profile Info',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          30 => 
          array (
            'Func' => 'GeneralInfo',
            'Content' => '',
            'Caption' => '_FieldCaption_General Info_View',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          32 => 
          array (
            'Func' => 'Description',
            'Content' => '',
            'Caption' => '_Description',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          31 => 
          array (
            'Func' => 'AdditionalInfo',
            'Content' => '',
            'Caption' => '_Additional information',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'profile_private' => 
  array (
    'Title' => 'Profile Private',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          69 => 
          array (
            'Func' => 'ActionsMenu',
            'Content' => '',
            'Caption' => '_Actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          70 => 
          array (
            'Func' => 'PrivacyExplain',
            'Content' => '',
            'Caption' => '_sys_profile_private_text_title',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'search' => 
  array (
    'Title' => 'Search Profiles',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          44 => 
          array (
            'Func' => 'Results',
            'Content' => '',
            'Caption' => '_Search result',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          45 => 
          array (
            'Func' => 'SearchForm',
            'Content' => '',
            'Caption' => '_Search profiles',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'search_home' => 
  array (
    'Title' => 'Search Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          46 => 
          array (
            'Func' => 'Keyword',
            'Content' => '',
            'Caption' => '_sys_box_title_search_keyword',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          47 => 
          array (
            'Func' => 'People',
            'Content' => '',
            'Caption' => '_sys_box_title_search_people',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'show_poll_info' => 
  array (
    'Title' => 'Polls View Poll',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          302 => 
          array (
            'Func' => 'PoolBlock',
            'Content' => '',
            'Caption' => '_bx_poll',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          303 => 
          array (
            'Func' => 'CommentsBlock',
            'Content' => '',
            'Caption' => '_bx_poll_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          304 => 
          array (
            'Func' => 'ActionsBlock',
            'Content' => '',
            'Caption' => '_bx_poll_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          305 => 
          array (
            'Func' => 'OwnerBlock',
            'Content' => '',
            'Caption' => '_bx_poll_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          306 => 
          array (
            'Func' => 'VotingsBlock',
            'Content' => '',
            'Caption' => '_bx_poll_votings',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          307 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_calendar' => 
  array (
    'Title' => 'Tags Search',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          54 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_tags_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          55 => 
          array (
            'Func' => 'TagsDate',
            'Content' => '',
            'Caption' => '_Tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_home' => 
  array (
    'Title' => 'Tags Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          52 => 
          array (
            'Func' => 'Recent',
            'Content' => '',
            'Caption' => '_tags_recent',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          53 => 
          array (
            'Func' => 'Popular',
            'Content' => '',
            'Caption' => '_popular_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_module' => 
  array (
    'Title' => 'Tags Module',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.1,
        'Blocks' => 
        array (
          58 => 
          array (
            'Func' => 'Recent',
            'Content' => '',
            'Caption' => '_tags_recent',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.9,
        'Blocks' => 
        array (
          59 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_all_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_search' => 
  array (
    'Title' => 'Tags Calendar',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          56 => 
          array (
            'Func' => 'Form',
            'Content' => '',
            'Caption' => '_tags_search_form',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
          57 => 
          array (
            'Func' => 'Founded',
            'Content' => '',
            'Caption' => '_tags_founded_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'wall' => 
  array (
    'Title' => 'Wall',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          396 => 
          array (
            'Func' => 'Post',
            'Content' => '',
            'Caption' => '_wall_pc_post',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          397 => 
          array (
            'Func' => 'View',
            'Content' => '',
            'Caption' => '_wall_pc_view',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
); ?>