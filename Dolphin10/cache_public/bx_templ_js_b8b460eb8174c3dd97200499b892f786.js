
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
