goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto____14973 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____14973))
{var cm__14974 = temp__3971__auto____14973;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__14974),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__14975){
var vec__14979__14980 = p__14975;
var context__14981 = cljs.core.nth.call(null,vec__14979__14980,0,null);
if(cljs.core.not.call(null,context__14981))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__14981);
}
};
var $ = function (sel,var_args){
var p__14975 = null;
if (goog.isDef(var_args)) {
  p__14975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__14975);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__14982){
var sel = cljs.core.first(arglist__14982);
var p__14975 = cljs.core.rest(arglist__14982);
return $__delegate(sel, p__14975);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto____14983 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____14983))
{return or__3824__auto____14983;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__14984 = null;
var G__14984__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__14984__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__14984 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__14984__2.call(this,_,k);
case 3:
return G__14984__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14984;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__14985){
var vec__14990__14991 = p__14985;
var v__14992 = cljs.core.nth.call(null,vec__14990__14991,0,null);
var a__14993 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__14992))
{return $elem.attr(a__14993);
} else
{return $elem.attr(a__14993,v__14992);
}
};
var attr = function ($elem,a,var_args){
var p__14985 = null;
if (goog.isDef(var_args)) {
  p__14985 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__14985);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__14994){
var $elem = cljs.core.first(arglist__14994);
var a = cljs.core.first(cljs.core.next(arglist__14994));
var p__14985 = cljs.core.rest(cljs.core.next(arglist__14994));
return attr__delegate($elem, a, p__14985);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__14995){
var vec__15000__15001 = p__14995;
var v__15002 = cljs.core.nth.call(null,vec__15000__15001,0,null);
var k__15003 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__15002))
{return $elem.data(k__15003);
} else
{return $elem.data(k__15003,v__15002);
}
};
var data = function ($elem,k,var_args){
var p__14995 = null;
if (goog.isDef(var_args)) {
  p__14995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__14995);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__15004){
var $elem = cljs.core.first(arglist__15004);
var k = cljs.core.first(cljs.core.next(arglist__15004));
var p__14995 = cljs.core.rest(cljs.core.next(arglist__15004));
return data__delegate($elem, k, p__14995);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__15006 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__15006);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__15008 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__15008);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__15009){
var vec__15014__15015 = p__15009;
var speed__15016 = cljs.core.nth.call(null,vec__15014__15015,0,null);
var on_finish__15017 = cljs.core.nth.call(null,vec__15014__15015,1,null);
return $elem.hide(speed__15016,on_finish__15017);
};
var hide = function ($elem,var_args){
var p__15009 = null;
if (goog.isDef(var_args)) {
  p__15009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__15009);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__15018){
var $elem = cljs.core.first(arglist__15018);
var p__15009 = cljs.core.rest(arglist__15018);
return hide__delegate($elem, p__15009);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__15019){
var vec__15024__15025 = p__15019;
var speed__15026 = cljs.core.nth.call(null,vec__15024__15025,0,null);
var on_finish__15027 = cljs.core.nth.call(null,vec__15024__15025,1,null);
return $elem.show(speed__15026,on_finish__15027);
};
var show = function ($elem,var_args){
var p__15019 = null;
if (goog.isDef(var_args)) {
  p__15019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__15019);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__15028){
var $elem = cljs.core.first(arglist__15028);
var p__15019 = cljs.core.rest(arglist__15028);
return show__delegate($elem, p__15019);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__15029){
var vec__15034__15035 = p__15029;
var speed__15036 = cljs.core.nth.call(null,vec__15034__15035,0,null);
var on_finish__15037 = cljs.core.nth.call(null,vec__15034__15035,1,null);
return $elem.toggle(speed__15036,on_finish__15037);
};
var toggle = function ($elem,var_args){
var p__15029 = null;
if (goog.isDef(var_args)) {
  p__15029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__15029);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__15038){
var $elem = cljs.core.first(arglist__15038);
var p__15029 = cljs.core.rest(arglist__15038);
return toggle__delegate($elem, p__15029);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__15039){
var vec__15044__15045 = p__15039;
var speed__15046 = cljs.core.nth.call(null,vec__15044__15045,0,null);
var on_finish__15047 = cljs.core.nth.call(null,vec__15044__15045,1,null);
return $elem.fadeOut(speed__15046,on_finish__15047);
};
var fade_out = function ($elem,var_args){
var p__15039 = null;
if (goog.isDef(var_args)) {
  p__15039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__15039);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__15048){
var $elem = cljs.core.first(arglist__15048);
var p__15039 = cljs.core.rest(arglist__15048);
return fade_out__delegate($elem, p__15039);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__15049){
var vec__15054__15055 = p__15049;
var speed__15056 = cljs.core.nth.call(null,vec__15054__15055,0,null);
var on_finish__15057 = cljs.core.nth.call(null,vec__15054__15055,1,null);
return $elem.fadeIn(speed__15056,on_finish__15057);
};
var fade_in = function ($elem,var_args){
var p__15049 = null;
if (goog.isDef(var_args)) {
  p__15049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__15049);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__15058){
var $elem = cljs.core.first(arglist__15058);
var p__15049 = cljs.core.rest(arglist__15058);
return fade_in__delegate($elem, p__15049);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__15059){
var vec__15064__15065 = p__15059;
var speed__15066 = cljs.core.nth.call(null,vec__15064__15065,0,null);
var on_finish__15067 = cljs.core.nth.call(null,vec__15064__15065,1,null);
return $elem.slideUp(speed__15066,on_finish__15067);
};
var slide_up = function ($elem,var_args){
var p__15059 = null;
if (goog.isDef(var_args)) {
  p__15059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__15059);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__15068){
var $elem = cljs.core.first(arglist__15068);
var p__15059 = cljs.core.rest(arglist__15068);
return slide_up__delegate($elem, p__15059);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__15069){
var vec__15074__15075 = p__15069;
var speed__15076 = cljs.core.nth.call(null,vec__15074__15075,0,null);
var on_finish__15077 = cljs.core.nth.call(null,vec__15074__15075,1,null);
return $elem.slideDown(speed__15076,on_finish__15077);
};
var slide_down = function ($elem,var_args){
var p__15069 = null;
if (goog.isDef(var_args)) {
  p__15069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__15069);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__15078){
var $elem = cljs.core.first(arglist__15078);
var p__15069 = cljs.core.rest(arglist__15078);
return slide_down__delegate($elem, p__15069);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__15079){
var vec__15083__15084 = p__15079;
var v__15085 = cljs.core.nth.call(null,vec__15083__15084,0,null);
if(cljs.core.truth_(v__15085))
{return $elem.val(v__15085);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__15079 = null;
if (goog.isDef(var_args)) {
  p__15079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__15079);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__15086){
var $elem = cljs.core.first(arglist__15086);
var p__15079 = cljs.core.rest(arglist__15086);
return val__delegate($elem, p__15079);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__15087,content,callback){
var vec__15093__15094 = p__15087;
var method__15095 = cljs.core.nth.call(null,vec__15093__15094,0,null);
var uri__15096 = cljs.core.nth.call(null,vec__15093__15094,1,null);
var params__15097 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__15095)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__15096,params__15097);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__15098){
var vec__15104__15105 = p__15098;
var sel__15106 = cljs.core.nth.call(null,vec__15104__15105,0,null);
var data__15107 = cljs.core.nth.call(null,vec__15104__15105,1,null);
var handler__15108 = cljs.core.nth.call(null,vec__15104__15105,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__15106),data__15107,handler__15108);
};
var on = function ($elem,events,var_args){
var p__15098 = null;
if (goog.isDef(var_args)) {
  p__15098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__15098);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__15109){
var $elem = cljs.core.first(arglist__15109);
var events = cljs.core.first(cljs.core.next(arglist__15109));
var p__15098 = cljs.core.rest(cljs.core.next(arglist__15109));
return on__delegate($elem, events, p__15098);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__15110){
var vec__15116__15117 = p__15110;
var sel__15118 = cljs.core.nth.call(null,vec__15116__15117,0,null);
var data__15119 = cljs.core.nth.call(null,vec__15116__15117,1,null);
var handler__15120 = cljs.core.nth.call(null,vec__15116__15117,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__15118),data__15119,handler__15120);
};
var one = function ($elem,events,var_args){
var p__15110 = null;
if (goog.isDef(var_args)) {
  p__15110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__15110);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__15121){
var $elem = cljs.core.first(arglist__15121);
var events = cljs.core.first(cljs.core.next(arglist__15121));
var p__15110 = cljs.core.rest(cljs.core.next(arglist__15121));
return one__delegate($elem, events, p__15110);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__15122){
var vec__15127__15128 = p__15122;
var sel__15129 = cljs.core.nth.call(null,vec__15127__15128,0,null);
var handler__15130 = cljs.core.nth.call(null,vec__15127__15128,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__15129),handler__15130);
};
var off = function ($elem,events,var_args){
var p__15122 = null;
if (goog.isDef(var_args)) {
  p__15122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__15122);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__15131){
var $elem = cljs.core.first(arglist__15131);
var events = cljs.core.first(cljs.core.next(arglist__15131));
var p__15122 = cljs.core.rest(cljs.core.next(arglist__15131));
return off__delegate($elem, events, p__15122);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
