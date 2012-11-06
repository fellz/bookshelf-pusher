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
{var temp__3971__auto____126165 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____126165))
{var cm__126166 = temp__3971__auto____126165;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__126166),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__126167){
var vec__126171__126172 = p__126167;
var context__126173 = cljs.core.nth.call(null,vec__126171__126172,0,null);
if(cljs.core.not.call(null,context__126173))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__126173);
}
};
var $ = function (sel,var_args){
var p__126167 = null;
if (goog.isDef(var_args)) {
  p__126167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__126167);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__126174){
var sel = cljs.core.first(arglist__126174);
var p__126167 = cljs.core.rest(arglist__126174);
return $__delegate(sel, p__126167);
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
var or__3824__auto____126175 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____126175))
{return or__3824__auto____126175;
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
var G__126176 = null;
var G__126176__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__126176__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__126176 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__126176__2.call(this,_,k);
case 3:
return G__126176__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__126176;
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
var attr__delegate = function ($elem,a,p__126177){
var vec__126182__126183 = p__126177;
var v__126184 = cljs.core.nth.call(null,vec__126182__126183,0,null);
var a__126185 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__126184))
{return $elem.attr(a__126185);
} else
{return $elem.attr(a__126185,v__126184);
}
};
var attr = function ($elem,a,var_args){
var p__126177 = null;
if (goog.isDef(var_args)) {
  p__126177 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__126177);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__126186){
var $elem = cljs.core.first(arglist__126186);
var a = cljs.core.first(cljs.core.next(arglist__126186));
var p__126177 = cljs.core.rest(cljs.core.next(arglist__126186));
return attr__delegate($elem, a, p__126177);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__126187){
var vec__126192__126193 = p__126187;
var v__126194 = cljs.core.nth.call(null,vec__126192__126193,0,null);
var k__126195 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__126194))
{return $elem.data(k__126195);
} else
{return $elem.data(k__126195,v__126194);
}
};
var data = function ($elem,k,var_args){
var p__126187 = null;
if (goog.isDef(var_args)) {
  p__126187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__126187);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__126196){
var $elem = cljs.core.first(arglist__126196);
var k = cljs.core.first(cljs.core.next(arglist__126196));
var p__126187 = cljs.core.rest(cljs.core.next(arglist__126196));
return data__delegate($elem, k, p__126187);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__126198 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__126198);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__126200 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__126200);
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
var hide__delegate = function ($elem,p__126201){
var vec__126206__126207 = p__126201;
var speed__126208 = cljs.core.nth.call(null,vec__126206__126207,0,null);
var on_finish__126209 = cljs.core.nth.call(null,vec__126206__126207,1,null);
return $elem.hide(speed__126208,on_finish__126209);
};
var hide = function ($elem,var_args){
var p__126201 = null;
if (goog.isDef(var_args)) {
  p__126201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__126201);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__126210){
var $elem = cljs.core.first(arglist__126210);
var p__126201 = cljs.core.rest(arglist__126210);
return hide__delegate($elem, p__126201);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__126211){
var vec__126216__126217 = p__126211;
var speed__126218 = cljs.core.nth.call(null,vec__126216__126217,0,null);
var on_finish__126219 = cljs.core.nth.call(null,vec__126216__126217,1,null);
return $elem.show(speed__126218,on_finish__126219);
};
var show = function ($elem,var_args){
var p__126211 = null;
if (goog.isDef(var_args)) {
  p__126211 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__126211);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__126220){
var $elem = cljs.core.first(arglist__126220);
var p__126211 = cljs.core.rest(arglist__126220);
return show__delegate($elem, p__126211);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__126221){
var vec__126226__126227 = p__126221;
var speed__126228 = cljs.core.nth.call(null,vec__126226__126227,0,null);
var on_finish__126229 = cljs.core.nth.call(null,vec__126226__126227,1,null);
return $elem.toggle(speed__126228,on_finish__126229);
};
var toggle = function ($elem,var_args){
var p__126221 = null;
if (goog.isDef(var_args)) {
  p__126221 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__126221);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__126230){
var $elem = cljs.core.first(arglist__126230);
var p__126221 = cljs.core.rest(arglist__126230);
return toggle__delegate($elem, p__126221);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__126231){
var vec__126236__126237 = p__126231;
var speed__126238 = cljs.core.nth.call(null,vec__126236__126237,0,null);
var on_finish__126239 = cljs.core.nth.call(null,vec__126236__126237,1,null);
return $elem.fadeOut(speed__126238,on_finish__126239);
};
var fade_out = function ($elem,var_args){
var p__126231 = null;
if (goog.isDef(var_args)) {
  p__126231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__126231);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__126240){
var $elem = cljs.core.first(arglist__126240);
var p__126231 = cljs.core.rest(arglist__126240);
return fade_out__delegate($elem, p__126231);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__126241){
var vec__126246__126247 = p__126241;
var speed__126248 = cljs.core.nth.call(null,vec__126246__126247,0,null);
var on_finish__126249 = cljs.core.nth.call(null,vec__126246__126247,1,null);
return $elem.fadeIn(speed__126248,on_finish__126249);
};
var fade_in = function ($elem,var_args){
var p__126241 = null;
if (goog.isDef(var_args)) {
  p__126241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__126241);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__126250){
var $elem = cljs.core.first(arglist__126250);
var p__126241 = cljs.core.rest(arglist__126250);
return fade_in__delegate($elem, p__126241);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__126251){
var vec__126256__126257 = p__126251;
var speed__126258 = cljs.core.nth.call(null,vec__126256__126257,0,null);
var on_finish__126259 = cljs.core.nth.call(null,vec__126256__126257,1,null);
return $elem.slideUp(speed__126258,on_finish__126259);
};
var slide_up = function ($elem,var_args){
var p__126251 = null;
if (goog.isDef(var_args)) {
  p__126251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__126251);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__126260){
var $elem = cljs.core.first(arglist__126260);
var p__126251 = cljs.core.rest(arglist__126260);
return slide_up__delegate($elem, p__126251);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__126261){
var vec__126266__126267 = p__126261;
var speed__126268 = cljs.core.nth.call(null,vec__126266__126267,0,null);
var on_finish__126269 = cljs.core.nth.call(null,vec__126266__126267,1,null);
return $elem.slideDown(speed__126268,on_finish__126269);
};
var slide_down = function ($elem,var_args){
var p__126261 = null;
if (goog.isDef(var_args)) {
  p__126261 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__126261);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__126270){
var $elem = cljs.core.first(arglist__126270);
var p__126261 = cljs.core.rest(arglist__126270);
return slide_down__delegate($elem, p__126261);
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
var val__delegate = function ($elem,p__126271){
var vec__126275__126276 = p__126271;
var v__126277 = cljs.core.nth.call(null,vec__126275__126276,0,null);
if(cljs.core.truth_(v__126277))
{return $elem.val(v__126277);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__126271 = null;
if (goog.isDef(var_args)) {
  p__126271 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__126271);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__126278){
var $elem = cljs.core.first(arglist__126278);
var p__126271 = cljs.core.rest(arglist__126278);
return val__delegate($elem, p__126271);
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
jayq.core.xhr = (function xhr(p__126279,content,callback){
var vec__126285__126286 = p__126279;
var method__126287 = cljs.core.nth.call(null,vec__126285__126286,0,null);
var uri__126288 = cljs.core.nth.call(null,vec__126285__126286,1,null);
var params__126289 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__126287)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__126288,params__126289);
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
var on__delegate = function ($elem,events,p__126290){
var vec__126296__126297 = p__126290;
var sel__126298 = cljs.core.nth.call(null,vec__126296__126297,0,null);
var data__126299 = cljs.core.nth.call(null,vec__126296__126297,1,null);
var handler__126300 = cljs.core.nth.call(null,vec__126296__126297,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__126298),data__126299,handler__126300);
};
var on = function ($elem,events,var_args){
var p__126290 = null;
if (goog.isDef(var_args)) {
  p__126290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__126290);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__126301){
var $elem = cljs.core.first(arglist__126301);
var events = cljs.core.first(cljs.core.next(arglist__126301));
var p__126290 = cljs.core.rest(cljs.core.next(arglist__126301));
return on__delegate($elem, events, p__126290);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__126302){
var vec__126308__126309 = p__126302;
var sel__126310 = cljs.core.nth.call(null,vec__126308__126309,0,null);
var data__126311 = cljs.core.nth.call(null,vec__126308__126309,1,null);
var handler__126312 = cljs.core.nth.call(null,vec__126308__126309,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__126310),data__126311,handler__126312);
};
var one = function ($elem,events,var_args){
var p__126302 = null;
if (goog.isDef(var_args)) {
  p__126302 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__126302);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__126313){
var $elem = cljs.core.first(arglist__126313);
var events = cljs.core.first(cljs.core.next(arglist__126313));
var p__126302 = cljs.core.rest(cljs.core.next(arglist__126313));
return one__delegate($elem, events, p__126302);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__126314){
var vec__126319__126320 = p__126314;
var sel__126321 = cljs.core.nth.call(null,vec__126319__126320,0,null);
var handler__126322 = cljs.core.nth.call(null,vec__126319__126320,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__126321),handler__126322);
};
var off = function ($elem,events,var_args){
var p__126314 = null;
if (goog.isDef(var_args)) {
  p__126314 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__126314);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__126323){
var $elem = cljs.core.first(arglist__126323);
var events = cljs.core.first(cljs.core.next(arglist__126323));
var p__126314 = cljs.core.rest(cljs.core.next(arglist__126323));
return off__delegate($elem, events, p__126314);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
