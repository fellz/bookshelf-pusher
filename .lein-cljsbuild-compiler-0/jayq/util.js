goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__14066 = {};
var G__14067__14068 = cljs.core.seq.call(null,m);
while(true){
if(G__14067__14068)
{var vec__14069__14070 = cljs.core.first.call(null,G__14067__14068);
var k__14071 = cljs.core.nth.call(null,vec__14069__14070,0,null);
var v__14072 = cljs.core.nth.call(null,vec__14069__14070,1,null);
(out__14066[cljs.core.name.call(null,k__14071)] = v__14072);
{
var G__14073 = cljs.core.next.call(null,G__14067__14068);
G__14067__14068 = G__14073;
continue;
}
} else
{}
break;
}
return out__14066;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__14075 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__14075);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14076){
var v = cljs.core.first(arglist__14076);
var text = cljs.core.rest(arglist__14076);
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
{return cljs.core.reduce.call(null,(function (m,p__14082){
var vec__14083__14084 = p__14082;
var k__14085 = cljs.core.nth.call(null,vec__14083__14084,0,null);
var v__14086 = cljs.core.nth.call(null,vec__14083__14084,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__14085),clj__GT_js.call(null,v__14086));
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
