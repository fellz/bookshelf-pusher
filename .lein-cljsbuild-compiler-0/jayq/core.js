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
{var temp__3971__auto____109544 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____109544))
{var cm__109545 = temp__3971__auto____109544;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__109545),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__109546){
var vec__109550__109551 = p__109546;
var context__109552 = cljs.core.nth.call(null,vec__109550__109551,0,null);
if(cljs.core.not.call(null,context__109552))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__109552);
}
};
var $ = function (sel,var_args){
var p__109546 = null;
if (goog.isDef(var_args)) {
  p__109546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__109546);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__109553){
var sel = cljs.core.first(arglist__109553);
var p__109546 = cljs.core.rest(arglist__109553);
return $__delegate(sel, p__109546);
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
var or__3824__auto____109554 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____109554))
{return or__3824__auto____109554;
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
var G__109555 = null;
var G__109555__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__109555__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__109555 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__109555__2.call(this,_,k);
case 3:
return G__109555__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__109555;
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
var attr__delegate = function ($elem,a,p__109556){
var vec__109561__109562 = p__109556;
var v__109563 = cljs.core.nth.call(null,vec__109561__109562,0,null);
var a__109564 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__109563))
{return $elem.attr(a__109564);
} else
{return $elem.attr(a__109564,v__109563);
}
};
var attr = function ($elem,a,var_args){
var p__109556 = null;
if (goog.isDef(var_args)) {
  p__109556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__109556);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__109565){
var $elem = cljs.core.first(arglist__109565);
var a = cljs.core.first(cljs.core.next(arglist__109565));
var p__109556 = cljs.core.rest(cljs.core.next(arglist__109565));
return attr__delegate($elem, a, p__109556);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__109566){
var vec__109571__109572 = p__109566;
var v__109573 = cljs.core.nth.call(null,vec__109571__109572,0,null);
var k__109574 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__109573))
{return $elem.data(k__109574);
} else
{return $elem.data(k__109574,v__109573);
}
};
var data = function ($elem,k,var_args){
var p__109566 = null;
if (goog.isDef(var_args)) {
  p__109566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__109566);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__109575){
var $elem = cljs.core.first(arglist__109575);
var k = cljs.core.first(cljs.core.next(arglist__109575));
var p__109566 = cljs.core.rest(cljs.core.next(arglist__109575));
return data__delegate($elem, k, p__109566);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__109577 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__109577);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__109579 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__109579);
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
var hide__delegate = function ($elem,p__109580){
var vec__109585__109586 = p__109580;
var speed__109587 = cljs.core.nth.call(null,vec__109585__109586,0,null);
var on_finish__109588 = cljs.core.nth.call(null,vec__109585__109586,1,null);
return $elem.hide(speed__109587,on_finish__109588);
};
var hide = function ($elem,var_args){
var p__109580 = null;
if (goog.isDef(var_args)) {
  p__109580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__109580);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__109589){
var $elem = cljs.core.first(arglist__109589);
var p__109580 = cljs.core.rest(arglist__109589);
return hide__delegate($elem, p__109580);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__109590){
var vec__109595__109596 = p__109590;
var speed__109597 = cljs.core.nth.call(null,vec__109595__109596,0,null);
var on_finish__109598 = cljs.core.nth.call(null,vec__109595__109596,1,null);
return $elem.show(speed__109597,on_finish__109598);
};
var show = function ($elem,var_args){
var p__109590 = null;
if (goog.isDef(var_args)) {
  p__109590 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__109590);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__109599){
var $elem = cljs.core.first(arglist__109599);
var p__109590 = cljs.core.rest(arglist__109599);
return show__delegate($elem, p__109590);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__109600){
var vec__109605__109606 = p__109600;
var speed__109607 = cljs.core.nth.call(null,vec__109605__109606,0,null);
var on_finish__109608 = cljs.core.nth.call(null,vec__109605__109606,1,null);
return $elem.toggle(speed__109607,on_finish__109608);
};
var toggle = function ($elem,var_args){
var p__109600 = null;
if (goog.isDef(var_args)) {
  p__109600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__109600);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__109609){
var $elem = cljs.core.first(arglist__109609);
var p__109600 = cljs.core.rest(arglist__109609);
return toggle__delegate($elem, p__109600);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__109610){
var vec__109615__109616 = p__109610;
var speed__109617 = cljs.core.nth.call(null,vec__109615__109616,0,null);
var on_finish__109618 = cljs.core.nth.call(null,vec__109615__109616,1,null);
return $elem.fadeOut(speed__109617,on_finish__109618);
};
var fade_out = function ($elem,var_args){
var p__109610 = null;
if (goog.isDef(var_args)) {
  p__109610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__109610);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__109619){
var $elem = cljs.core.first(arglist__109619);
var p__109610 = cljs.core.rest(arglist__109619);
return fade_out__delegate($elem, p__109610);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__109620){
var vec__109625__109626 = p__109620;
var speed__109627 = cljs.core.nth.call(null,vec__109625__109626,0,null);
var on_finish__109628 = cljs.core.nth.call(null,vec__109625__109626,1,null);
return $elem.fadeIn(speed__109627,on_finish__109628);
};
var fade_in = function ($elem,var_args){
var p__109620 = null;
if (goog.isDef(var_args)) {
  p__109620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__109620);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__109629){
var $elem = cljs.core.first(arglist__109629);
var p__109620 = cljs.core.rest(arglist__109629);
return fade_in__delegate($elem, p__109620);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__109630){
var vec__109635__109636 = p__109630;
var speed__109637 = cljs.core.nth.call(null,vec__109635__109636,0,null);
var on_finish__109638 = cljs.core.nth.call(null,vec__109635__109636,1,null);
return $elem.slideUp(speed__109637,on_finish__109638);
};
var slide_up = function ($elem,var_args){
var p__109630 = null;
if (goog.isDef(var_args)) {
  p__109630 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__109630);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__109639){
var $elem = cljs.core.first(arglist__109639);
var p__109630 = cljs.core.rest(arglist__109639);
return slide_up__delegate($elem, p__109630);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__109640){
var vec__109645__109646 = p__109640;
var speed__109647 = cljs.core.nth.call(null,vec__109645__109646,0,null);
var on_finish__109648 = cljs.core.nth.call(null,vec__109645__109646,1,null);
return $elem.slideDown(speed__109647,on_finish__109648);
};
var slide_down = function ($elem,var_args){
var p__109640 = null;
if (goog.isDef(var_args)) {
  p__109640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__109640);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__109649){
var $elem = cljs.core.first(arglist__109649);
var p__109640 = cljs.core.rest(arglist__109649);
return slide_down__delegate($elem, p__109640);
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
var val__delegate = function ($elem,p__109650){
var vec__109654__109655 = p__109650;
var v__109656 = cljs.core.nth.call(null,vec__109654__109655,0,null);
if(cljs.core.truth_(v__109656))
{return $elem.val(v__109656);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__109650 = null;
if (goog.isDef(var_args)) {
  p__109650 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__109650);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__109657){
var $elem = cljs.core.first(arglist__109657);
var p__109650 = cljs.core.rest(arglist__109657);
return val__delegate($elem, p__109650);
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
jayq.core.xhr = (function xhr(p__109658,content,callback){
var vec__109664__109665 = p__109658;
var method__109666 = cljs.core.nth.call(null,vec__109664__109665,0,null);
var uri__109667 = cljs.core.nth.call(null,vec__109664__109665,1,null);
var params__109668 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__109666)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__109667,params__109668);
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
var on__delegate = function ($elem,events,p__109669){
var vec__109675__109676 = p__109669;
var sel__109677 = cljs.core.nth.call(null,vec__109675__109676,0,null);
var data__109678 = cljs.core.nth.call(null,vec__109675__109676,1,null);
var handler__109679 = cljs.core.nth.call(null,vec__109675__109676,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__109677),data__109678,handler__109679);
};
var on = function ($elem,events,var_args){
var p__109669 = null;
if (goog.isDef(var_args)) {
  p__109669 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__109669);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__109680){
var $elem = cljs.core.first(arglist__109680);
var events = cljs.core.first(cljs.core.next(arglist__109680));
var p__109669 = cljs.core.rest(cljs.core.next(arglist__109680));
return on__delegate($elem, events, p__109669);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__109681){
var vec__109687__109688 = p__109681;
var sel__109689 = cljs.core.nth.call(null,vec__109687__109688,0,null);
var data__109690 = cljs.core.nth.call(null,vec__109687__109688,1,null);
var handler__109691 = cljs.core.nth.call(null,vec__109687__109688,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__109689),data__109690,handler__109691);
};
var one = function ($elem,events,var_args){
var p__109681 = null;
if (goog.isDef(var_args)) {
  p__109681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__109681);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__109692){
var $elem = cljs.core.first(arglist__109692);
var events = cljs.core.first(cljs.core.next(arglist__109692));
var p__109681 = cljs.core.rest(cljs.core.next(arglist__109692));
return one__delegate($elem, events, p__109681);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__109693){
var vec__109698__109699 = p__109693;
var sel__109700 = cljs.core.nth.call(null,vec__109698__109699,0,null);
var handler__109701 = cljs.core.nth.call(null,vec__109698__109699,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__109700),handler__109701);
};
var off = function ($elem,events,var_args){
var p__109693 = null;
if (goog.isDef(var_args)) {
  p__109693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__109693);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__109702){
var $elem = cljs.core.first(arglist__109702);
var events = cljs.core.first(cljs.core.next(arglist__109702));
var p__109693 = cljs.core.rest(cljs.core.next(arglist__109702));
return off__delegate($elem, events, p__109693);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
