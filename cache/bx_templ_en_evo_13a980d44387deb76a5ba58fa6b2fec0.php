    <script>
        window.FileAPI = {
            debug: false,
            cors: false,
            media: false,
            staticPath: '<?=$a['static_path'];?>'
        };
    </script>
    <script type="text/javascript" src="<?=$a['plugins_url'];?>file-api/dist/FileAPI.min.js"></script>
    <script type="text/javascript" src="<?=$a['plugins_url'];?>file-api/plugins/FileAPI.exif.js"></script>

	<style>
        #bx-<?=$a['upload_type'];?>-preview {
            display:none;
            margin-left:-5px;
            margin-right:-5px;
            margin-bottom:-5px;
        }   
        .bx-<?=$a['upload_type'];?>-preview-container {
            display:inline;
        }
		.b-button {
			display: inline-block;
			*display: inline;
			*zoom: 1;
			position: relative;
            margin-left:0;
            float:none;
            overflow:hidden;
			cursor: pointer;            
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
		}
        .b-button__input {
            cursor: pointer;
            opacity: 0;
            filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);
            top: -10px;
            right: -40px;
            font-size: 50px;
            position: absolute;
            border:1px solid red;
        }
        .b-file {
            position:relative;
            float:left;
            margin:5px;            
            height: calc(<?=$a['preview_size'];?>px + 90px);
        }
        .b-file > div {
            width:<?=$a['preview_size'];?>px;
        }
        .js-preview-container {            
            height:<?=$a['preview_size'];?>px;
            text-align:center;
        }
        .js-preview-container .sys-icon {
            font-size:calc(<?=$a['preview_size'];?>px / 2);
            line-height:<?=$a['preview_size'];?>px;
        }
        .b-file__name {
            display:block;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
        .b-file__abort {
            display: none;
            text-align:center;
        }
        .b-file__abort .bx-btn {
            display:inline-block;
        }
        .b-file_upload .b-file__abort {
            display:block;
        }
		.b-progress {
			position: absolute;
            height:calc(<?=$a['preview_size'];?>px);
            top:0;
            left:0;
            right:0;
			width: 100%;
			border-radius: 0px;
			background-color: rgba(0, 0, 0, 0.5);
		}
        .b-progress__bar {
            position: absolute;
            bottom: -1px;
            width: 0;
            height: 20px;
            border-radius: 0px;
            background-color: #2D9DD7;
            -webkit-transition: width .5s ease-out;
            -moz-transition: width .5s ease-out;
            -ms-transition: width .5s ease-out;
            transition: width .5s ease-out;
        }

	</style>

	<script>
		// Simple JavaScript Templating
		// John Resig - http://ejohn.org/ - MIT Licensed
		(function (){
			var cache = {};

			this.tmpl = function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
						cache[str] = cache[str] ||
								tmpl(document.getElementById(str).innerHTML) :

					// Generate a reusable function that will serve as a template
					// generator (and which will be cached).
						new Function("obj",
								"var p=[],print=function(){p.push.apply(p,arguments);};" +

									// Introduce the data as local variables using with(){}
										"with(obj){p.push('" +

									// Convert the template into pure JavaScript
										str
												.replace(/[\r\t\n]/g, " ")
												.split("<%").join("\t")
												.replace(/((^|%>)[^\t]*)'/g, "$1\r")
												.replace(/\t=(.*?)%>/g, "',$1,'")
												.split("\t").join("');")
												.split("%>").join("p.push('")
												.split("\r").join("\\'")
										+ "');}return p.join('');");

				// Provide some basic currying to the user
				return data ? fn(data) : fn;
			};
		})();
	</script>


	<div id="bx-<?=$a['upload_type'];?>-oooops" style="display: none; margin: 10px; padding: 10px; border: 2px solid #f60; border-radius: 4px;">
        Unfortunately your browser doesn't support HTML5 nor Flash
	</div>


    <div id="bx-<?=$a['upload_type'];?>-buttons-panel" class="b-button js-fileapi-wrapper bx-btn">
        <div class="b-button__text"><?=$this->parseSystemKey('txt_select_files', $mixedKeyWrapperHtml);?></div>
        <input name="files" class="b-button__input" type="file" accept="<?=$a['accept_mime_type'];?>" <?=$a['multiple'];?> />
    </div>

    <div id="bx-<?=$a['upload_type'];?>-preview" class="bx-def-margin-top clearfix">
        <?=$a['form'];?>
    </div>

	<script id="b-file-ejs" type="text/ejs">
		<div id="file-<%=FileAPI.uid(file)%>" class="js-file b-file b-file_<%=file.type.split('/')[0]%>">
			<div class="js-preview-container bx-def-border">
                <i class="sys-icon <%=icon[file.type.split('/')[0]]||icon.def%>"></i>                
			</div>
            <div class="b-progress bx-def-border"><div class="js-bar b-progress__bar"></div></div>
            <div>
				<div class="bx-def-margin-thd-top">
                    <div class="input_wrapper input_wrapper_text clearfix">
                        <input class="form_input_text bx-def-font-inputs" name="" value="<%=file.name.substr(0, file.name.lastIndexOf('.'))%>" disabled />
                    </div>
                </div> 
                <div class="bx-def-margin-thd-top b-file__abort clearfix"><a class="js-abort bx-btn bx-btn-small">Cancel</a></div>
                <div class="bx-def-margin-thd-top b-file__info js-info"></div>
            </div>
		</div>
	</script>

	<script type="text/javascript">
		jQuery(function ($){
			if( !(FileAPI.support.cors || FileAPI.support.flash) ){
				$('#bx-<?=$a['upload_type'];?>-oooops').show();
				$('#bx-<?=$a['upload_type'];?>-buttons-panel').hide();
			}

			$(document).on('mouseenter mouseleave', '#bx-<?=$a['upload_type'];?>-buttons-panel', function (evt){
				$(evt.currentTarget).toggleClass('b-button_hover', evt.type == 'mouseenter');
			});

			if( FileAPI.support.dnd ) {
				$('#drag-n-drop').show();
				$(document).dnd(function (over){
					$('#drop-zone').toggle(over);
				}, function (files){
					onFiles(files);
				});
			}

			$('#bx-<?=$a['upload_type'];?>-buttons-panel input[name="files"]').on('change', function (evt){
				var files = FileAPI.getFiles(evt);
				onFiles(files);
				FileAPI.reset(evt.currentTarget);
			});

			var FU = {
				icon: {
				    def:   'file-o',
                    image: 'file-image-o',
                    audio: 'file-audio-o',
                    video: 'file-video-o'
				},

                langs: {
                    abort: 'Interrupted',
                    error: 'File upload failed',
                    done: 'Done',
                },

				files: [],
				index: 0,
				active: false,

                cleanup: function () {
                    if (FU.active)
                        return;
                    FU.files = [];
                    FU.index = 0;
                    FU.active = false;
                },

				add: function (file){
					FU.files.push(file);

					if( /^image/.test(file.type) ){
						FileAPI.Image(file).preview(<?=$a['preview_size'];?>).rotate('auto').get(function (err, img){
							if( !err ){
								FU._getEl(file, '.js-preview-container')
									.html(img)
								;
							}
						});
					}
				},

				getFileById: function (id){
					var i = FU.files.length;
					while( i-- ){
						if( FileAPI.uid(FU.files[i]) == id ){
							return	FU.files[i];
						}
					}
				},

				start: function (){
					if (!FU.active && (FU.active = FU.files.length > FU.index))
						FU._upload(FU.files[FU.index]);
                    else if (FU.files.length && FU.files.length == FU.index)
                        onAllFilesComplete();
				},

				abort: function (id){
					var file = this.getFileById(id);
					if( file.xhr ){
						file.xhr.abort();
					}
				},

				_getEl: function (file, sel){
					var $el = $('#file-'+FileAPI.uid(file));
					return	sel ? $el.find(sel) : $el;
				},

				_upload: function (file){
					if( file ) {
						file.xhr = FileAPI.upload({
							url: '<?=$a['action_url'];?>',
                            data: <?=$a['custom_data'];?>,
							files: { file: file },
                            imageAutoOrientation: Boolean(<?=$a['image_auto_orientation'];?>),
                            imageTransform: <?=$a['image_transform'];?>,
							upload: function () {
								FU._getEl(file).addClass('b-file_upload');
							},
							progress: function (evt) {
                                FU._getEl(file, '.js-bar').css('width', evt.loaded/evt.total*100+'%');
							},
							complete: function (err, xhr) {
                                var oResponse = $.parseJSON(xhr.response);
                                if (!err && oResponse && 'object' == typeof(oResponse.files) && !oResponse.files.length)
                                    err = xhr.statusText = 'error';
								var state = err ? 'error' : 'done';
                                var error = err ? (xhr.statusText || err) : state;

                                if (oResponse && oResponse.files) {
                                    for (var i=0 ; i < oResponse.files.length ; ++i) {
                                        if ('undefined' != typeof(oResponse.files[i].error) && oResponse.files[i].error.length) {
                                            state = 'error';
                                            error = oResponse.files[i].error;                                        
                                            continue;
                                        }

                                        if ('undefined' != typeof(oResponse.files[i].id) && parseInt(oResponse.files[i].id) > 0) {
                                            FU._getEl(file).find('input').removeAttr('disabled').attr('name', 'title-' + parseInt(oResponse.files[i].id))
                                        }
                                    }
                                }

								FU._getEl(file).removeClass('b-file_upload').addClass('b-file_completed');
                                FU._getEl(file, '.b-progress').animate({ opacity: 0 }, 200, function (){ $(this).hide() });
								FU._getEl(file, '.js-info').append('<b class="b-file__' + state + '">' + ('undefined' === typeof(FU.langs[error]) ? error : FU.langs[error]) + '</b>');

								FU.index++;
								FU.active = false;

								FU.start();
							}
						});
					}
				}
			};
            
            function reloadBlocks(){
                var eBlocks = false;
                if ($('#bxwall').size()) // wall block is already updated using another way
                    return;

                // on upload page reload all blocks except itself
                $('.page_block_container').filter(':not(#' + $('#<?=$a['upload_type'];?>_accepted_files_block').parents('.page_block_container').attr('id') + ')').each(function () {
                    var iId = parseInt($(this).attr('id').replace('page_block_', ''));
                    loadDynamicBlock(iId, document.location.href);
                });
            }

            function onAllFilesComplete(){
                $('#bx-<?=$a['upload_type'];?>-preview input[type="submit"]').removeAttr('disabled');
                reloadBlocks();
            }

			function onFiles(files){
                $('#bx-<?=$a['upload_type'];?>-preview input[type="submit"]').attr('disabled','disabled');

                var $Queue = $('#bx-<?=$a['upload_type'];?>-preview form .bx-<?=$a['upload_type'];?>-preview-container');
                if (!$Queue.size())
    				$Queue = $('<div class="bx-<?=$a['upload_type'];?>-preview-container clearfix" />').prependTo('#bx-<?=$a['upload_type'];?>-preview form');

				FileAPI.each(files, function (file){
					if( file.size >= parseInt('<?=$a['max_file_size'];?>') ){ 
						alert('<?=$a['max_file_size_exceeded'];?>');
					}
					else if( file.size === void 0 ){
						$('#bx-<?=$a['upload_type'];?>-oooops').show();
						$('#bx-<?=$a['upload_type'];?>-buttons-panel').hide();
					}
					else {
                        $('#bx-<?=$a['upload_type'];?>-preview').show();
						$Queue.prepend(tmpl($('#b-file-ejs').html(), { file: file, icon: FU.icon }));

						FU.add(file);
						FU.start();
					}
				});
			}


			$(document)
				.on('bx-files-cleanup', function () {
                    FU.cleanup();
                    $('.bx-<?=$a['upload_type'];?>-preview-container').remove();
                    $('#bx-<?=$a['upload_type'];?>-preview').hide();
                    reloadBlocks();
				})
				.on('click', '.js-abort', function (evt) {
					FU.abort($(evt.target).closest('.js-file').attr('id').split('-')[1]);					
					evt.preventDefault();
				})
			;
		});
	</script>

