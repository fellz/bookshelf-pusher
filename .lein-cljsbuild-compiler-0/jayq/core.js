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
{var temp__3971__auto____14089 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____14089))
{var cm__14090 = temp__3971__auto____14089;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__14090),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__14091){
var vec__14095__14096 = p__14091;
var context__14097 = cljs.core.nth.call(null,vec__14095__14096,0,null);
if(cljs.core.not.call(null,context__14097))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__14097);
}
};
var $ = function (sel,var_args){
var p__14091 = null;
if (goog.isDef(var_args)) {
  p__14091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__14091);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__14098){
var sel = cljs.core.first(arglist__14098);
var p__14091 = cljs.core.rest(arglist__14098);
return $__delegate(sel, p__14091);
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
var or__3824__auto____14099 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____14099))
{return or__3824__auto____14099;
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
var G__14100 = null;
var G__14100__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__14100__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__14100 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__14100__2.call(this,_,k);
case 3:
return G__14100__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14100;
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
var attr__delegate = function ($elem,a,p__14101){
var vec__14106__14107 = p__14101;
var v__14108 = cljs.core.nth.call(null,vec__14106__14107,0,null);
var a__14109 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__14108))
{return $elem.attr(a__14109);
} else
{return $elem.attr(a__14109,v__14108);
}
};
var attr = function ($elem,a,var_args){
var p__14101 = null;
if (goog.isDef(var_args)) {
  p__14101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__14101);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__14110){
var $elem = cljs.core.first(arglist__14110);
var a = cljs.core.first(cljs.core.next(arglist__14110));
var p__14101 = cljs.core.rest(cljs.core.next(arglist__14110));
return attr__delegate($elem, a, p__14101);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__14111){
var vec__14116__14117 = p__14111;
var v__14118 = cljs.core.nth.call(null,vec__14116__14117,0,null);
var k__14119 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__14118))
{return $elem.data(k__14119);
} else
{return $elem.data(k__14119,v__14118);
}
};
var data = function ($elem,k,var_args){
var p__14111 = null;
if (goog.isDef(var_args)) {
  p__14111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__14111);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__14120){
var $elem = cljs.core.first(arglist__14120);
var k = cljs.core.first(cljs.core.next(arglist__14120));
var p__14111 = cljs.core.rest(cljs.core.next(arglist__14120));
return data__delegate($elem, k, p__14111);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__14122 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__14122);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__14124 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__14124);
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
var hide__delegate = function ($elem,p__14125){
var vec__14130__14131 = p__14125;
var speed__14132 = cljs.core.nth.call(null,vec__14130__14131,0,null);
var on_finish__14133 = cljs.core.nth.call(null,vec__14130__14131,1,null);
return $elem.hide(speed__14132,on_finish__14133);
};
var hide = function ($elem,var_args){
var p__14125 = null;
if (goog.isDef(var_args)) {
  p__14125 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__14125);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__14134){
var $elem = cljs.core.first(arglist__14134);
var p__14125 = cljs.core.rest(arglist__14134);
return hide__delegate($elem, p__14125);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__14135){
var vec__14140__14141 = p__14135;
var speed__14142 = cljs.core.nth.call(null,vec__14140__14141,0,null);
var on_finish__14143 = cljs.core.nth.call(null,vec__14140__14141,1,null);
return $elem.show(speed__14142,on_finish__14143);
};
var show = function ($elem,var_args){
var p__14135 = null;
if (goog.isDef(var_args)) {
  p__14135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__14135);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__14144){
var $elem = cljs.core.first(arglist__14144);
var p__14135 = cljs.core.rest(arglist__14144);
return show__delegate($elem, p__14135);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__14145){
var vec__14150__14151 = p__14145;
var speed__14152 = cljs.core.nth.call(null,vec__14150__14151,0,null);
var on_finish__14153 = cljs.core.nth.call(null,vec__14150__14151,1,null);
return $elem.toggle(speed__14152,on_finish__14153);
};
var toggle = function ($elem,var_args){
var p__14145 = null;
if (goog.isDef(var_args)) {
  p__14145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__14145);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__14154){
var $elem = cljs.core.first(arglist__14154);
var p__14145 = cljs.core.rest(arglist__14154);
return toggle__delegate($elem, p__14145);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__14155){
var vec__14160__14161 = p__14155;
var speed__14162 = cljs.core.nth.call(null,vec__14160__14161,0,null);
var on_finish__14163 = cljs.core.nth.call(null,vec__14160__14161,1,null);
return $elem.fadeOut(speed__14162,on_finish__14163);
};
var fade_out = function ($elem,var_args){
var p__14155 = null;
if (goog.isDef(var_args)) {
  p__14155 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__14155);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__14164){
var $elem = cljs.core.first(arglist__14164);
var p__14155 = cljs.core.rest(arglist__14164);
return fade_out__delegate($elem, p__14155);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__14165){
var vec__14170__14171 = p__14165;
var speed__14172 = cljs.core.nth.call(null,vec__14170__14171,0,null);
var on_finish__14173 = cljs.core.nth.call(null,vec__14170__14171,1,null);
return $elem.fadeIn(speed__14172,on_finish__14173);
};
var fade_in = function ($elem,var_args){
var p__14165 = null;
if (goog.isDef(var_args)) {
  p__14165 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__14165);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__14174){
var $elem = cljs.core.first(arglist__14174);
var p__14165 = cljs.core.rest(arglist__14174);
return fade_in__delegate($elem, p__14165);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__14175){
var vec__14180__14181 = p__14175;
var speed__14182 = cljs.core.nth.call(null,vec__14180__14181,0,null);
var on_finish__14183 = cljs.core.nth.call(null,vec__14180__14181,1,null);
return $elem.slideUp(speed__14182,on_finish__14183);
};
var slide_up = function ($elem,var_args){
var p__14175 = null;
if (goog.isDef(var_args)) {
  p__14175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__14175);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__14184){
var $elem = cljs.core.first(arglist__14184);
var p__14175 = cljs.core.rest(arglist__14184);
return slide_up__delegate($elem, p__14175);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__14185){
var vec__14190__14191 = p__14185;
var speed__14192 = cljs.core.nth.call(null,vec__14190__14191,0,null);
var on_finish__14193 = cljs.core.nth.call(null,vec__14190__14191,1,null);
return $elem.slideDown(speed__14192,on_finish__14193);
};
var slide_down = function ($elem,var_args){
var p__14185 = null;
if (goog.isDef(var_args)) {
  p__14185 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__14185);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__14194){
var $elem = cljs.core.first(arglist__14194);
var p__14185 = cljs.core.rest(arglist__14194);
return slide_down__delegate($elem, p__14185);
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
var val__delegate = function ($elem,p__14195){
var vec__14199__14200 = p__14195;
var v__14201 = cljs.core.nth.call(null,vec__14199__14200,0,null);
if(cljs.core.truth_(v__14201))
{return $elem.val(v__14201);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__14195 = null;
if (goog.isDef(var_args)) {
  p__14195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__14195);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__14202){
var $elem = cljs.core.first(arglist__14202);
var p__14195 = cljs.core.rest(arglist__14202);
return val__delegate($elem, p__14195);
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
jayq.core.xhr = (function xhr(p__14203,content,callback){
var vec__14209__14210 = p__14203;
var method__14211 = cljs.core.nth.call(null,vec__14209__14210,0,null);
var uri__14212 = cljs.core.nth.call(null,vec__14209__14210,1,null);
var params__14213 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__14211)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__14212,params__14213);
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
var on__delegate = function ($elem,events,p__14214){
var vec__14220__14221 = p__14214;
var sel__14222 = cljs.core.nth.call(null,vec__14220__14221,0,null);
var data__14223 = cljs.core.nth.call(null,vec__14220__14221,1,null);
var handler__14224 = cljs.core.nth.call(null,vec__14220__14221,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__14222),data__14223,handler__14224);
};
var on = function ($elem,events,var_args){
var p__14214 = null;
if (goog.isDef(var_args)) {
  p__14214 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__14214);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__14225){
var $elem = cljs.core.first(arglist__14225);
var events = cljs.core.first(cljs.core.next(arglist__14225));
var p__14214 = cljs.core.rest(cljs.core.next(arglist__14225));
return on__delegate($elem, events, p__14214);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__14226){
var vec__14232__14233 = p__14226;
var sel__14234 = cljs.core.nth.call(null,vec__14232__14233,0,null);
var data__14235 = cljs.core.nth.call(null,vec__14232__14233,1,null);
var handler__14236 = cljs.core.nth.call(null,vec__14232__14233,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__14234),data__14235,handler__14236);
};
var one = function ($elem,events,var_args){
var p__14226 = null;
if (goog.isDef(var_args)) {
  p__14226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__14226);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__14237){
var $elem = cljs.core.first(arglist__14237);
var events = cljs.core.first(cljs.core.next(arglist__14237));
var p__14226 = cljs.core.rest(cljs.core.next(arglist__14237));
return one__delegate($elem, events, p__14226);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__14238){
var vec__14243__14244 = p__14238;
var sel__14245 = cljs.core.nth.call(null,vec__14243__14244,0,null);
var handler__14246 = cljs.core.nth.call(null,vec__14243__14244,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__14245),handler__14246);
};
var off = function ($elem,events,var_args){
var p__14238 = null;
if (goog.isDef(var_args)) {
  p__14238 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__14238);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__14247){
var $elem = cljs.core.first(arglist__14247);
var events = cljs.core.first(cljs.core.next(arglist__14247));
var p__14238 = cljs.core.rest(cljs.core.next(arglist__14247));
return off__delegate($elem, events, p__14238);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
