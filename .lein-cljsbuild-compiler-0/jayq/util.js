goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__109521 = {};
var G__109522__109523 = cljs.core.seq.call(null,m);
while(true){
if(G__109522__109523)
{var vec__109524__109525 = cljs.core.first.call(null,G__109522__109523);
var k__109526 = cljs.core.nth.call(null,vec__109524__109525,0,null);
var v__109527 = cljs.core.nth.call(null,vec__109524__109525,1,null);
(out__109521[cljs.core.name.call(null,k__109526)] = v__109527);
{
var G__109528 = cljs.core.next.call(null,G__109522__109523);
G__109522__109523 = G__109528;
continue;
}
} else
{}
break;
}
return out__109521;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__109530 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__109530);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__109531){
var v = cljs.core.first(arglist__109531);
var text = cljs.core.rest(arglist__109531);
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
{return cljs.core.reduce.call(null,(function (m,p__109537){
var vec__109538__109539 = p__109537;
var k__109540 = cljs.core.nth.call(null,vec__109538__109539,0,null);
var v__109541 = cljs.core.nth.call(null,vec__109538__109539,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__109540),clj__GT_js.call(null,v__109541));
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
