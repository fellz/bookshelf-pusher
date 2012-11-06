goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__10133 = (((x == null))?null:x);
if((p[goog.typeOf(x__10133)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__10134__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__10134 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10134__delegate.call(this, array, i, idxs);
};
G__10134.cljs$lang$maxFixedArity = 2;
G__10134.cljs$lang$applyTo = (function (arglist__10135){
var array = cljs.core.first(arglist__10135);
var i = cljs.core.first(cljs.core.next(arglist__10135));
var idxs = cljs.core.rest(cljs.core.next(arglist__10135));
return G__10134__delegate(array, i, idxs);
});
G__10134.cljs$lang$arity$variadic = G__10134__delegate;
return G__10134;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____10220 = this$;
if(and__3822__auto____10220)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____10220;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5874__auto____10221 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10222 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10221)]);
if(or__3824__auto____10222)
{return or__3824__auto____10222;
} else
{var or__3824__auto____10223 = (cljs.core._invoke["_"]);
if(or__3824__auto____10223)
{return or__3824__auto____10223;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____10224 = this$;
if(and__3822__auto____10224)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____10224;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5874__auto____10225 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10226 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10225)]);
if(or__3824__auto____10226)
{return or__3824__auto____10226;
} else
{var or__3824__auto____10227 = (cljs.core._invoke["_"]);
if(or__3824__auto____10227)
{return or__3824__auto____10227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____10228 = this$;
if(and__3822__auto____10228)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____10228;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5874__auto____10229 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10230 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10229)]);
if(or__3824__auto____10230)
{return or__3824__auto____10230;
} else
{var or__3824__auto____10231 = (cljs.core._invoke["_"]);
if(or__3824__auto____10231)
{return or__3824__auto____10231;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____10232 = this$;
if(and__3822__auto____10232)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____10232;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5874__auto____10233 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10234 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10233)]);
if(or__3824__auto____10234)
{return or__3824__auto____10234;
} else
{var or__3824__auto____10235 = (cljs.core._invoke["_"]);
if(or__3824__auto____10235)
{return or__3824__auto____10235;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____10236 = this$;
if(and__3822__auto____10236)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____10236;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5874__auto____10237 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10238 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10237)]);
if(or__3824__auto____10238)
{return or__3824__auto____10238;
} else
{var or__3824__auto____10239 = (cljs.core._invoke["_"]);
if(or__3824__auto____10239)
{return or__3824__auto____10239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____10240 = this$;
if(and__3822__auto____10240)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____10240;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5874__auto____10241 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10242 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10241)]);
if(or__3824__auto____10242)
{return or__3824__auto____10242;
} else
{var or__3824__auto____10243 = (cljs.core._invoke["_"]);
if(or__3824__auto____10243)
{return or__3824__auto____10243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____10244 = this$;
if(and__3822__auto____10244)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____10244;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5874__auto____10245 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10246 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10245)]);
if(or__3824__auto____10246)
{return or__3824__auto____10246;
} else
{var or__3824__auto____10247 = (cljs.core._invoke["_"]);
if(or__3824__auto____10247)
{return or__3824__auto____10247;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____10248 = this$;
if(and__3822__auto____10248)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____10248;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5874__auto____10249 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10250 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10249)]);
if(or__3824__auto____10250)
{return or__3824__auto____10250;
} else
{var or__3824__auto____10251 = (cljs.core._invoke["_"]);
if(or__3824__auto____10251)
{return or__3824__auto____10251;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____10252 = this$;
if(and__3822__auto____10252)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____10252;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5874__auto____10253 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10254 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10253)]);
if(or__3824__auto____10254)
{return or__3824__auto____10254;
} else
{var or__3824__auto____10255 = (cljs.core._invoke["_"]);
if(or__3824__auto____10255)
{return or__3824__auto____10255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____10256 = this$;
if(and__3822__auto____10256)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____10256;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5874__auto____10257 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10258 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10257)]);
if(or__3824__auto____10258)
{return or__3824__auto____10258;
} else
{var or__3824__auto____10259 = (cljs.core._invoke["_"]);
if(or__3824__auto____10259)
{return or__3824__auto____10259;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____10260 = this$;
if(and__3822__auto____10260)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____10260;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5874__auto____10261 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10262 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10261)]);
if(or__3824__auto____10262)
{return or__3824__auto____10262;
} else
{var or__3824__auto____10263 = (cljs.core._invoke["_"]);
if(or__3824__auto____10263)
{return or__3824__auto____10263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____10264 = this$;
if(and__3822__auto____10264)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____10264;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5874__auto____10265 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10266 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10265)]);
if(or__3824__auto____10266)
{return or__3824__auto____10266;
} else
{var or__3824__auto____10267 = (cljs.core._invoke["_"]);
if(or__3824__auto____10267)
{return or__3824__auto____10267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____10268 = this$;
if(and__3822__auto____10268)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____10268;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5874__auto____10269 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10270 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10269)]);
if(or__3824__auto____10270)
{return or__3824__auto____10270;
} else
{var or__3824__auto____10271 = (cljs.core._invoke["_"]);
if(or__3824__auto____10271)
{return or__3824__auto____10271;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____10272 = this$;
if(and__3822__auto____10272)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____10272;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5874__auto____10273 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10274 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10273)]);
if(or__3824__auto____10274)
{return or__3824__auto____10274;
} else
{var or__3824__auto____10275 = (cljs.core._invoke["_"]);
if(or__3824__auto____10275)
{return or__3824__auto____10275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____10276 = this$;
if(and__3822__auto____10276)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____10276;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5874__auto____10277 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10278 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10277)]);
if(or__3824__auto____10278)
{return or__3824__auto____10278;
} else
{var or__3824__auto____10279 = (cljs.core._invoke["_"]);
if(or__3824__auto____10279)
{return or__3824__auto____10279;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____10280 = this$;
if(and__3822__auto____10280)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____10280;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5874__auto____10281 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10282 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10281)]);
if(or__3824__auto____10282)
{return or__3824__auto____10282;
} else
{var or__3824__auto____10283 = (cljs.core._invoke["_"]);
if(or__3824__auto____10283)
{return or__3824__auto____10283;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____10284 = this$;
if(and__3822__auto____10284)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____10284;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5874__auto____10285 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10286 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10285)]);
if(or__3824__auto____10286)
{return or__3824__auto____10286;
} else
{var or__3824__auto____10287 = (cljs.core._invoke["_"]);
if(or__3824__auto____10287)
{return or__3824__auto____10287;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____10288 = this$;
if(and__3822__auto____10288)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____10288;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5874__auto____10289 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10290 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10289)]);
if(or__3824__auto____10290)
{return or__3824__auto____10290;
} else
{var or__3824__auto____10291 = (cljs.core._invoke["_"]);
if(or__3824__auto____10291)
{return or__3824__auto____10291;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____10292 = this$;
if(and__3822__auto____10292)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____10292;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5874__auto____10293 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10294 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10293)]);
if(or__3824__auto____10294)
{return or__3824__auto____10294;
} else
{var or__3824__auto____10295 = (cljs.core._invoke["_"]);
if(or__3824__auto____10295)
{return or__3824__auto____10295;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____10296 = this$;
if(and__3822__auto____10296)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____10296;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5874__auto____10297 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10298 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10297)]);
if(or__3824__auto____10298)
{return or__3824__auto____10298;
} else
{var or__3824__auto____10299 = (cljs.core._invoke["_"]);
if(or__3824__auto____10299)
{return or__3824__auto____10299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____10300 = this$;
if(and__3822__auto____10300)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____10300;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5874__auto____10301 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10302 = (cljs.core._invoke[goog.typeOf(x__5874__auto____10301)]);
if(or__3824__auto____10302)
{return or__3824__auto____10302;
} else
{var or__3824__auto____10303 = (cljs.core._invoke["_"]);
if(or__3824__auto____10303)
{return or__3824__auto____10303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____10308 = coll;
if(and__3822__auto____10308)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____10308;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5874__auto____10309 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10310 = (cljs.core._count[goog.typeOf(x__5874__auto____10309)]);
if(or__3824__auto____10310)
{return or__3824__auto____10310;
} else
{var or__3824__auto____10311 = (cljs.core._count["_"]);
if(or__3824__auto____10311)
{return or__3824__auto____10311;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____10316 = coll;
if(and__3822__auto____10316)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____10316;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5874__auto____10317 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10318 = (cljs.core._empty[goog.typeOf(x__5874__auto____10317)]);
if(or__3824__auto____10318)
{return or__3824__auto____10318;
} else
{var or__3824__auto____10319 = (cljs.core._empty["_"]);
if(or__3824__auto____10319)
{return or__3824__auto____10319;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____10324 = coll;
if(and__3822__auto____10324)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____10324;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5874__auto____10325 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10326 = (cljs.core._conj[goog.typeOf(x__5874__auto____10325)]);
if(or__3824__auto____10326)
{return or__3824__auto____10326;
} else
{var or__3824__auto____10327 = (cljs.core._conj["_"]);
if(or__3824__auto____10327)
{return or__3824__auto____10327;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____10336 = coll;
if(and__3822__auto____10336)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____10336;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5874__auto____10337 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10338 = (cljs.core._nth[goog.typeOf(x__5874__auto____10337)]);
if(or__3824__auto____10338)
{return or__3824__auto____10338;
} else
{var or__3824__auto____10339 = (cljs.core._nth["_"]);
if(or__3824__auto____10339)
{return or__3824__auto____10339;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____10340 = coll;
if(and__3822__auto____10340)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____10340;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5874__auto____10341 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10342 = (cljs.core._nth[goog.typeOf(x__5874__auto____10341)]);
if(or__3824__auto____10342)
{return or__3824__auto____10342;
} else
{var or__3824__auto____10343 = (cljs.core._nth["_"]);
if(or__3824__auto____10343)
{return or__3824__auto____10343;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____10348 = coll;
if(and__3822__auto____10348)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____10348;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5874__auto____10349 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10350 = (cljs.core._first[goog.typeOf(x__5874__auto____10349)]);
if(or__3824__auto____10350)
{return or__3824__auto____10350;
} else
{var or__3824__auto____10351 = (cljs.core._first["_"]);
if(or__3824__auto____10351)
{return or__3824__auto____10351;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____10356 = coll;
if(and__3822__auto____10356)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____10356;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5874__auto____10357 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10358 = (cljs.core._rest[goog.typeOf(x__5874__auto____10357)]);
if(or__3824__auto____10358)
{return or__3824__auto____10358;
} else
{var or__3824__auto____10359 = (cljs.core._rest["_"]);
if(or__3824__auto____10359)
{return or__3824__auto____10359;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____10364 = coll;
if(and__3822__auto____10364)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____10364;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5874__auto____10365 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10366 = (cljs.core._next[goog.typeOf(x__5874__auto____10365)]);
if(or__3824__auto____10366)
{return or__3824__auto____10366;
} else
{var or__3824__auto____10367 = (cljs.core._next["_"]);
if(or__3824__auto____10367)
{return or__3824__auto____10367;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____10376 = o;
if(and__3822__auto____10376)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____10376;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5874__auto____10377 = (((o == null))?null:o);
return (function (){var or__3824__auto____10378 = (cljs.core._lookup[goog.typeOf(x__5874__auto____10377)]);
if(or__3824__auto____10378)
{return or__3824__auto____10378;
} else
{var or__3824__auto____10379 = (cljs.core._lookup["_"]);
if(or__3824__auto____10379)
{return or__3824__auto____10379;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____10380 = o;
if(and__3822__auto____10380)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____10380;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5874__auto____10381 = (((o == null))?null:o);
return (function (){var or__3824__auto____10382 = (cljs.core._lookup[goog.typeOf(x__5874__auto____10381)]);
if(or__3824__auto____10382)
{return or__3824__auto____10382;
} else
{var or__3824__auto____10383 = (cljs.core._lookup["_"]);
if(or__3824__auto____10383)
{return or__3824__auto____10383;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____10388 = coll;
if(and__3822__auto____10388)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____10388;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5874__auto____10389 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10390 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5874__auto____10389)]);
if(or__3824__auto____10390)
{return or__3824__auto____10390;
} else
{var or__3824__auto____10391 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____10391)
{return or__3824__auto____10391;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____10396 = coll;
if(and__3822__auto____10396)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____10396;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5874__auto____10397 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10398 = (cljs.core._assoc[goog.typeOf(x__5874__auto____10397)]);
if(or__3824__auto____10398)
{return or__3824__auto____10398;
} else
{var or__3824__auto____10399 = (cljs.core._assoc["_"]);
if(or__3824__auto____10399)
{return or__3824__auto____10399;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____10404 = coll;
if(and__3822__auto____10404)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____10404;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5874__auto____10405 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10406 = (cljs.core._dissoc[goog.typeOf(x__5874__auto____10405)]);
if(or__3824__auto____10406)
{return or__3824__auto____10406;
} else
{var or__3824__auto____10407 = (cljs.core._dissoc["_"]);
if(or__3824__auto____10407)
{return or__3824__auto____10407;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____10412 = coll;
if(and__3822__auto____10412)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____10412;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5874__auto____10413 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10414 = (cljs.core._key[goog.typeOf(x__5874__auto____10413)]);
if(or__3824__auto____10414)
{return or__3824__auto____10414;
} else
{var or__3824__auto____10415 = (cljs.core._key["_"]);
if(or__3824__auto____10415)
{return or__3824__auto____10415;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____10420 = coll;
if(and__3822__auto____10420)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____10420;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5874__auto____10421 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10422 = (cljs.core._val[goog.typeOf(x__5874__auto____10421)]);
if(or__3824__auto____10422)
{return or__3824__auto____10422;
} else
{var or__3824__auto____10423 = (cljs.core._val["_"]);
if(or__3824__auto____10423)
{return or__3824__auto____10423;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____10428 = coll;
if(and__3822__auto____10428)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____10428;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5874__auto____10429 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10430 = (cljs.core._disjoin[goog.typeOf(x__5874__auto____10429)]);
if(or__3824__auto____10430)
{return or__3824__auto____10430;
} else
{var or__3824__auto____10431 = (cljs.core._disjoin["_"]);
if(or__3824__auto____10431)
{return or__3824__auto____10431;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____10436 = coll;
if(and__3822__auto____10436)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____10436;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5874__auto____10437 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10438 = (cljs.core._peek[goog.typeOf(x__5874__auto____10437)]);
if(or__3824__auto____10438)
{return or__3824__auto____10438;
} else
{var or__3824__auto____10439 = (cljs.core._peek["_"]);
if(or__3824__auto____10439)
{return or__3824__auto____10439;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____10444 = coll;
if(and__3822__auto____10444)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____10444;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5874__auto____10445 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10446 = (cljs.core._pop[goog.typeOf(x__5874__auto____10445)]);
if(or__3824__auto____10446)
{return or__3824__auto____10446;
} else
{var or__3824__auto____10447 = (cljs.core._pop["_"]);
if(or__3824__auto____10447)
{return or__3824__auto____10447;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____10452 = coll;
if(and__3822__auto____10452)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____10452;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5874__auto____10453 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10454 = (cljs.core._assoc_n[goog.typeOf(x__5874__auto____10453)]);
if(or__3824__auto____10454)
{return or__3824__auto____10454;
} else
{var or__3824__auto____10455 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____10455)
{return or__3824__auto____10455;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____10460 = o;
if(and__3822__auto____10460)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____10460;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5874__auto____10461 = (((o == null))?null:o);
return (function (){var or__3824__auto____10462 = (cljs.core._deref[goog.typeOf(x__5874__auto____10461)]);
if(or__3824__auto____10462)
{return or__3824__auto____10462;
} else
{var or__3824__auto____10463 = (cljs.core._deref["_"]);
if(or__3824__auto____10463)
{return or__3824__auto____10463;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____10468 = o;
if(and__3822__auto____10468)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____10468;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5874__auto____10469 = (((o == null))?null:o);
return (function (){var or__3824__auto____10470 = (cljs.core._deref_with_timeout[goog.typeOf(x__5874__auto____10469)]);
if(or__3824__auto____10470)
{return or__3824__auto____10470;
} else
{var or__3824__auto____10471 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____10471)
{return or__3824__auto____10471;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____10476 = o;
if(and__3822__auto____10476)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____10476;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5874__auto____10477 = (((o == null))?null:o);
return (function (){var or__3824__auto____10478 = (cljs.core._meta[goog.typeOf(x__5874__auto____10477)]);
if(or__3824__auto____10478)
{return or__3824__auto____10478;
} else
{var or__3824__auto____10479 = (cljs.core._meta["_"]);
if(or__3824__auto____10479)
{return or__3824__auto____10479;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____10484 = o;
if(and__3822__auto____10484)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____10484;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5874__auto____10485 = (((o == null))?null:o);
return (function (){var or__3824__auto____10486 = (cljs.core._with_meta[goog.typeOf(x__5874__auto____10485)]);
if(or__3824__auto____10486)
{return or__3824__auto____10486;
} else
{var or__3824__auto____10487 = (cljs.core._with_meta["_"]);
if(or__3824__auto____10487)
{return or__3824__auto____10487;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____10496 = coll;
if(and__3822__auto____10496)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____10496;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5874__auto____10497 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10498 = (cljs.core._reduce[goog.typeOf(x__5874__auto____10497)]);
if(or__3824__auto____10498)
{return or__3824__auto____10498;
} else
{var or__3824__auto____10499 = (cljs.core._reduce["_"]);
if(or__3824__auto____10499)
{return or__3824__auto____10499;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____10500 = coll;
if(and__3822__auto____10500)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____10500;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5874__auto____10501 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10502 = (cljs.core._reduce[goog.typeOf(x__5874__auto____10501)]);
if(or__3824__auto____10502)
{return or__3824__auto____10502;
} else
{var or__3824__auto____10503 = (cljs.core._reduce["_"]);
if(or__3824__auto____10503)
{return or__3824__auto____10503;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____10508 = coll;
if(and__3822__auto____10508)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____10508;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5874__auto____10509 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10510 = (cljs.core._kv_reduce[goog.typeOf(x__5874__auto____10509)]);
if(or__3824__auto____10510)
{return or__3824__auto____10510;
} else
{var or__3824__auto____10511 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____10511)
{return or__3824__auto____10511;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____10516 = o;
if(and__3822__auto____10516)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____10516;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5874__auto____10517 = (((o == null))?null:o);
return (function (){var or__3824__auto____10518 = (cljs.core._equiv[goog.typeOf(x__5874__auto____10517)]);
if(or__3824__auto____10518)
{return or__3824__auto____10518;
} else
{var or__3824__auto____10519 = (cljs.core._equiv["_"]);
if(or__3824__auto____10519)
{return or__3824__auto____10519;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____10524 = o;
if(and__3822__auto____10524)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____10524;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5874__auto____10525 = (((o == null))?null:o);
return (function (){var or__3824__auto____10526 = (cljs.core._hash[goog.typeOf(x__5874__auto____10525)]);
if(or__3824__auto____10526)
{return or__3824__auto____10526;
} else
{var or__3824__auto____10527 = (cljs.core._hash["_"]);
if(or__3824__auto____10527)
{return or__3824__auto____10527;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____10532 = o;
if(and__3822__auto____10532)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____10532;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5874__auto____10533 = (((o == null))?null:o);
return (function (){var or__3824__auto____10534 = (cljs.core._seq[goog.typeOf(x__5874__auto____10533)]);
if(or__3824__auto____10534)
{return or__3824__auto____10534;
} else
{var or__3824__auto____10535 = (cljs.core._seq["_"]);
if(or__3824__auto____10535)
{return or__3824__auto____10535;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____10540 = coll;
if(and__3822__auto____10540)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____10540;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5874__auto____10541 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10542 = (cljs.core._rseq[goog.typeOf(x__5874__auto____10541)]);
if(or__3824__auto____10542)
{return or__3824__auto____10542;
} else
{var or__3824__auto____10543 = (cljs.core._rseq["_"]);
if(or__3824__auto____10543)
{return or__3824__auto____10543;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____10548 = coll;
if(and__3822__auto____10548)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____10548;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5874__auto____10549 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10550 = (cljs.core._sorted_seq[goog.typeOf(x__5874__auto____10549)]);
if(or__3824__auto____10550)
{return or__3824__auto____10550;
} else
{var or__3824__auto____10551 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____10551)
{return or__3824__auto____10551;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____10556 = coll;
if(and__3822__auto____10556)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____10556;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5874__auto____10557 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10558 = (cljs.core._sorted_seq_from[goog.typeOf(x__5874__auto____10557)]);
if(or__3824__auto____10558)
{return or__3824__auto____10558;
} else
{var or__3824__auto____10559 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____10559)
{return or__3824__auto____10559;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____10564 = coll;
if(and__3822__auto____10564)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____10564;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5874__auto____10565 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10566 = (cljs.core._entry_key[goog.typeOf(x__5874__auto____10565)]);
if(or__3824__auto____10566)
{return or__3824__auto____10566;
} else
{var or__3824__auto____10567 = (cljs.core._entry_key["_"]);
if(or__3824__auto____10567)
{return or__3824__auto____10567;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____10572 = coll;
if(and__3822__auto____10572)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____10572;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5874__auto____10573 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10574 = (cljs.core._comparator[goog.typeOf(x__5874__auto____10573)]);
if(or__3824__auto____10574)
{return or__3824__auto____10574;
} else
{var or__3824__auto____10575 = (cljs.core._comparator["_"]);
if(or__3824__auto____10575)
{return or__3824__auto____10575;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____10580 = o;
if(and__3822__auto____10580)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____10580;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5874__auto____10581 = (((o == null))?null:o);
return (function (){var or__3824__auto____10582 = (cljs.core._pr_seq[goog.typeOf(x__5874__auto____10581)]);
if(or__3824__auto____10582)
{return or__3824__auto____10582;
} else
{var or__3824__auto____10583 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____10583)
{return or__3824__auto____10583;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____10588 = writer;
if(and__3822__auto____10588)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____10588;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5874__auto____10589 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____10590 = (cljs.core._write[goog.typeOf(x__5874__auto____10589)]);
if(or__3824__auto____10590)
{return or__3824__auto____10590;
} else
{var or__3824__auto____10591 = (cljs.core._write["_"]);
if(or__3824__auto____10591)
{return or__3824__auto____10591;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____10596 = writer;
if(and__3822__auto____10596)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____10596;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5874__auto____10597 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____10598 = (cljs.core._flush[goog.typeOf(x__5874__auto____10597)]);
if(or__3824__auto____10598)
{return or__3824__auto____10598;
} else
{var or__3824__auto____10599 = (cljs.core._flush["_"]);
if(or__3824__auto____10599)
{return or__3824__auto____10599;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____10604 = o;
if(and__3822__auto____10604)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____10604;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5874__auto____10605 = (((o == null))?null:o);
return (function (){var or__3824__auto____10606 = (cljs.core._pr_writer[goog.typeOf(x__5874__auto____10605)]);
if(or__3824__auto____10606)
{return or__3824__auto____10606;
} else
{var or__3824__auto____10607 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____10607)
{return or__3824__auto____10607;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____10612 = d;
if(and__3822__auto____10612)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____10612;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5874__auto____10613 = (((d == null))?null:d);
return (function (){var or__3824__auto____10614 = (cljs.core._realized_QMARK_[goog.typeOf(x__5874__auto____10613)]);
if(or__3824__auto____10614)
{return or__3824__auto____10614;
} else
{var or__3824__auto____10615 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____10615)
{return or__3824__auto____10615;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____10620 = this$;
if(and__3822__auto____10620)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____10620;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5874__auto____10621 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10622 = (cljs.core._notify_watches[goog.typeOf(x__5874__auto____10621)]);
if(or__3824__auto____10622)
{return or__3824__auto____10622;
} else
{var or__3824__auto____10623 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____10623)
{return or__3824__auto____10623;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____10628 = this$;
if(and__3822__auto____10628)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____10628;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5874__auto____10629 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10630 = (cljs.core._add_watch[goog.typeOf(x__5874__auto____10629)]);
if(or__3824__auto____10630)
{return or__3824__auto____10630;
} else
{var or__3824__auto____10631 = (cljs.core._add_watch["_"]);
if(or__3824__auto____10631)
{return or__3824__auto____10631;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____10636 = this$;
if(and__3822__auto____10636)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____10636;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5874__auto____10637 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10638 = (cljs.core._remove_watch[goog.typeOf(x__5874__auto____10637)]);
if(or__3824__auto____10638)
{return or__3824__auto____10638;
} else
{var or__3824__auto____10639 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____10639)
{return or__3824__auto____10639;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____10644 = coll;
if(and__3822__auto____10644)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____10644;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5874__auto____10645 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10646 = (cljs.core._as_transient[goog.typeOf(x__5874__auto____10645)]);
if(or__3824__auto____10646)
{return or__3824__auto____10646;
} else
{var or__3824__auto____10647 = (cljs.core._as_transient["_"]);
if(or__3824__auto____10647)
{return or__3824__auto____10647;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____10652 = tcoll;
if(and__3822__auto____10652)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____10652;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5874__auto____10653 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10654 = (cljs.core._conj_BANG_[goog.typeOf(x__5874__auto____10653)]);
if(or__3824__auto____10654)
{return or__3824__auto____10654;
} else
{var or__3824__auto____10655 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____10655)
{return or__3824__auto____10655;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____10660 = tcoll;
if(and__3822__auto____10660)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____10660;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5874__auto____10661 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10662 = (cljs.core._persistent_BANG_[goog.typeOf(x__5874__auto____10661)]);
if(or__3824__auto____10662)
{return or__3824__auto____10662;
} else
{var or__3824__auto____10663 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____10663)
{return or__3824__auto____10663;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____10668 = tcoll;
if(and__3822__auto____10668)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____10668;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5874__auto____10669 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10670 = (cljs.core._assoc_BANG_[goog.typeOf(x__5874__auto____10669)]);
if(or__3824__auto____10670)
{return or__3824__auto____10670;
} else
{var or__3824__auto____10671 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____10671)
{return or__3824__auto____10671;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____10676 = tcoll;
if(and__3822__auto____10676)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____10676;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5874__auto____10677 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10678 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5874__auto____10677)]);
if(or__3824__auto____10678)
{return or__3824__auto____10678;
} else
{var or__3824__auto____10679 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____10679)
{return or__3824__auto____10679;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____10684 = tcoll;
if(and__3822__auto____10684)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____10684;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5874__auto____10685 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10686 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5874__auto____10685)]);
if(or__3824__auto____10686)
{return or__3824__auto____10686;
} else
{var or__3824__auto____10687 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____10687)
{return or__3824__auto____10687;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____10692 = tcoll;
if(and__3822__auto____10692)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____10692;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5874__auto____10693 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10694 = (cljs.core._pop_BANG_[goog.typeOf(x__5874__auto____10693)]);
if(or__3824__auto____10694)
{return or__3824__auto____10694;
} else
{var or__3824__auto____10695 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____10695)
{return or__3824__auto____10695;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____10700 = tcoll;
if(and__3822__auto____10700)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____10700;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5874__auto____10701 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10702 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5874__auto____10701)]);
if(or__3824__auto____10702)
{return or__3824__auto____10702;
} else
{var or__3824__auto____10703 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____10703)
{return or__3824__auto____10703;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____10708 = x;
if(and__3822__auto____10708)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____10708;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5874__auto____10709 = (((x == null))?null:x);
return (function (){var or__3824__auto____10710 = (cljs.core._compare[goog.typeOf(x__5874__auto____10709)]);
if(or__3824__auto____10710)
{return or__3824__auto____10710;
} else
{var or__3824__auto____10711 = (cljs.core._compare["_"]);
if(or__3824__auto____10711)
{return or__3824__auto____10711;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____10716 = coll;
if(and__3822__auto____10716)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____10716;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5874__auto____10717 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10718 = (cljs.core._drop_first[goog.typeOf(x__5874__auto____10717)]);
if(or__3824__auto____10718)
{return or__3824__auto____10718;
} else
{var or__3824__auto____10719 = (cljs.core._drop_first["_"]);
if(or__3824__auto____10719)
{return or__3824__auto____10719;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____10724 = coll;
if(and__3822__auto____10724)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____10724;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5874__auto____10725 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10726 = (cljs.core._chunked_first[goog.typeOf(x__5874__auto____10725)]);
if(or__3824__auto____10726)
{return or__3824__auto____10726;
} else
{var or__3824__auto____10727 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____10727)
{return or__3824__auto____10727;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____10732 = coll;
if(and__3822__auto____10732)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____10732;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5874__auto____10733 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10734 = (cljs.core._chunked_rest[goog.typeOf(x__5874__auto____10733)]);
if(or__3824__auto____10734)
{return or__3824__auto____10734;
} else
{var or__3824__auto____10735 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____10735)
{return or__3824__auto____10735;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____10740 = coll;
if(and__3822__auto____10740)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____10740;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5874__auto____10741 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10742 = (cljs.core._chunked_next[goog.typeOf(x__5874__auto____10741)]);
if(or__3824__auto____10742)
{return or__3824__auto____10742;
} else
{var or__3824__auto____10743 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____10743)
{return or__3824__auto____10743;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__10747__10748 = coll;
if(G__10747__10748)
{if((function (){var or__3824__auto____10749 = (G__10747__10748.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____10749)
{return or__3824__auto____10749;
} else
{return G__10747__10748.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__10747__10748.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__10747__10748);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__10747__10748);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__10754__10755 = coll;
if(G__10754__10755)
{if((function (){var or__3824__auto____10756 = (G__10754__10755.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10756)
{return or__3824__auto____10756;
} else
{return G__10754__10755.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10754__10755.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10754__10755);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10754__10755);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__10757 = cljs.core.seq.call(null,coll);
if((s__10757 == null))
{return null;
} else
{return cljs.core._first.call(null,s__10757);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__10762__10763 = coll;
if(G__10762__10763)
{if((function (){var or__3824__auto____10764 = (G__10762__10763.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10764)
{return or__3824__auto____10764;
} else
{return G__10762__10763.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10762__10763.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10762__10763);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10762__10763);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__10765 = cljs.core.seq.call(null,coll);
if(!((s__10765 == null)))
{return cljs.core._rest.call(null,s__10765);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__10769__10770 = coll;
if(G__10769__10770)
{if((function (){var or__3824__auto____10771 = (G__10769__10770.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____10771)
{return or__3824__auto____10771;
} else
{return G__10769__10770.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__10769__10770.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__10769__10770);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__10769__10770);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____10773 = (x === y);
if(or__3824__auto____10773)
{return or__3824__auto____10773;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__10774__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__10775 = y;
var G__10776 = cljs.core.first.call(null,more);
var G__10777 = cljs.core.next.call(null,more);
x = G__10775;
y = G__10776;
more = G__10777;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__10774 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10774__delegate.call(this, x, y, more);
};
G__10774.cljs$lang$maxFixedArity = 2;
G__10774.cljs$lang$applyTo = (function (arglist__10778){
var x = cljs.core.first(arglist__10778);
var y = cljs.core.first(cljs.core.next(arglist__10778));
var more = cljs.core.rest(cljs.core.next(arglist__10778));
return G__10774__delegate(x, y, more);
});
G__10774.cljs$lang$arity$variadic = G__10774__delegate;
return G__10774;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__10779 = null;
var G__10779__2 = (function (o,k){
return null;
});
var G__10779__3 = (function (o,k,not_found){
return not_found;
});
G__10779 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__10779__2.call(this,o,k);
case 3:
return G__10779__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10779;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write.call(null,writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__10780 = null;
var G__10780__2 = (function (_,f){
return f.call(null);
});
var G__10780__3 = (function (_,f,start){
return start;
});
G__10780 = function(_,f,start){
switch(arguments.length){
case 2:
return G__10780__2.call(this,_,f);
case 3:
return G__10780__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10780;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__10781 = null;
var G__10781__2 = (function (_,n){
return null;
});
var G__10781__3 = (function (_,n,not_found){
return not_found;
});
G__10781 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__10781__2.call(this,_,n);
case 3:
return G__10781__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10781;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____10782 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____10782)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____10782;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});

goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__10783 = this;
return this__10783.val;
});
cljs.core.Reduced;
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__10796 = cljs.core._count.call(null,cicoll);
if((cnt__10796 === 0))
{return f.call(null);
} else
{var val__10797 = cljs.core._nth.call(null,cicoll,0);
var n__10798 = 1;
while(true){
if((n__10798 < cnt__10796))
{var nval__10799 = f.call(null,val__10797,cljs.core._nth.call(null,cicoll,n__10798));
if(cljs.core.reduced_QMARK_.call(null,nval__10799))
{return cljs.core.deref.call(null,nval__10799);
} else
{{
var G__10808 = nval__10799;
var G__10809 = (n__10798 + 1);
val__10797 = G__10808;
n__10798 = G__10809;
continue;
}
}
} else
{return val__10797;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__10800 = cljs.core._count.call(null,cicoll);
var val__10801 = val;
var n__10802 = 0;
while(true){
if((n__10802 < cnt__10800))
{var nval__10803 = f.call(null,val__10801,cljs.core._nth.call(null,cicoll,n__10802));
if(cljs.core.reduced_QMARK_.call(null,nval__10803))
{return cljs.core.deref.call(null,nval__10803);
} else
{{
var G__10810 = nval__10803;
var G__10811 = (n__10802 + 1);
val__10801 = G__10810;
n__10802 = G__10811;
continue;
}
}
} else
{return val__10801;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__10804 = cljs.core._count.call(null,cicoll);
var val__10805 = val;
var n__10806 = idx;
while(true){
if((n__10806 < cnt__10804))
{var nval__10807 = f.call(null,val__10805,cljs.core._nth.call(null,cicoll,n__10806));
if(cljs.core.reduced_QMARK_.call(null,nval__10807))
{return cljs.core.deref.call(null,nval__10807);
} else
{{
var G__10812 = nval__10807;
var G__10813 = (n__10806 + 1);
val__10805 = G__10812;
n__10806 = G__10813;
continue;
}
}
} else
{return val__10805;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__10826 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__10827 = (arr[0]);
var n__10828 = 1;
while(true){
if((n__10828 < cnt__10826))
{var nval__10829 = f.call(null,val__10827,(arr[n__10828]));
if(cljs.core.reduced_QMARK_.call(null,nval__10829))
{return cljs.core.deref.call(null,nval__10829);
} else
{{
var G__10838 = nval__10829;
var G__10839 = (n__10828 + 1);
val__10827 = G__10838;
n__10828 = G__10839;
continue;
}
}
} else
{return val__10827;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__10830 = arr.length;
var val__10831 = val;
var n__10832 = 0;
while(true){
if((n__10832 < cnt__10830))
{var nval__10833 = f.call(null,val__10831,(arr[n__10832]));
if(cljs.core.reduced_QMARK_.call(null,nval__10833))
{return cljs.core.deref.call(null,nval__10833);
} else
{{
var G__10840 = nval__10833;
var G__10841 = (n__10832 + 1);
val__10831 = G__10840;
n__10832 = G__10841;
continue;
}
}
} else
{return val__10831;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__10834 = arr.length;
var val__10835 = val;
var n__10836 = idx;
while(true){
if((n__10836 < cnt__10834))
{var nval__10837 = f.call(null,val__10835,(arr[n__10836]));
if(cljs.core.reduced_QMARK_.call(null,nval__10837))
{return cljs.core.deref.call(null,nval__10837);
} else
{{
var G__10842 = nval__10837;
var G__10843 = (n__10836 + 1);
val__10835 = G__10842;
n__10836 = G__10843;
continue;
}
}
} else
{return val__10835;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__10847__10848 = x;
if(G__10847__10848)
{if((function (){var or__3824__auto____10849 = (G__10847__10848.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____10849)
{return or__3824__auto____10849;
} else
{return G__10847__10848.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__10847__10848.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__10847__10848);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__10847__10848);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__10853__10854 = x;
if(G__10853__10854)
{if((function (){var or__3824__auto____10855 = (G__10853__10854.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10855)
{return or__3824__auto____10855;
} else
{return G__10853__10854.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10853__10854.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10853__10854);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10853__10854);
}
});

goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10856 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__10857 = this;
if(((this__10857.i + 1) < this__10857.a.length))
{return (new cljs.core.IndexedSeq(this__10857.a,(this__10857.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10858 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10859 = this;
var c__10860 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__10860 > 0))
{return (new cljs.core.RSeq(coll,(c__10860 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__10861 = this;
var this__10862 = this;
return cljs.core.pr_str.call(null,this__10862);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10863 = this;
if(cljs.core.counted_QMARK_.call(null,this__10863.a))
{return cljs.core.ci_reduce.call(null,this__10863.a,f,(this__10863.a[this__10863.i]),(this__10863.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__10863.a[this__10863.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10864 = this;
if(cljs.core.counted_QMARK_.call(null,this__10864.a))
{return cljs.core.ci_reduce.call(null,this__10864.a,f,start,this__10864.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10865 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__10866 = this;
return (this__10866.a.length - this__10866.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__10867 = this;
return (this__10867.a[this__10867.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__10868 = this;
if(((this__10868.i + 1) < this__10868.a.length))
{return (new cljs.core.IndexedSeq(this__10868.a,(this__10868.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10869 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10870 = this;
var i__10871 = (n + this__10870.i);
if((i__10871 < this__10870.a.length))
{return (this__10870.a[i__10871]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10872 = this;
var i__10873 = (n + this__10872.i);
if((i__10873 < this__10872.a.length))
{return (this__10872.a[i__10873]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10874 = this;
return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__10875 = null;
var G__10875__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__10875__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__10875 = function(array,f,start){
switch(arguments.length){
case 2:
return G__10875__2.call(this,array,f);
case 3:
return G__10875__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10875;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__10876 = null;
var G__10876__2 = (function (array,k){
return (array[k]);
});
var G__10876__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__10876 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__10876__2.call(this,array,k);
case 3:
return G__10876__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10876;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__10877 = null;
var G__10877__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__10877__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__10877 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__10877__2.call(this,array,n);
case 3:
return G__10877__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10877;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10878 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10879 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__10880 = this;
var this__10881 = this;
return cljs.core.pr_str.call(null,this__10881);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10882 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10883 = this;
return (this__10883.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10884 = this;
return cljs.core._nth.call(null,this__10884.ci,this__10884.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10885 = this;
if((this__10885.i > 0))
{return (new cljs.core.RSeq(this__10885.ci,(this__10885.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10886 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__10887 = this;
return (new cljs.core.RSeq(this__10887.ci,this__10887.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10888 = this;
return this__10888.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10889 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10889.meta);
});
cljs.core.RSeq;
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__10891 = cljs.core.next.call(null,s);
if(!((sn__10891 == null)))
{{
var G__10892 = sn__10891;
s = G__10892;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__10893__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__10894 = conj.call(null,coll,x);
var G__10895 = cljs.core.first.call(null,xs);
var G__10896 = cljs.core.next.call(null,xs);
coll = G__10894;
x = G__10895;
xs = G__10896;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__10893 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10893__delegate.call(this, coll, x, xs);
};
G__10893.cljs$lang$maxFixedArity = 2;
G__10893.cljs$lang$applyTo = (function (arglist__10897){
var coll = cljs.core.first(arglist__10897);
var x = cljs.core.first(cljs.core.next(arglist__10897));
var xs = cljs.core.rest(cljs.core.next(arglist__10897));
return G__10893__delegate(coll, x, xs);
});
G__10893.cljs$lang$arity$variadic = G__10893__delegate;
return G__10893;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__10900 = cljs.core.seq.call(null,coll);
var acc__10901 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__10900))
{return (acc__10901 + cljs.core._count.call(null,s__10900));
} else
{{
var G__10902 = cljs.core.next.call(null,s__10900);
var G__10903 = (acc__10901 + 1);
s__10900 = G__10902;
acc__10901 = G__10903;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__10904 = cljs.core.next.call(null,coll);
var G__10905 = (n - 1);
coll = G__10904;
n = G__10905;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__10906 = cljs.core.next.call(null,coll);
var G__10907 = (n - 1);
var G__10908 = not_found;
coll = G__10906;
n = G__10907;
not_found = G__10908;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__10915__10916 = coll;
if(G__10915__10916)
{if((function (){var or__3824__auto____10917 = (G__10915__10916.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10917)
{return or__3824__auto____10917;
} else
{return G__10915__10916.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10915__10916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10915__10916);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10915__10916);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__10918__10919 = coll;
if(G__10918__10919)
{if((function (){var or__3824__auto____10920 = (G__10918__10919.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10920)
{return or__3824__auto____10920;
} else
{return G__10918__10919.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10918__10919.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10918__10919);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10918__10919);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__10923__delegate = function (coll,k,v,kvs){
while(true){
var ret__10922 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__10924 = ret__10922;
var G__10925 = cljs.core.first.call(null,kvs);
var G__10926 = cljs.core.second.call(null,kvs);
var G__10927 = cljs.core.nnext.call(null,kvs);
coll = G__10924;
k = G__10925;
v = G__10926;
kvs = G__10927;
continue;
}
} else
{return ret__10922;
}
break;
}
};
var G__10923 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10923__delegate.call(this, coll, k, v, kvs);
};
G__10923.cljs$lang$maxFixedArity = 3;
G__10923.cljs$lang$applyTo = (function (arglist__10928){
var coll = cljs.core.first(arglist__10928);
var k = cljs.core.first(cljs.core.next(arglist__10928));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10928)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10928)));
return G__10923__delegate(coll, k, v, kvs);
});
G__10923.cljs$lang$arity$variadic = G__10923__delegate;
return G__10923;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__10931__delegate = function (coll,k,ks){
while(true){
var ret__10930 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__10932 = ret__10930;
var G__10933 = cljs.core.first.call(null,ks);
var G__10934 = cljs.core.next.call(null,ks);
coll = G__10932;
k = G__10933;
ks = G__10934;
continue;
}
} else
{return ret__10930;
}
break;
}
};
var G__10931 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10931__delegate.call(this, coll, k, ks);
};
G__10931.cljs$lang$maxFixedArity = 2;
G__10931.cljs$lang$applyTo = (function (arglist__10935){
var coll = cljs.core.first(arglist__10935);
var k = cljs.core.first(cljs.core.next(arglist__10935));
var ks = cljs.core.rest(cljs.core.next(arglist__10935));
return G__10931__delegate(coll, k, ks);
});
G__10931.cljs$lang$arity$variadic = G__10931__delegate;
return G__10931;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__10939__10940 = o;
if(G__10939__10940)
{if((function (){var or__3824__auto____10941 = (G__10939__10940.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10941)
{return or__3824__auto____10941;
} else
{return G__10939__10940.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10939__10940.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10939__10940);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10939__10940);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__10944__delegate = function (coll,k,ks){
while(true){
var ret__10943 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__10945 = ret__10943;
var G__10946 = cljs.core.first.call(null,ks);
var G__10947 = cljs.core.next.call(null,ks);
coll = G__10945;
k = G__10946;
ks = G__10947;
continue;
}
} else
{return ret__10943;
}
break;
}
};
var G__10944 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10944__delegate.call(this, coll, k, ks);
};
G__10944.cljs$lang$maxFixedArity = 2;
G__10944.cljs$lang$applyTo = (function (arglist__10948){
var coll = cljs.core.first(arglist__10948);
var k = cljs.core.first(cljs.core.next(arglist__10948));
var ks = cljs.core.rest(cljs.core.next(arglist__10948));
return G__10944__delegate(coll, k, ks);
});
G__10944.cljs$lang$arity$variadic = G__10944__delegate;
return G__10944;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__10950 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__10950);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__10950;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__10952 = (cljs.core.string_hash_cache[k]);
if(!((h__10952 == null)))
{return h__10952;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____10954 = goog.isString(o);
if(and__3822__auto____10954)
{return check_cache;
} else
{return and__3822__auto____10954;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__10958__10959 = x;
if(G__10958__10959)
{if((function (){var or__3824__auto____10960 = (G__10958__10959.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____10960)
{return or__3824__auto____10960;
} else
{return G__10958__10959.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__10958__10959.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__10958__10959);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__10958__10959);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__10964__10965 = x;
if(G__10964__10965)
{if((function (){var or__3824__auto____10966 = (G__10964__10965.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____10966)
{return or__3824__auto____10966;
} else
{return G__10964__10965.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__10964__10965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__10964__10965);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__10964__10965);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__10970__10971 = x;
if(G__10970__10971)
{if((function (){var or__3824__auto____10972 = (G__10970__10971.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____10972)
{return or__3824__auto____10972;
} else
{return G__10970__10971.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__10970__10971.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__10970__10971);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__10970__10971);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__10976__10977 = x;
if(G__10976__10977)
{if((function (){var or__3824__auto____10978 = (G__10976__10977.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____10978)
{return or__3824__auto____10978;
} else
{return G__10976__10977.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__10976__10977.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__10976__10977);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__10976__10977);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__10982__10983 = x;
if(G__10982__10983)
{if((function (){var or__3824__auto____10984 = (G__10982__10983.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____10984)
{return or__3824__auto____10984;
} else
{return G__10982__10983.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__10982__10983.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10982__10983);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__10982__10983);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__10988__10989 = x;
if(G__10988__10989)
{if((function (){var or__3824__auto____10990 = (G__10988__10989.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____10990)
{return or__3824__auto____10990;
} else
{return G__10988__10989.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__10988__10989.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__10988__10989);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__10988__10989);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__10994__10995 = x;
if(G__10994__10995)
{if((function (){var or__3824__auto____10996 = (G__10994__10995.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____10996)
{return or__3824__auto____10996;
} else
{return G__10994__10995.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__10994__10995.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__10994__10995);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__10994__10995);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__11000__11001 = x;
if(G__11000__11001)
{if((function (){var or__3824__auto____11002 = (G__11000__11001.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____11002)
{return or__3824__auto____11002;
} else
{return G__11000__11001.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__11000__11001.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11000__11001);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11000__11001);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__11003__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__11003 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11003__delegate.call(this, keyvals);
};
G__11003.cljs$lang$maxFixedArity = 0;
G__11003.cljs$lang$applyTo = (function (arglist__11004){
var keyvals = cljs.core.seq(arglist__11004);;
return G__11003__delegate(keyvals);
});
G__11003.cljs$lang$arity$variadic = G__11003__delegate;
return G__11003;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__11006 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__11006.push(key);
}));
return keys__11006;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__11010 = i;
var j__11011 = j;
var len__11012 = len;
while(true){
if((len__11012 === 0))
{return to;
} else
{(to[j__11011] = (from[i__11010]));
{
var G__11013 = (i__11010 + 1);
var G__11014 = (j__11011 + 1);
var G__11015 = (len__11012 - 1);
i__11010 = G__11013;
j__11011 = G__11014;
len__11012 = G__11015;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__11019 = (i + (len - 1));
var j__11020 = (j + (len - 1));
var len__11021 = len;
while(true){
if((len__11021 === 0))
{return to;
} else
{(to[j__11020] = (from[i__11019]));
{
var G__11022 = (i__11019 - 1);
var G__11023 = (j__11020 - 1);
var G__11024 = (len__11021 - 1);
i__11019 = G__11022;
j__11020 = G__11023;
len__11021 = G__11024;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__11028__11029 = s;
if(G__11028__11029)
{if((function (){var or__3824__auto____11030 = (G__11028__11029.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11030)
{return or__3824__auto____11030;
} else
{return G__11028__11029.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11028__11029.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11028__11029);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11028__11029);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11034__11035 = s;
if(G__11034__11035)
{if((function (){var or__3824__auto____11036 = (G__11034__11035.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11036)
{return or__3824__auto____11036;
} else
{return G__11034__11035.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11034__11035.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11034__11035);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11034__11035);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____11039 = goog.isString(x);
if(and__3822__auto____11039)
{return !((function (){var or__3824__auto____11040 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____11040)
{return or__3824__auto____11040;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____11039;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____11042 = goog.isString(x);
if(and__3822__auto____11042)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____11042;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____11044 = goog.isString(x);
if(and__3822__auto____11044)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____11044;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____11049 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____11049)
{return or__3824__auto____11049;
} else
{var G__11050__11051 = f;
if(G__11050__11051)
{if((function (){var or__3824__auto____11052 = (G__11050__11051.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____11052)
{return or__3824__auto____11052;
} else
{return G__11050__11051.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__11050__11051.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11050__11051);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11050__11051);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____11056 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____11056)
{var and__3822__auto____11057 = !(isNaN(n));
if(and__3822__auto____11057)
{var and__3822__auto____11058 = !((n === Infinity));
if(and__3822__auto____11058)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____11058;
}
} else
{return and__3822__auto____11057;
}
} else
{return and__3822__auto____11056;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((function (){var and__3822__auto____11061 = !((coll == null));
if(and__3822__auto____11061)
{var and__3822__auto____11062 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____11062)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____11062;
}
} else
{return and__3822__auto____11061;
}
})())
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__11071__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__11067 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__11068 = more;
while(true){
var x__11069 = cljs.core.first.call(null,xs__11068);
var etc__11070 = cljs.core.next.call(null,xs__11068);
if(cljs.core.truth_(xs__11068))
{if(cljs.core.contains_QMARK_.call(null,s__11067,x__11069))
{return false;
} else
{{
var G__11072 = cljs.core.conj.call(null,s__11067,x__11069);
var G__11073 = etc__11070;
s__11067 = G__11072;
xs__11068 = G__11073;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__11071 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11071__delegate.call(this, x, y, more);
};
G__11071.cljs$lang$maxFixedArity = 2;
G__11071.cljs$lang$applyTo = (function (arglist__11074){
var x = cljs.core.first(arglist__11074);
var y = cljs.core.first(cljs.core.next(arglist__11074));
var more = cljs.core.rest(cljs.core.next(arglist__11074));
return G__11071__delegate(x, y, more);
});
G__11071.cljs$lang$arity$variadic = G__11071__delegate;
return G__11071;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__11078__11079 = x;
if(G__11078__11079)
{if((function (){var or__3824__auto____11080 = (G__11078__11079.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____11080)
{return or__3824__auto____11080;
} else
{return G__11078__11079.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__11078__11079.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11078__11079);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11078__11079);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__11085 = cljs.core.count.call(null,xs);
var yl__11086 = cljs.core.count.call(null,ys);
if((xl__11085 < yl__11086))
{return -1;
} else
{if((xl__11085 > yl__11086))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__11085,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__11087 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____11088 = (d__11087 === 0);
if(and__3822__auto____11088)
{return ((n + 1) < len);
} else
{return and__3822__auto____11088;
}
})())
{{
var G__11089 = xs;
var G__11090 = ys;
var G__11091 = len;
var G__11092 = (n + 1);
xs = G__11089;
ys = G__11090;
len = G__11091;
n = G__11092;
continue;
}
} else
{return d__11087;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__11094 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__11094))
{return r__11094;
} else
{if(cljs.core.truth_(r__11094))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__11096 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__11096,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11096);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____11102 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11102)
{var s__11103 = temp__3971__auto____11102;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11103),cljs.core.next.call(null,s__11103));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__11104 = val;
var coll__11105 = cljs.core.seq.call(null,coll);
while(true){
if(coll__11105)
{var nval__11106 = f.call(null,val__11104,cljs.core.first.call(null,coll__11105));
if(cljs.core.reduced_QMARK_.call(null,nval__11106))
{return cljs.core.deref.call(null,nval__11106);
} else
{{
var G__11107 = nval__11106;
var G__11108 = cljs.core.next.call(null,coll__11105);
val__11104 = G__11107;
coll__11105 = G__11108;
continue;
}
}
} else
{return val__11104;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__11110 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__11110);
return cljs.core.vec.call(null,a__11110);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__11117__11118 = coll;
if(G__11117__11118)
{if((function (){var or__3824__auto____11119 = (G__11117__11118.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11119)
{return or__3824__auto____11119;
} else
{return G__11117__11118.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11117__11118.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11117__11118);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11117__11118);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__11120__11121 = coll;
if(G__11120__11121)
{if((function (){var or__3824__auto____11122 = (G__11120__11121.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11122)
{return or__3824__auto____11122;
} else
{return G__11120__11121.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11120__11121.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11120__11121);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11120__11121);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__11123__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__11123 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11123__delegate.call(this, x, y, more);
};
G__11123.cljs$lang$maxFixedArity = 2;
G__11123.cljs$lang$applyTo = (function (arglist__11124){
var x = cljs.core.first(arglist__11124);
var y = cljs.core.first(cljs.core.next(arglist__11124));
var more = cljs.core.rest(cljs.core.next(arglist__11124));
return G__11123__delegate(x, y, more);
});
G__11123.cljs$lang$arity$variadic = G__11123__delegate;
return G__11123;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__11125__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__11125 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11125__delegate.call(this, x, y, more);
};
G__11125.cljs$lang$maxFixedArity = 2;
G__11125.cljs$lang$applyTo = (function (arglist__11126){
var x = cljs.core.first(arglist__11126);
var y = cljs.core.first(cljs.core.next(arglist__11126));
var more = cljs.core.rest(cljs.core.next(arglist__11126));
return G__11125__delegate(x, y, more);
});
G__11125.cljs$lang$arity$variadic = G__11125__delegate;
return G__11125;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__11127__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__11127 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11127__delegate.call(this, x, y, more);
};
G__11127.cljs$lang$maxFixedArity = 2;
G__11127.cljs$lang$applyTo = (function (arglist__11128){
var x = cljs.core.first(arglist__11128);
var y = cljs.core.first(cljs.core.next(arglist__11128));
var more = cljs.core.rest(cljs.core.next(arglist__11128));
return G__11127__delegate(x, y, more);
});
G__11127.cljs$lang$arity$variadic = G__11127__delegate;
return G__11127;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__11129__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__11129 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11129__delegate.call(this, x, y, more);
};
G__11129.cljs$lang$maxFixedArity = 2;
G__11129.cljs$lang$applyTo = (function (arglist__11130){
var x = cljs.core.first(arglist__11130);
var y = cljs.core.first(cljs.core.next(arglist__11130));
var more = cljs.core.rest(cljs.core.next(arglist__11130));
return G__11129__delegate(x, y, more);
});
G__11129.cljs$lang$arity$variadic = G__11129__delegate;
return G__11129;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__11131__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__11132 = y;
var G__11133 = cljs.core.first.call(null,more);
var G__11134 = cljs.core.next.call(null,more);
x = G__11132;
y = G__11133;
more = G__11134;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11131 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11131__delegate.call(this, x, y, more);
};
G__11131.cljs$lang$maxFixedArity = 2;
G__11131.cljs$lang$applyTo = (function (arglist__11135){
var x = cljs.core.first(arglist__11135);
var y = cljs.core.first(cljs.core.next(arglist__11135));
var more = cljs.core.rest(cljs.core.next(arglist__11135));
return G__11131__delegate(x, y, more);
});
G__11131.cljs$lang$arity$variadic = G__11131__delegate;
return G__11131;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__11136__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__11137 = y;
var G__11138 = cljs.core.first.call(null,more);
var G__11139 = cljs.core.next.call(null,more);
x = G__11137;
y = G__11138;
more = G__11139;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11136__delegate.call(this, x, y, more);
};
G__11136.cljs$lang$maxFixedArity = 2;
G__11136.cljs$lang$applyTo = (function (arglist__11140){
var x = cljs.core.first(arglist__11140);
var y = cljs.core.first(cljs.core.next(arglist__11140));
var more = cljs.core.rest(cljs.core.next(arglist__11140));
return G__11136__delegate(x, y, more);
});
G__11136.cljs$lang$arity$variadic = G__11136__delegate;
return G__11136;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__11141__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__11142 = y;
var G__11143 = cljs.core.first.call(null,more);
var G__11144 = cljs.core.next.call(null,more);
x = G__11142;
y = G__11143;
more = G__11144;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11141 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11141__delegate.call(this, x, y, more);
};
G__11141.cljs$lang$maxFixedArity = 2;
G__11141.cljs$lang$applyTo = (function (arglist__11145){
var x = cljs.core.first(arglist__11145);
var y = cljs.core.first(cljs.core.next(arglist__11145));
var more = cljs.core.rest(cljs.core.next(arglist__11145));
return G__11141__delegate(x, y, more);
});
G__11141.cljs$lang$arity$variadic = G__11141__delegate;
return G__11141;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__11146__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__11147 = y;
var G__11148 = cljs.core.first.call(null,more);
var G__11149 = cljs.core.next.call(null,more);
x = G__11147;
y = G__11148;
more = G__11149;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11146 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11146__delegate.call(this, x, y, more);
};
G__11146.cljs$lang$maxFixedArity = 2;
G__11146.cljs$lang$applyTo = (function (arglist__11150){
var x = cljs.core.first(arglist__11150);
var y = cljs.core.first(cljs.core.next(arglist__11150));
var more = cljs.core.rest(cljs.core.next(arglist__11150));
return G__11146__delegate(x, y, more);
});
G__11146.cljs$lang$arity$variadic = G__11146__delegate;
return G__11146;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__11151__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__11151 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11151__delegate.call(this, x, y, more);
};
G__11151.cljs$lang$maxFixedArity = 2;
G__11151.cljs$lang$applyTo = (function (arglist__11152){
var x = cljs.core.first(arglist__11152);
var y = cljs.core.first(cljs.core.next(arglist__11152));
var more = cljs.core.rest(cljs.core.next(arglist__11152));
return G__11151__delegate(x, y, more);
});
G__11151.cljs$lang$arity$variadic = G__11151__delegate;
return G__11151;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__11153__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__11153 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11153__delegate.call(this, x, y, more);
};
G__11153.cljs$lang$maxFixedArity = 2;
G__11153.cljs$lang$applyTo = (function (arglist__11154){
var x = cljs.core.first(arglist__11154);
var y = cljs.core.first(cljs.core.next(arglist__11154));
var more = cljs.core.rest(cljs.core.next(arglist__11154));
return G__11153__delegate(x, y, more);
});
G__11153.cljs$lang$arity$variadic = G__11153__delegate;
return G__11153;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__11156 = (n % d);
return cljs.core.fix.call(null,((n - rem__11156) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__11158 = cljs.core.quot.call(null,n,d);
return (n - (d * q__11158));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__11161 = (v - ((v >> 1) & 1431655765));
var v__11162 = ((v__11161 & 858993459) + ((v__11161 >> 2) & 858993459));
return ((((v__11162 + (v__11162 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__11163__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__11164 = y;
var G__11165 = cljs.core.first.call(null,more);
var G__11166 = cljs.core.next.call(null,more);
x = G__11164;
y = G__11165;
more = G__11166;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11163 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11163__delegate.call(this, x, y, more);
};
G__11163.cljs$lang$maxFixedArity = 2;
G__11163.cljs$lang$applyTo = (function (arglist__11167){
var x = cljs.core.first(arglist__11167);
var y = cljs.core.first(cljs.core.next(arglist__11167));
var more = cljs.core.rest(cljs.core.next(arglist__11167));
return G__11163__delegate(x, y, more);
});
G__11163.cljs$lang$arity$variadic = G__11163__delegate;
return G__11163;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__11171 = n;
var xs__11172 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11173 = xs__11172;
if(and__3822__auto____11173)
{return (n__11171 > 0);
} else
{return and__3822__auto____11173;
}
})()))
{{
var G__11174 = (n__11171 - 1);
var G__11175 = cljs.core.next.call(null,xs__11172);
n__11171 = G__11174;
xs__11172 = G__11175;
continue;
}
} else
{return xs__11172;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__11176__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11177 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__11178 = cljs.core.next.call(null,more);
sb = G__11177;
more = G__11178;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__11176 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11176__delegate.call(this, x, ys);
};
G__11176.cljs$lang$maxFixedArity = 1;
G__11176.cljs$lang$applyTo = (function (arglist__11179){
var x = cljs.core.first(arglist__11179);
var ys = cljs.core.rest(arglist__11179);
return G__11176__delegate(x, ys);
});
G__11176.cljs$lang$arity$variadic = G__11176__delegate;
return G__11176;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__11180__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11181 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__11182 = cljs.core.next.call(null,more);
sb = G__11181;
more = G__11182;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__11180 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11180__delegate.call(this, x, ys);
};
G__11180.cljs$lang$maxFixedArity = 1;
G__11180.cljs$lang$applyTo = (function (arglist__11183){
var x = cljs.core.first(arglist__11183);
var ys = cljs.core.rest(arglist__11183);
return G__11180__delegate(x, ys);
});
G__11180.cljs$lang$arity$variadic = G__11180__delegate;
return G__11180;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__11187 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____11186 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11186)
{return or__3824__auto____11186;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__11187);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__11188){
var fmt = cljs.core.first(arglist__11188);
var args = cljs.core.rest(arglist__11188);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__11191 = cljs.core.seq.call(null,x);
var ys__11192 = cljs.core.seq.call(null,y);
while(true){
if((xs__11191 == null))
{return (ys__11192 == null);
} else
{if((ys__11192 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__11191),cljs.core.first.call(null,ys__11192)))
{{
var G__11193 = cljs.core.next.call(null,xs__11191);
var G__11194 = cljs.core.next.call(null,ys__11192);
xs__11191 = G__11193;
ys__11192 = G__11194;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__11195_SHARP_,p2__11196_SHARP_){
return cljs.core.hash_combine.call(null,p1__11195_SHARP_,cljs.core.hash.call(null,p2__11196_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__11200 = 0;
var s__11201 = cljs.core.seq.call(null,m);
while(true){
if(s__11201)
{var e__11202 = cljs.core.first.call(null,s__11201);
{
var G__11203 = ((h__11200 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__11202)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__11202)))) % 4503599627370496);
var G__11204 = cljs.core.next.call(null,s__11201);
h__11200 = G__11203;
s__11201 = G__11204;
continue;
}
} else
{return h__11200;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__11208 = 0;
var s__11209 = cljs.core.seq.call(null,s);
while(true){
if(s__11209)
{var e__11210 = cljs.core.first.call(null,s__11209);
{
var G__11211 = ((h__11208 + cljs.core.hash.call(null,e__11210)) % 4503599627370496);
var G__11212 = cljs.core.next.call(null,s__11209);
h__11208 = G__11211;
s__11209 = G__11212;
continue;
}
} else
{return h__11208;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__11220__11221 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__11220__11221)
{var vec__11222__11223 = cljs.core.first.call(null,G__11220__11221);
var key_name__11224 = cljs.core.nth.call(null,vec__11222__11223,0,null);
var f__11225 = cljs.core.nth.call(null,vec__11222__11223,1,null);
var str_name__11226 = cljs.core.name.call(null,key_name__11224);
(obj[str_name__11226] = f__11225);
{
var G__11227 = cljs.core.next.call(null,G__11220__11221);
G__11220__11221 = G__11227;
continue;
}
} else
{}
break;
}
return obj;
});

goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11228 = this;
var h__5690__auto____11229 = this__11228.__hash;
if(!((h__5690__auto____11229 == null)))
{return h__5690__auto____11229;
} else
{var h__5690__auto____11230 = cljs.core.hash_coll.call(null,coll);
this__11228.__hash = h__5690__auto____11230;
return h__5690__auto____11230;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11231 = this;
if((this__11231.count === 1))
{return null;
} else
{return this__11231.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11232 = this;
return (new cljs.core.List(this__11232.meta,o,coll,(this__11232.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__11233 = this;
var this__11234 = this;
return cljs.core.pr_str.call(null,this__11234);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11235 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11236 = this;
return this__11236.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11237 = this;
return this__11237.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11238 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11239 = this;
return this__11239.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11240 = this;
if((this__11240.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__11240.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11241 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11242 = this;
return (new cljs.core.List(meta,this__11242.first,this__11242.rest,this__11242.count,this__11242.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11243 = this;
return this__11243.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11244 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11245 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11246 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11247 = this;
return (new cljs.core.List(this__11247.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__11248 = this;
var this__11249 = this;
return cljs.core.pr_str.call(null,this__11249);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11250 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11251 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11252 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11253 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11254 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11255 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11256 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11257 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11258 = this;
return this__11258.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11259 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__11263__11264 = coll;
if(G__11263__11264)
{if((function (){var or__3824__auto____11265 = (G__11263__11264.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____11265)
{return or__3824__auto____11265;
} else
{return G__11263__11264.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__11263__11264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11263__11264);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11263__11264);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__11266__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__11266 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11266__delegate.call(this, x, y, z, items);
};
G__11266.cljs$lang$maxFixedArity = 3;
G__11266.cljs$lang$applyTo = (function (arglist__11267){
var x = cljs.core.first(arglist__11267);
var y = cljs.core.first(cljs.core.next(arglist__11267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11267)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11267)));
return G__11266__delegate(x, y, z, items);
});
G__11266.cljs$lang$arity$variadic = G__11266__delegate;
return G__11266;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11268 = this;
var h__5690__auto____11269 = this__11268.__hash;
if(!((h__5690__auto____11269 == null)))
{return h__5690__auto____11269;
} else
{var h__5690__auto____11270 = cljs.core.hash_coll.call(null,coll);
this__11268.__hash = h__5690__auto____11270;
return h__5690__auto____11270;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11271 = this;
if((this__11271.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__11271.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11272 = this;
return (new cljs.core.Cons(null,o,coll,this__11272.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__11273 = this;
var this__11274 = this;
return cljs.core.pr_str.call(null,this__11274);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11275 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11276 = this;
return this__11276.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11277 = this;
if((this__11277.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__11277.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11278 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11279 = this;
return (new cljs.core.Cons(meta,this__11279.first,this__11279.rest,this__11279.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11280 = this;
return this__11280.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11281 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11281.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____11286 = (coll == null);
if(or__3824__auto____11286)
{return or__3824__auto____11286;
} else
{var G__11287__11288 = coll;
if(G__11287__11288)
{if((function (){var or__3824__auto____11289 = (G__11287__11288.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11289)
{return or__3824__auto____11289;
} else
{return G__11287__11288.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11287__11288.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11287__11288);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11287__11288);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__11293__11294 = x;
if(G__11293__11294)
{if((function (){var or__3824__auto____11295 = (G__11293__11294.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____11295)
{return or__3824__auto____11295;
} else
{return G__11293__11294.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__11293__11294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11293__11294);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11293__11294);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__11296 = null;
var G__11296__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__11296__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__11296 = function(string,f,start){
switch(arguments.length){
case 2:
return G__11296__2.call(this,string,f);
case 3:
return G__11296__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11296;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__11297 = null;
var G__11297__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__11297__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__11297 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__11297__2.call(this,string,k);
case 3:
return G__11297__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11297;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__11298 = null;
var G__11298__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__11298__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__11298 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__11298__2.call(this,string,n);
case 3:
return G__11298__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11298;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__11310 = null;
var G__11310__2 = (function (this_sym11301,coll){
var this__11303 = this;
var this_sym11301__11304 = this;
var ___11305 = this_sym11301__11304;
if((coll == null))
{return null;
} else
{var strobj__11306 = coll.strobj;
if((strobj__11306 == null))
{return cljs.core._lookup.call(null,coll,this__11303.k,null);
} else
{return (strobj__11306[this__11303.k]);
}
}
});
var G__11310__3 = (function (this_sym11302,coll,not_found){
var this__11303 = this;
var this_sym11302__11307 = this;
var ___11308 = this_sym11302__11307;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__11303.k,not_found);
}
});
G__11310 = function(this_sym11302,coll,not_found){
switch(arguments.length){
case 2:
return G__11310__2.call(this,this_sym11302,coll);
case 3:
return G__11310__3.call(this,this_sym11302,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11310;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym11299,args11300){
var this__11309 = this;
return this_sym11299.call.apply(this_sym11299,[this_sym11299].concat(args11300.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__11319 = null;
var G__11319__2 = (function (this_sym11313,coll){
var this_sym11313__11315 = this;
var this__11316 = this_sym11313__11315;
return cljs.core._lookup.call(null,coll,this__11316.toString(),null);
});
var G__11319__3 = (function (this_sym11314,coll,not_found){
var this_sym11314__11317 = this;
var this__11318 = this_sym11314__11317;
return cljs.core._lookup.call(null,coll,this__11318.toString(),not_found);
});
G__11319 = function(this_sym11314,coll,not_found){
switch(arguments.length){
case 2:
return G__11319__2.call(this,this_sym11314,coll);
case 3:
return G__11319__3.call(this,this_sym11314,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11319;
})()
;
String.prototype.apply = (function (this_sym11311,args11312){
return this_sym11311.call.apply(this_sym11311,[this_sym11311].concat(args11312.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__11321 = lazy_seq.x;
if(lazy_seq.realized)
{return x__11321;
} else
{lazy_seq.x = x__11321.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11322 = this;
var h__5690__auto____11323 = this__11322.__hash;
if(!((h__5690__auto____11323 == null)))
{return h__5690__auto____11323;
} else
{var h__5690__auto____11324 = cljs.core.hash_coll.call(null,coll);
this__11322.__hash = h__5690__auto____11324;
return h__5690__auto____11324;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11325 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11326 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__11327 = this;
var this__11328 = this;
return cljs.core.pr_str.call(null,this__11328);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11329 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11330 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11331 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11332 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11333 = this;
return (new cljs.core.LazySeq(meta,this__11333.realized,this__11333.x,this__11333.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11334 = this;
return this__11334.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11335 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11335.meta);
});
cljs.core.LazySeq;

goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11336 = this;
return this__11336.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__11337 = this;
var ___11338 = this;
(this__11337.buf[this__11337.end] = o);
return this__11337.end = (this__11337.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__11339 = this;
var ___11340 = this;
var ret__11341 = (new cljs.core.ArrayChunk(this__11339.buf,0,this__11339.end));
this__11339.buf = null;
return ret__11341;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11342 = this;
return cljs.core.array_reduce.call(null,this__11342.arr,f,(this__11342.arr[this__11342.off]),(this__11342.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11343 = this;
return cljs.core.array_reduce.call(null,this__11343.arr,f,start,this__11343.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__11344 = this;
if((this__11344.off === this__11344.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__11344.arr,(this__11344.off + 1),this__11344.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__11345 = this;
return (this__11345.arr[(this__11345.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__11346 = this;
if((function (){var and__3822__auto____11347 = (i >= 0);
if(and__3822__auto____11347)
{return (i < (this__11346.end - this__11346.off));
} else
{return and__3822__auto____11347;
}
})())
{return (this__11346.arr[(this__11346.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11348 = this;
return (this__11348.end - this__11348.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11349 = this;
var h__5690__auto____11350 = this__11349.__hash;
if(!((h__5690__auto____11350 == null)))
{return h__5690__auto____11350;
} else
{var h__5690__auto____11351 = cljs.core.hash_coll.call(null,coll);
this__11349.__hash = h__5690__auto____11351;
return h__5690__auto____11351;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__11352 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11353 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11354 = this;
return cljs.core._nth.call(null,this__11354.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11355 = this;
if((cljs.core._count.call(null,this__11355.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__11355.chunk),this__11355.more,this__11355.meta,null));
} else
{if((this__11355.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__11355.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__11356 = this;
if((this__11356.more == null))
{return null;
} else
{return this__11356.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11357 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__11358 = this;
return (new cljs.core.ChunkedCons(this__11358.chunk,this__11358.more,m,this__11358.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11359 = this;
return this__11359.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11360 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11360.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__11361 = this;
return this__11361.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__11362 = this;
if((this__11362.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__11362.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__11366__11367 = s;
if(G__11366__11367)
{if((function (){var or__3824__auto____11368 = (G__11366__11367.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____11368)
{return or__3824__auto____11368;
} else
{return G__11366__11367.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__11366__11367.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__11366__11367);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__11366__11367);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__11371 = [];
var s__11372 = s;
while(true){
if(cljs.core.seq.call(null,s__11372))
{ary__11371.push(cljs.core.first.call(null,s__11372));
{
var G__11373 = cljs.core.next.call(null,s__11372);
s__11372 = G__11373;
continue;
}
} else
{return ary__11371;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__11377 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__11378 = 0;
var xs__11379 = cljs.core.seq.call(null,coll);
while(true){
if(xs__11379)
{(ret__11377[i__11378] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__11379)));
{
var G__11380 = (i__11378 + 1);
var G__11381 = cljs.core.next.call(null,xs__11379);
i__11378 = G__11380;
xs__11379 = G__11381;
continue;
}
} else
{}
break;
}
return ret__11377;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__11389 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11390 = cljs.core.seq.call(null,init_val_or_seq);
var i__11391 = 0;
var s__11392 = s__11390;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11393 = s__11392;
if(and__3822__auto____11393)
{return (i__11391 < size);
} else
{return and__3822__auto____11393;
}
})()))
{(a__11389[i__11391] = cljs.core.first.call(null,s__11392));
{
var G__11396 = (i__11391 + 1);
var G__11397 = cljs.core.next.call(null,s__11392);
i__11391 = G__11396;
s__11392 = G__11397;
continue;
}
} else
{return a__11389;
}
break;
}
} else
{var n__6036__auto____11394 = size;
var i__11395 = 0;
while(true){
if((i__11395 < n__6036__auto____11394))
{(a__11389[i__11395] = init_val_or_seq);
{
var G__11398 = (i__11395 + 1);
i__11395 = G__11398;
continue;
}
} else
{}
break;
}
return a__11389;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__11406 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11407 = cljs.core.seq.call(null,init_val_or_seq);
var i__11408 = 0;
var s__11409 = s__11407;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11410 = s__11409;
if(and__3822__auto____11410)
{return (i__11408 < size);
} else
{return and__3822__auto____11410;
}
})()))
{(a__11406[i__11408] = cljs.core.first.call(null,s__11409));
{
var G__11413 = (i__11408 + 1);
var G__11414 = cljs.core.next.call(null,s__11409);
i__11408 = G__11413;
s__11409 = G__11414;
continue;
}
} else
{return a__11406;
}
break;
}
} else
{var n__6036__auto____11411 = size;
var i__11412 = 0;
while(true){
if((i__11412 < n__6036__auto____11411))
{(a__11406[i__11412] = init_val_or_seq);
{
var G__11415 = (i__11412 + 1);
i__11412 = G__11415;
continue;
}
} else
{}
break;
}
return a__11406;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__11423 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11424 = cljs.core.seq.call(null,init_val_or_seq);
var i__11425 = 0;
var s__11426 = s__11424;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11427 = s__11426;
if(and__3822__auto____11427)
{return (i__11425 < size);
} else
{return and__3822__auto____11427;
}
})()))
{(a__11423[i__11425] = cljs.core.first.call(null,s__11426));
{
var G__11430 = (i__11425 + 1);
var G__11431 = cljs.core.next.call(null,s__11426);
i__11425 = G__11430;
s__11426 = G__11431;
continue;
}
} else
{return a__11423;
}
break;
}
} else
{var n__6036__auto____11428 = size;
var i__11429 = 0;
while(true){
if((i__11429 < n__6036__auto____11428))
{(a__11423[i__11429] = init_val_or_seq);
{
var G__11432 = (i__11429 + 1);
i__11429 = G__11432;
continue;
}
} else
{}
break;
}
return a__11423;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__11437 = s;
var i__11438 = n;
var sum__11439 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11440 = (i__11438 > 0);
if(and__3822__auto____11440)
{return cljs.core.seq.call(null,s__11437);
} else
{return and__3822__auto____11440;
}
})()))
{{
var G__11441 = cljs.core.next.call(null,s__11437);
var G__11442 = (i__11438 - 1);
var G__11443 = (sum__11439 + 1);
s__11437 = G__11441;
i__11438 = G__11442;
sum__11439 = G__11443;
continue;
}
} else
{return sum__11439;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11448 = cljs.core.seq.call(null,x);
if(s__11448)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__11448))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__11448),concat.call(null,cljs.core.chunk_rest.call(null,s__11448),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11448),concat.call(null,cljs.core.rest.call(null,s__11448),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__11452__delegate = function (x,y,zs){
var cat__11451 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__11450 = cljs.core.seq.call(null,xys);
if(xys__11450)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__11450))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__11450),cat.call(null,cljs.core.chunk_rest.call(null,xys__11450),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__11450),cat.call(null,cljs.core.rest.call(null,xys__11450),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__11451.call(null,concat.call(null,x,y),zs);
};
var G__11452 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11452__delegate.call(this, x, y, zs);
};
G__11452.cljs$lang$maxFixedArity = 2;
G__11452.cljs$lang$applyTo = (function (arglist__11453){
var x = cljs.core.first(arglist__11453);
var y = cljs.core.first(cljs.core.next(arglist__11453));
var zs = cljs.core.rest(cljs.core.next(arglist__11453));
return G__11452__delegate(x, y, zs);
});
G__11452.cljs$lang$arity$variadic = G__11452__delegate;
return G__11452;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__11454__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__11454 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11454__delegate.call(this, a, b, c, d, more);
};
G__11454.cljs$lang$maxFixedArity = 4;
G__11454.cljs$lang$applyTo = (function (arglist__11455){
var a = cljs.core.first(arglist__11455);
var b = cljs.core.first(cljs.core.next(arglist__11455));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11455)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11455))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11455))));
return G__11454__delegate(a, b, c, d, more);
});
G__11454.cljs$lang$arity$variadic = G__11454__delegate;
return G__11454;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__11497 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__11498 = cljs.core._first.call(null,args__11497);
var args__11499 = cljs.core._rest.call(null,args__11497);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__11498);
} else
{return f.call(null,a__11498);
}
} else
{var b__11500 = cljs.core._first.call(null,args__11499);
var args__11501 = cljs.core._rest.call(null,args__11499);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__11498,b__11500);
} else
{return f.call(null,a__11498,b__11500);
}
} else
{var c__11502 = cljs.core._first.call(null,args__11501);
var args__11503 = cljs.core._rest.call(null,args__11501);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__11498,b__11500,c__11502);
} else
{return f.call(null,a__11498,b__11500,c__11502);
}
} else
{var d__11504 = cljs.core._first.call(null,args__11503);
var args__11505 = cljs.core._rest.call(null,args__11503);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__11498,b__11500,c__11502,d__11504);
} else
{return f.call(null,a__11498,b__11500,c__11502,d__11504);
}
} else
{var e__11506 = cljs.core._first.call(null,args__11505);
var args__11507 = cljs.core._rest.call(null,args__11505);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__11498,b__11500,c__11502,d__11504,e__11506);
} else
{return f.call(null,a__11498,b__11500,c__11502,d__11504,e__11506);
}
} else
{var f__11508 = cljs.core._first.call(null,args__11507);
var args__11509 = cljs.core._rest.call(null,args__11507);
if((argc === 6))
{if(f__11508.cljs$lang$arity$6)
{return f__11508.cljs$lang$arity$6(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508);
}
} else
{var g__11510 = cljs.core._first.call(null,args__11509);
var args__11511 = cljs.core._rest.call(null,args__11509);
if((argc === 7))
{if(f__11508.cljs$lang$arity$7)
{return f__11508.cljs$lang$arity$7(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510);
}
} else
{var h__11512 = cljs.core._first.call(null,args__11511);
var args__11513 = cljs.core._rest.call(null,args__11511);
if((argc === 8))
{if(f__11508.cljs$lang$arity$8)
{return f__11508.cljs$lang$arity$8(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512);
}
} else
{var i__11514 = cljs.core._first.call(null,args__11513);
var args__11515 = cljs.core._rest.call(null,args__11513);
if((argc === 9))
{if(f__11508.cljs$lang$arity$9)
{return f__11508.cljs$lang$arity$9(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514);
}
} else
{var j__11516 = cljs.core._first.call(null,args__11515);
var args__11517 = cljs.core._rest.call(null,args__11515);
if((argc === 10))
{if(f__11508.cljs$lang$arity$10)
{return f__11508.cljs$lang$arity$10(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516);
}
} else
{var k__11518 = cljs.core._first.call(null,args__11517);
var args__11519 = cljs.core._rest.call(null,args__11517);
if((argc === 11))
{if(f__11508.cljs$lang$arity$11)
{return f__11508.cljs$lang$arity$11(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518);
}
} else
{var l__11520 = cljs.core._first.call(null,args__11519);
var args__11521 = cljs.core._rest.call(null,args__11519);
if((argc === 12))
{if(f__11508.cljs$lang$arity$12)
{return f__11508.cljs$lang$arity$12(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520);
}
} else
{var m__11522 = cljs.core._first.call(null,args__11521);
var args__11523 = cljs.core._rest.call(null,args__11521);
if((argc === 13))
{if(f__11508.cljs$lang$arity$13)
{return f__11508.cljs$lang$arity$13(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522);
}
} else
{var n__11524 = cljs.core._first.call(null,args__11523);
var args__11525 = cljs.core._rest.call(null,args__11523);
if((argc === 14))
{if(f__11508.cljs$lang$arity$14)
{return f__11508.cljs$lang$arity$14(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524);
}
} else
{var o__11526 = cljs.core._first.call(null,args__11525);
var args__11527 = cljs.core._rest.call(null,args__11525);
if((argc === 15))
{if(f__11508.cljs$lang$arity$15)
{return f__11508.cljs$lang$arity$15(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526);
}
} else
{var p__11528 = cljs.core._first.call(null,args__11527);
var args__11529 = cljs.core._rest.call(null,args__11527);
if((argc === 16))
{if(f__11508.cljs$lang$arity$16)
{return f__11508.cljs$lang$arity$16(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528);
}
} else
{var q__11530 = cljs.core._first.call(null,args__11529);
var args__11531 = cljs.core._rest.call(null,args__11529);
if((argc === 17))
{if(f__11508.cljs$lang$arity$17)
{return f__11508.cljs$lang$arity$17(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530);
}
} else
{var r__11532 = cljs.core._first.call(null,args__11531);
var args__11533 = cljs.core._rest.call(null,args__11531);
if((argc === 18))
{if(f__11508.cljs$lang$arity$18)
{return f__11508.cljs$lang$arity$18(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530,r__11532);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530,r__11532);
}
} else
{var s__11534 = cljs.core._first.call(null,args__11533);
var args__11535 = cljs.core._rest.call(null,args__11533);
if((argc === 19))
{if(f__11508.cljs$lang$arity$19)
{return f__11508.cljs$lang$arity$19(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530,r__11532,s__11534);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530,r__11532,s__11534);
}
} else
{var t__11536 = cljs.core._first.call(null,args__11535);
var args__11537 = cljs.core._rest.call(null,args__11535);
if((argc === 20))
{if(f__11508.cljs$lang$arity$20)
{return f__11508.cljs$lang$arity$20(a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530,r__11532,s__11534,t__11536);
} else
{return f__11508.call(null,a__11498,b__11500,c__11502,d__11504,e__11506,f__11508,g__11510,h__11512,i__11514,j__11516,k__11518,l__11520,m__11522,n__11524,o__11526,p__11528,q__11530,r__11532,s__11534,t__11536);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__11552 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11553 = cljs.core.bounded_count.call(null,args,(fixed_arity__11552 + 1));
if((bc__11553 <= fixed_arity__11552))
{return cljs.core.apply_to.call(null,f,bc__11553,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__11554 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__11555 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11556 = cljs.core.bounded_count.call(null,arglist__11554,(fixed_arity__11555 + 1));
if((bc__11556 <= fixed_arity__11555))
{return cljs.core.apply_to.call(null,f,bc__11556,arglist__11554);
} else
{return f.cljs$lang$applyTo(arglist__11554);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11554));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__11557 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__11558 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11559 = cljs.core.bounded_count.call(null,arglist__11557,(fixed_arity__11558 + 1));
if((bc__11559 <= fixed_arity__11558))
{return cljs.core.apply_to.call(null,f,bc__11559,arglist__11557);
} else
{return f.cljs$lang$applyTo(arglist__11557);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11557));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__11560 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__11561 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11562 = cljs.core.bounded_count.call(null,arglist__11560,(fixed_arity__11561 + 1));
if((bc__11562 <= fixed_arity__11561))
{return cljs.core.apply_to.call(null,f,bc__11562,arglist__11560);
} else
{return f.cljs$lang$applyTo(arglist__11560);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11560));
}
});
var apply__6 = (function() { 
var G__11566__delegate = function (f,a,b,c,d,args){
var arglist__11563 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__11564 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11565 = cljs.core.bounded_count.call(null,arglist__11563,(fixed_arity__11564 + 1));
if((bc__11565 <= fixed_arity__11564))
{return cljs.core.apply_to.call(null,f,bc__11565,arglist__11563);
} else
{return f.cljs$lang$applyTo(arglist__11563);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11563));
}
};
var G__11566 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11566__delegate.call(this, f, a, b, c, d, args);
};
G__11566.cljs$lang$maxFixedArity = 5;
G__11566.cljs$lang$applyTo = (function (arglist__11567){
var f = cljs.core.first(arglist__11567);
var a = cljs.core.first(cljs.core.next(arglist__11567));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11567)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11567))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11567)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11567)))));
return G__11566__delegate(f, a, b, c, d, args);
});
G__11566.cljs$lang$arity$variadic = G__11566__delegate;
return G__11566;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__11568){
var obj = cljs.core.first(arglist__11568);
var f = cljs.core.first(cljs.core.next(arglist__11568));
var args = cljs.core.rest(cljs.core.next(arglist__11568));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__11569__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__11569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11569__delegate.call(this, x, y, more);
};
G__11569.cljs$lang$maxFixedArity = 2;
G__11569.cljs$lang$applyTo = (function (arglist__11570){
var x = cljs.core.first(arglist__11570);
var y = cljs.core.first(cljs.core.next(arglist__11570));
var more = cljs.core.rest(cljs.core.next(arglist__11570));
return G__11569__delegate(x, y, more);
});
G__11569.cljs$lang$arity$variadic = G__11569__delegate;
return G__11569;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__11571 = pred;
var G__11572 = cljs.core.next.call(null,coll);
pred = G__11571;
coll = G__11572;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____11574 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____11574))
{return or__3824__auto____11574;
} else
{{
var G__11575 = pred;
var G__11576 = cljs.core.next.call(null,coll);
pred = G__11575;
coll = G__11576;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__11577 = null;
var G__11577__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__11577__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__11577__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__11577__3 = (function() { 
var G__11578__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__11578 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11578__delegate.call(this, x, y, zs);
};
G__11578.cljs$lang$maxFixedArity = 2;
G__11578.cljs$lang$applyTo = (function (arglist__11579){
var x = cljs.core.first(arglist__11579);
var y = cljs.core.first(cljs.core.next(arglist__11579));
var zs = cljs.core.rest(cljs.core.next(arglist__11579));
return G__11578__delegate(x, y, zs);
});
G__11578.cljs$lang$arity$variadic = G__11578__delegate;
return G__11578;
})()
;
G__11577 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__11577__0.call(this);
case 1:
return G__11577__1.call(this,x);
case 2:
return G__11577__2.call(this,x,y);
default:
return G__11577__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__11577.cljs$lang$maxFixedArity = 2;
G__11577.cljs$lang$applyTo = G__11577__3.cljs$lang$applyTo;
return G__11577;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11580__delegate = function (args){
return x;
};
var G__11580 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11580__delegate.call(this, args);
};
G__11580.cljs$lang$maxFixedArity = 0;
G__11580.cljs$lang$applyTo = (function (arglist__11581){
var args = cljs.core.seq(arglist__11581);;
return G__11580__delegate(args);
});
G__11580.cljs$lang$arity$variadic = G__11580__delegate;
return G__11580;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__11588 = null;
var G__11588__0 = (function (){
return f.call(null,g.call(null));
});
var G__11588__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11588__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11588__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11588__4 = (function() { 
var G__11589__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11589 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11589__delegate.call(this, x, y, z, args);
};
G__11589.cljs$lang$maxFixedArity = 3;
G__11589.cljs$lang$applyTo = (function (arglist__11590){
var x = cljs.core.first(arglist__11590);
var y = cljs.core.first(cljs.core.next(arglist__11590));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11590)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11590)));
return G__11589__delegate(x, y, z, args);
});
G__11589.cljs$lang$arity$variadic = G__11589__delegate;
return G__11589;
})()
;
G__11588 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11588__0.call(this);
case 1:
return G__11588__1.call(this,x);
case 2:
return G__11588__2.call(this,x,y);
case 3:
return G__11588__3.call(this,x,y,z);
default:
return G__11588__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11588.cljs$lang$maxFixedArity = 3;
G__11588.cljs$lang$applyTo = G__11588__4.cljs$lang$applyTo;
return G__11588;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__11591 = null;
var G__11591__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11591__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11591__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11591__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11591__4 = (function() { 
var G__11592__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11592 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11592__delegate.call(this, x, y, z, args);
};
G__11592.cljs$lang$maxFixedArity = 3;
G__11592.cljs$lang$applyTo = (function (arglist__11593){
var x = cljs.core.first(arglist__11593);
var y = cljs.core.first(cljs.core.next(arglist__11593));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11593)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11593)));
return G__11592__delegate(x, y, z, args);
});
G__11592.cljs$lang$arity$variadic = G__11592__delegate;
return G__11592;
})()
;
G__11591 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11591__0.call(this);
case 1:
return G__11591__1.call(this,x);
case 2:
return G__11591__2.call(this,x,y);
case 3:
return G__11591__3.call(this,x,y,z);
default:
return G__11591__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11591.cljs$lang$maxFixedArity = 3;
G__11591.cljs$lang$applyTo = G__11591__4.cljs$lang$applyTo;
return G__11591;
})()
});
var comp__4 = (function() { 
var G__11594__delegate = function (f1,f2,f3,fs){
var fs__11585 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__11595__delegate = function (args){
var ret__11586 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11585),args);
var fs__11587 = cljs.core.next.call(null,fs__11585);
while(true){
if(fs__11587)
{{
var G__11596 = cljs.core.first.call(null,fs__11587).call(null,ret__11586);
var G__11597 = cljs.core.next.call(null,fs__11587);
ret__11586 = G__11596;
fs__11587 = G__11597;
continue;
}
} else
{return ret__11586;
}
break;
}
};
var G__11595 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11595__delegate.call(this, args);
};
G__11595.cljs$lang$maxFixedArity = 0;
G__11595.cljs$lang$applyTo = (function (arglist__11598){
var args = cljs.core.seq(arglist__11598);;
return G__11595__delegate(args);
});
G__11595.cljs$lang$arity$variadic = G__11595__delegate;
return G__11595;
})()
;
};
var G__11594 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11594__delegate.call(this, f1, f2, f3, fs);
};
G__11594.cljs$lang$maxFixedArity = 3;
G__11594.cljs$lang$applyTo = (function (arglist__11599){
var f1 = cljs.core.first(arglist__11599);
var f2 = cljs.core.first(cljs.core.next(arglist__11599));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11599)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11599)));
return G__11594__delegate(f1, f2, f3, fs);
});
G__11594.cljs$lang$arity$variadic = G__11594__delegate;
return G__11594;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__11600__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11600 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11600__delegate.call(this, args);
};
G__11600.cljs$lang$maxFixedArity = 0;
G__11600.cljs$lang$applyTo = (function (arglist__11601){
var args = cljs.core.seq(arglist__11601);;
return G__11600__delegate(args);
});
G__11600.cljs$lang$arity$variadic = G__11600__delegate;
return G__11600;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__11602__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11602 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11602__delegate.call(this, args);
};
G__11602.cljs$lang$maxFixedArity = 0;
G__11602.cljs$lang$applyTo = (function (arglist__11603){
var args = cljs.core.seq(arglist__11603);;
return G__11602__delegate(args);
});
G__11602.cljs$lang$arity$variadic = G__11602__delegate;
return G__11602;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11604__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11604 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11604__delegate.call(this, args);
};
G__11604.cljs$lang$maxFixedArity = 0;
G__11604.cljs$lang$applyTo = (function (arglist__11605){
var args = cljs.core.seq(arglist__11605);;
return G__11604__delegate(args);
});
G__11604.cljs$lang$arity$variadic = G__11604__delegate;
return G__11604;
})()
;
});
var partial__5 = (function() { 
var G__11606__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11607__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11607 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11607__delegate.call(this, args);
};
G__11607.cljs$lang$maxFixedArity = 0;
G__11607.cljs$lang$applyTo = (function (arglist__11608){
var args = cljs.core.seq(arglist__11608);;
return G__11607__delegate(args);
});
G__11607.cljs$lang$arity$variadic = G__11607__delegate;
return G__11607;
})()
;
};
var G__11606 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11606__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11606.cljs$lang$maxFixedArity = 4;
G__11606.cljs$lang$applyTo = (function (arglist__11609){
var f = cljs.core.first(arglist__11609);
var arg1 = cljs.core.first(cljs.core.next(arglist__11609));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11609)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11609))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11609))));
return G__11606__delegate(f, arg1, arg2, arg3, more);
});
G__11606.cljs$lang$arity$variadic = G__11606__delegate;
return G__11606;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__11610 = null;
var G__11610__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__11610__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__11610__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__11610__4 = (function() { 
var G__11611__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__11611 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11611__delegate.call(this, a, b, c, ds);
};
G__11611.cljs$lang$maxFixedArity = 3;
G__11611.cljs$lang$applyTo = (function (arglist__11612){
var a = cljs.core.first(arglist__11612);
var b = cljs.core.first(cljs.core.next(arglist__11612));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11612)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11612)));
return G__11611__delegate(a, b, c, ds);
});
G__11611.cljs$lang$arity$variadic = G__11611__delegate;
return G__11611;
})()
;
G__11610 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__11610__1.call(this,a);
case 2:
return G__11610__2.call(this,a,b);
case 3:
return G__11610__3.call(this,a,b,c);
default:
return G__11610__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11610.cljs$lang$maxFixedArity = 3;
G__11610.cljs$lang$applyTo = G__11610__4.cljs$lang$applyTo;
return G__11610;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__11613 = null;
var G__11613__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__11613__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__11613__4 = (function() { 
var G__11614__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__11614 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11614__delegate.call(this, a, b, c, ds);
};
G__11614.cljs$lang$maxFixedArity = 3;
G__11614.cljs$lang$applyTo = (function (arglist__11615){
var a = cljs.core.first(arglist__11615);
var b = cljs.core.first(cljs.core.next(arglist__11615));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11615)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11615)));
return G__11614__delegate(a, b, c, ds);
});
G__11614.cljs$lang$arity$variadic = G__11614__delegate;
return G__11614;
})()
;
G__11613 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__11613__2.call(this,a,b);
case 3:
return G__11613__3.call(this,a,b,c);
default:
return G__11613__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11613.cljs$lang$maxFixedArity = 3;
G__11613.cljs$lang$applyTo = G__11613__4.cljs$lang$applyTo;
return G__11613;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__11616 = null;
var G__11616__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__11616__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__11616__4 = (function() { 
var G__11617__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__11617 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11617__delegate.call(this, a, b, c, ds);
};
G__11617.cljs$lang$maxFixedArity = 3;
G__11617.cljs$lang$applyTo = (function (arglist__11618){
var a = cljs.core.first(arglist__11618);
var b = cljs.core.first(cljs.core.next(arglist__11618));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11618)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11618)));
return G__11617__delegate(a, b, c, ds);
});
G__11617.cljs$lang$arity$variadic = G__11617__delegate;
return G__11617;
})()
;
G__11616 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__11616__2.call(this,a,b);
case 3:
return G__11616__3.call(this,a,b,c);
default:
return G__11616__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11616.cljs$lang$maxFixedArity = 3;
G__11616.cljs$lang$applyTo = G__11616__4.cljs$lang$applyTo;
return G__11616;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__11634 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11642 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11642)
{var s__11643 = temp__3974__auto____11642;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11643))
{var c__11644 = cljs.core.chunk_first.call(null,s__11643);
var size__11645 = cljs.core.count.call(null,c__11644);
var b__11646 = cljs.core.chunk_buffer.call(null,size__11645);
var n__6036__auto____11647 = size__11645;
var i__11648 = 0;
while(true){
if((i__11648 < n__6036__auto____11647))
{cljs.core.chunk_append.call(null,b__11646,f.call(null,(idx + i__11648),cljs.core._nth.call(null,c__11644,i__11648)));
{
var G__11649 = (i__11648 + 1);
i__11648 = G__11649;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11646),mapi.call(null,(idx + size__11645),cljs.core.chunk_rest.call(null,s__11643)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11643)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__11643)));
}
} else
{return null;
}
}),null));
});
return mapi__11634.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11659 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11659)
{var s__11660 = temp__3974__auto____11659;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11660))
{var c__11661 = cljs.core.chunk_first.call(null,s__11660);
var size__11662 = cljs.core.count.call(null,c__11661);
var b__11663 = cljs.core.chunk_buffer.call(null,size__11662);
var n__6036__auto____11664 = size__11662;
var i__11665 = 0;
while(true){
if((i__11665 < n__6036__auto____11664))
{var x__11666 = f.call(null,cljs.core._nth.call(null,c__11661,i__11665));
if((x__11666 == null))
{} else
{cljs.core.chunk_append.call(null,b__11663,x__11666);
}
{
var G__11668 = (i__11665 + 1);
i__11665 = G__11668;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11663),keep.call(null,f,cljs.core.chunk_rest.call(null,s__11660)));
} else
{var x__11667 = f.call(null,cljs.core.first.call(null,s__11660));
if((x__11667 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__11660));
} else
{return cljs.core.cons.call(null,x__11667,keep.call(null,f,cljs.core.rest.call(null,s__11660)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__11694 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11704 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11704)
{var s__11705 = temp__3974__auto____11704;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11705))
{var c__11706 = cljs.core.chunk_first.call(null,s__11705);
var size__11707 = cljs.core.count.call(null,c__11706);
var b__11708 = cljs.core.chunk_buffer.call(null,size__11707);
var n__6036__auto____11709 = size__11707;
var i__11710 = 0;
while(true){
if((i__11710 < n__6036__auto____11709))
{var x__11711 = f.call(null,(idx + i__11710),cljs.core._nth.call(null,c__11706,i__11710));
if((x__11711 == null))
{} else
{cljs.core.chunk_append.call(null,b__11708,x__11711);
}
{
var G__11713 = (i__11710 + 1);
i__11710 = G__11713;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11708),keepi.call(null,(idx + size__11707),cljs.core.chunk_rest.call(null,s__11705)));
} else
{var x__11712 = f.call(null,idx,cljs.core.first.call(null,s__11705));
if((x__11712 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11705));
} else
{return cljs.core.cons.call(null,x__11712,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11705)));
}
}
} else
{return null;
}
}),null));
});
return keepi__11694.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11799 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____11799))
{return p.call(null,y);
} else
{return and__3822__auto____11799;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11800 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____11800))
{var and__3822__auto____11801 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____11801))
{return p.call(null,z);
} else
{return and__3822__auto____11801;
}
} else
{return and__3822__auto____11800;
}
})());
});
var ep1__4 = (function() { 
var G__11870__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11802 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11802))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____11802;
}
})());
};
var G__11870 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11870__delegate.call(this, x, y, z, args);
};
G__11870.cljs$lang$maxFixedArity = 3;
G__11870.cljs$lang$applyTo = (function (arglist__11871){
var x = cljs.core.first(arglist__11871);
var y = cljs.core.first(cljs.core.next(arglist__11871));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11871)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11871)));
return G__11870__delegate(x, y, z, args);
});
G__11870.cljs$lang$arity$variadic = G__11870__delegate;
return G__11870;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11814 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11814))
{return p2.call(null,x);
} else
{return and__3822__auto____11814;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11815 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11815))
{var and__3822__auto____11816 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11816))
{var and__3822__auto____11817 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11817))
{return p2.call(null,y);
} else
{return and__3822__auto____11817;
}
} else
{return and__3822__auto____11816;
}
} else
{return and__3822__auto____11815;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11818 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11818))
{var and__3822__auto____11819 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11819))
{var and__3822__auto____11820 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____11820))
{var and__3822__auto____11821 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11821))
{var and__3822__auto____11822 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11822))
{return p2.call(null,z);
} else
{return and__3822__auto____11822;
}
} else
{return and__3822__auto____11821;
}
} else
{return and__3822__auto____11820;
}
} else
{return and__3822__auto____11819;
}
} else
{return and__3822__auto____11818;
}
})());
});
var ep2__4 = (function() { 
var G__11872__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11823 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11823))
{return cljs.core.every_QMARK_.call(null,(function (p1__11669_SHARP_){
var and__3822__auto____11824 = p1.call(null,p1__11669_SHARP_);
if(cljs.core.truth_(and__3822__auto____11824))
{return p2.call(null,p1__11669_SHARP_);
} else
{return and__3822__auto____11824;
}
}),args);
} else
{return and__3822__auto____11823;
}
})());
};
var G__11872 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11872__delegate.call(this, x, y, z, args);
};
G__11872.cljs$lang$maxFixedArity = 3;
G__11872.cljs$lang$applyTo = (function (arglist__11873){
var x = cljs.core.first(arglist__11873);
var y = cljs.core.first(cljs.core.next(arglist__11873));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11873)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11873)));
return G__11872__delegate(x, y, z, args);
});
G__11872.cljs$lang$arity$variadic = G__11872__delegate;
return G__11872;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11843 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11843))
{var and__3822__auto____11844 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11844))
{return p3.call(null,x);
} else
{return and__3822__auto____11844;
}
} else
{return and__3822__auto____11843;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11845 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11845))
{var and__3822__auto____11846 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11846))
{var and__3822__auto____11847 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____11847))
{var and__3822__auto____11848 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11848))
{var and__3822__auto____11849 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11849))
{return p3.call(null,y);
} else
{return and__3822__auto____11849;
}
} else
{return and__3822__auto____11848;
}
} else
{return and__3822__auto____11847;
}
} else
{return and__3822__auto____11846;
}
} else
{return and__3822__auto____11845;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11850 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11850))
{var and__3822__auto____11851 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11851))
{var and__3822__auto____11852 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____11852))
{var and__3822__auto____11853 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11853))
{var and__3822__auto____11854 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11854))
{var and__3822__auto____11855 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____11855))
{var and__3822__auto____11856 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____11856))
{var and__3822__auto____11857 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____11857))
{return p3.call(null,z);
} else
{return and__3822__auto____11857;
}
} else
{return and__3822__auto____11856;
}
} else
{return and__3822__auto____11855;
}
} else
{return and__3822__auto____11854;
}
} else
{return and__3822__auto____11853;
}
} else
{return and__3822__auto____11852;
}
} else
{return and__3822__auto____11851;
}
} else
{return and__3822__auto____11850;
}
})());
});
var ep3__4 = (function() { 
var G__11874__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11858 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11858))
{return cljs.core.every_QMARK_.call(null,(function (p1__11670_SHARP_){
var and__3822__auto____11859 = p1.call(null,p1__11670_SHARP_);
if(cljs.core.truth_(and__3822__auto____11859))
{var and__3822__auto____11860 = p2.call(null,p1__11670_SHARP_);
if(cljs.core.truth_(and__3822__auto____11860))
{return p3.call(null,p1__11670_SHARP_);
} else
{return and__3822__auto____11860;
}
} else
{return and__3822__auto____11859;
}
}),args);
} else
{return and__3822__auto____11858;
}
})());
};
var G__11874 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11874__delegate.call(this, x, y, z, args);
};
G__11874.cljs$lang$maxFixedArity = 3;
G__11874.cljs$lang$applyTo = (function (arglist__11875){
var x = cljs.core.first(arglist__11875);
var y = cljs.core.first(cljs.core.next(arglist__11875));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11875)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11875)));
return G__11874__delegate(x, y, z, args);
});
G__11874.cljs$lang$arity$variadic = G__11874__delegate;
return G__11874;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__11876__delegate = function (p1,p2,p3,ps){
var ps__11861 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11671_SHARP_){
return p1__11671_SHARP_.call(null,x);
}),ps__11861);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11672_SHARP_){
var and__3822__auto____11866 = p1__11672_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____11866))
{return p1__11672_SHARP_.call(null,y);
} else
{return and__3822__auto____11866;
}
}),ps__11861);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11673_SHARP_){
var and__3822__auto____11867 = p1__11673_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____11867))
{var and__3822__auto____11868 = p1__11673_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____11868))
{return p1__11673_SHARP_.call(null,z);
} else
{return and__3822__auto____11868;
}
} else
{return and__3822__auto____11867;
}
}),ps__11861);
});
var epn__4 = (function() { 
var G__11877__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11869 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11869))
{return cljs.core.every_QMARK_.call(null,(function (p1__11674_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11674_SHARP_,args);
}),ps__11861);
} else
{return and__3822__auto____11869;
}
})());
};
var G__11877 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11877__delegate.call(this, x, y, z, args);
};
G__11877.cljs$lang$maxFixedArity = 3;
G__11877.cljs$lang$applyTo = (function (arglist__11878){
var x = cljs.core.first(arglist__11878);
var y = cljs.core.first(cljs.core.next(arglist__11878));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11878)));
return G__11877__delegate(x, y, z, args);
});
G__11877.cljs$lang$arity$variadic = G__11877__delegate;
return G__11877;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__11876 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11876__delegate.call(this, p1, p2, p3, ps);
};
G__11876.cljs$lang$maxFixedArity = 3;
G__11876.cljs$lang$applyTo = (function (arglist__11879){
var p1 = cljs.core.first(arglist__11879);
var p2 = cljs.core.first(cljs.core.next(arglist__11879));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11879)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11879)));
return G__11876__delegate(p1, p2, p3, ps);
});
G__11876.cljs$lang$arity$variadic = G__11876__delegate;
return G__11876;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____11960 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____11960))
{return or__3824__auto____11960;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____11961 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____11961))
{return or__3824__auto____11961;
} else
{var or__3824__auto____11962 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____11962))
{return or__3824__auto____11962;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__12031__delegate = function (x,y,z,args){
var or__3824__auto____11963 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11963))
{return or__3824__auto____11963;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12031 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12031__delegate.call(this, x, y, z, args);
};
G__12031.cljs$lang$maxFixedArity = 3;
G__12031.cljs$lang$applyTo = (function (arglist__12032){
var x = cljs.core.first(arglist__12032);
var y = cljs.core.first(cljs.core.next(arglist__12032));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12032)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12032)));
return G__12031__delegate(x, y, z, args);
});
G__12031.cljs$lang$arity$variadic = G__12031__delegate;
return G__12031;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____11975 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11975))
{return or__3824__auto____11975;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____11976 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11976))
{return or__3824__auto____11976;
} else
{var or__3824__auto____11977 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11977))
{return or__3824__auto____11977;
} else
{var or__3824__auto____11978 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11978))
{return or__3824__auto____11978;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____11979 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11979))
{return or__3824__auto____11979;
} else
{var or__3824__auto____11980 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11980))
{return or__3824__auto____11980;
} else
{var or__3824__auto____11981 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____11981))
{return or__3824__auto____11981;
} else
{var or__3824__auto____11982 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11982))
{return or__3824__auto____11982;
} else
{var or__3824__auto____11983 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____11983))
{return or__3824__auto____11983;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__12033__delegate = function (x,y,z,args){
var or__3824__auto____11984 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11984))
{return or__3824__auto____11984;
} else
{return cljs.core.some.call(null,(function (p1__11714_SHARP_){
var or__3824__auto____11985 = p1.call(null,p1__11714_SHARP_);
if(cljs.core.truth_(or__3824__auto____11985))
{return or__3824__auto____11985;
} else
{return p2.call(null,p1__11714_SHARP_);
}
}),args);
}
};
var G__12033 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12033__delegate.call(this, x, y, z, args);
};
G__12033.cljs$lang$maxFixedArity = 3;
G__12033.cljs$lang$applyTo = (function (arglist__12034){
var x = cljs.core.first(arglist__12034);
var y = cljs.core.first(cljs.core.next(arglist__12034));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12034)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12034)));
return G__12033__delegate(x, y, z, args);
});
G__12033.cljs$lang$arity$variadic = G__12033__delegate;
return G__12033;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____12004 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12004))
{return or__3824__auto____12004;
} else
{var or__3824__auto____12005 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12005))
{return or__3824__auto____12005;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____12006 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12006))
{return or__3824__auto____12006;
} else
{var or__3824__auto____12007 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12007))
{return or__3824__auto____12007;
} else
{var or__3824__auto____12008 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12008))
{return or__3824__auto____12008;
} else
{var or__3824__auto____12009 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12009))
{return or__3824__auto____12009;
} else
{var or__3824__auto____12010 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12010))
{return or__3824__auto____12010;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____12011 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12011))
{return or__3824__auto____12011;
} else
{var or__3824__auto____12012 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12012))
{return or__3824__auto____12012;
} else
{var or__3824__auto____12013 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12013))
{return or__3824__auto____12013;
} else
{var or__3824__auto____12014 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12014))
{return or__3824__auto____12014;
} else
{var or__3824__auto____12015 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12015))
{return or__3824__auto____12015;
} else
{var or__3824__auto____12016 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____12016))
{return or__3824__auto____12016;
} else
{var or__3824__auto____12017 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12017))
{return or__3824__auto____12017;
} else
{var or__3824__auto____12018 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____12018))
{return or__3824__auto____12018;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__12035__delegate = function (x,y,z,args){
var or__3824__auto____12019 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12019))
{return or__3824__auto____12019;
} else
{return cljs.core.some.call(null,(function (p1__11715_SHARP_){
var or__3824__auto____12020 = p1.call(null,p1__11715_SHARP_);
if(cljs.core.truth_(or__3824__auto____12020))
{return or__3824__auto____12020;
} else
{var or__3824__auto____12021 = p2.call(null,p1__11715_SHARP_);
if(cljs.core.truth_(or__3824__auto____12021))
{return or__3824__auto____12021;
} else
{return p3.call(null,p1__11715_SHARP_);
}
}
}),args);
}
};
var G__12035 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12035__delegate.call(this, x, y, z, args);
};
G__12035.cljs$lang$maxFixedArity = 3;
G__12035.cljs$lang$applyTo = (function (arglist__12036){
var x = cljs.core.first(arglist__12036);
var y = cljs.core.first(cljs.core.next(arglist__12036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12036)));
return G__12035__delegate(x, y, z, args);
});
G__12035.cljs$lang$arity$variadic = G__12035__delegate;
return G__12035;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__12037__delegate = function (p1,p2,p3,ps){
var ps__12022 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__11716_SHARP_){
return p1__11716_SHARP_.call(null,x);
}),ps__12022);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11717_SHARP_){
var or__3824__auto____12027 = p1__11717_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12027))
{return or__3824__auto____12027;
} else
{return p1__11717_SHARP_.call(null,y);
}
}),ps__12022);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11718_SHARP_){
var or__3824__auto____12028 = p1__11718_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12028))
{return or__3824__auto____12028;
} else
{var or__3824__auto____12029 = p1__11718_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____12029))
{return or__3824__auto____12029;
} else
{return p1__11718_SHARP_.call(null,z);
}
}
}),ps__12022);
});
var spn__4 = (function() { 
var G__12038__delegate = function (x,y,z,args){
var or__3824__auto____12030 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12030))
{return or__3824__auto____12030;
} else
{return cljs.core.some.call(null,(function (p1__11719_SHARP_){
return cljs.core.some.call(null,p1__11719_SHARP_,args);
}),ps__12022);
}
};
var G__12038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12038__delegate.call(this, x, y, z, args);
};
G__12038.cljs$lang$maxFixedArity = 3;
G__12038.cljs$lang$applyTo = (function (arglist__12039){
var x = cljs.core.first(arglist__12039);
var y = cljs.core.first(cljs.core.next(arglist__12039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12039)));
return G__12038__delegate(x, y, z, args);
});
G__12038.cljs$lang$arity$variadic = G__12038__delegate;
return G__12038;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__12037 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12037__delegate.call(this, p1, p2, p3, ps);
};
G__12037.cljs$lang$maxFixedArity = 3;
G__12037.cljs$lang$applyTo = (function (arglist__12040){
var p1 = cljs.core.first(arglist__12040);
var p2 = cljs.core.first(cljs.core.next(arglist__12040));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12040)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12040)));
return G__12037__delegate(p1, p2, p3, ps);
});
G__12037.cljs$lang$arity$variadic = G__12037__delegate;
return G__12037;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12059 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12059)
{var s__12060 = temp__3974__auto____12059;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12060))
{var c__12061 = cljs.core.chunk_first.call(null,s__12060);
var size__12062 = cljs.core.count.call(null,c__12061);
var b__12063 = cljs.core.chunk_buffer.call(null,size__12062);
var n__6036__auto____12064 = size__12062;
var i__12065 = 0;
while(true){
if((i__12065 < n__6036__auto____12064))
{cljs.core.chunk_append.call(null,b__12063,f.call(null,cljs.core._nth.call(null,c__12061,i__12065)));
{
var G__12077 = (i__12065 + 1);
i__12065 = G__12077;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12063),map.call(null,f,cljs.core.chunk_rest.call(null,s__12060)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12060)),map.call(null,f,cljs.core.rest.call(null,s__12060)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12066 = cljs.core.seq.call(null,c1);
var s2__12067 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12068 = s1__12066;
if(and__3822__auto____12068)
{return s2__12067;
} else
{return and__3822__auto____12068;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12066),cljs.core.first.call(null,s2__12067)),map.call(null,f,cljs.core.rest.call(null,s1__12066),cljs.core.rest.call(null,s2__12067)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12069 = cljs.core.seq.call(null,c1);
var s2__12070 = cljs.core.seq.call(null,c2);
var s3__12071 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____12072 = s1__12069;
if(and__3822__auto____12072)
{var and__3822__auto____12073 = s2__12070;
if(and__3822__auto____12073)
{return s3__12071;
} else
{return and__3822__auto____12073;
}
} else
{return and__3822__auto____12072;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12069),cljs.core.first.call(null,s2__12070),cljs.core.first.call(null,s3__12071)),map.call(null,f,cljs.core.rest.call(null,s1__12069),cljs.core.rest.call(null,s2__12070),cljs.core.rest.call(null,s3__12071)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__12078__delegate = function (f,c1,c2,c3,colls){
var step__12076 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12075 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12075))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12075),step.call(null,map.call(null,cljs.core.rest,ss__12075)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__11880_SHARP_){
return cljs.core.apply.call(null,f,p1__11880_SHARP_);
}),step__12076.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12078 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12078__delegate.call(this, f, c1, c2, c3, colls);
};
G__12078.cljs$lang$maxFixedArity = 4;
G__12078.cljs$lang$applyTo = (function (arglist__12079){
var f = cljs.core.first(arglist__12079);
var c1 = cljs.core.first(cljs.core.next(arglist__12079));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12079)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12079))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12079))));
return G__12078__delegate(f, c1, c2, c3, colls);
});
G__12078.cljs$lang$arity$variadic = G__12078__delegate;
return G__12078;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____12082 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12082)
{var s__12083 = temp__3974__auto____12082;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12083),take.call(null,(n - 1),cljs.core.rest.call(null,s__12083)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__12089 = (function (n,coll){
while(true){
var s__12087 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12088 = (n > 0);
if(and__3822__auto____12088)
{return s__12087;
} else
{return and__3822__auto____12088;
}
})()))
{{
var G__12090 = (n - 1);
var G__12091 = cljs.core.rest.call(null,s__12087);
n = G__12090;
coll = G__12091;
continue;
}
} else
{return s__12087;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12089.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__12094 = cljs.core.seq.call(null,coll);
var lead__12095 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__12095)
{{
var G__12096 = cljs.core.next.call(null,s__12094);
var G__12097 = cljs.core.next.call(null,lead__12095);
s__12094 = G__12096;
lead__12095 = G__12097;
continue;
}
} else
{return s__12094;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12103 = (function (pred,coll){
while(true){
var s__12101 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12102 = s__12101;
if(and__3822__auto____12102)
{return pred.call(null,cljs.core.first.call(null,s__12101));
} else
{return and__3822__auto____12102;
}
})()))
{{
var G__12104 = pred;
var G__12105 = cljs.core.rest.call(null,s__12101);
pred = G__12104;
coll = G__12105;
continue;
}
} else
{return s__12101;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12103.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12108 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12108)
{var s__12109 = temp__3974__auto____12108;
return cljs.core.concat.call(null,s__12109,cycle.call(null,s__12109));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12114 = cljs.core.seq.call(null,c1);
var s2__12115 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12116 = s1__12114;
if(and__3822__auto____12116)
{return s2__12115;
} else
{return and__3822__auto____12116;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12114),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12115),interleave.call(null,cljs.core.rest.call(null,s1__12114),cljs.core.rest.call(null,s2__12115))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__12118__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12117 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12117))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12117),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12117)));
} else
{return null;
}
}),null));
};
var G__12118 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12118__delegate.call(this, c1, c2, colls);
};
G__12118.cljs$lang$maxFixedArity = 2;
G__12118.cljs$lang$applyTo = (function (arglist__12119){
var c1 = cljs.core.first(arglist__12119);
var c2 = cljs.core.first(cljs.core.next(arglist__12119));
var colls = cljs.core.rest(cljs.core.next(arglist__12119));
return G__12118__delegate(c1, c2, colls);
});
G__12118.cljs$lang$arity$variadic = G__12118__delegate;
return G__12118;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12129 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____12127 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12127)
{var coll__12128 = temp__3971__auto____12127;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12128),cat.call(null,cljs.core.rest.call(null,coll__12128),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__12129.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__12130__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12130 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12130__delegate.call(this, f, coll, colls);
};
G__12130.cljs$lang$maxFixedArity = 2;
G__12130.cljs$lang$applyTo = (function (arglist__12131){
var f = cljs.core.first(arglist__12131);
var coll = cljs.core.first(cljs.core.next(arglist__12131));
var colls = cljs.core.rest(cljs.core.next(arglist__12131));
return G__12130__delegate(f, coll, colls);
});
G__12130.cljs$lang$arity$variadic = G__12130__delegate;
return G__12130;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12141 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12141)
{var s__12142 = temp__3974__auto____12141;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12142))
{var c__12143 = cljs.core.chunk_first.call(null,s__12142);
var size__12144 = cljs.core.count.call(null,c__12143);
var b__12145 = cljs.core.chunk_buffer.call(null,size__12144);
var n__6036__auto____12146 = size__12144;
var i__12147 = 0;
while(true){
if((i__12147 < n__6036__auto____12146))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__12143,i__12147))))
{cljs.core.chunk_append.call(null,b__12145,cljs.core._nth.call(null,c__12143,i__12147));
} else
{}
{
var G__12150 = (i__12147 + 1);
i__12147 = G__12150;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12145),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__12142)));
} else
{var f__12148 = cljs.core.first.call(null,s__12142);
var r__12149 = cljs.core.rest.call(null,s__12142);
if(cljs.core.truth_(pred.call(null,f__12148)))
{return cljs.core.cons.call(null,f__12148,filter.call(null,pred,r__12149));
} else
{return filter.call(null,pred,r__12149);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12153 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__12153.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12151_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__12151_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__12157__12158 = to;
if(G__12157__12158)
{if((function (){var or__3824__auto____12159 = (G__12157__12158.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____12159)
{return or__3824__auto____12159;
} else
{return G__12157__12158.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__12157__12158.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12157__12158);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12157__12158);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__12160__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__12160 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12160__delegate.call(this, f, c1, c2, c3, colls);
};
G__12160.cljs$lang$maxFixedArity = 4;
G__12160.cljs$lang$applyTo = (function (arglist__12161){
var f = cljs.core.first(arglist__12161);
var c1 = cljs.core.first(cljs.core.next(arglist__12161));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12161)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12161))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12161))));
return G__12160__delegate(f, c1, c2, c3, colls);
});
G__12160.cljs$lang$arity$variadic = G__12160__delegate;
return G__12160;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12168 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12168)
{var s__12169 = temp__3974__auto____12168;
var p__12170 = cljs.core.take.call(null,n,s__12169);
if((n === cljs.core.count.call(null,p__12170)))
{return cljs.core.cons.call(null,p__12170,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12169)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12171 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12171)
{var s__12172 = temp__3974__auto____12171;
var p__12173 = cljs.core.take.call(null,n,s__12172);
if((n === cljs.core.count.call(null,p__12173)))
{return cljs.core.cons.call(null,p__12173,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12172)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12173,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__12178 = cljs.core.lookup_sentinel;
var m__12179 = m;
var ks__12180 = cljs.core.seq.call(null,ks);
while(true){
if(ks__12180)
{var m__12181 = cljs.core._lookup.call(null,m__12179,cljs.core.first.call(null,ks__12180),sentinel__12178);
if((sentinel__12178 === m__12181))
{return not_found;
} else
{{
var G__12182 = sentinel__12178;
var G__12183 = m__12181;
var G__12184 = cljs.core.next.call(null,ks__12180);
sentinel__12178 = G__12182;
m__12179 = G__12183;
ks__12180 = G__12184;
continue;
}
}
} else
{return m__12179;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12185,v){
var vec__12190__12191 = p__12185;
var k__12192 = cljs.core.nth.call(null,vec__12190__12191,0,null);
var ks__12193 = cljs.core.nthnext.call(null,vec__12190__12191,1);
if(cljs.core.truth_(ks__12193))
{return cljs.core.assoc.call(null,m,k__12192,assoc_in.call(null,cljs.core._lookup.call(null,m,k__12192,null),ks__12193,v));
} else
{return cljs.core.assoc.call(null,m,k__12192,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12194,f,args){
var vec__12199__12200 = p__12194;
var k__12201 = cljs.core.nth.call(null,vec__12199__12200,0,null);
var ks__12202 = cljs.core.nthnext.call(null,vec__12199__12200,1);
if(cljs.core.truth_(ks__12202))
{return cljs.core.assoc.call(null,m,k__12201,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__12201,null),ks__12202,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12201,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__12201,null),args));
}
};
var update_in = function (m,p__12194,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12194, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12203){
var m = cljs.core.first(arglist__12203);
var p__12194 = cljs.core.first(cljs.core.next(arglist__12203));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12203)));
return update_in__delegate(m, p__12194, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12206 = this;
var h__5690__auto____12207 = this__12206.__hash;
if(!((h__5690__auto____12207 == null)))
{return h__5690__auto____12207;
} else
{var h__5690__auto____12208 = cljs.core.hash_coll.call(null,coll);
this__12206.__hash = h__5690__auto____12208;
return h__5690__auto____12208;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12209 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12210 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12211 = this;
var new_array__12212 = this__12211.array.slice();
(new_array__12212[k] = v);
return (new cljs.core.Vector(this__12211.meta,new_array__12212,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__12243 = null;
var G__12243__2 = (function (this_sym12213,k){
var this__12215 = this;
var this_sym12213__12216 = this;
var coll__12217 = this_sym12213__12216;
return coll__12217.cljs$core$ILookup$_lookup$arity$2(coll__12217,k);
});
var G__12243__3 = (function (this_sym12214,k,not_found){
var this__12215 = this;
var this_sym12214__12218 = this;
var coll__12219 = this_sym12214__12218;
return coll__12219.cljs$core$ILookup$_lookup$arity$3(coll__12219,k,not_found);
});
G__12243 = function(this_sym12214,k,not_found){
switch(arguments.length){
case 2:
return G__12243__2.call(this,this_sym12214,k);
case 3:
return G__12243__3.call(this,this_sym12214,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12243;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym12204,args12205){
var this__12220 = this;
return this_sym12204.call.apply(this_sym12204,[this_sym12204].concat(args12205.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12221 = this;
var new_array__12222 = this__12221.array.slice();
new_array__12222.push(o);
return (new cljs.core.Vector(this__12221.meta,new_array__12222,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__12223 = this;
var this__12224 = this;
return cljs.core.pr_str.call(null,this__12224);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12225 = this;
return cljs.core.ci_reduce.call(null,this__12225.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12226 = this;
return cljs.core.ci_reduce.call(null,this__12226.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12227 = this;
if((this__12227.array.length > 0))
{var vector_seq__12228 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__12227.array.length))
{return cljs.core.cons.call(null,(this__12227.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__12228.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12229 = this;
return this__12229.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12230 = this;
var count__12231 = this__12230.array.length;
if((count__12231 > 0))
{return (this__12230.array[(count__12231 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12232 = this;
if((this__12232.array.length > 0))
{var new_array__12233 = this__12232.array.slice();
new_array__12233.pop();
return (new cljs.core.Vector(this__12232.meta,new_array__12233,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12234 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12235 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12236 = this;
return (new cljs.core.Vector(meta,this__12236.array,this__12236.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12237 = this;
return this__12237.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12238 = this;
if((function (){var and__3822__auto____12239 = (0 <= n);
if(and__3822__auto____12239)
{return (n < this__12238.array.length);
} else
{return and__3822__auto____12239;
}
})())
{return (this__12238.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12240 = this;
if((function (){var and__3822__auto____12241 = (0 <= n);
if(and__3822__auto____12241)
{return (n < this__12240.array.length);
} else
{return and__3822__auto____12241;
}
})())
{return (this__12240.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12242 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12242.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5811__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5811__auto__,writer__5812__auto__){
return cljs.core._write.call(null,writer__5812__auto__,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__12245 = pv.cnt;
if((cnt__12245 < 32))
{return 0;
} else
{return (((cnt__12245 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__12251 = level;
var ret__12252 = node;
while(true){
if((ll__12251 === 0))
{return ret__12252;
} else
{var embed__12253 = ret__12252;
var r__12254 = cljs.core.pv_fresh_node.call(null,edit);
var ___12255 = cljs.core.pv_aset.call(null,r__12254,0,embed__12253);
{
var G__12256 = (ll__12251 - 5);
var G__12257 = r__12254;
ll__12251 = G__12256;
ret__12252 = G__12257;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__12263 = cljs.core.pv_clone_node.call(null,parent);
var subidx__12264 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__12263,subidx__12264,tailnode);
return ret__12263;
} else
{var child__12265 = cljs.core.pv_aget.call(null,parent,subidx__12264);
if(!((child__12265 == null)))
{var node_to_insert__12266 = push_tail.call(null,pv,(level - 5),child__12265,tailnode);
cljs.core.pv_aset.call(null,ret__12263,subidx__12264,node_to_insert__12266);
return ret__12263;
} else
{var node_to_insert__12267 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__12263,subidx__12264,node_to_insert__12267);
return ret__12263;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____12271 = (0 <= i);
if(and__3822__auto____12271)
{return (i < pv.cnt);
} else
{return and__3822__auto____12271;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__12272 = pv.root;
var level__12273 = pv.shift;
while(true){
if((level__12273 > 0))
{{
var G__12274 = cljs.core.pv_aget.call(null,node__12272,((i >>> level__12273) & 31));
var G__12275 = (level__12273 - 5);
node__12272 = G__12274;
level__12273 = G__12275;
continue;
}
} else
{return node__12272.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__12278 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__12278,(i & 31),val);
return ret__12278;
} else
{var subidx__12279 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12278,subidx__12279,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12279),i,val));
return ret__12278;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__12285 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12286 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12285));
if((function (){var and__3822__auto____12287 = (new_child__12286 == null);
if(and__3822__auto____12287)
{return (subidx__12285 === 0);
} else
{return and__3822__auto____12287;
}
})())
{return null;
} else
{var ret__12288 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12288,subidx__12285,new_child__12286);
return ret__12288;
}
} else
{if((subidx__12285 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__12289 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12289,subidx__12285,null);
return ret__12289;
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12292 = this;
return (new cljs.core.TransientVector(this__12292.cnt,this__12292.shift,cljs.core.tv_editable_root.call(null,this__12292.root),cljs.core.tv_editable_tail.call(null,this__12292.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12293 = this;
var h__5690__auto____12294 = this__12293.__hash;
if(!((h__5690__auto____12294 == null)))
{return h__5690__auto____12294;
} else
{var h__5690__auto____12295 = cljs.core.hash_coll.call(null,coll);
this__12293.__hash = h__5690__auto____12295;
return h__5690__auto____12295;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12296 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12297 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12298 = this;
if((function (){var and__3822__auto____12299 = (0 <= k);
if(and__3822__auto____12299)
{return (k < this__12298.cnt);
} else
{return and__3822__auto____12299;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__12300 = this__12298.tail.slice();
(new_tail__12300[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__12298.meta,this__12298.cnt,this__12298.shift,this__12298.root,new_tail__12300,null));
} else
{return (new cljs.core.PersistentVector(this__12298.meta,this__12298.cnt,this__12298.shift,cljs.core.do_assoc.call(null,coll,this__12298.shift,this__12298.root,k,v),this__12298.tail,null));
}
} else
{if((k === this__12298.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__12298.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__12348 = null;
var G__12348__2 = (function (this_sym12301,k){
var this__12303 = this;
var this_sym12301__12304 = this;
var coll__12305 = this_sym12301__12304;
return coll__12305.cljs$core$ILookup$_lookup$arity$2(coll__12305,k);
});
var G__12348__3 = (function (this_sym12302,k,not_found){
var this__12303 = this;
var this_sym12302__12306 = this;
var coll__12307 = this_sym12302__12306;
return coll__12307.cljs$core$ILookup$_lookup$arity$3(coll__12307,k,not_found);
});
G__12348 = function(this_sym12302,k,not_found){
switch(arguments.length){
case 2:
return G__12348__2.call(this,this_sym12302,k);
case 3:
return G__12348__3.call(this,this_sym12302,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12348;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym12290,args12291){
var this__12308 = this;
return this_sym12290.call.apply(this_sym12290,[this_sym12290].concat(args12291.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__12309 = this;
var step_init__12310 = [0,init];
var i__12311 = 0;
while(true){
if((i__12311 < this__12309.cnt))
{var arr__12312 = cljs.core.array_for.call(null,v,i__12311);
var len__12313 = arr__12312.length;
var init__12317 = (function (){var j__12314 = 0;
var init__12315 = (step_init__12310[1]);
while(true){
if((j__12314 < len__12313))
{var init__12316 = f.call(null,init__12315,(j__12314 + i__12311),(arr__12312[j__12314]));
if(cljs.core.reduced_QMARK_.call(null,init__12316))
{return init__12316;
} else
{{
var G__12349 = (j__12314 + 1);
var G__12350 = init__12316;
j__12314 = G__12349;
init__12315 = G__12350;
continue;
}
}
} else
{(step_init__12310[0] = len__12313);
(step_init__12310[1] = init__12315);
return init__12315;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12317))
{return cljs.core.deref.call(null,init__12317);
} else
{{
var G__12351 = (i__12311 + (step_init__12310[0]));
i__12311 = G__12351;
continue;
}
}
} else
{return (step_init__12310[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12318 = this;
if(((this__12318.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__12319 = this__12318.tail.slice();
new_tail__12319.push(o);
return (new cljs.core.PersistentVector(this__12318.meta,(this__12318.cnt + 1),this__12318.shift,this__12318.root,new_tail__12319,null));
} else
{var root_overflow_QMARK___12320 = ((this__12318.cnt >>> 5) > (1 << this__12318.shift));
var new_shift__12321 = ((root_overflow_QMARK___12320)?(this__12318.shift + 5):this__12318.shift);
var new_root__12323 = ((root_overflow_QMARK___12320)?(function (){var n_r__12322 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__12322,0,this__12318.root);
cljs.core.pv_aset.call(null,n_r__12322,1,cljs.core.new_path.call(null,null,this__12318.shift,(new cljs.core.VectorNode(null,this__12318.tail))));
return n_r__12322;
})():cljs.core.push_tail.call(null,coll,this__12318.shift,this__12318.root,(new cljs.core.VectorNode(null,this__12318.tail))));
return (new cljs.core.PersistentVector(this__12318.meta,(this__12318.cnt + 1),new_shift__12321,new_root__12323,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__12324 = this;
if((this__12324.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__12324.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__12325 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__12326 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__12327 = this;
var this__12328 = this;
return cljs.core.pr_str.call(null,this__12328);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12329 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12330 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12331 = this;
if((this__12331.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12332 = this;
return this__12332.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12333 = this;
if((this__12333.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__12333.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12334 = this;
if((this__12334.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12334.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12334.meta);
} else
{if((1 < (this__12334.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__12334.meta,(this__12334.cnt - 1),this__12334.shift,this__12334.root,this__12334.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__12335 = cljs.core.array_for.call(null,coll,(this__12334.cnt - 2));
var nr__12336 = cljs.core.pop_tail.call(null,coll,this__12334.shift,this__12334.root);
var new_root__12337 = (((nr__12336 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__12336);
var cnt_1__12338 = (this__12334.cnt - 1);
if((function (){var and__3822__auto____12339 = (5 < this__12334.shift);
if(and__3822__auto____12339)
{return (cljs.core.pv_aget.call(null,new_root__12337,1) == null);
} else
{return and__3822__auto____12339;
}
})())
{return (new cljs.core.PersistentVector(this__12334.meta,cnt_1__12338,(this__12334.shift - 5),cljs.core.pv_aget.call(null,new_root__12337,0),new_tail__12335,null));
} else
{return (new cljs.core.PersistentVector(this__12334.meta,cnt_1__12338,this__12334.shift,new_root__12337,new_tail__12335,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12340 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12341 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12342 = this;
return (new cljs.core.PersistentVector(meta,this__12342.cnt,this__12342.shift,this__12342.root,this__12342.tail,this__12342.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12343 = this;
return this__12343.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12344 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12345 = this;
if((function (){var and__3822__auto____12346 = (0 <= n);
if(and__3822__auto____12346)
{return (n < this__12345.cnt);
} else
{return and__3822__auto____12346;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12347 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12347.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__12352 = xs.length;
var xs__12353 = (((no_clone === true))?xs:xs.slice());
if((l__12352 < 32))
{return (new cljs.core.PersistentVector(null,l__12352,5,cljs.core.PersistentVector.EMPTY_NODE,xs__12353,null));
} else
{var node__12354 = xs__12353.slice(0,32);
var v__12355 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__12354,null));
var i__12356 = 32;
var out__12357 = cljs.core._as_transient.call(null,v__12355);
while(true){
if((i__12356 < l__12352))
{{
var G__12358 = (i__12356 + 1);
var G__12359 = cljs.core.conj_BANG_.call(null,out__12357,(xs__12353[i__12356]));
i__12356 = G__12358;
out__12357 = G__12359;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12357);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12360){
var args = cljs.core.seq(arglist__12360);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12361 = this;
var h__5690__auto____12362 = this__12361.__hash;
if(!((h__5690__auto____12362 == null)))
{return h__5690__auto____12362;
} else
{var h__5690__auto____12363 = cljs.core.hash_coll.call(null,coll);
this__12361.__hash = h__5690__auto____12363;
return h__5690__auto____12363;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12364 = this;
if(((this__12364.off + 1) < this__12364.node.length))
{var s__12365 = cljs.core.chunked_seq.call(null,this__12364.vec,this__12364.node,this__12364.i,(this__12364.off + 1));
if((s__12365 == null))
{return null;
} else
{return s__12365;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12366 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12367 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12368 = this;
return (this__12368.node[this__12368.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12369 = this;
if(((this__12369.off + 1) < this__12369.node.length))
{var s__12370 = cljs.core.chunked_seq.call(null,this__12369.vec,this__12369.node,this__12369.i,(this__12369.off + 1));
if((s__12370 == null))
{return cljs.core.List.EMPTY;
} else
{return s__12370;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__12371 = this;
var l__12372 = this__12371.node.length;
var s__12373 = ((((this__12371.i + l__12372) < cljs.core._count.call(null,this__12371.vec)))?cljs.core.chunked_seq.call(null,this__12371.vec,(this__12371.i + l__12372),0):null);
if((s__12373 == null))
{return null;
} else
{return s__12373;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12374 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__12375 = this;
return cljs.core.chunked_seq.call(null,this__12375.vec,this__12375.node,this__12375.i,this__12375.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__12376 = this;
return this__12376.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12377 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12377.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__12378 = this;
return cljs.core.array_chunk.call(null,this__12378.node,this__12378.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__12379 = this;
var l__12380 = this__12379.node.length;
var s__12381 = ((((this__12379.i + l__12380) < cljs.core._count.call(null,this__12379.vec)))?cljs.core.chunked_seq.call(null,this__12379.vec,(this__12379.i + l__12380),0):null);
if((s__12381 == null))
{return cljs.core.List.EMPTY;
} else
{return s__12381;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12384 = this;
var h__5690__auto____12385 = this__12384.__hash;
if(!((h__5690__auto____12385 == null)))
{return h__5690__auto____12385;
} else
{var h__5690__auto____12386 = cljs.core.hash_coll.call(null,coll);
this__12384.__hash = h__5690__auto____12386;
return h__5690__auto____12386;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12387 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12388 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__12389 = this;
var v_pos__12390 = (this__12389.start + key);
return (new cljs.core.Subvec(this__12389.meta,cljs.core._assoc.call(null,this__12389.v,v_pos__12390,val),this__12389.start,((this__12389.end > (v_pos__12390 + 1)) ? this__12389.end : (v_pos__12390 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__12416 = null;
var G__12416__2 = (function (this_sym12391,k){
var this__12393 = this;
var this_sym12391__12394 = this;
var coll__12395 = this_sym12391__12394;
return coll__12395.cljs$core$ILookup$_lookup$arity$2(coll__12395,k);
});
var G__12416__3 = (function (this_sym12392,k,not_found){
var this__12393 = this;
var this_sym12392__12396 = this;
var coll__12397 = this_sym12392__12396;
return coll__12397.cljs$core$ILookup$_lookup$arity$3(coll__12397,k,not_found);
});
G__12416 = function(this_sym12392,k,not_found){
switch(arguments.length){
case 2:
return G__12416__2.call(this,this_sym12392,k);
case 3:
return G__12416__3.call(this,this_sym12392,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12416;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym12382,args12383){
var this__12398 = this;
return this_sym12382.call.apply(this_sym12382,[this_sym12382].concat(args12383.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12399 = this;
return (new cljs.core.Subvec(this__12399.meta,cljs.core._assoc_n.call(null,this__12399.v,this__12399.end,o),this__12399.start,(this__12399.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__12400 = this;
var this__12401 = this;
return cljs.core.pr_str.call(null,this__12401);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__12402 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__12403 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12404 = this;
var subvec_seq__12405 = (function subvec_seq(i){
if((i === this__12404.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12404.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__12405.call(null,this__12404.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12406 = this;
return (this__12406.end - this__12406.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12407 = this;
return cljs.core._nth.call(null,this__12407.v,(this__12407.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12408 = this;
if((this__12408.start === this__12408.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12408.meta,this__12408.v,this__12408.start,(this__12408.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12409 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12410 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12411 = this;
return (new cljs.core.Subvec(meta,this__12411.v,this__12411.start,this__12411.end,this__12411.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12412 = this;
return this__12412.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12413 = this;
return cljs.core._nth.call(null,this__12413.v,(this__12413.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12414 = this;
return cljs.core._nth.call(null,this__12414.v,(this__12414.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12415 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12415.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__12418 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__12418,0,tl.length);
return ret__12418;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__12422 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__12423 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12422,subidx__12423,(((level === 5))?tail_node:(function (){var child__12424 = cljs.core.pv_aget.call(null,ret__12422,subidx__12423);
if(!((child__12424 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__12424,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__12422;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__12429 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__12430 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12431 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__12429,subidx__12430));
if((function (){var and__3822__auto____12432 = (new_child__12431 == null);
if(and__3822__auto____12432)
{return (subidx__12430 === 0);
} else
{return and__3822__auto____12432;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__12429,subidx__12430,new_child__12431);
return node__12429;
}
} else
{if((subidx__12430 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__12429,subidx__12430,null);
return node__12429;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____12437 = (0 <= i);
if(and__3822__auto____12437)
{return (i < tv.cnt);
} else
{return and__3822__auto____12437;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__12438 = tv.root;
var node__12439 = root__12438;
var level__12440 = tv.shift;
while(true){
if((level__12440 > 0))
{{
var G__12441 = cljs.core.tv_ensure_editable.call(null,root__12438.edit,cljs.core.pv_aget.call(null,node__12439,((i >>> level__12440) & 31)));
var G__12442 = (level__12440 - 5);
node__12439 = G__12441;
level__12440 = G__12442;
continue;
}
} else
{return node__12439.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__12482 = null;
var G__12482__2 = (function (this_sym12445,k){
var this__12447 = this;
var this_sym12445__12448 = this;
var coll__12449 = this_sym12445__12448;
return coll__12449.cljs$core$ILookup$_lookup$arity$2(coll__12449,k);
});
var G__12482__3 = (function (this_sym12446,k,not_found){
var this__12447 = this;
var this_sym12446__12450 = this;
var coll__12451 = this_sym12446__12450;
return coll__12451.cljs$core$ILookup$_lookup$arity$3(coll__12451,k,not_found);
});
G__12482 = function(this_sym12446,k,not_found){
switch(arguments.length){
case 2:
return G__12482__2.call(this,this_sym12446,k);
case 3:
return G__12482__3.call(this,this_sym12446,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym12443,args12444){
var this__12452 = this;
return this_sym12443.call.apply(this_sym12443,[this_sym12443].concat(args12444.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12453 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12454 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12455 = this;
if(this__12455.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12456 = this;
if((function (){var and__3822__auto____12457 = (0 <= n);
if(and__3822__auto____12457)
{return (n < this__12456.cnt);
} else
{return and__3822__auto____12457;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12458 = this;
if(this__12458.root.edit)
{return this__12458.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__12459 = this;
if(this__12459.root.edit)
{if((function (){var and__3822__auto____12460 = (0 <= n);
if(and__3822__auto____12460)
{return (n < this__12459.cnt);
} else
{return and__3822__auto____12460;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__12459.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__12465 = (function go(level,node){
var node__12463 = cljs.core.tv_ensure_editable.call(null,this__12459.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__12463,(n & 31),val);
return node__12463;
} else
{var subidx__12464 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__12463,subidx__12464,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__12463,subidx__12464)));
return node__12463;
}
}).call(null,this__12459.shift,this__12459.root);
this__12459.root = new_root__12465;
return tcoll;
}
} else
{if((n === this__12459.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__12459.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__12466 = this;
if(this__12466.root.edit)
{if((this__12466.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12466.cnt))
{this__12466.cnt = 0;
return tcoll;
} else
{if((((this__12466.cnt - 1) & 31) > 0))
{this__12466.cnt = (this__12466.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__12467 = cljs.core.editable_array_for.call(null,tcoll,(this__12466.cnt - 2));
var new_root__12469 = (function (){var nr__12468 = cljs.core.tv_pop_tail.call(null,tcoll,this__12466.shift,this__12466.root);
if(!((nr__12468 == null)))
{return nr__12468;
} else
{return (new cljs.core.VectorNode(this__12466.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____12470 = (5 < this__12466.shift);
if(and__3822__auto____12470)
{return (cljs.core.pv_aget.call(null,new_root__12469,1) == null);
} else
{return and__3822__auto____12470;
}
})())
{var new_root__12471 = cljs.core.tv_ensure_editable.call(null,this__12466.root.edit,cljs.core.pv_aget.call(null,new_root__12469,0));
this__12466.root = new_root__12471;
this__12466.shift = (this__12466.shift - 5);
this__12466.cnt = (this__12466.cnt - 1);
this__12466.tail = new_tail__12467;
return tcoll;
} else
{this__12466.root = new_root__12469;
this__12466.cnt = (this__12466.cnt - 1);
this__12466.tail = new_tail__12467;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12472 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12473 = this;
if(this__12473.root.edit)
{if(((this__12473.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__12473.tail[(this__12473.cnt & 31)] = o);
this__12473.cnt = (this__12473.cnt + 1);
return tcoll;
} else
{var tail_node__12474 = (new cljs.core.VectorNode(this__12473.root.edit,this__12473.tail));
var new_tail__12475 = cljs.core.make_array.call(null,32);
(new_tail__12475[0] = o);
this__12473.tail = new_tail__12475;
if(((this__12473.cnt >>> 5) > (1 << this__12473.shift)))
{var new_root_array__12476 = cljs.core.make_array.call(null,32);
var new_shift__12477 = (this__12473.shift + 5);
(new_root_array__12476[0] = this__12473.root);
(new_root_array__12476[1] = cljs.core.new_path.call(null,this__12473.root.edit,this__12473.shift,tail_node__12474));
this__12473.root = (new cljs.core.VectorNode(this__12473.root.edit,new_root_array__12476));
this__12473.shift = new_shift__12477;
this__12473.cnt = (this__12473.cnt + 1);
return tcoll;
} else
{var new_root__12478 = cljs.core.tv_push_tail.call(null,tcoll,this__12473.shift,this__12473.root,tail_node__12474);
this__12473.root = new_root__12478;
this__12473.cnt = (this__12473.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12479 = this;
if(this__12479.root.edit)
{this__12479.root.edit = null;
var len__12480 = (this__12479.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__12481 = cljs.core.make_array.call(null,len__12480);
cljs.core.array_copy.call(null,this__12479.tail,0,trimmed_tail__12481,0,len__12480);
return (new cljs.core.PersistentVector(null,this__12479.cnt,this__12479.shift,this__12479.root,trimmed_tail__12481,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12483 = this;
var h__5690__auto____12484 = this__12483.__hash;
if(!((h__5690__auto____12484 == null)))
{return h__5690__auto____12484;
} else
{var h__5690__auto____12485 = cljs.core.hash_coll.call(null,coll);
this__12483.__hash = h__5690__auto____12485;
return h__5690__auto____12485;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12486 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__12487 = this;
var this__12488 = this;
return cljs.core.pr_str.call(null,this__12488);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12489 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12490 = this;
return cljs.core._first.call(null,this__12490.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12491 = this;
var temp__3971__auto____12492 = cljs.core.next.call(null,this__12491.front);
if(temp__3971__auto____12492)
{var f1__12493 = temp__3971__auto____12492;
return (new cljs.core.PersistentQueueSeq(this__12491.meta,f1__12493,this__12491.rear,null));
} else
{if((this__12491.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12491.meta,this__12491.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12494 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12495 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12495.front,this__12495.rear,this__12495.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12496 = this;
return this__12496.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12497 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12497.meta);
});
cljs.core.PersistentQueueSeq;

goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12498 = this;
var h__5690__auto____12499 = this__12498.__hash;
if(!((h__5690__auto____12499 == null)))
{return h__5690__auto____12499;
} else
{var h__5690__auto____12500 = cljs.core.hash_coll.call(null,coll);
this__12498.__hash = h__5690__auto____12500;
return h__5690__auto____12500;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12501 = this;
if(cljs.core.truth_(this__12501.front))
{return (new cljs.core.PersistentQueue(this__12501.meta,(this__12501.count + 1),this__12501.front,cljs.core.conj.call(null,(function (){var or__3824__auto____12502 = this__12501.rear;
if(cljs.core.truth_(or__3824__auto____12502))
{return or__3824__auto____12502;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__12501.meta,(this__12501.count + 1),cljs.core.conj.call(null,this__12501.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__12503 = this;
var this__12504 = this;
return cljs.core.pr_str.call(null,this__12504);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12505 = this;
var rear__12506 = cljs.core.seq.call(null,this__12505.rear);
if(cljs.core.truth_((function (){var or__3824__auto____12507 = this__12505.front;
if(cljs.core.truth_(or__3824__auto____12507))
{return or__3824__auto____12507;
} else
{return rear__12506;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12505.front,cljs.core.seq.call(null,rear__12506),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12508 = this;
return this__12508.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12509 = this;
return cljs.core._first.call(null,this__12509.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12510 = this;
if(cljs.core.truth_(this__12510.front))
{var temp__3971__auto____12511 = cljs.core.next.call(null,this__12510.front);
if(temp__3971__auto____12511)
{var f1__12512 = temp__3971__auto____12511;
return (new cljs.core.PersistentQueue(this__12510.meta,(this__12510.count - 1),f1__12512,this__12510.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__12510.meta,(this__12510.count - 1),cljs.core.seq.call(null,this__12510.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12513 = this;
return cljs.core.first.call(null,this__12513.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12514 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12515 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12516 = this;
return (new cljs.core.PersistentQueue(meta,this__12516.count,this__12516.front,this__12516.rear,this__12516.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12517 = this;
return this__12517.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12518 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12519 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12522 = array.length;
var i__12523 = 0;
while(true){
if((i__12523 < len__12522))
{if((k === (array[i__12523])))
{return i__12523;
} else
{{
var G__12524 = (i__12523 + incr);
i__12523 = G__12524;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__12527 = cljs.core.hash.call(null,a);
var b__12528 = cljs.core.hash.call(null,b);
if((a__12527 < b__12528))
{return -1;
} else
{if((a__12527 > b__12528))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__12536 = m.keys;
var len__12537 = ks__12536.length;
var so__12538 = m.strobj;
var out__12539 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__12540 = 0;
var out__12541 = cljs.core.transient$.call(null,out__12539);
while(true){
if((i__12540 < len__12537))
{var k__12542 = (ks__12536[i__12540]);
{
var G__12543 = (i__12540 + 1);
var G__12544 = cljs.core.assoc_BANG_.call(null,out__12541,k__12542,(so__12538[k__12542]));
i__12540 = G__12543;
out__12541 = G__12544;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__12541,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__12550 = {};
var l__12551 = ks.length;
var i__12552 = 0;
while(true){
if((i__12552 < l__12551))
{var k__12553 = (ks[i__12552]);
(new_obj__12550[k__12553] = (obj[k__12553]));
{
var G__12554 = (i__12552 + 1);
i__12552 = G__12554;
continue;
}
} else
{}
break;
}
return new_obj__12550;
});

goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12557 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12558 = this;
var h__5690__auto____12559 = this__12558.__hash;
if(!((h__5690__auto____12559 == null)))
{return h__5690__auto____12559;
} else
{var h__5690__auto____12560 = cljs.core.hash_imap.call(null,coll);
this__12558.__hash = h__5690__auto____12560;
return h__5690__auto____12560;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12561 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12562 = this;
if((function (){var and__3822__auto____12563 = goog.isString(k);
if(and__3822__auto____12563)
{return !((cljs.core.scan_array.call(null,1,k,this__12562.keys) == null));
} else
{return and__3822__auto____12563;
}
})())
{return (this__12562.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12564 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____12565 = (this__12564.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____12565)
{return or__3824__auto____12565;
} else
{return (this__12564.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__12564.keys) == null)))
{var new_strobj__12566 = cljs.core.obj_clone.call(null,this__12564.strobj,this__12564.keys);
(new_strobj__12566[k] = v);
return (new cljs.core.ObjMap(this__12564.meta,this__12564.keys,new_strobj__12566,(this__12564.update_count + 1),null));
} else
{var new_strobj__12567 = cljs.core.obj_clone.call(null,this__12564.strobj,this__12564.keys);
var new_keys__12568 = this__12564.keys.slice();
(new_strobj__12567[k] = v);
new_keys__12568.push(k);
return (new cljs.core.ObjMap(this__12564.meta,new_keys__12568,new_strobj__12567,(this__12564.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12569 = this;
if((function (){var and__3822__auto____12570 = goog.isString(k);
if(and__3822__auto____12570)
{return !((cljs.core.scan_array.call(null,1,k,this__12569.keys) == null));
} else
{return and__3822__auto____12570;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__12592 = null;
var G__12592__2 = (function (this_sym12571,k){
var this__12573 = this;
var this_sym12571__12574 = this;
var coll__12575 = this_sym12571__12574;
return coll__12575.cljs$core$ILookup$_lookup$arity$2(coll__12575,k);
});
var G__12592__3 = (function (this_sym12572,k,not_found){
var this__12573 = this;
var this_sym12572__12576 = this;
var coll__12577 = this_sym12572__12576;
return coll__12577.cljs$core$ILookup$_lookup$arity$3(coll__12577,k,not_found);
});
G__12592 = function(this_sym12572,k,not_found){
switch(arguments.length){
case 2:
return G__12592__2.call(this,this_sym12572,k);
case 3:
return G__12592__3.call(this,this_sym12572,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12592;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym12555,args12556){
var this__12578 = this;
return this_sym12555.call.apply(this_sym12555,[this_sym12555].concat(args12556.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12579 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__12580 = this;
var this__12581 = this;
return cljs.core.pr_str.call(null,this__12581);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12582 = this;
if((this__12582.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__12545_SHARP_){
return cljs.core.vector.call(null,p1__12545_SHARP_,(this__12582.strobj[p1__12545_SHARP_]));
}),this__12582.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12583 = this;
return this__12583.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12584 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12585 = this;
return (new cljs.core.ObjMap(meta,this__12585.keys,this__12585.strobj,this__12585.update_count,this__12585.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12586 = this;
return this__12586.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12587 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12587.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12588 = this;
if((function (){var and__3822__auto____12589 = goog.isString(k);
if(and__3822__auto____12589)
{return !((cljs.core.scan_array.call(null,1,k,this__12588.keys) == null));
} else
{return and__3822__auto____12589;
}
})())
{var new_keys__12590 = this__12588.keys.slice();
var new_strobj__12591 = cljs.core.obj_clone.call(null,this__12588.strobj,this__12588.keys);
new_keys__12590.splice(cljs.core.scan_array.call(null,1,k,new_keys__12590),1);
cljs.core.js_delete.call(null,new_strobj__12591,k);
return (new cljs.core.ObjMap(this__12588.meta,new_keys__12590,new_strobj__12591,(this__12588.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12596 = this;
var h__5690__auto____12597 = this__12596.__hash;
if(!((h__5690__auto____12597 == null)))
{return h__5690__auto____12597;
} else
{var h__5690__auto____12598 = cljs.core.hash_imap.call(null,coll);
this__12596.__hash = h__5690__auto____12598;
return h__5690__auto____12598;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12599 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12600 = this;
var bucket__12601 = (this__12600.hashobj[cljs.core.hash.call(null,k)]);
var i__12602 = (cljs.core.truth_(bucket__12601)?cljs.core.scan_array.call(null,2,k,bucket__12601):null);
if(cljs.core.truth_(i__12602))
{return (bucket__12601[(i__12602 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12603 = this;
var h__12604 = cljs.core.hash.call(null,k);
var bucket__12605 = (this__12603.hashobj[h__12604]);
if(cljs.core.truth_(bucket__12605))
{var new_bucket__12606 = bucket__12605.slice();
var new_hashobj__12607 = goog.object.clone(this__12603.hashobj);
(new_hashobj__12607[h__12604] = new_bucket__12606);
var temp__3971__auto____12608 = cljs.core.scan_array.call(null,2,k,new_bucket__12606);
if(cljs.core.truth_(temp__3971__auto____12608))
{var i__12609 = temp__3971__auto____12608;
(new_bucket__12606[(i__12609 + 1)] = v);
return (new cljs.core.HashMap(this__12603.meta,this__12603.count,new_hashobj__12607,null));
} else
{new_bucket__12606.push(k,v);
return (new cljs.core.HashMap(this__12603.meta,(this__12603.count + 1),new_hashobj__12607,null));
}
} else
{var new_hashobj__12610 = goog.object.clone(this__12603.hashobj);
(new_hashobj__12610[h__12604] = [k,v]);
return (new cljs.core.HashMap(this__12603.meta,(this__12603.count + 1),new_hashobj__12610,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12611 = this;
var bucket__12612 = (this__12611.hashobj[cljs.core.hash.call(null,k)]);
var i__12613 = (cljs.core.truth_(bucket__12612)?cljs.core.scan_array.call(null,2,k,bucket__12612):null);
if(cljs.core.truth_(i__12613))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__12638 = null;
var G__12638__2 = (function (this_sym12614,k){
var this__12616 = this;
var this_sym12614__12617 = this;
var coll__12618 = this_sym12614__12617;
return coll__12618.cljs$core$ILookup$_lookup$arity$2(coll__12618,k);
});
var G__12638__3 = (function (this_sym12615,k,not_found){
var this__12616 = this;
var this_sym12615__12619 = this;
var coll__12620 = this_sym12615__12619;
return coll__12620.cljs$core$ILookup$_lookup$arity$3(coll__12620,k,not_found);
});
G__12638 = function(this_sym12615,k,not_found){
switch(arguments.length){
case 2:
return G__12638__2.call(this,this_sym12615,k);
case 3:
return G__12638__3.call(this,this_sym12615,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12638;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym12594,args12595){
var this__12621 = this;
return this_sym12594.call.apply(this_sym12594,[this_sym12594].concat(args12595.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12622 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__12623 = this;
var this__12624 = this;
return cljs.core.pr_str.call(null,this__12624);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12625 = this;
if((this__12625.count > 0))
{var hashes__12626 = cljs.core.js_keys.call(null,this__12625.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__12593_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12625.hashobj[p1__12593_SHARP_])));
}),hashes__12626);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12627 = this;
return this__12627.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12628 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12629 = this;
return (new cljs.core.HashMap(meta,this__12629.count,this__12629.hashobj,this__12629.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12630 = this;
return this__12630.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12631 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12631.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12632 = this;
var h__12633 = cljs.core.hash.call(null,k);
var bucket__12634 = (this__12632.hashobj[h__12633]);
var i__12635 = (cljs.core.truth_(bucket__12634)?cljs.core.scan_array.call(null,2,k,bucket__12634):null);
if(cljs.core.not.call(null,i__12635))
{return coll;
} else
{var new_hashobj__12636 = goog.object.clone(this__12632.hashobj);
if((3 > bucket__12634.length))
{cljs.core.js_delete.call(null,new_hashobj__12636,h__12633);
} else
{var new_bucket__12637 = bucket__12634.slice();
new_bucket__12637.splice(i__12635,2);
(new_hashobj__12636[h__12633] = new_bucket__12637);
}
return (new cljs.core.HashMap(this__12632.meta,(this__12632.count - 1),new_hashobj__12636,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12639 = ks.length;
var i__12640 = 0;
var out__12641 = cljs.core.HashMap.EMPTY;
while(true){
if((i__12640 < len__12639))
{{
var G__12642 = (i__12640 + 1);
var G__12643 = cljs.core.assoc.call(null,out__12641,(ks[i__12640]),(vs[i__12640]));
i__12640 = G__12642;
out__12641 = G__12643;
continue;
}
} else
{return out__12641;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__12647 = m.arr;
var len__12648 = arr__12647.length;
var i__12649 = 0;
while(true){
if((len__12648 <= i__12649))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__12647[i__12649]),k))
{return i__12649;
} else
{if("\uFDD0'else")
{{
var G__12650 = (i__12649 + 2);
i__12649 = G__12650;
continue;
}
} else
{return null;
}
}
}
break;
}
});

goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12653 = this;
return (new cljs.core.TransientArrayMap({},this__12653.arr.length,this__12653.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12654 = this;
var h__5690__auto____12655 = this__12654.__hash;
if(!((h__5690__auto____12655 == null)))
{return h__5690__auto____12655;
} else
{var h__5690__auto____12656 = cljs.core.hash_imap.call(null,coll);
this__12654.__hash = h__5690__auto____12656;
return h__5690__auto____12656;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12657 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12658 = this;
var idx__12659 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12659 === -1))
{return not_found;
} else
{return (this__12658.arr[(idx__12659 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12660 = this;
var idx__12661 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12661 === -1))
{if((this__12660.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__12660.meta,(this__12660.cnt + 1),(function (){var G__12662__12663 = this__12660.arr.slice();
G__12662__12663.push(k);
G__12662__12663.push(v);
return G__12662__12663;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__12660.arr[(idx__12661 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__12660.meta,this__12660.cnt,(function (){var G__12664__12665 = this__12660.arr.slice();
(G__12664__12665[(idx__12661 + 1)] = v);
return G__12664__12665;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12666 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__12698 = null;
var G__12698__2 = (function (this_sym12667,k){
var this__12669 = this;
var this_sym12667__12670 = this;
var coll__12671 = this_sym12667__12670;
return coll__12671.cljs$core$ILookup$_lookup$arity$2(coll__12671,k);
});
var G__12698__3 = (function (this_sym12668,k,not_found){
var this__12669 = this;
var this_sym12668__12672 = this;
var coll__12673 = this_sym12668__12672;
return coll__12673.cljs$core$ILookup$_lookup$arity$3(coll__12673,k,not_found);
});
G__12698 = function(this_sym12668,k,not_found){
switch(arguments.length){
case 2:
return G__12698__2.call(this,this_sym12668,k);
case 3:
return G__12698__3.call(this,this_sym12668,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12698;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym12651,args12652){
var this__12674 = this;
return this_sym12651.call.apply(this_sym12651,[this_sym12651].concat(args12652.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12675 = this;
var len__12676 = this__12675.arr.length;
var i__12677 = 0;
var init__12678 = init;
while(true){
if((i__12677 < len__12676))
{var init__12679 = f.call(null,init__12678,(this__12675.arr[i__12677]),(this__12675.arr[(i__12677 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__12679))
{return cljs.core.deref.call(null,init__12679);
} else
{{
var G__12699 = (i__12677 + 2);
var G__12700 = init__12679;
i__12677 = G__12699;
init__12678 = G__12700;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12680 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__12681 = this;
var this__12682 = this;
return cljs.core.pr_str.call(null,this__12682);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12683 = this;
if((this__12683.cnt > 0))
{var len__12684 = this__12683.arr.length;
var array_map_seq__12685 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__12684))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__12683.arr[i]),(this__12683.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__12685.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12686 = this;
return this__12686.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12687 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12688 = this;
return (new cljs.core.PersistentArrayMap(meta,this__12688.cnt,this__12688.arr,this__12688.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12689 = this;
return this__12689.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12690 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12690.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12691 = this;
var idx__12692 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12692 >= 0))
{var len__12693 = this__12691.arr.length;
var new_len__12694 = (len__12693 - 2);
if((new_len__12694 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__12695 = cljs.core.make_array.call(null,new_len__12694);
var s__12696 = 0;
var d__12697 = 0;
while(true){
if((s__12696 >= len__12693))
{return (new cljs.core.PersistentArrayMap(this__12691.meta,(this__12691.cnt - 1),new_arr__12695,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__12691.arr[s__12696])))
{{
var G__12701 = (s__12696 + 2);
var G__12702 = d__12697;
s__12696 = G__12701;
d__12697 = G__12702;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__12695[d__12697] = (this__12691.arr[s__12696]));
(new_arr__12695[(d__12697 + 1)] = (this__12691.arr[(s__12696 + 1)]));
{
var G__12703 = (s__12696 + 2);
var G__12704 = (d__12697 + 2);
s__12696 = G__12703;
d__12697 = G__12704;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__12705 = cljs.core.count.call(null,ks);
var i__12706 = 0;
var out__12707 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__12706 < len__12705))
{{
var G__12708 = (i__12706 + 1);
var G__12709 = cljs.core.assoc_BANG_.call(null,out__12707,(ks[i__12706]),(vs[i__12706]));
i__12706 = G__12708;
out__12707 = G__12709;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12707);
}
break;
}
});

goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12710 = this;
if(cljs.core.truth_(this__12710.editable_QMARK_))
{var idx__12711 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12711 >= 0))
{(this__12710.arr[idx__12711] = (this__12710.arr[(this__12710.len - 2)]));
(this__12710.arr[(idx__12711 + 1)] = (this__12710.arr[(this__12710.len - 1)]));
var G__12712__12713 = this__12710.arr;
G__12712__12713.pop();
G__12712__12713.pop();
G__12712__12713;
this__12710.len = (this__12710.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12714 = this;
if(cljs.core.truth_(this__12714.editable_QMARK_))
{var idx__12715 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12715 === -1))
{if(((this__12714.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__12714.len = (this__12714.len + 2);
this__12714.arr.push(key);
this__12714.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__12714.len,this__12714.arr),key,val);
}
} else
{if((val === (this__12714.arr[(idx__12715 + 1)])))
{return tcoll;
} else
{(this__12714.arr[(idx__12715 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12716 = this;
if(cljs.core.truth_(this__12716.editable_QMARK_))
{if((function (){var G__12717__12718 = o;
if(G__12717__12718)
{if((function (){var or__3824__auto____12719 = (G__12717__12718.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____12719)
{return or__3824__auto____12719;
} else
{return G__12717__12718.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12717__12718.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12717__12718);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12717__12718);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__12720 = cljs.core.seq.call(null,o);
var tcoll__12721 = tcoll;
while(true){
var temp__3971__auto____12722 = cljs.core.first.call(null,es__12720);
if(cljs.core.truth_(temp__3971__auto____12722))
{var e__12723 = temp__3971__auto____12722;
{
var G__12729 = cljs.core.next.call(null,es__12720);
var G__12730 = tcoll__12721.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__12721,cljs.core.key.call(null,e__12723),cljs.core.val.call(null,e__12723));
es__12720 = G__12729;
tcoll__12721 = G__12730;
continue;
}
} else
{return tcoll__12721;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12724 = this;
if(cljs.core.truth_(this__12724.editable_QMARK_))
{this__12724.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__12724.len,2),this__12724.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12725 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12726 = this;
if(cljs.core.truth_(this__12726.editable_QMARK_))
{var idx__12727 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__12727 === -1))
{return not_found;
} else
{return (this__12726.arr[(idx__12727 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__12728 = this;
if(cljs.core.truth_(this__12728.editable_QMARK_))
{return cljs.core.quot.call(null,this__12728.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__12733 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__12734 = 0;
while(true){
if((i__12734 < len))
{{
var G__12735 = cljs.core.assoc_BANG_.call(null,out__12733,(arr[i__12734]),(arr[(i__12734 + 1)]));
var G__12736 = (i__12734 + 2);
out__12733 = G__12735;
i__12734 = G__12736;
continue;
}
} else
{return out__12733;
}
break;
}
});

goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5811__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5811__auto__,writer__5812__auto__){
return cljs.core._write.call(null,writer__5812__auto__,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__12741__12742 = arr.slice();
(G__12741__12742[i] = a);
return G__12741__12742;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__12743__12744 = arr.slice();
(G__12743__12744[i] = a);
(G__12743__12744[j] = b);
return G__12743__12744;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__12746 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__12746,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__12746,(2 * i),(new_arr__12746.length - (2 * i)));
return new_arr__12746;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__12749 = inode.ensure_editable(edit);
(editable__12749.arr[i] = a);
return editable__12749;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__12750 = inode.ensure_editable(edit);
(editable__12750.arr[i] = a);
(editable__12750.arr[j] = b);
return editable__12750;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__12757 = arr.length;
var i__12758 = 0;
var init__12759 = init;
while(true){
if((i__12758 < len__12757))
{var init__12762 = (function (){var k__12760 = (arr[i__12758]);
if(!((k__12760 == null)))
{return f.call(null,init__12759,k__12760,(arr[(i__12758 + 1)]));
} else
{var node__12761 = (arr[(i__12758 + 1)]);
if(!((node__12761 == null)))
{return node__12761.kv_reduce(f,init__12759);
} else
{return init__12759;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12762))
{return cljs.core.deref.call(null,init__12762);
} else
{{
var G__12763 = (i__12758 + 2);
var G__12764 = init__12762;
i__12758 = G__12763;
init__12759 = G__12764;
continue;
}
}
} else
{return init__12759;
}
break;
}
});

goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__12765 = this;
var inode__12766 = this;
if((this__12765.bitmap === bit))
{return null;
} else
{var editable__12767 = inode__12766.ensure_editable(e);
var earr__12768 = editable__12767.arr;
var len__12769 = earr__12768.length;
editable__12767.bitmap = (bit ^ editable__12767.bitmap);
cljs.core.array_copy.call(null,earr__12768,(2 * (i + 1)),earr__12768,(2 * i),(len__12769 - (2 * (i + 1))));
(earr__12768[(len__12769 - 2)] = null);
(earr__12768[(len__12769 - 1)] = null);
return editable__12767;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12770 = this;
var inode__12771 = this;
var bit__12772 = (1 << ((hash >>> shift) & 0x01f));
var idx__12773 = cljs.core.bitmap_indexed_node_index.call(null,this__12770.bitmap,bit__12772);
if(((this__12770.bitmap & bit__12772) === 0))
{var n__12774 = cljs.core.bit_count.call(null,this__12770.bitmap);
if(((2 * n__12774) < this__12770.arr.length))
{var editable__12775 = inode__12771.ensure_editable(edit);
var earr__12776 = editable__12775.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__12776,(2 * idx__12773),earr__12776,(2 * (idx__12773 + 1)),(2 * (n__12774 - idx__12773)));
(earr__12776[(2 * idx__12773)] = key);
(earr__12776[((2 * idx__12773) + 1)] = val);
editable__12775.bitmap = (editable__12775.bitmap | bit__12772);
return editable__12775;
} else
{if((n__12774 >= 16))
{var nodes__12777 = cljs.core.make_array.call(null,32);
var jdx__12778 = ((hash >>> shift) & 0x01f);
(nodes__12777[jdx__12778] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12779 = 0;
var j__12780 = 0;
while(true){
if((i__12779 < 32))
{if((((this__12770.bitmap >>> i__12779) & 1) === 0))
{{
var G__12833 = (i__12779 + 1);
var G__12834 = j__12780;
i__12779 = G__12833;
j__12780 = G__12834;
continue;
}
} else
{(nodes__12777[i__12779] = ((!(((this__12770.arr[j__12780]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__12770.arr[j__12780])),(this__12770.arr[j__12780]),(this__12770.arr[(j__12780 + 1)]),added_leaf_QMARK_):(this__12770.arr[(j__12780 + 1)])));
{
var G__12835 = (i__12779 + 1);
var G__12836 = (j__12780 + 2);
i__12779 = G__12835;
j__12780 = G__12836;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__12774 + 1),nodes__12777));
} else
{if("\uFDD0'else")
{var new_arr__12781 = cljs.core.make_array.call(null,(2 * (n__12774 + 4)));
cljs.core.array_copy.call(null,this__12770.arr,0,new_arr__12781,0,(2 * idx__12773));
(new_arr__12781[(2 * idx__12773)] = key);
(new_arr__12781[((2 * idx__12773) + 1)] = val);
cljs.core.array_copy.call(null,this__12770.arr,(2 * idx__12773),new_arr__12781,(2 * (idx__12773 + 1)),(2 * (n__12774 - idx__12773)));
added_leaf_QMARK_.val = true;
var editable__12782 = inode__12771.ensure_editable(edit);
editable__12782.arr = new_arr__12781;
editable__12782.bitmap = (editable__12782.bitmap | bit__12772);
return editable__12782;
} else
{return null;
}
}
}
} else
{var key_or_nil__12783 = (this__12770.arr[(2 * idx__12773)]);
var val_or_node__12784 = (this__12770.arr[((2 * idx__12773) + 1)]);
if((key_or_nil__12783 == null))
{var n__12785 = val_or_node__12784.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12785 === val_or_node__12784))
{return inode__12771;
} else
{return cljs.core.edit_and_set.call(null,inode__12771,edit,((2 * idx__12773) + 1),n__12785);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12783))
{if((val === val_or_node__12784))
{return inode__12771;
} else
{return cljs.core.edit_and_set.call(null,inode__12771,edit,((2 * idx__12773) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__12771,edit,(2 * idx__12773),null,((2 * idx__12773) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__12783,val_or_node__12784,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__12786 = this;
var inode__12787 = this;
return cljs.core.create_inode_seq.call(null,this__12786.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12788 = this;
var inode__12789 = this;
var bit__12790 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12788.bitmap & bit__12790) === 0))
{return inode__12789;
} else
{var idx__12791 = cljs.core.bitmap_indexed_node_index.call(null,this__12788.bitmap,bit__12790);
var key_or_nil__12792 = (this__12788.arr[(2 * idx__12791)]);
var val_or_node__12793 = (this__12788.arr[((2 * idx__12791) + 1)]);
if((key_or_nil__12792 == null))
{var n__12794 = val_or_node__12793.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12794 === val_or_node__12793))
{return inode__12789;
} else
{if(!((n__12794 == null)))
{return cljs.core.edit_and_set.call(null,inode__12789,edit,((2 * idx__12791) + 1),n__12794);
} else
{if((this__12788.bitmap === bit__12790))
{return null;
} else
{if("\uFDD0'else")
{return inode__12789.edit_and_remove_pair(edit,bit__12790,idx__12791);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12792))
{(removed_leaf_QMARK_[0] = true);
return inode__12789.edit_and_remove_pair(edit,bit__12790,idx__12791);
} else
{if("\uFDD0'else")
{return inode__12789;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__12795 = this;
var inode__12796 = this;
if((e === this__12795.edit))
{return inode__12796;
} else
{var n__12797 = cljs.core.bit_count.call(null,this__12795.bitmap);
var new_arr__12798 = cljs.core.make_array.call(null,(((n__12797 < 0))?4:(2 * (n__12797 + 1))));
cljs.core.array_copy.call(null,this__12795.arr,0,new_arr__12798,0,(2 * n__12797));
return (new cljs.core.BitmapIndexedNode(e,this__12795.bitmap,new_arr__12798));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__12799 = this;
var inode__12800 = this;
return cljs.core.inode_kv_reduce.call(null,this__12799.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12801 = this;
var inode__12802 = this;
var bit__12803 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12801.bitmap & bit__12803) === 0))
{return not_found;
} else
{var idx__12804 = cljs.core.bitmap_indexed_node_index.call(null,this__12801.bitmap,bit__12803);
var key_or_nil__12805 = (this__12801.arr[(2 * idx__12804)]);
var val_or_node__12806 = (this__12801.arr[((2 * idx__12804) + 1)]);
if((key_or_nil__12805 == null))
{return val_or_node__12806.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12805))
{return cljs.core.PersistentVector.fromArray([key_or_nil__12805,val_or_node__12806], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__12807 = this;
var inode__12808 = this;
var bit__12809 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12807.bitmap & bit__12809) === 0))
{return inode__12808;
} else
{var idx__12810 = cljs.core.bitmap_indexed_node_index.call(null,this__12807.bitmap,bit__12809);
var key_or_nil__12811 = (this__12807.arr[(2 * idx__12810)]);
var val_or_node__12812 = (this__12807.arr[((2 * idx__12810) + 1)]);
if((key_or_nil__12811 == null))
{var n__12813 = val_or_node__12812.inode_without((shift + 5),hash,key);
if((n__12813 === val_or_node__12812))
{return inode__12808;
} else
{if(!((n__12813 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__12807.bitmap,cljs.core.clone_and_set.call(null,this__12807.arr,((2 * idx__12810) + 1),n__12813)));
} else
{if((this__12807.bitmap === bit__12809))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__12807.bitmap ^ bit__12809),cljs.core.remove_pair.call(null,this__12807.arr,idx__12810)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12811))
{return (new cljs.core.BitmapIndexedNode(null,(this__12807.bitmap ^ bit__12809),cljs.core.remove_pair.call(null,this__12807.arr,idx__12810)));
} else
{if("\uFDD0'else")
{return inode__12808;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12814 = this;
var inode__12815 = this;
var bit__12816 = (1 << ((hash >>> shift) & 0x01f));
var idx__12817 = cljs.core.bitmap_indexed_node_index.call(null,this__12814.bitmap,bit__12816);
if(((this__12814.bitmap & bit__12816) === 0))
{var n__12818 = cljs.core.bit_count.call(null,this__12814.bitmap);
if((n__12818 >= 16))
{var nodes__12819 = cljs.core.make_array.call(null,32);
var jdx__12820 = ((hash >>> shift) & 0x01f);
(nodes__12819[jdx__12820] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12821 = 0;
var j__12822 = 0;
while(true){
if((i__12821 < 32))
{if((((this__12814.bitmap >>> i__12821) & 1) === 0))
{{
var G__12837 = (i__12821 + 1);
var G__12838 = j__12822;
i__12821 = G__12837;
j__12822 = G__12838;
continue;
}
} else
{(nodes__12819[i__12821] = ((!(((this__12814.arr[j__12822]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__12814.arr[j__12822])),(this__12814.arr[j__12822]),(this__12814.arr[(j__12822 + 1)]),added_leaf_QMARK_):(this__12814.arr[(j__12822 + 1)])));
{
var G__12839 = (i__12821 + 1);
var G__12840 = (j__12822 + 2);
i__12821 = G__12839;
j__12822 = G__12840;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__12818 + 1),nodes__12819));
} else
{var new_arr__12823 = cljs.core.make_array.call(null,(2 * (n__12818 + 1)));
cljs.core.array_copy.call(null,this__12814.arr,0,new_arr__12823,0,(2 * idx__12817));
(new_arr__12823[(2 * idx__12817)] = key);
(new_arr__12823[((2 * idx__12817) + 1)] = val);
cljs.core.array_copy.call(null,this__12814.arr,(2 * idx__12817),new_arr__12823,(2 * (idx__12817 + 1)),(2 * (n__12818 - idx__12817)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__12814.bitmap | bit__12816),new_arr__12823));
}
} else
{var key_or_nil__12824 = (this__12814.arr[(2 * idx__12817)]);
var val_or_node__12825 = (this__12814.arr[((2 * idx__12817) + 1)]);
if((key_or_nil__12824 == null))
{var n__12826 = val_or_node__12825.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12826 === val_or_node__12825))
{return inode__12815;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12814.bitmap,cljs.core.clone_and_set.call(null,this__12814.arr,((2 * idx__12817) + 1),n__12826)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12824))
{if((val === val_or_node__12825))
{return inode__12815;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12814.bitmap,cljs.core.clone_and_set.call(null,this__12814.arr,((2 * idx__12817) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__12814.bitmap,cljs.core.clone_and_set.call(null,this__12814.arr,(2 * idx__12817),null,((2 * idx__12817) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__12824,val_or_node__12825,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12827 = this;
var inode__12828 = this;
var bit__12829 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12827.bitmap & bit__12829) === 0))
{return not_found;
} else
{var idx__12830 = cljs.core.bitmap_indexed_node_index.call(null,this__12827.bitmap,bit__12829);
var key_or_nil__12831 = (this__12827.arr[(2 * idx__12830)]);
var val_or_node__12832 = (this__12827.arr[((2 * idx__12830) + 1)]);
if((key_or_nil__12831 == null))
{return val_or_node__12832.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12831))
{return val_or_node__12832;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__12848 = array_node.arr;
var len__12849 = (2 * (array_node.cnt - 1));
var new_arr__12850 = cljs.core.make_array.call(null,len__12849);
var i__12851 = 0;
var j__12852 = 1;
var bitmap__12853 = 0;
while(true){
if((i__12851 < len__12849))
{if((function (){var and__3822__auto____12854 = !((i__12851 === idx));
if(and__3822__auto____12854)
{return !(((arr__12848[i__12851]) == null));
} else
{return and__3822__auto____12854;
}
})())
{(new_arr__12850[j__12852] = (arr__12848[i__12851]));
{
var G__12855 = (i__12851 + 1);
var G__12856 = (j__12852 + 2);
var G__12857 = (bitmap__12853 | (1 << i__12851));
i__12851 = G__12855;
j__12852 = G__12856;
bitmap__12853 = G__12857;
continue;
}
} else
{{
var G__12858 = (i__12851 + 1);
var G__12859 = j__12852;
var G__12860 = bitmap__12853;
i__12851 = G__12858;
j__12852 = G__12859;
bitmap__12853 = G__12860;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__12853,new_arr__12850));
}
break;
}
});

goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12861 = this;
var inode__12862 = this;
var idx__12863 = ((hash >>> shift) & 0x01f);
var node__12864 = (this__12861.arr[idx__12863]);
if((node__12864 == null))
{var editable__12865 = cljs.core.edit_and_set.call(null,inode__12862,edit,idx__12863,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__12865.cnt = (editable__12865.cnt + 1);
return editable__12865;
} else
{var n__12866 = node__12864.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12866 === node__12864))
{return inode__12862;
} else
{return cljs.core.edit_and_set.call(null,inode__12862,edit,idx__12863,n__12866);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__12867 = this;
var inode__12868 = this;
return cljs.core.create_array_node_seq.call(null,this__12867.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12869 = this;
var inode__12870 = this;
var idx__12871 = ((hash >>> shift) & 0x01f);
var node__12872 = (this__12869.arr[idx__12871]);
if((node__12872 == null))
{return inode__12870;
} else
{var n__12873 = node__12872.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12873 === node__12872))
{return inode__12870;
} else
{if((n__12873 == null))
{if((this__12869.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12870,edit,idx__12871);
} else
{var editable__12874 = cljs.core.edit_and_set.call(null,inode__12870,edit,idx__12871,n__12873);
editable__12874.cnt = (editable__12874.cnt - 1);
return editable__12874;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__12870,edit,idx__12871,n__12873);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__12875 = this;
var inode__12876 = this;
if((e === this__12875.edit))
{return inode__12876;
} else
{return (new cljs.core.ArrayNode(e,this__12875.cnt,this__12875.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__12877 = this;
var inode__12878 = this;
var len__12879 = this__12877.arr.length;
var i__12880 = 0;
var init__12881 = init;
while(true){
if((i__12880 < len__12879))
{var node__12882 = (this__12877.arr[i__12880]);
if(!((node__12882 == null)))
{var init__12883 = node__12882.kv_reduce(f,init__12881);
if(cljs.core.reduced_QMARK_.call(null,init__12883))
{return cljs.core.deref.call(null,init__12883);
} else
{{
var G__12902 = (i__12880 + 1);
var G__12903 = init__12883;
i__12880 = G__12902;
init__12881 = G__12903;
continue;
}
}
} else
{return null;
}
} else
{return init__12881;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12884 = this;
var inode__12885 = this;
var idx__12886 = ((hash >>> shift) & 0x01f);
var node__12887 = (this__12884.arr[idx__12886]);
if(!((node__12887 == null)))
{return node__12887.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__12888 = this;
var inode__12889 = this;
var idx__12890 = ((hash >>> shift) & 0x01f);
var node__12891 = (this__12888.arr[idx__12890]);
if(!((node__12891 == null)))
{var n__12892 = node__12891.inode_without((shift + 5),hash,key);
if((n__12892 === node__12891))
{return inode__12889;
} else
{if((n__12892 == null))
{if((this__12888.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12889,null,idx__12890);
} else
{return (new cljs.core.ArrayNode(null,(this__12888.cnt - 1),cljs.core.clone_and_set.call(null,this__12888.arr,idx__12890,n__12892)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__12888.cnt,cljs.core.clone_and_set.call(null,this__12888.arr,idx__12890,n__12892)));
} else
{return null;
}
}
}
} else
{return inode__12889;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12893 = this;
var inode__12894 = this;
var idx__12895 = ((hash >>> shift) & 0x01f);
var node__12896 = (this__12893.arr[idx__12895]);
if((node__12896 == null))
{return (new cljs.core.ArrayNode(null,(this__12893.cnt + 1),cljs.core.clone_and_set.call(null,this__12893.arr,idx__12895,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__12897 = node__12896.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12897 === node__12896))
{return inode__12894;
} else
{return (new cljs.core.ArrayNode(null,this__12893.cnt,cljs.core.clone_and_set.call(null,this__12893.arr,idx__12895,n__12897)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12898 = this;
var inode__12899 = this;
var idx__12900 = ((hash >>> shift) & 0x01f);
var node__12901 = (this__12898.arr[idx__12900]);
if(!((node__12901 == null)))
{return node__12901.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__12906 = (2 * cnt);
var i__12907 = 0;
while(true){
if((i__12907 < lim__12906))
{if(cljs.core.key_test.call(null,key,(arr[i__12907])))
{return i__12907;
} else
{{
var G__12908 = (i__12907 + 2);
i__12907 = G__12908;
continue;
}
}
} else
{return -1;
}
break;
}
});

goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12909 = this;
var inode__12910 = this;
if((hash === this__12909.collision_hash))
{var idx__12911 = cljs.core.hash_collision_node_find_index.call(null,this__12909.arr,this__12909.cnt,key);
if((idx__12911 === -1))
{if((this__12909.arr.length > (2 * this__12909.cnt)))
{var editable__12912 = cljs.core.edit_and_set.call(null,inode__12910,edit,(2 * this__12909.cnt),key,((2 * this__12909.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__12912.cnt = (editable__12912.cnt + 1);
return editable__12912;
} else
{var len__12913 = this__12909.arr.length;
var new_arr__12914 = cljs.core.make_array.call(null,(len__12913 + 2));
cljs.core.array_copy.call(null,this__12909.arr,0,new_arr__12914,0,len__12913);
(new_arr__12914[len__12913] = key);
(new_arr__12914[(len__12913 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__12910.ensure_editable_array(edit,(this__12909.cnt + 1),new_arr__12914);
}
} else
{if(((this__12909.arr[(idx__12911 + 1)]) === val))
{return inode__12910;
} else
{return cljs.core.edit_and_set.call(null,inode__12910,edit,(idx__12911 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__12909.collision_hash >>> shift) & 0x01f)),[null,inode__12910,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__12915 = this;
var inode__12916 = this;
return cljs.core.create_inode_seq.call(null,this__12915.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12917 = this;
var inode__12918 = this;
var idx__12919 = cljs.core.hash_collision_node_find_index.call(null,this__12917.arr,this__12917.cnt,key);
if((idx__12919 === -1))
{return inode__12918;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__12917.cnt === 1))
{return null;
} else
{var editable__12920 = inode__12918.ensure_editable(edit);
var earr__12921 = editable__12920.arr;
(earr__12921[idx__12919] = (earr__12921[((2 * this__12917.cnt) - 2)]));
(earr__12921[(idx__12919 + 1)] = (earr__12921[((2 * this__12917.cnt) - 1)]));
(earr__12921[((2 * this__12917.cnt) - 1)] = null);
(earr__12921[((2 * this__12917.cnt) - 2)] = null);
editable__12920.cnt = (editable__12920.cnt - 1);
return editable__12920;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__12922 = this;
var inode__12923 = this;
if((e === this__12922.edit))
{return inode__12923;
} else
{var new_arr__12924 = cljs.core.make_array.call(null,(2 * (this__12922.cnt + 1)));
cljs.core.array_copy.call(null,this__12922.arr,0,new_arr__12924,0,(2 * this__12922.cnt));
return (new cljs.core.HashCollisionNode(e,this__12922.collision_hash,this__12922.cnt,new_arr__12924));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__12925 = this;
var inode__12926 = this;
return cljs.core.inode_kv_reduce.call(null,this__12925.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12927 = this;
var inode__12928 = this;
var idx__12929 = cljs.core.hash_collision_node_find_index.call(null,this__12927.arr,this__12927.cnt,key);
if((idx__12929 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__12927.arr[idx__12929])))
{return cljs.core.PersistentVector.fromArray([(this__12927.arr[idx__12929]),(this__12927.arr[(idx__12929 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__12930 = this;
var inode__12931 = this;
var idx__12932 = cljs.core.hash_collision_node_find_index.call(null,this__12930.arr,this__12930.cnt,key);
if((idx__12932 === -1))
{return inode__12931;
} else
{if((this__12930.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__12930.collision_hash,(this__12930.cnt - 1),cljs.core.remove_pair.call(null,this__12930.arr,cljs.core.quot.call(null,idx__12932,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12933 = this;
var inode__12934 = this;
if((hash === this__12933.collision_hash))
{var idx__12935 = cljs.core.hash_collision_node_find_index.call(null,this__12933.arr,this__12933.cnt,key);
if((idx__12935 === -1))
{var len__12936 = this__12933.arr.length;
var new_arr__12937 = cljs.core.make_array.call(null,(len__12936 + 2));
cljs.core.array_copy.call(null,this__12933.arr,0,new_arr__12937,0,len__12936);
(new_arr__12937[len__12936] = key);
(new_arr__12937[(len__12936 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__12933.collision_hash,(this__12933.cnt + 1),new_arr__12937));
} else
{if(cljs.core._EQ_.call(null,(this__12933.arr[idx__12935]),val))
{return inode__12934;
} else
{return (new cljs.core.HashCollisionNode(null,this__12933.collision_hash,this__12933.cnt,cljs.core.clone_and_set.call(null,this__12933.arr,(idx__12935 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__12933.collision_hash >>> shift) & 0x01f)),[null,inode__12934])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12938 = this;
var inode__12939 = this;
var idx__12940 = cljs.core.hash_collision_node_find_index.call(null,this__12938.arr,this__12938.cnt,key);
if((idx__12940 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__12938.arr[idx__12940])))
{return (this__12938.arr[(idx__12940 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__12941 = this;
var inode__12942 = this;
if((e === this__12941.edit))
{this__12941.arr = array;
this__12941.cnt = count;
return inode__12942;
} else
{return (new cljs.core.HashCollisionNode(this__12941.edit,this__12941.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__12947 = cljs.core.hash.call(null,key1);
if((key1hash__12947 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12947,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12948 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__12947,key1,val1,added_leaf_QMARK___12948).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___12948);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__12949 = cljs.core.hash.call(null,key1);
if((key1hash__12949 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12949,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12950 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__12949,key1,val1,added_leaf_QMARK___12950).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___12950);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12951 = this;
var h__5690__auto____12952 = this__12951.__hash;
if(!((h__5690__auto____12952 == null)))
{return h__5690__auto____12952;
} else
{var h__5690__auto____12953 = cljs.core.hash_coll.call(null,coll);
this__12951.__hash = h__5690__auto____12953;
return h__5690__auto____12953;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12954 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__12955 = this;
var this__12956 = this;
return cljs.core.pr_str.call(null,this__12956);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12957 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12958 = this;
if((this__12958.s == null))
{return cljs.core.PersistentVector.fromArray([(this__12958.nodes[this__12958.i]),(this__12958.nodes[(this__12958.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__12958.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12959 = this;
if((this__12959.s == null))
{return cljs.core.create_inode_seq.call(null,this__12959.nodes,(this__12959.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__12959.nodes,this__12959.i,cljs.core.next.call(null,this__12959.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12960 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12961 = this;
return (new cljs.core.NodeSeq(meta,this__12961.nodes,this__12961.i,this__12961.s,this__12961.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12962 = this;
return this__12962.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12963 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12963.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__12970 = nodes.length;
var j__12971 = i;
while(true){
if((j__12971 < len__12970))
{if(!(((nodes[j__12971]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__12971,null,null));
} else
{var temp__3971__auto____12972 = (nodes[(j__12971 + 1)]);
if(cljs.core.truth_(temp__3971__auto____12972))
{var node__12973 = temp__3971__auto____12972;
var temp__3971__auto____12974 = node__12973.inode_seq();
if(cljs.core.truth_(temp__3971__auto____12974))
{var node_seq__12975 = temp__3971__auto____12974;
return (new cljs.core.NodeSeq(null,nodes,(j__12971 + 2),node_seq__12975,null));
} else
{{
var G__12976 = (j__12971 + 2);
j__12971 = G__12976;
continue;
}
}
} else
{{
var G__12977 = (j__12971 + 2);
j__12971 = G__12977;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12978 = this;
var h__5690__auto____12979 = this__12978.__hash;
if(!((h__5690__auto____12979 == null)))
{return h__5690__auto____12979;
} else
{var h__5690__auto____12980 = cljs.core.hash_coll.call(null,coll);
this__12978.__hash = h__5690__auto____12980;
return h__5690__auto____12980;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12981 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__12982 = this;
var this__12983 = this;
return cljs.core.pr_str.call(null,this__12983);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12984 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12985 = this;
return cljs.core.first.call(null,this__12985.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12986 = this;
return cljs.core.create_array_node_seq.call(null,null,this__12986.nodes,this__12986.i,cljs.core.next.call(null,this__12986.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12987 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12988 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__12988.nodes,this__12988.i,this__12988.s,this__12988.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12989 = this;
return this__12989.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12990 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12990.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__12997 = nodes.length;
var j__12998 = i;
while(true){
if((j__12998 < len__12997))
{var temp__3971__auto____12999 = (nodes[j__12998]);
if(cljs.core.truth_(temp__3971__auto____12999))
{var nj__13000 = temp__3971__auto____12999;
var temp__3971__auto____13001 = nj__13000.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13001))
{var ns__13002 = temp__3971__auto____13001;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__12998 + 1),ns__13002,null));
} else
{{
var G__13003 = (j__12998 + 1);
j__12998 = G__13003;
continue;
}
}
} else
{{
var G__13004 = (j__12998 + 1);
j__12998 = G__13004;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13007 = this;
return (new cljs.core.TransientHashMap({},this__13007.root,this__13007.cnt,this__13007.has_nil_QMARK_,this__13007.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13008 = this;
var h__5690__auto____13009 = this__13008.__hash;
if(!((h__5690__auto____13009 == null)))
{return h__5690__auto____13009;
} else
{var h__5690__auto____13010 = cljs.core.hash_imap.call(null,coll);
this__13008.__hash = h__5690__auto____13010;
return h__5690__auto____13010;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13011 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13012 = this;
if((k == null))
{if(this__13012.has_nil_QMARK_)
{return this__13012.nil_val;
} else
{return not_found;
}
} else
{if((this__13012.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__13012.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13013 = this;
if((k == null))
{if((function (){var and__3822__auto____13014 = this__13013.has_nil_QMARK_;
if(and__3822__auto____13014)
{return (v === this__13013.nil_val);
} else
{return and__3822__auto____13014;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13013.meta,((this__13013.has_nil_QMARK_)?this__13013.cnt:(this__13013.cnt + 1)),this__13013.root,true,v,null));
}
} else
{var added_leaf_QMARK___13015 = (new cljs.core.Box(false));
var new_root__13016 = (((this__13013.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13013.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13015);
if((new_root__13016 === this__13013.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13013.meta,((added_leaf_QMARK___13015.val)?(this__13013.cnt + 1):this__13013.cnt),new_root__13016,this__13013.has_nil_QMARK_,this__13013.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13017 = this;
if((k == null))
{return this__13017.has_nil_QMARK_;
} else
{if((this__13017.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__13017.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__13040 = null;
var G__13040__2 = (function (this_sym13018,k){
var this__13020 = this;
var this_sym13018__13021 = this;
var coll__13022 = this_sym13018__13021;
return coll__13022.cljs$core$ILookup$_lookup$arity$2(coll__13022,k);
});
var G__13040__3 = (function (this_sym13019,k,not_found){
var this__13020 = this;
var this_sym13019__13023 = this;
var coll__13024 = this_sym13019__13023;
return coll__13024.cljs$core$ILookup$_lookup$arity$3(coll__13024,k,not_found);
});
G__13040 = function(this_sym13019,k,not_found){
switch(arguments.length){
case 2:
return G__13040__2.call(this,this_sym13019,k);
case 3:
return G__13040__3.call(this,this_sym13019,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13040;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym13005,args13006){
var this__13025 = this;
return this_sym13005.call.apply(this_sym13005,[this_sym13005].concat(args13006.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13026 = this;
var init__13027 = ((this__13026.has_nil_QMARK_)?f.call(null,init,null,this__13026.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__13027))
{return cljs.core.deref.call(null,init__13027);
} else
{if(!((this__13026.root == null)))
{return this__13026.root.kv_reduce(f,init__13027);
} else
{if("\uFDD0'else")
{return init__13027;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13028 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__13029 = this;
var this__13030 = this;
return cljs.core.pr_str.call(null,this__13030);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13031 = this;
if((this__13031.cnt > 0))
{var s__13032 = ((!((this__13031.root == null)))?this__13031.root.inode_seq():null);
if(this__13031.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__13031.nil_val], true),s__13032);
} else
{return s__13032;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13033 = this;
return this__13033.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13034 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13035 = this;
return (new cljs.core.PersistentHashMap(meta,this__13035.cnt,this__13035.root,this__13035.has_nil_QMARK_,this__13035.nil_val,this__13035.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13036 = this;
return this__13036.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13037 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__13037.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13038 = this;
if((k == null))
{if(this__13038.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__13038.meta,(this__13038.cnt - 1),this__13038.root,false,null,null));
} else
{return coll;
}
} else
{if((this__13038.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__13039 = this__13038.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__13039 === this__13038.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13038.meta,(this__13038.cnt - 1),new_root__13039,this__13038.has_nil_QMARK_,this__13038.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__13041 = ks.length;
var i__13042 = 0;
var out__13043 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__13042 < len__13041))
{{
var G__13044 = (i__13042 + 1);
var G__13045 = cljs.core.assoc_BANG_.call(null,out__13043,(ks[i__13042]),(vs[i__13042]));
i__13042 = G__13044;
out__13043 = G__13045;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13043);
}
break;
}
});

goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__13046 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13047 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__13048 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13049 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__13050 = this;
if((k == null))
{if(this__13050.has_nil_QMARK_)
{return this__13050.nil_val;
} else
{return null;
}
} else
{if((this__13050.root == null))
{return null;
} else
{return this__13050.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__13051 = this;
if((k == null))
{if(this__13051.has_nil_QMARK_)
{return this__13051.nil_val;
} else
{return not_found;
}
} else
{if((this__13051.root == null))
{return not_found;
} else
{return this__13051.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13052 = this;
if(this__13052.edit)
{return this__13052.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__13053 = this;
var tcoll__13054 = this;
if(this__13053.edit)
{if((function (){var G__13055__13056 = o;
if(G__13055__13056)
{if((function (){var or__3824__auto____13057 = (G__13055__13056.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13057)
{return or__3824__auto____13057;
} else
{return G__13055__13056.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__13055__13056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13055__13056);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13055__13056);
}
})())
{return tcoll__13054.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13058 = cljs.core.seq.call(null,o);
var tcoll__13059 = tcoll__13054;
while(true){
var temp__3971__auto____13060 = cljs.core.first.call(null,es__13058);
if(cljs.core.truth_(temp__3971__auto____13060))
{var e__13061 = temp__3971__auto____13060;
{
var G__13072 = cljs.core.next.call(null,es__13058);
var G__13073 = tcoll__13059.assoc_BANG_(cljs.core.key.call(null,e__13061),cljs.core.val.call(null,e__13061));
es__13058 = G__13072;
tcoll__13059 = G__13073;
continue;
}
} else
{return tcoll__13059;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__13062 = this;
var tcoll__13063 = this;
if(this__13062.edit)
{if((k == null))
{if((this__13062.nil_val === v))
{} else
{this__13062.nil_val = v;
}
if(this__13062.has_nil_QMARK_)
{} else
{this__13062.count = (this__13062.count + 1);
this__13062.has_nil_QMARK_ = true;
}
return tcoll__13063;
} else
{var added_leaf_QMARK___13064 = (new cljs.core.Box(false));
var node__13065 = (((this__13062.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13062.root).inode_assoc_BANG_(this__13062.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13064);
if((node__13065 === this__13062.root))
{} else
{this__13062.root = node__13065;
}
if(added_leaf_QMARK___13064.val)
{this__13062.count = (this__13062.count + 1);
} else
{}
return tcoll__13063;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__13066 = this;
var tcoll__13067 = this;
if(this__13066.edit)
{if((k == null))
{if(this__13066.has_nil_QMARK_)
{this__13066.has_nil_QMARK_ = false;
this__13066.nil_val = null;
this__13066.count = (this__13066.count - 1);
return tcoll__13067;
} else
{return tcoll__13067;
}
} else
{if((this__13066.root == null))
{return tcoll__13067;
} else
{var removed_leaf_QMARK___13068 = (new cljs.core.Box(false));
var node__13069 = this__13066.root.inode_without_BANG_(this__13066.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___13068);
if((node__13069 === this__13066.root))
{} else
{this__13066.root = node__13069;
}
if(cljs.core.truth_((removed_leaf_QMARK___13068[0])))
{this__13066.count = (this__13066.count - 1);
} else
{}
return tcoll__13067;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__13070 = this;
var tcoll__13071 = this;
if(this__13070.edit)
{this__13070.edit = null;
return (new cljs.core.PersistentHashMap(null,this__13070.count,this__13070.root,this__13070.has_nil_QMARK_,this__13070.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__13076 = node;
var stack__13077 = stack;
while(true){
if(!((t__13076 == null)))
{{
var G__13078 = ((ascending_QMARK_)?t__13076.left:t__13076.right);
var G__13079 = cljs.core.conj.call(null,stack__13077,t__13076);
t__13076 = G__13078;
stack__13077 = G__13079;
continue;
}
} else
{return stack__13077;
}
break;
}
});

goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13080 = this;
var h__5690__auto____13081 = this__13080.__hash;
if(!((h__5690__auto____13081 == null)))
{return h__5690__auto____13081;
} else
{var h__5690__auto____13082 = cljs.core.hash_coll.call(null,coll);
this__13080.__hash = h__5690__auto____13082;
return h__5690__auto____13082;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13083 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__13084 = this;
var this__13085 = this;
return cljs.core.pr_str.call(null,this__13085);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13086 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13087 = this;
if((this__13087.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__13087.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__13088 = this;
return cljs.core.peek.call(null,this__13088.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__13089 = this;
var t__13090 = cljs.core.first.call(null,this__13089.stack);
var next_stack__13091 = cljs.core.tree_map_seq_push.call(null,((this__13089.ascending_QMARK_)?t__13090.right:t__13090.left),cljs.core.next.call(null,this__13089.stack),this__13089.ascending_QMARK_);
if(!((next_stack__13091 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__13091,this__13089.ascending_QMARK_,(this__13089.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13092 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13093 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__13093.stack,this__13093.ascending_QMARK_,this__13093.cnt,this__13093.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13094 = this;
return this__13094.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13095 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13095.meta);
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____13097 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____13097)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____13097;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____13099 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____13099)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____13099;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__13103 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__13103))
{return cljs.core.deref.call(null,init__13103);
} else
{var init__13104 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__13103):init__13103);
if(cljs.core.reduced_QMARK_.call(null,init__13104))
{return cljs.core.deref.call(null,init__13104);
} else
{var init__13105 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__13104):init__13104);
if(cljs.core.reduced_QMARK_.call(null,init__13105))
{return cljs.core.deref.call(null,init__13105);
} else
{return init__13105;
}
}
}
});

goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13108 = this;
var h__5690__auto____13109 = this__13108.__hash;
if(!((h__5690__auto____13109 == null)))
{return h__5690__auto____13109;
} else
{var h__5690__auto____13110 = cljs.core.hash_coll.call(null,coll);
this__13108.__hash = h__5690__auto____13110;
return h__5690__auto____13110;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13111 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13112 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13113 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13113.key,this__13113.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__13161 = null;
var G__13161__2 = (function (this_sym13114,k){
var this__13116 = this;
var this_sym13114__13117 = this;
var node__13118 = this_sym13114__13117;
return node__13118.cljs$core$ILookup$_lookup$arity$2(node__13118,k);
});
var G__13161__3 = (function (this_sym13115,k,not_found){
var this__13116 = this;
var this_sym13115__13119 = this;
var node__13120 = this_sym13115__13119;
return node__13120.cljs$core$ILookup$_lookup$arity$3(node__13120,k,not_found);
});
G__13161 = function(this_sym13115,k,not_found){
switch(arguments.length){
case 2:
return G__13161__2.call(this,this_sym13115,k);
case 3:
return G__13161__3.call(this,this_sym13115,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13161;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym13106,args13107){
var this__13121 = this;
return this_sym13106.call.apply(this_sym13106,[this_sym13106].concat(args13107.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13122 = this;
return cljs.core.PersistentVector.fromArray([this__13122.key,this__13122.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13123 = this;
return this__13123.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13124 = this;
return this__13124.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__13125 = this;
var node__13126 = this;
return ins.balance_right(node__13126);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__13127 = this;
var node__13128 = this;
return (new cljs.core.RedNode(this__13127.key,this__13127.val,this__13127.left,this__13127.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__13129 = this;
var node__13130 = this;
return cljs.core.balance_right_del.call(null,this__13129.key,this__13129.val,this__13129.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__13131 = this;
var node__13132 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__13133 = this;
var node__13134 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13134,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__13135 = this;
var node__13136 = this;
return cljs.core.balance_left_del.call(null,this__13135.key,this__13135.val,del,this__13135.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__13137 = this;
var node__13138 = this;
return ins.balance_left(node__13138);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__13139 = this;
var node__13140 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__13140,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__13162 = null;
var G__13162__0 = (function (){
var this__13141 = this;
var this__13143 = this;
return cljs.core.pr_str.call(null,this__13143);
});
G__13162 = function(){
switch(arguments.length){
case 0:
return G__13162__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13162;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__13144 = this;
var node__13145 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13145,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__13146 = this;
var node__13147 = this;
return node__13147;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13148 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13149 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13150 = this;
return cljs.core.list.call(null,this__13150.key,this__13150.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13151 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13152 = this;
return this__13152.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13153 = this;
return cljs.core.PersistentVector.fromArray([this__13153.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13154 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13154.key,this__13154.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13155 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13156 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13156.key,this__13156.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13157 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13158 = this;
if((n === 0))
{return this__13158.key;
} else
{if((n === 1))
{return this__13158.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__13159 = this;
if((n === 0))
{return this__13159.key;
} else
{if((n === 1))
{return this__13159.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__13160 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13165 = this;
var h__5690__auto____13166 = this__13165.__hash;
if(!((h__5690__auto____13166 == null)))
{return h__5690__auto____13166;
} else
{var h__5690__auto____13167 = cljs.core.hash_coll.call(null,coll);
this__13165.__hash = h__5690__auto____13167;
return h__5690__auto____13167;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13168 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13169 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13170 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13170.key,this__13170.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__13218 = null;
var G__13218__2 = (function (this_sym13171,k){
var this__13173 = this;
var this_sym13171__13174 = this;
var node__13175 = this_sym13171__13174;
return node__13175.cljs$core$ILookup$_lookup$arity$2(node__13175,k);
});
var G__13218__3 = (function (this_sym13172,k,not_found){
var this__13173 = this;
var this_sym13172__13176 = this;
var node__13177 = this_sym13172__13176;
return node__13177.cljs$core$ILookup$_lookup$arity$3(node__13177,k,not_found);
});
G__13218 = function(this_sym13172,k,not_found){
switch(arguments.length){
case 2:
return G__13218__2.call(this,this_sym13172,k);
case 3:
return G__13218__3.call(this,this_sym13172,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13218;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym13163,args13164){
var this__13178 = this;
return this_sym13163.call.apply(this_sym13163,[this_sym13163].concat(args13164.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13179 = this;
return cljs.core.PersistentVector.fromArray([this__13179.key,this__13179.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13180 = this;
return this__13180.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13181 = this;
return this__13181.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__13182 = this;
var node__13183 = this;
return (new cljs.core.RedNode(this__13182.key,this__13182.val,this__13182.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__13184 = this;
var node__13185 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__13186 = this;
var node__13187 = this;
return (new cljs.core.RedNode(this__13186.key,this__13186.val,this__13186.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__13188 = this;
var node__13189 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__13190 = this;
var node__13191 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13191,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__13192 = this;
var node__13193 = this;
return (new cljs.core.RedNode(this__13192.key,this__13192.val,del,this__13192.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__13194 = this;
var node__13195 = this;
return (new cljs.core.RedNode(this__13194.key,this__13194.val,ins,this__13194.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__13196 = this;
var node__13197 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13196.left))
{return (new cljs.core.RedNode(this__13196.key,this__13196.val,this__13196.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__13196.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13196.right))
{return (new cljs.core.RedNode(this__13196.right.key,this__13196.right.val,(new cljs.core.BlackNode(this__13196.key,this__13196.val,this__13196.left,this__13196.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__13196.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__13197,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__13219 = null;
var G__13219__0 = (function (){
var this__13198 = this;
var this__13200 = this;
return cljs.core.pr_str.call(null,this__13200);
});
G__13219 = function(){
switch(arguments.length){
case 0:
return G__13219__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13219;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__13201 = this;
var node__13202 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13201.right))
{return (new cljs.core.RedNode(this__13201.key,this__13201.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13201.left,null)),this__13201.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13201.left))
{return (new cljs.core.RedNode(this__13201.left.key,this__13201.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13201.left.left,null)),(new cljs.core.BlackNode(this__13201.key,this__13201.val,this__13201.left.right,this__13201.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13202,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__13203 = this;
var node__13204 = this;
return (new cljs.core.BlackNode(this__13203.key,this__13203.val,this__13203.left,this__13203.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13205 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13206 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13207 = this;
return cljs.core.list.call(null,this__13207.key,this__13207.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13208 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13209 = this;
return this__13209.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13210 = this;
return cljs.core.PersistentVector.fromArray([this__13210.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13211 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13211.key,this__13211.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13212 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13213 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13213.key,this__13213.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13214 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13215 = this;
if((n === 0))
{return this__13215.key;
} else
{if((n === 1))
{return this__13215.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__13216 = this;
if((n === 0))
{return this__13216.key;
} else
{if((n === 1))
{return this__13216.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__13217 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__13223 = comp.call(null,k,tree.key);
if((c__13223 === 0))
{(found[0] = tree);
return null;
} else
{if((c__13223 < 0))
{var ins__13224 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__13224 == null)))
{return tree.add_left(ins__13224);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__13225 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__13225 == null)))
{return tree.add_right(ins__13225);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__13228 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13228))
{return (new cljs.core.RedNode(app__13228.key,app__13228.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__13228.left,null)),(new cljs.core.RedNode(right.key,right.val,app__13228.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__13228,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__13229 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13229))
{return (new cljs.core.RedNode(app__13229.key,app__13229.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__13229.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__13229.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__13229,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__13235 = comp.call(null,k,tree.key);
if((c__13235 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__13235 < 0))
{var del__13236 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____13237 = !((del__13236 == null));
if(or__3824__auto____13237)
{return or__3824__auto____13237;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__13236,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__13236,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__13238 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____13239 = !((del__13238 == null));
if(or__3824__auto____13239)
{return or__3824__auto____13239;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__13238);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__13238,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__13242 = tree.key;
var c__13243 = comp.call(null,k,tk__13242);
if((c__13243 === 0))
{return tree.replace(tk__13242,v,tree.left,tree.right);
} else
{if((c__13243 < 0))
{return tree.replace(tk__13242,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__13242,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13246 = this;
var h__5690__auto____13247 = this__13246.__hash;
if(!((h__5690__auto____13247 == null)))
{return h__5690__auto____13247;
} else
{var h__5690__auto____13248 = cljs.core.hash_imap.call(null,coll);
this__13246.__hash = h__5690__auto____13248;
return h__5690__auto____13248;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13249 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13250 = this;
var n__13251 = coll.entry_at(k);
if(!((n__13251 == null)))
{return n__13251.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13252 = this;
var found__13253 = [null];
var t__13254 = cljs.core.tree_map_add.call(null,this__13252.comp,this__13252.tree,k,v,found__13253);
if((t__13254 == null))
{var found_node__13255 = cljs.core.nth.call(null,found__13253,0);
if(cljs.core._EQ_.call(null,v,found_node__13255.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13252.comp,cljs.core.tree_map_replace.call(null,this__13252.comp,this__13252.tree,k,v),this__13252.cnt,this__13252.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13252.comp,t__13254.blacken(),(this__13252.cnt + 1),this__13252.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13256 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__13290 = null;
var G__13290__2 = (function (this_sym13257,k){
var this__13259 = this;
var this_sym13257__13260 = this;
var coll__13261 = this_sym13257__13260;
return coll__13261.cljs$core$ILookup$_lookup$arity$2(coll__13261,k);
});
var G__13290__3 = (function (this_sym13258,k,not_found){
var this__13259 = this;
var this_sym13258__13262 = this;
var coll__13263 = this_sym13258__13262;
return coll__13263.cljs$core$ILookup$_lookup$arity$3(coll__13263,k,not_found);
});
G__13290 = function(this_sym13258,k,not_found){
switch(arguments.length){
case 2:
return G__13290__2.call(this,this_sym13258,k);
case 3:
return G__13290__3.call(this,this_sym13258,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13290;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym13244,args13245){
var this__13264 = this;
return this_sym13244.call.apply(this_sym13244,[this_sym13244].concat(args13245.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13265 = this;
if(!((this__13265.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__13265.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13266 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13267 = this;
if((this__13267.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13267.tree,false,this__13267.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__13268 = this;
var this__13269 = this;
return cljs.core.pr_str.call(null,this__13269);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__13270 = this;
var coll__13271 = this;
var t__13272 = this__13270.tree;
while(true){
if(!((t__13272 == null)))
{var c__13273 = this__13270.comp.call(null,k,t__13272.key);
if((c__13273 === 0))
{return t__13272;
} else
{if((c__13273 < 0))
{{
var G__13291 = t__13272.left;
t__13272 = G__13291;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__13292 = t__13272.right;
t__13272 = G__13292;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__13274 = this;
if((this__13274.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13274.tree,ascending_QMARK_,this__13274.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13275 = this;
if((this__13275.cnt > 0))
{var stack__13276 = null;
var t__13277 = this__13275.tree;
while(true){
if(!((t__13277 == null)))
{var c__13278 = this__13275.comp.call(null,k,t__13277.key);
if((c__13278 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__13276,t__13277),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__13278 < 0))
{{
var G__13293 = cljs.core.conj.call(null,stack__13276,t__13277);
var G__13294 = t__13277.left;
stack__13276 = G__13293;
t__13277 = G__13294;
continue;
}
} else
{{
var G__13295 = stack__13276;
var G__13296 = t__13277.right;
stack__13276 = G__13295;
t__13277 = G__13296;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__13278 > 0))
{{
var G__13297 = cljs.core.conj.call(null,stack__13276,t__13277);
var G__13298 = t__13277.right;
stack__13276 = G__13297;
t__13277 = G__13298;
continue;
}
} else
{{
var G__13299 = stack__13276;
var G__13300 = t__13277.left;
stack__13276 = G__13299;
t__13277 = G__13300;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__13276 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__13276,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__13279 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13280 = this;
return this__13280.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13281 = this;
if((this__13281.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13281.tree,true,this__13281.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13282 = this;
return this__13282.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13283 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13284 = this;
return (new cljs.core.PersistentTreeMap(this__13284.comp,this__13284.tree,this__13284.cnt,meta,this__13284.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13285 = this;
return this__13285.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13286 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__13286.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13287 = this;
var found__13288 = [null];
var t__13289 = cljs.core.tree_map_remove.call(null,this__13287.comp,this__13287.tree,k,found__13288);
if((t__13289 == null))
{if((cljs.core.nth.call(null,found__13288,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13287.comp,null,0,this__13287.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13287.comp,t__13289.blacken(),(this__13287.cnt - 1),this__13287.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__13303 = cljs.core.seq.call(null,keyvals);
var out__13304 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__13303)
{{
var G__13305 = cljs.core.nnext.call(null,in__13303);
var G__13306 = cljs.core.assoc_BANG_.call(null,out__13304,cljs.core.first.call(null,in__13303),cljs.core.second.call(null,in__13303));
in__13303 = G__13305;
out__13304 = G__13306;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13304);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__13307){
var keyvals = cljs.core.seq(arglist__13307);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__13308){
var keyvals = cljs.core.seq(arglist__13308);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__13312 = [];
var obj__13313 = {};
var kvs__13314 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__13314)
{ks__13312.push(cljs.core.first.call(null,kvs__13314));
(obj__13313[cljs.core.first.call(null,kvs__13314)] = cljs.core.second.call(null,kvs__13314));
{
var G__13315 = cljs.core.nnext.call(null,kvs__13314);
kvs__13314 = G__13315;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__13312,obj__13313);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__13316){
var keyvals = cljs.core.seq(arglist__13316);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__13319 = cljs.core.seq.call(null,keyvals);
var out__13320 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__13319)
{{
var G__13321 = cljs.core.nnext.call(null,in__13319);
var G__13322 = cljs.core.assoc.call(null,out__13320,cljs.core.first.call(null,in__13319),cljs.core.second.call(null,in__13319));
in__13319 = G__13321;
out__13320 = G__13322;
continue;
}
} else
{return out__13320;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__13323){
var keyvals = cljs.core.seq(arglist__13323);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__13326 = cljs.core.seq.call(null,keyvals);
var out__13327 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__13326)
{{
var G__13328 = cljs.core.nnext.call(null,in__13326);
var G__13329 = cljs.core.assoc.call(null,out__13327,cljs.core.first.call(null,in__13326),cljs.core.second.call(null,in__13326));
in__13326 = G__13328;
out__13327 = G__13329;
continue;
}
} else
{return out__13327;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__13330){
var comparator = cljs.core.first(arglist__13330);
var keyvals = cljs.core.rest(arglist__13330);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__13331_SHARP_,p2__13332_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____13334 = p1__13331_SHARP_;
if(cljs.core.truth_(or__3824__auto____13334))
{return or__3824__auto____13334;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__13332_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__13335){
var maps = cljs.core.seq(arglist__13335);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__13343 = (function (m,e){
var k__13341 = cljs.core.first.call(null,e);
var v__13342 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__13341))
{return cljs.core.assoc.call(null,m,k__13341,f.call(null,cljs.core._lookup.call(null,m,k__13341,null),v__13342));
} else
{return cljs.core.assoc.call(null,m,k__13341,v__13342);
}
});
var merge2__13345 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13343,(function (){var or__3824__auto____13344 = m1;
if(cljs.core.truth_(or__3824__auto____13344))
{return or__3824__auto____13344;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__13345,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__13346){
var f = cljs.core.first(arglist__13346);
var maps = cljs.core.rest(arglist__13346);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13351 = cljs.core.ObjMap.EMPTY;
var keys__13352 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__13352)
{var key__13353 = cljs.core.first.call(null,keys__13352);
var entry__13354 = cljs.core._lookup.call(null,map,key__13353,"\uFDD0'cljs.core/not-found");
{
var G__13355 = ((cljs.core.not_EQ_.call(null,entry__13354,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__13351,key__13353,entry__13354):ret__13351);
var G__13356 = cljs.core.next.call(null,keys__13352);
ret__13351 = G__13355;
keys__13352 = G__13356;
continue;
}
} else
{return ret__13351;
}
break;
}
});

goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13360 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__13360.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13361 = this;
var h__5690__auto____13362 = this__13361.__hash;
if(!((h__5690__auto____13362 == null)))
{return h__5690__auto____13362;
} else
{var h__5690__auto____13363 = cljs.core.hash_iset.call(null,coll);
this__13361.__hash = h__5690__auto____13363;
return h__5690__auto____13363;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13364 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13365 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13365.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__13386 = null;
var G__13386__2 = (function (this_sym13366,k){
var this__13368 = this;
var this_sym13366__13369 = this;
var coll__13370 = this_sym13366__13369;
return coll__13370.cljs$core$ILookup$_lookup$arity$2(coll__13370,k);
});
var G__13386__3 = (function (this_sym13367,k,not_found){
var this__13368 = this;
var this_sym13367__13371 = this;
var coll__13372 = this_sym13367__13371;
return coll__13372.cljs$core$ILookup$_lookup$arity$3(coll__13372,k,not_found);
});
G__13386 = function(this_sym13367,k,not_found){
switch(arguments.length){
case 2:
return G__13386__2.call(this,this_sym13367,k);
case 3:
return G__13386__3.call(this,this_sym13367,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13386;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym13358,args13359){
var this__13373 = this;
return this_sym13358.call.apply(this_sym13358,[this_sym13358].concat(args13359.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13374 = this;
return (new cljs.core.PersistentHashSet(this__13374.meta,cljs.core.assoc.call(null,this__13374.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__13375 = this;
var this__13376 = this;
return cljs.core.pr_str.call(null,this__13376);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13377 = this;
return cljs.core.keys.call(null,this__13377.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13378 = this;
return (new cljs.core.PersistentHashSet(this__13378.meta,cljs.core.dissoc.call(null,this__13378.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13379 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13380 = this;
var and__3822__auto____13381 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____13381)
{var and__3822__auto____13382 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____13382)
{return cljs.core.every_QMARK_.call(null,(function (p1__13357_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13357_SHARP_);
}),other);
} else
{return and__3822__auto____13382;
}
} else
{return and__3822__auto____13381;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13383 = this;
return (new cljs.core.PersistentHashSet(meta,this__13383.hash_map,this__13383.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13384 = this;
return this__13384.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13385 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__13385.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__13387 = cljs.core.count.call(null,items);
var i__13388 = 0;
var out__13389 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__13388 < len__13387))
{{
var G__13390 = (i__13388 + 1);
var G__13391 = cljs.core.conj_BANG_.call(null,out__13389,(items[i__13388]));
i__13388 = G__13390;
out__13389 = G__13391;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13389);
}
break;
}
});

goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__13409 = null;
var G__13409__2 = (function (this_sym13395,k){
var this__13397 = this;
var this_sym13395__13398 = this;
var tcoll__13399 = this_sym13395__13398;
if((cljs.core._lookup.call(null,this__13397.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__13409__3 = (function (this_sym13396,k,not_found){
var this__13397 = this;
var this_sym13396__13400 = this;
var tcoll__13401 = this_sym13396__13400;
if((cljs.core._lookup.call(null,this__13397.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__13409 = function(this_sym13396,k,not_found){
switch(arguments.length){
case 2:
return G__13409__2.call(this,this_sym13396,k);
case 3:
return G__13409__3.call(this,this_sym13396,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13409;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym13393,args13394){
var this__13402 = this;
return this_sym13393.call.apply(this_sym13393,[this_sym13393].concat(args13394.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__13403 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__13404 = this;
if((cljs.core._lookup.call(null,this__13404.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__13405 = this;
return cljs.core.count.call(null,this__13405.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__13406 = this;
this__13406.transient_map = cljs.core.dissoc_BANG_.call(null,this__13406.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13407 = this;
this__13407.transient_map = cljs.core.assoc_BANG_.call(null,this__13407.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13408 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__13408.transient_map),null));
});
cljs.core.TransientHashSet;

goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13412 = this;
var h__5690__auto____13413 = this__13412.__hash;
if(!((h__5690__auto____13413 == null)))
{return h__5690__auto____13413;
} else
{var h__5690__auto____13414 = cljs.core.hash_iset.call(null,coll);
this__13412.__hash = h__5690__auto____13414;
return h__5690__auto____13414;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13415 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13416 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13416.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__13442 = null;
var G__13442__2 = (function (this_sym13417,k){
var this__13419 = this;
var this_sym13417__13420 = this;
var coll__13421 = this_sym13417__13420;
return coll__13421.cljs$core$ILookup$_lookup$arity$2(coll__13421,k);
});
var G__13442__3 = (function (this_sym13418,k,not_found){
var this__13419 = this;
var this_sym13418__13422 = this;
var coll__13423 = this_sym13418__13422;
return coll__13423.cljs$core$ILookup$_lookup$arity$3(coll__13423,k,not_found);
});
G__13442 = function(this_sym13418,k,not_found){
switch(arguments.length){
case 2:
return G__13442__2.call(this,this_sym13418,k);
case 3:
return G__13442__3.call(this,this_sym13418,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13442;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym13410,args13411){
var this__13424 = this;
return this_sym13410.call.apply(this_sym13410,[this_sym13410].concat(args13411.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13425 = this;
return (new cljs.core.PersistentTreeSet(this__13425.meta,cljs.core.assoc.call(null,this__13425.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13426 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__13426.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__13427 = this;
var this__13428 = this;
return cljs.core.pr_str.call(null,this__13428);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__13429 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__13429.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13430 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__13430.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__13431 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13432 = this;
return cljs.core._comparator.call(null,this__13432.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13433 = this;
return cljs.core.keys.call(null,this__13433.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13434 = this;
return (new cljs.core.PersistentTreeSet(this__13434.meta,cljs.core.dissoc.call(null,this__13434.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13435 = this;
return cljs.core.count.call(null,this__13435.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13436 = this;
var and__3822__auto____13437 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____13437)
{var and__3822__auto____13438 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____13438)
{return cljs.core.every_QMARK_.call(null,(function (p1__13392_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13392_SHARP_);
}),other);
} else
{return and__3822__auto____13438;
}
} else
{return and__3822__auto____13437;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13439 = this;
return (new cljs.core.PersistentTreeSet(meta,this__13439.tree_map,this__13439.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13440 = this;
return this__13440.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13441 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__13441.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__13447__delegate = function (keys){
var in__13445 = cljs.core.seq.call(null,keys);
var out__13446 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__13445))
{{
var G__13448 = cljs.core.next.call(null,in__13445);
var G__13449 = cljs.core.conj_BANG_.call(null,out__13446,cljs.core.first.call(null,in__13445));
in__13445 = G__13448;
out__13446 = G__13449;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13446);
}
break;
}
};
var G__13447 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13447__delegate.call(this, keys);
};
G__13447.cljs$lang$maxFixedArity = 0;
G__13447.cljs$lang$applyTo = (function (arglist__13450){
var keys = cljs.core.seq(arglist__13450);;
return G__13447__delegate(keys);
});
G__13447.cljs$lang$arity$variadic = G__13447__delegate;
return G__13447;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__13451){
var keys = cljs.core.seq(arglist__13451);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__13453){
var comparator = cljs.core.first(arglist__13453);
var keys = cljs.core.rest(arglist__13453);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__13459 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____13460 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____13460))
{var e__13461 = temp__3971__auto____13460;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13461));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13459,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13452_SHARP_){
var temp__3971__auto____13462 = cljs.core.find.call(null,smap,p1__13452_SHARP_);
if(cljs.core.truth_(temp__3971__auto____13462))
{var e__13463 = temp__3971__auto____13462;
return cljs.core.second.call(null,e__13463);
} else
{return p1__13452_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13493 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13486,seen){
while(true){
var vec__13487__13488 = p__13486;
var f__13489 = cljs.core.nth.call(null,vec__13487__13488,0,null);
var xs__13490 = vec__13487__13488;
var temp__3974__auto____13491 = cljs.core.seq.call(null,xs__13490);
if(temp__3974__auto____13491)
{var s__13492 = temp__3974__auto____13491;
if(cljs.core.contains_QMARK_.call(null,seen,f__13489))
{{
var G__13494 = cljs.core.rest.call(null,s__13492);
var G__13495 = seen;
p__13486 = G__13494;
seen = G__13495;
continue;
}
} else
{return cljs.core.cons.call(null,f__13489,step.call(null,cljs.core.rest.call(null,s__13492),cljs.core.conj.call(null,seen,f__13489)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__13493.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__13498 = cljs.core.PersistentVector.EMPTY;
var s__13499 = s;
while(true){
if(cljs.core.next.call(null,s__13499))
{{
var G__13500 = cljs.core.conj.call(null,ret__13498,cljs.core.first.call(null,s__13499));
var G__13501 = cljs.core.next.call(null,s__13499);
ret__13498 = G__13500;
s__13499 = G__13501;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13498);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____13504 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____13504)
{return or__3824__auto____13504;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13505 = x.lastIndexOf("/");
if((i__13505 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13505 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____13508 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____13508)
{return or__3824__auto____13508;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13509 = x.lastIndexOf("/");
if((i__13509 > -1))
{return cljs.core.subs.call(null,x,2,i__13509);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__13516 = cljs.core.ObjMap.EMPTY;
var ks__13517 = cljs.core.seq.call(null,keys);
var vs__13518 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____13519 = ks__13517;
if(and__3822__auto____13519)
{return vs__13518;
} else
{return and__3822__auto____13519;
}
})())
{{
var G__13520 = cljs.core.assoc.call(null,map__13516,cljs.core.first.call(null,ks__13517),cljs.core.first.call(null,vs__13518));
var G__13521 = cljs.core.next.call(null,ks__13517);
var G__13522 = cljs.core.next.call(null,vs__13518);
map__13516 = G__13520;
ks__13517 = G__13521;
vs__13518 = G__13522;
continue;
}
} else
{return map__13516;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__13525__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13510_SHARP_,p2__13511_SHARP_){
return max_key.call(null,k,p1__13510_SHARP_,p2__13511_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13525 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13525__delegate.call(this, k, x, y, more);
};
G__13525.cljs$lang$maxFixedArity = 3;
G__13525.cljs$lang$applyTo = (function (arglist__13526){
var k = cljs.core.first(arglist__13526);
var x = cljs.core.first(cljs.core.next(arglist__13526));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13526)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13526)));
return G__13525__delegate(k, x, y, more);
});
G__13525.cljs$lang$arity$variadic = G__13525__delegate;
return G__13525;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__13527__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13523_SHARP_,p2__13524_SHARP_){
return min_key.call(null,k,p1__13523_SHARP_,p2__13524_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13527 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13527__delegate.call(this, k, x, y, more);
};
G__13527.cljs$lang$maxFixedArity = 3;
G__13527.cljs$lang$applyTo = (function (arglist__13528){
var k = cljs.core.first(arglist__13528);
var x = cljs.core.first(cljs.core.next(arglist__13528));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13528)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13528)));
return G__13527__delegate(k, x, y, more);
});
G__13527.cljs$lang$arity$variadic = G__13527__delegate;
return G__13527;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13531 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13531)
{var s__13532 = temp__3974__auto____13531;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13532),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13532)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13535 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13535)
{var s__13536 = temp__3974__auto____13535;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13536))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13536),take_while.call(null,pred,cljs.core.rest.call(null,s__13536)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__13538 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__13538.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__13550 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____13551 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____13551))
{var vec__13552__13553 = temp__3974__auto____13551;
var e__13554 = cljs.core.nth.call(null,vec__13552__13553,0,null);
var s__13555 = vec__13552__13553;
if(cljs.core.truth_(include__13550.call(null,e__13554)))
{return s__13555;
} else
{return cljs.core.next.call(null,s__13555);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13550,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____13556 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____13556))
{var vec__13557__13558 = temp__3974__auto____13556;
var e__13559 = cljs.core.nth.call(null,vec__13557__13558,0,null);
var s__13560 = vec__13557__13558;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__13559))?s__13560:cljs.core.next.call(null,s__13560)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__13572 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____13573 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____13573))
{var vec__13574__13575 = temp__3974__auto____13573;
var e__13576 = cljs.core.nth.call(null,vec__13574__13575,0,null);
var s__13577 = vec__13574__13575;
if(cljs.core.truth_(include__13572.call(null,e__13576)))
{return s__13577;
} else
{return cljs.core.next.call(null,s__13577);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13572,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____13578 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____13578))
{var vec__13579__13580 = temp__3974__auto____13578;
var e__13581 = cljs.core.nth.call(null,vec__13579__13580,0,null);
var s__13582 = vec__13579__13580;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__13581))?s__13582:cljs.core.next.call(null,s__13582)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__13583 = this;
var h__5690__auto____13584 = this__13583.__hash;
if(!((h__5690__auto____13584 == null)))
{return h__5690__auto____13584;
} else
{var h__5690__auto____13585 = cljs.core.hash_coll.call(null,rng);
this__13583.__hash = h__5690__auto____13585;
return h__5690__auto____13585;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__13586 = this;
if((this__13586.step > 0))
{if(((this__13586.start + this__13586.step) < this__13586.end))
{return (new cljs.core.Range(this__13586.meta,(this__13586.start + this__13586.step),this__13586.end,this__13586.step,null));
} else
{return null;
}
} else
{if(((this__13586.start + this__13586.step) > this__13586.end))
{return (new cljs.core.Range(this__13586.meta,(this__13586.start + this__13586.step),this__13586.end,this__13586.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__13587 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__13588 = this;
var this__13589 = this;
return cljs.core.pr_str.call(null,this__13589);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__13590 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__13591 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__13592 = this;
if((this__13592.step > 0))
{if((this__13592.start < this__13592.end))
{return rng;
} else
{return null;
}
} else
{if((this__13592.start > this__13592.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__13593 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__13593.end - this__13593.start) / this__13593.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__13594 = this;
return this__13594.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__13595 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__13595.meta,(this__13595.start + this__13595.step),this__13595.end,this__13595.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__13596 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__13597 = this;
return (new cljs.core.Range(meta,this__13597.start,this__13597.end,this__13597.step,this__13597.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__13598 = this;
return this__13598.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__13599 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__13599.start + (n * this__13599.step));
} else
{if((function (){var and__3822__auto____13600 = (this__13599.start > this__13599.end);
if(and__3822__auto____13600)
{return (this__13599.step === 0);
} else
{return and__3822__auto____13600;
}
})())
{return this__13599.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__13601 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__13601.start + (n * this__13601.step));
} else
{if((function (){var and__3822__auto____13602 = (this__13601.start > this__13601.end);
if(and__3822__auto____13602)
{return (this__13601.step === 0);
} else
{return and__3822__auto____13602;
}
})())
{return this__13601.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__13603 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13603.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13606 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13606)
{var s__13607 = temp__3974__auto____13606;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__13607),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13607)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13614 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13614)
{var s__13615 = temp__3974__auto____13614;
var fst__13616 = cljs.core.first.call(null,s__13615);
var fv__13617 = f.call(null,fst__13616);
var run__13618 = cljs.core.cons.call(null,fst__13616,cljs.core.take_while.call(null,(function (p1__13608_SHARP_){
return cljs.core._EQ_.call(null,fv__13617,f.call(null,p1__13608_SHARP_));
}),cljs.core.next.call(null,s__13615)));
return cljs.core.cons.call(null,run__13618,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13618),s__13615))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____13633 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____13633)
{var s__13634 = temp__3971__auto____13633;
return reductions.call(null,f,cljs.core.first.call(null,s__13634),cljs.core.rest.call(null,s__13634));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13635 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13635)
{var s__13636 = temp__3974__auto____13635;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13636)),cljs.core.rest.call(null,s__13636));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__13639 = null;
var G__13639__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13639__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13639__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13639__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13639__4 = (function() { 
var G__13640__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13640 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13640__delegate.call(this, x, y, z, args);
};
G__13640.cljs$lang$maxFixedArity = 3;
G__13640.cljs$lang$applyTo = (function (arglist__13641){
var x = cljs.core.first(arglist__13641);
var y = cljs.core.first(cljs.core.next(arglist__13641));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13641)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13641)));
return G__13640__delegate(x, y, z, args);
});
G__13640.cljs$lang$arity$variadic = G__13640__delegate;
return G__13640;
})()
;
G__13639 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13639__0.call(this);
case 1:
return G__13639__1.call(this,x);
case 2:
return G__13639__2.call(this,x,y);
case 3:
return G__13639__3.call(this,x,y,z);
default:
return G__13639__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13639.cljs$lang$maxFixedArity = 3;
G__13639.cljs$lang$applyTo = G__13639__4.cljs$lang$applyTo;
return G__13639;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__13642 = null;
var G__13642__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13642__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13642__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13642__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13642__4 = (function() { 
var G__13643__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13643 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13643__delegate.call(this, x, y, z, args);
};
G__13643.cljs$lang$maxFixedArity = 3;
G__13643.cljs$lang$applyTo = (function (arglist__13644){
var x = cljs.core.first(arglist__13644);
var y = cljs.core.first(cljs.core.next(arglist__13644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13644)));
return G__13643__delegate(x, y, z, args);
});
G__13643.cljs$lang$arity$variadic = G__13643__delegate;
return G__13643;
})()
;
G__13642 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13642__0.call(this);
case 1:
return G__13642__1.call(this,x);
case 2:
return G__13642__2.call(this,x,y);
case 3:
return G__13642__3.call(this,x,y,z);
default:
return G__13642__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13642.cljs$lang$maxFixedArity = 3;
G__13642.cljs$lang$applyTo = G__13642__4.cljs$lang$applyTo;
return G__13642;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__13645 = null;
var G__13645__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13645__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13645__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13645__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13645__4 = (function() { 
var G__13646__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13646__delegate.call(this, x, y, z, args);
};
G__13646.cljs$lang$maxFixedArity = 3;
G__13646.cljs$lang$applyTo = (function (arglist__13647){
var x = cljs.core.first(arglist__13647);
var y = cljs.core.first(cljs.core.next(arglist__13647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13647)));
return G__13646__delegate(x, y, z, args);
});
G__13646.cljs$lang$arity$variadic = G__13646__delegate;
return G__13646;
})()
;
G__13645 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13645__0.call(this);
case 1:
return G__13645__1.call(this,x);
case 2:
return G__13645__2.call(this,x,y);
case 3:
return G__13645__3.call(this,x,y,z);
default:
return G__13645__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13645.cljs$lang$maxFixedArity = 3;
G__13645.cljs$lang$applyTo = G__13645__4.cljs$lang$applyTo;
return G__13645;
})()
});
var juxt__4 = (function() { 
var G__13648__delegate = function (f,g,h,fs){
var fs__13638 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__13649 = null;
var G__13649__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__13619_SHARP_,p2__13620_SHARP_){
return cljs.core.conj.call(null,p1__13619_SHARP_,p2__13620_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__13638);
});
var G__13649__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13621_SHARP_,p2__13622_SHARP_){
return cljs.core.conj.call(null,p1__13621_SHARP_,p2__13622_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__13638);
});
var G__13649__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13623_SHARP_,p2__13624_SHARP_){
return cljs.core.conj.call(null,p1__13623_SHARP_,p2__13624_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__13638);
});
var G__13649__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13625_SHARP_,p2__13626_SHARP_){
return cljs.core.conj.call(null,p1__13625_SHARP_,p2__13626_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__13638);
});
var G__13649__4 = (function() { 
var G__13650__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13627_SHARP_,p2__13628_SHARP_){
return cljs.core.conj.call(null,p1__13627_SHARP_,cljs.core.apply.call(null,p2__13628_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__13638);
};
var G__13650 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13650__delegate.call(this, x, y, z, args);
};
G__13650.cljs$lang$maxFixedArity = 3;
G__13650.cljs$lang$applyTo = (function (arglist__13651){
var x = cljs.core.first(arglist__13651);
var y = cljs.core.first(cljs.core.next(arglist__13651));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13651)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13651)));
return G__13650__delegate(x, y, z, args);
});
G__13650.cljs$lang$arity$variadic = G__13650__delegate;
return G__13650;
})()
;
G__13649 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13649__0.call(this);
case 1:
return G__13649__1.call(this,x);
case 2:
return G__13649__2.call(this,x,y);
case 3:
return G__13649__3.call(this,x,y,z);
default:
return G__13649__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13649.cljs$lang$maxFixedArity = 3;
G__13649.cljs$lang$applyTo = G__13649__4.cljs$lang$applyTo;
return G__13649;
})()
};
var G__13648 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13648__delegate.call(this, f, g, h, fs);
};
G__13648.cljs$lang$maxFixedArity = 3;
G__13648.cljs$lang$applyTo = (function (arglist__13652){
var f = cljs.core.first(arglist__13652);
var g = cljs.core.first(cljs.core.next(arglist__13652));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13652)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13652)));
return G__13648__delegate(f, g, h, fs);
});
G__13648.cljs$lang$arity$variadic = G__13648__delegate;
return G__13648;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__13655 = cljs.core.next.call(null,coll);
coll = G__13655;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____13654 = cljs.core.seq.call(null,coll);
if(and__3822__auto____13654)
{return (n > 0);
} else
{return and__3822__auto____13654;
}
})()))
{{
var G__13656 = (n - 1);
var G__13657 = cljs.core.next.call(null,coll);
n = G__13656;
coll = G__13657;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__13659 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13659),s))
{if((cljs.core.count.call(null,matches__13659) === 1))
{return cljs.core.first.call(null,matches__13659);
} else
{return cljs.core.vec.call(null,matches__13659);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__13661 = re.exec(s);
if((matches__13661 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__13661) === 1))
{return cljs.core.first.call(null,matches__13661);
} else
{return cljs.core.vec.call(null,matches__13661);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13666 = cljs.core.re_find.call(null,re,s);
var match_idx__13667 = s.search(re);
var match_str__13668 = ((cljs.core.coll_QMARK_.call(null,match_data__13666))?cljs.core.first.call(null,match_data__13666):match_data__13666);
var post_match__13669 = cljs.core.subs.call(null,s,(match_idx__13667 + cljs.core.count.call(null,match_str__13668)));
if(cljs.core.truth_(match_data__13666))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13666,re_seq.call(null,re,post_match__13669));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__13676__13677 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___13678 = cljs.core.nth.call(null,vec__13676__13677,0,null);
var flags__13679 = cljs.core.nth.call(null,vec__13676__13677,1,null);
var pattern__13680 = cljs.core.nth.call(null,vec__13676__13677,2,null);
return (new RegExp(pattern__13680,flags__13679));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__13670_SHARP_){
return print_one.call(null,p1__13670_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__13684__13685 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__13684__13685)
{var o__13686 = cljs.core.first.call(null,G__13684__13685);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__13686,writer,opts);
{
var G__13687 = cljs.core.next.call(null,G__13684__13685);
G__13684__13685 = G__13687;
continue;
}
} else
{}
break;
}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__13691__13692 = cljs.core.seq.call(null,ss);
while(true){
if(G__13691__13692)
{var s__13693 = cljs.core.first.call(null,G__13691__13692);
cljs.core._write.call(null,writer,s__13693);
{
var G__13694 = cljs.core.next.call(null,G__13691__13692);
G__13691__13692 = G__13694;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__13695){
var writer = cljs.core.first(arglist__13695);
var ss = cljs.core.rest(arglist__13695);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});

goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__13696 = this;
return this__13696.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__13697 = this;
return null;
});
cljs.core.StringBufferWriter;
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____13707 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13707))
{var and__3822__auto____13711 = (function (){var G__13708__13709 = obj;
if(G__13708__13709)
{if((function (){var or__3824__auto____13710 = (G__13708__13709.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13710)
{return or__3824__auto____13710;
} else
{return G__13708__13709.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13708__13709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13708__13709);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13708__13709);
}
})();
if(cljs.core.truth_(and__3822__auto____13711))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13711;
}
} else
{return and__3822__auto____13707;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____13712 = !((obj == null));
if(and__3822__auto____13712)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13712;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__13713__13714 = obj;
if(G__13713__13714)
{if((function (){var or__3824__auto____13715 = (G__13713__13714.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13715)
{return or__3824__auto____13715;
} else
{return G__13713__13714.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13713__13714.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13713__13714);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13713__13714);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((function (){var and__3822__auto____13728 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13728))
{var and__3822__auto____13732 = (function (){var G__13729__13730 = obj;
if(G__13729__13730)
{if((function (){var or__3824__auto____13731 = (G__13729__13730.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13731)
{return or__3824__auto____13731;
} else
{return G__13729__13730.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13729__13730.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13729__13730);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13729__13730);
}
})();
if(cljs.core.truth_(and__3822__auto____13732))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13732;
}
} else
{return and__3822__auto____13728;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____13733 = !((obj == null));
if(and__3822__auto____13733)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13733;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__13734__13735 = obj;
if(G__13734__13735)
{if((function (){var or__3824__auto____13736 = (G__13734__13735.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____13736)
{return or__3824__auto____13736;
} else
{return G__13734__13735.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__13734__13735.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__13734__13735);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__13734__13735);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__13737__13738 = obj;
if(G__13737__13738)
{if((function (){var or__3824__auto____13739 = (G__13737__13738.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13739)
{return or__3824__auto____13739;
} else
{return G__13737__13738.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13737__13738.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13737__13738);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13737__13738);
}
})())
{return cljs.core.apply.call(null,cljs.core.write_all,writer,cljs.core._pr_seq.call(null,obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj)))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if("\uFDD0'else")
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var G__13743__13744 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__13743__13744)
{var obj__13745 = cljs.core.first.call(null,G__13743__13744);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__13745,writer,opts);
{
var G__13746 = cljs.core.next.call(null,G__13743__13744);
G__13743__13744 = G__13746;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__13749 = (new goog.string.StringBuffer());
var writer__13750 = (new cljs.core.StringBufferWriter(sb__13749));
cljs.core.pr_seq_writer.call(null,objs,writer__13750,opts);
cljs.core._flush.call(null,writer__13750);
return sb__13749;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb__13752 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__13752.append("\n");
return [cljs.core.str(sb__13752)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__13753){
var objs = cljs.core.seq(arglist__13753);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__13754){
var objs = cljs.core.seq(arglist__13754);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__13755){
var objs = cljs.core.seq(arglist__13755);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__13756){
var objs = cljs.core.seq(arglist__13756);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__13757){
var objs = cljs.core.seq(arglist__13757);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__13758){
var objs = cljs.core.seq(arglist__13758);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__13759){
var objs = cljs.core.seq(arglist__13759);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__13760){
var objs = cljs.core.seq(arglist__13760);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__13761){
var fmt = cljs.core.first(arglist__13761);
var args = cljs.core.rest(arglist__13761);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13762 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13762,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13763 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13763,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13764 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13764,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____13765 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13765))
{var nspc__13766 = temp__3974__auto____13765;
return [cljs.core.str(nspc__13766),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____13767 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13767))
{var nspc__13768 = temp__3974__auto____13767;
return [cljs.core.str(nspc__13768),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13769 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13769,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__13771 = (function (n,len){
var ns__13770 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__13770) < len))
{{
var G__13773 = [cljs.core.str("0"),cljs.core.str(ns__13770)].join('');
ns__13770 = G__13773;
continue;
}
} else
{return ns__13770;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__13771.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__13771.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__13771.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__13771.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__13771.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__13771.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13772 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13772,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13774 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13774,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write.call(null,writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13775 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13775,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13776 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13776,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write.call(null,writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,":");
var temp__3974__auto____13777 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13777))
{var nspc__13778 = temp__3974__auto____13777;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__13778)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____13779 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13779))
{var nspc__13780 = temp__3974__auto____13779;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__13780)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljs.core._write.call(null,writer,goog.string.quote(obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13781 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13781,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize__13783 = (function (n,len){
var ns__13782 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__13782) < len))
{{
var G__13785 = [cljs.core.str("0"),cljs.core.str(ns__13782)].join('');
ns__13782 = G__13785;
continue;
}
} else
{return ns__13782;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__13783.call(null,(d.getUTCMonth() + 1),2),"-",normalize__13783.call(null,d.getUTCDate(),2),"T",normalize__13783.call(null,d.getUTCHours(),2),":",normalize__13783.call(null,d.getUTCMinutes(),2),":",normalize__13783.call(null,d.getUTCSeconds(),2),".",normalize__13783.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13784 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13784,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13786 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__13787 = this;
var G__13788__13789 = cljs.core.seq.call(null,this__13787.watches);
while(true){
if(G__13788__13789)
{var vec__13790__13791 = cljs.core.first.call(null,G__13788__13789);
var key__13792 = cljs.core.nth.call(null,vec__13790__13791,0,null);
var f__13793 = cljs.core.nth.call(null,vec__13790__13791,1,null);
f__13793.call(null,key__13792,this$,oldval,newval);
{
var G__13801 = cljs.core.next.call(null,G__13788__13789);
G__13788__13789 = G__13801;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__13794 = this;
return this$.watches = cljs.core.assoc.call(null,this__13794.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__13795 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13795.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__13796 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__13796.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__13797 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__13797.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__13798 = this;
return this__13798.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13799 = this;
return this__13799.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13800 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13813__delegate = function (x,p__13802){
var map__13808__13809 = p__13802;
var map__13808__13810 = ((cljs.core.seq_QMARK_.call(null,map__13808__13809))?cljs.core.apply.call(null,cljs.core.hash_map,map__13808__13809):map__13808__13809);
var validator__13811 = cljs.core._lookup.call(null,map__13808__13810,"\uFDD0'validator",null);
var meta__13812 = cljs.core._lookup.call(null,map__13808__13810,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__13812,validator__13811,null));
};
var G__13813 = function (x,var_args){
var p__13802 = null;
if (goog.isDef(var_args)) {
  p__13802 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13813__delegate.call(this, x, p__13802);
};
G__13813.cljs$lang$maxFixedArity = 1;
G__13813.cljs$lang$applyTo = (function (arglist__13814){
var x = cljs.core.first(arglist__13814);
var p__13802 = cljs.core.rest(arglist__13814);
return G__13813__delegate(x, p__13802);
});
G__13813.cljs$lang$arity$variadic = G__13813__delegate;
return G__13813;
})()
;
atom = function(x,var_args){
var p__13802 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____13818 = a.validator;
if(cljs.core.truth_(temp__3974__auto____13818))
{var validate__13819 = temp__3974__auto____13818;
if(cljs.core.truth_(validate__13819.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__13820 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13820,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__13821__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13821 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13821__delegate.call(this, a, f, x, y, z, more);
};
G__13821.cljs$lang$maxFixedArity = 5;
G__13821.cljs$lang$applyTo = (function (arglist__13822){
var a = cljs.core.first(arglist__13822);
var f = cljs.core.first(cljs.core.next(arglist__13822));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13822)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13822))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13822)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13822)))));
return G__13821__delegate(a, f, x, y, z, more);
});
G__13821.cljs$lang$arity$variadic = G__13821__delegate;
return G__13821;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13823){
var iref = cljs.core.first(arglist__13823);
var f = cljs.core.first(cljs.core.next(arglist__13823));
var args = cljs.core.rest(cljs.core.next(arglist__13823));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__13824 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__13824.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13825 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__13825.state,(function (p__13826){
var map__13827__13828 = p__13826;
var map__13827__13829 = ((cljs.core.seq_QMARK_.call(null,map__13827__13828))?cljs.core.apply.call(null,cljs.core.hash_map,map__13827__13828):map__13827__13828);
var curr_state__13830 = map__13827__13829;
var done__13831 = cljs.core._lookup.call(null,map__13827__13829,"\uFDD0'done",null);
if(cljs.core.truth_(done__13831))
{return curr_state__13830;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__13825.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__13852__13853 = options;
var map__13852__13854 = ((cljs.core.seq_QMARK_.call(null,map__13852__13853))?cljs.core.apply.call(null,cljs.core.hash_map,map__13852__13853):map__13852__13853);
var keywordize_keys__13855 = cljs.core._lookup.call(null,map__13852__13854,"\uFDD0'keywordize-keys",null);
var keyfn__13856 = (cljs.core.truth_(keywordize_keys__13855)?cljs.core.keyword:cljs.core.str);
var f__13871 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5971__auto____13870 = (function iter__13864(s__13865){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13865__13868 = s__13865;
while(true){
if(cljs.core.seq.call(null,s__13865__13868))
{var k__13869 = cljs.core.first.call(null,s__13865__13868);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__13856.call(null,k__13869),thisfn.call(null,(x[k__13869]))], true),iter__13864.call(null,cljs.core.rest.call(null,s__13865__13868)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5971__auto____13870.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__13871.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13872){
var x = cljs.core.first(arglist__13872);
var options = cljs.core.rest(arglist__13872);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__13877 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__13881__delegate = function (args){
var temp__3971__auto____13878 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__13877),args,null);
if(cljs.core.truth_(temp__3971__auto____13878))
{var v__13879 = temp__3971__auto____13878;
return v__13879;
} else
{var ret__13880 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__13877,cljs.core.assoc,args,ret__13880);
return ret__13880;
}
};
var G__13881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13881__delegate.call(this, args);
};
G__13881.cljs$lang$maxFixedArity = 0;
G__13881.cljs$lang$applyTo = (function (arglist__13882){
var args = cljs.core.seq(arglist__13882);;
return G__13881__delegate(args);
});
G__13881.cljs$lang$arity$variadic = G__13881__delegate;
return G__13881;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__13884 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__13884))
{{
var G__13885 = ret__13884;
f = G__13885;
continue;
}
} else
{return ret__13884;
}
break;
}
});
var trampoline__2 = (function() { 
var G__13886__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13886 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13886__delegate.call(this, f, args);
};
G__13886.cljs$lang$maxFixedArity = 1;
G__13886.cljs$lang$applyTo = (function (arglist__13887){
var f = cljs.core.first(arglist__13887);
var args = cljs.core.rest(arglist__13887);
return G__13886__delegate(f, args);
});
G__13886.cljs$lang$arity$variadic = G__13886__delegate;
return G__13886;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__13889 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__13889,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__13889,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____13898 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____13898)
{return or__3824__auto____13898;
} else
{var or__3824__auto____13899 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____13899)
{return or__3824__auto____13899;
} else
{var and__3822__auto____13900 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____13900)
{var and__3822__auto____13901 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____13901)
{var and__3822__auto____13902 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____13902)
{var ret__13903 = true;
var i__13904 = 0;
while(true){
if((function (){var or__3824__auto____13905 = cljs.core.not.call(null,ret__13903);
if(or__3824__auto____13905)
{return or__3824__auto____13905;
} else
{return (i__13904 === cljs.core.count.call(null,parent));
}
})())
{return ret__13903;
} else
{{
var G__13906 = isa_QMARK_.call(null,h,child.call(null,i__13904),parent.call(null,i__13904));
var G__13907 = (i__13904 + 1);
ret__13903 = G__13906;
i__13904 = G__13907;
continue;
}
}
break;
}
} else
{return and__3822__auto____13902;
}
} else
{return and__3822__auto____13901;
}
} else
{return and__3822__auto____13900;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6967))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6971))))].join('')));
}
var tp__13916 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__13917 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__13918 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__13919 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____13920 = ((cljs.core.contains_QMARK_.call(null,tp__13916.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__13918.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__13918.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__13916,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__13919.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__13917,parent,ta__13918),"\uFDD0'descendants":tf__13919.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__13918,tag,td__13917)});
})());
if(cljs.core.truth_(or__3824__auto____13920))
{return or__3824__auto____13920;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__13925 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__13926 = (cljs.core.truth_(parentMap__13925.call(null,tag))?cljs.core.disj.call(null,parentMap__13925.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__13927 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13926))?cljs.core.assoc.call(null,parentMap__13925,tag,childsParents__13926):cljs.core.dissoc.call(null,parentMap__13925,tag));
var deriv_seq__13928 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13908_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13908_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13908_SHARP_),cljs.core.second.call(null,p1__13908_SHARP_)));
}),cljs.core.seq.call(null,newParents__13927)));
if(cljs.core.contains_QMARK_.call(null,parentMap__13925.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__13909_SHARP_,p2__13910_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13909_SHARP_,p2__13910_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13928));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__13936 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____13938 = (cljs.core.truth_((function (){var and__3822__auto____13937 = xprefs__13936;
if(cljs.core.truth_(and__3822__auto____13937))
{return xprefs__13936.call(null,y);
} else
{return and__3822__auto____13937;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____13938))
{return or__3824__auto____13938;
} else
{var or__3824__auto____13940 = (function (){var ps__13939 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__13939) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13939),prefer_table)))
{} else
{}
{
var G__13943 = cljs.core.rest.call(null,ps__13939);
ps__13939 = G__13943;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____13940))
{return or__3824__auto____13940;
} else
{var or__3824__auto____13942 = (function (){var ps__13941 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__13941) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13941),y,prefer_table)))
{} else
{}
{
var G__13944 = cljs.core.rest.call(null,ps__13941);
ps__13941 = G__13944;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____13942))
{return or__3824__auto____13942;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____13946 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____13946))
{return or__3824__auto____13946;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13964 = cljs.core.reduce.call(null,(function (be,p__13956){
var vec__13957__13958 = p__13956;
var k__13959 = cljs.core.nth.call(null,vec__13957__13958,0,null);
var ___13960 = cljs.core.nth.call(null,vec__13957__13958,1,null);
var e__13961 = vec__13957__13958;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13959))
{var be2__13963 = (cljs.core.truth_((function (){var or__3824__auto____13962 = (be == null);
if(or__3824__auto____13962)
{return or__3824__auto____13962;
} else
{return cljs.core.dominates.call(null,k__13959,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13961:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13963),k__13959,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__13959),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__13963)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__13963;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__13964))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13964));
return cljs.core.second.call(null,best_entry__13964);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____13969 = mf;
if(and__3822__auto____13969)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____13969;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5874__auto____13970 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13971 = (cljs.core._reset[goog.typeOf(x__5874__auto____13970)]);
if(or__3824__auto____13971)
{return or__3824__auto____13971;
} else
{var or__3824__auto____13972 = (cljs.core._reset["_"]);
if(or__3824__auto____13972)
{return or__3824__auto____13972;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____13977 = mf;
if(and__3822__auto____13977)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____13977;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5874__auto____13978 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13979 = (cljs.core._add_method[goog.typeOf(x__5874__auto____13978)]);
if(or__3824__auto____13979)
{return or__3824__auto____13979;
} else
{var or__3824__auto____13980 = (cljs.core._add_method["_"]);
if(or__3824__auto____13980)
{return or__3824__auto____13980;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____13985 = mf;
if(and__3822__auto____13985)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____13985;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5874__auto____13986 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13987 = (cljs.core._remove_method[goog.typeOf(x__5874__auto____13986)]);
if(or__3824__auto____13987)
{return or__3824__auto____13987;
} else
{var or__3824__auto____13988 = (cljs.core._remove_method["_"]);
if(or__3824__auto____13988)
{return or__3824__auto____13988;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____13993 = mf;
if(and__3822__auto____13993)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____13993;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5874__auto____13994 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13995 = (cljs.core._prefer_method[goog.typeOf(x__5874__auto____13994)]);
if(or__3824__auto____13995)
{return or__3824__auto____13995;
} else
{var or__3824__auto____13996 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____13996)
{return or__3824__auto____13996;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____14001 = mf;
if(and__3822__auto____14001)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____14001;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5874__auto____14002 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14003 = (cljs.core._get_method[goog.typeOf(x__5874__auto____14002)]);
if(or__3824__auto____14003)
{return or__3824__auto____14003;
} else
{var or__3824__auto____14004 = (cljs.core._get_method["_"]);
if(or__3824__auto____14004)
{return or__3824__auto____14004;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____14009 = mf;
if(and__3822__auto____14009)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____14009;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5874__auto____14010 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14011 = (cljs.core._methods[goog.typeOf(x__5874__auto____14010)]);
if(or__3824__auto____14011)
{return or__3824__auto____14011;
} else
{var or__3824__auto____14012 = (cljs.core._methods["_"]);
if(or__3824__auto____14012)
{return or__3824__auto____14012;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____14017 = mf;
if(and__3822__auto____14017)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____14017;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5874__auto____14018 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14019 = (cljs.core._prefers[goog.typeOf(x__5874__auto____14018)]);
if(or__3824__auto____14019)
{return or__3824__auto____14019;
} else
{var or__3824__auto____14020 = (cljs.core._prefers["_"]);
if(or__3824__auto____14020)
{return or__3824__auto____14020;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____14025 = mf;
if(and__3822__auto____14025)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____14025;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5874__auto____14026 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14027 = (cljs.core._dispatch[goog.typeOf(x__5874__auto____14026)]);
if(or__3824__auto____14027)
{return or__3824__auto____14027;
} else
{var or__3824__auto____14028 = (cljs.core._dispatch["_"]);
if(or__3824__auto____14028)
{return or__3824__auto____14028;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14031 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14032 = cljs.core._get_method.call(null,mf,dispatch_val__14031);
if(cljs.core.truth_(target_fn__14032))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__14031)].join('')));
}
return cljs.core.apply.call(null,target_fn__14032,args);
});

goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14033 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__14034 = this;
cljs.core.swap_BANG_.call(null,this__14034.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14034.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14034.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14034.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__14035 = this;
cljs.core.swap_BANG_.call(null,this__14035.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14035.method_cache,this__14035.method_table,this__14035.cached_hierarchy,this__14035.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__14036 = this;
cljs.core.swap_BANG_.call(null,this__14036.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14036.method_cache,this__14036.method_table,this__14036.cached_hierarchy,this__14036.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__14037 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14037.cached_hierarchy),cljs.core.deref.call(null,this__14037.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__14037.method_cache,this__14037.method_table,this__14037.cached_hierarchy,this__14037.hierarchy);
}
var temp__3971__auto____14038 = cljs.core.deref.call(null,this__14037.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____14038))
{var target_fn__14039 = temp__3971__auto____14038;
return target_fn__14039;
} else
{var temp__3971__auto____14040 = cljs.core.find_and_cache_best_method.call(null,this__14037.name,dispatch_val,this__14037.hierarchy,this__14037.method_table,this__14037.prefer_table,this__14037.method_cache,this__14037.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____14040))
{var target_fn__14041 = temp__3971__auto____14040;
return target_fn__14041;
} else
{return cljs.core.deref.call(null,this__14037.method_table).call(null,this__14037.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14042 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14042.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__14042.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__14042.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14042.method_cache,this__14042.method_table,this__14042.cached_hierarchy,this__14042.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__14043 = this;
return cljs.core.deref.call(null,this__14043.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__14044 = this;
return cljs.core.deref.call(null,this__14044.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__14045 = this;
return cljs.core.do_dispatch.call(null,mf,this__14045.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14047__delegate = function (_,args){
var self__14046 = this;
return cljs.core._dispatch.call(null,self__14046,args);
};
var G__14047 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14047__delegate.call(this, _, args);
};
G__14047.cljs$lang$maxFixedArity = 1;
G__14047.cljs$lang$applyTo = (function (arglist__14048){
var _ = cljs.core.first(arglist__14048);
var args = cljs.core.rest(arglist__14048);
return G__14047__delegate(_, args);
});
G__14047.cljs$lang$arity$variadic = G__14047__delegate;
return G__14047;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__14049 = this;
return cljs.core._dispatch.call(null,self__14049,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14050 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_14052,writer,_){
var this__14051 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__14051.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_14054,_){
var this__14053 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__14053.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__14055 = this;
var and__3822__auto____14056 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____14056)
{return (this__14055.uuid === other.uuid);
} else
{return and__3822__auto____14056;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__14057 = this;
var this__14058 = this;
return cljs.core.pr_str.call(null,this__14058);
});
cljs.core.UUID;
