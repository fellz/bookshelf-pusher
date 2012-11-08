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
{var vec__15173__15174 = route;
var m__15175 = cljs.core.nth.call(null,vec__15173__15174,0,null);
var u__15176 = cljs.core.nth.call(null,vec__15173__15174,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__15175),u__15176], true);
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
var cur__15179 = fetch.util.clj__GT_js.call(null,d);
var query__15180 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__15179)));
return [cljs.core.str(query__15180)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__15182 = req.getResponseText();
return callback.call(null,data__15182);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__15183){
var vec__15194__15195 = p__15183;
var opts__15196 = cljs.core.nth.call(null,vec__15194__15195,0,null);
var req__15198 = (new goog.net.XhrIo());
var vec__15197__15199 = fetch.core.parse_route.call(null,route);
var method__15200 = cljs.core.nth.call(null,vec__15197__15199,0,null);
var uri__15201 = cljs.core.nth.call(null,vec__15197__15199,1,null);
var data__15202 = fetch.core.__GT_data.call(null,content);
var callback__15203 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__15203))
{goog.events.listen(req__15198,goog.net.EventType.COMPLETE,(function (){
return callback__15203.call(null,req__15198);
}));
} else
{}
return req__15198.send(uri__15201,method__15200,data__15202,(cljs.core.truth_(opts__15196)?fetch.util.clj__GT_js.call(null,opts__15196):null));
};
var xhr = function (route,content,callback,var_args){
var p__15183 = null;
if (goog.isDef(var_args)) {
  p__15183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__15183);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__15204){
var route = cljs.core.first(arglist__15204);
var content = cljs.core.first(cljs.core.next(arglist__15204));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15204)));
var p__15183 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15204)));
return xhr__delegate(route, content, callback, p__15183);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
