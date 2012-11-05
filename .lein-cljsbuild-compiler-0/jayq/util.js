goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__426586 = {};
var G__426587__426588 = cljs.core.seq.call(null,m);
while(true){
if(G__426587__426588)
{var vec__426589__426590 = cljs.core.first.call(null,G__426587__426588);
var k__426591 = cljs.core.nth.call(null,vec__426589__426590,0,null);
var v__426592 = cljs.core.nth.call(null,vec__426589__426590,1,null);
(out__426586[cljs.core.name.call(null,k__426591)] = v__426592);
{
var G__426593 = cljs.core.next.call(null,G__426587__426588);
G__426587__426588 = G__426593;
continue;
}
} else
{}
break;
}
return out__426586;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__426595 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__426595);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__426596){
var v = cljs.core.first(arglist__426596);
var text = cljs.core.rest(arglist__426596);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__426602){
var vec__426603__426604 = p__426602;
var k__426605 = cljs.core.nth.call(null,vec__426603__426604,0,null);
var v__426606 = cljs.core.nth.call(null,vec__426603__426604,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__426605),clj__GT_js.call(null,v__426606));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
