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
{var temp__3971__auto____426609 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____426609))
{var cm__426610 = temp__3971__auto____426609;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__426610),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__426611){
var vec__426615__426616 = p__426611;
var context__426617 = cljs.core.nth.call(null,vec__426615__426616,0,null);
if(cljs.core.not.call(null,context__426617))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__426617);
}
};
var $ = function (sel,var_args){
var p__426611 = null;
if (goog.isDef(var_args)) {
  p__426611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__426611);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__426618){
var sel = cljs.core.first(arglist__426618);
var p__426611 = cljs.core.rest(arglist__426618);
return $__delegate(sel, p__426611);
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
var or__3824__auto____426619 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____426619))
{return or__3824__auto____426619;
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
var G__426620 = null;
var G__426620__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__426620__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__426620 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__426620__2.call(this,_,k);
case 3:
return G__426620__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__426620;
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
var attr__delegate = function ($elem,a,p__426621){
var vec__426626__426627 = p__426621;
var v__426628 = cljs.core.nth.call(null,vec__426626__426627,0,null);
var a__426629 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__426628))
{return $elem.attr(a__426629);
} else
{return $elem.attr(a__426629,v__426628);
}
};
var attr = function ($elem,a,var_args){
var p__426621 = null;
if (goog.isDef(var_args)) {
  p__426621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__426621);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__426630){
var $elem = cljs.core.first(arglist__426630);
var a = cljs.core.first(cljs.core.next(arglist__426630));
var p__426621 = cljs.core.rest(cljs.core.next(arglist__426630));
return attr__delegate($elem, a, p__426621);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__426631){
var vec__426636__426637 = p__426631;
var v__426638 = cljs.core.nth.call(null,vec__426636__426637,0,null);
var k__426639 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__426638))
{return $elem.data(k__426639);
} else
{return $elem.data(k__426639,v__426638);
}
};
var data = function ($elem,k,var_args){
var p__426631 = null;
if (goog.isDef(var_args)) {
  p__426631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__426631);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__426640){
var $elem = cljs.core.first(arglist__426640);
var k = cljs.core.first(cljs.core.next(arglist__426640));
var p__426631 = cljs.core.rest(cljs.core.next(arglist__426640));
return data__delegate($elem, k, p__426631);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__426642 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__426642);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__426644 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__426644);
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
var hide__delegate = function ($elem,p__426645){
var vec__426650__426651 = p__426645;
var speed__426652 = cljs.core.nth.call(null,vec__426650__426651,0,null);
var on_finish__426653 = cljs.core.nth.call(null,vec__426650__426651,1,null);
return $elem.hide(speed__426652,on_finish__426653);
};
var hide = function ($elem,var_args){
var p__426645 = null;
if (goog.isDef(var_args)) {
  p__426645 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__426645);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__426654){
var $elem = cljs.core.first(arglist__426654);
var p__426645 = cljs.core.rest(arglist__426654);
return hide__delegate($elem, p__426645);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__426655){
var vec__426660__426661 = p__426655;
var speed__426662 = cljs.core.nth.call(null,vec__426660__426661,0,null);
var on_finish__426663 = cljs.core.nth.call(null,vec__426660__426661,1,null);
return $elem.show(speed__426662,on_finish__426663);
};
var show = function ($elem,var_args){
var p__426655 = null;
if (goog.isDef(var_args)) {
  p__426655 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__426655);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__426664){
var $elem = cljs.core.first(arglist__426664);
var p__426655 = cljs.core.rest(arglist__426664);
return show__delegate($elem, p__426655);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__426665){
var vec__426670__426671 = p__426665;
var speed__426672 = cljs.core.nth.call(null,vec__426670__426671,0,null);
var on_finish__426673 = cljs.core.nth.call(null,vec__426670__426671,1,null);
return $elem.toggle(speed__426672,on_finish__426673);
};
var toggle = function ($elem,var_args){
var p__426665 = null;
if (goog.isDef(var_args)) {
  p__426665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__426665);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__426674){
var $elem = cljs.core.first(arglist__426674);
var p__426665 = cljs.core.rest(arglist__426674);
return toggle__delegate($elem, p__426665);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__426675){
var vec__426680__426681 = p__426675;
var speed__426682 = cljs.core.nth.call(null,vec__426680__426681,0,null);
var on_finish__426683 = cljs.core.nth.call(null,vec__426680__426681,1,null);
return $elem.fadeOut(speed__426682,on_finish__426683);
};
var fade_out = function ($elem,var_args){
var p__426675 = null;
if (goog.isDef(var_args)) {
  p__426675 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__426675);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__426684){
var $elem = cljs.core.first(arglist__426684);
var p__426675 = cljs.core.rest(arglist__426684);
return fade_out__delegate($elem, p__426675);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__426685){
var vec__426690__426691 = p__426685;
var speed__426692 = cljs.core.nth.call(null,vec__426690__426691,0,null);
var on_finish__426693 = cljs.core.nth.call(null,vec__426690__426691,1,null);
return $elem.fadeIn(speed__426692,on_finish__426693);
};
var fade_in = function ($elem,var_args){
var p__426685 = null;
if (goog.isDef(var_args)) {
  p__426685 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__426685);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__426694){
var $elem = cljs.core.first(arglist__426694);
var p__426685 = cljs.core.rest(arglist__426694);
return fade_in__delegate($elem, p__426685);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__426695){
var vec__426700__426701 = p__426695;
var speed__426702 = cljs.core.nth.call(null,vec__426700__426701,0,null);
var on_finish__426703 = cljs.core.nth.call(null,vec__426700__426701,1,null);
return $elem.slideUp(speed__426702,on_finish__426703);
};
var slide_up = function ($elem,var_args){
var p__426695 = null;
if (goog.isDef(var_args)) {
  p__426695 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__426695);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__426704){
var $elem = cljs.core.first(arglist__426704);
var p__426695 = cljs.core.rest(arglist__426704);
return slide_up__delegate($elem, p__426695);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__426705){
var vec__426710__426711 = p__426705;
var speed__426712 = cljs.core.nth.call(null,vec__426710__426711,0,null);
var on_finish__426713 = cljs.core.nth.call(null,vec__426710__426711,1,null);
return $elem.slideDown(speed__426712,on_finish__426713);
};
var slide_down = function ($elem,var_args){
var p__426705 = null;
if (goog.isDef(var_args)) {
  p__426705 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__426705);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__426714){
var $elem = cljs.core.first(arglist__426714);
var p__426705 = cljs.core.rest(arglist__426714);
return slide_down__delegate($elem, p__426705);
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
var val__delegate = function ($elem,p__426715){
var vec__426719__426720 = p__426715;
var v__426721 = cljs.core.nth.call(null,vec__426719__426720,0,null);
if(cljs.core.truth_(v__426721))
{return $elem.val(v__426721);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__426715 = null;
if (goog.isDef(var_args)) {
  p__426715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__426715);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__426722){
var $elem = cljs.core.first(arglist__426722);
var p__426715 = cljs.core.rest(arglist__426722);
return val__delegate($elem, p__426715);
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
jayq.core.xhr = (function xhr(p__426723,content,callback){
var vec__426729__426730 = p__426723;
var method__426731 = cljs.core.nth.call(null,vec__426729__426730,0,null);
var uri__426732 = cljs.core.nth.call(null,vec__426729__426730,1,null);
var params__426733 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__426731)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__426732,params__426733);
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
var on__delegate = function ($elem,events,p__426734){
var vec__426740__426741 = p__426734;
var sel__426742 = cljs.core.nth.call(null,vec__426740__426741,0,null);
var data__426743 = cljs.core.nth.call(null,vec__426740__426741,1,null);
var handler__426744 = cljs.core.nth.call(null,vec__426740__426741,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__426742),data__426743,handler__426744);
};
var on = function ($elem,events,var_args){
var p__426734 = null;
if (goog.isDef(var_args)) {
  p__426734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__426734);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__426745){
var $elem = cljs.core.first(arglist__426745);
var events = cljs.core.first(cljs.core.next(arglist__426745));
var p__426734 = cljs.core.rest(cljs.core.next(arglist__426745));
return on__delegate($elem, events, p__426734);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__426746){
var vec__426752__426753 = p__426746;
var sel__426754 = cljs.core.nth.call(null,vec__426752__426753,0,null);
var data__426755 = cljs.core.nth.call(null,vec__426752__426753,1,null);
var handler__426756 = cljs.core.nth.call(null,vec__426752__426753,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__426754),data__426755,handler__426756);
};
var one = function ($elem,events,var_args){
var p__426746 = null;
if (goog.isDef(var_args)) {
  p__426746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__426746);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__426757){
var $elem = cljs.core.first(arglist__426757);
var events = cljs.core.first(cljs.core.next(arglist__426757));
var p__426746 = cljs.core.rest(cljs.core.next(arglist__426757));
return one__delegate($elem, events, p__426746);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__426758){
var vec__426763__426764 = p__426758;
var sel__426765 = cljs.core.nth.call(null,vec__426763__426764,0,null);
var handler__426766 = cljs.core.nth.call(null,vec__426763__426764,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__426765),handler__426766);
};
var off = function ($elem,events,var_args){
var p__426758 = null;
if (goog.isDef(var_args)) {
  p__426758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__426758);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__426767){
var $elem = cljs.core.first(arglist__426767);
var events = cljs.core.first(cljs.core.next(arglist__426767));
var p__426758 = cljs.core.rest(cljs.core.next(arglist__426767));
return off__delegate($elem, events, p__426758);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
