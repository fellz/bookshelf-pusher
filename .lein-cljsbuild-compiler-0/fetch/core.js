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
{var vec__426809__426810 = route;
var m__426811 = cljs.core.nth.call(null,vec__426809__426810,0,null);
var u__426812 = cljs.core.nth.call(null,vec__426809__426810,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__426811),u__426812], true);
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
var cur__426815 = fetch.util.clj__GT_js.call(null,d);
var query__426816 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__426815)));
return [cljs.core.str(query__426816)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__426818 = req.getResponseText();
return callback.call(null,data__426818);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__426819){
var vec__426830__426831 = p__426819;
var opts__426832 = cljs.core.nth.call(null,vec__426830__426831,0,null);
var req__426834 = (new goog.net.XhrIo());
var vec__426833__426835 = fetch.core.parse_route.call(null,route);
var method__426836 = cljs.core.nth.call(null,vec__426833__426835,0,null);
var uri__426837 = cljs.core.nth.call(null,vec__426833__426835,1,null);
var data__426838 = fetch.core.__GT_data.call(null,content);
var callback__426839 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__426839))
{goog.events.listen(req__426834,goog.net.EventType.COMPLETE,(function (){
return callback__426839.call(null,req__426834);
}));
} else
{}
return req__426834.send(uri__426837,method__426836,data__426838,(cljs.core.truth_(opts__426832)?fetch.util.clj__GT_js.call(null,opts__426832):null));
};
var xhr = function (route,content,callback,var_args){
var p__426819 = null;
if (goog.isDef(var_args)) {
  p__426819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__426819);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__426840){
var route = cljs.core.first(arglist__426840);
var content = cljs.core.first(cljs.core.next(arglist__426840));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426840)));
var p__426819 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426840)));
return xhr__delegate(route, content, callback, p__426819);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
