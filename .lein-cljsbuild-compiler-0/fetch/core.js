goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('fetch.util');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__14309__14310 = route;
var m__14311 = cljs.core.nth.call(null,vec__14309__14310,0,null);
var u__14312 = cljs.core.nth.call(null,vec__14309__14310,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__14311),u__14312], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__14315 = fetch.util.clj__GT_js.call(null,d);
var query__14316 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__14315)));
return [cljs.core.str(query__14316)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__14318 = req.getResponseText();
return callback.call(null,data__14318);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__14319){
var vec__14330__14331 = p__14319;
var opts__14332 = cljs.core.nth.call(null,vec__14330__14331,0,null);
var req__14334 = (new goog.net.XhrIo());
var vec__14333__14335 = fetch.core.parse_route.call(null,route);
var method__14336 = cljs.core.nth.call(null,vec__14333__14335,0,null);
var uri__14337 = cljs.core.nth.call(null,vec__14333__14335,1,null);
var data__14338 = fetch.core.__GT_data.call(null,content);
var callback__14339 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__14339))
{goog.events.listen(req__14334,goog.net.EventType.COMPLETE,(function (){
return callback__14339.call(null,req__14334);
}));
} else
{}
return req__14334.send(uri__14337,method__14336,data__14338,(cljs.core.truth_(opts__14332)?fetch.util.clj__GT_js.call(null,opts__14332):null));
};
var xhr = function (route,content,callback,var_args){
var p__14319 = null;
if (goog.isDef(var_args)) {
  p__14319 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__14319);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__14340){
var route = cljs.core.first(arglist__14340);
var content = cljs.core.first(cljs.core.next(arglist__14340));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14340)));
var p__14319 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14340)));
return xhr__delegate(route, content, callback, p__14319);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
