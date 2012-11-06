goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__126142 = {};
var G__126143__126144 = cljs.core.seq.call(null,m);
while(true){
if(G__126143__126144)
{var vec__126145__126146 = cljs.core.first.call(null,G__126143__126144);
var k__126147 = cljs.core.nth.call(null,vec__126145__126146,0,null);
var v__126148 = cljs.core.nth.call(null,vec__126145__126146,1,null);
(out__126142[cljs.core.name.call(null,k__126147)] = v__126148);
{
var G__126149 = cljs.core.next.call(null,G__126143__126144);
G__126143__126144 = G__126149;
continue;
}
} else
{}
break;
}
return out__126142;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__126151 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__126151);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__126152){
var v = cljs.core.first(arglist__126152);
var text = cljs.core.rest(arglist__126152);
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
{return cljs.core.reduce.call(null,(function (m,p__126158){
var vec__126159__126160 = p__126158;
var k__126161 = cljs.core.nth.call(null,vec__126159__126160,0,null);
var v__126162 = cljs.core.nth.call(null,vec__126159__126160,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__126161),clj__GT_js.call(null,v__126162));
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
