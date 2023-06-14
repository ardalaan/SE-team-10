
/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.core.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&s(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var n=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,n,a=e(this[0]);a.length&&a[0]!==document;){if(s=a.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(a.css("zIndex"),10),!isNaN(n)&&0!==n))return n;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(t,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function n(t,i,s,n){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===s?["Left","Right"]:["Top","Bottom"],o=s.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?r["inner"+s].call(this):this.each(function(){e(this).css(o,n(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?r["outer"+s].call(this,t):this.each(function(){e(this).css(o,n(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i){var s,n=e.plugins[t];if(n&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)e.options[n[s][0]]&&n[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)}})})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.core.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.widget.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,o,r,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},o=e[u][i],r=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new r(e,i)},e.extend(r,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),r.prototype=e.widget.extend(h,{widgetEventPrefix:o?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:u,widgetName:i,widgetFullName:a}),o?(e.each(o._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete o._childConstructors):s._childConstructors.push(r),e.widget.bridge(i,r)},e.widget.extend=function(i){for(var n,a,o=s.call(arguments,1),r=0,h=o.length;h>r;r++)for(n in o[r])a=o[r][n],o[r].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(o){var r="string"==typeof o,h=s.call(arguments,1),l=this;return o=!r&&h.length?e.widget.extend.apply(null,[o].concat(h)):o,r?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[o])&&"_"!==o.charAt(0)?(s=n[o].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+o+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+o+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(o||{})._init():e.data(this,a,new n(o,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,o,r=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(a=r[i]=e.widget.extend({},this.options[i]),o=0;n.length-1>o;o++)a[n[o]]=a[n[o]]||{},a=a[n[o]];if(i=n.pop(),1===arguments.length)return a[i]===t?null:a[i];a[i]=s}else{if(1===arguments.length)return this.options[i]===t?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,o=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,r){function h(){return i||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):t}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+o.eventNamespace,d=l[2];d?a.delegate(d,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.widget.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.mouse.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.mouse.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.slider.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=e(i.target).data("ui-slider-handle-index");switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case e.ui.keyCode.HOME:a=this._valueMin();break;case e.ui.keyCode.END:a=this._valueMax();break;case e.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(e){e.preventDefault()},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.slider.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.datepicker.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=s(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(a.inline?t.parent()[0]:a.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function n(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.extend(e.ui,{datepicker:{version:"1.10.4"}});var a,o="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return n(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var n=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,o,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,o,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,a,r){var h,l,u,d,c,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],o,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,u=document.documentElement.clientHeight,d=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+d,u/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],o,p),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,o);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,o),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,o);n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,o);n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,o)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var o,r,h,l,u=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?e.extend({},e.datepicker._defaults):u?"all"===s?e.extend({},u.settings):this._get(u,s):null:(o=s||{},"string"==typeof s&&(o={},o[s]=a),u&&(this._curInst===u&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(u,"min"),l=this._getMinMaxDate(u,"max"),n(u.settings,o),null!==h&&o.dateFormat!==t&&o.minDate===t&&(u.settings.minDate=this._formatDate(u,h)),null!==l&&o.dateFormat!==t&&o.maxDate===t&&(u.settings.maxDate=this._formatDate(u,l)),"disabled"in o&&(o.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),u),this._autoSize(u),this._setDate(u,r),this._updateAlternate(u),this._updateDatepicker(u)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var s,n,a=e.datepicker._getInst(i.target);return e.datepicker._get(a,"constrainInput")?(s=e.datepicker._possibleChars(e.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):t},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,s,a,o,r,h,l;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),s=e.datepicker._get(i,"beforeShow"),a=s?s.apply(t,[t,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),r={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),r=e.datepicker._checkOffset(i,r,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=e.datepicker._get(i,"showAnim"),l=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[h]?i.dpDiv.show(h,e.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,a=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(t),n=s[1],o=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",o*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,r=this._curInst;!r||t&&r!==e.data(t,o)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){e.datepicker._tidyDialog(r)},e.effects&&(e.effects.effect[i]||e.effects[i])?r.dpDiv.hide(i,e.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(r,"onClose"),a&&a.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,o,r,h,l=0,u=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,d="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),c=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,b=-1,_=-1,y=!1,x=function(e){var t=i.length>a+1&&i.charAt(a+1)===e;return t&&a++,t},w=function(e){var t=x(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(i,n,a){var o=-1,r=e.map(x(i)?a:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(r,function(e,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(o=i[0],l+=n.length,!1):t}),-1!==o)return o+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||x("'")?D():y=!1;else switch(i.charAt(a)){case"d":b=w("d");break;case"D":k("D",c,p);break;case"o":_=w("o");break;case"m":v=w("m");break;case"M":v=k("M",f,m);break;case"y":g=w("y");break;case"@":h=new Date(w("@")),g=h.getFullYear(),v=h.getMonth()+1,b=h.getDate();break;case"!":h=new Date((w("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,b=h.getDate();break;case"'":x("'")?D():y=!0;break;default:D()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(d>=g?0:-100)),_>-1)for(v=1,b=_;;){if(o=this._getDaysInMonth(g,v-1),o>=b)break;v++,b-=o}if(h=this._daylightSavingAdjust(new Date(g,v-1,b)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==b)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,b,_,y,x,w,k,D,T,S,M,N,C,P,z,I,A,H,E,W,F,O,R,L=new Date,j=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),V=this._get(e,"stepMonths"),G=1!==q[0]||1!==q[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-q[0]*q[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-V,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+V,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:j,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),b=this._get(e,"selectOtherMonths"),_=this._getDefaultDate(e),y="",w=0;q[0]>w;w++){for(k="",this.maxRows=4,D=0;q[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",G){if(M+="<div class='ui-datepicker-group",q[1]>1)switch(D){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case q[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,N+="<th"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";for(M+=N+"</tr></thead><tbody>",P=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,P)),z=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((z+P)/7),A=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=A,H=this._daylightSavingAdjust(new Date(et,Z,1-z)),E=0;A>E;E++){for(M+="<tr>",W=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)F=g?g.apply(e.input?e.input[0]:null,[H]):[!0,""],O=H.getMonth()!==Z,R=O&&!b||!F[0]||Q&&Q>H||$&&H>$,W+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===e.selectedMonth&&e._keyEvent||_.getTime()===H.getTime()&&_.getTime()===T.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+F[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!F[2]?"":" title='"+F[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===j.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=W+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(G?"</div>"+(q[0]>0&&D===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}y+=k}return y+=l,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),b=this._get(e,"showMonthAfterYear"),_="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(y+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");y+="</select>"}if(b||(_+=y+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)_+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);
return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",_+=e.yearshtml,e.yearshtml=null}return _+=this._get(e,"yearSuffix"),b&&(_+=(!a&&g&&v?"":"&#xa0;")+y),_+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.4"})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery.ui.datepicker.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/i18n/jquery.ui.datepicker-en-GB.js---*/
/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
jQuery(function($){
	$.datepicker.regional['en-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-GB']);
});
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/i18n/jquery.ui.datepicker-en-GB.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery-ui-timepicker-addon.min.js---*/
/*! jQuery Timepicker Addon - v1.6.1 - 2015-11-14
* http://trentrichardson.com/examples/timepicker
* Copyright (c) 2015 Trent Richardson; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","jquery-ui"],a):a(jQuery)}(function($){if($.ui.timepicker=$.ui.timepicker||{},!$.ui.timepicker.version){$.extend($.ui,{timepicker:{version:"1.6.1"}});var Timepicker=function(){this.regional=[],this.regional[""]={currentText:"Now",closeText:"Done",amNames:["AM","A"],pmNames:["PM","P"],timeFormat:"HH:mm",timeSuffix:"",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second",millisecText:"Millisecond",microsecText:"Microsecond",timezoneText:"Time Zone",isRTL:!1},this._defaults={showButtonPanel:!0,timeOnly:!1,timeOnlyShowDate:!1,showHour:null,showMinute:null,showSecond:null,showMillisec:null,showMicrosec:null,showTimezone:null,showTime:!0,stepHour:1,stepMinute:1,stepSecond:1,stepMillisec:1,stepMicrosec:1,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMin:0,minuteMin:0,secondMin:0,millisecMin:0,microsecMin:0,hourMax:23,minuteMax:59,secondMax:59,millisecMax:999,microsecMax:999,minDateTime:null,maxDateTime:null,maxTime:null,minTime:null,onSelect:null,hourGrid:0,minuteGrid:0,secondGrid:0,millisecGrid:0,microsecGrid:0,alwaysSetTime:!0,separator:" ",altFieldTimeOnly:!0,altTimeFormat:null,altSeparator:null,altTimeSuffix:null,altRedirectFocus:!0,pickerTimeFormat:null,pickerTimeSuffix:null,showTimepicker:!0,timezoneList:null,addSliderAccess:!1,sliderAccessArgs:null,controlType:"slider",oneLine:!1,defaultValue:null,parse:"strict",afterInject:null},$.extend(this._defaults,this.regional[""])};$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,millisec_slider:null,microsec_slider:null,timezone_select:null,maxTime:null,minTime:null,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,millisecMinOriginal:null,microsecMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,millisecMaxOriginal:null,microsecMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",timezoneList:null,units:["hour","minute","second","millisec","microsec"],support:{},control:null,setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_newInst:function($input,opts){var tp_inst=new Timepicker,inlineSettings={},fns={},overrides,i;for(var attrName in this._defaults)if(this._defaults.hasOwnProperty(attrName)){var attrValue=$input.attr("time:"+attrName);if(attrValue)try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}overrides={beforeShow:function(a,b){return $.isFunction(tp_inst._defaults.evnts.beforeShow)?tp_inst._defaults.evnts.beforeShow.call($input[0],a,b,tp_inst):void 0},onChangeMonthYear:function(a,b,c){$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)&&tp_inst._defaults.evnts.onChangeMonthYear.call($input[0],a,b,c,tp_inst)},onClose:function(a,b){tp_inst.timeDefined===!0&&""!==$input.val()&&tp_inst._updateDateTime(b),$.isFunction(tp_inst._defaults.evnts.onClose)&&tp_inst._defaults.evnts.onClose.call($input[0],a,b,tp_inst)}};for(i in overrides)overrides.hasOwnProperty(i)&&(fns[i]=opts[i]||this._defaults[i]||null);tp_inst._defaults=$.extend({},this._defaults,inlineSettings,opts,overrides,{evnts:fns,timepicker:tp_inst}),tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(a){return a.toUpperCase()}),tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(a){return a.toUpperCase()}),tp_inst.support=detectSupport(tp_inst._defaults.timeFormat+(tp_inst._defaults.pickerTimeFormat?tp_inst._defaults.pickerTimeFormat:"")+(tp_inst._defaults.altTimeFormat?tp_inst._defaults.altTimeFormat:"")),"string"==typeof tp_inst._defaults.controlType?("slider"===tp_inst._defaults.controlType&&"undefined"==typeof $.ui.slider&&(tp_inst._defaults.controlType="select"),tp_inst.control=tp_inst._controls[tp_inst._defaults.controlType]):tp_inst.control=tp_inst._defaults.controlType;var timezoneList=[-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];null!==tp_inst._defaults.timezoneList&&(timezoneList=tp_inst._defaults.timezoneList);var tzl=timezoneList.length,tzi=0,tzv=null;if(tzl>0&&"object"!=typeof timezoneList[0])for(;tzl>tzi;tzi++)tzv=timezoneList[tzi],timezoneList[tzi]={value:tzv,label:$.timepicker.timezoneOffsetString(tzv,tp_inst.support.iso8601)};return tp_inst._defaults.timezoneList=timezoneList,tp_inst.timezone=null!==tp_inst._defaults.timezone?$.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone):-1*(new Date).getTimezoneOffset(),tp_inst.hour=tp_inst._defaults.hour<tp_inst._defaults.hourMin?tp_inst._defaults.hourMin:tp_inst._defaults.hour>tp_inst._defaults.hourMax?tp_inst._defaults.hourMax:tp_inst._defaults.hour,tp_inst.minute=tp_inst._defaults.minute<tp_inst._defaults.minuteMin?tp_inst._defaults.minuteMin:tp_inst._defaults.minute>tp_inst._defaults.minuteMax?tp_inst._defaults.minuteMax:tp_inst._defaults.minute,tp_inst.second=tp_inst._defaults.second<tp_inst._defaults.secondMin?tp_inst._defaults.secondMin:tp_inst._defaults.second>tp_inst._defaults.secondMax?tp_inst._defaults.secondMax:tp_inst._defaults.second,tp_inst.millisec=tp_inst._defaults.millisec<tp_inst._defaults.millisecMin?tp_inst._defaults.millisecMin:tp_inst._defaults.millisec>tp_inst._defaults.millisecMax?tp_inst._defaults.millisecMax:tp_inst._defaults.millisec,tp_inst.microsec=tp_inst._defaults.microsec<tp_inst._defaults.microsecMin?tp_inst._defaults.microsecMin:tp_inst._defaults.microsec>tp_inst._defaults.microsecMax?tp_inst._defaults.microsecMax:tp_inst._defaults.microsec,tp_inst.ampm="",tp_inst.$input=$input,tp_inst._defaults.altField&&(tp_inst.$altInput=$(tp_inst._defaults.altField),tp_inst._defaults.altRedirectFocus===!0&&tp_inst.$altInput.css({cursor:"pointer"}).focus(function(){$input.trigger("focus")})),(0===tp_inst._defaults.minDate||0===tp_inst._defaults.minDateTime)&&(tp_inst._defaults.minDate=new Date),(0===tp_inst._defaults.maxDate||0===tp_inst._defaults.maxDateTime)&&(tp_inst._defaults.maxDate=new Date),void 0!==tp_inst._defaults.minDate&&tp_inst._defaults.minDate instanceof Date&&(tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())),void 0!==tp_inst._defaults.minDateTime&&tp_inst._defaults.minDateTime instanceof Date&&(tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())),void 0!==tp_inst._defaults.maxDate&&tp_inst._defaults.maxDate instanceof Date&&(tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())),void 0!==tp_inst._defaults.maxDateTime&&tp_inst._defaults.maxDateTime instanceof Date&&(tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())),tp_inst.$input.bind("focus",function(){tp_inst._onFocus()}),tp_inst},_addTimePicker:function(a){var b=$.trim(this.$altInput&&this._defaults.altFieldTimeOnly?this.$input.val()+" "+this.$altInput.val():this.$input.val());this.timeDefined=this._parseTime(b),this._limitMinMaxDateTime(a,!1),this._injectTimePicker(),this._afterInject()},_parseTime:function(a,b){if(this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),b||!this._defaults.timeOnly){var c=$.datepicker._get(this.inst,"dateFormat");try{var d=parseDateTimeInternal(c,this._defaults.timeFormat,a,$.datepicker._getFormatConfig(this.inst),this._defaults);if(!d.timeObj)return!1;$.extend(this,d.timeObj)}catch(e){return $.timepicker.log("Error parsing the date/time string: "+e+"\ndate/time string = "+a+"\ntimeFormat = "+this._defaults.timeFormat+"\ndateFormat = "+c),!1}return!0}var f=$.datepicker.parseTime(this._defaults.timeFormat,a,this._defaults);return f?($.extend(this,f),!0):!1},_afterInject:function(){var a=this.inst.settings;$.isFunction(a.afterInject)&&a.afterInject.call(this)},_injectTimePicker:function(){var a=this.inst.dpDiv,b=this.inst.settings,c=this,d="",e="",f=null,g={},h={},i=null,j=0,k=0;if(0===a.find("div.ui-timepicker-div").length&&b.showTimepicker){var l=" ui_tpicker_unit_hide",m='<div class="ui-timepicker-div'+(b.isRTL?" ui-timepicker-rtl":"")+(b.oneLine&&"select"===b.controlType?" ui-timepicker-oneLine":"")+'"><dl><dt class="ui_tpicker_time_label'+(b.showTime?"":l)+'">'+b.timeText+'</dt><dd class="ui_tpicker_time '+(b.showTime?"":l)+'"><input class="ui_tpicker_time_input" '+(b.timeInput?"":"disabled")+"/></dd>";for(j=0,k=this.units.length;k>j;j++){if(d=this.units[j],e=d.substr(0,1).toUpperCase()+d.substr(1),f=null!==b["show"+e]?b["show"+e]:this.support[d],g[d]=parseInt(b[d+"Max"]-(b[d+"Max"]-b[d+"Min"])%b["step"+e],10),h[d]=0,m+='<dt class="ui_tpicker_'+d+"_label"+(f?"":l)+'">'+b[d+"Text"]+'</dt><dd class="ui_tpicker_'+d+(f?"":l)+'"><div class="ui_tpicker_'+d+"_slider"+(f?"":l)+'"></div>',f&&b[d+"Grid"]>0){if(m+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>',"hour"===d)for(var n=b[d+"Min"];n<=g[d];n+=parseInt(b[d+"Grid"],10)){h[d]++;var o=$.datepicker.formatTime(this.support.ampm?"hht":"HH",{hour:n},b);m+='<td data-for="'+d+'">'+o+"</td>"}else for(var p=b[d+"Min"];p<=g[d];p+=parseInt(b[d+"Grid"],10))h[d]++,m+='<td data-for="'+d+'">'+(10>p?"0":"")+p+"</td>";m+="</tr></table></div>"}m+="</dd>"}var q=null!==b.showTimezone?b.showTimezone:this.support.timezone;m+='<dt class="ui_tpicker_timezone_label'+(q?"":l)+'">'+b.timezoneText+"</dt>",m+='<dd class="ui_tpicker_timezone'+(q?"":l)+'"></dd>',m+="</dl></div>";var r=$(m);for(b.timeOnly===!0&&(r.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+b.timeOnlyTitle+"</div></div>"),a.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()),j=0,k=c.units.length;k>j;j++)d=c.units[j],e=d.substr(0,1).toUpperCase()+d.substr(1),f=null!==b["show"+e]?b["show"+e]:this.support[d],c[d+"_slider"]=c.control.create(c,r.find(".ui_tpicker_"+d+"_slider"),d,c[d],b[d+"Min"],g[d],b["step"+e]),f&&b[d+"Grid"]>0&&(i=100*h[d]*b[d+"Grid"]/(g[d]-b[d+"Min"]),r.find(".ui_tpicker_"+d+" table").css({width:i+"%",marginLeft:b.isRTL?"0":i/(-2*h[d])+"%",marginRight:b.isRTL?i/(-2*h[d])+"%":"0",borderCollapse:"collapse"}).find("td").click(function(a){var b=$(this),e=b.html(),f=parseInt(e.replace(/[^0-9]/g),10),g=e.replace(/[^apm]/gi),h=b.data("for");"hour"===h&&(-1!==g.indexOf("p")&&12>f?f+=12:-1!==g.indexOf("a")&&12===f&&(f=0)),c.control.value(c,c[h+"_slider"],d,f),c._onTimeChange(),c._onSelectHandler()}).css({cursor:"pointer",width:100/h[d]+"%",textAlign:"center",overflow:"hidden"}));if(this.timezone_select=r.find(".ui_tpicker_timezone").append("<select></select>").find("select"),$.fn.append.apply(this.timezone_select,$.map(b.timezoneList,function(a,b){return $("<option />").val("object"==typeof a?a.value:a).text("object"==typeof a?a.label:a)})),"undefined"!=typeof this.timezone&&null!==this.timezone&&""!==this.timezone){var s=-1*new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12).getTimezoneOffset();s===this.timezone?selectLocalTimezone(c):this.timezone_select.val(this.timezone)}else"undefined"!=typeof this.hour&&null!==this.hour&&""!==this.hour?this.timezone_select.val(b.timezone):selectLocalTimezone(c);this.timezone_select.change(function(){c._onTimeChange(),c._onSelectHandler(),c._afterInject()});var t=a.find(".ui-datepicker-buttonpane");if(t.length?t.before(r):a.append(r),this.$timeObj=r.find(".ui_tpicker_time_input"),this.$timeObj.change(function(){var a=c.inst.settings.timeFormat,b=$.datepicker.parseTime(a,this.value),d=new Date;b?(d.setHours(b.hour),d.setMinutes(b.minute),d.setSeconds(b.second),$.datepicker._setTime(c.inst,d)):(this.value=c.formattedTime,this.blur())}),null!==this.inst){var u=this.timeDefined;this._onTimeChange(),this.timeDefined=u}if(this._defaults.addSliderAccess){var v=this._defaults.sliderAccessArgs,w=this._defaults.isRTL;v.isRTL=w,setTimeout(function(){if(0===r.find(".ui-slider-access").length){r.find(".ui-slider:visible").sliderAccess(v);var a=r.find(".ui-slider-access:eq(0)").outerWidth(!0);a&&r.find("table:visible").each(function(){var b=$(this),c=b.outerWidth(),d=b.css(w?"marginRight":"marginLeft").toString().replace("%",""),e=c-a,f=d*e/c+"%",g={width:e,marginRight:0,marginLeft:0};g[w?"marginRight":"marginLeft"]=f,b.css(g)})}},10)}c._limitMinMaxDateTime(this.inst,!0)}},_limitMinMaxDateTime:function(a,b){var c=this._defaults,d=new Date(a.selectedYear,a.selectedMonth,a.selectedDay);if(this._defaults.showTimepicker){if(null!==$.datepicker._get(a,"minDateTime")&&void 0!==$.datepicker._get(a,"minDateTime")&&d){var e=$.datepicker._get(a,"minDateTime"),f=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0);(null===this.hourMinOriginal||null===this.minuteMinOriginal||null===this.secondMinOriginal||null===this.millisecMinOriginal||null===this.microsecMinOriginal)&&(this.hourMinOriginal=c.hourMin,this.minuteMinOriginal=c.minuteMin,this.secondMinOriginal=c.secondMin,this.millisecMinOriginal=c.millisecMin,this.microsecMinOriginal=c.microsecMin),a.settings.timeOnly||f.getTime()===d.getTime()?(this._defaults.hourMin=e.getHours(),this.hour<=this._defaults.hourMin?(this.hour=this._defaults.hourMin,this._defaults.minuteMin=e.getMinutes(),this.minute<=this._defaults.minuteMin?(this.minute=this._defaults.minuteMin,this._defaults.secondMin=e.getSeconds(),this.second<=this._defaults.secondMin?(this.second=this._defaults.secondMin,this._defaults.millisecMin=e.getMilliseconds(),this.millisec<=this._defaults.millisecMin?(this.millisec=this._defaults.millisecMin,this._defaults.microsecMin=e.getMicroseconds()):(this.microsec<this._defaults.microsecMin&&(this.microsec=this._defaults.microsecMin),this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.hourMin=this.hourMinOriginal,this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)}if(null!==$.datepicker._get(a,"maxDateTime")&&void 0!==$.datepicker._get(a,"maxDateTime")&&d){var g=$.datepicker._get(a,"maxDateTime"),h=new Date(g.getFullYear(),g.getMonth(),g.getDate(),0,0,0,0);(null===this.hourMaxOriginal||null===this.minuteMaxOriginal||null===this.secondMaxOriginal||null===this.millisecMaxOriginal)&&(this.hourMaxOriginal=c.hourMax,this.minuteMaxOriginal=c.minuteMax,this.secondMaxOriginal=c.secondMax,this.millisecMaxOriginal=c.millisecMax,this.microsecMaxOriginal=c.microsecMax),a.settings.timeOnly||h.getTime()===d.getTime()?(this._defaults.hourMax=g.getHours(),this.hour>=this._defaults.hourMax?(this.hour=this._defaults.hourMax,this._defaults.minuteMax=g.getMinutes(),this.minute>=this._defaults.minuteMax?(this.minute=this._defaults.minuteMax,this._defaults.secondMax=g.getSeconds(),this.second>=this._defaults.secondMax?(this.second=this._defaults.secondMax,this._defaults.millisecMax=g.getMilliseconds(),this.millisec>=this._defaults.millisecMax?(this.millisec=this._defaults.millisecMax,this._defaults.microsecMax=g.getMicroseconds()):(this.microsec>this._defaults.microsecMax&&(this.microsec=this._defaults.microsecMax),this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.hourMax=this.hourMaxOriginal,this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)}if(null!==a.settings.minTime){var i=new Date("01/01/1970 "+a.settings.minTime);this.hour<i.getHours()?(this.hour=this._defaults.hourMin=i.getHours(),this.minute=this._defaults.minuteMin=i.getMinutes()):this.hour===i.getHours()&&this.minute<i.getMinutes()?this.minute=this._defaults.minuteMin=i.getMinutes():this._defaults.hourMin<i.getHours()?(this._defaults.hourMin=i.getHours(),this._defaults.minuteMin=i.getMinutes()):this._defaults.hourMin===i.getHours()===this.hour&&this._defaults.minuteMin<i.getMinutes()?this._defaults.minuteMin=i.getMinutes():this._defaults.minuteMin=0}if(null!==a.settings.maxTime){var j=new Date("01/01/1970 "+a.settings.maxTime);this.hour>j.getHours()?(this.hour=this._defaults.hourMax=j.getHours(),this.minute=this._defaults.minuteMax=j.getMinutes()):this.hour===j.getHours()&&this.minute>j.getMinutes()?this.minute=this._defaults.minuteMax=j.getMinutes():this._defaults.hourMax>j.getHours()?(this._defaults.hourMax=j.getHours(),this._defaults.minuteMax=j.getMinutes()):this._defaults.hourMax===j.getHours()===this.hour&&this._defaults.minuteMax>j.getMinutes()?this._defaults.minuteMax=j.getMinutes():this._defaults.minuteMax=59}if(void 0!==b&&b===!0){var k=parseInt(this._defaults.hourMax-(this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour,10),l=parseInt(this._defaults.minuteMax-(this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute,10),m=parseInt(this._defaults.secondMax-(this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond,10),n=parseInt(this._defaults.millisecMax-(this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec,10),o=parseInt(this._defaults.microsecMax-(this._defaults.microsecMax-this._defaults.microsecMin)%this._defaults.stepMicrosec,10);this.hour_slider&&(this.control.options(this,this.hour_slider,"hour",{min:this._defaults.hourMin,max:k,step:this._defaults.stepHour}),this.control.value(this,this.hour_slider,"hour",this.hour-this.hour%this._defaults.stepHour)),this.minute_slider&&(this.control.options(this,this.minute_slider,"minute",{min:this._defaults.minuteMin,max:l,step:this._defaults.stepMinute}),this.control.value(this,this.minute_slider,"minute",this.minute-this.minute%this._defaults.stepMinute)),this.second_slider&&(this.control.options(this,this.second_slider,"second",{min:this._defaults.secondMin,max:m,step:this._defaults.stepSecond}),this.control.value(this,this.second_slider,"second",this.second-this.second%this._defaults.stepSecond)),this.millisec_slider&&(this.control.options(this,this.millisec_slider,"millisec",{min:this._defaults.millisecMin,max:n,step:this._defaults.stepMillisec}),this.control.value(this,this.millisec_slider,"millisec",this.millisec-this.millisec%this._defaults.stepMillisec)),this.microsec_slider&&(this.control.options(this,this.microsec_slider,"microsec",{min:this._defaults.microsecMin,max:o,step:this._defaults.stepMicrosec}),this.control.value(this,this.microsec_slider,"microsec",this.microsec-this.microsec%this._defaults.stepMicrosec))}}},_onTimeChange:function(){if(this._defaults.showTimepicker){var a=this.hour_slider?this.control.value(this,this.hour_slider,"hour"):!1,b=this.minute_slider?this.control.value(this,this.minute_slider,"minute"):!1,c=this.second_slider?this.control.value(this,this.second_slider,"second"):!1,d=this.millisec_slider?this.control.value(this,this.millisec_slider,"millisec"):!1,e=this.microsec_slider?this.control.value(this,this.microsec_slider,"microsec"):!1,f=this.timezone_select?this.timezone_select.val():!1,g=this._defaults,h=g.pickerTimeFormat||g.timeFormat,i=g.pickerTimeSuffix||g.timeSuffix;"object"==typeof a&&(a=!1),"object"==typeof b&&(b=!1),"object"==typeof c&&(c=!1),"object"==typeof d&&(d=!1),"object"==typeof e&&(e=!1),"object"==typeof f&&(f=!1),a!==!1&&(a=parseInt(a,10)),b!==!1&&(b=parseInt(b,10)),c!==!1&&(c=parseInt(c,10)),d!==!1&&(d=parseInt(d,10)),e!==!1&&(e=parseInt(e,10)),f!==!1&&(f=f.toString());var j=g[12>a?"amNames":"pmNames"][0],k=a!==parseInt(this.hour,10)||b!==parseInt(this.minute,10)||c!==parseInt(this.second,10)||d!==parseInt(this.millisec,10)||e!==parseInt(this.microsec,10)||this.ampm.length>0&&12>a!=(-1!==$.inArray(this.ampm.toUpperCase(),this.amNames))||null!==this.timezone&&f!==this.timezone.toString();if(k&&(a!==!1&&(this.hour=a),b!==!1&&(this.minute=b),c!==!1&&(this.second=c),d!==!1&&(this.millisec=d),e!==!1&&(this.microsec=e),f!==!1&&(this.timezone=f),this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),this._limitMinMaxDateTime(this.inst,!0)),this.support.ampm&&(this.ampm=j),this.formattedTime=$.datepicker.formatTime(g.timeFormat,this,g),this.$timeObj){var l=this.$timeObj[0].selectionStart,m=this.$timeObj[0].selectionEnd;h===g.timeFormat?this.$timeObj.val(this.formattedTime+i):this.$timeObj.val($.datepicker.formatTime(h,this,g)+i),this.$timeObj[0].setSelectionRange(l,m)}this.timeDefined=!0,k&&this._updateDateTime()}},_onSelectHandler:function(){var a=this._defaults.onSelect||this.inst.settings.onSelect,b=this.$input?this.$input[0]:null;a&&b&&a.apply(b,[this.formattedDateTime,this])},_updateDateTime:function(a){a=this.inst||a;var b=a.currentYear>0?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(a.selectedYear,a.selectedMonth,a.selectedDay),c=$.datepicker._daylightSavingAdjust(b),d=$.datepicker._get(a,"dateFormat"),e=$.datepicker._getFormatConfig(a),f=null!==c&&this.timeDefined;this.formattedDate=$.datepicker.formatDate(d,null===c?new Date:c,e);var g=this.formattedDate;if(""===a.lastVal&&(a.currentYear=a.selectedYear,a.currentMonth=a.selectedMonth,a.currentDay=a.selectedDay),this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!1?g=this.formattedTime:(this._defaults.timeOnly!==!0&&(this._defaults.alwaysSetTime||f)||this._defaults.timeOnly===!0&&this._defaults.timeOnlyShowDate===!0)&&(g+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix),this.formattedDateTime=g,this._defaults.showTimepicker)if(this.$altInput&&this._defaults.timeOnly===!1&&this._defaults.altFieldTimeOnly===!0)this.$altInput.val(this.formattedTime),this.$input.val(this.formattedDate);else if(this.$altInput){this.$input.val(g);var h="",i=null!==this._defaults.altSeparator?this._defaults.altSeparator:this._defaults.separator,j=null!==this._defaults.altTimeSuffix?this._defaults.altTimeSuffix:this._defaults.timeSuffix;this._defaults.timeOnly||(h=this._defaults.altFormat?$.datepicker.formatDate(this._defaults.altFormat,null===c?new Date:c,e):this.formattedDate,h&&(h+=i)),h+=null!==this._defaults.altTimeFormat?$.datepicker.formatTime(this._defaults.altTimeFormat,this,this._defaults)+j:this.formattedTime+j,this.$altInput.val(h)}else this.$input.val(g);else this.$input.val(this.formattedDate);this.$input.trigger("change")},_onFocus:function(){if(!this.$input.val()&&this._defaults.defaultValue){this.$input.val(this._defaults.defaultValue);var a=$.datepicker._getInst(this.$input.get(0)),b=$.datepicker._get(a,"timepicker");if(b&&b._defaults.timeOnly&&a.input.val()!==a.lastVal)try{$.datepicker._updateDatepicker(a)}catch(c){$.timepicker.log(c)}}},_controls:{slider:{create:function(a,b,c,d,e,f,g){var h=a._defaults.isRTL;return b.prop("slide",null).slider({orientation:"horizontal",value:h?-1*d:d,min:h?-1*f:e,max:h?-1*e:f,step:g,slide:function(b,d){a.control.value(a,$(this),c,h?-1*d.value:d.value),a._onTimeChange()},stop:function(b,c){a._onSelectHandler()}})},options:function(a,b,c,d,e){if(a._defaults.isRTL){if("string"==typeof d)return"min"===d||"max"===d?void 0!==e?b.slider(d,-1*e):Math.abs(b.slider(d)):b.slider(d);var f=d.min,g=d.max;return d.min=d.max=null,void 0!==f&&(d.max=-1*f),void 0!==g&&(d.min=-1*g),b.slider(d)}return"string"==typeof d&&void 0!==e?b.slider(d,e):b.slider(d)},value:function(a,b,c,d){return a._defaults.isRTL?void 0!==d?b.slider("value",-1*d):Math.abs(b.slider("value")):void 0!==d?b.slider("value",d):b.slider("value")}},select:{create:function(a,b,c,d,e,f,g){for(var h='<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="'+c+'" data-min="'+e+'" data-max="'+f+'" data-step="'+g+'">',i=a._defaults.pickerTimeFormat||a._defaults.timeFormat,j=e;f>=j;j+=g)h+='<option value="'+j+'"'+(j===d?" selected":"")+">",h+="hour"===c?$.datepicker.formatTime($.trim(i.replace(/[^ht ]/gi,"")),{hour:j},a._defaults):"millisec"===c||"microsec"===c||j>=10?j:"0"+j.toString(),h+="</option>";return h+="</select>",b.children("select").remove(),$(h).appendTo(b).change(function(b){a._onTimeChange(),a._onSelectHandler(),a._afterInject()}),b},options:function(a,b,c,d,e){var f={},g=b.children("select");if("string"==typeof d){if(void 0===e)return g.data(d);f[d]=e}else f=d;return a.control.create(a,b,g.data("unit"),g.val(),f.min>=0?f.min:g.data("min"),f.max||g.data("max"),f.step||g.data("step"))},value:function(a,b,c,d){var e=b.children("select");return void 0!==d?e.val(d):e.val()}}}}),$.fn.extend({timepicker:function(a){a=a||{};var b=Array.prototype.slice.call(arguments);return"object"==typeof a&&(b[0]=$.extend(a,{timeOnly:!0})),$(this).each(function(){$.fn.datetimepicker.apply($(this),b)})},datetimepicker:function(a){a=a||{};var b=arguments;return"string"==typeof a?"getDate"===a||"option"===a&&2===b.length&&"string"==typeof b[1]?$.fn.datepicker.apply($(this[0]),b):this.each(function(){var a=$(this);a.datepicker.apply(a,b)}):this.each(function(){var b=$(this);b.datepicker($.timepicker._newInst(b,a)._defaults)})}}),$.datepicker.parseDateTime=function(a,b,c,d,e){var f=parseDateTimeInternal(a,b,c,d,e);if(f.timeObj){var g=f.timeObj;f.date.setHours(g.hour,g.minute,g.second,g.millisec),f.date.setMicroseconds(g.microsec)}return f.date},$.datepicker.parseTime=function(a,b,c){var d=extendRemove(extendRemove({},$.timepicker._defaults),c||{}),e=(-1!==a.replace(/\'.*?\'/g,"").indexOf("Z"),function(a,b,c){var d,e=function(a,b){var c=[];return a&&$.merge(c,a),b&&$.merge(c,b),c=$.map(c,function(a){return a.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")}),"("+c.join("|")+")?"},f=function(a){var b=a.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),c={h:-1,m:-1,s:-1,l:-1,c:-1,t:-1,z:-1};if(b)for(var d=0;d<b.length;d++)-1===c[b[d].toString().charAt(0)]&&(c[b[d].toString().charAt(0)]=d+1);return c},g="^"+a.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(a){var b=a.length;switch(a.charAt(0).toLowerCase()){case"h":return 1===b?"(\\d?\\d)":"(\\d{"+b+"})";case"m":return 1===b?"(\\d?\\d)":"(\\d{"+b+"})";case"s":return 1===b?"(\\d?\\d)":"(\\d{"+b+"})";case"l":return"(\\d?\\d?\\d)";case"c":return"(\\d?\\d?\\d)";case"z":return"(z|[-+]\\d\\d:?\\d\\d|\\S+)?";case"t":return e(c.amNames,c.pmNames);default:return"("+a.replace(/\'/g,"").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g,function(a){return"\\"+a})+")?"}}).replace(/\s/g,"\\s?")+c.timeSuffix+"$",h=f(a),i="";d=b.match(new RegExp(g,"i"));var j={hour:0,minute:0,second:0,millisec:0,microsec:0};return d?(-1!==h.t&&(void 0===d[h.t]||0===d[h.t].length?(i="",j.ampm=""):(i=-1!==$.inArray(d[h.t].toUpperCase(),$.map(c.amNames,function(a,b){return a.toUpperCase()}))?"AM":"PM",j.ampm=c["AM"===i?"amNames":"pmNames"][0])),-1!==h.h&&("AM"===i&&"12"===d[h.h]?j.hour=0:"PM"===i&&"12"!==d[h.h]?j.hour=parseInt(d[h.h],10)+12:j.hour=Number(d[h.h])),-1!==h.m&&(j.minute=Number(d[h.m])),-1!==h.s&&(j.second=Number(d[h.s])),-1!==h.l&&(j.millisec=Number(d[h.l])),-1!==h.c&&(j.microsec=Number(d[h.c])),-1!==h.z&&void 0!==d[h.z]&&(j.timezone=$.timepicker.timezoneOffsetNumber(d[h.z])),j):!1}),f=function(a,b,c){try{var d=new Date("2012-01-01 "+b);if(isNaN(d.getTime())&&(d=new Date("2012-01-01T"+b),isNaN(d.getTime())&&(d=new Date("01/01/2012 "+b),isNaN(d.getTime()))))throw"Unable to parse time with native Date: "+b;return{hour:d.getHours(),minute:d.getMinutes(),second:d.getSeconds(),millisec:d.getMilliseconds(),microsec:d.getMicroseconds(),timezone:-1*d.getTimezoneOffset()}}catch(f){try{return e(a,b,c)}catch(g){$.timepicker.log("Unable to parse \ntimeString: "+b+"\ntimeFormat: "+a)}}return!1};return"function"==typeof d.parse?d.parse(a,b,d):"loose"===d.parse?f(a,b,d):e(a,b,d)},$.datepicker.formatTime=function(a,b,c){c=c||{},c=$.extend({},$.timepicker._defaults,c),b=$.extend({hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null},b);var d=a,e=c.amNames[0],f=parseInt(b.hour,10);return f>11&&(e=c.pmNames[0]),d=d.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(a){switch(a){case"HH":return("0"+f).slice(-2);case"H":return f;case"hh":return("0"+convert24to12(f)).slice(-2);case"h":return convert24to12(f);case"mm":return("0"+b.minute).slice(-2);case"m":return b.minute;case"ss":return("0"+b.second).slice(-2);case"s":return b.second;case"l":return("00"+b.millisec).slice(-3);case"c":return("00"+b.microsec).slice(-3);case"z":return $.timepicker.timezoneOffsetString(null===b.timezone?c.timezone:b.timezone,!1);case"Z":return $.timepicker.timezoneOffsetString(null===b.timezone?c.timezone:b.timezone,!0);case"T":return e.charAt(0).toUpperCase();case"TT":return e.toUpperCase();case"t":return e.charAt(0).toLowerCase();case"tt":return e.toLowerCase();default:return a.replace(/'/g,"")}})},$.datepicker._base_selectDate=$.datepicker._selectDate,$.datepicker._selectDate=function(a,b){var c,d=this._getInst($(a)[0]),e=this._get(d,"timepicker");e&&d.settings.showTimepicker?(e._limitMinMaxDateTime(d,!0),c=d.inline,d.inline=d.stay_open=!0,this._base_selectDate(a,b),d.inline=c,d.stay_open=!1,this._notifyChange(d),this._updateDatepicker(d)):this._base_selectDate(a,b)},$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker,$.datepicker._updateDatepicker=function(a){var b=a.input[0];if(!($.datepicker._curInst&&$.datepicker._curInst!==a&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!==b||"boolean"==typeof a.stay_open&&a.stay_open!==!1)){this._base_updateDatepicker(a);var c=this._get(a,"timepicker");c&&c._addTimePicker(a)}},$.datepicker._base_doKeyPress=$.datepicker._doKeyPress,$.datepicker._doKeyPress=function(a){var b=$.datepicker._getInst(a.target),c=$.datepicker._get(b,"timepicker");if(c&&$.datepicker._get(b,"constrainInput")){var d=c.support.ampm,e=null!==c._defaults.showTimezone?c._defaults.showTimezone:c.support.timezone,f=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),g=c._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,d?"APM":"").replace(/Tt/g,d?"AaPpMm":"").replace(/tT/g,d?"AaPpMm":"").replace(/T/g,d?"AP":"").replace(/tt/g,d?"apm":"").replace(/t/g,d?"ap":"")+" "+c._defaults.separator+c._defaults.timeSuffix+(e?c._defaults.timezoneList.join(""):"")+c._defaults.amNames.join("")+c._defaults.pmNames.join("")+f,h=String.fromCharCode(void 0===a.charCode?a.keyCode:a.charCode);return a.ctrlKey||" ">h||!f||g.indexOf(h)>-1}return $.datepicker._base_doKeyPress(a)},$.datepicker._base_updateAlternate=$.datepicker._updateAlternate,$.datepicker._updateAlternate=function(a){var b=this._get(a,"timepicker");if(b){var c=b._defaults.altField;if(c){var d=(b._defaults.altFormat||b._defaults.dateFormat,this._getDate(a)),e=$.datepicker._getFormatConfig(a),f="",g=b._defaults.altSeparator?b._defaults.altSeparator:b._defaults.separator,h=b._defaults.altTimeSuffix?b._defaults.altTimeSuffix:b._defaults.timeSuffix,i=null!==b._defaults.altTimeFormat?b._defaults.altTimeFormat:b._defaults.timeFormat;f+=$.datepicker.formatTime(i,b,b._defaults)+h,b._defaults.timeOnly||b._defaults.altFieldTimeOnly||null===d||(f=b._defaults.altFormat?$.datepicker.formatDate(b._defaults.altFormat,d,e)+g+f:b.formattedDate+g+f),$(c).val(a.input.val()?f:"")}}else $.datepicker._base_updateAlternate(a)},$.datepicker._base_doKeyUp=$.datepicker._doKeyUp,$.datepicker._doKeyUp=function(a){var b=$.datepicker._getInst(a.target),c=$.datepicker._get(b,"timepicker");
if(c&&c._defaults.timeOnly&&b.input.val()!==b.lastVal)try{$.datepicker._updateDatepicker(b)}catch(d){$.timepicker.log(d)}return $.datepicker._base_doKeyUp(a)},$.datepicker._base_gotoToday=$.datepicker._gotoToday,$.datepicker._gotoToday=function(a){var b=this._getInst($(a)[0]);this._base_gotoToday(a);var c=this._get(b,"timepicker"),d=$.timepicker.timezoneOffsetNumber(c.timezone),e=new Date;e.setMinutes(e.getMinutes()+e.getTimezoneOffset()+d),this._setTime(b,e),this._setDate(b,e),c._onSelectHandler()},$.datepicker._disableTimepickerDatepicker=function(a){var b=this._getInst(a);if(b){var c=this._get(b,"timepicker");$(a).datepicker("getDate"),c&&(b.settings.showTimepicker=!1,c._defaults.showTimepicker=!1,c._updateDateTime(b))}},$.datepicker._enableTimepickerDatepicker=function(a){var b=this._getInst(a);if(b){var c=this._get(b,"timepicker");$(a).datepicker("getDate"),c&&(b.settings.showTimepicker=!0,c._defaults.showTimepicker=!0,c._addTimePicker(b),c._updateDateTime(b))}},$.datepicker._setTime=function(a,b){var c=this._get(a,"timepicker");if(c){var d=c._defaults;c.hour=b?b.getHours():d.hour,c.minute=b?b.getMinutes():d.minute,c.second=b?b.getSeconds():d.second,c.millisec=b?b.getMilliseconds():d.millisec,c.microsec=b?b.getMicroseconds():d.microsec,c._limitMinMaxDateTime(a,!0),c._onTimeChange(),c._updateDateTime(a)}},$.datepicker._setTimeDatepicker=function(a,b,c){var d=this._getInst(a);if(d){var e=this._get(d,"timepicker");if(e){this._setDateFromField(d);var f;b&&("string"==typeof b?(e._parseTime(b,c),f=new Date,f.setHours(e.hour,e.minute,e.second,e.millisec),f.setMicroseconds(e.microsec)):(f=new Date(b.getTime()),f.setMicroseconds(b.getMicroseconds())),"Invalid Date"===f.toString()&&(f=void 0),this._setTime(d,f))}}},$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker,$.datepicker._setDateDatepicker=function(a,b){var c=this._getInst(a),d=b;if(c){"string"==typeof b&&(d=new Date(b),d.getTime()||(this._base_setDateDatepicker.apply(this,arguments),d=$(a).datepicker("getDate")));var e,f=this._get(c,"timepicker");d instanceof Date?(e=new Date(d.getTime()),e.setMicroseconds(d.getMicroseconds())):e=d,f&&e&&(f.support.timezone||null!==f._defaults.timezone||(f.timezone=-1*e.getTimezoneOffset()),d=$.timepicker.timezoneAdjust(d,f.timezone),e=$.timepicker.timezoneAdjust(e,f.timezone)),this._updateDatepicker(c),this._base_setDateDatepicker.apply(this,arguments),this._setTimeDatepicker(a,e,!0)}},$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker,$.datepicker._getDateDatepicker=function(a,b){var c=this._getInst(a);if(c){var d=this._get(c,"timepicker");if(d){void 0===c.lastVal&&this._setDateFromField(c,b);var e=this._getDate(c),f=$.trim(d.$altInput&&d._defaults.altFieldTimeOnly?d.$input.val()+" "+d.$altInput.val():d.$input.val());return e&&d._parseTime(f,!c.settings.timeOnly)&&(e.setHours(d.hour,d.minute,d.second,d.millisec),e.setMicroseconds(d.microsec),null!=d.timezone&&(d.support.timezone||null!==d._defaults.timezone||(d.timezone=-1*e.getTimezoneOffset()),e=$.timepicker.timezoneAdjust(e,d.timezone))),e}return this._base_getDateDatepicker(a,b)}},$.datepicker._base_parseDate=$.datepicker.parseDate,$.datepicker.parseDate=function(a,b,c){var d;try{d=this._base_parseDate(a,b,c)}catch(e){if(!(e.indexOf(":")>=0))throw e;d=this._base_parseDate(a,b.substring(0,b.length-(e.length-e.indexOf(":")-2)),c),$.timepicker.log("Error parsing the date string: "+e+"\ndate string = "+b+"\ndate format = "+a)}return d},$.datepicker._base_formatDate=$.datepicker._formatDate,$.datepicker._formatDate=function(a,b,c,d){var e=this._get(a,"timepicker");return e?(e._updateDateTime(a),e.$input.val()):this._base_formatDate(a)},$.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker,$.datepicker._optionDatepicker=function(a,b,c){var d,e=this._getInst(a);if(!e)return null;var f=this._get(e,"timepicker");if(f){var g,h,i,j,k=null,l=null,m=null,n=f._defaults.evnts,o={};if("string"==typeof b){if("minDate"===b||"minDateTime"===b)k=c;else if("maxDate"===b||"maxDateTime"===b)l=c;else if("onSelect"===b)m=c;else if(n.hasOwnProperty(b)){if("undefined"==typeof c)return n[b];o[b]=c,d={}}}else if("object"==typeof b){b.minDate?k=b.minDate:b.minDateTime?k=b.minDateTime:b.maxDate?l=b.maxDate:b.maxDateTime&&(l=b.maxDateTime);for(g in n)n.hasOwnProperty(g)&&b[g]&&(o[g]=b[g])}for(g in o)o.hasOwnProperty(g)&&(n[g]=o[g],d||(d=$.extend({},b)),delete d[g]);if(d&&isEmptyObject(d))return;if(k?(k=0===k?new Date:new Date(k),f._defaults.minDate=k,f._defaults.minDateTime=k):l?(l=0===l?new Date:new Date(l),f._defaults.maxDate=l,f._defaults.maxDateTime=l):m&&(f._defaults.onSelect=m),k||l)return j=$(a),i=j.datetimepicker("getDate"),h=this._base_optionDatepicker.call($.datepicker,a,d||b,c),j.datetimepicker("setDate",i),h}return void 0===c?this._base_optionDatepicker.call($.datepicker,a,b):this._base_optionDatepicker.call($.datepicker,a,d||b,c)};var isEmptyObject=function(a){var b;for(b in a)if(a.hasOwnProperty(b))return!1;return!0},extendRemove=function(a,b){$.extend(a,b);for(var c in b)(null===b[c]||void 0===b[c])&&(a[c]=b[c]);return a},detectSupport=function(a){var b=a.replace(/'.*?'/g,"").toLowerCase(),c=function(a,b){return-1!==a.indexOf(b)?!0:!1};return{hour:c(b,"h"),minute:c(b,"m"),second:c(b,"s"),millisec:c(b,"l"),microsec:c(b,"c"),timezone:c(b,"z"),ampm:c(b,"t")&&c(a,"h"),iso8601:c(a,"Z")}},convert24to12=function(a){return a%=12,0===a&&(a=12),String(a)},computeEffectiveSetting=function(a,b){return a&&a[b]?a[b]:$.timepicker._defaults[b]},splitDateTime=function(a,b){var c=computeEffectiveSetting(b,"separator"),d=computeEffectiveSetting(b,"timeFormat"),e=d.split(c),f=e.length,g=a.split(c),h=g.length;return h>1?{dateString:g.splice(0,h-f).join(c),timeString:g.splice(0,f).join(c)}:{dateString:a,timeString:""}},parseDateTimeInternal=function(a,b,c,d,e){var f,g,h;if(g=splitDateTime(c,e),f=$.datepicker._base_parseDate(a,g.dateString,d),""===g.timeString)return{date:f};if(h=$.datepicker.parseTime(b,g.timeString,e),!h)throw"Wrong time format";return{date:f,timeObj:h}},selectLocalTimezone=function(a,b){if(a&&a.timezone_select){var c=b||new Date;a.timezone_select.val(-c.getTimezoneOffset())}};$.timepicker=new Timepicker,$.timepicker.timezoneOffsetString=function(a,b){if(isNaN(a)||a>840||-720>a)return a;var c=a,d=c%60,e=(c-d)/60,f=b?":":"",g=(c>=0?"+":"-")+("0"+Math.abs(e)).slice(-2)+f+("0"+Math.abs(d)).slice(-2);return"+00:00"===g?"Z":g},$.timepicker.timezoneOffsetNumber=function(a){var b=a.toString().replace(":","");return"Z"===b.toUpperCase()?0:/^(\-|\+)\d{4}$/.test(b)?("-"===b.substr(0,1)?-1:1)*(60*parseInt(b.substr(1,2),10)+parseInt(b.substr(3,2),10)):a},$.timepicker.timezoneAdjust=function(a,b){var c=$.timepicker.timezoneOffsetNumber(b);return isNaN(c)||a.setMinutes(a.getMinutes()+-a.getTimezoneOffset()-c),a},$.timepicker.timeRange=function(a,b,c){return $.timepicker.handleRange("timepicker",a,b,c)},$.timepicker.datetimeRange=function(a,b,c){$.timepicker.handleRange("datetimepicker",a,b,c)},$.timepicker.dateRange=function(a,b,c){$.timepicker.handleRange("datepicker",a,b,c)},$.timepicker.handleRange=function(a,b,c,d){function e(e,f){var g=b[a]("getDate"),h=c[a]("getDate"),i=e[a]("getDate");if(null!==g){var j=new Date(g.getTime()),k=new Date(g.getTime());j.setMilliseconds(j.getMilliseconds()+d.minInterval),k.setMilliseconds(k.getMilliseconds()+d.maxInterval),d.minInterval>0&&j>h?c[a]("setDate",j):d.maxInterval>0&&h>k?c[a]("setDate",k):g>h&&f[a]("setDate",i)}}function f(b,c,e){if(b.val()){var f=b[a].call(b,"getDate");null!==f&&d.minInterval>0&&("minDate"===e&&f.setMilliseconds(f.getMilliseconds()+d.minInterval),"maxDate"===e&&f.setMilliseconds(f.getMilliseconds()-d.minInterval)),f.getTime&&c[a].call(c,"option",e,f)}}d=$.extend({},{minInterval:0,maxInterval:0,start:{},end:{}},d);var g=!1;return"timepicker"===a&&(g=!0,a="datetimepicker"),$.fn[a].call(b,$.extend({timeOnly:g,onClose:function(a,b){e($(this),c)},onSelect:function(a){f($(this),c,"minDate")}},d,d.start)),$.fn[a].call(c,$.extend({timeOnly:g,onClose:function(a,c){e($(this),b)},onSelect:function(a){f($(this),b,"maxDate")}},d,d.end)),e(b,c),f(b,c,"minDate"),f(c,b,"maxDate"),$([b.get(0),c.get(0)])},$.timepicker.log=function(){window.console&&window.console.log.apply(window.console,Array.prototype.slice.call(arguments))},$.timepicker._util={_extendRemove:extendRemove,_isEmptyObject:isEmptyObject,_convert24to12:convert24to12,_detectSupport:detectSupport,_selectLocalTimezone:selectLocalTimezone,_computeEffectiveSetting:computeEffectiveSetting,_splitDateTime:splitDateTime,_parseDateTimeInternal:parseDateTimeInternal},Date.prototype.getMicroseconds||(Date.prototype.microseconds=0,Date.prototype.getMicroseconds=function(){return this.microseconds},Date.prototype.setMicroseconds=function(a){return this.setMilliseconds(this.getMilliseconds()+Math.floor(a/1e3)),this.microseconds=a%1e3,this}),$.timepicker.version="1.6.1"}});;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery-ui-timepicker-addon.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery-ui-sliderAccess.js---*/
/*
 * jQuery UI Slider Access
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 0.3
 * Last Modified: 10/20/2012
 * 
 * Copyright 2011 Trent Richardson
 * Dual licensed under the MIT and GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 * 
 */
 (function($){

	$.fn.extend({
		sliderAccess: function(options){
			options = options || {};
			options.touchonly = options.touchonly !== undefined? options.touchonly : true; // by default only show it if touch device

			if(options.touchonly === true && !("ontouchend" in document)){
				return $(this);
			}
				
			return $(this).each(function(i,obj){
						var $t = $(this),
							o = $.extend({},{ 
											where: 'after',
											step: $t.slider('option','step'), 
											upIcon: 'ui-icon-plus', 
											downIcon: 'ui-icon-minus',
											text: false,
											upText: '+',
											downText: '-',
											buttonset: true,
											buttonsetTag: 'span',
											isRTL: false
										}, options),
							$buttons = $('<'+ o.buttonsetTag +' class="ui-slider-access">'+
											'<button data-icon="'+ o.downIcon +'" data-step="'+ (o.isRTL? o.step : o.step*-1) +'">'+ o.downText +'</button>'+
											'<button data-icon="'+ o.upIcon +'" data-step="'+ (o.isRTL? o.step*-1 : o.step) +'">'+ o.upText +'</button>'+
										'</'+ o.buttonsetTag +'>');

						$buttons.children('button').each(function(j, jobj){
							var $jt = $(this);
							$jt.button({ 
											text: o.text, 
											icons: { primary: $jt.data('icon') }
										})
								.click(function(e){
											var step = $jt.data('step'),
												curr = $t.slider('value'),
												newval = curr += step*1,
												minval = $t.slider('option','min'),
												maxval = $t.slider('option','max'),
												slidee = $t.slider("option", "slide") || function(){},
												stope = $t.slider("option", "stop") || function(){};

											e.preventDefault();
											
											if(newval < minval || newval > maxval){
												return;
											}
											
											$t.slider('value', newval);

											slidee.call($t, null, { value: newval });
											stope.call($t, null, { value: newval });
										});
						});
						
						// before or after					
						$t[o.where]($buttons);

						if(o.buttonset){
							$buttons.removeClass('ui-corner-right').removeClass('ui-corner-left').buttonset();
							$buttons.eq(0).addClass('ui-corner-left');
							$buttons.eq(1).addClass('ui-corner-right');
						}

						// adjust the width so we don't break the original layout
						var bOuterWidth = $buttons.css({
									marginLeft: ((o.where === 'after' && !o.isRTL) || (o.where === 'before' && o.isRTL)? 10:0), 
									marginRight: ((o.where === 'before' && !o.isRTL) || (o.where === 'after' && o.isRTL)? 10:0)
								}).outerWidth(true) + 5;
						var tOuterWidth = $t.outerWidth(true);
						$t.css('display','inline-block').width(tOuterWidth-bOuterWidth);
					});		
		}
	});

})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/jquery/jquery-ui-sliderAccess.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/history.js---*/
(function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()})(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window)
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/history.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/util.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


function hoverEffects() {
	//get all elements (text inputs, passwords inputs, textareas)
	var elements = document.getElementsByTagName('input');
	var j = 0;
	var hovers = new Array();
	for (var i4 = 0; i4 < elements.length; i4++) {
		if((elements[i4].type=='text')||(elements[i4].type=='password')) {
			hovers[j] = elements[i4];
			++j;
		}
	}
	elements = document.getElementsByTagName('textarea');
	for (var i4 = 0; i4 < elements.length; i4++) {
		hovers[j] = elements[i4];
		++j;
	}
	
	//add focus effects
	for (var i4 = 0; i4 < hovers.length; i4++) {
		hovers[i4].onfocus = function() {this.className += "Hovered";}
		hovers[i4].onblur = function() {this.className = this.className.replace(/Hovered/g, "");}
	}
}


function correctPNG(id) 
{
    if (!/MSIE (5\.5|6\.)/.test(navigator.userAgent)) return;

	var e = document.getElementById (id);
	if (e)
	{
		var imgName = e.style.backgroundImage
		
		imgName = imgName.substring(0, imgName.length-1)
		imgName = imgName.substring(4)
		if (imgName.substring(imgName.length-3, imgName.length).toUpperCase() == "PNG")		
		{			
			e.style.backgroundImage = 'none'
			e.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'" + imgName + "\', sizingMethod='scale')"
		}
			
	}

   for (var i=0; i<document.images.length; i++)
   {
	  var img = document.images[i]
	  var imgName = img.src.toUpperCase()
	  if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
      {
		 var imgID = (img.id) ? "id='" + img.id + "' " : ""
		 var imgClass = (img.className) ? "class='" + img.className + "' " : ""
		 var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
		 var imgStyle = "display:inline-block;" + img.style.cssText 
		 if (img.align == "left") imgStyle = "float:left;" + imgStyle
		 if (img.align == "right") imgStyle = "float:right;" + imgStyle
		 if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle		
		 var strNewHTML = "<span " + imgID + imgClass + imgTitle
		 + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
	     + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
		 + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
		 img.outerHTML = strNewHTML
		 i = i-1
      }
   }

}

function orca_html_decode (id_from, id_to)
{                                
    var s = document.getElementById(id_from).innerHTML;
    s = s.replace(/&#160;/gm, ' ');
    s = s.replace(/\x26gt;/gm, '\x3e');
    s = s.replace(/\x26lt;/gm, '\x3c');
    s = s.replace(/&amp;quot;/gm, '"');
    s = s.replace(/&quot;/gm, '"');
    document.getElementById(id_to).innerHTML = s;
}

function orca_get_xml_ret (s) 
{
    return orca_get_xml_val ('ret', s);
}

function orca_get_xml_val (tag, s) 
{
    if (!s || !s.length)
        return null;
    var r = new RegExp ('<' + tag + '>(.*)<\/' + tag + '>');
    var m = s.match(r);
    if (null == m || m.length < 2)
        return null;

    return m[1];
}

function orca_remove_editor (sId) 
{
    try {
        tinyMCE.execCommand('mceRemoveEditor', false, sId); 
    } catch(err) {};
}

function orca_add_editor (sId, sInitialText) 
{    
    if (document.getElementById(sId)) {
        if ('undefined' !== typeof(sInitialText) && sInitialText) {
            window.orcaInitInstance = function (inst) {	
                inst.setContent(sInitialText);
                window.orcaInitInstance = function (inst) {};
            }
        }
        jQuery('#' + sId).tinymce(glOrcaSettings);
    }
}
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/util.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxError.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * Error handler object
 */


/**
 * constructor
 *		o - HTML Error object
 */
function BxError (o)
{
	alert(o.message + "\n" + o.description);
}

/**
 * constructor
 *		s1 - error message
 *		s2 - error description
 */
function BxError (s1, s2)
{
	alert(s1 + "\n" + s2);
}


;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxError.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxXmlRequest.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * load xml data object
 */


/**
 * constructor
 *		url	- url with xml data to open
 *		h	- handler function
 */
function BxXmlRequest(url, h, async)
{	
	if (!url.length) return;

	/**
	 * local handler function
	 */
	var f = function (r, url, h)
	{
		if (r.readyState == 4) // only if req shows "loaded"
	    {
		    if (r.status == 200 || r.status == 304) // only if "OK"
			{
	            h (r);
		    }
			else
	        {
				var s = '';
				for (var i in r) s += i + "      ";
		        BxError("[L[XML read failed:]]" + r.status, "[L[There was a problem retrieving the XML data:]]\n" + url);
			}
	    }
	}

	var r;
	

	// IE
	if(window.ActiveXObject)
	{		

		try
		{			
			r = new ActiveXObject("Microsoft.XMLHTTP")

			// register handler function
			r.onreadystatechange = function(  ) 
			{
				f (r, url, h);
			}

			r.open("GET", url, async);
			r.send();  
		}
		catch(a)
		{
		}
	}
	else  if (window.XMLHttpRequest)
	{
		r = new XMLHttpRequest();
	
		// register handler function
		r.onload = function () 
		{
			f (r, url, h);
		}

		r.open("GET", url, async);
		r.send(null);  
	}	

	if (!r)
	{
		var e = new BxError("[L[httpxml object creation failed]]", "[L[please upgrade your browser]]");
	}
	else
	{
		this.request = r;
	}

}   





BxXmlRequest.prototype.getRetNodeValue = function (r_xml, tagname)
{
    var ret = '';

    if (r_xml.responseXML)
    {
        if (window.ActiveXObject)
	    {
		    var e = r_xml.responseXML.getElementsByTagName(tagname)[0];
    		if (e != undefined && e != null && e.firstChild)
	    	    ret = e.firstChild.nodeValue;
    	}
        else
    	{     
	    	var e = r_xml.responseXML.getElementsByTagName(tagname)[0];
		    ret = e.textContent;
    	}
    }

    if (ret == null || ret == undefined || !ret.length)
    {
        var r = new RegExp ('<'+tagname+'>([\\x00-\\xff]*)<\/'+tagname+'>');
        var a = r_xml.responseText.match (r);     
        if (a && a.length > 1)
            ret = a[1];
    }

	return  ret;
}
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxXmlRequest.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxXslTransform.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * xml/xsl transformation
 */

/**
 * constructor
 *		url_xml	- url with xml data to open
 *		url_xsl	- url with xsl data to merge with xml
 *		h		- user handler function
 */
function BxXslTransform(url_xml, url_xsl, h)
{	
	var r_xsl;
	var r_xml;
	var no_xsl = 0;

    var safari = navigator.vendor && navigator.vendor.search('Apple') > -1 ? true : false;
    var konq = navigator.vendor && navigator.vendor.search('KDE') > -1 ? true : false;
	
    if (xsl_mode != 'client')
    {
    	if (xsl_mode == 'server' || (!window.ActiveXObject && !window.XSLTProcessor) || window.opera || safari || konq)
    	{
    		if (url_xml.indexOf ("?") == -1)
    		url_xml += "?trans=1";
    		else
    		url_xml += "&trans=1";

    		no_xsl = 1;
    	}
    }


	// xml load handler
	var h_xml = function (r)
	{
		if (r)  // Mozilla
		{
			r_xml = r;
		}

		if (r_xml.readyState == 4) // IE
		{
			if (200 == r_xml.status || (r_xml.parseError && !r_xml.parseError.errorCode))
			{
//				new BxError("xml load failed", r_xml.parseError.reason);
				if ((r_xsl && r_xsl.readyState == 4) || no_xsl)
					h_res (r_xml, r_xsl);
			}
		}
	}

	// xsl load handler
	var h_xsl = function (r)
	{
		if (r) // Mozilla
		{
			r_xsl = r;
		}
		
		if (r_xsl.readyState == 4) // IE
		{
			if (200 == r_xsl.status || (r_xsl.parseError && !r_xsl.parseError.errorCode))
			{
//				new BxError("xsl load failed", r_xsl.parseError.reason);
				if (r_xml && r_xml.readyState == 4) 
					h_res (r_xml, r_xsl);
			}
		}
	}


	// it fires after both (xml and xsl handlers) functions called
	var h_res = function (r_xml, r_xsl)
	{
	    var f;


        if (no_xsl)
        {        	        	
			if (window.XMLSerializer && r_xml.responseXML && r_xml.responseXML.firstChild)
			{                
    			f = ((new XMLSerializer()).serializeToString(r_xml.responseXML));                
			}
			else
            {
				f = r_xml.responseText;
            }        	
        }
        else
		// IE
	    if(window.ActiveXObject)
		{
			try
			{
		        f = r_xml.transformNode (r_xsl);
			}
			catch (e)
			{
				var ee = new BxError(e.message, e.description);
			}
		}
		// Mozilla
	    else if (window.XSLTProcessor)
		{
	        var x = new XSLTProcessor();
		    x.importStylesheet(r_xsl.responseXML);


	        var ff = x.transformToFragment(r_xml.responseXML, window.document);            
			if (XMLSerializer)
			{
				f = ((new XMLSerializer()).serializeToString(ff));                
			}
			else
				new BxError("[L[xml serialization failed]]", "[L[please upgrade your browser]]");
		}

		// call user defined handler function
		h (f);		
	}


    // other browsers
    if (no_xsl)
    {
        new BxXmlRequest (url_xml, h_xml, true);
    }
    else
	// IE
	if (window.ActiveXObject)
	{     
		var b = new ActiveXObject("MSXML2.DOMDocument");
		r_xml = b;
		b.async = true;
		b.load (url_xml);
		b.onreadystatechange = h_xml;

		b = new ActiveXObject("MSXML2.DOMDocument");
		r_xsl = b;
		b.async = true;
		b.load (url_xsl);
		b.onreadystatechange = h_xsl;
	}
	// Mozilla
	else if (window.XSLTProcessor)
	{
		new BxXmlRequest (url_xml, h_xml, true);
		new BxXmlRequest (url_xsl, h_xsl, true);
	}	


}   
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxXslTransform.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxForum.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * forum functionality
 */


/**
 * constructor
 */
function Forum (base, min_points) {	    
	this._base = base;
	this._forum = 0;
	this._topic = 0;
	this._min_points = min_points;
    this._speed = 400;
    this._idEditPostTimer = 0;
}   

/**
 * edit post
 * @param id	post id 
 */
Forum.prototype.editPost = function (id) {

	var node = $('#post_row_'+id+' > td > .forum_post_text');
	if (!node.size()) {
		this.showHiddenPost(id, '$this.editPost (id);');
		return;
	}

    if ($('#post_row_'+id+' > td > .forum_post_text:hidden').size() && $('#post_row_'+id+' > td > form[name=edit_post_'+id+']').size())
        return;

	var $this = this;
	var h = function (r) {		

        var postText = $this.getPostText(id);

        node.hide();
		node.after(r);

        orca_add_editor('tinyEditor_'+id, postText);
	}	
	new BxXslTransform(this._base + "?action=edit_post_xml&post_id=" + id + "&topic_id=" + this._topic, urlXsl + "edit_post.xsl", h);

	return false;

}

/**
 * cancel post editing
 * @param id	post id 
 */
Forum.prototype.editPostCancel = function (id) {

    var ff = $('#'+id+'>form');
	if (!ff.size()) return false;    

    orca_remove_editor('tinyEditor_'+id);

	ff.remove();
    $('#'+id+'>.forum_post_text').show();
}

/**
 * expand/collapse rearch result row
 * @param id	post id 
 */
Forum.prototype.expandPost = function (id) {	

    if ($('#' + id + ':hidden').size()) {
        $('#' + id).show(this._speed);
        $('#' + id).parent().find('div.colexp2').html('<i class="sys-icon minus-circle"></i>');
    } else {
        $('#' + id).hide(this._speed);
        $('#' + id).parent().find('div.colexp2').html('<i class="sys-icon plus-circle"></i>');
    }
}

/**
 * search the forum
 */
Forum.prototype.search = function (text, type, forum, u, disp, start) {	

	this.loading ('[L[SEARCHING]]');

	var m = document.getElementById('orca_main');
	if (!m) 
	{
		new BxError("[L[orca_main div is not defined]]", "[L[please name orca_main content container]]");
	}

    if (undefined == start)
        start = 0;

	var $this = this;

    u = encodeURIComponent(u);
    if (-1 == text.search('%'))
        text = encodeURIComponent(text);

	var h = function (r)
	{		
		var m = document.getElementById('orca_main');		

		m.innerHTML = r;

		$this.runScripts ('orca_main');

        $this.setWindowTitle(null); 
		
		$this.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=search&text=" + text + "&type=" + type + "&forum=" + forum + "&u=" + u + "&disp=" + disp + "&start=" + start, urlXsl + "search.xsl", h);

	document.h.makeHist('action=goto&search_result=1&text=' + text + '&type=' + type + '&forum=' + forum + '&u=' + u + '&disp=' + disp + '&start=' + start);

	return false;
}
	
/**
 * returns new topic page XML
 */
Forum.prototype.selectCat = function (cat, id) {		

	var e = $('#'+id);

	if (!e.size()) {
		new BxError("[L[category id is not defined]]", "[L[please set category ids]]");
		return false;
	}

    // hide category forums
    if (e.next("[cat="+cat+"]").size()) {
        e.nextAll("[cat="+cat+"]").fadeOut(this._speed, 
                function () { 
                    $(this).remove(); 
                } 
        );
        e.find('div.colexp').html('<i class="sys-icon folder"></i>');
        return false;
    }

	this.loading ('[L[LOADING FORUMS]]');

	var $this = this;	
	var h = function (r) {		        
        e.after($('<table>'+r+'</table>').find('tr').hide());
        if (document.all)
            e.nextAll("[cat="+cat+"]").css('display', 'block');
        else
            e.nextAll("[cat="+cat+"]").fadeIn($this._speed);
        e.find('div.colexp').html('<i class="sys-icon folder-open"></i>');
        $this.setWindowTitle(null);
		$this.stopLoading ();
	}
	new BxXslTransform(this._base + "?action=list_forums&cat=" + encodeURIComponent(cat), urlXsl + "cat_forums.xsl", h);

    //var ha = document.h.rw('cat');
	//document.h.makeHist (ha['pre'] + cat + ha['ext']);

	return false;
}

/**
 * select forum
 *	@param id	forum id
 */
Forum.prototype.selectForum = function (id, start) {

    this._forum = id;
    var ha = document.h.rw('forum');
    return this._replacePage (
            '[L[LOADING FORUM TOPICS]]', 
            null, 
            "?action=list_topics&forum=" + encodeURIComponent(this._forum) + "&start=" + start, 
            "forum_topics.xsl", 
            ha['pre'] + this._forum + ha['page'] + start + ha['ext']);
}

/**
 * select recent topics
 *	@param id	forum id
 */
Forum.prototype.selectRecentTopics = function (start) {

    var ha = document.h.rw('recent_topics');
    return this._replacePage (
            '[L[LOADING]]', 
            null, 
            "?action=recent_topics&start=" + start, 
            "recent_topics.xsl", 
            "action=goto&recent_topics=1&start=" + start);
}

/**
 * select forum
 *	@param id	forum id
 */
Forum.prototype.selectForumIndex = function (cat) {

    var ha = document.h.rw('cat');
    return this._replacePage (
            '[L[LOADING FORUM INDEX]]', 
            null, 
            "?action=forum_index" + (cat ? ("&cat=" + cat) : ''), 
            "home.xsl", 
            ha['pre'] + cat + ha['ext'],
            function () { 
                var e = $('#cat'+ cat).get(0); 
                if (e) e.blur(); 
            } 
    );
}

/**
 * show profile page
 *	@param user	usrname to show 
 */
Forum.prototype.showProfile = function (user) {

    var ha = document.h.rw('user');
    return this._replacePage (
            '[L[LOADING PROFILE PAGE]]', 
            null, 
            "?action=profile&user=" + user, 
            "profile.xsl", 
            ha['pre'] + user + ha['ext']
    );
}

/**
 * select topic
 *	@param id	topic id
 */
Forum.prototype.selectTopic = function (id) {

    var $this = this;
    this._topic = id;
    var ha = document.h.rw('topic');
    return this._replacePage (
            '[L[LOADING TOPIC POSTS]]', 
            null, 
            "?action=list_posts&topic=" + encodeURIComponent(this._topic), 
            "forum_posts.xsl", 
            ha['pre'] + this._topic + ha['ext'],
            function () {                 
                $this.runScripts ('orca_main');
            } 
    );
}

/**
 * open new 'post new topic' page
 *	@param id	forum id
 */
Forum.prototype.newTopic = function (id) { 

	if ($('#tinyEditor').size()) 
        orca_remove_editor('tinyEditor');

    if (tinyMCE.activeEditor) 
        tinyMCE.activeEditor.remove();

    var $this = this;
    this._forum = id;
    return this._replacePage (
            '[L[LOADING POST TOPIC PAGE]]',
            null, 
            "?action=new_topic&forum=" + encodeURIComponent(this._forum), 
            "new_topic.xsl", 
            'action=goto&new_topic=' + this._forum,
            function (r) {
                if (document.getElementById('tinyEditor')) {
                    if (0 < $('#tinyEditor').val().length)
                        $('#tinyEditor').val('');
                    orca_add_editor('tinyEditor');
                }
            } 
    );
}

/**
 * cancel new topic submission
 */
Forum.prototype.cancelNewTopic = function (forum, start) {

	if (document.getElementById('tinyEditor'))
        orca_remove_editor('tinyEditor');

    if (forum != '0' && forum.length) {
	    return this.selectForum (forum, start);
    } else {
        document.location = this._base;
        return false;
    }
}

/**
 * my threads page
 */
Forum.prototype.showMyThreads = function (start) {

    if (!isLoggedIn) {
        alert('[L[Please login to view topics you participate in]]');
        return;
    }

    return this._replacePage (
            '[L[LOADING]]',
            null, 
            "?action=show_my_threads&start=" + start, 
            "my_topics.xsl", 
            'action=goto&my_threads=1&start=' + start
    );
}


/**
 * my flags page
 */
Forum.prototype.showMyFlags = function (start) {

    if (!isLoggedIn) {
        alert('[L[Please login to view flagged topics]]');
        return;
    }

    return this._replacePage (
            '[L[LOADING]]',
            null, 
            "?action=show_my_flags&start=" + start, 
            "flagged_topics.xsl", 
            'action=goto&my_flags=1&start=' + start
    );
}

/**
 * open new 'search' page
 */
Forum.prototype.showSearch = function ()
{
    return this._replacePage (
            '[L[LOADING SEARCH PAGE]]',
            null, 
            "?action=show_search", 
            "search_form.xsl",
            'action=goto&search=1'
    );
}

/**
 * open new 'post reply' page
 *	@param id_f	forum id
 *	@param id_t	topic id
 */
Forum.prototype.postReply = function (id_f, id_t) {

	this.loading ('[L[LOADING POST REPLY PAGE]]');

	var m = $('#reply_container');
	if (!m.size()) 
		new BxError("[L[orca_main div is not defined]]", "[L[please name orca_main content container]]");

	if ($('#tinyEditor').size())
        orca_remove_editor('tinyEditor');

    if ('object' == typeof(tinyMCE) && tinyMCE.activeEditor)
        tinyMCE.activeEditor.remove();

	this._forum = id_f;
	this._topic = id_t;

	var $this = this;
	var h = function (r) {		

		m.hide().html(r).slideDown($this._speed);

        if ($('#tinyEditor').length)
            $('#tinyEditor').get(0).focus();

        if (document.getElementById('tinyEditor'))
        {
            if (0 < document.getElementById('tinyEditor').value.length)
                document.getElementById('tinyEditor').value = '';
            orca_add_editor('tinyEditor');
        }
		$this.stopLoading ();
	}
	new BxXslTransform(this._base + "?action=reply&forum=" + this._forum + "&topic=" + this._topic, urlXsl + "post_reply.xsl", h);

	return false;
}



/**
 * open new 'post reply' page
 *	@param id_f	forum id
 *	@param id_t	topic id
 */
Forum.prototype.postReplyWithQuote = function (id_f, id_t, p_id)
{
	this.loading ('[L[LOADING POST REPLY PAGE]]');

	var m = $('#reply_container');
	if (!m.size()) 
		new BxError("[L[orca_main div is not defined]]", "[L[please name orca_main content container]]");

	if ($('#tinyEditor'))
        orca_remove_editor('tinyEditor');

    if (tinyMCE.activeEditor) 
        tinyMCE.activeEditor.remove();

	this._forum = id_f;
	this._topic = id_t;

	var $this = this;
	var h = function (r) {		

		m.html(r).slideDown($this._speed);
    
        if ($('#tinyEditor').length)
            $('#tinyEditor').get(0).focus();

		var post = $this.getPostText(p_id, true);

		post = post.replace (/<text>/ig, '')
		post = post.replace (/<\/text>/ig, '')
		post =  '<p>&#160;</p><div class="quote_post">' + post + '</div> <p>&#160;</p>';

        orca_add_editor('tinyEditor', post);

		$this.stopLoading ();
	}
	new BxXslTransform(this._base + "?action=reply&forum=" + this._forum + "&topic=" + this._topic, urlXsl + "post_reply.xsl", h);

	return false;
}

/**
 * cancel reply
 */
Forum.prototype.cancelReply = function () {

	if ($('#tinyEditor').size())
        orca_remove_editor('tinyEditor');

	var m = $('#reply_container');
	if (!m.size()) 
        return;
	m.slideUp(this._speed).html('&#160;');
}

/**
 * show access denied page
 */
Forum.prototype.accessDenied = function ()
{
    return this._replacePage (
            '[L[LOADING]]',
            null, 
            "?action=access_denied", 
            "default_access_denied.xsl"
    );
}


/**
 * show reply success page
 *	@param f_id	forum id
 *	@param t_id	topic id
 */
Forum.prototype.replySuccess = function (f_id, t_id)
{
    orca_remove_editor('tinyEditor');
    
	return this.selectTopic(t_id);
}


/**
 * delete post
 *	@param p	post id
 *	@param f	forum id
 *	@param t	topic id
 *	@param ask	confirm deletetion
 */
Forum.prototype.deletePost = function (p, f, t, ask) {

	if (ask) 
        if (!confirm('[L[Are you sure ?]]')) 
            return false;

	var form = document.getElementById('tmp_del_form');

	if (!form) 	{
		form = document.createElement('form');
		form.style.display = 'none';
		form.id = 'tmp_del_form';
		form.method = 'post';
		form.target = 'post_actions';
		document.body.appendChild(form);
	}

	if (!form) return;

	form.action = this._base + '?action=delete_post&post_id=' + p + '&forum_id=' + f + '&topic_id=' + t;
	form.submit();

	return false;
}

/**
 * show delete success page
 *	@param forum_id	forum id
 */
Forum.prototype.deleteSuccess = function (f_id, t_id, t_exists) {

	if (f_id) {
		if (t_exists)
			this.selectTopic (t_id);
		else
			this.selectForum (f_id, 0);
	} else if (0 == f_id && 0 == t_id) {
		orca_admin.reportedPosts();
	}

	return false;
}


/**
 * delete topic
 *	@param t_id   topic id
 *	@param f_uri  forum id
 *	@param ask    ask confirmation
 */
Forum.prototype.delTopic = function (t_id, f_uri, ask) {

	if (ask)
        if (!confirm('[L[Are you sure ?]]'))
            return false;

	var $this = this;
	var h = function (r) {		
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) {
        	if (f_uri) {
        		$this.selectForum (f_uri, 0);
        	} else {
        		orca_admin.hiddenTopics();
        	}
			return false;
		}
		alert ('[L[Error occured]]');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=del_topic&topic_id=" + t_id,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;	
}

/**
 * show edit success page
 *	@param forum_id	forum id
 */
Forum.prototype.editSuccess = function (t) {

	this.selectTopic(t);
	return false;
}

/**
 * check string value
 */
Forum.prototype.checkSubject = function (s)
{
	if (s.length < 5 || s.length > 50)
		return false;
	return true;
}

/**
 * check string value
 */
Forum.prototype.checkText = function (s) {
	return ((s.length > 4 && s.length < 128000) ? true : false);
}

/**
 * check string value
 */
Forum.prototype.checkSignature = function (s) {
	return (s.length <= 100 ? true : false);
}

/**
 * check form values
 */
Forum.prototype.checkPostTopicValues = function (s, t, g, f, n) {	

	var ret1 = false;
	var ret2 = false;
    var ret3 = false;
    var ret4 = false;
	var e;

	if (true == n) {
		e = document.getElementById('err_' + s.name);	
		if (!this.checkSubject(s.value)) {		
			if (e) e.style.display = "block";
			s.style.backgroundColor = "#ffaaaa";
			s.focus();
		} else {
			if (e) e.style.display = "none";
			s.style.backgroundColor = "#ffffff";
			ret1 = true;
		}

		e = document.getElementById('err_' + f.name);
		if (!parseInt(f.value)) {
			if (e) e.style.display = "block";
			f.style.backgroundColor = "#ffaaaa";
		} else {
			if (e) e.style.display = "none";
			f.style.backgroundColor = "#ffffff";
			ret4 = true;
		}
	}

	e = document.getElementById('err_' + t.name);	
	if (!this.checkText(t.value)) {
		if (e) e.style.display = "block";
		t.style.backgroundColor = "#ffaaaa";
	} else {
		if (e) e.style.display = "none";
		t.style.backgroundColor = "#ffffff";
		ret2 = true;
	}

	e = document.getElementById('err_' + g.name);	
	if (!this.checkSignature(g.value)) {
		if (e) e.style.display = "block";
		g.style.backgroundColor = "#ffaaaa";
        jQuery('#forum_signature').show(f._speed);
	} else {
		if (e) e.style.display = "none";
		g.style.backgroundColor = "#ffffff";
		ret3 = true;
	}

	return (n ? (ret1 && ret2 && ret3 && ret4) : (ret2 && ret3));
}

/**
 * create and display loading message
 */
Forum.prototype.stopLoading = function () {
	var l = $("#loading");
	if (l.size())
		l.fadeOut(this._speed);
}

/**
 * create and display loading message
 */
Forum.prototype.loading = function (sid) {

	var d = document.getElementById ("loading");
	var e = document.body; 

	if (d) 	{        

		d.style.display = "block";

	} else {

		var d = document.createElement("div");
        var t = document.createTextNode("[L[LOADING]]");

        d.appendChild (t);
        e.appendChild (d);

        d.id = "loading";
        d.style.position = "fixed";
        d.style.zIndex = "50000";
        d.style.textAlign = "center";
        d.style.width = "200px";
        d.style.height = "20px";
        d.style.lineHeight = "20px";                                                             
        d.style.left = (parseInt(e.clientWidth/2) - 100) + "px";
        d.style.top = "0px";
        d.style.display = "block";
        d.style.backgroundColor = "#FFF1A8";
        d.style.fontWeight = "bold";

	}
}



/**
 * create and display loading message
 */
Forum.prototype.hideHTML = function (w, h, html) {
	var l = $("#show_html");
	if (l.size()) {
		$("#show_html>div").hide(this._speed, function () { $("#show_html").remove(); } );
	}
}

/**
 * create and display loading message
 */
Forum.prototype.showHTML = function (html, w, h)
{
	var d = document.getElementById ("show_html");
	var e = document.body; 
    var div;

	if (d) {
		div = d.firstChild;
        div.style.display = "none";
		div.innerHTML = html;
		d.style.top = getScroll() - 30 + "px";
		d.style.left = 0 + "px";
		d.style.display = "block";
		if (w) div.style.width = w + 'px';
		if (h) div.style.height = h + 'px';
		div.style.top = parseInt(d.style.height)/2 - h/2 + 'px';
		div.style.width = parseInt(d.style.width)/2 - w/2 + 'px';
	} else {
		var d = document.createElement("div");
		div = document.createElement("div");

		e.appendChild (d);

		d.id = "show_html";
		d.style.position = "absolute";
		d.style.zIndex = "49000";
		d.style.textAlign = "center";
		d.style.width = e.clientWidth + "px";
		d.style.height = (window.innerHeight ? (window.innerHeight + 30) : screen.height) + "px";			
		d.style.top = getScroll() - 30 + "px";
		d.style.left = 0 + "px";
		d.style.display = "block";

		div.innerHTML = html;
        div.style.display = "none";
		div.style.position = "absolute";
		if (w) div.style.width = w + 'px';
		if (h) div.style.height = h + 'px';
		div.style.top = parseInt(d.style.height)/2 - h/2 + 'px';
		div.style.left = parseInt(d.style.width)/2 - w/2 + 'px';

		d.appendChild(div);
	}
    $(div).show(this._speed);
}


Forum.prototype.hideHiddenPost = function (id)
{
	this.loading ('[L[POST IS LOADING]]');

	var m = $('#post_row_'+id);
	if (!m) 
		return false;
        
	var $this = this;
	var h = function (r) {		
        var html = $('<table>'+r+'</table>').find('#post_row_'+id).html();
		m.html(html);
		$this.stopLoading ();
	}
	new BxXslTransform(this._base + "?action=hide_hidden_post&post_id=" + id, urlXsl + "forum_posts.xsl", h);

	return false;		
}

Forum.prototype.showHiddenPost = function (id, run)
{
	this.loading ('[L[POST IS LOADING]]');

	var m = $('#post_row_'+id);
	if (!m) 
		return false;

	var $this = this;
	var h = function (r) {		   

        var html = $('<table>'+r+'</table>').find('#post_row_'+id).html();
        html = $this.replaceTildaA (html);
		m.html(html);

        $this.runScripts ('post_row_'+id);
		$this.stopLoading ();
		if (run) 
            eval (run);
	}
	new BxXslTransform(this._base + "?action=show_hidden_post&post_id=" + id, urlXsl + "forum_posts.xsl", h);

	return false;	
}

Forum.prototype.hidePost = function (isHide, id)
{
	var $this = this;
	var h = function (r) {		
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) {
            if (isHide)
                $this.hideHiddenPost(id);
            else
                $this.showHiddenPost(id);
			return false;
		}
		alert ('[L[Error occured]]');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=hide_post&is_hide=" + (isHide ? 1 : 0) + "&post_id=" + id,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;	
}

Forum.prototype.hideTopic = function (isHide, id)
{
	var $this = this;
	var h = function (r) {		
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) {
            if (isHide)
                alert ('[L[Topic has been successfully hidden]]');
            else
                alert ('[L[Topic has been successfully un-hidden]]');
			return false;
		}
		alert ('[L[Error occured]]');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=hide_topic&is_hide=" + (isHide ? 1 : 0) + "&topic_id=" + id,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;	
}

Forum.prototype.stick = function (id)
{
	var h = function (r) {
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
            alert ('[L[Topic has been successfully sticked]]');
		else if ('-1' == ret)
            alert ('[L[Topic has been successfully un-sticked]]');	
        else
		    alert ('[L[Error occured]]');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=stick&topic_id=" + id,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;	
}


/*
 * lock/unlock
 */
Forum.prototype.lock = function (topic_id, locked)
{				
	var h = function (r) {
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) 
			alert ('[L[Topic has been successfully locked]]');
		else if ('-1' == ret)
			alert ('[L[Topic has been successfully unlocked]]');
        else
		    alert ('Only admin can lock/unlock topics');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=lock_topic&topic_id=" + topic_id + "&ts=" + (new Date()),
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;
}

/*
 * good vote post 
 */
Forum.prototype.voteGood = function (post_id) {				

	var $this = this;
	var h = function (r) {				
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) {
			var e = $('#points_'+post_id);
            var s = e.html();
            var m = s.match(/([0-9\-]+)/);
            if (m) {
    			e.html(s.replace(/[0-9\-]+/, parseInt(m) + 1));
            }
			$this.hideVoteButtons (post_id);
			$this.hideReportButton  (post_id);
			return false;
		}
		alert ('Vote error');
		return false;
	}	
	jQuery.ajax ({
		url: this._base + "?action=vote_post_good&post_id="+post_id,
		dataType: 'text',
		type: 'POST',
		success: h
	});
	return false;		
}

/*
 * flag/unflag 
 */
Forum.prototype.flag = function (topic_id) {				
	var $this = this;
	var h = function (r) {				
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
			alert ('[L[Topic has been successfully added to your flagged topics]]');
        else if ('-1' == ret)
			alert ('[L[Topic has been successfully removed from your flagged topics]]');
        else
    		alert ('[L[Please login to flag topics]]');	
	}
	
	jQuery.ajax ({
		url: this._base + "?action=flag_topic&topic_id="+topic_id,
		dataType: 'text',
		type: 'POST',
		success: h
	});
	return false;
}

/*
 * report post 
 */
Forum.prototype.report = function (post_id, ask) {
	if ('undefined' !== typeof(ask) && ask) 
        if (!confirm('[L[Are you sure ?]]')) 
            return false;

	var $this = this;
	var h = function (r) {		
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
			alert ('[L[Post has been reported]]');
        else
    		alert ('[L[Report error]]');	
	}
	//new BxXmlRequest (this._base + "?action=report_post&post_id="+post_id, h, true);
	jQuery.ajax ({
		url: this._base + "?action=report_post&post_id="+post_id,
		dataType: 'text',
		type: 'POST',
		success: h
	});
	return true;
}

/*
 * place -1 vote for post
 */
Forum.prototype.voteBad = function (post_id, ask) {
	if ('undefined' !== typeof(ask) && ask) 
        if (!confirm('[L[Are you sure ?]]')) 
            return false;

	var $this = this;
	var h = function (r) {				
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) {
			var e = $('#points_'+post_id);
			e.html(parseInt(e.html()) - 1);
			$this.hideHiddenPost (post_id);
		} else {
    		alert ('Vote error');
        }
	}
	jQuery.ajax ({
		url: this._base + "?action=vote_post_bad&post_id="+post_id,
		dataType: 'text',
		type: 'POST',
		success: h
	});
	return true;
}

/*
 * make vote buttons inactive
 */
Forum.prototype.hideVoteButtons = function (post_id) {
	$('#rate_' + post_id + ' .sys-icon').each (function () {
        $(this).addClass('bx-def-font-grayed');
        $(this).parent()[0].onclick = function () {};
    });
}

/*
 * make report button inactive
 */
Forum.prototype.hideReportButton = function (post_id) {
}

Forum.prototype.getPostText = function (post_id, selected) {
    if ('undefined' != typeof(selected) && selected) {
        var sSelected = this.getSelectedText();
        if (sSelected.length) {
            var sPostText = $('#post_row_'+post_id+' > td > .forum_post_text').text();
            aSelected = sSelected.split("\n");
            if (-1 != sPostText.indexOf(aSelected[0]))
                return aSelected.join('<br />');
        }
    }
    return $('#post_row_'+post_id+' > td > .forum_post_text').html();
}

function getScroll() {
	if (navigator.appName == "Microsoft Internet Explorer")
		return document.documentElement.scrollTop
	return window.pageYOffset;
}

Forum.prototype.livePost = function (ts)
{
	var to = 3000;  // timeout
	var $this = this;
	var lt = document.getElementById('live_tracker');
	var h = function (r) {		

		var o = new BxXmlRequest('','','');			
		var ret = o.getRetNodeValue (r, 'ret');
		if (ret > 0)
		{			
			// get new post and insert it 
			var hh = function (r) {	

				if (!lt) return;

                if (r.length > 0) {
    				// delete oldest

                    $(lt).find('.live_post:last-child').remove();

		    		// insert new                
			    	lt.innerHTML = r + lt.innerHTML;
                
                    $(lt).find('.live_post:first-child').hide().slideDown('slow');
                }

				// watch latest post
				setTimeout('f.livePost('+ret+')', to);
			}

			new BxXslTransform ($this._base + "?action=get_new_post&ts=" + ts +"&now=" + (new Date()), urlXsl + "live_tracker_main.xsl",hh);
		
			return false;
		}	

		// watch latest post	
		setTimeout('f.livePost('+ts+')', to);
		return false;
	}

	
	if (lt)
		new BxXmlRequest (this._base + "?action=is_new_post&ts=" + ts +"&now=" + (new Date()), h, true);	

	return false;		
}

Forum.prototype.setWindowTitle = function (s) {

    if (!s || !s.length)
        s = $("#orca_main .disignBoxFirst:first .boxContent .forum_topic_caption").text();

    if (!s || !s.length)
        window.document.title = defTitle;
    else
        window.document.title = s + '[L[add this to title]]';
}

Forum.prototype.runScripts = function (id) {
    var ee = document.getElementById(id);
    var a = ee.getElementsByTagName('script');
    if (!a.length) return;
    var ajs = new Array(a.length);
    
    for (var i=0 ; i<a.length ; ++i) {        
        if (!a[i]) continue;
        ajs[i] = a[i].innerHTML;
    }

    for (var i=0 ; i<ajs.length ; ++i) { 
        eval (ajs[i]);
    }
}

Forum.prototype.replaceTildaA = function (s) { 
    return s.replace (/\xC2/gm, '');    
}

Forum.prototype._replacePage = function (sLoading, sTitle, sUrlData, sXslFile, sMakeHist, f) {

	this.loading (sLoading);
	var $this = this;
	var h = function (r) {		        

        $('#orca_main').html(r).show('slow', function () {
            if (f) f(r);
            $this.setWindowTitle(sTitle);

            var iTop = parseInt($("#orca_main").offset().top);
            $($.browser.safari ? "body" : "html,body").scrollTop(iTop);

            $(this).find('a.bx-link').dolEmbedly();
        })

		$this.stopLoading ();        
	}
	new BxXslTransform(this._base + sUrlData, urlXsl + sXslFile, h);
    if (sMakeHist && sMakeHist.length)
	    document.h.makeHist (sMakeHist);
	return false;
}

/**
 * display form to move topic to another forum
 *	@param topic_id	topic id to move
 */
Forum.prototype.moveTopicForm = function (topic_id)
{	
	var $this = this;

	var h = function (r)
	{			
		$this.showHTML (r, 400, 200);
	}

	new BxXslTransform(this._base + "?action=move_topic_form&topic_id=" + topic_id, urlXsl + "move_topic_form.xsl", h);

	return true;
}

/**
 * to move topic to another forum
 *	@param topic_id	topic id to move
 */
Forum.prototype.moveTopicSubmit = function (topic_id, forum_id, old_forum_id, goto_new_location)
{	
	var $this = this;
	var h = function (r) {		
        var ret = orca_get_xml_ret(r);
        var goto_forum_uri = ret;
		if (goto_forum_uri && '' != goto_forum_uri && '0' != goto_forum_uri) {
            f.hideHTML();
        	$this.selectForum (goto_forum_uri, 0);            
			return false;
		}
		alert ('[L[Error occured]]');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=move_topic_submit&topic_id=" + topic_id + "&forum_id=" + forum_id + "&old_forum_id=" + old_forum_id + "&goto_new_location=" + goto_new_location,
		dataType: 'text',
		type: 'POST',
		success: h
	});
}

/**
 * run edit post timer
 *	@param post_id	post id
 */
Forum.prototype.editPostTimer = function (post_id) {
    this.stopEditPostTimer(post_id);
    this._idEditPostTimer = setInterval('f._onEditPostTimer(' + post_id + ')', 1000);
}

Forum.prototype.stopEditPostTimer = function (post_id) {
    if (0 == this._idEditPostTimer)
        return;
    clearInterval(this._idEditPostTimer);
    this._idEditPostTimer = 0;
}

Forum.prototype._onEditPostTimer = function (post_id) {
    var e = jQuery('#edit_timeout_' + post_id);
    if (!e.length)
        this.stopEditPostTimer(post_id);

    var s = e.html();
    var m = s.match(/([0-9\-]+)/);
    if (null == m)
        this.stopEditPostTimer(post_id);

    s = s.replace(/([0-9\-]+)/, parseInt(m[1]) - 1);

    e.html(s);

    if (m[1] - 1 < 120 && m[1] - 1 > 30) 
        e.removeClass('edit_timeout30').addClass('edit_timeout120');

    if (m[1] - 1 < 30) 
        e.removeClass('edit_timeout120').addClass('edit_timeout30');

    if (m[1] - 1 < 1) 
        this.stopEditPostTimer(post_id);
}

Forum.prototype.removeImageFromPost = function (sEditorId, iFileId) {
    var eEditor = 'object' == typeof(tinymce) ? tinymce.get(sEditorId) : undefined;
    if ('undefined' == typeof(eEditor))
        return;

    var aFiles = $(eEditor.dom.doc).find('.forum-post-img-' + iFileId);
    aFiles.each(function () { eEditor.execCommand('mceRemoveNode', false, this); });
}

Forum.prototype.insertImageToPost = function (sEditorId, iFileId) {

    var eEditor = 'object' == typeof(tinymce) ? tinymce.get(sEditorId) : undefined;
    if ('undefined' == typeof(eEditor))
        return;

    if (eEditor.dom && eEditor.dom.doc && $(eEditor.dom.doc).find('.forum-post-img-' + iFileId).length > 0)
        return;

    var sImgUrl = this._base + '?action=download&hash=' + iFileId;
    eEditor.execCommand('mceInsertContent', false, '<img class="forum-post-img-' + iFileId + ' forum-post-img bx-def-shadow bx-def-round-corners" src="' + sImgUrl + '" />');
}

Forum.prototype.processSelectedText = function () {
    this._sSelectedText = '';
    if (window.getSelection)
        this._sSelectedText = window.getSelection().toString();
    else if (document.selection && document.selection.type != 'Control')
        this._sSelectedText = document.selection.createRange().text;
}

Forum.prototype.getSelectedText = function () {
    return 'undefined' == typeof(this._sSelectedText) ? '' : this._sSelectedText;
}

;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxForum.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxHistory.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * Enable back browser button for ajax
 */
function BxHistory (sBaseUrl)	
{
    this._base_url =  'undefined' == typeof(sBaseUrl) ? site_url + 'forum/' : sBaseUrl;
	this._hash = ""; // current hash (after #)
	this._en = '';

    this._rw = {
    
     'cat': { // categories
            'regexp' : '^group/(.*)\\.htm$', 
            'eval' : 'document.f.selectForumIndex (m[1]);',
            'pre' : 'group/',
            'ext' : '.htm'
            },

     'forum': { // forums
            'regexp' : '^forum/(.*)-(\\d+)\\.htm$', 
            'eval' : 'document.f.selectForum (m[1], m[2]);',
            'pre' : 'forum/',
            'page' : '-',
            'ext' : '.htm'
            },

     'topic': { // topics
            'regexp' : '^topic/(.*)\\.htm$', 
            'eval' : 'document.f.selectTopic (m[1]);',
            'pre' : 'topic/',
            'ext' : '.htm'
            },

     'user': { // user
            'regexp' : '^user/(.*)\\.htm$', 
            'eval' : 'document.f.showProfile (m[1]);',
            'pre' : 'user/',
            'ext' : '.htm'
            },

     'edit_cats': { // edit cats
            'regexp' : '^action=goto&edit_cats=', 
            'eval' : 'if (document.orca_admin) document.orca_admin.editCategories ();'
            },

     'new_topic': { // new topic
            'regexp' : '^action=goto&new_topic=(.*)$', 
            'eval' : 'document.f.newTopic (m[1]);'
            },

     'search': { // search
            'regexp' : '^action=goto&search=', 
            'eval' : 'document.f.showSearch ();'
            },

     'search_result': { // search results
            'regexp' : '^action=goto&search_result=1&text=(.*?)&type=(.*?)&forum=(.*?)&u=(.*?)&disp=(.*?)&start=(.*?)$', 
            'eval' : 'document.f.search (m[1], m[2], m[3], m[4], m[5], m[6]);'
            },

     'my_flags': { // my flags
            'regexp' : '^action=goto&my_flags=1&start=(\\d+)', 
            'eval' : 'document.f.showMyFlags (m[1]);'
            },

     'my_threads': { // my threads
            'regexp' : '^action=goto&my_threads=1&start=(\\d+)',
            'eval' : 'document.f.showMyThreads (m[1]);'
            },

     'recent_topics': { // recent topics
            'regexp' : '^action=goto&recent_topics=1&start=(\\d+)', 
            'eval' : 'document.f.selectRecentTopics (m[1]);'
            }
    };
}

/**
 * go to the specified page - override this function to handle specific actions
 * @param h		hash (#)
 */
BxHistory.prototype.go = function (h)
{
    for (var i in this._rw)
    {
        var pattern = new RegExp(this._rw[i]['regexp']); 
        var m = h.match(pattern);
        if (!m) continue;
        eval (this._rw[i]['eval']);
        return true;
    }

	return false;
}

/**
 * history initialization
 * @param name		hame of history object
 */
BxHistory.prototype.init = function (name)
{
	this._en = name;

	this.handleHist();

    this._actual_url = location.href;

    // listen when we press back and forward buttons in browser
    var $this = this;

    if ('undefined' == typeof(History.pushState))
        History.init();

    History.Adapter.bind(window, 'statechange', function(event) { 
        var oState = History.getState();

        if ('undefined' === typeof(oState) || $this._actual_url == oState.url)
            return;

        var sUrl = oState.url;
        if (0 == sUrl.indexOf($this._base_url))
            sUrl = sUrl.substr($this._base_url.length);
        if (0 == sUrl.indexOf($this._base_url + 'index.php'))
            sUrl = sUrl.substr(($this._base_url + 'index.php').length);

        if (!$this.go(sUrl.replace(/^[#?]+/, '')))
            document.location = oState.url;
    });

	return true;
}

/**
 * handle history
 */
BxHistory.prototype.handleHist =  function ()
{
    if (window.location.hash.length && window.location.hash != this._hash) {
        var h = window.location.hash.replace(/^[#?]/, '');
	
        if (h.match(/^[\d]+$/))
            return true;

        if (!this.go(h))
            window.location = this._base_url + h;

        return true;

    } else if ('undefined' == typeof(History.pushState)) {

        History.init();
        History.replaceState({url:window.location.href}, null, window.location.href);

	}

	return false;
}

/**
 * record history
 * @param h	hash
 */
BxHistory.prototype.makeHist = function (h)
{
    h = h.replace(/^[#?]+/, '');
    if (h.match(/^action=/))
        h = '?' + h;
    h = this._base_url + h;

    this._actual_url = h;

    if ('undefined' == typeof(History.pushState)) {
        History.init();
        History.replaceState({url:h}, null, h);
    } else {
        History.pushState({url:h}, null, h);
}

    return true;
}

BxHistory.prototype.rw = function (s)
{
    return this._rw[s];
}
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxHistory.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxLogin.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * login/join functionality
 */


/**
 * constructor
 */
function Login (base, forum)
{	
	this._base = base;
	this._forum = forum;
}   


/**
 * show login form
 *	@param id	forum id
 */
Login.prototype.showLoginForm = function ()
{
	this._forum.loading ('[L[LOADING LOGIN FORM]]');

	var $this = this;

	var h = function (r)
	{		
		$this._forum.showHTML (r, 400, 200);
		
		$this._forum.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=login_form", urlXsl + "login_form.xsl", h);    

	return false;
}


/**
 * show join form
 */
Login.prototype.showJoinForm = function ()
{
	this._forum.loading ('[L[LOADING JOIN FORM]]');

	var $this = this;

	var h = function (r)
	{		
		$this._forum.showHTML (r, 400, 200);
		
		$this._forum.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=join_form", urlXsl + "join_form.xsl", h);

	return false;
}


/**
 * submit join form
 *	@param username	new username
 *	@param email	new email
 */
Login.prototype.joinFormSubmit = function (username, email)
{
	var $this = this;

	var h = function (r)
	{		
		var o = new BxXmlRequest('','','');			
		var ret = o.getRetNodeValue (r, 'js');		
		if (!ret || !ret.length)
		{			
			alert ("[L[Thank you! You Joined! Your login and password have been sent to your email.]]");
			$this._forum.hideHTML();
			return false;
		}
		
		alert ('[L[Join failed]]');
		
		eval (ret);
		
		return false;
	}

	new BxXmlRequest (this._base + "?action=join_submit&username="+username+"&email="+email, h, true);

	return false;
}

/**
 * submit login form
 *	@param username	login username
 *	@param pwd		login password
 */
Login.prototype.loginFormSubmit = function (username, pwd)
{
	var $this = this;

	var h = function (r)
	{			
		var o = new BxXmlRequest('','','');			
		var ret = o.getRetNodeValue (r, 'js');
		if (!ret || !ret.length)
		{			
			document.location = $this._base + "?refresh=1";
			return false;
		}
		
		alert ('[L[Login failed]]');
		
		eval (ret);
		
		return false;
	}	

	new BxXmlRequest (this._base + "?action=login_submit&username="+username+"&pwd="+pwd, h, true);

	return false;
}


/**
 * logout
 */
Login.prototype.logout = function ()
{	
	$this = this;

	var h = function (r)
	{
		document.location = $this._base + "?refresh=1";
		return false;
	}

	new BxXmlRequest (this._base + "?action=logout", h, true);

	return false;

	document.cookie = 'orca_pwd=; orca_user=; expires=Fri, 02-Jan-1970 00:00:00 GMT';	
	document.location = this._base + "?refresh=1";
	return false;
}
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxLogin.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxAdmin.js---*/
/**
*                            Orca Interactive Forum Script
*                              ---------------
*     Started             : Mon Mar 23 2006
*     Copyright           : (C) 2007 BoonEx Group
*     Website             : http://www.boonex.com
* This file is part of Orca - Interactive Forum Script
* Creative Commons Attribution 3.0 License
**/


/**
 * admin functionality
 */


/**
 * constructor
 */
function Admin (base, forum)
{	
	this._base = base;
	this._forum = forum;
}   



/**
 * edit categories admin page
 */
Admin.prototype.editCategories = function ()
{
	this._forum.loading ('[L[LOADING]]');

	var $this = this;

	var h = function (r)
	{		
		var m = document.getElementById('orca_main');		

		m.innerHTML = r;

		$this._forum.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=edit_categories", urlXsl + "edit_categories.xsl", h);

	document.h.makeHist('action=goto&edit_cats=1');

	return false;
}

/**
 * reported posts
 */
Admin.prototype.reportedPosts = function ()
{
	this._forum.loading ('[L[LOADING]]');

	var $this = this;

	var h = function (r)
	{		
		var m = document.getElementById('orca_main');		

		m.innerHTML = r;

		$this._forum.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=reported_posts", urlXsl + "forum_posts.xsl", h);

	return false;
}

/**
 * hidden posts
 */
Admin.prototype.hiddenPosts = function ()
{
	this._forum.loading ('[L[LOADING]]');

	var $this = this;

	var h = function (r)
	{		
		var m = document.getElementById('orca_main');		

		m.innerHTML = r;

		$this._forum.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=hidden_posts", urlXsl + "forum_posts.xsl", h);

	return false;
}

/**
 * hidden topics
 */
Admin.prototype.hiddenTopics = function (start)
{
	this._forum.loading ('[L[LOADING]]');

	var $this = this;

	var h = function (r)
	{		
		var m = document.getElementById('orca_main');		

		m.innerHTML = r;

		$this._forum.stopLoading ();
	}

	new BxXslTransform(this._base + "?action=show_hidden_topics&start=" + start, urlXsl + "hidden_topics.xsl", h);

	return false;
}

/**
 * delete category
 *	@param id	category id
 */
Admin.prototype.delCat = function (cat_id)
{
	if (!confirm ('[L[Are you sure to delete category with all forums, topics and post?]]')) return false;

	var $this = this;

	var h = function (r)
	{						
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
		{
			alert ('[L[Category has been successfully deleted]]');
			$this.editCategories();
			return;
		}

		alert ('[L[Can not delete category]]');
	}	

	jQuery.ajax ({
		url: this._base + "?action=edit_category_del&cat_id="+cat_id,		
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return true;
}

/**
 * delete forum
 *	@param forum_id	forum id
 */
Admin.prototype.delForum = function (forum_id)
{
	if (!confirm ('[L[Are you sure to delete forum with topics and posts]]')) return false;

	var $this = this;

	var h = function (r)
	{				
        var cat_uri = orca_get_xml_val ('cat_uri', r);
        var cat_id = orca_get_xml_val ('cat_id', r);
		if (cat_id > 0)
		{
	    	alert ('[L[Forum has been successfully deleted]]');			
    		$this.selectCat(cat_uri, 'cat'+cat_id, true, true);            
			return;
		}
        alert ('[L[Can not delete forum]]');
	}

	jQuery.ajax ({
		url: this._base + "?action=edit_forum_del&forum_id="+forum_id,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return true;
}

/**
 * edit category
 *	@param id	category id
 */
Admin.prototype.editCat = function (cat_id)
{	
	var $this = this;

	var h = function (r)
	{			
		$this._forum.showHTML (r, 400, 200);
	}

	new BxXslTransform(this._base + "?action=edit_category&cat_id="+cat_id, urlXsl + "edit_cat_form.xsl", h);

	return true;
}

/**
 * new group
 */
Admin.prototype.newCat = function ()
{	
	var $this = this;

	var h = function (r)
	{			
		$this._forum.showHTML (r, 400, 200);
	}

	new BxXslTransform(this._base + "?action=edit_category&cat_id="+0, urlXsl + "edit_cat_form.xsl", h);

	return true;
}

/**
 * edit category
 *	@param cat_name	new group name
 *	@param cat_id	category id 
 */
Admin.prototype.editCatSubmit = function (cat_id, cat_name, cat_order, cat_expanded)
{
	var $this = this;

	var h = function (r)
	{								
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
		{
			if (cat_id > 0)
				alert ('[L[Group has been successfully modified]]');
			else
				alert ('[L[New group has been successfully added]]');
			$this._forum.hideHTML();
			$this.editCategories();
			return false;
		}

		if (cat_id > 0)
			alert ('[L[Can not modify group]]');
		else
			alert ('[L[Can not add new group]]');
		return false;
	}

    cat_name = encodeURIComponent (cat_name); 

	jQuery.ajax ({
		url: this._base + "?action=edit_category_submit&cat_id="+cat_id+"&cat_name="+cat_name+"&cat_order="+cat_order+"&cat_expanded="+(cat_expanded ? 1 :0),
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;
}


/**
 * edit forum
 *	@param id	category id
 */
Admin.prototype.editForum = function (forum_id)
{	
	var $this = this;

	var h = function (r)
	{			
		$this._forum.showHTML (r, 400, 200);
	}

	new BxXslTransform(this._base + "?action=edit_forum&forum_id="+forum_id, urlXsl + "edit_forum_form.xsl", h);

	return true;
}


/**
 * new category
 */
Admin.prototype.newForum = function (cat_id)
{	
	var $this = this;

	var h = function (r)
	{			
		$this._forum.showHTML (r, 400, 200);
	}
	
	new BxXslTransform (this._base + "?action=edit_forum&forum_id=0&cat_id="+cat_id, urlXsl + "edit_forum_form.xsl", h);

	return true;
}


/**
 * edit forum
 *	@param forum_id	forum id
 *	@param title 	forum title
 *	@param desc 	forum description
 *	@param type 	forum type
 */
Admin.prototype.editForumSubmit = function (cat_id, cat_uri, forum_id, title, desc, type, order)
{
	var $this = this;

	var h = function (r)
	{		
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
		{
			if (forum_id > 0)
				alert ('[L[Forum has been successfully modified]]');
			else
				alert ('[L[New forum has been successfully added]]');
			$this._forum.hideHTML();
			$this.selectCat (cat_uri, 'cat'+cat_id, true, true);			
			return false;
		}

		if (forum_id > 0)
			alert ('[L[Can not modify forum]]');
		else
			alert ('[L[Can not add new forum]]');
		return false;
	}

    title = encodeURIComponent(title); 
    desc = encodeURIComponent(desc); 

	jQuery.ajax ({
		url: this._base + "?action=edit_forum_submit&cat_id="+cat_id+"&forum_id="+forum_id+"&title="+title+"&desc="+desc+"&type="+type+"&order="+order,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;
}


/**
 * returns new topic page XML
 */
Admin.prototype.selectCat = function (cat, id, force_show, force_reload)
{	
	var e = $('#'+id);

	if (!e.size()) {
		new BxError("[L[category id is not defined]]", "[L[please set category ids]]");
		return false;
	}

    // hide category forums
    if (e.next("[cat="+cat+"]").size()) {
        e.nextAll("[cat="+cat+"]").fadeOut(this._forum._speed, 
                function () { 
                    $(this).remove(); 
                } 
        );
        e.find('div.colexp').html('<i class="sys-icon folder"></i>');

        if (!force_show)
            return false;
    }

	this._forum.loading ('[L[LOADING FORUMS]]');

	var $this = this;
	this._cat = cat;
	var h = function (r)
	{	
        e.after($('<table>'+r+'</table>').find('tr').hide());
        if (document.all)
            e.nextAll("[cat="+cat+"]").css('display', 'block');
        else
			e.nextAll("[cat="+cat+"]").fadeIn($this._forum._speed);
        e.find('div.colexp').html('<i class="sys-icon folder-open"></i>');
		$this._forum.stopLoading ();
	}
	new BxXslTransform(this._base + "?action=list_forums_admin&cat=" + cat, urlXsl + "edit_cat_forums.xsl", h);

	return false;
}

/*
 * compile language files
 */
Admin.prototype.compileLangs = function (sLang)
{

	var h = function (r)
	{						
        var ret = orca_get_xml_ret(r);
		if ('1' == ret)
		{                   
			alert ('[L[Language files have been successfully compiled]]');
		}
		else
		{         
			alert ('[L[Language files compilation have been failed]]');
		}
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=compile_langs&lang=" + sLang + "&ts=" + (new Date()),
		dataType: 'text',
		type: 'POST',
		success: h
	});

}


Admin.prototype.clearReport = function (id)
{
	var $this = this;
	var h = function (r) {		
        var ret = orca_get_xml_ret(r);
		if ('1' == ret) {
        	var m = $('#post_row_'+id);
        	if (!m) 
		        return false;
            m.fadeOut(this._speed, 
                function () { 
                    $(this).remove(); 
                } 
            );
			return false;
		}
		alert ('[L[Error occured]]');
		return false;
	}

	jQuery.ajax ({
		url: this._base + "?action=clear_report&post_id=" + id,
		dataType: 'text',
		type: 'POST',
		success: h
	});

	return false;	
}
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/forum/js/BxAdmin.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/tinymce/tinymce.min.js---*/
// 4.3.3 (2016-01-14)
!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){var r,i,o,a,l;for(r=0;r<n.length;r++){i=e,o=n[r],a=o.split(/[.\/]/);for(var c=0;c<a.length-1;++c)i[a[c]]===t&&(i[a[c]]={}),i=i[a[c]];i[a[a.length-1]]=s[o]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(o in s)l[o]=s[o];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var s={},l="tinymce/geom/Rect",c="tinymce/util/Promise",u="tinymce/util/Delay",d="tinymce/dom/EventUtils",f="tinymce/dom/Sizzle",h="tinymce/Env",p="tinymce/util/Arr",m="tinymce/util/Tools",g="tinymce/dom/DomQuery",v="tinymce/html/Styles",y="tinymce/dom/TreeWalker",b="tinymce/dom/Range",C="tinymce/html/Entities",x="tinymce/dom/StyleSheetLoader",w="tinymce/dom/DOMUtils",E="tinymce/dom/ScriptLoader",N="tinymce/AddOnManager",_="tinymce/dom/NodeType",S="tinymce/text/Zwsp",k="tinymce/caret/CaretContainer",T="tinymce/dom/RangeUtils",R="tinymce/NodeChange",A="tinymce/html/Node",B="tinymce/html/Schema",D="tinymce/html/SaxParser",M="tinymce/html/DomParser",L="tinymce/html/Writer",P="tinymce/html/Serializer",H="tinymce/dom/Serializer",O="tinymce/dom/TridentSelection",I="tinymce/util/VK",F="tinymce/dom/ControlSelection",z="tinymce/util/Fun",W="tinymce/caret/CaretCandidate",V="tinymce/geom/ClientRect",U="tinymce/text/ExtendingChar",$="tinymce/caret/CaretPosition",q="tinymce/caret/CaretBookmark",j="tinymce/dom/BookmarkManager",Y="tinymce/dom/Selection",X="tinymce/dom/ElementUtils",K="tinymce/fmt/Preview",G="tinymce/Formatter",J="tinymce/UndoManager",Q="tinymce/EnterKey",Z="tinymce/ForceBlocks",ee="tinymce/EditorCommands",te="tinymce/util/URI",ne="tinymce/util/Class",re="tinymce/util/EventDispatcher",ie="tinymce/data/Binding",oe="tinymce/util/Observable",ae="tinymce/data/ObservableObject",se="tinymce/ui/Selector",le="tinymce/ui/Collection",ce="tinymce/ui/DomUtils",ue="tinymce/ui/BoxUtils",de="tinymce/ui/ClassList",fe="tinymce/ui/ReflowQueue",he="tinymce/ui/Control",pe="tinymce/ui/Factory",me="tinymce/ui/KeyboardNavigation",ge="tinymce/ui/Container",ve="tinymce/ui/DragHelper",ye="tinymce/ui/Scrollable",be="tinymce/ui/Panel",Ce="tinymce/ui/Movable",xe="tinymce/ui/Resizable",we="tinymce/ui/FloatPanel",Ee="tinymce/ui/Window",Ne="tinymce/ui/MessageBox",_e="tinymce/WindowManager",Se="tinymce/ui/Tooltip",ke="tinymce/ui/Widget",Te="tinymce/ui/Progress",Re="tinymce/ui/Notification",Ae="tinymce/NotificationManager",Be="tinymce/dom/NodePath",De="tinymce/util/Quirks",Me="tinymce/EditorObservable",Le="tinymce/Mode",Pe="tinymce/Shortcuts",He="tinymce/file/Uploader",Oe="tinymce/file/Conversions",Ie="tinymce/file/ImageScanner",Fe="tinymce/file/BlobCache",ze="tinymce/EditorUpload",We="tinymce/caret/CaretUtils",Ve="tinymce/caret/CaretWalker",Ue="tinymce/caret/FakeCaret",$e="tinymce/dom/Dimensions",qe="tinymce/caret/LineWalker",je="tinymce/caret/LineUtils",Ye="tinymce/DragDropOverrides",Xe="tinymce/SelectionOverrides",Ke="tinymce/Editor",Ge="tinymce/util/I18n",Je="tinymce/FocusManager",Qe="tinymce/EditorManager",Ze="tinymce/LegacyInput",et="tinymce/util/XHR",tt="tinymce/util/JSON",nt="tinymce/util/JSONRequest",rt="tinymce/util/JSONP",it="tinymce/util/LocalStorage",ot="tinymce/Compat",at="tinymce/ui/Layout",st="tinymce/ui/AbsoluteLayout",lt="tinymce/ui/Button",ct="tinymce/ui/ButtonGroup",ut="tinymce/ui/Checkbox",dt="tinymce/ui/ComboBox",ft="tinymce/ui/ColorBox",ht="tinymce/ui/PanelButton",pt="tinymce/ui/ColorButton",mt="tinymce/util/Color",gt="tinymce/ui/ColorPicker",vt="tinymce/ui/Path",yt="tinymce/ui/ElementPath",bt="tinymce/ui/FormItem",Ct="tinymce/ui/Form",xt="tinymce/ui/FieldSet",wt="tinymce/ui/FilePicker",Et="tinymce/ui/FitLayout",Nt="tinymce/ui/FlexLayout",_t="tinymce/ui/FlowLayout",St="tinymce/ui/FormatControls",kt="tinymce/ui/GridLayout",Tt="tinymce/ui/Iframe",Rt="tinymce/ui/Label",At="tinymce/ui/Toolbar",Bt="tinymce/ui/MenuBar",Dt="tinymce/ui/MenuButton",Mt="tinymce/ui/MenuItem",Lt="tinymce/ui/Menu",Pt="tinymce/ui/ListBox",Ht="tinymce/ui/Radio",Ot="tinymce/ui/ResizeHandle",It="tinymce/ui/SelectBox",Ft="tinymce/ui/Slider",zt="tinymce/ui/Spacer",Wt="tinymce/ui/SplitButton",Vt="tinymce/ui/StackLayout",Ut="tinymce/ui/TabPanel",$t="tinymce/ui/TextBox",qt="tinymce/ui/Throbber";r(l,[],function(){function e(e,t,n){var r,i,a,s,l,u;return r=t.x,i=t.y,a=e.w,s=e.h,l=t.w,u=t.h,n=(n||"").split(""),"b"===n[0]&&(i+=u),"r"===n[1]&&(r+=l),"c"===n[0]&&(i+=c(u/2)),"c"===n[1]&&(r+=c(l/2)),"b"===n[3]&&(i-=s),"r"===n[4]&&(r-=a),"c"===n[3]&&(i-=c(s/2)),"c"===n[4]&&(r-=c(a/2)),o(r,i,a,s)}function t(t,n,r,i){var o,a;for(a=0;a<i.length;a++)if(o=e(t,n,i[a]),o.x>=r.x&&o.x+o.w<=r.w+r.x&&o.y>=r.y&&o.y+o.h<=r.h+r.y)return i[a];return null}function n(e,t,n){return o(e.x-t,e.y-n,e.w+2*t,e.h+2*n)}function r(e,t){var n,r,i,a;return n=l(e.x,t.x),r=l(e.y,t.y),i=s(e.x+e.w,t.x+t.w),a=s(e.y+e.h,t.y+t.h),0>i-n||0>a-r?null:o(n,r,i-n,a-r)}function i(e,t,n){var r,i,a,s,c,u,d,f,h,p;return c=e.x,u=e.y,d=e.x+e.w,f=e.y+e.h,h=t.x+t.w,p=t.y+t.h,r=l(0,t.x-c),i=l(0,t.y-u),a=l(0,d-h),s=l(0,f-p),c+=r,u+=i,n&&(d+=r,f+=i,c-=a,u-=s),d-=a,f-=s,o(c,u,d-c,f-u)}function o(e,t,n,r){return{x:e,y:t,w:n,h:r}}function a(e){return o(e.left,e.top,e.width,e.height)}var s=Math.min,l=Math.max,c=Math.round;return{inflate:n,relativePosition:e,findBestRelativePosition:t,intersect:r,clamp:i,create:o,fromClientRect:a}}),r(c,[],function(){function e(e,t){return function(){e.apply(t,arguments)}}function t(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(t,e(r,this),e(i,this))}function n(e){var t=this;return null===this._state?void this._deferreds.push(e):void l(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function r(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void s(e(n,t),e(r,this),e(i,this))}this._state=!0,this._value=t,o.call(this)}catch(a){i.call(this,a)}}function i(e){this._state=!1,this._value=e,o.call(this)}function o(){for(var e=0,t=this._deferreds.length;t>e;e++)n.call(this,this._deferreds[e]);this._deferreds=null}function a(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function s(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}if(window.Promise)return window.Promise;var l=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,r){var i=this;return new t(function(t,o){n.call(i,new a(e,r,t,o))})},t.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&c(arguments[0])?arguments[0]:arguments);return new t(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},t}),r(u,[c],function(e){function t(e,t){function n(e){window.setTimeout(e,0)}var r,i=window.requestAnimationFrame,o=["ms","moz","webkit"];for(r=0;r<o.length&&!i;r++)i=window[o[r]+"RequestAnimationFrame"];i||(i=n),i(e,t)}function n(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)}function r(e,t){return"number"!=typeof t&&(t=0),setInterval(e,t)}function i(e){return clearTimeout(e)}function o(e){return clearInterval(e)}var a;return{requestAnimationFrame:function(n,r){return a?void a.then(n):void(a=new e(function(e){r||(r=document.body),t(e,r)}).then(n))},setTimeout:n,setInterval:r,setEditorTimeout:function(e,t,r){return n(function(){e.removed||t()},r)},setEditorInterval:function(e,t,n){var i;return i=r(function(){e.removed?clearInterval(i):t()},n)},throttle:function(e,t){var r;return function(){var i=arguments;clearTimeout(r),r=n(function(){e.apply(this,i)},t)}},clearInterval:o,clearTimeout:i}}),r(d,[u],function(e){function t(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function n(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)}function r(e,t){function n(){return!1}function r(){return!0}var i,o=t||{},a;for(i in e)l[i]||(o[i]=e[i]);if(o.target||(o.target=o.srcElement||document),e&&s.test(e.type)&&e.pageX===a&&e.clientX!==a){var c=o.target.ownerDocument||document,u=c.documentElement,d=c.body;o.pageX=e.clientX+(u&&u.scrollLeft||d&&d.scrollLeft||0)-(u&&u.clientLeft||d&&d.clientLeft||0),o.pageY=e.clientY+(u&&u.scrollTop||d&&d.scrollTop||0)-(u&&u.clientTop||d&&d.clientTop||0)}return o.preventDefault=function(){o.isDefaultPrevented=r,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},o.stopPropagation=function(){o.isPropagationStopped=r,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},o.stopImmediatePropagation=function(){o.isImmediatePropagationStopped=r,o.stopPropagation()},o.isDefaultPrevented||(o.isDefaultPrevented=n,o.isPropagationStopped=n,o.isImmediatePropagationStopped=n),"undefined"==typeof o.metaKey&&(o.metaKey=!1),o}function i(r,i,o){function a(){o.domLoaded||(o.domLoaded=!0,i(u))}function s(){("complete"===c.readyState||"interactive"===c.readyState&&c.body)&&(n(c,"readystatechange",s),a())}function l(){try{c.documentElement.doScroll("left")}catch(t){return void e.setTimeout(l)}a()}var c=r.document,u={type:"ready"};return o.domLoaded?void i(u):(c.addEventListener?"complete"===c.readyState?a():t(r,"DOMContentLoaded",a):(t(c,"readystatechange",s),c.documentElement.doScroll&&r.self===r.top&&l()),void t(r,"load",a))}function o(){function e(e,t){var n,r,i,o,a=s[t];if(n=a&&a[e.type])for(r=0,i=n.length;i>r;r++)if(o=n[r],o&&o.func.call(o.scope,e)===!1&&e.preventDefault(),e.isImmediatePropagationStopped())return}var o=this,s={},l,c,u,d,f;c=a+(+new Date).toString(32),d="onmouseenter"in document.documentElement,u="onfocusin"in document.documentElement,f={mouseenter:"mouseover",mouseleave:"mouseout"},l=1,o.domLoaded=!1,o.events=s,o.bind=function(n,a,h,p){function m(t){e(r(t||E.event),g)}var g,v,y,b,C,x,w,E=window;if(n&&3!==n.nodeType&&8!==n.nodeType){for(n[c]?g=n[c]:(g=l++,n[c]=g,s[g]={}),p=p||n,a=a.split(" "),y=a.length;y--;)b=a[y],x=m,C=w=!1,"DOMContentLoaded"===b&&(b="ready"),o.domLoaded&&"ready"===b&&"complete"==n.readyState?h.call(p,r({type:b})):(d||(C=f[b],C&&(x=function(t){var n,i;if(n=t.currentTarget,i=t.relatedTarget,i&&n.contains)i=n.contains(i);else for(;i&&i!==n;)i=i.parentNode;i||(t=r(t||E.event),t.type="mouseout"===t.type?"mouseleave":"mouseenter",t.target=n,e(t,g))})),u||"focusin"!==b&&"focusout"!==b||(w=!0,C="focusin"===b?"focus":"blur",x=function(t){t=r(t||E.event),t.type="focus"===t.type?"focusin":"focusout",e(t,g)}),v=s[g][b],v?"ready"===b&&o.domLoaded?h({type:b}):v.push({func:h,scope:p}):(s[g][b]=v=[{func:h,scope:p}],v.fakeName=C,v.capture=w,v.nativeHandler=x,"ready"===b?i(n,x,o):t(n,C||b,x,w)));return n=v=0,h}},o.unbind=function(e,t,r){var i,a,l,u,d,f;if(!e||3===e.nodeType||8===e.nodeType)return o;if(i=e[c]){if(f=s[i],t){for(t=t.split(" "),l=t.length;l--;)if(d=t[l],a=f[d]){if(r)for(u=a.length;u--;)if(a[u].func===r){var h=a.nativeHandler,p=a.fakeName,m=a.capture;a=a.slice(0,u).concat(a.slice(u+1)),a.nativeHandler=h,a.fakeName=p,a.capture=m,f[d]=a}r&&0!==a.length||(delete f[d],n(e,a.fakeName||d,a.nativeHandler,a.capture))}}else{for(d in f)a=f[d],n(e,a.fakeName||d,a.nativeHandler,a.capture);f={}}for(d in f)return o;delete s[i];try{delete e[c]}catch(g){e[c]=null}}return o},o.fire=function(t,n,i){var a;if(!t||3===t.nodeType||8===t.nodeType)return o;i=r(null,i),i.type=n,i.target=t;do a=t[c],a&&e(i,a),t=t.parentNode||t.ownerDocument||t.defaultView||t.parentWindow;while(t&&!i.isPropagationStopped());return o},o.clean=function(e){var t,n,r=o.unbind;if(!e||3===e.nodeType||8===e.nodeType)return o;if(e[c]&&r(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(r(e),n=e.getElementsByTagName("*"),t=n.length;t--;)e=n[t],e[c]&&r(e);return o},o.destroy=function(){s={}},o.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}}var a="mce-data-",s=/^(?:mouse|contextmenu)|click/,l={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1};return o.Event=new o,o.Event.bind(window,"ready",function(){}),o}),r(f,[],function(){function e(e,t,n,r){var i,o,a,s,l,c,d,h,p,m;if((t?t.ownerDocument||t:z)!==D&&B(t),t=t||D,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(L&&!r){if(i=ve.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&I(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&x.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(x.qsa&&(!P||!P.test(e))){if(h=d=F,p=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=_(e),(d=t.getAttribute("id"))?h=d.replace(be,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=c.length;l--;)c[l]=h+f(c[l]);p=ye.test(e)&&u(t.parentNode)||t,m=c.join(",")}if(m)try{return Z.apply(n,p.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return k(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=D.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)w.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&typeof e.getElementsByTagName!==Y&&e}function d(){}function f(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=V++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,c=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[F]||(t[F]={}),(s=l[r])&&s[0]===W&&s[1]===o)return c[2]=s[2];if(l[r]=c,c[2]=e(t,n,a))return!0}}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(t,n,r){for(var i=0,o=n.length;o>i;i++)e(t,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,c=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),c&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[F]&&(i=v(i)),o&&!o[F]&&(o=v(o,a)),r(function(r,a,s,l){var c,u,d,f=[],h=[],p=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:g(v,f,e,s,l),b=n?o||(r?e:p||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(c=g(b,h),i(c,[],s,l),u=c.length;u--;)(d=c[u])&&(b[h[u]]=!(y[h[u]]=d));if(r){if(o||e){if(o){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d);o(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=o?te.call(r,d):f[u])>-1&&(r[c]=!(a[c]=d))}}else b=g(b===a?b.splice(p,b.length):b),o?o(null,a,b,l):Z.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,l=h(function(e){return e===t},a,!0),c=h(function(e){return te.call(t,e)>-1},a,!0),u=[function(e,n,r){return!o&&(r||n!==T)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];i>s;s++)if(n=w.relative[e[s].type])u=[h(p(u),n)];else{if(n=w.filter[e[s].type].apply(null,e[s].matches),n[F]){for(r=++s;i>r&&!w.relative[e[r].type];r++);return v(s>1&&p(u),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))}u.push(n)}return p(u)}function b(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,l,c){var u,d,f,h=0,p="0",m=r&&[],v=[],y=T,b=r||o&&w.find.TAG("*",c),C=W+=null==y?1:Math.random()||.1,x=b.length;for(c&&(T=a!==D&&a);p!==x&&null!=(u=b[p]);p++){if(o&&u){for(d=0;f=t[d++];)if(f(u,a,s)){l.push(u);break}c&&(W=C)}i&&((u=!f&&u)&&h--,r&&m.push(u))}if(h+=p,i&&p!==h){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(h>0)for(;p--;)m[p]||v[p]||(v[p]=J.call(l));v=g(v)}Z.apply(l,v),c&&!r&&v.length>0&&h+n.length>1&&e.uniqueSort(l)}return c&&(W=C,T=y),m};return i?r(a):a}var C,x,w,E,N,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F="sizzle"+-new Date,z=window.document,W=0,V=0,U=n(),$=n(),q=n(),j=function(e,t){return e===t&&(A=!0),0},Y=typeof t,X=1<<31,K={}.hasOwnProperty,G=[],J=G.pop,Q=G.push,Z=G.push,ee=G.slice,te=G.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+re+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),le=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),ue=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(ae),fe=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,be=/'|\\/g,Ce=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=ee.call(z.childNodes),z.childNodes),G[z.childNodes.length].nodeType}catch(we){Z={apply:G.length?function(e,t){Q.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=e.support={},N=e.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},B=e.setDocument=function(e){var t,n=e?e.ownerDocument||e:z,r=n.defaultView;return n!==D&&9===n.nodeType&&n.documentElement?(D=n,M=n.documentElement,L=!N(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){B()},!1):r.attachEvent&&r.attachEvent("onunload",function(){B()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ge.test(n.getElementsByClassName),x.getById=i(function(e){return M.appendChild(e).id=F,!n.getElementsByName||!n.getElementsByName(F).length}),x.getById?(w.find.ID=function(e,t){if(typeof t.getElementById!==Y&&L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){return e.getAttribute("id")===t}}):(delete w.find.ID,w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){var n=typeof e.getAttributeNode!==Y&&e.getAttributeNode("id");return n&&n.value===t}}),w.find.TAG=x.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==Y?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=x.getElementsByClassName&&function(e,t){return L?t.getElementsByClassName(e):void 0},H=[],P=[],(x.qsa=ge.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll(":checked").length||P.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+re+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=ge.test(O=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){x.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),H.push("!=",ae)}),P=P.length&&new RegExp(P.join("|")),H=H.length&&new RegExp(H.join("|")),t=ge.test(M.compareDocumentPosition),I=t||ge.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return A=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!x.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===z&&I(z,e)?-1:t===n||t.ownerDocument===z&&I(z,t)?1:R?te.call(R,e)-te.call(R,t):0:4&r?-1:1)}:function(e,t){if(e===t)return A=!0,0;var r,i=0,o=e.parentNode,s=t.parentNode,l=[e],c=[t];if(!o||!s)return e===n?-1:t===n?1:o?-1:s?1:R?te.call(R,e)-te.call(R,t):0;if(o===s)return a(e,t);for(r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)c.unshift(r);for(;l[i]===c[i];)i++;return i?a(l[i],c[i]):l[i]===z?-1:c[i]===z?1:0},n):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&B(t),n=n.replace(ue,"='$1']"),x.matchesSelector&&L&&(!H||!H.test(n))&&(!P||!P.test(n)))try{var r=O.call(t,n);if(r||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,D,null,[t]).length>0},e.contains=function(e,t){return(e.ownerDocument||e)!==D&&B(e),I(e,t)},e.attr=function(e,n){(e.ownerDocument||e)!==D&&B(e);var r=w.attrHandle[n.toLowerCase()],i=r&&K.call(w.attrHandle,n.toLowerCase())?r(e,n,!L):t;return i!==t?i:x.attributes||!L?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null},e.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},e.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!x.detectDuplicates,R=!x.sortStable&&e.slice(0),e.sort(j),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return R=null,e},E=e.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},w=e.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ce,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(Ce,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=_(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ce,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Y&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,f,h,p,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?g.firstChild:g.lastChild],a&&y){for(u=g[F]||(g[F]={}),c=u[e]||[],h=c[0]===W&&c[1],f=c[0]===W&&c[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(f=h=0)||p.pop();)if(1===d.nodeType&&++f&&d===t){u[e]=[W,h,f];break}}else if(y&&(c=(t[F]||(t[F]={}))[e])&&c[0]===W)f=c[1];else for(;(d=++h&&d&&d[m]||(f=h=0)||p.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[F]||(d[F]={}))[e]=[W,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(t,n){var i,o=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[F]?o(n):o.length>1?(i=[t,t,"",n],w.setFilters.hasOwnProperty(t.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(se,"$1"));return i[F]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(e){return e=e.replace(Ce,xe),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(t){return fe.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(Ce,xe).toLowerCase(),function(e){var n;do if(n=L?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===M},focus:function(e){return e===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[C]=s(C);for(C in{submit:!0,reset:!0})w.pseudos[C]=l(C);return d.prototype=w.filters=w.pseudos,w.setFilters=new d,_=e.tokenize=function(t,n){var r,i,o,a,s,l,c,u=$[t+" "];if(u)return n?0:u.slice(0);for(s=t,l=[],c=w.preFilter;s;){(!r||(i=le.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in w.filter)!(i=he[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?e.error(t):$(t,l).slice(0)},S=e.compile=function(e,t){var n,r=[],i=[],o=q[e+" "];if(!o){for(t||(t=_(e)),n=t.length;n--;)o=y(t[n]),o[F]?r.push(o):i.push(o);o=q(e,b(i,r)),o.selector=e}return o},k=e.select=function(e,t,n,r){var i,o,a,s,l,c="function"==typeof e&&e,d=!r&&_(e=c.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&x.getById&&9===t.nodeType&&L&&w.relative[o[1].type]){if(t=(w.find.ID(a.matches[0].replace(Ce,xe),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((l=w.find[s])&&(r=l(a.matches[0].replace(Ce,xe),ye.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return Z.apply(n,r),n;break}}return(c||S(e,d))(r,t,!L,n,ye.test(e)&&u(t.parentNode)||t),n},x.sortStable=F.split("").sort(j).join("")===F,x.detectDuplicates=!!A,B(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(D.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),e}),r(h,[],function(){function e(e){return"matchMedia"in window?matchMedia(e).matches:!1}var t=navigator,n=t.userAgent,r,i,o,a,s,l,c,u,d,f,h,p;r=window.opera&&window.opera.buildNumber,d=/Android/.test(n),i=/WebKit/.test(n),o=!i&&!r&&/MSIE/gi.test(n)&&/Explorer/gi.test(t.appName),o=o&&/MSIE (\w+)\./.exec(n)[1],a=-1==n.indexOf("Trident/")||-1==n.indexOf("rv:")&&-1==t.appName.indexOf("Netscape")?!1:11,s=-1==n.indexOf("Edge/")||o||a?!1:12,o=o||a||s,l=!i&&!a&&/Gecko/.test(n),c=-1!=n.indexOf("Mac"),
u=/(iPad|iPhone)/.test(n),f="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,h=e("only screen and (max-device-width: 480px)")&&(d||u),p=e("only screen and (min-width: 800px)")&&(d||u),s&&(i=!1);var m=!u||f||n.match(/AppleWebKit\/(\d*)/)[1]>=534;return{opera:r,webkit:i,ie:o,gecko:l,mac:c,iOS:u,android:d,contentEditable:m,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!=o,range:window.getSelection&&"Range"in window,documentMode:o&&!s?document.documentMode||7:10,fileApi:f,ceFalse:o===!1||o>8,desktop:!h&&!p}}),r(p,[],function(){function e(e){var t=e,n,r;if(!u(e))for(t=[],n=0,r=e.length;r>n;n++)t[n]=e[n];return t}function n(e,n,r){var i,o;if(!e)return 0;if(r=r||e,e.length!==t){for(i=0,o=e.length;o>i;i++)if(n.call(r,e[i],i,e)===!1)return 0}else for(i in e)if(e.hasOwnProperty(i)&&n.call(r,e[i],i,e)===!1)return 0;return 1}function r(e,t){var r=[];return n(e,function(n,i){r.push(t(n,i,e))}),r}function i(e,t){var r=[];return n(e,function(n,i){(!t||t(n,i,e))&&r.push(n)}),r}function o(e,t){var n,r;if(e)for(n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function a(e,t,n,r){var i=0;for(arguments.length<3&&(n=e[0]);i<e.length;i++)n=t.call(r,n,e[i],i);return n}function s(e,t,n){var r,i;for(r=0,i=e.length;i>r;r++)if(t.call(n,e[r],r,e))return r;return-1}function l(e,n,r){var i=s(e,n,r);return-1!==i?e[i]:t}function c(e){return e[e.length-1]}var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return{isArray:u,toArray:e,each:n,map:r,filter:i,indexOf:o,reduce:a,findIndex:s,find:l,last:c}}),r(m,[h,p],function(e,n){function r(e){return null===e||e===t?"":(""+e).replace(h,"")}function i(e,r){return r?"array"==r&&n.isArray(e)?!0:typeof e==r:e!==t}function o(e,t,n){var r;for(e=e||[],t=t||",","string"==typeof e&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n}function a(e,t,n){var r=this,i,o,a,s,l,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),a=e[3].match(/(^|\.)(\w+)$/i)[2],o=r.createNS(e[3].replace(/\.\w+$/,""),n),!o[a]){if("static"==e[2])return o[a]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[a]));t[a]||(t[a]=function(){},c=1),o[a]=t[a],r.extend(o[a].prototype,t),e[5]&&(i=r.resolve(e[5]).prototype,s=e[5].match(/\.(\w+)$/i)[1],l=o[a],c?o[a]=function(){return i[s].apply(this,arguments)}:o[a]=function(){return this.parent=i[s],l.apply(this,arguments)},o[a].prototype[a]=o[a],r.each(i,function(e,t){o[a].prototype[t]=i[t]}),r.each(t,function(e,t){i[t]?o[a].prototype[t]=function(){return this.parent=i[t],e.apply(this,arguments)}:t!=a&&(o[a].prototype[t]=e)})),r.each(t["static"],function(e,t){o[a][t]=e})}}function s(e,n){var r,i,o,a=arguments,s;for(r=1,i=a.length;i>r;r++){n=a[r];for(o in n)n.hasOwnProperty(o)&&(s=n[o],s!==t&&(e[o]=s))}return e}function l(e,t,r,i){i=i||this,e&&(r&&(e=e[r]),n.each(e,function(e,n){return t.call(i,e,n,r)===!1?!1:void l(e,t,r,i)}))}function c(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)r=e[n],t[r]||(t[r]={}),t=t[r];return t}function u(e,t){var n,r;for(t=t||window,e=e.split("."),n=0,r=e.length;r>n&&(t=t[e[n]],t);n++);return t}function d(e,t){return!e||i(e,"array")?e:n.map(e.split(t||","),r)}function f(t){var n=e.cacheSuffix;return n&&(t+=(-1===t.indexOf("?")?"?":"&")+n),t}var h=/^\s*|\s*$/g;return{trim:r,isArray:n.isArray,is:i,toArray:n.toArray,makeMap:o,each:n.each,map:n.map,grep:n.filter,inArray:n.indexOf,extend:s,create:a,walk:l,createNS:c,resolve:u,explode:d,_addCacheSuffix:f}}),r(g,[d,f,m,h],function(e,n,r,i){function o(e){return"undefined"!=typeof e}function a(e){return"string"==typeof e}function s(e){return e&&e==e.window}function l(e,t){var n,r,i;for(t=t||w,i=t.createElement("div"),n=t.createDocumentFragment(),i.innerHTML=e;r=i.firstChild;)n.appendChild(r);return n}function c(e,t,n,r){var i;if(a(t))t=l(t,v(e[0]));else if(t.length&&!t.nodeType){if(t=f.makeArray(t),r)for(i=t.length-1;i>=0;i--)c(e,t[i],n,r);else for(i=0;i<t.length;i++)c(e,t[i],n,r);return e}if(t.nodeType)for(i=e.length;i--;)n.call(e[i],t);return e}function u(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function d(e,t,n){var r,i;return t=f(t)[0],e.each(function(){var e=this;n&&r==e.parentNode?i.appendChild(e):(r=e.parentNode,i=t.cloneNode(!1),e.parentNode.insertBefore(i,e),i.appendChild(e))}),e}function f(e,t){return new f.fn.init(e,t)}function h(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1}function p(e){return null===e||e===k?"":(""+e).replace(P,"")}function m(e,t){var n,r,i,o,a;if(e)if(n=e.length,n===o){for(r in e)if(e.hasOwnProperty(r)&&(a=e[r],t.call(a,r,a)===!1))break}else for(i=0;n>i&&(a=e[i],t.call(a,i,a)!==!1);i++);return e}function g(e,t){var n=[];return m(e,function(e,r){t(r,e)&&n.push(r)}),n}function v(e){return e?9==e.nodeType?e:e.ownerDocument:w}function y(e,n,r){var i=[],o=e[n];for("string"!=typeof r&&r instanceof f&&(r=r[0]);o&&9!==o.nodeType;){if(r!==t){if(o===r)break;if("string"==typeof r&&f(o).is(r))break}1===o.nodeType&&i.push(o),o=o[n]}return i}function b(e,n,r,i){var o=[];for(i instanceof f&&(i=i[0]);e;e=e[n])if(!r||e.nodeType===r){if(i!==t){if(e===i)break;if("string"==typeof i&&f(e).is(i))break}o.push(e)}return o}function C(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType==n)return e;return null}function x(e,t,n){m(n,function(n,r){e[n]=e[n]||{},e[n][t]=r})}var w=document,E=Array.prototype.push,N=Array.prototype.slice,_=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,S=e.Event,k,T=r.makeMap("children,contents,next,prev"),R=r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),A=r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),B={"for":"htmlFor","class":"className",readonly:"readOnly"},D={"float":"cssFloat"},M={},L={},P=/^\s*|\s*$/g;return f.fn=f.prototype={constructor:f,selector:"",context:null,length:0,init:function(e,t){var n=this,r,i;if(!e)return n;if(e.nodeType)return n.context=n[0]=e,n.length=1,n;if(t&&t.nodeType)n.context=t;else{if(t)return f(e).attr(t);n.context=t=document}if(a(e)){if(n.selector=e,r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:_.exec(e),!r)return f(t).find(e);if(r[1])for(i=l(e,v(t)).firstChild;i;)E.call(n,i),i=i.nextSibling;else{if(i=v(t).getElementById(r[2]),!i)return n;if(i.id!==r[2])return n.find(e);n.length=1,n[0]=i}}else this.add(e,!1);return n},toArray:function(){return r.toArray(this)},add:function(e,t){var n=this,r,i;if(a(e))return n.add(f(e));if(t!==!1)for(r=f.unique(n.toArray().concat(f.makeArray(e))),n.length=r.length,i=0;i<r.length;i++)n[i]=r[i];else E.apply(n,f.makeArray(e));return n},attr:function(e,t){var n=this,r;if("object"==typeof e)m(e,function(e,t){n.attr(e,t)});else{if(!o(t)){if(n[0]&&1===n[0].nodeType){if(r=M[e],r&&r.get)return r.get(n[0],e);if(A[e])return n.prop(e)?e:k;t=n[0].getAttribute(e,2),null===t&&(t=k)}return t}this.each(function(){var n;if(1===this.nodeType){if(n=M[e],n&&n.set)return void n.set(this,t);null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}})}return n},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if(e=B[e]||e,"object"==typeof e)m(e,function(e,t){n.prop(e,t)});else{if(!o(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1==this.nodeType&&(this[e]=t)})}return n},css:function(e,t){function n(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})}function r(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})}var i=this,a,s;if("object"==typeof e)m(e,function(e,t){i.css(e,t)});else if(o(t))e=n(e),"number"!=typeof t||R[e]||(t+="px"),i.each(function(){var n=this.style;if(s=L[e],s&&s.set)return void s.set(this,t);try{this.style[D[e]||e]=t}catch(i){}(null===t||""===t)&&(n.removeProperty?n.removeProperty(r(e)):n.removeAttribute(e))});else{if(a=i[0],s=L[e],s&&s.get)return s.get(a);if(a.ownerDocument.defaultView)try{return a.ownerDocument.defaultView.getComputedStyle(a,null).getPropertyValue(r(e))}catch(l){return k}else if(a.currentStyle)return a.currentStyle[n(e)]}return i},remove:function(){for(var e=this,t,n=this.length;n--;)t=e[n],S.clean(t),t.parentNode&&t.parentNode.removeChild(t);return this},empty:function(){for(var e=this,t,n=this.length;n--;)for(t=e[n];t.firstChild;)t.removeChild(t.firstChild);return this},html:function(e){var t=this,n;if(o(e)){n=t.length;try{for(;n--;)t[n].innerHTML=e}catch(r){f(t[n]).empty().append(e)}return t}return t[0]?t[0].innerHTML:""},text:function(e){var t=this,n;if(o(e)){for(n=t.length;n--;)"innerText"in t[n]?t[n].innerText=e:t[0].textContent=e;return t}return t[0]?t[0].innerText||t[0].textContent:""},append:function(){return c(this,arguments,function(e){1===this.nodeType&&this.appendChild(e)})},prepend:function(){return c(this,arguments,function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)},!0)},before:function(){var e=this;return e[0]&&e[0].parentNode?c(e,arguments,function(e){this.parentNode.insertBefore(e,this)}):e},after:function(){var e=this;return e[0]&&e[0].parentNode?c(e,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):e},appendTo:function(e){return f(e).append(this),this},prependTo:function(e){return f(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return d(this,e)},wrapAll:function(e){return d(this,e,!0)},wrapInner:function(e){return this.each(function(){f(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){f(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),f(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this;return"string"!=typeof e?n:(-1!==e.indexOf(" ")?m(e.split(" "),function(){n.toggleClass(this,t)}):n.each(function(n,r){var i,o;o=u(r,e),o!==t&&(i=r.className,o?r.className=p((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e)}),n)},hasClass:function(e){return u(this[0],e)},each:function(e){return m(this,e)},on:function(e,t){return this.each(function(){S.bind(this,e,t)})},off:function(e,t){return this.each(function(){S.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?S.fire(this,e.type,e):S.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new f(N.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;n>t;t++)f.find(e,this[t],r);return f(r)},filter:function(e){return f("function"==typeof e?g(this.toArray(),function(t,n){return e(n,t)}):f.filter(e,this.toArray()))},closest:function(e){var t=[];return e instanceof f&&(e=e[0]),this.each(function(n,r){for(;r;){if("string"==typeof e&&f(r).is(e)){t.push(r);break}if(r==e){t.push(r);break}r=r.parentNode}}),f(t)},offset:function(e){var t,n,r,i=0,o=0,a;return e?this.css(e):(t=this[0],t&&(n=t.ownerDocument,r=n.documentElement,t.getBoundingClientRect&&(a=t.getBoundingClientRect(),i=a.left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,o=a.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:o})},push:E,sort:[].sort,splice:[].splice},r.extend(f,{extend:r.extend,makeArray:function(e){return s(e)||e.nodeType?[e]:r.toArray(e)},inArray:h,isArray:r.isArray,each:m,trim:p,grep:g,find:n,expr:n.selectors,unique:n.uniqueSort,text:n.getText,contains:n.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!=t[r].nodeType&&t.splice(r,1);return t=1===t.length?f.find.matchesSelector(t[0],e)?[t[0]]:[]:f.find.matches(e,t)}}),m({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return y(e,"parentNode")},next:function(e){return C(e,"nextSibling",1)},prev:function(e){return C(e,"previousSibling",1)},children:function(e){return b(e.firstChild,"nextSibling",1)},contents:function(e){return r.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,t){f.fn[e]=function(n){var r=this,i=[];return r.each(function(){var e=t.call(i,this,n,i);e&&(f.isArray(e)?i.push.apply(i,e):i.push(e))}),this.length>1&&(T[e]||(i=f.unique(i)),0===e.indexOf("parents")&&(i=i.reverse())),i=f(i),n?i.filter(n):i}}),m({parentsUntil:function(e,t){return y(e,"parentNode",t)},nextUntil:function(e,t){return b(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return b(e,"previousSibling",1,t).slice(1)}},function(e,t){f.fn[e]=function(n,r){var i=this,o=[];return i.each(function(){var e=t.call(o,this,n,o);e&&(f.isArray(e)?o.push.apply(o,e):o.push(e))}),this.length>1&&(o=f.unique(o),(0===e.indexOf("parents")||"prevUntil"===e)&&(o=o.reverse())),o=f(o),r?o.filter(r):o}}),f.fn.is=function(e){return!!e&&this.filter(e).length>0},f.fn.init.prototype=f.fn,f.overrideDefaults=function(e){function t(r,i){return n=n||e(),0===arguments.length&&(r=n.element),i||(i=n.context),new t.fn.init(r,i)}var n;return f.extend(t,this),t},i.ie&&i.ie<8&&(x(M,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?k:t},size:function(e){var t=e.size;return 20===t?k:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?k:t}}),x(M,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),i.ie&&i.ie<9&&(D["float"]="styleFloat",x(L,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),f.attrHooks=M,f.cssHooks=L,f}),r(v,[],function(){return function(e,t){function n(e,t,n,r){function i(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+i(t)+i(n)+i(r)}var r=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,o=/\s*([^:]+):\s*([^;]+);?/g,a=/\s+$/,s,l,c={},u,d,f,h="\ufeff";for(e=e||{},t&&(d=t.getValidStyles(),f=t.getInvalidStyles()),u=("\\\" \\' \\; \\: ; : "+h).split(" "),l=0;l<u.length;l++)c[u[l]]=h+l,c[h+l]=u[l];return{toHex:function(e){return e.replace(r,n)},parse:function(t){function s(e,t,n){var r,i,o,a;if(r=m[e+"-top"+t],r&&(i=m[e+"-right"+t],i&&(o=m[e+"-bottom"+t],o&&(a=m[e+"-left"+t])))){var s=[r,i,o,a];for(l=s.length-1;l--&&s[l]===s[l+1];);l>-1&&n||(m[e+t]=-1==l?s[0]:s.join(" "),delete m[e+"-top"+t],delete m[e+"-right"+t],delete m[e+"-bottom"+t],delete m[e+"-left"+t])}}function u(e){var t=m[e],n;if(t){for(t=t.split(" "),n=t.length;n--;)if(t[n]!==t[0])return!1;return m[e]=t[0],!0}}function d(e,t,n,r){u(t)&&u(n)&&u(r)&&(m[e]=m[t]+" "+m[n]+" "+m[r],delete m[t],delete m[n],delete m[r])}function f(e){return b=!0,c[e]}function h(e,t){return b&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return c[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e}function p(t,n,r,i,o,a){if(o=o||a)return o=h(o),"'"+o.replace(/\'/g,"\\'")+"'";if(n=h(n||r||i),!e.allow_script_urls){var s=n.replace(/[\s\r\n]+/,"");if(/(java|vb)script:/i.test(s))return"";if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(s))return""}return C&&(n=C.call(x,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}var m={},g,v,y,b,C=e.url_converter,x=e.url_converter_scope||this;if(t){for(t=t.replace(/[\u0000-\u001F]/g,""),t=t.replace(/\\[\"\';:\uFEFF]/g,f).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,f)});g=o.exec(t);){if(v=g[1].replace(a,"").toLowerCase(),y=g[2].replace(a,""),y=y.replace(/\\[0-9a-f]+/g,function(e){return String.fromCharCode(parseInt(e.substr(1),16))}),v&&y.length>0){if(!e.allow_script_urls&&("behavior"==v||/expression\s*\(|\/\*|\*\//.test(y)))continue;"font-weight"===v&&"700"===y?y="bold":("color"===v||"background-color"===v)&&(y=y.toLowerCase()),y=y.replace(r,n),y=y.replace(i,p),m[v]=b?h(y,!0):y}o.lastIndex=g.index+g[0].length}s("border","",!0),s("border","-width"),s("border","-color"),s("border","-style"),s("padding",""),s("margin",""),d("border","border-width","border-style","border-color"),"medium none"===m.border&&delete m.border,"none"===m["border-image"]&&delete m["border-image"]}return m},serialize:function(e,t){function n(t){var n,r,o,a;if(n=d[t])for(r=0,o=n.length;o>r;r++)t=n[r],a=e[t],a!==s&&a.length>0&&(i+=(i.length>0?" ":"")+t+": "+a+";")}function r(e,t){var n;return n=f["*"],n&&n[e]?!1:(n=f[t],n&&n[e]?!1:!0)}var i="",o,a;if(t&&d)n("*"),n(t);else for(o in e)a=e[o],a!==s&&a.length>0&&(!f||r(o,t))&&(i+=(i.length>0?" ":"")+o+": "+a+";");return i}}}}),r(y,[],function(){return function(e,t){function n(e,n,r,i){var o,a;if(e){if(!i&&e[n])return e[n];if(e!=t){if(o=e[r])return o;for(a=e.parentNode;a&&a!=t;a=a.parentNode)if(o=a[r])return o}}}var r=e;this.current=function(){return r},this.next=function(e){return r=n(r,"firstChild","nextSibling",e)},this.prev=function(e){return r=n(r,"lastChild","previousSibling",e)}}}),r(b,[m],function(e){function t(n){function r(){return P.createDocumentFragment()}function i(e,t){E(F,e,t)}function o(e,t){E(z,e,t)}function a(e){i(e.parentNode,j(e))}function s(e){i(e.parentNode,j(e)+1)}function l(e){o(e.parentNode,j(e))}function c(e){o(e.parentNode,j(e)+1)}function u(e){e?(L[U]=L[V],L[$]=L[W]):(L[V]=L[U],L[W]=L[$]),L.collapsed=F}function d(e){a(e),c(e)}function f(e){i(e,0),o(e,1===e.nodeType?e.childNodes.length:e.nodeValue.length)}function h(e,t){var n=L[V],r=L[W],i=L[U],o=L[$],a=t.startContainer,s=t.startOffset,l=t.endContainer,c=t.endOffset;return 0===e?w(n,r,a,s):1===e?w(i,o,a,s):2===e?w(i,o,l,c):3===e?w(n,r,l,c):void 0}function p(){N(I)}function m(){return N(H)}function g(){return N(O)}function v(e){var t=this[V],r=this[W],i,o;3!==t.nodeType&&4!==t.nodeType||!t.nodeValue?(t.childNodes.length>0&&(o=t.childNodes[r]),o?t.insertBefore(e,o):3==t.nodeType?n.insertAfter(e,t):t.appendChild(e)):r?r>=t.nodeValue.length?n.insertAfter(e,t):(i=t.splitText(r),t.parentNode.insertBefore(e,i)):t.parentNode.insertBefore(e,t)}function y(e){var t=L.extractContents();L.insertNode(e),e.appendChild(t),L.selectNode(e)}function b(){return q(new t(n),{startContainer:L[V],startOffset:L[W],endContainer:L[U],endOffset:L[$],collapsed:L.collapsed,commonAncestorContainer:L.commonAncestorContainer})}function C(e,t){var n;if(3==e.nodeType)return e;if(0>t)return e;for(n=e.firstChild;n&&t>0;)--t,n=n.nextSibling;return n?n:e}function x(){return L[V]==L[U]&&L[W]==L[$]}function w(e,t,r,i){var o,a,s,l,c,u;if(e==r)return t==i?0:i>t?-1:1;for(o=r;o&&o.parentNode!=e;)o=o.parentNode;if(o){for(a=0,s=e.firstChild;s!=o&&t>a;)a++,s=s.nextSibling;return a>=t?-1:1}for(o=e;o&&o.parentNode!=r;)o=o.parentNode;if(o){for(a=0,s=r.firstChild;s!=o&&i>a;)a++,s=s.nextSibling;return i>a?-1:1}for(l=n.findCommonAncestor(e,r),c=e;c&&c.parentNode!=l;)c=c.parentNode;for(c||(c=l),u=r;u&&u.parentNode!=l;)u=u.parentNode;if(u||(u=l),c==u)return 0;for(s=l.firstChild;s;){if(s==c)return-1;if(s==u)return 1;s=s.nextSibling}}function E(e,t,r){var i,o;for(e?(L[V]=t,L[W]=r):(L[U]=t,L[$]=r),i=L[U];i.parentNode;)i=i.parentNode;for(o=L[V];o.parentNode;)o=o.parentNode;o==i?w(L[V],L[W],L[U],L[$])>0&&L.collapse(e):L.collapse(e),L.collapsed=x(),L.commonAncestorContainer=n.findCommonAncestor(L[V],L[U])}function N(e){var t,n=0,r=0,i,o,a,s,l,c;if(L[V]==L[U])return _(e);for(t=L[U],i=t.parentNode;i;t=i,i=i.parentNode){if(i==L[V])return S(t,e);++n}for(t=L[V],i=t.parentNode;i;t=i,i=i.parentNode){if(i==L[U])return k(t,e);++r}for(o=r-n,a=L[V];o>0;)a=a.parentNode,o--;for(s=L[U];0>o;)s=s.parentNode,o++;for(l=a.parentNode,c=s.parentNode;l!=c;l=l.parentNode,c=c.parentNode)a=l,s=c;return T(a,s,e)}function _(e){var t,n,i,o,a,s,l,c,u;if(e!=I&&(t=r()),L[W]==L[$])return t;if(3==L[V].nodeType){if(n=L[V].nodeValue,i=n.substring(L[W],L[$]),e!=O&&(o=L[V],c=L[W],u=L[$]-L[W],0===c&&u>=o.nodeValue.length-1?o.parentNode.removeChild(o):o.deleteData(c,u),L.collapse(F)),e==I)return;return i.length>0&&t.appendChild(P.createTextNode(i)),t}for(o=C(L[V],L[W]),a=L[$]-L[W];o&&a>0;)s=o.nextSibling,l=D(o,e),t&&t.appendChild(l),--a,o=s;return e!=O&&L.collapse(F),t}function S(e,t){var n,i,o,a,s,l;if(t!=I&&(n=r()),i=R(e,t),n&&n.appendChild(i),o=j(e),a=o-L[W],0>=a)return t!=O&&(L.setEndBefore(e),L.collapse(z)),n;for(i=e.previousSibling;a>0;)s=i.previousSibling,l=D(i,t),n&&n.insertBefore(l,n.firstChild),--a,i=s;return t!=O&&(L.setEndBefore(e),L.collapse(z)),n}function k(e,t){var n,i,o,a,s,l;for(t!=I&&(n=r()),o=A(e,t),n&&n.appendChild(o),i=j(e),++i,a=L[$]-i,o=e.nextSibling;o&&a>0;)s=o.nextSibling,l=D(o,t),n&&n.appendChild(l),--a,o=s;return t!=O&&(L.setStartAfter(e),L.collapse(F)),n}function T(e,t,n){var i,o,a,s,l,c,u;for(n!=I&&(o=r()),i=A(e,n),o&&o.appendChild(i),a=j(e),s=j(t),++a,l=s-a,c=e.nextSibling;l>0;)u=c.nextSibling,i=D(c,n),o&&o.appendChild(i),c=u,--l;return i=R(t,n),o&&o.appendChild(i),n!=O&&(L.setStartAfter(e),L.collapse(F)),o}function R(e,t){var n=C(L[U],L[$]-1),r,i,o,a,s,l=n!=L[U];if(n==e)return B(n,l,z,t);for(r=n.parentNode,i=B(r,z,z,t);r;){for(;n;)o=n.previousSibling,a=B(n,l,z,t),t!=I&&i.insertBefore(a,i.firstChild),l=F,n=o;if(r==e)return i;n=r.previousSibling,r=r.parentNode,s=B(r,z,z,t),t!=I&&s.appendChild(i),i=s}}function A(e,t){var n=C(L[V],L[W]),r=n!=L[V],i,o,a,s,l;if(n==e)return B(n,r,F,t);for(i=n.parentNode,o=B(i,z,F,t);i;){for(;n;)a=n.nextSibling,s=B(n,r,F,t),t!=I&&o.appendChild(s),r=F,n=a;if(i==e)return o;n=i.nextSibling,i=i.parentNode,l=B(i,z,F,t),t!=I&&l.appendChild(o),o=l}}function B(e,t,r,i){var o,a,s,l,c;if(t)return D(e,i);if(3==e.nodeType){if(o=e.nodeValue,r?(l=L[W],a=o.substring(l),s=o.substring(0,l)):(l=L[$],a=o.substring(0,l),s=o.substring(l)),i!=O&&(e.nodeValue=s),i==I)return;return c=n.clone(e,z),c.nodeValue=a,c}if(i!=I)return n.clone(e,z)}function D(e,t){return t!=I?t==O?n.clone(e,F):e:void e.parentNode.removeChild(e)}function M(){return n.create("body",null,g()).outerText}var L=this,P=n.doc,H=0,O=1,I=2,F=!0,z=!1,W="startOffset",V="startContainer",U="endContainer",$="endOffset",q=e.extend,j=n.nodeIndex;return q(L,{startContainer:P,startOffset:0,endContainer:P,endOffset:0,collapsed:F,commonAncestorContainer:P,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:i,setEnd:o,setStartBefore:a,setStartAfter:s,setEndBefore:l,setEndAfter:c,collapse:u,selectNode:d,selectNodeContents:f,compareBoundaryPoints:h,deleteContents:p,extractContents:m,cloneContents:g,insertNode:v,surroundContents:y,cloneRange:b,toStringIE:M}),L}return t.prototype.toString=function(){return this.toStringIE()},t}),r(C,[m],function(e){function t(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.textContent||t.innerText||e}function n(e,t){var n,r,i,a={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),o[r]||(i="&"+e[n+1]+";",a[r]=i,a[i]=r);return a}}var r=e.makeMap,i,o,a,s=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=/[<>&\"\']/g,u=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,d={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},a={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},i=n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var f={encodeRaw:function(e,t){return e.replace(t?s:l,function(e){return o[e]||e})},encodeAllRaw:function(e){return(""+e).replace(c,function(e){return o[e]||e})},encodeNumeric:function(e,t){return e.replace(t?s:l,function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":o[e]||"&#"+e.charCodeAt(0)+";"})},encodeNamed:function(e,t,n){return n=n||i,e.replace(t?s:l,function(e){return o[e]||n[e]||e})},getEncodeFunc:function(e,t){function a(e,n){return e.replace(n?s:l,function(e){return o[e]||t[e]||"&#"+e.charCodeAt(0)+";"||e})}function c(e,n){return f.encodeNamed(e,n,t)}return t=n(t)||i,e=r(e.replace(/\+/g,",")),e.named&&e.numeric?a:e.named?t?c:f.encodeNamed:e.numeric?f.encodeNumeric:f.encodeRaw},decode:function(e){return e.replace(u,function(e,n){return n?(n="x"===n.charAt(0).toLowerCase()?parseInt(n.substr(1),16):parseInt(n,10),n>65535?(n-=65536,String.fromCharCode(55296+(n>>10),56320+(1023&n))):d[n]||String.fromCharCode(n)):a[e]||i[e]||t(e)})}};return f}),r(x,[m,u],function(e,t){return function(n,r){function i(e){n.getElementsByTagName("head")[0].appendChild(e)}function o(r,o,c){function u(){for(var e=b.passed,t=e.length;t--;)e[t]();b.status=2,b.passed=[],b.failed=[]}function d(){for(var e=b.failed,t=e.length;t--;)e[t]();b.status=3,b.passed=[],b.failed=[]}function f(){var e=navigator.userAgent.match(/WebKit\/(\d*)/);return!!(e&&e[1]<536)}function h(e,n){e()||((new Date).getTime()-y<l?t.setTimeout(n):d())}function p(){h(function(){for(var e=n.styleSheets,t,r=e.length,i;r--;)if(t=e[r],i=t.ownerNode?t.ownerNode:t.owningElement,i&&i.id===g.id)return u(),!0},p)}function m(){h(function(){try{var e=v.sheet.cssRules;return u(),!!e}catch(t){}},m)}var g,v,y,b;if(r=e._addCacheSuffix(r),s[r]?b=s[r]:(b={passed:[],failed:[]},s[r]=b),o&&b.passed.push(o),c&&b.failed.push(c),1!=b.status){if(2==b.status)return void u();if(3==b.status)return void d();if(b.status=1,g=n.createElement("link"),g.rel="stylesheet",g.type="text/css",g.id="u"+a++,g.async=!1,g.defer=!1,y=(new Date).getTime(),"onload"in g&&!f())g.onload=p,g.onerror=d;else{if(navigator.userAgent.indexOf("Firefox")>0)return v=n.createElement("style"),v.textContent='@import "'+r+'"',m(),void i(v);p()}i(g),g.href=r}}var a=0,s={},l;r=r||{},l=r.maxLoadTime||5e3,this.load=o}}),r(w,[f,g,v,d,y,b,C,h,m,x],function(e,n,r,i,o,a,s,l,c,u){function d(e,t){var n={},r=t.keep_values,i;return i={set:function(n,r,i){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||e,r,i,n[0])),n.attr("data-mce-"+i,r).attr(i,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},n={style:{set:function(e,t){return null!==t&&"object"==typeof t?void e.css(t):(r&&e.attr("data-mce-style",t),void e.attr("style",t))},get:function(t){var n=t.attr("data-mce-style")||t.attr("style");return n=e.serializeStyle(e.parseStyle(n),t[0].nodeName)}}},r&&(n.href=n.src=i),n}function f(e,t){var n=t.attr("style");n=e.serializeStyle(e.parseStyle(n),t[0].nodeName),n||(n=null),t.attr("data-mce-style",n)}function h(e,t){var n=0,r,i;if(e)for(r=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)i=e.nodeType,(!t||3!=i||i!=r&&e.nodeValue.length)&&(n++,r=i);return n}function p(e,t){var o=this,a;o.doc=e,o.win=window,o.files={},o.counter=0,o.stdMode=!b||e.documentMode>=8,o.boxModel=!b||"CSS1Compat"==e.compatMode||o.stdMode,o.styleSheetLoader=new u(e),o.boundEvents=[],o.settings=t=t||{},o.schema=t.schema,o.styles=new r({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),o.fixDoc(e),o.events=t.ownEvents?new i(t.proxy):i.Event,o.attrHooks=d(o,t),a=t.schema?t.schema.getBlockElements():{},o.$=n.overrideDefaults(function(){return{context:e,element:o.getRoot()}}),o.isBlock=function(e){if(!e)return!1;var t=e.nodeType;return t?!(1!==t||!a[e.nodeName]):!!a[e]}}var m=c.each,g=c.is,v=c.grep,y=c.trim,b=l.ie,C=/^([a-z0-9],?)+$/i,x=/^[ \t\r\n]*$/;return p.prototype={$$:function(e){return"string"==typeof e&&(e=this.get(e)),this.$(e)},root:null,fixDoc:function(e){var t=this.settings,n;if(b&&t.schema){"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g,function(t){e.createElement(t)});for(n in t.schema.getCustomElements())e.createElement(n)}},clone:function(e,t){var n=this,r,i;return!b||1!==e.nodeType||t?e.cloneNode(t):(i=n.doc,t?r.firstChild:(r=i.createElement(e.nodeName),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),r))},getRoot:function(){var e=this;return e.settings.root_element||e.doc.body},getViewPort:function(e){var t,n;return e=e?e:this.win,t=e.document,n=this.boxModel?t.documentElement:t.body,{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop,w:e.innerWidth||n.clientWidth,h:e.innerHeight||n.clientHeight}},getRect:function(e){var t=this,n,r;return e=t.get(e),n=t.getPos(e),r=t.getSize(e),{x:n.x,y:n.y,w:r.w,h:r.h}},getSize:function(e){var t=this,n,r;return e=t.get(e),n=t.getStyle(e,"width"),r=t.getStyle(e,"height"),-1===n.indexOf("px")&&(n=0),-1===r.indexOf("px")&&(r=0),{w:parseInt(n,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}},getParent:function(e,t,n){return this.getParents(e,t,n,!1)},getParents:function(e,n,r,i){var o=this,a,s=[];for(e=o.get(e),i=i===t,r=r||("BODY"!=o.getRoot().nodeName?o.getRoot().parentNode:null),g(n,"string")&&(a=n,n="*"===n?function(e){return 1==e.nodeType}:function(e){return o.is(e,a)});e&&e!=r&&e.nodeType&&9!==e.nodeType;){if(!n||n(e)){if(!i)return e;s.push(e)}e=e.parentNode}return i?s:null},get:function(e){var t;return e&&this.doc&&"string"==typeof e&&(t=e,e=this.doc.getElementById(e),e&&e.id!==t)?this.doc.getElementsByName(t)[1]:e},getNext:function(e,t){return this._findSib(e,t,"nextSibling")},getPrev:function(e,t){return this._findSib(e,t,"previousSibling")},select:function(t,n){var r=this;return e(t,r.get(n)||r.settings.root_element||r.doc,[])},is:function(n,r){var i;if(n.length===t){if("*"===r)return 1==n.nodeType;if(C.test(r)){for(r=r.toLowerCase().split(/,/),n=n.nodeName.toLowerCase(),i=r.length-1;i>=0;i--)if(r[i]==n)return!0;return!1}}if(n.nodeType&&1!=n.nodeType)return!1;var o=n.nodeType?[n]:n;return e(r,o[0].ownerDocument||o[0],null,o).length>0;
},add:function(e,t,n,r,i){var o=this;return this.run(e,function(e){var a;return a=g(t,"string")?o.doc.createElement(t):t,o.setAttribs(a,n),r&&(r.nodeType?a.appendChild(r):o.setHTML(a,r)),i?a:e.appendChild(a)})},create:function(e,t,n){return this.add(this.doc.createElement(e),e,t,n,1)},createHTML:function(e,t,n){var r="",i;r+="<"+e;for(i in t)t.hasOwnProperty(i)&&null!==t[i]&&"undefined"!=typeof t[i]&&(r+=" "+i+'="'+this.encode(t[i])+'"');return"undefined"!=typeof n?r+">"+n+"</"+e+">":r+" />"},createFragment:function(e){var t,n,r=this.doc,i;for(i=r.createElement("div"),t=r.createDocumentFragment(),e&&(i.innerHTML=e);n=i.firstChild;)t.appendChild(n);return t},remove:function(e,t){return e=this.$$(e),t?e.each(function(){for(var e;e=this.firstChild;)3==e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():e.remove(),e.length>1?e.toArray():e[0]},setStyle:function(e,t,n){e=this.$$(e).css(t,n),this.settings.update_styles&&f(this,e)},getStyle:function(e,n,r){return e=this.$$(e),r?e.css(n):(n=n.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}),"float"==n&&(n=l.ie&&l.ie<12?"styleFloat":"cssFloat"),e[0]&&e[0].style?e[0].style[n]:t)},setStyles:function(e,t){e=this.$$(e).css(t),this.settings.update_styles&&f(this,e)},removeAllAttribs:function(e){return this.run(e,function(e){var t,n=e.attributes;for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))})},setAttrib:function(e,t,n){var r=this,i,o,a=r.settings;""===n&&(n=null),e=r.$$(e),i=e.attr(t),e.length&&(o=r.attrHooks[t],o&&o.set?o.set(e,n,t):e.attr(t,n),i!=n&&a.onSetAttrib&&a.onSetAttrib({attrElm:e,attrName:t,attrValue:n}))},setAttribs:function(e,t){var n=this;n.$$(e).each(function(e,r){m(t,function(e,t){n.setAttrib(r,t,e)})})},getAttrib:function(e,t,n){var r=this,i,o;return e=r.$$(e),e.length&&(i=r.attrHooks[t],o=i&&i.get?i.get(e,t):e.attr(t)),"undefined"==typeof o&&(o=n||""),o},getPos:function(e,t){var r=this,i=0,o=0,a,s=r.doc,l=s.body,c;if(e=r.get(e),t=t||l,e){if(t===l&&e.getBoundingClientRect&&"static"===n(l).css("position"))return c=e.getBoundingClientRect(),t=r.boxModel?s.documentElement:l,i=c.left+(s.documentElement.scrollLeft||l.scrollLeft)-t.clientLeft,o=c.top+(s.documentElement.scrollTop||l.scrollTop)-t.clientTop,{x:i,y:o};for(a=e;a&&a!=t&&a.nodeType;)i+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=e.parentNode;a&&a!=t&&a.nodeType;)i-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode}return{x:i,y:o}},parseStyle:function(e){return this.styles.parse(e)},serializeStyle:function(e,t){return this.styles.serialize(e,t)},addStyle:function(e){var t=this,n=t.doc,r,i;if(t!==p.DOM&&n===document){var o=p.DOM.addedStyles;if(o=o||[],o[e])return;o[e]=!0,p.DOM.addedStyles=o}i=n.getElementById("mceDefaultStyles"),i||(i=n.createElement("style"),i.id="mceDefaultStyles",i.type="text/css",r=n.getElementsByTagName("head")[0],r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(n.createTextNode(e))},loadCSS:function(e){var t=this,n=t.doc,r;return t!==p.DOM&&n===document?void p.DOM.loadCSS(e):(e||(e=""),r=n.getElementsByTagName("head")[0],void m(e.split(","),function(e){var i;e=c._addCacheSuffix(e),t.files[e]||(t.files[e]=!0,i=t.create("link",{rel:"stylesheet",href:e}),b&&n.documentMode&&n.recalc&&(i.onload=function(){n.recalc&&n.recalc(),i.onload=null}),r.appendChild(i))}))},addClass:function(e,t){this.$$(e).addClass(t)},removeClass:function(e,t){this.toggleClass(e,t,!1)},hasClass:function(e,t){return this.$$(e).hasClass(t)},toggleClass:function(e,t,r){this.$$(e).toggleClass(t,r).each(function(){""===this.className&&n(this).attr("class",null)})},show:function(e){this.$$(e).show()},hide:function(e){this.$$(e).hide()},isHidden:function(e){return"none"==this.$$(e).css("display")},uniqueId:function(e){return(e?e:"mce_")+this.counter++},setHTML:function(e,t){e=this.$$(e),b?e.each(function(e,r){if(r.canHaveHTML!==!1){for(;r.firstChild;)r.removeChild(r.firstChild);try{r.innerHTML="<br>"+t,r.removeChild(r.firstChild)}catch(i){n("<div>").html("<br>"+t).contents().slice(1).appendTo(r)}return t}}):e.html(t)},getOuterHTML:function(e){return e=this.get(e),1==e.nodeType&&"outerHTML"in e?e.outerHTML:n("<div>").append(n(e).clone()).html()},setOuterHTML:function(e,t){var r=this;r.$$(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}r.remove(n(this).html(t),!0)})},decode:s.decode,encode:s.encodeAllRaw,insertAfter:function(e,t){return t=this.get(t),this.run(e,function(e){var n,r;return n=t.parentNode,r=t.nextSibling,r?n.insertBefore(e,r):n.appendChild(e),e})},replace:function(e,t,n){var r=this;return r.run(t,function(t){return g(t,"array")&&(e=e.cloneNode(!0)),n&&m(v(t.childNodes),function(t){e.appendChild(t)}),t.parentNode.replaceChild(e,t)})},rename:function(e,t){var n=this,r;return e.nodeName!=t.toUpperCase()&&(r=n.create(t),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),n.replace(r,e,1)),r||e},findCommonAncestor:function(e,t){for(var n=e,r;n;){for(r=t;r&&n!=r;)r=r.parentNode;if(n==r)break;n=n.parentNode}return!n&&e.ownerDocument?e.ownerDocument.documentElement:n},toHex:function(e){return this.styles.toHex(c.trim(e))},run:function(e,t,n){var r=this,i;return"string"==typeof e&&(e=r.get(e)),e?(n=n||this,e.nodeType||!e.length&&0!==e.length?t.call(n,e):(i=[],m(e,function(e,o){e&&("string"==typeof e&&(e=r.get(e)),i.push(t.call(n,e,o)))}),i)):!1},getAttribs:function(e){var t;if(e=this.get(e),!e)return[];if(b){if(t=[],"OBJECT"==e.nodeName)return e.attributes;"OPTION"===e.nodeName&&this.getAttrib(e,"selected")&&t.push({specified:1,nodeName:"selected"});var n=/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;return e.cloneNode(!1).outerHTML.replace(n,"").replace(/[\w:\-]+/gi,function(e){t.push({specified:1,nodeName:e})}),t}return e.attributes},isEmpty:function(e,t){var n=this,r,i,a,s,l,c=0;if(e=e.firstChild){s=new o(e,e.parentNode),t=t||(n.schema?n.schema.getNonEmptyElements():null);do{if(a=e.nodeType,1===a){if(e.getAttribute("data-mce-bogus"))continue;if(l=e.nodeName.toLowerCase(),t&&t[l]){if("br"===l){c++;continue}return!1}for(i=n.getAttribs(e),r=i.length;r--;)if(l=i[r].nodeName,"name"===l||"data-mce-bookmark"===l)return!1}if(8==a)return!1;if(3===a&&!x.test(e.nodeValue))return!1}while(e=s.next())}return 1>=c},createRng:function(){var e=this.doc;return e.createRange?e.createRange():new a(this)},nodeIndex:h,split:function(e,t,n){function r(e){function t(e){var t=e.previousSibling&&"SPAN"==e.previousSibling.nodeName,n=e.nextSibling&&"SPAN"==e.nextSibling.nodeName;return t&&n}var n,o=e.childNodes,a=e.nodeType;if(1!=a||"bookmark"!=e.getAttribute("data-mce-type")){for(n=o.length-1;n>=0;n--)r(o[n]);if(9!=a){if(3==a&&e.nodeValue.length>0){var s=y(e.nodeValue).length;if(!i.isBlock(e.parentNode)||s>0||0===s&&t(e))return}else if(1==a&&(o=e.childNodes,1==o.length&&o[0]&&1==o[0].nodeType&&"bookmark"==o[0].getAttribute("data-mce-type")&&e.parentNode.insertBefore(o[0],e),o.length||/^(br|hr|input|img)$/i.test(e.nodeName)))return;i.remove(e)}return e}}var i=this,o=i.createRng(),a,s,l;return e&&t?(o.setStart(e.parentNode,i.nodeIndex(e)),o.setEnd(t.parentNode,i.nodeIndex(t)),a=o.extractContents(),o=i.createRng(),o.setStart(t.parentNode,i.nodeIndex(t)+1),o.setEnd(e.parentNode,i.nodeIndex(e)+1),s=o.extractContents(),l=e.parentNode,l.insertBefore(r(a),e),n?l.insertBefore(n,e):l.insertBefore(t,e),l.insertBefore(r(s),e),i.remove(e),n||t):void 0},bind:function(e,t,n,r){var i=this;if(c.isArray(e)){for(var o=e.length;o--;)e[o]=i.bind(e[o],t,n,r);return e}return!i.settings.collect||e!==i.doc&&e!==i.win||i.boundEvents.push([e,t,n,r]),i.events.bind(e,t,n,r||i)},unbind:function(e,t,n){var r=this,i;if(c.isArray(e)){for(i=e.length;i--;)e[i]=r.unbind(e[i],t,n);return e}if(r.boundEvents&&(e===r.doc||e===r.win))for(i=r.boundEvents.length;i--;){var o=r.boundEvents[i];e!=o[0]||t&&t!=o[1]||n&&n!=o[2]||this.events.unbind(o[0],o[1],o[2])}return this.events.unbind(e,t,n)},fire:function(e,t,n){return this.events.fire(e,t,n)},getContentEditable:function(e){var t;return e&&1==e.nodeType?(t=e.getAttribute("data-mce-contenteditable"),t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null):null},getContentEditableParent:function(e){for(var t=this.getRoot(),n=null;e&&e!==t&&(n=this.getContentEditable(e),null===n);e=e.parentNode);return n},destroy:function(){var t=this;if(t.boundEvents){for(var n=t.boundEvents.length;n--;){var r=t.boundEvents[n];this.events.unbind(r[0],r[1],r[2])}t.boundEvents=null}e.setDocument&&e.setDocument(),t.win=t.doc=t.root=t.events=t.frag=null},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset},_findSib:function(e,t,n){var r=this,i=t;if(e)for("string"==typeof i&&(i=function(e){return r.is(e,t)}),e=e[n];e;e=e[n])if(i(e))return e;return null}},p.DOM=new p(document),p.nodeIndex=h,p}),r(E,[w,m],function(e,t){function n(){function e(e,n){function i(){a.remove(l),s&&(s.onreadystatechange=s.onload=s=null),n()}function o(){"undefined"!=typeof console&&console.log&&console.log("Failed to load: "+e)}var a=r,s,l;l=a.uniqueId(),s=document.createElement("script"),s.id=l,s.type="text/javascript",s.src=t._addCacheSuffix(e),"onreadystatechange"in s?s.onreadystatechange=function(){/loaded|complete/.test(s.readyState)&&i()}:s.onload=i,s.onerror=o,(document.getElementsByTagName("head")[0]||document.body).appendChild(s)}var n=0,a=1,s=2,l={},c=[],u={},d=[],f=0,h;this.isDone=function(e){return l[e]==s},this.markDone=function(e){l[e]=s},this.add=this.load=function(e,t,r){var i=l[e];i==h&&(c.push(e),l[e]=n),t&&(u[e]||(u[e]=[]),u[e].push({func:t,scope:r||this}))},this.loadQueue=function(e,t){this.loadScripts(c,e,t)},this.loadScripts=function(t,n,r){function c(e){i(u[e],function(e){e.func.call(e.scope)}),u[e]=h}var p;d.push({func:n,scope:r||this}),(p=function(){var n=o(t);t.length=0,i(n,function(t){return l[t]==s?void c(t):void(l[t]!=a&&(l[t]=a,f++,e(t,function(){l[t]=s,f--,c(t),p()})))}),f||(i(d,function(e){e.func.call(e.scope)}),d.length=0)})()}}var r=e.DOM,i=t.each,o=t.grep;return n.ScriptLoader=new n,n}),r(N,[E,m],function(e,n){function r(){var e=this;e.items=[],e.urls={},e.lookup={}}var i=n.each;return r.prototype={get:function(e){return this.lookup[e]?this.lookup[e].instance:t},dependencies:function(e){var t;return this.lookup[e]&&(t=this.lookup[e].dependencies),t||[]},requireLangPack:function(t,n){var i=r.language;if(i&&r.languageLoad!==!1){if(n)if(n=","+n+",",-1!=n.indexOf(","+i.substr(0,2)+","))i=i.substr(0,2);else if(-1==n.indexOf(","+i+","))return;e.ScriptLoader.add(this.urls[t]+"/langs/"+i+".js")}},add:function(e,t,n){return this.items.push(t),this.lookup[e]={instance:t,dependencies:n},t},createUrl:function(e,t){return"object"==typeof t?t:{prefix:e.prefix,resource:t,suffix:e.suffix}},addComponents:function(t,n){var r=this.urls[t];i(n,function(t){e.ScriptLoader.add(r+"/"+t)})},load:function(n,o,a,s){function l(){var r=c.dependencies(n);i(r,function(e){var n=c.createUrl(o,e);c.load(n.resource,n,t,t)}),a&&(s?a.call(s):a.call(e))}var c=this,u=o;c.urls[n]||("object"==typeof o&&(u=o.prefix+o.resource+o.suffix),0!==u.indexOf("/")&&-1==u.indexOf("://")&&(u=r.baseURL+"/"+u),c.urls[n]=u.substring(0,u.lastIndexOf("/")),c.lookup[n]?l():e.ScriptLoader.add(u,l,s))}},r.PluginManager=new r,r.ThemeManager=new r,r}),r(_,[],function(){function e(e){return function(t){return!!t&&t.nodeType==e}}function t(e){return e=e.toLowerCase().split(" "),function(t){var n,r;if(t&&t.nodeType)for(r=t.nodeName.toLowerCase(),n=0;n<e.length;n++)if(r===e[n])return!0;return!1}}function n(e,t){return t=t.toLowerCase().split(" "),function(n){var r,i;if(s(n))for(r=0;r<t.length;r++)if(i=getComputedStyle(n,null).getPropertyValue(e),i===t[r])return!0;return!1}}function r(e,t){return function(n){return s(n)&&n[e]===t}}function i(e,t){return function(n){return s(n)&&n.getAttribute(e)===t}}function o(e){return s(e)&&e.hasAttribute("data-mce-bogus")}function a(e){return function(t){if(s(t)){if(t.contentEditable===e)return!0;if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}}var s=e(1);return{isText:e(3),isElement:s,isComment:e(8),isBr:t("br"),isContentEditableTrue:a("true"),isContentEditableFalse:a("false"),matchNodeNames:t,hasPropValue:r,hasAttributeValue:i,matchStyleValues:n,isBogus:o}}),r(S,[],function(){function e(e){return e==n}function t(e){return e.replace(new RegExp(n,"g"),"")}var n="\u200b";return{isZwsp:e,ZWSP:n,trim:t}}),r(k,[_,S],function(e,t){function n(e){return d(e)&&(e=e.parentNode),u(e)&&e.hasAttribute("data-mce-caret")}function r(e){return d(e)&&t.isZwsp(e.data)}function i(e){return n(e)||r(e)}function o(e,n){var r,o,a,s;if(r=e.ownerDocument,a=r.createTextNode(t.ZWSP),s=e.parentNode,n){if(o=e.previousSibling,d(o)){if(i(o))return o;if(c(o))return o.splitText(o.data.length-1)}s.insertBefore(a,e)}else{if(o=e.nextSibling,d(o)){if(i(o))return o;if(l(o))return o.splitText(1),o}e.nextSibling?s.insertBefore(a,e.nextSibling):s.appendChild(a)}return a}function a(e,t,n){var r,i,o;return r=t.ownerDocument,i=r.createElement(e),i.setAttribute("data-mce-caret",n?"before":"after"),i.setAttribute("data-mce-bogus","all"),i.appendChild(r.createTextNode("\xa0")),o=t.parentNode,n?o.insertBefore(i,t):t.nextSibling?o.insertBefore(i,t.nextSibling):o.appendChild(i),i}function s(e){var n;u(e)&&i(e)&&("&nbsp;"!=e.innerHTML?e.removeAttribute("data-mce-caret"):e.parentNode&&e.parentNode.removeChild(e)),d(e)&&(n=t.trim(e.data),0===n.length&&e.parentNode&&e.parentNode.removeChild(e),e.nodeValue=n)}function l(e){return d(e)&&e.data[0]==t.ZWSP}function c(e){return d(e)&&e.data[e.data.length-1]==t.ZWSP}var u=e.isElement,d=e.isText;return{isCaretContainer:i,isCaretContainerBlock:n,isCaretContainerInline:r,insertInline:o,insertBlock:a,remove:s,startsWithCaretContainer:l,endsWithCaretContainer:c}}),r(T,[m,y,_,k],function(e,t,n,r){function i(e,t){var n=e.childNodes;return t--,t>n.length-1?t=n.length-1:0>t&&(t=0),n[t]||e}function o(e){this.walk=function(t,n){function r(e){var t;return t=e[0],3===t.nodeType&&t===c&&u>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===f&&e.length>0&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e}function o(e,t,n){for(var r=[];e&&e!=n;e=e[t])r.push(e);return r}function a(e,t){do{if(e.parentNode==t)return e;e=e.parentNode}while(e)}function l(e,t,i){var a=i?"nextSibling":"previousSibling";for(g=e,v=g.parentNode;g&&g!=t;g=v)v=g.parentNode,y=o(g==e?g:g[a],a),y.length&&(i||y.reverse(),n(r(y)))}var c=t.startContainer,u=t.startOffset,d=t.endContainer,f=t.endOffset,h,p,m,g,v,y,b;if(b=e.select("td.mce-item-selected,th.mce-item-selected"),b.length>0)return void s(b,function(e){n([e])});if(1==c.nodeType&&c.hasChildNodes()&&(c=c.childNodes[u]),1==d.nodeType&&d.hasChildNodes()&&(d=i(d,f)),c==d)return n(r([c]));for(h=e.findCommonAncestor(c,d),g=c;g;g=g.parentNode){if(g===d)return l(c,h,!0);if(g===h)break}for(g=d;g;g=g.parentNode){if(g===c)return l(d,h);if(g===h)break}p=a(c,h)||c,m=a(d,h)||d,l(c,p,!0),y=o(p==c?p:p.nextSibling,"nextSibling",m==d?m.nextSibling:m),y.length&&n(r(y)),l(d,m)},this.split=function(e){function t(e,t){return e.splitText(t)}var n=e.startContainer,r=e.startOffset,i=e.endContainer,o=e.endOffset;return n==i&&3==n.nodeType?r>0&&r<n.nodeValue.length&&(i=t(n,r),n=i.previousSibling,o>r?(o-=r,n=i=t(i,o).previousSibling,o=i.nodeValue.length,r=0):o=0):(3==n.nodeType&&r>0&&r<n.nodeValue.length&&(n=t(n,r),r=0),3==i.nodeType&&o>0&&o<i.nodeValue.length&&(i=t(i,o).previousSibling,o=i.nodeValue.length)),{startContainer:n,startOffset:r,endContainer:i,endOffset:o}},this.normalize=function(n){function r(r){function a(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function s(n,r){for(var i=new t(n,e.getParent(n.parentNode,e.isBlock)||g);n=i[r?"prev":"next"]();)if("BR"===n.nodeName)return!0}function u(e){for(;e&&e!=g;){if(l(e))return!0;e=e.parentNode}return!1}function d(e,t){return e.previousSibling&&e.previousSibling.nodeName==t}function f(n,r){var a,s,l;if(r=r||h,l=e.getParent(r.parentNode,e.isBlock)||g,n&&"BR"==r.nodeName&&C&&e.isEmpty(l))return h=r.parentNode,p=e.nodeIndex(r),void(i=!0);for(a=new t(r,l);v=a[n?"prev":"next"]();){if("false"===e.getContentEditableParent(v)||c(v))return;if(3===v.nodeType&&v.nodeValue.length>0)return h=v,p=n?v.nodeValue.length:0,void(i=!0);if(e.isBlock(v)||y[v.nodeName.toLowerCase()])return;s=v}o&&s&&(h=s,i=!0,p=0)}var h,p,m,g=e.getRoot(),v,y,b,C;if(h=n[(r?"start":"end")+"Container"],p=n[(r?"start":"end")+"Offset"],C=1==h.nodeType&&p===h.childNodes.length,y=e.schema.getNonEmptyElements(),b=r,!c(h)){if(1==h.nodeType&&p>h.childNodes.length-1&&(b=!1),9===h.nodeType&&(h=e.getRoot(),p=0),h===g){if(b&&(v=h.childNodes[p>0?p-1:0])){if(c(v))return;if(y[v.nodeName]||"TABLE"==v.nodeName)return}if(h.hasChildNodes()){if(p=Math.min(!b&&p>0?p-1:p,h.childNodes.length-1),h=h.childNodes[p],p=0,u(h)||c(h))return;if(h.hasChildNodes()&&!/TABLE/.test(h.nodeName)){v=h,m=new t(h,g);do{if(l(v)||c(v)){i=!1;break}if(3===v.nodeType&&v.nodeValue.length>0){p=b?0:v.nodeValue.length,h=v,i=!0;break}if(y[v.nodeName.toLowerCase()]&&!a(v)){p=e.nodeIndex(v),h=v.parentNode,"IMG"!=v.nodeName||b||p++,i=!0;break}}while(v=b?m.next():m.prev())}}}o&&(3===h.nodeType&&0===p&&f(!0),1===h.nodeType&&(v=h.childNodes[p],v||(v=h.childNodes[p-1]),!v||"BR"!==v.nodeName||d(v,"A")||s(v)||s(v,!0)||f(!0,v))),b&&!o&&3===h.nodeType&&p===h.nodeValue.length&&f(!1),i&&n["set"+(r?"Start":"End")](h,p)}}var i,o;return o=n.collapsed,r(!0),o||r(),i&&o&&n.collapse(!0),i}}function a(t,n,r){var i,o,a;if(i=r.elementFromPoint(t,n),o=r.body.createTextRange(),"HTML"==i.tagName&&(i=r.body),o.moveToElementText(i),a=e.toArray(o.getClientRects()),a=a.sort(function(e,t){return e=Math.abs(Math.max(e.top-n,e.bottom-n)),t=Math.abs(Math.max(t.top-n,t.bottom-n)),e-t}),a.length>0){n=(a[0].bottom+a[0].top)/2;try{return o.moveToPoint(t,n),o.collapse(!0),o}catch(s){}}return null}var s=e.each,l=n.isContentEditableFalse,c=r.isCaretContainer;return o.compareRanges=function(e,t){if(e&&t){if(!e.item&&!e.duplicate)return e.startContainer==t.startContainer&&e.startOffset==t.startOffset;if(e.item&&t.item&&e.item(0)===t.item(0))return!0;if(e.isEqual&&t.isEqual&&t.isEqual(e))return!0}return!1},o.getCaretRangeFromPoint=function(e,t,n){var r,i;if(n.caretPositionFromPoint)i=n.caretPositionFromPoint(e,t),r=n.createRange(),r.setStart(i.offsetNode,i.offset),r.collapse(!0);else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(n.body.createTextRange){r=n.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=a(e,t,n)}}return r},o.getSelectedNode=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset==n+1?t.childNodes[n]:null},o.getNode=function(e,t){return 1==e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},o}),r(R,[T,h,u],function(e,t,n){return function(r){function i(e){var t,n;if(n=r.$(e).parentsUntil(r.getBody()).add(e),n.length===a.length){for(t=n.length;t>=0&&n[t]===a[t];t--);if(-1===t)return a=n,!0}return a=n,!1}var o,a=[];"onselectionchange"in r.getDoc()||r.on("NodeChange Click MouseUp KeyUp Focus",function(t){var n,i;n=r.selection.getRng(),i={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset},"nodechange"!=t.type&&e.compareRanges(i,o)||r.fire("SelectionChange"),o=i}),r.on("contextmenu",function(){r.fire("SelectionChange")}),r.on("SelectionChange",function(){var e=r.selection.getStart(!0);(t.range||!r.selection.isCollapsed())&&!i(e)&&r.dom.isChildOf(e,r.getBody())&&r.nodeChanged({selectionChange:!0})}),r.on("MouseUp",function(e){e.isDefaultPrevented()||("IMG"==r.selection.getNode().nodeName?n.setEditorTimeout(r,function(){r.nodeChanged()}):r.nodeChanged())}),this.nodeChanged=function(e){var t=r.selection,n,i,o;r.initialized&&t&&!r.settings.disable_nodechange&&!r.readonly&&(o=r.getBody(),n=t.getStart()||o,n=n.ownerDocument!=r.getDoc()?r.getBody():n,"IMG"==n.nodeName&&t.isCollapsed()&&(n=n.parentNode),i=[],r.dom.getParent(n,function(e){return e===o?!0:void i.push(e)}),e=e||{},e.element=n,e.parents=i,r.fire("NodeChange",e))}}}),r(A,[],function(){function e(e,t,n){var r,i,o=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[o])return e[o];if(e!==t){if(r=e[a])return r;for(i=e.parent;i&&i!==t;i=i.parent)if(r=i[a])return r}}function t(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}var n=/^[ \t\r\n]*$/,r={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11};return t.prototype={replace:function(e){var t=this;return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},attr:function(e,t){var n=this,r,i,o;if("string"!=typeof e){for(i in e)n.attr(i,e[i]);return n}if(r=n.attributes){if(t!==o){if(null===t){if(e in r.map)for(delete r.map[e],i=r.length;i--;)if(r[i].name===e)return r=r.splice(i,1),n;return n}if(e in r.map){for(i=r.length;i--;)if(r[i].name===e){r[i].value=t;break}}else r.push({name:e,value:t});return r.map[e]=t,n}return r.map[e]}},clone:function(){var e=this,n=new t(e.name,e.type),r,i,o,a,s;if(o=e.attributes){for(s=[],s.map={},r=0,i=o.length;i>r;r++)a=o[r],"id"!==a.name&&(s[s.length]={name:a.name,value:a.value},s.map[a.name]=a.value);n.attributes=s}return n.value=e.value,n.shortEnded=e.shortEnded,n},wrap:function(e){var t=this;return t.parent.insert(e,t),e.append(t),t},unwrap:function(){var e=this,t,n;for(t=e.firstChild;t;)n=t.next,e.insert(t,e,!0),t=n;e.remove()},remove:function(){var e=this,t=e.parent,n=e.next,r=e.prev;return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):r.next=n,t.lastChild===e?(t.lastChild=r,r&&(r.next=null)):n.prev=r,e.parent=e.next=e.prev=null),e},append:function(e){var t=this,n;return e.parent&&e.remove(),n=t.lastChild,n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e},insert:function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},getAll:function(t){var n=this,r,i=[];for(r=n.firstChild;r;r=e(r,n))r.name===t&&i.push(r);return i},empty:function(){var t=this,n,r,i;if(t.firstChild){for(n=[],i=t.firstChild;i;i=e(i,t))n.push(i);for(r=n.length;r--;)i=n[r],i.parent=i.firstChild=i.lastChild=i.next=i.prev=null}return t.firstChild=t.lastChild=null,t},isEmpty:function(t){var r=this,i=r.firstChild,o,a;if(i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(t[i.name])return!1;for(o=i.attributes.length;o--;)if(a=i.attributes[o].name,"name"===a||0===a.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!n.test(i.value))return!1}while(i=e(i,r));return!0},walk:function(t){return e(this,null,t)}},t.create=function(e,n){var i,o;if(i=new t(e,r[e]||1),n)for(o in n)i.attr(o,n[o]);return i},t}),r(B,[m],function(e){function t(e,t){return e?e.split(t||" "):[]}function n(e){function n(e,n,r){function i(e,t){var n={},r,i;for(r=0,i=e.length;i>r;r++)n[e[r]]=t||{};return n}var s,c,u,d=arguments;for(r=r||[],n=n||"","string"==typeof r&&(r=t(r)),c=3;c<d.length;c++)"string"==typeof d[c]&&(d[c]=t(d[c])),r.push.apply(r,d[c]);for(e=t(e),s=e.length;s--;)u=[].concat(l,t(n)),a[e[s]]={attributes:i(u),attributesOrder:u,children:i(r,o)}}function r(e,n){var r,i,o,s;for(e=t(e),r=e.length,n=t(n);r--;)for(i=a[e[r]],o=0,s=n.length;s>o;o++)i.attributes[n[o]]={},i.attributesOrder.push(n[o])}var a={},l,c,u,d,f,h;return i[e]?i[e]:(l=t("id accesskey class dir lang style tabindex title"),c=t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),u=t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),"html4"!=e&&(l.push.apply(l,t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")),c.push.apply(c,t("article aside details dialog figure header footer hgroup section nav")),u.push.apply(u,t("audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"))),"html5-strict"!=e&&(l.push("xml:lang"),h=t("acronym applet basefont big font strike tt"),u.push.apply(u,h),s(h,function(e){n(e,"",u)}),f=t("center dir isindex noframes"),c.push.apply(c,f),d=[].concat(c,u),s(f,function(e){n(e,"",d)})),d=d||[].concat(c,u),n("html","manifest","head body"),n("head","","base command link meta noscript script style title"),n("title hr noscript br"),n("base","href target"),n("link","href rel media hreflang type sizes hreflang"),n("meta","name http-equiv content charset"),n("style","media type scoped"),n("script","src async defer type charset"),n("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",d),n("address dt dd div caption","",d),n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",u),n("blockquote","cite",d),n("ol","reversed start type","li"),n("ul","","li"),n("li","value",d),n("dl","","dt dd"),n("a","href target rel media hreflang type",u),n("q","cite",u),n("ins del","cite datetime",d),n("img","src sizes srcset alt usemap ismap width height"),n("iframe","src name width height",d),n("embed","src type width height"),n("object","data type typemustmatch name usemap form width height",d,"param"),n("param","name value"),n("map","name",d,"area"),n("area","alt coords shape href target rel media hreflang type"),n("table","border","caption colgroup thead tfoot tbody tr"+("html4"==e?" col":"")),n("colgroup","span","col"),n("col","span"),n("tbody thead tfoot","","tr"),n("tr","","td th"),n("td","colspan rowspan headers",d),n("th","colspan rowspan headers scope abbr",d),n("form","accept-charset action autocomplete enctype method name novalidate target",d),n("fieldset","disabled form name",d,"legend"),n("label","form for",u),n("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),n("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"==e?d:u),n("select","disabled form multiple name required size","option optgroup"),n("optgroup","disabled label","option"),n("option","disabled label selected value"),n("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),n("menu","type label",d,"li"),n("noscript","",d),"html4"!=e&&(n("wbr"),n("ruby","",u,"rt rp"),n("figcaption","",d),n("mark rt rp summary bdi","",u),n("canvas","width height",d),n("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",d,"track source"),n("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",d,"track source"),n("picture","","img source"),n("source","src srcset type media sizes"),n("track","kind src srclang label default"),n("datalist","",u,"option"),n("article section nav aside header footer","",d),n("hgroup","","h1 h2 h3 h4 h5 h6"),n("figure","",d,"figcaption"),n("time","datetime",u),n("dialog","open",d),n("command","type label icon disabled checked radiogroup command"),n("output","for form name",u),n("progress","value max",u),n("meter","value min max low high optimum",u),n("details","open",d,"summary"),n("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!=e&&(r("script","language xml:space"),r("style","xml:space"),r("object","declare classid code codebase codetype archive standby align border hspace vspace"),r("embed","align name hspace vspace"),r("param","valuetype type"),r("a","charset name rev shape coords"),r("br","clear"),r("applet","codebase archive code object alt name width height align hspace vspace"),r("img","name longdesc align border hspace vspace"),r("iframe","longdesc frameborder marginwidth marginheight scrolling align"),r("font basefont","size color face"),r("input","usemap align"),r("select","onchange"),r("textarea"),r("h1 h2 h3 h4 h5 h6 div p legend caption","align"),r("ul","type compact"),r("li","type"),r("ol dl menu dir","compact"),r("pre","width xml:space"),r("hr","align noshade size width"),r("isindex","prompt"),r("table","summary width frame rules cellspacing cellpadding align bgcolor"),r("col","width align char charoff valign"),r("colgroup","width align char charoff valign"),r("thead","align char charoff valign"),r("tr","align char charoff valign bgcolor"),r("th","axis align char charoff valign nowrap bgcolor width height"),r("form","accept"),r("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),r("tfoot","align char charoff valign"),r("tbody","align char charoff valign"),r("area","nohref"),r("body","background bgcolor text link vlink alink")),"html4"!=e&&(r("input button select textarea","autofocus"),r("input textarea","placeholder"),r("a","download"),r("link script img","crossorigin"),r("iframe","sandbox seamless allowfullscreen")),s(t("a form meter progress dfn"),function(e){a[e]&&delete a[e].children[e]}),delete a.caption.children.table,delete a.script,i[e]=a,a)}function r(e,t){var n;return e&&(n={},"string"==typeof e&&(e={"*":e}),s(e,function(e,r){n[r]=n[r.toUpperCase()]="map"==t?a(e,/[, ]/):c(e,/[, ]/)})),n}var i={},o={},a=e.makeMap,s=e.each,l=e.extend,c=e.explode,u=e.inArray;return function(e){function o(t,n,r){var o=e[t];return o?o=a(o,/[, ]/,a(o.toUpperCase(),/[, ]/)):(o=i[t],o||(o=a(n," ",a(n.toUpperCase()," ")),o=l(o,r),i[t]=o)),o}function d(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}function f(e){var n,r,i,o,s,l,c,f,h,p,m,g,v,b,x,w,E,N,_,S=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,k=/^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,T=/[*?+]/;if(e)for(e=t(e,","),y["@"]&&(w=y["@"].attributes,E=y["@"].attributesOrder),n=0,r=e.length;r>n;n++)if(s=S.exec(e[n])){if(b=s[1],h=s[2],x=s[3],f=s[5],g={},v=[],l={attributes:g,attributesOrder:v},"#"===b&&(l.paddEmpty=!0),"-"===b&&(l.removeEmpty=!0),"!"===s[4]&&(l.removeEmptyAttrs=!0),w){for(N in w)g[N]=w[N];v.push.apply(v,E)}if(f)for(f=t(f,"|"),i=0,o=f.length;o>i;i++)if(s=k.exec(f[i])){if(c={},m=s[1],p=s[2].replace(/::/g,":"),b=s[3],_=s[4],"!"===m&&(l.attributesRequired=l.attributesRequired||[],l.attributesRequired.push(p),c.required=!0),"-"===m){delete g[p],v.splice(u(v,p),1);continue}b&&("="===b&&(l.attributesDefault=l.attributesDefault||[],l.attributesDefault.push({name:p,value:_}),c.defaultValue=_),":"===b&&(l.attributesForced=l.attributesForced||[],l.attributesForced.push({name:p,value:_}),c.forcedValue=_),"<"===b&&(c.validValues=a(_,"?"))),T.test(p)?(l.attributePatterns=l.attributePatterns||[],c.pattern=d(p),l.attributePatterns.push(c)):(g[p]||v.push(p),g[p]=c)}w||"@"!=h||(w=g,E=v),x&&(l.outputName=h,y[x]=l),T.test(h)?(l.pattern=d(h),C.push(l)):y[h]=l}}function h(e){y={},C=[],f(e),s(E,function(e,t){b[t]=e.children})}function p(e){var n=/^(~)?(.+)$/;e&&(i.text_block_elements=i.block_elements=null,s(t(e,","),function(e){var t=n.exec(e),r="~"===t[1],i=r?"span":"div",o=t[2];if(b[o]=b[i],L[o]=i,r||(R[o.toUpperCase()]={},R[o]={}),!y[o]){var a=y[i];a=l({},a),delete a.removeEmptyAttrs,delete a.removeEmpty,y[o]=a}s(b,function(e,t){e[i]&&(b[t]=e=l({},b[t]),e[o]=e[i])})}))}function m(n){var r=/^([+\-]?)(\w+)\[([^\]]+)\]$/;i[e.schema]=null,n&&s(t(n,","),function(e){var n=r.exec(e),i,o;n&&(o=n[1],i=o?b[n[2]]:b[n[2]]={"#comment":{}},i=b[n[2]],s(t(n[3],"|"),function(e){"-"===o?delete i[e]:i[e]={}}))})}function g(e){var t=y[e],n;if(t)return t;for(n=C.length;n--;)if(t=C[n],t.pattern.test(e))return t}var v=this,y={},b={},C=[],x,w,E,N,_,S,k,T,R,A,B,D,M,L={},P={};e=e||{},E=n(e.schema),e.verify_html===!1&&(e.valid_elements="*[*]"),
x=r(e.valid_styles),w=r(e.invalid_styles,"map"),T=r(e.valid_classes,"map"),N=o("whitespace_elements","pre script noscript style textarea video audio iframe object"),_=o("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),S=o("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),k=o("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),A=o("non_empty_elements","td th iframe video audio object script",S),B=o("move_caret_before_on_enter_elements","table",A),D=o("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),R=o("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption",D),M=o("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),s((e.special||"script noscript style textarea").split(" "),function(e){P[e]=new RegExp("</"+e+"[^>]*>","gi")}),e.valid_elements?h(e.valid_elements):(s(E,function(e,t){y[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},b[t]=e.children}),"html5"!=e.schema&&s(t("strong/b em/i"),function(e){e=t(e,"/"),y[e[1]].outputName=e[0]}),y.img.attributesDefault=[{name:"alt",value:""}],s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){y[e]&&(y[e].removeEmpty=!0)}),s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"),function(e){y[e].paddEmpty=!0}),s(t("span"),function(e){y[e].removeEmptyAttrs=!0})),p(e.custom_elements),m(e.valid_children),f(e.extended_valid_elements),m("+ol[ul|ol],+ul[ul|ol]"),e.invalid_elements&&s(c(e.invalid_elements),function(e){y[e]&&delete y[e]}),g("span")||f("span[!data-mce-type|*]"),v.children=b,v.getValidStyles=function(){return x},v.getInvalidStyles=function(){return w},v.getValidClasses=function(){return T},v.getBoolAttrs=function(){return k},v.getBlockElements=function(){return R},v.getTextBlockElements=function(){return D},v.getTextInlineElements=function(){return M},v.getShortEndedElements=function(){return S},v.getSelfClosingElements=function(){return _},v.getNonEmptyElements=function(){return A},v.getMoveCaretBeforeOnEnterElements=function(){return B},v.getWhiteSpaceElements=function(){return N},v.getSpecialElements=function(){return P},v.isValidChild=function(e,t){var n=b[e];return!(!n||!n[t])},v.isValid=function(e,t){var n,r,i=g(e);if(i){if(!t)return!0;if(i.attributes[t])return!0;if(n=i.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},v.getElementRule=g,v.getCustomElements=function(){return L},v.addValidElements=f,v.setValidElements=h,v.addCustomElements=p,v.addValidChildren=m,v.elements=y}}),r(D,[B,C,m],function(e,t,n){function r(e,t,n){var r=1,i,o,a,s;for(s=e.getShortEndedElements(),a=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g,a.lastIndex=i=n;o=a.exec(t);){if(i=a.lastIndex,"/"===o[1])r--;else if(!o[1]){if(o[2]in s)continue;r++}if(0===r)break}return i}function i(i,a){function s(){}var l=this;i=i||{},l.schema=a=a||new e,i.fix_self_closing!==!1&&(i.fix_self_closing=!0),o("comment cdata text start end pi doctype".split(" "),function(e){e&&(l[e]=i[e]||s)}),l.parse=function(e){function o(e){var t,n;for(t=h.length;t--&&h[t].name!==e;);if(t>=0){for(n=h.length-1;n>=t;n--)e=h[n],e.valid&&l.end(e.name);h.length=t}}function s(e,t,n,r,o){var a,s,l=/[\s\u0000-\u001F]+/g;if(t=t.toLowerCase(),n=t in x?t:z(n||r||o||""),E&&!y&&0!==t.indexOf("data-")){if(a=T[t],!a&&R){for(s=R.length;s--&&(a=R[s],!a.pattern.test(t)););-1===s&&(a=null)}if(!a)return;if(a.validValues&&!(n in a.validValues))return}if(V[t]&&!i.allow_script_urls){var c=n.replace(l,"");try{c=decodeURIComponent(c)}catch(u){c=unescape(c)}if(U.test(c))return;if(!i.allow_html_data_urls&&$.test(c)&&!/^data:image\//i.test(c))return}p.map[t]=n,p.push({name:t,value:n})}var l=this,c,u=0,d,f,h=[],p,m,g,v,y,b,C,x,w,E,N,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F=0,z=t.decode,W,V=n.makeMap("src,href,data,background,formaction,poster"),U=/((java|vb)script|mhtml):/i,$=/^data:/i;for(P=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),H=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,C=a.getShortEndedElements(),L=i.self_closing_elements||a.getSelfClosingElements(),x=a.getBoolAttrs(),E=i.validate,b=i.remove_internals,W=i.fix_self_closing,O=a.getSpecialElements();c=P.exec(e);){if(u<c.index&&l.text(z(e.substr(u,c.index-u))),d=c[6])d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),o(d);else if(d=c[7]){if(d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),w=d in C,W&&L[d]&&h.length>0&&h[h.length-1].name===d&&o(d),!E||(N=a.getElementRule(d))){if(_=!0,E&&(T=N.attributes,R=N.attributePatterns),(k=c[8])?(y=-1!==k.indexOf("data-mce-type"),y&&b&&(_=!1),p=[],p.map={},k.replace(H,s)):(p=[],p.map={}),E&&!y){if(A=N.attributesRequired,B=N.attributesDefault,D=N.attributesForced,M=N.removeEmptyAttrs,M&&!p.length&&(_=!1),D)for(m=D.length;m--;)S=D[m],v=S.name,I=S.value,"{$uid}"===I&&(I="mce_"+F++),p.map[v]=I,p.push({name:v,value:I});if(B)for(m=B.length;m--;)S=B[m],v=S.name,v in p.map||(I=S.value,"{$uid}"===I&&(I="mce_"+F++),p.map[v]=I,p.push({name:v,value:I}));if(A){for(m=A.length;m--&&!(A[m]in p.map););-1===m&&(_=!1)}if(S=p.map["data-mce-bogus"]){if("all"===S){u=r(a,e,P.lastIndex),P.lastIndex=u;continue}_=!1}}_&&l.start(d,p,w)}else _=!1;if(f=O[d]){f.lastIndex=u=c.index+c[0].length,(c=f.exec(e))?(_&&(g=e.substr(u,c.index-u)),u=c.index+c[0].length):(g=e.substr(u),u=e.length),_&&(g.length>0&&l.text(g,!0),l.end(d)),P.lastIndex=u;continue}w||(k&&k.indexOf("/")==k.length-1?_&&l.end(d):h.push({name:d,valid:_}))}else(d=c[1])?(">"===d.charAt(0)&&(d=" "+d),i.allow_conditional_comments||"[if"!==d.substr(0,3)||(d=" "+d),l.comment(d)):(d=c[2])?l.cdata(d):(d=c[3])?l.doctype(d):(d=c[4])&&l.pi(d,c[5]);u=c.index+c[0].length}for(u<e.length&&l.text(z(e.substr(u))),m=h.length-1;m>=0;m--)d=h[m],d.valid&&l.end(d.name)}}var o=n.each;return i.findEndTag=r,i}),r(M,[A,B,D,m],function(e,t,n,r){var i=r.makeMap,o=r.each,a=r.explode,s=r.extend;return function(r,l){function c(t){var n,r,o,a,s,c,d,f,h,p,m,g,v,y,b;for(m=i("tr,td,th,tbody,thead,tfoot,table"),p=l.getNonEmptyElements(),g=l.getTextBlockElements(),v=l.getSpecialElements(),n=0;n<t.length;n++)if(r=t[n],r.parent&&!r.fixed)if(g[r.name]&&"li"==r.parent.name){for(y=r.next;y&&g[y.name];)y.name="li",y.fixed=!0,r.parent.insert(y,r.parent),y=y.next;r.unwrap(r)}else{for(a=[r],o=r.parent;o&&!l.isValidChild(o.name,r.name)&&!m[o.name];o=o.parent)a.push(o);if(o&&a.length>1){for(a.reverse(),s=c=u.filterNode(a[0].clone()),h=0;h<a.length-1;h++){for(l.isValidChild(c.name,a[h].name)?(d=u.filterNode(a[h].clone()),c.append(d)):d=c,f=a[h].firstChild;f&&f!=a[h+1];)b=f.next,d.append(f),f=b;c=d}s.isEmpty(p)?o.insert(r,a[0],!0):(o.insert(s,a[0],!0),o.insert(r,s)),o=a[0],(o.isEmpty(p)||o.firstChild===o.lastChild&&"br"===o.firstChild.name)&&o.empty().remove()}else if(r.parent){if("li"===r.name){if(y=r.prev,y&&("ul"===y.name||"ul"===y.name)){y.append(r);continue}if(y=r.next,y&&("ul"===y.name||"ul"===y.name)){y.insert(r,y.firstChild,!0);continue}r.wrap(u.filterNode(new e("ul",1)));continue}l.isValidChild(r.parent.name,"div")&&l.isValidChild("div",r.name)?r.wrap(u.filterNode(new e("div",1))):v[r.name]?r.empty().remove():r.unwrap()}}}var u=this,d={},f=[],h={},p={};r=r||{},r.validate="validate"in r?r.validate:!0,r.root_name=r.root_name||"body",u.schema=l=l||new t,u.filterNode=function(e){var t,n,r;n in d&&(r=h[n],r?r.push(e):h[n]=[e]),t=f.length;for(;t--;)n=f[t].name,n in e.attributes.map&&(r=p[n],r?r.push(e):p[n]=[e]);return e},u.addNodeFilter=function(e,t){o(a(e),function(e){var n=d[e];n||(d[e]=n=[]),n.push(t)})},u.addAttributeFilter=function(e,t){o(a(e),function(e){var n;for(n=0;n<f.length;n++)if(f[n].name===e)return void f[n].callbacks.push(t);f.push({name:e,callbacks:[t]})})},u.parse=function(t,o){function a(){function e(e){e&&(t=e.firstChild,t&&3==t.type&&(t.value=t.value.replace(R,"")),t=e.lastChild,t&&3==t.type&&(t.value=t.value.replace(D,"")))}var t=y.firstChild,n,i;if(l.isValidChild(y.name,I.toLowerCase())){for(;t;)n=t.next,3==t.type||1==t.type&&"p"!==t.name&&!T[t.name]&&!t.attr("data-mce-type")?i?i.append(t):(i=u(I,1),i.attr(r.forced_root_block_attrs),y.insert(i,t),i.append(t)):(e(i),i=null),t=n;e(i)}}function u(t,n){var r=new e(t,n),i;return t in d&&(i=h[t],i?i.push(r):h[t]=[r]),r}function m(e){var t,n,r,i,o=l.getBlockElements();for(t=e.prev;t&&3===t.type;){if(r=t.value.replace(D,""),r.length>0)return void(t.value=r);if(n=t.next){if(3==n.type&&n.value.length){t=t.prev;continue}if(!o[n.name]&&"script"!=n.name&&"style"!=n.name){t=t.prev;continue}}i=t.prev,t.remove(),t=i}}function g(e){var t,n={};for(t in e)"li"!==t&&"p"!=t&&(n[t]=e[t]);return n}var v,y,b,C,x,w,E,N,_,S,k,T,R,A=[],B,D,M,L,P,H,O,I;if(o=o||{},h={},p={},T=s(i("script,style,head,html,body,title,meta,param"),l.getBlockElements()),O=l.getNonEmptyElements(),H=l.children,k=r.validate,I="forced_root_block"in o?o.forced_root_block:r.forced_root_block,P=l.getWhiteSpaceElements(),R=/^[ \t\r\n]+/,D=/[ \t\r\n]+$/,M=/[ \t\r\n]+/g,L=/^[ \t\r\n]+$/,v=new n({validate:k,allow_script_urls:r.allow_script_urls,allow_conditional_comments:r.allow_conditional_comments,self_closing_elements:g(l.getSelfClosingElements()),cdata:function(e){b.append(u("#cdata",4)).value=e},text:function(e,t){var n;B||(e=e.replace(M," "),b.lastChild&&T[b.lastChild.name]&&(e=e.replace(R,""))),0!==e.length&&(n=u("#text",3),n.raw=!!t,b.append(n).value=e)},comment:function(e){b.append(u("#comment",8)).value=e},pi:function(e,t){b.append(u(e,7)).value=t,m(b)},doctype:function(e){var t;t=b.append(u("#doctype",10)),t.value=e,m(b)},start:function(e,t,n){var r,i,o,a,s;if(o=k?l.getElementRule(e):{}){for(r=u(o.outputName||e,1),r.attributes=t,r.shortEnded=n,b.append(r),s=H[b.name],s&&H[r.name]&&!s[r.name]&&A.push(r),i=f.length;i--;)a=f[i].name,a in t.map&&(_=p[a],_?_.push(r):p[a]=[r]);T[e]&&m(r),n||(b=r),!B&&P[e]&&(B=!0)}},end:function(t){var n,r,i,o,a;if(r=k?l.getElementRule(t):{}){if(T[t]&&!B){if(n=b.firstChild,n&&3===n.type)if(i=n.value.replace(R,""),i.length>0)n.value=i,n=n.next;else for(o=n.next,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.next,(0===i.length||L.test(i))&&(n.remove(),n=o),n=o;if(n=b.lastChild,n&&3===n.type)if(i=n.value.replace(D,""),i.length>0)n.value=i,n=n.prev;else for(o=n.prev,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.prev,(0===i.length||L.test(i))&&(n.remove(),n=o),n=o}if(B&&P[t]&&(B=!1),(r.removeEmpty||r.paddEmpty)&&b.isEmpty(O))if(r.paddEmpty)b.empty().append(new e("#text","3")).value="\xa0";else if(!b.attributes.map.name&&!b.attributes.map.id)return a=b.parent,T[b.name]?b.empty().remove():b.unwrap(),void(b=a);b=b.parent}}},l),y=b=new e(o.context||r.root_name,11),v.parse(t),k&&A.length&&(o.context?o.invalid=!0:c(A)),I&&("body"==y.name||o.isRootContent)&&a(),!o.invalid){for(S in h){for(_=d[S],C=h[S],E=C.length;E--;)C[E].parent||C.splice(E,1);for(x=0,w=_.length;w>x;x++)_[x](C,S,o)}for(x=0,w=f.length;w>x;x++)if(_=f[x],_.name in p){for(C=p[_.name],E=C.length;E--;)C[E].parent||C.splice(E,1);for(E=0,N=_.callbacks.length;N>E;E++)_.callbacks[E](C,_.name,o)}}return y},r.remove_trailing_brs&&u.addNodeFilter("br",function(t){var n,r=t.length,i,o=s({},l.getBlockElements()),a=l.getNonEmptyElements(),c,u,d,f,h,p;for(o.body=1,n=0;r>n;n++)if(i=t[n],c=i.parent,o[i.parent.name]&&i===c.lastChild){for(d=i.prev;d;){if(f=d.name,"span"!==f||"bookmark"!==d.attr("data-mce-type")){if("br"!==f)break;if("br"===f){i=null;break}}d=d.prev}i&&(i.remove(),c.isEmpty(a)&&(h=l.getElementRule(c.name),h&&(h.removeEmpty?c.remove():h.paddEmpty&&(c.empty().append(new e("#text",3)).value="\xa0"))))}else{for(u=i;c&&c.firstChild===u&&c.lastChild===u&&(u=c,!o[c.name]);)c=c.parent;u===c&&(p=new e("#text",3),p.value="\xa0",i.replace(p))}}),r.allow_html_in_named_anchor||u.addAttributeFilter("id,name",function(e){for(var t=e.length,n,r,i,o;t--;)if(o=e[t],"a"===o.name&&o.firstChild&&!o.attr("href")){i=o.parent,n=o.lastChild;do r=n.prev,i.insert(n,o),n=r;while(n)}}),r.validate&&l.getValidClasses()&&u.addAttributeFilter("class",function(e){for(var t=e.length,n,r,i,o,a,s=l.getValidClasses(),c,u;t--;){for(n=e[t],r=n.attr("class").split(" "),a="",i=0;i<r.length;i++)o=r[i],u=!1,c=s["*"],c&&c[o]&&(u=!0),c=s[n.name],!u&&c&&c[o]&&(u=!0),u&&(a&&(a+=" "),a+=o);a.length||(a=null),n.attr("class",a)}})}}),r(L,[C,m],function(e,t){var n=t.makeMap;return function(t){var r=[],i,o,a,s,l;return t=t||{},i=t.indent,o=n(t.indent_before||""),a=n(t.indent_after||""),s=e.getEncodeFunc(t.entity_encoding||"raw",t.entities),l="html"==t.element_format,{start:function(e,t,n){var c,u,d,f;if(i&&o[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n")),r.push("<",e),t)for(c=0,u=t.length;u>c;c++)d=t[c],r.push(" ",d.name,'="',s(d.value,!0),'"');!n||l?r[r.length]=">":r[r.length]=" />",n&&i&&a[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n"))},end:function(e){var t;r.push("</",e,">"),i&&a[e]&&r.length>0&&(t=r[r.length-1],t.length>0&&"\n"!==t&&r.push("\n"))},text:function(e,t){e.length>0&&(r[r.length]=t?e:s(e))},cdata:function(e){r.push("<![CDATA[",e,"]]>")},comment:function(e){r.push("<!--",e,"-->")},pi:function(e,t){t?r.push("<?",e," ",s(t),"?>"):r.push("<?",e,"?>"),i&&r.push("\n")},doctype:function(e){r.push("<!DOCTYPE",e,">",i?"\n":"")},reset:function(){r.length=0},getContent:function(){return r.join("").replace(/\n$/,"")}}}}),r(P,[L,B],function(e,t){return function(n,r){var i=this,o=new e(n);n=n||{},n.validate="validate"in n?n.validate:!0,i.schema=r=r||new t,i.writer=o,i.serialize=function(e){function t(e){var n=i[e.type],s,l,c,u,d,f,h,p,m;if(n)n(e);else{if(s=e.name,l=e.shortEnded,c=e.attributes,a&&c&&c.length>1&&(f=[],f.map={},m=r.getElementRule(e.name))){for(h=0,p=m.attributesOrder.length;p>h;h++)u=m.attributesOrder[h],u in c.map&&(d=c.map[u],f.map[u]=d,f.push({name:u,value:d}));for(h=0,p=c.length;p>h;h++)u=c[h].name,u in f.map||(d=c.map[u],f.map[u]=d,f.push({name:u,value:d}));c=f}if(o.start(e.name,c,l),!l){if(e=e.firstChild)do t(e);while(e=e.next);o.end(s)}}}var i,a;return a=n.validate,i={3:function(e){o.text(e.value,e.raw)},8:function(e){o.comment(e.value)},7:function(e){o.pi(e.name,e.value)},10:function(e){o.doctype(e.value)},4:function(e){o.cdata(e.value)},11:function(e){if(e=e.firstChild)do t(e);while(e=e.next)}},o.reset(),1!=e.type||n.inner?i[11](e):t(e),o.getContent()}}}),r(H,[w,M,D,C,P,A,B,h,m,S],function(e,t,n,r,i,o,a,s,l,c){function u(e){function t(e){return e&&"br"===e.name}var n,r;n=e.lastChild,t(n)&&(r=n.prev,t(r)&&(n.remove(),r.remove()))}var d=l.each,f=l.trim,h=e.DOM,p=new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>",'\\s?data-mce-selected="[^"]+"'].join("|"),"gi");return function(e,o){function l(){var e=o.getBody().innerHTML,t=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,r,i,a,s,l,u=o.schema;for(e=c.trim(e.replace(p,"")),l=u.getShortEndedElements();s=t.exec(e);)i=t.lastIndex,a=s[0].length,r=l[s[1]]?i:n.findEndTag(u,e,i),e=e.substring(0,i-a)+e.substring(r),t.lastIndex=i-a;return f(e)}var m,g,v;return o&&(m=o.dom,g=o.schema),m=m||h,g=g||new a(e),e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs="remove_trailing_brs"in e?e.remove_trailing_brs:!0,v=new t(e,g),v.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n=e.length,r;n--;)r=e[n],r.attr("tabindex",r.attributes.map["data-mce-tabindex"]),r.attr(t,null)}),v.addAttributeFilter("src,href,style",function(t,n){for(var r=t.length,i,o,a="data-mce-"+n,s=e.url_converter,l=e.url_converter_scope,c;r--;)i=t[r],o=i.attributes.map[a],o!==c?(i.attr(n,o.length>0?o:null),i.attr(a,null)):(o=i.attributes.map[n],"style"===n?o=m.serializeStyle(m.parseStyle(o),i.name):s&&(o=s.call(l,o,n,i.name)),i.attr(n,o.length>0?o:null))}),v.addAttributeFilter("class",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("class"),r&&(r=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",r.length>0?r:null))}),v.addAttributeFilter("data-mce-type",function(e,t,n){for(var r=e.length,i;r--;)i=e[r],"bookmark"!==i.attributes.map["data-mce-type"]||n.cleanup||i.remove()}),v.addNodeFilter("noscript",function(e){for(var t=e.length,n;t--;)n=e[t].firstChild,n&&(n.value=r.decode(n.value))}),v.addNodeFilter("script,style",function(e,t){function n(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")}for(var r=e.length,i,o,a;r--;)i=e[r],o=i.firstChild?i.firstChild.value:"","script"===t?(a=i.attr("type"),a&&i.attr("type","mce-no/type"==a?null:a.replace(/^mce\-/,"")),o.length>0&&(i.firstChild.value="// <![CDATA[\n"+n(o)+"\n// ]]>")):o.length>0&&(i.firstChild.value="<!--\n"+n(o)+"\n-->")}),v.addNodeFilter("#comment",function(e){for(var t=e.length,n;t--;)n=e[t],0===n.value.indexOf("[CDATA[")?(n.name="#cdata",n.type=4,n.value=n.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===n.value.indexOf("mce:protected ")&&(n.name="#text",n.type=3,n.raw=!0,n.value=unescape(n.value).substr(14))}),v.addNodeFilter("xml:namespace,input",function(e,t){for(var n=e.length,r;n--;)r=e[n],7===r.type?r.remove():1===r.type&&("input"!==t||"type"in r.attributes.map||r.attr("type","text"))}),e.fix_list_elements&&v.addNodeFilter("ul,ol",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.parent,("ul"===r.name||"ol"===r.name)&&n.prev&&"li"===n.prev.name&&n.prev.append(n)}),v.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),{schema:g,addNodeFilter:v.addNodeFilter,addAttributeFilter:v.addAttributeFilter,serialize:function(t,n){var r=this,o,a,l,h,p,y;return s.ie&&m.select("script,style,select,map").length>0?(p=t.innerHTML,t=t.cloneNode(!1),m.setHTML(t,p)):t=t.cloneNode(!0),o=t.ownerDocument.implementation,o.createHTMLDocument&&(a=o.createHTMLDocument(""),d("BODY"==t.nodeName?t.childNodes:[t],function(e){a.body.appendChild(a.importNode(e,!0))}),t="BODY"!=t.nodeName?a.body.firstChild:a.body,l=m.doc,m.doc=a),n=n||{},n.format=n.format||"html",n.selection&&(n.forced_root_block=""),n.no_events||(n.node=t,r.onPreProcess(n)),y=v.parse(f(n.getInner?t.innerHTML:m.getOuterHTML(t)),n),u(y),h=new i(e,g),n.content=h.serialize(y),n.cleanup||(n.content=c.trim(n.content),n.content=n.content.replace(/\uFEFF/g,"")),n.no_events||r.onPostProcess(n),l&&(m.doc=l),n.node=null,n.content},addRules:function(e){g.addValidElements(e)},setRules:function(e){g.setValidElements(e)},onPreProcess:function(e){o&&o.fire("PreProcess",e)},onPostProcess:function(e){o&&o.fire("PostProcess",e)},getTrimmedContent:l}}}),r(O,[],function(){function e(e){function t(t,n){var r,i=0,o,a,s,l,c,u,d=-1,f;if(r=t.duplicate(),r.collapse(n),f=r.parentElement(),f.ownerDocument===e.dom.doc){for(;"false"===f.contentEditable;)f=f.parentNode;if(!f.hasChildNodes())return{node:f,inside:1};for(s=f.children,o=s.length-1;o>=i;)if(u=Math.floor((i+o)/2),l=s[u],r.moveToElementText(l),d=r.compareEndPoints(n?"StartToStart":"EndToEnd",t),d>0)o=u-1;else{if(!(0>d))return{node:l};i=u+1}if(0>d)for(l?r.collapse(!1):(r.moveToElementText(f),r.collapse(!0),l=f,a=!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",1)&&f==r.parentElement();)c++;else for(r.collapse(!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",-1)&&f==r.parentElement();)c++;return{node:l,position:d,offset:c,inside:a}}}function n(){function n(e){var n=t(o,e),r,i,s=0,l,c,u;if(r=n.node,i=n.offset,n.inside&&!r.hasChildNodes())return void a[e?"setStart":"setEnd"](r,0);if(i===c)return void a[e?"setStartBefore":"setEndAfter"](r);if(n.position<0){if(l=n.inside?r.firstChild:r.nextSibling,!l)return void a[e?"setStartAfter":"setEndAfter"](r);if(!i)return void(3==l.nodeType?a[e?"setStart":"setEnd"](l,0):a[e?"setStartBefore":"setEndBefore"](l));for(;l;){if(3==l.nodeType&&(u=l.nodeValue,s+=u.length,s>=i)){r=l,s-=i,s=u.length-s;break}l=l.nextSibling}}else{if(l=r.previousSibling,!l)return a[e?"setStartBefore":"setEndBefore"](r);if(!i)return void(3==r.nodeType?a[e?"setStart":"setEnd"](l,r.nodeValue.length):a[e?"setStartAfter":"setEndAfter"](l));for(;l;){if(3==l.nodeType&&(s+=l.nodeValue.length,s>=i)){r=l,s-=i;break}l=l.previousSibling}}a[e?"setStart":"setEnd"](r,s)}var o=e.getRng(),a=i.createRng(),s,l,c,u,d;if(s=o.item?o.item(0):o.parentElement(),s.ownerDocument!=i.doc)return a;if(l=e.isCollapsed(),o.item)return a.setStart(s.parentNode,i.nodeIndex(s)),a.setEnd(a.startContainer,a.startOffset+1),a;try{n(!0),l||n()}catch(f){if(-2147024809!=f.number)throw f;d=r.getBookmark(2),c=o.duplicate(),c.collapse(!0),s=c.parentElement(),l||(c=o.duplicate(),c.collapse(!1),u=c.parentElement(),u.innerHTML=u.innerHTML),s.innerHTML=s.innerHTML,r.moveToBookmark(d),o=e.getRng(),n(!0),l||n()}return a}var r=this,i=e.dom,o=!1;this.getBookmark=function(n){function r(e){var t,n,r,o,a=[];for(t=e.parentNode,n=i.getRoot().parentNode;t!=n&&9!==t.nodeType;){for(r=t.children,o=r.length;o--;)if(e===r[o]){a.push(o);break}e=t,t=t.parentNode}return a}function o(e){var n;return n=t(a,e),n?{position:n.position,offset:n.offset,indexes:r(n.node),inside:n.inside}:void 0}var a=e.getRng(),s={};return 2===n&&(a.item?s.start={ctrl:!0,indexes:r(a.item(0))}:(s.start=o(!0),e.isCollapsed()||(s.end=o()))),s},this.moveToBookmark=function(e){function t(e){var t,n,r,o;for(t=i.getRoot(),n=e.length-1;n>=0;n--)o=t.children,r=e[n],r<=o.length-1&&(t=o[r]);return t}function n(n){var i=e[n?"start":"end"],a,s,l,c;i&&(a=i.position>0,s=o.createTextRange(),s.moveToElementText(t(i.indexes)),c=i.offset,c!==l?(s.collapse(i.inside||a),s.moveStart("character",a?-c:c)):s.collapse(n),r.setEndPoint(n?"StartToStart":"EndToStart",s),n&&r.collapse(!0))}var r,o=i.doc.body;e.start&&(e.start.ctrl?(r=o.createControlRange(),r.addElement(t(e.start.indexes)),r.select()):(r=o.createTextRange(),n(!0),n(),r.select()))},this.addRange=function(t){function n(e){var t,n,a,d,p;a=i.create("a"),t=e?s:c,n=e?l:u,d=r.duplicate(),(t==f||t==f.documentElement)&&(t=h,n=0),3==t.nodeType?(t.parentNode.insertBefore(a,t),d.moveToElementText(a),d.moveStart("character",n),i.remove(a),r.setEndPoint(e?"StartToStart":"EndToEnd",d)):(p=t.childNodes,p.length?(n>=p.length?i.insertAfter(a,p[p.length-1]):t.insertBefore(a,p[n]),d.moveToElementText(a)):t.canHaveHTML&&(t.innerHTML="<span>&#xFEFF;</span>",a=t.firstChild,d.moveToElementText(a),d.collapse(o)),r.setEndPoint(e?"StartToStart":"EndToEnd",d),i.remove(a))}var r,a,s,l,c,u,d,f=e.dom.doc,h=f.body,p,m;if(s=t.startContainer,l=t.startOffset,c=t.endContainer,u=t.endOffset,r=h.createTextRange(),s==c&&1==s.nodeType){if(l==u&&!s.hasChildNodes()){if(s.canHaveHTML)return d=s.previousSibling,d&&!d.hasChildNodes()&&i.isBlock(d)?d.innerHTML="&#xFEFF;":d=null,s.innerHTML="<span>&#xFEFF;</span><span>&#xFEFF;</span>",r.moveToElementText(s.lastChild),r.select(),i.doc.selection.clear(),s.innerHTML="",void(d&&(d.innerHTML=""));l=i.nodeIndex(s),s=s.parentNode}if(l==u-1)try{if(m=s.childNodes[l],a=h.createControlRange(),a.addElement(m),a.select(),p=e.getRng(),p.item&&m===p.item(0))return}catch(g){}}n(!0),n(),r.select()},this.getRangeAt=n}return e}),r(I,[h],function(e){return{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(t){return e.mac?t.metaKey:t.ctrlKey&&!t.altKey}}}),r(F,[I,m,u,h,_],function(e,t,n,r,i){var o=i.isContentEditableFalse;return function(i,a){function s(e){var t=a.settings.object_resizing;return t===!1||r.iOS?!1:("string"!=typeof t&&(t="table,img,div"),"false"===e.getAttribute("data-mce-resize")?!1:e==a.getBody()?!1:a.dom.is(e,t))}function l(t){var n,r,i,o,s;n=t.screenX-B,r=t.screenY-D,F=n*R[2]+P,z=r*R[3]+H,F=5>F?5:F,z=5>z?5:z,i="IMG"==_.nodeName&&a.settings.resize_img_proportional!==!1?!e.modifierPressed(t):e.modifierPressed(t)||"IMG"==_.nodeName&&R[2]*R[3]!==0,i&&($(n)>$(r)?(z=q(F*O),F=q(z/O)):(F=q(z/O),z=q(F*O))),E.setStyles(S,{width:F,height:z}),o=R.startPos.x+n,s=R.startPos.y+r,o=o>0?o:0,s=s>0?s:0,E.setStyles(k,{left:o,top:s,display:"block"}),k.innerHTML=F+" &times; "+z,R[2]<0&&S.clientWidth<=F&&E.setStyle(S,"left",M+(P-F)),R[3]<0&&S.clientHeight<=z&&E.setStyle(S,"top",L+(H-z)),n=j.scrollWidth-Y,r=j.scrollHeight-X,n+r!==0&&E.setStyles(k,{left:o-n,top:s-r}),I||(a.fire("ObjectResizeStart",{target:_,width:P,height:H}),I=!0)}function c(){function e(e,t){t&&(_.style[e]||!a.schema.isValid(_.nodeName.toLowerCase(),e)?E.setStyle(_,e,t):E.setAttrib(_,e,t))}I=!1,e("width",F),e("height",z),E.unbind(W,"mousemove",l),E.unbind(W,"mouseup",c),V!=W&&(E.unbind(V,"mousemove",l),E.unbind(V,"mouseup",c)),E.remove(S),E.remove(k),U&&"TABLE"!=_.nodeName||u(_),a.fire("ObjectResized",{target:_,width:F,height:z}),E.setAttrib(_,"style",E.getAttrib(_,"style")),a.nodeChanged()}function u(e,t,n){var i,o,u,f,h;d(),b(),i=E.getPos(e,j),M=i.x,L=i.y,h=e.getBoundingClientRect(),o=h.width||h.right-h.left,u=h.height||h.bottom-h.top,_!=e&&(y(),_=e,F=z=0),f=a.fire("ObjectSelected",{target:e}),s(e)&&!f.isDefaultPrevented()?N(T,function(e,i){function a(t){B=t.screenX,D=t.screenY,P=_.clientWidth,H=_.clientHeight,O=H/P,R=e,e.startPos={x:o*e[0]+M,y:u*e[1]+L},Y=j.scrollWidth,X=j.scrollHeight,S=_.cloneNode(!0),E.addClass(S,"mce-clonedresizable"),E.setAttrib(S,"data-mce-bogus","all"),S.contentEditable=!1,S.unSelectabe=!0,E.setStyles(S,{left:M,top:L,margin:0}),S.removeAttribute("data-mce-selected"),j.appendChild(S),E.bind(W,"mousemove",l),E.bind(W,"mouseup",c),V!=W&&(E.bind(V,"mousemove",l),E.bind(V,"mouseup",c)),k=E.add(j,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},P+" &times; "+H)}var s;return t?void(i==t&&a(n)):(s=E.get("mceResizeHandle"+i),s&&E.remove(s),s=E.add(j,"div",{id:"mceResizeHandle"+i,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+i+"-resize; margin:0; padding:0"}),r.ie&&(s.contentEditable=!1),E.bind(s,"mousedown",function(e){e.stopImmediatePropagation(),e.preventDefault(),a(e)}),e.elm=s,void E.setStyles(s,{left:o*e[0]+M-s.offsetWidth/2,top:u*e[1]+L-s.offsetHeight/2}))}):d(),_.setAttribute("data-mce-selected","1")}function d(){var e,t;b(),_&&_.removeAttribute("data-mce-selected");for(e in T)t=E.get("mceResizeHandle"+e),t&&(E.unbind(t),E.remove(t))}function f(e){function t(e,t){if(e)do if(e===t)return!0;while(e=e.parentNode)}var n,r;if(!I&&!a.removed)return N(E.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),r="mousedown"==e.type?e.target:i.getNode(),r=E.$(r).closest(U?"table":"table,img,hr")[0],t(r,j)&&(C(),n=i.getStart(!0),t(n,r)&&t(i.getEnd(!0),r)&&(!U||r!=n&&"IMG"!==n.nodeName))?void u(r):void d()}function h(e,t,n){e&&e.attachEvent&&e.attachEvent("on"+t,n)}function p(e,t,n){e&&e.detachEvent&&e.detachEvent("on"+t,n)}function m(e){var t=e.srcElement,n,r,i,o,s,l,c;n=t.getBoundingClientRect(),l=A.clientX-n.left,c=A.clientY-n.top;for(r in T)if(i=T[r],o=t.offsetWidth*i[0],s=t.offsetHeight*i[1],$(o-l)<8&&$(s-c)<8){R=i;break}I=!0,a.fire("ObjectResizeStart",{target:_,width:_.clientWidth,height:_.clientHeight}),a.getDoc().selection.empty(),u(t,r,A)}function g(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function v(e){var t=e.srcElement;if(o(t))return void g(e);if(t!=_){if(a.fire("ObjectSelected",{target:t}),y(),0===t.id.indexOf("mceResizeHandle"))return void(e.returnValue=!1);("IMG"==t.nodeName||"TABLE"==t.nodeName)&&(d(),_=t,h(t,"resizestart",m))}}function y(){p(_,"resizestart",m)}function b(){for(var e in T){var t=T[e];t.elm&&(E.unbind(t.elm),delete t.elm)}}function C(){try{a.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}}function x(e){var t;if(U){t=W.body.createControlRange();try{return t.addElement(e),t.select(),!0}catch(n){}}}function w(){_=S=null,U&&(y(),p(j,"controlselect",v))}var E=a.dom,N=t.each,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F,z,W=a.getDoc(),V=document,U=r.ie&&r.ie<11,$=Math.abs,q=Math.round,j=a.getBody(),Y,X;T={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var K=".mce-content-body";return a.contentStyles.push(K+" div.mce-resizehandle {position: absolute;border: 1px solid black;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+K+" .mce-resizehandle:hover {background: #000}"+K+" *[data-mce-selected] {outline: 1px solid black;resize: none}"+K+" .mce-clonedresizable {position: absolute;"+(r.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+K+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"),a.on("init",function(){U?(a.on("ObjectResized",function(e){"TABLE"!=e.target.nodeName&&(d(),x(e.target))}),h(j,"controlselect",v),a.on("mousedown",function(e){A=e})):(C(),r.ie>=11&&(a.on("mousedown click",function(e){var t=e.target.nodeName;!I&&/^(TABLE|IMG|HR)$/.test(t)&&(a.selection.select(e.target,"TABLE"==t),"mousedown"==e.type&&a.nodeChanged())}),a.dom.bind(j,"mscontrolselect",function(e){function t(e){n.setEditorTimeout(a,function(){a.selection.select(e)})}return o(e.target)?(e.preventDefault(),void t(e.target)):void(/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"==e.target.tagName&&t(e.target)))})));var e=n.throttle(f);a.on("nodechange ResizeEditor ResizeWindow drop",e),a.on("keydown keyup",function(t){_&&"TABLE"==_.nodeName&&e(t)}),a.on("hide blur",d)}),a.on("remove",b),{isResizable:s,showResizeRect:u,hideResizeRect:d,updateResizeRect:f,controlSelect:x,destroy:w}}}),r(z,[],function(){function e(e){return function(){return e}}function t(e){return function(t){return!e(t)}}function n(e,t){return function(n){return e(t(n))}}function r(){var e=a.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0;return!1}}function i(){var e=a.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1;return!0}}function o(e){var t=a.call(arguments);return t.length-1>=e.length?e.apply(this,t.slice(1)):function(){var e=t.concat([].slice.call(arguments));return o.apply(this,e)}}var a=[].slice;return{constant:e,negate:t,and:i,or:r,curry:o,compose:n}}),r(W,[_,p,k],function(e,t,n){function r(e){return m(e)?!1:d(e)?f(e.parentNode)?!1:!0:h(e)||u(e)||p(e)||c(e)}function i(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode){if(c(e))return!1;if(l(e))return!0}return!0}function o(e){return c(e)?t.reduce(e.getElementsByTagName("*"),function(e,t){return e||l(t)},!1)!==!0:!1}function a(e){return h(e)||o(e)}function s(e,t){return r(e)&&i(e,t)}var l=e.isContentEditableTrue,c=e.isContentEditableFalse,u=e.isBr,d=e.isText,f=e.matchNodeNames("script style textarea"),h=e.matchNodeNames("img input textarea hr iframe video audio object"),p=e.matchNodeNames("table"),m=n.isCaretContainer;return{isCaretCandidate:r,isInEditable:i,isAtomic:a,isEditableCaretCandidate:s}}),r(V,[],function(){function e(e){return e?{left:c(e.left),top:c(e.top),bottom:c(e.bottom),right:c(e.right),width:c(e.width),height:c(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}}function t(t,n){return t=e(t),n?t.right=t.left:(t.left=t.left+t.width,t.right=t.left),t.width=0,t}function n(e,t){return e.left===t.left&&e.top===t.top&&e.bottom===t.bottom&&e.right===t.right}function r(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2;
}function i(e,t){return e.bottom<t.top?!0:e.top>t.bottom?!1:r(t.top-e.bottom,e,t)}function o(e,t){return e.top>t.bottom?!0:e.bottom<t.top?!1:r(t.bottom-e.top,e,t)}function a(e,t){return e.left<t.left}function s(e,t){return e.right>t.right}function l(e,t){return i(e,t)?-1:o(e,t)?1:a(e,t)?-1:s(e,t)?1:0}var c=Math.round;return{clone:e,collapse:t,isEqual:n,isAbove:i,isBelow:o,isLeft:a,isRight:s,compare:l}}),r(U,[],function(){function e(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&t.test(e)}var t=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]");return{isExtendingChar:e}}),r($,[z,_,w,T,W,V,U],function(e,t,n,r,i,o,a){function s(e){return e&&/[\r\n\t ]/.test(e)}function l(e){var t=e.startContainer,n=e.startOffset,r;return s(e.toString())&&g(t.parentNode)&&(r=t.data,s(r[n-1])||s(r[n+1]))?!0:!1}function c(e){function t(e){var t=e.ownerDocument,n=t.createRange(),r=t.createTextNode("\xa0"),i=e.parentNode,a;return i.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1),a=o.clone(n.getBoundingClientRect()),i.removeChild(r),a}function n(e){var n,r;return r=e.getClientRects(),n=r.length>0?o.clone(r[0]):o.clone(e.getBoundingClientRect()),y(e)&&0===n.left?t(e):n}function r(e,t){return e=o.collapse(e,t),e.width=1,e.right=e.left+1,e}function i(e){0!==e.height&&(c.length>0&&o.isEqual(e,c[c.length-1])||c.push(e))}function s(e,t){var o=e.ownerDocument.createRange();return t<e.data.length&&a.isExtendingChar(e.data[t])?c:(t>0&&(o.setStart(e,t-1),o.setEnd(e,t),l(o)||i(r(n(o),!1))),void(t<e.data.length&&(o.setStart(e,t),o.setEnd(e,t+1),l(o)||i(r(n(o),!0)))))}var c=[],u,f;if(v(e.container()))return s(e.container(),e.offset()),c;if(d(e.container()))if(e.isAtEnd())f=C(e.container(),e.offset()),v(f)&&s(f,f.data.length),m(f)&&!y(f)&&i(r(n(f),!1));else{if(f=C(e.container(),e.offset()),v(f)&&s(f,0),m(f)&&e.isAtEnd())return i(r(n(f),!1)),c;u=C(e.container(),e.offset()-1),m(u)&&!y(u)&&(h(u)||h(f)||!m(f))&&i(r(n(u),!1)),m(f)&&i(r(n(f),!0))}return c}function u(t,n,r){function i(){return v(t)?0===n:0===n}function o(){return v(t)?n>=t.data.length:n>=t.childNodes.length}function a(){var e;return e=t.ownerDocument.createRange(),e.setStart(t,n),e.setEnd(t,n),e}function s(){return r||(r=c(new u(t,n))),r}function l(){return s().length>0}function d(e){return e&&t===e.container()&&n===e.offset()}function f(e){return C(t,e?n-1:n)}return{container:e.constant(t),offset:e.constant(n),toRange:a,getClientRects:s,isVisible:l,isAtStart:i,isAtEnd:o,isEqual:d,getNode:f}}var d=t.isElement,f=i.isCaretCandidate,h=t.matchStyleValues("display","block table"),p=t.matchStyleValues("float","left right"),m=e.and(d,f,e.negate(p)),g=e.negate(t.matchStyleValues("white-space","pre pre-line pre-wrap")),v=t.isText,y=t.isBr,b=n.nodeIndex,C=r.getNode;return u.fromRangeStart=function(e){return new u(e.startContainer,e.startOffset)},u.fromRangeEnd=function(e){return new u(e.endContainer,e.endOffset)},u.after=function(e){return new u(e.parentNode,b(e)+1)},u.before=function(e){return new u(e.parentNode,b(e))},u}),r(q,[_,w,z,p,$],function(e,t,n,r,i){function o(e){var t=e.parentNode;return v(t)?o(t):t}function a(e){return e?r.reduce(e.childNodes,function(e,t){return v(t)&&"BR"!=t.nodeName?e=e.concat(a(t)):e.push(t),e},[]):[]}function s(e,t){for(;(e=e.previousSibling)&&g(e);)t+=e.data.length;return t}function l(e){return function(t){return e===t}}function c(t){var n,i,s;return n=a(o(t)),i=r.findIndex(n,l(t),t),n=n.slice(0,i+1),s=r.reduce(n,function(e,t,r){return g(t)&&g(n[r-1])&&e++,e},0),n=r.filter(n,e.matchNodeNames(t.nodeName)),i=r.findIndex(n,l(t),t),i-s}function u(e){var t;return t=g(e)?"text()":e.nodeName.toLowerCase(),t+"["+c(e)+"]"}function d(e,t,n){var r=[];for(t=t.parentNode;t!=e&&(!n||!n(t));t=t.parentNode)r.push(t);return r}function f(t,i){var o,a,l=[],c,f,h;return o=i.container(),a=i.offset(),g(o)?c=s(o,a):(f=o.childNodes,a>=f.length?(c="after",a=f.length-1):c="before",o=f[a]),l.push(u(o)),h=d(t,o),h=r.filter(h,n.negate(e.isBogus)),l=l.concat(r.map(h,function(e){return u(e)})),l.reverse().join("/")+","+c}function h(t,n,i){var o=a(t);return o=r.filter(o,function(e,t){return!g(e)||!g(o[t-1])}),o=r.filter(o,e.matchNodeNames(n)),o[i]}function p(e,t){for(var n=e,r=0,o;g(n);){if(o=n.data.length,t>=r&&r+o>=t){e=n,t-=r;break}if(!g(n.nextSibling)){e=n,t=o;break}r+=o,n=n.nextSibling}return t>e.data.length&&(t=e.data.length),new i(e,t)}function m(e,t){var n,o,a;return t?(n=t.split(","),t=n[0].split("/"),a=n.length>1?n[1]:"before",o=r.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),h(e,t[1],parseInt(t[2],10))):null},e),o?g(o)?p(o,parseInt(a,10)):(a="after"===a?y(o)+1:y(o),new i(o.parentNode,a)):null):null}var g=e.isText,v=e.isBogus,y=t.nodeIndex;return{create:f,resolve:m}}),r(j,[h,m,k,q,$,_],function(e,t,n,r,i,o){function a(a){var l=a.dom;this.getBookmark=function(e,c){function u(e,n){var r=0;return t.each(l.select(e),function(e){return"all"!==e.getAttribute("data-mce-bogus")?e==n?!1:void r++:void 0}),r}function d(e){function t(t){var n,r,i,o=t?"start":"end";n=e[o+"Container"],r=e[o+"Offset"],1==n.nodeType&&"TR"==n.nodeName&&(i=n.childNodes,n=i[Math.min(t?r:r-1,i.length-1)],n&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r)))}return t(!0),t(),e}function f(e){function t(e,t){var r=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],o=[],a,s,u=0;if(3==r.nodeType){if(c)for(a=r.previousSibling;a&&3==a.nodeType;a=a.previousSibling)i+=a.nodeValue.length;o.push(i)}else s=r.childNodes,i>=s.length&&s.length&&(u=1,i=Math.max(0,s.length-1)),o.push(l.nodeIndex(s[i],c)+u);for(;r&&r!=n;r=r.parentNode)o.push(l.nodeIndex(r,c));return o}var n=l.getRoot(),r={};return r.start=t(e,!0),a.isCollapsed()||(r.end=t(e)),r}function h(e){function t(e){var t;if(n.isCaretContainer(e)){if(o.isText(e)&&n.isCaretContainerBlock(e)&&(e=e.parentNode),t=e.previousSibling,s(t))return t;if(t=e.nextSibling,s(t))return t}}return t(e.startContainer)||t(e.endContainer)}var p,m,g,v,y,b,C="&#xFEFF;",x;if(2==e)return b=a.getNode(),y=b?b.nodeName:null,p=a.getRng(),s(b)||"IMG"==y?{name:y,index:u(y,b)}:a.tridentSel?a.tridentSel.getBookmark(e):(b=h(p),b?(y=b.tagName,{name:y,index:u(y,b)}):f(p));if(3==e)return p=a.getRng(),{start:r.create(l.getRoot(),i.fromRangeStart(p)),end:r.create(l.getRoot(),i.fromRangeEnd(p))};if(e)return{rng:a.getRng()};if(p=a.getRng(),g=l.uniqueId(),v=a.isCollapsed(),x="overflow:hidden;line-height:0px",p.duplicate||p.item){if(p.item)return b=p.item(0),y=b.nodeName,{name:y,index:u(y,b)};m=p.duplicate();try{p.collapse(),p.pasteHTML('<span data-mce-type="bookmark" id="'+g+'_start" style="'+x+'">'+C+"</span>"),v||(m.collapse(!1),p.moveToElementText(m.parentElement()),0===p.compareEndPoints("StartToEnd",m)&&m.move("character",-1),m.pasteHTML('<span data-mce-type="bookmark" id="'+g+'_end" style="'+x+'">'+C+"</span>"))}catch(w){return null}}else{if(b=a.getNode(),y=b.nodeName,"IMG"==y)return{name:y,index:u(y,b)};m=d(p.cloneRange()),v||(m.collapse(!1),m.insertNode(l.create("span",{"data-mce-type":"bookmark",id:g+"_end",style:x},C))),p=d(p),p.collapse(!0),p.insertNode(l.create("span",{"data-mce-type":"bookmark",id:g+"_start",style:x},C))}return a.moveToBookmark({id:g,keep:1}),{id:g}},this.moveToBookmark=function(n){function i(e){var t=n[e?"start":"end"],r,i,o,a;if(t){for(o=t[0],i=d,r=t.length-1;r>=1;r--){if(a=i.childNodes,t[r]>a.length-1)return;i=a[t[r]]}3===i.nodeType&&(o=Math.min(t[0],i.nodeValue.length)),1===i.nodeType&&(o=Math.min(t[0],i.childNodes.length)),e?u.setStart(i,o):u.setEnd(i,o)}return!0}function o(r){var i=l.get(n.id+"_"+r),o,a,s,c,u=n.keep;if(i&&(o=i.parentNode,"start"==r?(u?(o=i.firstChild,a=1):a=l.nodeIndex(i),f=h=o,p=m=a):(u?(o=i.firstChild,a=1):a=l.nodeIndex(i),h=o,m=a),!u)){for(c=i.previousSibling,s=i.nextSibling,t.each(t.grep(i.childNodes),function(e){3==e.nodeType&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});i=l.get(n.id+"_"+r);)l.remove(i,1);c&&s&&c.nodeType==s.nodeType&&3==c.nodeType&&!e.opera&&(a=c.nodeValue.length,c.appendData(s.nodeValue),l.remove(s),"start"==r?(f=h=c,p=m=a):(h=c,m=a))}}function s(t){return!l.isBlock(t)||t.innerHTML||e.ie||(t.innerHTML='<br data-mce-bogus="1" />'),t}function c(){var e,t;return e=l.createRng(),t=r.resolve(l.getRoot(),n.start),e.setStart(t.container(),t.offset()),t=r.resolve(l.getRoot(),n.end),e.setEnd(t.container(),t.offset()),e}var u,d,f,h,p,m;if(n)if(t.isArray(n.start)){if(u=l.createRng(),d=l.getRoot(),a.tridentSel)return a.tridentSel.moveToBookmark(n);i(!0)&&i()&&a.setRng(u)}else"string"==typeof n.start?a.setRng(c(n)):n.id?(o("start"),o("end"),f&&(u=l.createRng(),u.setStart(s(f),p),u.setEnd(s(h),m),a.setRng(u))):n.name?a.select(l.select(n.name)[n.index]):n.rng&&a.setRng(n.rng)}}var s=o.isContentEditableFalse;return a.isBookmarkNode=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},a}),r(Y,[y,O,F,T,j,_,h,m],function(e,n,r,i,o,a,s,l){function c(e,t,i,a){var s=this;s.dom=e,s.win=t,s.serializer=i,s.editor=a,s.bookmarkManager=new o(s),s.controlSelection=new r(s,a),s.win.getSelection||(s.tridentSel=new n(s))}var u=l.each,d=l.trim,f=s.ie;return c.prototype={setCursorLocation:function(e,t){var n=this,r=n.dom.createRng();e?(r.setStart(e,t),r.setEnd(e,t),n.setRng(r),n.collapse(!1)):(n._moveEndPoint(r,n.editor.getBody(),!0),n.setRng(r))},getContent:function(e){var n=this,r=n.getRng(),i=n.dom.create("body"),o=n.getSel(),a,s,l;return e=e||{},a=s="",e.get=!0,e.format=e.format||"html",e.selection=!0,n.editor.fire("BeforeGetContent",e),"text"==e.format?n.isCollapsed()?"":r.text||(o.toString?o.toString():""):(r.cloneContents?(l=r.cloneContents(),l&&i.appendChild(l)):r.item!==t||r.htmlText!==t?(i.innerHTML="<br>"+(r.item?r.item(0).outerHTML:r.htmlText),i.removeChild(i.firstChild)):i.innerHTML=r.toString(),/^\s/.test(i.innerHTML)&&(a=" "),/\s+$/.test(i.innerHTML)&&(s=" "),e.getInner=!0,e.content=n.isCollapsed()?"":a+n.serializer.serialize(i,e)+s,n.editor.fire("GetContent",e),e.content)},setContent:function(e,t){var n=this,r=n.getRng(),i,o=n.win.document,a,s;if(t=t||{format:"html"},t.set=!0,t.selection=!0,t.content=e,t.no_events||n.editor.fire("BeforeSetContent",t),e=t.content,r.insertNode){e+='<span id="__caret">_</span>',r.startContainer==o&&r.endContainer==o?o.body.innerHTML=e:(r.deleteContents(),0===o.body.childNodes.length?o.body.innerHTML=e:r.createContextualFragment?r.insertNode(r.createContextualFragment(e)):(a=o.createDocumentFragment(),s=o.createElement("div"),a.appendChild(s),s.outerHTML=e,r.insertNode(a))),i=n.dom.get("__caret"),r=o.createRange(),r.setStartBefore(i),r.setEndBefore(i),n.setRng(r),n.dom.remove("__caret");try{n.setRng(r)}catch(l){}}else r.item&&(o.execCommand("Delete",!1,null),r=n.getRng()),/^\s+/.test(e)?(r.pasteHTML('<span id="__mce_tmp">_</span>'+e),n.dom.remove("__mce_tmp")):r.pasteHTML(e);t.no_events||n.editor.fire("SetContent",t)},getStart:function(e){var t=this,n=t.getRng(),r,i,o,a;if(n.duplicate||n.item){if(n.item)return n.item(0);for(o=n.duplicate(),o.collapse(1),r=o.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),i=a=n.parentElement();a=a.parentNode;)if(a==r){r=i;break}return r}return r=n.startContainer,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[Math.min(r.childNodes.length-1,n.startOffset)])),r&&3==r.nodeType?r.parentNode:r},getEnd:function(e){var t=this,n=t.getRng(),r,i;return n.duplicate||n.item?n.item?n.item(0):(n=n.duplicate(),n.collapse(0),r=n.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),r&&"BODY"==r.nodeName?r.lastChild||r:r):(r=n.endContainer,i=n.endOffset,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[i>0?i-1:i])),r&&3==r.nodeType?r.parentNode:r)},getBookmark:function(e,t){return this.bookmarkManager.getBookmark(e,t)},moveToBookmark:function(e){return this.bookmarkManager.moveToBookmark(e)},select:function(e,t){var n=this,r=n.dom,i=r.createRng(),o;if(n.lastFocusBookmark=null,e){if(!t&&n.controlSelection.controlSelect(e))return;o=r.nodeIndex(e),i.setStart(e.parentNode,o),i.setEnd(e.parentNode,o+1),t&&(n._moveEndPoint(i,e,!0),n._moveEndPoint(i,e)),n.setRng(i)}return e},isCollapsed:function(){var e=this,t=e.getRng(),n=e.getSel();return!t||t.item?!1:t.compareEndPoints?0===t.compareEndPoints("StartToEnd",t):!n||t.collapsed},collapse:function(e){var t=this,n=t.getRng(),r;n.item&&(r=n.item(0),n=t.win.document.body.createTextRange(),n.moveToElementText(r)),n.collapse(!!e),t.setRng(n)},getSel:function(){var e=this.win;return e.getSelection?e.getSelection():e.document.selection},getRng:function(e){function t(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}}var n=this,r,i,o,a,s,l;if(!n.win)return null;if(a=n.win.document,!e&&n.lastFocusBookmark){var c=n.lastFocusBookmark;return c.startContainer?(i=a.createRange(),i.setStart(c.startContainer,c.startOffset),i.setEnd(c.endContainer,c.endOffset)):i=c,i}if(e&&n.tridentSel)return n.tridentSel.getRangeAt(0);try{(r=n.getSel())&&(i=r.rangeCount>0?r.getRangeAt(0):r.createRange?r.createRange():a.createRange())}catch(u){}if(l=n.editor.fire("GetSelectionRange",{range:i}),l.range!==i)return l.range;if(f&&i&&i.setStart&&a.selection){try{s=a.selection.createRange()}catch(u){}s&&s.item&&(o=s.item(0),i=a.createRange(),i.setStartBefore(o),i.setEndAfter(o))}return i||(i=a.createRange?a.createRange():a.body.createTextRange()),i.setStart&&9===i.startContainer.nodeType&&i.collapsed&&(o=n.dom.getRoot(),i.setStart(o,0),i.setEnd(o,0)),n.selectedRange&&n.explicitRange&&(0===t(i.START_TO_START,i,n.selectedRange)&&0===t(i.END_TO_END,i,n.selectedRange)?i=n.explicitRange:(n.selectedRange=null,n.explicitRange=null)),i},setRng:function(e,t){var n=this,r,i,o;if(e)if(e.select){n.explicitRange=null;try{e.select()}catch(a){}}else if(n.tridentSel){if(e.cloneRange)try{n.tridentSel.addRange(e)}catch(a){}}else{if(r=n.getSel(),o=n.editor.fire("SetSelectionRange",{range:e}),e=o.range,r){n.explicitRange=e;try{r.removeAllRanges(),r.addRange(e)}catch(a){}t===!1&&r.extend&&(r.collapse(e.endContainer,e.endOffset),r.extend(e.startContainer,e.startOffset)),n.selectedRange=r.rangeCount>0?r.getRangeAt(0):null}e.collapsed||e.startContainer!=e.endContainer||!r.setBaseAndExtent||s.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(i=e.startContainer.childNodes[e.startOffset],i&&"IMG"==i.tagName&&n.getSel().setBaseAndExtent(i,0,i,1))}},setNode:function(e){var t=this;return t.setContent(t.dom.getOuterHTML(e)),e},getNode:function(){function e(e,t){for(var n=e;e&&3===e.nodeType&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n}var t=this,n=t.getRng(),r,i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset,l=t.dom.getRoot();return n?n.setStart?(r=n.commonAncestorContainer,!n.collapsed&&(i==o&&2>s-a&&i.hasChildNodes()&&(r=i.childNodes[a]),3===i.nodeType&&3===o.nodeType&&(i=i.length===a?e(i.nextSibling,!0):i.parentNode,o=0===s?e(o.previousSibling,!1):o.parentNode,i&&i===o))?i:r&&3==r.nodeType?r.parentNode:r):(r=n.item?n.item(0):n.parentElement(),r.ownerDocument!==t.win.document&&(r=l),r):l},getSelectedBlocks:function(t,n){var r=this,i=r.dom,o,a,s=[];if(a=i.getRoot(),t=i.getParent(t||r.getStart(),i.isBlock),n=i.getParent(n||r.getEnd(),i.isBlock),t&&t!=a&&s.push(t),t&&n&&t!=n){o=t;for(var l=new e(t,a);(o=l.next())&&o!=n;)i.isBlock(o)&&s.push(o)}return n&&t!=n&&n!=a&&s.push(n),s},isForward:function(){var e=this.dom,t=this.getSel(),n,r;return t&&t.anchorNode&&t.focusNode?(n=e.createRng(),n.setStart(t.anchorNode,t.anchorOffset),n.collapse(!0),r=e.createRng(),r.setStart(t.focusNode,t.focusOffset),r.collapse(!0),n.compareBoundaryPoints(n.START_TO_START,r)<=0):!0},normalize:function(){var e=this,t=e.getRng();return s.range&&new i(e.dom).normalize(t)&&e.setRng(t,e.isForward()),t},selectorChanged:function(e,t){var n=this,r;return n.selectorChangedData||(n.selectorChangedData={},r={},n.editor.on("NodeChange",function(e){var t=e.element,i=n.dom,o=i.getParents(t,null,i.getRoot()),a={};u(n.selectorChangedData,function(e,t){u(o,function(n){return i.is(n,t)?(r[t]||(u(e,function(e){e(!0,{node:n,selector:t,parents:o})}),r[t]=e),a[t]=e,!1):void 0})}),u(r,function(e,n){a[n]||(delete r[n],u(e,function(e){e(!1,{node:t,selector:n,parents:o})}))})})),n.selectorChangedData[e]||(n.selectorChangedData[e]=[]),n.selectorChangedData[e].push(t),n},getScrollContainer:function(){for(var e,t=this.dom.getRoot();t&&"BODY"!=t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){function n(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}}var r,i,o=this,s=o.dom,l=s.getRoot(),c,u,d=0;if(a.isElement(e)){if(t===!1&&(d=e.offsetHeight),"BODY"!=l.nodeName){var f=o.getScrollContainer();if(f)return r=n(e).y-n(f).y+d,u=f.clientHeight,c=f.scrollTop,void((c>r||r+25>c+u)&&(f.scrollTop=c>r?r:r-u+25))}i=s.getViewPort(o.editor.getWin()),r=s.getPos(e).y+d,c=i.y,u=i.h,(r<i.y||r+25>c+u)&&o.editor.getWin().scrollTo(0,c>r?r:r-u+25)}},placeCaretAt:function(e,t){this.setRng(i.getCaretRangeFromPoint(e,t,this.editor.getDoc()))},_moveEndPoint:function(t,n,r){var i=n,o=new e(n,i),a=this.dom.schema.getNonEmptyElements();do{if(3==n.nodeType&&0!==d(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"==n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(s.ie&&s.ie<11&&this.dom.isBlock(n)&&this.dom.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?o.next():o.prev());"BODY"==i.nodeName&&(r?t.setStart(i,0):t.setEnd(i,i.childNodes.length))},destroy:function(){this.win=null,this.controlSelection.destroy()}},c}),r(X,[j,m],function(e,t){function n(t){this.compare=function(n,i){function o(e){var n={};return r(t.getAttribs(e),function(r){var i=r.nodeName.toLowerCase();0!==i.indexOf("_")&&"style"!==i&&"data-mce-style"!==i&&(n[i]=t.getAttrib(e,i))}),n}function a(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(n=t[r],"undefined"==typeof n)return!1;if(e[r]!=n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0}return n.nodeName!=i.nodeName?!1:a(o(n),o(i))&&a(t.parseStyle(t.getAttrib(n,"style")),t.parseStyle(t.getAttrib(i,"style")))?!e.isBookmarkNode(n)&&!e.isBookmarkNode(i):!1}}var r=t.each;return n}),r(K,[m],function(e){function t(e,t){function r(e){return e.replace(/%(\w+)/g,"")}var i,o,a=e.dom,s="",l,c;if(c=e.settings.preview_styles,c===!1)return"";if(c||(c="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),"string"==typeof t){if(t=e.formatter.get(t),!t)return;t=t[0]}return i=t.block||t.inline||"span",o=a.create(i),n(t.styles,function(e,t){e=r(e),e&&a.setStyle(o,t,e)}),n(t.attributes,function(e,t){e=r(e),e&&a.setAttrib(o,t,e)}),n(t.classes,function(e){e=r(e),a.hasClass(o,e)||a.addClass(o,e)}),e.fire("PreviewFormats"),a.setStyles(o,{position:"absolute",left:-65535}),e.getBody().appendChild(o),l=a.getStyle(e.getBody(),"fontSize",!0),l=/px$/.test(l)?parseInt(l,10):0,n(c.split(" "),function(t){var n=a.getStyle(o,t,!0);if(!("background-color"==t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=a.getStyle(e.getBody(),t,!0),"#ffffff"==a.toHex(n).toLowerCase())||"color"==t&&"#000000"==a.toHex(n).toLowerCase())){if("font-size"==t&&/em|%$/.test(n)){if(0===l)return;n=parseFloat(n,10)/(/%$/.test(n)?100:1),n=n*l+"px"}"border"==t&&n&&(s+="padding:0 2px;"),s+=t+":"+n+";"}}),e.fire("AfterPreviewFormats"),a.remove(o),s}var n=e.each;return{getCssText:t}}),r(G,[y,T,j,X,m,K],function(e,t,n,r,i,o){return function(a){function s(e){return e.nodeType&&(e=e.nodeName),!!a.schema.getTextBlockElements()[e.toLowerCase()]}function l(e){return/^(TH|TD)$/.test(e.nodeName)}function c(e){return e&&/^(IMG)$/.test(e.nodeName)}function u(e,t){return q.getParents(e,t,q.getRoot())}function d(e){return 1===e.nodeType&&"_mce_caret"===e.id}function f(){m({valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"}}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"}},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"}}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},defaultBlock:"div"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0},fontname:{inline:"span",styles:{fontFamily:"%value"}},fontsize:{inline:"span",styles:{fontSize:"%value"}},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(e,t,n){le(n,function(t,n){q.setAttrib(e,n,t)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}),le("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){m(e,{block:e,remove:"all"})}),m(a.settings.formats)}function h(){a.addShortcut("meta+b","bold_desc","Bold"),a.addShortcut("meta+i","italic_desc","Italic"),a.addShortcut("meta+u","underline_desc","Underline");for(var e=1;6>=e;e++)a.addShortcut("access+"+e,"",["FormatBlock",!1,"h"+e]);a.addShortcut("access+7","",["FormatBlock",!1,"p"]),a.addShortcut("access+8","",["FormatBlock",!1,"div"]),a.addShortcut("access+9","",["FormatBlock",!1,"address"])}function p(e){return e?$[e]:$}function m(e,t){e&&("string"!=typeof e?le(e,function(e,t){m(t,e)}):(t=t.length?t:[t],le(t,function(e){e.deep===re&&(e.deep=!e.selector),e.split===re&&(e.split=!e.selector||e.inline),e.remove===re&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),$[e]=t))}function g(e){return e&&$[e]&&delete $[e],$}function v(e){var t;return a.dom.getParent(e,function(e){return t=a.dom.getStyle(e,"text-decoration"),t&&"none"!==t}),t}function y(e){var t;1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=v(e.parentNode),a.dom.getStyle(e,"color")&&t?a.dom.setStyle(e,"text-decoration",t):a.dom.getStyle(e,"text-decoration")===t&&a.dom.setStyle(e,"text-decoration",null))}function b(t,n,r){function i(e,t){if(t=t||u,e){if(t.onformat&&t.onformat(e,t,n,r),le(t.styles,function(t,r){q.setStyle(e,r,D(t,n))}),t.styles){var i=q.getAttrib(e,"style");i&&e.setAttribute("data-mce-style",i)}le(t.attributes,function(t,r){q.setAttrib(e,r,D(t,n))}),le(t.classes,function(t){t=D(t,n),q.hasClass(e,t)||q.addClass(e,t)})}}function o(){function t(t,n){var i=new e(n);for(r=i.current();r;r=i.prev())if(r.childNodes.length>1||r==t||"BR"==r.tagName)return r}var n=a.selection.getRng(),i=n.startContainer,o=n.endContainer;if(i!=o&&0===n.endOffset){var s=t(i,o),l=3==s.nodeType?s.length:s.childNodes.length;n.setEnd(s,l)}return n}function l(e,r,o){var a=[],l,f,h=!0;l=u.inline||u.block,f=q.create(l),i(f),Y.walk(e,function(e){function r(e){var g,v,y,b,C;return C=h,g=e.nodeName.toLowerCase(),v=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&ie(e)&&(C=h,h="true"===ie(e),b=!0),R(g,"br")?(p=0,void(u.block&&q.remove(e))):u.wrapper&&w(e,t,n)?void(p=0):h&&!b&&u.block&&!u.wrapper&&s(g)&&X(v,l)?(e=q.rename(e,l),i(e),a.push(e),void(p=0)):u.selector&&(le(c,function(t){return"collapsed"in t&&t.collapsed!==m?void 0:q.is(e,t.selector)&&!d(e)?(i(e,t),y=!0,!1):void 0}),!u.inline||y)?void(p=0):void(!h||b||!X(l,g)||!X(v,l)||!o&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||d(e)||u.inline&&K(e)?(p=0,le(ce(e.childNodes),r),b&&(h=C),p=0):(p||(p=q.clone(f,ee),e.parentNode.insertBefore(p,e),a.push(p)),p.appendChild(e)))}var p;le(e,r)}),u.links===!0&&le(a,function(e){function t(e){"A"===e.nodeName&&i(e,u),le(ce(e.childNodes),t)}t(e)}),le(a,function(e){function r(e){var t=0;return le(e.childNodes,function(e){M(e)||se(e)||t++}),t}function o(e){var t,n;return le(e.childNodes,function(e){return 1!=e.nodeType||se(e)||d(e)?void 0:(t=e,ee)}),t&&!se(t)&&T(t,u)&&(n=q.clone(t,ee),i(n),q.replace(n,e,te),q.remove(t,1)),n||e}var s;if(s=r(e),(a.length>1||!K(e))&&0===s)return void q.remove(e,1);if(u.inline||u.wrapper){if(u.exact||1!==s||(e=o(e)),le(c,function(t){le(q.select(t.inline,e),function(e){se(e)||O(t,n,e,t.exact?e:null)})}),w(e.parentNode,t,n))return q.remove(e,1),e=0,te;u.merge_with_parents&&q.getParent(e.parentNode,function(r){return w(r,t,n)?(q.remove(e,1),e=0,te):void 0}),e&&u.merge_siblings!==!1&&(e=z(F(e),e),e=z(e,F(e,te)))}})}var c=p(t),u=c[0],f,h,m=!r&&j.isCollapsed();if("false"!==ie(j.getNode())){if(u)if(r)r.nodeType?(h=q.createRng(),h.setStartBefore(r),h.setEndAfter(r),l(P(h,c),null,!0)):l(r,null,!0);else if(m&&u.inline&&!q.select("td.mce-item-selected,th.mce-item-selected").length)V("apply",t,n);else{var g=a.selection.getNode();G||!c[0].defaultBlock||q.getParent(g,q.isBlock)||b(c[0].defaultBlock),a.selection.setRng(o()),f=j.getBookmark(),l(P(j.getRng(te),c),f),u.styles&&(u.styles.color||u.styles.textDecoration)&&(ue(g,y,"childNodes"),y(g)),j.moveToBookmark(f),U(j.getRng(te)),a.nodeChanged()}}else{r=j.getNode();for(var v=0,C=c.length;C>v;v++)if(c[v].ceFalseOverride&&q.is(r,c[v].selector))return void i(r,c[v])}}function C(e,t,n,r){function i(e){var n,r,o,a,s;if(1===e.nodeType&&ie(e)&&(a=b,b="true"===ie(e),s=!0),n=ce(e.childNodes),b&&!s)for(r=0,o=h.length;o>r&&!O(h[r],t,e,e);r++);if(m.deep&&n.length){for(r=0,o=n.length;o>r;r++)i(n[r]);s&&(b=a)}}function o(n){var i;return le(u(n.parentNode).reverse(),function(n){var o;i||"_start"==n.id||"_end"==n.id||(o=w(n,e,t,r),o&&o.split!==!1&&(i=n))}),i}function s(e,n,r,i){var o,a,s,l,c,u;if(e){for(u=e.parentNode,o=n.parentNode;o&&o!=u;o=o.parentNode){for(a=q.clone(o,ee),c=0;c<h.length;c++)if(O(h[c],t,a,a)){a=0;break}a&&(s&&a.appendChild(s),l||(l=a),s=a)}!i||m.mixed&&K(e)||(n=q.split(e,n)),s&&(r.parentNode.insertBefore(s,r),l.appendChild(r))}return n}function c(e){return s(o(e),e,e,!0)}function d(e){var t=q.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"];return se(n)&&(n=n[e?"firstChild":"lastChild"]),3==n.nodeType&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),q.remove(t,!0),n}function f(e){var t,n,r=e.commonAncestorContainer;if(e=P(e,h,te),m.split){if(t=W(e,te),n=W(e),t!=n){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"==t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&l(n)&&n.firstChild&&(n=n.firstChild||n),q.isChildOf(t,n)&&!K(n)&&!l(t)&&!l(n))return t=L(t,"span",{id:"_start","data-mce-type":"bookmark"}),c(t),void(t=d(te));t=L(t,"span",{id:"_start","data-mce-type":"bookmark"}),n=L(n,"span",{id:"_end","data-mce-type":"bookmark"}),c(t),c(n),t=d(te),n=d()}else t=n=c(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=J(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=J(n)+1}Y.walk(e,function(e){le(e,function(e){i(e),1===e.nodeType&&"underline"===a.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===v(e.parentNode)&&O({deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})}var h=p(e),m=h[0],g,y,b=!0;if(n)return void(n.nodeType?(y=q.createRng(),y.setStartBefore(n),y.setEndAfter(n),f(y)):f(n));if("false"!==ie(j.getNode()))j.isCollapsed()&&m.inline&&!q.select("td.mce-item-selected,th.mce-item-selected").length?V("remove",e,t,r):(g=j.getBookmark(),f(j.getRng(te)),j.moveToBookmark(g),m.inline&&E(e,t,j.getStart())&&U(j.getRng(!0)),a.nodeChanged());else{n=j.getNode();for(var C=0,x=h.length;x>C&&(!h[C].ceFalseOverride||!O(h[C],t,n,n));C++);}}function x(e,t,n){var r=p(e);!E(e,t,n)||"toggle"in r[0]&&!r[0].toggle?b(e,t,n):C(e,t,n)}function w(e,t,n,r){function i(e,t,i){var o,a,s=t[i],l;if(t.onmatch)return t.onmatch(e,t,i);if(s)if(s.length===re){for(o in s)if(s.hasOwnProperty(o)){if(a="attributes"===i?q.getAttrib(e,o):A(e,o),r&&!a&&!t.exact)return;if((!r||t.exact)&&!R(a,B(D(s[o],n),o)))return}}else for(l=0;l<s.length;l++)if("attributes"===i?q.getAttrib(e,s[l]):A(e,s[l]))return t;return t}var o=p(t),a,s,l;if(o&&e)for(s=0;s<o.length;s++)if(a=o[s],T(e,a)&&i(e,a,"attributes")&&i(e,a,"styles")){if(l=a.classes)for(s=0;s<l.length;s++)if(!q.hasClass(e,l[s]))return;return a}}function E(e,t,n){function r(n){
var r=q.getRoot();return n===r?!1:(n=q.getParent(n,function(n){return n.parentNode===r||!!w(n,e,t,!0)}),w(n,e,t))}var i;return n?r(n):(n=j.getNode(),r(n)?te:(i=j.getStart(),i!=n&&r(i)?te:ee))}function N(e,t){var n,r=[],i={};return n=j.getStart(),q.getParent(n,function(n){var o,a;for(o=0;o<e.length;o++)a=e[o],!i[a]&&w(n,a,t)&&(i[a]=!0,r.push(a))},q.getRoot()),r}function _(e){var t=p(e),n,r,i,o,a;if(t)for(n=j.getStart(),r=u(n),o=t.length-1;o>=0;o--){if(a=t[o].selector,!a||t[o].defaultBlock)return te;for(i=r.length-1;i>=0;i--)if(q.is(r[i],a))return te}return ee}function S(e,t,n){var r;return ne||(ne={},r={},a.on("NodeChange",function(e){var t=u(e.element),n={};t=i.grep(t,function(e){return 1==e.nodeType&&!e.getAttribute("data-mce-bogus")}),le(ne,function(e,i){le(t,function(o){return w(o,i,{},e.similar)?(r[i]||(le(e,function(e){e(!0,{node:o,format:i,parents:t})}),r[i]=e),n[i]=e,!1):void 0})}),le(r,function(i,o){n[o]||(delete r[o],le(i,function(n){n(!1,{node:e.element,format:o,parents:t})}))})})),le(e.split(","),function(e){ne[e]||(ne[e]=[],ne[e].similar=n),ne[e].push(t)}),this}function k(e){return o.getCssText(a,e)}function T(e,t){return R(e,t.inline)?te:R(e,t.block)?te:t.selector?1==e.nodeType&&q.is(e,t.selector):void 0}function R(e,t){return e=e||"",t=t||"",e=""+(e.nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()==t.toLowerCase()}function A(e,t){return B(q.getStyle(e,t),t)}function B(e,t){return("color"==t||"backgroundColor"==t)&&(e=q.toHex(e)),"fontWeight"==t&&700==e&&(e="bold"),"fontFamily"==t&&(e=e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+e}function D(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,function(e,n){return t[n]||e})),e}function M(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)}function L(e,t,n){var r=q.create(t,n);return e.parentNode.insertBefore(r,e),r.appendChild(e),r}function P(t,n,r){function i(e){function t(e){return"BR"==e.nodeName&&e.getAttribute("data-mce-bogus")&&!e.nextSibling}var r,i,o,a,s;if(r=i=e?g:y,a=e?"previousSibling":"nextSibling",s=q.getRoot(),3==r.nodeType&&!M(r)&&(e?v>0:b<r.nodeValue.length))return r;for(;;){if(!n[0].block_expand&&K(i))return i;for(o=i[a];o;o=o[a])if(!se(o)&&!M(o)&&!t(o))return i;if(i==s||i.parentNode==s){r=i;break}i=i.parentNode}return r}function o(e,t){for(t===re&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)e=e.childNodes[t],e&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}}function l(e){for(var t=e;t;){if(1===t.nodeType&&ie(t))return"false"===ie(t)?t:e;t=t.parentNode}return e}function c(t,n,i){function o(e,t){var n,o,a=e.nodeValue;return"undefined"==typeof t&&(t=i?a.length:0),i?(n=a.lastIndexOf(" ",t),o=a.lastIndexOf("\xa0",t),n=n>o?n:o,-1===n||r||n++):(n=a.indexOf(" ",t),o=a.indexOf("\xa0",t),n=-1!==n&&(-1===o||o>n)?n:o),n}var s,l,c,u;if(3===t.nodeType){if(c=o(t,n),-1!==c)return{container:t,offset:c};u=t}for(s=new e(t,q.getParent(t,K)||a.getBody());l=s[i?"prev":"next"]();)if(3===l.nodeType){if(u=l,c=o(l),-1!==c)return{container:l,offset:c}}else if(K(l))break;return u?(n=i?0:u.length,{container:u,offset:n}):void 0}function d(e,r){var i,o,a,s;for(3==e.nodeType&&0===e.nodeValue.length&&e[r]&&(e=e[r]),i=u(e),o=0;o<i.length;o++)for(a=0;a<n.length;a++)if(s=n[a],!("collapsed"in s&&s.collapsed!==t.collapsed)&&q.is(i[o],s.selector))return i[o];return e}function f(e,t){var r,i=q.getRoot();if(n[0].wrapper||(r=q.getParent(e,n[0].block,i)),r||(r=q.getParent(3==e.nodeType?e.parentNode:e,function(e){return e!=i&&s(e)})),r&&n[0].wrapper&&(r=u(r,"ul,ol").reverse()[0]||r),!r)for(r=e;r[t]&&!K(r[t])&&(r=r[t],!R(r,"br")););return r||e}var h,p,m,g=t.startContainer,v=t.startOffset,y=t.endContainer,b=t.endOffset;if(1==g.nodeType&&g.hasChildNodes()&&(h=g.childNodes.length-1,g=g.childNodes[v>h?h:v],3==g.nodeType&&(v=0)),1==y.nodeType&&y.hasChildNodes()&&(h=y.childNodes.length-1,y=y.childNodes[b>h?h:b-1],3==y.nodeType&&(b=y.nodeValue.length)),g=l(g),y=l(y),(se(g.parentNode)||se(g))&&(g=se(g)?g:g.parentNode,g=g.nextSibling||g,3==g.nodeType&&(v=0)),(se(y.parentNode)||se(y))&&(y=se(y)?y:y.parentNode,y=y.previousSibling||y,3==y.nodeType&&(b=y.length)),n[0].inline&&(t.collapsed&&(m=c(g,v,!0),m&&(g=m.container,v=m.offset),m=c(y,b),m&&(y=m.container,b=m.offset)),p=o(y,b),p.node)){for(;p.node&&0===p.offset&&p.node.previousSibling;)p=o(p.node.previousSibling);p.node&&p.offset>0&&3===p.node.nodeType&&" "===p.node.nodeValue.charAt(p.offset-1)&&p.offset>1&&(y=p.node,y.splitText(p.offset-1))}return(n[0].inline||n[0].block_expand)&&(n[0].inline&&3==g.nodeType&&0!==v||(g=i(!0)),n[0].inline&&3==y.nodeType&&b!==y.nodeValue.length||(y=i())),n[0].selector&&n[0].expand!==ee&&!n[0].inline&&(g=d(g,"previousSibling"),y=d(y,"nextSibling")),(n[0].block||n[0].selector)&&(g=f(g,"previousSibling"),y=f(y,"nextSibling"),n[0].block&&(K(g)||(g=i(!0)),K(y)||(y=i()))),1==g.nodeType&&(v=J(g),g=g.parentNode),1==y.nodeType&&(b=J(y)+1,y=y.parentNode),{startContainer:g,startOffset:v,endContainer:y,endOffset:b}}function H(e,t){return t.links&&"A"==e.tagName}function O(e,t,n,r){var i,o,a;if(!T(n,e)&&!H(n,e))return ee;if("all"!=e.remove)for(le(e.styles,function(i,o){i=B(D(i,t),o),"number"==typeof o&&(o=i,r=0),(e.remove_similar||!r||R(A(r,o),i))&&q.setStyle(n,o,""),a=1}),a&&""===q.getAttrib(n,"style")&&(n.removeAttribute("style"),n.removeAttribute("data-mce-style")),le(e.attributes,function(e,i){var o;if(e=D(e,t),"number"==typeof i&&(i=e,r=0),!r||R(q.getAttrib(r,i),e)){if("class"==i&&(e=q.getAttrib(n,i),e&&(o="",le(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(o+=(o?" ":"")+e)}),o)))return void q.setAttrib(n,i,o);"class"==i&&n.removeAttribute("className"),Z.test(i)&&n.removeAttribute("data-mce-"+i),n.removeAttribute(i)}}),le(e.classes,function(e){e=D(e,t),(!r||q.hasClass(r,e))&&q.removeClass(n,e)}),o=q.getAttribs(n),i=0;i<o.length;i++)if(0!==o[i].nodeName.indexOf("_"))return ee;return"none"!=e.remove?(I(n,e),te):void 0}function I(e,t){function n(e,t,n){return e=F(e,t,n),!e||"BR"==e.nodeName||K(e)}var r=e.parentNode,i;t.block&&(G?r==q.getRoot()&&(t.list_block&&R(e,t.list_block)||le(ce(e.childNodes),function(e){X(G,e.nodeName.toLowerCase())?i?i.appendChild(e):(i=L(e,G),q.setAttribs(i,a.settings.forced_root_block_attrs)):i=0})):K(e)&&!K(r)&&(n(e,ee)||n(e.firstChild,te,1)||e.insertBefore(q.create("br"),e.firstChild),n(e,te)||n(e.lastChild,ee,1)||e.appendChild(q.create("br")))),t.selector&&t.inline&&!R(t.inline,e)||q.remove(e,1)}function F(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1==e.nodeType||!M(e))return e}function z(e,t){function n(e,t){for(i=e;i;i=i[t]){if(3==i.nodeType&&0!==i.nodeValue.length)return e;if(1==i.nodeType&&!se(i))return i}return e}var i,o,a=new r(q);if(e&&t&&(e=n(e,"previousSibling"),t=n(t,"nextSibling"),a.compare(e,t))){for(i=e.nextSibling;i&&i!=t;)o=i,i=i.nextSibling,e.appendChild(o);return q.remove(t),le(ce(t.childNodes),function(t){e.appendChild(t)}),e}return t}function W(t,n){var r,i,o;return r=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"],1==r.nodeType&&(o=r.childNodes.length-1,!n&&i&&i--,r=r.childNodes[i>o?o:i]),3===r.nodeType&&n&&i>=r.nodeValue.length&&(r=new e(r,a.getBody()).next()||r),3!==r.nodeType||n||0!==i||(r=new e(r,a.getBody()).prev()||r),r}function V(t,n,r,i){function o(e){var t=q.create("span",{id:g,"data-mce-bogus":!0,style:v?"color:red":""});return e&&t.appendChild(a.getDoc().createTextNode(Q)),t}function l(e,t){for(;e;){if(3===e.nodeType&&e.nodeValue!==Q||e.childNodes.length>1)return!1;t&&1===e.nodeType&&t.push(e),e=e.firstChild}return!0}function c(e){for(;e;){if(e.id===g)return e;e=e.parentNode}}function u(t){var n;if(t)for(n=new e(t,t),t=n.current();t;t=n.next())if(3===t.nodeType)return t}function d(e,t){var n,r;if(e)r=j.getRng(!0),l(e)?(t!==!1&&(r.setStartBefore(e),r.setEndBefore(e)),q.remove(e)):(n=u(e),n.nodeValue.charAt(0)===Q&&(n.deleteData(0,1),r.startContainer==n&&r.startOffset>0&&r.setStart(n,r.startOffset-1),r.endContainer==n&&r.endOffset>0&&r.setEnd(n,r.endOffset-1)),q.remove(e,1)),j.setRng(r);else if(e=c(j.getStart()),!e)for(;e=q.get(g);)d(e,!1)}function f(){var e,t,i,a,s,l,d;e=j.getRng(!0),a=e.startOffset,l=e.startContainer,d=l.nodeValue,t=c(j.getStart()),t&&(i=u(t)),d&&a>0&&a<d.length&&/\w/.test(d.charAt(a))&&/\w/.test(d.charAt(a-1))?(s=j.getBookmark(),e.collapse(!0),e=P(e,p(n)),e=Y.split(e),b(n,r,e),j.moveToBookmark(s)):(t&&i.nodeValue===Q?b(n,r,t):(t=o(!0),i=t.firstChild,e.insertNode(t),a=1,b(n,r,t)),j.setCursorLocation(i,a))}function h(){var e=j.getRng(!0),t,a,l,c,u,d,f=[],h,m;for(t=e.startContainer,a=e.startOffset,u=t,3==t.nodeType&&(a!=t.nodeValue.length&&(c=!0),u=u.parentNode);u;){if(w(u,n,r,i)){d=u;break}u.nextSibling&&(c=!0),f.push(u),u=u.parentNode}if(d)if(c)l=j.getBookmark(),e.collapse(!0),e=P(e,p(n),!0),e=Y.split(e),C(n,r,e),j.moveToBookmark(l);else{for(m=o(),u=m,h=f.length-1;h>=0;h--)u.appendChild(q.clone(f[h],!1)),u=u.firstChild;u.appendChild(q.doc.createTextNode(Q)),u=u.firstChild;var g=q.getParent(d,s);g&&q.isEmpty(g)?d.parentNode.replaceChild(m,d):q.insertAfter(m,d),j.setCursorLocation(u,1),q.isEmpty(d)&&q.remove(d)}}function m(){var e;e=c(j.getStart()),e&&!q.isEmpty(e)&&ue(e,function(e){1!=e.nodeType||e.id===g||q.isEmpty(e)||q.setAttrib(e,"data-mce-bogus",null)},"childNodes")}var g="_mce_caret",v=a.settings.caret_debug;a._hasCaretEvents||(ae=function(){var e=[],t;if(l(c(j.getStart()),e))for(t=e.length;t--;)q.setAttrib(e[t],"data-mce-bogus","1")},oe=function(e){var t=e.keyCode;d(),8==t&&j.isCollapsed()&&j.getStart().innerHTML==Q&&d(c(j.getStart())),(37==t||39==t)&&d(c(j.getStart())),m()},a.on("SetContent",function(e){e.selection&&m()}),a._hasCaretEvents=!0),"apply"==t?f():h()}function U(t){var n=t.startContainer,r=t.startOffset,i,o,a,s,l;if((t.startContainer!=t.endContainer||!c(t.startContainer.childNodes[t.startOffset]))&&(3==n.nodeType&&r>=n.nodeValue.length&&(r=J(n),n=n.parentNode,i=!0),1==n.nodeType))for(s=n.childNodes,n=s[Math.min(r,s.length-1)],o=new e(n,q.getParent(n,q.isBlock)),(r>s.length-1||i)&&o.next(),a=o.current();a;a=o.next())if(3==a.nodeType&&!M(a))return l=q.create("a",{"data-mce-bogus":"all"},Q),a.parentNode.insertBefore(l,a),t.setStart(a,0),j.setRng(t),void q.remove(l)}var $={},q=a.dom,j=a.selection,Y=new t(q),X=a.schema.isValidChild,K=q.isBlock,G=a.settings.forced_root_block,J=q.nodeIndex,Q="\ufeff",Z=/^(src|href|style)$/,ee=!1,te=!0,ne,re,ie=q.getContentEditable,oe,ae,se=n.isBookmarkNode,le=i.each,ce=i.grep,ue=i.walk,de=i.extend;de(this,{get:p,register:m,unregister:g,apply:b,remove:C,toggle:x,match:E,matchAll:N,matchNode:w,canApply:_,formatChanged:S,getCssText:k}),f(),h(),a.on("BeforeGetContent",function(e){ae&&"raw"!=e.format&&ae()}),a.on("mouseup keydown",function(e){oe&&oe(e)})}}),r(J,[I,h],function(e,t){return function(e){function n(){return e.serializer.getTrimmedContent()}function r(t){e.setDirty(t)}function i(e){o.typing=!1,o.add({},e)}var o=this,a=0,s=[],l,c,u=0;return e.on("init",function(){o.add()}),e.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&o.beforeChange()}),e.on("ExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&i(e)}),e.on("ObjectResizeStart Cut",function(){o.beforeChange()}),e.on("SaveContent ObjectResized blur",i),e.on("DragEnd",i),e.on("KeyUp",function(a){var l=a.keyCode;a.isDefaultPrevented()||((l>=33&&36>=l||l>=37&&40>=l||45==l||13==l||a.ctrlKey)&&(i(),e.nodeChanged()),(46==l||8==l||t.mac&&(91==l||93==l))&&e.nodeChanged(),c&&o.typing&&(e.isDirty()||(r(s[0]&&n()!=s[0].content),e.isDirty()&&e.fire("change",{level:s[0],lastLevel:null})),e.fire("TypingUndo"),c=!1,e.nodeChanged()))}),e.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented()){if(t>=33&&36>=t||t>=37&&40>=t||45==t)return void(o.typing&&i(e));var n=e.ctrlKey&&!e.altKey||e.metaKey;!(16>t||t>20)||224==t||91==t||o.typing||n||(o.beforeChange(),o.typing=!0,o.add({},e),c=!0)}}),e.on("MouseDown",function(e){o.typing&&i(e)}),e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo"),e.on("AddUndo Undo Redo ClearUndos",function(t){t.isDefaultPrevented()||e.nodeChanged()}),o={data:s,typing:!1,beforeChange:function(){u||(l=e.selection.getBookmark(2,!0))},add:function(t,i){var o,c=e.settings,d;if(t=t||{},t.content=n(),u||e.removed)return null;if(d=s[a],e.fire("BeforeAddUndo",{level:t,lastLevel:d,originalEvent:i}).isDefaultPrevented())return null;if(d&&d.content==t.content)return null;if(s[a]&&(s[a].beforeBookmark=l),c.custom_undo_redo_levels&&s.length>c.custom_undo_redo_levels){for(o=0;o<s.length-1;o++)s[o]=s[o+1];s.length--,a=s.length}t.bookmark=e.selection.getBookmark(2,!0),a<s.length-1&&(s.length=a+1),s.push(t),a=s.length-1;var f={level:t,lastLevel:d,originalEvent:i};return e.fire("AddUndo",f),a>0&&(r(!0),e.fire("change",f)),t},undo:function(){var t;return o.typing&&(o.add(),o.typing=!1),a>0&&(t=s[--a],e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(t.beforeBookmark),r(!0),e.fire("undo",{level:t})),t},redo:function(){var t;return a<s.length-1&&(t=s[++a],e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(t.bookmark),r(!0),e.fire("redo",{level:t})),t},clear:function(){s=[],a=0,o.typing=!1,e.fire("ClearUndos")},hasUndo:function(){return a>0||o.typing&&s[0]&&n()!=s[0].content},hasRedo:function(){return a<s.length-1&&!this.typing},transact:function(e){o.beforeChange();try{u++,e()}finally{u--}o.add()}}}}),r(Q,[y,T,h],function(e,t,n){var r=n.ie&&n.ie<11;return function(i){function o(o){function h(e){return e&&a.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&!/^(fixed|absolute)/i.test(e.style.position)&&"true"!==a.getContentEditable(e)}function p(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function m(e){var t;a.isBlock(e)&&(t=s.getRng(),e.appendChild(a.create("span",null,"\xa0")),s.select(e),e.lastChild.outerHTML="",s.setRng(t))}function g(e){var t=e,n=[],r;if(t){for(;t=t.firstChild;){if(a.isBlock(t))return;1!=t.nodeType||d[t.nodeName.toLowerCase()]||n.push(t)}for(r=n.length;r--;)t=n[r],!t.hasChildNodes()||t.firstChild==t.lastChild&&""===t.firstChild.nodeValue?a.remove(t):"A"==t.nodeName&&" "===(t.innerText||t.textContent)&&a.remove(t)}}function v(t){function r(e){for(;e;){if(1==e.nodeType||3==e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}var i,o,l,c=t,u;if(t){if(n.ie&&n.ie<9&&L&&L.firstChild&&L.firstChild==L.lastChild&&"BR"==L.firstChild.tagName&&a.remove(L.firstChild),/^(LI|DT|DD)$/.test(t.nodeName)){var d=r(t.firstChild);d&&/^(UL|OL|DL)$/.test(d.nodeName)&&t.insertBefore(a.doc.createTextNode("\xa0"),t.firstChild)}if(l=a.createRng(),n.ie||t.normalize(),t.hasChildNodes()){for(i=new e(t,t);o=i.current();){if(3==o.nodeType){l.setStart(o,0),l.setEnd(o,0);break}if(f[o.nodeName.toLowerCase()]){l.setStartBefore(o),l.setEndBefore(o);break}c=o,o=i.next()}o||(l.setStart(c,0),l.setEnd(c,0))}else"BR"==t.nodeName?t.nextSibling&&a.isBlock(t.nextSibling)?((!P||9>P)&&(u=a.create("br"),t.parentNode.insertBefore(u,t)),l.setStartBefore(t),l.setEndBefore(t)):(l.setStartAfter(t),l.setEndAfter(t)):(l.setStart(t,0),l.setEnd(t,0));s.setRng(l),a.remove(u),s.scrollIntoView(t)}}function y(e){var t=l.forced_root_block;t&&t.toLowerCase()===e.tagName.toLowerCase()&&a.setAttribs(e,l.forced_root_block_attrs)}function b(e){e.innerHTML=r?"":'<br data-mce-bogus="1">'}function C(e){var t=D,n,i,o,s=u.getTextInlineElements();if(e||"TABLE"==z?(n=a.create(e||V),y(n)):n=L.cloneNode(!1),o=n,l.keep_styles!==!1)do if(s[t.nodeName]){if("_mce_caret"==t.id)continue;i=t.cloneNode(!1),a.setAttrib(i,"id",""),n.hasChildNodes()?(i.appendChild(n.firstChild),n.appendChild(i)):(o=i,n.appendChild(i))}while(t=t.parentNode);return r||(o.innerHTML='<br data-mce-bogus="1">'),n}function x(t){var n,r,i;if(3==D.nodeType&&(t?M>0:M<D.nodeValue.length))return!1;if(D.parentNode==L&&U&&!t)return!0;if(t&&1==D.nodeType&&D==L.firstChild)return!0;if("TABLE"===D.nodeName||D.previousSibling&&"TABLE"==D.previousSibling.nodeName)return U&&!t||!U&&t;for(n=new e(D,L),3==D.nodeType&&(t&&0===M?n.prev():t||M!=D.nodeValue.length||n.next());r=n.current();){if(1===r.nodeType){if(!r.getAttribute("data-mce-bogus")&&(i=r.nodeName.toLowerCase(),d[i]&&"br"!==i))return!1}else if(3===r.nodeType&&!/^[ \t\r\n]*$/.test(r.nodeValue))return!1;t?n.prev():n.next()}return!0}function w(e,t){var n,r,o,s,l,c,d=V||"P";if(r=a.getParent(e,a.isBlock),!r||!h(r)){if(r=r||B,c=r==i.getBody()||p(r)?r.nodeName.toLowerCase():r.parentNode.nodeName.toLowerCase(),!r.hasChildNodes())return n=a.create(d),y(n),r.appendChild(n),R.setStart(n,0),R.setEnd(n,0),n;for(s=e;s.parentNode!=r;)s=s.parentNode;for(;s&&!a.isBlock(s);)o=s,s=s.previousSibling;if(o&&u.isValidChild(c,d.toLowerCase())){for(n=a.create(d),y(n),o.parentNode.insertBefore(n,o),s=o;s&&!a.isBlock(s);)l=s.nextSibling,n.appendChild(s),s=l;R.setStart(e,t),R.setEnd(e,t)}}return e}function E(){function e(e){for(var t=F[e?"firstChild":"lastChild"];t&&1!=t.nodeType;)t=t[e?"nextSibling":"previousSibling"];return t===L}function t(){var e=F.parentNode;return/^(LI|DT|DD)$/.test(e.nodeName)?e:F}if(F!=i.getBody()){var n=F.parentNode.nodeName;/^(OL|UL|LI)$/.test(n)&&(V="LI"),O=V?C(V):a.create("BR"),e(!0)&&e()?"LI"==n?a.insertAfter(O,t()):a.replace(O,F):e(!0)?"LI"==n?(a.insertAfter(O,t()),O.appendChild(a.doc.createTextNode(" ")),O.appendChild(F)):F.parentNode.insertBefore(O,F):e()?(a.insertAfter(O,t()),m(O)):(F=t(),A=R.cloneRange(),A.setStartAfter(L),A.setEndAfter(F),I=A.extractContents(),"LI"==V&&"LI"==I.firstChild.nodeName?(O=I.firstChild,a.insertAfter(I,F)):(a.insertAfter(I,F),a.insertAfter(O,F))),a.remove(L),v(O),c.add()}}function N(){i.execCommand("InsertLineBreak",!1,o)}function _(e){do 3===e.nodeType&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;while(e)}function S(e){var t=a.getRoot(),n,r;for(n=e;n!==t&&"false"!==a.getContentEditable(n);)"true"===a.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==t?r:t}function k(e){var t;r||(e.normalize(),t=e.lastChild,(!t||/^(left|right)$/gi.test(a.getStyle(t,"float",!0)))&&a.add(e,"br"))}function T(){O=/^(H[1-6]|PRE|FIGURE)$/.test(z)&&"HGROUP"!=W?C(V):C(),l.end_container_on_empty_block&&h(F)&&a.isEmpty(L)?O=a.split(F,L):a.insertAfter(O,L),v(O)}var R,A,B,D,M,L,P,H,O,I,F,z,W,V,U;if(R=s.getRng(!0),!o.isDefaultPrevented()){if(!R.collapsed)return void i.execCommand("Delete");if(new t(a).normalize(R),D=R.startContainer,M=R.startOffset,V=(l.force_p_newlines?"p":"")||l.forced_root_block,V=V?V.toUpperCase():"",P=a.doc.documentMode,H=o.shiftKey,1==D.nodeType&&D.hasChildNodes()&&(U=M>D.childNodes.length-1,D=D.childNodes[Math.min(M,D.childNodes.length-1)]||D,M=U&&3==D.nodeType?D.nodeValue.length:0),B=S(D)){if(c.beforeChange(),!a.isBlock(B)&&B!=a.getRoot())return void((!V||H)&&N());if((V&&!H||!V&&H)&&(D=w(D,M)),L=a.getParent(D,a.isBlock),F=L?a.getParent(L.parentNode,a.isBlock):null,z=L?L.nodeName.toUpperCase():"",W=F?F.nodeName.toUpperCase():"","LI"!=W||o.ctrlKey||(L=F,z=W),/^(LI|DT|DD)$/.test(z)){if(!V&&H)return void N();if(a.isEmpty(L))return void E()}if("PRE"==z&&l.br_in_pre!==!1){if(!H)return void N()}else if(!V&&!H&&"LI"!=z||V&&H)return void N();V&&L===i.getBody()||(V=V||"P",x()?T():x(!0)?(O=L.parentNode.insertBefore(C(),L),m(O),v(L)):(A=R.cloneRange(),A.setEndAfter(L),I=A.extractContents(),_(I),O=I.firstChild,a.insertAfter(I,L),g(O),k(L),a.isEmpty(L)&&b(L),O.normalize(),a.isEmpty(O)?(a.remove(O),T()):v(O)),a.setAttrib(O,"id",""),i.fire("NewBlock",{newBlock:O}),c.add())}}}var a=i.dom,s=i.selection,l=i.settings,c=i.undoManager,u=i.schema,d=u.getNonEmptyElements(),f=u.getMoveCaretBeforeOnEnterElements();i.on("keydown",function(e){13==e.keyCode&&o(e)!==!1&&e.preventDefault()})}}),r(Z,[],function(){return function(e){function t(){var t=i.getStart(),s=e.getBody(),l,c,u,d,f,h,p,m=-16777215,g,v,y,b,C;if(C=n.forced_root_block,t&&1===t.nodeType&&C){for(;t&&t!=s;){if(a[t.nodeName])return;t=t.parentNode}if(l=i.getRng(),l.setStart){c=l.startContainer,u=l.startOffset,d=l.endContainer,f=l.endOffset;try{v=e.getDoc().activeElement===s}catch(x){}}else l.item&&(t=l.item(0),l=e.getDoc().body.createTextRange(),l.moveToElementText(t)),v=l.parentElement().ownerDocument===e.getDoc(),y=l.duplicate(),y.collapse(!0),u=-1*y.move("character",m),y.collapsed||(y=l.duplicate(),y.collapse(!1),f=-1*y.move("character",m)-u);for(t=s.firstChild,b=s.nodeName.toLowerCase();t;)if((3===t.nodeType||1==t.nodeType&&!a[t.nodeName])&&o.isValidChild(b,C.toLowerCase())){if(3===t.nodeType&&0===t.nodeValue.length){p=t,t=t.nextSibling,r.remove(p);continue}h||(h=r.create(C,e.settings.forced_root_block_attrs),t.parentNode.insertBefore(h,t),g=!0),p=t,t=t.nextSibling,h.appendChild(p)}else h=null,t=t.nextSibling;if(g&&v){if(l.setStart)l.setStart(c,u),l.setEnd(d,f),i.setRng(l);else try{l=e.getDoc().body.createTextRange(),l.moveToElementText(s),l.collapse(!0),l.moveStart("character",u),f>0&&l.moveEnd("character",f),l.select()}catch(x){}e.nodeChanged()}}}var n=e.settings,r=e.dom,i=e.selection,o=e.schema,a=o.getBlockElements();n.forced_root_block&&e.on("NodeChange",t)}}),r(ee,[P,h,m,X,T,y],function(e,n,r,i,o,a){var s=r.each,l=r.extend,c=r.map,u=r.inArray,d=r.explode,f=n.ie,h=n.ie&&n.ie<11,p=!0,m=!1;return function(r){function g(e,t,n,i){var o,a,l=0;if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||i&&i.skip_focus||r.focus(),i=r.fire("BeforeExecCommand",{command:e,ui:t,value:n}),i.isDefaultPrevented())return!1;if(a=e.toLowerCase(),o=M.exec[a])return o(a,t,n),r.fire("ExecCommand",{command:e,ui:t,value:n}),!0;if(s(r.plugins,function(i){return i.execCommand&&i.execCommand(e,t,n)?(r.fire("ExecCommand",{command:e,ui:t,value:n}),l=!0,!1):void 0}),l)return l;if(r.theme&&r.theme.execCommand&&r.theme.execCommand(e,t,n))return r.fire("ExecCommand",{command:e,ui:t,value:n}),!0;try{l=r.getDoc().execCommand(e,t,n)}catch(c){}return l?(r.fire("ExecCommand",{command:e,ui:t,value:n}),!0):!1}function v(e){var t;if(!r._isHidden()){if(e=e.toLowerCase(),t=M.state[e])return t(e);try{return r.getDoc().queryCommandState(e)}catch(n){}return!1}}function y(e){var t;if(!r._isHidden()){if(e=e.toLowerCase(),t=M.value[e])return t(e);try{return r.getDoc().queryCommandValue(e)}catch(n){}}}function b(e,t){t=t||"exec",s(e,function(e,n){s(n.toLowerCase().split(","),function(n){M[t][n]=e})})}function C(e,t,n){e=e.toLowerCase(),M.exec[e]=function(e,i,o,a){return t.call(n||r,i,o,a)}}function x(e){if(e=e.toLowerCase(),M.exec[e])return!0;try{return r.getDoc().queryCommandSupported(e)}catch(t){}return!1}function w(e,t,n){e=e.toLowerCase(),M.state[e]=function(){return t.call(n||r)}}function E(e,t,n){e=e.toLowerCase(),M.value[e]=function(){return t.call(n||r)}}function N(e){return e=e.toLowerCase(),!!M.exec[e]}function _(e,n,i){return n===t&&(n=m),i===t&&(i=null),r.getDoc().execCommand(e,n,i)}function S(e){return D.match(e)}function k(e,n){D.toggle(e,n?{value:n}:t),r.nodeChanged()}function T(e){P=B.getBookmark(e)}function R(){B.moveToBookmark(P)}var A,B,D,M={state:{},exec:{},value:{}},L=r.settings,P;r.on("PreInit",function(){A=r.dom,B=r.selection,L=r.settings,D=r.formatter}),l(this,{execCommand:g,queryCommandState:v,queryCommandValue:y,queryCommandSupported:x,addCommands:b,addCommand:C,addQueryStateHandler:w,addQueryValueHandler:E,hasCustomCommand:N}),b({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){r.undoManager.add()},"Cut,Copy,Paste":function(e){var t=r.getDoc(),i;try{_(e)}catch(o){i=p}if(i||!t.queryCommandSupported(e)){var a=r.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");n.mac&&(a=a.replace(/Ctrl\+/g,"\u2318+")),r.notificationManager.open({text:a,type:"error"})}},unlink:function(){if(B.isCollapsed()){var e=B.getNode();return void("A"==e.tagName&&r.dom.remove(e,!0))}D.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"==t&&(t="justify"),s("left,center,right,justify".split(","),function(e){t!=e&&D.remove("align"+e)}),"none"!=t&&k("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;_(e),t=A.getParent(B.getNode(),"ol,ul"),t&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(T(),A.split(n,t),R()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){k(e)},"ForeColor,HiliteColor,FontName":function(e,t,n){k(e,n)},FontSize:function(e,t,n){var r,i;n>=1&&7>=n&&(i=d(L.font_size_style_values),r=d(L.font_size_classes),n=r?r[n-1]||n:i[n-1]||n),k(e,n)},RemoveFormat:function(e){D.remove(e)},mceBlockQuote:function(){k("blockquote")},FormatBlock:function(e,t,n){return k(n||"p")},mceCleanup:function(){var e=B.getBookmark();r.setContent(r.getContent({cleanup:p}),{cleanup:p}),B.moveToBookmark(e)},mceRemoveNode:function(e,t,n){var i=n||B.getNode();i!=r.getBody()&&(T(),r.dom.remove(i,p),R())},mceSelectNodeDepth:function(e,t,n){var i=0;A.getParent(B.getNode(),function(e){return 1==e.nodeType&&i++==n?(B.select(e),m):void 0},r.getBody())},mceSelectNode:function(e,t,n){B.select(n)},mceInsertContent:function(t,n,o){function a(e){function t(e){return r[e]&&3==r[e].nodeType}var n,r,i;return n=B.getRng(!0),r=n.startContainer,i=n.startOffset,3==r.nodeType&&(i>0?e=e.replace(/^&nbsp;/," "):t("previousSibling")||(e=e.replace(/^ /,"&nbsp;")),i<r.length?e=e.replace(/&nbsp;(<br>|)$/," "):t("nextSibling")||(e=e.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),e}function l(){var e,t,n;e=B.getRng(!0),t=e.startContainer,n=e.startOffset,3==t.nodeType&&e.collapsed&&("\xa0"===t.data[n]?(t.deleteData(n,1),/[\u00a0| ]$/.test(o)||(o+=" ")):"\xa0"===t.data[n-1]&&(t.deleteData(n-1,1),/[\u00a0| ]$/.test(o)||(o=" "+o)))}function c(e){if(N)for(x=e.firstChild;x;x=x.walk(!0))S[x.name]&&x.attr("data-mce-new","true")}function u(){if(N){var e=r.getBody(),t=new i(A);s(A.select("*[data-mce-new]"),function(n){n.removeAttribute("data-mce-new");for(var r=n.parentNode;r&&r!=e;r=r.parentNode)t.compare(r,n)&&A.remove(n,!0)})}}function d(e){function t(e){for(var t=r.getBody();e&&e!==t;e=e.parentNode)if("false"===r.dom.getContentEditable(e))return e;return null}var n;if(e){if(B.scrollIntoView(e),n=t(e))return A.remove(e),void B.select(n);C=A.createRng(),x=e.previousSibling,x&&3==x.nodeType?(C.setStart(x,x.nodeValue.length),f||(w=e.nextSibling,w&&3==w.nodeType&&(x.appendData(w.data),w.parentNode.removeChild(w)))):(C.setStartBefore(e),C.setEndBefore(e)),A.remove(e),B.setRng(C)}}var h,p,m,g,v,y,b,C,x,w,E,N,_,S=r.schema.getTextInlineElements();"string"!=typeof o&&(N=o.merge,_=o.data,o=o.content),/^ | $/.test(o)&&(o=a(o)),h=r.parser,p=new e({validate:L.validate},r.schema),E='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',y={content:o,format:"html",selection:!0},r.fire("BeforeSetContent",y),o=y.content,-1==o.indexOf("{$caret}")&&(o+="{$caret}"),o=o.replace(/\{\$caret\}/,E),C=B.getRng();var k=C.startContainer||(C.parentElement?C.parentElement():null),T=r.getBody();k===T&&B.isCollapsed()&&A.isBlock(T.firstChild)&&A.isEmpty(T.firstChild)&&(C=A.createRng(),C.setStart(T.firstChild,0),C.setEnd(T.firstChild,0),B.setRng(C)),B.isCollapsed()||(r.selection.setRng(r.selection.getRng()),r.getDoc().execCommand("Delete",!1,null),l()),m=B.getNode();var R={context:m.nodeName.toLowerCase(),data:_};if(v=h.parse(o,R),c(v),x=v.lastChild,"mce_marker"==x.attr("id"))for(b=x,x=x.prev;x;x=x.walk(!0))if(3==x.type||!A.isBlock(x.name)){r.schema.isValidChild(x.parent.name,"span")&&x.parent.insert(b,x,"br"===x.name);break}if(r._selectionOverrides.showBlockCaretContainer(m),R.invalid){for(B.setContent(E),m=B.getNode(),g=r.getBody(),9==m.nodeType?m=x=g:x=m;x!==g;)m=x,x=x.parentNode;o=m==g?g.innerHTML:A.getOuterHTML(m),o=p.serialize(h.parse(o.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return p.serialize(v)}))),m==g?A.setHTML(g,o):A.setOuterHTML(m,o)}else o=p.serialize(v),x=m.firstChild,w=m.lastChild,!x||x===w&&"BR"===x.nodeName?A.setHTML(m,o):B.setContent(o);u(),d(A.get("mce_marker")),r.fire("SetContent",y),r.addVisual()},mceInsertRawHTML:function(e,t,n){B.setContent("tiny_mce_marker"),r.setContent(r.getContent().replace(/tiny_mce_marker/g,function(){return n}))},mceToggleFormat:function(e,t,n){k(n)},mceSetContent:function(e,t,n){r.setContent(n)},"Indent,Outdent":function(e){var t,n,i;t=L.indentation,n=/[a-z%]+$/i.exec(t),t=parseInt(t,10),v("InsertUnorderedList")||v("InsertOrderedList")?_(e):(L.forced_root_block||A.getParent(B.getNode(),A.isBlock)||D.apply("div"),s(B.getSelectedBlocks(),function(o){if("false"!==A.getContentEditable(o)&&"LI"!=o.nodeName){var a=r.getParam("indent_use_margin",!1)?"margin":"padding";a+="rtl"==A.getStyle(o,"direction",!0)?"Right":"Left","outdent"==e?(i=Math.max(0,parseInt(o.style[a]||0,10)-t),A.setStyle(o,a,i?i+n:"")):(i=parseInt(o.style[a]||0,10)+t+n,A.setStyle(o,a,i))}}))},mceRepaint:function(){},InsertHorizontalRule:function(){r.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){r.hasVisual=!r.hasVisual,r.addVisual()},mceReplaceContent:function(e,t,n){r.execCommand("mceInsertContent",!1,n.replace(/\{\$selection\}/g,B.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=A.getParent(B.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||D.remove("link"),n.href&&D.apply("link",n,r)},selectAll:function(){var e=A.getRoot(),t;B.getRng().setStart?(t=A.createRng(),t.setStart(e,0),t.setEnd(e,e.childNodes.length),B.setRng(t)):(t=B.getRng(),t.item||(t.moveToElementText(e),t.select()))},"delete":function(){_("Delete");var e=r.getBody();A.isEmpty(e)&&(r.setContent(""),e.firstChild&&A.isBlock(e.firstChild)?r.selection.setCursorLocation(e.firstChild,0):r.selection.setCursorLocation(e,0))},mceNewDocument:function(){r.setContent("")},InsertLineBreak:function(e,t,n){function i(){for(var e=new a(m,v),t,n=r.schema.getNonEmptyElements();t=e.next();)if(n[t.nodeName.toLowerCase()]||t.length>0)return!0}var s=n,l,c,u,d=B.getRng(!0);new o(A).normalize(d);var f=d.startOffset,m=d.startContainer;if(1==m.nodeType&&m.hasChildNodes()){var g=f>m.childNodes.length-1;m=m.childNodes[Math.min(f,m.childNodes.length-1)]||m,f=g&&3==m.nodeType?m.nodeValue.length:0}var v=A.getParent(m,A.isBlock),y=v?v.nodeName.toUpperCase():"",b=v?A.getParent(v.parentNode,A.isBlock):null,C=b?b.nodeName.toUpperCase():"",x=s&&s.ctrlKey;"LI"!=C||x||(v=b,y=C),m&&3==m.nodeType&&f>=m.nodeValue.length&&(h||i()||(l=A.create("br"),d.insertNode(l),d.setStartAfter(l),d.setEndAfter(l),c=!0)),l=A.create("br"),d.insertNode(l);var w=A.doc.documentMode;return h&&"PRE"==y&&(!w||8>w)&&l.parentNode.insertBefore(A.doc.createTextNode("\r"),l),u=A.create("span",{},"&nbsp;"),l.parentNode.insertBefore(u,l),B.scrollIntoView(u),A.remove(u),c?(d.setStartBefore(l),d.setEndBefore(l)):(d.setStartAfter(l),d.setEndAfter(l)),B.setRng(d),r.undoManager.add(),p}}),b({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(e){var t="align"+e.substring(7),n=B.isCollapsed()?[A.getParent(B.getNode(),A.isBlock)]:B.getSelectedBlocks(),r=c(n,function(e){return!!D.matchNode(e,t)});return-1!==u(r,p)},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return S(e)},mceBlockQuote:function(){return S("blockquote")},Outdent:function(){var e;if(L.inline_styles){if((e=A.getParent(B.getStart(),A.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return p;if((e=A.getParent(B.getEnd(),A.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return p}return v("InsertUnorderedList")||v("InsertOrderedList")||!L.inline_styles&&!!A.getParent(B.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=A.getParent(B.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),b({"FontSize,FontName":function(e){var t=0,n;return(n=A.getParent(B.getNode(),"span"))&&(t="fontsize"==e?n.style.fontSize:n.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()),t}},"value"),b({Undo:function(){r.undoManager.undo()},Redo:function(){r.undoManager.redo()}})}}),r(te,[m],function(e){function t(e,o){var a=this,s,l;if(e=r(e),
o=a.settings=o||{},s=o.base_uri,/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e))return void(a.source=e);var c=0===e.indexOf("//");0!==e.indexOf("/")||c||(e=(s?s.protocol||"http":"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(l=o.base_uri?o.base_uri.path:new t(location.href).directory,""===o.base_uri.protocol?e="//mce_host"+a.toAbsPath(l,e):(e=/([^#?]*)([#?]?.*)/.exec(e),e=(s&&s.protocol||"http")+"://mce_host"+a.toAbsPath(l,e[1])+e[2])),e=e.replace(/@@/g,"(mce_at)"),e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),n(i,function(t,n){var r=e[n];r&&(r=r.replace(/\(mce_at\)/g,"@@")),a[t]=r}),s&&(a.protocol||(a.protocol=s.protocol),a.userInfo||(a.userInfo=s.userInfo),a.port||"mce_host"!==a.host||(a.port=s.port),a.host&&"mce_host"!==a.host||(a.host=s.host),a.source=""),c&&(a.protocol="")}var n=e.each,r=e.trim,i="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),o={ftp:21,http:80,https:443,mailto:25};return t.prototype={setPath:function(e){var t=this;e=/^(.*?)\/?(\w+)?$/.exec(e),t.path=e[0],t.directory=e[1],t.file=e[2],t.source="",t.getURI()},toRelative:function(e){var n=this,r;if("./"===e)return e;if(e=new t(e,{base_uri:n}),"mce_host"!=e.host&&n.host!=e.host&&e.host||n.port!=e.port||n.protocol!=e.protocol&&""!==e.protocol)return e.getURI();var i=n.getURI(),o=e.getURI();return i==o||"/"==i.charAt(i.length-1)&&i.substr(0,i.length-1)==o?i:(r=n.toRelPath(n.path,e.path),e.query&&(r+="?"+e.query),e.anchor&&(r+="#"+e.anchor),r)},toAbsolute:function(e,n){return e=new t(e,{base_uri:this}),e.getURI(n&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=o[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r=0,i="",o,a;if(e=e.substring(0,e.lastIndexOf("/")),e=e.split("/"),n=t.split("/"),e.length>=n.length)for(o=0,a=e.length;a>o;o++)if(o>=n.length||e[o]!=n[o]){r=o+1;break}if(e.length<n.length)for(o=0,a=n.length;a>o;o++)if(o>=e.length||e[o]!=n[o]){r=o+1;break}if(1===r)return t;for(o=0,a=e.length-(r-1);a>o;o++)i+="../";for(o=r-1,a=n.length;a>o;o++)i+=o!=r-1?"/"+n[o]:n[o];return i},toAbsPath:function(e,t){var r,i=0,o=[],a,s;for(a=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),n(e,function(e){e&&o.push(e)}),e=o,r=t.length-1,o=[];r>=0;r--)0!==t[r].length&&"."!==t[r]&&(".."!==t[r]?i>0?i--:o.push(t[r]):i++);return r=e.length-i,s=0>=r?o.reverse().join("/"):e.slice(0,r).join("/")+"/"+o.reverse().join("/"),0!==s.indexOf("/")&&(s="/"+s),a&&s.lastIndexOf("/")!==s.length-1&&(s+=a),s},getURI:function(e){var t,n=this;return(!n.source||e)&&(t="",e||(t+=n.protocol?n.protocol+"://":"//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},t.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}},t}),r(ne,[m],function(e){function t(){}var n=e.each,r=e.extend,i,o;return t.extend=i=function(e){function t(){var e,t,n,r=this;if(!o&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)n=t[e],n.init&&n.init.apply(r,arguments)}function a(){return this}function s(e,t){return function(){var n=this,r=n._super,i;return n._super=c[e],i=t.apply(n,arguments),n._super=r,i}}var l=this,c=l.prototype,u,d,f;o=!0,u=new l,o=!1,e.Mixins&&(n(e.Mixins,function(t){t=t;for(var n in t)"init"!==n&&(e[n]=t[n])}),c.Mixins&&(e.Mixins=c.Mixins.concat(e.Mixins))),e.Methods&&n(e.Methods.split(","),function(t){e[t]=a}),e.Properties&&n(e.Properties.split(","),function(t){var n="_"+t;e[t]=function(e){var t=this,r;return e!==r?(t[n]=e,t):t[n]}}),e.Statics&&n(e.Statics,function(e,n){t[n]=e}),e.Defaults&&c.Defaults&&(e.Defaults=r({},c.Defaults,e.Defaults));for(d in e)f=e[d],"function"==typeof f&&c[d]?u[d]=s(d,f):u[d]=f;return t.prototype=u,t.constructor=t,t.extend=i,t},t}),r(re,[m],function(e){function t(t){function n(){return!1}function r(){return!0}function i(e,i){var o,s,l,c;if(e=e.toLowerCase(),i=i||{},i.type=e,i.target||(i.target=u),i.preventDefault||(i.preventDefault=function(){i.isDefaultPrevented=r},i.stopPropagation=function(){i.isPropagationStopped=r},i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=r},i.isDefaultPrevented=n,i.isPropagationStopped=n,i.isImmediatePropagationStopped=n),t.beforeFire&&t.beforeFire(i),o=d[e])for(s=0,l=o.length;l>s;s++){if(c=o[s],c.once&&a(e,c.func),i.isImmediatePropagationStopped())return i.stopPropagation(),i;if(c.func.call(u,i)===!1)return i.preventDefault(),i}return i}function o(t,r,i,o){var a,s,l;if(r===!1&&(r=n),r)for(r={func:r},o&&e.extend(r,o),s=t.toLowerCase().split(" "),l=s.length;l--;)t=s[l],a=d[t],a||(a=d[t]=[],f(t,!0)),i?a.unshift(r):a.push(r);return c}function a(e,t){var n,r,i,o,a;if(e)for(o=e.toLowerCase().split(" "),n=o.length;n--;){if(e=o[n],r=d[e],!e){for(i in d)f(i,!1),delete d[i];return c}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),d[e]=r);else r.length=0;r.length||(f(e,!1),delete d[e])}}else{for(e in d)f(e,!1);d={}}return c}function s(e,t,n){return o(e,t,n,{once:!0})}function l(e){return e=e.toLowerCase(),!(!d[e]||0===d[e].length)}var c=this,u,d={},f;t=t||{},u=t.scope||c,f=t.toggleEvent||n,c.fire=i,c.on=o,c.off=a,c.once=s,c.has=l}var n=e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchend"," ");return t.isNative=function(e){return!!n[e.toLowerCase()]},t}),r(ie,[],function(){function e(e){this.create=e.create}return e.create=function(t,n){return new e({create:function(e,r){function i(t){e.set(r,t.value)}function o(e){t.set(n,e.value)}var a;return e.on("change:"+r,o),t.on("change:"+n,i),a=e._bindings,a||(a=e._bindings=[],e.on("destroy",function(){for(var e=a.length;e--;)a[e]()})),a.push(function(){t.off("change:"+n,i)}),t.get(n)}})},e}),r(oe,[re],function(e){function t(t){return t._eventDispatcher||(t._eventDispatcher=new e({scope:t,toggleEvent:function(n,r){e.isNative(n)&&t.toggleNativeEvent&&t.toggleNativeEvent(n,r)}})),t._eventDispatcher}return{fire:function(e,n,r){var i=this;if(i.removed&&"remove"!==e)return n;if(n=t(i).fire(e,n,r),r!==!1&&i.parent)for(var o=i.parent();o&&!n.isPropagationStopped();)o.fire(e,n,!1),o=o.parent();return n},on:function(e,n,r){return t(this).on(e,n,r)},off:function(e,n){return t(this).off(e,n)},once:function(e,n){return t(this).once(e,n)},hasEventListeners:function(e){return t(this).has(e)}}}),r(ae,[ie,oe,ne,m],function(e,t,n,r){function i(e){return e.nodeType>0}function o(e,t){var n,a;if(e===t)return!0;if(null===e||null===t)return e===t;if("object"!=typeof e||"object"!=typeof t)return e===t;if(r.isArray(t)){if(e.length!==t.length)return!1;for(n=e.length;n--;)if(!o(e[n],t[n]))return!1}if(i(e)||i(t))return e===t;a={};for(n in t){if(!o(e[n],t[n]))return!1;a[n]=!0}for(n in e)if(!a[n]&&!o(e[n],t[n]))return!1;return!0}return n.extend({Mixins:[t],init:function(t){var n,r;t=t||{};for(n in t)r=t[n],r instanceof e&&(t[n]=r.create(this,n));this.data=t},set:function(t,n){var r,i,a=this.data[t];if(n instanceof e&&(n=n.create(this,t)),"object"==typeof t){for(r in t)this.set(r,t[r]);return this}return o(a,n)||(this.data[t]=n,i={target:this,name:t,value:n,oldValue:a},this.fire("change:"+t,i),this.fire("change",i)),this},get:function(e){return this.data[e]},has:function(e){return e in this.data},bind:function(t){return e.create(this,t)},destroy:function(){this.fire("destroy")}})}),r(se,[ne],function(e){function t(e){for(var t=[],n=e.length,r;n--;)r=e[n],r.__checked||(t.push(r),r.__checked=1);for(n=t.length;n--;)delete t[n].__checked;return t}var n=/^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i=/^\s*|\s*$/g,o,a=e.extend({init:function(e){function t(e){return e?(e=e.toLowerCase(),function(t){return"*"===e||t.type===e}):void 0}function o(e){return e?function(t){return t._name===e}:void 0}function a(e){return e?(e=e.split("."),function(t){for(var n=e.length;n--;)if(!t.classes.contains(e[n]))return!1;return!0}):void 0}function s(e,t,n){return e?function(r){var i=r[e]?r[e]():"";return t?"="===t?i===n:"*="===t?i.indexOf(n)>=0:"~="===t?(" "+i+" ").indexOf(" "+n+" ")>=0:"!="===t?i!=n:"^="===t?0===i.indexOf(n):"$="===t?i.substr(i.length-n.length)===n:!1:!!n}:void 0}function l(e){var t;return e?(e=/(?:not\((.+)\))|(.+)/i.exec(e),e[1]?(t=u(e[1],[]),function(e){return!d(e,t)}):(e=e[2],function(t,n,r){return"first"===e?0===n:"last"===e?n===r-1:"even"===e?n%2===0:"odd"===e?n%2===1:t[e]?t[e]():!1})):void 0}function c(e,r,c){function u(e){e&&r.push(e)}var d;return d=n.exec(e.replace(i,"")),u(t(d[1])),u(o(d[2])),u(a(d[3])),u(s(d[4],d[5],d[6])),u(l(d[7])),r.pseudo=!!d[7],r.direct=c,r}function u(e,t){var n=[],i,o,a;do if(r.exec(""),o=r.exec(e),o&&(e=o[3],n.push(o[1]),o[2])){i=o[3];break}while(o);for(i&&u(i,t),e=[],a=0;a<n.length;a++)">"!=n[a]&&e.push(c(n[a],[],">"===n[a-1]));return t.push(e),t}var d=this.match;this._selectors=u(e,[])},match:function(e,t){var n,r,i,o,a,s,l,c,u,d,f,h,p;for(t=t||this._selectors,n=0,r=t.length;r>n;n++){for(a=t[n],o=a.length,p=e,h=0,i=o-1;i>=0;i--)for(c=a[i];p;){if(c.pseudo)for(f=p.parent().items(),u=d=f.length;u--&&f[u]!==p;);for(s=0,l=c.length;l>s;s++)if(!c[s](p,u,d)){s=l+1;break}if(s===l){h++;break}if(i===o-1)break;p=p.parent()}if(h===o)return!0}return!1},find:function(e){function n(e,t,i){var o,a,s,l,c,u=t[i];for(o=0,a=e.length;a>o;o++){for(c=e[o],s=0,l=u.length;l>s;s++)if(!u[s](c,o,a)){s=l+1;break}if(s===l)i==t.length-1?r.push(c):c.items&&n(c.items(),t,i+1);else if(u.direct)return;c.items&&n(c.items(),t,i)}}var r=[],i,s,l=this._selectors;if(e.items){for(i=0,s=l.length;s>i;i++)n(e.items(),l[i],0);s>1&&(r=t(r))}return o||(o=a.Collection),new o(r)}});return a}),r(le,[m,se,ne],function(e,t,n){var r,i,o=Array.prototype.push,a=Array.prototype.slice;return i={length:0,init:function(e){e&&this.add(e)},add:function(t){var n=this;return e.isArray(t)?o.apply(n,t):t instanceof r?n.add(t.toArray()):o.call(n,t),n},set:function(e){var t=this,n=t.length,r;for(t.length=0,t.add(e),r=t.length;n>r;r++)delete t[r];return t},filter:function(e){var n=this,i,o,a=[],s,l;for("string"==typeof e?(e=new t(e),l=function(t){return e.match(t)}):l=e,i=0,o=n.length;o>i;i++)s=n[i],l(s)&&a.push(s);return new r(a)},slice:function(){return new r(a.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},each:function(t){return e.each(this,t),this},toArray:function(){return e.toArray(this)},indexOf:function(e){for(var t=this,n=t.length;n--&&t[n]!==e;);return n},reverse:function(){return new r(e.toArray(this).reverse())},hasClass:function(e){return this[0]?this[0].classes.contains(e):!1},prop:function(e,t){var n=this,r,i;return t!==r?(n.each(function(n){n[e]&&n[e](t)}),n):(i=n[0],i&&i[e]?i[e]():void 0)},exec:function(t){var n=this,r=e.toArray(arguments).slice(1);return n.each(function(e){e[t]&&e[t].apply(e,r)}),n},remove:function(){for(var e=this.length;e--;)this[e].remove();return this},addClass:function(e){return this.each(function(t){t.classes.add(e)})},removeClass:function(e){return this.each(function(t){t.classes.remove(e)})}},e.each("fire on off show hide append prepend before after reflow".split(" "),function(t){i[t]=function(){var n=e.toArray(arguments);return this.each(function(e){t in e&&e[t].apply(e,n)}),this}}),e.each("text name disabled active selected checked visible parent value data".split(" "),function(e){i[e]=function(t){return this.prop(e,t)}}),r=n.extend(i),t.Collection=r,r}),r(ce,[m,w],function(e,t){var n=0;return{id:function(){return"mceu_"+n++},createFragment:function(e){return t.DOM.createFragment(e)},getWindowSize:function(){return t.DOM.getViewPort()},getSize:function(e){var t,n;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=Math.max(r.width||r.right-r.left,e.offsetWidth),n=Math.max(r.height||r.bottom-r.bottom,e.offsetHeight)}else t=e.offsetWidth,n=e.offsetHeight;return{width:t,height:n}},getPos:function(e,n){return t.DOM.getPos(e,n)},getViewPort:function(e){return t.DOM.getViewPort(e)},get:function(e){return document.getElementById(e)},addClass:function(e,n){return t.DOM.addClass(e,n)},removeClass:function(e,n){return t.DOM.removeClass(e,n)},hasClass:function(e,n){return t.DOM.hasClass(e,n)},toggleClass:function(e,n,r){return t.DOM.toggleClass(e,n,r)},css:function(e,n,r){return t.DOM.setStyle(e,n,r)},getRuntimeStyle:function(e,n){return t.DOM.getStyle(e,n,!0)},on:function(e,n,r,i){return t.DOM.bind(e,n,r,i)},off:function(e,n,r){return t.DOM.unbind(e,n,r)},fire:function(e,n,r){return t.DOM.fire(e,n,r)},innerHtml:function(e,n){t.DOM.setHTML(e,n)}}}),r(ue,[],function(){return{parseBox:function(e){var t,n=10;if(e)return"number"==typeof e?(e=e||0,{top:e,left:e,bottom:e,right:e}):(e=e.split(" "),t=e.length,1===t?e[1]=e[2]=e[3]=e[0]:2===t?(e[2]=e[0],e[3]=e[1]):3===t&&(e[3]=e[1]),{top:parseInt(e[0],n)||0,right:parseInt(e[1],n)||0,bottom:parseInt(e[2],n)||0,left:parseInt(e[3],n)||0})},measureBox:function(e,t){function n(t){var n=document.defaultView;return n?(t=t.replace(/[A-Z]/g,function(e){return"-"+e}),n.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle[t]}function r(e){var t=parseFloat(n(e),10);return isNaN(t)?0:t}return{top:r(t+"TopWidth"),right:r(t+"RightWidth"),bottom:r(t+"BottomWidth"),left:r(t+"LeftWidth")}}}}),r(de,[m],function(e){function t(){}function n(e){this.cls=[],this.cls._map={},this.onchange=e||t,this.prefix=""}return e.extend(n.prototype,{add:function(e){return e&&!this.contains(e)&&(this.cls._map[e]=!0,this.cls.push(e),this._change()),this},remove:function(e){if(this.contains(e)){for(var t=0;t<this.cls.length&&this.cls[t]!==e;t++);this.cls.splice(t,1),delete this.cls._map[e],this._change()}return this},toggle:function(e,t){var n=this.contains(e);return n!==t&&(n?this.remove(e):this.add(e),this._change()),this},contains:function(e){return!!this.cls._map[e]},_change:function(){delete this.clsValue,this.onchange.call(this)}}),n.prototype.toString=function(){var e;if(this.clsValue)return this.clsValue;e="";for(var t=0;t<this.cls.length;t++)t>0&&(e+=" "),e+=this.prefix+this.cls[t];return e},n}),r(fe,[u],function(e){var t={},n;return{add:function(r){var i=r.parent();if(i){if(!i._layout||i._layout.isNative())return;t[i._id]||(t[i._id]=i),n||(n=!0,e.requestAnimationFrame(function(){var e,r;n=!1;for(e in t)r=t[e],r.state.get("rendered")&&r.reflow();t={}},document.body))}},remove:function(e){t[e._id]&&delete t[e._id]}}}),r(he,[ne,m,re,ae,le,ce,g,ue,de,fe],function(e,t,n,r,i,o,a,s,l,c){function u(e){return e._eventDispatcher||(e._eventDispatcher=new n({scope:e,toggleEvent:function(t,r){r&&n.isNative(t)&&(e._nativeEvents||(e._nativeEvents={}),e._nativeEvents[t]=!0,e.state.get("rendered")&&d(e))}})),e._eventDispatcher}function d(e){function t(t){var n=e.getParentCtrl(t.target);n&&n.fire(t.type,t)}function n(){var e=c._lastHoverCtrl;e&&(e.fire("mouseleave",{target:e.getEl()}),e.parents().each(function(e){e.fire("mouseleave",{target:e.getEl()})}),c._lastHoverCtrl=null)}function r(t){var n=e.getParentCtrl(t.target),r=c._lastHoverCtrl,i=0,o,a,s;if(n!==r){if(c._lastHoverCtrl=n,a=n.parents().toArray().reverse(),a.push(n),r){for(s=r.parents().toArray().reverse(),s.push(r),i=0;i<s.length&&a[i]===s[i];i++);for(o=s.length-1;o>=i;o--)r=s[o],r.fire("mouseleave",{target:r.getEl()})}for(o=i;o<a.length;o++)n=a[o],n.fire("mouseenter",{target:n.getEl()})}}function i(t){t.preventDefault(),"mousewheel"==t.type?(t.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(t.deltaX=-1/40*t.wheelDeltaX)):(t.deltaX=0,t.deltaY=t.detail),t=e.fire("wheel",t)}var o,s,l,c,u,d;if(u=e._nativeEvents){for(l=e.parents().toArray(),l.unshift(e),o=0,s=l.length;!c&&s>o;o++)c=l[o]._eventsRoot;for(c||(c=l[l.length-1]||e),e._eventsRoot=c,s=o,o=0;s>o;o++)l[o]._eventsRoot=c;var p=c._delegates;p||(p=c._delegates={});for(d in u){if(!u)return!1;"wheel"!==d||h?("mouseenter"===d||"mouseleave"===d?c._hasMouseEnter||(a(c.getEl()).on("mouseleave",n).on("mouseover",r),c._hasMouseEnter=1):p[d]||(a(c.getEl()).on(d,t),p[d]=!0),u[d]=!1):f?a(e.getEl()).on("mousewheel",i):a(e.getEl()).on("DOMMouseScroll",i)}}}var f="onmousewheel"in document,h=!1,p="mce-",m,g=0,v={Statics:{classPrefix:p},isRtl:function(){return m.rtl},classPrefix:p,init:function(e){function n(e){var t;for(e=e.split(" "),t=0;t<e.length;t++)i.classes.add(e[t])}var i=this,o,c;i.settings=e=t.extend({},i.Defaults,e),i._id=e.id||"mceu_"+g++,i._aria={role:e.role},i._elmCache={},i.$=a,i.state=new r({visible:!0,active:!1,disabled:!1,value:""}),i.data=new r(e.data),i.classes=new l(function(){i.state.get("rendered")&&(i.getEl().className=this.toString())}),i.classes.prefix=i.classPrefix,o=e.classes,o&&(i.Defaults&&(c=i.Defaults.classes,c&&o!=c&&n(c)),n(o)),t.each("title text name visible disabled active value".split(" "),function(t){t in e&&i[t](e[t])}),i.on("click",function(){return i.disabled()?!1:void 0}),i.settings=e,i.borderBox=s.parseBox(e.border),i.paddingBox=s.parseBox(e.padding),i.marginBox=s.parseBox(e.margin),e.hidden&&i.hide()},Properties:"parent,name",getContainerElm:function(){return document.body},getParentCtrl:function(e){for(var t,n=this.getRoot().controlIdLookup;e&&n&&!(t=n[e.id]);)e=e.parentNode;return t},initLayoutRect:function(){var e=this,t=e.settings,n,r,i=e.getEl(),a,l,c,u,d,f,h,p;n=e.borderBox=e.borderBox||s.measureBox(i,"border"),e.paddingBox=e.paddingBox||s.measureBox(i,"padding"),e.marginBox=e.marginBox||s.measureBox(i,"margin"),p=o.getSize(i),f=t.minWidth,h=t.minHeight,c=f||p.width,u=h||p.height,a=t.width,l=t.height,d=t.autoResize,d="undefined"!=typeof d?d:!a&&!l,a=a||c,l=l||u;var m=n.left+n.right,g=n.top+n.bottom,v=t.maxWidth||65535,y=t.maxHeight||65535;return e._layoutRect=r={x:t.x||0,y:t.y||0,w:a,h:l,deltaW:m,deltaH:g,contentW:a-m,contentH:l-g,innerW:a-m,innerH:l-g,startMinWidth:f||0,startMinHeight:h||0,minW:Math.min(c,v),minH:Math.min(u,y),maxW:v,maxH:y,autoResize:d,scrollW:0},e._lastLayoutRect={},r},layoutRect:function(e){var t=this,n=t._layoutRect,r,i,o,a,s,l;return n||(n=t.initLayoutRect()),e?(o=n.deltaW,a=n.deltaH,e.x!==s&&(n.x=e.x),e.y!==s&&(n.y=e.y),e.minW!==s&&(n.minW=e.minW),e.minH!==s&&(n.minH=e.minH),i=e.w,i!==s&&(i=i<n.minW?n.minW:i,i=i>n.maxW?n.maxW:i,n.w=i,n.innerW=i-o),i=e.h,i!==s&&(i=i<n.minH?n.minH:i,i=i>n.maxH?n.maxH:i,n.h=i,n.innerH=i-a),i=e.innerW,i!==s&&(i=i<n.minW-o?n.minW-o:i,i=i>n.maxW-o?n.maxW-o:i,n.innerW=i,n.w=i+o),i=e.innerH,i!==s&&(i=i<n.minH-a?n.minH-a:i,i=i>n.maxH-a?n.maxH-a:i,n.innerH=i,n.h=i+a),e.contentW!==s&&(n.contentW=e.contentW),e.contentH!==s&&(n.contentH=e.contentH),r=t._lastLayoutRect,(r.x!==n.x||r.y!==n.y||r.w!==n.w||r.h!==n.h)&&(l=m.repaintControls,l&&l.map&&!l.map[t._id]&&(l.push(t),l.map[t._id]=!0),r.x=n.x,r.y=n.y,r.w=n.w,r.h=n.h),t):n},repaint:function(){var e=this,t,n,r,i,o,a,s,l,c,u;c=document.createRange?function(e){return e}:Math.round,t=e.getEl().style,i=e._layoutRect,l=e._lastRepaintRect||{},o=e.borderBox,a=o.left+o.right,s=o.top+o.bottom,i.x!==l.x&&(t.left=c(i.x)+"px",l.x=i.x),i.y!==l.y&&(t.top=c(i.y)+"px",l.y=i.y),i.w!==l.w&&(u=c(i.w-a),t.width=(u>=0?u:0)+"px",l.w=i.w),i.h!==l.h&&(u=c(i.h-s),t.height=(u>=0?u:0)+"px",l.h=i.h),e._hasBody&&i.innerW!==l.innerW&&(u=c(i.innerW),r=e.getEl("body"),r&&(n=r.style,n.width=(u>=0?u:0)+"px"),l.innerW=i.innerW),e._hasBody&&i.innerH!==l.innerH&&(u=c(i.innerH),r=r||e.getEl("body"),r&&(n=n||r.style,n.height=(u>=0?u:0)+"px"),l.innerH=i.innerH),e._lastRepaintRect=l,e.fire("repaint",{},!1)},on:function(e,t){function n(e){var t,n;return"string"!=typeof e?e:function(i){return t||r.parentsAndSelf().each(function(r){var i=r.settings.callbacks;return i&&(t=i[e])?(n=r,!1):void 0}),t?t.call(n,i):(i.action=e,void this.fire("execute",i))}}var r=this;return u(r).on(e,n(t)),r},off:function(e,t){return u(this).off(e,t),this},fire:function(e,t,n){var r=this;if(t=t||{},t.control||(t.control=r),t=u(r).fire(e,t),n!==!1&&r.parent)for(var i=r.parent();i&&!t.isPropagationStopped();)i.fire(e,t,!1),i=i.parent();return t},hasEventListeners:function(e){return u(this).has(e)},parents:function(e){var t=this,n,r=new i;for(n=t.parent();n;n=n.parent())r.add(n);return e&&(r=r.filter(e)),r},parentsAndSelf:function(e){return new i(this).add(this.parents(e))},next:function(){var e=this.parent().items();return e[e.indexOf(this)+1]},prev:function(){var e=this.parent().items();return e[e.indexOf(this)-1]},innerHtml:function(e){return this.$el.html(e),this},getEl:function(e){var t=e?this._id+"-"+e:this._id;return this._elmCache[t]||(this._elmCache[t]=a("#"+t)[0]),this._elmCache[t]},show:function(){return this.visible(!0)},hide:function(){return this.visible(!1)},focus:function(){try{this.getEl().focus()}catch(e){}return this},blur:function(){return this.getEl().blur(),this},aria:function(e,t){var n=this,r=n.getEl(n.ariaTarget);return"undefined"==typeof t?n._aria[e]:(n._aria[e]=t,n.state.get("rendered")&&r.setAttribute("role"==e?e:"aria-"+e,t),n)},encode:function(e,t){return t!==!1&&(e=this.translate(e)),(e||"").replace(/[&<>"]/g,function(e){return"&#"+e.charCodeAt(0)+";"})},translate:function(e){return m.translate?m.translate(e):e},before:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t),!0),t},after:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t)),t},remove:function(){var e=this,t=e.getEl(),n=e.parent(),r,i;if(e.items){var o=e.items().toArray();for(i=o.length;i--;)o[i].remove()}n&&n.items&&(r=[],n.items().each(function(t){t!==e&&r.push(t)}),n.items().set(r),n._lastRect=null),e._eventsRoot&&e._eventsRoot==e&&a(t).off();var s=e.getRoot().controlIdLookup;return s&&delete s[e._id],t&&t.parentNode&&t.parentNode.removeChild(t),e.state.set("rendered",!1),e.state.destroy(),e.fire("remove"),e},renderBefore:function(e){return a(e).before(this.renderHtml()),this.postRender(),this},renderTo:function(e){return a(e||this.getContainerElm()).append(this.renderHtml()),this.postRender(),this},preRender:function(){},render:function(){},renderHtml:function(){return'<div id="'+this._id+'" class="'+this.classes+'"></div>'},postRender:function(){var e=this,t=e.settings,n,r,i,o,s;e.$el=a(e.getEl()),e.state.set("rendered",!0);for(o in t)0===o.indexOf("on")&&e.on(o.substr(2),t[o]);if(e._eventsRoot){for(i=e.parent();!s&&i;i=i.parent())s=i._eventsRoot;if(s)for(o in s._nativeEvents)e._nativeEvents[o]=!0}d(e),t.style&&(n=e.getEl(),n&&(n.setAttribute("style",t.style),n.style.cssText=t.style)),e.settings.border&&(r=e.borderBox,e.$el.css({"border-top-width":r.top,"border-right-width":r.right,"border-bottom-width":r.bottom,"border-left-width":r.left}));var l=e.getRoot();l.controlIdLookup||(l.controlIdLookup={}),l.controlIdLookup[e._id]=e;for(var u in e._aria)e.aria(u,e._aria[u]);e.state.get("visible")===!1&&(e.getEl().style.display="none"),e.bindStates(),e.state.on("change:visible",function(t){var n=t.value,r;e.state.get("rendered")&&(e.getEl().style.display=n===!1?"none":"",e.getEl().getBoundingClientRect()),r=e.parent(),r&&(r._lastRect=null),e.fire(n?"show":"hide"),c.add(e)}),e.fire("postrender",{},!1)},bindStates:function(){},scrollIntoView:function(e){function t(e,t){var n,r,i=e;for(n=r=0;i&&i!=t&&i.nodeType;)n+=i.offsetLeft||0,r+=i.offsetTop||0,i=i.offsetParent;return{x:n,y:r}}var n=this.getEl(),r=n.parentNode,i,o,a,s,l,c,u=t(n,r);return i=u.x,o=u.y,a=n.offsetWidth,s=n.offsetHeight,l=r.clientWidth,c=r.clientHeight,"end"==e?(i-=l-a,o-=c-s):"center"==e&&(i-=l/2-a/2,o-=c/2-s/2),r.scrollLeft=i,r.scrollTop=o,this},getRoot:function(){for(var e=this,t,n=[];e;){if(e.rootControl){t=e.rootControl;break}n.push(e),t=e,e=e.parent()}t||(t=this);for(var r=n.length;r--;)n[r].rootControl=t;return t},reflow:function(){c.remove(this);var e=this.parent();return e._layout&&!e._layout.isNative()&&e.reflow(),this}};return t.each("text title visible disabled active value".split(" "),function(e){v[e]=function(t){return 0===arguments.length?this.state.get(e):("undefined"!=typeof t&&this.state.set(e,t),this)}}),m=e.extend(v)}),r(pe,[],function(){var e={},t;return{add:function(t,n){e[t.toLowerCase()]=n},has:function(t){return!!e[t.toLowerCase()]},create:function(n,r){var i,o,a;if(!t){a=tinymce.ui;for(o in a)e[o.toLowerCase()]=a[o];t=!0}if("string"==typeof n?(r=r||{},r.type=n):(r=n,n=r.type),n=n.toLowerCase(),i=e[n],!i)throw new Error("Could not find control by type: "+n);return i=new i(r),i.type=n,i}}}),r(me,[],function(){return function(e){function t(e){return e&&1===e.nodeType}function n(e){return e=e||C,t(e)?e.getAttribute("role"):null}function r(e){for(var t,r=e||C;r=r.parentNode;)if(t=n(r))return t}function i(e){var n=C;return t(n)?n.getAttribute("aria-"+e):void 0}function o(e){var t=e.tagName.toUpperCase();return"INPUT"==t||"TEXTAREA"==t}function a(e){return o(e)&&!e.hidden?!0:/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell)$/.test(n(e))?!0:!1}function s(e){function t(e){if(1==e.nodeType&&"none"!=e.style.display){a(e)&&n.push(e);for(var r=0;r<e.childNodes.length;r++)t(e.childNodes[r])}}var n=[];return t(e||b.getEl()),n}function l(e){var t,n;e=e||x,n=e.parents().toArray(),n.unshift(e);for(var r=0;r<n.length&&(t=n[r],!t.settings.ariaRoot);r++);return t}function c(e){var t=l(e),n=s(t.getEl());t.settings.ariaRemember&&"lastAriaIndex"in t?u(t.lastAriaIndex,n):u(0,n)}function u(e,t){return 0>e?e=t.length-1:e>=t.length&&(e=0),t[e]&&t[e].focus(),e}function d(e,t){var n=-1,r=l();t=t||s(r.getEl());for(var i=0;i<t.length;i++)t[i]===C&&(n=i);n+=e,r.lastAriaIndex=u(n,t)}function f(){var e=r();"tablist"==e?d(-1,s(C.parentNode)):x.parent().submenu?v():d(-1)}function h(){var e=n(),t=r();"tablist"==t?d(1,s(C.parentNode)):"menuitem"==e&&"menu"==t&&i("haspopup")?y():d(1)}function p(){d(-1)}function m(){var e=n(),t=r();"menuitem"==e&&"menubar"==t?y():"button"==e&&i("haspopup")?y({key:"down"}):d(1)}function g(e){var t=r();if("tablist"==t){var n=s(x.getEl("body"))[0];n&&n.focus()}else d(e.shiftKey?-1:1)}function v(){x.fire("cancel")}function y(e){e=e||{},x.fire("click",{target:C,aria:e})}var b=e.root,C,x;try{C=document.activeElement}catch(w){C=document.body}return x=b.getParentCtrl(C),b.on("keydown",function(e){function t(e,t){o(C)||t(e)!==!1&&e.preventDefault()}if(!e.isDefaultPrevented())switch(e.keyCode){case 37:t(e,f);break;case 39:t(e,h);break;case 38:t(e,p);break;case 40:t(e,m);break;case 27:v();break;case 14:case 13:case 32:t(e,y);break;case 9:g(e)!==!1&&e.preventDefault()}}),b.on("focusin",function(e){C=e.target,x=e.control}),{focusFirst:c}}}),r(ge,[he,le,se,pe,me,m,g,de,fe],function(e,t,n,r,i,o,a,s,l){var c={};return e.extend({init:function(e){var n=this;n._super(e),e=n.settings,e.fixed&&n.state.set("fixed",!0),n._items=new t,n.isRtl()&&n.classes.add("rtl"),n.bodyClasses=new s(function(){n.state.get("rendered")&&(n.getEl("body").className=this.toString())}),n.bodyClasses.prefix=n.classPrefix,n.classes.add("container"),n.bodyClasses.add("container-body"),e.containerCls&&n.classes.add(e.containerCls),n._layout=r.create((e.layout||"")+"layout"),n.settings.items?n.add(n.settings.items):n.add(n.render()),n._hasBody=!0},items:function(){return this._items},find:function(e){return e=c[e]=c[e]||new n(e),e.find(this)},add:function(e){var t=this;return t.items().add(t.create(e)).parent(t),t},focus:function(e){var t=this,n,r,i;return e&&(r=t.keyboardNav||t.parents().eq(-1)[0].keyboardNav)?void r.focusFirst(t):(i=t.find("*"),t.statusbar&&i.add(t.statusbar.items()),i.each(function(e){return e.settings.autofocus?(n=null,!1):void(e.canFocus&&(n=n||e))}),n&&n.focus(),t)},replace:function(e,t){for(var n,r=this.items(),i=r.length;i--;)if(r[i]===e){r[i]=t;break}i>=0&&(n=t.getEl(),n&&n.parentNode.removeChild(n),n=e.getEl(),n&&n.parentNode.removeChild(n)),t.parent(this)},create:function(t){var n=this,i,a=[];return o.isArray(t)||(t=[t]),o.each(t,function(t){t&&(t instanceof e||("string"==typeof t&&(t={type:t}),i=o.extend({},n.settings.defaults,t),t.type=i.type=i.type||t.type||n.settings.defaultType||(i.defaults?i.defaults.type:null),t=r.create(i)),a.push(t))}),a},renderNew:function(){var e=this;return e.items().each(function(t,n){var r;t.parent(e),t.state.get("rendered")||(r=e.getEl("body"),r.hasChildNodes()&&n<=r.childNodes.length-1?a(r.childNodes[n]).before(t.renderHtml()):a(r).append(t.renderHtml()),t.postRender(),l.add(t))}),e._layout.applyClasses(e.items().filter(":visible")),e._lastRect=null,e},append:function(e){return this.add(e).renderNew()},prepend:function(e){var t=this;return t.items().set(t.create(e).concat(t.items().toArray())),t.renderNew()},insert:function(e,t,n){var r=this,i,o,a;return e=r.create(e),i=r.items(),!n&&t<i.length-1&&(t+=1),t>=0&&t<i.length&&(o=i.slice(0,t).toArray(),a=i.slice(t).toArray(),i.set(o.concat(e,a))),r.renderNew()},fromJSON:function(e){var t=this;for(var n in e)t.find("#"+n).value(e[n]);return t},toJSON:function(){var e=this,t={};return e.find("*").each(function(e){var n=e.name(),r=e.value();n&&"undefined"!=typeof r&&(t[n]=r)}),t},renderHtml:function(){var e=this,t=e._layout,n=this.settings.role;return e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"'+(n?' role="'+this.settings.role+'"':"")+'><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this,t;return e.items().exec("postRender"),e._super(),e._layout.postRender(e),e.state.set("rendered",!0),e.settings.style&&e.$el.css(e.settings.style),e.settings.border&&(t=e.borderBox,e.$el.css({"border-top-width":t.top,"border-right-width":t.right,"border-bottom-width":t.bottom,"border-left-width":t.left})),e.parent()||(e.keyboardNav=new i({root:e})),e},initLayoutRect:function(){var e=this,t=e._super();return e._layout.recalc(e),t},recalc:function(){var e=this,t=e._layoutRect,n=e._lastRect;return n&&n.w==t.w&&n.h==t.h?void 0:(e._layout.recalc(e),t=e.layoutRect(),e._lastRect={x:t.x,y:t.y,w:t.w,h:t.h},!0)},reflow:function(){var t;if(l.remove(this),this.visible()){for(e.repaintControls=[],e.repaintControls.map={},this.recalc(),t=e.repaintControls.length;t--;)e.repaintControls[t].repaint();"flow"!==this.settings.layout&&"stack"!==this.settings.layout&&this.repaint(),e.repaintControls=[]}return this}})}),r(ve,[g],function(e){function t(e){var t,n,r,i,o,a,s,l,c=Math.max;return t=e.documentElement,n=e.body,r=c(t.scrollWidth,n.scrollWidth),i=c(t.clientWidth,n.clientWidth),o=c(t.offsetWidth,n.offsetWidth),a=c(t.scrollHeight,n.scrollHeight),s=c(t.clientHeight,n.clientHeight),l=c(t.offsetHeight,n.offsetHeight),{width:o>r?i:r,height:l>a?s:a}}function n(e){var t,n;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),n=0;n<t.length;n++)e[t[n]]=e.changedTouches[0][t[n]]}return function(r,i){function o(){return s.getElementById(i.handle||r)}var a,s=i.document||document,l,c,u,d,f,h;i=i||{},c=function(r){var c=t(s),p,m;n(r),r.preventDefault(),l=r.button,p=o(),f=r.screenX,h=r.screenY,m=window.getComputedStyle?window.getComputedStyle(p,null).getPropertyValue("cursor"):p.runtimeStyle.cursor,a=e("<div>").css({position:"absolute",top:0,left:0,width:c.width,height:c.height,zIndex:2147483647,opacity:1e-4,cursor:m}).appendTo(s.body),e(s).on("mousemove touchmove",d).on("mouseup touchend",u),i.start(r)},d=function(e){return n(e),e.button!==l?u(e):(e.deltaX=e.screenX-f,e.deltaY=e.screenY-h,e.preventDefault(),void i.drag(e))},u=function(t){n(t),e(s).off("mousemove touchmove",d).off("mouseup touchend",u),a.remove(),i.stop&&i.stop(t)},this.destroy=function(){e(o()).off()},e(o()).on("mousedown touchstart",c);
}}),r(ye,[g,ve],function(e,t){return{init:function(){var e=this;e.on("repaint",e.renderScroll)},renderScroll:function(){function n(){function t(t,a,s,l,c,u){var d,f,h,p,m,g,v,y,b;if(f=i.getEl("scroll"+t)){if(y=a.toLowerCase(),b=s.toLowerCase(),e(i.getEl("absend")).css(y,i.layoutRect()[l]-1),!c)return void e(f).css("display","none");e(f).css("display","block"),d=i.getEl("body"),h=i.getEl("scroll"+t+"t"),p=d["client"+s]-2*o,p-=n&&r?f["client"+u]:0,m=d["scroll"+s],g=p/m,v={},v[y]=d["offset"+a]+o,v[b]=p,e(f).css(v),v={},v[y]=d["scroll"+a]*g,v[b]=p*g,e(h).css(v)}}var n,r,a;a=i.getEl("body"),n=a.scrollWidth>a.clientWidth,r=a.scrollHeight>a.clientHeight,t("h","Left","Width","contentW",n,"Height"),t("v","Top","Height","contentH",r,"Width")}function r(){function n(n,r,a,s,l){var c,u=i._id+"-scroll"+n,d=i.classPrefix;e(i.getEl()).append('<div id="'+u+'" class="'+d+"scrollbar "+d+"scrollbar-"+n+'"><div id="'+u+'t" class="'+d+'scrollbar-thumb"></div></div>'),i.draghelper=new t(u+"t",{start:function(){c=i.getEl("body")["scroll"+r],e("#"+u).addClass(d+"active")},drag:function(e){var t,u,d,f,h=i.layoutRect();u=h.contentW>h.innerW,d=h.contentH>h.innerH,f=i.getEl("body")["client"+a]-2*o,f-=u&&d?i.getEl("scroll"+n)["client"+l]:0,t=f/i.getEl("body")["scroll"+a],i.getEl("body")["scroll"+r]=c+e["delta"+s]/t},stop:function(){e("#"+u).removeClass(d+"active")}})}i.classes.add("scroll"),n("v","Top","Height","Y","Width"),n("h","Left","Width","X","Height")}var i=this,o=2;i.settings.autoScroll&&(i._hasScroll||(i._hasScroll=!0,r(),i.on("wheel",function(e){var t=i.getEl("body");t.scrollLeft+=10*(e.deltaX||0),t.scrollTop+=10*e.deltaY,n()}),e(i.getEl("body")).on("scroll",n)),n())}}}),r(be,[ge,ye],function(e,t){return e.extend({Defaults:{layout:"fit",containerCls:"panel"},Mixins:[t],renderHtml:function(){var e=this,t=e._layout,n=e.settings.html;return e.preRender(),t.preRender(e),"undefined"==typeof n?n='<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div>":("function"==typeof n&&(n=n.call(e)),e._hasBody=!1),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1" role="group">'+(e._preBodyHtml||"")+n+"</div>"}})}),r(Ce,[ce],function(e){function t(t,n,r){var i,o,a,s,l,c,u,d,f,h;return f=e.getViewPort(),o=e.getPos(n),a=o.x,s=o.y,t.state.get("fixed")&&"static"==e.getRuntimeStyle(document.body,"position")&&(a-=f.x,s-=f.y),i=t.getEl(),h=e.getSize(i),l=h.width,c=h.height,h=e.getSize(n),u=h.width,d=h.height,r=(r||"").split(""),"b"===r[0]&&(s+=d),"r"===r[1]&&(a+=u),"c"===r[0]&&(s+=Math.round(d/2)),"c"===r[1]&&(a+=Math.round(u/2)),"b"===r[3]&&(s-=c),"r"===r[4]&&(a-=l),"c"===r[3]&&(s-=Math.round(c/2)),"c"===r[4]&&(a-=Math.round(l/2)),{x:a,y:s,w:l,h:c}}return{testMoveRel:function(n,r){for(var i=e.getViewPort(),o=0;o<r.length;o++){var a=t(this,n,r[o]);if(this.state.get("fixed")){if(a.x>0&&a.x+a.w<i.w&&a.y>0&&a.y+a.h<i.h)return r[o]}else if(a.x>i.x&&a.x+a.w<i.w+i.x&&a.y>i.y&&a.y+a.h<i.h+i.y)return r[o]}return r[0]},moveRel:function(e,n){"string"!=typeof n&&(n=this.testMoveRel(e,n));var r=t(this,e,n);return this.moveTo(r.x,r.y)},moveBy:function(e,t){var n=this,r=n.layoutRect();return n.moveTo(r.x+e,r.y+t),n},moveTo:function(t,n){function r(e,t,n){return 0>e?0:e+n>t?(e=t-n,0>e?0:e):e}var i=this;if(i.settings.constrainToViewport){var o=e.getViewPort(window),a=i.layoutRect();t=r(t,o.w+o.x,a.w),n=r(n,o.h+o.y,a.h)}return i.state.get("rendered")?i.layoutRect({x:t,y:n}).repaint():(i.settings.x=t,i.settings.y=n),i.fire("move",{x:t,y:n}),i}}}),r(xe,[ce],function(e){return{resizeToContent:function(){this._layoutRect.autoResize=!0,this._lastRect=null,this.reflow()},resizeTo:function(t,n){if(1>=t||1>=n){var r=e.getWindowSize();t=1>=t?t*r.w:t,n=1>=n?n*r.h:n}return this._layoutRect.autoResize=!1,this.layoutRect({minW:t,minH:n,w:t,h:n}).reflow()},resizeBy:function(e,t){var n=this,r=n.layoutRect();return n.resizeTo(r.w+e,r.h+t)}}}),r(we,[be,Ce,xe,ce,g,u],function(e,t,n,r,i,o){function a(e,t){for(;e;){if(e==t)return!0;e=e.parent()}}function s(e){for(var t=v.length;t--;){var n=v[t],r=n.getParentCtrl(e.target);if(n.settings.autohide){if(r&&(a(r,n)||n.parent()===r))continue;e=n.fire("autohide",{target:e.target}),e.isDefaultPrevented()||n.hide()}}}function l(){p||(p=function(e){2!=e.button&&s(e)},i(document).on("click touchstart",p))}function c(){m||(m=function(){var e;for(e=v.length;e--;)d(v[e])},i(window).on("scroll",m))}function u(){if(!g){var e=document.documentElement,t=e.clientWidth,n=e.clientHeight;g=function(){document.all&&t==e.clientWidth&&n==e.clientHeight||(t=e.clientWidth,n=e.clientHeight,C.hideAll())},i(window).on("resize",g)}}function d(e){function t(t,n){for(var r,i=0;i<v.length;i++)if(v[i]!=e)for(r=v[i].parent();r&&(r=r.parent());)r==e&&v[i].fixed(t).moveBy(0,n).repaint()}var n=r.getViewPort().y;e.settings.autofix&&(e.state.get("fixed")?e._autoFixY>n&&(e.fixed(!1).layoutRect({y:e._autoFixY}).repaint(),t(!1,e._autoFixY-n)):(e._autoFixY=e.layoutRect().y,e._autoFixY<n&&(e.fixed(!0).layoutRect({y:0}).repaint(),t(!0,n-e._autoFixY))))}function f(e,t){var n,r=C.zIndex||65535,o;if(e)y.push(t);else for(n=y.length;n--;)y[n]===t&&y.splice(n,1);if(y.length)for(n=0;n<y.length;n++)y[n].modal&&(r++,o=y[n]),y[n].getEl().style.zIndex=r,y[n].zIndex=r,r++;var a=document.getElementById(t.classPrefix+"modal-block");o?i(a).css("z-index",o.zIndex-1):a&&(a.parentNode.removeChild(a),b=!1),C.currentZIndex=r}function h(e){var t;for(t=v.length;t--;)v[t]===e&&v.splice(t,1);for(t=y.length;t--;)y[t]===e&&y.splice(t,1)}var p,m,g,v=[],y=[],b,C=e.extend({Mixins:[t,n],init:function(e){var t=this;t._super(e),t._eventsRoot=t,t.classes.add("floatpanel"),e.autohide&&(l(),u(),v.push(t)),e.autofix&&(c(),t.on("move",function(){d(this)})),t.on("postrender show",function(e){if(e.control==t){var n,r=t.classPrefix;t.modal&&!b&&(n=i("#"+r+"modal-block"),n[0]||(n=i('<div id="'+r+'modal-block" class="'+r+"reset "+r+'fade"></div>').appendTo(t.getContainerElm())),o.setTimeout(function(){n.addClass(r+"in"),i(t.getEl()).addClass(r+"in")}),b=!0),f(!0,t)}}),t.on("show",function(){t.parents().each(function(e){return e.state.get("fixed")?(t.fixed(!0),!1):void 0})}),e.popover&&(t._preBodyHtml='<div class="'+t.classPrefix+'arrow"></div>',t.classes.add("popover").add("bottom").add(t.isRtl()?"end":"start"))},fixed:function(e){var t=this;if(t.state.get("fixed")!=e){if(t.state.get("rendered")){var n=r.getViewPort();e?t.layoutRect().y-=n.y:t.layoutRect().y+=n.y}t.classes.toggle("fixed",e),t.state.set("fixed",e)}return t},show:function(){var e=this,t,n=e._super();for(t=v.length;t--&&v[t]!==e;);return-1===t&&v.push(e),n},hide:function(){return h(this),f(!1,this),this._super()},hideAll:function(){C.hideAll()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||(e.remove(),f(!1,e)),e},remove:function(){h(this),this._super()},postRender:function(){var e=this;return e.settings.bodyRole&&this.getEl("body").setAttribute("role",e.settings.bodyRole),e._super()}});return C.hideAll=function(){for(var e=v.length;e--;){var t=v[e];t&&t.settings.autohide&&(t.hide(),v.splice(e,1))}},C}),r(Ee,[we,be,ce,g,ve,ue,h,u],function(e,t,n,r,i,o,a,s){function l(e){var t="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0",n=r("meta[name=viewport]")[0],i;a.overrideViewPort!==!1&&(n||(n=document.createElement("meta"),n.setAttribute("name","viewport"),document.getElementsByTagName("head")[0].appendChild(n)),i=n.getAttribute("content"),i&&"undefined"!=typeof f&&(f=i),n.setAttribute("content",e?t:f))}function c(e){for(var t=0;t<d.length;t++)if(d[t]._fullscreen)return;r([document.documentElement,document.body]).removeClass(e+"fullscreen")}function u(){function e(){var e,t=n.getWindowSize(),r;for(e=0;e<d.length;e++)r=d[e].layoutRect(),d[e].moveTo(d[e].settings.x||Math.max(0,t.w/2-r.w/2),d[e].settings.y||Math.max(0,t.h/2-r.h/2))}var t={w:window.innerWidth,h:window.innerHeight};s.setInterval(function(){var e=window.innerWidth,n=window.innerHeight;(t.w!=e||t.h!=n)&&(t={w:e,h:n},r(window).trigger("resize"))},100),r(window).on("resize",e)}var d=[],f="",h=e.extend({modal:!0,Defaults:{border:1,layout:"flex",containerCls:"panel",role:"dialog",callbacks:{submit:function(){this.fire("submit",{data:this.toJSON()})},close:function(){this.close()}}},init:function(e){var n=this;n._super(e),n.isRtl()&&n.classes.add("rtl"),n.classes.add("window"),n.bodyClasses.add("window-body"),n.state.set("fixed",!0),e.buttons&&(n.statusbar=new t({layout:"flex",border:"1 0 0 0",spacing:3,padding:10,align:"center",pack:n.isRtl()?"start":"end",defaults:{type:"button"},items:e.buttons}),n.statusbar.classes.add("foot"),n.statusbar.parent(n)),n.on("click",function(e){-1!=e.target.className.indexOf(n.classPrefix+"close")&&n.close()}),n.on("cancel",function(){n.close()}),n.aria("describedby",n.describedBy||n._id+"-none"),n.aria("label",e.title),n._fullscreen=!1},recalc:function(){var e=this,t=e.statusbar,r,i,o,a;e._fullscreen&&(e.layoutRect(n.getWindowSize()),e.layoutRect().contentH=e.layoutRect().innerH),e._super(),r=e.layoutRect(),e.settings.title&&!e._fullscreen&&(i=r.headerW,i>r.w&&(o=r.x-Math.max(0,i/2),e.layoutRect({w:i,x:o}),a=!0)),t&&(t.layoutRect({w:e.layoutRect().innerW}).recalc(),i=t.layoutRect().minW+r.deltaW,i>r.w&&(o=r.x-Math.max(0,i-r.w),e.layoutRect({w:i,x:o}),a=!0)),a&&e.recalc()},initLayoutRect:function(){var e=this,t=e._super(),r=0,i;if(e.settings.title&&!e._fullscreen){i=e.getEl("head");var o=n.getSize(i);t.headerW=o.width,t.headerH=o.height,r+=t.headerH}e.statusbar&&(r+=e.statusbar.layoutRect().h),t.deltaH+=r,t.minH+=r,t.h+=r;var a=n.getWindowSize();return t.x=e.settings.x||Math.max(0,a.w/2-t.w/2),t.y=e.settings.y||Math.max(0,a.h/2-t.h/2),t},renderHtml:function(){var e=this,t=e._layout,n=e._id,r=e.classPrefix,i=e.settings,o="",a="",s=i.html;return e.preRender(),t.preRender(e),i.title&&(o='<div id="'+n+'-head" class="'+r+'window-head"><div id="'+n+'-title" class="'+r+'title">'+e.encode(i.title)+'</div><button type="button" class="'+r+'close" aria-hidden="true">\xd7</button><div id="'+n+'-dragh" class="'+r+'dragh"></div></div>'),i.url&&(s='<iframe src="'+i.url+'" tabindex="-1"></iframe>'),"undefined"==typeof s&&(s=t.renderHtml(e)),e.statusbar&&(a=e.statusbar.renderHtml()),'<div id="'+n+'" class="'+e.classes+'" hidefocus="1"><div class="'+e.classPrefix+'reset" role="application">'+o+'<div id="'+n+'-body" class="'+e.bodyClasses+'">'+s+"</div>"+a+"</div></div>"},fullscreen:function(e){var t=this,i=document.documentElement,a,l=t.classPrefix,c;if(e!=t._fullscreen)if(r(window).on("resize",function(){var e;if(t._fullscreen)if(a)t._timer||(t._timer=s.setTimeout(function(){var e=n.getWindowSize();t.moveTo(0,0).resizeTo(e.w,e.h),t._timer=0},50));else{e=(new Date).getTime();var r=n.getWindowSize();t.moveTo(0,0).resizeTo(r.w,r.h),(new Date).getTime()-e>50&&(a=!0)}}),c=t.layoutRect(),t._fullscreen=e,e){t._initial={x:c.x,y:c.y,w:c.w,h:c.h},t.borderBox=o.parseBox("0"),t.getEl("head").style.display="none",c.deltaH-=c.headerH+2,r([i,document.body]).addClass(l+"fullscreen"),t.classes.add("fullscreen");var u=n.getWindowSize();t.moveTo(0,0).resizeTo(u.w,u.h)}else t.borderBox=o.parseBox(t.settings.border),t.getEl("head").style.display="",c.deltaH+=c.headerH,r([i,document.body]).removeClass(l+"fullscreen"),t.classes.remove("fullscreen"),t.moveTo(t._initial.x,t._initial.y).resizeTo(t._initial.w,t._initial.h);return t.reflow()},postRender:function(){var e=this,t;setTimeout(function(){e.classes.add("in")},0),e._super(),e.statusbar&&e.statusbar.postRender(),e.focus(),this.dragHelper=new i(e._id+"-dragh",{start:function(){t={x:e.layoutRect().x,y:e.layoutRect().y}},drag:function(n){e.moveTo(t.x+n.deltaX,t.y+n.deltaY)}}),e.on("submit",function(t){t.isDefaultPrevented()||e.close()}),d.push(e),l(!0)},submit:function(){return this.fire("submit",{data:this.toJSON()})},remove:function(){var e=this,t;for(e.dragHelper.destroy(),e._super(),e.statusbar&&this.statusbar.remove(),t=d.length;t--;)d[t]===e&&d.splice(t,1);l(d.length>0),c(e.classPrefix)},getContentWindow:function(){var e=this.getEl().getElementsByTagName("iframe")[0];return e?e.contentWindow:null}});return a.desktop||u(),h}),r(Ne,[Ee],function(e){var t=e.extend({init:function(e){e={border:1,padding:20,layout:"flex",pack:"center",align:"center",containerCls:"panel",autoScroll:!0,buttons:{type:"button",text:"Ok",action:"ok"},items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200}},this._super(e)},Statics:{OK:1,OK_CANCEL:2,YES_NO:3,YES_NO_CANCEL:4,msgBox:function(n){function r(e,t,n){return{type:"button",text:e,subtype:n?"primary":"",onClick:function(e){e.control.parents()[1].close(),o(t)}}}var i,o=n.callback||function(){};switch(n.buttons){case t.OK_CANCEL:i=[r("Ok",!0,!0),r("Cancel",!1)];break;case t.YES_NO:case t.YES_NO_CANCEL:i=[r("Yes",1,!0),r("No",0)],n.buttons==t.YES_NO_CANCEL&&i.push(r("Cancel",-1));break;default:i=[r("Ok",!0,!0)]}return new e({padding:20,x:n.x,y:n.y,minWidth:300,minHeight:100,layout:"flex",pack:"center",align:"center",buttons:i,title:n.title,role:"alertdialog",items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200,text:n.text},onPostRender:function(){this.aria("describedby",this.items()[0]._id)},onClose:n.onClose,onCancel:function(){o(!1)}}).renderTo(document.body).reflow()},alert:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,t.msgBox(e)},confirm:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,e.buttons=t.OK_CANCEL,t.msgBox(e)}}});return t}),r(_e,[Ee,Ne],function(e,t){return function(n){function r(){return o.length?o[o.length-1]:void 0}var i=this,o=[];i.windows=o,n.on("remove",function(){for(var e=o.length;e--;)o[e].close()}),i.open=function(t,r){var i;return n.editorManager.setActive(n),t.title=t.title||" ",t.url=t.url||t.file,t.url&&(t.width=parseInt(t.width||320,10),t.height=parseInt(t.height||240,10)),t.body&&(t.items={defaults:t.defaults,type:t.bodyType||"form",items:t.body}),t.url||t.buttons||(t.buttons=[{text:"Ok",subtype:"primary",onclick:function(){i.find("form")[0].submit()}},{text:"Cancel",onclick:function(){i.close()}}]),i=new e(t),o.push(i),i.on("close",function(){for(var e=o.length;e--;)o[e]===i&&o.splice(e,1);o.length||n.focus()}),t.data&&i.on("postRender",function(){this.find("*").each(function(e){var n=e.name();n in t.data&&e.value(t.data[n])})}),i.features=t||{},i.params=r||{},1===o.length&&n.nodeChanged(),i.renderTo().reflow()},i.alert=function(e,r,i){t.alert(e,function(){r?r.call(i||this):n.focus()})},i.confirm=function(e,n,r){t.confirm(e,function(e){n.call(r||this,e)})},i.close=function(){r()&&r().close()},i.getParams=function(){return r()?r().params:null},i.setParams=function(e){r()&&(r().params=e)},i.getWindows=function(){return o}}}),r(Se,[he,Ce],function(e,t){return e.extend({Mixins:[t],Defaults:{classes:"widget tooltip tooltip-n"},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes+'" role="presentation"><div class="'+t+'tooltip-arrow"></div><div class="'+t+'tooltip-inner">'+e.encode(e.state.get("text"))+"</div></div>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().lastChild.innerHTML=e.encode(t.value)}),e._super()},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(ke,[he,Se],function(e,t){var n,r=e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.canFocus=!0,e.tooltip&&r.tooltips!==!1&&(t.on("mouseenter",function(n){var r=t.tooltip().moveTo(-65535);if(n.control==t){var i=r.text(e.tooltip).show().testMoveRel(t.getEl(),["bc-tc","bc-tl","bc-tr"]);r.classes.toggle("tooltip-n","bc-tc"==i),r.classes.toggle("tooltip-nw","bc-tl"==i),r.classes.toggle("tooltip-ne","bc-tr"==i),r.moveRel(t.getEl(),i)}else r.hide()}),t.on("mouseleave mousedown click",function(){t.tooltip().hide()})),t.aria("label",e.ariaLabel||e.tooltip)},tooltip:function(){return n||(n=new t({type:"tooltip"}),n.renderTo()),n},postRender:function(){var e=this,t=e.settings;e._super(),e.parent()||!t.width&&!t.height||(e.initLayoutRect(),e.repaint()),t.autofocus&&e.focus()},bindStates:function(){function e(e){n.aria("disabled",e),n.classes.toggle("disabled",e)}function t(e){n.aria("pressed",e),n.classes.toggle("active",e)}var n=this;return n.state.on("change:disabled",function(t){e(t.value)}),n.state.on("change:active",function(e){t(e.value)}),n.state.get("disabled")&&e(!0),n.state.get("active")&&t(!0),n._super()},remove:function(){this._super(),n&&(n.remove(),n=null)}});return r}),r(Te,[ke],function(e){return e.extend({Defaults:{value:0},init:function(e){var t=this;t._super(e),t.classes.add("progress"),t.settings.filter||(t.settings.filter=function(e){return Math.round(e)})},renderHtml:function(){var e=this,t=e._id,n=this.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div class="'+n+'bar-container"><div class="'+n+'bar"></div></div><div class="'+n+'text">0%</div></div>'},postRender:function(){var e=this;return e._super(),e.value(e.settings.value),e},bindStates:function(){function e(e){e=t.settings.filter(e),t.getEl().lastChild.innerHTML=e+"%",t.getEl().firstChild.firstChild.style.width=e+"%"}var t=this;return t.state.on("change:value",function(t){e(t.value)}),e(t.state.get("value")),t._super()}})}),r(Re,[he,Ce,Te],function(e,t,n){return e.extend({Mixins:[t],Defaults:{classes:"widget notification"},init:function(e){var t=this;t._super(e),e.text&&t.text(e.text),e.icon&&(t.icon=e.icon),e.color&&(t.color=e.color),e.type&&t.classes.add("notification-"+e.type),e.timeout&&(e.timeout<0||e.timeout>0)&&!e.closeButton?t.closeButton=!1:(t.classes.add("has-close"),t.closeButton=!0),e.progressBar&&(t.progressBar=new n),t.on("click",function(e){-1!=e.target.className.indexOf(t.classPrefix+"close")&&t.close()})},renderHtml:function(){var e=this,t=e.classPrefix,n="",r="",i="",o="";return e.icon&&(n='<i class="'+t+"ico "+t+"i-"+e.icon+'"></i>'),e.color&&(o=' style="background-color: '+e.color+'"'),e.closeButton&&(r='<button type="button" class="'+t+'close" aria-hidden="true">\xd7</button>'),e.progressBar&&(i=e.progressBar.renderHtml()),'<div id="'+e._id+'" class="'+e.classes+'"'+o+' role="presentation">'+n+'<div class="'+t+'notification-inner">'+e.state.get("text")+"</div>"+i+r+"</div>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().childNodes[1].innerHTML=t.value}),e.progressBar&&e.progressBar.bindStates(),e._super()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||e.remove(),e},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(Ae,[Re,u],function(e,t){return function(n){function r(){return l.length?l[l.length-1]:void 0}function i(){t.requestAnimationFrame(function(){o(),a()})}function o(){for(var e=0;e<l.length;e++)l[e].moveTo(0,0)}function a(){if(l.length>0){var e=l.slice(0,1)[0],t=n.inline?n.getElement():n.getContentAreaContainer();if(e.moveRel(t,"tc-tc"),l.length>1)for(var r=1;r<l.length;r++)l[r].moveRel(l[r-1].getEl(),"bc-tc")}}var s=this,l=[];s.notifications=l,n.on("remove",function(){for(var e=l.length;e--;)l[e].close()}),n.on("ResizeEditor",a),n.on("ResizeWindow",i),s.open=function(t){var r;return n.editorManager.setActive(n),r=new e(t),l.push(r),t.timeout>0&&(r.timer=setTimeout(function(){r.close()},t.timeout)),r.on("close",function(){var e=l.length;for(r.timer&&n.getWin().clearTimeout(r.timer);e--;)l[e]===r&&l.splice(e,1);a()}),r.renderTo(),a(),r},s.close=function(){r()&&r().close()},s.getNotifications=function(){return l}}}),r(Be,[w],function(e){function t(t,n,r){for(var i=[];n&&n!=t;n=n.parentNode)i.push(e.nodeIndex(n,r));return i}function n(e,t){var n,r,i;for(r=e,n=t.length-1;n>=0;n--){if(i=r.childNodes,t[n]>i.length-1)return null;r=i[t[n]]}return r}return{create:t,resolve:n}}),r(De,[I,T,y,Be,A,C,h,m,u,k],function(e,t,n,r,i,o,a,s,l,c){return function(u){function d(e,t){try{u.getDoc().execCommand(e,!1,t)}catch(n){}}function f(){var e=u.getDoc().documentMode;return e?e:6}function h(e){return e.isDefaultPrevented()}function p(e){var t,n;e.dataTransfer&&(u.selection.isCollapsed()&&"IMG"==e.target.tagName&&Q.select(e.target),t=u.selection.getContent(),t.length>0&&(n=oe+escape(u.id)+","+escape(t),e.dataTransfer.setData(ae,n)))}function m(e){var t;return e.dataTransfer&&(t=e.dataTransfer.getData(ae),t&&t.indexOf(oe)>=0)?(t=t.substr(oe.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}function g(e){u.queryCommandSupported("mceInsertClipboardContent")?u.execCommand("mceInsertClipboardContent",!1,{content:e}):u.execCommand("mceInsertContent",!1,e)}function v(){function i(e){var t=C.schema.getBlockElements(),n=u.getBody();if("BR"!=e.nodeName)return!1;for(e=e;e!=n&&!t[e.nodeName];e=e.parentNode)if(e.nextSibling)return!1;return!0}function o(e,t){var n;for(n=e.nextSibling;n&&n!=t;n=n.nextSibling)if((3!=n.nodeType||0!==X.trim(n.data).length)&&n!==t)return!1;return n===t}function a(e,t,r){var o,a,s;for(s=C.schema.getNonEmptyElements(),o=new n(r||e,e);a=o[t?"next":"prev"]();){if(s[a.nodeName]&&!i(a))return a;if(3==a.nodeType&&a.data.length>0)return a}}function c(e){var n,r,i,o,s;if(!e.collapsed&&(n=C.getParent(t.getNode(e.startContainer,e.startOffset),C.isBlock),r=C.getParent(t.getNode(e.endContainer,e.endOffset),C.isBlock),s=u.schema.getTextBlockElements(),n!=r&&s[n.nodeName]&&s[r.nodeName]&&"false"!==C.getContentEditable(n)&&"false"!==C.getContentEditable(r)))return e.deleteContents(),i=a(n,!1),o=a(r,!0),C.isEmpty(r)||X(n).append(r.childNodes),X(r).remove(),i?1==i.nodeType?"BR"==i.nodeName?(e.setStartBefore(i),e.setEndBefore(i)):(e.setStartAfter(i),e.setEndAfter(i)):(e.setStart(i,i.data.length),e.setEnd(i,i.data.length)):o&&(1==o.nodeType?(e.setStartBefore(o),e.setEndBefore(o)):(e.setStart(o,0),e.setEnd(o,0))),x.setRng(e),!0}function d(e,n){var r,i,s,l,c,d;if(!e.collapsed)return e;if(c=e.startContainer,d=e.startOffset,3==c.nodeType)if(n){if(d<c.data.length)return e}else if(d>0)return e;if(r=t.getNode(e.startContainer,e.startOffset),s=C.getParent(r,C.isBlock),i=a(u.getBody(),n,r),l=C.getParent(i,C.isBlock),!r||!i)return e;if(l&&s!=l)if(n){if(!o(s,l))return e;1==r.nodeType?"BR"==r.nodeName?e.setStartBefore(r):e.setStartAfter(r):e.setStart(r,r.data.length),1==i.nodeType?e.setEnd(i,0):e.setEndBefore(i)}else{if(!o(l,s))return e;1==i.nodeType?"BR"==i.nodeName?e.setStartBefore(i):e.setStartAfter(i):e.setStart(i,i.data.length),1==r.nodeType?e.setEnd(r,0):e.setEndBefore(r)}return e}function f(e){var t=x.getRng();return t=d(t,e),c(t)?!0:void 0}function v(e,t){function n(e,n){return m=X(n).parents().filter(function(e,t){return!!u.schema.getTextInlineElements()[t.nodeName]}),l=e.cloneNode(!1),m=s.map(m,function(e){return e=e.cloneNode(!1),l.hasChildNodes()?(e.appendChild(l.firstChild),l.appendChild(e)):l.appendChild(e),l.appendChild(e),e}),m.length?(p=C.create("br"),m[0].appendChild(p),C.replace(l,e),t.setStartBefore(p),t.setEndBefore(p),u.selection.setRng(t),p):null}function i(e){return e&&u.schema.getTextBlockElements()[e.tagName]}var o,a,l,c,d,f,h,p,m;if(t.collapsed&&(f=t.startContainer,h=t.startOffset,a=C.getParent(f,C.isBlock),i(a)))if(1==f.nodeType){if(f=f.childNodes[h],f&&"BR"!=f.tagName)return;if(d=e?a.nextSibling:a.previousSibling,C.isEmpty(a)&&i(d)&&C.isEmpty(d)&&n(a,f))return C.remove(d),!0}else if(3==f.nodeType){if(o=r.create(a,f),c=a.cloneNode(!0),f=r.resolve(c,o),e){if(h>=f.data.length)return;f.deleteData(h,1)}else{if(0>=h)return;f.deleteData(h-1,1)}if(C.isEmpty(c))return n(a,f)}}function y(e){var t,n,r;f(e)||(s.each(u.getBody().getElementsByTagName("*"),function(e){"SPAN"==e.tagName&&e.setAttribute("mce-data-marked",1),!e.hasAttribute("data-mce-style")&&e.hasAttribute("style")&&u.dom.setAttrib(e,"style",u.dom.getAttrib(e,"style"))}),t=new w(function(){}),t.observe(u.getDoc(),{childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"]}),u.getDoc().execCommand(e?"ForwardDelete":"Delete",!1,null),n=u.selection.getRng(),r=n.startContainer.parentNode,s.each(t.takeRecords(),function(e){if(C.isChildOf(e.target,u.getBody())){if("style"==e.attributeName){var t=e.target.getAttribute("data-mce-style");t?e.target.setAttribute("style",t):e.target.removeAttribute("style")}s.each(e.addedNodes,function(e){if("SPAN"==e.nodeName&&!e.getAttribute("mce-data-marked")){var t,i;e==r&&(t=n.startOffset,i=e.firstChild),C.remove(e,!0),i&&(n.setStart(i,t),n.setEnd(i,t),u.selection.setRng(n))}})}}),t.disconnect(),s.each(u.dom.select("span[mce-data-marked]"),function(e){e.removeAttribute("mce-data-marked")}))}var b=u.getDoc(),C=u.dom,x=u.selection,w=window.MutationObserver,E,N;w||(E=!0,w=function(){function e(e){var t=e.relatedNode||e.target;n.push({target:t,addedNodes:[t]})}function t(e){var t=e.relatedNode||e.target;n.push({target:t,attributeName:e.attrName})}var n=[],r;this.observe=function(n){r=n,r.addEventListener("DOMSubtreeModified",e,!1),r.addEventListener("DOMNodeInsertedIntoDocument",e,!1),r.addEventListener("DOMNodeInserted",e,!1),r.addEventListener("DOMAttrModified",t,!1)},this.disconnect=function(){r.removeEventListener("DOMSubtreeModified",e,!1),r.removeEventListener("DOMNodeInsertedIntoDocument",e,!1),r.removeEventListener("DOMNodeInserted",e,!1),r.removeEventListener("DOMAttrModified",t,!1)},this.takeRecords=function(){return n}}),u.on("keydown",function(e){var t=e.keyCode==G,n=e.ctrlKey||e.metaKey;if(!h(e)&&(t||e.keyCode==K)){var r=u.selection.getRng(),i=r.startContainer,o=r.startOffset;if(t&&e.shiftKey)return;if(v(t,r))return void e.preventDefault();if(!n&&r.collapsed&&3==i.nodeType&&(t?o<i.data.length:o>0))return;e.preventDefault(),n&&u.selection.getSel().modify("extend",t?"forward":"backward",e.metaKey?"lineboundary":"word"),y(t)}}),u.on("keypress",function(t){if(!h(t)&&!x.isCollapsed()&&t.charCode>31&&!e.metaKeyPressed(t)){var n,r,i,o,a,s;n=u.selection.getRng(),s=String.fromCharCode(t.charCode),t.preventDefault(),r=X(n.startContainer).parents().filter(function(e,t){return!!u.schema.getTextInlineElements()[t.nodeName]}),y(!0),r=r.filter(function(e,t){return!X.contains(u.getBody(),t)}),r.length?(i=C.createFragment(),r.each(function(e,t){t=t.cloneNode(!1),i.hasChildNodes()?(t.appendChild(i.firstChild),i.appendChild(t)):(a=t,i.appendChild(t)),i.appendChild(t)}),a.appendChild(u.getDoc().createTextNode(s)),o=C.getParent(n.startContainer,C.isBlock),C.isEmpty(o)?X(o).empty().append(i):n.insertNode(i),n.setStart(a.firstChild,1),n.setEnd(a.firstChild,1),u.selection.setRng(n)):u.selection.setContent(s)}}),u.addCommand("Delete",function(){y()}),u.addCommand("ForwardDelete",function(){y(!0)}),E||(u.on("dragstart",function(e){N=x.getRng(),p(e)}),u.on("drop",function(e){if(!h(e)){var n=m(e);n&&(e.preventDefault(),l.setEditorTimeout(u,function(){var r=t.getCaretRangeFromPoint(e.x,e.y,b);N&&(x.setRng(N),N=null),y(),x.setRng(r),g(n.html)}))}}),u.on("cut",function(e){h(e)||!e.clipboardData||u.selection.isCollapsed()||(e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/html",u.selection.getContent()),e.clipboardData.setData("text/plain",u.selection.getContent({format:"text"})),l.setEditorTimeout(u,function(){y(!0)}))}))}function y(){function e(e){var t=J.create("body"),n=e.cloneContents();return t.appendChild(n),Q.serializer.serialize(t,{format:"html"})}function n(n){if(!n.setStart){if(n.item)return!1;var r=n.duplicate();return r.moveToElementText(u.getBody()),t.compareRanges(n,r)}var i=e(n),o=J.createRng();o.selectNode(u.getBody());var a=e(o);return i===a}u.on("keydown",function(e){var t=e.keyCode,r,i;if(!h(e)&&(t==G||t==K)){if(r=u.selection.isCollapsed(),i=u.getBody(),r&&!J.isEmpty(i))return;if(!r&&!n(u.selection.getRng()))return;e.preventDefault(),u.setContent(""),i.firstChild&&J.isBlock(i.firstChild)?u.selection.setCursorLocation(i.firstChild,0):u.selection.setCursorLocation(i,0),u.nodeChanged()}})}function b(){u.shortcuts.add("meta+a",null,"SelectAll")}function C(){u.settings.content_editable||J.bind(u.getDoc(),"mousedown mouseup",function(e){var t;if(e.target==u.getDoc().documentElement)if(t=Q.getRng(),u.getBody().focus(),"mousedown"==e.type){if(c.isCaretContainer(t.startContainer))return;Q.placeCaretAt(e.clientX,e.clientY)}else Q.setRng(t)})}function x(){u.on("keydown",function(e){if(!h(e)&&e.keyCode===K){if(!u.getBody().getElementsByTagName("hr").length)return;if(Q.isCollapsed()&&0===Q.getRng(!0).startOffset){var t=Q.getNode(),n=t.previousSibling;if("HR"==t.nodeName)return J.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(J.remove(n),e.preventDefault())}}})}function w(){window.Range.prototype.getClientRects||u.on("mousedown",function(e){if(!h(e)&&"HTML"===e.target.nodeName){var t=u.getBody();t.blur(),l.setEditorTimeout(u,function(){t.focus()})}})}function E(){u.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==J.getContentEditableParent(t)&&(e.preventDefault(),Q.getSel().setBaseAndExtent(t,0,t,1),u.nodeChanged()),"A"==t.nodeName&&J.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),Q.select(t))})}function N(){function e(){var e=J.getAttribs(Q.getStart().cloneNode(!1));return function(){var t=Q.getStart();t!==u.getBody()&&(J.setAttrib(t,"style",null),Y(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}}function t(){return!Q.isCollapsed()&&J.getParent(Q.getStart(),J.isBlock)!=J.getParent(Q.getEnd(),J.isBlock)}u.on("keypress",function(n){var r;return h(n)||8!=n.keyCode&&46!=n.keyCode||!t()?void 0:(r=e(),u.getDoc().execCommand("delete",!1,null),r(),n.preventDefault(),!1)}),J.bind(u.getDoc(),"cut",function(n){var r;!h(n)&&t()&&(r=e(),l.setEditorTimeout(u,function(){r()}))})}function _(){document.body.setAttribute("role","application")}function S(){u.on("keydown",function(e){if(!h(e)&&e.keyCode===K&&Q.isCollapsed()&&0===Q.getRng(!0).startOffset){var t=Q.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})}function k(){f()>7||(d("RespectVisibilityInDesign",!0),u.contentStyles.push(".mceHideBrInPre pre br {display: none}"),J.addClass(u.getBody(),"mceHideBrInPre"),ee.addNodeFilter("pre",function(e){for(var t=e.length,n,r,o,a;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)o=n[r],a=o.prev,a&&3===a.type&&"\n"!=a.value.charAt(a.value-1)?a.value+="\n":o.parent.insert(new i("#text",3),o,!0).value="\n"}),te.addNodeFilter("pre",function(e){for(var t=e.length,n,r,i,o;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)i=n[r],o=i.prev,o&&3==o.type&&(o.value=o.value.replace(/\r?\n$/,""))}))}function T(){J.bind(u.getBody(),"mouseup",function(){var e,t=Q.getNode();"IMG"==t.nodeName&&((e=J.getStyle(t,"width"))&&(J.setAttrib(t,"width",e.replace(/[^0-9%]+/g,"")),J.setStyle(t,"width","")),(e=J.getStyle(t,"height"))&&(J.setAttrib(t,"height",e.replace(/[^0-9%]+/g,"")),J.setStyle(t,"height","")))})}function R(){u.on("keydown",function(t){var n,r,i,o,a;if(!h(t)&&t.keyCode==e.BACKSPACE&&(n=Q.getRng(),r=n.startContainer,i=n.startOffset,o=J.getRoot(),a=r,n.collapsed&&0===i)){for(;a&&a.parentNode&&a.parentNode.firstChild==a&&a.parentNode!=o;)a=a.parentNode;"BLOCKQUOTE"===a.tagName&&(u.formatter.toggle("blockquote",null,a),n=J.createRng(),n.setStart(r,0),n.setEnd(r,0),Q.setRng(n))}})}function A(){function e(){u._refreshContentEditable(),d("StyleWithCSS",!1),d("enableInlineTableEditing",!1),Z.object_resizing||d("enableObjectResizing",!1)}Z.readonly||u.on("BeforeExecCommand MouseDown",e)}function B(){function e(){Y(J.select("a"),function(e){var t=e.parentNode,n=J.getRoot();if(t.lastChild===e){for(;t&&!J.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}J.add(t,"br",{"data-mce-bogus":1})}})}u.on("SetContent ExecCommand",function(t){("setcontent"==t.type||"mceInsertLink"===t.command)&&e()})}function D(){Z.forced_root_block&&u.on("init",function(){d("DefaultParagraphSeparator",Z.forced_root_block)})}function M(){u.on("keydown",function(e){var t;h(e)||e.keyCode!=K||(t=u.getDoc().selection.createRange(),t&&t.item&&(e.preventDefault(),u.undoManager.beforeChange(),J.remove(t.item(0)),u.undoManager.add()))})}function L(){var e;f()>=10&&(e="",Y("p div h1 h2 h3 h4 h5 h6".split(" "),function(t,n){
e+=(n>0?",":"")+t+":empty"}),u.contentStyles.push(e+"{padding-right: 1px !important}"))}function P(){f()<9&&(ee.addNodeFilter("noscript",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.firstChild,r&&n.attr("data-mce-innertext",r.value)}),te.addNodeFilter("noscript",function(e){for(var t=e.length,n,r,a;t--;)n=e[t],r=e[t].firstChild,r?r.value=o.decode(r.value):(a=n.attributes.map["data-mce-innertext"],a&&(n.attr("data-mce-innertext",null),r=new i("#text",3),r.value=a,r.raw=!0,n.append(r)))}))}function H(){function e(e,t){var n=i.createTextRange();try{n.moveToPoint(e,t)}catch(r){n=null}return n}function t(t){var r;t.button?(r=e(t.x,t.y),r&&(r.compareEndPoints("StartToStart",a)>0?r.setEndPoint("StartToStart",a):r.setEndPoint("EndToEnd",a),r.select())):n()}function n(){var e=r.selection.createRange();a&&!e.item&&0===e.compareEndPoints("StartToEnd",e)&&a.select(),J.unbind(r,"mouseup",n),J.unbind(r,"mousemove",t),a=o=0}var r=J.doc,i=r.body,o,a,s;r.documentElement.unselectable=!0,J.bind(r,"mousedown contextmenu",function(i){if("HTML"===i.target.nodeName){if(o&&n(),s=r.documentElement,s.scrollHeight>s.clientHeight)return;o=1,a=e(i.x,i.y),a&&(J.bind(r,"mouseup",n),J.bind(r,"mousemove",t),J.getRoot().focus(),a.select())}})}function O(){u.on("keyup focusin mouseup",function(t){65==t.keyCode&&e.metaKeyPressed(t)||Q.normalize()},!0)}function I(){u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}function F(){u.inline||u.on("keydown",function(){document.activeElement==document.body&&u.getWin().focus()})}function z(){u.inline||(u.contentStyles.push("body {min-height: 150px}"),u.on("click",function(e){var t;if("HTML"==e.target.nodeName){if(a.ie>11)return void u.getBody().focus();t=u.selection.getRng(),u.getBody().focus(),u.selection.setRng(t),u.selection.normalize(),u.nodeChanged()}}))}function W(){a.mac&&u.on("keydown",function(t){!e.metaKeyPressed(t)||t.shiftKey||37!=t.keyCode&&39!=t.keyCode||(t.preventDefault(),u.selection.getSel().modify("move",37==t.keyCode?"backward":"forward","lineboundary"))})}function V(){d("AutoUrlDetect",!1)}function U(){u.on("click",function(e){var t=e.target;do if("A"===t.tagName)return void e.preventDefault();while(t=t.parentNode)}),u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}function $(){u.on("init",function(){u.dom.bind(u.getBody(),"submit",function(e){e.preventDefault()})})}function q(){ee.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"==e[t].attr("class")&&e[t].remove()})}function j(){u.on("dragstart",function(e){p(e)}),u.on("drop",function(e){if(!h(e)){var n=m(e);if(n&&n.id!=u.id){e.preventDefault();var r=t.getCaretRangeFromPoint(e.x,e.y,u.getDoc());Q.setRng(r),g(n.html)}}})}var Y=s.each,X=u.$,K=e.BACKSPACE,G=e.DELETE,J=u.dom,Q=u.selection,Z=u.settings,ee=u.parser,te=u.serializer,ne=a.gecko,re=a.ie,ie=a.webkit,oe="data:text/mce-internal,",ae=re?"Text":"URL";R(),y(),O(),ie&&(v(),C(),E(),D(),$(),S(),q(),a.iOS?(F(),z(),U()):b()),re&&a.ie<11&&(x(),_(),k(),T(),M(),L(),P(),H()),a.ie>=11&&(z(),S()),a.ie&&(b(),V(),j()),ne&&(x(),w(),N(),A(),B(),I(),W(),S())}}),r(Me,[oe,w,m],function(e,t,n){function r(e,t){return"selectionchange"==t?e.getDoc():!e.inline&&/^mouse|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=o.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()}function i(e,t){function n(e){return!e.hidden&&!e.readonly}var i=r(e,t),s;if(e.delegates||(e.delegates={}),!e.delegates[t])if(e.settings.event_root){if(a||(a={},e.editorManager.on("removeEditor",function(){var t;if(!e.editorManager.activeEditor&&a){for(t in a)e.dom.unbind(r(e,t));a=null}})),a[t])return;s=function(r){for(var i=r.target,a=e.editorManager.editors,s=a.length;s--;){var l=a[s].getBody();(l===i||o.isChildOf(i,l))&&n(a[s])&&a[s].fire(t,r)}},a[t]=s,o.bind(i,t,s)}else s=function(r){n(e)&&e.fire(t,r)},o.bind(i,t,s),e.delegates[t]=s}var o=t.DOM,a,s={bindPendingEventDelegates:function(){var e=this;n.each(e._pendingNativeEvents,function(t){i(e,t)})},toggleNativeEvent:function(e,t){var n=this;"focus"!=e&&"blur"!=e&&(t?n.initialized?i(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(r(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t;if(e.delegates){for(t in e.delegates)e.dom.unbind(r(e,t),t,e.delegates[t]);delete e.delegates}e.inline||(e.getBody().onload=null,e.dom.unbind(e.getWin()),e.dom.unbind(e.getDoc())),e.dom.unbind(e.getBody()),e.dom.unbind(e.getContainer())}};return s=n.extend({},e,s)}),r(Le,[],function(){function e(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}}function t(t,n){var r=t.readonly?"readonly":"design";n!=r&&("readonly"==n?(t.selection.controlSelection.hideResizeRect(),t.readonly=!0,t.getBody().contentEditable=!1):(t.readonly=!1,t.getBody().contentEditable=!0,e(t,"StyleWithCSS",!1),e(t,"enableInlineTableEditing",!1),e(t,"enableObjectResizing",!1),t.focus(),t.nodeChanged()),t.fire("SwitchMode",{mode:n}))}return{setMode:t}}),r(Pe,[m,h],function(e,t){var n=e.each,r=e.explode,i={f9:120,f10:121,f11:122},o=e.makeMap("alt,ctrl,shift,meta,access");return function(a){function s(e,s,l,c){var u,d,f;f={func:l,scope:c||a,desc:a.translate(s)},n(r(e,"+"),function(e){e in o?f[e]=!0:/^[0-9]{2,}$/.test(e)?f.keyCode=parseInt(e,10):(f.charCode=e.charCodeAt(0),f.keyCode=i[e]||e.toUpperCase().charCodeAt(0))}),u=[f.keyCode];for(d in o)f[d]?u.push(d):f[d]=!1;return f.id=u.join(","),f.access&&(f.alt=!0,t.mac?f.ctrl=!0:f.shift=!0),f.meta&&(t.mac?f.meta=!0:(f.ctrl=!0,f.meta=!1)),f}var l=this,c={};a.on("keyup keypress keydown",function(e){(e.altKey||e.ctrlKey||e.metaKey)&&!e.isDefaultPrevented()&&n(c,function(t){return t.ctrl==e.ctrlKey&&t.meta==e.metaKey&&t.alt==e.altKey&&t.shift==e.shiftKey&&(e.keyCode==t.keyCode||e.charCode&&e.charCode==t.charCode)?(e.preventDefault(),"keydown"==e.type&&t.func.call(t.scope),!0):void 0})}),l.add=function(t,i,o,l){var u;return u=o,"string"==typeof o?o=function(){a.execCommand(u,!1,null)}:e.isArray(u)&&(o=function(){a.execCommand(u[0],u[1],u[2])}),n(r(t.toLowerCase()),function(e){var t=s(e,i,o,l);c[t.id]=t}),!0},l.remove=function(e){var t=s(e);return c[t.id]?(delete c[t.id],!0):!1}}}),r(He,[c,m,z],function(e,t,n){return function(r){function i(e){var t,n;return n={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"},t=n[e.blob().type.toLowerCase()]||"dat",e.id()+"."+t}function o(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t}function a(e){return{id:e.id,blob:e.blob,base64:e.base64,filename:n.constant(i(e))}}function s(e,t,n,a){var s,l,c;s=new XMLHttpRequest,s.open("POST",r.url),s.withCredentials=r.credentials,c=a(),s.upload.onprogress=function(e){var t=Math.round(e.loaded/e.total*100);c.progressBar.value(t)},s.onload=function(){var e;return c.close(),200!=s.status?void n("HTTP Error: "+s.status):(e=JSON.parse(s.responseText),e&&"string"==typeof e.location?void t(o(r.basePath,e.location)):void n("Invalid JSON: "+s.responseText))},l=new FormData,l.append("file",e.blob(),i(e)),s.send(l)}function l(){return new e(function(e){e([])})}function c(e){return e.then(function(e){return e})["catch"](function(e){return e})}function u(e,t,n){var r=e(n),i=c(r);return delete p[t],p[t]=i,i}function d(e,n){return t.map(e,function(e){var t=e.id();return p[t]?p[t]:u(n,t,e)})}function f(t,n){function i(t){return new e(function(e){var i=r.handler;i(a(t),function(n){e({url:n,blobInfo:t,status:!0})},function(n){e({url:"",blobInfo:t,status:!1,error:n})},n)})}var o=d(t,i);return e.all(o)}function h(e,t){return r.url||r.handler!==s?f(e,t):l()}var p={};return r=t.extend({credentials:!1,handler:s},r),{upload:h}}}),r(Oe,[c],function(e){function t(t){return new e(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(){200==this.status&&e(this.response)},n.send()})}function n(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}}function r(t){return new e(function(e){var r,i,o;t=n(t);try{r=atob(t.data)}catch(a){return void e(new Blob([]))}for(i=new Uint8Array(r.length),o=0;o<i.length;o++)i[o]=r.charCodeAt(o);e(new Blob([i],{type:t.type}))})}function i(e){return 0===e.indexOf("blob:")?t(e):0===e.indexOf("data:")?r(e):null}function o(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}return{uriToBlob:i,blobToDataUri:o,parseDataUri:n}}),r(Ie,[c,p,z,Oe,h],function(e,t,n,r,i){var o=0;return function(a){function s(s,c){function u(e,t){var n,i;return 0===e.src.indexOf("blob:")?(i=a.getByUri(e.src),void(i&&t({image:e,blobInfo:i}))):(n=r.parseDataUri(e.src).data,i=a.findFirst(function(e){return e.base64()===n}),void(i?t({image:e,blobInfo:i}):r.uriToBlob(e.src).then(function(r){var i="blobid"+o++,s=a.create(i,r,n);a.add(s),t({image:e,blobInfo:s})})))}var d,f;return c||(c=n.constant(!0)),d=t.filter(s.getElementsByTagName("img"),function(e){var t=e.src;return i.fileApi?e.hasAttribute("data-mce-bogus")?!1:e.hasAttribute("data-mce-placeholder")?!1:t&&t!=i.transparentSrc?0===t.indexOf("blob:")?!0:0===t.indexOf("data:")?c(e):!1:!1:!1}),f=t.map(d,function(t){var n;return l[t.src]?new e(function(e){l[t.src].then(function(n){e({image:t,blobInfo:n.blobInfo})})}):(n=new e(function(e){u(t,e)}).then(function(e){return delete l[e.image.src],e})["catch"](function(e){return delete l[t.src],e}),l[t.src]=n,n)}),e.all(f)}var l={};return{findAll:s}}}),r(Fe,[p,z],function(e,t){return function(){function n(e,t,n){return{id:c(e),blob:c(t),base64:c(n),blobUri:c(URL.createObjectURL(t))}}function r(e){i(e.id())||l.push(e)}function i(e){return o(function(t){return t.id()===e})}function o(t){return e.filter(l,t)[0]}function a(e){return o(function(t){return t.blobUri()==e})}function s(){e.each(l,function(e){URL.revokeObjectURL(e.blobUri())}),l=[]}var l=[],c=t.constant;return{create:n,add:r,get:i,getByUri:a,findFirst:o,destroy:s}}}),r(ze,[p,He,Ie,Fe],function(e,t,n,r){return function(i){function o(e){return function(t){return i.selection?e(t):[]}}function a(e,t,n){var r=0;do r=e.indexOf(t,r),-1!==r&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1);while(-1!==r);return e}function s(e,t,n){return e=a(e,'src="'+t+'"','src="'+n+'"'),e=a(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')}function l(t,n){e.each(i.undoManager.data,function(e){e.content=s(e.content,t,n)})}function c(){return i.notificationManager.open({text:i.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}function u(n){return g||(g=new t({url:y.images_upload_url,basePath:y.images_upload_base_path,credentials:y.images_upload_credentials,handler:y.images_upload_handler})),f().then(o(function(t){var r;return r=e.map(t,function(e){return e.blobInfo}),g.upload(r,c).then(o(function(r){return r=e.map(r,function(e,n){var r=t[n].image;return l(r.src,e.url),i.$(r).attr({src:e.url,"data-mce-src":i.convertURL(e.url,"src")}),{element:r,status:e.status}}),n&&n(r),r}))}))}function d(e){return y.automatic_uploads!==!1?u(e):void 0}function f(){return v||(v=new n(m)),v.findAll(i.getBody(),y.images_dataimg_filter).then(o(function(t){return e.each(t,function(e){l(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri()}),t}))}function h(){m.destroy(),v=g=null}function p(t){return t.replace(/src="(blob:[^"]+)"/g,function(t,n){var r=m.getByUri(n);return r||(r=e.reduce(i.editorManager.editors,function(e,t){return e||t.editorUpload.blobCache.getByUri(n)},null)),r?'src="data:'+r.blob().type+";base64,"+r.base64()+'"':t})}var m=new r,g,v,y=i.settings;return i.on("setContent",function(){i.settings.automatic_uploads!==!1?d():f()}),i.on("RawSaveContent",function(e){e.content=p(e.content)}),i.on("getContent",function(e){e.source_view||"raw"==e.format||(e.content=p(e.content))}),{blobCache:m,uploadImages:u,uploadImagesAuto:d,scanForImages:f,destroy:h}}}),r(We,[z,y,_,$,k,W],function(e,t,n,r,i,o){function a(e){return e>0}function s(e){return 0>e}function l(e,n,r,i,o){var l=new t(e,i);if(s(n)){if(C(e)&&(e=l.prev(!0),r(e)))return e;for(;e=l.prev(o);)if(r(e))return e}if(a(n)){if(C(e)&&(e=l.next(!0),r(e)))return e;for(;e=l.next(o);)if(r(e))return e}return null}function c(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode)if(b(e))return e;return t}function u(e,t){for(;e&&e!=t;){if(x(e))return e;e=e.parentNode}return null}function d(e,t,n){return u(e.container(),n)==u(t.container(),n)}function f(e,t,n){return c(e.container(),n)==c(t.container(),n)}function h(e,t){var n,r;return t?(n=t.container(),r=t.offset(),N(n)?n.childNodes[r+e]:null):null}function p(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n}function m(e,t,n){return u(t,e)==u(n,e)}function g(e,t,n){var r,i;for(i=e?"previousSibling":"nextSibling";n&&n!=t;){if(r=n[i],w(r)&&(r=r[i]),C(r)){if(m(t,r,n))return r;break}if(_(r))break;n=n.parentNode}return null}function v(e,t,r){var o,a,s,l,c=E(g,!0,t),u=E(g,!1,t);if(a=r.startContainer,s=r.startOffset,i.isCaretContainerBlock(a)){if(N(a)||(a=a.parentNode),l=a.getAttribute("data-mce-caret"),"before"==l&&(o=a.nextSibling,C(o)))return S(o);if("after"==l&&(o=a.previousSibling,C(o)))return k(o)}if(!r.collapsed)return r;if(n.isText(a)){if(w(a)){if(1===e){if(o=u(a))return S(o);if(o=c(a))return k(o)}if(-1===e){if(o=c(a))return k(o);if(o=u(a))return S(o)}return r}if(i.endsWithCaretContainer(a)&&s>=a.data.length-1)return 1===e&&(o=u(a))?S(o):r;if(i.startsWithCaretContainer(a)&&1>=s)return-1===e&&(o=c(a))?k(o):r;if(s===a.data.length)return o=u(a),o?S(o):r;if(0===s)return o=c(a),o?k(o):r}return r}function y(e,t){return C(h(e,t))}var b=n.isContentEditableTrue,C=n.isContentEditableFalse,x=n.matchStyleValues("display","block table table-cell table-caption"),w=i.isCaretContainer,E=e.curry,N=n.isElement,_=o.isCaretCandidate,S=E(p,!0),k=E(p,!1);return{isForwards:a,isBackwards:s,findNode:l,getEditingHost:c,getParentBlock:u,isInSameBlock:d,isInSameEditingHost:f,isBeforeContentEditableFalse:E(y,0),isAfterContentEditableFalse:E(y,-1),normalizeRange:v}}),r(Ve,[_,W,$,We,p,z],function(e,t,n,r,i,o){function a(e,t){for(var n=[];e&&e!=t;)n.push(e),e=e.parentNode;return n}function s(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null}function l(e,t){if(h(e)){if(m(t.previousSibling)&&!d(t.previousSibling))return n.before(t);if(d(t))return n(t,0)}if(p(e)){if(m(t.nextSibling)&&!d(t.nextSibling))return n.after(t);if(d(t))return n(t,t.data.length)}return p(e)?n.after(t):n.before(t)}function c(e,t,c){var y,b,C,x,w,E,N;if(!f(c)||!t)return null;if(N=t,y=N.container(),b=N.offset(),d(y)){if(p(e)&&b>0)return n(y,--b);if(h(e)&&b<y.length)return n(y,++b);C=y}else{if(p(e)&&b>0&&(x=s(y,b-1),m(x)))return!g(x)&&(w=r.findNode(x,e,v,x))?d(w)?n(w,w.data.length):n.after(w):d(x)?n(x,x.data.length):n.before(x);if(h(e)&&b<y.childNodes.length&&(x=s(y,b),m(x)))return!g(x)&&(w=r.findNode(x,e,v,x))?d(w)?n(w,0):n.before(w):d(x)?n(x,0):n.after(x);C=N.getNode()}return(h(e)&&N.isAtEnd()||p(e)&&N.isAtStart())&&(C=r.findNode(C,e,o.constant(!0),c,!0),v(C))?l(e,C):(x=r.findNode(C,e,v,c),E=i.last(i.filter(a(y,c),u)),!E||x&&E.contains(x)?x?l(e,x):null:N=h(e)?n.after(E):n.before(E))}var u=e.isContentEditableFalse,d=e.isText,f=e.isElement,h=r.isForwards,p=r.isBackwards,m=t.isCaretCandidate,g=t.isAtomic,v=t.isEditableCaretCandidate;return function(e){return{next:function(t){return c(1,t,e)},prev:function(t){return c(-1,t,e)}}}}),r(Ue,[k,$,_,T,g,V,u],function(e,t,n,r,i,o,a){var s=n.isContentEditableFalse;return function(t,n){function r(e,n){var r=o.collapse(e.getBoundingClientRect(),n),i,a,s,l,c;return"BODY"==t.tagName?(i=t.ownerDocument.documentElement,a=t.scrollLeft||i.scrollLeft,s=t.scrollTop||i.scrollTop):(c=t.getBoundingClientRect(),a=t.scrollLeft-c.left,s=t.scrollTop-c.top),r.left+=a,r.right+=a,r.top+=s,r.bottom+=s,r.width=1,l=e.offsetWidth-e.clientWidth,l>0&&(n&&(l*=-1),r.left+=l,r.right+=l),r}function l(){var n,r,o,a,s;for(n=i("*[contentEditable=false]",t),a=0;a<n.length;a++)r=n[a],o=r.previousSibling,e.endsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(s.length-1,1)),o=r.nextSibling,e.startsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(0,1));return null}function c(o,a){var l,c,f;return u(),n(a)?(g=e.insertBlock("p",a,o),l=r(a,o),i(g).css("top",l.top),m=i('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(l).appendTo(t),o&&m.addClass("mce-visual-caret-before"),d(),c=a.ownerDocument.createRange(),f=g.firstChild,c.setStart(f,0),c.setEnd(f,1),c):(g=e.insertInline(a,o),c=a.ownerDocument.createRange(),s(g.nextSibling)?(c.setStart(g,0),c.setEnd(g,0)):(c.setStart(g,1),c.setEnd(g,1)),c)}function u(){l(),g&&(e.remove(g),g=null),m&&(m.remove(),m=null),clearInterval(p)}function d(){p=a.setInterval(function(){i("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden")},500)}function f(){a.clearInterval(p)}function h(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"}var p,m,g;return{show:c,hide:u,getCss:h,destroy:f}}}),r($e,[p,_,V],function(e,t,n){function r(i){function o(t){return e.map(t,function(e){return e=n.clone(e),e.node=i,e})}if(e.isArray(i))return e.reduce(i,function(e,t){return e.concat(r(t))},[]);if(t.isElement(i))return o(i.getClientRects());if(t.isText(i)){var a=i.ownerDocument.createRange();return a.setStart(i,0),a.setEnd(i,i.data.length),o(a.getClientRects())}}return{getClientRects:r}}),r(qe,[z,p,$e,W,We,Ve,$,V],function(e,t,n,r,i,o,a,s){function l(e,t,n,o){for(;o=i.findNode(o,e,r.isEditableCaretCandidate,t);)if(n(o))return}function c(e,r,i,o,a,s){function c(o){var s,l,c;for(c=n.getClientRects(o),-1==e&&(c=c.reverse()),s=0;s<c.length;s++)if(l=c[s],!i(l,h)){if(f.length>0&&r(l,t.last(f))&&u++,l.line=u,a(l))return!0;f.push(l)}}var u=0,d,f=[],h;return(h=t.last(s.getClientRects()))?(d=s.getNode(),c(d),l(e,o,c,d),f):f}function u(e,t){return t.line>e}function d(e,t){return t.line===e}function f(e,n,r,i){function l(n){return 1==e?t.last(n.getClientRects()):t.last(n.getClientRects())}var c=new o(n),u,d,f,h,p=[],m=0,g,v;1==e?(u=c.next,d=s.isBelow,f=s.isAbove,h=a.after(i)):(u=c.prev,d=s.isAbove,f=s.isBelow,h=a.before(i)),v=l(h);do if(h.isVisible()&&(g=l(h),!f(g,v))){if(p.length>0&&d(g,t.last(p))&&m++,g=s.clone(g),g.position=h,g.line=m,r(g))return p;p.push(g)}while(h=u(h));return p}var h=e.curry,p=h(c,-1,s.isAbove,s.isBelow),m=h(c,1,s.isBelow,s.isAbove);return{upUntil:p,downUntil:m,positionsUntil:f,isAboveLine:h(u),isLine:h(d)}}),r(je,[z,p,_,$e,V,We,W],function(e,t,n,r,i,o,a){function s(e,t){return Math.abs(e.left-t)}function l(e,t){return Math.abs(e.right-t)}function c(e,n){function r(e,t){return e>=t.left&&e<=t.right}return t.reduce(e,function(e,t){var i,o;return i=Math.min(s(e,n),l(e,n)),o=Math.min(s(t,n),l(t,n)),r(n,t)?t:r(n,e)?e:o==i&&m(t.node)?t:i>o?t:e})}function u(e,t,n,r){for(;r=g(r,e,a.isEditableCaretCandidate,t);)if(n(r))return}function d(e,n){function o(e,i){var o;return o=t.filter(r.getClientRects(i),function(t){return!e(t,n)}),a=a.concat(o),0===o.length}var a=[];return a.push(n),u(-1,e,v(o,i.isAbove),n.node),u(1,e,v(o,i.isBelow),n.node),a}function f(e){return t.filter(t.toArray(e.getElementsByTagName("*")),m)}function h(e,t){return{node:e.node,before:s(e,t)<l(e,t)}}function p(e,n,i){var o,a;return o=r.getClientRects(f(e)),o=t.filter(o,function(e){return i>=e.top&&i<=e.bottom}),a=c(o,n),a&&(a=c(d(e,a),n),a&&m(a.node))?h(a,n):null}var m=n.isContentEditableFalse,g=o.findNode,v=e.curry;return{findClosestClientRect:c,findLineNodeRects:d,closestCaret:p}}),r(Ye,[_],function(e){function t(e){function t(e){return n(e)}function r(t){c(e.getBody()).css("cursor",t)}function i(t){return t==h.element||e.dom.isChildOf(t,h.element)?!1:n(t)?!1:!0}function o(t){var n,i,o,a,s=0,l=0,u,d,p,m;0===t.button&&(n=t.screenX-h.screenX,i=t.screenY-h.screenY,u=Math.max(Math.abs(n),Math.abs(i)),!h.dragging&&u>10&&(h.dragging=!0,r("default"),h.clone=h.element.cloneNode(!0),o=f.getPos(h.element),h.relX=h.clientX-o.x,h.relY=h.clientY-o.y,h.width=h.element.offsetWidth,h.height=h.element.offsetHeight,c(h.clone).css({width:h.width,height:h.height}).removeAttr("data-mce-selected"),h.ghost=c("<div>").css({position:"absolute",opacity:.5,overflow:"hidden",width:h.width,height:h.height}).attr({"data-mce-bogus":"all",unselectable:"on",contenteditable:"false"}).addClass("mce-drag-container mce-reset").append(h.clone).appendTo(e.getBody())[0],a=e.dom.getViewPort(e.getWin()),h.maxX=a.w,h.maxY=a.h),h.dragging&&(e.selection.placeCaretAt(t.clientX,t.clientY),d=h.clientX+n-h.relX,p=h.clientY+i+5,d+h.width>h.maxX&&(s=d+h.width-h.maxX),p+h.height>h.maxY&&(l=p+h.height-h.maxY),m="BODY"!=e.getBody().nodeName?e.getBody().getBoundingClientRect():{left:0,top:0},c(h.ghost).css({left:d-m.left,top:p-m.top,width:h.width-s,height:h.height-l})))}function a(){h.dragging&&(e.selection.setRng(e.selection.getSel().getRangeAt(0)),i(e.selection.getNode())&&e.undoManager.transact(function(){e.insertContent(f.getOuterHTML(h.element)),c(h.element).remove()})),l()}function s(n){if(l(),t(n.target)){if(e.fire("dragstart",{target:n.target}).isDefaultPrevented())return;e.on("mousemove",o),e.on("mouseup",a),u!=d&&(f.bind(u,"mousemove",o),f.bind(u,"mouseup",a)),h={screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY,element:n.target}}}function l(){c(h.ghost).remove(),r(null),e.off("mousemove",o),e.off("mouseup",l),u!=d&&(f.unbind(u,"mousemove",o),f.unbind(u,"mouseup",l)),h={}}var c=e.$,u=document,d=e.getDoc(),f=e.dom,h={};e.on("mousedown",s),e.on("drop",function(t){var r=e.getDoc().elementFromPoint(t.clientX,t.clientY);(n(r)||n(e.dom.getContentEditableParent(r)))&&t.preventDefault()})}var n=e.isContentEditableFalse;return{init:t}}),r(Xe,[h,Ve,$,k,We,Ue,qe,je,_,T,I,z,p,u,Ye],function(e,t,n,r,i,o,a,s,l,c,u,d,f,h,p){function m(e,t){for(;t=e(t);)if(t.isVisible())return t;return t}function g(c){function d(e){return c.dom.isBlock(e)}function g(e){e&&c.selection.setRng(e)}function N(){return c.selection.getRng()}function _(e,t){c.selection.scrollIntoView(e,t)}function S(e,t,n){var r;return r=c.fire("ShowCaret",{target:t,direction:e,before:n}),r.isDefaultPrevented()?null:(_(t,-1===e),Z.show(n,t))}function k(e){var t;return t=c.fire("ObjectSelected",{target:e}),t.isDefaultPrevented()?null:(Z.hide(),T(e))}function T(e){var t=e.ownerDocument.createRange();return t.selectNode(e),t}function R(e,t){var n=i.isInSameBlock(e,t);return!n&&l.isBr(e.getNode())?!0:n}function A(e,t){return t=i.normalizeRange(e,K,t),-1==e?n.fromRangeStart(t):n.fromRangeEnd(t)}function B(e){return r.isCaretContainerBlock(e.startContainer)}function D(e,t,n,r){var i,o,a,s;return!r.collapsed&&(i=E(r),b(i))?S(e,i,-1==e):(s=B(r),o=A(e,r),n(o)?k(o.getNode(-1==e)):(o=t(o))?n(o)?S(e,o.getNode(-1==e),1==e):(a=t(o),n(a)&&R(o,a)?S(e,a.getNode(-1==e),1==e):s?z(o.toRange()):null):s?r:null)}function M(e,t,n){var r,i,o,l,c,u,d,h,p;if(p=E(n),r=A(e,n),i=t(K,a.isAboveLine(1),r),o=f.filter(i,a.isLine(1)),c=f.last(r.getClientRects()),w(r)&&(p=r.getNode()),x(r)&&(p=r.getNode(!0)),!c)return null;if(u=c.left,l=s.findClosestClientRect(o,u),l&&b(l.node))return d=Math.abs(u-l.left),h=Math.abs(u-l.right),S(e,l.node,h>d);if(p){var m=a.positionsUntil(e,K,a.isAboveLine(1),p);if(l=s.findClosestClientRect(f.filter(m,a.isLine(1)),u))return z(l.position.toRange());if(l=f.last(f.filter(m,a.isLine(0))))return z(l.position.toRange())}}function L(t,r){function i(){var t=c.dom.create(c.settings.forced_root_block);return(!e.ie||e.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}var o,a,s;if(r.collapsed&&c.settings.forced_root_block){if(o=c.dom.getParent(r.startContainer,"PRE"),!o)return;a=1==t?J(n.fromRangeStart(r)):Q(n.fromRangeStart(r)),a||(s=i(),1==t?c.$(o).after(s):c.$(o).before(s),c.selection.select(s,!0),c.selection.collapse())}}function P(e,t,n,r){var i;return(i=D(e,t,n,r))?i:(i=L(e,r),i?i:null)}function H(e,t,n){var r;return(r=M(e,t,n))?r:(r=L(e,n),r?r:null)}function O(){return ne("*[data-mce-caret]")[0]}function I(e){e=ne(e),e.attr("data-mce-caret")&&(Z.hide(),e.removeAttr("data-mce-caret"),e.removeAttr("data-mce-bogus"),e.removeAttr("style"),g(N()),_(e[0]))}function F(e){var t;return e=i.normalizeRange(1,K,e),t=n.fromRangeStart(e),b(t.getNode())?S(1,t.getNode(),!t.isAtEnd()):b(t.getNode(!0))?S(1,t.getNode(!0),!1):(Z.hide(),null)}function z(e){var t;return e&&e.collapsed?(t=F(e),t?t:e):e}function W(e){var t,i,o,a;return b(e)?(b(e.previousSibling)&&(o=e.previousSibling),i=Q(n.before(e)),i||(t=J(n.after(e))),t&&C(t.getNode())&&(a=t.getNode()),r.remove(e.previousSibling),r.remove(e.nextSibling),c.dom.remove(e),Y(),c.dom.isEmpty(c.getBody())?(c.setContent(""),void c.focus()):o?n.after(o).toRange():a?n.before(a).toRange():i?i.toRange():t?t.toRange():null):null}function V(e,t,n){var r,i;return!n.collapsed&&(r=E(n),b(r))?z(W(r)):(i=A(e,n),t(i)?z(W(i.getNode(-1==e))):void 0)}function U(){function e(e){var t=e(N());return t?(g(t),!0):!1}function t(e){for(var t=c.getBody();e&&e!=t;){if(y(e)||b(e))return e;e=e.parentNode}return null}function r(){var e,r=t(c.selection.getNode());y(r)&&d(r)&&c.dom.isEmpty(r)&&(e=c.dom.create("br",{"data-mce-bogus":"1"}),c.$(r).empty().append(e),c.selection.setRng(n.before(e).toRange()))}function i(e){var t=O();if(t)return"compositionstart"==e.type?(e.preventDefault(),e.stopPropagation(),void I(t)):void("&nbsp;"!=t.innerHTML&&I(t))}function o(e){var t;switch(e.keyCode){case u.DELETE:t=r();break;case u.BACKSPACE:t=r()}t&&e.preventDefault()}var l=v(P,1,J,w),f=v(P,-1,Q,x),m=v(V,1,w),C=v(V,-1,x),E=v(H,-1,a.upUntil),_=v(H,1,a.downUntil);c.on("mouseup",function(){var e=N();e.collapsed&&g(F(e))}),c.on("mousedown",function(e){var n;if(n=t(e.target))b(n)?(e.preventDefault(),j(k(n),!1)):c.selection.placeCaretAt(e.clientX,e.clientY);else{Y(),Z.hide();var r=s.closestCaret(K,e.clientX,e.clientY);r&&(e.preventDefault(),c.getBody().focus(),g(S(1,r.node,r.before)))}}),c.on("keydown",function(t){var n;if(!u.modifierPressed(t)){switch(t.keyCode){case u.RIGHT:n=e(l);break;case u.DOWN:n=e(_);break;case u.LEFT:n=e(f);break;case u.UP:n=e(E);break;case u.DELETE:n=e(m);break;case u.BACKSPACE:n=e(C);break;default:n=b(c.selection.getNode())}n&&t.preventDefault()}}),c.on("keyup compositionstart",function(e){i(e),o(e)},!0),c.on("cut",function(){var e=c.selection.getNode();b(e)&&h.setEditorTimeout(c,function(){g(z(W(e)))})}),c.on("getSelectionRange",function(e){var t=e.range;if(te){if(!te.parentNode)return void(te=null);t=t.cloneRange(),t.selectNode(te),e.range=t}}),c.on("setSelectionRange",function(e){var t;t=j(e.range),t&&(e.range=t)}),c.on("focus",function(){h.setEditorTimeout(c,function(){c.selection.setRng(z(c.selection.getRng()))})}),p.init(c)}function $(){var e=c.contentStyles,t=".mce-content-body";e.push(Z.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;width: 100pxheight: 100px}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")}function q(e){return r.isCaretContainer(e.startContainer)||r.isCaretContainer(e.endContainer)}function j(e,t){var n,r=c.$,i=c.dom,o,a,s,l,u,d,f;if(!e)return Y(),null;if(e.collapsed){if(Y(),!q(e)){if(f=A(1,e),b(f.getNode()))return S(1,f.getNode(),!f.isAtEnd());if(b(f.getNode(!0)))return S(1,f.getNode(!0),!1)}return null}return s=e.startContainer,l=e.startOffset,u=e.endOffset,3==s.nodeType&&0==l&&b(s.parentNode)&&(s=s.parentNode,l=i.nodeIndex(s),s=s.parentNode),1!=s.nodeType?(Y(),null):(u==l+1&&(n=s.childNodes[l]),b(n)?t!==!1&&(d=c.fire("ObjectSelected",{target:n}),d.isDefaultPrevented())?(Y(),null):(o=r("#"+ee),0===o.length&&(o=r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",ee),o.appendTo(c.getBody())),o.empty().append("\xa0").append(n.cloneNode(!0)).append("\xa0").css({top:i.getPos(n,c.getBody()).y}),e=c.dom.createRng(),e.setStart(o[0].firstChild,1),e.setEnd(o[0].lastChild,0),c.getBody().focus(),o[0].focus(),a=c.selection.getSel(),a.removeAllRanges(),a.addRange(e),c.$("*[data-mce-selected]").removeAttr("data-mce-selected"),n.setAttribute("data-mce-selected",1),te=n,e):(Y(),null))}function Y(){te&&(te.removeAttribute("data-mce-selected"),c.$("#"+ee).remove(),te=null)}function X(){Z.destroy(),te=null}var K=c.getBody(),G=new t(K),J=v(m,G.next),Q=v(m,G.prev),Z=new o(c.getBody(),d),ee="sel-"+c.dom.uniqueId(),te,ne=c.$;return e.ceFalse&&(U(),$()),{showBlockCaretContainer:I,destroy:X}}var v=d.curry,y=l.isContentEditableTrue,b=l.isContentEditableFalse,C=l.isElement,x=i.isAfterContentEditableFalse,w=i.isBeforeContentEditableFalse,E=c.getSelectedNode;return g}),r(Ke,[w,g,N,R,A,H,P,Y,G,J,Q,Z,ee,te,E,d,_e,Ae,B,M,De,h,m,u,Me,Le,Pe,ze,Xe],function(e,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v,y,b,C,x,w,E,N,_,S,k,T,R){function A(e,t,i){var o=this,a,s;a=o.documentBaseUrl=i.documentBaseURL,s=i.baseURI,o.settings=t=L({id:e,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:a,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,padd_empty_editor:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",validate:!0,entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o,ie7_compat:!0},t),r.language=t.language||"en",r.languageLoad=t.language_load,r.baseURL=i.baseURL,o.id=t.id=e,o.setDirty(!1),o.plugins={},o.documentBaseURI=new p(t.document_base_url||a,{base_uri:s}),o.baseURI=s,o.contentCSS=[],o.contentStyles=[],o.shortcuts=new k(o),o.loadedCSS={},o.editorCommands=new h(o),t.target&&(o.targetElm=t.target),o.suffix=i.suffix,o.editorManager=i,o.inline=t.inline,t.cache_suffix&&(w.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),t.override_viewport===!1&&(w.overrideViewPort=!1),i.fire("SetupEditor",o),o.execCallback("setup",o),o.$=n.overrideDefaults(function(){return{context:o.inline?o.getBody():o.getDoc(),element:o.getBody()}})}var B=e.DOM,D=r.ThemeManager,M=r.PluginManager,L=E.extend,P=E.each,H=E.explode,O=E.inArray,I=E.trim,F=E.resolve,z=g.Event,W=w.gecko,V=w.ie;return A.prototype={render:function(){function e(){B.unbind(window,"ready",e),n.render()}function t(){var e=m.ScriptLoader;if(r.language&&"en"!=r.language&&!r.language_url&&(r.language_url=n.editorManager.baseURL+"/langs/"+r.language+".js"),r.language_url&&e.add(r.language_url),r.theme&&"function"!=typeof r.theme&&"-"!=r.theme.charAt(0)&&!D.urls[r.theme]){var t=r.theme_url;t=t?n.documentBaseURI.toAbsolute(t):"themes/"+r.theme+"/theme"+o+".js",D.load(r.theme,t)}E.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),P(r.external_plugins,function(e,t){M.load(t,e),r.plugins+=" "+t}),P(r.plugins.split(/[ ,]/),function(e){if(e=I(e),e&&!M.urls[e])if("-"==e.charAt(0)){e=e.substr(1,e.length);var t=M.dependencies(e);P(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=M.createUrl(t,e),M.load(e.resource,e)})}else M.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),e.loadQueue(function(){n.removed||n.init()})}var n=this,r=n.settings,i=n.id,o=n.suffix;if(!z.domLoaded)return void B.bind(window,"ready",e);if(n.getElement()&&w.contentEditable){
r.inline?n.inline=!0:(n.orgVisibility=n.getElement().style.visibility,n.getElement().style.visibility="hidden");var a=n.getElement().form||B.getParent(i,"form");a&&(n.formElement=a,r.hidden_input&&!/TEXTAREA|INPUT/i.test(n.getElement().nodeName)&&(B.insertAfter(B.create("input",{type:"hidden",name:i}),i),n.hasHiddenInput=!0),n.formEventDelegate=function(e){n.fire(e.type,e)},B.bind(a,"submit reset",n.formEventDelegate),n.on("reset",function(){n.setContent(n.startContent,{format:"raw"})}),!r.submit_patch||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return n.editorManager.triggerSave(),n.setDirty(!1),a._mceOldSubmit(a)})),n.windowManager=new v(n),n.notificationManager=new y(n),"xml"==r.encoding&&n.on("GetContent",function(e){e.save&&(e.content=B.encode(e.content))}),r.add_form_submit_trigger&&n.on("submit",function(){n.initialized&&n.save()}),r.add_unload_trigger&&(n._beforeUnload=function(){!n.initialized||n.destroyed||n.isHidden()||n.save({format:"raw",no_events:!0,set_dirty:!1})},n.editorManager.on("BeforeUnload",n._beforeUnload)),t()}},init:function(){function e(n){var r=M.get(n),i,o;if(i=M.urls[n]||t.documentBaseUrl.replace(/\/$/,""),n=I(n),r&&-1===O(m,n)){if(P(M.dependencies(n),function(t){e(t)}),t.plugins[n])return;o=new r(t,i,t.$),t.plugins[n]=o,o.init&&(o.init(t,i),m.push(n))}}var t=this,n=t.settings,r=t.getElement(),i,o,a,s,l,c,u,d,f,h,p,m=[];if(this.editorManager.i18n.setCode(n.language),t.rtl=n.rtl_ui||this.editorManager.i18n.rtl,t.editorManager.add(t),n.aria_label=n.aria_label||B.getAttrib(r,"aria-label",t.getLang("aria.rich_text_area")),n.theme&&("function"!=typeof n.theme?(n.theme=n.theme.replace(/-/,""),c=D.get(n.theme),t.theme=new c(t,D.urls[n.theme]),t.theme.init&&t.theme.init(t,D.urls[n.theme]||t.documentBaseUrl.replace(/\/$/,""),t.$)):t.theme=n.theme),P(n.plugins.replace(/\-/g,"").split(/[ ,]/),e),n.render_ui&&t.theme&&(t.orgDisplay=r.style.display,"function"!=typeof n.theme?(i=n.width||r.style.width||r.offsetWidth,o=n.height||r.style.height||r.offsetHeight,a=n.min_height||100,h=/^[0-9\.]+(|px)$/i,h.test(""+i)&&(i=Math.max(parseInt(i,10),100)),h.test(""+o)&&(o=Math.max(parseInt(o,10),a)),l=t.theme.renderUI({targetNode:r,width:i,height:o,deltaWidth:n.delta_width,deltaHeight:n.delta_height}),n.content_editable||(o=(l.iframeHeight||o)+("number"==typeof o?l.deltaHeight||0:""),a>o&&(o=a))):(l=n.theme(t,r),l.editorContainer.nodeType&&(l.editorContainer=l.editorContainer.id=l.editorContainer.id||t.id+"_parent"),l.iframeContainer.nodeType&&(l.iframeContainer=l.iframeContainer.id=l.iframeContainer.id||t.id+"_iframecontainer"),o=l.iframeHeight||r.offsetHeight),t.editorContainer=l.editorContainer),n.content_css&&P(H(n.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),n.content_style&&t.contentStyles.push(n.content_style),n.content_editable)return r=s=l=null,t.initContentBody();for(t.iframeHTML=n.doctype+"<html><head>",n.document_base_url!=t.documentBaseUrl&&(t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />'),!w.caretAfter&&n.ie7_compat&&(t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" />'),t.iframeHTML+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',p=0;p<t.contentCSS.length;p++){var g=t.contentCSS[p];t.iframeHTML+='<link type="text/css" rel="stylesheet" href="'+E._addCacheSuffix(g)+'" />',t.loadedCSS[g]=!0}d=n.body_id||"tinymce",-1!=d.indexOf("=")&&(d=t.getParam("body_id","","hash"),d=d[t.id]||d),f=n.body_class||"",-1!=f.indexOf("=")&&(f=t.getParam("body_class","","hash"),f=f[t.id]||""),n.content_security_policy&&(t.iframeHTML+='<meta http-equiv="Content-Security-Policy" content="'+n.content_security_policy+'" />'),t.iframeHTML+='</head><body id="'+d+'" class="mce-content-body '+f+'" data-id="'+t.id+'"><br></body></html>';var v='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+t.id+'");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';document.domain!=location.hostname&&w.ie&&w.ie<12&&(u=v);var y=B.create("iframe",{id:t.id+"_ifr",frameBorder:"0",allowTransparency:"true",title:t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),style:{width:"100%",height:o,display:"block"}});if(y.onload=function(){y.onload=null,t.fire("load")},B.setAttrib(y,"src",u||'javascript:""'),t.contentAreaContainer=l.iframeContainer,t.iframeElement=y,s=B.add(l.iframeContainer,y),V)try{t.getDoc()}catch(b){s.src=u=v}l.editorContainer&&(B.get(l.editorContainer).style.display=t.orgDisplay,t.hidden=B.isHidden(l.editorContainer)),t.getElement().style.display="none",B.setAttrib(t.id,"aria-hidden",!0),u||t.initContentBody(),r=s=l=null},initContentBody:function(t){var n=this,r=n.settings,s=n.getElement(),h=n.getDoc(),p,m;r.inline||(n.getElement().style.visibility=n.orgVisibility),t||r.content_editable||(h.open(),h.write(n.iframeHTML),h.close()),r.content_editable&&(n.on("remove",function(){var e=this.getBody();B.removeClass(e,"mce-content-body"),B.removeClass(e,"mce-edit-focus"),B.setAttrib(e,"contentEditable",null)}),B.addClass(s,"mce-content-body"),n.contentDocument=h=r.content_document||document,n.contentWindow=r.content_window||window,n.bodyElement=s,r.content_document=r.content_window=null,r.root_name=s.nodeName.toLowerCase()),p=n.getBody(),p.disabled=!0,n.readonly=r.readonly,n.readonly||(n.inline&&"static"==B.getStyle(p,"position",!0)&&(p.style.position="relative"),p.contentEditable=n.getParam("content_editable_state",!0)),p.disabled=!1,n.editorUpload=new T(n),n.schema=new b(r),n.dom=new e(h,{keep_values:!0,url_converter:n.convertURL,url_converter_scope:n,hex_colors:r.force_hex_style_colors,class_filter:r.class_filter,update_styles:!0,root_element:n.inline?n.getBody():null,collect:r.content_editable,schema:n.schema,onSetAttrib:function(e){n.fire("SetAttrib",e)}}),n.parser=new C(r,n.schema),n.parser.addAttributeFilter("src,href,style,tabindex",function(e,t){for(var r=e.length,i,o=n.dom,a,s;r--;)if(i=e[r],a=i.attr(t),s="data-mce-"+t,!i.attributes.map[s]){if(0===a.indexOf("data:")||0===a.indexOf("blob:"))continue;"style"===t?(a=o.serializeStyle(o.parseStyle(a),i.name),a.length||(a=null),i.attr(s,a),i.attr(t,a)):"tabindex"===t?(i.attr(s,a),i.attr(t,null)):i.attr(s,n.convertURL(a,t,i.name))}}),n.parser.addNodeFilter("script",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("type")||"no/type",0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}),n.parser.addNodeFilter("#cdata",function(e){for(var t=e.length,n;t--;)n=e[t],n.type=8,n.name="#comment",n.value="[CDATA["+n.value+"]]"}),n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t=e.length,r,i=n.schema.getNonEmptyElements();t--;)r=e[t],r.isEmpty(i)&&(r.append(new o("br",1)).shortEnded=!0)}),n.serializer=new a(r,n),n.selection=new l(n.dom,n.getWin(),n.serializer,n),n.formatter=new c(n),n.undoManager=new u(n),n.forceBlocks=new f(n),n.enterKey=new d(n),n._nodeChangeDispatcher=new i(n),n._selectionOverrides=new R(n),n.fire("PreInit"),r.browser_spellcheck||r.gecko_spellcheck||(h.body.spellcheck=!1,B.setAttrib(p,"spellcheck","false")),n.fire("PostRender"),n.quirks=new x(n),r.directionality&&(p.dir=r.directionality),r.nowrap&&(p.style.whiteSpace="nowrap"),r.protect&&n.on("BeforeSetContent",function(e){P(r.protect,function(t){e.content=e.content.replace(t,function(e){return"<!--mce:protected "+escape(e)+"-->"})})}),n.on("SetContent",function(){n.addVisual(n.getBody())}),r.padd_empty_editor&&n.on("PostProcess",function(e){e.content=e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")}),n.load({initial:!0,format:"html"}),n.startContent=n.getContent({format:"raw"}),n.initialized=!0,n.bindPendingEventDelegates(),n.fire("init"),n.focus(!0),n.nodeChanged({initial:!0}),n.execCallback("init_instance_callback",n),n.contentStyles.length>0&&(m="",P(n.contentStyles,function(e){m+=e+"\r\n"}),n.dom.addStyle(m)),P(n.contentCSS,function(e){n.loadedCSS[e]||(n.dom.loadCSS(e),n.loadedCSS[e]=!0)}),r.auto_focus&&N.setEditorTimeout(n,function(){var e;e=r.auto_focus===!0?n:n.editorManager.get(r.auto_focus),e.destroyed||e.focus()},100),s=h=p=null},focus:function(e){function t(e){return n.dom.getParent(e,function(e){return"true"===n.dom.getContentEditable(e)})}var n=this,r=n.selection,i=n.settings.content_editable,o,a,s=n.getDoc(),l=n.getBody(),c;if(!e){if(o=r.getRng(),o.item&&(a=o.item(0)),n._refreshContentEditable(),c=t(r.getNode()),n.$.contains(l,c))return c.focus(),r.normalize(),void n.editorManager.setActive(n);if(i||(w.opera||n.getBody().focus(),n.getWin().focus()),W||i){if(l.setActive)try{l.setActive()}catch(u){l.focus()}else l.focus();i&&r.normalize()}a&&a.ownerDocument==s&&(o=s.body.createControlRange(),o.addElement(a),o.select())}n.editorManager.setActive(n)},execCallback:function(e){var t=this,n=t.settings[e],r;if(n)return t.callbackLookup&&(r=t.callbackLookup[e])&&(n=r.func,r=r.scope),"string"==typeof n&&(r=n.replace(/\.\w+$/,""),r=r?F(r):0,n=F(n),t.callbackLookup=t.callbackLookup||{},t.callbackLookup[e]={func:n,scope:r}),n.apply(r||t,Array.prototype.slice.call(arguments,1))},translate:function(e){var t=this.settings.language||"en",n=this.editorManager.i18n;return e?n.data[t+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,r){return n.data[t+"."+r]||"{#"+r+"}"}):""},getLang:function(e,n){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(n!==t?n:"{#"+e+"}")},getParam:function(e,t,n){var r=e in this.settings?this.settings[e]:t,i;return"hash"===n?(i={},"string"==typeof r?P(r.indexOf("=")>0?r.split(/[;,](?![^=;,]*(?:[;,]|$))/):r.split(","),function(e){e=e.split("="),e.length>1?i[I(e[0])]=I(e[1]):i[I(e[0])]=I(e)}):i=r,i):r},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.text||t.icon||(t.icon=e),n.buttons=n.buttons||{},t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems=n.menuItems||{},n.menuItems[e]=t},addContextToolbar:function(e,t){var n=this,r;n.contextToolbars=n.contextToolbars||[],"string"==typeof e&&(r=e,e=function(e){return n.dom.is(e,r)}),n.contextToolbars.push({predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){var e=this;e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable=!0:(B.show(e.getContainer()),B.hide(e.id)),e.load(),e.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(V&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e==e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(B.hide(e.getContainer()),B.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var n=this,r=n.getElement(),i;return r?(e=e||{},e.load=!0,i=n.setContent(r.value!==t?r.value:r.innerHTML,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,i):void 0},save:function(e){var t=this,n=t.getElement(),r,i;if(n&&t.initialized)return e=e||{},e.save=!0,e.element=n,r=e.content=t.getContent(e),e.no_events||t.fire("SaveContent",e),"raw"==e.format&&t.fire("RawSaveContent",e),r=e.content,/TEXTAREA|INPUT/i.test(n.nodeName)?n.value=r:(t.inline||(n.innerHTML=r),(i=B.getParent(t.id,"form"))&&P(i.elements,function(e){return e.name==t.id?(e.value=r,!1):void 0})),e.element=n=null,e.set_dirty!==!1&&t.setDirty(!1),r},setContent:function(e,t){var n=this,r=n.getBody(),i,o;return t=t||{},t.format=t.format||"html",t.set=!0,t.content=e,t.no_events||n.fire("BeforeSetContent",t),e=t.content,0===e.length||/^\s+$/.test(e)?(o=V&&11>V?"":'<br data-mce-bogus="1">',"TABLE"==r.nodeName?e="<tr><td>"+o+"</td></tr>":/^(UL|OL)$/.test(r.nodeName)&&(e="<li>"+o+"</li>"),i=n.settings.forced_root_block,i&&n.schema.isValidChild(r.nodeName.toLowerCase(),i.toLowerCase())?(e=o,e=n.dom.createHTML(i,n.settings.forced_root_block_attrs,e)):V||e||(e='<br data-mce-bogus="1">'),n.dom.setHTML(r,e),n.fire("SetContent",t)):("raw"!==t.format&&(e=new s({validate:n.validate},n.schema).serialize(n.parser.parse(e,{isRootContent:!0}))),t.content=I(e),n.dom.setHTML(r,t.content),t.no_events||n.fire("SetContent",t)),t.content},getContent:function(e){var t=this,n,r=t.getBody();return e=e||{},e.format=e.format||"html",e.get=!0,e.getInner=!0,e.no_events||t.fire("BeforeGetContent",e),n="raw"==e.format?t.serializer.getTrimmedContent():"text"==e.format?r.innerText||r.textContent:t.serializer.serialize(r,e),"text"!=e.format?e.content=I(n):e.content=n,e.no_events||t.fire("GetContent",e),e.content},insertContent:function(e,t){t&&(e=L({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!=t&&this.fire("dirty")},setMode:function(e){S.setMode(this,e)},getContainer:function(){var e=this;return e.container||(e.container=B.get(e.editorContainer||e.id+"_parent")),e.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=B.get(this.id)),this.targetElm},getWin:function(){var e=this,t;return e.contentWindow||(t=e.iframeElement,t&&(e.contentWindow=t.contentWindow)),e.contentWindow},getDoc:function(){var e=this,t;return e.contentDocument||(t=e.getWin(),t&&(e.contentDocument=t.document)),e.contentDocument},getBody:function(){return this.bodyElement||this.getDoc().body},convertURL:function(e,t,n){var r=this,i=r.settings;return i.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!i.convert_urls||n&&"LINK"==n.nodeName||0===e.indexOf("file:")||0===e.length?e:i.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,i.remove_script_host)},addVisual:function(e){var n=this,r=n.settings,i=n.dom,o;e=e||n.getBody(),n.hasVisual===t&&(n.hasVisual=r.visual),P(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return o=r.visual_table_class||"mce-item-table",t=i.getAttrib(e,"border"),void(t&&"0"!=t||!n.hasVisual?i.removeClass(e,o):i.addClass(e,o));case"A":return void(i.getAttrib(e,"href",!1)||(t=i.getAttrib(e,"name")||e.id,o=r.visual_anchor_class||"mce-item-anchor",t&&n.hasVisual?i.addClass(e,o):i.removeClass(e,o)))}}),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},remove:function(){var e=this;e.removed||(e.save(),e.removed=1,e.unbindAllNativeEvents(),e.hasHiddenInput&&B.remove(e.getElement().nextSibling),e.inline||(V&&10>V&&e.getDoc().execCommand("SelectAll",!1,null),B.setStyle(e.id,"display",e.orgDisplay),e.getBody().onload=null),e.fire("remove"),e.editorManager.remove(e),B.remove(e.getContainer()),e._selectionOverrides.destroy(),e.editorUpload.destroy(),e.destroy())},destroy:function(e){var t=this,n;if(!t.destroyed){if(!e&&!t.removed)return void t.remove();e||(t.editorManager.off("beforeunload",t._beforeUnload),t.theme&&t.theme.destroy&&t.theme.destroy(),t.selection.destroy(),t.dom.destroy()),n=t.formElement,n&&(n._mceOldSubmit&&(n.submit=n._mceOldSubmit,n._mceOldSubmit=null),B.unbind(n,"submit reset",t.formEventDelegate)),t.contentAreaContainer=t.formElement=t.container=t.editorContainer=null,t.bodyElement=t.contentDocument=t.contentWindow=null,t.iframeElement=t.targetElm=null,t.selection&&(t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null),t.destroyed=1}},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()},_refreshContentEditable:function(){var e=this,t,n;e._isHidden()&&(t=e.getBody(),n=t.parentNode,n.removeChild(t),n.appendChild(t),t.focus())},_isHidden:function(){var e;return W?(e=this.selection.getSel(),!e||!e.rangeCount||0===e.rangeCount):0}},L(A.prototype,_),A}),r(Ge,[],function(){var e={},t="en";return{setCode:function(e){e&&(t=e,this.rtl=this.data[e]?"rtl"===this.data[e]._dir:!1)},getCode:function(){return t},rtl:!1,add:function(t,n){var r=e[t];r||(e[t]=r={});for(var i in n)r[i]=n[i];this.setCode(t)},translate:function(n){var r;if(r=e[t],r||(r={}),"undefined"==typeof n)return n;if("string"!=typeof n&&n.raw)return n.raw;if(n.push){var i=n.slice(1);n=(r[n[0]]||n[0]).replace(/\{([0-9]+)\}/g,function(e,t){return i[t]})}return(r[n]||n).replace(/{context:\w+}$/,"")},data:e}}),r(Je,[w,u,h],function(e,t,n){function r(e){function l(){try{return document.activeElement}catch(e){return document.body}}function c(e,t){if(t&&t.startContainer){if(!e.isChildOf(t.startContainer,e.getRoot())||!e.isChildOf(t.endContainer,e.getRoot()))return;return{startContainer:t.startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset}}return t}function u(e,t){var n;return t.startContainer?(n=e.getDoc().createRange(),n.setStart(t.startContainer,t.startOffset),n.setEnd(t.endContainer,t.endOffset)):n=t,n}function d(e){return!!s.getParent(e,r.isEditorUIElement)}function f(r){var f=r.editor;f.on("init",function(){(f.inline||n.ie)&&("onbeforedeactivate"in document&&n.ie<9?f.dom.bind(f.getBody(),"beforedeactivate",function(e){if(e.target==f.getBody())try{f.lastRng=f.selection.getRng()}catch(t){}}):f.on("nodechange mouseup keyup",function(e){var t=l();"nodechange"==e.type&&e.selectionChange||(t&&t.id==f.id+"_ifr"&&(t=f.getBody()),f.dom.isChildOf(t,f.getBody())&&(f.lastRng=f.selection.getRng()))}),n.webkit&&!i&&(i=function(){var t=e.activeEditor;if(t&&t.selection){var n=t.selection.getRng();n&&!n.collapsed&&(f.lastRng=n)}},s.bind(document,"selectionchange",i)))}),f.on("setcontent",function(){f.lastRng=null}),f.on("mousedown",function(){f.selection.lastFocusBookmark=null}),f.on("focusin",function(){var t=e.focusedEditor,n;f.selection.lastFocusBookmark&&(n=u(f,f.selection.lastFocusBookmark),f.selection.lastFocusBookmark=null,f.selection.setRng(n)),t!=f&&(t&&t.fire("blur",{focusedEditor:f}),e.setActive(f),e.focusedEditor=f,f.fire("focus",{blurredEditor:t}),f.focus(!0)),f.lastRng=null}),f.on("focusout",function(){t.setEditorTimeout(f,function(){var t=e.focusedEditor;d(l())||t!=f||(f.fire("blur",{focusedEditor:null}),e.focusedEditor=null,f.selection&&(f.selection.lastFocusBookmark=null))})}),o||(o=function(t){var n=e.activeEditor;n&&t.target.ownerDocument==document&&(n.selection&&t.target!=n.getBody()&&(n.selection.lastFocusBookmark=c(n.dom,n.lastRng)),t.target==document.body||d(t.target)||e.focusedEditor!=n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))},s.bind(document,"focusin",o)),f.inline&&!a&&(a=function(t){var n=e.activeEditor;if(n.inline&&!n.dom.isChildOf(t.target,n.getBody())){var r=n.selection.getRng();r.collapsed||(n.lastRng=r)}},s.bind(document,"mouseup",a))}function h(t){e.focusedEditor==t.editor&&(e.focusedEditor=null),e.activeEditor||(s.unbind(document,"selectionchange",i),s.unbind(document,"focusin",o),s.unbind(document,"mouseup",a),i=o=a=null)}e.on("AddEditor",f),e.on("RemoveEditor",h)}var i,o,a,s=e.DOM;return r.isEditorUIElement=function(e){return-1!==e.className.toString().indexOf("mce-")},r}),r(Qe,[Ke,g,w,te,h,m,oe,Ge,Je],function(e,t,n,r,i,o,a,s,l){function c(e){m(b.editors,function(t){t.fire("ResizeWindow",e)})}function u(e,n){n!==C&&(n?t(window).on("resize",c):t(window).off("resize",c),C=n)}function d(e){var t=b.editors,n;delete t[e.id];for(var r=0;r<t.length;r++)if(t[r]==e){t.splice(r,1),n=!0;break}return b.activeEditor==e&&(b.activeEditor=t[0]),b.focusedEditor==e&&(b.focusedEditor=null),n}function f(e){return e&&!(e.getContainer()||e.getBody()).parentNode&&(d(e),e.unbindAllNativeEvents(),e.destroy(!0),e=null),e}var h=n.DOM,p=o.explode,m=o.each,g=o.extend,v=0,y,b,C=!1;return b={$:t,majorVersion:"4",minorVersion:"3.3",releaseDate:"2016-01-14",editors:[],i18n:s,activeEditor:null,setup:function(){var e=this,t,n,i="",o,a;if(n=document.location.href,/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/")),o=window.tinymce||window.tinyMCEPreInit)t=o.base||o.baseURL,i=o.suffix;else{for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){a=s[c].src;var u=a.substring(a.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)){-1!=u.indexOf(".min")&&(i=".min"),t=a.substring(0,a.lastIndexOf("/"));break}}!t&&document.currentScript&&(a=document.currentScript.src,-1!=a.indexOf(".min")&&(i=".min"),t=a.substring(0,a.lastIndexOf("/")))}e.baseURL=new r(n).toAbsolute(t),e.documentBaseURL=n,e.baseURI=new r(e.baseURL),e.suffix=i,e.focusManager=new l(e)},init:function(t){function n(e){var t=e.id;return t||(t=e.name,t=t&&!h.get(t)?e.name:h.uniqueId(),e.setAttribute("id",t)),t}function r(t,n,r){if(!f(s.get(t))){var i=new e(t,n,s);i.targetElm=i.targetElm||r,l.push(i),i.render()}}function i(e){var n=t[e];if(n)return n.apply(s,Array.prototype.slice.call(arguments,2))}function o(e,t){return t.constructor===RegExp?t.test(e.className):h.hasClass(e,t)}function a(){var e,s;if(h.unbind(window,"ready",a),i("onpageload"),t.types)return void m(t.types,function(e){m(h.select(e.selector),function(i){r(n(i),g({},t,e),i)})});if(t.selector)return void m(h.select(t.selector),function(e){r(n(e),t,e)});switch(t.target&&r(n(t.target),t),t.mode){case"exact":e=t.elements||"",e.length>0&&m(p(e),function(e){var n;(n=h.get(e))?r(e,t,n):m(document.forms,function(n){m(n.elements,function(n){n.name===e&&(e="mce_editor_"+v++,h.setAttrib(n,"id",e),r(e,t,n))})})});break;case"textareas":case"specific_textareas":m(h.select("textarea"),function(e){t.editor_deselector&&o(e,t.editor_deselector)||(!t.editor_selector||o(e,t.editor_selector))&&r(n(e),t,e)})}t.oninit&&(e=s=0,m(l,function(t){s++,t.initialized?e++:t.on("init",function(){e++,e==s&&i("oninit")}),e==s&&i("oninit")}))}var s=this,l=[];s.settings=t,h.bind(window,"ready",a)},get:function(e){return arguments.length?e in this.editors?this.editors[e]:null:this.editors},add:function(e){var t=this,n=t.editors;return n[e.id]=e,n.push(e),u(n,!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),y||(y=function(){t.fire("BeforeUnload")},h.bind(window,"beforeunload",y)),e},createEditor:function(t,n){return this.add(new e(t,n,this))},remove:function(e){var t=this,n,r=t.editors,i;{if(e)return"string"==typeof e?(e=e.selector||e,void m(h.select(e),function(e){i=r[e.id],i&&t.remove(i)})):(i=e,r[i.id]?(d(i)&&t.fire("RemoveEditor",{editor:i}),r.length||h.unbind(window,"beforeunload",y),i.remove(),u(r,r.length>0),i):null);for(n=r.length-1;n>=0;n--)t.remove(r[n])}},execCommand:function(t,n,r){var i=this,o=i.get(r);switch(t){case"mceAddEditor":return i.get(r)||new e(r,i.settings,i).render(),!0;case"mceRemoveEditor":return o&&o.remove(),!0;case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(i.execCommand("mceAddEditor",0,r),!0)}return i.activeEditor?i.activeEditor.execCommand(t,n,r):!1},triggerSave:function(){m(this.editors,function(e){e.save()})},addI18n:function(e,t){s.add(e,t)},translate:function(e){return s.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!=e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},g(b,a),b.setup(),window.tinymce=window.tinyMCE=b,b}),r(Ze,[Qe,m],function(e,t){var n=t.each,r=t.explode;e.on("AddEditor",function(e){var t=e.editor;t.on("preInit",function(){function e(e,t){n(t,function(t,n){t&&s.setStyle(e,n,t)}),s.rename(e,"span")}function i(e){s=t.dom,l.convert_fonts_to_spans&&n(s.select("font,u,strike",e.node),function(e){o[e.nodeName.toLowerCase()](s,e)})}var o,a,s,l=t.settings;l.inline_styles&&(a=r(l.font_size_legacy_values),o={font:function(t,n){e(n,{backgroundColor:n.style.backgroundColor,color:n.color,fontFamily:n.face,fontSize:a[parseInt(n.size,10)-1]})},u:function(n,r){"html4"===t.settings.schema&&e(r,{textDecoration:"underline"})},strike:function(t,n){e(n,{textDecoration:"line-through"})}},t.on("PreProcess SetContent",i))})})}),r(et,[oe,m],function(e,t){var n={send:function(e){function r(){!e.async||4==i.readyState||o++>1e4?(e.success&&1e4>o&&200==i.status?e.success.call(e.success_scope,""+i.responseText,i,e):e.error&&e.error.call(e.error_scope,o>1e4?"TIMED_OUT":"GENERAL",i,e),i=null):setTimeout(r,10)}var i,o=0;if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=e.async===!1?!1:!0,e.data=e.data||"",n.fire("beforeInitialize",{settings:e}),i=new XMLHttpRequest){if(i.overrideMimeType&&i.overrideMimeType(e.content_type),i.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(i.withCredentials=!0),e.content_type&&i.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&t.each(e.requestheaders,function(e){i.setRequestHeader(e.key,e.value)}),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i=n.fire("beforeSend",{xhr:i,settings:e}).xhr,i.send(e.data),!e.async)return r();setTimeout(r,10)}}};return t.extend(n,e),n}),r(tt,[],function(){function e(t,n){var r,i,o,a;if(n=n||'"',null===t)return"null";if(o=typeof t,"string"==o)return i="\bb	t\nn\ff\rr\"\"''\\\\",n+t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=i.indexOf(t),r+1?"\\"+i.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e))})+n;if("object"==o){if(t.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(t)){for(r=0,i="[";r<t.length;r++)i+=(r>0?",":"")+e(t[r],n);return i+"]"}i="{";for(a in t)t.hasOwnProperty(a)&&(i+="function"!=typeof t[a]?(i.length>1?","+n:n)+a+n+":"+e(t[a],n):"");return i+"}"}return""+t}return{serialize:e,parse:function(e){try{return window[String.fromCharCode(101)+"val"]("("+e+")")}catch(t){}}}}),r(nt,[tt,et,m],function(e,t,n){function r(e){this.settings=i({},e),this.count=0}var i=n.extend;return r.sendRPC=function(e){return(new r).send(e)},r.prototype={send:function(n){var r=n.error,o=n.success;n=i(this.settings,n),n.success=function(t,i){t=e.parse(t),"undefined"==typeof t&&(t={error:"JSON Parse error."}),t.error?r.call(n.error_scope||n.scope,t.error,i):o.call(n.success_scope||n.scope,t.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=e.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",t.send(n)}},r}),r(rt,[w],function(e){return{callbacks:{},count:0,send:function(n){var r=this,i=e.DOM,o=n.count!==t?n.count:r.count,a="tinymce_jsonp_"+o;r.callbacks[o]=function(e){i.remove(a),delete r.callbacks[o],n.callback(e)},i.add(i.doc.body,"script",{id:a,src:n.url,type:"text/javascript"}),r.count++}}}),r(it,[],function(){function e(){s=[];for(var e in a)s.push(e);i.length=s.length}function n(){function n(e){var n,r;return r=e!==t?u+e:i.indexOf(",",u),-1===r||r>i.length?null:(n=i.substring(u,r),u=r+1,n)}var r,i,s,u=0;if(a={},c){o.load(l),i=o.getAttribute(l)||"";do{var d=n();if(null===d)break;if(r=n(parseInt(d,32)||0),null!==r){if(d=n(),null===d)break;s=n(parseInt(d,32)||0),r&&(a[r]=s)}}while(null!==r);e()}}function r(){var t,n="";if(c){for(var r in a)t=a[r],n+=(n?",":"")+r.length.toString(32)+","+r+","+t.length.toString(32)+","+t;o.setAttribute(l,n);try{o.save(l)}catch(i){}e()}}var i,o,a,s,l,c;try{if(window.localStorage)return localStorage}catch(u){}return l="tinymce",o=document.documentElement,c=!!o.addBehavior,c&&o.addBehavior("#default#userData"),i={key:function(e){return s[e]},getItem:function(e){return e in a?a[e]:null},setItem:function(e,t){a[e]=""+t,r()},removeItem:function(e){delete a[e],r()},clear:function(){a={},r()}},n(),i}),r(ot,[w,d,E,N,m,h],function(e,t,n,r,i,o){var a=window.tinymce;return a.DOM=e.DOM,a.ScriptLoader=n.ScriptLoader,a.PluginManager=r.PluginManager,a.ThemeManager=r.ThemeManager,a.dom=a.dom||{},a.dom.Event=t.Event,i.each(i,function(e,t){a[t]=e}),i.each("isOpera isWebKit isIE isGecko isMac".split(" "),function(e){a[e]=o[e.substr(2).toLowerCase()]}),{}}),r(at,[ne,m],function(e,t){return e.extend({Defaults:{firstControlClass:"first",lastControlClass:"last"},init:function(e){this.settings=t.extend({},this.Defaults,e)},preRender:function(e){e.bodyClasses.add(this.settings.containerClass)},applyClasses:function(e){var t=this,n=t.settings,r,i,o,a;r=n.firstControlClass,i=n.lastControlClass,e.each(function(e){e.classes.remove(r).remove(i).add(n.controlClass),e.visible()&&(o||(o=e),a=e)}),o&&o.classes.add(r),a&&a.classes.add(i)},renderHtml:function(e){var t=this,n="";return t.applyClasses(e.items()),e.items().each(function(e){n+=e.renderHtml()}),n},recalc:function(){},postRender:function(){},isNative:function(){return!1}})}),r(st,[at],function(e){return e.extend({Defaults:{containerClass:"abs-layout",controlClass:"abs-layout-item"},recalc:function(e){e.items().filter(":visible").each(function(e){var t=e.settings;e.layoutRect({x:t.x,y:t.y,w:t.w,h:t.h}),e.recalc&&e.recalc()})},renderHtml:function(e){return'<div id="'+e._id+'-absend" class="'+e.classPrefix+'abs-end"></div>'+this._super(e)}})}),r(lt,[ke],function(e){return e.extend({Defaults:{classes:"widget btn",role:"button"},init:function(e){var t=this,n;t._super(e),e=t.settings,n=t.settings.size,t.on("click mousedown",function(e){e.preventDefault()}),t.on("touchstart",function(e){t.fire("click",e),e.preventDefault()}),e.subtype&&t.classes.add(e.subtype),n&&t.classes.add("btn-"+n),e.icon&&t.icon(e.icon)},icon:function(e){return arguments.length?(this.state.set("icon",e),this):this.state.get("icon")},repaint:function(){var e=this.getEl().firstChild,t;e&&(t=e.style,t.width=t.height="100%"),this._super()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("icon"),i,o=e.state.get("text"),a="";return i=e.settings.image,i?(r="none","string"!=typeof i&&(i=window.getSelection?i[0]:i[1]),i=" style=\"background-image: url('"+i+"')\""):i="",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),r=e.settings.icon?n+"ico "+n+"i-"+r:"",'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button role="presentation" type="button" tabindex="-1">'+(r?'<i class="'+r+'"'+i+"></i>":"")+a+"</button></div>"},bindStates:function(){function e(e){var i=n("span."+r,t.getEl());e?(i[0]||(n("button:first",t.getEl()).append('<span class="'+r+'"></span>'),i=n("span."+r,t.getEl())),i.html(t.encode(e))):i.remove(),t.classes.toggle("btn-has-text",!!e)}var t=this,n=t.$,r=t.classPrefix+"txt";return t.state.on("change:text",function(t){e(t.value)}),t.state.on("change:icon",function(n){var r=n.value,i=t.classPrefix;t.settings.icon=r,r=r?i+"ico "+i+"i-"+t.settings.icon:"";var o=t.getEl().firstChild,a=o.getElementsByTagName("i")[0];r?(a&&a==o.firstChild||(a=document.createElement("i"),o.insertBefore(a,o.firstChild)),a.className=r):a&&o.removeChild(a),e(t.state.get("text"))}),t._super()}})}),r(ct,[ge],function(e){return e.extend({Defaults:{defaultType:"button",role:"group"},renderHtml:function(){var e=this,t=e._layout;return e.classes.add("btn-group"),e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(ut,[ke],function(e){return e.extend({Defaults:{classes:"checkbox",role:"checkbox",checked:!1},init:function(e){var t=this;t._super(e),t.on("click mousedown",function(e){e.preventDefault()}),t.on("click",function(e){e.preventDefault(),t.disabled()||t.checked(!t.checked())}),t.checked(t.settings.checked);
},checked:function(e){return arguments.length?(this.state.set("checked",e),this):this.state.get("checked")},value:function(e){return arguments.length?this.checked(e):this.checked()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'" unselectable="on" aria-labelledby="'+t+'-al" tabindex="-1"><i class="'+n+"ico "+n+'i-checkbox"></i><span id="'+t+'-al" class="'+n+'label">'+e.encode(e.state.get("text"))+"</span></div>"},bindStates:function(){function e(e){t.classes.toggle("checked",e),t.aria("checked",e)}var t=this;return t.state.on("change:text",function(e){t.getEl("al").firstChild.data=t.translate(e.value)}),t.state.on("change:checked change:value",function(n){t.fire("change"),e(n.value)}),t.state.on("change:icon",function(e){var n=e.value,r=t.classPrefix;if("undefined"==typeof n)return t.settings.icon;t.settings.icon=n,n=n?r+"ico "+r+"i-"+t.settings.icon:"";var i=t.getEl().firstChild,o=i.getElementsByTagName("i")[0];n?(o&&o==i.firstChild||(o=document.createElement("i"),i.insertBefore(o,i.firstChild)),o.className=n):o&&i.removeChild(o)}),t.state.get("checked")&&e(!0),t._super()}})}),r(dt,[ke,pe,ce,g],function(e,t,n,r){return e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.classes.add("combobox"),t.subinput=!0,t.ariaTarget="inp",e.menu=e.menu||e.values,e.menu&&(e.icon="caret"),t.on("click",function(n){var i=n.target,o=t.getEl();if(r.contains(o,i)||i==o)for(;i&&i!=o;)i.id&&-1!=i.id.indexOf("-open")&&(t.fire("action"),e.menu&&(t.showMenu(),n.aria&&t.menu.items()[0].focus())),i=i.parentNode}),t.on("keydown",function(e){"INPUT"==e.target.nodeName&&13==e.keyCode&&t.parents().reverse().each(function(n){var r=t.state.get("value"),i=t.getEl("inp").value;return e.preventDefault(),t.state.set("value",i),r!=i&&t.fire("change"),n.hasEventListeners("submit")&&n.toJSON?(n.fire("submit",{data:n.toJSON()}),!1):void 0})}),t.on("keyup",function(e){"INPUT"==e.target.nodeName&&t.state.set("value",e.target.value)})},showMenu:function(){var e=this,n=e.settings,r;e.menu||(r=n.menu||[],r.length?r={type:"menu",items:r}:r.type=r.type||"menu",e.menu=t.create(r).parent(e).renderTo(e.getContainerElm()),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control===e.menu&&e.focus()}),e.menu.on("show hide",function(t){t.control.items().each(function(t){t.active(t.value()==e.value())})}).fire("show"),e.menu.on("select",function(t){e.value(t.control.value())}),e.on("focusin",function(t){"INPUT"==t.target.tagName.toUpperCase()&&e.menu.hide()}),e.aria("expanded",!0)),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},focus:function(){this.getEl("inp").focus()},repaint:function(){var e=this,t=e.getEl(),i=e.getEl("open"),o=e.layoutRect(),a,s;a=i?o.w-n.getSize(i).width-10:o.w-10;var l=document;return l.all&&(!l.documentMode||l.documentMode<=8)&&(s=e.layoutRect().h-2+"px"),r(t.firstChild).css({width:a,lineHeight:s}),e._super(),e},postRender:function(){var e=this;return r(this.getEl("inp")).on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)}),e._super()},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.classPrefix,i=e.state.get("value")||"",o,a,s="",l="";return"spellcheck"in n&&(l+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(l+=' maxlength="'+n.maxLength+'"'),n.size&&(l+=' size="'+n.size+'"'),n.subtype&&(l+=' type="'+n.subtype+'"'),e.disabled()&&(l+=' disabled="disabled"'),o=n.icon,o&&"caret"!=o&&(o=r+"ico "+r+"i-"+n.icon),a=e.state.get("text"),(o||a)&&(s='<div id="'+t+'-open" class="'+r+"btn "+r+'open" tabIndex="-1" role="button"><button id="'+t+'-action" type="button" hidefocus="1" tabindex="-1">'+("caret"!=o?'<i class="'+o+'"></i>':'<i class="'+r+'caret"></i>')+(a?(o?" ":"")+a:"")+"</button></div>",e.classes.add("has-open")),'<div id="'+t+'" class="'+e.classes+'"><input id="'+t+'-inp" class="'+r+'textbox" value="'+e.encode(i,!1)+'" hidefocus="1"'+l+' placeholder="'+e.encode(n.placeholder)+'" />'+s+"</div>"},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl("inp").value),this.state.get("value"))},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl("inp").value!=t.value&&(e.getEl("inp").value=t.value)}),e.state.on("change:disabled",function(t){e.getEl("inp").disabled=t.value}),e._super()},remove:function(){r(this.getEl("inp")).off(),this._super()}})}),r(ft,[dt],function(e){return e.extend({init:function(e){var t=this;e.spellcheck=!1,e.onaction&&(e.icon="none"),t._super(e),t.classes.add("colorbox"),t.on("change keyup postrender",function(){t.repaintColor(t.value())})},repaintColor:function(e){var t=this.getEl().getElementsByTagName("i")[0];if(t)try{t.style.background=e}catch(n){}},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e._rendered&&e.repaintColor(t.value)}),e._super()}})}),r(ht,[lt,we],function(e,t){return e.extend({showPanel:function(){var e=this,n=e.settings;if(e.active(!0),e.panel)e.panel.show();else{var r=n.panel;r.type&&(r={layout:"grid",items:r}),r.role=r.role||"dialog",r.popover=!0,r.autohide=!0,r.ariaRoot=!0,e.panel=new t(r).on("hide",function(){e.active(!1)}).on("cancel",function(t){t.stopPropagation(),e.focus(),e.hidePanel()}).parent(e).renderTo(e.getContainerElm()),e.panel.fire("show"),e.panel.reflow()}e.panel.moveRel(e.getEl(),n.popoverAlign||(e.isRtl()?["bc-tr","bc-tc"]:["bc-tl","bc-tc"]))},hidePanel:function(){var e=this;e.panel&&e.panel.hide()},postRender:function(){var e=this;return e.aria("haspopup",!0),e.on("click",function(t){t.control===e&&(e.panel&&e.panel.visible()?e.hidePanel():(e.showPanel(),e.panel.focus(!!t.aria)))}),e._super()},remove:function(){return this.panel&&(this.panel.remove(),this.panel=null),this._super()}})}),r(pt,[ht,w],function(e,t){var n=t.DOM;return e.extend({init:function(e){this._super(e),this.classes.add("colorbutton")},color:function(e){return e?(this._color=e,this.getEl("preview").style.backgroundColor=e,this):this._color},resetColor:function(){return this._color=null,this.getEl("preview").style.backgroundColor=null,this},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("text"),i=e.settings.icon?n+"ico "+n+"i-"+e.settings.icon:"",o=e.settings.image?" style=\"background-image: url('"+e.settings.image+"')\"":"",a="";return r&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(r)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+'<span id="'+t+'-preview" class="'+n+'preview"></span>'+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1"> <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(r){r.aria&&"down"==r.aria.key||r.control!=e||n.getParent(r.target,"."+e.classPrefix+"open")||(r.stopImmediatePropagation(),t.call(e,r))}),delete e.settings.onclick,e._super()}})}),r(mt,[],function(){function e(e){function i(e,i,o){var a,s,l,c,u,d;return a=0,s=0,l=0,e/=255,i/=255,o/=255,u=t(e,t(i,o)),d=n(e,n(i,o)),u==d?(l=u,{h:0,s:0,v:100*l}):(c=e==u?i-o:o==u?e-i:o-e,a=e==u?3:o==u?1:5,a=60*(a-c/(d-u)),s=(d-u)/d,l=d,{h:r(a),s:r(100*s),v:r(100*l)})}function o(e,i,o){var a,s,l,c;if(e=(parseInt(e,10)||0)%360,i=parseInt(i,10)/100,o=parseInt(o,10)/100,i=n(0,t(i,1)),o=n(0,t(o,1)),0===i)return void(d=f=h=r(255*o));switch(a=e/60,s=o*i,l=s*(1-Math.abs(a%2-1)),c=o-s,Math.floor(a)){case 0:d=s,f=l,h=0;break;case 1:d=l,f=s,h=0;break;case 2:d=0,f=s,h=l;break;case 3:d=0,f=l,h=s;break;case 4:d=l,f=0,h=s;break;case 5:d=s,f=0,h=l;break;default:d=f=h=0}d=r(255*(d+c)),f=r(255*(f+c)),h=r(255*(h+c))}function a(){function e(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+e(d)+e(f)+e(h)}function s(){return{r:d,g:f,b:h}}function l(){return i(d,f,h)}function c(e){var t;return"object"==typeof e?"r"in e?(d=e.r,f=e.g,h=e.b):"v"in e&&o(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(d=parseInt(t[1],10),f=parseInt(t[2],10),h=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(d=parseInt(t[1],16),f=parseInt(t[2],16),h=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(d=parseInt(t[1]+t[1],16),f=parseInt(t[2]+t[2],16),h=parseInt(t[3]+t[3],16)),d=0>d?0:d>255?255:d,f=0>f?0:f>255?255:f,h=0>h?0:h>255?255:h,u}var u=this,d=0,f=0,h=0;e&&c(e),u.toRgb=s,u.toHsv=l,u.toHex=a,u.parse=c}var t=Math.min,n=Math.max,r=Math.round;return e}),r(gt,[ke,ve,ce,mt],function(e,t,n,r){return e.extend({Defaults:{classes:"widget colorpicker"},init:function(e){this._super(e)},postRender:function(){function e(e,t){var r=n.getPos(e),i,o;return i=t.pageX-r.x,o=t.pageY-r.y,i=Math.max(0,Math.min(i/e.clientWidth,1)),o=Math.max(0,Math.min(o/e.clientHeight,1)),{x:i,y:o}}function i(e,t){var i=(360-e.h)/360;n.css(d,{top:100*i+"%"}),t||n.css(h,{left:e.s+"%",top:100-e.v+"%"}),f.style.background=new r({s:100,v:100,h:e.h}).toHex(),s.color().parse({s:e.s,v:e.v,h:e.h})}function o(t){var n;n=e(f,t),c.s=100*n.x,c.v=100*(1-n.y),i(c),s.fire("change")}function a(t){var n;n=e(u,t),c=l.toHsv(),c.h=360*(1-n.y),i(c,!0),s.fire("change")}var s=this,l=s.color(),c,u,d,f,h;u=s.getEl("h"),d=s.getEl("hp"),f=s.getEl("sv"),h=s.getEl("svp"),s._repaint=function(){c=l.toHsv(),i(c)},s._super(),s._svdraghelper=new t(s._id+"-sv",{start:o,drag:o}),s._hdraghelper=new t(s._id+"-h",{start:a,drag:a}),s._repaint()},rgb:function(){return this.color().toRgb()},value:function(e){var t=this;return arguments.length?(t.color().parse(e),void(t._rendered&&t._repaint())):t.color().toHex()},color:function(){return this._color||(this._color=new r),this._color},renderHtml:function(){function e(){var e,t,n="",i,a;for(i="filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=",a=o.split(","),e=0,t=a.length-1;t>e;e++)n+='<div class="'+r+'colorpicker-h-chunk" style="height:'+100/t+"%;"+i+a[e]+",endColorstr="+a[e+1]+");-ms-"+i+a[e]+",endColorstr="+a[e+1]+')"></div>';return n}var t=this,n=t._id,r=t.classPrefix,i,o="#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000",a="background: -ms-linear-gradient(top,"+o+");background: linear-gradient(to bottom,"+o+");";return i='<div id="'+n+'-h" class="'+r+'colorpicker-h" style="'+a+'">'+e()+'<div id="'+n+'-hp" class="'+r+'colorpicker-h-marker"></div></div>','<div id="'+n+'" class="'+t.classes+'"><div id="'+n+'-sv" class="'+r+'colorpicker-sv"><div class="'+r+'colorpicker-overlay1"><div class="'+r+'colorpicker-overlay2"><div id="'+n+'-svp" class="'+r+'colorpicker-selector1"><div class="'+r+'colorpicker-selector2"></div></div></div></div></div>'+i+"</div>"}})}),r(vt,[ke],function(e){return e.extend({init:function(e){var t=this;e.delimiter||(e.delimiter="\xbb"),t._super(e),t.classes.add("path"),t.canFocus=!0,t.on("click",function(e){var n,r=e.target;(n=r.getAttribute("data-index"))&&t.fire("select",{value:t.row()[n],index:n})}),t.row(t.settings.row)},focus:function(){var e=this;return e.getEl().firstChild.focus(),e},row:function(e){return arguments.length?(this.state.set("row",e),this):this.state.get("row")},renderHtml:function(){var e=this;return'<div id="'+e._id+'" class="'+e.classes+'">'+e._getDataPathHtml(e.state.get("row"))+"</div>"},bindStates:function(){var e=this;return e.state.on("change:row",function(t){e.innerHtml(e._getDataPathHtml(t.value))}),e._super()},_getDataPathHtml:function(e){var t=this,n=e||[],r,i,o="",a=t.classPrefix;for(r=0,i=n.length;i>r;r++)o+=(r>0?'<div class="'+a+'divider" aria-hidden="true"> '+t.settings.delimiter+" </div>":"")+'<div role="button" class="'+a+"path-item"+(r==i-1?" "+a+"last":"")+'" data-index="'+r+'" tabindex="-1" id="'+t._id+"-"+r+'" aria-level="'+r+'">'+n[r].name+"</div>";return o||(o='<div class="'+a+'path-item">\xa0</div>'),o}})}),r(yt,[vt,Qe],function(e,t){return e.extend({postRender:function(){function e(e){if(1===e.nodeType){if("BR"==e.nodeName||e.getAttribute("data-mce-bogus"))return!0;if("bookmark"===e.getAttribute("data-mce-type"))return!0}return!1}var n=this,r=t.activeEditor;return r.settings.elementpath!==!1&&(n.on("select",function(e){r.focus(),r.selection.select(this.row()[e.index].element),r.nodeChanged()}),r.on("nodeChange",function(t){for(var i=[],o=t.parents,a=o.length;a--;)if(1==o[a].nodeType&&!e(o[a])){var s=r.fire("ResolveName",{name:o[a].nodeName.toLowerCase(),target:o[a]});if(s.isDefaultPrevented()||i.push({name:s.name,element:o[a]}),s.isPropagationStopped())break}n.row(i)})),n._super()}})}),r(bt,[ge],function(e){return e.extend({Defaults:{layout:"flex",align:"center",defaults:{flex:1}},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.classes.add("formitem"),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<div id="'+e._id+'-title" class="'+n+'title">'+e.settings.title+"</div>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(Ct,[ge,bt,m],function(e,t,n){return e.extend({Defaults:{containerCls:"form",layout:"flex",direction:"column",align:"stretch",flex:1,padding:20,labelGap:30,spacing:10,callbacks:{submit:function(){this.submit()}}},preRender:function(){var e=this,r=e.items();e.settings.formItemDefaults||(e.settings.formItemDefaults={layout:"flex",autoResize:"overflow",defaults:{flex:1}}),r.each(function(r){var i,o=r.settings.label;o&&(i=new t(n.extend({items:{type:"label",id:r._id+"-l",text:o,flex:0,forId:r._id,disabled:r.disabled()}},e.settings.formItemDefaults)),i.type="formitem",r.aria("labelledby",r._id+"-l"),"undefined"==typeof r.settings.flex&&(r.settings.flex=1),e.replace(r,i),i.add(r))})},submit:function(){return this.fire("submit",{data:this.toJSON()})},postRender:function(){var e=this;e._super(),e.fromJSON(e.settings.data)},bindStates:function(){function e(){var e=0,n=[],r,i,o;if(t.settings.labelGapCalc!==!1)for(o="children"==t.settings.labelGapCalc?t.find("formitem"):t.items(),o.filter("formitem").each(function(t){var r=t.items()[0],i=r.getEl().clientWidth;e=i>e?i:e,n.push(r)}),i=t.settings.labelGap||0,r=n.length;r--;)n[r].settings.minWidth=e+i}var t=this;t._super(),t.on("show",e),e()}})}),r(xt,[Ct],function(e){return e.extend({Defaults:{containerCls:"fieldset",layout:"flex",direction:"column",align:"stretch",flex:1,padding:"25 15 5 15",labelGap:30,spacing:10,border:1},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.preRender(),t.preRender(e),'<fieldset id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<legend id="'+e._id+'-title" class="'+n+'fieldset-title">'+e.settings.title+"</legend>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></fieldset>"}})}),r(wt,[dt,m],function(e,t){return e.extend({init:function(e){var n=this,r=tinymce.activeEditor,i=r.settings,o,a,s;e.spellcheck=!1,s=i.file_picker_types||i.file_browser_callback_types,s&&(s=t.makeMap(s,/[, ]/)),(!s||s[e.filetype])&&(a=i.file_picker_callback,!a||s&&!s[e.filetype]?(a=i.file_browser_callback,!a||s&&!s[e.filetype]||(o=function(){a(n.getEl("inp").id,n.value(),e.filetype,window)})):o=function(){var i=n.fire("beforecall").meta;i=t.extend({filetype:e.filetype},i),a.call(r,function(e,t){n.value(e).fire("change",{meta:t})},n.value(),i)}),o&&(e.icon="browse",e.onaction=o),n._super(e)}})}),r(Et,[st],function(e){return e.extend({recalc:function(e){var t=e.layoutRect(),n=e.paddingBox;e.items().filter(":visible").each(function(e){e.layoutRect({x:n.left,y:n.top,w:t.innerW-n.right-n.left,h:t.innerH-n.top-n.bottom}),e.recalc&&e.recalc()})}})}),r(Nt,[st],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v=[],y,b,C,x,w,E,N,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F,z=Math.max,W=Math.min;for(r=e.items().filter(":visible"),i=e.layoutRect(),o=e.paddingBox,a=e.settings,f=e.isRtl()?a.direction||"row-reversed":a.direction,s=a.align,l=e.isRtl()?a.pack||"end":a.pack,c=a.spacing||0,("row-reversed"==f||"column-reverse"==f)&&(r=r.set(r.toArray().reverse()),f=f.split("-")[0]),"column"==f?(S="y",N="h",_="minH",k="maxH",R="innerH",T="top",A="deltaH",B="contentH",H="left",L="w",D="x",M="innerW",P="minW",O="right",I="deltaW",F="contentW"):(S="x",N="w",_="minW",k="maxW",R="innerW",T="left",A="deltaW",B="contentW",H="top",L="h",D="y",M="innerH",P="minH",O="bottom",I="deltaH",F="contentH"),d=i[R]-o[T]-o[T],E=u=0,t=0,n=r.length;n>t;t++)h=r[t],p=h.layoutRect(),m=h.settings,g=m.flex,d-=n-1>t?c:0,g>0&&(u+=g,p[k]&&v.push(h),p.flex=g),d-=p[_],y=o[H]+p[P]+o[O],y>E&&(E=y);if(x={},0>d?x[_]=i[_]-d+i[A]:x[_]=i[R]-d+i[A],x[P]=E+i[I],x[B]=i[R]-d,x[F]=E,x.minW=W(x.minW,i.maxW),x.minH=W(x.minH,i.maxH),x.minW=z(x.minW,i.startMinWidth),x.minH=z(x.minH,i.startMinHeight),!i.autoResize||x.minW==i.minW&&x.minH==i.minH){for(C=d/u,t=0,n=v.length;n>t;t++)h=v[t],p=h.layoutRect(),b=p[k],y=p[_]+p.flex*C,y>b?(d-=p[k]-p[_],u-=p.flex,p.flex=0,p.maxFlexSize=b):p.maxFlexSize=0;for(C=d/u,w=o[T],x={},0===u&&("end"==l?w=d+o[T]:"center"==l?(w=Math.round(i[R]/2-(i[R]-d)/2)+o[T],0>w&&(w=o[T])):"justify"==l&&(w=o[T],c=Math.floor(d/(r.length-1)))),x[D]=o[H],t=0,n=r.length;n>t;t++)h=r[t],p=h.layoutRect(),y=p.maxFlexSize||p[_],"center"===s?x[D]=Math.round(i[M]/2-p[L]/2):"stretch"===s?(x[L]=z(p[P]||0,i[M]-o[H]-o[O]),x[D]=o[H]):"end"===s&&(x[D]=i[M]-p[L]-o.top),p.flex>0&&(y+=p.flex*C),x[N]=y,x[S]=w,h.layoutRect(x),h.recalc&&h.recalc(),w+=y+c}else if(x.w=x.minW,x.h=x.minH,e.layoutRect(x),this.recalc(e),null===e._lastRect){var V=e.parent();V&&(V._lastRect=null,V.recalc())}}})}),r(_t,[at],function(e){return e.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(e){e.items().filter(":visible").each(function(e){e.recalc&&e.recalc()})},isNative:function(){return!0}})}),r(St,[he,ke,we,m,Qe,h],function(e,t,n,r,i,o){function a(e){function t(t,n){return function(){var r=this;e.on("nodeChange",function(i){var o=e.formatter,a=null;s(i.parents,function(e){return s(t,function(t){return n?o.matchNode(e,n,{value:t.value})&&(a=t.value):o.matchNode(e,t.value)&&(a=t.value),a?!1:void 0}),a?!1:void 0}),r.value(a)})}}function r(e){e=e.replace(/;$/,"").split(";");for(var t=e.length;t--;)e[t]=e[t].split("=");return e}function i(){function t(e){var n=[];if(e)return s(e,function(e){var o={text:e.title,icon:e.icon};if(e.items)o.menu=t(e.items);else{var a=e.format||"custom"+r++;e.format||(e.name=a,i.push(e)),o.format=a,o.cmd=e.cmd}n.push(o)}),n}function n(){var n;return n=t(e.settings.style_formats_merge?e.settings.style_formats?o.concat(e.settings.style_formats):o:e.settings.style_formats||o)}var r=0,i=[],o=[{title:"Headings",items:[{title:"Heading 1",format:"h1"},{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}]},{title:"Inline",items:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]},{title:"Alignment",items:[{title:"Left",icon:"alignleft",format:"alignleft"},{title:"Center",icon:"aligncenter",format:"aligncenter"},{title:"Right",icon:"alignright",format:"alignright"},{title:"Justify",icon:"alignjustify",format:"alignjustify"}]}];return e.on("init",function(){s(i,function(t){e.formatter.register(t.name,t)})}),{type:"menu",items:n(),onPostRender:function(t){e.fire("renderFormatsMenu",{control:t.control})},itemDefaults:{preview:!0,textStyle:function(){return this.settings.format?e.formatter.getCssText(this.settings.format):void 0},onPostRender:function(){var t=this;t.parent().on("show",function(){var n,r;n=t.settings.format,n&&(t.disabled(!e.formatter.canApply(n)),t.active(e.formatter.match(n))),r=t.settings.cmd,r&&t.active(e.queryCommandState(r))})},onclick:function(){this.settings.format&&c(this.settings.format),this.settings.cmd&&e.execCommand(this.settings.cmd)}}}}function o(t){return function(){var n=this;e.formatter?e.formatter.formatChanged(t,function(e){n.active(e)}):e.on("init",function(){e.formatter.formatChanged(t,function(e){n.active(e)})})}}function a(t){return function(){function n(){return e.undoManager?e.undoManager[t]():!1}var r=this;t="redo"==t?"hasRedo":"hasUndo",r.disabled(!n()),e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode",function(){r.disabled(e.readonly||!n())})}}function l(){var t=this;e.on("VisualAid",function(e){t.active(e.hasVisual)}),t.active(e.hasVisual)}function c(t){t.control&&(t=t.control.value()),t&&e.execCommand("mceToggleFormat",!1,t)}var u;u=i(),s({bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript"},function(t,n){e.addButton(n,{tooltip:t,onPostRender:o(n),onclick:function(){c(n)}})}),s({outdent:["Decrease indent","Outdent"],indent:["Increase indent","Indent"],cut:["Cut","Cut"],copy:["Copy","Copy"],paste:["Paste","Paste"],help:["Help","mceHelp"],selectall:["Select all","SelectAll"],removeformat:["Clear formatting","RemoveFormat"],visualaid:["Visual aids","mceToggleVisualAid"],newdocument:["New document","mceNewDocument"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1]})}),s({blockquote:["Blockquote","mceBlockQuote"],numlist:["Numbered list","InsertOrderedList"],bullist:["Bullet list","InsertUnorderedList"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],alignleft:["Align left","JustifyLeft"],aligncenter:["Align center","JustifyCenter"],alignright:["Align right","JustifyRight"],alignjustify:["Justify","JustifyFull"],alignnone:["No alignment","JustifyNone"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1],onPostRender:o(n)})}),e.addButton("undo",{tooltip:"Undo",onPostRender:a("undo"),cmd:"undo"}),e.addButton("redo",{tooltip:"Redo",onPostRender:a("redo"),cmd:"redo"}),e.addMenuItem("newdocument",{text:"New document",icon:"newdocument",cmd:"mceNewDocument"}),e.addMenuItem("undo",{text:"Undo",icon:"undo",shortcut:"Meta+Z",onPostRender:a("undo"),cmd:"undo"}),e.addMenuItem("redo",{text:"Redo",icon:"redo",shortcut:"Meta+Y",onPostRender:a("redo"),cmd:"redo"}),e.addMenuItem("visualaid",{text:"Visual aids",selectable:!0,onPostRender:l,cmd:"mceToggleVisualAid"}),e.addButton("remove",{tooltip:"Remove",icon:"remove",cmd:"Delete"}),s({cut:["Cut","Cut","Meta+X"],copy:["Copy","Copy","Meta+C"],paste:["Paste","Paste","Meta+V"],selectall:["Select all","SelectAll","Meta+A"],bold:["Bold","Bold","Meta+B"],italic:["Italic","Italic","Meta+I"],underline:["Underline","Underline"],strikethrough:["Strikethrough","Strikethrough"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],removeformat:["Clear formatting","RemoveFormat"]},function(t,n){e.addMenuItem(n,{text:t[0],icon:n,shortcut:t[2],cmd:t[1]})}),e.on("mousedown",function(){n.hideAll()}),e.addButton("styleselect",{type:"menubutton",text:"Formats",menu:u}),e.addButton("formatselect",function(){var n=[],i=r(e.settings.block_formats||"Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");return s(i,function(t){n.push({text:t[0],value:t[1],textStyle:function(){return e.formatter.getCssText(t[1])}})}),{type:"listbox",text:i[0][0],values:n,fixedWidth:!0,onselect:c,onPostRender:t(n)}}),e.addButton("fontselect",function(){var n="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats",i=[],o=r(e.settings.font_formats||n);return s(o,function(e){i.push({text:{raw:e[0]},value:e[1],textStyle:-1==e[1].indexOf("dings")?"font-family:"+e[1]:""})}),{type:"listbox",text:"Font Family",tooltip:"Font Family",values:i,fixedWidth:!0,onPostRender:t(i,"fontname"),onselect:function(t){t.control.settings.value&&e.execCommand("FontName",!1,t.control.settings.value)}}}),e.addButton("fontsizeselect",function(){var n=[],r="8pt 10pt 12pt 14pt 18pt 24pt 36pt",i=e.settings.fontsize_formats||r;return s(i.split(" "),function(e){var t=e,r=e,i=e.split("=");i.length>1&&(t=i[0],r=i[1]),n.push({text:t,value:r})}),{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:n,fixedWidth:!0,onPostRender:t(n,"fontsize"),onclick:function(t){t.control.settings.value&&e.execCommand("FontSize",!1,t.control.settings.value)}}}),e.addMenuItem("formats",{text:"Formats",menu:u})}var s=r.each;i.on("AddEditor",function(t){t.editor.rtl&&(e.rtl=!0),a(t.editor)}),e.translate=function(e){return i.translate(e)},t.tooltips=!o.iOS}),r(kt,[st],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v,y,b,C,x,w,E,N=[],_=[],S,k,T,R,A,B;t=e.settings,i=e.items().filter(":visible"),o=e.layoutRect(),r=t.columns||Math.ceil(Math.sqrt(i.length)),n=Math.ceil(i.length/r),y=t.spacingH||t.spacing||0,b=t.spacingV||t.spacing||0,C=t.alignH||t.align,x=t.alignV||t.align,g=e.paddingBox,A="reverseRows"in t?t.reverseRows:e.isRtl(),C&&"string"==typeof C&&(C=[C]),x&&"string"==typeof x&&(x=[x]);for(d=0;r>d;d++)N.push(0);for(f=0;n>f;f++)_.push(0);for(f=0;n>f;f++)for(d=0;r>d&&(u=i[f*r+d],u);d++)c=u.layoutRect(),S=c.minW,k=c.minH,N[d]=S>N[d]?S:N[d],_[f]=k>_[f]?k:_[f];for(T=o.innerW-g.left-g.right,w=0,d=0;r>d;d++)w+=N[d]+(d>0?y:0),T-=(d>0?y:0)+N[d];for(R=o.innerH-g.top-g.bottom,E=0,f=0;n>f;f++)E+=_[f]+(f>0?b:0),R-=(f>0?b:0)+_[f];if(w+=g.left+g.right,E+=g.top+g.bottom,l={},l.minW=w+(o.w-o.innerW),l.minH=E+(o.h-o.innerH),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH,l.minW=Math.min(l.minW,o.maxW),l.minH=Math.min(l.minH,o.maxH),l.minW=Math.max(l.minW,o.startMinWidth),l.minH=Math.max(l.minH,o.startMinHeight),!o.autoResize||l.minW==o.minW&&l.minH==o.minH){o.autoResize&&(l=e.layoutRect(l),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH);var D;D="start"==t.packV?0:R>0?Math.floor(R/n):0;var M=0,L=t.flexWidths;if(L)for(d=0;d<L.length;d++)M+=L[d];else M=r;var P=T/M;for(d=0;r>d;d++)N[d]+=L?L[d]*P:P;for(p=g.top,f=0;n>f;f++){for(h=g.left,s=_[f]+D,d=0;r>d&&(B=A?f*r+r-1-d:f*r+d,u=i[B],u);d++)m=u.settings,c=u.layoutRect(),a=Math.max(N[d],c.startMinWidth),c.x=h,c.y=p,v=m.alignH||(C?C[d]||C[0]:null),"center"==v?c.x=h+a/2-c.w/2:"right"==v?c.x=h+a-c.w:"stretch"==v&&(c.w=a),v=m.alignV||(x?x[d]||x[0]:null),"center"==v?c.y=p+s/2-c.h/2:"bottom"==v?c.y=p+s-c.h:"stretch"==v&&(c.h=s),u.layoutRect(c),h+=a+y,u.recalc&&u.recalc();p+=s+b}}else if(l.w=l.minW,l.h=l.minH,e.layoutRect(l),this.recalc(e),null===e._lastRect){var H=e.parent();H&&(H._lastRect=null,H.recalc())}}})}),r(Tt,[ke,u],function(e,t){return e.extend({renderHtml:function(){var e=this;return e.classes.add("iframe"),e.canFocus=!1,'<iframe id="'+e._id+'" class="'+e.classes+'" tabindex="-1" src="'+(e.settings.url||"javascript:''")+'" frameborder="0"></iframe>'},src:function(e){this.getEl().src=e},html:function(e,n){var r=this,i=this.getEl().contentWindow.document.body;return i?(i.innerHTML=e,n&&n()):t.setTimeout(function(){r.html(e)}),this}})}),r(Rt,[ke,ce],function(e,t){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("widget").add("label"),t.canFocus=!1,e.multiline&&t.classes.add("autoscroll"),e.strong&&t.classes.add("strong")},initLayoutRect:function(){var e=this,n=e._super();if(e.settings.multiline){var r=t.getSize(e.getEl());r.width>n.maxW&&(n.minW=n.maxW,e.classes.add("multiline")),e.getEl().style.width=n.minW+"px",n.startMinH=n.h=n.minH=Math.min(n.maxH,t.getSize(e.getEl()).height)}return n},repaint:function(){var e=this;return e.settings.multiline||(e.getEl().style.lineHeight=e.layoutRect().h+"px"),e._super()},renderHtml:function(){var e=this,t=e.settings.forId;return'<label id="'+e._id+'" class="'+e.classes+'"'+(t?' for="'+t+'"':"")+">"+e.encode(e.state.get("text"))+"</label>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.innerHtml(e.encode(t.value))}),e._super()}})}),r(At,[ge],function(e){return e.extend({Defaults:{role:"toolbar",layout:"flow"},init:function(e){var t=this;t._super(e),t.classes.add("toolbar")},postRender:function(){var e=this;return e.items().each(function(e){e.classes.add("toolbar-item")}),e._super()}})}),r(Bt,[At],function(e){return e.extend({Defaults:{role:"menubar",containerCls:"menubar",ariaRoot:!0,defaults:{type:"menubutton"}}})}),r(Dt,[lt,pe,Bt],function(e,t,n){function r(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1}var i=e.extend({init:function(e){var t=this;t._renderOpen=!0,t._super(e),e=t.settings,t.classes.add("menubtn"),e.fixedWidth&&t.classes.add("fixed-width"),t.aria("haspopup",!0),t.state.set("menu",e.menu||t.render())},showMenu:function(){var e=this,n;return e.menu&&e.menu.visible()?e.hideMenu():(e.menu||(n=e.state.get("menu")||[],n.length?n={type:"menu",items:n}:n.type=n.type||"menu",n.renderTo?e.menu=n.parent(e).show().renderTo():e.menu=t.create(n).parent(e).renderTo(),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control.parent()===e.menu&&(t.stopPropagation(),e.focus(),e.hideMenu())}),e.menu.on("select",function(){e.focus()}),e.menu.on("show hide",function(t){t.control==e.menu&&e.activeMenu("show"==t.type),e.aria("expanded","show"==t.type)}).fire("show")),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),void e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"]))},hideMenu:function(){var e=this;e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide())},activeMenu:function(e){this.classes.toggle("active",e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix,i=e.settings.icon,o,a=e.state.get("text"),s="";return o=e.settings.image,o?(i="none","string"!=typeof o&&(o=window.getSelection?o[0]:o[1]),o=" style=\"background-image: url('"+o+"')\""):o="",a&&(e.classes.add("btn-has-text"),s='<span class="'+r+'txt">'+e.encode(a)+"</span>"),i=e.settings.icon?r+"ico "+r+"i-"+i:"",e.aria("role",e.parent()instanceof n?"menuitem":"button"),'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button id="'+t+'-open" role="presentation" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+s+' <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this;return e.on("click",function(t){t.control===e&&r(t.target,e.getEl())&&(e.showMenu(),t.aria&&e.menu.items()[0].focus())}),e.on("mouseenter",function(t){var n=t.control,r=e.parent(),o;n&&r&&n instanceof i&&n.parent()==r&&(r.items().filter("MenuButton").each(function(e){e.hideMenu&&e!=n&&(e.menu&&e.menu.visible()&&(o=!0),e.hideMenu())}),o&&(n.focus(),n.showMenu()))}),e._super()},bindStates:function(){var e=this;return e.state.on("change:menu",function(){e.menu&&e.menu.remove(),e.menu=null}),e._super()},remove:function(){this._super(),this.menu&&this.menu.remove()}});return i}),r(Mt,[ke,pe,h],function(e,t,n){return e.extend({Defaults:{border:0,role:"menuitem"},init:function(e){var t=this,n;t._super(e),e=t.settings,t.classes.add("menu-item"),e.menu&&t.classes.add("menu-item-expand"),e.preview&&t.classes.add("menu-item-preview"),n=t.state.get("text"),("-"===n||"|"===n)&&(t.classes.add("menu-item-sep"),t.aria("role","separator"),
t.state.set("text","-")),e.selectable&&(t.aria("role","menuitemcheckbox"),t.classes.add("menu-item-checkbox"),e.icon="selected"),e.preview||e.selectable||t.classes.add("menu-item-normal"),t.on("mousedown",function(e){e.preventDefault()}),e.menu&&!e.ariaHideMenu&&t.aria("haspopup",!0)},hasMenus:function(){return!!this.settings.menu},showMenu:function(){var e=this,n=e.settings,r,i=e.parent();if(i.items().each(function(t){t!==e&&t.hideMenu()}),n.menu){r=e.menu,r?r.show():(r=n.menu,r.length?r={type:"menu",items:r}:r.type=r.type||"menu",i.settings.itemDefaults&&(r.itemDefaults=i.settings.itemDefaults),r=e.menu=t.create(r).parent(e).renderTo(),r.reflow(),r.on("cancel",function(t){t.stopPropagation(),e.focus(),r.hide()}),r.on("show hide",function(e){e.control.items().each(function(e){e.active(e.settings.selected)})}).fire("show"),r.on("hide",function(t){t.control===r&&e.classes.remove("selected")}),r.submenu=!0),r._parentMenu=i,r.classes.add("menu-sub");var o=r.testMoveRel(e.getEl(),e.isRtl()?["tl-tr","bl-br","tr-tl","br-bl"]:["tr-tl","br-bl","tl-tr","bl-br"]);r.moveRel(e.getEl(),o),r.rel=o,o="menu-sub-"+o,r.classes.remove(r._lastRel).add(o),r._lastRel=o,e.classes.add("selected"),e.aria("expanded",!0)}},hideMenu:function(){var e=this;return e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide(),e.aria("expanded",!1)),e},renderHtml:function(){function e(e){var t,r,i={};for(i=n.mac?{alt:"&#x2325;",ctrl:"&#x2318;",shift:"&#x21E7;",meta:"&#x2318;"}:{meta:"Ctrl"},e=e.split("+"),t=0;t<e.length;t++)r=i[e[t].toLowerCase()],r&&(e[t]=r);return e.join("+")}var t=this,r=t._id,i=t.settings,o=t.classPrefix,a=t.encode(t.state.get("text")),s=t.settings.icon,l="",c=i.shortcut;return s&&t.parent().classes.add("menu-has-icons"),i.image&&(l=" style=\"background-image: url('"+i.image+"')\""),c&&(c=e(c)),s=o+"ico "+o+"i-"+(t.settings.icon||"none"),'<div id="'+r+'" class="'+t.classes+'" tabindex="-1">'+("-"!==a?'<i class="'+s+'"'+l+"></i>\xa0":"")+("-"!==a?'<span id="'+r+'-text" class="'+o+'text">'+a+"</span>":"")+(c?'<div id="'+r+'-shortcut" class="'+o+'menu-shortcut">'+c+"</div>":"")+(i.menu?'<div class="'+o+'caret"></div>':"")+"</div>"},postRender:function(){var e=this,t=e.settings,n=t.textStyle;if("function"==typeof n&&(n=n.call(this)),n){var r=e.getEl("text");r&&r.setAttribute("style",n)}return e.on("mouseenter click",function(n){n.control===e&&(t.menu||"click"!==n.type?(e.showMenu(),n.aria&&e.menu.focus(!0)):(e.fire("select"),e.parent().hideAll()))}),e._super(),e},active:function(e){return"undefined"!=typeof e&&this.aria("checked",e),this._super(e)},remove:function(){this._super(),this.menu&&this.menu.remove()}})}),r(Lt,[we,Mt,m],function(e,t,n){return e.extend({Defaults:{defaultType:"menuitem",border:1,layout:"stack",role:"application",bodyRole:"menu",ariaRoot:!0},init:function(e){var t=this;if(e.autohide=!0,e.constrainToViewport=!0,e.itemDefaults)for(var r=e.items,i=r.length;i--;)r[i]=n.extend({},e.itemDefaults,r[i]);t._super(e),t.classes.add("menu")},repaint:function(){return this.classes.toggle("menu-align",!0),this._super(),this.getEl().style.height="",this.getEl("body").style.height="",this},cancel:function(){var e=this;e.hideAll(),e.fire("select")},hideAll:function(){var e=this;return this.find("menuitem").exec("hideMenu"),e._super()},preRender:function(){var e=this;return e.items().each(function(t){var n=t.settings;return n.icon||n.image||n.selectable?(e._hasIcons=!0,!1):void 0}),e._super()}})}),r(Pt,[Dt,Lt],function(e,t){return e.extend({init:function(e){function t(r){for(var a=0;a<r.length;a++){if(i=r[a].selected||e.value===r[a].value)return o=o||r[a].text,n.state.set("value",r[a].value),!0;if(r[a].menu&&t(r[a].menu))return!0}}var n=this,r,i,o,a;n._super(e),e=n.settings,n._values=r=e.values,r&&("undefined"!=typeof e.value&&t(r),!i&&r.length>0&&(o=r[0].text,n.state.set("value",r[0].value)),n.state.set("menu",r)),n.state.set("text",e.text||o),n.classes.add("listbox"),n.on("select",function(t){var r=t.control;a&&(t.lastControl=a),e.multiple?r.active(!r.active()):n.value(t.control.value()),a=r})},bindStates:function(){function e(e,n){e instanceof t&&e.items().each(function(e){e.hasMenus()||e.active(e.value()===n)})}function n(e,t){var r;if(e)for(var i=0;i<e.length;i++){if(e[i].value===t)return e[i];if(e[i].menu&&(r=n(e[i].menu,t)))return r}}var r=this;return r.on("show",function(t){e(t.control,r.value())}),r.state.on("change:value",function(e){var t=n(r.state.get("menu"),e.value);t?r.text(t.text):r.text(r.settings.text)}),r._super()}})}),r(Ht,[ut],function(e){return e.extend({Defaults:{classes:"radio",role:"radio"}})}),r(Ot,[ke,ve],function(e,t){return e.extend({renderHtml:function(){var e=this,t=e.classPrefix;return e.classes.add("resizehandle"),"both"==e.settings.direction&&e.classes.add("resizehandle-both"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"><i class="'+t+"ico "+t+'i-resize"></i></div>'},postRender:function(){var e=this;e._super(),e.resizeDragHelper=new t(this._id,{start:function(){e.fire("ResizeStart")},drag:function(t){"both"!=e.settings.direction&&(t.deltaX=0),e.fire("Resize",t)},stop:function(){e.fire("ResizeEnd")}})},remove:function(){return this.resizeDragHelper&&this.resizeDragHelper.destroy(),this._super()}})}),r(It,[ke],function(e){function t(e){var t="";if(e)for(var n=0;n<e.length;n++)t+='<option value="'+e[n]+'">'+e[n]+"</option>";return t}return e.extend({Defaults:{classes:"selectbox",role:"selectbox",options:[]},init:function(e){var t=this;t._super(e),t.settings.size&&(t.size=t.settings.size),t.settings.options&&(t._options=t.settings.options)},options:function(e){return arguments.length?(this.state.set("options",e),this):this.state.get("options")},renderHtml:function(){var e=this,n,r="";return n=t(e._options),e.size&&(r=' size = "'+e.size+'"'),'<select id="'+e._id+'" class="'+e.classes+'"'+r+">"+n+"</select>"},bindStates:function(){var e=this;return e.state.on("change:options",function(n){e.getEl().innerHTML=t(n.value)}),e._super()}})}),r(Ft,[ke,ve,ce],function(e,t,n){function r(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}function i(e,t){var r,i,o,a,s;"v"==e.settings.orientation?(a="top",o="height",i="h"):(a="left",o="width",i="w"),r=(e.layoutRect()[i]||100)-n.getSize(e.getEl("handle"))[o],s=r*((t-e._minValue)/(e._maxValue-e._minValue))+"px",e.getEl("handle").style[a]=s,e.getEl("handle").style.height=e.layoutRect().h+"px"}return e.extend({init:function(e){var t=this;e.previewFilter||(e.previewFilter=function(e){return Math.round(100*e)/100}),t._super(e),t.classes.add("slider"),"v"==e.orientation&&t.classes.add("vertical"),t._minValue=e.minValue||0,t._maxValue=e.maxValue||100,t._initValue=t.state.get("value")},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div id="'+t+'-handle" class="'+n+'slider-handle"></div></div>'},reset:function(){this.value(this._initValue).repaint()},postRender:function(){var e=this,i,o,a=0,s,l,c,u,d,f,h,p;l=e._minValue,c=e._maxValue,s=e.value(),"v"==e.settings.orientation?(d="screenY",f="top",h="height",p="h"):(d="screenX",f="left",h="width",p="w"),e._super(),e._dragHelper=new t(e._id,{handle:e._id+"-handle",start:function(t){i=t[d],o=parseInt(e.getEl("handle").style[f],10),u=(e.layoutRect()[p]||100)-n.getSize(e.getEl("handle"))[h],e.fire("dragstart",{value:s})},drag:function(t){var n=t[d]-i,h=e.getEl("handle");a=r(o+n,0,u),h.style[f]=a+"px",s=l+a/u*(c-l),e.value(s),e.tooltip().text(""+e.settings.previewFilter(s)).show().moveRel(h,"bc tc"),e.fire("drag",{value:s})},stop:function(){e.tooltip().hide(),e.fire("dragend",{value:s})}})},repaint:function(){this._super(),i(this,this.value())},bindStates:function(){var e=this;return e.state.on("change:value",function(t){i(e,t.value)}),e._super()}})}),r(zt,[ke],function(e){return e.extend({renderHtml:function(){var e=this;return e.classes.add("spacer"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"></div>'}})}),r(Wt,[Dt,ce,g],function(e,t,n){return e.extend({Defaults:{classes:"widget btn splitbtn",role:"button"},repaint:function(){var e=this,r=e.getEl(),i=e.layoutRect(),o,a;return e._super(),o=r.firstChild,a=r.lastChild,n(o).css({width:i.w-t.getSize(a).width,height:i.h-2}),n(a).css({height:i.h-2}),e},activeMenu:function(e){var t=this;n(t.getEl().lastChild).toggleClass(t.classPrefix+"active",e)},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r,i=e.state.get("icon"),o=e.state.get("text"),a="";return r=e.settings.image,r?(i="none","string"!=typeof r&&(r=window.getSelection?r[0]:r[1]),r=" style=\"background-image: url('"+r+"')\""):r="",i=e.settings.icon?n+"ico "+n+"i-"+i:"",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">'+(i?'<i class="'+i+'"'+r+"></i>":"")+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1">'+(e._menuBtnText?(i?"\xa0":"")+e._menuBtnText:"")+' <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(e){var n=e.target;if(e.control==this)for(;n;){if(e.aria&&"down"!=e.aria.key||"BUTTON"==n.nodeName&&-1==n.className.indexOf("open"))return e.stopImmediatePropagation(),void(t&&t.call(this,e));n=n.parentNode}}),delete e.settings.onclick,e._super()}})}),r(Vt,[_t],function(e){return e.extend({Defaults:{containerClass:"stack-layout",controlClass:"stack-layout-item",endClass:"break"},isNative:function(){return!0}})}),r(Ut,[be,g,ce],function(e,t,n){return e.extend({Defaults:{layout:"absolute",defaults:{type:"panel"}},activateTab:function(e){var n;this.activeTabId&&(n=this.getEl(this.activeTabId),t(n).removeClass(this.classPrefix+"active"),n.setAttribute("aria-selected","false")),this.activeTabId="t"+e,n=this.getEl("t"+e),n.setAttribute("aria-selected","true"),t(n).addClass(this.classPrefix+"active"),this.items()[e].show().fire("showtab"),this.reflow(),this.items().each(function(t,n){e!=n&&t.hide()})},renderHtml:function(){var e=this,t=e._layout,n="",r=e.classPrefix;return e.preRender(),t.preRender(e),e.items().each(function(t,i){var o=e._id+"-t"+i;t.aria("role","tabpanel"),t.aria("labelledby",o),n+='<div id="'+o+'" class="'+r+'tab" unselectable="on" role="tab" aria-controls="'+t._id+'" aria-selected="false" tabIndex="-1">'+e.encode(t.settings.title)+"</div>"}),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1"><div id="'+e._id+'-head" class="'+r+'tabs" role="tablist">'+n+'</div><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this;e._super(),e.settings.activeTab=e.settings.activeTab||0,e.activateTab(e.settings.activeTab),this.on("click",function(t){var n=t.target.parentNode;if(t.target.parentNode.id==e._id+"-head")for(var r=n.childNodes.length;r--;)n.childNodes[r]==t.target&&e.activateTab(r)})},initLayoutRect:function(){var e=this,t,r,i;r=n.getSize(e.getEl("head")).width,r=0>r?0:r,i=0,e.items().each(function(e){r=Math.max(r,e.layoutRect().minW),i=Math.max(i,e.layoutRect().minH)}),e.items().each(function(e){e.settings.x=0,e.settings.y=0,e.settings.w=r,e.settings.h=i,e.layoutRect({x:0,y:0,w:r,h:i})});var o=n.getSize(e.getEl("head")).height;return e.settings.minWidth=r,e.settings.minHeight=i+o,t=e._super(),t.deltaH+=o,t.innerH=t.h-t.deltaH,t}})}),r($t,[ke],function(e){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("textbox"),e.multiline?t.classes.add("multiline"):(t.on("keydown",function(e){var n;13==e.keyCode&&(e.preventDefault(),t.parents().reverse().each(function(e){return e.toJSON?(n=e,!1):void 0}),t.fire("submit",{data:n.toJSON()}))}),t.on("keyup",function(e){t.state.set("value",e.target.value)}))},repaint:function(){var e=this,t,n,r,i,o=0,a;t=e.getEl().style,n=e._layoutRect,a=e._lastRepaintRect||{};var s=document;return!e.settings.multiline&&s.all&&(!s.documentMode||s.documentMode<=8)&&(t.lineHeight=n.h-o+"px"),r=e.borderBox,i=r.left+r.right+8,o=r.top+r.bottom+(e.settings.multiline?8:0),n.x!==a.x&&(t.left=n.x+"px",a.x=n.x),n.y!==a.y&&(t.top=n.y+"px",a.y=n.y),n.w!==a.w&&(t.width=n.w-i+"px",a.w=n.w),n.h!==a.h&&(t.height=n.h-o+"px",a.h=n.h),e._lastRepaintRect=a,e.fire("repaint",{},!1),e},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.encode(e.state.get("value"),!1),i="";return"spellcheck"in n&&(i+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(i+=' maxlength="'+n.maxLength+'"'),n.size&&(i+=' size="'+n.size+'"'),n.subtype&&(i+=' type="'+n.subtype+'"'),e.disabled()&&(i+=' disabled="disabled"'),n.multiline?'<textarea id="'+t+'" class="'+e.classes+'" '+(n.rows?' rows="'+n.rows+'"':"")+' hidefocus="1"'+i+">"+r+"</textarea>":'<input id="'+t+'" class="'+e.classes+'" value="'+r+'" hidefocus="1"'+i+" />"},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl().value),this.state.get("value"))},postRender:function(){var e=this;e._super(),e.$el.on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)})},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl().value!=t.value&&(e.getEl().value=t.value)}),e.state.on("change:disabled",function(t){e.getEl().disabled=t.value}),e._super()},remove:function(){this.$el.off(),this._super()}})}),r(qt,[g,he,u],function(e,t,n){return function(r,i){var o=this,a,s=t.classPrefix;o.show=function(t,l){return o.hide(),a=!0,n.setTimeout(function(){a&&(e(r).append('<div class="'+s+"throbber"+(i?" "+s+"throbber-inline":"")+'"></div>'),l&&l())},t),o},o.hide=function(){var e=r.lastChild;return e&&-1!=e.className.indexOf("throbber")&&e.parentNode.removeChild(e),a=!1,o}}}),a([l,c,u,d,f,h,m,g,v,y,C,w,E,N,T,A,B,D,M,L,P,H,I,F,j,Y,G,J,ee,te,ne,re,oe,se,le,fe,he,pe,me,ge,ve,ye,be,Ce,xe,we,Ee,Ne,_e,Se,ke,Te,Re,Ae,Me,Pe,Ke,Ge,Je,Qe,et,tt,nt,rt,it,ot,at,st,lt,ct,ut,dt,ft,ht,pt,mt,gt,vt,yt,bt,Ct,xt,wt,Et,Nt,_t,St,kt,Tt,Rt,At,Bt,Dt,Mt,Lt,Pt,Ht,Ot,It,Ft,zt,Wt,Vt,Ut,$t,qt])}(this);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/tinymce/tinymce.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/tinymce/jquery.tinymce.min.js---*/
!function(e){function t(){function t(e){"remove"===e&&this.each(function(e,t){var n=i(t);n&&n.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(e,t){var n=tinymce.get(t.id.replace(/_parent$/,""));n&&n.remove()})}function r(e){var n,r=this;if(null!=e)t.call(r),r.each(function(t,n){var r;(r=tinymce.get(n.id))&&r.setContent(e)});else if(r.length>0&&(n=tinymce.get(r[0].id)))return n.getContent()}function i(e){var t=null;return e&&e.id&&a.tinymce&&(t=tinymce.get(e.id)),t}function o(e){return!!(e&&e.length&&a.tinymce&&e.is(":tinymce"))}var s={};e.each(["text","html","val"],function(t,a){var l=s[a]=e.fn[a],c="text"===a;e.fn[a]=function(t){var a=this;if(!o(a))return l.apply(a,arguments);if(t!==n)return r.call(a.filter(":tinymce"),t),l.apply(a.not(":tinymce"),arguments),a;var s="",u=arguments;return(c?a:a.eq(0)).each(function(t,n){var r=i(n);s+=r?c?r.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):r.getContent({save:!0}):l.apply(e(n),u)}),s}}),e.each(["append","prepend"],function(t,r){var a=s[r]=e.fn[r],l="prepend"===r;e.fn[r]=function(e){var t=this;return o(t)?e!==n?("string"==typeof e&&t.filter(":tinymce").each(function(t,n){var r=i(n);r&&r.setContent(l?e+r.getContent():r.getContent()+e)}),a.apply(t.not(":tinymce"),arguments),t):void 0:a.apply(t,arguments)}}),e.each(["remove","replaceWith","replaceAll","empty"],function(n,r){var i=s[r]=e.fn[r];e.fn[r]=function(){return t.call(this,r),i.apply(this,arguments)}}),s.attr=e.fn.attr,e.fn.attr=function(t,a){var l=this,c=arguments;if(!t||"value"!==t||!o(l))return a!==n?s.attr.apply(l,c):s.attr.apply(l,c);if(a!==n)return r.call(l.filter(":tinymce"),a),s.attr.apply(l.not(":tinymce"),c),l;var u=l[0],d=i(u);return d?d.getContent({save:!0}):s.attr.apply(e(u),c)}}var n,r,i,o=[],a=window;e.fn.tinymce=function(n){function s(){var r=[],o=0;i||(t(),i=!0),d.each(function(e,t){var i,a=t.id,s=n.oninit;a||(t.id=a=tinymce.DOM.uniqueId()),tinymce.get(a)||(i=new tinymce.Editor(a,n,tinymce.EditorManager),r.push(i),i.on("init",function(){var e,t=s;d.css("visibility",""),s&&++o==r.length&&("string"==typeof t&&(e=-1===t.indexOf(".")?null:tinymce.resolve(t.replace(/\.\w+$/,"")),t=tinymce.resolve(t)),t.apply(e||tinymce,r))}))}),e.each(r,function(e,t){t.render()})}var l,c,u,d=this,f="";if(!d.length)return d;if(!n)return window.tinymce?tinymce.get(d[0].id):null;if(d.css("visibility","hidden"),a.tinymce||r||!(l=n.script_url))1===r?o.push(s):s();else{r=1,c=l.substring(0,l.lastIndexOf("/")),-1!=l.indexOf(".min")&&(f=".min"),a.tinymce=a.tinyMCEPreInit||{base:c,suffix:f},-1!=l.indexOf("gzip")&&(u=n.language||"en",l=l+(/\?/.test(l)?"&":"?")+"js=true&core=true&suffix="+escape(f)+"&themes="+escape(n.theme||"modern")+"&plugins="+escape(n.plugins||"")+"&languages="+(u||""),a.tinyMCE_GZ||(a.tinyMCE_GZ={start:function(){function t(e){tinymce.ScriptLoader.markDone(tinymce.baseURI.toAbsolute(e))}t("langs/"+u+".js"),t("themes/"+n.theme+"/theme"+f+".js"),t("themes/"+n.theme+"/langs/"+u+".js"),e.each(n.plugins.split(","),function(e,n){n&&(t("plugins/"+n+"/plugin"+f+".js"),t("plugins/"+n+"/langs/"+u+".js"))})},end:function(){}}));var p=document.createElement("script");p.type="text/javascript",p.onload=p.onreadystatechange=function(t){t=t||window.event,2===r||"load"!=t.type&&!/complete|loaded/.test(p.readyState)||(tinymce.dom.Event.domLoaded=1,r=2,n.script_loaded&&n.script_loaded(),s(),e.each(o,function(e,t){t()}))},p.src=l,document.body.appendChild(p)}return d},e.extend(e.expr[":"],{tinymce:function(e){var t;return e.id&&"tinymce"in window&&(t=tinymce.get(e.id),t&&t.editorManager===tinymce)?!0:!1}})}(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/tinymce/jquery.tinymce.min.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/inc/js/view_edit.js---*/
// submits edit form located on view profile page
function submitViewEditForm(eForm, iPageBlockID, sSuccessUrl) {
    if( !eForm )
        return false;
    
    hideEditFormErrors( eForm );
    
    $(eForm).ajaxSubmit({
        success: function(sResponce) {
            try {
                var aErrors = eval(sResponce);
            } catch(e) {
                return false;
            }
            
            var bHaveErrors = doShowEditErrors( aErrors, eForm );
            
            if (!bHaveErrors) {
                loadDynamicBlock(iPageBlockID, sSuccessUrl);
                closeDynamicPopupBlock();
            }
        }
    } );
    
    return false;
}

function hideEditFormErrors( eForm ) {
    $( '.error', eForm ).removeClass( 'error' );
}

function doShowEditErrors( aErrors, eForm ) {
    if( !aErrors || !eForm )
        return false;
    
    var bHaveErrors = false;
    
    for( var iInd = 0; iInd < aErrors.length; iInd ++ ) {
        var aErrorsInd = aErrors[iInd];
        for( var sField in aErrorsInd ) {
            var sError = aErrorsInd[ sField ];
            bHaveErrors = true;
            
            doShowError( eForm, sField, iInd, sError );
        }
    }
    
    return bHaveErrors;
}

function doShowError( eForm, sField, iInd, sError ) {
    var $Field = $( "[name='" + sField + "']", eForm ); // single (system) field
    if( !$Field.length ) // couple field
        $Field = $( "[name='" + sField + '[' + iInd + ']' + "']", eForm );
    if( !$Field.length ) // couple multi-select
        $Field = $( "[name='" + sField + '[' + iInd + '][]' + "']", eForm );
    if( !$Field.length ) // couple range (two fields)
        $Field = $( "[name='" + sField + '[' + iInd + '][0]' + "'],[name='" + sField + '[' + iInd + '][1]' + "']", eForm );

    $Field.parents('.bx-form-element:first').addClass('bx-form-element-error').find('.bx-form-error > [float_info]').attr('float_info', sError);
}
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/inc/js/view_edit.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/flash/modules/global/js/swfobject.js---*/
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/flash/modules/global/js/swfobject.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/messenger/js/invite.js---*/
var BxMsgInvitationHeight = 300;
var BxMsgInviteInterval;
var sBxMsgTemplate = "";
var aBxMsgMessages = new Array();
var aBxMsgInvitations = new Object();

function BxMsgUpdate() {
    var oDate = new Date();
    $.get (
        sBxMsgUpdateUrl,
        {_t: oDate.getTime()},
        function(xXml) {
			var aMessages = xXml.getElementsByTagName("msg");
			for(var i=0; i<aMessages.length; i++)
				aBxMsgMessages.push({
					'sender': aMessages[i].getAttribute("sender"),
					'nick': aMessages[i].getAttribute("nick"),
					'profile': aMessages[i].getAttribute("profile"),
					'text': aMessages[i].firstChild.nodeValue
				});
			if(aBxMsgMessages.length) BxMsgShowInvitations();
        },
		'xml'
    );
	BxMsgInviteInterval = setTimeout('BxMsgUpdate();', BxMsgUpdateInterval);
}

function BxMsgShowInvitations() {
    if (sBxMsgTemplate.length) {
		for(var i=0; i<aBxMsgMessages.length; i++)
			BxMsgShowInvitation(aBxMsgMessages[i]);
		aBxMsgMessages.length = 0;
    } else {
        $.get(
            sBxMsgGetUrl + "get_invitation",
            {},
            function(data) {
                // trim needed for Safari. LOL
				sBxMsgTemplate = $.trim(data);
				BxMsgShowInvitations();
            },
            'html'
        );
    }
}

function BxMsgShowInvitation(oMessage) {
	if(aBxMsgInvitations[oMessage["sender"]]) return;
	
	var sContents = sBxMsgTemplate.split("__sender_id__").join(oMessage["sender"]);
	sContents = sContents.split("__sender_nickname__").join(oMessage["nick"]);
	sContents = sContents.split("__sender_profile__").join(oMessage["profile"]);
	sContents = sContents.split("__invitation_text__").join(oMessage["text"]);

	$.get(
		sBxMsgGetUrl + "get_thumbnail/" + oMessage["sender"],
		{},
		function(data) {
			// trim needed for Safari. LOL
			sContents = sContents.split("__sender_thumbnail__").join($.trim(data));
			aBxMsgInvitations[oMessage["sender"]] = $(sContents).prependTo('body');
			BxMsgRefreshPositions();
		},
		'html'
	);
}

function BxMsgRemoveInvitation(iSender) {
	aBxMsgInvitations[iSender].remove();
	aBxMsgInvitations[iSender] = null;
	BxMsgRefreshPositions();
}

function BxMsgRefreshPositions() {
	var iTopCount = 0;
	for(var i in aBxMsgInvitations)
	{
		if(aBxMsgInvitations[i] == null) continue;
		aBxMsgInvitations[i].attr('style', "top:" + (BxMsgTopMargin + iTopCount * BxMsgInvitationHeight) + "px");
		iTopCount++;
	}
}

function BxMsgPerformAction(iSender, sAction) {
	switch(sAction) {
		case "accept":
			openRayWidget("im", "user", sBxMsgMemberId, sBxMsgMemberPassword, iSender);
			break;
		case "spam":
		case "block":
            $.post(sBxMsgSiteUrl + 'list_pop.php?action=' + sAction, { ID: iSender } );
			break;
		case "decline":
		default:
			break;
	}
	BxMsgRemoveInvitation(iSender);
};
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/messenger/js/invite.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/emoji-picker/js/jquery.emojipicker.js---*/
;(function($) {

  var pluginName = "emojiPicker",
      defaults = {
        width: '200',
        height: '350',
        position: 'bottom',
        fadeTime: 100,
        iconColor: 'black',
        iconBackgroundColor: '#eee',
        container: 'body',
        button: true
      };

  var MIN_WIDTH = 200,
      MAX_WIDTH = 600,
      MIN_HEIGHT = 100,
      MAX_HEIGHT = 350,
      MAX_ICON_HEIGHT = 50;

  function Plugin( element, options ) {

    this.element = element;
    this.$el = $(element);

    this.settings = $.extend( {}, defaults, options );

    this.$container = $(this.settings.container);

    // (type) Safety first
    this.settings.width = parseInt(this.settings.width);
    this.settings.height = parseInt(this.settings.height);

    // Check for valid width/height
    if(this.settings.width >= MAX_WIDTH) {
      this.settings.width = MAX_WIDTH;
    } else if (this.settings.width < MIN_WIDTH) {
      this.settings.width = MIN_WIDTH;
    }
    if (this.settings.height >= MAX_HEIGHT) {
      this.settings.height = MAX_HEIGHT;
    } else if (this.settings.height < MIN_HEIGHT) {
      this.settings.height = MIN_HEIGHT;
    }

    // Do not enable if on mobile device (emojis already present)
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.init();
    }

  }

  $.extend(Plugin.prototype, {

    init: function() {
      this.active = false;
      this.addPickerIcon();
      this.createPicker();
      this.listen();
    },

    addPickerIcon: function() {
      var elementHeight = this.$el.outerHeight();
      var iconHeight = elementHeight > MAX_ICON_HEIGHT ?
        MAX_ICON_HEIGHT :
        elementHeight;
      var objectWidth = this.$el.width();

      this.$el.width(objectWidth)

      this.$wrapper = this.$el
        .wrap("<div class='emojiPickerIconWrap'></div>")
        .parent()

      if (this.settings.button) {
        this.$icon = $('<div class="emojiPickerIcon"></div>')
          .height(iconHeight)
          .width(iconHeight)
          .addClass(this.settings.iconColor)
          .css('backgroundColor', this.settings.iconBackgroundColor);
          this.$wrapper.append( this.$icon );
      }

    },

    createPicker: function() {

      // Show template
      this.$picker = $( getPickerHTML() )
        .appendTo( this.$container )
        .width(this.settings.width)
        .height(this.settings.height)
        .css('z-index',10000);

      // Picker height
      this.$picker.find('section')
        .height(parseInt(this.settings.height) - 40); // 40 is height of the tabs

      // Tab size based on width
      if (this.settings.width < 240) {
        this.$picker.find('.emoji').css({'width':'1em', 'height':'1em'});
      }

    },

    listen: function() {

      // Clicking on the picker icon
      this.$wrapper.find('.emojiPickerIcon')
        .click( $.proxy(this.iconClicked, this) );

      // Click event for emoji
      this.$picker.find('section div')
        .click( $.proxy(this.emojiClicked, this) );

      // Click event for active tab
      this.$picker.find('nav .tab')
        .click( $.proxy(this.emojiCategoryClicked, this) );

      this.$picker.click( $.proxy(this.pickerClicked, this) );

      $(document.body).click( $.proxy(this.clickOutside, this) );
    },

    updatePosition: function() {
      var top, left;
      if (this.settings.container === 'body') {
          top = this.$el.offset().top + this.$el.height();
          left = this.$el.offset().left;
      }
      else {
          top = this.$el.position().top + this.$el.height();
          left = this.$el.position().left;
      }

      // Picker position
      // switch(this.settings.position) {
      //   case 'top':
      //     var top = parseInt(this.settings.height) + 20;
      //     this.$pickerWrap.css({'top': -top + 'px', 'right':'0'});
      //     break;
      //   case 'bottom':
      //     this.$pickerWrap.css({'right':'0'});
      //     break;
      //   case 'left':
      //     var left = this.$icon.width() + 10;
      //     this.$pickerWrap.css({'top':'-10px', 'right': left + 'px'});
      //     break;
      //   case 'right':
      //     var right = parseInt(this.settings.width) + this.$icon.width() - 30;
      //     this.$pickerWrap.css({'top':'-10px', 'right': -right + 'px'});
      //     break;
      // }

      this.$picker.css({
          top: top + 15,
          left: left + this.$el.outerWidth() - this.settings.width
      });
      return this;
    },

    hide: function() {
      this.$picker.hide(this.settings.fadeTime, 'linear', function() {
        this.active = false;
      }.bind(this));
    },

    show: function() {
      this.$el.focus();
      this.updatePosition();
      this.$picker.show(this.settings.fadeTime, 'linear', function() {
        this.active = true;
      }.bind(this));
    },

    /************
     *  EVENTS  *
     ************/

    iconClicked : function(e) {
      if ( this.$picker.is(':hidden') ) {
        this.show();
      } else {
        this.hide();
      }
    },

    emojiClicked: function(e) {
      var emojiShortcode = $(e.target).attr('class').split('emoji-')[1];
      var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode);

      insertAtCaret(this.element, emojiUnicode);
    },

    emojiCategoryClicked: function(e) {
      var section = '';

      // Update tab
      this.$picker.find('nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      } else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      // Update section
      this.$picker.find('section').addClass('hidden');//.hide();
      this.$picker.find('section.' + section).removeClass('hidden');//.show();
    },

    pickerClicked: function(e) {
      e.stopPropagation();
    },

    clickOutside: function(e) {
      if ( this.active ) {
        this.hide();
      }
    }

  });

  $.fn[ pluginName ] = function ( options ) {

    // Calling a function
    if (typeof options === 'string') {
      this.each(function() {
        var plugin = $.data( this, pluginName );
        switch(options) {
          case 'toggle':
            plugin.iconClicked();
          break;
        }
      });
      return this;
    }

    this.each(function() {
      // Don't attach to the same element twice
      if ( !$.data( this, pluginName ) ) {
        $.data( this, pluginName, new Plugin( this, options ) );
      }
    });
    return this;
  };

  /* ---------------------------------------------------------------------- */

  function getPickerHTML() {
    var nodes = [];
    var categories = [
      { name: 'emotion',  symbol: 'grinning' },
      { name: 'animal',   symbol: 'whale' },
      { name: 'food',     symbol: 'hamburger' },
      { name: 'folderol', symbol: 'sunny' },
      { name: 'thing',    symbol: 'kiss' },
      { name: 'travel',   symbol: 'rocket' }
    ];
    var aliases = {
      'people':    'emotion',
      'symbol':    'thing',
      'undefined': 'thing'
    }
    var items = {};

    // Re-Sort Emoji table
    $.each($.fn.emojiPicker.emojis, function(i, emoji) {
      var category = aliases[ emoji.category ] || emoji.category;
      items[ category ] = items[ category ] || [];
      items[ category ].push( emoji );
    });

    nodes.push('<div class="emojiPicker">');
    nodes.push('<nav>');
    for (var i in categories) {
      nodes.push('<div class="tab' +
      ( i == 0 ? ' active' : '' ) +
      '" data-tab="' +
      categories[i].name +
      '"><div class="emoji emoji-' +
      categories[i].symbol +
      '"></div></div>');
    }
    nodes.push('</nav>');
    for (var i in categories) {
      nodes.push('<section class="' +
        categories[i].name +
        ( i == 0 ? '' : ' hidden' ) +
        '">');
      for (var j in items[ categories[i].name ] ) {
        var emoji = items[ categories[i].name ][ j ];
        nodes.push('<div class="emoji emoji-' + emoji.shortcode + '"></div>');
      }
      nodes.push('</section>');
    }
    nodes.push('</div>');
    return nodes.join("\n");
  }

  function findEmoji(emojiShortcode) {
    var emojis = $.fn.emojiPicker.emojis;
    for (var i = 0; i < emojis.length; i++) {
      if (emojis[i].shortcode == emojiShortcode) {
        return emojis[i];
      }
    }
  }

  function insertAtCaret(inputField, myValue) {
    if (document.selection) {
      //For browsers like Internet Explorer
      inputField.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      inputField.focus();
    }
    else if (inputField.selectionStart || inputField.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = inputField.selectionStart;
      var endPos = inputField.selectionEnd;
      var scrollTop = inputField.scrollTop;
      inputField.value = inputField.value.substring(0, startPos)+myValue+inputField.value.substring(endPos,inputField.value.length);
      inputField.focus();
      inputField.selectionStart = startPos + myValue.length;
      inputField.selectionEnd = startPos + myValue.length;
      inputField.scrollTop = scrollTop;
    } else {
      inputField.focus();
      inputField.value += myValue;
    }
  }

  function toUnicode(code) {
    var codes = code.split('-').map(function(value, index) {
      return parseInt(value, 16);
    });
    return String.fromCodePoint.apply(null, codes);
  }

  if (!String.fromCodePoint) {
    // ES6 Unicode Shims 0.1 , © 2012 Steven Levithan http://slevithan.com/ , MIT License
    String.fromCodePoint = function fromCodePoint () {
        var chars = [], point, offset, units, i;
        for (i = 0; i < arguments.length; ++i) {
            point = arguments[i];
            offset = point - 0x10000;
            units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
            chars.push(String.fromCharCode.apply(null, units));
        }
        return chars.join("");
    }
  }

})(jQuery);
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/emoji-picker/js/jquery.emojipicker.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/emoji-picker/js/jquery.emojipicker.tw.js---*/
$(function() {
$.fn.emojiPicker.emojis = [
  {
    "name": "bangbang",
    "unicode": "203C",
    "shortcode": "bangbang",
    "description": "DOUBLE EXCLAMATION MARK",
    "category": "symbol"
  },
  {
    "name": "interrobang",
    "unicode": "2049",
    "shortcode": "interrobang",
    "description": "EXCLAMATION QUESTION MARK",
    "category": "folderol"
  },
  {
    "name": "tm",
    "unicode": "2122",
    "shortcode": "tm",
    "description": "TRADE MARK SIGN",
    "category": "folderol"
  },
  {
    "name": "information_source",
    "unicode": "2139",
    "shortcode": "information_source",
    "description": "INFORMATION SOURCE",
    "category": "folderol"
  },
  {
    "name": "left_right_arrow",
    "unicode": "2194",
    "shortcode": "left_right_arrow",
    "description": "LEFT RIGHT ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_up_down",
    "unicode": "2195",
    "shortcode": "arrow_up_down",
    "description": "UP DOWN ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_upper_left",
    "unicode": "2196",
    "shortcode": "arrow_upper_left",
    "description": "NORTH WEST ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_upper_right",
    "unicode": "2197",
    "shortcode": "arrow_upper_right",
    "description": "NORTH EAST ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_lower_right",
    "unicode": "2198",
    "shortcode": "arrow_lower_right",
    "description": "SOUTH EAST ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_lower_left",
    "unicode": "2199",
    "shortcode": "arrow_lower_left",
    "description": "SOUTH WEST ARROW",
    "category": "folderol"
  },
  {
    "name": "leftwards_arrow_with_hook",
    "unicode": "21A9",
    "shortcode": "leftwards_arrow_with_hook",
    "description": "LEFTWARDS ARROW WITH HOOK",
    "category": "folderol"
  },
  {
    "name": "arrow_right_hook",
    "unicode": "21AA",
    "shortcode": "arrow_right_hook",
    "description": "RIGHTWARDS ARROW WITH HOOK",
    "category": "folderol"
  },
  {
    "name": "watch",
    "unicode": "231A",
    "shortcode": "watch",
    "description": "WATCH",
    "category": "thing"
  },
  {
    "name": "hourglass",
    "unicode": "231B",
    "shortcode": "hourglass",
    "description": "HOURGLASS",
    "category": "thing"
  },
  {
    "name": "fast_forward",
    "unicode": "23E9",
    "shortcode": "fast_forward",
    "description": "BLACK RIGHT-POINTING DOUBLE TRIANGLE"
  },
  {
    "name": "rewind",
    "unicode": "23EA",
    "shortcode": "rewind",
    "description": "BLACK LEFT-POINTING DOUBLE TRIANGLE",
    "category": "thing"
  },
  {
    "name": "arrow_double_up",
    "unicode": "23EB",
    "shortcode": "arrow_double_up",
    "description": "BLACK UP-POINTING DOUBLE TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_double_down",
    "unicode": "23EC",
    "shortcode": "arrow_double_down",
    "description": "BLACK DOWN-POINTING DOUBLE TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "alarm_clock",
    "unicode": "23F0",
    "shortcode": "alarm_clock",
    "description": "ALARM CLOCK",
    "category": "thing"
  },
  {
    "name": "hourglass_flowing_sand",
    "unicode": "23F3",
    "shortcode": "hourglass_flowing_sand",
    "description": "HOURGLASS WITH FLOWING SAND",
    "category": "thing"
  },
  {
    "name": "m",
    "unicode": "24C2",
    "shortcode": "m",
    "description": "CIRCLED LATIN CAPITAL LETTER M",
    "category": "folderol"
  },
  {
    "name": "black_small_square",
    "unicode": "25AA",
    "shortcode": "black_small_square",
    "description": "BLACK SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "white_small_square",
    "unicode": "25AB",
    "shortcode": "white_small_square",
    "description": "WHITE SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "arrow_forward",
    "unicode": "25B6",
    "shortcode": "arrow_forward",
    "description": "BLACK RIGHT-POINTING TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_backward",
    "unicode": "25C0",
    "shortcode": "arrow_backward",
    "description": "BLACK LEFT-POINTING TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "white_medium_square",
    "unicode": "25FB",
    "shortcode": "white_medium_square",
    "description": "WHITE MEDIUM SQUARE",
    "category": "folderol"
  },
  {
    "name": "black_medium_square",
    "unicode": "25FC",
    "shortcode": "black_medium_square",
    "description": "BLACK MEDIUM SQUARE",
    "category": "folderol"
  },
  {
    "name": "white_medium_small_square",
    "unicode": "25FD",
    "shortcode": "white_medium_small_square",
    "description": "WHITE MEDIUM SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "black_medium_small_square",
    "unicode": "25FE",
    "shortcode": "black_medium_small_square",
    "description": "BLACK MEDIUM SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "sunny",
    "unicode": "2600",
    "shortcode": "sunny",
    "description": "BLACK SUN WITH RAYS",
    "category": "thing"
  },
  {
    "name": "cloud",
    "unicode": "2601",
    "shortcode": "cloud",
    "description": "CLOUD",
    "category": "thing"
  },
  {
    "name": "phone",
    "unicode": "260E",
    "shortcode": "phone",
    "description": "BLACK TELEPHONE",
    "category": "thing"
  },
  {
    "name": "ballot_box_with_check",
    "unicode": "2611",
    "shortcode": "ballot_box_with_check",
    "description": "BALLOT BOX WITH CHECK",
    "category": "thing"
  },
  {
    "name": "umbrella",
    "unicode": "2614",
    "shortcode": "umbrella",
    "description": "UMBRELLA WITH RAIN DROPS",
    "category": "thing"
  },
  {
    "name": "coffee",
    "unicode": "2615",
    "shortcode": "coffee",
    "description": "HOT BEVERAGE",
    "category": "thing"
  },
  {
    "name": "point_up",
    "unicode": "261D",
    "shortcode": "point_up",
    "description": "WHITE UP POINTING INDEX",
    "category": "people"
  },
  {
    "name": "relaxed",
    "unicode": "263A",
    "shortcode": "relaxed",
    "description": "WHITE SMILING FACE",
    "category": "emotion"
  },
  {
    "name": "aries",
    "unicode": "2648",
    "shortcode": "aries",
    "description": "ARIES",
    "category": "folderol"
  },
  {
    "name": "taurus",
    "unicode": "2649",
    "shortcode": "taurus",
    "description": "TAURUS",
    "category": "folderol"
  },
  {
    "name": "gemini",
    "unicode": "264A",
    "shortcode": "gemini",
    "description": "GEMINI",
    "category": "folderol"
  },
  {
    "name": "cancer",
    "unicode": "264B",
    "shortcode": "cancer",
    "description": "CANCER",
    "category": "folderol"
  },
  {
    "name": "leo",
    "unicode": "264C",
    "shortcode": "leo",
    "description": "LEO",
    "category": "folderol"
  },
  {
    "name": "virgo",
    "unicode": "264D",
    "shortcode": "virgo",
    "description": "VIRGO",
    "category": "folderol"
  },
  {
    "name": "libra",
    "unicode": "264E",
    "shortcode": "libra",
    "description": "LIBRA",
    "category": "folderol"
  },
  {
    "name": "scorpius",
    "unicode": "264F",
    "shortcode": "scorpius",
    "description": "SCORPIUS",
    "category": "folderol"
  },
  {
    "name": "sagittarius",
    "unicode": "2650",
    "shortcode": "sagittarius",
    "description": "SAGITTARIUS",
    "category": "folderol"
  },
  {
    "name": "capricorn",
    "unicode": "2651",
    "shortcode": "capricorn",
    "description": "CAPRICORN",
    "category": "folderol"
  },
  {
    "name": "aquarius",
    "unicode": "2652",
    "shortcode": "aquarius",
    "description": "AQUARIUS",
    "category": "folderol"
  },
  {
    "name": "pisces",
    "unicode": "2653",
    "shortcode": "pisces",
    "description": "PISCES",
    "category": "folderol"
  },
  {
    "name": "spades",
    "unicode": "2660",
    "shortcode": "spades",
    "description": "BLACK SPADE SUIT",
    "category": "folderol"
  },
  {
    "name": "clubs",
    "unicode": "2663",
    "shortcode": "clubs",
    "description": "BLACK CLUB SUIT",
    "category": "folderol"
  },
  {
    "name": "hearts",
    "unicode": "2665",
    "shortcode": "hearts",
    "description": "BLACK HEART SUIT",
    "category": "folderol"
  },
  {
    "name": "diamonds",
    "unicode": "2666",
    "shortcode": "diamonds",
    "description": "BLACK DIAMOND SUIT",
    "category": "folderol"
  },
  {
    "name": "hotsprings",
    "unicode": "2668",
    "shortcode": "hotsprings",
    "description": "HOT SPRINGS",
    "category": "thing"
  },
  {
    "name": "recycle",
    "unicode": "267B",
    "shortcode": "recycle",
    "description": "BLACK UNIVERSAL RECYCLING SYMBOL",
    "category": "folderol"
  },
  {
    "name": "wheelchair",
    "unicode": "267F",
    "shortcode": "wheelchair",
    "description": "WHEELCHAIR SYMBOL",
    "category": "thing"
  },
  {
    "name": "anchor",
    "unicode": "2693",
    "shortcode": "anchor",
    "description": "ANCHOR",
    "category": "thing"
  },
  {
    "name": "warning",
    "unicode": "26A0",
    "shortcode": "warning",
    "description": "WARNING SIGN",
    "category": "thing"
  },
  {
    "name": "zap",
    "unicode": "26A1",
    "shortcode": "zap",
    "description": "HIGH VOLTAGE SIGN",
    "category": "thing"
  },
  {
    "name": "white_circle",
    "unicode": "26AA",
    "shortcode": "white_circle",
    "description": "MEDIUM WHITE CIRCLE",
    "category": "folderol"
  },
  {
    "name": "black_circle",
    "unicode": "26AB",
    "shortcode": "black_circle",
    "description": "MEDIUM BLACK CIRCLE",
    "category": "folderol"
  },
  {
    "name": "soccer",
    "unicode": "26BD",
    "shortcode": "soccer",
    "description": "SOCCER BALL",
    "category": "thing"
  },
  {
    "name": "baseball",
    "unicode": "26BE",
    "shortcode": "baseball",
    "description": "BASEBALL",
    "category": "thing"
  },
  {
    "name": "snowman",
    "unicode": "26C4",
    "shortcode": "snowman",
    "description": "SNOWMAN WITHOUT SNOW",
    "category": "thing"
  },
  {
    "name": "partly_sunny",
    "unicode": "26C5",
    "shortcode": "partly_sunny",
    "description": "SUN BEHIND CLOUD",
    "category": "thing"
  },
  {
    "name": "ophiuchus",
    "unicode": "26CE",
    "shortcode": "ophiuchus",
    "description": "OPHIUCHUS",
    "category": "folderol"
  },
  {
    "name": "no_entry",
    "unicode": "26D4",
    "shortcode": "no_entry",
    "description": "NO ENTRY",
    "category": "folderol"
  },
  {
    "name": "church",
    "unicode": "26EA",
    "shortcode": "church",
    "description": "CHURCH",
    "category": "travel"
  },
  {
    "name": "fountain",
    "unicode": "26F2",
    "shortcode": "fountain",
    "description": "FOUNTAIN",
    "category": "travel"
  },
  {
    "name": "golf",
    "unicode": "26F3",
    "shortcode": "golf",
    "description": "FLAG IN HOLE",
    "category": "travel"
  },
  {
    "name": "boat",
    "unicode": "26F5",
    "shortcode": "boat",
    "description": "SAILBOAT",
    "category": "travel"
  },
  {
    "name": "tent",
    "unicode": "26FA",
    "shortcode": "tent",
    "description": "TENT",
    "category": "travel"
  },
  {
    "name": "fuelpump",
    "unicode": "26FD",
    "shortcode": "fuelpump",
    "description": "FUEL PUMP",
    "category": "travel"
  },
  {
    "name": "scissors",
    "unicode": "2702",
    "shortcode": "scissors",
    "description": "BLACK SCISSORS",
    "category": "thing"
  },
  {
    "name": "white_check_mark",
    "unicode": "2705",
    "shortcode": "white_check_mark",
    "description": "WHITE HEAVY CHECK MARK",
    "category": "folderol"
  },
  {
    "name": "airplane",
    "unicode": "2708",
    "shortcode": "airplane",
    "description": "AIRPLANE",
    "category": "thing"
  },
  {
    "name": "email",
    "unicode": "2709",
    "shortcode": "email",
    "description": "ENVELOPE",
    "category": "thing"
  },
  {
    "name": "fist",
    "unicode": "270A",
    "shortcode": "fist",
    "description": "RAISED FIST",
    "category": "people"
  },
  {
    "name": "hand",
    "unicode": "270B",
    "shortcode": "hand",
    "description": "RAISED HAND",
    "category": "people"
  },
  {
    "name": "v",
    "unicode": "270C",
    "shortcode": "v",
    "description": "VICTORY HAND",
    "category": "folderol"
  },
  {
    "name": "pencil2",
    "unicode": "270F",
    "shortcode": "pencil2",
    "description": "PENCIL",
    "category": "thing"
  },
  {
    "name": "black_nib",
    "unicode": "2712",
    "shortcode": "black_nib",
    "description": "BLACK NIB",
    "category": "folderol"
  },
  {
    "name": "heavy_check_mark",
    "unicode": "2714",
    "shortcode": "heavy_check_mark",
    "description": "HEAVY CHECK MARK",
    "category": "folderol"
  },
  {
    "name": "heavy_multiplication_x",
    "unicode": "2716",
    "shortcode": "heavy_multiplication_x",
    "description": "HEAVY MULTIPLICATION X",
    "category": "folderol"
  },
  {
    "name": "sparkles",
    "unicode": "2728",
    "shortcode": "sparkles",
    "description": "SPARKLES",
    "category": "folderol"
  },
  {
    "name": "eight_spoked_asterisk",
    "unicode": "2733",
    "shortcode": "eight_spoked_asterisk",
    "description": "EIGHT SPOKED ASTERISK",
    "category": "folderol"
  },
  {
    "name": "eight_pointed_black_star",
    "unicode": "2734",
    "shortcode": "eight_pointed_black_star",
    "description": "EIGHT POINTED BLACK STAR",
    "category": "folderol"
  },
  {
    "name": "snowflake",
    "unicode": "2744",
    "shortcode": "snowflake",
    "description": "SNOWFLAKE",
    "category": "thing"
  },
  {
    "name": "sparkle",
    "unicode": "2747",
    "shortcode": "sparkle",
    "description": "SPARKLE",
    "category": "thing"
  },
  {
    "name": "x",
    "unicode": "274C",
    "shortcode": "x",
    "description": "CROSS MARK",
    "category": "folderol"
  },
  {
    "name": "negative_squared_cross_mark",
    "unicode": "274E",
    "shortcode": "negative_squared_cross_mark",
    "description": "NEGATIVE SQUARED CROSS MARK",
    "category": "folderol"
  },
  {
    "name": "question",
    "unicode": "2753",
    "shortcode": "question",
    "description": "BLACK QUESTION MARK ORNAMENT",
    "category": "folderol"
  },
  {
    "name": "grey_question",
    "unicode": "2754",
    "shortcode": "grey_question",
    "description": "WHITE QUESTION MARK ORNAMENT",
    "category": "folderol"
  },
  {
    "name": "grey_exclamation",
    "unicode": "2755",
    "shortcode": "grey_exclamation",
    "description": "WHITE EXCLAMATION MARK ORNAMENT",
    "category": "folderol"
  },
  {
    "name": "exclamation",
    "unicode": "2757",
    "shortcode": "exclamation",
    "description": "HEAVY EXCLAMATION MARK SYMBOL",
    "category": "folderol"
  },
  {
    "name": "heart",
    "unicode": "2764",
    "shortcode": "heart",
    "description": "HEAVY BLACK HEART",
    "category": "folderol"
  },
  {
    "name": "heavy_plus_sign",
    "unicode": "2795",
    "shortcode": "heavy_plus_sign",
    "description": "HEAVY PLUS SIGN",
    "category": "folderol"
  },
  {
    "name": "heavy_minus_sign",
    "unicode": "2796",
    "shortcode": "heavy_minus_sign",
    "description": "HEAVY MINUS SIGN",
    "category": "folderol"
  },
  {
    "name": "heavy_division_sign",
    "unicode": "2797",
    "shortcode": "heavy_division_sign",
    "description": "HEAVY DIVISION SIGN",
    "category": "folderol"
  },
  {
    "name": "arrow_right",
    "unicode": "27A1",
    "shortcode": "arrow_right",
    "description": "BLACK RIGHTWARDS ARROW",
    "category": "folderol"
  },
  {
    "name": "curly_loop",
    "unicode": "27B0",
    "shortcode": "curly_loop",
    "description": "CURLY LOOP",
    "category": "folderol"
  },
  {
    "name": "loop",
    "unicode": "27BF",
    "shortcode": "loop",
    "description": "DOUBLE CURLY LOOP",
    "category": "folderol"
  },
  {
    "name": "arrow_heading_up",
    "unicode": "2934",
    "shortcode": "arrow_heading_up",
    "description": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS",
    "category": "folderol"
  },
  {
    "name": "arrow_heading_down",
    "unicode": "2935",
    "shortcode": "arrow_heading_down",
    "description": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS",
    "category": "folderol"
  },
  {
    "name": "arrow_left",
    "unicode": "2B05",
    "shortcode": "arrow_left",
    "description": "LEFTWARDS BLACK ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_up",
    "unicode": "2B06",
    "shortcode": "arrow_up",
    "description": "UPWARDS BLACK ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_down",
    "unicode": "2B07",
    "shortcode": "arrow_down",
    "description": "DOWNWARDS BLACK ARROW",
    "category": "folderol"
  },
  {
    "name": "black_large_square",
    "unicode": "2B1B",
    "shortcode": "black_large_square",
    "description": "BLACK LARGE SQUARE",
    "category": "folderol"
  },
  {
    "name": "white_large_square",
    "unicode": "2B1C",
    "shortcode": "white_large_square",
    "description": "WHITE LARGE SQUARE",
    "category": "folderol"
  },
  {
    "name": "star",
    "unicode": "2B50",
    "shortcode": "star",
    "description": "WHITE MEDIUM STAR",
    "category": "thing"
  },
  {
    "name": "o",
    "unicode": "2B55",
    "shortcode": "o",
    "description": "HEAVY LARGE CIRCLE",
    "category": "folderol"
  },
  {
    "name": "wavy_dash",
    "unicode": "3030",
    "shortcode": "wavy_dash",
    "description": "WAVY DASH",
    "category": "folderol"
  },
  {
    "name": "part_alternation_mark",
    "unicode": "303D",
    "shortcode": "part_alternation_mark",
    "description": "PART ALTERNATION MARK",
    "category": "folderol"
  },
  {
    "name": "congratulations",
    "unicode": "3297",
    "shortcode": "congratulations",
    "description": "CIRCLED IDEOGRAPH CONGRATULATION",
    "category": "folderol"
  },
  {
    "name": "secret",
    "unicode": "3299",
    "shortcode": "secret",
    "description": "CIRCLED IDEOGRAPH SECRET",
    "category": "folderol"
  },
  {
    "name": "mahjong",
    "unicode": "1F004",
    "shortcode": "mahjong",
    "description": "MAHJONG TILE RED DRAGON",
    "category": "folderol"
  },
  {
    "name": "black_joker",
    "unicode": "1F0CF",
    "shortcode": "black_joker",
    "description": "PLAYING CARD BLACK JOKER",
    "category": "folderol"
  },
  {
    "name": "a",
    "unicode": "1F170",
    "shortcode": "a",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER A",
    "category": "folderol"
  },
  {
    "name": "b",
    "unicode": "1F171",
    "shortcode": "b",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER B",
    "category": "folderol"
  },
  {
    "name": "o2",
    "unicode": "1F17E",
    "shortcode": "o2",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER O",
    "category": "folderol"
  },
  {
    "name": "parking",
    "unicode": "1F17F",
    "shortcode": "parking",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER P",
    "category": "folderol"
  },
  {
    "name": "ab",
    "unicode": "1F18E",
    "shortcode": "ab",
    "description": "NEGATIVE SQUARED AB",
    "category": "folderol"
  },
  {
    "name": "cl",
    "unicode": "1F191",
    "shortcode": "cl",
    "description": "SQUARED CL",
    "category": "folderol"
  },
  {
    "name": "cool",
    "unicode": "1F192",
    "shortcode": "cool",
    "description": "SQUARED COOL",
    "category": "folderol"
  },
  {
    "name": "free",
    "unicode": "1F193",
    "shortcode": "free",
    "description": "SQUARED FREE",
    "category": "folderol"
  },
  {
    "name": "id",
    "unicode": "1F194",
    "shortcode": "id",
    "description": "SQUARED ID",
    "category": "folderol"
  },
  {
    "name": "new",
    "unicode": "1F195",
    "shortcode": "new",
    "description": "SQUARED NEW",
    "category": "folderol"
  },
  {
    "name": "ng",
    "unicode": "1F196",
    "shortcode": "ng",
    "description": "SQUARED NG",
    "category": "folderol"
  },
  {
    "name": "ok",
    "unicode": "1F197",
    "shortcode": "ok",
    "description": "SQUARED OK",
    "category": "folderol"
  },
  {
    "name": "sos",
    "unicode": "1F198",
    "shortcode": "sos",
    "description": "SQUARED SOS",
    "category": "folderol"
  },
  {
    "name": "up",
    "unicode": "1F199",
    "shortcode": "up",
    "description": "SQUARED UP WITH EXCLAMATION MARK",
    "category": "folderol"
  },
  {
    "name": "vs",
    "unicode": "1F19A",
    "shortcode": "vs",
    "description": "SQUARED VS",
    "category": "folderol"
  },
  {
    "name": "koko",
    "unicode": "1F201",
    "shortcode": "koko",
    "description": "SQUARED KATAKANA KOKO",
    "category": "folderol"
  },
  {
    "name": "sa",
    "unicode": "1F202",
    "shortcode": "sa",
    "description": "SQUARED KATAKANA SA",
    "category": "folderol"
  },
  {
    "name": "u7121",
    "unicode": "1F21A",
    "shortcode": "u7121",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7121",
    "category": "folderol"
  },
  {
    "name": "u6307",
    "unicode": "1F22F",
    "shortcode": "u6307",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6307",
    "category": "folderol"
  },
  {
    "name": "u7981",
    "unicode": "1F232",
    "shortcode": "u7981",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7981",
    "category": "folderol"
  },
  {
    "name": "u7a7a",
    "unicode": "1F233",
    "shortcode": "u7a7a",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A",
    "category": "folderol"
  },
  {
    "name": "u5408",
    "unicode": "1F234",
    "shortcode": "u5408",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-5408",
    "category": "folderol"
  },
  {
    "name": "u6e80",
    "unicode": "1F235",
    "shortcode": "u6e80",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6E80",
    "category": "folderol"
  },
  {
    "name": "u6709",
    "unicode": "1F236",
    "shortcode": "u6709",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6709",
    "category": "folderol"
  },
  {
    "name": "u6708",
    "unicode": "1F237",
    "shortcode": "u6708",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6708",
    "category": "folderol"
  },
  {
    "name": "u7533",
    "unicode": "1F238",
    "shortcode": "u7533",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7533",
    "category": "folderol"
  },
  {
    "name": "u5272",
    "unicode": "1F239",
    "shortcode": "u5272",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-5272",
    "category": "folderol"
  },
  {
    "name": "u55b6",
    "unicode": "1F23A",
    "shortcode": "u55b6",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-55B6",
    "category": "folderol"
  },
  {
    "name": "ideograph_advantage",
    "unicode": "1F250",
    "shortcode": "ideograph_advantage",
    "description": "CIRCLED IDEOGRAPH ADVANTAGE",
    "category": "folderol"
  },
  {
    "name": "accept",
    "unicode": "1F251",
    "shortcode": "accept",
    "description": "CIRCLED IDEOGRAPH ACCEPT",
    "category": "folderol"
  },
  {
    "name": "cyclone",
    "unicode": "1F300",
    "shortcode": "cyclone",
    "description": "CYCLONE",
    "category": "thing"
  },
  {
    "name": "foggy",
    "unicode": "1F301",
    "shortcode": "foggy",
    "description": "FOGGY",
    "category": "thing"
  },
  {
    "name": "closed_umbrella",
    "unicode": "1F302",
    "shortcode": "closed_umbrella",
    "description": "CLOSED UMBRELLA",
    "category": "thing"
  },
  {
    "name": "night_with_stars",
    "unicode": "1F303",
    "shortcode": "night_with_stars",
    "description": "NIGHT WITH STARS",
    "category": "thing"
  },
  {
    "name": "sunrise_over_mountains",
    "unicode": "1F304",
    "shortcode": "sunrise_over_mountains",
    "description": "SUNRISE OVER MOUNTAINS",
    "category": "thing"
  },
  {
    "name": "sunrise",
    "unicode": "1F305",
    "shortcode": "sunrise",
    "description": "SUNRISE",
    "category": "thing"
  },
  {
    "name": "city_sunset",
    "unicode": "1F306",
    "shortcode": "city_sunset",
    "description": "CITYSCAPE AT DUSK",
    "category": "thing"
  },
  {
    "name": "city_sunrise",
    "unicode": "1F307",
    "shortcode": "city_sunrise",
    "description": "SUNSET OVER BUILDINGS",
    "category": "thing"
  },
  {
    "name": "rainbow",
    "unicode": "1F308",
    "shortcode": "rainbow",
    "description": "RAINBOW",
    "category": "thing"
  },
  {
    "name": "bridge_at_night",
    "unicode": "1F309",
    "shortcode": "bridge_at_night",
    "description": "BRIDGE AT NIGHT",
    "category": "thing"
  },
  {
    "name": "ocean",
    "unicode": "1F30A",
    "shortcode": "ocean",
    "description": "WATER WAVE",
    "category": "thing"
  },
  {
    "name": "volcano",
    "unicode": "1F30B",
    "shortcode": "volcano",
    "description": "VOLCANO",
    "category": "thing"
  },
  {
    "name": "milky_way",
    "unicode": "1F30C",
    "shortcode": "milky_way",
    "description": "MILKY WAY",
    "category": "thing"
  },
  {
    "name": "earth_africa",
    "unicode": "1F30D",
    "shortcode": "earth_africa",
    "description": "EARTH GLOBE EUROPE-AFRICA",
    "category": "thing"
  },
  {
    "name": "earth_americas",
    "unicode": "1F30E",
    "shortcode": "earth_americas",
    "description": "EARTH GLOBE AMERICAS",
    "category": "thing"
  },
  {
    "name": "earth_asia",
    "unicode": "1F30F",
    "shortcode": "earth_asia",
    "description": "EARTH GLOBE ASIA-AUSTRALIA",
    "category": "thing"
  },
  {
    "name": "globe_with_meridians",
    "unicode": "1F310",
    "shortcode": "globe_with_meridians",
    "description": "GLOBE WITH MERIDIANS",
    "category": "thing"
  },
  {
    "name": "new_moon",
    "unicode": "1F311",
    "shortcode": "new_moon",
    "description": "NEW MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "waxing_crescent_moon",
    "unicode": "1F312",
    "shortcode": "waxing_crescent_moon",
    "description": "WAXING CRESCENT MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "first_quarter_moon",
    "unicode": "1F313",
    "shortcode": "first_quarter_moon",
    "description": "FIRST QUARTER MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "moon",
    "unicode": "1F314",
    "shortcode": "moon",
    "description": "WAXING GIBBOUS MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "full_moon",
    "unicode": "1F315",
    "shortcode": "full_moon",
    "description": "FULL MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "waning_gibbous_moon",
    "unicode": "1F316",
    "shortcode": "waning_gibbous_moon",
    "description": "WANING GIBBOUS MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "last_quarter_moon",
    "unicode": "1F317",
    "shortcode": "last_quarter_moon",
    "description": "LAST QUARTER MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "waning_crescent_moon",
    "unicode": "1F318",
    "shortcode": "waning_crescent_moon",
    "description": "WANING CRESCENT MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "crescent_moon",
    "unicode": "1F319",
    "shortcode": "crescent_moon",
    "description": "CRESCENT MOON",
    "category": "thing"
  },
  {
    "name": "new_moon_with_face",
    "unicode": "1F31A",
    "shortcode": "new_moon_with_face",
    "description": "NEW MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "first_quarter_moon_with_face",
    "unicode": "1F31B",
    "shortcode": "first_quarter_moon_with_face",
    "description": "FIRST QUARTER MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "last_quarter_moon_with_face",
    "unicode": "1F31C",
    "shortcode": "last_quarter_moon_with_face",
    "description": "LAST QUARTER MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "full_moon_with_face",
    "unicode": "1F31D",
    "shortcode": "full_moon_with_face",
    "description": "FULL MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "sun_with_face",
    "unicode": "1F31E",
    "shortcode": "sun_with_face",
    "description": "SUN WITH FACE",
    "category": "thing"
  },
  {
    "name": "star2",
    "unicode": "1F31F",
    "shortcode": "star2",
    "description": "GLOWING STAR",
    "category": "thing"
  },
  {
    "name": "stars",
    "unicode": "1F320",
    "shortcode": "stars",
    "description": "SHOOTING STAR",
    "category": "thing"
  },
  {
    "name": "chestnut",
    "unicode": "1F330",
    "shortcode": "chestnut",
    "description": "CHESTNUT",
    "category": "thing"
  },
  {
    "name": "seedling",
    "unicode": "1F331",
    "shortcode": "seedling",
    "description": "SEEDLING",
    "category": "thing"
  },
  {
    "name": "evergreen_tree",
    "unicode": "1F332",
    "shortcode": "evergreen_tree",
    "description": "EVERGREEN TREE",
    "category": "thing"
  },
  {
    "name": "deciduous_tree",
    "unicode": "1F333",
    "shortcode": "deciduous_tree",
    "description": "DECIDUOUS TREE",
    "category": "thing"
  },
  {
    "name": "palm_tree",
    "unicode": "1F334",
    "shortcode": "palm_tree",
    "description": "PALM TREE",
    "category": "thing"
  },
  {
    "name": "cactus",
    "unicode": "1F335",
    "shortcode": "cactus",
    "description": "CACTUS",
    "category": "thing"
  },
  {
    "name": "tulip",
    "unicode": "1F337",
    "shortcode": "tulip",
    "description": "TULIP",
    "category": "thing"
  },
  {
    "name": "cherry_blossom",
    "unicode": "1F338",
    "shortcode": "cherry_blossom",
    "description": "CHERRY BLOSSOM",
    "category": "thing"
  },
  {
    "name": "rose",
    "unicode": "1F339",
    "shortcode": "rose",
    "description": "ROSE",
    "category": "thing"
  },
  {
    "name": "hibiscus",
    "unicode": "1F33A",
    "shortcode": "hibiscus",
    "description": "HIBISCUS",
    "category": "thing"
  },
  {
    "name": "sunflower",
    "unicode": "1F33B",
    "shortcode": "sunflower",
    "description": "SUNFLOWER",
    "category": "thing"
  },
  {
    "name": "blossom",
    "unicode": "1F33C",
    "shortcode": "blossom",
    "description": "BLOSSOM",
    "category": "thing"
  },
  {
    "name": "corn",
    "unicode": "1F33D",
    "shortcode": "corn",
    "description": "EAR OF MAIZE",
    "category": "thing"
  },
  {
    "name": "ear_of_rice",
    "unicode": "1F33E",
    "shortcode": "ear_of_rice",
    "description": "EAR OF RICE",
    "category": "thing"
  },
  {
    "name": "herb",
    "unicode": "1F33F",
    "shortcode": "herb",
    "description": "HERB",
    "category": "thing"
  },
  {
    "name": "four_leaf_clover",
    "unicode": "1F340",
    "shortcode": "four_leaf_clover",
    "description": "FOUR LEAF CLOVER",
    "category": "thing"
  },
  {
    "name": "maple_leaf",
    "unicode": "1F341",
    "shortcode": "maple_leaf",
    "description": "MAPLE LEAF",
    "category": "thing"
  },
  {
    "name": "fallen_leaf",
    "unicode": "1F342",
    "shortcode": "fallen_leaf",
    "description": "FALLEN LEAF",
    "category": "thing"
  },
  {
    "name": "leaves",
    "unicode": "1F343",
    "shortcode": "leaves",
    "description": "LEAF FLUTTERING IN WIND",
    "category": "thing"
  },
  {
    "name": "mushroom",
    "unicode": "1F344",
    "shortcode": "mushroom",
    "description": "MUSHROOM",
    "category": "food"
  },
  {
    "name": "tomato",
    "unicode": "1F345",
    "shortcode": "tomato",
    "description": "TOMATO",
    "category": "food"
  },
  {
    "name": "eggplant",
    "unicode": "1F346",
    "shortcode": "eggplant",
    "description": "AUBERGINE",
    "category": "food"
  },
  {
    "name": "grapes",
    "unicode": "1F347",
    "shortcode": "grapes",
    "description": "GRAPES",
    "category": "food"
  },
  {
    "name": "melon",
    "unicode": "1F348",
    "shortcode": "melon",
    "description": "MELON",
    "category": "food"
  },
  {
    "name": "watermelon",
    "unicode": "1F349",
    "shortcode": "watermelon",
    "description": "WATERMELON",
    "category": "food"
  },
  {
    "name": "tangerine",
    "unicode": "1F34A",
    "shortcode": "tangerine",
    "description": "TANGERINE",
    "category": "food"
  },
  {
    "name": "lemon",
    "unicode": "1F34B",
    "shortcode": "lemon",
    "description": "LEMON",
    "category": "food"
  },
  {
    "name": "banana",
    "unicode": "1F34C",
    "shortcode": "banana",
    "description": "BANANA",
    "category": "food"
  },
  {
    "name": "pineapple",
    "unicode": "1F34D",
    "shortcode": "pineapple",
    "description": "PINEAPPLE",
    "category": "food"
  },
  {
    "name": "apple",
    "unicode": "1F34E",
    "shortcode": "apple",
    "description": "RED APPLE",
    "category": "food"
  },
  {
    "name": "green_apple",
    "unicode": "1F34F",
    "shortcode": "green_apple",
    "description": "GREEN APPLE",
    "category": "food"
  },
  {
    "name": "pear",
    "unicode": "1F350",
    "shortcode": "pear",
    "description": "PEAR",
    "category": "food"
  },
  {
    "name": "peach",
    "unicode": "1F351",
    "shortcode": "peach",
    "description": "PEACH",
    "category": "food"
  },
  {
    "name": "cherries",
    "unicode": "1F352",
    "shortcode": "cherries",
    "description": "CHERRIES",
    "category": "food"
  },
  {
    "name": "strawberry",
    "unicode": "1F353",
    "shortcode": "strawberry",
    "description": "STRAWBERRY",
    "category": "food"
  },
  {
    "name": "hamburger",
    "unicode": "1F354",
    "shortcode": "hamburger",
    "description": "HAMBURGER",
    "category": "food"
  },
  {
    "name": "pizza",
    "unicode": "1F355",
    "shortcode": "pizza",
    "description": "SLICE OF PIZZA",
    "category": "food"
  },
  {
    "name": "meat_on_bone",
    "unicode": "1F356",
    "shortcode": "meat_on_bone",
    "description": "MEAT ON BONE",
    "category": "food"
  },
  {
    "name": "poultry_leg",
    "unicode": "1F357",
    "shortcode": "poultry_leg",
    "description": "POULTRY LEG",
    "category": "food"
  },
  {
    "name": "rice_cracker",
    "unicode": "1F358",
    "shortcode": "rice_cracker",
    "description": "RICE CRACKER",
    "category": "food"
  },
  {
    "name": "rice_ball",
    "unicode": "1F359",
    "shortcode": "rice_ball",
    "description": "RICE BALL",
    "category": "food"
  },
  {
    "name": "rice",
    "unicode": "1F35A",
    "shortcode": "rice",
    "description": "COOKED RICE",
    "category": "food"
  },
  {
    "name": "curry",
    "unicode": "1F35B",
    "shortcode": "curry",
    "description": "CURRY AND RICE",
    "category": "food"
  },
  {
    "name": "ramen",
    "unicode": "1F35C",
    "shortcode": "ramen",
    "description": "STEAMING BOWL",
    "category": "food"
  },
  {
    "name": "spaghetti",
    "unicode": "1F35D",
    "shortcode": "spaghetti",
    "description": "SPAGHETTI",
    "category": "food"
  },
  {
    "name": "bread",
    "unicode": "1F35E",
    "shortcode": "bread",
    "description": "BREAD",
    "category": "food"
  },
  {
    "name": "fries",
    "unicode": "1F35F",
    "shortcode": "fries",
    "description": "FRENCH FRIES",
    "category": "food"
  },
  {
    "name": "sweet_potato",
    "unicode": "1F360",
    "shortcode": "sweet_potato",
    "description": "ROASTED SWEET POTATO",
    "category": "food"
  },
  {
    "name": "dango",
    "unicode": "1F361",
    "shortcode": "dango",
    "description": "DANGO",
    "category": "food"
  },
  {
    "name": "oden",
    "unicode": "1F362",
    "shortcode": "oden",
    "description": "ODEN",
    "category": "food"
  },
  {
    "name": "sushi",
    "unicode": "1F363",
    "shortcode": "sushi",
    "description": "SUSHI",
    "category": "food"
  },
  {
    "name": "fried_shrimp",
    "unicode": "1F364",
    "shortcode": "fried_shrimp",
    "description": "FRIED SHRIMP",
    "category": "food"
  },
  {
    "name": "fish_cake",
    "unicode": "1F365",
    "shortcode": "fish_cake",
    "description": "FISH CAKE WITH SWIRL DESIGN",
    "category": "food"
  },
  {
    "name": "icecream",
    "unicode": "1F366",
    "shortcode": "icecream",
    "description": "SOFT ICE CREAM",
    "category": "food"
  },
  {
    "name": "shaved_ice",
    "unicode": "1F367",
    "shortcode": "shaved_ice",
    "description": "SHAVED ICE",
    "category": "food"
  },
  {
    "name": "ice_cream",
    "unicode": "1F368",
    "shortcode": "ice_cream",
    "description": "ICE CREAM",
    "category": "food"
  },
  {
    "name": "doughnut",
    "unicode": "1F369",
    "shortcode": "doughnut",
    "description": "DOUGHNUT",
    "category": "food"
  },
  {
    "name": "cookie",
    "unicode": "1F36A",
    "shortcode": "cookie",
    "description": "COOKIE",
    "category": "food"
  },
  {
    "name": "chocolate_bar",
    "unicode": "1F36B",
    "shortcode": "chocolate_bar",
    "description": "CHOCOLATE BAR",
    "category": "food"
  },
  {
    "name": "candy",
    "unicode": "1F36C",
    "shortcode": "candy",
    "description": "CANDY",
    "category": "food"
  },
  {
    "name": "lollipop",
    "unicode": "1F36D",
    "shortcode": "lollipop",
    "description": "LOLLIPOP",
    "category": "food"
  },
  {
    "name": "custard",
    "unicode": "1F36E",
    "shortcode": "custard",
    "description": "CUSTARD",
    "category": "food"
  },
  {
    "name": "honey_pot",
    "unicode": "1F36F",
    "shortcode": "honey_pot",
    "description": "HONEY POT",
    "category": "food"
  },
  {
    "name": "cake",
    "unicode": "1F370",
    "shortcode": "cake",
    "description": "SHORTCAKE",
    "category": "food"
  },
  {
    "name": "bento",
    "unicode": "1F371",
    "shortcode": "bento",
    "description": "BENTO BOX",
    "category": "food"
  },
  {
    "name": "stew",
    "unicode": "1F372",
    "shortcode": "stew",
    "description": "POT OF FOOD",
    "category": "food"
  },
  {
    "name": "egg",
    "unicode": "1F373",
    "shortcode": "egg",
    "description": "COOKING",
    "category": "food"
  },
  {
    "name": "fork_and_knife",
    "unicode": "1F374",
    "shortcode": "fork_and_knife",
    "description": "FORK AND KNIFE",
    "category": "food"
  },
  {
    "name": "tea",
    "unicode": "1F375",
    "shortcode": "tea",
    "description": "TEACUP WITHOUT HANDLE",
    "category": "food"
  },
  {
    "name": "sake",
    "unicode": "1F376",
    "shortcode": "sake",
    "description": "SAKE BOTTLE AND CUP",
    "category": "food"
  },
  {
    "name": "wine_glass",
    "unicode": "1F377",
    "shortcode": "wine_glass",
    "description": "WINE GLASS",
    "category": "food"
  },
  {
    "name": "cocktail",
    "unicode": "1F378",
    "shortcode": "cocktail",
    "description": "COCKTAIL GLASS",
    "category": "food"
  },
  {
    "name": "tropical_drink",
    "unicode": "1F379",
    "shortcode": "tropical_drink",
    "description": "TROPICAL DRINK",
    "category": "food"
  },
  {
    "name": "beer",
    "unicode": "1F37A",
    "shortcode": "beer",
    "description": "BEER MUG",
    "category": "food"
  },
  {
    "name": "beers",
    "unicode": "1F37B",
    "shortcode": "beers",
    "description": "CLINKING BEER MUGS",
    "category": "food"
  },
  {
    "name": "baby_bottle",
    "unicode": "1F37C",
    "shortcode": "baby_bottle",
    "description": "BABY BOTTLE",
    "category": "food"
  },
  {
    "name": "ribbon",
    "unicode": "1F380",
    "shortcode": "ribbon",
    "description": "RIBBON",
    "category": "thing"
  },
  {
    "name": "gift",
    "unicode": "1F381",
    "shortcode": "gift",
    "description": "WRAPPED PRESENT",
    "category": "thing"
  },
  {
    "name": "birthday",
    "unicode": "1F382",
    "shortcode": "birthday",
    "description": "BIRTHDAY CAKE",
    "category": "thing"
  },
  {
    "name": "jack_o_lantern",
    "unicode": "1F383",
    "shortcode": "jack_o_lantern",
    "description": "JACK-O-LANTERN",
    "category": "thing"
  },
  {
    "name": "christmas_tree",
    "unicode": "1F384",
    "shortcode": "christmas_tree",
    "description": "CHRISTMAS TREE",
    "category": "thing"
  },
  {
    "name": "santa",
    "unicode": "1F385",
    "shortcode": "santa",
    "description": "FATHER CHRISTMAS",
    "category": "thing"
  },
  {
    "name": "fireworks",
    "unicode": "1F386",
    "shortcode": "fireworks",
    "description": "FIREWORKS",
    "category": "thing"
  },
  {
    "name": "sparkler",
    "unicode": "1F387",
    "shortcode": "sparkler",
    "description": "FIREWORK SPARKLER",
    "category": "thing"
  },
  {
    "name": "balloon",
    "unicode": "1F388",
    "shortcode": "balloon",
    "description": "BALLOON",
    "category": "thing"
  },
  {
    "name": "tada",
    "unicode": "1F389",
    "shortcode": "tada",
    "description": "PARTY POPPER",
    "category": "thing"
  },
  {
    "name": "confetti_ball",
    "unicode": "1F38A",
    "shortcode": "confetti_ball",
    "description": "CONFETTI BALL",
    "category": "thing"
  },
  {
    "name": "tanabata_tree",
    "unicode": "1F38B",
    "shortcode": "tanabata_tree",
    "description": "TANABATA TREE",
    "category": "thing"
  },
  {
    "name": "crossed_flags",
    "unicode": "1F38C",
    "shortcode": "crossed_flags",
    "description": "CROSSED FLAGS",
    "category": "thing"
  },
  {
    "name": "bamboo",
    "unicode": "1F38D",
    "shortcode": "bamboo",
    "description": "PINE DECORATION",
    "category": "thing"
  },
  {
    "name": "dolls",
    "unicode": "1F38E",
    "shortcode": "dolls",
    "description": "JAPANESE DOLLS",
    "category": "thing"
  },
  {
    "name": "flags",
    "unicode": "1F38F",
    "shortcode": "flags",
    "description": "CARP STREAMER",
    "category": "thing"
  },
  {
    "name": "wind_chime",
    "unicode": "1F390",
    "shortcode": "wind_chime",
    "description": "WIND CHIME",
    "category": "thing"
  },
  {
    "name": "rice_scene",
    "unicode": "1F391",
    "shortcode": "rice_scene",
    "description": "MOON VIEWING CEREMONY",
    "category": "thing"
  },
  {
    "name": "school_satchel",
    "unicode": "1F392",
    "shortcode": "school_satchel",
    "description": "SCHOOL SATCHEL",
    "category": "thing"
  },
  {
    "name": "mortar_board",
    "unicode": "1F393",
    "shortcode": "mortar_board",
    "description": "GRADUATION CAP",
    "category": "thing"
  },
  {
    "name": "carousel_horse",
    "unicode": "1F3A0",
    "shortcode": "carousel_horse",
    "description": "CAROUSEL HORSE",
    "category": "thing"
  },
  {
    "name": "ferris_wheel",
    "unicode": "1F3A1",
    "shortcode": "ferris_wheel",
    "description": "FERRIS WHEEL",
    "category": "thing"
  },
  {
    "name": "roller_coaster",
    "unicode": "1F3A2",
    "shortcode": "roller_coaster",
    "description": "ROLLER COASTER",
    "category": "thing"
  },
  {
    "name": "fishing_pole_and_fish",
    "unicode": "1F3A3",
    "shortcode": "fishing_pole_and_fish",
    "description": "FISHING POLE AND FISH",
    "category": "thing"
  },
  {
    "name": "microphone",
    "unicode": "1F3A4",
    "shortcode": "microphone",
    "description": "MICROPHONE",
    "category": "thing"
  },
  {
    "name": "movie_camera",
    "unicode": "1F3A5",
    "shortcode": "movie_camera",
    "description": "MOVIE CAMERA",
    "category": "thing"
  },
  {
    "name": "cinema",
    "unicode": "1F3A6",
    "shortcode": "cinema",
    "description": "CINEMA",
    "category": "thing"
  },
  {
    "name": "headphones",
    "unicode": "1F3A7",
    "shortcode": "headphones",
    "description": "HEADPHONE",
    "category": "thing"
  },
  {
    "name": "art",
    "unicode": "1F3A8",
    "shortcode": "art",
    "description": "ARTIST PALETTE",
    "category": "thing"
  },
  {
    "name": "tophat",
    "unicode": "1F3A9",
    "shortcode": "tophat",
    "description": "TOP HAT",
    "category": "thing"
  },
  {
    "name": "circus_tent",
    "unicode": "1F3AA",
    "shortcode": "circus_tent",
    "description": "CIRCUS TENT",
    "category": "thing"
  },
  {
    "name": "ticket",
    "unicode": "1F3AB",
    "shortcode": "ticket",
    "description": "TICKET",
    "category": "thing"
  },
  {
    "name": "clapper",
    "unicode": "1F3AC",
    "shortcode": "clapper",
    "description": "CLAPPER BOARD",
    "category": "thing"
  },
  {
    "name": "performing_arts",
    "unicode": "1F3AD",
    "shortcode": "performing_arts",
    "description": "PERFORMING ARTS",
    "category": "thing"
  },
  {
    "name": "video_game",
    "unicode": "1F3AE",
    "shortcode": "video_game",
    "description": "VIDEO GAME",
    "category": "thing"
  },
  {
    "name": "dart",
    "unicode": "1F3AF",
    "shortcode": "dart",
    "description": "DIRECT HIT",
    "category": "thing"
  },
  {
    "name": "slot_machine",
    "unicode": "1F3B0",
    "shortcode": "slot_machine",
    "description": "SLOT MACHINE",
    "category": "thing"
  },
  {
    "name": "8ball",
    "unicode": "1F3B1",
    "shortcode": "8ball",
    "description": "BILLIARDS",
    "category": "thing"
  },
  {
    "name": "game_die",
    "unicode": "1F3B2",
    "shortcode": "game_die",
    "description": "GAME DIE",
    "category": "thing"
  },
  {
    "name": "bowling",
    "unicode": "1F3B3",
    "shortcode": "bowling",
    "description": "BOWLING",
    "category": "thing"
  },
  {
    "name": "flower_playing_cards",
    "unicode": "1F3B4",
    "shortcode": "flower_playing_cards",
    "description": "FLOWER PLAYING CARDS",
    "category": "thing"
  },
  {
    "name": "musical_note",
    "unicode": "1F3B5",
    "shortcode": "musical_note",
    "description": "MUSICAL NOTE",
    "category": "thing"
  },
  {
    "name": "notes",
    "unicode": "1F3B6",
    "shortcode": "notes",
    "description": "MULTIPLE MUSICAL NOTES",
    "category": "thing"
  },
  {
    "name": "saxophone",
    "unicode": "1F3B7",
    "shortcode": "saxophone",
    "description": "SAXOPHONE",
    "category": "thing"
  },
  {
    "name": "guitar",
    "unicode": "1F3B8",
    "shortcode": "guitar",
    "description": "GUITAR",
    "category": "thing"
  },
  {
    "name": "musical_keyboard",
    "unicode": "1F3B9",
    "shortcode": "musical_keyboard",
    "description": "MUSICAL KEYBOARD",
    "category": "thing"
  },
  {
    "name": "trumpet",
    "unicode": "1F3BA",
    "shortcode": "trumpet",
    "description": "TRUMPET",
    "category": "thing"
  },
  {
    "name": "violin",
    "unicode": "1F3BB",
    "shortcode": "violin",
    "description": "VIOLIN",
    "category": "thing"
  },
  {
    "name": "musical_score",
    "unicode": "1F3BC",
    "shortcode": "musical_score",
    "description": "MUSICAL SCORE",
    "category": "thing"
  },
  {
    "name": "running_shirt_with_sash",
    "unicode": "1F3BD",
    "shortcode": "running_shirt_with_sash",
    "description": "RUNNING SHIRT WITH SASH",
    "category": "thing"
  },
  {
    "name": "tennis",
    "unicode": "1F3BE",
    "shortcode": "tennis",
    "description": "TENNIS RACQUET AND BALL",
    "category": "thing"
  },
  {
    "name": "ski",
    "unicode": "1F3BF",
    "shortcode": "ski",
    "description": "SKI AND SKI BOOT",
    "category": "thing"
  },
  {
    "name": "basketball",
    "unicode": "1F3C0",
    "shortcode": "basketball",
    "description": "BASKETBALL AND HOOP",
    "category": "thing"
  },
  {
    "name": "checkered_flag",
    "unicode": "1F3C1",
    "shortcode": "checkered_flag",
    "description": "CHEQUERED FLAG",
    "category": "thing"
  },
  {
    "name": "snowboarder",
    "unicode": "1F3C2",
    "shortcode": "snowboarder",
    "description": "SNOWBOARDER",
    "category": "people"
  },
  {
    "name": "runner",
    "unicode": "1F3C3",
    "shortcode": "runner",
    "description": "RUNNER",
    "category": "people"
  },
  {
    "name": "surfer",
    "unicode": "1F3C4",
    "shortcode": "surfer",
    "description": "SURFER",
    "category": "people"
  },
  {
    "name": "trophy",
    "unicode": "1F3C6",
    "shortcode": "trophy",
    "description": "TROPHY",
    "category": "people"
  },
  {
    "name": "horse_racing",
    "unicode": "1F3C7",
    "shortcode": "horse_racing",
    "description": "HORSE RACING",
    "category": "people"
  },
  {
    "name": "football",
    "unicode": "1F3C8",
    "shortcode": "football",
    "description": "AMERICAN FOOTBALL",
    "category": "people"
  },
  {
    "name": "rugby_football",
    "unicode": "1F3C9",
    "shortcode": "rugby_football",
    "description": "RUGBY FOOTBALL",
    "category": "people"
  },
  {
    "name": "swimmer",
    "unicode": "1F3CA",
    "shortcode": "swimmer",
    "description": "SWIMMER",
    "category": "people"
  },
  {
    "name": "house",
    "unicode": "1F3E0",
    "shortcode": "house",
    "description": "HOUSE BUILDING",
    "category": "travel"
  },
  {
    "name": "house_with_garden",
    "unicode": "1F3E1",
    "shortcode": "house_with_garden",
    "description": "HOUSE WITH GARDEN",
    "category": "travel"
  },
  {
    "name": "office",
    "unicode": "1F3E2",
    "shortcode": "office",
    "description": "OFFICE BUILDING",
    "category": "travel"
  },
  {
    "name": "post_office",
    "unicode": "1F3E3",
    "shortcode": "post_office",
    "description": "JAPANESE POST OFFICE",
    "category": "travel"
  },
  {
    "name": "european_post_office",
    "unicode": "1F3E4",
    "shortcode": "european_post_office",
    "description": "EUROPEAN POST OFFICE",
    "category": "travel"
  },
  {
    "name": "hospital",
    "unicode": "1F3E5",
    "shortcode": "hospital",
    "description": "HOSPITAL",
    "category": "travel"
  },
  {
    "name": "bank",
    "unicode": "1F3E6",
    "shortcode": "bank",
    "description": "BANK",
    "category": "travel"
  },
  {
    "name": "atm",
    "unicode": "1F3E7",
    "shortcode": "atm",
    "description": "AUTOMATED TELLER MACHINE",
    "category": "travel"
  },
  {
    "name": "hotel",
    "unicode": "1F3E8",
    "shortcode": "hotel",
    "description": "HOTEL",
    "category": "travel"
  },
  {
    "name": "love_hotel",
    "unicode": "1F3E9",
    "shortcode": "love_hotel",
    "description": "LOVE HOTEL",
    "category": "travel"
  },
  {
    "name": "convenience_store",
    "unicode": "1F3EA",
    "shortcode": "convenience_store",
    "description": "CONVENIENCE STORE",
    "category": "travel"
  },
  {
    "name": "school",
    "unicode": "1F3EB",
    "shortcode": "school",
    "description": "SCHOOL",
    "category": "travel"
  },
  {
    "name": "department_store",
    "unicode": "1F3EC",
    "shortcode": "department_store",
    "description": "DEPARTMENT STORE",
    "category": "travel"
  },
  {
    "name": "factory",
    "unicode": "1F3ED",
    "shortcode": "factory",
    "description": "FACTORY",
    "category": "travel"
  },
  {
    "name": "izakaya_lantern",
    "unicode": "1F3EE",
    "shortcode": "izakaya_lantern",
    "description": "IZAKAYA LANTERN",
    "category": "travel"
  },
  {
    "name": "japanese_castle",
    "unicode": "1F3EF",
    "shortcode": "japanese_castle",
    "description": "JAPANESE CASTLE",
    "category": "travel"
  },
  {
    "name": "european_castle",
    "unicode": "1F3F0",
    "shortcode": "european_castle",
    "description": "EUROPEAN CASTLE",
    "category": "travel"
  },
  {
    "name": "rat",
    "unicode": "1F400",
    "shortcode": "rat",
    "description": "RAT",
    "category": "animal"
  },
  {
    "name": "mouse2",
    "unicode": "1F401",
    "shortcode": "mouse2",
    "description": "MOUSE",
    "category": "animal"
  },
  {
    "name": "ox",
    "unicode": "1F402",
    "shortcode": "ox",
    "description": "OX",
    "category": "animal"
  },
  {
    "name": "water_buffalo",
    "unicode": "1F403",
    "shortcode": "water_buffalo",
    "description": "WATER BUFFALO",
    "category": "animal"
  },
  {
    "name": "cow2",
    "unicode": "1F404",
    "shortcode": "cow2",
    "description": "COW",
    "category": "animal"
  },
  {
    "name": "tiger2",
    "unicode": "1F405",
    "shortcode": "tiger2",
    "description": "TIGER",
    "category": "animal"
  },
  {
    "name": "leopard",
    "unicode": "1F406",
    "shortcode": "leopard",
    "description": "LEOPARD",
    "category": "animal"
  },
  {
    "name": "rabbit2",
    "unicode": "1F407",
    "shortcode": "rabbit2",
    "description": "RABBIT",
    "category": "animal"
  },
  {
    "name": "cat2",
    "unicode": "1F408",
    "shortcode": "cat2",
    "description": "CAT",
    "category": "animal"
  },
  {
    "name": "dragon",
    "unicode": "1F409",
    "shortcode": "dragon",
    "description": "DRAGON",
    "category": "animal"
  },
  {
    "name": "crocodile",
    "unicode": "1F40A",
    "shortcode": "crocodile",
    "description": "CROCODILE",
    "category": "animal"
  },
  {
    "name": "whale2",
    "unicode": "1F40B",
    "shortcode": "whale2",
    "description": "WHALE",
    "category": "animal"
  },
  {
    "name": "snail",
    "unicode": "1F40C",
    "shortcode": "snail",
    "description": "SNAIL",
    "category": "animal"
  },
  {
    "name": "snake",
    "unicode": "1F40D",
    "shortcode": "snake",
    "description": "SNAKE",
    "category": "animal"
  },
  {
    "name": "racehorse",
    "unicode": "1F40E",
    "shortcode": "racehorse",
    "description": "HORSE",
    "category": "animal"
  },
  {
    "name": "ram",
    "unicode": "1F40F",
    "shortcode": "ram",
    "description": "RAM",
    "category": "animal"
  },
  {
    "name": "goat",
    "unicode": "1F410",
    "shortcode": "goat",
    "description": "GOAT",
    "category": "animal"
  },
  {
    "name": "sheep",
    "unicode": "1F411",
    "shortcode": "sheep",
    "description": "SHEEP",
    "category": "animal"
  },
  {
    "name": "monkey",
    "unicode": "1F412",
    "shortcode": "monkey",
    "description": "MONKEY",
    "category": "animal"
  },
  {
    "name": "rooster",
    "unicode": "1F413",
    "shortcode": "rooster",
    "description": "ROOSTER",
    "category": "animal"
  },
  {
    "name": "chicken",
    "unicode": "1F414",
    "shortcode": "chicken",
    "description": "CHICKEN",
    "category": "animal"
  },
  {
    "name": "dog2",
    "unicode": "1F415",
    "shortcode": "dog2",
    "description": "DOG",
    "category": "animal"
  },
  {
    "name": "pig2",
    "unicode": "1F416",
    "shortcode": "pig2",
    "description": "PIG",
    "category": "animal"
  },
  {
    "name": "boar",
    "unicode": "1F417",
    "shortcode": "boar",
    "description": "BOAR",
    "category": "animal"
  },
  {
    "name": "elephant",
    "unicode": "1F418",
    "shortcode": "elephant",
    "description": "ELEPHANT",
    "category": "animal"
  },
  {
    "name": "octopus",
    "unicode": "1F419",
    "shortcode": "octopus",
    "description": "OCTOPUS",
    "category": "animal"
  },
  {
    "name": "shell",
    "unicode": "1F41A",
    "shortcode": "shell",
    "description": "SPIRAL SHELL",
    "category": "animal"
  },
  {
    "name": "bug",
    "unicode": "1F41B",
    "shortcode": "bug",
    "description": "BUG",
    "category": "animal"
  },
  {
    "name": "ant",
    "unicode": "1F41C",
    "shortcode": "ant",
    "description": "ANT",
    "category": "animal"
  },
  {
    "name": "bee",
    "unicode": "1F41D",
    "shortcode": "bee",
    "description": "HONEYBEE",
    "category": "animal"
  },
  {
    "name": "beetle",
    "unicode": "1F41E",
    "shortcode": "beetle",
    "description": "LADY BEETLE",
    "category": "animal"
  },
  {
    "name": "fish",
    "unicode": "1F41F",
    "shortcode": "fish",
    "description": "FISH",
    "category": "animal"
  },
  {
    "name": "tropical_fish",
    "unicode": "1F420",
    "shortcode": "tropical_fish",
    "description": "TROPICAL FISH",
    "category": "animal"
  },
  {
    "name": "blowfish",
    "unicode": "1F421",
    "shortcode": "blowfish",
    "description": "BLOWFISH",
    "category": "animal"
  },
  {
    "name": "turtle",
    "unicode": "1F422",
    "shortcode": "turtle",
    "description": "TURTLE",
    "category": "animal"
  },
  {
    "name": "hatching_chick",
    "unicode": "1F423",
    "shortcode": "hatching_chick",
    "description": "HATCHING CHICK",
    "category": "animal"
  },
  {
    "name": "baby_chick",
    "unicode": "1F424",
    "shortcode": "baby_chick",
    "description": "BABY CHICK",
    "category": "animal"
  },
  {
    "name": "hatched_chick",
    "unicode": "1F425",
    "shortcode": "hatched_chick",
    "description": "FRONT-FACING BABY CHICK",
    "category": "animal"
  },
  {
    "name": "bird",
    "unicode": "1F426",
    "shortcode": "bird",
    "description": "BIRD",
    "category": "animal"
  },
  {
    "name": "penguin",
    "unicode": "1F427",
    "shortcode": "penguin",
    "description": "PENGUIN",
    "category": "animal"
  },
  {
    "name": "koala",
    "unicode": "1F428",
    "shortcode": "koala",
    "description": "KOALA",
    "category": "animal"
  },
  {
    "name": "poodle",
    "unicode": "1F429",
    "shortcode": "poodle",
    "description": "POODLE",
    "category": "animal"
  },
  {
    "name": "dromedary_camel",
    "unicode": "1F42A",
    "shortcode": "dromedary_camel",
    "description": "DROMEDARY CAMEL",
    "category": "animal"
  },
  {
    "name": "camel",
    "unicode": "1F42B",
    "shortcode": "camel",
    "description": "BACTRIAN CAMEL",
    "category": "animal"
  },
  {
    "name": "dolphin",
    "unicode": "1F42C",
    "shortcode": "dolphin",
    "description": "DOLPHIN",
    "category": "animal"
  },
  {
    "name": "mouse",
    "unicode": "1F42D",
    "shortcode": "mouse",
    "description": "MOUSE FACE",
    "category": "animal"
  },
  {
    "name": "cow",
    "unicode": "1F42E",
    "shortcode": "cow",
    "description": "COW FACE",
    "category": "animal"
  },
  {
    "name": "tiger",
    "unicode": "1F42F",
    "shortcode": "tiger",
    "description": "TIGER FACE",
    "category": "animal"
  },
  {
    "name": "rabbit",
    "unicode": "1F430",
    "shortcode": "rabbit",
    "description": "RABBIT FACE",
    "category": "animal"
  },
  {
    "name": "cat",
    "unicode": "1F431",
    "shortcode": "cat",
    "description": "CAT FACE",
    "category": "animal"
  },
  {
    "name": "dragon_face",
    "unicode": "1F432",
    "shortcode": "dragon_face",
    "description": "DRAGON FACE",
    "category": "animal"
  },
  {
    "name": "whale",
    "unicode": "1F433",
    "shortcode": "whale",
    "description": "SPOUTING WHALE",
    "category": "animal"
  },
  {
    "name": "horse",
    "unicode": "1F434",
    "shortcode": "horse",
    "description": "HORSE FACE",
    "category": "animal"
  },
  {
    "name": "monkey_face",
    "unicode": "1F435",
    "shortcode": "monkey_face",
    "description": "MONKEY FACE",
    "category": "animal"
  },
  {
    "name": "dog",
    "unicode": "1F436",
    "shortcode": "dog",
    "description": "DOG FACE",
    "category": "animal"
  },
  {
    "name": "pig",
    "unicode": "1F437",
    "shortcode": "pig",
    "description": "PIG FACE",
    "category": "animal"
  },
  {
    "name": "frog",
    "unicode": "1F438",
    "shortcode": "frog",
    "description": "FROG FACE",
    "category": "animal"
  },
  {
    "name": "hamster",
    "unicode": "1F439",
    "shortcode": "hamster",
    "description": "HAMSTER FACE",
    "category": "animal"
  },
  {
    "name": "wolf",
    "unicode": "1F43A",
    "shortcode": "wolf",
    "description": "WOLF FACE",
    "category": "animal"
  },
  {
    "name": "bear",
    "unicode": "1F43B",
    "shortcode": "bear",
    "description": "BEAR FACE",
    "category": "animal"
  },
  {
    "name": "panda_face",
    "unicode": "1F43C",
    "shortcode": "panda_face",
    "description": "PANDA FACE",
    "category": "animal"
  },
  {
    "name": "pig_nose",
    "unicode": "1F43D",
    "shortcode": "pig_nose",
    "description": "PIG NOSE",
    "category": "animal"
  },
  {
    "name": "feet",
    "unicode": "1F43E",
    "shortcode": "feet",
    "description": "PAW PRINTS",
    "category": "people"
  },
  {
    "name": "eyes",
    "unicode": "1F440",
    "shortcode": "eyes",
    "description": "EYES",
    "category": "people"
  },
  {
    "name": "ear",
    "unicode": "1F442",
    "shortcode": "ear",
    "description": "EAR",
    "category": "people"
  },
  {
    "name": "nose",
    "unicode": "1F443",
    "shortcode": "nose",
    "description": "NOSE",
    "category": "people"
  },
  {
    "name": "lips",
    "unicode": "1F444",
    "shortcode": "lips",
    "description": "MOUTH",
    "category": "people"
  },
  {
    "name": "tongue",
    "unicode": "1F445",
    "shortcode": "tongue",
    "description": "TONGUE",
    "category": "people"
  },
  {
    "name": "point_up_2",
    "unicode": "1F446",
    "shortcode": "point_up_2",
    "description": "WHITE UP POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_down",
    "unicode": "1F447",
    "shortcode": "point_down",
    "description": "WHITE DOWN POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_left",
    "unicode": "1F448",
    "shortcode": "point_left",
    "description": "WHITE LEFT POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_right",
    "unicode": "1F449",
    "shortcode": "point_right",
    "description": "WHITE RIGHT POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "facepunch",
    "unicode": "1F44A",
    "shortcode": "facepunch",
    "description": "FISTED HAND SIGN",
    "category": "people"
  },
  {
    "name": "wave",
    "unicode": "1F44B",
    "shortcode": "wave",
    "description": "WAVING HAND SIGN",
    "category": "people"
  },
  {
    "name": "ok_hand",
    "unicode": "1F44C",
    "shortcode": "ok_hand",
    "description": "OK HAND SIGN",
    "category": "people"
  },
  {
    "name": "+1",
    "unicode": "1F44D",
    "shortcode": "plus1",
    "description": "THUMBS UP SIGN",
    "category": "people"
  },
  {
    "name": "-1",
    "unicode": "1F44E",
    "shortcode": "-1",
    "description": "THUMBS DOWN SIGN",
    "category": "people"
  },
  {
    "name": "clap",
    "unicode": "1F44F",
    "shortcode": "clap",
    "description": "CLAPPING HANDS SIGN",
    "category": "people"
  },
  {
    "name": "open_hands",
    "unicode": "1F450",
    "shortcode": "open_hands",
    "description": "OPEN HANDS SIGN",
    "category": "people"
  },
  {
    "name": "crown",
    "unicode": "1F451",
    "shortcode": "crown",
    "description": "CROWN",
    "category": "people"
  },
  {
    "name": "womans_hat",
    "unicode": "1F452",
    "shortcode": "womans_hat",
    "description": "WOMANS HAT",
    "category": "people"
  },
  {
    "name": "eyeglasses",
    "unicode": "1F453",
    "shortcode": "eyeglasses",
    "description": "EYEGLASSES",
    "category": "people"
  },
  {
    "name": "necktie",
    "unicode": "1F454",
    "shortcode": "necktie",
    "description": "NECKTIE",
    "category": "people"
  },
  {
    "name": "shirt",
    "unicode": "1F455",
    "shortcode": "shirt",
    "description": "T-SHIRT",
    "category": "people"
  },
  {
    "name": "jeans",
    "unicode": "1F456",
    "shortcode": "jeans",
    "description": "JEANS",
    "category": "people"
  },
  {
    "name": "dress",
    "unicode": "1F457",
    "shortcode": "dress",
    "description": "DRESS",
    "category": "people"
  },
  {
    "name": "kimono",
    "unicode": "1F458",
    "shortcode": "kimono",
    "description": "KIMONO",
    "category": "people"
  },
  {
    "name": "bikini",
    "unicode": "1F459",
    "shortcode": "bikini",
    "description": "BIKINI",
    "category": "people"
  },
  {
    "name": "womans_clothes",
    "unicode": "1F45A",
    "shortcode": "womans_clothes",
    "description": "WOMANS CLOTHES",
    "category": "people"
  },
  {
    "name": "purse",
    "unicode": "1F45B",
    "shortcode": "purse",
    "description": "PURSE",
    "category": "people"
  },
  {
    "name": "handbag",
    "unicode": "1F45C",
    "shortcode": "handbag",
    "description": "HANDBAG",
    "category": "people"
  },
  {
    "name": "pouch",
    "unicode": "1F45D",
    "shortcode": "pouch",
    "description": "POUCH",
    "category": "people"
  },
  {
    "name": "mans_shoe",
    "unicode": "1F45E",
    "shortcode": "mans_shoe",
    "description": "MANS SHOE",
    "category": "people"
  },
  {
    "name": "athletic_shoe",
    "unicode": "1F45F",
    "shortcode": "athletic_shoe",
    "description": "ATHLETIC SHOE",
    "category": "people"
  },
  {
    "name": "high_heel",
    "unicode": "1F460",
    "shortcode": "high_heel",
    "description": "HIGH-HEELED SHOE",
    "category": "people"
  },
  {
    "name": "sandal",
    "unicode": "1F461",
    "shortcode": "sandal",
    "description": "WOMANS SANDAL",
    "category": "people"
  },
  {
    "name": "boot",
    "unicode": "1F462",
    "shortcode": "boot",
    "description": "WOMANS BOOTS",
    "category": "people"
  },
  {
    "name": "footprints",
    "unicode": "1F463",
    "shortcode": "footprints",
    "description": "FOOTPRINTS",
    "category": "people"
  },
  {
    "name": "bust_in_silhouette",
    "unicode": "1F464",
    "shortcode": "bust_in_silhouette",
    "description": "BUST IN SILHOUETTE",
    "category": "people"
  },
  {
    "name": "busts_in_silhouette",
    "unicode": "1F465",
    "shortcode": "busts_in_silhouette",
    "description": "BUSTS IN SILHOUETTE",
    "category": "people"
  },
  {
    "name": "boy",
    "unicode": "1F466",
    "shortcode": "boy",
    "description": "BOY",
    "category": "people"
  },
  {
    "name": "girl",
    "unicode": "1F467",
    "shortcode": "girl",
    "description": "GIRL",
    "category": "people"
  },
  {
    "name": "man",
    "unicode": "1F468",
    "shortcode": "man",
    "description": "MAN",
    "category": "people"
  },
  {
    "name": "woman",
    "unicode": "1F469",
    "shortcode": "woman",
    "description": "WOMAN",
    "category": "people"
  },
  {
    "name": "family",
    "unicode": "1F46A",
    "shortcode": "family",
    "description": "FAMILY",
    "category": "people"
  },
  {
    "name": "couple",
    "unicode": "1F46B",
    "shortcode": "couple",
    "description": "MAN AND WOMAN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "two_men_holding_hands",
    "unicode": "1F46C",
    "shortcode": "two_men_holding_hands",
    "description": "TWO MEN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "two_women_holding_hands",
    "unicode": "1F46D",
    "shortcode": "two_women_holding_hands",
    "description": "TWO WOMEN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "cop",
    "unicode": "1F46E",
    "shortcode": "cop",
    "description": "POLICE OFFICER",
    "category": "people"
  },
  {
    "name": "dancers",
    "unicode": "1F46F",
    "shortcode": "dancers",
    "description": "WOMAN WITH BUNNY EARS",
    "category": "people"
  },
  {
    "name": "bride_with_veil",
    "unicode": "1F470",
    "shortcode": "bride_with_veil",
    "description": "BRIDE WITH VEIL",
    "category": "people"
  },
  {
    "name": "person_with_blond_hair",
    "unicode": "1F471",
    "shortcode": "person_with_blond_hair",
    "description": "PERSON WITH BLOND HAIR",
    "category": "people"
  },
  {
    "name": "man_with_gua_pi_mao",
    "unicode": "1F472",
    "shortcode": "man_with_gua_pi_mao",
    "description": "MAN WITH GUA PI MAO",
    "category": "people"
  },
  {
    "name": "man_with_turban",
    "unicode": "1F473",
    "shortcode": "man_with_turban",
    "description": "MAN WITH TURBAN",
    "category": "people"
  },
  {
    "name": "older_man",
    "unicode": "1F474",
    "shortcode": "older_man",
    "description": "OLDER MAN",
    "category": "people"
  },
  {
    "name": "older_woman",
    "unicode": "1F475",
    "shortcode": "older_woman",
    "description": "OLDER WOMAN",
    "category": "people"
  },
  {
    "name": "baby",
    "unicode": "1F476",
    "shortcode": "baby",
    "description": "BABY",
    "category": "people"
  },
  {
    "name": "construction_worker",
    "unicode": "1F477",
    "shortcode": "construction_worker",
    "description": "CONSTRUCTION WORKER",
    "category": "people"
  },
  {
    "name": "princess",
    "unicode": "1F478",
    "shortcode": "princess",
    "description": "PRINCESS",
    "category": "people"
  },
  {
    "name": "japanese_ogre",
    "unicode": "1F479",
    "shortcode": "japanese_ogre",
    "description": "JAPANESE OGRE",
    "category": "people"
  },
  {
    "name": "japanese_goblin",
    "unicode": "1F47A",
    "shortcode": "japanese_goblin",
    "description": "JAPANESE GOBLIN",
    "category": "people"
  },
  {
    "name": "ghost",
    "unicode": "1F47B",
    "shortcode": "ghost",
    "description": "GHOST",
    "category": "people"
  },
  {
    "name": "angel",
    "unicode": "1F47C",
    "shortcode": "angel",
    "description": "BABY ANGEL",
    "category": "people"
  },
  {
    "name": "alien",
    "unicode": "1F47D",
    "shortcode": "alien",
    "description": "EXTRATERRESTRIAL ALIEN",
    "category": "people"
  },
  {
    "name": "space_invader",
    "unicode": "1F47E",
    "shortcode": "space_invader",
    "description": "ALIEN MONSTER",
    "category": "people"
  },
  {
    "name": "imp",
    "unicode": "1F47F",
    "shortcode": "imp",
    "description": "IMP",
    "category": "people"
  },
  {
    "name": "skull",
    "unicode": "1F480",
    "shortcode": "skull",
    "description": "SKULL",
    "category": "people"
  },
  {
    "name": "information_desk_person",
    "unicode": "1F481",
    "shortcode": "information_desk_person",
    "description": "INFORMATION DESK PERSON",
    "category": "people"
  },
  {
    "name": "guardsman",
    "unicode": "1F482",
    "shortcode": "guardsman",
    "description": "GUARDSMAN",
    "category": "people"
  },
  {
    "name": "dancer",
    "unicode": "1F483",
    "shortcode": "dancer",
    "description": "DANCER",
    "category": "people"
  },
  {
    "name": "lipstick",
    "unicode": "1F484",
    "shortcode": "lipstick",
    "description": "LIPSTICK",
    "category": "people"
  },
  {
    "name": "nail_care",
    "unicode": "1F485",
    "shortcode": "nail_care",
    "description": "NAIL POLISH",
    "category": "people"
  },
  {
    "name": "massage",
    "unicode": "1F486",
    "shortcode": "massage",
    "description": "FACE MASSAGE",
    "category": "people"
  },
  {
    "name": "haircut",
    "unicode": "1F487",
    "shortcode": "haircut",
    "description": "HAIRCUT",
    "category": "people"
  },
  {
    "name": "barber",
    "unicode": "1F488",
    "shortcode": "barber",
    "description": "BARBER POLE",
    "category": "people"
  },
  {
    "name": "syringe",
    "unicode": "1F489",
    "shortcode": "syringe",
    "description": "SYRINGE",
    "category": "emotion"
  },
  {
    "name": "pill",
    "unicode": "1F48A",
    "shortcode": "pill",
    "description": "PILL",
    "category": "emotion"
  },
  {
    "name": "kiss",
    "unicode": "1F48B",
    "shortcode": "kiss",
    "description": "KISS MARK",
    "category": "emotion"
  },
  {
    "name": "love_letter",
    "unicode": "1F48C",
    "shortcode": "love_letter",
    "description": "LOVE LETTER",
    "category": "emotion"
  },
  {
    "name": "ring",
    "unicode": "1F48D",
    "shortcode": "ring",
    "description": "RING",
    "category": "emotion"
  },
  {
    "name": "gem",
    "unicode": "1F48E",
    "shortcode": "gem",
    "description": "GEM STONE",
    "category": "emotion"
  },
  {
    "name": "couplekiss",
    "unicode": "1F48F",
    "shortcode": "couplekiss",
    "description": "KISS",
    "category": "emotion"
  },
  {
    "name": "bouquet",
    "unicode": "1F490",
    "shortcode": "bouquet",
    "description": "BOUQUET",
    "category": "emotion"
  },
  {
    "name": "couple_with_heart",
    "unicode": "1F491",
    "shortcode": "couple_with_heart",
    "description": "COUPLE WITH HEART",
    "category": "emotion"
  },
  {
    "name": "wedding",
    "unicode": "1F492",
    "shortcode": "wedding",
    "description": "WEDDING",
    "category": "emotion"
  },
  {
    "name": "heartbeat",
    "unicode": "1F493",
    "shortcode": "heartbeat",
    "description": "BEATING HEART",
    "category": "emotion"
  },
  {
    "name": "broken_heart",
    "unicode": "1F494",
    "shortcode": "broken_heart",
    "description": "BROKEN HEART",
    "category": "emotion"
  },
  {
    "name": "two_hearts",
    "unicode": "1F495",
    "shortcode": "two_hearts",
    "description": "TWO HEARTS",
    "category": "emotion"
  },
  {
    "name": "sparkling_heart",
    "unicode": "1F496",
    "shortcode": "sparkling_heart",
    "description": "SPARKLING HEART",
    "category": "emotion"
  },
  {
    "name": "heartpulse",
    "unicode": "1F497",
    "shortcode": "heartpulse",
    "description": "GROWING HEART",
    "category": "emotion"
  },
  {
    "name": "cupid",
    "unicode": "1F498",
    "shortcode": "cupid",
    "description": "HEART WITH ARROW",
    "category": "emotion"
  },
  {
    "name": "blue_heart",
    "unicode": "1F499",
    "shortcode": "blue_heart",
    "description": "BLUE HEART",
    "category": "emotion"
  },
  {
    "name": "green_heart",
    "unicode": "1F49A",
    "shortcode": "green_heart",
    "description": "GREEN HEART",
    "category": "emotion"
  },
  {
    "name": "yellow_heart",
    "unicode": "1F49B",
    "shortcode": "yellow_heart",
    "description": "YELLOW HEART",
    "category": "emotion"
  },
  {
    "name": "purple_heart",
    "unicode": "1F49C",
    "shortcode": "purple_heart",
    "description": "PURPLE HEART",
    "category": "emotion"
  },
  {
    "name": "gift_heart",
    "unicode": "1F49D",
    "shortcode": "gift_heart",
    "description": "HEART WITH RIBBON",
    "category": "emotion"
  },
  {
    "name": "revolving_hearts",
    "unicode": "1F49E",
    "shortcode": "revolving_hearts",
    "description": "REVOLVING HEARTS",
    "category": "emotion"
  },
  {
    "name": "heart_decoration",
    "unicode": "1F49F",
    "shortcode": "heart_decoration",
    "description": "HEART DECORATION",
    "category": "emotion"
  },
  {
    "name": "diamond_shape_with_a_dot_inside",
    "unicode": "1F4A0",
    "shortcode": "diamond_shape_with_a_dot_inside",
    "description": "DIAMOND SHAPE WITH A DOT INSIDE",
    "category": "emotion"
  },
  {
    "name": "bulb",
    "unicode": "1F4A1",
    "shortcode": "bulb",
    "description": "ELECTRIC LIGHT BULB",
    "category": "emotion"
  },
  {
    "name": "anger",
    "unicode": "1F4A2",
    "shortcode": "anger",
    "description": "ANGER SYMBOL",
    "category": "emotion"
  },
  {
    "name": "bomb",
    "unicode": "1F4A3",
    "shortcode": "bomb",
    "description": "BOMB",
    "category": "emotion"
  },
  {
    "name": "zzz",
    "unicode": "1F4A4",
    "shortcode": "zzz",
    "description": "SLEEPING SYMBOL",
    "category": "emotion"
  },
  {
    "name": "boom",
    "unicode": "1F4A5",
    "shortcode": "boom",
    "description": "COLLISION SYMBOL",
    "category": "emotion"
  },
  {
    "name": "sweat_drops",
    "unicode": "1F4A6",
    "shortcode": "sweat_drops",
    "description": "SPLASHING SWEAT SYMBOL",
    "category": "emotion"
  },
  {
    "name": "droplet",
    "unicode": "1F4A7",
    "shortcode": "droplet",
    "description": "DROPLET",
    "category": "emotion"
  },
  {
    "name": "dash",
    "unicode": "1F4A8",
    "shortcode": "dash",
    "description": "DASH SYMBOL",
    "category": "emotion"
  },
  {
    "name": "hankey",
    "unicode": "1F4A9",
    "shortcode": "hankey",
    "description": "PILE OF POO",
    "category": "emotion"
  },
  {
    "name": "muscle",
    "unicode": "1F4AA",
    "shortcode": "muscle",
    "description": "FLEXED BICEPS",
    "category": "emotion"
  },
  {
    "name": "dizzy",
    "unicode": "1F4AB",
    "shortcode": "dizzy",
    "description": "DIZZY SYMBOL",
    "category": "emotion"
  },
  {
    "name": "speech_balloon",
    "unicode": "1F4AC",
    "shortcode": "speech_balloon",
    "description": "SPEECH BALLOON",
    "category": "emotion"
  },
  {
    "name": "thought_balloon",
    "unicode": "1F4AD",
    "shortcode": "thought_balloon",
    "description": "THOUGHT BALLOON",
    "category": "emotion"
  },
  {
    "name": "white_flower",
    "unicode": "1F4AE",
    "shortcode": "white_flower",
    "description": "WHITE FLOWER",
    "category": "emotion"
  },
  {
    "name": "100",
    "unicode": "1F4AF",
    "shortcode": "100",
    "description": "HUNDRED POINTS SYMBOL",
    "category": "emotion"
  },
  {
    "name": "moneybag",
    "unicode": "1F4B0",
    "shortcode": "moneybag",
    "description": "MONEY BAG",
    "category": "emotion"
  },
  {
    "name": "currency_exchange",
    "unicode": "1F4B1",
    "shortcode": "currency_exchange",
    "description": "CURRENCY EXCHANGE",
    "category": "emotion"
  },
  {
    "name": "heavy_dollar_sign",
    "unicode": "1F4B2",
    "shortcode": "heavy_dollar_sign",
    "description": "HEAVY DOLLAR SIGN",
    "category": "emotion"
  },
  {
    "name": "credit_card",
    "unicode": "1F4B3",
    "shortcode": "credit_card",
    "description": "CREDIT CARD",
    "category": "emotion"
  },
  {
    "name": "yen",
    "unicode": "1F4B4",
    "shortcode": "yen",
    "description": "BANKNOTE WITH YEN SIGN",
    "category": "emotion"
  },
  {
    "name": "dollar",
    "unicode": "1F4B5",
    "shortcode": "dollar",
    "description": "BANKNOTE WITH DOLLAR SIGN",
    "category": "emotion"
  },
  {
    "name": "euro",
    "unicode": "1F4B6",
    "shortcode": "euro",
    "description": "BANKNOTE WITH EURO SIGN",
    "category": "emotion"
  },
  {
    "name": "pound",
    "unicode": "1F4B7",
    "shortcode": "pound",
    "description": "BANKNOTE WITH POUND SIGN",
    "category": "emotion"
  },
  {
    "name": "money_with_wings",
    "unicode": "1F4B8",
    "shortcode": "money_with_wings",
    "description": "MONEY WITH WINGS",
    "category": "emotion"
  },
  {
    "name": "chart",
    "unicode": "1F4B9",
    "shortcode": "chart",
    "description": "CHART WITH UPWARDS TREND AND YEN SIGN",
    "category": "thing"
  },
  {
    "name": "seat",
    "unicode": "1F4BA",
    "shortcode": "seat",
    "description": "SEAT",
    "category": "thing"
  },
  {
    "name": "computer",
    "unicode": "1F4BB",
    "shortcode": "computer",
    "description": "PERSONAL COMPUTER",
    "category": "thing"
  },
  {
    "name": "briefcase",
    "unicode": "1F4BC",
    "shortcode": "briefcase",
    "description": "BRIEFCASE",
    "category": "thing"
  },
  {
    "name": "minidisc",
    "unicode": "1F4BD",
    "shortcode": "minidisc",
    "description": "MINIDISC",
    "category": "thing"
  },
  {
    "name": "floppy_disk",
    "unicode": "1F4BE",
    "shortcode": "floppy_disk",
    "description": "FLOPPY DISK",
    "category": "thing"
  },
  {
    "name": "cd",
    "unicode": "1F4BF",
    "shortcode": "cd",
    "description": "OPTICAL DISC",
    "category": "thing"
  },
  {
    "name": "dvd",
    "unicode": "1F4C0",
    "shortcode": "dvd",
    "description": "DVD",
    "category": "thing"
  },
  {
    "name": "file_folder",
    "unicode": "1F4C1",
    "shortcode": "file_folder",
    "description": "FILE FOLDER",
    "category": "thing"
  },
  {
    "name": "open_file_folder",
    "unicode": "1F4C2",
    "shortcode": "open_file_folder",
    "description": "OPEN FILE FOLDER",
    "category": "thing"
  },
  {
    "name": "page_with_curl",
    "unicode": "1F4C3",
    "shortcode": "page_with_curl",
    "description": "PAGE WITH CURL",
    "category": "thing"
  },
  {
    "name": "page_facing_up",
    "unicode": "1F4C4",
    "shortcode": "page_facing_up",
    "description": "PAGE FACING UP",
    "category": "thing"
  },
  {
    "name": "date",
    "unicode": "1F4C5",
    "shortcode": "date",
    "description": "CALENDAR",
    "category": "thing"
  },
  {
    "name": "calendar",
    "unicode": "1F4C6",
    "shortcode": "calendar",
    "description": "TEAR-OFF CALENDAR",
    "category": "thing"
  },
  {
    "name": "card_index",
    "unicode": "1F4C7",
    "shortcode": "card_index",
    "description": "CARD INDEX",
    "category": "thing"
  },
  {
    "name": "chart_with_upwards_trend",
    "unicode": "1F4C8",
    "shortcode": "chart_with_upwards_trend",
    "description": "CHART WITH UPWARDS TREND",
    "category": "thing"
  },
  {
    "name": "chart_with_downwards_trend",
    "unicode": "1F4C9",
    "shortcode": "chart_with_downwards_trend",
    "description": "CHART WITH DOWNWARDS TREND",
    "category": "thing"
  },
  {
    "name": "bar_chart",
    "unicode": "1F4CA",
    "shortcode": "bar_chart",
    "description": "BAR CHART",
    "category": "thing"
  },
  {
    "name": "clipboard",
    "unicode": "1F4CB",
    "shortcode": "clipboard",
    "description": "CLIPBOARD",
    "category": "thing"
  },
  {
    "name": "pushpin",
    "unicode": "1F4CC",
    "shortcode": "pushpin",
    "description": "PUSHPIN",
    "category": "thing"
  },
  {
    "name": "round_pushpin",
    "unicode": "1F4CD",
    "shortcode": "round_pushpin",
    "description": "ROUND PUSHPIN",
    "category": "thing"
  },
  {
    "name": "paperclip",
    "unicode": "1F4CE",
    "shortcode": "paperclip",
    "description": "PAPERCLIP",
    "category": "thing"
  },
  {
    "name": "straight_ruler",
    "unicode": "1F4CF",
    "shortcode": "straight_ruler",
    "description": "STRAIGHT RULER",
    "category": "thing"
  },
  {
    "name": "triangular_ruler",
    "unicode": "1F4D0",
    "shortcode": "triangular_ruler",
    "description": "TRIANGULAR RULER",
    "category": "thing"
  },
  {
    "name": "bookmark_tabs",
    "unicode": "1F4D1",
    "shortcode": "bookmark_tabs",
    "description": "BOOKMARK TABS",
    "category": "thing"
  },
  {
    "name": "ledger",
    "unicode": "1F4D2",
    "shortcode": "ledger",
    "description": "LEDGER",
    "category": "thing"
  },
  {
    "name": "notebook",
    "unicode": "1F4D3",
    "shortcode": "notebook",
    "description": "NOTEBOOK",
    "category": "thing"
  },
  {
    "name": "notebook_with_decorative_cover",
    "unicode": "1F4D4",
    "shortcode": "notebook_with_decorative_cover",
    "description": "NOTEBOOK WITH DECORATIVE COVER",
    "category": "thing"
  },
  {
    "name": "closed_book",
    "unicode": "1F4D5",
    "shortcode": "closed_book",
    "description": "CLOSED BOOK",
    "category": "thing"
  },
  {
    "name": "book",
    "unicode": "1F4D6",
    "shortcode": "book",
    "description": "OPEN BOOK",
    "category": "thing"
  },
  {
    "name": "green_book",
    "unicode": "1F4D7",
    "shortcode": "green_book",
    "description": "GREEN BOOK",
    "category": "thing"
  },
  {
    "name": "blue_book",
    "unicode": "1F4D8",
    "shortcode": "blue_book",
    "description": "BLUE BOOK",
    "category": "thing"
  },
  {
    "name": "orange_book",
    "unicode": "1F4D9",
    "shortcode": "orange_book",
    "description": "ORANGE BOOK",
    "category": "thing"
  },
  {
    "name": "books",
    "unicode": "1F4DA",
    "shortcode": "books",
    "description": "BOOKS",
    "category": "thing"
  },
  {
    "name": "name_badge",
    "unicode": "1F4DB",
    "shortcode": "name_badge",
    "description": "NAME BADGE",
    "category": "thing"
  },
  {
    "name": "scroll",
    "unicode": "1F4DC",
    "shortcode": "scroll",
    "description": "SCROLL",
    "category": "thing"
  },
  {
    "name": "memo",
    "unicode": "1F4DD",
    "shortcode": "memo",
    "description": "MEMO",
    "category": "thing"
  },
  {
    "name": "telephone_receiver",
    "unicode": "1F4DE",
    "shortcode": "telephone_receiver",
    "description": "TELEPHONE RECEIVER",
    "category": "thing"
  },
  {
    "name": "pager",
    "unicode": "1F4DF",
    "shortcode": "pager",
    "description": "PAGER",
    "category": "thing"
  },
  {
    "name": "fax",
    "unicode": "1F4E0",
    "shortcode": "fax",
    "description": "FAX MACHINE",
    "category": "thing"
  },
  {
    "name": "satellite",
    "unicode": "1F4E1",
    "shortcode": "satellite",
    "description": "SATELLITE ANTENNA",
    "category": "thing"
  },
  {
    "name": "loudspeaker",
    "unicode": "1F4E2",
    "shortcode": "loudspeaker",
    "description": "PUBLIC ADDRESS LOUDSPEAKER",
    "category": "thing"
  },
  {
    "name": "mega",
    "unicode": "1F4E3",
    "shortcode": "mega",
    "description": "CHEERING MEGAPHONE",
    "category": "thing"
  },
  {
    "name": "outbox_tray",
    "unicode": "1F4E4",
    "shortcode": "outbox_tray",
    "description": "OUTBOX TRAY",
    "category": "thing"
  },
  {
    "name": "inbox_tray",
    "unicode": "1F4E5",
    "shortcode": "inbox_tray",
    "description": "INBOX TRAY",
    "category": "thing"
  },
  {
    "name": "package",
    "unicode": "1F4E6",
    "shortcode": "package",
    "description": "PACKAGE",
    "category": "thing"
  },
  {
    "name": "e-mail",
    "unicode": "1F4E7",
    "shortcode": "e-mail",
    "description": "E-MAIL SYMBOL",
    "category": "thing"
  },
  {
    "name": "incoming_envelope",
    "unicode": "1F4E8",
    "shortcode": "incoming_envelope",
    "description": "INCOMING ENVELOPE",
    "category": "thing"
  },
  {
    "name": "envelope_with_arrow",
    "unicode": "1F4E9",
    "shortcode": "envelope_with_arrow",
    "description": "ENVELOPE WITH DOWNWARDS ARROW ABOVE",
    "category": "thing"
  },
  {
    "name": "mailbox_closed",
    "unicode": "1F4EA",
    "shortcode": "mailbox_closed",
    "description": "CLOSED MAILBOX WITH LOWERED FLAG",
    "category": "thing"
  },
  {
    "name": "mailbox",
    "unicode": "1F4EB",
    "shortcode": "mailbox",
    "description": "CLOSED MAILBOX WITH RAISED FLAG",
    "category": "thing"
  },
  {
    "name": "mailbox_with_mail",
    "unicode": "1F4EC",
    "shortcode": "mailbox_with_mail",
    "description": "OPEN MAILBOX WITH RAISED FLAG",
    "category": "thing"
  },
  {
    "name": "mailbox_with_no_mail",
    "unicode": "1F4ED",
    "shortcode": "mailbox_with_no_mail",
    "description": "OPEN MAILBOX WITH LOWERED FLAG",
    "category": "thing"
  },
  {
    "name": "postbox",
    "unicode": "1F4EE",
    "shortcode": "postbox",
    "description": "POSTBOX",
    "category": "thing"
  },
  {
    "name": "postal_horn",
    "unicode": "1F4EF",
    "shortcode": "postal_horn",
    "description": "POSTAL HORN",
    "category": "thing"
  },
  {
    "name": "newspaper",
    "unicode": "1F4F0",
    "shortcode": "newspaper",
    "description": "NEWSPAPER",
    "category": "thing"
  },
  {
    "name": "iphone",
    "unicode": "1F4F1",
    "shortcode": "iphone",
    "description": "MOBILE PHONE",
    "category": "thing"
  },
  {
    "name": "calling",
    "unicode": "1F4F2",
    "shortcode": "calling",
    "description": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT",
    "category": "thing"
  },
  {
    "name": "vibration_mode",
    "unicode": "1F4F3",
    "shortcode": "vibration_mode",
    "description": "VIBRATION MODE",
    "category": "thing"
  },
  {
    "name": "mobile_phone_off",
    "unicode": "1F4F4",
    "shortcode": "mobile_phone_off",
    "description": "MOBILE PHONE OFF",
    "category": "thing"
  },
  {
    "name": "no_mobile_phones",
    "unicode": "1F4F5",
    "shortcode": "no_mobile_phones",
    "description": "NO MOBILE PHONES",
    "category": "thing"
  },
  {
    "name": "signal_strength",
    "unicode": "1F4F6",
    "shortcode": "signal_strength",
    "description": "ANTENNA WITH BARS",
    "category": "thing"
  },
  {
    "name": "camera",
    "unicode": "1F4F7",
    "shortcode": "camera",
    "description": "CAMERA",
    "category": "thing"
  },
  {
    "name": "video_camera",
    "unicode": "1F4F9",
    "shortcode": "video_camera",
    "description": "VIDEO CAMERA",
    "category": "thing"
  },
  {
    "name": "tv",
    "unicode": "1F4FA",
    "shortcode": "tv",
    "description": "TELEVISION",
    "category": "thing"
  },
  {
    "name": "radio",
    "unicode": "1F4FB",
    "shortcode": "radio",
    "description": "RADIO",
    "category": "thing"
  },
  {
    "name": "vhs",
    "unicode": "1F4FC",
    "shortcode": "vhs",
    "description": "VIDEOCASSETTE",
    "category": "thing"
  },
  {
    "name": "twisted_rightwards_arrows",
    "unicode": "1F500",
    "shortcode": "twisted_rightwards_arrows",
    "description": "TWISTED RIGHTWARDS ARROWS",
    "category": "thing"
  },
  {
    "name": "repeat",
    "unicode": "1F501",
    "shortcode": "repeat",
    "description": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS",
    "category": "thing"
  },
  {
    "name": "repeat_one",
    "unicode": "1F502",
    "shortcode": "repeat_one",
    "description": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY",
    "category": "thing"
  },
  {
    "name": "arrows_clockwise",
    "unicode": "1F503",
    "shortcode": "arrows_clockwise",
    "description": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "category": "thing"
  },
  {
    "name": "arrows_counterclockwise",
    "unicode": "1F504",
    "shortcode": "arrows_counterclockwise",
    "description": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "category": "thing"
  },
  {
    "name": "low_brightness",
    "unicode": "1F505",
    "shortcode": "low_brightness",
    "description": "LOW BRIGHTNESS SYMBOL",
    "category": "thing"
  },
  {
    "name": "high_brightness",
    "unicode": "1F506",
    "shortcode": "high_brightness",
    "description": "HIGH BRIGHTNESS SYMBOL",
    "category": "thing"
  },
  {
    "name": "mute",
    "unicode": "1F507",
    "shortcode": "mute",
    "description": "SPEAKER WITH CANCELLATION STROKE",
    "category": "thing"
  },
  {
    "name": "speaker",
    "unicode": "1F508",
    "shortcode": "speaker",
    "description": "SPEAKER",
    "category": "thing"
  },
  {
    "name": "sound",
    "unicode": "1F509",
    "shortcode": "sound",
    "description": "SPEAKER WITH ONE SOUND WAVE",
    "category": "thing"
  },
  {
    "name": "loud_sound",
    "unicode": "1F50A",
    "shortcode": "loud_sound",
    "description": "SPEAKER WITH THREE SOUND WAVES",
    "category": "thing"
  },
  {
    "name": "battery",
    "unicode": "1F50B",
    "shortcode": "battery",
    "description": "BATTERY",
    "category": "thing"
  },
  {
    "name": "electric_plug",
    "unicode": "1F50C",
    "shortcode": "electric_plug",
    "description": "ELECTRIC PLUG",
    "category": "thing"
  },
  {
    "name": "mag",
    "unicode": "1F50D",
    "shortcode": "mag",
    "description": "LEFT-POINTING MAGNIFYING GLASS",
    "category": "thing"
  },
  {
    "name": "mag_right",
    "unicode": "1F50E",
    "shortcode": "mag_right",
    "description": "RIGHT-POINTING MAGNIFYING GLASS",
    "category": "thing"
  },
  {
    "name": "lock_with_ink_pen",
    "unicode": "1F50F",
    "shortcode": "lock_with_ink_pen",
    "description": "LOCK WITH INK PEN",
    "category": "thing"
  },
  {
    "name": "closed_lock_with_key",
    "unicode": "1F510",
    "shortcode": "closed_lock_with_key",
    "description": "CLOSED LOCK WITH KEY",
    "category": "thing"
  },
  {
    "name": "key",
    "unicode": "1F511",
    "shortcode": "key",
    "description": "KEY",
    "category": "thing"
  },
  {
    "name": "lock",
    "unicode": "1F512",
    "shortcode": "lock",
    "description": "LOCK",
    "category": "thing"
  },
  {
    "name": "unlock",
    "unicode": "1F513",
    "shortcode": "unlock",
    "description": "OPEN LOCK",
    "category": "thing"
  },
  {
    "name": "bell",
    "unicode": "1F514",
    "shortcode": "bell",
    "description": "BELL",
    "category": "thing"
  },
  {
    "name": "no_bell",
    "unicode": "1F515",
    "shortcode": "no_bell",
    "description": "BELL WITH CANCELLATION STROKE",
    "category": "thing"
  },
  {
    "name": "bookmark",
    "unicode": "1F516",
    "shortcode": "bookmark",
    "description": "BOOKMARK",
    "category": "folderol"
  },
  {
    "name": "link",
    "unicode": "1F517",
    "shortcode": "link",
    "description": "LINK SYMBOL",
    "category": "folderol"
  },
  {
    "name": "radio_button",
    "unicode": "1F518",
    "shortcode": "radio_button",
    "description": "RADIO BUTTON",
    "category": "folderol"
  },
  {
    "name": "back",
    "unicode": "1F519",
    "shortcode": "back",
    "description": "BACK WITH LEFTWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "end",
    "unicode": "1F51A",
    "shortcode": "end",
    "description": "END WITH LEFTWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "on",
    "unicode": "1F51B",
    "shortcode": "on",
    "description": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "soon",
    "unicode": "1F51C",
    "shortcode": "soon",
    "description": "SOON WITH RIGHTWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "top",
    "unicode": "1F51D",
    "shortcode": "top",
    "description": "TOP WITH UPWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "underage",
    "unicode": "1F51E",
    "shortcode": "underage",
    "description": "NO ONE UNDER EIGHTEEN SYMBOL",
    "category": "folderol"
  },
  {
    "name": "keycap_ten",
    "unicode": "1F51F",
    "shortcode": "keycap_ten",
    "description": "KEYCAP TEN",
    "category": "folderol"
  },
  {
    "name": "capital_abcd",
    "unicode": "1F520",
    "shortcode": "capital_abcd",
    "description": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS",
    "category": "folderol"
  },
  {
    "name": "abcd",
    "unicode": "1F521",
    "shortcode": "abcd",
    "description": "INPUT SYMBOL FOR LATIN SMALL LETTERS",
    "category": "folderol"
  },
  {
    "name": "1234",
    "unicode": "1F522",
    "shortcode": "1234",
    "description": "INPUT SYMBOL FOR NUMBERS",
    "category": "folderol"
  },
  {
    "name": "symbols",
    "unicode": "1F523",
    "shortcode": "symbols",
    "description": "INPUT SYMBOL FOR SYMBOLS",
    "category": "folderol"
  },
  {
    "name": "abc",
    "unicode": "1F524",
    "shortcode": "abc",
    "description": "INPUT SYMBOL FOR LATIN LETTERS",
    "category": "folderol"
  },
  {
    "name": "fire",
    "unicode": "1F525",
    "shortcode": "fire",
    "description": "FIRE",
    "category": "thing"
  },
  {
    "name": "flashlight",
    "unicode": "1F526",
    "shortcode": "flashlight",
    "description": "ELECTRIC TORCH",
    "category": "thing"
  },
  {
    "name": "wrench",
    "unicode": "1F527",
    "shortcode": "wrench",
    "description": "WRENCH",
    "category": "thing"
  },
  {
    "name": "hammer",
    "unicode": "1F528",
    "shortcode": "hammer",
    "description": "HAMMER",
    "category": "thing"
  },
  {
    "name": "nut_and_bolt",
    "unicode": "1F529",
    "shortcode": "nut_and_bolt",
    "description": "NUT AND BOLT",
    "category": "thing"
  },
  {
    "name": "hocho",
    "unicode": "1F52A",
    "shortcode": "hocho",
    "description": "HOCHO",
    "category": "thing"
  },
  {
    "name": "gun",
    "unicode": "1F52B",
    "shortcode": "gun",
    "description": "PISTOL",
    "category": "thing"
  },
  {
    "name": "microscope",
    "unicode": "1F52C",
    "shortcode": "microscope",
    "description": "MICROSCOPE",
    "category": "thing"
  },
  {
    "name": "telescope",
    "unicode": "1F52D",
    "shortcode": "telescope",
    "description": "TELESCOPE",
    "category": "thing"
  },
  {
    "name": "crystal_ball",
    "unicode": "1F52E",
    "shortcode": "crystal_ball",
    "description": "CRYSTAL BALL",
    "category": "thing"
  },
  {
    "name": "six_pointed_star",
    "unicode": "1F52F",
    "shortcode": "six_pointed_star",
    "description": "SIX POINTED STAR WITH MIDDLE DOT",
    "category": "thing"
  },
  {
    "name": "beginner",
    "unicode": "1F530",
    "shortcode": "beginner",
    "description": "JAPANESE SYMBOL FOR BEGINNER",
    "category": "thing"
  },
  {
    "name": "trident",
    "unicode": "1F531",
    "shortcode": "trident",
    "description": "TRIDENT EMBLEM",
    "category": "thing"
  },
  {
    "name": "black_square_button",
    "unicode": "1F532",
    "shortcode": "black_square_button",
    "description": "BLACK SQUARE BUTTON",
    "category": "folderol"
  },
  {
    "name": "white_square_button",
    "unicode": "1F533",
    "shortcode": "white_square_button",
    "description": "WHITE SQUARE BUTTON",
    "category": "folderol"
  },
  {
    "name": "red_circle",
    "unicode": "1F534",
    "shortcode": "red_circle",
    "description": "LARGE RED CIRCLE",
    "category": "folderol"
  },
  {
    "name": "large_blue_circle",
    "unicode": "1F535",
    "shortcode": "large_blue_circle",
    "description": "LARGE BLUE CIRCLE",
    "category": "folderol"
  },
  {
    "name": "large_orange_diamond",
    "unicode": "1F536",
    "shortcode": "large_orange_diamond",
    "description": "LARGE ORANGE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "large_blue_diamond",
    "unicode": "1F537",
    "shortcode": "large_blue_diamond",
    "description": "LARGE BLUE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "small_orange_diamond",
    "unicode": "1F538",
    "shortcode": "small_orange_diamond",
    "description": "SMALL ORANGE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "small_blue_diamond",
    "unicode": "1F539",
    "shortcode": "small_blue_diamond",
    "description": "SMALL BLUE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "small_red_triangle",
    "unicode": "1F53A",
    "shortcode": "small_red_triangle",
    "description": "UP-POINTING RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "small_red_triangle_down",
    "unicode": "1F53B",
    "shortcode": "small_red_triangle_down",
    "description": "DOWN-POINTING RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_up_small",
    "unicode": "1F53C",
    "shortcode": "arrow_up_small",
    "description": "UP-POINTING SMALL RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_down_small",
    "unicode": "1F53D",
    "shortcode": "arrow_down_small",
    "description": "DOWN-POINTING SMALL RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "clock1",
    "unicode": "1F550",
    "shortcode": "clock1",
    "description": "CLOCK FACE ONE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock2",
    "unicode": "1F551",
    "shortcode": "clock2",
    "description": "CLOCK FACE TWO OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock3",
    "unicode": "1F552",
    "shortcode": "clock3",
    "description": "CLOCK FACE THREE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock4",
    "unicode": "1F553",
    "shortcode": "clock4",
    "description": "CLOCK FACE FOUR OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock5",
    "unicode": "1F554",
    "shortcode": "clock5",
    "description": "CLOCK FACE FIVE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock6",
    "unicode": "1F555",
    "shortcode": "clock6",
    "description": "CLOCK FACE SIX OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock7",
    "unicode": "1F556",
    "shortcode": "clock7",
    "description": "CLOCK FACE SEVEN OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock8",
    "unicode": "1F557",
    "shortcode": "clock8",
    "description": "CLOCK FACE EIGHT OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock9",
    "unicode": "1F558",
    "shortcode": "clock9",
    "description": "CLOCK FACE NINE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock10",
    "unicode": "1F559",
    "shortcode": "clock10",
    "description": "CLOCK FACE TEN OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock11",
    "unicode": "1F55A",
    "shortcode": "clock11",
    "description": "CLOCK FACE ELEVEN OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock12",
    "unicode": "1F55B",
    "shortcode": "clock12",
    "description": "CLOCK FACE TWELVE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock130",
    "unicode": "1F55C",
    "shortcode": "clock130",
    "description": "CLOCK FACE ONE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock230",
    "unicode": "1F55D",
    "shortcode": "clock230",
    "description": "CLOCK FACE TWO-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock330",
    "unicode": "1F55E",
    "shortcode": "clock330",
    "description": "CLOCK FACE THREE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock430",
    "unicode": "1F55F",
    "shortcode": "clock430",
    "description": "CLOCK FACE FOUR-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock530",
    "unicode": "1F560",
    "shortcode": "clock530",
    "description": "CLOCK FACE FIVE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock630",
    "unicode": "1F561",
    "shortcode": "clock630",
    "description": "CLOCK FACE SIX-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock730",
    "unicode": "1F562",
    "shortcode": "clock730",
    "description": "CLOCK FACE SEVEN-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock830",
    "unicode": "1F563",
    "shortcode": "clock830",
    "description": "CLOCK FACE EIGHT-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock930",
    "unicode": "1F564",
    "shortcode": "clock930",
    "description": "CLOCK FACE NINE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock1030",
    "unicode": "1F565",
    "shortcode": "clock1030",
    "description": "CLOCK FACE TEN-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock1130",
    "unicode": "1F566",
    "shortcode": "clock1130",
    "description": "CLOCK FACE ELEVEN-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock1230",
    "unicode": "1F567",
    "shortcode": "clock1230",
    "description": "CLOCK FACE TWELVE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "mount_fuji",
    "unicode": "1F5FB",
    "shortcode": "mount_fuji",
    "description": "MOUNT FUJI",
    "category": "travel"
  },
  {
    "name": "tokyo_tower",
    "unicode": "1F5FC",
    "shortcode": "tokyo_tower",
    "description": "TOKYO TOWER",
    "category": "travel"
  },
  {
    "name": "statue_of_liberty",
    "unicode": "1F5FD",
    "shortcode": "statue_of_liberty",
    "description": "STATUE OF LIBERTY",
    "category": "travel"
  },
  {
    "name": "japan",
    "unicode": "1F5FE",
    "shortcode": "japan",
    "description": "SILHOUETTE OF JAPAN",
    "category": "travel"
  },
  {
    "name": "moyai",
    "unicode": "1F5FF",
    "shortcode": "moyai",
    "description": "MOYAI",
    "category": "travel"
  },
  {
    "name": "grinning",
    "unicode": "1F600",
    "shortcode": "grinning",
    "description": "GRINNING FACE",
    "category": "people"
  },
  {
    "name": "grin",
    "unicode": "1F601",
    "shortcode": "grin",
    "description": "GRINNING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "joy",
    "unicode": "1F602",
    "shortcode": "joy",
    "description": "FACE WITH TEARS OF JOY",
    "category": "people"
  },
  {
    "name": "smiley",
    "unicode": "1F603",
    "shortcode": "smiley",
    "description": "SMILING FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "smile",
    "unicode": "1F604",
    "shortcode": "smile",
    "description": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
    "category": "people"
  },
  {
    "name": "sweat_smile",
    "unicode": "1F605",
    "shortcode": "sweat_smile",
    "description": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
    "category": "people"
  },
  {
    "name": "laughing",
    "unicode": "1F606",
    "shortcode": "laughing",
    "description": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
    "category": "people"
  },
  {
    "name": "innocent",
    "unicode": "1F607",
    "shortcode": "innocent",
    "description": "SMILING FACE WITH HALO",
    "category": "people"
  },
  {
    "name": "smiling_imp",
    "unicode": "1F608",
    "shortcode": "smiling_imp",
    "description": "SMILING FACE WITH HORNS",
    "category": "people"
  },
  {
    "name": "wink",
    "unicode": "1F609",
    "shortcode": "wink",
    "description": "WINKING FACE",
    "category": "people"
  },
  {
    "name": "blush",
    "unicode": "1F60A",
    "shortcode": "blush",
    "description": "SMILING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "yum",
    "unicode": "1F60B",
    "shortcode": "yum",
    "description": "FACE SAVOURING DELICIOUS FOOD",
    "category": "people"
  },
  {
    "name": "relieved",
    "unicode": "1F60C",
    "shortcode": "relieved",
    "description": "RELIEVED FACE",
    "category": "people"
  },
  {
    "name": "heart_eyes",
    "unicode": "1F60D",
    "shortcode": "heart_eyes",
    "description": "SMILING FACE WITH HEART-SHAPED EYES",
    "category": "people"
  },
  {
    "name": "sunglasses",
    "unicode": "1F60E",
    "shortcode": "sunglasses",
    "description": "SMILING FACE WITH SUNGLASSES",
    "category": "people"
  },
  {
    "name": "smirk",
    "unicode": "1F60F",
    "shortcode": "smirk",
    "description": "SMIRKING FACE",
    "category": "people"
  },
  {
    "name": "neutral_face",
    "unicode": "1F610",
    "shortcode": "neutral_face",
    "description": "NEUTRAL FACE",
    "category": "people"
  },
  {
    "name": "expressionless",
    "unicode": "1F611",
    "shortcode": "expressionless",
    "description": "EXPRESSIONLESS FACE",
    "category": "people"
  },
  {
    "name": "unamused",
    "unicode": "1F612",
    "shortcode": "unamused",
    "description": "UNAMUSED FACE",
    "category": "people"
  },
  {
    "name": "sweat",
    "unicode": "1F613",
    "shortcode": "sweat",
    "description": "FACE WITH COLD SWEAT",
    "category": "people"
  },
  {
    "name": "pensive",
    "unicode": "1F614",
    "shortcode": "pensive",
    "description": "PENSIVE FACE",
    "category": "people"
  },
  {
    "name": "confused",
    "unicode": "1F615",
    "shortcode": "confused",
    "description": "CONFUSED FACE",
    "category": "people"
  },
  {
    "name": "confounded",
    "unicode": "1F616",
    "shortcode": "confounded",
    "description": "CONFOUNDED FACE",
    "category": "people"
  },
  {
    "name": "kissing",
    "unicode": "1F617",
    "shortcode": "kissing",
    "description": "KISSING FACE",
    "category": "people"
  },
  {
    "name": "kissing_heart",
    "unicode": "1F618",
    "shortcode": "kissing_heart",
    "description": "FACE THROWING A KISS",
    "category": "people"
  },
  {
    "name": "kissing_smiling_eyes",
    "unicode": "1F619",
    "shortcode": "kissing_smiling_eyes",
    "description": "KISSING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "kissing_closed_eyes",
    "unicode": "1F61A",
    "shortcode": "kissing_closed_eyes",
    "description": "KISSING FACE WITH CLOSED EYES",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue",
    "unicode": "1F61B",
    "shortcode": "stuck_out_tongue",
    "description": "FACE WITH STUCK-OUT TONGUE",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue_winking_eye",
    "unicode": "1F61C",
    "shortcode": "stuck_out_tongue_winking_eye",
    "description": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue_closed_eyes",
    "unicode": "1F61D",
    "shortcode": "stuck_out_tongue_closed_eyes",
    "description": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
    "category": "people"
  },
  {
    "name": "disappointed",
    "unicode": "1F61E",
    "shortcode": "disappointed",
    "description": "DISAPPOINTED FACE",
    "category": "people"
  },
  {
    "name": "worried",
    "unicode": "1F61F",
    "shortcode": "worried",
    "description": "WORRIED FACE",
    "category": "people"
  },
  {
    "name": "angry",
    "unicode": "1F620",
    "shortcode": "angry",
    "description": "ANGRY FACE",
    "category": "people"
  },
  {
    "name": "rage",
    "unicode": "1F621",
    "shortcode": "rage",
    "description": "POUTING FACE",
    "category": "people"
  },
  {
    "name": "cry",
    "unicode": "1F622",
    "shortcode": "cry",
    "description": "CRYING FACE",
    "category": "people"
  },
  {
    "name": "persevere",
    "unicode": "1F623",
    "shortcode": "persevere",
    "description": "PERSEVERING FACE",
    "category": "people"
  },
  {
    "name": "triumph",
    "unicode": "1F624",
    "shortcode": "triumph",
    "description": "FACE WITH LOOK OF TRIUMPH",
    "category": "people"
  },
  {
    "name": "disappointed_relieved",
    "unicode": "1F625",
    "shortcode": "disappointed_relieved",
    "description": "DISAPPOINTED BUT RELIEVED FACE",
    "category": "people"
  },
  {
    "name": "frowning",
    "unicode": "1F626",
    "shortcode": "frowning",
    "description": "FROWNING FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "anguished",
    "unicode": "1F627",
    "shortcode": "anguished",
    "description": "ANGUISHED FACE",
    "category": "people"
  },
  {
    "name": "fearful",
    "unicode": "1F628",
    "shortcode": "fearful",
    "description": "FEARFUL FACE",
    "category": "people"
  },
  {
    "name": "weary",
    "unicode": "1F629",
    "shortcode": "weary",
    "description": "WEARY FACE",
    "category": "people"
  },
  {
    "name": "sleepy",
    "unicode": "1F62A",
    "shortcode": "sleepy",
    "description": "SLEEPY FACE",
    "category": "people"
  },
  {
    "name": "tired_face",
    "unicode": "1F62B",
    "shortcode": "tired_face",
    "description": "TIRED FACE",
    "category": "people"
  },
  {
    "name": "grimacing",
    "unicode": "1F62C",
    "shortcode": "grimacing",
    "description": "GRIMACING FACE",
    "category": "people"
  },
  {
    "name": "sob",
    "unicode": "1F62D",
    "shortcode": "sob",
    "description": "LOUDLY CRYING FACE",
    "category": "people"
  },
  {
    "name": "open_mouth",
    "unicode": "1F62E",
    "shortcode": "open_mouth",
    "description": "FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "hushed",
    "unicode": "1F62F",
    "shortcode": "hushed",
    "description": "HUSHED FACE",
    "category": "people"
  },
  {
    "name": "cold_sweat",
    "unicode": "1F630",
    "shortcode": "cold_sweat",
    "description": "FACE WITH OPEN MOUTH AND COLD SWEAT",
    "category": "people"
  },
  {
    "name": "scream",
    "unicode": "1F631",
    "shortcode": "scream",
    "description": "FACE SCREAMING IN FEAR",
    "category": "people"
  },
  {
    "name": "astonished",
    "unicode": "1F632",
    "shortcode": "astonished",
    "description": "ASTONISHED FACE",
    "category": "people"
  },
  {
    "name": "flushed",
    "unicode": "1F633",
    "shortcode": "flushed",
    "description": "FLUSHED FACE",
    "category": "people"
  },
  {
    "name": "sleeping",
    "unicode": "1F634",
    "shortcode": "sleeping",
    "description": "SLEEPING FACE",
    "category": "people"
  },
  {
    "name": "dizzy_face",
    "unicode": "1F635",
    "shortcode": "dizzy_face",
    "description": "DIZZY FACE",
    "category": "people"
  },
  {
    "name": "no_mouth",
    "unicode": "1F636",
    "shortcode": "no_mouth",
    "description": "FACE WITHOUT MOUTH",
    "category": "people"
  },
  {
    "name": "mask",
    "unicode": "1F637",
    "shortcode": "mask",
    "description": "FACE WITH MEDICAL MASK",
    "category": "people"
  },
  {
    "name": "smile_cat",
    "unicode": "1F638",
    "shortcode": "smile_cat",
    "description": "GRINNING CAT FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "joy_cat",
    "unicode": "1F639",
    "shortcode": "joy_cat",
    "description": "CAT FACE WITH TEARS OF JOY",
    "category": "people"
  },
  {
    "name": "smiley_cat",
    "unicode": "1F63A",
    "shortcode": "smiley_cat",
    "description": "SMILING CAT FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "heart_eyes_cat",
    "unicode": "1F63B",
    "shortcode": "heart_eyes_cat",
    "description": "SMILING CAT FACE WITH HEART-SHAPED EYES",
    "category": "people"
  },
  {
    "name": "smirk_cat",
    "unicode": "1F63C",
    "shortcode": "smirk_cat",
    "description": "CAT FACE WITH WRY SMILE",
    "category": "people"
  },
  {
    "name": "kissing_cat",
    "unicode": "1F63D",
    "shortcode": "kissing_cat",
    "description": "KISSING CAT FACE WITH CLOSED EYES",
    "category": "people"
  },
  {
    "name": "pouting_cat",
    "unicode": "1F63E",
    "shortcode": "pouting_cat",
    "description": "POUTING CAT FACE",
    "category": "people"
  },
  {
    "name": "crying_cat_face",
    "unicode": "1F63F",
    "shortcode": "crying_cat_face",
    "description": "CRYING CAT FACE",
    "category": "people"
  },
  {
    "name": "scream_cat",
    "unicode": "1F640",
    "shortcode": "scream_cat",
    "description": "WEARY CAT FACE",
    "category": "people"
  },
  {
    "name": "no_good",
    "unicode": "1F645",
    "shortcode": "no_good",
    "description": "FACE WITH NO GOOD GESTURE",
    "category": "people"
  },
  {
    "name": "ok_woman",
    "unicode": "1F646",
    "shortcode": "ok_woman",
    "description": "FACE WITH OK GESTURE",
    "category": "people"
  },
  {
    "name": "bow",
    "unicode": "1F647",
    "shortcode": "bow",
    "description": "PERSON BOWING DEEPLY",
    "category": "people"
  },
  {
    "name": "see_no_evil",
    "unicode": "1F648",
    "shortcode": "see_no_evil",
    "description": "SEE-NO-EVIL MONKEY",
    "category": "people"
  },
  {
    "name": "hear_no_evil",
    "unicode": "1F649",
    "shortcode": "hear_no_evil",
    "description": "HEAR-NO-EVIL MONKEY",
    "category": "people"
  },
  {
    "name": "speak_no_evil",
    "unicode": "1F64A",
    "shortcode": "speak_no_evil",
    "description": "SPEAK-NO-EVIL MONKEY",
    "category": "people"
  },
  {
    "name": "raising_hand",
    "unicode": "1F64B",
    "shortcode": "raising_hand",
    "description": "HAPPY PERSON RAISING ONE HAND",
    "category": "people"
  },
  {
    "name": "raised_hands",
    "unicode": "1F64C",
    "shortcode": "raised_hands",
    "description": "PERSON RAISING BOTH HANDS IN CELEBRATION",
    "category": "people"
  },
  {
    "name": "person_frowning",
    "unicode": "1F64D",
    "shortcode": "person_frowning",
    "description": "PERSON FROWNING",
    "category": "people"
  },
  {
    "name": "person_with_pouting_face",
    "unicode": "1F64E",
    "shortcode": "person_with_pouting_face",
    "description": "PERSON WITH POUTING FACE",
    "category": "people"
  },
  {
    "name": "pray",
    "unicode": "1F64F",
    "shortcode": "pray",
    "description": "PERSON WITH FOLDED HANDS",
    "category": "people"
  },
  {
    "name": "rocket",
    "unicode": "1F680",
    "shortcode": "rocket",
    "description": "ROCKET",
    "category": "travel"
  },
  {
    "name": "helicopter",
    "unicode": "1F681",
    "shortcode": "helicopter",
    "description": "HELICOPTER",
    "category": "travel"
  },
  {
    "name": "steam_locomotive",
    "unicode": "1F682",
    "shortcode": "steam_locomotive",
    "description": "STEAM LOCOMOTIVE",
    "category": "travel"
  },
  {
    "name": "railway_car",
    "unicode": "1F683",
    "shortcode": "railway_car",
    "description": "RAILWAY CAR",
    "category": "travel"
  },
  {
    "name": "bullettrain_side",
    "unicode": "1F684",
    "shortcode": "bullettrain_side",
    "description": "HIGH-SPEED TRAIN",
    "category": "travel"
  },
  {
    "name": "bullettrain_front",
    "unicode": "1F685",
    "shortcode": "bullettrain_front",
    "description": "HIGH-SPEED TRAIN WITH BULLET NOSE",
    "category": "travel"
  },
  {
    "name": "train2",
    "unicode": "1F686",
    "shortcode": "train2",
    "description": "TRAIN",
    "category": "travel"
  },
  {
    "name": "metro",
    "unicode": "1F687",
    "shortcode": "metro",
    "description": "METRO",
    "category": "travel"
  },
  {
    "name": "light_rail",
    "unicode": "1F688",
    "shortcode": "light_rail",
    "description": "LIGHT RAIL",
    "category": "travel"
  },
  {
    "name": "station",
    "unicode": "1F689",
    "shortcode": "station",
    "description": "STATION",
    "category": "travel"
  },
  {
    "name": "tram",
    "unicode": "1F68A",
    "shortcode": "tram",
    "description": "TRAM",
    "category": "travel"
  },
  {
    "name": "train",
    "unicode": "1F68B",
    "shortcode": "train",
    "description": "TRAM CAR",
    "category": "travel"
  },
  {
    "name": "bus",
    "unicode": "1F68C",
    "shortcode": "bus",
    "description": "BUS",
    "category": "travel"
  },
  {
    "name": "oncoming_bus",
    "unicode": "1F68D",
    "shortcode": "oncoming_bus",
    "description": "ONCOMING BUS",
    "category": "travel"
  },
  {
    "name": "trolleybus",
    "unicode": "1F68E",
    "shortcode": "trolleybus",
    "description": "TROLLEYBUS",
    "category": "travel"
  },
  {
    "name": "busstop",
    "unicode": "1F68F",
    "shortcode": "busstop",
    "description": "BUS STOP",
    "category": "travel"
  },
  {
    "name": "minibus",
    "unicode": "1F690",
    "shortcode": "minibus",
    "description": "MINIBUS",
    "category": "travel"
  },
  {
    "name": "ambulance",
    "unicode": "1F691",
    "shortcode": "ambulance",
    "description": "AMBULANCE",
    "category": "travel"
  },
  {
    "name": "fire_engine",
    "unicode": "1F692",
    "shortcode": "fire_engine",
    "description": "FIRE ENGINE",
    "category": "travel"
  },
  {
    "name": "police_car",
    "unicode": "1F693",
    "shortcode": "police_car",
    "description": "POLICE CAR",
    "category": "travel"
  },
  {
    "name": "oncoming_police_car",
    "unicode": "1F694",
    "shortcode": "oncoming_police_car",
    "description": "ONCOMING POLICE CAR",
    "category": "travel"
  },
  {
    "name": "taxi",
    "unicode": "1F695",
    "shortcode": "taxi",
    "description": "TAXI",
    "category": "travel"
  },
  {
    "name": "oncoming_taxi",
    "unicode": "1F696",
    "shortcode": "oncoming_taxi",
    "description": "ONCOMING TAXI",
    "category": "travel"
  },
  {
    "name": "car",
    "unicode": "1F697",
    "shortcode": "car",
    "description": "AUTOMOBILE",
    "category": "travel"
  },
  {
    "name": "oncoming_automobile",
    "unicode": "1F698",
    "shortcode": "oncoming_automobile",
    "description": "ONCOMING AUTOMOBILE",
    "category": "travel"
  },
  {
    "name": "blue_car",
    "unicode": "1F699",
    "shortcode": "blue_car",
    "description": "RECREATIONAL VEHICLE",
    "category": "travel"
  },
  {
    "name": "truck",
    "unicode": "1F69A",
    "shortcode": "truck",
    "description": "DELIVERY TRUCK",
    "category": "travel"
  },
  {
    "name": "articulated_lorry",
    "unicode": "1F69B",
    "shortcode": "articulated_lorry",
    "description": "ARTICULATED LORRY",
    "category": "travel"
  },
  {
    "name": "tractor",
    "unicode": "1F69C",
    "shortcode": "tractor",
    "description": "TRACTOR",
    "category": "travel"
  },
  {
    "name": "monorail",
    "unicode": "1F69D",
    "shortcode": "monorail",
    "description": "MONORAIL",
    "category": "travel"
  },
  {
    "name": "mountain_railway",
    "unicode": "1F69E",
    "shortcode": "mountain_railway",
    "description": "MOUNTAIN RAILWAY",
    "category": "travel"
  },
  {
    "name": "suspension_railway",
    "unicode": "1F69F",
    "shortcode": "suspension_railway",
    "description": "SUSPENSION RAILWAY",
    "category": "travel"
  },
  {
    "name": "mountain_cableway",
    "unicode": "1F6A0",
    "shortcode": "mountain_cableway",
    "description": "MOUNTAIN CABLEWAY",
    "category": "travel"
  },
  {
    "name": "aerial_tramway",
    "unicode": "1F6A1",
    "shortcode": "aerial_tramway",
    "description": "AERIAL TRAMWAY",
    "category": "travel"
  },
  {
    "name": "ship",
    "unicode": "1F6A2",
    "shortcode": "ship",
    "description": "SHIP",
    "category": "travel"
  },
  {
    "name": "rowboat",
    "unicode": "1F6A3",
    "shortcode": "rowboat",
    "description": "ROWBOAT",
    "category": "travel"
  },
  {
    "name": "speedboat",
    "unicode": "1F6A4",
    "shortcode": "speedboat",
    "description": "SPEEDBOAT",
    "category": "travel"
  },
  {
    "name": "traffic_light",
    "unicode": "1F6A5",
    "shortcode": "traffic_light",
    "description": "HORIZONTAL TRAFFIC LIGHT",
    "category": "travel"
  },
  {
    "name": "vertical_traffic_light",
    "unicode": "1F6A6",
    "shortcode": "vertical_traffic_light",
    "description": "VERTICAL TRAFFIC LIGHT",
    "category": "travel"
  },
  {
    "name": "construction",
    "unicode": "1F6A7",
    "shortcode": "construction",
    "description": "CONSTRUCTION SIGN",
    "category": "travel"
  },
  {
    "name": "rotating_light",
    "unicode": "1F6A8",
    "shortcode": "rotating_light",
    "description": "POLICE CARS REVOLVING LIGHT",
    "category": "travel"
  },
  {
    "name": "triangular_flag_on_post",
    "unicode": "1F6A9",
    "shortcode": "triangular_flag_on_post",
    "description": "TRIANGULAR FLAG ON POST",
    "category": "travel"
  },
  {
    "name": "door",
    "unicode": "1F6AA",
    "shortcode": "door",
    "description": "DOOR",
    "category": "travel"
  },
  {
    "name": "no_entry_sign",
    "unicode": "1F6AB",
    "shortcode": "no_entry_sign",
    "description": "NO ENTRY SIGN",
    "category": "travel"
  },
  {
    "name": "smoking",
    "unicode": "1F6AC",
    "shortcode": "smoking",
    "description": "SMOKING SYMBOL",
    "category": "travel"
  },
  {
    "name": "no_smoking",
    "unicode": "1F6AD",
    "shortcode": "no_smoking",
    "description": "NO SMOKING SYMBOL",
    "category": "travel"
  },
  {
    "name": "put_litter_in_its_place",
    "unicode": "1F6AE",
    "shortcode": "put_litter_in_its_place",
    "description": "PUT LITTER IN ITS PLACE SYMBOL",
    "category": "travel"
  },
  {
    "name": "do_not_litter",
    "unicode": "1F6AF",
    "shortcode": "do_not_litter",
    "description": "DO NOT LITTER SYMBOL",
    "category": "travel"
  },
  {
    "name": "potable_water",
    "unicode": "1F6B0",
    "shortcode": "potable_water",
    "description": "POTABLE WATER SYMBOL",
    "category": "travel"
  },
  {
    "name": "non-potable_water",
    "unicode": "1F6B1",
    "shortcode": "non-potable_water",
    "description": "NON-POTABLE WATER SYMBOL",
    "category": "travel"
  },
  {
    "name": "bike",
    "unicode": "1F6B2",
    "shortcode": "bike",
    "description": "BICYCLE",
    "category": "travel"
  },
  {
    "name": "no_bicycles",
    "unicode": "1F6B3",
    "shortcode": "no_bicycles",
    "description": "NO BICYCLES",
    "category": "travel"
  },
  {
    "name": "bicyclist",
    "unicode": "1F6B4",
    "shortcode": "bicyclist",
    "description": "BICYCLIST",
    "category": "travel"
  },
  {
    "name": "mountain_bicyclist",
    "unicode": "1F6B5",
    "shortcode": "mountain_bicyclist",
    "description": "MOUNTAIN BICYCLIST",
    "category": "travel"
  },
  {
    "name": "walking",
    "unicode": "1F6B6",
    "shortcode": "walking",
    "description": "PEDESTRIAN",
    "category": "travel"
  },
  {
    "name": "no_pedestrians",
    "unicode": "1F6B7",
    "shortcode": "no_pedestrians",
    "description": "NO PEDESTRIANS",
    "category": "travel"
  },
  {
    "name": "children_crossing",
    "unicode": "1F6B8",
    "shortcode": "children_crossing",
    "description": "CHILDREN CROSSING",
    "category": "travel"
  },
  {
    "name": "mens",
    "unicode": "1F6B9",
    "shortcode": "mens",
    "description": "MENS SYMBOL",
    "category": "travel"
  },
  {
    "name": "womens",
    "unicode": "1F6BA",
    "shortcode": "womens",
    "description": "WOMENS SYMBOL",
    "category": "travel"
  },
  {
    "name": "restroom",
    "unicode": "1F6BB",
    "shortcode": "restroom",
    "description": "RESTROOM",
    "category": "travel"
  },
  {
    "name": "baby_symbol",
    "unicode": "1F6BC",
    "shortcode": "baby_symbol",
    "description": "BABY SYMBOL",
    "category": "travel"
  },
  {
    "name": "toilet",
    "unicode": "1F6BD",
    "shortcode": "toilet",
    "description": "TOILET",
    "category": "travel"
  },
  {
    "name": "wc",
    "unicode": "1F6BE",
    "shortcode": "wc",
    "description": "WATER CLOSET",
    "category": "travel"
  },
  {
    "name": "shower",
    "unicode": "1F6BF",
    "shortcode": "shower",
    "description": "SHOWER",
    "category": "travel"
  },
  {
    "name": "bath",
    "unicode": "1F6C0",
    "shortcode": "bath",
    "description": "BATH",
    "category": "travel"
  },
  {
    "name": "bathtub",
    "unicode": "1F6C1",
    "shortcode": "bathtub",
    "description": "BATHTUB",
    "category": "travel"
  },
  {
    "name": "passport_control",
    "unicode": "1F6C2",
    "shortcode": "passport_control",
    "description": "PASSPORT CONTROL",
    "category": "travel"
  },
  {
    "name": "customs",
    "unicode": "1F6C3",
    "shortcode": "customs",
    "description": "CUSTOMS",
    "category": "travel"
  },
  {
    "name": "baggage_claim",
    "unicode": "1F6C4",
    "shortcode": "baggage_claim",
    "description": "BAGGAGE CLAIM",
    "category": "travel"
  },
  {
    "name": "left_luggage",
    "unicode": "1F6C5",
    "shortcode": "left_luggage",
    "description": "LEFT LUGGAGE",
    "category": "travel"
  },
  {
    "name": "hash",
    "unicode": "0023-20E3",
    "shortcode": "hash",
    "description": "HASH KEY",
    "category": "folderol"
  },
  {
    "name": "zero",
    "unicode": "0030-20E3",
    "shortcode": "zero",
    "description": "KEYCAP 0",
    "category": "folderol"
  },
  {
    "name": "one",
    "unicode": "0031-20E3",
    "shortcode": "one",
    "description": "KEYCAP 1",
    "category": "folderol"
  },
  {
    "name": "two",
    "unicode": "0032-20E3",
    "shortcode": "two",
    "description": "KEYCAP 2",
    "category": "folderol"
  },
  {
    "name": "three",
    "unicode": "0033-20E3",
    "shortcode": "three",
    "description": "KEYCAP 3",
    "category": "folderol"
  },
  {
    "name": "four",
    "unicode": "0034-20E3",
    "shortcode": "four",
    "description": "KEYCAP 4",
    "category": "folderol"
  },
  {
    "name": "five",
    "unicode": "0035-20E3",
    "shortcode": "five",
    "description": "KEYCAP 5",
    "category": "folderol"
  },
  {
    "name": "six",
    "unicode": "0036-20E3",
    "shortcode": "six",
    "description": "KEYCAP 6",
    "category": "folderol"
  },
  {
    "name": "seven",
    "unicode": "0037-20E3",
    "shortcode": "seven",
    "description": "KEYCAP 7",
    "category": "folderol"
  },
  {
    "name": "eight",
    "unicode": "0038-20E3",
    "shortcode": "eight",
    "description": "KEYCAP 8",
    "category": "folderol"
  },
  {
    "name": "nine",
    "unicode": "0039-20E3",
    "shortcode": "nine",
    "description": "KEYCAP 9",
    "category": "folderol"
  },
  {
    "name": "flag-cn",
    "unicode": "1F1E8-1F1F3",
    "shortcode": "flag-cn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CN",
    "category": "folderol"
  },
  {
    "name": "flag-de",
    "unicode": "1F1E9-1F1EA",
    "shortcode": "flag-de",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DE",
    "category": "folderol"
  },
  {
    "name": "flag-es",
    "unicode": "1F1EA-1F1F8",
    "shortcode": "flag-es",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ES",
    "category": "folderol"
  },
  {
    "name": "flag-fr",
    "unicode": "1F1EB-1F1F7",
    "shortcode": "flag-fr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FR",
    "category": "folderol"
  },
  {
    "name": "flag-gb",
    "unicode": "1F1EC-1F1E7",
    "shortcode": "flag-gb",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GB",
    "category": "folderol"
  },
  {
    "name": "flag-it",
    "unicode": "1F1EE-1F1F9",
    "shortcode": "flag-it",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IT",
    "category": "folderol"
  },
  {
    "name": "flag-jp",
    "unicode": "1F1EF-1F1F5",
    "shortcode": "flag-jp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS JP",
    "category": "folderol"
  },
  {
    "name": "flag-kr",
    "unicode": "1F1F0-1F1F7",
    "shortcode": "flag-kr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KR",
    "category": "folderol"
  },
  {
    "name": "flag-ru",
    "unicode": "1F1F7-1F1FA",
    "shortcode": "flag-ru",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RU",
    "category": "folderol"
  },
  {
    "name": "flag-us",
    "unicode": "1F1FA-1F1F8",
    "shortcode": "flag-us",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS US",
    "category": "folderol"
  }
]
});
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/emoji-picker/js/jquery.emojipicker.tw.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/simple_messenger/js/messenger_core.js---*/

    function BxSimpleMessenger()
    {
        // contain some chat box's settings;
        this.chatBoxSettings = new Object(),
        // contain all defined chat's boxes ;
        this.oDefinedChatBoxes  = new Object(),
        this.systemMessages = new Object(),
        this.isSent = true,
        this.bFirstRender = false,
        this.isProcessed  = true;
        this.mCorkHandler = '';
        this.isProcessedBlocked = false;

        /**
         * Function will send message from logged member ;
         *
         * @param  : e (system event) ;
         * @param  : evElement (object) (link on current field);
         * @param  : iRecipientId (integer) - recipient's Id;
         */
        this.sendMessage = function(e, evElement, iRecipientId)
        {
            var self = this;

            if(!this.isSent) {
                alert(this.systemMessages.waitMessage);
                return false;
            }

            if( !e ) {
                if( window.event ) { //Internet Explorer
                  e = window.event;
                } 
                else { //total failure, we have no way of referencing the event
                  return false;
                }
            }

            var n = e.keyCode ? e.keyCode : e.charCode; 

            if (n == 13) { //Enter
                if (e.preventDefault) 
                    e.preventDefault(); 
                else
                    e.returnValue = false;
                var sMessage = $.trim($(evElement).attr('value'));
                if ( !sMessage ) {
                    alert(this.systemMessages.emptyMessage);
                }
                else {
                    var _sRandom = Math.random();
                    this.isSent = false;

                    this.isProcessedBlocked =  true;
                    // stop the deserted notify procces;
                    clearTimeout(this.chatBoxSettings.updateTimeNotifyHandler);
                    this.chatBoxSettings.updateTimeNotifyHandler = '';

                    // send new message ;
                    $.post(this.chatBoxSettings.sPageReceiver + '/send_message/' + iRecipientId + '&_r=' + _sRandom, {message : encodeURIComponent(sMessage)}, 
                        function(sAnswer)
                        {
                            self.isSent = true;
                            var _self = self;

                            if(sAnswer) {
                                alert(sAnswer);
                            }
                            else {
                                // clear input field ;
                                $(evElement).attr('value', '');

                                self.loadMessageBlock( iRecipientId, 
                                    function() 
                                    { 
                                        // show the chat's box if he is not visible;
                                        var $el = $('#' + self.chatBoxSettings.sHistoryBlockPrefix + iRecipientId);
                                        if($el.css('visibility') == 'hidden') {
                                            self.showChatWindow(self.chatBoxSettings.sHistoryBlockPrefix + iRecipientId, $el.parent());
                                        }
                                    }
                                );
                            }

                            self.isProcessedBlocked =  false;
                            self.messageNotification();
                        }
                    );
                }
                return false;
            }
            return true;
        },

        /**
         * Function will load message block ;
         *
         * @param  : iRecipientId (integer) - recipient id;
         * @return : Html presentation data ;
         */
        this.loadMessageBlock = function(iRecipientId, callback)
        {
            var self = this;

            // if chat box not defined;
            if ( !this.checkChatBox(iRecipientId) ) {
                var _sRandom = Math.random();  

                // get new chat box ;
                $.get(this.chatBoxSettings.sPageReceiver + '/get_chat_box/' + iRecipientId + '&_r=' + _sRandom, 
                    function(sData)
                    {
                        // procces received data;
                        self.proccesReceivedData(sData);

                        if(typeof callback != 'undefined') {
                            callback();
                        }
                    }
                );
            }
            else {
                if(typeof callback != 'undefined') {
                        callback();
                }
            }
        },

        /**
         * Function will check new messages for current member ;
         *
         * @param : callback (string) - callback function's name;
         */
        this.messageNotification = function(callback)
        {
            if(this.isProcessedBlocked) {
                return;
            }

            // if data not processed start the cork function;
            if(!this.isProcessed) {
                this.cork();
            }
            else {
                var self = this;
                var iDefinedChatBoxes = this.oDefinedChatBoxes.boxes.length;
                var iLastMessageId = 0;
                var _sRandom = Math.random();
                
                var sRegisteredChatBoxes = '';

                // procces all registered chat's boxes;
                for( var i = 0; i < iDefinedChatBoxes; i++ )  
                {
                    // need define the last message's Id for current chat box;
                    iLastMessageId = this.oDefinedChatBoxes.boxes[i].last_message;
                    sRegisteredChatBoxes += this.oDefinedChatBoxes.boxes[i].box_id + ':' + iLastMessageId + ',';
                }

                // script will back chat's boxes;
                $.getJSON(this.chatBoxSettings.sPageReceiver + '/new_messages&_r=' + _sRandom, {'registered_chat_boxes': sRegisteredChatBoxes}, 
                    function(sData){

                        self.proccesReceivedData(sData);

                        if(typeof callback != 'undefined') {
                            callback();
                        }

                        if(self.isProcessed && !self.isProcessedBlocked) {
                            // start notificator again ;
                            self.chatBoxSettings.updateTimeNotifyHandler = setTimeout(function(){
                                self.messageNotification();
                            },self.chatBoxSettings.updateTime);
                        }
                    }
                );
            }
        },

        this.cork = function()
        {
            var self = this;

            if(this.isProcessed && !self.isProcessedBlocked) {
                clearInterval(this.mCorkHandler);
                this.messageNotification();
            }
            else {
                this.mCorkHandler = setTimeout(function(){
                    self.cork();
                }, 100);
            }
        },

        /**
         * Function will stop the active flashing signal;
         *
         * @param : iChatBoxIndex (integer) - chat box's index;
         */
        this.stopBlink = function(iChatBoxIndex)
        {
            if( typeof this.oDefinedChatBoxes.boxes[iChatBoxIndex] != 'undefined'){ 
                clearInterval(this.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_handler);
                this.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_handler ='';
                this.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_value   ='';
            }
        },

        /**
         * Function will set the blink mode for reciving block;
         *
         * @param : iChatBoxIndex (integer) - object id;
         * @param : oBlockId (object);
         */
        this.setBlinkMode = function(iChatBoxIndex, $oBlock)
        { 
            var self = this;

            // call the flash effect;
            var rHandler = setInterval(
                function()
                {
                    // define the chat box's blink handler;
                    self.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_handler = rHandler;

                    // define the first value for flash effect;
                    if(!self.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_value) {
                        self.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_value = 0;
                    }

                    var $oParents = $oBlock.parents('.' + self.chatBoxSettings.sChatBox + ':first');
                    // set chat box's background as colored;
                    $oParents.addClass('active_chat_block_blink_effect');

                    // set chat box's background as not colored;
                    setTimeout(
                        function() 
                        {
                            $oParents.removeClass('active_chat_block_blink_effect');

                            //increment the blink value;
                            self.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_value++;

                            if( self.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_value >= self.chatBoxSettings.iMaxBlinkCounter) {
                                if( !$oParents.hasClass('active_chat_block_blink_effect') ) {
                                    $oParents.addClass('active_chat_block_blink_effect');
                                }

                                self.stopBlink(iChatBoxIndex);
                                return;
                            }
                        }, 
                        500
                    );

                }, 1000
            );
        },

        /**
         * Function will scroll content;
         *
         * @param : oEl (object) - message's container;
         */
        this.elScroll = function(oEl)
        {
            // define the chat boxe's childrens height;
            iHeight = this.getChatBoxContentHeight(oEl);
            oEl.scrollTop(iHeight);
        },

        /**
         * Function will procces and evaluate received code (data must will be in JSON format);
         *
         * @param : sData (string) - data that need to procces and eveluate ;
         */
        this.proccesReceivedData = function(oResponse)
        {
            if(this.isProcessedBlocked) {
                return;
            }

            // if page receiver return some content;
            if (oResponse)  {
                this.isProcessed = false;
                var self = this;

                var iResponseCount = oResponse.senders.length;

                for( var i = 0; i < iResponseCount; i++ ) 
                {
                    // define sender's id;
                    var iSenderId  = oResponse.senders[i].sender_id;

                    if(!iSenderId) {
                        continue;
                    }

                    // define the object index;
                    var iChatBoxIndex   = this.getChatBoxObjectIndex(iSenderId);

                    // set as defined received chat box if not registered;
                    var bBoxUndefined = false;
                    if ( !this.checkChatBox(iSenderId) )
                    {
                        this.oDefinedChatBoxes.boxes[this.oDefinedChatBoxes.boxes.length] = 
                            {
                                'box_id'             : iSenderId, 
                                'status'             : oResponse.senders[i].sender_status, 
                                'status_text_update' : oResponse.senders[i].status_update_time,
                                'blink_handler'      : 0,
                                'blink_value'        : 0,
                                'last_message'       : parseInt(oResponse.senders[i].last_message),
                                'count_messages'     : oResponse.senders[i].count_messages
                            }

                            bBoxUndefined = true;
                    }
   
                    // check received data ;
                    if ( oResponse.senders[i].chat_box &&  bBoxUndefined) {
                        // draw new chat box in predefined output's block;
                        $('#' + this.chatBoxSettings.sOutputBlockId).append(oResponse.senders[i].chat_box);
                    }

                    var $oWrapper = $('#' + this.chatBoxSettings.sHistoryBlockPrefix + iSenderId);
                    var $el = $oWrapper.find('div.messages_section:first');

                    // if isset new messages for current chat box;
                    if (oResponse.senders[i].messages_list) {
                        // if chat box's messages come in section as `message_block`;
                        if ( oResponse.senders[i].messages_list != 'built-in') {

                            var iChatBoxHeight =  $el.outerHeight();
                            var iOldChatBoxContentHeight = this.getChatBoxContentHeight($el);
                            var sVisibleState = this.getVisibility($el);

                            if( (sVisibleState == 'hidden' && !this.oDefinedChatBoxes.boxes[iChatBoxIndex].blink_handler) || bBoxUndefined) {
                                // send the flesh signals;
                                this.setBlinkMode(iChatBoxIndex, $el);
                            }

                            // add received messages into current chat box;
                            $el.append(oResponse.senders[i].messages_list);

                            iOldChatBoxContentHeight = iOldChatBoxContentHeight - iChatBoxHeight;
                            if(iOldChatBoxContentHeight <= $el.scrollTop() && sVisibleState == 'visible') {
                                this.elScroll($el);
                            }

                            // count all chat boxe's messages, if count of messages more than  25 for example (see this.iNumberVisibleMessages in BxSimpleMessengerModule.php);
                            // function will delete all odd strings from the current chat box ;
                            if(this.oDefinedChatBoxes.boxes[iChatBoxIndex].count_messages > this.chatBoxSettings.iNumberVisibleMessages) {
                               
                                var $oKids = $('#' + this.chatBoxSettings.sHistoryBlockPrefix + oResponse.senders[i].sender_id + ' div.messages_section').children();
                                var iKidsCount = $oKids.length;

                                var iRowsDelete = iKidsCount - this.chatBoxSettings.iNumberVisibleMessages;
                                this.oDefinedChatBoxes.boxes[iChatBoxIndex].count_messages -= iRowsDelete;

                                for( var j = 0; j < iRowsDelete; j++ )
                                {
                                    $('#' + this.chatBoxSettings.sHistoryBlockPrefix + oResponse.senders[i].sender_id + ' div.messages_section > div:first-child').remove();
                                }
                            }
                        }
                        else {
                            if(this.bFirstRender && oResponse.senders[i].messages_list == 'built-in') {
                                if( this.getVisibility($el) != 'visible') {
                                    this.setBlinkMode(iChatBoxIndex, $el);
                                }
                            }    
                        }
                    }

                    // check the sender's status text and sender's status;
                    if( typeof this.oDefinedChatBoxes.boxes[iChatBoxIndex] != 'undefined' && !bBoxUndefined){ 

                        if( this.oDefinedChatBoxes.boxes[iChatBoxIndex].status_text_update != oResponse.senders[i].status_update_time) {
                            this.getStatusText(iSenderId);
                            this.oDefinedChatBoxes.boxes[iChatBoxIndex].status_text_update = oResponse.senders[i].status_update_time;
                        }

                        if( this.oDefinedChatBoxes.boxes[iChatBoxIndex].status != oResponse.senders[i].sender_status) {
                            this.getSenderStatus(iSenderId);
                            this.oDefinedChatBoxes.boxes[iChatBoxIndex].status = oResponse.senders[i].sender_status;
                        }

                        // define the last messages id for current chat box;
                        this.oDefinedChatBoxes.boxes[iChatBoxIndex].last_message = parseInt(oResponse.senders[i].last_message);
                        // sum count of received messages;
                        if(oResponse.senders[i].count_messages) {
                            this.oDefinedChatBoxes.boxes[iChatBoxIndex].count_messages += parseInt(oResponse.senders[i].count_messages);
                        }
                    }
                }

                // all data was processed;
                this.isProcessed = true;
            }

            if(!this.bFirstRender) {
                this.bFirstRender = true;
            }
        },

        /**
         * Function will define obj visibility option;
         *
         */
        this.getVisibility =  function(oObj)
        {
            var sVisibleState = oObj.css('visibility');
            if(sVisibleState == 'inherit') {
                sVisibleState = oObj.parent().css('visibility');
            }

            return sVisibleState;
        },

        /**
         * Function will get the chat box's sub content height;
         * Need for srolling content into chat box;
         *
         * @param  : $oChatBox (object) - chat box;
         * @return : (integer) - sub content height;
         */
        this.getChatBoxContentHeight = function($oChatBox)
        {
            var iChatBoxContentHeight = 0;

            // define the chat boxe's childrens height;
            $oChatBox.children(':not(.emojiPicker)').each(function(){
                iChatBoxContentHeight = iChatBoxContentHeight + $(this).outerHeight();
            });

            return iChatBoxContentHeight;
        },

        /**
         * Function will check received chat box's id in chatBox object;
         * and if find it will return 1 else 0;
         *
         * @param  : iChatBoxId (integer) - chat box's id;
         * @return : (integer) - will return 1 if isset and 0 if not; 
         */
        this.checkChatBox = function(iChatBoxId)
        {
            var iDefinedChatBoxes = this.oDefinedChatBoxes.boxes.length;
            for( var i = 0; i < iDefinedChatBoxes; i++ )  
            {
                if( this.oDefinedChatBoxes.boxes[i].box_id == iChatBoxId) {
                    return 1;
                }
            }

            return 0;
        },

        /**
         * Function will define the chat box's index;
         *
         * @param  : iSenderId (integer) - sender's id;
         * @return : (integer) - chat box's index;
         */
        this.getChatBoxObjectIndex = function(iSenderId)
        {
            var iDefinedChatBoxes = this.oDefinedChatBoxes.boxes.length;
            var iChatBoxIndex = 0;

            // define current chat box;
            for( var i = 0; i < iDefinedChatBoxes; i++)
            {
                if(this.oDefinedChatBoxes.boxes[i].box_id == iSenderId) {
                    return iChatBoxIndex = i;
                }
            }

            return iChatBoxIndex;
        },

        /**
         * Function will show chat window;
         *
         * @param : sWindowId (string) - window's id;
         */
        this.showChatWindow = function(sWindowId, oParentWindow)
        {  
            var $el = $('#' + sWindowId);
            var $this = this;

            // add emoji
            $el.find('input').addEmojiInput({
                wrapper: $('#' + sWindowId).find('.messages_section'),
                onhide: function (ePicker) {
                    var $oMessagesSection = $el.find('div.messages_section:first');
                    $this.elScroll($oMessagesSection);
                }
            });

            // try to define chat box's parent;
            if(typeof oParentWindow == 'undefined') {
                var oParentWindow = $('#' + sWindowId).parent();
            }

            // set as unactivated;
            if( $el.css('visibility') == 'visible' || $el.css('visibility') == 'inherit' ) {
                $(oParentWindow).removeClass('active_chat_block');
                $el.css('visibility', 'hidden');
            }
            else {
            
                // set as window active;
                var iSenderId = sWindowId.replace(/[^0-9]*/, '');
                var iChatBoxIndex = this.getChatBoxObjectIndex(iSenderId);

                // stop the flash effect if isset;
                this.stopBlink(iChatBoxIndex);

                $(oParentWindow).addClass('active_chat_block');
                $(oParentWindow).removeClass('active_chat_block_blink_effect');
            
                // set chat box's layout position;
                if(this.chatBoxSettings.sMemberMenuPosition  == 'bottom' ) {
                    $el.css('bottom', this.chatBoxSettings.iParentContainerHeight);
                }
                else {
                    $el.css('top', this.chatBoxSettings.iParentContainerHeight);
                }

                $el.css({
                    visibility: 'visible',
                    left: $el.position().left - ($el.offset().left < 0 ? $el.offset().left : 0)
                });

                this.placeTop(sWindowId, this);
            }
            
            // scroll content;
            var $oMessagesSection = $el.find('div.messages_section:first');
            this.elScroll($oMessagesSection);
        },

        /**
         * Function will block all browser's event actions;
         *
         * @param : oCurrentWindow (object) - current chat's window;
         * @param : calback (object) - calback function's name;
        */
        this.facePlate = function(event, oCurrentWindow, calback)
        {
            jQuery.each(jQuery.browser, function(i) {
                if($.browser.msie){
                    event.cancelBubble = true;
                }
                else{
                   event.stopPropagation();
                }
            });

            if(typeof calback != 'undefined') {
                calback(oCurrentWindow, this);
            }
        },

        /**
         * Function will load the chat window on top of all active chat boxes;
         *
         * @param : vCurrentChatWindow (object) or (string) - current chat's window or chat's window id;
         * @param : self (object)               - link on created object;
         */
        this.placeTop = function(vCurrentChatWindow, self)
        {
            var iZindex     = 0;
            var iTempZindex = 0;

            // get max z-index value;
            $('#' + self.chatBoxSettings.sOutputBlockId + ' div.' + self.chatBoxSettings.sChatBox).each(
                function()
                {
                    iTempZindex = parseInt( $(this).css('z-index') );
                    if(iZindex < iTempZindex) {
                        iZindex = iTempZindex;
                    }
                }
            );

            iZindex += 1;
            if(typeof vCurrentChatWindow != 'object') {
                var $el = $('#' + vCurrentChatWindow);
            }
            else {
               var $el = $(vCurrentChatWindow);
            }

            $el.css('z-index', iZindex);
            $el.parent().css('z-index', iZindex);
        },

        /**
         * Function will close the chat window;
         *
         * @param : iSenderId (integer) - message's sender id;
         */
        this.closeChatWindow = function(iSenderId)
        {
            var _sRandom = Math.random();
            var self = this;

            // send the close singnal;
            $.get(this.chatBoxSettings.sPageReceiver + '/close_window/' + iSenderId, {'_r' : _sRandom}, 
                function(sData)
                {
                    var iChatBoxCount = self.oDefinedChatBoxes.boxes.length;
                    for( var i=0; i < iChatBoxCount; i++)
                    {
                        if (typeof self.oDefinedChatBoxes.boxes[i] != 'undefined' 
                                    && self.oDefinedChatBoxes.boxes[i].box_id == iSenderId) {
                            // remove from registered chat boxes;
                            self.oDefinedChatBoxes.boxes.splice(i,1);

                            // remove from DOM;
                            $('#' + self.chatBoxSettings.sHistoryBlockPrefix + iSenderId).parent().remove();
                        }
                    }

                }
            );
        },

        /**
         * Function will get sender's status text;
         *
         * @param : iSenderId (integer) - sender's id;
         */
        this.getStatusText = function(iSenderId)
        {
            var _sRandom = Math.random();

            $('#' + this.chatBoxSettings.sHistoryBlockPrefix + iSenderId).find('.status_text').load
            (
                this.chatBoxSettings.sPageReceiver + '/get_status_text/' + iSenderId + '&_r=' + _sRandom
            );
        },

        /**
         * Function will get sender's status;
         *
         * @param : iSenderId (integer) - sender's id;
         */
        this.getSenderStatus = function(iSenderId)
        {
            var self = this ;
            var _sRandom = Math.random();

            // get new status image path;
            $.get(this.chatBoxSettings.sPageReceiver + '/get_status/' + iSenderId, {_r : _sRandom}, 
                function(sImgPath)
                {
                    $('#' + self.chatBoxSettings.sHistoryBlockPrefix + iSenderId).parent().find('.sender_status').attr('src', sImgPath);
                    self.getSenderThumbnail(iSenderId);
                }
            );
        },

        /**
         * Function will get sender's thumbnail image;
         *
         * @param : iSenderId (integer) - sender's id;
         */     
        this.getSenderThumbnail = function(iSenderId)
        {
            var _sRandom = Math.random();

            $('#' + this.chatBoxSettings.sHistoryBlockPrefix + iSenderId).parent().find('.sender_thumb').load
            (
                this.chatBoxSettings.sPageReceiver + '/get_sender_thumb/' + iSenderId + '&_r=' + _sRandom
            );
        }
    }

    var oSimpleMessenger = new BxSimpleMessenger();
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/simple_messenger/js/messenger_core.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/loadCSS.js---*/
/*!
loadCSS: load a CSS file asynchronously.
[c]2015 @scottjehl, Filament Group, Inc.
Licensed MIT
*/
(function(w){
	"use strict";
	/* exported loadCSS */
	var loadCSS = function( href, before, media ){
		// Arguments explained:
		// `href` [REQUIRED] is the URL for your CSS file.
		// `before` [OPTIONAL] is the element the script should use as a reference for injecting our stylesheet <link> before
			// By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM. However, you might desire a more specific location in your document.
		// `media` [OPTIONAL] is the media type or query of the stylesheet. By default it will be 'all'
		var doc = w.document;
		var ss = doc.createElement( "link" );
		var ref;
		if( before ){
			ref = before;
		}
		else {
			var refs = ( doc.body || doc.getElementsByTagName( "head" )[ 0 ] ).childNodes;
			ref = refs[ refs.length - 1];
		}

		var sheets = doc.styleSheets;
		ss.rel = "stylesheet";
		ss.href = href;
		// temporarily set media to something inapplicable to ensure it'll fetch without blocking render
		ss.media = "only x";

		// Inject link
			// Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
			// Note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
		ref.parentNode.insertBefore( ss, ( before ? ref : ref.nextSibling ) );
		// A method (exposed on return object for external use) that mimics onload by polling until document.styleSheets until it includes the new sheet.
		var onloadcssdefined = function( cb ){
			var resolvedHref = ss.href;
			var i = sheets.length;
			while( i-- ){
				if( sheets[ i ].href === resolvedHref ){
					return cb();
				}
			}
			setTimeout(function() {
				onloadcssdefined( cb );
			});
		};

		// once loaded, set link's media back to `all` so that the stylesheet applies once it loads
		ss.onloadcssdefined = onloadcssdefined;
		onloadcssdefined(function() {
			ss.media = media || "all";
		});
		return ss;
	};
	// commonjs
	if( typeof module !== "undefined" ){
		module.exports = loadCSS;
	}
	else {
		w.loadCSS = loadCSS;
	}
}( typeof global !== "undefined" ? global : this ));

;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/plugins/loadCSS.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/inc/js/user_status.js---*/
function BxUserStatus()
{
    // contain path to the site home URL ;
    this.HomeUrl;
    
    // contain true if current profile page ;
    this.bIsProfilePage;

    this.sCurrentStatusElementClass = 'sys-online-offline-changer';
    this.sCurrentStatusElementSelector = '.' + this.sCurrentStatusElementClass;

    this.userStatusInit = function(sHomeUrl, bProfilepage) 
    {
        this.HomeUrl = sHomeUrl;
        this.bIsProfilePage = (bProfilepage) ? true : false;
    };

    /**
     * Function will set member's status 
     *      (are possible values : online, offline, away, busy) ;
     *
     * @param : sStatus   (string)  - member's current status;
     * @param : oObject (object) - current html object ;
     */
    this.setUserStatus = function( sStatus, oObject, isForcePageReload ) 
    {
    	var self = this;
        var sStatus = encodeURIComponent(sStatus);
        var _sRandom = Math.random();

    	$.post(this.HomeUrl + 'list_pop.php?action=change_status' + '&_r=' + _sRandom, { 'status' : sStatus }, function(sData) {
            if ( self.bIsProfilePage || ('undefined' != typeof(isForcePageReload) && isForcePageReload)) {
                document.location.reload();
            } else {
                $(self.sCurrentStatusElementSelector).attr( { 'alt' : sStatus} ).removeClass().addClass(self.sCurrentStatusElementClass + ' sys-icon ' + sData);
                self.closeSubMenu(oObject);
            }
    	});
    };

    /**
     * Function will send new member's status message;
     *
     * @param : e (object) - keyboard event;
     * @param : oObject (object) - current html object (that contain new status message);
     */
    this.sendStatusMessage = function(e, oObject)
    {
        var self = this;

        if( !e ) {
            if( window.event ) { //Internet Explorer
              e = window.event;
            } 
            else { //total failure, we have no way of referencing the event
              return false;
            }
        }

        var n = e.keyCode ? e.keyCode : e.charCode; 

        if (n == 13) { //Enter
			if (e.preventDefault)  
				e.preventDefault();  
			else 
				e.returnValue = false;

            self.PerformSendingStatusMess(oObject);
            return false;
        }

        return true;
    };

    this.PerformSendingStatusMess = function(oObject) {
        var self = this;
        var _sRandom = Math.random();

        $.post( this.HomeUrl + 'list_pop.php?action=change_status_message' + '&_r=' + _sRandom, { status_message : oObject.value }, 
            function(sData) {
                $('#StatusMessage > .sys_sm_text').html(oObject.value).parent().show();
                $('#inloadedStatusMess').html('');
                
                //window.location.href = window.location.href; // Ticket #1359
                if ( self.bIsProfilePage ) {
                    document.location.reload();
                }
                else {
                    // try to close self window;
                    self.closeSubMenu( $(oObject).parents('ul:first') );
                }
            }
        );
    };

    /**
     * Function  will close the current opened member's sub menu;
     *
     * @param : oObject (object) - current object;
     */
    this.closeSubMenu = function (oObject)
    {
        if ( typeof membermenu != 'undefined' ) {
            membermenu.close_popup( $(oObject).attr('id') );
        }
    };
}

;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/inc/js/user_status.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/site_customize/js/colorinput.js---*/
/*
Color Input for jQuery
Copyright (c) 2008 Anthony Johnston
http://www.antix.co.uk
http://code.google.com/p/jquery-colorinput/
        
version 0.9.6
*/

/// <reference path="http://code.jquery.com/jquery-latest.min.js" />

(function($) {

    $.fn.colorInput = function(options) {
        /// <summary>Convert a input elements into a colour picker<summary>
        /// <param name="options">options (optional)</param>
        options = jQuery.extend($.colorInput.defaults, options);

        this.each(function() {
            $(this).data("colorControl", new $.colorInput(this, options));
        });

        return this;
    }
    $.fn.colorSelected = function(handler) {
        /// <summary>Custom event for colour selection<summary>
        /// <param name="handler">handler</param>

        if (handler) {
            this.bind("colorSelected", handler);

            return this;
        } else {
            this.trigger("colorSelected");
        }
    }
    $.fn.colorAccept = function(handler) {
        /// <summary>Custom event for accepting a color selection<summary>
        /// <param name="handler">handler</param>

        if (handler) {
            this.bind("colorAccept", handler);

            return this;
        } else {
            this.trigger("colorAccept");
        }
    }
    $.fn.colorCancel = function(handler) {
        /// <summary>Custom event for cancelling a colour selection<summary>
        /// <param name="handler">handler</param>

        if (handler) {
            this.bind("colorCancel", handler);

            return this;
        } else {
            this.trigger("colorCancel");
        }
    }

    $.colorInput = function(input, options) {
        /// <summary>Create a color picker for the input passed</summary>
        /// <param name="$input">an input element (required)</param>
        /// <param name="options">options (optional)</param>

        var $input = $(input);
        // check not already colorInput'ed, if so return
        if ($input.data("colorControl") != null) { return this; }

        var control = this,
            saturationBrightnessSize = options.cells * options.cellSize,
            totalWidth = options.cells * options.cellSize + options.hueWidth;

        // add a button to show current color and show popup
        var buttonString = "<button ".concat("class='colorButton' style='width:", options.hueWidth, "px;height:", options.hueWidth, "px;margin:0;padding:0;border:none 0;line-height:", options.hueWidth - 2, "px'>&nbsp;</button>");
        
        var $button = $(buttonString),
            $buttonContainer, $buttonAccept, $buttonCancel;
        $input.after($button);
        $button.click(function(e) {
            if ($.colorInput.current == control) { accept() }
            else {
                if ($.colorInput.current) { $.colorInput.current.cancel() }
                else { show(); }
            }

            e.stopPropagation();
            return false;
        });

        // check for dropdown
        var $dropdown = $("#".concat(options.dropdownId));
        if ($dropdown.length == 1) {
            if (options.acceptCancelButtons) {
                // grab button references
                $buttonContainer = $dropdown.find(".colorButtons");
                $buttonAccept = $buttonContainer.find(":eq(0)");
                $buttonCancel = $buttonContainer.find(":eq(1)");
            }
        } else {
            // create and add to document
            $dropdown =
                $("<div ".concat("id='", options.dropdownId, "' class='colorDropdown' style='display:none;position:absolute;overflow:visible;height:0;margin:0;padding:0;cursor:pointer'></div>"))
                    .append(
                        $("<div ".concat("style='float:left;width:", saturationBrightnessSize, "px;height:", saturationBrightnessSize, "px;margin:0;padding:0'></div>"))
                            .append(getHueMap(options))
                            .append(getSaturationBrightnessMap(options)));

            if (options.acceptCancelButtons) {
                // setup accept and cancel buttons
                $buttonAccept = $(buttonString)
                    .text(options.textAccept)
                    .css({ width: Math.round(saturationBrightnessSize / 2) });
                $buttonCancel = $(buttonString)
                    .text(options.textCancel)
                    .css({ width: Math.round(saturationBrightnessSize / 2) });
                
                $buttonContainer = $("<div ".concat("class='colorButtons' style='position:absolute;z-index:0;left:0;width=", saturationBrightnessSize, "px;height:", options.hueWidth, "px'></div>"))
                    .append($buttonAccept)
                    .append($buttonCancel);
                
                $dropdown.prepend($buttonContainer);
            }

            $(document.body).append($dropdown);
        }

        var 
            $sb = $dropdown.find(".saturationBrightnessMap"),
            $h = $dropdown.find(".hueMap"),
            value = new $.colorInput.color(), valueHex, originalValueHex,
            shown = false;

        if (options.hideInput) { $input.hide(); }

        // private functions
        var drawTimeoutId;
        var draw = function(delay) {
            /// <summary>Draw current color variations of saturation and brightness</summary>

            if (drawTimeoutId) {
                // clear the timeout
                clearTimeout(drawTimeoutId);
                drawTimeoutId = null;
            }
            if (delay) {
                // delay the draw
                drawTimeoutId = setTimeout(draw, delay);
                return;
            }

            // draw hues, to offset of current color
            var h = value.hue * saturationBrightnessSize - Math.round(value.hue * saturationBrightnessSize);
            var color = new $.colorInput.color(0, 1, 1);
            showHueSelected(null);
            $h.find("div").each(function() {
                color.hue = h / saturationBrightnessSize;
                this.hue = color.hue;
                this.color = color.toHex();
                this.style.backgroundColor = this.color;

                if (this.hue == value.hue) { showHueSelected(this); }

                h++;
            });

            // draw saturation and brightness variants to offsets
            var s = 0,
                b = 0;
            color = new $.colorInput.color(value.hue, 0, 0);
            showSaturationBrightnessSelected(null);
            $sb.find("div").each(function() {
                color.saturation = 1 - s / (options.cells - 1);
                color.brightness = 1 - b / (options.cells - 1);
                this.saturation = color.saturation;
                this.brightness = color.brightness;
                this.color = color.toHex();
                this.style.backgroundColor = this.color;

                if (this.color == valueHex) { showSaturationBrightnessSelected(this); }

                s++;
                if (s == options.cells) {
                    s = 0;
                    b++;
                }
            });
        }
        var selectColor = function() {
            /// <summary>selects the color from the input</summary>

            var val = $input.find('input[type=text]').val();
            if (val != valueHex) {
                value.fromHex(val);
                setValueHex(val, shown);
            }
        }
        var setValueHex = function(val, doDraw) {
            /// <summary>set the valueHex and button colour</summary>

            valueHex = val;
            $input.find('input[type=text]').val(val);

            control.isChanged = originalValueHex && val != originalValueHex;

            $button.css({
                backgroundColor: val.length > 0 ? val : '#000000',
                color: value.brightnessContrast().toHex()
            });
            if (options.acceptCancelButtons) {
                $buttonAccept.css({
                    backgroundColor: val,
                    color: value.brightnessContrast().toHex()
                });
            }

            if (doDraw) { draw(options.hoverSelect ? 50 : 0) }
        }
        var accept = function() {
            /// <summary>hide the dropdown, keep the current value</summary>

            if (originalValueHex != valueHex) { $input.change(); }
            originalValueHex = null;
            hide();
        }
        var cancel = function() {
            /// <summary>hide the dropdown, revert to original value</summary>

            if (control.isChanged) {
                $input.find('input[type=text]').val(originalValueHex);
                selectColor();
                $input.colorSelected();
            }
            originalValueHex = null;
            hide();
        }
        var hide = function() {
            /// <summary>hide the dropdown</summary>

            // unbind events
            $.each(options.cancelOnClick, function() {
                $(this).unbind("click.color");
            });
            $h.find("div")
                .unbind("mousedown")
                .unbind("mousemove")
                .unbind("mouseup")
                .unbind("click");

            $sb.find("div")
                .unbind("mousedown")
                .unbind("mousemove")
                .unbind("mouseup")
                .unbind("click");

            $sb.unbind("dblclick");

            $dropdown.unbind("click");
            if (options.acceptCancelButtons) {
                $buttonContainer.animate(
                    { marginTop: 0 },
                    { duration: 125 }
                );
                $buttonAccept.unbind("click");
                $buttonCancel.unbind("click");
            }
            $h.animate(
                { marginLeft: saturationBrightnessSize - options.hueWidth },
                {
                    duration: 125,
                    complete: function() {
                        $h.css({ display: "none" });
                        $dropdown.animate(
                            {
                                height: 0,
                                width: 0
                            },
                            {
                                duration: 250,
                                complete: function() {
                                    $dropdown.css({ display: "none" });
                                }
                            }
                        );
                    }
                }
            );

            $.colorInput.current = null;
            control.isChanged = false;
            shown = false;
        }
        var show = function() {
            /// <summary>show the dropdown</summary>

            originalValueHex = valueHex;
            if (options.acceptCancelButtons) {
                $buttonAccept.add($buttonCancel).css({
                    backgroundColor: valueHex,
                    color: value.brightnessContrast().toHex()
                });
            }
            draw();

            // bind events
            $.each(options.cancelOnClick, function() {
                $(this).bind("click.color", cancel);
            });
            if (options.hoverSelect) {
                $h.find("div")
                    .mousemove(function(e) {
                        setHue(this);
                        $input.colorSelected();
                    });
                $sb.find("div")
                    .mousemove(function(e) {
                        setSaturationBrightness(this);
                        $input.colorSelected();
                    });
                $sb.dblclick(function(e) {
                    accept();

                    e.stopPropagation();
                    return false;
                });

                $sb.click(function(e) {
                    accept();

                    e.stopPropagation();
                    return false;
                });
            } else {
                $h.find("div")
                    .mousedown(function(e) { return mousedown(e, $h); })
                    .mousemove(function(e) {
                        if (mousemove(e, $h)) {
                            setHue(this);
                            $input.colorSelected();
                        }
                    })
                    .mouseup(function(e) { mouseup(e, $h); })
                    .click(function(e) {
                        setHue(this);
                        $input.colorSelected();
                    });
                $sb.find("div")
                    .mousedown(function(e) { return mousedown(e, $sb); })
                    .mousemove(function(e) {
                        if (mousemove(e, $sb)) {
                            setSaturationBrightness(this);
                            $input.colorSelected();
                        }
                    })
                    .mouseup(function(e) { mouseup(e, $sb); })
                    .click(function(e) {
                        setSaturationBrightness(this);
                        $input.colorSelected();
                    });
                $sb.dblclick(function(e) {
                    accept();

                    e.stopPropagation();
                    return false;
                });
            }

            $dropdown
                .click(function(e) {
                    e.stopPropagation();
                    return false;
                });

            // show animation
            var offset = $button.offset();
            $dropdown
                .css({
                    display: "",
                    top: offset.top + $button.height() + "px",
                    left: offset.left + (options.showLeft ? -saturationBrightnessSize : 0) + "px"
                })
                .animate(
                    {
                        height: saturationBrightnessSize,
                        width: saturationBrightnessSize
                    },
                    {
                        duration: 500,
                        complete: function() {
                            $h
                                .css({ display: "" })
                                .animate(
                                    { marginLeft: saturationBrightnessSize },
                                    { duration: 250 }
                                );
                            if (options.acceptCancelButtons) {
                                $buttonContainer.animate(
                                    { marginTop: -options.hueWidth },
                                    { duration: 250 }
                                );
                                $buttonAccept.click(function(e) {
                                    accept();
                                    e.stopPropagation();
                                    return false;
                                });
                                $buttonCancel.click(function(e) {
                                    cancel();
                                    e.stopPropagation();
                                    return false;
                                });
                            }
                        }
                    }
                );

            $.colorInput.current = control;
            shown = true;
        }

        if ($.browser.msie) { // don't allow text selection
            $dropdown.attr('unselectable', 'on');
            $dropdown.find("div").attr('unselectable', 'on');
        }

        // handle dragging on/off
        var mousedown = function(e, $item) {
            if ($item.data("drag")) { mouseup(e, $item); }
            $item.data("drag", true);
            return false;
        }
        var mouseup = function(e, $item) {
            $item.data("drag", false);
        }
        var mousemove = function(e, $item) {
            if (!$item.data("drag")) { return false; }
            if ($.browser.msie && !e.button) {
                mouseup(e, $item);
                return false;
            }
            return true;
        }

        var showHueSelected = function(element) {
            /// <summary>show the element passed as selected</summary>
            /// <param name="element">div element</param>

            var selected = $h.data("selected");
            if (selected) {
                selected.style.zIndex = 0;
                selected.style.width = options.hueWidth + "px";
                selected.style.margin = "0";
                selected.style.border = "none 0";
            }
            $h.data("selected", element);

            if (element) {
                element.style.zIndex = 1;
                element.style.width = (options.hueWidth - 2) + "px";
                element.style.margin = "-1px 0";
                element.style.border = "solid 1px #000";
            }
        }
        var setHue = function(element) {
            /// <summary>set the hue to the one stored on the element</summary>
            /// <param name="element">div element</param>

            value.hue = element.hue;
            setValueHex(value.toHex(), shown);
        }

        var showSaturationBrightnessSelected = function(element) {
            /// <summary>show the element passed as selected</summary>
            /// <param name="element">div element</param>

            var selected = $sb.data("selected");
            if (selected) {
                selected.style.width = options.cellSize + "px";
                selected.style.height = options.cellSize + "px";
                selected.style.border = "none 0";
            }
            $sb.data("selected", element);

            if (element) {
                element.style.width = (options.cellSize - 2) + "px";
                element.style.height = (options.cellSize - 2) + "px";
                element.style.border = "solid 1px ".concat(value.brightnessContrast().toHex());
            }
        }
        var setSaturationBrightness = function(element) {
            /// <summary>set the saturation and brightness to the one stored on the element</summary>
            /// <param name="element">div element</param>

            value.saturation = element.saturation;
            value.brightness = element.brightness;
            setValueHex(value.toHex(), false);

            showSaturationBrightnessSelected(element);
        }

        // bind input events
        $input.bind("change", selectColor);
        $input.bind("colorAccept", accept);
        $input.bind("colorCancel", cancel);
        if (options.change) { $input.change(options.change) }
        if (options.colorSelected) { $input.colorSelected(options.colorSelected) }

        // exposed functions/properties
        this.accept = accept;
        this.cancel = cancel;
        this.isChanged = false;

        // show color
        selectColor();

        return this;
    }

    // private functions
    function getSaturationBrightnessMap(options) {
        /// <summary>saturation/brightness map</summary>
        var sbMap = ["<div class='saturationBrightnessMap' style='position:absolute;z-index:1;overflow:hidden;width:", options.cells * options.cellSize, "px;height:", options.cells * options.cellSize, "px'>"];
        for (var b = 0; b < options.cells; b++) {
            for (var s = 0; s < options.cells; s++) {
                sbMap.push("<div ".concat("style='float:left;overflow:hidden;width:", options.cellSize, "px;height:", options.cellSize, "px;border:none 0'></div>"));
            }
        }
        sbMap.push("</div>");
        return sbMap.join("");
    }
    function getHueMap(options) {
        /// <summary>hue map</summary>
        var hMap = ["<div class='hueMap' style='position:absolute;z-index:0;width:", options.hueWidth, "px;height:", options.cells * options.cellSize, "px'>"];
        for (var h = 0; h < options.cells * options.cellSize; h++) {
            hMap.push("<div style='float:left;position:relative;overflow:hidden;width:", options.hueWidth, "px;height:1px;border:none 0'>&nbsp;</div>");
        }
        hMap.push("</div>");
        return hMap.join("");
    }

    // defaults
    $.colorInput.defaults = {
        acceptCancelButtons: true,
        cancelOnClick: [document],
        cells: 15,
        cellSize: 10,
        change: null,
        colorSelected: null,
        dropdownId: "ColorDropdown",
        hideInput: true,
        hoverSelect: false,
        hueWidth: 20,
        noHash: false,
        showLeft: false,
        textAccept: "ok",
        textCancel: "cancel"
    };

    // Stores reference to currently shown colorInput control
    $.colorInput.current = null;

    $.colorInput.color = function(hue, saturation, brightness) {
        /// <summary>HSB colour object</summary>
        /// <param name="hue">hue, 0-1 (optional, default 0)</param>
        /// <param name="saturation">saturation, 0-1 (optional, default 0)</param>
        /// <param name="brightness">brightness, 0-1 (optional, default 0)</param>

        if (arguments.length == 1 && hue.constructor == String) {
            this.fromHex(hue);
        } else {
            this.hue = parseFloat(hue) || 0;
            this.saturation = parseFloat(saturation) || 0;
            this.brightness = parseFloat(brightness) || 0;
        }

        this.isValid = function() {
            /// <summary>Check values are a valid colour</summary>
            if (isNaN(this.hue)) { return false }
            while (this.hue > 1) { this.hue -= 1; }
            while (this.hue < 0) { this.hue += 1; }

            if (isNaN(this.saturation)) { return false }
            if (this.saturation > 1) { this.saturation = 1; }
            else if (this.saturation < 0) { this.saturation = 0; }

            if (isNaN(this.brightness)) { return false }
            if (this.brightness > 1) { this.brightness = 1; }
            else if (this.brightness < 0) { this.brightness = 0; }

            return true;
        }
        this.isValid();

        this.brightnessContrast = function() {
            /// <summary>gets a black or white color to contrast the current one</summary>
            return new $.colorInput.color(0, 0, this.brightness >= .75 ? 0 : 1);
        }

        this.valueToHex = function(value) {
            /// <summary>Convert a value to hex</summary>
            /// <param name="value">value 0-1 (required)</param>
            var s = Math.round(value * 255).toString(16);
            return s.length == 1 ? "0" + s : s;
        }
        this.hexToValue = function(h) {
            /// <summary>Convert hex to a value</summary>
            /// <param name="value">value 00-FF (required)</param>
            return parseInt(h, 16) / 255;
        }

        this.fromHex = function(hex) {
            /// <summary>Set this colour using a hex value</summary>
            /// <param name="hex">hex value (required)</param>
            if (hex.slice(0, 1) == "#") { hex = hex.slice(1); }
            if (hex.length == 3) { hex = hex.split(''); hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]; }
            if (hex.length != 6) { // invalidate the color
                this.brightness = NaN;
                return;
            }

            var red = this.hexToValue(hex.substr(0, 2));
            var green = this.hexToValue(hex.substr(2, 2));
            var blue = this.hexToValue(hex.substr(4, 2));

            this.brightness = Math.max(Math.max(red, green), blue);
            var min = Math.min(Math.min(red, green), blue);
            if (min == this.brightness) {
                this.hue = 0;
                this.saturation = 0;
            } else {
                var delta = this.brightness - min;
                this.saturation = delta / this.brightness;
                if (red == this.brightness) { this.hue = (green - blue) / delta; }
                else if (green == this.brightness) { this.hue = 2 + ((blue - red) / delta); }
                else { this.hue = 4 + ((red - green) / delta); }

                this.hue /= 6;
                if (this.hue < 0) { this.hue += 1; }
                if (this.hue > 1) { this.hue -= 1; }
            }

            return this;
        }
        this.toHex = function(noHash) {
            /// <summary>Covert this colour into a hex value</summary>
            /// <param name="noHash">add a hash (optional, default false)</param>
            if (!this.isValid()) { return "Transparent"; }

            var red, green, blue;
            var i = Math.floor(this.hue * 6);
            var f = (this.hue * 6) - i;
            var p = this.brightness * (1 - this.saturation);
            var q = this.brightness * (1 - (this.saturation * f));
            var t = this.brightness * (1 - (this.saturation * (1 - f)));
            switch (i) {
                case 1: red = q; green = this.brightness; blue = p; break;
                case 2: red = p; green = this.brightness; blue = t; break;
                case 3: red = p; green = q; blue = this.brightness; break;
                case 4: red = t; green = p; blue = this.brightness; break;
                case 5: red = this.brightness; green = p; blue = q; break;
                case 6: case 0:
                    red = this.brightness; green = t; blue = p; break;
            }

            return noHash ? "" : "#" + this.valueToHex(red) + this.valueToHex(green) + this.valueToHex(blue);
        }
    }

})(jQuery);;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/site_customize/js/colorinput.js---*/

/*--- BEGIN: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/site_customize/js/main.js---*/

function BxSctrMain(oOptions)
{
    this._sCustomBlock = 'site_customize';
    this._sPublishBlock = 'site_customize_popup';

    this.sBaseUrl = oOptions.sBaseUrl;
    this.sReset = oOptions.sReset == undefined ? 'Reset?' : oOptions.sReset;
    this.sErrThemeName = oOptions.sErrThemeName == undefined ? 'Please fill name of theme' : oOptions.sErrThemeName;
    this.sErrChooseTheme = oOptions.sErrChooseTheme == undefined ? 'Choose any theme' : oOptions.sErrChooseTheme;
    this.sDeleteTheme = oOptions.sDeleteTheme == undefined ? 'Delete theme?' : oOptions.sDeleteTheme;
    this.sResetPage = oOptions.sResetPage == undefined ? 'Reset page?' : oOptions.sResetPage;
}

BxSctrMain.prototype.showBlock = function() {
	var $this = this;
	var oDate = new Date();
	var iOpen = $('#' + this._sCustomBlock).is(':visible') ? 0 : 1;

	$.get(
		this.sBaseUrl + 'open/' + iOpen,
		{
			_t:oDate.getTime()
		},
		function() {
			$('#' + $this._sCustomBlock).bx_anim('toggle', 'fade', 'slow', function() {
			});
		},
		'json'
	);
};

BxSctrMain.prototype.updateBlock = function(sName, sUrl)
{
    var oBlock = $('#' + sName);
    
    if ($(oBlock).length > 0)
        getHtmlData(oBlock, sUrl, null);
};

BxSctrMain.prototype.saveChanges = function(oCallback)
{
    var oForm = $('#' + this._sCustomBlock + ' form');
    
    if ($(oForm).length > 0)
    {
        var options = {
            success: function(data) {
                oCallback(data);
            }
        }; 
        
        $(oForm).ajaxSubmit(options);
    }
};

BxSctrMain.prototype.reloadCustomizeBlock = function(sUrl, isReset)
{
	var oForm = $('#' + this._sCustomBlock + ' form');
	if ($(oForm).length <= 0) {
		getHtmlData($('#' + this._sCustomBlock), sUrl, null);
		return;
	}
		
	var $this = this;
	var fPerform = function() {
        $(oForm).ajaxSubmit({
            success: function(data) {
                getHtmlData($('#' + $this._sCustomBlock), sUrl, null);
            }
        });
	};

	if(!isReset) {
		fPerform();
		return;
	}

	$(document).dolPopupConfirm({
		message: this.sReset, 
		onClickYes: function() {
			var sNewAction = $(oForm).attr('action') + '/1';
    	    $(oForm).attr('action', sNewAction);

    	    fPerform();
		}
	});
};

BxSctrMain.prototype.resetCustom = function(sPage, sTarget, sAction)
{
	var $this = this;
	$(document).dolPopupConfirm({
		message: this.sReset, 
		onClickYes: function() {
			var oForm = $('#' + $this._sCustomBlock + ' form');
	        if ($(oForm).length > 0) {
	            var sNewAction = $(oForm).attr('action') + '/1';
	            $(oForm).attr('action', sNewAction);

	            $(oForm).find("[name='action']").val(sAction);
	            $(oForm).ajaxSubmit({
	                success: function(data) {
	                	window.location.href = window.location.href;
	                }
	            });
	        }
		}
	});
};

BxSctrMain.prototype.reloadCustom = function(sPage, sTarget, sAction)
{
	$("#" + this._sCustomBlock + " form [name='action']").val(sAction);

    this.saveChanges(function(data) {
    	window.location.href = window.location.href;
    });
};

BxSctrMain.prototype.showPublish = function(sUrl)
{
    var oForm = $('#' + this._sCustomBlock + ' form');
    if(!$(oForm).length)
    	return;

	var $this = this;
	$(oForm).ajaxSubmit({
		success: function(data) {
			if(!$('#' + $this._sPublishBlock).length)
				$('<div id="' + $this._sPublishBlock + '" style="width:490px; display:none;"></div>').prependTo('body');
			
			$('#' + $this._sPublishBlock).load(sUrl, function() {
				$(this).dolPopup();
			});
		}
	});
};

BxSctrMain.prototype.savePublish = function()
{
    var oForm = $('#' + this._sPublishBlock + ' form');   
    if(!$(oForm).length)
    	return;

    if (oForm.find('.form_input_text').val()) {
        var $this = this;
        var options = {
            success: function(data) {
                var oPublishBlock = $('#' + $this._sPublishBlock);
                if ($(oPublishBlock).length > 0)
                    $(oPublishBlock).html(data);
            }
        }; 
        
        $(oForm).ajaxSubmit(options);
    }
    else
        alert(this.sErrThemeName);
};

BxSctrMain.prototype.selectTheme = function(oElement, iThemeId)
{
    var oRadio = $(oElement).find('input[type=radio]');
    
    if (oRadio.length > 0)
        oRadio.attr('checked', 1);
};

BxSctrMain.prototype.previewTheme = function()
{
    var iSelectTheme = this.getSelectTheme();

    if (iSelectTheme != -1) {
    	var oForm = $('#' + this._sCustomBlock + ' form');
    	var oOptions = {
            success: function(data) {
            	window.location.href = window.location.href;
            }
        };

    	$(oForm).ajaxSubmit(oOptions);
    }
    else
        alert(this.sErrChooseTheme);
};

BxSctrMain.prototype.saveTheme = function()
{
    var iSelectTheme = this.getSelectTheme();
    if(iSelectTheme != -1)
    	getHtmlData($('#' + this._sCustomBlock), $('#save_url').val() + iSelectTheme, function() {
    		window.location.href = window.location.href;
    	});
    else
        alert(this.sErrChooseTheme);
};

BxSctrMain.prototype.deleteTheme = function(sUrl)
{
    var iSelectTheme = this.getSelectTheme();
    
    if (iSelectTheme == -1) {
    	alert(this.sErrChooseTheme);
    	return;
    }

    var $this = this;
	$(document).dolPopupConfirm({
		message: this.sDeleteTheme, 
		onClickYes: function() {
			getHtmlData($('#' + $this._sCustomBlock), sUrl + iSelectTheme);
		}
	});
};

BxSctrMain.prototype.resetAll = function(sUrl)
{
	var $this = this;
	$(document).dolPopupConfirm({
		message: this.sResetPage, 
		onClickYes: function() {
			getHtmlData($('#' + $this._sCustomBlock), sUrl, function() {
	    		window.location.href = window.location.href;
	    	});
		}
	});
};

BxSctrMain.prototype.getSelectTheme = function()
{
    var oSelectTheme = $('#' + this._sCustomBlock + ' form input[type=radio]:checked');
    
    if ($(oSelectTheme).length > 0)
        return $(oSelectTheme).val();
    
    return -1;
};
;
/*--- END: C:/xampp/htdocs/SE-team-10/Dolphin10/modules/boonex/site_customize/js/main.js---*/
