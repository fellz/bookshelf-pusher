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
{var vec__126365__126366 = route;
var m__126367 = cljs.core.nth.call(null,vec__126365__126366,0,null);
var u__126368 = cljs.core.nth.call(null,vec__126365__126366,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__126367),u__126368], true);
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
var cur__126371 = fetch.util.clj__GT_js.call(null,d);
var query__126372 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__126371)));
return [cljs.core.str(query__126372)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__126374 = req.getResponseText();
return callback.call(null,data__126374);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__126375){
var vec__126386__126387 = p__126375;
var opts__126388 = cljs.core.nth.call(null,vec__126386__126387,0,null);
var req__126390 = (new goog.net.XhrIo());
var vec__126389__126391 = fetch.core.parse_route.call(null,route);
var method__126392 = cljs.core.nth.call(null,vec__126389__126391,0,null);
var uri__126393 = cljs.core.nth.call(null,vec__126389__126391,1,null);
var data__126394 = fetch.core.__GT_data.call(null,content);
var callback__126395 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__126395))
{goog.events.listen(req__126390,goog.net.EventType.COMPLETE,(function (){
return callback__126395.call(null,req__126390);
}));
} else
{}
return req__126390.send(uri__126393,method__126392,data__126394,(cljs.core.truth_(opts__126388)?fetch.util.clj__GT_js.call(null,opts__126388):null));
};
var xhr = function (route,content,callback,var_args){
var p__126375 = null;
if (goog.isDef(var_args)) {
  p__126375 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__126375);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__126396){
var route = cljs.core.first(arglist__126396);
var content = cljs.core.first(cljs.core.next(arglist__126396));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__126396)));
var p__126375 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__126396)));
return xhr__delegate(route, content, callback, p__126375);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
