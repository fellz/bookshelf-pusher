goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__14086 = {};
var G__14087__14088 = cljs.core.seq.call(null,m);
while(true){
if(G__14087__14088)
{var vec__14089__14090 = cljs.core.first.call(null,G__14087__14088);
var k__14091 = cljs.core.nth.call(null,vec__14089__14090,0,null);
var v__14092 = cljs.core.nth.call(null,vec__14089__14090,1,null);
(out__14086[cljs.core.name.call(null,k__14091)] = v__14092);
{
var G__14093 = cljs.core.next.call(null,G__14087__14088);
G__14087__14088 = G__14093;
continue;
}
} else
{}
break;
}
return out__14086;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__14095 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__14095);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14096){
var v = cljs.core.first(arglist__14096);
var text = cljs.core.rest(arglist__14096);
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
{return cljs.core.reduce.call(null,(function (m,p__14102){
var vec__14103__14104 = p__14102;
var k__14105 = cljs.core.nth.call(null,vec__14103__14104,0,null);
var v__14106 = cljs.core.nth.call(null,vec__14103__14104,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__14105),clj__GT_js.call(null,v__14106));
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
