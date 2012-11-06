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
{var vec__109744__109745 = route;
var m__109746 = cljs.core.nth.call(null,vec__109744__109745,0,null);
var u__109747 = cljs.core.nth.call(null,vec__109744__109745,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__109746),u__109747], true);
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
var cur__109750 = fetch.util.clj__GT_js.call(null,d);
var query__109751 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__109750)));
return [cljs.core.str(query__109751)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__109753 = req.getResponseText();
return callback.call(null,data__109753);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__109754){
var vec__109765__109766 = p__109754;
var opts__109767 = cljs.core.nth.call(null,vec__109765__109766,0,null);
var req__109769 = (new goog.net.XhrIo());
var vec__109768__109770 = fetch.core.parse_route.call(null,route);
var method__109771 = cljs.core.nth.call(null,vec__109768__109770,0,null);
var uri__109772 = cljs.core.nth.call(null,vec__109768__109770,1,null);
var data__109773 = fetch.core.__GT_data.call(null,content);
var callback__109774 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__109774))
{goog.events.listen(req__109769,goog.net.EventType.COMPLETE,(function (){
return callback__109774.call(null,req__109769);
}));
} else
{}
return req__109769.send(uri__109772,method__109771,data__109773,(cljs.core.truth_(opts__109767)?fetch.util.clj__GT_js.call(null,opts__109767):null));
};
var xhr = function (route,content,callback,var_args){
var p__109754 = null;
if (goog.isDef(var_args)) {
  p__109754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__109754);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__109775){
var route = cljs.core.first(arglist__109775);
var content = cljs.core.first(cljs.core.next(arglist__109775));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109775)));
var p__109754 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__109775)));
return xhr__delegate(route, content, callback, p__109754);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
