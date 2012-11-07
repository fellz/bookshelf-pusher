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
var x__10153 = (((x == null))?null:x);
if((p[goog.typeOf(x__10153)]))
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
var G__10154__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__10154 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10154__delegate.call(this, array, i, idxs);
};
G__10154.cljs$lang$maxFixedArity = 2;
G__10154.cljs$lang$applyTo = (function (arglist__10155){
var array = cljs.core.first(arglist__10155);
var i = cljs.core.first(cljs.core.next(arglist__10155));
var idxs = cljs.core.rest(cljs.core.next(arglist__10155));
return G__10154__delegate(array, i, idxs);
});
G__10154.cljs$lang$arity$variadic = G__10154__delegate;
return G__10154;
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
if((function (){var and__3822__auto____10240 = this$;
if(and__3822__auto____10240)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____10240;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5892__auto____10241 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10242 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10241)]);
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
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____10244 = this$;
if(and__3822__auto____10244)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____10244;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5892__auto____10245 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10246 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10245)]);
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
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____10248 = this$;
if(and__3822__auto____10248)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____10248;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5892__auto____10249 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10250 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10249)]);
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
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____10252 = this$;
if(and__3822__auto____10252)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____10252;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5892__auto____10253 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10254 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10253)]);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____10256 = this$;
if(and__3822__auto____10256)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____10256;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5892__auto____10257 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10258 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10257)]);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____10260 = this$;
if(and__3822__auto____10260)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____10260;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5892__auto____10261 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10262 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10261)]);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____10264 = this$;
if(and__3822__auto____10264)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____10264;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5892__auto____10265 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10266 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10265)]);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____10268 = this$;
if(and__3822__auto____10268)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____10268;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5892__auto____10269 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10270 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10269)]);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____10272 = this$;
if(and__3822__auto____10272)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____10272;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5892__auto____10273 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10274 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10273)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____10276 = this$;
if(and__3822__auto____10276)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____10276;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5892__auto____10277 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10278 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10277)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____10280 = this$;
if(and__3822__auto____10280)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____10280;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5892__auto____10281 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10282 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10281)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____10284 = this$;
if(and__3822__auto____10284)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____10284;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5892__auto____10285 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10286 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10285)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____10288 = this$;
if(and__3822__auto____10288)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____10288;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5892__auto____10289 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10290 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10289)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____10292 = this$;
if(and__3822__auto____10292)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____10292;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5892__auto____10293 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10294 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10293)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____10296 = this$;
if(and__3822__auto____10296)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____10296;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5892__auto____10297 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10298 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10297)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____10300 = this$;
if(and__3822__auto____10300)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____10300;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5892__auto____10301 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10302 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10301)]);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____10304 = this$;
if(and__3822__auto____10304)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____10304;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5892__auto____10305 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10306 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10305)]);
if(or__3824__auto____10306)
{return or__3824__auto____10306;
} else
{var or__3824__auto____10307 = (cljs.core._invoke["_"]);
if(or__3824__auto____10307)
{return or__3824__auto____10307;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____10308 = this$;
if(and__3822__auto____10308)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____10308;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5892__auto____10309 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10310 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10309)]);
if(or__3824__auto____10310)
{return or__3824__auto____10310;
} else
{var or__3824__auto____10311 = (cljs.core._invoke["_"]);
if(or__3824__auto____10311)
{return or__3824__auto____10311;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____10312 = this$;
if(and__3822__auto____10312)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____10312;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5892__auto____10313 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10314 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10313)]);
if(or__3824__auto____10314)
{return or__3824__auto____10314;
} else
{var or__3824__auto____10315 = (cljs.core._invoke["_"]);
if(or__3824__auto____10315)
{return or__3824__auto____10315;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____10316 = this$;
if(and__3822__auto____10316)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____10316;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5892__auto____10317 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10318 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10317)]);
if(or__3824__auto____10318)
{return or__3824__auto____10318;
} else
{var or__3824__auto____10319 = (cljs.core._invoke["_"]);
if(or__3824__auto____10319)
{return or__3824__auto____10319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____10320 = this$;
if(and__3822__auto____10320)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____10320;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5892__auto____10321 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10322 = (cljs.core._invoke[goog.typeOf(x__5892__auto____10321)]);
if(or__3824__auto____10322)
{return or__3824__auto____10322;
} else
{var or__3824__auto____10323 = (cljs.core._invoke["_"]);
if(or__3824__auto____10323)
{return or__3824__auto____10323;
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
if((function (){var and__3822__auto____10328 = coll;
if(and__3822__auto____10328)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____10328;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5892__auto____10329 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10330 = (cljs.core._count[goog.typeOf(x__5892__auto____10329)]);
if(or__3824__auto____10330)
{return or__3824__auto____10330;
} else
{var or__3824__auto____10331 = (cljs.core._count["_"]);
if(or__3824__auto____10331)
{return or__3824__auto____10331;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____10336 = coll;
if(and__3822__auto____10336)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____10336;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5892__auto____10337 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10338 = (cljs.core._empty[goog.typeOf(x__5892__auto____10337)]);
if(or__3824__auto____10338)
{return or__3824__auto____10338;
} else
{var or__3824__auto____10339 = (cljs.core._empty["_"]);
if(or__3824__auto____10339)
{return or__3824__auto____10339;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____10344 = coll;
if(and__3822__auto____10344)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____10344;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5892__auto____10345 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10346 = (cljs.core._conj[goog.typeOf(x__5892__auto____10345)]);
if(or__3824__auto____10346)
{return or__3824__auto____10346;
} else
{var or__3824__auto____10347 = (cljs.core._conj["_"]);
if(or__3824__auto____10347)
{return or__3824__auto____10347;
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
if((function (){var and__3822__auto____10356 = coll;
if(and__3822__auto____10356)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____10356;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5892__auto____10357 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10358 = (cljs.core._nth[goog.typeOf(x__5892__auto____10357)]);
if(or__3824__auto____10358)
{return or__3824__auto____10358;
} else
{var or__3824__auto____10359 = (cljs.core._nth["_"]);
if(or__3824__auto____10359)
{return or__3824__auto____10359;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____10360 = coll;
if(and__3822__auto____10360)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____10360;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5892__auto____10361 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10362 = (cljs.core._nth[goog.typeOf(x__5892__auto____10361)]);
if(or__3824__auto____10362)
{return or__3824__auto____10362;
} else
{var or__3824__auto____10363 = (cljs.core._nth["_"]);
if(or__3824__auto____10363)
{return or__3824__auto____10363;
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
if((function (){var and__3822__auto____10368 = coll;
if(and__3822__auto____10368)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____10368;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5892__auto____10369 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10370 = (cljs.core._first[goog.typeOf(x__5892__auto____10369)]);
if(or__3824__auto____10370)
{return or__3824__auto____10370;
} else
{var or__3824__auto____10371 = (cljs.core._first["_"]);
if(or__3824__auto____10371)
{return or__3824__auto____10371;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____10376 = coll;
if(and__3822__auto____10376)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____10376;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5892__auto____10377 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10378 = (cljs.core._rest[goog.typeOf(x__5892__auto____10377)]);
if(or__3824__auto____10378)
{return or__3824__auto____10378;
} else
{var or__3824__auto____10379 = (cljs.core._rest["_"]);
if(or__3824__auto____10379)
{return or__3824__auto____10379;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____10384 = coll;
if(and__3822__auto____10384)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____10384;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5892__auto____10385 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10386 = (cljs.core._next[goog.typeOf(x__5892__auto____10385)]);
if(or__3824__auto____10386)
{return or__3824__auto____10386;
} else
{var or__3824__auto____10387 = (cljs.core._next["_"]);
if(or__3824__auto____10387)
{return or__3824__auto____10387;
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
if((function (){var and__3822__auto____10396 = o;
if(and__3822__auto____10396)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____10396;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5892__auto____10397 = (((o == null))?null:o);
return (function (){var or__3824__auto____10398 = (cljs.core._lookup[goog.typeOf(x__5892__auto____10397)]);
if(or__3824__auto____10398)
{return or__3824__auto____10398;
} else
{var or__3824__auto____10399 = (cljs.core._lookup["_"]);
if(or__3824__auto____10399)
{return or__3824__auto____10399;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____10400 = o;
if(and__3822__auto____10400)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____10400;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5892__auto____10401 = (((o == null))?null:o);
return (function (){var or__3824__auto____10402 = (cljs.core._lookup[goog.typeOf(x__5892__auto____10401)]);
if(or__3824__auto____10402)
{return or__3824__auto____10402;
} else
{var or__3824__auto____10403 = (cljs.core._lookup["_"]);
if(or__3824__auto____10403)
{return or__3824__auto____10403;
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
if((function (){var and__3822__auto____10408 = coll;
if(and__3822__auto____10408)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____10408;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5892__auto____10409 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10410 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5892__auto____10409)]);
if(or__3824__auto____10410)
{return or__3824__auto____10410;
} else
{var or__3824__auto____10411 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____10411)
{return or__3824__auto____10411;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____10416 = coll;
if(and__3822__auto____10416)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____10416;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5892__auto____10417 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10418 = (cljs.core._assoc[goog.typeOf(x__5892__auto____10417)]);
if(or__3824__auto____10418)
{return or__3824__auto____10418;
} else
{var or__3824__auto____10419 = (cljs.core._assoc["_"]);
if(or__3824__auto____10419)
{return or__3824__auto____10419;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____10424 = coll;
if(and__3822__auto____10424)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____10424;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5892__auto____10425 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10426 = (cljs.core._dissoc[goog.typeOf(x__5892__auto____10425)]);
if(or__3824__auto____10426)
{return or__3824__auto____10426;
} else
{var or__3824__auto____10427 = (cljs.core._dissoc["_"]);
if(or__3824__auto____10427)
{return or__3824__auto____10427;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____10432 = coll;
if(and__3822__auto____10432)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____10432;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5892__auto____10433 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10434 = (cljs.core._key[goog.typeOf(x__5892__auto____10433)]);
if(or__3824__auto____10434)
{return or__3824__auto____10434;
} else
{var or__3824__auto____10435 = (cljs.core._key["_"]);
if(or__3824__auto____10435)
{return or__3824__auto____10435;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____10440 = coll;
if(and__3822__auto____10440)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____10440;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5892__auto____10441 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10442 = (cljs.core._val[goog.typeOf(x__5892__auto____10441)]);
if(or__3824__auto____10442)
{return or__3824__auto____10442;
} else
{var or__3824__auto____10443 = (cljs.core._val["_"]);
if(or__3824__auto____10443)
{return or__3824__auto____10443;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____10448 = coll;
if(and__3822__auto____10448)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____10448;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5892__auto____10449 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10450 = (cljs.core._disjoin[goog.typeOf(x__5892__auto____10449)]);
if(or__3824__auto____10450)
{return or__3824__auto____10450;
} else
{var or__3824__auto____10451 = (cljs.core._disjoin["_"]);
if(or__3824__auto____10451)
{return or__3824__auto____10451;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____10456 = coll;
if(and__3822__auto____10456)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____10456;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5892__auto____10457 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10458 = (cljs.core._peek[goog.typeOf(x__5892__auto____10457)]);
if(or__3824__auto____10458)
{return or__3824__auto____10458;
} else
{var or__3824__auto____10459 = (cljs.core._peek["_"]);
if(or__3824__auto____10459)
{return or__3824__auto____10459;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____10464 = coll;
if(and__3822__auto____10464)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____10464;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5892__auto____10465 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10466 = (cljs.core._pop[goog.typeOf(x__5892__auto____10465)]);
if(or__3824__auto____10466)
{return or__3824__auto____10466;
} else
{var or__3824__auto____10467 = (cljs.core._pop["_"]);
if(or__3824__auto____10467)
{return or__3824__auto____10467;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____10472 = coll;
if(and__3822__auto____10472)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____10472;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5892__auto____10473 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10474 = (cljs.core._assoc_n[goog.typeOf(x__5892__auto____10473)]);
if(or__3824__auto____10474)
{return or__3824__auto____10474;
} else
{var or__3824__auto____10475 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____10475)
{return or__3824__auto____10475;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____10480 = o;
if(and__3822__auto____10480)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____10480;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5892__auto____10481 = (((o == null))?null:o);
return (function (){var or__3824__auto____10482 = (cljs.core._deref[goog.typeOf(x__5892__auto____10481)]);
if(or__3824__auto____10482)
{return or__3824__auto____10482;
} else
{var or__3824__auto____10483 = (cljs.core._deref["_"]);
if(or__3824__auto____10483)
{return or__3824__auto____10483;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____10488 = o;
if(and__3822__auto____10488)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____10488;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5892__auto____10489 = (((o == null))?null:o);
return (function (){var or__3824__auto____10490 = (cljs.core._deref_with_timeout[goog.typeOf(x__5892__auto____10489)]);
if(or__3824__auto____10490)
{return or__3824__auto____10490;
} else
{var or__3824__auto____10491 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____10491)
{return or__3824__auto____10491;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____10496 = o;
if(and__3822__auto____10496)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____10496;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5892__auto____10497 = (((o == null))?null:o);
return (function (){var or__3824__auto____10498 = (cljs.core._meta[goog.typeOf(x__5892__auto____10497)]);
if(or__3824__auto____10498)
{return or__3824__auto____10498;
} else
{var or__3824__auto____10499 = (cljs.core._meta["_"]);
if(or__3824__auto____10499)
{return or__3824__auto____10499;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____10504 = o;
if(and__3822__auto____10504)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____10504;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5892__auto____10505 = (((o == null))?null:o);
return (function (){var or__3824__auto____10506 = (cljs.core._with_meta[goog.typeOf(x__5892__auto____10505)]);
if(or__3824__auto____10506)
{return or__3824__auto____10506;
} else
{var or__3824__auto____10507 = (cljs.core._with_meta["_"]);
if(or__3824__auto____10507)
{return or__3824__auto____10507;
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
if((function (){var and__3822__auto____10516 = coll;
if(and__3822__auto____10516)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____10516;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5892__auto____10517 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10518 = (cljs.core._reduce[goog.typeOf(x__5892__auto____10517)]);
if(or__3824__auto____10518)
{return or__3824__auto____10518;
} else
{var or__3824__auto____10519 = (cljs.core._reduce["_"]);
if(or__3824__auto____10519)
{return or__3824__auto____10519;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____10520 = coll;
if(and__3822__auto____10520)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____10520;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5892__auto____10521 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10522 = (cljs.core._reduce[goog.typeOf(x__5892__auto____10521)]);
if(or__3824__auto____10522)
{return or__3824__auto____10522;
} else
{var or__3824__auto____10523 = (cljs.core._reduce["_"]);
if(or__3824__auto____10523)
{return or__3824__auto____10523;
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
if((function (){var and__3822__auto____10528 = coll;
if(and__3822__auto____10528)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____10528;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5892__auto____10529 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10530 = (cljs.core._kv_reduce[goog.typeOf(x__5892__auto____10529)]);
if(or__3824__auto____10530)
{return or__3824__auto____10530;
} else
{var or__3824__auto____10531 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____10531)
{return or__3824__auto____10531;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____10536 = o;
if(and__3822__auto____10536)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____10536;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5892__auto____10537 = (((o == null))?null:o);
return (function (){var or__3824__auto____10538 = (cljs.core._equiv[goog.typeOf(x__5892__auto____10537)]);
if(or__3824__auto____10538)
{return or__3824__auto____10538;
} else
{var or__3824__auto____10539 = (cljs.core._equiv["_"]);
if(or__3824__auto____10539)
{return or__3824__auto____10539;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____10544 = o;
if(and__3822__auto____10544)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____10544;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5892__auto____10545 = (((o == null))?null:o);
return (function (){var or__3824__auto____10546 = (cljs.core._hash[goog.typeOf(x__5892__auto____10545)]);
if(or__3824__auto____10546)
{return or__3824__auto____10546;
} else
{var or__3824__auto____10547 = (cljs.core._hash["_"]);
if(or__3824__auto____10547)
{return or__3824__auto____10547;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____10552 = o;
if(and__3822__auto____10552)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____10552;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5892__auto____10553 = (((o == null))?null:o);
return (function (){var or__3824__auto____10554 = (cljs.core._seq[goog.typeOf(x__5892__auto____10553)]);
if(or__3824__auto____10554)
{return or__3824__auto____10554;
} else
{var or__3824__auto____10555 = (cljs.core._seq["_"]);
if(or__3824__auto____10555)
{return or__3824__auto____10555;
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
if((function (){var and__3822__auto____10560 = coll;
if(and__3822__auto____10560)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____10560;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5892__auto____10561 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10562 = (cljs.core._rseq[goog.typeOf(x__5892__auto____10561)]);
if(or__3824__auto____10562)
{return or__3824__auto____10562;
} else
{var or__3824__auto____10563 = (cljs.core._rseq["_"]);
if(or__3824__auto____10563)
{return or__3824__auto____10563;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____10568 = coll;
if(and__3822__auto____10568)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____10568;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5892__auto____10569 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10570 = (cljs.core._sorted_seq[goog.typeOf(x__5892__auto____10569)]);
if(or__3824__auto____10570)
{return or__3824__auto____10570;
} else
{var or__3824__auto____10571 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____10571)
{return or__3824__auto____10571;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____10576 = coll;
if(and__3822__auto____10576)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____10576;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5892__auto____10577 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10578 = (cljs.core._sorted_seq_from[goog.typeOf(x__5892__auto____10577)]);
if(or__3824__auto____10578)
{return or__3824__auto____10578;
} else
{var or__3824__auto____10579 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____10579)
{return or__3824__auto____10579;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____10584 = coll;
if(and__3822__auto____10584)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____10584;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5892__auto____10585 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10586 = (cljs.core._entry_key[goog.typeOf(x__5892__auto____10585)]);
if(or__3824__auto____10586)
{return or__3824__auto____10586;
} else
{var or__3824__auto____10587 = (cljs.core._entry_key["_"]);
if(or__3824__auto____10587)
{return or__3824__auto____10587;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____10592 = coll;
if(and__3822__auto____10592)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____10592;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5892__auto____10593 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10594 = (cljs.core._comparator[goog.typeOf(x__5892__auto____10593)]);
if(or__3824__auto____10594)
{return or__3824__auto____10594;
} else
{var or__3824__auto____10595 = (cljs.core._comparator["_"]);
if(or__3824__auto____10595)
{return or__3824__auto____10595;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____10600 = o;
if(and__3822__auto____10600)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____10600;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5892__auto____10601 = (((o == null))?null:o);
return (function (){var or__3824__auto____10602 = (cljs.core._pr_seq[goog.typeOf(x__5892__auto____10601)]);
if(or__3824__auto____10602)
{return or__3824__auto____10602;
} else
{var or__3824__auto____10603 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____10603)
{return or__3824__auto____10603;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____10608 = writer;
if(and__3822__auto____10608)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____10608;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5892__auto____10609 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____10610 = (cljs.core._write[goog.typeOf(x__5892__auto____10609)]);
if(or__3824__auto____10610)
{return or__3824__auto____10610;
} else
{var or__3824__auto____10611 = (cljs.core._write["_"]);
if(or__3824__auto____10611)
{return or__3824__auto____10611;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____10616 = writer;
if(and__3822__auto____10616)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____10616;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5892__auto____10617 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____10618 = (cljs.core._flush[goog.typeOf(x__5892__auto____10617)]);
if(or__3824__auto____10618)
{return or__3824__auto____10618;
} else
{var or__3824__auto____10619 = (cljs.core._flush["_"]);
if(or__3824__auto____10619)
{return or__3824__auto____10619;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____10624 = o;
if(and__3822__auto____10624)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____10624;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5892__auto____10625 = (((o == null))?null:o);
return (function (){var or__3824__auto____10626 = (cljs.core._pr_writer[goog.typeOf(x__5892__auto____10625)]);
if(or__3824__auto____10626)
{return or__3824__auto____10626;
} else
{var or__3824__auto____10627 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____10627)
{return or__3824__auto____10627;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____10632 = d;
if(and__3822__auto____10632)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____10632;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5892__auto____10633 = (((d == null))?null:d);
return (function (){var or__3824__auto____10634 = (cljs.core._realized_QMARK_[goog.typeOf(x__5892__auto____10633)]);
if(or__3824__auto____10634)
{return or__3824__auto____10634;
} else
{var or__3824__auto____10635 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____10635)
{return or__3824__auto____10635;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____10640 = this$;
if(and__3822__auto____10640)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____10640;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5892__auto____10641 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10642 = (cljs.core._notify_watches[goog.typeOf(x__5892__auto____10641)]);
if(or__3824__auto____10642)
{return or__3824__auto____10642;
} else
{var or__3824__auto____10643 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____10643)
{return or__3824__auto____10643;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____10648 = this$;
if(and__3822__auto____10648)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____10648;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5892__auto____10649 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10650 = (cljs.core._add_watch[goog.typeOf(x__5892__auto____10649)]);
if(or__3824__auto____10650)
{return or__3824__auto____10650;
} else
{var or__3824__auto____10651 = (cljs.core._add_watch["_"]);
if(or__3824__auto____10651)
{return or__3824__auto____10651;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____10656 = this$;
if(and__3822__auto____10656)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____10656;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5892__auto____10657 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____10658 = (cljs.core._remove_watch[goog.typeOf(x__5892__auto____10657)]);
if(or__3824__auto____10658)
{return or__3824__auto____10658;
} else
{var or__3824__auto____10659 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____10659)
{return or__3824__auto____10659;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____10664 = coll;
if(and__3822__auto____10664)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____10664;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5892__auto____10665 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10666 = (cljs.core._as_transient[goog.typeOf(x__5892__auto____10665)]);
if(or__3824__auto____10666)
{return or__3824__auto____10666;
} else
{var or__3824__auto____10667 = (cljs.core._as_transient["_"]);
if(or__3824__auto____10667)
{return or__3824__auto____10667;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____10672 = tcoll;
if(and__3822__auto____10672)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____10672;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5892__auto____10673 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10674 = (cljs.core._conj_BANG_[goog.typeOf(x__5892__auto____10673)]);
if(or__3824__auto____10674)
{return or__3824__auto____10674;
} else
{var or__3824__auto____10675 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____10675)
{return or__3824__auto____10675;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____10680 = tcoll;
if(and__3822__auto____10680)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____10680;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5892__auto____10681 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10682 = (cljs.core._persistent_BANG_[goog.typeOf(x__5892__auto____10681)]);
if(or__3824__auto____10682)
{return or__3824__auto____10682;
} else
{var or__3824__auto____10683 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____10683)
{return or__3824__auto____10683;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____10688 = tcoll;
if(and__3822__auto____10688)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____10688;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5892__auto____10689 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10690 = (cljs.core._assoc_BANG_[goog.typeOf(x__5892__auto____10689)]);
if(or__3824__auto____10690)
{return or__3824__auto____10690;
} else
{var or__3824__auto____10691 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____10691)
{return or__3824__auto____10691;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____10696 = tcoll;
if(and__3822__auto____10696)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____10696;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5892__auto____10697 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10698 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5892__auto____10697)]);
if(or__3824__auto____10698)
{return or__3824__auto____10698;
} else
{var or__3824__auto____10699 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____10699)
{return or__3824__auto____10699;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____10704 = tcoll;
if(and__3822__auto____10704)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____10704;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5892__auto____10705 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10706 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5892__auto____10705)]);
if(or__3824__auto____10706)
{return or__3824__auto____10706;
} else
{var or__3824__auto____10707 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____10707)
{return or__3824__auto____10707;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____10712 = tcoll;
if(and__3822__auto____10712)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____10712;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5892__auto____10713 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10714 = (cljs.core._pop_BANG_[goog.typeOf(x__5892__auto____10713)]);
if(or__3824__auto____10714)
{return or__3824__auto____10714;
} else
{var or__3824__auto____10715 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____10715)
{return or__3824__auto____10715;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____10720 = tcoll;
if(and__3822__auto____10720)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____10720;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5892__auto____10721 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____10722 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5892__auto____10721)]);
if(or__3824__auto____10722)
{return or__3824__auto____10722;
} else
{var or__3824__auto____10723 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____10723)
{return or__3824__auto____10723;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____10728 = x;
if(and__3822__auto____10728)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____10728;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5892__auto____10729 = (((x == null))?null:x);
return (function (){var or__3824__auto____10730 = (cljs.core._compare[goog.typeOf(x__5892__auto____10729)]);
if(or__3824__auto____10730)
{return or__3824__auto____10730;
} else
{var or__3824__auto____10731 = (cljs.core._compare["_"]);
if(or__3824__auto____10731)
{return or__3824__auto____10731;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____10736 = coll;
if(and__3822__auto____10736)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____10736;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5892__auto____10737 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10738 = (cljs.core._drop_first[goog.typeOf(x__5892__auto____10737)]);
if(or__3824__auto____10738)
{return or__3824__auto____10738;
} else
{var or__3824__auto____10739 = (cljs.core._drop_first["_"]);
if(or__3824__auto____10739)
{return or__3824__auto____10739;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____10744 = coll;
if(and__3822__auto____10744)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____10744;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5892__auto____10745 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10746 = (cljs.core._chunked_first[goog.typeOf(x__5892__auto____10745)]);
if(or__3824__auto____10746)
{return or__3824__auto____10746;
} else
{var or__3824__auto____10747 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____10747)
{return or__3824__auto____10747;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____10752 = coll;
if(and__3822__auto____10752)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____10752;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5892__auto____10753 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10754 = (cljs.core._chunked_rest[goog.typeOf(x__5892__auto____10753)]);
if(or__3824__auto____10754)
{return or__3824__auto____10754;
} else
{var or__3824__auto____10755 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____10755)
{return or__3824__auto____10755;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____10760 = coll;
if(and__3822__auto____10760)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____10760;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5892__auto____10761 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____10762 = (cljs.core._chunked_next[goog.typeOf(x__5892__auto____10761)]);
if(or__3824__auto____10762)
{return or__3824__auto____10762;
} else
{var or__3824__auto____10763 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____10763)
{return or__3824__auto____10763;
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
{if((function (){var G__10767__10768 = coll;
if(G__10767__10768)
{if((function (){var or__3824__auto____10769 = (G__10767__10768.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____10769)
{return or__3824__auto____10769;
} else
{return G__10767__10768.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__10767__10768.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__10767__10768);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__10767__10768);
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
{if((function (){var G__10774__10775 = coll;
if(G__10774__10775)
{if((function (){var or__3824__auto____10776 = (G__10774__10775.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10776)
{return or__3824__auto____10776;
} else
{return G__10774__10775.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10774__10775.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10774__10775);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10774__10775);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__10777 = cljs.core.seq.call(null,coll);
if((s__10777 == null))
{return null;
} else
{return cljs.core._first.call(null,s__10777);
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
{if((function (){var G__10782__10783 = coll;
if(G__10782__10783)
{if((function (){var or__3824__auto____10784 = (G__10782__10783.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____10784)
{return or__3824__auto____10784;
} else
{return G__10782__10783.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__10782__10783.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10782__10783);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__10782__10783);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__10785 = cljs.core.seq.call(null,coll);
if(!((s__10785 == null)))
{return cljs.core._rest.call(null,s__10785);
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
{if((function (){var G__10789__10790 = coll;
if(G__10789__10790)
{if((function (){var or__3824__auto____10791 = (G__10789__10790.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____10791)
{return or__3824__auto____10791;
} else
{return G__10789__10790.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__10789__10790.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__10789__10790);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__10789__10790);
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
var or__3824__auto____10793 = (x === y);
if(or__3824__auto____10793)
{return or__3824__auto____10793;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__10794__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__10795 = y;
var G__10796 = cljs.core.first.call(null,more);
var G__10797 = cljs.core.next.call(null,more);
x = G__10795;
y = G__10796;
more = G__10797;
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
var G__10794 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10794__delegate.call(this, x, y, more);
};
G__10794.cljs$lang$maxFixedArity = 2;
G__10794.cljs$lang$applyTo = (function (arglist__10798){
var x = cljs.core.first(arglist__10798);
var y = cljs.core.first(cljs.core.next(arglist__10798));
var more = cljs.core.rest(cljs.core.next(arglist__10798));
return G__10794__delegate(x, y, more);
});
G__10794.cljs$lang$arity$variadic = G__10794__delegate;
return G__10794;
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
var G__10799 = null;
var G__10799__2 = (function (o,k){
return null;
});
var G__10799__3 = (function (o,k,not_found){
return not_found;
});
G__10799 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__10799__2.call(this,o,k);
case 3:
return G__10799__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10799;
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
var G__10800 = null;
var G__10800__2 = (function (_,f){
return f.call(null);
});
var G__10800__3 = (function (_,f,start){
return start;
});
G__10800 = function(_,f,start){
switch(arguments.length){
case 2:
return G__10800__2.call(this,_,f);
case 3:
return G__10800__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10800;
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
var G__10801 = null;
var G__10801__2 = (function (_,n){
return null;
});
var G__10801__3 = (function (_,n,not_found){
return not_found;
});
G__10801 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__10801__2.call(this,_,n);
case 3:
return G__10801__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10801;
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
var and__3822__auto____10802 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____10802)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____10802;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__10803 = this;
return this__10803.val;
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
var cnt__10816 = cljs.core._count.call(null,cicoll);
if((cnt__10816 === 0))
{return f.call(null);
} else
{var val__10817 = cljs.core._nth.call(null,cicoll,0);
var n__10818 = 1;
while(true){
if((n__10818 < cnt__10816))
{var nval__10819 = f.call(null,val__10817,cljs.core._nth.call(null,cicoll,n__10818));
if(cljs.core.reduced_QMARK_.call(null,nval__10819))
{return cljs.core.deref.call(null,nval__10819);
} else
{{
var G__10828 = nval__10819;
var G__10829 = (n__10818 + 1);
val__10817 = G__10828;
n__10818 = G__10829;
continue;
}
}
} else
{return val__10817;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__10820 = cljs.core._count.call(null,cicoll);
var val__10821 = val;
var n__10822 = 0;
while(true){
if((n__10822 < cnt__10820))
{var nval__10823 = f.call(null,val__10821,cljs.core._nth.call(null,cicoll,n__10822));
if(cljs.core.reduced_QMARK_.call(null,nval__10823))
{return cljs.core.deref.call(null,nval__10823);
} else
{{
var G__10830 = nval__10823;
var G__10831 = (n__10822 + 1);
val__10821 = G__10830;
n__10822 = G__10831;
continue;
}
}
} else
{return val__10821;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__10824 = cljs.core._count.call(null,cicoll);
var val__10825 = val;
var n__10826 = idx;
while(true){
if((n__10826 < cnt__10824))
{var nval__10827 = f.call(null,val__10825,cljs.core._nth.call(null,cicoll,n__10826));
if(cljs.core.reduced_QMARK_.call(null,nval__10827))
{return cljs.core.deref.call(null,nval__10827);
} else
{{
var G__10832 = nval__10827;
var G__10833 = (n__10826 + 1);
val__10825 = G__10832;
n__10826 = G__10833;
continue;
}
}
} else
{return val__10825;
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
var cnt__10846 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__10847 = (arr[0]);
var n__10848 = 1;
while(true){
if((n__10848 < cnt__10846))
{var nval__10849 = f.call(null,val__10847,(arr[n__10848]));
if(cljs.core.reduced_QMARK_.call(null,nval__10849))
{return cljs.core.deref.call(null,nval__10849);
} else
{{
var G__10858 = nval__10849;
var G__10859 = (n__10848 + 1);
val__10847 = G__10858;
n__10848 = G__10859;
continue;
}
}
} else
{return val__10847;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__10850 = arr.length;
var val__10851 = val;
var n__10852 = 0;
while(true){
if((n__10852 < cnt__10850))
{var nval__10853 = f.call(null,val__10851,(arr[n__10852]));
if(cljs.core.reduced_QMARK_.call(null,nval__10853))
{return cljs.core.deref.call(null,nval__10853);
} else
{{
var G__10860 = nval__10853;
var G__10861 = (n__10852 + 1);
val__10851 = G__10860;
n__10852 = G__10861;
continue;
}
}
} else
{return val__10851;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__10854 = arr.length;
var val__10855 = val;
var n__10856 = idx;
while(true){
if((n__10856 < cnt__10854))
{var nval__10857 = f.call(null,val__10855,(arr[n__10856]));
if(cljs.core.reduced_QMARK_.call(null,nval__10857))
{return cljs.core.deref.call(null,nval__10857);
} else
{{
var G__10862 = nval__10857;
var G__10863 = (n__10856 + 1);
val__10855 = G__10862;
n__10856 = G__10863;
continue;
}
}
} else
{return val__10855;
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
var G__10867__10868 = x;
if(G__10867__10868)
{if((function (){var or__3824__auto____10869 = (G__10867__10868.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____10869)
{return or__3824__auto____10869;
} else
{return G__10867__10868.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__10867__10868.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__10867__10868);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__10867__10868);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__10873__10874 = x;
if(G__10873__10874)
{if((function (){var or__3824__auto____10875 = (G__10873__10874.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10875)
{return or__3824__auto____10875;
} else
{return G__10873__10874.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10873__10874.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10873__10874);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10873__10874);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10876 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__10877 = this;
if(((this__10877.i + 1) < this__10877.a.length))
{return (new cljs.core.IndexedSeq(this__10877.a,(this__10877.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10878 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10879 = this;
var c__10880 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__10880 > 0))
{return (new cljs.core.RSeq(coll,(c__10880 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__10881 = this;
var this__10882 = this;
return cljs.core.pr_str.call(null,this__10882);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10883 = this;
if(cljs.core.counted_QMARK_.call(null,this__10883.a))
{return cljs.core.ci_reduce.call(null,this__10883.a,f,(this__10883.a[this__10883.i]),(this__10883.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__10883.a[this__10883.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10884 = this;
if(cljs.core.counted_QMARK_.call(null,this__10884.a))
{return cljs.core.ci_reduce.call(null,this__10884.a,f,start,this__10884.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10885 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__10886 = this;
return (this__10886.a.length - this__10886.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__10887 = this;
return (this__10887.a[this__10887.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__10888 = this;
if(((this__10888.i + 1) < this__10888.a.length))
{return (new cljs.core.IndexedSeq(this__10888.a,(this__10888.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10889 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10890 = this;
var i__10891 = (n + this__10890.i);
if((i__10891 < this__10890.a.length))
{return (this__10890.a[i__10891]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10892 = this;
var i__10893 = (n + this__10892.i);
if((i__10893 < this__10892.a.length))
{return (this__10892.a[i__10893]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10894 = this;
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
var G__10895 = null;
var G__10895__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__10895__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__10895 = function(array,f,start){
switch(arguments.length){
case 2:
return G__10895__2.call(this,array,f);
case 3:
return G__10895__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10895;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__10896 = null;
var G__10896__2 = (function (array,k){
return (array[k]);
});
var G__10896__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__10896 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__10896__2.call(this,array,k);
case 3:
return G__10896__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10896;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__10897 = null;
var G__10897__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__10897__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__10897 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__10897__2.call(this,array,n);
case 3:
return G__10897__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10897;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10898 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10899 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__10900 = this;
var this__10901 = this;
return cljs.core.pr_str.call(null,this__10901);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10902 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10903 = this;
return (this__10903.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10904 = this;
return cljs.core._nth.call(null,this__10904.ci,this__10904.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10905 = this;
if((this__10905.i > 0))
{return (new cljs.core.RSeq(this__10905.ci,(this__10905.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10906 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__10907 = this;
return (new cljs.core.RSeq(this__10907.ci,this__10907.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10908 = this;
return this__10908.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10909 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10909.meta);
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
var sn__10911 = cljs.core.next.call(null,s);
if(!((sn__10911 == null)))
{{
var G__10912 = sn__10911;
s = G__10912;
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
var G__10913__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__10914 = conj.call(null,coll,x);
var G__10915 = cljs.core.first.call(null,xs);
var G__10916 = cljs.core.next.call(null,xs);
coll = G__10914;
x = G__10915;
xs = G__10916;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__10913 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10913__delegate.call(this, coll, x, xs);
};
G__10913.cljs$lang$maxFixedArity = 2;
G__10913.cljs$lang$applyTo = (function (arglist__10917){
var coll = cljs.core.first(arglist__10917);
var x = cljs.core.first(cljs.core.next(arglist__10917));
var xs = cljs.core.rest(cljs.core.next(arglist__10917));
return G__10913__delegate(coll, x, xs);
});
G__10913.cljs$lang$arity$variadic = G__10913__delegate;
return G__10913;
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
var s__10920 = cljs.core.seq.call(null,coll);
var acc__10921 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__10920))
{return (acc__10921 + cljs.core._count.call(null,s__10920));
} else
{{
var G__10922 = cljs.core.next.call(null,s__10920);
var G__10923 = (acc__10921 + 1);
s__10920 = G__10922;
acc__10921 = G__10923;
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
var G__10924 = cljs.core.next.call(null,coll);
var G__10925 = (n - 1);
coll = G__10924;
n = G__10925;
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
var G__10926 = cljs.core.next.call(null,coll);
var G__10927 = (n - 1);
var G__10928 = not_found;
coll = G__10926;
n = G__10927;
not_found = G__10928;
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
{if((function (){var G__10935__10936 = coll;
if(G__10935__10936)
{if((function (){var or__3824__auto____10937 = (G__10935__10936.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10937)
{return or__3824__auto____10937;
} else
{return G__10935__10936.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10935__10936.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10935__10936);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10935__10936);
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
{if((function (){var G__10938__10939 = coll;
if(G__10938__10939)
{if((function (){var or__3824__auto____10940 = (G__10938__10939.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____10940)
{return or__3824__auto____10940;
} else
{return G__10938__10939.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__10938__10939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10938__10939);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__10938__10939);
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
var G__10943__delegate = function (coll,k,v,kvs){
while(true){
var ret__10942 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__10944 = ret__10942;
var G__10945 = cljs.core.first.call(null,kvs);
var G__10946 = cljs.core.second.call(null,kvs);
var G__10947 = cljs.core.nnext.call(null,kvs);
coll = G__10944;
k = G__10945;
v = G__10946;
kvs = G__10947;
continue;
}
} else
{return ret__10942;
}
break;
}
};
var G__10943 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10943__delegate.call(this, coll, k, v, kvs);
};
G__10943.cljs$lang$maxFixedArity = 3;
G__10943.cljs$lang$applyTo = (function (arglist__10948){
var coll = cljs.core.first(arglist__10948);
var k = cljs.core.first(cljs.core.next(arglist__10948));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10948)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10948)));
return G__10943__delegate(coll, k, v, kvs);
});
G__10943.cljs$lang$arity$variadic = G__10943__delegate;
return G__10943;
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
var G__10951__delegate = function (coll,k,ks){
while(true){
var ret__10950 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__10952 = ret__10950;
var G__10953 = cljs.core.first.call(null,ks);
var G__10954 = cljs.core.next.call(null,ks);
coll = G__10952;
k = G__10953;
ks = G__10954;
continue;
}
} else
{return ret__10950;
}
break;
}
};
var G__10951 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10951__delegate.call(this, coll, k, ks);
};
G__10951.cljs$lang$maxFixedArity = 2;
G__10951.cljs$lang$applyTo = (function (arglist__10955){
var coll = cljs.core.first(arglist__10955);
var k = cljs.core.first(cljs.core.next(arglist__10955));
var ks = cljs.core.rest(cljs.core.next(arglist__10955));
return G__10951__delegate(coll, k, ks);
});
G__10951.cljs$lang$arity$variadic = G__10951__delegate;
return G__10951;
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
if((function (){var G__10959__10960 = o;
if(G__10959__10960)
{if((function (){var or__3824__auto____10961 = (G__10959__10960.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10961)
{return or__3824__auto____10961;
} else
{return G__10959__10960.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10959__10960.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10959__10960);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10959__10960);
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
var G__10964__delegate = function (coll,k,ks){
while(true){
var ret__10963 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__10965 = ret__10963;
var G__10966 = cljs.core.first.call(null,ks);
var G__10967 = cljs.core.next.call(null,ks);
coll = G__10965;
k = G__10966;
ks = G__10967;
continue;
}
} else
{return ret__10963;
}
break;
}
};
var G__10964 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10964__delegate.call(this, coll, k, ks);
};
G__10964.cljs$lang$maxFixedArity = 2;
G__10964.cljs$lang$applyTo = (function (arglist__10968){
var coll = cljs.core.first(arglist__10968);
var k = cljs.core.first(cljs.core.next(arglist__10968));
var ks = cljs.core.rest(cljs.core.next(arglist__10968));
return G__10964__delegate(coll, k, ks);
});
G__10964.cljs$lang$arity$variadic = G__10964__delegate;
return G__10964;
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
var h__10970 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__10970);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__10970;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__10972 = (cljs.core.string_hash_cache[k]);
if(!((h__10972 == null)))
{return h__10972;
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
if((function (){var and__3822__auto____10974 = goog.isString(o);
if(and__3822__auto____10974)
{return check_cache;
} else
{return and__3822__auto____10974;
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
{var G__10978__10979 = x;
if(G__10978__10979)
{if((function (){var or__3824__auto____10980 = (G__10978__10979.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____10980)
{return or__3824__auto____10980;
} else
{return G__10978__10979.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__10978__10979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__10978__10979);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__10978__10979);
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
{var G__10984__10985 = x;
if(G__10984__10985)
{if((function (){var or__3824__auto____10986 = (G__10984__10985.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____10986)
{return or__3824__auto____10986;
} else
{return G__10984__10985.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__10984__10985.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__10984__10985);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__10984__10985);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__10990__10991 = x;
if(G__10990__10991)
{if((function (){var or__3824__auto____10992 = (G__10990__10991.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____10992)
{return or__3824__auto____10992;
} else
{return G__10990__10991.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__10990__10991.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__10990__10991);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__10990__10991);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__10996__10997 = x;
if(G__10996__10997)
{if((function (){var or__3824__auto____10998 = (G__10996__10997.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____10998)
{return or__3824__auto____10998;
} else
{return G__10996__10997.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__10996__10997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__10996__10997);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__10996__10997);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11002__11003 = x;
if(G__11002__11003)
{if((function (){var or__3824__auto____11004 = (G__11002__11003.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11004)
{return or__3824__auto____11004;
} else
{return G__11002__11003.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11002__11003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11002__11003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11002__11003);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11008__11009 = x;
if(G__11008__11009)
{if((function (){var or__3824__auto____11010 = (G__11008__11009.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____11010)
{return or__3824__auto____11010;
} else
{return G__11008__11009.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__11008__11009.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11008__11009);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11008__11009);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__11014__11015 = x;
if(G__11014__11015)
{if((function (){var or__3824__auto____11016 = (G__11014__11015.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____11016)
{return or__3824__auto____11016;
} else
{return G__11014__11015.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__11014__11015.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11014__11015);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11014__11015);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__11020__11021 = x;
if(G__11020__11021)
{if((function (){var or__3824__auto____11022 = (G__11020__11021.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____11022)
{return or__3824__auto____11022;
} else
{return G__11020__11021.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__11020__11021.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11020__11021);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11020__11021);
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
var G__11023__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__11023 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11023__delegate.call(this, keyvals);
};
G__11023.cljs$lang$maxFixedArity = 0;
G__11023.cljs$lang$applyTo = (function (arglist__11024){
var keyvals = cljs.core.seq(arglist__11024);;
return G__11023__delegate(keyvals);
});
G__11023.cljs$lang$arity$variadic = G__11023__delegate;
return G__11023;
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
var keys__11026 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__11026.push(key);
}));
return keys__11026;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__11030 = i;
var j__11031 = j;
var len__11032 = len;
while(true){
if((len__11032 === 0))
{return to;
} else
{(to[j__11031] = (from[i__11030]));
{
var G__11033 = (i__11030 + 1);
var G__11034 = (j__11031 + 1);
var G__11035 = (len__11032 - 1);
i__11030 = G__11033;
j__11031 = G__11034;
len__11032 = G__11035;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__11039 = (i + (len - 1));
var j__11040 = (j + (len - 1));
var len__11041 = len;
while(true){
if((len__11041 === 0))
{return to;
} else
{(to[j__11040] = (from[i__11039]));
{
var G__11042 = (i__11039 - 1);
var G__11043 = (j__11040 - 1);
var G__11044 = (len__11041 - 1);
i__11039 = G__11042;
j__11040 = G__11043;
len__11041 = G__11044;
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
{var G__11048__11049 = s;
if(G__11048__11049)
{if((function (){var or__3824__auto____11050 = (G__11048__11049.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11050)
{return or__3824__auto____11050;
} else
{return G__11048__11049.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11048__11049.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11048__11049);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11048__11049);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11054__11055 = s;
if(G__11054__11055)
{if((function (){var or__3824__auto____11056 = (G__11054__11055.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11056)
{return or__3824__auto____11056;
} else
{return G__11054__11055.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11054__11055.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11054__11055);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11054__11055);
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
var and__3822__auto____11059 = goog.isString(x);
if(and__3822__auto____11059)
{return !((function (){var or__3824__auto____11060 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____11060)
{return or__3824__auto____11060;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____11059;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____11062 = goog.isString(x);
if(and__3822__auto____11062)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____11062;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____11064 = goog.isString(x);
if(and__3822__auto____11064)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____11064;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____11069 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____11069)
{return or__3824__auto____11069;
} else
{var G__11070__11071 = f;
if(G__11070__11071)
{if((function (){var or__3824__auto____11072 = (G__11070__11071.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____11072)
{return or__3824__auto____11072;
} else
{return G__11070__11071.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__11070__11071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11070__11071);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11070__11071);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____11076 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____11076)
{var and__3822__auto____11077 = !(isNaN(n));
if(and__3822__auto____11077)
{var and__3822__auto____11078 = !((n === Infinity));
if(and__3822__auto____11078)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____11078;
}
} else
{return and__3822__auto____11077;
}
} else
{return and__3822__auto____11076;
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
if((function (){var and__3822__auto____11081 = !((coll == null));
if(and__3822__auto____11081)
{var and__3822__auto____11082 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____11082)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____11082;
}
} else
{return and__3822__auto____11081;
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
var G__11091__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__11087 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__11088 = more;
while(true){
var x__11089 = cljs.core.first.call(null,xs__11088);
var etc__11090 = cljs.core.next.call(null,xs__11088);
if(cljs.core.truth_(xs__11088))
{if(cljs.core.contains_QMARK_.call(null,s__11087,x__11089))
{return false;
} else
{{
var G__11092 = cljs.core.conj.call(null,s__11087,x__11089);
var G__11093 = etc__11090;
s__11087 = G__11092;
xs__11088 = G__11093;
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
var G__11091 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11091__delegate.call(this, x, y, more);
};
G__11091.cljs$lang$maxFixedArity = 2;
G__11091.cljs$lang$applyTo = (function (arglist__11094){
var x = cljs.core.first(arglist__11094);
var y = cljs.core.first(cljs.core.next(arglist__11094));
var more = cljs.core.rest(cljs.core.next(arglist__11094));
return G__11091__delegate(x, y, more);
});
G__11091.cljs$lang$arity$variadic = G__11091__delegate;
return G__11091;
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
{if((function (){var G__11098__11099 = x;
if(G__11098__11099)
{if((function (){var or__3824__auto____11100 = (G__11098__11099.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____11100)
{return or__3824__auto____11100;
} else
{return G__11098__11099.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__11098__11099.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11098__11099);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11098__11099);
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
var xl__11105 = cljs.core.count.call(null,xs);
var yl__11106 = cljs.core.count.call(null,ys);
if((xl__11105 < yl__11106))
{return -1;
} else
{if((xl__11105 > yl__11106))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__11105,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__11107 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____11108 = (d__11107 === 0);
if(and__3822__auto____11108)
{return ((n + 1) < len);
} else
{return and__3822__auto____11108;
}
})())
{{
var G__11109 = xs;
var G__11110 = ys;
var G__11111 = len;
var G__11112 = (n + 1);
xs = G__11109;
ys = G__11110;
len = G__11111;
n = G__11112;
continue;
}
} else
{return d__11107;
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
var r__11114 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__11114))
{return r__11114;
} else
{if(cljs.core.truth_(r__11114))
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
{var a__11116 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__11116,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11116);
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
var temp__3971__auto____11122 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11122)
{var s__11123 = temp__3971__auto____11122;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11123),cljs.core.next.call(null,s__11123));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__11124 = val;
var coll__11125 = cljs.core.seq.call(null,coll);
while(true){
if(coll__11125)
{var nval__11126 = f.call(null,val__11124,cljs.core.first.call(null,coll__11125));
if(cljs.core.reduced_QMARK_.call(null,nval__11126))
{return cljs.core.deref.call(null,nval__11126);
} else
{{
var G__11127 = nval__11126;
var G__11128 = cljs.core.next.call(null,coll__11125);
val__11124 = G__11127;
coll__11125 = G__11128;
continue;
}
}
} else
{return val__11124;
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
var a__11130 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__11130);
return cljs.core.vec.call(null,a__11130);
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
if((function (){var G__11137__11138 = coll;
if(G__11137__11138)
{if((function (){var or__3824__auto____11139 = (G__11137__11138.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11139)
{return or__3824__auto____11139;
} else
{return G__11137__11138.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11137__11138.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11137__11138);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11137__11138);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__11140__11141 = coll;
if(G__11140__11141)
{if((function (){var or__3824__auto____11142 = (G__11140__11141.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11142)
{return or__3824__auto____11142;
} else
{return G__11140__11141.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11140__11141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11140__11141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11140__11141);
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
var G__11143__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__11143 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11143__delegate.call(this, x, y, more);
};
G__11143.cljs$lang$maxFixedArity = 2;
G__11143.cljs$lang$applyTo = (function (arglist__11144){
var x = cljs.core.first(arglist__11144);
var y = cljs.core.first(cljs.core.next(arglist__11144));
var more = cljs.core.rest(cljs.core.next(arglist__11144));
return G__11143__delegate(x, y, more);
});
G__11143.cljs$lang$arity$variadic = G__11143__delegate;
return G__11143;
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
var G__11145__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__11145 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11145__delegate.call(this, x, y, more);
};
G__11145.cljs$lang$maxFixedArity = 2;
G__11145.cljs$lang$applyTo = (function (arglist__11146){
var x = cljs.core.first(arglist__11146);
var y = cljs.core.first(cljs.core.next(arglist__11146));
var more = cljs.core.rest(cljs.core.next(arglist__11146));
return G__11145__delegate(x, y, more);
});
G__11145.cljs$lang$arity$variadic = G__11145__delegate;
return G__11145;
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
var G__11147__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__11147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11147__delegate.call(this, x, y, more);
};
G__11147.cljs$lang$maxFixedArity = 2;
G__11147.cljs$lang$applyTo = (function (arglist__11148){
var x = cljs.core.first(arglist__11148);
var y = cljs.core.first(cljs.core.next(arglist__11148));
var more = cljs.core.rest(cljs.core.next(arglist__11148));
return G__11147__delegate(x, y, more);
});
G__11147.cljs$lang$arity$variadic = G__11147__delegate;
return G__11147;
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
var G__11149__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__11149 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11149__delegate.call(this, x, y, more);
};
G__11149.cljs$lang$maxFixedArity = 2;
G__11149.cljs$lang$applyTo = (function (arglist__11150){
var x = cljs.core.first(arglist__11150);
var y = cljs.core.first(cljs.core.next(arglist__11150));
var more = cljs.core.rest(cljs.core.next(arglist__11150));
return G__11149__delegate(x, y, more);
});
G__11149.cljs$lang$arity$variadic = G__11149__delegate;
return G__11149;
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
var G__11151__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__11152 = y;
var G__11153 = cljs.core.first.call(null,more);
var G__11154 = cljs.core.next.call(null,more);
x = G__11152;
y = G__11153;
more = G__11154;
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
var G__11151 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11151__delegate.call(this, x, y, more);
};
G__11151.cljs$lang$maxFixedArity = 2;
G__11151.cljs$lang$applyTo = (function (arglist__11155){
var x = cljs.core.first(arglist__11155);
var y = cljs.core.first(cljs.core.next(arglist__11155));
var more = cljs.core.rest(cljs.core.next(arglist__11155));
return G__11151__delegate(x, y, more);
});
G__11151.cljs$lang$arity$variadic = G__11151__delegate;
return G__11151;
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
var G__11156__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__11157 = y;
var G__11158 = cljs.core.first.call(null,more);
var G__11159 = cljs.core.next.call(null,more);
x = G__11157;
y = G__11158;
more = G__11159;
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
var G__11156 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11156__delegate.call(this, x, y, more);
};
G__11156.cljs$lang$maxFixedArity = 2;
G__11156.cljs$lang$applyTo = (function (arglist__11160){
var x = cljs.core.first(arglist__11160);
var y = cljs.core.first(cljs.core.next(arglist__11160));
var more = cljs.core.rest(cljs.core.next(arglist__11160));
return G__11156__delegate(x, y, more);
});
G__11156.cljs$lang$arity$variadic = G__11156__delegate;
return G__11156;
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
var G__11161__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__11162 = y;
var G__11163 = cljs.core.first.call(null,more);
var G__11164 = cljs.core.next.call(null,more);
x = G__11162;
y = G__11163;
more = G__11164;
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
var G__11161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11161__delegate.call(this, x, y, more);
};
G__11161.cljs$lang$maxFixedArity = 2;
G__11161.cljs$lang$applyTo = (function (arglist__11165){
var x = cljs.core.first(arglist__11165);
var y = cljs.core.first(cljs.core.next(arglist__11165));
var more = cljs.core.rest(cljs.core.next(arglist__11165));
return G__11161__delegate(x, y, more);
});
G__11161.cljs$lang$arity$variadic = G__11161__delegate;
return G__11161;
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
var G__11166__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__11167 = y;
var G__11168 = cljs.core.first.call(null,more);
var G__11169 = cljs.core.next.call(null,more);
x = G__11167;
y = G__11168;
more = G__11169;
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
var G__11166 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11166__delegate.call(this, x, y, more);
};
G__11166.cljs$lang$maxFixedArity = 2;
G__11166.cljs$lang$applyTo = (function (arglist__11170){
var x = cljs.core.first(arglist__11170);
var y = cljs.core.first(cljs.core.next(arglist__11170));
var more = cljs.core.rest(cljs.core.next(arglist__11170));
return G__11166__delegate(x, y, more);
});
G__11166.cljs$lang$arity$variadic = G__11166__delegate;
return G__11166;
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
var G__11171__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__11171 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11171__delegate.call(this, x, y, more);
};
G__11171.cljs$lang$maxFixedArity = 2;
G__11171.cljs$lang$applyTo = (function (arglist__11172){
var x = cljs.core.first(arglist__11172);
var y = cljs.core.first(cljs.core.next(arglist__11172));
var more = cljs.core.rest(cljs.core.next(arglist__11172));
return G__11171__delegate(x, y, more);
});
G__11171.cljs$lang$arity$variadic = G__11171__delegate;
return G__11171;
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
var G__11173__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__11173 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11173__delegate.call(this, x, y, more);
};
G__11173.cljs$lang$maxFixedArity = 2;
G__11173.cljs$lang$applyTo = (function (arglist__11174){
var x = cljs.core.first(arglist__11174);
var y = cljs.core.first(cljs.core.next(arglist__11174));
var more = cljs.core.rest(cljs.core.next(arglist__11174));
return G__11173__delegate(x, y, more);
});
G__11173.cljs$lang$arity$variadic = G__11173__delegate;
return G__11173;
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
var rem__11176 = (n % d);
return cljs.core.fix.call(null,((n - rem__11176) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__11178 = cljs.core.quot.call(null,n,d);
return (n - (d * q__11178));
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
var v__11181 = (v - ((v >> 1) & 1431655765));
var v__11182 = ((v__11181 & 858993459) + ((v__11181 >> 2) & 858993459));
return ((((v__11182 + (v__11182 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__11183__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__11184 = y;
var G__11185 = cljs.core.first.call(null,more);
var G__11186 = cljs.core.next.call(null,more);
x = G__11184;
y = G__11185;
more = G__11186;
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
var G__11183 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11183__delegate.call(this, x, y, more);
};
G__11183.cljs$lang$maxFixedArity = 2;
G__11183.cljs$lang$applyTo = (function (arglist__11187){
var x = cljs.core.first(arglist__11187);
var y = cljs.core.first(cljs.core.next(arglist__11187));
var more = cljs.core.rest(cljs.core.next(arglist__11187));
return G__11183__delegate(x, y, more);
});
G__11183.cljs$lang$arity$variadic = G__11183__delegate;
return G__11183;
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
var n__11191 = n;
var xs__11192 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11193 = xs__11192;
if(and__3822__auto____11193)
{return (n__11191 > 0);
} else
{return and__3822__auto____11193;
}
})()))
{{
var G__11194 = (n__11191 - 1);
var G__11195 = cljs.core.next.call(null,xs__11192);
n__11191 = G__11194;
xs__11192 = G__11195;
continue;
}
} else
{return xs__11192;
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
var G__11196__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11197 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__11198 = cljs.core.next.call(null,more);
sb = G__11197;
more = G__11198;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__11196 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11196__delegate.call(this, x, ys);
};
G__11196.cljs$lang$maxFixedArity = 1;
G__11196.cljs$lang$applyTo = (function (arglist__11199){
var x = cljs.core.first(arglist__11199);
var ys = cljs.core.rest(arglist__11199);
return G__11196__delegate(x, ys);
});
G__11196.cljs$lang$arity$variadic = G__11196__delegate;
return G__11196;
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
var G__11200__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11201 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__11202 = cljs.core.next.call(null,more);
sb = G__11201;
more = G__11202;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__11200 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11200__delegate.call(this, x, ys);
};
G__11200.cljs$lang$maxFixedArity = 1;
G__11200.cljs$lang$applyTo = (function (arglist__11203){
var x = cljs.core.first(arglist__11203);
var ys = cljs.core.rest(arglist__11203);
return G__11200__delegate(x, ys);
});
G__11200.cljs$lang$arity$variadic = G__11200__delegate;
return G__11200;
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
var args__11207 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____11206 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11206)
{return or__3824__auto____11206;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__11207);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__11208){
var fmt = cljs.core.first(arglist__11208);
var args = cljs.core.rest(arglist__11208);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__11211 = cljs.core.seq.call(null,x);
var ys__11212 = cljs.core.seq.call(null,y);
while(true){
if((xs__11211 == null))
{return (ys__11212 == null);
} else
{if((ys__11212 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__11211),cljs.core.first.call(null,ys__11212)))
{{
var G__11213 = cljs.core.next.call(null,xs__11211);
var G__11214 = cljs.core.next.call(null,ys__11212);
xs__11211 = G__11213;
ys__11212 = G__11214;
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
return cljs.core.reduce.call(null,(function (p1__11215_SHARP_,p2__11216_SHARP_){
return cljs.core.hash_combine.call(null,p1__11215_SHARP_,cljs.core.hash.call(null,p2__11216_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__11220 = 0;
var s__11221 = cljs.core.seq.call(null,m);
while(true){
if(s__11221)
{var e__11222 = cljs.core.first.call(null,s__11221);
{
var G__11223 = ((h__11220 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__11222)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__11222)))) % 4503599627370496);
var G__11224 = cljs.core.next.call(null,s__11221);
h__11220 = G__11223;
s__11221 = G__11224;
continue;
}
} else
{return h__11220;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__11228 = 0;
var s__11229 = cljs.core.seq.call(null,s);
while(true){
if(s__11229)
{var e__11230 = cljs.core.first.call(null,s__11229);
{
var G__11231 = ((h__11228 + cljs.core.hash.call(null,e__11230)) % 4503599627370496);
var G__11232 = cljs.core.next.call(null,s__11229);
h__11228 = G__11231;
s__11229 = G__11232;
continue;
}
} else
{return h__11228;
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
var G__11240__11241 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__11240__11241)
{var vec__11242__11243 = cljs.core.first.call(null,G__11240__11241);
var key_name__11244 = cljs.core.nth.call(null,vec__11242__11243,0,null);
var f__11245 = cljs.core.nth.call(null,vec__11242__11243,1,null);
var str_name__11246 = cljs.core.name.call(null,key_name__11244);
(obj[str_name__11246] = f__11245);
{
var G__11247 = cljs.core.next.call(null,G__11240__11241);
G__11240__11241 = G__11247;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11248 = this;
var h__5708__auto____11249 = this__11248.__hash;
if(!((h__5708__auto____11249 == null)))
{return h__5708__auto____11249;
} else
{var h__5708__auto____11250 = cljs.core.hash_coll.call(null,coll);
this__11248.__hash = h__5708__auto____11250;
return h__5708__auto____11250;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11251 = this;
if((this__11251.count === 1))
{return null;
} else
{return this__11251.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11252 = this;
return (new cljs.core.List(this__11252.meta,o,coll,(this__11252.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__11253 = this;
var this__11254 = this;
return cljs.core.pr_str.call(null,this__11254);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11255 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11256 = this;
return this__11256.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11257 = this;
return this__11257.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11258 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11259 = this;
return this__11259.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11260 = this;
if((this__11260.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__11260.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11261 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11262 = this;
return (new cljs.core.List(meta,this__11262.first,this__11262.rest,this__11262.count,this__11262.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11263 = this;
return this__11263.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11264 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11265 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11266 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11267 = this;
return (new cljs.core.List(this__11267.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__11268 = this;
var this__11269 = this;
return cljs.core.pr_str.call(null,this__11269);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11270 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11271 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11272 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11273 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11274 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11275 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11276 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11277 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11278 = this;
return this__11278.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11279 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__11283__11284 = coll;
if(G__11283__11284)
{if((function (){var or__3824__auto____11285 = (G__11283__11284.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____11285)
{return or__3824__auto____11285;
} else
{return G__11283__11284.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__11283__11284.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11283__11284);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11283__11284);
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
var G__11286__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__11286 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11286__delegate.call(this, x, y, z, items);
};
G__11286.cljs$lang$maxFixedArity = 3;
G__11286.cljs$lang$applyTo = (function (arglist__11287){
var x = cljs.core.first(arglist__11287);
var y = cljs.core.first(cljs.core.next(arglist__11287));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11287)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11287)));
return G__11286__delegate(x, y, z, items);
});
G__11286.cljs$lang$arity$variadic = G__11286__delegate;
return G__11286;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11288 = this;
var h__5708__auto____11289 = this__11288.__hash;
if(!((h__5708__auto____11289 == null)))
{return h__5708__auto____11289;
} else
{var h__5708__auto____11290 = cljs.core.hash_coll.call(null,coll);
this__11288.__hash = h__5708__auto____11290;
return h__5708__auto____11290;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11291 = this;
if((this__11291.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__11291.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11292 = this;
return (new cljs.core.Cons(null,o,coll,this__11292.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__11293 = this;
var this__11294 = this;
return cljs.core.pr_str.call(null,this__11294);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11295 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11296 = this;
return this__11296.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11297 = this;
if((this__11297.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__11297.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11299 = this;
return (new cljs.core.Cons(meta,this__11299.first,this__11299.rest,this__11299.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11300 = this;
return this__11300.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11301 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11301.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____11306 = (coll == null);
if(or__3824__auto____11306)
{return or__3824__auto____11306;
} else
{var G__11307__11308 = coll;
if(G__11307__11308)
{if((function (){var or__3824__auto____11309 = (G__11307__11308.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11309)
{return or__3824__auto____11309;
} else
{return G__11307__11308.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11307__11308.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11307__11308);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11307__11308);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__11313__11314 = x;
if(G__11313__11314)
{if((function (){var or__3824__auto____11315 = (G__11313__11314.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____11315)
{return or__3824__auto____11315;
} else
{return G__11313__11314.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__11313__11314.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11313__11314);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11313__11314);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__11316 = null;
var G__11316__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__11316__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__11316 = function(string,f,start){
switch(arguments.length){
case 2:
return G__11316__2.call(this,string,f);
case 3:
return G__11316__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11316;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__11317 = null;
var G__11317__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__11317__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__11317 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__11317__2.call(this,string,k);
case 3:
return G__11317__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11317;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__11318 = null;
var G__11318__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__11318__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__11318 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__11318__2.call(this,string,n);
case 3:
return G__11318__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11318;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__11330 = null;
var G__11330__2 = (function (this_sym11321,coll){
var this__11323 = this;
var this_sym11321__11324 = this;
var ___11325 = this_sym11321__11324;
if((coll == null))
{return null;
} else
{var strobj__11326 = coll.strobj;
if((strobj__11326 == null))
{return cljs.core._lookup.call(null,coll,this__11323.k,null);
} else
{return (strobj__11326[this__11323.k]);
}
}
});
var G__11330__3 = (function (this_sym11322,coll,not_found){
var this__11323 = this;
var this_sym11322__11327 = this;
var ___11328 = this_sym11322__11327;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__11323.k,not_found);
}
});
G__11330 = function(this_sym11322,coll,not_found){
switch(arguments.length){
case 2:
return G__11330__2.call(this,this_sym11322,coll);
case 3:
return G__11330__3.call(this,this_sym11322,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11330;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym11319,args11320){
var this__11329 = this;
return this_sym11319.call.apply(this_sym11319,[this_sym11319].concat(args11320.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__11339 = null;
var G__11339__2 = (function (this_sym11333,coll){
var this_sym11333__11335 = this;
var this__11336 = this_sym11333__11335;
return cljs.core._lookup.call(null,coll,this__11336.toString(),null);
});
var G__11339__3 = (function (this_sym11334,coll,not_found){
var this_sym11334__11337 = this;
var this__11338 = this_sym11334__11337;
return cljs.core._lookup.call(null,coll,this__11338.toString(),not_found);
});
G__11339 = function(this_sym11334,coll,not_found){
switch(arguments.length){
case 2:
return G__11339__2.call(this,this_sym11334,coll);
case 3:
return G__11339__3.call(this,this_sym11334,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11339;
})()
;
String.prototype.apply = (function (this_sym11331,args11332){
return this_sym11331.call.apply(this_sym11331,[this_sym11331].concat(args11332.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__11341 = lazy_seq.x;
if(lazy_seq.realized)
{return x__11341;
} else
{lazy_seq.x = x__11341.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11342 = this;
var h__5708__auto____11343 = this__11342.__hash;
if(!((h__5708__auto____11343 == null)))
{return h__5708__auto____11343;
} else
{var h__5708__auto____11344 = cljs.core.hash_coll.call(null,coll);
this__11342.__hash = h__5708__auto____11344;
return h__5708__auto____11344;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__11345 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11346 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__11347 = this;
var this__11348 = this;
return cljs.core.pr_str.call(null,this__11348);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11349 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11350 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11351 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11352 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11353 = this;
return (new cljs.core.LazySeq(meta,this__11353.realized,this__11353.x,this__11353.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11354 = this;
return this__11354.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11355 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11355.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11356 = this;
return this__11356.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__11357 = this;
var ___11358 = this;
(this__11357.buf[this__11357.end] = o);
return this__11357.end = (this__11357.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__11359 = this;
var ___11360 = this;
var ret__11361 = (new cljs.core.ArrayChunk(this__11359.buf,0,this__11359.end));
this__11359.buf = null;
return ret__11361;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11362 = this;
return cljs.core.array_reduce.call(null,this__11362.arr,f,(this__11362.arr[this__11362.off]),(this__11362.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11363 = this;
return cljs.core.array_reduce.call(null,this__11363.arr,f,start,this__11363.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__11364 = this;
if((this__11364.off === this__11364.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__11364.arr,(this__11364.off + 1),this__11364.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__11365 = this;
return (this__11365.arr[(this__11365.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__11366 = this;
if((function (){var and__3822__auto____11367 = (i >= 0);
if(and__3822__auto____11367)
{return (i < (this__11366.end - this__11366.off));
} else
{return and__3822__auto____11367;
}
})())
{return (this__11366.arr[(this__11366.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11368 = this;
return (this__11368.end - this__11368.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11369 = this;
var h__5708__auto____11370 = this__11369.__hash;
if(!((h__5708__auto____11370 == null)))
{return h__5708__auto____11370;
} else
{var h__5708__auto____11371 = cljs.core.hash_coll.call(null,coll);
this__11369.__hash = h__5708__auto____11371;
return h__5708__auto____11371;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__11372 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11373 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11374 = this;
return cljs.core._nth.call(null,this__11374.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11375 = this;
if((cljs.core._count.call(null,this__11375.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__11375.chunk),this__11375.more,this__11375.meta,null));
} else
{if((this__11375.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__11375.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__11376 = this;
if((this__11376.more == null))
{return null;
} else
{return this__11376.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11377 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__11378 = this;
return (new cljs.core.ChunkedCons(this__11378.chunk,this__11378.more,m,this__11378.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11379 = this;
return this__11379.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11380 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11380.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__11381 = this;
return this__11381.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__11382 = this;
if((this__11382.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__11382.more;
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
if((function (){var G__11386__11387 = s;
if(G__11386__11387)
{if((function (){var or__3824__auto____11388 = (G__11386__11387.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____11388)
{return or__3824__auto____11388;
} else
{return G__11386__11387.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__11386__11387.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__11386__11387);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__11386__11387);
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
var ary__11391 = [];
var s__11392 = s;
while(true){
if(cljs.core.seq.call(null,s__11392))
{ary__11391.push(cljs.core.first.call(null,s__11392));
{
var G__11393 = cljs.core.next.call(null,s__11392);
s__11392 = G__11393;
continue;
}
} else
{return ary__11391;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__11397 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__11398 = 0;
var xs__11399 = cljs.core.seq.call(null,coll);
while(true){
if(xs__11399)
{(ret__11397[i__11398] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__11399)));
{
var G__11400 = (i__11398 + 1);
var G__11401 = cljs.core.next.call(null,xs__11399);
i__11398 = G__11400;
xs__11399 = G__11401;
continue;
}
} else
{}
break;
}
return ret__11397;
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
var a__11409 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11410 = cljs.core.seq.call(null,init_val_or_seq);
var i__11411 = 0;
var s__11412 = s__11410;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11413 = s__11412;
if(and__3822__auto____11413)
{return (i__11411 < size);
} else
{return and__3822__auto____11413;
}
})()))
{(a__11409[i__11411] = cljs.core.first.call(null,s__11412));
{
var G__11416 = (i__11411 + 1);
var G__11417 = cljs.core.next.call(null,s__11412);
i__11411 = G__11416;
s__11412 = G__11417;
continue;
}
} else
{return a__11409;
}
break;
}
} else
{var n__6054__auto____11414 = size;
var i__11415 = 0;
while(true){
if((i__11415 < n__6054__auto____11414))
{(a__11409[i__11415] = init_val_or_seq);
{
var G__11418 = (i__11415 + 1);
i__11415 = G__11418;
continue;
}
} else
{}
break;
}
return a__11409;
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
var a__11426 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11427 = cljs.core.seq.call(null,init_val_or_seq);
var i__11428 = 0;
var s__11429 = s__11427;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11430 = s__11429;
if(and__3822__auto____11430)
{return (i__11428 < size);
} else
{return and__3822__auto____11430;
}
})()))
{(a__11426[i__11428] = cljs.core.first.call(null,s__11429));
{
var G__11433 = (i__11428 + 1);
var G__11434 = cljs.core.next.call(null,s__11429);
i__11428 = G__11433;
s__11429 = G__11434;
continue;
}
} else
{return a__11426;
}
break;
}
} else
{var n__6054__auto____11431 = size;
var i__11432 = 0;
while(true){
if((i__11432 < n__6054__auto____11431))
{(a__11426[i__11432] = init_val_or_seq);
{
var G__11435 = (i__11432 + 1);
i__11432 = G__11435;
continue;
}
} else
{}
break;
}
return a__11426;
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
var a__11443 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11444 = cljs.core.seq.call(null,init_val_or_seq);
var i__11445 = 0;
var s__11446 = s__11444;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11447 = s__11446;
if(and__3822__auto____11447)
{return (i__11445 < size);
} else
{return and__3822__auto____11447;
}
})()))
{(a__11443[i__11445] = cljs.core.first.call(null,s__11446));
{
var G__11450 = (i__11445 + 1);
var G__11451 = cljs.core.next.call(null,s__11446);
i__11445 = G__11450;
s__11446 = G__11451;
continue;
}
} else
{return a__11443;
}
break;
}
} else
{var n__6054__auto____11448 = size;
var i__11449 = 0;
while(true){
if((i__11449 < n__6054__auto____11448))
{(a__11443[i__11449] = init_val_or_seq);
{
var G__11452 = (i__11449 + 1);
i__11449 = G__11452;
continue;
}
} else
{}
break;
}
return a__11443;
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
{var s__11457 = s;
var i__11458 = n;
var sum__11459 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____11460 = (i__11458 > 0);
if(and__3822__auto____11460)
{return cljs.core.seq.call(null,s__11457);
} else
{return and__3822__auto____11460;
}
})()))
{{
var G__11461 = cljs.core.next.call(null,s__11457);
var G__11462 = (i__11458 - 1);
var G__11463 = (sum__11459 + 1);
s__11457 = G__11461;
i__11458 = G__11462;
sum__11459 = G__11463;
continue;
}
} else
{return sum__11459;
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
var s__11468 = cljs.core.seq.call(null,x);
if(s__11468)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__11468))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__11468),concat.call(null,cljs.core.chunk_rest.call(null,s__11468),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11468),concat.call(null,cljs.core.rest.call(null,s__11468),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__11472__delegate = function (x,y,zs){
var cat__11471 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__11470 = cljs.core.seq.call(null,xys);
if(xys__11470)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__11470))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__11470),cat.call(null,cljs.core.chunk_rest.call(null,xys__11470),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__11470),cat.call(null,cljs.core.rest.call(null,xys__11470),zs));
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
return cat__11471.call(null,concat.call(null,x,y),zs);
};
var G__11472 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11472__delegate.call(this, x, y, zs);
};
G__11472.cljs$lang$maxFixedArity = 2;
G__11472.cljs$lang$applyTo = (function (arglist__11473){
var x = cljs.core.first(arglist__11473);
var y = cljs.core.first(cljs.core.next(arglist__11473));
var zs = cljs.core.rest(cljs.core.next(arglist__11473));
return G__11472__delegate(x, y, zs);
});
G__11472.cljs$lang$arity$variadic = G__11472__delegate;
return G__11472;
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
var G__11474__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__11474 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11474__delegate.call(this, a, b, c, d, more);
};
G__11474.cljs$lang$maxFixedArity = 4;
G__11474.cljs$lang$applyTo = (function (arglist__11475){
var a = cljs.core.first(arglist__11475);
var b = cljs.core.first(cljs.core.next(arglist__11475));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11475))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11475))));
return G__11474__delegate(a, b, c, d, more);
});
G__11474.cljs$lang$arity$variadic = G__11474__delegate;
return G__11474;
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
var args__11517 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__11518 = cljs.core._first.call(null,args__11517);
var args__11519 = cljs.core._rest.call(null,args__11517);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__11518);
} else
{return f.call(null,a__11518);
}
} else
{var b__11520 = cljs.core._first.call(null,args__11519);
var args__11521 = cljs.core._rest.call(null,args__11519);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__11518,b__11520);
} else
{return f.call(null,a__11518,b__11520);
}
} else
{var c__11522 = cljs.core._first.call(null,args__11521);
var args__11523 = cljs.core._rest.call(null,args__11521);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__11518,b__11520,c__11522);
} else
{return f.call(null,a__11518,b__11520,c__11522);
}
} else
{var d__11524 = cljs.core._first.call(null,args__11523);
var args__11525 = cljs.core._rest.call(null,args__11523);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__11518,b__11520,c__11522,d__11524);
} else
{return f.call(null,a__11518,b__11520,c__11522,d__11524);
}
} else
{var e__11526 = cljs.core._first.call(null,args__11525);
var args__11527 = cljs.core._rest.call(null,args__11525);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__11518,b__11520,c__11522,d__11524,e__11526);
} else
{return f.call(null,a__11518,b__11520,c__11522,d__11524,e__11526);
}
} else
{var f__11528 = cljs.core._first.call(null,args__11527);
var args__11529 = cljs.core._rest.call(null,args__11527);
if((argc === 6))
{if(f__11528.cljs$lang$arity$6)
{return f__11528.cljs$lang$arity$6(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528);
}
} else
{var g__11530 = cljs.core._first.call(null,args__11529);
var args__11531 = cljs.core._rest.call(null,args__11529);
if((argc === 7))
{if(f__11528.cljs$lang$arity$7)
{return f__11528.cljs$lang$arity$7(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530);
}
} else
{var h__11532 = cljs.core._first.call(null,args__11531);
var args__11533 = cljs.core._rest.call(null,args__11531);
if((argc === 8))
{if(f__11528.cljs$lang$arity$8)
{return f__11528.cljs$lang$arity$8(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532);
}
} else
{var i__11534 = cljs.core._first.call(null,args__11533);
var args__11535 = cljs.core._rest.call(null,args__11533);
if((argc === 9))
{if(f__11528.cljs$lang$arity$9)
{return f__11528.cljs$lang$arity$9(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534);
}
} else
{var j__11536 = cljs.core._first.call(null,args__11535);
var args__11537 = cljs.core._rest.call(null,args__11535);
if((argc === 10))
{if(f__11528.cljs$lang$arity$10)
{return f__11528.cljs$lang$arity$10(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536);
}
} else
{var k__11538 = cljs.core._first.call(null,args__11537);
var args__11539 = cljs.core._rest.call(null,args__11537);
if((argc === 11))
{if(f__11528.cljs$lang$arity$11)
{return f__11528.cljs$lang$arity$11(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538);
}
} else
{var l__11540 = cljs.core._first.call(null,args__11539);
var args__11541 = cljs.core._rest.call(null,args__11539);
if((argc === 12))
{if(f__11528.cljs$lang$arity$12)
{return f__11528.cljs$lang$arity$12(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540);
}
} else
{var m__11542 = cljs.core._first.call(null,args__11541);
var args__11543 = cljs.core._rest.call(null,args__11541);
if((argc === 13))
{if(f__11528.cljs$lang$arity$13)
{return f__11528.cljs$lang$arity$13(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542);
}
} else
{var n__11544 = cljs.core._first.call(null,args__11543);
var args__11545 = cljs.core._rest.call(null,args__11543);
if((argc === 14))
{if(f__11528.cljs$lang$arity$14)
{return f__11528.cljs$lang$arity$14(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544);
}
} else
{var o__11546 = cljs.core._first.call(null,args__11545);
var args__11547 = cljs.core._rest.call(null,args__11545);
if((argc === 15))
{if(f__11528.cljs$lang$arity$15)
{return f__11528.cljs$lang$arity$15(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546);
}
} else
{var p__11548 = cljs.core._first.call(null,args__11547);
var args__11549 = cljs.core._rest.call(null,args__11547);
if((argc === 16))
{if(f__11528.cljs$lang$arity$16)
{return f__11528.cljs$lang$arity$16(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548);
}
} else
{var q__11550 = cljs.core._first.call(null,args__11549);
var args__11551 = cljs.core._rest.call(null,args__11549);
if((argc === 17))
{if(f__11528.cljs$lang$arity$17)
{return f__11528.cljs$lang$arity$17(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550);
}
} else
{var r__11552 = cljs.core._first.call(null,args__11551);
var args__11553 = cljs.core._rest.call(null,args__11551);
if((argc === 18))
{if(f__11528.cljs$lang$arity$18)
{return f__11528.cljs$lang$arity$18(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550,r__11552);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550,r__11552);
}
} else
{var s__11554 = cljs.core._first.call(null,args__11553);
var args__11555 = cljs.core._rest.call(null,args__11553);
if((argc === 19))
{if(f__11528.cljs$lang$arity$19)
{return f__11528.cljs$lang$arity$19(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550,r__11552,s__11554);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550,r__11552,s__11554);
}
} else
{var t__11556 = cljs.core._first.call(null,args__11555);
var args__11557 = cljs.core._rest.call(null,args__11555);
if((argc === 20))
{if(f__11528.cljs$lang$arity$20)
{return f__11528.cljs$lang$arity$20(a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550,r__11552,s__11554,t__11556);
} else
{return f__11528.call(null,a__11518,b__11520,c__11522,d__11524,e__11526,f__11528,g__11530,h__11532,i__11534,j__11536,k__11538,l__11540,m__11542,n__11544,o__11546,p__11548,q__11550,r__11552,s__11554,t__11556);
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
var fixed_arity__11572 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11573 = cljs.core.bounded_count.call(null,args,(fixed_arity__11572 + 1));
if((bc__11573 <= fixed_arity__11572))
{return cljs.core.apply_to.call(null,f,bc__11573,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__11574 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__11575 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11576 = cljs.core.bounded_count.call(null,arglist__11574,(fixed_arity__11575 + 1));
if((bc__11576 <= fixed_arity__11575))
{return cljs.core.apply_to.call(null,f,bc__11576,arglist__11574);
} else
{return f.cljs$lang$applyTo(arglist__11574);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11574));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__11577 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__11578 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11579 = cljs.core.bounded_count.call(null,arglist__11577,(fixed_arity__11578 + 1));
if((bc__11579 <= fixed_arity__11578))
{return cljs.core.apply_to.call(null,f,bc__11579,arglist__11577);
} else
{return f.cljs$lang$applyTo(arglist__11577);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11577));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__11580 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__11581 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11582 = cljs.core.bounded_count.call(null,arglist__11580,(fixed_arity__11581 + 1));
if((bc__11582 <= fixed_arity__11581))
{return cljs.core.apply_to.call(null,f,bc__11582,arglist__11580);
} else
{return f.cljs$lang$applyTo(arglist__11580);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11580));
}
});
var apply__6 = (function() { 
var G__11586__delegate = function (f,a,b,c,d,args){
var arglist__11583 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__11584 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__11585 = cljs.core.bounded_count.call(null,arglist__11583,(fixed_arity__11584 + 1));
if((bc__11585 <= fixed_arity__11584))
{return cljs.core.apply_to.call(null,f,bc__11585,arglist__11583);
} else
{return f.cljs$lang$applyTo(arglist__11583);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__11583));
}
};
var G__11586 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11586__delegate.call(this, f, a, b, c, d, args);
};
G__11586.cljs$lang$maxFixedArity = 5;
G__11586.cljs$lang$applyTo = (function (arglist__11587){
var f = cljs.core.first(arglist__11587);
var a = cljs.core.first(cljs.core.next(arglist__11587));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11587)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11587))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11587)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11587)))));
return G__11586__delegate(f, a, b, c, d, args);
});
G__11586.cljs$lang$arity$variadic = G__11586__delegate;
return G__11586;
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
vary_meta.cljs$lang$applyTo = (function (arglist__11588){
var obj = cljs.core.first(arglist__11588);
var f = cljs.core.first(cljs.core.next(arglist__11588));
var args = cljs.core.rest(cljs.core.next(arglist__11588));
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
var G__11589__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__11589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11589__delegate.call(this, x, y, more);
};
G__11589.cljs$lang$maxFixedArity = 2;
G__11589.cljs$lang$applyTo = (function (arglist__11590){
var x = cljs.core.first(arglist__11590);
var y = cljs.core.first(cljs.core.next(arglist__11590));
var more = cljs.core.rest(cljs.core.next(arglist__11590));
return G__11589__delegate(x, y, more);
});
G__11589.cljs$lang$arity$variadic = G__11589__delegate;
return G__11589;
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
var G__11591 = pred;
var G__11592 = cljs.core.next.call(null,coll);
pred = G__11591;
coll = G__11592;
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
{var or__3824__auto____11594 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____11594))
{return or__3824__auto____11594;
} else
{{
var G__11595 = pred;
var G__11596 = cljs.core.next.call(null,coll);
pred = G__11595;
coll = G__11596;
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
var G__11597 = null;
var G__11597__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__11597__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__11597__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__11597__3 = (function() { 
var G__11598__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__11598 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11598__delegate.call(this, x, y, zs);
};
G__11598.cljs$lang$maxFixedArity = 2;
G__11598.cljs$lang$applyTo = (function (arglist__11599){
var x = cljs.core.first(arglist__11599);
var y = cljs.core.first(cljs.core.next(arglist__11599));
var zs = cljs.core.rest(cljs.core.next(arglist__11599));
return G__11598__delegate(x, y, zs);
});
G__11598.cljs$lang$arity$variadic = G__11598__delegate;
return G__11598;
})()
;
G__11597 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__11597__0.call(this);
case 1:
return G__11597__1.call(this,x);
case 2:
return G__11597__2.call(this,x,y);
default:
return G__11597__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__11597.cljs$lang$maxFixedArity = 2;
G__11597.cljs$lang$applyTo = G__11597__3.cljs$lang$applyTo;
return G__11597;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11600__delegate = function (args){
return x;
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
var G__11608 = null;
var G__11608__0 = (function (){
return f.call(null,g.call(null));
});
var G__11608__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11608__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11608__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11608__4 = (function() { 
var G__11609__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11609 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11609__delegate.call(this, x, y, z, args);
};
G__11609.cljs$lang$maxFixedArity = 3;
G__11609.cljs$lang$applyTo = (function (arglist__11610){
var x = cljs.core.first(arglist__11610);
var y = cljs.core.first(cljs.core.next(arglist__11610));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11610)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11610)));
return G__11609__delegate(x, y, z, args);
});
G__11609.cljs$lang$arity$variadic = G__11609__delegate;
return G__11609;
})()
;
G__11608 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11608__0.call(this);
case 1:
return G__11608__1.call(this,x);
case 2:
return G__11608__2.call(this,x,y);
case 3:
return G__11608__3.call(this,x,y,z);
default:
return G__11608__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11608.cljs$lang$maxFixedArity = 3;
G__11608.cljs$lang$applyTo = G__11608__4.cljs$lang$applyTo;
return G__11608;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__11611 = null;
var G__11611__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11611__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11611__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11611__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11611__4 = (function() { 
var G__11612__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11612 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11612__delegate.call(this, x, y, z, args);
};
G__11612.cljs$lang$maxFixedArity = 3;
G__11612.cljs$lang$applyTo = (function (arglist__11613){
var x = cljs.core.first(arglist__11613);
var y = cljs.core.first(cljs.core.next(arglist__11613));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11613)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11613)));
return G__11612__delegate(x, y, z, args);
});
G__11612.cljs$lang$arity$variadic = G__11612__delegate;
return G__11612;
})()
;
G__11611 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__11611__0.call(this);
case 1:
return G__11611__1.call(this,x);
case 2:
return G__11611__2.call(this,x,y);
case 3:
return G__11611__3.call(this,x,y,z);
default:
return G__11611__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11611.cljs$lang$maxFixedArity = 3;
G__11611.cljs$lang$applyTo = G__11611__4.cljs$lang$applyTo;
return G__11611;
})()
});
var comp__4 = (function() { 
var G__11614__delegate = function (f1,f2,f3,fs){
var fs__11605 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__11615__delegate = function (args){
var ret__11606 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11605),args);
var fs__11607 = cljs.core.next.call(null,fs__11605);
while(true){
if(fs__11607)
{{
var G__11616 = cljs.core.first.call(null,fs__11607).call(null,ret__11606);
var G__11617 = cljs.core.next.call(null,fs__11607);
ret__11606 = G__11616;
fs__11607 = G__11617;
continue;
}
} else
{return ret__11606;
}
break;
}
};
var G__11615 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11615__delegate.call(this, args);
};
G__11615.cljs$lang$maxFixedArity = 0;
G__11615.cljs$lang$applyTo = (function (arglist__11618){
var args = cljs.core.seq(arglist__11618);;
return G__11615__delegate(args);
});
G__11615.cljs$lang$arity$variadic = G__11615__delegate;
return G__11615;
})()
;
};
var G__11614 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11614__delegate.call(this, f1, f2, f3, fs);
};
G__11614.cljs$lang$maxFixedArity = 3;
G__11614.cljs$lang$applyTo = (function (arglist__11619){
var f1 = cljs.core.first(arglist__11619);
var f2 = cljs.core.first(cljs.core.next(arglist__11619));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11619)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11619)));
return G__11614__delegate(f1, f2, f3, fs);
});
G__11614.cljs$lang$arity$variadic = G__11614__delegate;
return G__11614;
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
var G__11620__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11620 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11620__delegate.call(this, args);
};
G__11620.cljs$lang$maxFixedArity = 0;
G__11620.cljs$lang$applyTo = (function (arglist__11621){
var args = cljs.core.seq(arglist__11621);;
return G__11620__delegate(args);
});
G__11620.cljs$lang$arity$variadic = G__11620__delegate;
return G__11620;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__11622__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11622 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11622__delegate.call(this, args);
};
G__11622.cljs$lang$maxFixedArity = 0;
G__11622.cljs$lang$applyTo = (function (arglist__11623){
var args = cljs.core.seq(arglist__11623);;
return G__11622__delegate(args);
});
G__11622.cljs$lang$arity$variadic = G__11622__delegate;
return G__11622;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11624__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11624 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11624__delegate.call(this, args);
};
G__11624.cljs$lang$maxFixedArity = 0;
G__11624.cljs$lang$applyTo = (function (arglist__11625){
var args = cljs.core.seq(arglist__11625);;
return G__11624__delegate(args);
});
G__11624.cljs$lang$arity$variadic = G__11624__delegate;
return G__11624;
})()
;
});
var partial__5 = (function() { 
var G__11626__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11627__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11627 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11627__delegate.call(this, args);
};
G__11627.cljs$lang$maxFixedArity = 0;
G__11627.cljs$lang$applyTo = (function (arglist__11628){
var args = cljs.core.seq(arglist__11628);;
return G__11627__delegate(args);
});
G__11627.cljs$lang$arity$variadic = G__11627__delegate;
return G__11627;
})()
;
};
var G__11626 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11626__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11626.cljs$lang$maxFixedArity = 4;
G__11626.cljs$lang$applyTo = (function (arglist__11629){
var f = cljs.core.first(arglist__11629);
var arg1 = cljs.core.first(cljs.core.next(arglist__11629));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11629)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11629))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11629))));
return G__11626__delegate(f, arg1, arg2, arg3, more);
});
G__11626.cljs$lang$arity$variadic = G__11626__delegate;
return G__11626;
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
var G__11630 = null;
var G__11630__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__11630__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__11630__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__11630__4 = (function() { 
var G__11631__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__11631 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11631__delegate.call(this, a, b, c, ds);
};
G__11631.cljs$lang$maxFixedArity = 3;
G__11631.cljs$lang$applyTo = (function (arglist__11632){
var a = cljs.core.first(arglist__11632);
var b = cljs.core.first(cljs.core.next(arglist__11632));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11632)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11632)));
return G__11631__delegate(a, b, c, ds);
});
G__11631.cljs$lang$arity$variadic = G__11631__delegate;
return G__11631;
})()
;
G__11630 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__11630__1.call(this,a);
case 2:
return G__11630__2.call(this,a,b);
case 3:
return G__11630__3.call(this,a,b,c);
default:
return G__11630__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11630.cljs$lang$maxFixedArity = 3;
G__11630.cljs$lang$applyTo = G__11630__4.cljs$lang$applyTo;
return G__11630;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__11633 = null;
var G__11633__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__11633__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__11633__4 = (function() { 
var G__11634__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__11634 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11634__delegate.call(this, a, b, c, ds);
};
G__11634.cljs$lang$maxFixedArity = 3;
G__11634.cljs$lang$applyTo = (function (arglist__11635){
var a = cljs.core.first(arglist__11635);
var b = cljs.core.first(cljs.core.next(arglist__11635));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11635)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11635)));
return G__11634__delegate(a, b, c, ds);
});
G__11634.cljs$lang$arity$variadic = G__11634__delegate;
return G__11634;
})()
;
G__11633 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__11633__2.call(this,a,b);
case 3:
return G__11633__3.call(this,a,b,c);
default:
return G__11633__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11633.cljs$lang$maxFixedArity = 3;
G__11633.cljs$lang$applyTo = G__11633__4.cljs$lang$applyTo;
return G__11633;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__11636 = null;
var G__11636__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__11636__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__11636__4 = (function() { 
var G__11637__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__11637 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11637__delegate.call(this, a, b, c, ds);
};
G__11637.cljs$lang$maxFixedArity = 3;
G__11637.cljs$lang$applyTo = (function (arglist__11638){
var a = cljs.core.first(arglist__11638);
var b = cljs.core.first(cljs.core.next(arglist__11638));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11638)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11638)));
return G__11637__delegate(a, b, c, ds);
});
G__11637.cljs$lang$arity$variadic = G__11637__delegate;
return G__11637;
})()
;
G__11636 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__11636__2.call(this,a,b);
case 3:
return G__11636__3.call(this,a,b,c);
default:
return G__11636__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__11636.cljs$lang$maxFixedArity = 3;
G__11636.cljs$lang$applyTo = G__11636__4.cljs$lang$applyTo;
return G__11636;
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
var mapi__11654 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11662 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11662)
{var s__11663 = temp__3974__auto____11662;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11663))
{var c__11664 = cljs.core.chunk_first.call(null,s__11663);
var size__11665 = cljs.core.count.call(null,c__11664);
var b__11666 = cljs.core.chunk_buffer.call(null,size__11665);
var n__6054__auto____11667 = size__11665;
var i__11668 = 0;
while(true){
if((i__11668 < n__6054__auto____11667))
{cljs.core.chunk_append.call(null,b__11666,f.call(null,(idx + i__11668),cljs.core._nth.call(null,c__11664,i__11668)));
{
var G__11669 = (i__11668 + 1);
i__11668 = G__11669;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11666),mapi.call(null,(idx + size__11665),cljs.core.chunk_rest.call(null,s__11663)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11663)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__11663)));
}
} else
{return null;
}
}),null));
});
return mapi__11654.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11679 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11679)
{var s__11680 = temp__3974__auto____11679;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11680))
{var c__11681 = cljs.core.chunk_first.call(null,s__11680);
var size__11682 = cljs.core.count.call(null,c__11681);
var b__11683 = cljs.core.chunk_buffer.call(null,size__11682);
var n__6054__auto____11684 = size__11682;
var i__11685 = 0;
while(true){
if((i__11685 < n__6054__auto____11684))
{var x__11686 = f.call(null,cljs.core._nth.call(null,c__11681,i__11685));
if((x__11686 == null))
{} else
{cljs.core.chunk_append.call(null,b__11683,x__11686);
}
{
var G__11688 = (i__11685 + 1);
i__11685 = G__11688;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11683),keep.call(null,f,cljs.core.chunk_rest.call(null,s__11680)));
} else
{var x__11687 = f.call(null,cljs.core.first.call(null,s__11680));
if((x__11687 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__11680));
} else
{return cljs.core.cons.call(null,x__11687,keep.call(null,f,cljs.core.rest.call(null,s__11680)));
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
var keepi__11714 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____11724 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____11724)
{var s__11725 = temp__3974__auto____11724;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11725))
{var c__11726 = cljs.core.chunk_first.call(null,s__11725);
var size__11727 = cljs.core.count.call(null,c__11726);
var b__11728 = cljs.core.chunk_buffer.call(null,size__11727);
var n__6054__auto____11729 = size__11727;
var i__11730 = 0;
while(true){
if((i__11730 < n__6054__auto____11729))
{var x__11731 = f.call(null,(idx + i__11730),cljs.core._nth.call(null,c__11726,i__11730));
if((x__11731 == null))
{} else
{cljs.core.chunk_append.call(null,b__11728,x__11731);
}
{
var G__11733 = (i__11730 + 1);
i__11730 = G__11733;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11728),keepi.call(null,(idx + size__11727),cljs.core.chunk_rest.call(null,s__11725)));
} else
{var x__11732 = f.call(null,idx,cljs.core.first.call(null,s__11725));
if((x__11732 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11725));
} else
{return cljs.core.cons.call(null,x__11732,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__11725)));
}
}
} else
{return null;
}
}),null));
});
return keepi__11714.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11819 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____11819))
{return p.call(null,y);
} else
{return and__3822__auto____11819;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11820 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____11820))
{var and__3822__auto____11821 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____11821))
{return p.call(null,z);
} else
{return and__3822__auto____11821;
}
} else
{return and__3822__auto____11820;
}
})());
});
var ep1__4 = (function() { 
var G__11890__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11822 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11822))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____11822;
}
})());
};
var G__11890 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11890__delegate.call(this, x, y, z, args);
};
G__11890.cljs$lang$maxFixedArity = 3;
G__11890.cljs$lang$applyTo = (function (arglist__11891){
var x = cljs.core.first(arglist__11891);
var y = cljs.core.first(cljs.core.next(arglist__11891));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11891)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11891)));
return G__11890__delegate(x, y, z, args);
});
G__11890.cljs$lang$arity$variadic = G__11890__delegate;
return G__11890;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11834 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11834))
{return p2.call(null,x);
} else
{return and__3822__auto____11834;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11835 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11835))
{var and__3822__auto____11836 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11836))
{var and__3822__auto____11837 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11837))
{return p2.call(null,y);
} else
{return and__3822__auto____11837;
}
} else
{return and__3822__auto____11836;
}
} else
{return and__3822__auto____11835;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11838 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11838))
{var and__3822__auto____11839 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11839))
{var and__3822__auto____11840 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____11840))
{var and__3822__auto____11841 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11841))
{var and__3822__auto____11842 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11842))
{return p2.call(null,z);
} else
{return and__3822__auto____11842;
}
} else
{return and__3822__auto____11841;
}
} else
{return and__3822__auto____11840;
}
} else
{return and__3822__auto____11839;
}
} else
{return and__3822__auto____11838;
}
})());
});
var ep2__4 = (function() { 
var G__11892__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11843 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11843))
{return cljs.core.every_QMARK_.call(null,(function (p1__11689_SHARP_){
var and__3822__auto____11844 = p1.call(null,p1__11689_SHARP_);
if(cljs.core.truth_(and__3822__auto____11844))
{return p2.call(null,p1__11689_SHARP_);
} else
{return and__3822__auto____11844;
}
}),args);
} else
{return and__3822__auto____11843;
}
})());
};
var G__11892 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11892__delegate.call(this, x, y, z, args);
};
G__11892.cljs$lang$maxFixedArity = 3;
G__11892.cljs$lang$applyTo = (function (arglist__11893){
var x = cljs.core.first(arglist__11893);
var y = cljs.core.first(cljs.core.next(arglist__11893));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11893)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11893)));
return G__11892__delegate(x, y, z, args);
});
G__11892.cljs$lang$arity$variadic = G__11892__delegate;
return G__11892;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11863 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11863))
{var and__3822__auto____11864 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11864))
{return p3.call(null,x);
} else
{return and__3822__auto____11864;
}
} else
{return and__3822__auto____11863;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11865 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11865))
{var and__3822__auto____11866 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11866))
{var and__3822__auto____11867 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____11867))
{var and__3822__auto____11868 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11868))
{var and__3822__auto____11869 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11869))
{return p3.call(null,y);
} else
{return and__3822__auto____11869;
}
} else
{return and__3822__auto____11868;
}
} else
{return and__3822__auto____11867;
}
} else
{return and__3822__auto____11866;
}
} else
{return and__3822__auto____11865;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11870 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____11870))
{var and__3822__auto____11871 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____11871))
{var and__3822__auto____11872 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____11872))
{var and__3822__auto____11873 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____11873))
{var and__3822__auto____11874 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____11874))
{var and__3822__auto____11875 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____11875))
{var and__3822__auto____11876 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____11876))
{var and__3822__auto____11877 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____11877))
{return p3.call(null,z);
} else
{return and__3822__auto____11877;
}
} else
{return and__3822__auto____11876;
}
} else
{return and__3822__auto____11875;
}
} else
{return and__3822__auto____11874;
}
} else
{return and__3822__auto____11873;
}
} else
{return and__3822__auto____11872;
}
} else
{return and__3822__auto____11871;
}
} else
{return and__3822__auto____11870;
}
})());
});
var ep3__4 = (function() { 
var G__11894__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11878 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11878))
{return cljs.core.every_QMARK_.call(null,(function (p1__11690_SHARP_){
var and__3822__auto____11879 = p1.call(null,p1__11690_SHARP_);
if(cljs.core.truth_(and__3822__auto____11879))
{var and__3822__auto____11880 = p2.call(null,p1__11690_SHARP_);
if(cljs.core.truth_(and__3822__auto____11880))
{return p3.call(null,p1__11690_SHARP_);
} else
{return and__3822__auto____11880;
}
} else
{return and__3822__auto____11879;
}
}),args);
} else
{return and__3822__auto____11878;
}
})());
};
var G__11894 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11894__delegate.call(this, x, y, z, args);
};
G__11894.cljs$lang$maxFixedArity = 3;
G__11894.cljs$lang$applyTo = (function (arglist__11895){
var x = cljs.core.first(arglist__11895);
var y = cljs.core.first(cljs.core.next(arglist__11895));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11895)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11895)));
return G__11894__delegate(x, y, z, args);
});
G__11894.cljs$lang$arity$variadic = G__11894__delegate;
return G__11894;
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
var G__11896__delegate = function (p1,p2,p3,ps){
var ps__11881 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11691_SHARP_){
return p1__11691_SHARP_.call(null,x);
}),ps__11881);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11692_SHARP_){
var and__3822__auto____11886 = p1__11692_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____11886))
{return p1__11692_SHARP_.call(null,y);
} else
{return and__3822__auto____11886;
}
}),ps__11881);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11693_SHARP_){
var and__3822__auto____11887 = p1__11693_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____11887))
{var and__3822__auto____11888 = p1__11693_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____11888))
{return p1__11693_SHARP_.call(null,z);
} else
{return and__3822__auto____11888;
}
} else
{return and__3822__auto____11887;
}
}),ps__11881);
});
var epn__4 = (function() { 
var G__11897__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____11889 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____11889))
{return cljs.core.every_QMARK_.call(null,(function (p1__11694_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11694_SHARP_,args);
}),ps__11881);
} else
{return and__3822__auto____11889;
}
})());
};
var G__11897 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11897__delegate.call(this, x, y, z, args);
};
G__11897.cljs$lang$maxFixedArity = 3;
G__11897.cljs$lang$applyTo = (function (arglist__11898){
var x = cljs.core.first(arglist__11898);
var y = cljs.core.first(cljs.core.next(arglist__11898));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11898)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11898)));
return G__11897__delegate(x, y, z, args);
});
G__11897.cljs$lang$arity$variadic = G__11897__delegate;
return G__11897;
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
var G__11896 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11896__delegate.call(this, p1, p2, p3, ps);
};
G__11896.cljs$lang$maxFixedArity = 3;
G__11896.cljs$lang$applyTo = (function (arglist__11899){
var p1 = cljs.core.first(arglist__11899);
var p2 = cljs.core.first(cljs.core.next(arglist__11899));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11899)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11899)));
return G__11896__delegate(p1, p2, p3, ps);
});
G__11896.cljs$lang$arity$variadic = G__11896__delegate;
return G__11896;
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
var or__3824__auto____11980 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____11980))
{return or__3824__auto____11980;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____11981 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____11981))
{return or__3824__auto____11981;
} else
{var or__3824__auto____11982 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____11982))
{return or__3824__auto____11982;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__12051__delegate = function (x,y,z,args){
var or__3824__auto____11983 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____11983))
{return or__3824__auto____11983;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12051 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12051__delegate.call(this, x, y, z, args);
};
G__12051.cljs$lang$maxFixedArity = 3;
G__12051.cljs$lang$applyTo = (function (arglist__12052){
var x = cljs.core.first(arglist__12052);
var y = cljs.core.first(cljs.core.next(arglist__12052));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12052)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12052)));
return G__12051__delegate(x, y, z, args);
});
G__12051.cljs$lang$arity$variadic = G__12051__delegate;
return G__12051;
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
var or__3824__auto____11995 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11995))
{return or__3824__auto____11995;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____11996 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11996))
{return or__3824__auto____11996;
} else
{var or__3824__auto____11997 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____11997))
{return or__3824__auto____11997;
} else
{var or__3824__auto____11998 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____11998))
{return or__3824__auto____11998;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____11999 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____11999))
{return or__3824__auto____11999;
} else
{var or__3824__auto____12000 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12000))
{return or__3824__auto____12000;
} else
{var or__3824__auto____12001 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12001))
{return or__3824__auto____12001;
} else
{var or__3824__auto____12002 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12002))
{return or__3824__auto____12002;
} else
{var or__3824__auto____12003 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12003))
{return or__3824__auto____12003;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__12053__delegate = function (x,y,z,args){
var or__3824__auto____12004 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12004))
{return or__3824__auto____12004;
} else
{return cljs.core.some.call(null,(function (p1__11734_SHARP_){
var or__3824__auto____12005 = p1.call(null,p1__11734_SHARP_);
if(cljs.core.truth_(or__3824__auto____12005))
{return or__3824__auto____12005;
} else
{return p2.call(null,p1__11734_SHARP_);
}
}),args);
}
};
var G__12053 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12053__delegate.call(this, x, y, z, args);
};
G__12053.cljs$lang$maxFixedArity = 3;
G__12053.cljs$lang$applyTo = (function (arglist__12054){
var x = cljs.core.first(arglist__12054);
var y = cljs.core.first(cljs.core.next(arglist__12054));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12054)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12054)));
return G__12053__delegate(x, y, z, args);
});
G__12053.cljs$lang$arity$variadic = G__12053__delegate;
return G__12053;
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
var or__3824__auto____12024 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12024))
{return or__3824__auto____12024;
} else
{var or__3824__auto____12025 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12025))
{return or__3824__auto____12025;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____12026 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12026))
{return or__3824__auto____12026;
} else
{var or__3824__auto____12027 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12027))
{return or__3824__auto____12027;
} else
{var or__3824__auto____12028 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12028))
{return or__3824__auto____12028;
} else
{var or__3824__auto____12029 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12029))
{return or__3824__auto____12029;
} else
{var or__3824__auto____12030 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12030))
{return or__3824__auto____12030;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____12031 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12031))
{return or__3824__auto____12031;
} else
{var or__3824__auto____12032 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12032))
{return or__3824__auto____12032;
} else
{var or__3824__auto____12033 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12033))
{return or__3824__auto____12033;
} else
{var or__3824__auto____12034 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12034))
{return or__3824__auto____12034;
} else
{var or__3824__auto____12035 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12035))
{return or__3824__auto____12035;
} else
{var or__3824__auto____12036 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____12036))
{return or__3824__auto____12036;
} else
{var or__3824__auto____12037 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12037))
{return or__3824__auto____12037;
} else
{var or__3824__auto____12038 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____12038))
{return or__3824__auto____12038;
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
var G__12055__delegate = function (x,y,z,args){
var or__3824__auto____12039 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12039))
{return or__3824__auto____12039;
} else
{return cljs.core.some.call(null,(function (p1__11735_SHARP_){
var or__3824__auto____12040 = p1.call(null,p1__11735_SHARP_);
if(cljs.core.truth_(or__3824__auto____12040))
{return or__3824__auto____12040;
} else
{var or__3824__auto____12041 = p2.call(null,p1__11735_SHARP_);
if(cljs.core.truth_(or__3824__auto____12041))
{return or__3824__auto____12041;
} else
{return p3.call(null,p1__11735_SHARP_);
}
}
}),args);
}
};
var G__12055 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12055__delegate.call(this, x, y, z, args);
};
G__12055.cljs$lang$maxFixedArity = 3;
G__12055.cljs$lang$applyTo = (function (arglist__12056){
var x = cljs.core.first(arglist__12056);
var y = cljs.core.first(cljs.core.next(arglist__12056));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12056)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12056)));
return G__12055__delegate(x, y, z, args);
});
G__12055.cljs$lang$arity$variadic = G__12055__delegate;
return G__12055;
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
var G__12057__delegate = function (p1,p2,p3,ps){
var ps__12042 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__11736_SHARP_){
return p1__11736_SHARP_.call(null,x);
}),ps__12042);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11737_SHARP_){
var or__3824__auto____12047 = p1__11737_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12047))
{return or__3824__auto____12047;
} else
{return p1__11737_SHARP_.call(null,y);
}
}),ps__12042);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11738_SHARP_){
var or__3824__auto____12048 = p1__11738_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12048))
{return or__3824__auto____12048;
} else
{var or__3824__auto____12049 = p1__11738_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____12049))
{return or__3824__auto____12049;
} else
{return p1__11738_SHARP_.call(null,z);
}
}
}),ps__12042);
});
var spn__4 = (function() { 
var G__12058__delegate = function (x,y,z,args){
var or__3824__auto____12050 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12050))
{return or__3824__auto____12050;
} else
{return cljs.core.some.call(null,(function (p1__11739_SHARP_){
return cljs.core.some.call(null,p1__11739_SHARP_,args);
}),ps__12042);
}
};
var G__12058 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12058__delegate.call(this, x, y, z, args);
};
G__12058.cljs$lang$maxFixedArity = 3;
G__12058.cljs$lang$applyTo = (function (arglist__12059){
var x = cljs.core.first(arglist__12059);
var y = cljs.core.first(cljs.core.next(arglist__12059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12059)));
return G__12058__delegate(x, y, z, args);
});
G__12058.cljs$lang$arity$variadic = G__12058__delegate;
return G__12058;
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
var G__12057 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12057__delegate.call(this, p1, p2, p3, ps);
};
G__12057.cljs$lang$maxFixedArity = 3;
G__12057.cljs$lang$applyTo = (function (arglist__12060){
var p1 = cljs.core.first(arglist__12060);
var p2 = cljs.core.first(cljs.core.next(arglist__12060));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12060)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12060)));
return G__12057__delegate(p1, p2, p3, ps);
});
G__12057.cljs$lang$arity$variadic = G__12057__delegate;
return G__12057;
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
var temp__3974__auto____12079 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12079)
{var s__12080 = temp__3974__auto____12079;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12080))
{var c__12081 = cljs.core.chunk_first.call(null,s__12080);
var size__12082 = cljs.core.count.call(null,c__12081);
var b__12083 = cljs.core.chunk_buffer.call(null,size__12082);
var n__6054__auto____12084 = size__12082;
var i__12085 = 0;
while(true){
if((i__12085 < n__6054__auto____12084))
{cljs.core.chunk_append.call(null,b__12083,f.call(null,cljs.core._nth.call(null,c__12081,i__12085)));
{
var G__12097 = (i__12085 + 1);
i__12085 = G__12097;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12083),map.call(null,f,cljs.core.chunk_rest.call(null,s__12080)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12080)),map.call(null,f,cljs.core.rest.call(null,s__12080)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12086 = cljs.core.seq.call(null,c1);
var s2__12087 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12088 = s1__12086;
if(and__3822__auto____12088)
{return s2__12087;
} else
{return and__3822__auto____12088;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12086),cljs.core.first.call(null,s2__12087)),map.call(null,f,cljs.core.rest.call(null,s1__12086),cljs.core.rest.call(null,s2__12087)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12089 = cljs.core.seq.call(null,c1);
var s2__12090 = cljs.core.seq.call(null,c2);
var s3__12091 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____12092 = s1__12089;
if(and__3822__auto____12092)
{var and__3822__auto____12093 = s2__12090;
if(and__3822__auto____12093)
{return s3__12091;
} else
{return and__3822__auto____12093;
}
} else
{return and__3822__auto____12092;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12089),cljs.core.first.call(null,s2__12090),cljs.core.first.call(null,s3__12091)),map.call(null,f,cljs.core.rest.call(null,s1__12089),cljs.core.rest.call(null,s2__12090),cljs.core.rest.call(null,s3__12091)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__12098__delegate = function (f,c1,c2,c3,colls){
var step__12096 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12095 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12095))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12095),step.call(null,map.call(null,cljs.core.rest,ss__12095)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__11900_SHARP_){
return cljs.core.apply.call(null,f,p1__11900_SHARP_);
}),step__12096.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12098 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12098__delegate.call(this, f, c1, c2, c3, colls);
};
G__12098.cljs$lang$maxFixedArity = 4;
G__12098.cljs$lang$applyTo = (function (arglist__12099){
var f = cljs.core.first(arglist__12099);
var c1 = cljs.core.first(cljs.core.next(arglist__12099));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12099)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12099))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12099))));
return G__12098__delegate(f, c1, c2, c3, colls);
});
G__12098.cljs$lang$arity$variadic = G__12098__delegate;
return G__12098;
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
{var temp__3974__auto____12102 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12102)
{var s__12103 = temp__3974__auto____12102;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12103),take.call(null,(n - 1),cljs.core.rest.call(null,s__12103)));
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
var step__12109 = (function (n,coll){
while(true){
var s__12107 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12108 = (n > 0);
if(and__3822__auto____12108)
{return s__12107;
} else
{return and__3822__auto____12108;
}
})()))
{{
var G__12110 = (n - 1);
var G__12111 = cljs.core.rest.call(null,s__12107);
n = G__12110;
coll = G__12111;
continue;
}
} else
{return s__12107;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12109.call(null,n,coll);
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
var s__12114 = cljs.core.seq.call(null,coll);
var lead__12115 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__12115)
{{
var G__12116 = cljs.core.next.call(null,s__12114);
var G__12117 = cljs.core.next.call(null,lead__12115);
s__12114 = G__12116;
lead__12115 = G__12117;
continue;
}
} else
{return s__12114;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12123 = (function (pred,coll){
while(true){
var s__12121 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12122 = s__12121;
if(and__3822__auto____12122)
{return pred.call(null,cljs.core.first.call(null,s__12121));
} else
{return and__3822__auto____12122;
}
})()))
{{
var G__12124 = pred;
var G__12125 = cljs.core.rest.call(null,s__12121);
pred = G__12124;
coll = G__12125;
continue;
}
} else
{return s__12121;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12123.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12128 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12128)
{var s__12129 = temp__3974__auto____12128;
return cljs.core.concat.call(null,s__12129,cycle.call(null,s__12129));
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
var s1__12134 = cljs.core.seq.call(null,c1);
var s2__12135 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12136 = s1__12134;
if(and__3822__auto____12136)
{return s2__12135;
} else
{return and__3822__auto____12136;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12134),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12135),interleave.call(null,cljs.core.rest.call(null,s1__12134),cljs.core.rest.call(null,s2__12135))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__12138__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12137 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12137))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12137),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12137)));
} else
{return null;
}
}),null));
};
var G__12138 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12138__delegate.call(this, c1, c2, colls);
};
G__12138.cljs$lang$maxFixedArity = 2;
G__12138.cljs$lang$applyTo = (function (arglist__12139){
var c1 = cljs.core.first(arglist__12139);
var c2 = cljs.core.first(cljs.core.next(arglist__12139));
var colls = cljs.core.rest(cljs.core.next(arglist__12139));
return G__12138__delegate(c1, c2, colls);
});
G__12138.cljs$lang$arity$variadic = G__12138__delegate;
return G__12138;
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
var cat__12149 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____12147 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12147)
{var coll__12148 = temp__3971__auto____12147;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12148),cat.call(null,cljs.core.rest.call(null,coll__12148),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__12149.call(null,null,colls);
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
var G__12150__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12150 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12150__delegate.call(this, f, coll, colls);
};
G__12150.cljs$lang$maxFixedArity = 2;
G__12150.cljs$lang$applyTo = (function (arglist__12151){
var f = cljs.core.first(arglist__12151);
var coll = cljs.core.first(cljs.core.next(arglist__12151));
var colls = cljs.core.rest(cljs.core.next(arglist__12151));
return G__12150__delegate(f, coll, colls);
});
G__12150.cljs$lang$arity$variadic = G__12150__delegate;
return G__12150;
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
var temp__3974__auto____12161 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12161)
{var s__12162 = temp__3974__auto____12161;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12162))
{var c__12163 = cljs.core.chunk_first.call(null,s__12162);
var size__12164 = cljs.core.count.call(null,c__12163);
var b__12165 = cljs.core.chunk_buffer.call(null,size__12164);
var n__6054__auto____12166 = size__12164;
var i__12167 = 0;
while(true){
if((i__12167 < n__6054__auto____12166))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__12163,i__12167))))
{cljs.core.chunk_append.call(null,b__12165,cljs.core._nth.call(null,c__12163,i__12167));
} else
{}
{
var G__12170 = (i__12167 + 1);
i__12167 = G__12170;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12165),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__12162)));
} else
{var f__12168 = cljs.core.first.call(null,s__12162);
var r__12169 = cljs.core.rest.call(null,s__12162);
if(cljs.core.truth_(pred.call(null,f__12168)))
{return cljs.core.cons.call(null,f__12168,filter.call(null,pred,r__12169));
} else
{return filter.call(null,pred,r__12169);
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
var walk__12173 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__12173.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12171_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__12171_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__12177__12178 = to;
if(G__12177__12178)
{if((function (){var or__3824__auto____12179 = (G__12177__12178.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____12179)
{return or__3824__auto____12179;
} else
{return G__12177__12178.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__12177__12178.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12177__12178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12177__12178);
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
var G__12180__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__12180 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12180__delegate.call(this, f, c1, c2, c3, colls);
};
G__12180.cljs$lang$maxFixedArity = 4;
G__12180.cljs$lang$applyTo = (function (arglist__12181){
var f = cljs.core.first(arglist__12181);
var c1 = cljs.core.first(cljs.core.next(arglist__12181));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12181)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12181))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12181))));
return G__12180__delegate(f, c1, c2, c3, colls);
});
G__12180.cljs$lang$arity$variadic = G__12180__delegate;
return G__12180;
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
var temp__3974__auto____12188 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12188)
{var s__12189 = temp__3974__auto____12188;
var p__12190 = cljs.core.take.call(null,n,s__12189);
if((n === cljs.core.count.call(null,p__12190)))
{return cljs.core.cons.call(null,p__12190,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12189)));
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
var temp__3974__auto____12191 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12191)
{var s__12192 = temp__3974__auto____12191;
var p__12193 = cljs.core.take.call(null,n,s__12192);
if((n === cljs.core.count.call(null,p__12193)))
{return cljs.core.cons.call(null,p__12193,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12192)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12193,pad)));
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
var sentinel__12198 = cljs.core.lookup_sentinel;
var m__12199 = m;
var ks__12200 = cljs.core.seq.call(null,ks);
while(true){
if(ks__12200)
{var m__12201 = cljs.core._lookup.call(null,m__12199,cljs.core.first.call(null,ks__12200),sentinel__12198);
if((sentinel__12198 === m__12201))
{return not_found;
} else
{{
var G__12202 = sentinel__12198;
var G__12203 = m__12201;
var G__12204 = cljs.core.next.call(null,ks__12200);
sentinel__12198 = G__12202;
m__12199 = G__12203;
ks__12200 = G__12204;
continue;
}
}
} else
{return m__12199;
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
cljs.core.assoc_in = (function assoc_in(m,p__12205,v){
var vec__12210__12211 = p__12205;
var k__12212 = cljs.core.nth.call(null,vec__12210__12211,0,null);
var ks__12213 = cljs.core.nthnext.call(null,vec__12210__12211,1);
if(cljs.core.truth_(ks__12213))
{return cljs.core.assoc.call(null,m,k__12212,assoc_in.call(null,cljs.core._lookup.call(null,m,k__12212,null),ks__12213,v));
} else
{return cljs.core.assoc.call(null,m,k__12212,v);
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
var update_in__delegate = function (m,p__12214,f,args){
var vec__12219__12220 = p__12214;
var k__12221 = cljs.core.nth.call(null,vec__12219__12220,0,null);
var ks__12222 = cljs.core.nthnext.call(null,vec__12219__12220,1);
if(cljs.core.truth_(ks__12222))
{return cljs.core.assoc.call(null,m,k__12221,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__12221,null),ks__12222,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12221,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__12221,null),args));
}
};
var update_in = function (m,p__12214,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12214, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12223){
var m = cljs.core.first(arglist__12223);
var p__12214 = cljs.core.first(cljs.core.next(arglist__12223));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12223)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12223)));
return update_in__delegate(m, p__12214, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12226 = this;
var h__5708__auto____12227 = this__12226.__hash;
if(!((h__5708__auto____12227 == null)))
{return h__5708__auto____12227;
} else
{var h__5708__auto____12228 = cljs.core.hash_coll.call(null,coll);
this__12226.__hash = h__5708__auto____12228;
return h__5708__auto____12228;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12229 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12230 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12231 = this;
var new_array__12232 = this__12231.array.slice();
(new_array__12232[k] = v);
return (new cljs.core.Vector(this__12231.meta,new_array__12232,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__12263 = null;
var G__12263__2 = (function (this_sym12233,k){
var this__12235 = this;
var this_sym12233__12236 = this;
var coll__12237 = this_sym12233__12236;
return coll__12237.cljs$core$ILookup$_lookup$arity$2(coll__12237,k);
});
var G__12263__3 = (function (this_sym12234,k,not_found){
var this__12235 = this;
var this_sym12234__12238 = this;
var coll__12239 = this_sym12234__12238;
return coll__12239.cljs$core$ILookup$_lookup$arity$3(coll__12239,k,not_found);
});
G__12263 = function(this_sym12234,k,not_found){
switch(arguments.length){
case 2:
return G__12263__2.call(this,this_sym12234,k);
case 3:
return G__12263__3.call(this,this_sym12234,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12263;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym12224,args12225){
var this__12240 = this;
return this_sym12224.call.apply(this_sym12224,[this_sym12224].concat(args12225.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12241 = this;
var new_array__12242 = this__12241.array.slice();
new_array__12242.push(o);
return (new cljs.core.Vector(this__12241.meta,new_array__12242,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__12243 = this;
var this__12244 = this;
return cljs.core.pr_str.call(null,this__12244);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12245 = this;
return cljs.core.ci_reduce.call(null,this__12245.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12246 = this;
return cljs.core.ci_reduce.call(null,this__12246.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12247 = this;
if((this__12247.array.length > 0))
{var vector_seq__12248 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__12247.array.length))
{return cljs.core.cons.call(null,(this__12247.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__12248.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12249 = this;
return this__12249.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12250 = this;
var count__12251 = this__12250.array.length;
if((count__12251 > 0))
{return (this__12250.array[(count__12251 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12252 = this;
if((this__12252.array.length > 0))
{var new_array__12253 = this__12252.array.slice();
new_array__12253.pop();
return (new cljs.core.Vector(this__12252.meta,new_array__12253,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12254 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12255 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12256 = this;
return (new cljs.core.Vector(meta,this__12256.array,this__12256.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12257 = this;
return this__12257.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12258 = this;
if((function (){var and__3822__auto____12259 = (0 <= n);
if(and__3822__auto____12259)
{return (n < this__12258.array.length);
} else
{return and__3822__auto____12259;
}
})())
{return (this__12258.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12260 = this;
if((function (){var and__3822__auto____12261 = (0 <= n);
if(and__3822__auto____12261)
{return (n < this__12260.array.length);
} else
{return and__3822__auto____12261;
}
})())
{return (this__12260.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12262 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12262.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5829__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5829__auto__,writer__5830__auto__){
return cljs.core._write.call(null,writer__5830__auto__,"cljs.core/VectorNode");
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
var cnt__12265 = pv.cnt;
if((cnt__12265 < 32))
{return 0;
} else
{return (((cnt__12265 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__12271 = level;
var ret__12272 = node;
while(true){
if((ll__12271 === 0))
{return ret__12272;
} else
{var embed__12273 = ret__12272;
var r__12274 = cljs.core.pv_fresh_node.call(null,edit);
var ___12275 = cljs.core.pv_aset.call(null,r__12274,0,embed__12273);
{
var G__12276 = (ll__12271 - 5);
var G__12277 = r__12274;
ll__12271 = G__12276;
ret__12272 = G__12277;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__12283 = cljs.core.pv_clone_node.call(null,parent);
var subidx__12284 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__12283,subidx__12284,tailnode);
return ret__12283;
} else
{var child__12285 = cljs.core.pv_aget.call(null,parent,subidx__12284);
if(!((child__12285 == null)))
{var node_to_insert__12286 = push_tail.call(null,pv,(level - 5),child__12285,tailnode);
cljs.core.pv_aset.call(null,ret__12283,subidx__12284,node_to_insert__12286);
return ret__12283;
} else
{var node_to_insert__12287 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__12283,subidx__12284,node_to_insert__12287);
return ret__12283;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____12291 = (0 <= i);
if(and__3822__auto____12291)
{return (i < pv.cnt);
} else
{return and__3822__auto____12291;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__12292 = pv.root;
var level__12293 = pv.shift;
while(true){
if((level__12293 > 0))
{{
var G__12294 = cljs.core.pv_aget.call(null,node__12292,((i >>> level__12293) & 31));
var G__12295 = (level__12293 - 5);
node__12292 = G__12294;
level__12293 = G__12295;
continue;
}
} else
{return node__12292.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__12298 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__12298,(i & 31),val);
return ret__12298;
} else
{var subidx__12299 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12298,subidx__12299,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12299),i,val));
return ret__12298;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__12305 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12306 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12305));
if((function (){var and__3822__auto____12307 = (new_child__12306 == null);
if(and__3822__auto____12307)
{return (subidx__12305 === 0);
} else
{return and__3822__auto____12307;
}
})())
{return null;
} else
{var ret__12308 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12308,subidx__12305,new_child__12306);
return ret__12308;
}
} else
{if((subidx__12305 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__12309 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12309,subidx__12305,null);
return ret__12309;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12312 = this;
return (new cljs.core.TransientVector(this__12312.cnt,this__12312.shift,cljs.core.tv_editable_root.call(null,this__12312.root),cljs.core.tv_editable_tail.call(null,this__12312.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12313 = this;
var h__5708__auto____12314 = this__12313.__hash;
if(!((h__5708__auto____12314 == null)))
{return h__5708__auto____12314;
} else
{var h__5708__auto____12315 = cljs.core.hash_coll.call(null,coll);
this__12313.__hash = h__5708__auto____12315;
return h__5708__auto____12315;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12316 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12317 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12318 = this;
if((function (){var and__3822__auto____12319 = (0 <= k);
if(and__3822__auto____12319)
{return (k < this__12318.cnt);
} else
{return and__3822__auto____12319;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__12320 = this__12318.tail.slice();
(new_tail__12320[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__12318.meta,this__12318.cnt,this__12318.shift,this__12318.root,new_tail__12320,null));
} else
{return (new cljs.core.PersistentVector(this__12318.meta,this__12318.cnt,this__12318.shift,cljs.core.do_assoc.call(null,coll,this__12318.shift,this__12318.root,k,v),this__12318.tail,null));
}
} else
{if((k === this__12318.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__12318.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__12368 = null;
var G__12368__2 = (function (this_sym12321,k){
var this__12323 = this;
var this_sym12321__12324 = this;
var coll__12325 = this_sym12321__12324;
return coll__12325.cljs$core$ILookup$_lookup$arity$2(coll__12325,k);
});
var G__12368__3 = (function (this_sym12322,k,not_found){
var this__12323 = this;
var this_sym12322__12326 = this;
var coll__12327 = this_sym12322__12326;
return coll__12327.cljs$core$ILookup$_lookup$arity$3(coll__12327,k,not_found);
});
G__12368 = function(this_sym12322,k,not_found){
switch(arguments.length){
case 2:
return G__12368__2.call(this,this_sym12322,k);
case 3:
return G__12368__3.call(this,this_sym12322,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12368;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym12310,args12311){
var this__12328 = this;
return this_sym12310.call.apply(this_sym12310,[this_sym12310].concat(args12311.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__12329 = this;
var step_init__12330 = [0,init];
var i__12331 = 0;
while(true){
if((i__12331 < this__12329.cnt))
{var arr__12332 = cljs.core.array_for.call(null,v,i__12331);
var len__12333 = arr__12332.length;
var init__12337 = (function (){var j__12334 = 0;
var init__12335 = (step_init__12330[1]);
while(true){
if((j__12334 < len__12333))
{var init__12336 = f.call(null,init__12335,(j__12334 + i__12331),(arr__12332[j__12334]));
if(cljs.core.reduced_QMARK_.call(null,init__12336))
{return init__12336;
} else
{{
var G__12369 = (j__12334 + 1);
var G__12370 = init__12336;
j__12334 = G__12369;
init__12335 = G__12370;
continue;
}
}
} else
{(step_init__12330[0] = len__12333);
(step_init__12330[1] = init__12335);
return init__12335;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12337))
{return cljs.core.deref.call(null,init__12337);
} else
{{
var G__12371 = (i__12331 + (step_init__12330[0]));
i__12331 = G__12371;
continue;
}
}
} else
{return (step_init__12330[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12338 = this;
if(((this__12338.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__12339 = this__12338.tail.slice();
new_tail__12339.push(o);
return (new cljs.core.PersistentVector(this__12338.meta,(this__12338.cnt + 1),this__12338.shift,this__12338.root,new_tail__12339,null));
} else
{var root_overflow_QMARK___12340 = ((this__12338.cnt >>> 5) > (1 << this__12338.shift));
var new_shift__12341 = ((root_overflow_QMARK___12340)?(this__12338.shift + 5):this__12338.shift);
var new_root__12343 = ((root_overflow_QMARK___12340)?(function (){var n_r__12342 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__12342,0,this__12338.root);
cljs.core.pv_aset.call(null,n_r__12342,1,cljs.core.new_path.call(null,null,this__12338.shift,(new cljs.core.VectorNode(null,this__12338.tail))));
return n_r__12342;
})():cljs.core.push_tail.call(null,coll,this__12338.shift,this__12338.root,(new cljs.core.VectorNode(null,this__12338.tail))));
return (new cljs.core.PersistentVector(this__12338.meta,(this__12338.cnt + 1),new_shift__12341,new_root__12343,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__12344 = this;
if((this__12344.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__12344.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__12345 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__12346 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__12347 = this;
var this__12348 = this;
return cljs.core.pr_str.call(null,this__12348);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12349 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12350 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12351 = this;
if((this__12351.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12352 = this;
return this__12352.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12353 = this;
if((this__12353.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__12353.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12354 = this;
if((this__12354.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12354.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12354.meta);
} else
{if((1 < (this__12354.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__12354.meta,(this__12354.cnt - 1),this__12354.shift,this__12354.root,this__12354.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__12355 = cljs.core.array_for.call(null,coll,(this__12354.cnt - 2));
var nr__12356 = cljs.core.pop_tail.call(null,coll,this__12354.shift,this__12354.root);
var new_root__12357 = (((nr__12356 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__12356);
var cnt_1__12358 = (this__12354.cnt - 1);
if((function (){var and__3822__auto____12359 = (5 < this__12354.shift);
if(and__3822__auto____12359)
{return (cljs.core.pv_aget.call(null,new_root__12357,1) == null);
} else
{return and__3822__auto____12359;
}
})())
{return (new cljs.core.PersistentVector(this__12354.meta,cnt_1__12358,(this__12354.shift - 5),cljs.core.pv_aget.call(null,new_root__12357,0),new_tail__12355,null));
} else
{return (new cljs.core.PersistentVector(this__12354.meta,cnt_1__12358,this__12354.shift,new_root__12357,new_tail__12355,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12360 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12362 = this;
return (new cljs.core.PersistentVector(meta,this__12362.cnt,this__12362.shift,this__12362.root,this__12362.tail,this__12362.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12363 = this;
return this__12363.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12364 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12365 = this;
if((function (){var and__3822__auto____12366 = (0 <= n);
if(and__3822__auto____12366)
{return (n < this__12365.cnt);
} else
{return and__3822__auto____12366;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12367 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12367.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__12372 = xs.length;
var xs__12373 = (((no_clone === true))?xs:xs.slice());
if((l__12372 < 32))
{return (new cljs.core.PersistentVector(null,l__12372,5,cljs.core.PersistentVector.EMPTY_NODE,xs__12373,null));
} else
{var node__12374 = xs__12373.slice(0,32);
var v__12375 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__12374,null));
var i__12376 = 32;
var out__12377 = cljs.core._as_transient.call(null,v__12375);
while(true){
if((i__12376 < l__12372))
{{
var G__12378 = (i__12376 + 1);
var G__12379 = cljs.core.conj_BANG_.call(null,out__12377,(xs__12373[i__12376]));
i__12376 = G__12378;
out__12377 = G__12379;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12377);
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
vector.cljs$lang$applyTo = (function (arglist__12380){
var args = cljs.core.seq(arglist__12380);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12381 = this;
var h__5708__auto____12382 = this__12381.__hash;
if(!((h__5708__auto____12382 == null)))
{return h__5708__auto____12382;
} else
{var h__5708__auto____12383 = cljs.core.hash_coll.call(null,coll);
this__12381.__hash = h__5708__auto____12383;
return h__5708__auto____12383;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12384 = this;
if(((this__12384.off + 1) < this__12384.node.length))
{var s__12385 = cljs.core.chunked_seq.call(null,this__12384.vec,this__12384.node,this__12384.i,(this__12384.off + 1));
if((s__12385 == null))
{return null;
} else
{return s__12385;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12386 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12387 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12388 = this;
return (this__12388.node[this__12388.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12389 = this;
if(((this__12389.off + 1) < this__12389.node.length))
{var s__12390 = cljs.core.chunked_seq.call(null,this__12389.vec,this__12389.node,this__12389.i,(this__12389.off + 1));
if((s__12390 == null))
{return cljs.core.List.EMPTY;
} else
{return s__12390;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__12391 = this;
var l__12392 = this__12391.node.length;
var s__12393 = ((((this__12391.i + l__12392) < cljs.core._count.call(null,this__12391.vec)))?cljs.core.chunked_seq.call(null,this__12391.vec,(this__12391.i + l__12392),0):null);
if((s__12393 == null))
{return null;
} else
{return s__12393;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12394 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__12395 = this;
return cljs.core.chunked_seq.call(null,this__12395.vec,this__12395.node,this__12395.i,this__12395.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__12396 = this;
return this__12396.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12397 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12397.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__12398 = this;
return cljs.core.array_chunk.call(null,this__12398.node,this__12398.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__12399 = this;
var l__12400 = this__12399.node.length;
var s__12401 = ((((this__12399.i + l__12400) < cljs.core._count.call(null,this__12399.vec)))?cljs.core.chunked_seq.call(null,this__12399.vec,(this__12399.i + l__12400),0):null);
if((s__12401 == null))
{return cljs.core.List.EMPTY;
} else
{return s__12401;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12404 = this;
var h__5708__auto____12405 = this__12404.__hash;
if(!((h__5708__auto____12405 == null)))
{return h__5708__auto____12405;
} else
{var h__5708__auto____12406 = cljs.core.hash_coll.call(null,coll);
this__12404.__hash = h__5708__auto____12406;
return h__5708__auto____12406;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12407 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12408 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__12409 = this;
var v_pos__12410 = (this__12409.start + key);
return (new cljs.core.Subvec(this__12409.meta,cljs.core._assoc.call(null,this__12409.v,v_pos__12410,val),this__12409.start,((this__12409.end > (v_pos__12410 + 1)) ? this__12409.end : (v_pos__12410 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__12436 = null;
var G__12436__2 = (function (this_sym12411,k){
var this__12413 = this;
var this_sym12411__12414 = this;
var coll__12415 = this_sym12411__12414;
return coll__12415.cljs$core$ILookup$_lookup$arity$2(coll__12415,k);
});
var G__12436__3 = (function (this_sym12412,k,not_found){
var this__12413 = this;
var this_sym12412__12416 = this;
var coll__12417 = this_sym12412__12416;
return coll__12417.cljs$core$ILookup$_lookup$arity$3(coll__12417,k,not_found);
});
G__12436 = function(this_sym12412,k,not_found){
switch(arguments.length){
case 2:
return G__12436__2.call(this,this_sym12412,k);
case 3:
return G__12436__3.call(this,this_sym12412,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12436;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym12402,args12403){
var this__12418 = this;
return this_sym12402.call.apply(this_sym12402,[this_sym12402].concat(args12403.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12419 = this;
return (new cljs.core.Subvec(this__12419.meta,cljs.core._assoc_n.call(null,this__12419.v,this__12419.end,o),this__12419.start,(this__12419.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__12420 = this;
var this__12421 = this;
return cljs.core.pr_str.call(null,this__12421);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__12422 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__12423 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12424 = this;
var subvec_seq__12425 = (function subvec_seq(i){
if((i === this__12424.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12424.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__12425.call(null,this__12424.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12426 = this;
return (this__12426.end - this__12426.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12427 = this;
return cljs.core._nth.call(null,this__12427.v,(this__12427.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12428 = this;
if((this__12428.start === this__12428.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12428.meta,this__12428.v,this__12428.start,(this__12428.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12429 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12430 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12431 = this;
return (new cljs.core.Subvec(meta,this__12431.v,this__12431.start,this__12431.end,this__12431.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12432 = this;
return this__12432.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12433 = this;
return cljs.core._nth.call(null,this__12433.v,(this__12433.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12434 = this;
return cljs.core._nth.call(null,this__12434.v,(this__12434.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12435 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12435.meta);
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
var ret__12438 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__12438,0,tl.length);
return ret__12438;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__12442 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__12443 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12442,subidx__12443,(((level === 5))?tail_node:(function (){var child__12444 = cljs.core.pv_aget.call(null,ret__12442,subidx__12443);
if(!((child__12444 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__12444,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__12442;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__12449 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__12450 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12451 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__12449,subidx__12450));
if((function (){var and__3822__auto____12452 = (new_child__12451 == null);
if(and__3822__auto____12452)
{return (subidx__12450 === 0);
} else
{return and__3822__auto____12452;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__12449,subidx__12450,new_child__12451);
return node__12449;
}
} else
{if((subidx__12450 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__12449,subidx__12450,null);
return node__12449;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____12457 = (0 <= i);
if(and__3822__auto____12457)
{return (i < tv.cnt);
} else
{return and__3822__auto____12457;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__12458 = tv.root;
var node__12459 = root__12458;
var level__12460 = tv.shift;
while(true){
if((level__12460 > 0))
{{
var G__12461 = cljs.core.tv_ensure_editable.call(null,root__12458.edit,cljs.core.pv_aget.call(null,node__12459,((i >>> level__12460) & 31)));
var G__12462 = (level__12460 - 5);
node__12459 = G__12461;
level__12460 = G__12462;
continue;
}
} else
{return node__12459.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__12502 = null;
var G__12502__2 = (function (this_sym12465,k){
var this__12467 = this;
var this_sym12465__12468 = this;
var coll__12469 = this_sym12465__12468;
return coll__12469.cljs$core$ILookup$_lookup$arity$2(coll__12469,k);
});
var G__12502__3 = (function (this_sym12466,k,not_found){
var this__12467 = this;
var this_sym12466__12470 = this;
var coll__12471 = this_sym12466__12470;
return coll__12471.cljs$core$ILookup$_lookup$arity$3(coll__12471,k,not_found);
});
G__12502 = function(this_sym12466,k,not_found){
switch(arguments.length){
case 2:
return G__12502__2.call(this,this_sym12466,k);
case 3:
return G__12502__3.call(this,this_sym12466,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12502;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym12463,args12464){
var this__12472 = this;
return this_sym12463.call.apply(this_sym12463,[this_sym12463].concat(args12464.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12473 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12474 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12475 = this;
if(this__12475.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12476 = this;
if((function (){var and__3822__auto____12477 = (0 <= n);
if(and__3822__auto____12477)
{return (n < this__12476.cnt);
} else
{return and__3822__auto____12477;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12478 = this;
if(this__12478.root.edit)
{return this__12478.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__12479 = this;
if(this__12479.root.edit)
{if((function (){var and__3822__auto____12480 = (0 <= n);
if(and__3822__auto____12480)
{return (n < this__12479.cnt);
} else
{return and__3822__auto____12480;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__12479.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__12485 = (function go(level,node){
var node__12483 = cljs.core.tv_ensure_editable.call(null,this__12479.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__12483,(n & 31),val);
return node__12483;
} else
{var subidx__12484 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__12483,subidx__12484,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__12483,subidx__12484)));
return node__12483;
}
}).call(null,this__12479.shift,this__12479.root);
this__12479.root = new_root__12485;
return tcoll;
}
} else
{if((n === this__12479.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__12479.cnt)].join('')));
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
var this__12486 = this;
if(this__12486.root.edit)
{if((this__12486.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12486.cnt))
{this__12486.cnt = 0;
return tcoll;
} else
{if((((this__12486.cnt - 1) & 31) > 0))
{this__12486.cnt = (this__12486.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__12487 = cljs.core.editable_array_for.call(null,tcoll,(this__12486.cnt - 2));
var new_root__12489 = (function (){var nr__12488 = cljs.core.tv_pop_tail.call(null,tcoll,this__12486.shift,this__12486.root);
if(!((nr__12488 == null)))
{return nr__12488;
} else
{return (new cljs.core.VectorNode(this__12486.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____12490 = (5 < this__12486.shift);
if(and__3822__auto____12490)
{return (cljs.core.pv_aget.call(null,new_root__12489,1) == null);
} else
{return and__3822__auto____12490;
}
})())
{var new_root__12491 = cljs.core.tv_ensure_editable.call(null,this__12486.root.edit,cljs.core.pv_aget.call(null,new_root__12489,0));
this__12486.root = new_root__12491;
this__12486.shift = (this__12486.shift - 5);
this__12486.cnt = (this__12486.cnt - 1);
this__12486.tail = new_tail__12487;
return tcoll;
} else
{this__12486.root = new_root__12489;
this__12486.cnt = (this__12486.cnt - 1);
this__12486.tail = new_tail__12487;
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
var this__12492 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12493 = this;
if(this__12493.root.edit)
{if(((this__12493.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__12493.tail[(this__12493.cnt & 31)] = o);
this__12493.cnt = (this__12493.cnt + 1);
return tcoll;
} else
{var tail_node__12494 = (new cljs.core.VectorNode(this__12493.root.edit,this__12493.tail));
var new_tail__12495 = cljs.core.make_array.call(null,32);
(new_tail__12495[0] = o);
this__12493.tail = new_tail__12495;
if(((this__12493.cnt >>> 5) > (1 << this__12493.shift)))
{var new_root_array__12496 = cljs.core.make_array.call(null,32);
var new_shift__12497 = (this__12493.shift + 5);
(new_root_array__12496[0] = this__12493.root);
(new_root_array__12496[1] = cljs.core.new_path.call(null,this__12493.root.edit,this__12493.shift,tail_node__12494));
this__12493.root = (new cljs.core.VectorNode(this__12493.root.edit,new_root_array__12496));
this__12493.shift = new_shift__12497;
this__12493.cnt = (this__12493.cnt + 1);
return tcoll;
} else
{var new_root__12498 = cljs.core.tv_push_tail.call(null,tcoll,this__12493.shift,this__12493.root,tail_node__12494);
this__12493.root = new_root__12498;
this__12493.cnt = (this__12493.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12499 = this;
if(this__12499.root.edit)
{this__12499.root.edit = null;
var len__12500 = (this__12499.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__12501 = cljs.core.make_array.call(null,len__12500);
cljs.core.array_copy.call(null,this__12499.tail,0,trimmed_tail__12501,0,len__12500);
return (new cljs.core.PersistentVector(null,this__12499.cnt,this__12499.shift,this__12499.root,trimmed_tail__12501,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12503 = this;
var h__5708__auto____12504 = this__12503.__hash;
if(!((h__5708__auto____12504 == null)))
{return h__5708__auto____12504;
} else
{var h__5708__auto____12505 = cljs.core.hash_coll.call(null,coll);
this__12503.__hash = h__5708__auto____12505;
return h__5708__auto____12505;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12506 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__12507 = this;
var this__12508 = this;
return cljs.core.pr_str.call(null,this__12508);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12509 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12510 = this;
return cljs.core._first.call(null,this__12510.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12511 = this;
var temp__3971__auto____12512 = cljs.core.next.call(null,this__12511.front);
if(temp__3971__auto____12512)
{var f1__12513 = temp__3971__auto____12512;
return (new cljs.core.PersistentQueueSeq(this__12511.meta,f1__12513,this__12511.rear,null));
} else
{if((this__12511.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12511.meta,this__12511.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12514 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12515 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12515.front,this__12515.rear,this__12515.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12516 = this;
return this__12516.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12517 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12517.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12518 = this;
var h__5708__auto____12519 = this__12518.__hash;
if(!((h__5708__auto____12519 == null)))
{return h__5708__auto____12519;
} else
{var h__5708__auto____12520 = cljs.core.hash_coll.call(null,coll);
this__12518.__hash = h__5708__auto____12520;
return h__5708__auto____12520;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12521 = this;
if(cljs.core.truth_(this__12521.front))
{return (new cljs.core.PersistentQueue(this__12521.meta,(this__12521.count + 1),this__12521.front,cljs.core.conj.call(null,(function (){var or__3824__auto____12522 = this__12521.rear;
if(cljs.core.truth_(or__3824__auto____12522))
{return or__3824__auto____12522;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__12521.meta,(this__12521.count + 1),cljs.core.conj.call(null,this__12521.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__12523 = this;
var this__12524 = this;
return cljs.core.pr_str.call(null,this__12524);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12525 = this;
var rear__12526 = cljs.core.seq.call(null,this__12525.rear);
if(cljs.core.truth_((function (){var or__3824__auto____12527 = this__12525.front;
if(cljs.core.truth_(or__3824__auto____12527))
{return or__3824__auto____12527;
} else
{return rear__12526;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12525.front,cljs.core.seq.call(null,rear__12526),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12528 = this;
return this__12528.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12529 = this;
return cljs.core._first.call(null,this__12529.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12530 = this;
if(cljs.core.truth_(this__12530.front))
{var temp__3971__auto____12531 = cljs.core.next.call(null,this__12530.front);
if(temp__3971__auto____12531)
{var f1__12532 = temp__3971__auto____12531;
return (new cljs.core.PersistentQueue(this__12530.meta,(this__12530.count - 1),f1__12532,this__12530.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__12530.meta,(this__12530.count - 1),cljs.core.seq.call(null,this__12530.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12533 = this;
return cljs.core.first.call(null,this__12533.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12534 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12535 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12536 = this;
return (new cljs.core.PersistentQueue(meta,this__12536.count,this__12536.front,this__12536.rear,this__12536.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12537 = this;
return this__12537.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12538 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12539 = this;
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
var len__12542 = array.length;
var i__12543 = 0;
while(true){
if((i__12543 < len__12542))
{if((k === (array[i__12543])))
{return i__12543;
} else
{{
var G__12544 = (i__12543 + incr);
i__12543 = G__12544;
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
var a__12547 = cljs.core.hash.call(null,a);
var b__12548 = cljs.core.hash.call(null,b);
if((a__12547 < b__12548))
{return -1;
} else
{if((a__12547 > b__12548))
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
var ks__12556 = m.keys;
var len__12557 = ks__12556.length;
var so__12558 = m.strobj;
var out__12559 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__12560 = 0;
var out__12561 = cljs.core.transient$.call(null,out__12559);
while(true){
if((i__12560 < len__12557))
{var k__12562 = (ks__12556[i__12560]);
{
var G__12563 = (i__12560 + 1);
var G__12564 = cljs.core.assoc_BANG_.call(null,out__12561,k__12562,(so__12558[k__12562]));
i__12560 = G__12563;
out__12561 = G__12564;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__12561,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__12570 = {};
var l__12571 = ks.length;
var i__12572 = 0;
while(true){
if((i__12572 < l__12571))
{var k__12573 = (ks[i__12572]);
(new_obj__12570[k__12573] = (obj[k__12573]));
{
var G__12574 = (i__12572 + 1);
i__12572 = G__12574;
continue;
}
} else
{}
break;
}
return new_obj__12570;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12577 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12578 = this;
var h__5708__auto____12579 = this__12578.__hash;
if(!((h__5708__auto____12579 == null)))
{return h__5708__auto____12579;
} else
{var h__5708__auto____12580 = cljs.core.hash_imap.call(null,coll);
this__12578.__hash = h__5708__auto____12580;
return h__5708__auto____12580;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12581 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12582 = this;
if((function (){var and__3822__auto____12583 = goog.isString(k);
if(and__3822__auto____12583)
{return !((cljs.core.scan_array.call(null,1,k,this__12582.keys) == null));
} else
{return and__3822__auto____12583;
}
})())
{return (this__12582.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12584 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____12585 = (this__12584.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____12585)
{return or__3824__auto____12585;
} else
{return (this__12584.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__12584.keys) == null)))
{var new_strobj__12586 = cljs.core.obj_clone.call(null,this__12584.strobj,this__12584.keys);
(new_strobj__12586[k] = v);
return (new cljs.core.ObjMap(this__12584.meta,this__12584.keys,new_strobj__12586,(this__12584.update_count + 1),null));
} else
{var new_strobj__12587 = cljs.core.obj_clone.call(null,this__12584.strobj,this__12584.keys);
var new_keys__12588 = this__12584.keys.slice();
(new_strobj__12587[k] = v);
new_keys__12588.push(k);
return (new cljs.core.ObjMap(this__12584.meta,new_keys__12588,new_strobj__12587,(this__12584.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12589 = this;
if((function (){var and__3822__auto____12590 = goog.isString(k);
if(and__3822__auto____12590)
{return !((cljs.core.scan_array.call(null,1,k,this__12589.keys) == null));
} else
{return and__3822__auto____12590;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__12612 = null;
var G__12612__2 = (function (this_sym12591,k){
var this__12593 = this;
var this_sym12591__12594 = this;
var coll__12595 = this_sym12591__12594;
return coll__12595.cljs$core$ILookup$_lookup$arity$2(coll__12595,k);
});
var G__12612__3 = (function (this_sym12592,k,not_found){
var this__12593 = this;
var this_sym12592__12596 = this;
var coll__12597 = this_sym12592__12596;
return coll__12597.cljs$core$ILookup$_lookup$arity$3(coll__12597,k,not_found);
});
G__12612 = function(this_sym12592,k,not_found){
switch(arguments.length){
case 2:
return G__12612__2.call(this,this_sym12592,k);
case 3:
return G__12612__3.call(this,this_sym12592,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12612;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym12575,args12576){
var this__12598 = this;
return this_sym12575.call.apply(this_sym12575,[this_sym12575].concat(args12576.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12599 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__12600 = this;
var this__12601 = this;
return cljs.core.pr_str.call(null,this__12601);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12602 = this;
if((this__12602.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__12565_SHARP_){
return cljs.core.vector.call(null,p1__12565_SHARP_,(this__12602.strobj[p1__12565_SHARP_]));
}),this__12602.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12603 = this;
return this__12603.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12604 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12605 = this;
return (new cljs.core.ObjMap(meta,this__12605.keys,this__12605.strobj,this__12605.update_count,this__12605.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12606 = this;
return this__12606.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12607 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12607.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12608 = this;
if((function (){var and__3822__auto____12609 = goog.isString(k);
if(and__3822__auto____12609)
{return !((cljs.core.scan_array.call(null,1,k,this__12608.keys) == null));
} else
{return and__3822__auto____12609;
}
})())
{var new_keys__12610 = this__12608.keys.slice();
var new_strobj__12611 = cljs.core.obj_clone.call(null,this__12608.strobj,this__12608.keys);
new_keys__12610.splice(cljs.core.scan_array.call(null,1,k,new_keys__12610),1);
cljs.core.js_delete.call(null,new_strobj__12611,k);
return (new cljs.core.ObjMap(this__12608.meta,new_keys__12610,new_strobj__12611,(this__12608.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12616 = this;
var h__5708__auto____12617 = this__12616.__hash;
if(!((h__5708__auto____12617 == null)))
{return h__5708__auto____12617;
} else
{var h__5708__auto____12618 = cljs.core.hash_imap.call(null,coll);
this__12616.__hash = h__5708__auto____12618;
return h__5708__auto____12618;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12619 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12620 = this;
var bucket__12621 = (this__12620.hashobj[cljs.core.hash.call(null,k)]);
var i__12622 = (cljs.core.truth_(bucket__12621)?cljs.core.scan_array.call(null,2,k,bucket__12621):null);
if(cljs.core.truth_(i__12622))
{return (bucket__12621[(i__12622 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12623 = this;
var h__12624 = cljs.core.hash.call(null,k);
var bucket__12625 = (this__12623.hashobj[h__12624]);
if(cljs.core.truth_(bucket__12625))
{var new_bucket__12626 = bucket__12625.slice();
var new_hashobj__12627 = goog.object.clone(this__12623.hashobj);
(new_hashobj__12627[h__12624] = new_bucket__12626);
var temp__3971__auto____12628 = cljs.core.scan_array.call(null,2,k,new_bucket__12626);
if(cljs.core.truth_(temp__3971__auto____12628))
{var i__12629 = temp__3971__auto____12628;
(new_bucket__12626[(i__12629 + 1)] = v);
return (new cljs.core.HashMap(this__12623.meta,this__12623.count,new_hashobj__12627,null));
} else
{new_bucket__12626.push(k,v);
return (new cljs.core.HashMap(this__12623.meta,(this__12623.count + 1),new_hashobj__12627,null));
}
} else
{var new_hashobj__12630 = goog.object.clone(this__12623.hashobj);
(new_hashobj__12630[h__12624] = [k,v]);
return (new cljs.core.HashMap(this__12623.meta,(this__12623.count + 1),new_hashobj__12630,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12631 = this;
var bucket__12632 = (this__12631.hashobj[cljs.core.hash.call(null,k)]);
var i__12633 = (cljs.core.truth_(bucket__12632)?cljs.core.scan_array.call(null,2,k,bucket__12632):null);
if(cljs.core.truth_(i__12633))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__12658 = null;
var G__12658__2 = (function (this_sym12634,k){
var this__12636 = this;
var this_sym12634__12637 = this;
var coll__12638 = this_sym12634__12637;
return coll__12638.cljs$core$ILookup$_lookup$arity$2(coll__12638,k);
});
var G__12658__3 = (function (this_sym12635,k,not_found){
var this__12636 = this;
var this_sym12635__12639 = this;
var coll__12640 = this_sym12635__12639;
return coll__12640.cljs$core$ILookup$_lookup$arity$3(coll__12640,k,not_found);
});
G__12658 = function(this_sym12635,k,not_found){
switch(arguments.length){
case 2:
return G__12658__2.call(this,this_sym12635,k);
case 3:
return G__12658__3.call(this,this_sym12635,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12658;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym12614,args12615){
var this__12641 = this;
return this_sym12614.call.apply(this_sym12614,[this_sym12614].concat(args12615.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12642 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__12643 = this;
var this__12644 = this;
return cljs.core.pr_str.call(null,this__12644);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12645 = this;
if((this__12645.count > 0))
{var hashes__12646 = cljs.core.js_keys.call(null,this__12645.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__12613_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12645.hashobj[p1__12613_SHARP_])));
}),hashes__12646);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12647 = this;
return this__12647.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12648 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12649 = this;
return (new cljs.core.HashMap(meta,this__12649.count,this__12649.hashobj,this__12649.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12650 = this;
return this__12650.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12651 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12651.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12652 = this;
var h__12653 = cljs.core.hash.call(null,k);
var bucket__12654 = (this__12652.hashobj[h__12653]);
var i__12655 = (cljs.core.truth_(bucket__12654)?cljs.core.scan_array.call(null,2,k,bucket__12654):null);
if(cljs.core.not.call(null,i__12655))
{return coll;
} else
{var new_hashobj__12656 = goog.object.clone(this__12652.hashobj);
if((3 > bucket__12654.length))
{cljs.core.js_delete.call(null,new_hashobj__12656,h__12653);
} else
{var new_bucket__12657 = bucket__12654.slice();
new_bucket__12657.splice(i__12655,2);
(new_hashobj__12656[h__12653] = new_bucket__12657);
}
return (new cljs.core.HashMap(this__12652.meta,(this__12652.count - 1),new_hashobj__12656,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12659 = ks.length;
var i__12660 = 0;
var out__12661 = cljs.core.HashMap.EMPTY;
while(true){
if((i__12660 < len__12659))
{{
var G__12662 = (i__12660 + 1);
var G__12663 = cljs.core.assoc.call(null,out__12661,(ks[i__12660]),(vs[i__12660]));
i__12660 = G__12662;
out__12661 = G__12663;
continue;
}
} else
{return out__12661;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__12667 = m.arr;
var len__12668 = arr__12667.length;
var i__12669 = 0;
while(true){
if((len__12668 <= i__12669))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__12667[i__12669]),k))
{return i__12669;
} else
{if("\uFDD0'else")
{{
var G__12670 = (i__12669 + 2);
i__12669 = G__12670;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12673 = this;
return (new cljs.core.TransientArrayMap({},this__12673.arr.length,this__12673.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12674 = this;
var h__5708__auto____12675 = this__12674.__hash;
if(!((h__5708__auto____12675 == null)))
{return h__5708__auto____12675;
} else
{var h__5708__auto____12676 = cljs.core.hash_imap.call(null,coll);
this__12674.__hash = h__5708__auto____12676;
return h__5708__auto____12676;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12677 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12678 = this;
var idx__12679 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12679 === -1))
{return not_found;
} else
{return (this__12678.arr[(idx__12679 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12680 = this;
var idx__12681 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12681 === -1))
{if((this__12680.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__12680.meta,(this__12680.cnt + 1),(function (){var G__12682__12683 = this__12680.arr.slice();
G__12682__12683.push(k);
G__12682__12683.push(v);
return G__12682__12683;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__12680.arr[(idx__12681 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__12680.meta,this__12680.cnt,(function (){var G__12684__12685 = this__12680.arr.slice();
(G__12684__12685[(idx__12681 + 1)] = v);
return G__12684__12685;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12686 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__12718 = null;
var G__12718__2 = (function (this_sym12687,k){
var this__12689 = this;
var this_sym12687__12690 = this;
var coll__12691 = this_sym12687__12690;
return coll__12691.cljs$core$ILookup$_lookup$arity$2(coll__12691,k);
});
var G__12718__3 = (function (this_sym12688,k,not_found){
var this__12689 = this;
var this_sym12688__12692 = this;
var coll__12693 = this_sym12688__12692;
return coll__12693.cljs$core$ILookup$_lookup$arity$3(coll__12693,k,not_found);
});
G__12718 = function(this_sym12688,k,not_found){
switch(arguments.length){
case 2:
return G__12718__2.call(this,this_sym12688,k);
case 3:
return G__12718__3.call(this,this_sym12688,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12718;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym12671,args12672){
var this__12694 = this;
return this_sym12671.call.apply(this_sym12671,[this_sym12671].concat(args12672.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12695 = this;
var len__12696 = this__12695.arr.length;
var i__12697 = 0;
var init__12698 = init;
while(true){
if((i__12697 < len__12696))
{var init__12699 = f.call(null,init__12698,(this__12695.arr[i__12697]),(this__12695.arr[(i__12697 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__12699))
{return cljs.core.deref.call(null,init__12699);
} else
{{
var G__12719 = (i__12697 + 2);
var G__12720 = init__12699;
i__12697 = G__12719;
init__12698 = G__12720;
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
var this__12700 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__12701 = this;
var this__12702 = this;
return cljs.core.pr_str.call(null,this__12702);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12703 = this;
if((this__12703.cnt > 0))
{var len__12704 = this__12703.arr.length;
var array_map_seq__12705 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__12704))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__12703.arr[i]),(this__12703.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__12705.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12706 = this;
return this__12706.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12707 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12708 = this;
return (new cljs.core.PersistentArrayMap(meta,this__12708.cnt,this__12708.arr,this__12708.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12709 = this;
return this__12709.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12710 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12710.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12711 = this;
var idx__12712 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12712 >= 0))
{var len__12713 = this__12711.arr.length;
var new_len__12714 = (len__12713 - 2);
if((new_len__12714 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__12715 = cljs.core.make_array.call(null,new_len__12714);
var s__12716 = 0;
var d__12717 = 0;
while(true){
if((s__12716 >= len__12713))
{return (new cljs.core.PersistentArrayMap(this__12711.meta,(this__12711.cnt - 1),new_arr__12715,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__12711.arr[s__12716])))
{{
var G__12721 = (s__12716 + 2);
var G__12722 = d__12717;
s__12716 = G__12721;
d__12717 = G__12722;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__12715[d__12717] = (this__12711.arr[s__12716]));
(new_arr__12715[(d__12717 + 1)] = (this__12711.arr[(s__12716 + 1)]));
{
var G__12723 = (s__12716 + 2);
var G__12724 = (d__12717 + 2);
s__12716 = G__12723;
d__12717 = G__12724;
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
var len__12725 = cljs.core.count.call(null,ks);
var i__12726 = 0;
var out__12727 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__12726 < len__12725))
{{
var G__12728 = (i__12726 + 1);
var G__12729 = cljs.core.assoc_BANG_.call(null,out__12727,(ks[i__12726]),(vs[i__12726]));
i__12726 = G__12728;
out__12727 = G__12729;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12727);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12730 = this;
if(cljs.core.truth_(this__12730.editable_QMARK_))
{var idx__12731 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12731 >= 0))
{(this__12730.arr[idx__12731] = (this__12730.arr[(this__12730.len - 2)]));
(this__12730.arr[(idx__12731 + 1)] = (this__12730.arr[(this__12730.len - 1)]));
var G__12732__12733 = this__12730.arr;
G__12732__12733.pop();
G__12732__12733.pop();
G__12732__12733;
this__12730.len = (this__12730.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12734 = this;
if(cljs.core.truth_(this__12734.editable_QMARK_))
{var idx__12735 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12735 === -1))
{if(((this__12734.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__12734.len = (this__12734.len + 2);
this__12734.arr.push(key);
this__12734.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__12734.len,this__12734.arr),key,val);
}
} else
{if((val === (this__12734.arr[(idx__12735 + 1)])))
{return tcoll;
} else
{(this__12734.arr[(idx__12735 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12736 = this;
if(cljs.core.truth_(this__12736.editable_QMARK_))
{if((function (){var G__12737__12738 = o;
if(G__12737__12738)
{if((function (){var or__3824__auto____12739 = (G__12737__12738.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____12739)
{return or__3824__auto____12739;
} else
{return G__12737__12738.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12737__12738.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12737__12738);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12737__12738);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__12740 = cljs.core.seq.call(null,o);
var tcoll__12741 = tcoll;
while(true){
var temp__3971__auto____12742 = cljs.core.first.call(null,es__12740);
if(cljs.core.truth_(temp__3971__auto____12742))
{var e__12743 = temp__3971__auto____12742;
{
var G__12749 = cljs.core.next.call(null,es__12740);
var G__12750 = tcoll__12741.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__12741,cljs.core.key.call(null,e__12743),cljs.core.val.call(null,e__12743));
es__12740 = G__12749;
tcoll__12741 = G__12750;
continue;
}
} else
{return tcoll__12741;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12744 = this;
if(cljs.core.truth_(this__12744.editable_QMARK_))
{this__12744.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__12744.len,2),this__12744.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12745 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12746 = this;
if(cljs.core.truth_(this__12746.editable_QMARK_))
{var idx__12747 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__12747 === -1))
{return not_found;
} else
{return (this__12746.arr[(idx__12747 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__12748 = this;
if(cljs.core.truth_(this__12748.editable_QMARK_))
{return cljs.core.quot.call(null,this__12748.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__12753 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__12754 = 0;
while(true){
if((i__12754 < len))
{{
var G__12755 = cljs.core.assoc_BANG_.call(null,out__12753,(arr[i__12754]),(arr[(i__12754 + 1)]));
var G__12756 = (i__12754 + 2);
out__12753 = G__12755;
i__12754 = G__12756;
continue;
}
} else
{return out__12753;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5829__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5829__auto__,writer__5830__auto__){
return cljs.core._write.call(null,writer__5830__auto__,"cljs.core/Box");
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
var G__12761__12762 = arr.slice();
(G__12761__12762[i] = a);
return G__12761__12762;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__12763__12764 = arr.slice();
(G__12763__12764[i] = a);
(G__12763__12764[j] = b);
return G__12763__12764;
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
var new_arr__12766 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__12766,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__12766,(2 * i),(new_arr__12766.length - (2 * i)));
return new_arr__12766;
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
var editable__12769 = inode.ensure_editable(edit);
(editable__12769.arr[i] = a);
return editable__12769;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__12770 = inode.ensure_editable(edit);
(editable__12770.arr[i] = a);
(editable__12770.arr[j] = b);
return editable__12770;
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
var len__12777 = arr.length;
var i__12778 = 0;
var init__12779 = init;
while(true){
if((i__12778 < len__12777))
{var init__12782 = (function (){var k__12780 = (arr[i__12778]);
if(!((k__12780 == null)))
{return f.call(null,init__12779,k__12780,(arr[(i__12778 + 1)]));
} else
{var node__12781 = (arr[(i__12778 + 1)]);
if(!((node__12781 == null)))
{return node__12781.kv_reduce(f,init__12779);
} else
{return init__12779;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12782))
{return cljs.core.deref.call(null,init__12782);
} else
{{
var G__12783 = (i__12778 + 2);
var G__12784 = init__12782;
i__12778 = G__12783;
init__12779 = G__12784;
continue;
}
}
} else
{return init__12779;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__12785 = this;
var inode__12786 = this;
if((this__12785.bitmap === bit))
{return null;
} else
{var editable__12787 = inode__12786.ensure_editable(e);
var earr__12788 = editable__12787.arr;
var len__12789 = earr__12788.length;
editable__12787.bitmap = (bit ^ editable__12787.bitmap);
cljs.core.array_copy.call(null,earr__12788,(2 * (i + 1)),earr__12788,(2 * i),(len__12789 - (2 * (i + 1))));
(earr__12788[(len__12789 - 2)] = null);
(earr__12788[(len__12789 - 1)] = null);
return editable__12787;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12790 = this;
var inode__12791 = this;
var bit__12792 = (1 << ((hash >>> shift) & 0x01f));
var idx__12793 = cljs.core.bitmap_indexed_node_index.call(null,this__12790.bitmap,bit__12792);
if(((this__12790.bitmap & bit__12792) === 0))
{var n__12794 = cljs.core.bit_count.call(null,this__12790.bitmap);
if(((2 * n__12794) < this__12790.arr.length))
{var editable__12795 = inode__12791.ensure_editable(edit);
var earr__12796 = editable__12795.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__12796,(2 * idx__12793),earr__12796,(2 * (idx__12793 + 1)),(2 * (n__12794 - idx__12793)));
(earr__12796[(2 * idx__12793)] = key);
(earr__12796[((2 * idx__12793) + 1)] = val);
editable__12795.bitmap = (editable__12795.bitmap | bit__12792);
return editable__12795;
} else
{if((n__12794 >= 16))
{var nodes__12797 = cljs.core.make_array.call(null,32);
var jdx__12798 = ((hash >>> shift) & 0x01f);
(nodes__12797[jdx__12798] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12799 = 0;
var j__12800 = 0;
while(true){
if((i__12799 < 32))
{if((((this__12790.bitmap >>> i__12799) & 1) === 0))
{{
var G__12853 = (i__12799 + 1);
var G__12854 = j__12800;
i__12799 = G__12853;
j__12800 = G__12854;
continue;
}
} else
{(nodes__12797[i__12799] = ((!(((this__12790.arr[j__12800]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__12790.arr[j__12800])),(this__12790.arr[j__12800]),(this__12790.arr[(j__12800 + 1)]),added_leaf_QMARK_):(this__12790.arr[(j__12800 + 1)])));
{
var G__12855 = (i__12799 + 1);
var G__12856 = (j__12800 + 2);
i__12799 = G__12855;
j__12800 = G__12856;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__12794 + 1),nodes__12797));
} else
{if("\uFDD0'else")
{var new_arr__12801 = cljs.core.make_array.call(null,(2 * (n__12794 + 4)));
cljs.core.array_copy.call(null,this__12790.arr,0,new_arr__12801,0,(2 * idx__12793));
(new_arr__12801[(2 * idx__12793)] = key);
(new_arr__12801[((2 * idx__12793) + 1)] = val);
cljs.core.array_copy.call(null,this__12790.arr,(2 * idx__12793),new_arr__12801,(2 * (idx__12793 + 1)),(2 * (n__12794 - idx__12793)));
added_leaf_QMARK_.val = true;
var editable__12802 = inode__12791.ensure_editable(edit);
editable__12802.arr = new_arr__12801;
editable__12802.bitmap = (editable__12802.bitmap | bit__12792);
return editable__12802;
} else
{return null;
}
}
}
} else
{var key_or_nil__12803 = (this__12790.arr[(2 * idx__12793)]);
var val_or_node__12804 = (this__12790.arr[((2 * idx__12793) + 1)]);
if((key_or_nil__12803 == null))
{var n__12805 = val_or_node__12804.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12805 === val_or_node__12804))
{return inode__12791;
} else
{return cljs.core.edit_and_set.call(null,inode__12791,edit,((2 * idx__12793) + 1),n__12805);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12803))
{if((val === val_or_node__12804))
{return inode__12791;
} else
{return cljs.core.edit_and_set.call(null,inode__12791,edit,((2 * idx__12793) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__12791,edit,(2 * idx__12793),null,((2 * idx__12793) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__12803,val_or_node__12804,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__12806 = this;
var inode__12807 = this;
return cljs.core.create_inode_seq.call(null,this__12806.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12808 = this;
var inode__12809 = this;
var bit__12810 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12808.bitmap & bit__12810) === 0))
{return inode__12809;
} else
{var idx__12811 = cljs.core.bitmap_indexed_node_index.call(null,this__12808.bitmap,bit__12810);
var key_or_nil__12812 = (this__12808.arr[(2 * idx__12811)]);
var val_or_node__12813 = (this__12808.arr[((2 * idx__12811) + 1)]);
if((key_or_nil__12812 == null))
{var n__12814 = val_or_node__12813.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12814 === val_or_node__12813))
{return inode__12809;
} else
{if(!((n__12814 == null)))
{return cljs.core.edit_and_set.call(null,inode__12809,edit,((2 * idx__12811) + 1),n__12814);
} else
{if((this__12808.bitmap === bit__12810))
{return null;
} else
{if("\uFDD0'else")
{return inode__12809.edit_and_remove_pair(edit,bit__12810,idx__12811);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12812))
{(removed_leaf_QMARK_[0] = true);
return inode__12809.edit_and_remove_pair(edit,bit__12810,idx__12811);
} else
{if("\uFDD0'else")
{return inode__12809;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__12815 = this;
var inode__12816 = this;
if((e === this__12815.edit))
{return inode__12816;
} else
{var n__12817 = cljs.core.bit_count.call(null,this__12815.bitmap);
var new_arr__12818 = cljs.core.make_array.call(null,(((n__12817 < 0))?4:(2 * (n__12817 + 1))));
cljs.core.array_copy.call(null,this__12815.arr,0,new_arr__12818,0,(2 * n__12817));
return (new cljs.core.BitmapIndexedNode(e,this__12815.bitmap,new_arr__12818));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__12819 = this;
var inode__12820 = this;
return cljs.core.inode_kv_reduce.call(null,this__12819.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12821 = this;
var inode__12822 = this;
var bit__12823 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12821.bitmap & bit__12823) === 0))
{return not_found;
} else
{var idx__12824 = cljs.core.bitmap_indexed_node_index.call(null,this__12821.bitmap,bit__12823);
var key_or_nil__12825 = (this__12821.arr[(2 * idx__12824)]);
var val_or_node__12826 = (this__12821.arr[((2 * idx__12824) + 1)]);
if((key_or_nil__12825 == null))
{return val_or_node__12826.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12825))
{return cljs.core.PersistentVector.fromArray([key_or_nil__12825,val_or_node__12826], true);
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
var this__12827 = this;
var inode__12828 = this;
var bit__12829 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12827.bitmap & bit__12829) === 0))
{return inode__12828;
} else
{var idx__12830 = cljs.core.bitmap_indexed_node_index.call(null,this__12827.bitmap,bit__12829);
var key_or_nil__12831 = (this__12827.arr[(2 * idx__12830)]);
var val_or_node__12832 = (this__12827.arr[((2 * idx__12830) + 1)]);
if((key_or_nil__12831 == null))
{var n__12833 = val_or_node__12832.inode_without((shift + 5),hash,key);
if((n__12833 === val_or_node__12832))
{return inode__12828;
} else
{if(!((n__12833 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__12827.bitmap,cljs.core.clone_and_set.call(null,this__12827.arr,((2 * idx__12830) + 1),n__12833)));
} else
{if((this__12827.bitmap === bit__12829))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__12827.bitmap ^ bit__12829),cljs.core.remove_pair.call(null,this__12827.arr,idx__12830)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12831))
{return (new cljs.core.BitmapIndexedNode(null,(this__12827.bitmap ^ bit__12829),cljs.core.remove_pair.call(null,this__12827.arr,idx__12830)));
} else
{if("\uFDD0'else")
{return inode__12828;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12834 = this;
var inode__12835 = this;
var bit__12836 = (1 << ((hash >>> shift) & 0x01f));
var idx__12837 = cljs.core.bitmap_indexed_node_index.call(null,this__12834.bitmap,bit__12836);
if(((this__12834.bitmap & bit__12836) === 0))
{var n__12838 = cljs.core.bit_count.call(null,this__12834.bitmap);
if((n__12838 >= 16))
{var nodes__12839 = cljs.core.make_array.call(null,32);
var jdx__12840 = ((hash >>> shift) & 0x01f);
(nodes__12839[jdx__12840] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12841 = 0;
var j__12842 = 0;
while(true){
if((i__12841 < 32))
{if((((this__12834.bitmap >>> i__12841) & 1) === 0))
{{
var G__12857 = (i__12841 + 1);
var G__12858 = j__12842;
i__12841 = G__12857;
j__12842 = G__12858;
continue;
}
} else
{(nodes__12839[i__12841] = ((!(((this__12834.arr[j__12842]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__12834.arr[j__12842])),(this__12834.arr[j__12842]),(this__12834.arr[(j__12842 + 1)]),added_leaf_QMARK_):(this__12834.arr[(j__12842 + 1)])));
{
var G__12859 = (i__12841 + 1);
var G__12860 = (j__12842 + 2);
i__12841 = G__12859;
j__12842 = G__12860;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__12838 + 1),nodes__12839));
} else
{var new_arr__12843 = cljs.core.make_array.call(null,(2 * (n__12838 + 1)));
cljs.core.array_copy.call(null,this__12834.arr,0,new_arr__12843,0,(2 * idx__12837));
(new_arr__12843[(2 * idx__12837)] = key);
(new_arr__12843[((2 * idx__12837) + 1)] = val);
cljs.core.array_copy.call(null,this__12834.arr,(2 * idx__12837),new_arr__12843,(2 * (idx__12837 + 1)),(2 * (n__12838 - idx__12837)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__12834.bitmap | bit__12836),new_arr__12843));
}
} else
{var key_or_nil__12844 = (this__12834.arr[(2 * idx__12837)]);
var val_or_node__12845 = (this__12834.arr[((2 * idx__12837) + 1)]);
if((key_or_nil__12844 == null))
{var n__12846 = val_or_node__12845.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12846 === val_or_node__12845))
{return inode__12835;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12834.bitmap,cljs.core.clone_and_set.call(null,this__12834.arr,((2 * idx__12837) + 1),n__12846)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12844))
{if((val === val_or_node__12845))
{return inode__12835;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12834.bitmap,cljs.core.clone_and_set.call(null,this__12834.arr,((2 * idx__12837) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__12834.bitmap,cljs.core.clone_and_set.call(null,this__12834.arr,(2 * idx__12837),null,((2 * idx__12837) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__12844,val_or_node__12845,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12847 = this;
var inode__12848 = this;
var bit__12849 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12847.bitmap & bit__12849) === 0))
{return not_found;
} else
{var idx__12850 = cljs.core.bitmap_indexed_node_index.call(null,this__12847.bitmap,bit__12849);
var key_or_nil__12851 = (this__12847.arr[(2 * idx__12850)]);
var val_or_node__12852 = (this__12847.arr[((2 * idx__12850) + 1)]);
if((key_or_nil__12851 == null))
{return val_or_node__12852.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__12851))
{return val_or_node__12852;
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
var arr__12868 = array_node.arr;
var len__12869 = (2 * (array_node.cnt - 1));
var new_arr__12870 = cljs.core.make_array.call(null,len__12869);
var i__12871 = 0;
var j__12872 = 1;
var bitmap__12873 = 0;
while(true){
if((i__12871 < len__12869))
{if((function (){var and__3822__auto____12874 = !((i__12871 === idx));
if(and__3822__auto____12874)
{return !(((arr__12868[i__12871]) == null));
} else
{return and__3822__auto____12874;
}
})())
{(new_arr__12870[j__12872] = (arr__12868[i__12871]));
{
var G__12875 = (i__12871 + 1);
var G__12876 = (j__12872 + 2);
var G__12877 = (bitmap__12873 | (1 << i__12871));
i__12871 = G__12875;
j__12872 = G__12876;
bitmap__12873 = G__12877;
continue;
}
} else
{{
var G__12878 = (i__12871 + 1);
var G__12879 = j__12872;
var G__12880 = bitmap__12873;
i__12871 = G__12878;
j__12872 = G__12879;
bitmap__12873 = G__12880;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__12873,new_arr__12870));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12881 = this;
var inode__12882 = this;
var idx__12883 = ((hash >>> shift) & 0x01f);
var node__12884 = (this__12881.arr[idx__12883]);
if((node__12884 == null))
{var editable__12885 = cljs.core.edit_and_set.call(null,inode__12882,edit,idx__12883,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__12885.cnt = (editable__12885.cnt + 1);
return editable__12885;
} else
{var n__12886 = node__12884.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12886 === node__12884))
{return inode__12882;
} else
{return cljs.core.edit_and_set.call(null,inode__12882,edit,idx__12883,n__12886);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__12887 = this;
var inode__12888 = this;
return cljs.core.create_array_node_seq.call(null,this__12887.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12889 = this;
var inode__12890 = this;
var idx__12891 = ((hash >>> shift) & 0x01f);
var node__12892 = (this__12889.arr[idx__12891]);
if((node__12892 == null))
{return inode__12890;
} else
{var n__12893 = node__12892.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12893 === node__12892))
{return inode__12890;
} else
{if((n__12893 == null))
{if((this__12889.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12890,edit,idx__12891);
} else
{var editable__12894 = cljs.core.edit_and_set.call(null,inode__12890,edit,idx__12891,n__12893);
editable__12894.cnt = (editable__12894.cnt - 1);
return editable__12894;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__12890,edit,idx__12891,n__12893);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__12895 = this;
var inode__12896 = this;
if((e === this__12895.edit))
{return inode__12896;
} else
{return (new cljs.core.ArrayNode(e,this__12895.cnt,this__12895.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__12897 = this;
var inode__12898 = this;
var len__12899 = this__12897.arr.length;
var i__12900 = 0;
var init__12901 = init;
while(true){
if((i__12900 < len__12899))
{var node__12902 = (this__12897.arr[i__12900]);
if(!((node__12902 == null)))
{var init__12903 = node__12902.kv_reduce(f,init__12901);
if(cljs.core.reduced_QMARK_.call(null,init__12903))
{return cljs.core.deref.call(null,init__12903);
} else
{{
var G__12922 = (i__12900 + 1);
var G__12923 = init__12903;
i__12900 = G__12922;
init__12901 = G__12923;
continue;
}
}
} else
{return null;
}
} else
{return init__12901;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12904 = this;
var inode__12905 = this;
var idx__12906 = ((hash >>> shift) & 0x01f);
var node__12907 = (this__12904.arr[idx__12906]);
if(!((node__12907 == null)))
{return node__12907.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__12908 = this;
var inode__12909 = this;
var idx__12910 = ((hash >>> shift) & 0x01f);
var node__12911 = (this__12908.arr[idx__12910]);
if(!((node__12911 == null)))
{var n__12912 = node__12911.inode_without((shift + 5),hash,key);
if((n__12912 === node__12911))
{return inode__12909;
} else
{if((n__12912 == null))
{if((this__12908.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12909,null,idx__12910);
} else
{return (new cljs.core.ArrayNode(null,(this__12908.cnt - 1),cljs.core.clone_and_set.call(null,this__12908.arr,idx__12910,n__12912)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__12908.cnt,cljs.core.clone_and_set.call(null,this__12908.arr,idx__12910,n__12912)));
} else
{return null;
}
}
}
} else
{return inode__12909;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12913 = this;
var inode__12914 = this;
var idx__12915 = ((hash >>> shift) & 0x01f);
var node__12916 = (this__12913.arr[idx__12915]);
if((node__12916 == null))
{return (new cljs.core.ArrayNode(null,(this__12913.cnt + 1),cljs.core.clone_and_set.call(null,this__12913.arr,idx__12915,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__12917 = node__12916.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12917 === node__12916))
{return inode__12914;
} else
{return (new cljs.core.ArrayNode(null,this__12913.cnt,cljs.core.clone_and_set.call(null,this__12913.arr,idx__12915,n__12917)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12918 = this;
var inode__12919 = this;
var idx__12920 = ((hash >>> shift) & 0x01f);
var node__12921 = (this__12918.arr[idx__12920]);
if(!((node__12921 == null)))
{return node__12921.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__12926 = (2 * cnt);
var i__12927 = 0;
while(true){
if((i__12927 < lim__12926))
{if(cljs.core.key_test.call(null,key,(arr[i__12927])))
{return i__12927;
} else
{{
var G__12928 = (i__12927 + 2);
i__12927 = G__12928;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12929 = this;
var inode__12930 = this;
if((hash === this__12929.collision_hash))
{var idx__12931 = cljs.core.hash_collision_node_find_index.call(null,this__12929.arr,this__12929.cnt,key);
if((idx__12931 === -1))
{if((this__12929.arr.length > (2 * this__12929.cnt)))
{var editable__12932 = cljs.core.edit_and_set.call(null,inode__12930,edit,(2 * this__12929.cnt),key,((2 * this__12929.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__12932.cnt = (editable__12932.cnt + 1);
return editable__12932;
} else
{var len__12933 = this__12929.arr.length;
var new_arr__12934 = cljs.core.make_array.call(null,(len__12933 + 2));
cljs.core.array_copy.call(null,this__12929.arr,0,new_arr__12934,0,len__12933);
(new_arr__12934[len__12933] = key);
(new_arr__12934[(len__12933 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__12930.ensure_editable_array(edit,(this__12929.cnt + 1),new_arr__12934);
}
} else
{if(((this__12929.arr[(idx__12931 + 1)]) === val))
{return inode__12930;
} else
{return cljs.core.edit_and_set.call(null,inode__12930,edit,(idx__12931 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__12929.collision_hash >>> shift) & 0x01f)),[null,inode__12930,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__12935 = this;
var inode__12936 = this;
return cljs.core.create_inode_seq.call(null,this__12935.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12937 = this;
var inode__12938 = this;
var idx__12939 = cljs.core.hash_collision_node_find_index.call(null,this__12937.arr,this__12937.cnt,key);
if((idx__12939 === -1))
{return inode__12938;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__12937.cnt === 1))
{return null;
} else
{var editable__12940 = inode__12938.ensure_editable(edit);
var earr__12941 = editable__12940.arr;
(earr__12941[idx__12939] = (earr__12941[((2 * this__12937.cnt) - 2)]));
(earr__12941[(idx__12939 + 1)] = (earr__12941[((2 * this__12937.cnt) - 1)]));
(earr__12941[((2 * this__12937.cnt) - 1)] = null);
(earr__12941[((2 * this__12937.cnt) - 2)] = null);
editable__12940.cnt = (editable__12940.cnt - 1);
return editable__12940;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__12942 = this;
var inode__12943 = this;
if((e === this__12942.edit))
{return inode__12943;
} else
{var new_arr__12944 = cljs.core.make_array.call(null,(2 * (this__12942.cnt + 1)));
cljs.core.array_copy.call(null,this__12942.arr,0,new_arr__12944,0,(2 * this__12942.cnt));
return (new cljs.core.HashCollisionNode(e,this__12942.collision_hash,this__12942.cnt,new_arr__12944));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__12945 = this;
var inode__12946 = this;
return cljs.core.inode_kv_reduce.call(null,this__12945.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__12947 = this;
var inode__12948 = this;
var idx__12949 = cljs.core.hash_collision_node_find_index.call(null,this__12947.arr,this__12947.cnt,key);
if((idx__12949 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__12947.arr[idx__12949])))
{return cljs.core.PersistentVector.fromArray([(this__12947.arr[idx__12949]),(this__12947.arr[(idx__12949 + 1)])], true);
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
var this__12950 = this;
var inode__12951 = this;
var idx__12952 = cljs.core.hash_collision_node_find_index.call(null,this__12950.arr,this__12950.cnt,key);
if((idx__12952 === -1))
{return inode__12951;
} else
{if((this__12950.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__12950.collision_hash,(this__12950.cnt - 1),cljs.core.remove_pair.call(null,this__12950.arr,cljs.core.quot.call(null,idx__12952,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12953 = this;
var inode__12954 = this;
if((hash === this__12953.collision_hash))
{var idx__12955 = cljs.core.hash_collision_node_find_index.call(null,this__12953.arr,this__12953.cnt,key);
if((idx__12955 === -1))
{var len__12956 = this__12953.arr.length;
var new_arr__12957 = cljs.core.make_array.call(null,(len__12956 + 2));
cljs.core.array_copy.call(null,this__12953.arr,0,new_arr__12957,0,len__12956);
(new_arr__12957[len__12956] = key);
(new_arr__12957[(len__12956 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__12953.collision_hash,(this__12953.cnt + 1),new_arr__12957));
} else
{if(cljs.core._EQ_.call(null,(this__12953.arr[idx__12955]),val))
{return inode__12954;
} else
{return (new cljs.core.HashCollisionNode(null,this__12953.collision_hash,this__12953.cnt,cljs.core.clone_and_set.call(null,this__12953.arr,(idx__12955 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__12953.collision_hash >>> shift) & 0x01f)),[null,inode__12954])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__12958 = this;
var inode__12959 = this;
var idx__12960 = cljs.core.hash_collision_node_find_index.call(null,this__12958.arr,this__12958.cnt,key);
if((idx__12960 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__12958.arr[idx__12960])))
{return (this__12958.arr[(idx__12960 + 1)]);
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
var this__12961 = this;
var inode__12962 = this;
if((e === this__12961.edit))
{this__12961.arr = array;
this__12961.cnt = count;
return inode__12962;
} else
{return (new cljs.core.HashCollisionNode(this__12961.edit,this__12961.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__12967 = cljs.core.hash.call(null,key1);
if((key1hash__12967 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12967,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12968 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__12967,key1,val1,added_leaf_QMARK___12968).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___12968);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__12969 = cljs.core.hash.call(null,key1);
if((key1hash__12969 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12969,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12970 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__12969,key1,val1,added_leaf_QMARK___12970).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___12970);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12971 = this;
var h__5708__auto____12972 = this__12971.__hash;
if(!((h__5708__auto____12972 == null)))
{return h__5708__auto____12972;
} else
{var h__5708__auto____12973 = cljs.core.hash_coll.call(null,coll);
this__12971.__hash = h__5708__auto____12973;
return h__5708__auto____12973;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12974 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__12975 = this;
var this__12976 = this;
return cljs.core.pr_str.call(null,this__12976);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12977 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12978 = this;
if((this__12978.s == null))
{return cljs.core.PersistentVector.fromArray([(this__12978.nodes[this__12978.i]),(this__12978.nodes[(this__12978.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__12978.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12979 = this;
if((this__12979.s == null))
{return cljs.core.create_inode_seq.call(null,this__12979.nodes,(this__12979.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__12979.nodes,this__12979.i,cljs.core.next.call(null,this__12979.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12980 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12981 = this;
return (new cljs.core.NodeSeq(meta,this__12981.nodes,this__12981.i,this__12981.s,this__12981.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12982 = this;
return this__12982.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12983 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12983.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__12990 = nodes.length;
var j__12991 = i;
while(true){
if((j__12991 < len__12990))
{if(!(((nodes[j__12991]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__12991,null,null));
} else
{var temp__3971__auto____12992 = (nodes[(j__12991 + 1)]);
if(cljs.core.truth_(temp__3971__auto____12992))
{var node__12993 = temp__3971__auto____12992;
var temp__3971__auto____12994 = node__12993.inode_seq();
if(cljs.core.truth_(temp__3971__auto____12994))
{var node_seq__12995 = temp__3971__auto____12994;
return (new cljs.core.NodeSeq(null,nodes,(j__12991 + 2),node_seq__12995,null));
} else
{{
var G__12996 = (j__12991 + 2);
j__12991 = G__12996;
continue;
}
}
} else
{{
var G__12997 = (j__12991 + 2);
j__12991 = G__12997;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12998 = this;
var h__5708__auto____12999 = this__12998.__hash;
if(!((h__5708__auto____12999 == null)))
{return h__5708__auto____12999;
} else
{var h__5708__auto____13000 = cljs.core.hash_coll.call(null,coll);
this__12998.__hash = h__5708__auto____13000;
return h__5708__auto____13000;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13001 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__13002 = this;
var this__13003 = this;
return cljs.core.pr_str.call(null,this__13003);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13004 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13005 = this;
return cljs.core.first.call(null,this__13005.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13006 = this;
return cljs.core.create_array_node_seq.call(null,null,this__13006.nodes,this__13006.i,cljs.core.next.call(null,this__13006.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13007 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13008 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__13008.nodes,this__13008.i,this__13008.s,this__13008.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13009 = this;
return this__13009.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13010 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13010.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__13017 = nodes.length;
var j__13018 = i;
while(true){
if((j__13018 < len__13017))
{var temp__3971__auto____13019 = (nodes[j__13018]);
if(cljs.core.truth_(temp__3971__auto____13019))
{var nj__13020 = temp__3971__auto____13019;
var temp__3971__auto____13021 = nj__13020.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13021))
{var ns__13022 = temp__3971__auto____13021;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__13018 + 1),ns__13022,null));
} else
{{
var G__13023 = (j__13018 + 1);
j__13018 = G__13023;
continue;
}
}
} else
{{
var G__13024 = (j__13018 + 1);
j__13018 = G__13024;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13027 = this;
return (new cljs.core.TransientHashMap({},this__13027.root,this__13027.cnt,this__13027.has_nil_QMARK_,this__13027.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13028 = this;
var h__5708__auto____13029 = this__13028.__hash;
if(!((h__5708__auto____13029 == null)))
{return h__5708__auto____13029;
} else
{var h__5708__auto____13030 = cljs.core.hash_imap.call(null,coll);
this__13028.__hash = h__5708__auto____13030;
return h__5708__auto____13030;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13031 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13032 = this;
if((k == null))
{if(this__13032.has_nil_QMARK_)
{return this__13032.nil_val;
} else
{return not_found;
}
} else
{if((this__13032.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__13032.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13033 = this;
if((k == null))
{if((function (){var and__3822__auto____13034 = this__13033.has_nil_QMARK_;
if(and__3822__auto____13034)
{return (v === this__13033.nil_val);
} else
{return and__3822__auto____13034;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13033.meta,((this__13033.has_nil_QMARK_)?this__13033.cnt:(this__13033.cnt + 1)),this__13033.root,true,v,null));
}
} else
{var added_leaf_QMARK___13035 = (new cljs.core.Box(false));
var new_root__13036 = (((this__13033.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13033.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13035);
if((new_root__13036 === this__13033.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13033.meta,((added_leaf_QMARK___13035.val)?(this__13033.cnt + 1):this__13033.cnt),new_root__13036,this__13033.has_nil_QMARK_,this__13033.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13037 = this;
if((k == null))
{return this__13037.has_nil_QMARK_;
} else
{if((this__13037.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__13037.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__13060 = null;
var G__13060__2 = (function (this_sym13038,k){
var this__13040 = this;
var this_sym13038__13041 = this;
var coll__13042 = this_sym13038__13041;
return coll__13042.cljs$core$ILookup$_lookup$arity$2(coll__13042,k);
});
var G__13060__3 = (function (this_sym13039,k,not_found){
var this__13040 = this;
var this_sym13039__13043 = this;
var coll__13044 = this_sym13039__13043;
return coll__13044.cljs$core$ILookup$_lookup$arity$3(coll__13044,k,not_found);
});
G__13060 = function(this_sym13039,k,not_found){
switch(arguments.length){
case 2:
return G__13060__2.call(this,this_sym13039,k);
case 3:
return G__13060__3.call(this,this_sym13039,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13060;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym13025,args13026){
var this__13045 = this;
return this_sym13025.call.apply(this_sym13025,[this_sym13025].concat(args13026.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13046 = this;
var init__13047 = ((this__13046.has_nil_QMARK_)?f.call(null,init,null,this__13046.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__13047))
{return cljs.core.deref.call(null,init__13047);
} else
{if(!((this__13046.root == null)))
{return this__13046.root.kv_reduce(f,init__13047);
} else
{if("\uFDD0'else")
{return init__13047;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13048 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__13049 = this;
var this__13050 = this;
return cljs.core.pr_str.call(null,this__13050);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13051 = this;
if((this__13051.cnt > 0))
{var s__13052 = ((!((this__13051.root == null)))?this__13051.root.inode_seq():null);
if(this__13051.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__13051.nil_val], true),s__13052);
} else
{return s__13052;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13053 = this;
return this__13053.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13054 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13055 = this;
return (new cljs.core.PersistentHashMap(meta,this__13055.cnt,this__13055.root,this__13055.has_nil_QMARK_,this__13055.nil_val,this__13055.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13056 = this;
return this__13056.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13057 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__13057.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13058 = this;
if((k == null))
{if(this__13058.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__13058.meta,(this__13058.cnt - 1),this__13058.root,false,null,null));
} else
{return coll;
}
} else
{if((this__13058.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__13059 = this__13058.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__13059 === this__13058.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13058.meta,(this__13058.cnt - 1),new_root__13059,this__13058.has_nil_QMARK_,this__13058.nil_val,null));
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
var len__13061 = ks.length;
var i__13062 = 0;
var out__13063 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__13062 < len__13061))
{{
var G__13064 = (i__13062 + 1);
var G__13065 = cljs.core.assoc_BANG_.call(null,out__13063,(ks[i__13062]),(vs[i__13062]));
i__13062 = G__13064;
out__13063 = G__13065;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13063);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__13066 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13067 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__13068 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13069 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__13070 = this;
if((k == null))
{if(this__13070.has_nil_QMARK_)
{return this__13070.nil_val;
} else
{return null;
}
} else
{if((this__13070.root == null))
{return null;
} else
{return this__13070.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__13071 = this;
if((k == null))
{if(this__13071.has_nil_QMARK_)
{return this__13071.nil_val;
} else
{return not_found;
}
} else
{if((this__13071.root == null))
{return not_found;
} else
{return this__13071.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13072 = this;
if(this__13072.edit)
{return this__13072.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__13073 = this;
var tcoll__13074 = this;
if(this__13073.edit)
{if((function (){var G__13075__13076 = o;
if(G__13075__13076)
{if((function (){var or__3824__auto____13077 = (G__13075__13076.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13077)
{return or__3824__auto____13077;
} else
{return G__13075__13076.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__13075__13076.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13075__13076);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13075__13076);
}
})())
{return tcoll__13074.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13078 = cljs.core.seq.call(null,o);
var tcoll__13079 = tcoll__13074;
while(true){
var temp__3971__auto____13080 = cljs.core.first.call(null,es__13078);
if(cljs.core.truth_(temp__3971__auto____13080))
{var e__13081 = temp__3971__auto____13080;
{
var G__13092 = cljs.core.next.call(null,es__13078);
var G__13093 = tcoll__13079.assoc_BANG_(cljs.core.key.call(null,e__13081),cljs.core.val.call(null,e__13081));
es__13078 = G__13092;
tcoll__13079 = G__13093;
continue;
}
} else
{return tcoll__13079;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__13082 = this;
var tcoll__13083 = this;
if(this__13082.edit)
{if((k == null))
{if((this__13082.nil_val === v))
{} else
{this__13082.nil_val = v;
}
if(this__13082.has_nil_QMARK_)
{} else
{this__13082.count = (this__13082.count + 1);
this__13082.has_nil_QMARK_ = true;
}
return tcoll__13083;
} else
{var added_leaf_QMARK___13084 = (new cljs.core.Box(false));
var node__13085 = (((this__13082.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13082.root).inode_assoc_BANG_(this__13082.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13084);
if((node__13085 === this__13082.root))
{} else
{this__13082.root = node__13085;
}
if(added_leaf_QMARK___13084.val)
{this__13082.count = (this__13082.count + 1);
} else
{}
return tcoll__13083;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__13086 = this;
var tcoll__13087 = this;
if(this__13086.edit)
{if((k == null))
{if(this__13086.has_nil_QMARK_)
{this__13086.has_nil_QMARK_ = false;
this__13086.nil_val = null;
this__13086.count = (this__13086.count - 1);
return tcoll__13087;
} else
{return tcoll__13087;
}
} else
{if((this__13086.root == null))
{return tcoll__13087;
} else
{var removed_leaf_QMARK___13088 = (new cljs.core.Box(false));
var node__13089 = this__13086.root.inode_without_BANG_(this__13086.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___13088);
if((node__13089 === this__13086.root))
{} else
{this__13086.root = node__13089;
}
if(cljs.core.truth_((removed_leaf_QMARK___13088[0])))
{this__13086.count = (this__13086.count - 1);
} else
{}
return tcoll__13087;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__13090 = this;
var tcoll__13091 = this;
if(this__13090.edit)
{this__13090.edit = null;
return (new cljs.core.PersistentHashMap(null,this__13090.count,this__13090.root,this__13090.has_nil_QMARK_,this__13090.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__13096 = node;
var stack__13097 = stack;
while(true){
if(!((t__13096 == null)))
{{
var G__13098 = ((ascending_QMARK_)?t__13096.left:t__13096.right);
var G__13099 = cljs.core.conj.call(null,stack__13097,t__13096);
t__13096 = G__13098;
stack__13097 = G__13099;
continue;
}
} else
{return stack__13097;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13100 = this;
var h__5708__auto____13101 = this__13100.__hash;
if(!((h__5708__auto____13101 == null)))
{return h__5708__auto____13101;
} else
{var h__5708__auto____13102 = cljs.core.hash_coll.call(null,coll);
this__13100.__hash = h__5708__auto____13102;
return h__5708__auto____13102;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13103 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__13104 = this;
var this__13105 = this;
return cljs.core.pr_str.call(null,this__13105);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13106 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13107 = this;
if((this__13107.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__13107.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__13108 = this;
return cljs.core.peek.call(null,this__13108.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__13109 = this;
var t__13110 = cljs.core.first.call(null,this__13109.stack);
var next_stack__13111 = cljs.core.tree_map_seq_push.call(null,((this__13109.ascending_QMARK_)?t__13110.right:t__13110.left),cljs.core.next.call(null,this__13109.stack),this__13109.ascending_QMARK_);
if(!((next_stack__13111 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__13111,this__13109.ascending_QMARK_,(this__13109.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13112 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13113 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__13113.stack,this__13113.ascending_QMARK_,this__13113.cnt,this__13113.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13114 = this;
return this__13114.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13115 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13115.meta);
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
{if((function (){var and__3822__auto____13117 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____13117)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____13117;
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
{if((function (){var and__3822__auto____13119 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____13119)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____13119;
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
var init__13123 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__13123))
{return cljs.core.deref.call(null,init__13123);
} else
{var init__13124 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__13123):init__13123);
if(cljs.core.reduced_QMARK_.call(null,init__13124))
{return cljs.core.deref.call(null,init__13124);
} else
{var init__13125 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__13124):init__13124);
if(cljs.core.reduced_QMARK_.call(null,init__13125))
{return cljs.core.deref.call(null,init__13125);
} else
{return init__13125;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13128 = this;
var h__5708__auto____13129 = this__13128.__hash;
if(!((h__5708__auto____13129 == null)))
{return h__5708__auto____13129;
} else
{var h__5708__auto____13130 = cljs.core.hash_coll.call(null,coll);
this__13128.__hash = h__5708__auto____13130;
return h__5708__auto____13130;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13131 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13132 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13133 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13133.key,this__13133.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__13181 = null;
var G__13181__2 = (function (this_sym13134,k){
var this__13136 = this;
var this_sym13134__13137 = this;
var node__13138 = this_sym13134__13137;
return node__13138.cljs$core$ILookup$_lookup$arity$2(node__13138,k);
});
var G__13181__3 = (function (this_sym13135,k,not_found){
var this__13136 = this;
var this_sym13135__13139 = this;
var node__13140 = this_sym13135__13139;
return node__13140.cljs$core$ILookup$_lookup$arity$3(node__13140,k,not_found);
});
G__13181 = function(this_sym13135,k,not_found){
switch(arguments.length){
case 2:
return G__13181__2.call(this,this_sym13135,k);
case 3:
return G__13181__3.call(this,this_sym13135,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13181;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym13126,args13127){
var this__13141 = this;
return this_sym13126.call.apply(this_sym13126,[this_sym13126].concat(args13127.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13142 = this;
return cljs.core.PersistentVector.fromArray([this__13142.key,this__13142.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13143 = this;
return this__13143.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13144 = this;
return this__13144.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__13145 = this;
var node__13146 = this;
return ins.balance_right(node__13146);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__13147 = this;
var node__13148 = this;
return (new cljs.core.RedNode(this__13147.key,this__13147.val,this__13147.left,this__13147.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__13149 = this;
var node__13150 = this;
return cljs.core.balance_right_del.call(null,this__13149.key,this__13149.val,this__13149.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__13151 = this;
var node__13152 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__13153 = this;
var node__13154 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13154,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__13155 = this;
var node__13156 = this;
return cljs.core.balance_left_del.call(null,this__13155.key,this__13155.val,del,this__13155.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__13157 = this;
var node__13158 = this;
return ins.balance_left(node__13158);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__13159 = this;
var node__13160 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__13160,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__13182 = null;
var G__13182__0 = (function (){
var this__13161 = this;
var this__13163 = this;
return cljs.core.pr_str.call(null,this__13163);
});
G__13182 = function(){
switch(arguments.length){
case 0:
return G__13182__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13182;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__13164 = this;
var node__13165 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13165,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__13166 = this;
var node__13167 = this;
return node__13167;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13168 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13169 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13170 = this;
return cljs.core.list.call(null,this__13170.key,this__13170.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13171 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13172 = this;
return this__13172.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13173 = this;
return cljs.core.PersistentVector.fromArray([this__13173.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13174 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13174.key,this__13174.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13175 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13176 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13176.key,this__13176.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13177 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13178 = this;
if((n === 0))
{return this__13178.key;
} else
{if((n === 1))
{return this__13178.val;
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
var this__13179 = this;
if((n === 0))
{return this__13179.key;
} else
{if((n === 1))
{return this__13179.val;
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
var this__13180 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13185 = this;
var h__5708__auto____13186 = this__13185.__hash;
if(!((h__5708__auto____13186 == null)))
{return h__5708__auto____13186;
} else
{var h__5708__auto____13187 = cljs.core.hash_coll.call(null,coll);
this__13185.__hash = h__5708__auto____13187;
return h__5708__auto____13187;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13188 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13189 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13190 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13190.key,this__13190.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__13238 = null;
var G__13238__2 = (function (this_sym13191,k){
var this__13193 = this;
var this_sym13191__13194 = this;
var node__13195 = this_sym13191__13194;
return node__13195.cljs$core$ILookup$_lookup$arity$2(node__13195,k);
});
var G__13238__3 = (function (this_sym13192,k,not_found){
var this__13193 = this;
var this_sym13192__13196 = this;
var node__13197 = this_sym13192__13196;
return node__13197.cljs$core$ILookup$_lookup$arity$3(node__13197,k,not_found);
});
G__13238 = function(this_sym13192,k,not_found){
switch(arguments.length){
case 2:
return G__13238__2.call(this,this_sym13192,k);
case 3:
return G__13238__3.call(this,this_sym13192,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13238;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym13183,args13184){
var this__13198 = this;
return this_sym13183.call.apply(this_sym13183,[this_sym13183].concat(args13184.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13199 = this;
return cljs.core.PersistentVector.fromArray([this__13199.key,this__13199.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13200 = this;
return this__13200.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13201 = this;
return this__13201.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__13202 = this;
var node__13203 = this;
return (new cljs.core.RedNode(this__13202.key,this__13202.val,this__13202.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__13204 = this;
var node__13205 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__13206 = this;
var node__13207 = this;
return (new cljs.core.RedNode(this__13206.key,this__13206.val,this__13206.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__13208 = this;
var node__13209 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__13210 = this;
var node__13211 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13211,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__13212 = this;
var node__13213 = this;
return (new cljs.core.RedNode(this__13212.key,this__13212.val,del,this__13212.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__13214 = this;
var node__13215 = this;
return (new cljs.core.RedNode(this__13214.key,this__13214.val,ins,this__13214.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__13216 = this;
var node__13217 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13216.left))
{return (new cljs.core.RedNode(this__13216.key,this__13216.val,this__13216.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__13216.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13216.right))
{return (new cljs.core.RedNode(this__13216.right.key,this__13216.right.val,(new cljs.core.BlackNode(this__13216.key,this__13216.val,this__13216.left,this__13216.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__13216.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__13217,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__13239 = null;
var G__13239__0 = (function (){
var this__13218 = this;
var this__13220 = this;
return cljs.core.pr_str.call(null,this__13220);
});
G__13239 = function(){
switch(arguments.length){
case 0:
return G__13239__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13239;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__13221 = this;
var node__13222 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13221.right))
{return (new cljs.core.RedNode(this__13221.key,this__13221.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13221.left,null)),this__13221.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13221.left))
{return (new cljs.core.RedNode(this__13221.left.key,this__13221.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13221.left.left,null)),(new cljs.core.BlackNode(this__13221.key,this__13221.val,this__13221.left.right,this__13221.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13222,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__13223 = this;
var node__13224 = this;
return (new cljs.core.BlackNode(this__13223.key,this__13223.val,this__13223.left,this__13223.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13225 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13226 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13227 = this;
return cljs.core.list.call(null,this__13227.key,this__13227.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13228 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13229 = this;
return this__13229.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13230 = this;
return cljs.core.PersistentVector.fromArray([this__13230.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13231 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13231.key,this__13231.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13232 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13233 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13233.key,this__13233.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13234 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13235 = this;
if((n === 0))
{return this__13235.key;
} else
{if((n === 1))
{return this__13235.val;
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
var this__13236 = this;
if((n === 0))
{return this__13236.key;
} else
{if((n === 1))
{return this__13236.val;
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
var this__13237 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__13243 = comp.call(null,k,tree.key);
if((c__13243 === 0))
{(found[0] = tree);
return null;
} else
{if((c__13243 < 0))
{var ins__13244 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__13244 == null)))
{return tree.add_left(ins__13244);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__13245 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__13245 == null)))
{return tree.add_right(ins__13245);
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
{var app__13248 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13248))
{return (new cljs.core.RedNode(app__13248.key,app__13248.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__13248.left,null)),(new cljs.core.RedNode(right.key,right.val,app__13248.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__13248,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__13249 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13249))
{return (new cljs.core.RedNode(app__13249.key,app__13249.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__13249.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__13249.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__13249,right.right,null)));
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
{var c__13255 = comp.call(null,k,tree.key);
if((c__13255 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__13255 < 0))
{var del__13256 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____13257 = !((del__13256 == null));
if(or__3824__auto____13257)
{return or__3824__auto____13257;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__13256,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__13256,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__13258 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____13259 = !((del__13258 == null));
if(or__3824__auto____13259)
{return or__3824__auto____13259;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__13258);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__13258,null));
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
var tk__13262 = tree.key;
var c__13263 = comp.call(null,k,tk__13262);
if((c__13263 === 0))
{return tree.replace(tk__13262,v,tree.left,tree.right);
} else
{if((c__13263 < 0))
{return tree.replace(tk__13262,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__13262,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13266 = this;
var h__5708__auto____13267 = this__13266.__hash;
if(!((h__5708__auto____13267 == null)))
{return h__5708__auto____13267;
} else
{var h__5708__auto____13268 = cljs.core.hash_imap.call(null,coll);
this__13266.__hash = h__5708__auto____13268;
return h__5708__auto____13268;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13269 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13270 = this;
var n__13271 = coll.entry_at(k);
if(!((n__13271 == null)))
{return n__13271.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13272 = this;
var found__13273 = [null];
var t__13274 = cljs.core.tree_map_add.call(null,this__13272.comp,this__13272.tree,k,v,found__13273);
if((t__13274 == null))
{var found_node__13275 = cljs.core.nth.call(null,found__13273,0);
if(cljs.core._EQ_.call(null,v,found_node__13275.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13272.comp,cljs.core.tree_map_replace.call(null,this__13272.comp,this__13272.tree,k,v),this__13272.cnt,this__13272.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13272.comp,t__13274.blacken(),(this__13272.cnt + 1),this__13272.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13276 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__13310 = null;
var G__13310__2 = (function (this_sym13277,k){
var this__13279 = this;
var this_sym13277__13280 = this;
var coll__13281 = this_sym13277__13280;
return coll__13281.cljs$core$ILookup$_lookup$arity$2(coll__13281,k);
});
var G__13310__3 = (function (this_sym13278,k,not_found){
var this__13279 = this;
var this_sym13278__13282 = this;
var coll__13283 = this_sym13278__13282;
return coll__13283.cljs$core$ILookup$_lookup$arity$3(coll__13283,k,not_found);
});
G__13310 = function(this_sym13278,k,not_found){
switch(arguments.length){
case 2:
return G__13310__2.call(this,this_sym13278,k);
case 3:
return G__13310__3.call(this,this_sym13278,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13310;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym13264,args13265){
var this__13284 = this;
return this_sym13264.call.apply(this_sym13264,[this_sym13264].concat(args13265.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13285 = this;
if(!((this__13285.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__13285.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13286 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13287 = this;
if((this__13287.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13287.tree,false,this__13287.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__13288 = this;
var this__13289 = this;
return cljs.core.pr_str.call(null,this__13289);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__13290 = this;
var coll__13291 = this;
var t__13292 = this__13290.tree;
while(true){
if(!((t__13292 == null)))
{var c__13293 = this__13290.comp.call(null,k,t__13292.key);
if((c__13293 === 0))
{return t__13292;
} else
{if((c__13293 < 0))
{{
var G__13311 = t__13292.left;
t__13292 = G__13311;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__13312 = t__13292.right;
t__13292 = G__13312;
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
var this__13294 = this;
if((this__13294.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13294.tree,ascending_QMARK_,this__13294.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13295 = this;
if((this__13295.cnt > 0))
{var stack__13296 = null;
var t__13297 = this__13295.tree;
while(true){
if(!((t__13297 == null)))
{var c__13298 = this__13295.comp.call(null,k,t__13297.key);
if((c__13298 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__13296,t__13297),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__13298 < 0))
{{
var G__13313 = cljs.core.conj.call(null,stack__13296,t__13297);
var G__13314 = t__13297.left;
stack__13296 = G__13313;
t__13297 = G__13314;
continue;
}
} else
{{
var G__13315 = stack__13296;
var G__13316 = t__13297.right;
stack__13296 = G__13315;
t__13297 = G__13316;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__13298 > 0))
{{
var G__13317 = cljs.core.conj.call(null,stack__13296,t__13297);
var G__13318 = t__13297.right;
stack__13296 = G__13317;
t__13297 = G__13318;
continue;
}
} else
{{
var G__13319 = stack__13296;
var G__13320 = t__13297.left;
stack__13296 = G__13319;
t__13297 = G__13320;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__13296 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__13296,ascending_QMARK_,-1,null));
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
var this__13299 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13300 = this;
return this__13300.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13301 = this;
if((this__13301.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13301.tree,true,this__13301.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13302 = this;
return this__13302.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13303 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13304 = this;
return (new cljs.core.PersistentTreeMap(this__13304.comp,this__13304.tree,this__13304.cnt,meta,this__13304.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13305 = this;
return this__13305.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13306 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__13306.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13307 = this;
var found__13308 = [null];
var t__13309 = cljs.core.tree_map_remove.call(null,this__13307.comp,this__13307.tree,k,found__13308);
if((t__13309 == null))
{if((cljs.core.nth.call(null,found__13308,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13307.comp,null,0,this__13307.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13307.comp,t__13309.blacken(),(this__13307.cnt - 1),this__13307.meta,null));
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
var in__13323 = cljs.core.seq.call(null,keyvals);
var out__13324 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__13323)
{{
var G__13325 = cljs.core.nnext.call(null,in__13323);
var G__13326 = cljs.core.assoc_BANG_.call(null,out__13324,cljs.core.first.call(null,in__13323),cljs.core.second.call(null,in__13323));
in__13323 = G__13325;
out__13324 = G__13326;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13324);
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
hash_map.cljs$lang$applyTo = (function (arglist__13327){
var keyvals = cljs.core.seq(arglist__13327);;
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
array_map.cljs$lang$applyTo = (function (arglist__13328){
var keyvals = cljs.core.seq(arglist__13328);;
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
var ks__13332 = [];
var obj__13333 = {};
var kvs__13334 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__13334)
{ks__13332.push(cljs.core.first.call(null,kvs__13334));
(obj__13333[cljs.core.first.call(null,kvs__13334)] = cljs.core.second.call(null,kvs__13334));
{
var G__13335 = cljs.core.nnext.call(null,kvs__13334);
kvs__13334 = G__13335;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__13332,obj__13333);
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
obj_map.cljs$lang$applyTo = (function (arglist__13336){
var keyvals = cljs.core.seq(arglist__13336);;
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
var in__13339 = cljs.core.seq.call(null,keyvals);
var out__13340 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__13339)
{{
var G__13341 = cljs.core.nnext.call(null,in__13339);
var G__13342 = cljs.core.assoc.call(null,out__13340,cljs.core.first.call(null,in__13339),cljs.core.second.call(null,in__13339));
in__13339 = G__13341;
out__13340 = G__13342;
continue;
}
} else
{return out__13340;
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
sorted_map.cljs$lang$applyTo = (function (arglist__13343){
var keyvals = cljs.core.seq(arglist__13343);;
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
var in__13346 = cljs.core.seq.call(null,keyvals);
var out__13347 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__13346)
{{
var G__13348 = cljs.core.nnext.call(null,in__13346);
var G__13349 = cljs.core.assoc.call(null,out__13347,cljs.core.first.call(null,in__13346),cljs.core.second.call(null,in__13346));
in__13346 = G__13348;
out__13347 = G__13349;
continue;
}
} else
{return out__13347;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__13350){
var comparator = cljs.core.first(arglist__13350);
var keyvals = cljs.core.rest(arglist__13350);
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
{return cljs.core.reduce.call(null,(function (p1__13351_SHARP_,p2__13352_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____13354 = p1__13351_SHARP_;
if(cljs.core.truth_(or__3824__auto____13354))
{return or__3824__auto____13354;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__13352_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13355){
var maps = cljs.core.seq(arglist__13355);;
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
{var merge_entry__13363 = (function (m,e){
var k__13361 = cljs.core.first.call(null,e);
var v__13362 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__13361))
{return cljs.core.assoc.call(null,m,k__13361,f.call(null,cljs.core._lookup.call(null,m,k__13361,null),v__13362));
} else
{return cljs.core.assoc.call(null,m,k__13361,v__13362);
}
});
var merge2__13365 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13363,(function (){var or__3824__auto____13364 = m1;
if(cljs.core.truth_(or__3824__auto____13364))
{return or__3824__auto____13364;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__13365,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13366){
var f = cljs.core.first(arglist__13366);
var maps = cljs.core.rest(arglist__13366);
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
var ret__13371 = cljs.core.ObjMap.EMPTY;
var keys__13372 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__13372)
{var key__13373 = cljs.core.first.call(null,keys__13372);
var entry__13374 = cljs.core._lookup.call(null,map,key__13373,"\uFDD0'cljs.core/not-found");
{
var G__13375 = ((cljs.core.not_EQ_.call(null,entry__13374,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__13371,key__13373,entry__13374):ret__13371);
var G__13376 = cljs.core.next.call(null,keys__13372);
ret__13371 = G__13375;
keys__13372 = G__13376;
continue;
}
} else
{return ret__13371;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13380 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__13380.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13381 = this;
var h__5708__auto____13382 = this__13381.__hash;
if(!((h__5708__auto____13382 == null)))
{return h__5708__auto____13382;
} else
{var h__5708__auto____13383 = cljs.core.hash_iset.call(null,coll);
this__13381.__hash = h__5708__auto____13383;
return h__5708__auto____13383;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13384 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13385 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13385.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__13406 = null;
var G__13406__2 = (function (this_sym13386,k){
var this__13388 = this;
var this_sym13386__13389 = this;
var coll__13390 = this_sym13386__13389;
return coll__13390.cljs$core$ILookup$_lookup$arity$2(coll__13390,k);
});
var G__13406__3 = (function (this_sym13387,k,not_found){
var this__13388 = this;
var this_sym13387__13391 = this;
var coll__13392 = this_sym13387__13391;
return coll__13392.cljs$core$ILookup$_lookup$arity$3(coll__13392,k,not_found);
});
G__13406 = function(this_sym13387,k,not_found){
switch(arguments.length){
case 2:
return G__13406__2.call(this,this_sym13387,k);
case 3:
return G__13406__3.call(this,this_sym13387,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13406;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym13378,args13379){
var this__13393 = this;
return this_sym13378.call.apply(this_sym13378,[this_sym13378].concat(args13379.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13394 = this;
return (new cljs.core.PersistentHashSet(this__13394.meta,cljs.core.assoc.call(null,this__13394.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__13395 = this;
var this__13396 = this;
return cljs.core.pr_str.call(null,this__13396);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13397 = this;
return cljs.core.keys.call(null,this__13397.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13398 = this;
return (new cljs.core.PersistentHashSet(this__13398.meta,cljs.core.dissoc.call(null,this__13398.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13399 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13400 = this;
var and__3822__auto____13401 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____13401)
{var and__3822__auto____13402 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____13402)
{return cljs.core.every_QMARK_.call(null,(function (p1__13377_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13377_SHARP_);
}),other);
} else
{return and__3822__auto____13402;
}
} else
{return and__3822__auto____13401;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13403 = this;
return (new cljs.core.PersistentHashSet(meta,this__13403.hash_map,this__13403.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13404 = this;
return this__13404.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13405 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__13405.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__13407 = cljs.core.count.call(null,items);
var i__13408 = 0;
var out__13409 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__13408 < len__13407))
{{
var G__13410 = (i__13408 + 1);
var G__13411 = cljs.core.conj_BANG_.call(null,out__13409,(items[i__13408]));
i__13408 = G__13410;
out__13409 = G__13411;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13409);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__13429 = null;
var G__13429__2 = (function (this_sym13415,k){
var this__13417 = this;
var this_sym13415__13418 = this;
var tcoll__13419 = this_sym13415__13418;
if((cljs.core._lookup.call(null,this__13417.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__13429__3 = (function (this_sym13416,k,not_found){
var this__13417 = this;
var this_sym13416__13420 = this;
var tcoll__13421 = this_sym13416__13420;
if((cljs.core._lookup.call(null,this__13417.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__13429 = function(this_sym13416,k,not_found){
switch(arguments.length){
case 2:
return G__13429__2.call(this,this_sym13416,k);
case 3:
return G__13429__3.call(this,this_sym13416,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13429;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym13413,args13414){
var this__13422 = this;
return this_sym13413.call.apply(this_sym13413,[this_sym13413].concat(args13414.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__13423 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__13424 = this;
if((cljs.core._lookup.call(null,this__13424.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__13425 = this;
return cljs.core.count.call(null,this__13425.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__13426 = this;
this__13426.transient_map = cljs.core.dissoc_BANG_.call(null,this__13426.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13427 = this;
this__13427.transient_map = cljs.core.assoc_BANG_.call(null,this__13427.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13428 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__13428.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13432 = this;
var h__5708__auto____13433 = this__13432.__hash;
if(!((h__5708__auto____13433 == null)))
{return h__5708__auto____13433;
} else
{var h__5708__auto____13434 = cljs.core.hash_iset.call(null,coll);
this__13432.__hash = h__5708__auto____13434;
return h__5708__auto____13434;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13435 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13436 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13436.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__13462 = null;
var G__13462__2 = (function (this_sym13437,k){
var this__13439 = this;
var this_sym13437__13440 = this;
var coll__13441 = this_sym13437__13440;
return coll__13441.cljs$core$ILookup$_lookup$arity$2(coll__13441,k);
});
var G__13462__3 = (function (this_sym13438,k,not_found){
var this__13439 = this;
var this_sym13438__13442 = this;
var coll__13443 = this_sym13438__13442;
return coll__13443.cljs$core$ILookup$_lookup$arity$3(coll__13443,k,not_found);
});
G__13462 = function(this_sym13438,k,not_found){
switch(arguments.length){
case 2:
return G__13462__2.call(this,this_sym13438,k);
case 3:
return G__13462__3.call(this,this_sym13438,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13462;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym13430,args13431){
var this__13444 = this;
return this_sym13430.call.apply(this_sym13430,[this_sym13430].concat(args13431.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13445 = this;
return (new cljs.core.PersistentTreeSet(this__13445.meta,cljs.core.assoc.call(null,this__13445.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13446 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__13446.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__13447 = this;
var this__13448 = this;
return cljs.core.pr_str.call(null,this__13448);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__13449 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__13449.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13450 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__13450.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__13451 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13452 = this;
return cljs.core._comparator.call(null,this__13452.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13453 = this;
return cljs.core.keys.call(null,this__13453.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13454 = this;
return (new cljs.core.PersistentTreeSet(this__13454.meta,cljs.core.dissoc.call(null,this__13454.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13455 = this;
return cljs.core.count.call(null,this__13455.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13456 = this;
var and__3822__auto____13457 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____13457)
{var and__3822__auto____13458 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____13458)
{return cljs.core.every_QMARK_.call(null,(function (p1__13412_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13412_SHARP_);
}),other);
} else
{return and__3822__auto____13458;
}
} else
{return and__3822__auto____13457;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13459 = this;
return (new cljs.core.PersistentTreeSet(meta,this__13459.tree_map,this__13459.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13460 = this;
return this__13460.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13461 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__13461.meta);
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
var G__13467__delegate = function (keys){
var in__13465 = cljs.core.seq.call(null,keys);
var out__13466 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__13465))
{{
var G__13468 = cljs.core.next.call(null,in__13465);
var G__13469 = cljs.core.conj_BANG_.call(null,out__13466,cljs.core.first.call(null,in__13465));
in__13465 = G__13468;
out__13466 = G__13469;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13466);
}
break;
}
};
var G__13467 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13467__delegate.call(this, keys);
};
G__13467.cljs$lang$maxFixedArity = 0;
G__13467.cljs$lang$applyTo = (function (arglist__13470){
var keys = cljs.core.seq(arglist__13470);;
return G__13467__delegate(keys);
});
G__13467.cljs$lang$arity$variadic = G__13467__delegate;
return G__13467;
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
sorted_set.cljs$lang$applyTo = (function (arglist__13471){
var keys = cljs.core.seq(arglist__13471);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__13473){
var comparator = cljs.core.first(arglist__13473);
var keys = cljs.core.rest(arglist__13473);
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
{var n__13479 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____13480 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____13480))
{var e__13481 = temp__3971__auto____13480;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13481));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13479,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13472_SHARP_){
var temp__3971__auto____13482 = cljs.core.find.call(null,smap,p1__13472_SHARP_);
if(cljs.core.truth_(temp__3971__auto____13482))
{var e__13483 = temp__3971__auto____13482;
return cljs.core.second.call(null,e__13483);
} else
{return p1__13472_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13513 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13506,seen){
while(true){
var vec__13507__13508 = p__13506;
var f__13509 = cljs.core.nth.call(null,vec__13507__13508,0,null);
var xs__13510 = vec__13507__13508;
var temp__3974__auto____13511 = cljs.core.seq.call(null,xs__13510);
if(temp__3974__auto____13511)
{var s__13512 = temp__3974__auto____13511;
if(cljs.core.contains_QMARK_.call(null,seen,f__13509))
{{
var G__13514 = cljs.core.rest.call(null,s__13512);
var G__13515 = seen;
p__13506 = G__13514;
seen = G__13515;
continue;
}
} else
{return cljs.core.cons.call(null,f__13509,step.call(null,cljs.core.rest.call(null,s__13512),cljs.core.conj.call(null,seen,f__13509)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__13513.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__13518 = cljs.core.PersistentVector.EMPTY;
var s__13519 = s;
while(true){
if(cljs.core.next.call(null,s__13519))
{{
var G__13520 = cljs.core.conj.call(null,ret__13518,cljs.core.first.call(null,s__13519));
var G__13521 = cljs.core.next.call(null,s__13519);
ret__13518 = G__13520;
s__13519 = G__13521;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13518);
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
{if((function (){var or__3824__auto____13524 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____13524)
{return or__3824__auto____13524;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13525 = x.lastIndexOf("/");
if((i__13525 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13525 + 1));
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
if((function (){var or__3824__auto____13528 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____13528)
{return or__3824__auto____13528;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13529 = x.lastIndexOf("/");
if((i__13529 > -1))
{return cljs.core.subs.call(null,x,2,i__13529);
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
var map__13536 = cljs.core.ObjMap.EMPTY;
var ks__13537 = cljs.core.seq.call(null,keys);
var vs__13538 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____13539 = ks__13537;
if(and__3822__auto____13539)
{return vs__13538;
} else
{return and__3822__auto____13539;
}
})())
{{
var G__13540 = cljs.core.assoc.call(null,map__13536,cljs.core.first.call(null,ks__13537),cljs.core.first.call(null,vs__13538));
var G__13541 = cljs.core.next.call(null,ks__13537);
var G__13542 = cljs.core.next.call(null,vs__13538);
map__13536 = G__13540;
ks__13537 = G__13541;
vs__13538 = G__13542;
continue;
}
} else
{return map__13536;
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
var G__13545__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13530_SHARP_,p2__13531_SHARP_){
return max_key.call(null,k,p1__13530_SHARP_,p2__13531_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13545 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13545__delegate.call(this, k, x, y, more);
};
G__13545.cljs$lang$maxFixedArity = 3;
G__13545.cljs$lang$applyTo = (function (arglist__13546){
var k = cljs.core.first(arglist__13546);
var x = cljs.core.first(cljs.core.next(arglist__13546));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13546)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13546)));
return G__13545__delegate(k, x, y, more);
});
G__13545.cljs$lang$arity$variadic = G__13545__delegate;
return G__13545;
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
var G__13547__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13543_SHARP_,p2__13544_SHARP_){
return min_key.call(null,k,p1__13543_SHARP_,p2__13544_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13547 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13547__delegate.call(this, k, x, y, more);
};
G__13547.cljs$lang$maxFixedArity = 3;
G__13547.cljs$lang$applyTo = (function (arglist__13548){
var k = cljs.core.first(arglist__13548);
var x = cljs.core.first(cljs.core.next(arglist__13548));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13548)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13548)));
return G__13547__delegate(k, x, y, more);
});
G__13547.cljs$lang$arity$variadic = G__13547__delegate;
return G__13547;
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
var temp__3974__auto____13551 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13551)
{var s__13552 = temp__3974__auto____13551;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13552),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13552)));
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
var temp__3974__auto____13555 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13555)
{var s__13556 = temp__3974__auto____13555;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13556))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13556),take_while.call(null,pred,cljs.core.rest.call(null,s__13556)));
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
var comp__13558 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__13558.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__13570 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____13571 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____13571))
{var vec__13572__13573 = temp__3974__auto____13571;
var e__13574 = cljs.core.nth.call(null,vec__13572__13573,0,null);
var s__13575 = vec__13572__13573;
if(cljs.core.truth_(include__13570.call(null,e__13574)))
{return s__13575;
} else
{return cljs.core.next.call(null,s__13575);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13570,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____13576 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____13576))
{var vec__13577__13578 = temp__3974__auto____13576;
var e__13579 = cljs.core.nth.call(null,vec__13577__13578,0,null);
var s__13580 = vec__13577__13578;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__13579))?s__13580:cljs.core.next.call(null,s__13580)));
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
var include__13592 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____13593 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____13593))
{var vec__13594__13595 = temp__3974__auto____13593;
var e__13596 = cljs.core.nth.call(null,vec__13594__13595,0,null);
var s__13597 = vec__13594__13595;
if(cljs.core.truth_(include__13592.call(null,e__13596)))
{return s__13597;
} else
{return cljs.core.next.call(null,s__13597);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13592,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____13598 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____13598))
{var vec__13599__13600 = temp__3974__auto____13598;
var e__13601 = cljs.core.nth.call(null,vec__13599__13600,0,null);
var s__13602 = vec__13599__13600;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__13601))?s__13602:cljs.core.next.call(null,s__13602)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__13603 = this;
var h__5708__auto____13604 = this__13603.__hash;
if(!((h__5708__auto____13604 == null)))
{return h__5708__auto____13604;
} else
{var h__5708__auto____13605 = cljs.core.hash_coll.call(null,rng);
this__13603.__hash = h__5708__auto____13605;
return h__5708__auto____13605;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__13606 = this;
if((this__13606.step > 0))
{if(((this__13606.start + this__13606.step) < this__13606.end))
{return (new cljs.core.Range(this__13606.meta,(this__13606.start + this__13606.step),this__13606.end,this__13606.step,null));
} else
{return null;
}
} else
{if(((this__13606.start + this__13606.step) > this__13606.end))
{return (new cljs.core.Range(this__13606.meta,(this__13606.start + this__13606.step),this__13606.end,this__13606.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__13607 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__13608 = this;
var this__13609 = this;
return cljs.core.pr_str.call(null,this__13609);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__13610 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__13611 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__13612 = this;
if((this__13612.step > 0))
{if((this__13612.start < this__13612.end))
{return rng;
} else
{return null;
}
} else
{if((this__13612.start > this__13612.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__13613 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__13613.end - this__13613.start) / this__13613.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__13614 = this;
return this__13614.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__13615 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__13615.meta,(this__13615.start + this__13615.step),this__13615.end,this__13615.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__13616 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__13617 = this;
return (new cljs.core.Range(meta,this__13617.start,this__13617.end,this__13617.step,this__13617.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__13618 = this;
return this__13618.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__13619 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__13619.start + (n * this__13619.step));
} else
{if((function (){var and__3822__auto____13620 = (this__13619.start > this__13619.end);
if(and__3822__auto____13620)
{return (this__13619.step === 0);
} else
{return and__3822__auto____13620;
}
})())
{return this__13619.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__13621 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__13621.start + (n * this__13621.step));
} else
{if((function (){var and__3822__auto____13622 = (this__13621.start > this__13621.end);
if(and__3822__auto____13622)
{return (this__13621.step === 0);
} else
{return and__3822__auto____13622;
}
})())
{return this__13621.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__13623 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13623.meta);
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
var temp__3974__auto____13626 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13626)
{var s__13627 = temp__3974__auto____13626;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__13627),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13627)));
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
var temp__3974__auto____13634 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13634)
{var s__13635 = temp__3974__auto____13634;
var fst__13636 = cljs.core.first.call(null,s__13635);
var fv__13637 = f.call(null,fst__13636);
var run__13638 = cljs.core.cons.call(null,fst__13636,cljs.core.take_while.call(null,(function (p1__13628_SHARP_){
return cljs.core._EQ_.call(null,fv__13637,f.call(null,p1__13628_SHARP_));
}),cljs.core.next.call(null,s__13635)));
return cljs.core.cons.call(null,run__13638,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13638),s__13635))));
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
var temp__3971__auto____13653 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____13653)
{var s__13654 = temp__3971__auto____13653;
return reductions.call(null,f,cljs.core.first.call(null,s__13654),cljs.core.rest.call(null,s__13654));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13655 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13655)
{var s__13656 = temp__3974__auto____13655;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13656)),cljs.core.rest.call(null,s__13656));
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
var G__13659 = null;
var G__13659__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13659__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13659__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13659__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13659__4 = (function() { 
var G__13660__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13660 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13660__delegate.call(this, x, y, z, args);
};
G__13660.cljs$lang$maxFixedArity = 3;
G__13660.cljs$lang$applyTo = (function (arglist__13661){
var x = cljs.core.first(arglist__13661);
var y = cljs.core.first(cljs.core.next(arglist__13661));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13661)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13661)));
return G__13660__delegate(x, y, z, args);
});
G__13660.cljs$lang$arity$variadic = G__13660__delegate;
return G__13660;
})()
;
G__13659 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13659__0.call(this);
case 1:
return G__13659__1.call(this,x);
case 2:
return G__13659__2.call(this,x,y);
case 3:
return G__13659__3.call(this,x,y,z);
default:
return G__13659__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13659.cljs$lang$maxFixedArity = 3;
G__13659.cljs$lang$applyTo = G__13659__4.cljs$lang$applyTo;
return G__13659;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__13662 = null;
var G__13662__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13662__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13662__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13662__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13662__4 = (function() { 
var G__13663__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13663__delegate.call(this, x, y, z, args);
};
G__13663.cljs$lang$maxFixedArity = 3;
G__13663.cljs$lang$applyTo = (function (arglist__13664){
var x = cljs.core.first(arglist__13664);
var y = cljs.core.first(cljs.core.next(arglist__13664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13664)));
return G__13663__delegate(x, y, z, args);
});
G__13663.cljs$lang$arity$variadic = G__13663__delegate;
return G__13663;
})()
;
G__13662 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13662__0.call(this);
case 1:
return G__13662__1.call(this,x);
case 2:
return G__13662__2.call(this,x,y);
case 3:
return G__13662__3.call(this,x,y,z);
default:
return G__13662__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13662.cljs$lang$maxFixedArity = 3;
G__13662.cljs$lang$applyTo = G__13662__4.cljs$lang$applyTo;
return G__13662;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__13665 = null;
var G__13665__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13665__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13665__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13665__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13665__4 = (function() { 
var G__13666__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13666__delegate.call(this, x, y, z, args);
};
G__13666.cljs$lang$maxFixedArity = 3;
G__13666.cljs$lang$applyTo = (function (arglist__13667){
var x = cljs.core.first(arglist__13667);
var y = cljs.core.first(cljs.core.next(arglist__13667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13667)));
return G__13666__delegate(x, y, z, args);
});
G__13666.cljs$lang$arity$variadic = G__13666__delegate;
return G__13666;
})()
;
G__13665 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13665__0.call(this);
case 1:
return G__13665__1.call(this,x);
case 2:
return G__13665__2.call(this,x,y);
case 3:
return G__13665__3.call(this,x,y,z);
default:
return G__13665__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13665.cljs$lang$maxFixedArity = 3;
G__13665.cljs$lang$applyTo = G__13665__4.cljs$lang$applyTo;
return G__13665;
})()
});
var juxt__4 = (function() { 
var G__13668__delegate = function (f,g,h,fs){
var fs__13658 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__13669 = null;
var G__13669__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__13639_SHARP_,p2__13640_SHARP_){
return cljs.core.conj.call(null,p1__13639_SHARP_,p2__13640_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__13658);
});
var G__13669__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13641_SHARP_,p2__13642_SHARP_){
return cljs.core.conj.call(null,p1__13641_SHARP_,p2__13642_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__13658);
});
var G__13669__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13643_SHARP_,p2__13644_SHARP_){
return cljs.core.conj.call(null,p1__13643_SHARP_,p2__13644_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__13658);
});
var G__13669__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13645_SHARP_,p2__13646_SHARP_){
return cljs.core.conj.call(null,p1__13645_SHARP_,p2__13646_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__13658);
});
var G__13669__4 = (function() { 
var G__13670__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13647_SHARP_,p2__13648_SHARP_){
return cljs.core.conj.call(null,p1__13647_SHARP_,cljs.core.apply.call(null,p2__13648_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__13658);
};
var G__13670 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13670__delegate.call(this, x, y, z, args);
};
G__13670.cljs$lang$maxFixedArity = 3;
G__13670.cljs$lang$applyTo = (function (arglist__13671){
var x = cljs.core.first(arglist__13671);
var y = cljs.core.first(cljs.core.next(arglist__13671));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13671)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13671)));
return G__13670__delegate(x, y, z, args);
});
G__13670.cljs$lang$arity$variadic = G__13670__delegate;
return G__13670;
})()
;
G__13669 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13669__0.call(this);
case 1:
return G__13669__1.call(this,x);
case 2:
return G__13669__2.call(this,x,y);
case 3:
return G__13669__3.call(this,x,y,z);
default:
return G__13669__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13669.cljs$lang$maxFixedArity = 3;
G__13669.cljs$lang$applyTo = G__13669__4.cljs$lang$applyTo;
return G__13669;
})()
};
var G__13668 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13668__delegate.call(this, f, g, h, fs);
};
G__13668.cljs$lang$maxFixedArity = 3;
G__13668.cljs$lang$applyTo = (function (arglist__13672){
var f = cljs.core.first(arglist__13672);
var g = cljs.core.first(cljs.core.next(arglist__13672));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13672)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13672)));
return G__13668__delegate(f, g, h, fs);
});
G__13668.cljs$lang$arity$variadic = G__13668__delegate;
return G__13668;
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
var G__13675 = cljs.core.next.call(null,coll);
coll = G__13675;
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
if(cljs.core.truth_((function (){var and__3822__auto____13674 = cljs.core.seq.call(null,coll);
if(and__3822__auto____13674)
{return (n > 0);
} else
{return and__3822__auto____13674;
}
})()))
{{
var G__13676 = (n - 1);
var G__13677 = cljs.core.next.call(null,coll);
n = G__13676;
coll = G__13677;
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
var matches__13679 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13679),s))
{if((cljs.core.count.call(null,matches__13679) === 1))
{return cljs.core.first.call(null,matches__13679);
} else
{return cljs.core.vec.call(null,matches__13679);
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
var matches__13681 = re.exec(s);
if((matches__13681 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__13681) === 1))
{return cljs.core.first.call(null,matches__13681);
} else
{return cljs.core.vec.call(null,matches__13681);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13686 = cljs.core.re_find.call(null,re,s);
var match_idx__13687 = s.search(re);
var match_str__13688 = ((cljs.core.coll_QMARK_.call(null,match_data__13686))?cljs.core.first.call(null,match_data__13686):match_data__13686);
var post_match__13689 = cljs.core.subs.call(null,s,(match_idx__13687 + cljs.core.count.call(null,match_str__13688)));
if(cljs.core.truth_(match_data__13686))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13686,re_seq.call(null,re,post_match__13689));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__13696__13697 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___13698 = cljs.core.nth.call(null,vec__13696__13697,0,null);
var flags__13699 = cljs.core.nth.call(null,vec__13696__13697,1,null);
var pattern__13700 = cljs.core.nth.call(null,vec__13696__13697,2,null);
return (new RegExp(pattern__13700,flags__13699));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__13690_SHARP_){
return print_one.call(null,p1__13690_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__13704__13705 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__13704__13705)
{var o__13706 = cljs.core.first.call(null,G__13704__13705);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__13706,writer,opts);
{
var G__13707 = cljs.core.next.call(null,G__13704__13705);
G__13704__13705 = G__13707;
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
var G__13711__13712 = cljs.core.seq.call(null,ss);
while(true){
if(G__13711__13712)
{var s__13713 = cljs.core.first.call(null,G__13711__13712);
cljs.core._write.call(null,writer,s__13713);
{
var G__13714 = cljs.core.next.call(null,G__13711__13712);
G__13711__13712 = G__13714;
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
write_all.cljs$lang$applyTo = (function (arglist__13715){
var writer = cljs.core.first(arglist__13715);
var ss = cljs.core.rest(arglist__13715);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__13716 = this;
return this__13716.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__13717 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____13727 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13727))
{var and__3822__auto____13731 = (function (){var G__13728__13729 = obj;
if(G__13728__13729)
{if((function (){var or__3824__auto____13730 = (G__13728__13729.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13730)
{return or__3824__auto____13730;
} else
{return G__13728__13729.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13728__13729.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13728__13729);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13728__13729);
}
})();
if(cljs.core.truth_(and__3822__auto____13731))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13731;
}
} else
{return and__3822__auto____13727;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____13732 = !((obj == null));
if(and__3822__auto____13732)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13732;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__13733__13734 = obj;
if(G__13733__13734)
{if((function (){var or__3824__auto____13735 = (G__13733__13734.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13735)
{return or__3824__auto____13735;
} else
{return G__13733__13734.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13733__13734.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13733__13734);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13733__13734);
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
{if(cljs.core.truth_((function (){var and__3822__auto____13748 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____13748))
{var and__3822__auto____13752 = (function (){var G__13749__13750 = obj;
if(G__13749__13750)
{if((function (){var or__3824__auto____13751 = (G__13749__13750.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____13751)
{return or__3824__auto____13751;
} else
{return G__13749__13750.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13749__13750.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13749__13750);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13749__13750);
}
})();
if(cljs.core.truth_(and__3822__auto____13752))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____13752;
}
} else
{return and__3822__auto____13748;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____13753 = !((obj == null));
if(and__3822__auto____13753)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____13753;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__13754__13755 = obj;
if(G__13754__13755)
{if((function (){var or__3824__auto____13756 = (G__13754__13755.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____13756)
{return or__3824__auto____13756;
} else
{return G__13754__13755.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__13754__13755.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__13754__13755);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__13754__13755);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__13757__13758 = obj;
if(G__13757__13758)
{if((function (){var or__3824__auto____13759 = (G__13757__13758.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____13759)
{return or__3824__auto____13759;
} else
{return G__13757__13758.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13757__13758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13757__13758);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13757__13758);
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
var G__13763__13764 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__13763__13764)
{var obj__13765 = cljs.core.first.call(null,G__13763__13764);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__13765,writer,opts);
{
var G__13766 = cljs.core.next.call(null,G__13763__13764);
G__13763__13764 = G__13766;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__13769 = (new goog.string.StringBuffer());
var writer__13770 = (new cljs.core.StringBufferWriter(sb__13769));
cljs.core.pr_seq_writer.call(null,objs,writer__13770,opts);
cljs.core._flush.call(null,writer__13770);
return sb__13769;
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
{var sb__13772 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__13772.append("\n");
return [cljs.core.str(sb__13772)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__13773){
var objs = cljs.core.seq(arglist__13773);;
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
prn_str.cljs$lang$applyTo = (function (arglist__13774){
var objs = cljs.core.seq(arglist__13774);;
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
pr.cljs$lang$applyTo = (function (arglist__13775){
var objs = cljs.core.seq(arglist__13775);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13776){
var objs = cljs.core.seq(arglist__13776);;
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
print_str.cljs$lang$applyTo = (function (arglist__13777){
var objs = cljs.core.seq(arglist__13777);;
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
println.cljs$lang$applyTo = (function (arglist__13778){
var objs = cljs.core.seq(arglist__13778);;
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
println_str.cljs$lang$applyTo = (function (arglist__13779){
var objs = cljs.core.seq(arglist__13779);;
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
prn.cljs$lang$applyTo = (function (arglist__13780){
var objs = cljs.core.seq(arglist__13780);;
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
printf.cljs$lang$applyTo = (function (arglist__13781){
var fmt = cljs.core.first(arglist__13781);
var args = cljs.core.rest(arglist__13781);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13782 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13782,"{",", ","}",opts,coll);
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
var pr_pair__13783 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13783,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13784 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13784,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____13785 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13785))
{var nspc__13786 = temp__3974__auto____13785;
return [cljs.core.str(nspc__13786),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____13787 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13787))
{var nspc__13788 = temp__3974__auto____13787;
return [cljs.core.str(nspc__13788),cljs.core.str("/")].join('');
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
var pr_pair__13789 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13789,"{",", ","}",opts,coll);
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
var normalize__13791 = (function (n,len){
var ns__13790 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__13790) < len))
{{
var G__13793 = [cljs.core.str("0"),cljs.core.str(ns__13790)].join('');
ns__13790 = G__13793;
continue;
}
} else
{return ns__13790;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__13791.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__13791.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__13791.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__13791.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__13791.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__13791.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__13792 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13792,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13794 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13794,"{",", ","}",opts,coll);
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
var pr_pair__13795 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13795,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__13796 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13796,"{",", ","}",opts,coll);
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
var temp__3974__auto____13797 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13797))
{var nspc__13798 = temp__3974__auto____13797;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__13798)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____13799 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____13799))
{var nspc__13800 = temp__3974__auto____13799;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__13800)].join(''),"/");
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
var pr_pair__13801 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13801,"{",", ","}",opts,coll);
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
var normalize__13803 = (function (n,len){
var ns__13802 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__13802) < len))
{{
var G__13805 = [cljs.core.str("0"),cljs.core.str(ns__13802)].join('');
ns__13802 = G__13805;
continue;
}
} else
{return ns__13802;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__13803.call(null,(d.getUTCMonth() + 1),2),"-",normalize__13803.call(null,d.getUTCDate(),2),"T",normalize__13803.call(null,d.getUTCHours(),2),":",normalize__13803.call(null,d.getUTCMinutes(),2),":",normalize__13803.call(null,d.getUTCSeconds(),2),".",normalize__13803.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__13804 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__13804,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13806 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__13807 = this;
var G__13808__13809 = cljs.core.seq.call(null,this__13807.watches);
while(true){
if(G__13808__13809)
{var vec__13810__13811 = cljs.core.first.call(null,G__13808__13809);
var key__13812 = cljs.core.nth.call(null,vec__13810__13811,0,null);
var f__13813 = cljs.core.nth.call(null,vec__13810__13811,1,null);
f__13813.call(null,key__13812,this$,oldval,newval);
{
var G__13821 = cljs.core.next.call(null,G__13808__13809);
G__13808__13809 = G__13821;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__13814 = this;
return this$.watches = cljs.core.assoc.call(null,this__13814.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__13815 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13815.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__13816 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__13816.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__13817 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__13817.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__13818 = this;
return this__13818.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13819 = this;
return this__13819.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13820 = this;
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
var G__13833__delegate = function (x,p__13822){
var map__13828__13829 = p__13822;
var map__13828__13830 = ((cljs.core.seq_QMARK_.call(null,map__13828__13829))?cljs.core.apply.call(null,cljs.core.hash_map,map__13828__13829):map__13828__13829);
var validator__13831 = cljs.core._lookup.call(null,map__13828__13830,"\uFDD0'validator",null);
var meta__13832 = cljs.core._lookup.call(null,map__13828__13830,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__13832,validator__13831,null));
};
var G__13833 = function (x,var_args){
var p__13822 = null;
if (goog.isDef(var_args)) {
  p__13822 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13833__delegate.call(this, x, p__13822);
};
G__13833.cljs$lang$maxFixedArity = 1;
G__13833.cljs$lang$applyTo = (function (arglist__13834){
var x = cljs.core.first(arglist__13834);
var p__13822 = cljs.core.rest(arglist__13834);
return G__13833__delegate(x, p__13822);
});
G__13833.cljs$lang$arity$variadic = G__13833__delegate;
return G__13833;
})()
;
atom = function(x,var_args){
var p__13822 = var_args;
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
var temp__3974__auto____13838 = a.validator;
if(cljs.core.truth_(temp__3974__auto____13838))
{var validate__13839 = temp__3974__auto____13838;
if(cljs.core.truth_(validate__13839.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__13840 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13840,new_value);
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
var G__13841__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13841 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13841__delegate.call(this, a, f, x, y, z, more);
};
G__13841.cljs$lang$maxFixedArity = 5;
G__13841.cljs$lang$applyTo = (function (arglist__13842){
var a = cljs.core.first(arglist__13842);
var f = cljs.core.first(cljs.core.next(arglist__13842));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13842)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13842))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13842)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13842)))));
return G__13841__delegate(a, f, x, y, z, more);
});
G__13841.cljs$lang$arity$variadic = G__13841__delegate;
return G__13841;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13843){
var iref = cljs.core.first(arglist__13843);
var f = cljs.core.first(cljs.core.next(arglist__13843));
var args = cljs.core.rest(cljs.core.next(arglist__13843));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__13844 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__13844.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13845 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__13845.state,(function (p__13846){
var map__13847__13848 = p__13846;
var map__13847__13849 = ((cljs.core.seq_QMARK_.call(null,map__13847__13848))?cljs.core.apply.call(null,cljs.core.hash_map,map__13847__13848):map__13847__13848);
var curr_state__13850 = map__13847__13849;
var done__13851 = cljs.core._lookup.call(null,map__13847__13849,"\uFDD0'done",null);
if(cljs.core.truth_(done__13851))
{return curr_state__13850;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__13845.f.call(null)});
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
var map__13872__13873 = options;
var map__13872__13874 = ((cljs.core.seq_QMARK_.call(null,map__13872__13873))?cljs.core.apply.call(null,cljs.core.hash_map,map__13872__13873):map__13872__13873);
var keywordize_keys__13875 = cljs.core._lookup.call(null,map__13872__13874,"\uFDD0'keywordize-keys",null);
var keyfn__13876 = (cljs.core.truth_(keywordize_keys__13875)?cljs.core.keyword:cljs.core.str);
var f__13891 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5989__auto____13890 = (function iter__13884(s__13885){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13885__13888 = s__13885;
while(true){
if(cljs.core.seq.call(null,s__13885__13888))
{var k__13889 = cljs.core.first.call(null,s__13885__13888);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__13876.call(null,k__13889),thisfn.call(null,(x[k__13889]))], true),iter__13884.call(null,cljs.core.rest.call(null,s__13885__13888)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5989__auto____13890.call(null,cljs.core.js_keys.call(null,x));
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
return f__13891.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13892){
var x = cljs.core.first(arglist__13892);
var options = cljs.core.rest(arglist__13892);
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
var mem__13897 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__13901__delegate = function (args){
var temp__3971__auto____13898 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__13897),args,null);
if(cljs.core.truth_(temp__3971__auto____13898))
{var v__13899 = temp__3971__auto____13898;
return v__13899;
} else
{var ret__13900 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__13897,cljs.core.assoc,args,ret__13900);
return ret__13900;
}
};
var G__13901 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13901__delegate.call(this, args);
};
G__13901.cljs$lang$maxFixedArity = 0;
G__13901.cljs$lang$applyTo = (function (arglist__13902){
var args = cljs.core.seq(arglist__13902);;
return G__13901__delegate(args);
});
G__13901.cljs$lang$arity$variadic = G__13901__delegate;
return G__13901;
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
var ret__13904 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__13904))
{{
var G__13905 = ret__13904;
f = G__13905;
continue;
}
} else
{return ret__13904;
}
break;
}
});
var trampoline__2 = (function() { 
var G__13906__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13906 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13906__delegate.call(this, f, args);
};
G__13906.cljs$lang$maxFixedArity = 1;
G__13906.cljs$lang$applyTo = (function (arglist__13907){
var f = cljs.core.first(arglist__13907);
var args = cljs.core.rest(arglist__13907);
return G__13906__delegate(f, args);
});
G__13906.cljs$lang$arity$variadic = G__13906__delegate;
return G__13906;
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
var k__13909 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__13909,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__13909,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____13918 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____13918)
{return or__3824__auto____13918;
} else
{var or__3824__auto____13919 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____13919)
{return or__3824__auto____13919;
} else
{var and__3822__auto____13920 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____13920)
{var and__3822__auto____13921 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____13921)
{var and__3822__auto____13922 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____13922)
{var ret__13923 = true;
var i__13924 = 0;
while(true){
if((function (){var or__3824__auto____13925 = cljs.core.not.call(null,ret__13923);
if(or__3824__auto____13925)
{return or__3824__auto____13925;
} else
{return (i__13924 === cljs.core.count.call(null,parent));
}
})())
{return ret__13923;
} else
{{
var G__13926 = isa_QMARK_.call(null,h,child.call(null,i__13924),parent.call(null,i__13924));
var G__13927 = (i__13924 + 1);
ret__13923 = G__13926;
i__13924 = G__13927;
continue;
}
}
break;
}
} else
{return and__3822__auto____13922;
}
} else
{return and__3822__auto____13921;
}
} else
{return and__3822__auto____13920;
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
var tp__13936 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__13937 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__13938 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__13939 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____13940 = ((cljs.core.contains_QMARK_.call(null,tp__13936.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__13938.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__13938.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__13936,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__13939.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__13937,parent,ta__13938),"\uFDD0'descendants":tf__13939.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__13938,tag,td__13937)});
})());
if(cljs.core.truth_(or__3824__auto____13940))
{return or__3824__auto____13940;
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
var parentMap__13945 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__13946 = (cljs.core.truth_(parentMap__13945.call(null,tag))?cljs.core.disj.call(null,parentMap__13945.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__13947 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13946))?cljs.core.assoc.call(null,parentMap__13945,tag,childsParents__13946):cljs.core.dissoc.call(null,parentMap__13945,tag));
var deriv_seq__13948 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13928_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13928_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13928_SHARP_),cljs.core.second.call(null,p1__13928_SHARP_)));
}),cljs.core.seq.call(null,newParents__13947)));
if(cljs.core.contains_QMARK_.call(null,parentMap__13945.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__13929_SHARP_,p2__13930_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13929_SHARP_,p2__13930_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13948));
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
var xprefs__13956 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____13958 = (cljs.core.truth_((function (){var and__3822__auto____13957 = xprefs__13956;
if(cljs.core.truth_(and__3822__auto____13957))
{return xprefs__13956.call(null,y);
} else
{return and__3822__auto____13957;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____13958))
{return or__3824__auto____13958;
} else
{var or__3824__auto____13960 = (function (){var ps__13959 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__13959) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13959),prefer_table)))
{} else
{}
{
var G__13963 = cljs.core.rest.call(null,ps__13959);
ps__13959 = G__13963;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____13960))
{return or__3824__auto____13960;
} else
{var or__3824__auto____13962 = (function (){var ps__13961 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__13961) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13961),y,prefer_table)))
{} else
{}
{
var G__13964 = cljs.core.rest.call(null,ps__13961);
ps__13961 = G__13964;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____13962))
{return or__3824__auto____13962;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____13966 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____13966))
{return or__3824__auto____13966;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13984 = cljs.core.reduce.call(null,(function (be,p__13976){
var vec__13977__13978 = p__13976;
var k__13979 = cljs.core.nth.call(null,vec__13977__13978,0,null);
var ___13980 = cljs.core.nth.call(null,vec__13977__13978,1,null);
var e__13981 = vec__13977__13978;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13979))
{var be2__13983 = (cljs.core.truth_((function (){var or__3824__auto____13982 = (be == null);
if(or__3824__auto____13982)
{return or__3824__auto____13982;
} else
{return cljs.core.dominates.call(null,k__13979,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13981:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13983),k__13979,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__13979),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__13983)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__13983;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__13984))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13984));
return cljs.core.second.call(null,best_entry__13984);
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
if((function (){var and__3822__auto____13989 = mf;
if(and__3822__auto____13989)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____13989;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5892__auto____13990 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13991 = (cljs.core._reset[goog.typeOf(x__5892__auto____13990)]);
if(or__3824__auto____13991)
{return or__3824__auto____13991;
} else
{var or__3824__auto____13992 = (cljs.core._reset["_"]);
if(or__3824__auto____13992)
{return or__3824__auto____13992;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____13997 = mf;
if(and__3822__auto____13997)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____13997;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5892__auto____13998 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____13999 = (cljs.core._add_method[goog.typeOf(x__5892__auto____13998)]);
if(or__3824__auto____13999)
{return or__3824__auto____13999;
} else
{var or__3824__auto____14000 = (cljs.core._add_method["_"]);
if(or__3824__auto____14000)
{return or__3824__auto____14000;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____14005 = mf;
if(and__3822__auto____14005)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____14005;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5892__auto____14006 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14007 = (cljs.core._remove_method[goog.typeOf(x__5892__auto____14006)]);
if(or__3824__auto____14007)
{return or__3824__auto____14007;
} else
{var or__3824__auto____14008 = (cljs.core._remove_method["_"]);
if(or__3824__auto____14008)
{return or__3824__auto____14008;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____14013 = mf;
if(and__3822__auto____14013)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____14013;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5892__auto____14014 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14015 = (cljs.core._prefer_method[goog.typeOf(x__5892__auto____14014)]);
if(or__3824__auto____14015)
{return or__3824__auto____14015;
} else
{var or__3824__auto____14016 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____14016)
{return or__3824__auto____14016;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____14021 = mf;
if(and__3822__auto____14021)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____14021;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5892__auto____14022 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14023 = (cljs.core._get_method[goog.typeOf(x__5892__auto____14022)]);
if(or__3824__auto____14023)
{return or__3824__auto____14023;
} else
{var or__3824__auto____14024 = (cljs.core._get_method["_"]);
if(or__3824__auto____14024)
{return or__3824__auto____14024;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____14029 = mf;
if(and__3822__auto____14029)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____14029;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5892__auto____14030 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14031 = (cljs.core._methods[goog.typeOf(x__5892__auto____14030)]);
if(or__3824__auto____14031)
{return or__3824__auto____14031;
} else
{var or__3824__auto____14032 = (cljs.core._methods["_"]);
if(or__3824__auto____14032)
{return or__3824__auto____14032;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____14037 = mf;
if(and__3822__auto____14037)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____14037;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5892__auto____14038 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14039 = (cljs.core._prefers[goog.typeOf(x__5892__auto____14038)]);
if(or__3824__auto____14039)
{return or__3824__auto____14039;
} else
{var or__3824__auto____14040 = (cljs.core._prefers["_"]);
if(or__3824__auto____14040)
{return or__3824__auto____14040;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____14045 = mf;
if(and__3822__auto____14045)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____14045;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5892__auto____14046 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14047 = (cljs.core._dispatch[goog.typeOf(x__5892__auto____14046)]);
if(or__3824__auto____14047)
{return or__3824__auto____14047;
} else
{var or__3824__auto____14048 = (cljs.core._dispatch["_"]);
if(or__3824__auto____14048)
{return or__3824__auto____14048;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14051 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14052 = cljs.core._get_method.call(null,mf,dispatch_val__14051);
if(cljs.core.truth_(target_fn__14052))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__14051)].join('')));
}
return cljs.core.apply.call(null,target_fn__14052,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14053 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__14054 = this;
cljs.core.swap_BANG_.call(null,this__14054.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14054.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14054.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14054.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__14055 = this;
cljs.core.swap_BANG_.call(null,this__14055.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14055.method_cache,this__14055.method_table,this__14055.cached_hierarchy,this__14055.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__14056 = this;
cljs.core.swap_BANG_.call(null,this__14056.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14056.method_cache,this__14056.method_table,this__14056.cached_hierarchy,this__14056.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__14057 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14057.cached_hierarchy),cljs.core.deref.call(null,this__14057.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__14057.method_cache,this__14057.method_table,this__14057.cached_hierarchy,this__14057.hierarchy);
}
var temp__3971__auto____14058 = cljs.core.deref.call(null,this__14057.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____14058))
{var target_fn__14059 = temp__3971__auto____14058;
return target_fn__14059;
} else
{var temp__3971__auto____14060 = cljs.core.find_and_cache_best_method.call(null,this__14057.name,dispatch_val,this__14057.hierarchy,this__14057.method_table,this__14057.prefer_table,this__14057.method_cache,this__14057.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____14060))
{var target_fn__14061 = temp__3971__auto____14060;
return target_fn__14061;
} else
{return cljs.core.deref.call(null,this__14057.method_table).call(null,this__14057.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14062 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14062.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__14062.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__14062.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14062.method_cache,this__14062.method_table,this__14062.cached_hierarchy,this__14062.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__14063 = this;
return cljs.core.deref.call(null,this__14063.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__14064 = this;
return cljs.core.deref.call(null,this__14064.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__14065 = this;
return cljs.core.do_dispatch.call(null,mf,this__14065.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14067__delegate = function (_,args){
var self__14066 = this;
return cljs.core._dispatch.call(null,self__14066,args);
};
var G__14067 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14067__delegate.call(this, _, args);
};
G__14067.cljs$lang$maxFixedArity = 1;
G__14067.cljs$lang$applyTo = (function (arglist__14068){
var _ = cljs.core.first(arglist__14068);
var args = cljs.core.rest(arglist__14068);
return G__14067__delegate(_, args);
});
G__14067.cljs$lang$arity$variadic = G__14067__delegate;
return G__14067;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__14069 = this;
return cljs.core._dispatch.call(null,self__14069,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14070 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_14072,writer,_){
var this__14071 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__14071.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_14074,_){
var this__14073 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__14073.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__14075 = this;
var and__3822__auto____14076 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____14076)
{return (this__14075.uuid === other.uuid);
} else
{return and__3822__auto____14076;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__14077 = this;
var this__14078 = this;
return cljs.core.pr_str.call(null,this__14078);
});
cljs.core.UUID;
