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
var x__122209 = (((x == null))?null:x);
if((p[goog.typeOf(x__122209)]))
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
var G__122210__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__122210 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__122210__delegate.call(this, array, i, idxs);
};
G__122210.cljs$lang$maxFixedArity = 2;
G__122210.cljs$lang$applyTo = (function (arglist__122211){
var array = cljs.core.first(arglist__122211);
var i = cljs.core.first(cljs.core.next(arglist__122211));
var idxs = cljs.core.rest(cljs.core.next(arglist__122211));
return G__122210__delegate(array, i, idxs);
});
G__122210.cljs$lang$arity$variadic = G__122210__delegate;
return G__122210;
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
if((function (){var and__3822__auto____122296 = this$;
if(and__3822__auto____122296)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____122296;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5628__auto____122297 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122298 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122297)]);
if(or__3824__auto____122298)
{return or__3824__auto____122298;
} else
{var or__3824__auto____122299 = (cljs.core._invoke["_"]);
if(or__3824__auto____122299)
{return or__3824__auto____122299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____122300 = this$;
if(and__3822__auto____122300)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____122300;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5628__auto____122301 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122302 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122301)]);
if(or__3824__auto____122302)
{return or__3824__auto____122302;
} else
{var or__3824__auto____122303 = (cljs.core._invoke["_"]);
if(or__3824__auto____122303)
{return or__3824__auto____122303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____122304 = this$;
if(and__3822__auto____122304)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____122304;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5628__auto____122305 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122306 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122305)]);
if(or__3824__auto____122306)
{return or__3824__auto____122306;
} else
{var or__3824__auto____122307 = (cljs.core._invoke["_"]);
if(or__3824__auto____122307)
{return or__3824__auto____122307;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____122308 = this$;
if(and__3822__auto____122308)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____122308;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5628__auto____122309 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122310 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122309)]);
if(or__3824__auto____122310)
{return or__3824__auto____122310;
} else
{var or__3824__auto____122311 = (cljs.core._invoke["_"]);
if(or__3824__auto____122311)
{return or__3824__auto____122311;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____122312 = this$;
if(and__3822__auto____122312)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____122312;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5628__auto____122313 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122314 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122313)]);
if(or__3824__auto____122314)
{return or__3824__auto____122314;
} else
{var or__3824__auto____122315 = (cljs.core._invoke["_"]);
if(or__3824__auto____122315)
{return or__3824__auto____122315;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____122316 = this$;
if(and__3822__auto____122316)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____122316;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5628__auto____122317 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122318 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122317)]);
if(or__3824__auto____122318)
{return or__3824__auto____122318;
} else
{var or__3824__auto____122319 = (cljs.core._invoke["_"]);
if(or__3824__auto____122319)
{return or__3824__auto____122319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____122320 = this$;
if(and__3822__auto____122320)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____122320;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5628__auto____122321 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122322 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122321)]);
if(or__3824__auto____122322)
{return or__3824__auto____122322;
} else
{var or__3824__auto____122323 = (cljs.core._invoke["_"]);
if(or__3824__auto____122323)
{return or__3824__auto____122323;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____122324 = this$;
if(and__3822__auto____122324)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____122324;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5628__auto____122325 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122326 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122325)]);
if(or__3824__auto____122326)
{return or__3824__auto____122326;
} else
{var or__3824__auto____122327 = (cljs.core._invoke["_"]);
if(or__3824__auto____122327)
{return or__3824__auto____122327;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____122328 = this$;
if(and__3822__auto____122328)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____122328;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5628__auto____122329 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122330 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122329)]);
if(or__3824__auto____122330)
{return or__3824__auto____122330;
} else
{var or__3824__auto____122331 = (cljs.core._invoke["_"]);
if(or__3824__auto____122331)
{return or__3824__auto____122331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____122332 = this$;
if(and__3822__auto____122332)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____122332;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5628__auto____122333 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122334 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122333)]);
if(or__3824__auto____122334)
{return or__3824__auto____122334;
} else
{var or__3824__auto____122335 = (cljs.core._invoke["_"]);
if(or__3824__auto____122335)
{return or__3824__auto____122335;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____122336 = this$;
if(and__3822__auto____122336)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____122336;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5628__auto____122337 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122338 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122337)]);
if(or__3824__auto____122338)
{return or__3824__auto____122338;
} else
{var or__3824__auto____122339 = (cljs.core._invoke["_"]);
if(or__3824__auto____122339)
{return or__3824__auto____122339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____122340 = this$;
if(and__3822__auto____122340)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____122340;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5628__auto____122341 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122342 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122341)]);
if(or__3824__auto____122342)
{return or__3824__auto____122342;
} else
{var or__3824__auto____122343 = (cljs.core._invoke["_"]);
if(or__3824__auto____122343)
{return or__3824__auto____122343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____122344 = this$;
if(and__3822__auto____122344)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____122344;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5628__auto____122345 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122346 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122345)]);
if(or__3824__auto____122346)
{return or__3824__auto____122346;
} else
{var or__3824__auto____122347 = (cljs.core._invoke["_"]);
if(or__3824__auto____122347)
{return or__3824__auto____122347;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____122348 = this$;
if(and__3822__auto____122348)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____122348;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5628__auto____122349 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122350 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122349)]);
if(or__3824__auto____122350)
{return or__3824__auto____122350;
} else
{var or__3824__auto____122351 = (cljs.core._invoke["_"]);
if(or__3824__auto____122351)
{return or__3824__auto____122351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____122352 = this$;
if(and__3822__auto____122352)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____122352;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5628__auto____122353 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122354 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122353)]);
if(or__3824__auto____122354)
{return or__3824__auto____122354;
} else
{var or__3824__auto____122355 = (cljs.core._invoke["_"]);
if(or__3824__auto____122355)
{return or__3824__auto____122355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____122356 = this$;
if(and__3822__auto____122356)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____122356;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5628__auto____122357 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122358 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122357)]);
if(or__3824__auto____122358)
{return or__3824__auto____122358;
} else
{var or__3824__auto____122359 = (cljs.core._invoke["_"]);
if(or__3824__auto____122359)
{return or__3824__auto____122359;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____122360 = this$;
if(and__3822__auto____122360)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____122360;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5628__auto____122361 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122362 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122361)]);
if(or__3824__auto____122362)
{return or__3824__auto____122362;
} else
{var or__3824__auto____122363 = (cljs.core._invoke["_"]);
if(or__3824__auto____122363)
{return or__3824__auto____122363;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____122364 = this$;
if(and__3822__auto____122364)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____122364;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5628__auto____122365 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122366 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122365)]);
if(or__3824__auto____122366)
{return or__3824__auto____122366;
} else
{var or__3824__auto____122367 = (cljs.core._invoke["_"]);
if(or__3824__auto____122367)
{return or__3824__auto____122367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____122368 = this$;
if(and__3822__auto____122368)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____122368;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5628__auto____122369 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122370 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122369)]);
if(or__3824__auto____122370)
{return or__3824__auto____122370;
} else
{var or__3824__auto____122371 = (cljs.core._invoke["_"]);
if(or__3824__auto____122371)
{return or__3824__auto____122371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____122372 = this$;
if(and__3822__auto____122372)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____122372;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5628__auto____122373 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122374 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122373)]);
if(or__3824__auto____122374)
{return or__3824__auto____122374;
} else
{var or__3824__auto____122375 = (cljs.core._invoke["_"]);
if(or__3824__auto____122375)
{return or__3824__auto____122375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____122376 = this$;
if(and__3822__auto____122376)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____122376;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5628__auto____122377 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122378 = (cljs.core._invoke[goog.typeOf(x__5628__auto____122377)]);
if(or__3824__auto____122378)
{return or__3824__auto____122378;
} else
{var or__3824__auto____122379 = (cljs.core._invoke["_"]);
if(or__3824__auto____122379)
{return or__3824__auto____122379;
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
if((function (){var and__3822__auto____122384 = coll;
if(and__3822__auto____122384)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____122384;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5628__auto____122385 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122386 = (cljs.core._count[goog.typeOf(x__5628__auto____122385)]);
if(or__3824__auto____122386)
{return or__3824__auto____122386;
} else
{var or__3824__auto____122387 = (cljs.core._count["_"]);
if(or__3824__auto____122387)
{return or__3824__auto____122387;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____122392 = coll;
if(and__3822__auto____122392)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____122392;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5628__auto____122393 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122394 = (cljs.core._empty[goog.typeOf(x__5628__auto____122393)]);
if(or__3824__auto____122394)
{return or__3824__auto____122394;
} else
{var or__3824__auto____122395 = (cljs.core._empty["_"]);
if(or__3824__auto____122395)
{return or__3824__auto____122395;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____122400 = coll;
if(and__3822__auto____122400)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____122400;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5628__auto____122401 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122402 = (cljs.core._conj[goog.typeOf(x__5628__auto____122401)]);
if(or__3824__auto____122402)
{return or__3824__auto____122402;
} else
{var or__3824__auto____122403 = (cljs.core._conj["_"]);
if(or__3824__auto____122403)
{return or__3824__auto____122403;
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
if((function (){var and__3822__auto____122412 = coll;
if(and__3822__auto____122412)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____122412;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5628__auto____122413 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122414 = (cljs.core._nth[goog.typeOf(x__5628__auto____122413)]);
if(or__3824__auto____122414)
{return or__3824__auto____122414;
} else
{var or__3824__auto____122415 = (cljs.core._nth["_"]);
if(or__3824__auto____122415)
{return or__3824__auto____122415;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____122416 = coll;
if(and__3822__auto____122416)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____122416;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5628__auto____122417 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122418 = (cljs.core._nth[goog.typeOf(x__5628__auto____122417)]);
if(or__3824__auto____122418)
{return or__3824__auto____122418;
} else
{var or__3824__auto____122419 = (cljs.core._nth["_"]);
if(or__3824__auto____122419)
{return or__3824__auto____122419;
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
if((function (){var and__3822__auto____122424 = coll;
if(and__3822__auto____122424)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____122424;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5628__auto____122425 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122426 = (cljs.core._first[goog.typeOf(x__5628__auto____122425)]);
if(or__3824__auto____122426)
{return or__3824__auto____122426;
} else
{var or__3824__auto____122427 = (cljs.core._first["_"]);
if(or__3824__auto____122427)
{return or__3824__auto____122427;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____122432 = coll;
if(and__3822__auto____122432)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____122432;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5628__auto____122433 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122434 = (cljs.core._rest[goog.typeOf(x__5628__auto____122433)]);
if(or__3824__auto____122434)
{return or__3824__auto____122434;
} else
{var or__3824__auto____122435 = (cljs.core._rest["_"]);
if(or__3824__auto____122435)
{return or__3824__auto____122435;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____122440 = coll;
if(and__3822__auto____122440)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____122440;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5628__auto____122441 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122442 = (cljs.core._next[goog.typeOf(x__5628__auto____122441)]);
if(or__3824__auto____122442)
{return or__3824__auto____122442;
} else
{var or__3824__auto____122443 = (cljs.core._next["_"]);
if(or__3824__auto____122443)
{return or__3824__auto____122443;
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
if((function (){var and__3822__auto____122452 = o;
if(and__3822__auto____122452)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____122452;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5628__auto____122453 = (((o == null))?null:o);
return (function (){var or__3824__auto____122454 = (cljs.core._lookup[goog.typeOf(x__5628__auto____122453)]);
if(or__3824__auto____122454)
{return or__3824__auto____122454;
} else
{var or__3824__auto____122455 = (cljs.core._lookup["_"]);
if(or__3824__auto____122455)
{return or__3824__auto____122455;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____122456 = o;
if(and__3822__auto____122456)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____122456;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5628__auto____122457 = (((o == null))?null:o);
return (function (){var or__3824__auto____122458 = (cljs.core._lookup[goog.typeOf(x__5628__auto____122457)]);
if(or__3824__auto____122458)
{return or__3824__auto____122458;
} else
{var or__3824__auto____122459 = (cljs.core._lookup["_"]);
if(or__3824__auto____122459)
{return or__3824__auto____122459;
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
if((function (){var and__3822__auto____122464 = coll;
if(and__3822__auto____122464)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____122464;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5628__auto____122465 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122466 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5628__auto____122465)]);
if(or__3824__auto____122466)
{return or__3824__auto____122466;
} else
{var or__3824__auto____122467 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____122467)
{return or__3824__auto____122467;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____122472 = coll;
if(and__3822__auto____122472)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____122472;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5628__auto____122473 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122474 = (cljs.core._assoc[goog.typeOf(x__5628__auto____122473)]);
if(or__3824__auto____122474)
{return or__3824__auto____122474;
} else
{var or__3824__auto____122475 = (cljs.core._assoc["_"]);
if(or__3824__auto____122475)
{return or__3824__auto____122475;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____122480 = coll;
if(and__3822__auto____122480)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____122480;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5628__auto____122481 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122482 = (cljs.core._dissoc[goog.typeOf(x__5628__auto____122481)]);
if(or__3824__auto____122482)
{return or__3824__auto____122482;
} else
{var or__3824__auto____122483 = (cljs.core._dissoc["_"]);
if(or__3824__auto____122483)
{return or__3824__auto____122483;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____122488 = coll;
if(and__3822__auto____122488)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____122488;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5628__auto____122489 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122490 = (cljs.core._key[goog.typeOf(x__5628__auto____122489)]);
if(or__3824__auto____122490)
{return or__3824__auto____122490;
} else
{var or__3824__auto____122491 = (cljs.core._key["_"]);
if(or__3824__auto____122491)
{return or__3824__auto____122491;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____122496 = coll;
if(and__3822__auto____122496)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____122496;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5628__auto____122497 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122498 = (cljs.core._val[goog.typeOf(x__5628__auto____122497)]);
if(or__3824__auto____122498)
{return or__3824__auto____122498;
} else
{var or__3824__auto____122499 = (cljs.core._val["_"]);
if(or__3824__auto____122499)
{return or__3824__auto____122499;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____122504 = coll;
if(and__3822__auto____122504)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____122504;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5628__auto____122505 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122506 = (cljs.core._disjoin[goog.typeOf(x__5628__auto____122505)]);
if(or__3824__auto____122506)
{return or__3824__auto____122506;
} else
{var or__3824__auto____122507 = (cljs.core._disjoin["_"]);
if(or__3824__auto____122507)
{return or__3824__auto____122507;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____122512 = coll;
if(and__3822__auto____122512)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____122512;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5628__auto____122513 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122514 = (cljs.core._peek[goog.typeOf(x__5628__auto____122513)]);
if(or__3824__auto____122514)
{return or__3824__auto____122514;
} else
{var or__3824__auto____122515 = (cljs.core._peek["_"]);
if(or__3824__auto____122515)
{return or__3824__auto____122515;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____122520 = coll;
if(and__3822__auto____122520)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____122520;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5628__auto____122521 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122522 = (cljs.core._pop[goog.typeOf(x__5628__auto____122521)]);
if(or__3824__auto____122522)
{return or__3824__auto____122522;
} else
{var or__3824__auto____122523 = (cljs.core._pop["_"]);
if(or__3824__auto____122523)
{return or__3824__auto____122523;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____122528 = coll;
if(and__3822__auto____122528)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____122528;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5628__auto____122529 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122530 = (cljs.core._assoc_n[goog.typeOf(x__5628__auto____122529)]);
if(or__3824__auto____122530)
{return or__3824__auto____122530;
} else
{var or__3824__auto____122531 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____122531)
{return or__3824__auto____122531;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____122536 = o;
if(and__3822__auto____122536)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____122536;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5628__auto____122537 = (((o == null))?null:o);
return (function (){var or__3824__auto____122538 = (cljs.core._deref[goog.typeOf(x__5628__auto____122537)]);
if(or__3824__auto____122538)
{return or__3824__auto____122538;
} else
{var or__3824__auto____122539 = (cljs.core._deref["_"]);
if(or__3824__auto____122539)
{return or__3824__auto____122539;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____122544 = o;
if(and__3822__auto____122544)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____122544;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5628__auto____122545 = (((o == null))?null:o);
return (function (){var or__3824__auto____122546 = (cljs.core._deref_with_timeout[goog.typeOf(x__5628__auto____122545)]);
if(or__3824__auto____122546)
{return or__3824__auto____122546;
} else
{var or__3824__auto____122547 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____122547)
{return or__3824__auto____122547;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____122552 = o;
if(and__3822__auto____122552)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____122552;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5628__auto____122553 = (((o == null))?null:o);
return (function (){var or__3824__auto____122554 = (cljs.core._meta[goog.typeOf(x__5628__auto____122553)]);
if(or__3824__auto____122554)
{return or__3824__auto____122554;
} else
{var or__3824__auto____122555 = (cljs.core._meta["_"]);
if(or__3824__auto____122555)
{return or__3824__auto____122555;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____122560 = o;
if(and__3822__auto____122560)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____122560;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5628__auto____122561 = (((o == null))?null:o);
return (function (){var or__3824__auto____122562 = (cljs.core._with_meta[goog.typeOf(x__5628__auto____122561)]);
if(or__3824__auto____122562)
{return or__3824__auto____122562;
} else
{var or__3824__auto____122563 = (cljs.core._with_meta["_"]);
if(or__3824__auto____122563)
{return or__3824__auto____122563;
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
if((function (){var and__3822__auto____122572 = coll;
if(and__3822__auto____122572)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____122572;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5628__auto____122573 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122574 = (cljs.core._reduce[goog.typeOf(x__5628__auto____122573)]);
if(or__3824__auto____122574)
{return or__3824__auto____122574;
} else
{var or__3824__auto____122575 = (cljs.core._reduce["_"]);
if(or__3824__auto____122575)
{return or__3824__auto____122575;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____122576 = coll;
if(and__3822__auto____122576)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____122576;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5628__auto____122577 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122578 = (cljs.core._reduce[goog.typeOf(x__5628__auto____122577)]);
if(or__3824__auto____122578)
{return or__3824__auto____122578;
} else
{var or__3824__auto____122579 = (cljs.core._reduce["_"]);
if(or__3824__auto____122579)
{return or__3824__auto____122579;
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
if((function (){var and__3822__auto____122584 = coll;
if(and__3822__auto____122584)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____122584;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5628__auto____122585 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122586 = (cljs.core._kv_reduce[goog.typeOf(x__5628__auto____122585)]);
if(or__3824__auto____122586)
{return or__3824__auto____122586;
} else
{var or__3824__auto____122587 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____122587)
{return or__3824__auto____122587;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____122592 = o;
if(and__3822__auto____122592)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____122592;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5628__auto____122593 = (((o == null))?null:o);
return (function (){var or__3824__auto____122594 = (cljs.core._equiv[goog.typeOf(x__5628__auto____122593)]);
if(or__3824__auto____122594)
{return or__3824__auto____122594;
} else
{var or__3824__auto____122595 = (cljs.core._equiv["_"]);
if(or__3824__auto____122595)
{return or__3824__auto____122595;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____122600 = o;
if(and__3822__auto____122600)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____122600;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5628__auto____122601 = (((o == null))?null:o);
return (function (){var or__3824__auto____122602 = (cljs.core._hash[goog.typeOf(x__5628__auto____122601)]);
if(or__3824__auto____122602)
{return or__3824__auto____122602;
} else
{var or__3824__auto____122603 = (cljs.core._hash["_"]);
if(or__3824__auto____122603)
{return or__3824__auto____122603;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____122608 = o;
if(and__3822__auto____122608)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____122608;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5628__auto____122609 = (((o == null))?null:o);
return (function (){var or__3824__auto____122610 = (cljs.core._seq[goog.typeOf(x__5628__auto____122609)]);
if(or__3824__auto____122610)
{return or__3824__auto____122610;
} else
{var or__3824__auto____122611 = (cljs.core._seq["_"]);
if(or__3824__auto____122611)
{return or__3824__auto____122611;
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
if((function (){var and__3822__auto____122616 = coll;
if(and__3822__auto____122616)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____122616;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5628__auto____122617 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122618 = (cljs.core._rseq[goog.typeOf(x__5628__auto____122617)]);
if(or__3824__auto____122618)
{return or__3824__auto____122618;
} else
{var or__3824__auto____122619 = (cljs.core._rseq["_"]);
if(or__3824__auto____122619)
{return or__3824__auto____122619;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____122624 = coll;
if(and__3822__auto____122624)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____122624;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5628__auto____122625 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122626 = (cljs.core._sorted_seq[goog.typeOf(x__5628__auto____122625)]);
if(or__3824__auto____122626)
{return or__3824__auto____122626;
} else
{var or__3824__auto____122627 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____122627)
{return or__3824__auto____122627;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____122632 = coll;
if(and__3822__auto____122632)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____122632;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5628__auto____122633 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122634 = (cljs.core._sorted_seq_from[goog.typeOf(x__5628__auto____122633)]);
if(or__3824__auto____122634)
{return or__3824__auto____122634;
} else
{var or__3824__auto____122635 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____122635)
{return or__3824__auto____122635;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____122640 = coll;
if(and__3822__auto____122640)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____122640;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5628__auto____122641 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122642 = (cljs.core._entry_key[goog.typeOf(x__5628__auto____122641)]);
if(or__3824__auto____122642)
{return or__3824__auto____122642;
} else
{var or__3824__auto____122643 = (cljs.core._entry_key["_"]);
if(or__3824__auto____122643)
{return or__3824__auto____122643;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____122648 = coll;
if(and__3822__auto____122648)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____122648;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5628__auto____122649 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122650 = (cljs.core._comparator[goog.typeOf(x__5628__auto____122649)]);
if(or__3824__auto____122650)
{return or__3824__auto____122650;
} else
{var or__3824__auto____122651 = (cljs.core._comparator["_"]);
if(or__3824__auto____122651)
{return or__3824__auto____122651;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____122656 = o;
if(and__3822__auto____122656)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____122656;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5628__auto____122657 = (((o == null))?null:o);
return (function (){var or__3824__auto____122658 = (cljs.core._pr_seq[goog.typeOf(x__5628__auto____122657)]);
if(or__3824__auto____122658)
{return or__3824__auto____122658;
} else
{var or__3824__auto____122659 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____122659)
{return or__3824__auto____122659;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____122664 = writer;
if(and__3822__auto____122664)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____122664;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5628__auto____122665 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____122666 = (cljs.core._write[goog.typeOf(x__5628__auto____122665)]);
if(or__3824__auto____122666)
{return or__3824__auto____122666;
} else
{var or__3824__auto____122667 = (cljs.core._write["_"]);
if(or__3824__auto____122667)
{return or__3824__auto____122667;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____122672 = writer;
if(and__3822__auto____122672)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____122672;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5628__auto____122673 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____122674 = (cljs.core._flush[goog.typeOf(x__5628__auto____122673)]);
if(or__3824__auto____122674)
{return or__3824__auto____122674;
} else
{var or__3824__auto____122675 = (cljs.core._flush["_"]);
if(or__3824__auto____122675)
{return or__3824__auto____122675;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____122680 = o;
if(and__3822__auto____122680)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____122680;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5628__auto____122681 = (((o == null))?null:o);
return (function (){var or__3824__auto____122682 = (cljs.core._pr_writer[goog.typeOf(x__5628__auto____122681)]);
if(or__3824__auto____122682)
{return or__3824__auto____122682;
} else
{var or__3824__auto____122683 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____122683)
{return or__3824__auto____122683;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____122688 = d;
if(and__3822__auto____122688)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____122688;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5628__auto____122689 = (((d == null))?null:d);
return (function (){var or__3824__auto____122690 = (cljs.core._realized_QMARK_[goog.typeOf(x__5628__auto____122689)]);
if(or__3824__auto____122690)
{return or__3824__auto____122690;
} else
{var or__3824__auto____122691 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____122691)
{return or__3824__auto____122691;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____122696 = this$;
if(and__3822__auto____122696)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____122696;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5628__auto____122697 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122698 = (cljs.core._notify_watches[goog.typeOf(x__5628__auto____122697)]);
if(or__3824__auto____122698)
{return or__3824__auto____122698;
} else
{var or__3824__auto____122699 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____122699)
{return or__3824__auto____122699;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____122704 = this$;
if(and__3822__auto____122704)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____122704;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5628__auto____122705 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122706 = (cljs.core._add_watch[goog.typeOf(x__5628__auto____122705)]);
if(or__3824__auto____122706)
{return or__3824__auto____122706;
} else
{var or__3824__auto____122707 = (cljs.core._add_watch["_"]);
if(or__3824__auto____122707)
{return or__3824__auto____122707;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____122712 = this$;
if(and__3822__auto____122712)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____122712;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5628__auto____122713 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____122714 = (cljs.core._remove_watch[goog.typeOf(x__5628__auto____122713)]);
if(or__3824__auto____122714)
{return or__3824__auto____122714;
} else
{var or__3824__auto____122715 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____122715)
{return or__3824__auto____122715;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____122720 = coll;
if(and__3822__auto____122720)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____122720;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5628__auto____122721 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122722 = (cljs.core._as_transient[goog.typeOf(x__5628__auto____122721)]);
if(or__3824__auto____122722)
{return or__3824__auto____122722;
} else
{var or__3824__auto____122723 = (cljs.core._as_transient["_"]);
if(or__3824__auto____122723)
{return or__3824__auto____122723;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____122728 = tcoll;
if(and__3822__auto____122728)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____122728;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5628__auto____122729 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122730 = (cljs.core._conj_BANG_[goog.typeOf(x__5628__auto____122729)]);
if(or__3824__auto____122730)
{return or__3824__auto____122730;
} else
{var or__3824__auto____122731 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____122731)
{return or__3824__auto____122731;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____122736 = tcoll;
if(and__3822__auto____122736)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____122736;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5628__auto____122737 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122738 = (cljs.core._persistent_BANG_[goog.typeOf(x__5628__auto____122737)]);
if(or__3824__auto____122738)
{return or__3824__auto____122738;
} else
{var or__3824__auto____122739 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____122739)
{return or__3824__auto____122739;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____122744 = tcoll;
if(and__3822__auto____122744)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____122744;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5628__auto____122745 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122746 = (cljs.core._assoc_BANG_[goog.typeOf(x__5628__auto____122745)]);
if(or__3824__auto____122746)
{return or__3824__auto____122746;
} else
{var or__3824__auto____122747 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____122747)
{return or__3824__auto____122747;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____122752 = tcoll;
if(and__3822__auto____122752)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____122752;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5628__auto____122753 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122754 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5628__auto____122753)]);
if(or__3824__auto____122754)
{return or__3824__auto____122754;
} else
{var or__3824__auto____122755 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____122755)
{return or__3824__auto____122755;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____122760 = tcoll;
if(and__3822__auto____122760)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____122760;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5628__auto____122761 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122762 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5628__auto____122761)]);
if(or__3824__auto____122762)
{return or__3824__auto____122762;
} else
{var or__3824__auto____122763 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____122763)
{return or__3824__auto____122763;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____122768 = tcoll;
if(and__3822__auto____122768)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____122768;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5628__auto____122769 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122770 = (cljs.core._pop_BANG_[goog.typeOf(x__5628__auto____122769)]);
if(or__3824__auto____122770)
{return or__3824__auto____122770;
} else
{var or__3824__auto____122771 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____122771)
{return or__3824__auto____122771;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____122776 = tcoll;
if(and__3822__auto____122776)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____122776;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5628__auto____122777 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____122778 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5628__auto____122777)]);
if(or__3824__auto____122778)
{return or__3824__auto____122778;
} else
{var or__3824__auto____122779 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____122779)
{return or__3824__auto____122779;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____122784 = x;
if(and__3822__auto____122784)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____122784;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5628__auto____122785 = (((x == null))?null:x);
return (function (){var or__3824__auto____122786 = (cljs.core._compare[goog.typeOf(x__5628__auto____122785)]);
if(or__3824__auto____122786)
{return or__3824__auto____122786;
} else
{var or__3824__auto____122787 = (cljs.core._compare["_"]);
if(or__3824__auto____122787)
{return or__3824__auto____122787;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____122792 = coll;
if(and__3822__auto____122792)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____122792;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5628__auto____122793 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122794 = (cljs.core._drop_first[goog.typeOf(x__5628__auto____122793)]);
if(or__3824__auto____122794)
{return or__3824__auto____122794;
} else
{var or__3824__auto____122795 = (cljs.core._drop_first["_"]);
if(or__3824__auto____122795)
{return or__3824__auto____122795;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____122800 = coll;
if(and__3822__auto____122800)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____122800;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5628__auto____122801 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122802 = (cljs.core._chunked_first[goog.typeOf(x__5628__auto____122801)]);
if(or__3824__auto____122802)
{return or__3824__auto____122802;
} else
{var or__3824__auto____122803 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____122803)
{return or__3824__auto____122803;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____122808 = coll;
if(and__3822__auto____122808)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____122808;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5628__auto____122809 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122810 = (cljs.core._chunked_rest[goog.typeOf(x__5628__auto____122809)]);
if(or__3824__auto____122810)
{return or__3824__auto____122810;
} else
{var or__3824__auto____122811 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____122811)
{return or__3824__auto____122811;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____122816 = coll;
if(and__3822__auto____122816)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____122816;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5628__auto____122817 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____122818 = (cljs.core._chunked_next[goog.typeOf(x__5628__auto____122817)]);
if(or__3824__auto____122818)
{return or__3824__auto____122818;
} else
{var or__3824__auto____122819 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____122819)
{return or__3824__auto____122819;
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
{if((function (){var G__122823__122824 = coll;
if(G__122823__122824)
{if((function (){var or__3824__auto____122825 = (G__122823__122824.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____122825)
{return or__3824__auto____122825;
} else
{return G__122823__122824.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__122823__122824.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__122823__122824);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__122823__122824);
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
{if((function (){var G__122830__122831 = coll;
if(G__122830__122831)
{if((function (){var or__3824__auto____122832 = (G__122830__122831.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____122832)
{return or__3824__auto____122832;
} else
{return G__122830__122831.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__122830__122831.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__122830__122831);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__122830__122831);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__122833 = cljs.core.seq.call(null,coll);
if((s__122833 == null))
{return null;
} else
{return cljs.core._first.call(null,s__122833);
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
{if((function (){var G__122838__122839 = coll;
if(G__122838__122839)
{if((function (){var or__3824__auto____122840 = (G__122838__122839.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____122840)
{return or__3824__auto____122840;
} else
{return G__122838__122839.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__122838__122839.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__122838__122839);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__122838__122839);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__122841 = cljs.core.seq.call(null,coll);
if(!((s__122841 == null)))
{return cljs.core._rest.call(null,s__122841);
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
{if((function (){var G__122845__122846 = coll;
if(G__122845__122846)
{if((function (){var or__3824__auto____122847 = (G__122845__122846.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____122847)
{return or__3824__auto____122847;
} else
{return G__122845__122846.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__122845__122846.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__122845__122846);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__122845__122846);
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
var or__3824__auto____122849 = (x === y);
if(or__3824__auto____122849)
{return or__3824__auto____122849;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__122850__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__122851 = y;
var G__122852 = cljs.core.first.call(null,more);
var G__122853 = cljs.core.next.call(null,more);
x = G__122851;
y = G__122852;
more = G__122853;
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
var G__122850 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__122850__delegate.call(this, x, y, more);
};
G__122850.cljs$lang$maxFixedArity = 2;
G__122850.cljs$lang$applyTo = (function (arglist__122854){
var x = cljs.core.first(arglist__122854);
var y = cljs.core.first(cljs.core.next(arglist__122854));
var more = cljs.core.rest(cljs.core.next(arglist__122854));
return G__122850__delegate(x, y, more);
});
G__122850.cljs$lang$arity$variadic = G__122850__delegate;
return G__122850;
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
var G__122855 = null;
var G__122855__2 = (function (o,k){
return null;
});
var G__122855__3 = (function (o,k,not_found){
return not_found;
});
G__122855 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__122855__2.call(this,o,k);
case 3:
return G__122855__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__122855;
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
var G__122856 = null;
var G__122856__2 = (function (_,f){
return f.call(null);
});
var G__122856__3 = (function (_,f,start){
return start;
});
G__122856 = function(_,f,start){
switch(arguments.length){
case 2:
return G__122856__2.call(this,_,f);
case 3:
return G__122856__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__122856;
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
var G__122857 = null;
var G__122857__2 = (function (_,n){
return null;
});
var G__122857__3 = (function (_,n,not_found){
return not_found;
});
G__122857 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__122857__2.call(this,_,n);
case 3:
return G__122857__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__122857;
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
var and__3822__auto____122858 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____122858)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____122858;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__122859 = this;
return this__122859.val;
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
var cnt__122872 = cljs.core._count.call(null,cicoll);
if((cnt__122872 === 0))
{return f.call(null);
} else
{var val__122873 = cljs.core._nth.call(null,cicoll,0);
var n__122874 = 1;
while(true){
if((n__122874 < cnt__122872))
{var nval__122875 = f.call(null,val__122873,cljs.core._nth.call(null,cicoll,n__122874));
if(cljs.core.reduced_QMARK_.call(null,nval__122875))
{return cljs.core.deref.call(null,nval__122875);
} else
{{
var G__122884 = nval__122875;
var G__122885 = (n__122874 + 1);
val__122873 = G__122884;
n__122874 = G__122885;
continue;
}
}
} else
{return val__122873;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__122876 = cljs.core._count.call(null,cicoll);
var val__122877 = val;
var n__122878 = 0;
while(true){
if((n__122878 < cnt__122876))
{var nval__122879 = f.call(null,val__122877,cljs.core._nth.call(null,cicoll,n__122878));
if(cljs.core.reduced_QMARK_.call(null,nval__122879))
{return cljs.core.deref.call(null,nval__122879);
} else
{{
var G__122886 = nval__122879;
var G__122887 = (n__122878 + 1);
val__122877 = G__122886;
n__122878 = G__122887;
continue;
}
}
} else
{return val__122877;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__122880 = cljs.core._count.call(null,cicoll);
var val__122881 = val;
var n__122882 = idx;
while(true){
if((n__122882 < cnt__122880))
{var nval__122883 = f.call(null,val__122881,cljs.core._nth.call(null,cicoll,n__122882));
if(cljs.core.reduced_QMARK_.call(null,nval__122883))
{return cljs.core.deref.call(null,nval__122883);
} else
{{
var G__122888 = nval__122883;
var G__122889 = (n__122882 + 1);
val__122881 = G__122888;
n__122882 = G__122889;
continue;
}
}
} else
{return val__122881;
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
var cnt__122902 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__122903 = (arr[0]);
var n__122904 = 1;
while(true){
if((n__122904 < cnt__122902))
{var nval__122905 = f.call(null,val__122903,(arr[n__122904]));
if(cljs.core.reduced_QMARK_.call(null,nval__122905))
{return cljs.core.deref.call(null,nval__122905);
} else
{{
var G__122914 = nval__122905;
var G__122915 = (n__122904 + 1);
val__122903 = G__122914;
n__122904 = G__122915;
continue;
}
}
} else
{return val__122903;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__122906 = arr.length;
var val__122907 = val;
var n__122908 = 0;
while(true){
if((n__122908 < cnt__122906))
{var nval__122909 = f.call(null,val__122907,(arr[n__122908]));
if(cljs.core.reduced_QMARK_.call(null,nval__122909))
{return cljs.core.deref.call(null,nval__122909);
} else
{{
var G__122916 = nval__122909;
var G__122917 = (n__122908 + 1);
val__122907 = G__122916;
n__122908 = G__122917;
continue;
}
}
} else
{return val__122907;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__122910 = arr.length;
var val__122911 = val;
var n__122912 = idx;
while(true){
if((n__122912 < cnt__122910))
{var nval__122913 = f.call(null,val__122911,(arr[n__122912]));
if(cljs.core.reduced_QMARK_.call(null,nval__122913))
{return cljs.core.deref.call(null,nval__122913);
} else
{{
var G__122918 = nval__122913;
var G__122919 = (n__122912 + 1);
val__122911 = G__122918;
n__122912 = G__122919;
continue;
}
}
} else
{return val__122911;
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
var G__122923__122924 = x;
if(G__122923__122924)
{if((function (){var or__3824__auto____122925 = (G__122923__122924.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____122925)
{return or__3824__auto____122925;
} else
{return G__122923__122924.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__122923__122924.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__122923__122924);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__122923__122924);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__122929__122930 = x;
if(G__122929__122930)
{if((function (){var or__3824__auto____122931 = (G__122929__122930.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____122931)
{return or__3824__auto____122931;
} else
{return G__122929__122930.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__122929__122930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__122929__122930);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__122929__122930);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__122932 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__122933 = this;
if(((this__122933.i + 1) < this__122933.a.length))
{return (new cljs.core.IndexedSeq(this__122933.a,(this__122933.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__122934 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__122935 = this;
var c__122936 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__122936 > 0))
{return (new cljs.core.RSeq(coll,(c__122936 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__122937 = this;
var this__122938 = this;
return cljs.core.pr_str.call(null,this__122938);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__122939 = this;
if(cljs.core.counted_QMARK_.call(null,this__122939.a))
{return cljs.core.ci_reduce.call(null,this__122939.a,f,(this__122939.a[this__122939.i]),(this__122939.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__122939.a[this__122939.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__122940 = this;
if(cljs.core.counted_QMARK_.call(null,this__122940.a))
{return cljs.core.ci_reduce.call(null,this__122940.a,f,start,this__122940.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__122941 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__122942 = this;
return (this__122942.a.length - this__122942.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__122943 = this;
return (this__122943.a[this__122943.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__122944 = this;
if(((this__122944.i + 1) < this__122944.a.length))
{return (new cljs.core.IndexedSeq(this__122944.a,(this__122944.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__122945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__122946 = this;
var i__122947 = (n + this__122946.i);
if((i__122947 < this__122946.a.length))
{return (this__122946.a[i__122947]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__122948 = this;
var i__122949 = (n + this__122948.i);
if((i__122949 < this__122948.a.length))
{return (this__122948.a[i__122949]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__122950 = this;
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
var G__122951 = null;
var G__122951__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__122951__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__122951 = function(array,f,start){
switch(arguments.length){
case 2:
return G__122951__2.call(this,array,f);
case 3:
return G__122951__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__122951;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__122952 = null;
var G__122952__2 = (function (array,k){
return (array[k]);
});
var G__122952__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__122952 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__122952__2.call(this,array,k);
case 3:
return G__122952__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__122952;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__122953 = null;
var G__122953__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__122953__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__122953 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__122953__2.call(this,array,n);
case 3:
return G__122953__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__122953;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__122954 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__122955 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__122956 = this;
var this__122957 = this;
return cljs.core.pr_str.call(null,this__122957);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__122958 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__122959 = this;
return (this__122959.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__122960 = this;
return cljs.core._nth.call(null,this__122960.ci,this__122960.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__122961 = this;
if((this__122961.i > 0))
{return (new cljs.core.RSeq(this__122961.ci,(this__122961.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__122962 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__122963 = this;
return (new cljs.core.RSeq(this__122963.ci,this__122963.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__122964 = this;
return this__122964.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__122965 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__122965.meta);
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
var sn__122967 = cljs.core.next.call(null,s);
if(!((sn__122967 == null)))
{{
var G__122968 = sn__122967;
s = G__122968;
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
var G__122969__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__122970 = conj.call(null,coll,x);
var G__122971 = cljs.core.first.call(null,xs);
var G__122972 = cljs.core.next.call(null,xs);
coll = G__122970;
x = G__122971;
xs = G__122972;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__122969 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__122969__delegate.call(this, coll, x, xs);
};
G__122969.cljs$lang$maxFixedArity = 2;
G__122969.cljs$lang$applyTo = (function (arglist__122973){
var coll = cljs.core.first(arglist__122973);
var x = cljs.core.first(cljs.core.next(arglist__122973));
var xs = cljs.core.rest(cljs.core.next(arglist__122973));
return G__122969__delegate(coll, x, xs);
});
G__122969.cljs$lang$arity$variadic = G__122969__delegate;
return G__122969;
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
var s__122976 = cljs.core.seq.call(null,coll);
var acc__122977 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__122976))
{return (acc__122977 + cljs.core._count.call(null,s__122976));
} else
{{
var G__122978 = cljs.core.next.call(null,s__122976);
var G__122979 = (acc__122977 + 1);
s__122976 = G__122978;
acc__122977 = G__122979;
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
var G__122980 = cljs.core.next.call(null,coll);
var G__122981 = (n - 1);
coll = G__122980;
n = G__122981;
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
var G__122982 = cljs.core.next.call(null,coll);
var G__122983 = (n - 1);
var G__122984 = not_found;
coll = G__122982;
n = G__122983;
not_found = G__122984;
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
{if((function (){var G__122991__122992 = coll;
if(G__122991__122992)
{if((function (){var or__3824__auto____122993 = (G__122991__122992.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____122993)
{return or__3824__auto____122993;
} else
{return G__122991__122992.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__122991__122992.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__122991__122992);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__122991__122992);
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
{if((function (){var G__122994__122995 = coll;
if(G__122994__122995)
{if((function (){var or__3824__auto____122996 = (G__122994__122995.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____122996)
{return or__3824__auto____122996;
} else
{return G__122994__122995.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__122994__122995.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__122994__122995);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__122994__122995);
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
var G__122999__delegate = function (coll,k,v,kvs){
while(true){
var ret__122998 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__123000 = ret__122998;
var G__123001 = cljs.core.first.call(null,kvs);
var G__123002 = cljs.core.second.call(null,kvs);
var G__123003 = cljs.core.nnext.call(null,kvs);
coll = G__123000;
k = G__123001;
v = G__123002;
kvs = G__123003;
continue;
}
} else
{return ret__122998;
}
break;
}
};
var G__122999 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__122999__delegate.call(this, coll, k, v, kvs);
};
G__122999.cljs$lang$maxFixedArity = 3;
G__122999.cljs$lang$applyTo = (function (arglist__123004){
var coll = cljs.core.first(arglist__123004);
var k = cljs.core.first(cljs.core.next(arglist__123004));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123004)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123004)));
return G__122999__delegate(coll, k, v, kvs);
});
G__122999.cljs$lang$arity$variadic = G__122999__delegate;
return G__122999;
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
var G__123007__delegate = function (coll,k,ks){
while(true){
var ret__123006 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__123008 = ret__123006;
var G__123009 = cljs.core.first.call(null,ks);
var G__123010 = cljs.core.next.call(null,ks);
coll = G__123008;
k = G__123009;
ks = G__123010;
continue;
}
} else
{return ret__123006;
}
break;
}
};
var G__123007 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123007__delegate.call(this, coll, k, ks);
};
G__123007.cljs$lang$maxFixedArity = 2;
G__123007.cljs$lang$applyTo = (function (arglist__123011){
var coll = cljs.core.first(arglist__123011);
var k = cljs.core.first(cljs.core.next(arglist__123011));
var ks = cljs.core.rest(cljs.core.next(arglist__123011));
return G__123007__delegate(coll, k, ks);
});
G__123007.cljs$lang$arity$variadic = G__123007__delegate;
return G__123007;
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
if((function (){var G__123015__123016 = o;
if(G__123015__123016)
{if((function (){var or__3824__auto____123017 = (G__123015__123016.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____123017)
{return or__3824__auto____123017;
} else
{return G__123015__123016.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__123015__123016.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__123015__123016);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__123015__123016);
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
var G__123020__delegate = function (coll,k,ks){
while(true){
var ret__123019 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__123021 = ret__123019;
var G__123022 = cljs.core.first.call(null,ks);
var G__123023 = cljs.core.next.call(null,ks);
coll = G__123021;
k = G__123022;
ks = G__123023;
continue;
}
} else
{return ret__123019;
}
break;
}
};
var G__123020 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123020__delegate.call(this, coll, k, ks);
};
G__123020.cljs$lang$maxFixedArity = 2;
G__123020.cljs$lang$applyTo = (function (arglist__123024){
var coll = cljs.core.first(arglist__123024);
var k = cljs.core.first(cljs.core.next(arglist__123024));
var ks = cljs.core.rest(cljs.core.next(arglist__123024));
return G__123020__delegate(coll, k, ks);
});
G__123020.cljs$lang$arity$variadic = G__123020__delegate;
return G__123020;
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
var h__123026 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__123026);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__123026;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__123028 = (cljs.core.string_hash_cache[k]);
if(!((h__123028 == null)))
{return h__123028;
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
if((function (){var and__3822__auto____123030 = goog.isString(o);
if(and__3822__auto____123030)
{return check_cache;
} else
{return and__3822__auto____123030;
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
{var G__123034__123035 = x;
if(G__123034__123035)
{if((function (){var or__3824__auto____123036 = (G__123034__123035.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____123036)
{return or__3824__auto____123036;
} else
{return G__123034__123035.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__123034__123035.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__123034__123035);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__123034__123035);
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
{var G__123040__123041 = x;
if(G__123040__123041)
{if((function (){var or__3824__auto____123042 = (G__123040__123041.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____123042)
{return or__3824__auto____123042;
} else
{return G__123040__123041.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__123040__123041.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__123040__123041);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__123040__123041);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__123046__123047 = x;
if(G__123046__123047)
{if((function (){var or__3824__auto____123048 = (G__123046__123047.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____123048)
{return or__3824__auto____123048;
} else
{return G__123046__123047.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__123046__123047.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__123046__123047);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__123046__123047);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__123052__123053 = x;
if(G__123052__123053)
{if((function (){var or__3824__auto____123054 = (G__123052__123053.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____123054)
{return or__3824__auto____123054;
} else
{return G__123052__123053.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__123052__123053.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__123052__123053);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__123052__123053);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__123058__123059 = x;
if(G__123058__123059)
{if((function (){var or__3824__auto____123060 = (G__123058__123059.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____123060)
{return or__3824__auto____123060;
} else
{return G__123058__123059.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__123058__123059.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__123058__123059);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__123058__123059);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__123064__123065 = x;
if(G__123064__123065)
{if((function (){var or__3824__auto____123066 = (G__123064__123065.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____123066)
{return or__3824__auto____123066;
} else
{return G__123064__123065.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__123064__123065.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__123064__123065);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__123064__123065);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__123070__123071 = x;
if(G__123070__123071)
{if((function (){var or__3824__auto____123072 = (G__123070__123071.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____123072)
{return or__3824__auto____123072;
} else
{return G__123070__123071.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__123070__123071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__123070__123071);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__123070__123071);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__123076__123077 = x;
if(G__123076__123077)
{if((function (){var or__3824__auto____123078 = (G__123076__123077.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____123078)
{return or__3824__auto____123078;
} else
{return G__123076__123077.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__123076__123077.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__123076__123077);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__123076__123077);
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
var G__123079__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__123079 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123079__delegate.call(this, keyvals);
};
G__123079.cljs$lang$maxFixedArity = 0;
G__123079.cljs$lang$applyTo = (function (arglist__123080){
var keyvals = cljs.core.seq(arglist__123080);;
return G__123079__delegate(keyvals);
});
G__123079.cljs$lang$arity$variadic = G__123079__delegate;
return G__123079;
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
var keys__123082 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__123082.push(key);
}));
return keys__123082;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__123086 = i;
var j__123087 = j;
var len__123088 = len;
while(true){
if((len__123088 === 0))
{return to;
} else
{(to[j__123087] = (from[i__123086]));
{
var G__123089 = (i__123086 + 1);
var G__123090 = (j__123087 + 1);
var G__123091 = (len__123088 - 1);
i__123086 = G__123089;
j__123087 = G__123090;
len__123088 = G__123091;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__123095 = (i + (len - 1));
var j__123096 = (j + (len - 1));
var len__123097 = len;
while(true){
if((len__123097 === 0))
{return to;
} else
{(to[j__123096] = (from[i__123095]));
{
var G__123098 = (i__123095 - 1);
var G__123099 = (j__123096 - 1);
var G__123100 = (len__123097 - 1);
i__123095 = G__123098;
j__123096 = G__123099;
len__123097 = G__123100;
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
{var G__123104__123105 = s;
if(G__123104__123105)
{if((function (){var or__3824__auto____123106 = (G__123104__123105.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____123106)
{return or__3824__auto____123106;
} else
{return G__123104__123105.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__123104__123105.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__123104__123105);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__123104__123105);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__123110__123111 = s;
if(G__123110__123111)
{if((function (){var or__3824__auto____123112 = (G__123110__123111.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____123112)
{return or__3824__auto____123112;
} else
{return G__123110__123111.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__123110__123111.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__123110__123111);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__123110__123111);
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
var and__3822__auto____123115 = goog.isString(x);
if(and__3822__auto____123115)
{return !((function (){var or__3824__auto____123116 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____123116)
{return or__3824__auto____123116;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____123115;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____123118 = goog.isString(x);
if(and__3822__auto____123118)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____123118;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____123120 = goog.isString(x);
if(and__3822__auto____123120)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____123120;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____123125 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____123125)
{return or__3824__auto____123125;
} else
{var G__123126__123127 = f;
if(G__123126__123127)
{if((function (){var or__3824__auto____123128 = (G__123126__123127.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____123128)
{return or__3824__auto____123128;
} else
{return G__123126__123127.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__123126__123127.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__123126__123127);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__123126__123127);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____123132 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____123132)
{var and__3822__auto____123133 = !(isNaN(n));
if(and__3822__auto____123133)
{var and__3822__auto____123134 = !((n === Infinity));
if(and__3822__auto____123134)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____123134;
}
} else
{return and__3822__auto____123133;
}
} else
{return and__3822__auto____123132;
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
if((function (){var and__3822__auto____123137 = !((coll == null));
if(and__3822__auto____123137)
{var and__3822__auto____123138 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____123138)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____123138;
}
} else
{return and__3822__auto____123137;
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
var G__123147__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__123143 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__123144 = more;
while(true){
var x__123145 = cljs.core.first.call(null,xs__123144);
var etc__123146 = cljs.core.next.call(null,xs__123144);
if(cljs.core.truth_(xs__123144))
{if(cljs.core.contains_QMARK_.call(null,s__123143,x__123145))
{return false;
} else
{{
var G__123148 = cljs.core.conj.call(null,s__123143,x__123145);
var G__123149 = etc__123146;
s__123143 = G__123148;
xs__123144 = G__123149;
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
var G__123147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123147__delegate.call(this, x, y, more);
};
G__123147.cljs$lang$maxFixedArity = 2;
G__123147.cljs$lang$applyTo = (function (arglist__123150){
var x = cljs.core.first(arglist__123150);
var y = cljs.core.first(cljs.core.next(arglist__123150));
var more = cljs.core.rest(cljs.core.next(arglist__123150));
return G__123147__delegate(x, y, more);
});
G__123147.cljs$lang$arity$variadic = G__123147__delegate;
return G__123147;
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
{if((function (){var G__123154__123155 = x;
if(G__123154__123155)
{if((function (){var or__3824__auto____123156 = (G__123154__123155.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____123156)
{return or__3824__auto____123156;
} else
{return G__123154__123155.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__123154__123155.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__123154__123155);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__123154__123155);
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
var xl__123161 = cljs.core.count.call(null,xs);
var yl__123162 = cljs.core.count.call(null,ys);
if((xl__123161 < yl__123162))
{return -1;
} else
{if((xl__123161 > yl__123162))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__123161,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__123163 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____123164 = (d__123163 === 0);
if(and__3822__auto____123164)
{return ((n + 1) < len);
} else
{return and__3822__auto____123164;
}
})())
{{
var G__123165 = xs;
var G__123166 = ys;
var G__123167 = len;
var G__123168 = (n + 1);
xs = G__123165;
ys = G__123166;
len = G__123167;
n = G__123168;
continue;
}
} else
{return d__123163;
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
var r__123170 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__123170))
{return r__123170;
} else
{if(cljs.core.truth_(r__123170))
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
{var a__123172 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__123172,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__123172);
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
var temp__3971__auto____123178 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____123178)
{var s__123179 = temp__3971__auto____123178;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__123179),cljs.core.next.call(null,s__123179));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__123180 = val;
var coll__123181 = cljs.core.seq.call(null,coll);
while(true){
if(coll__123181)
{var nval__123182 = f.call(null,val__123180,cljs.core.first.call(null,coll__123181));
if(cljs.core.reduced_QMARK_.call(null,nval__123182))
{return cljs.core.deref.call(null,nval__123182);
} else
{{
var G__123183 = nval__123182;
var G__123184 = cljs.core.next.call(null,coll__123181);
val__123180 = G__123183;
coll__123181 = G__123184;
continue;
}
}
} else
{return val__123180;
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
var a__123186 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__123186);
return cljs.core.vec.call(null,a__123186);
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
if((function (){var G__123193__123194 = coll;
if(G__123193__123194)
{if((function (){var or__3824__auto____123195 = (G__123193__123194.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____123195)
{return or__3824__auto____123195;
} else
{return G__123193__123194.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__123193__123194.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__123193__123194);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__123193__123194);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__123196__123197 = coll;
if(G__123196__123197)
{if((function (){var or__3824__auto____123198 = (G__123196__123197.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____123198)
{return or__3824__auto____123198;
} else
{return G__123196__123197.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__123196__123197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__123196__123197);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__123196__123197);
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
var G__123199__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__123199 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123199__delegate.call(this, x, y, more);
};
G__123199.cljs$lang$maxFixedArity = 2;
G__123199.cljs$lang$applyTo = (function (arglist__123200){
var x = cljs.core.first(arglist__123200);
var y = cljs.core.first(cljs.core.next(arglist__123200));
var more = cljs.core.rest(cljs.core.next(arglist__123200));
return G__123199__delegate(x, y, more);
});
G__123199.cljs$lang$arity$variadic = G__123199__delegate;
return G__123199;
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
var G__123201__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__123201 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123201__delegate.call(this, x, y, more);
};
G__123201.cljs$lang$maxFixedArity = 2;
G__123201.cljs$lang$applyTo = (function (arglist__123202){
var x = cljs.core.first(arglist__123202);
var y = cljs.core.first(cljs.core.next(arglist__123202));
var more = cljs.core.rest(cljs.core.next(arglist__123202));
return G__123201__delegate(x, y, more);
});
G__123201.cljs$lang$arity$variadic = G__123201__delegate;
return G__123201;
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
var G__123203__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__123203 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123203__delegate.call(this, x, y, more);
};
G__123203.cljs$lang$maxFixedArity = 2;
G__123203.cljs$lang$applyTo = (function (arglist__123204){
var x = cljs.core.first(arglist__123204);
var y = cljs.core.first(cljs.core.next(arglist__123204));
var more = cljs.core.rest(cljs.core.next(arglist__123204));
return G__123203__delegate(x, y, more);
});
G__123203.cljs$lang$arity$variadic = G__123203__delegate;
return G__123203;
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
var G__123205__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__123205 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123205__delegate.call(this, x, y, more);
};
G__123205.cljs$lang$maxFixedArity = 2;
G__123205.cljs$lang$applyTo = (function (arglist__123206){
var x = cljs.core.first(arglist__123206);
var y = cljs.core.first(cljs.core.next(arglist__123206));
var more = cljs.core.rest(cljs.core.next(arglist__123206));
return G__123205__delegate(x, y, more);
});
G__123205.cljs$lang$arity$variadic = G__123205__delegate;
return G__123205;
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
var G__123207__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__123208 = y;
var G__123209 = cljs.core.first.call(null,more);
var G__123210 = cljs.core.next.call(null,more);
x = G__123208;
y = G__123209;
more = G__123210;
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
var G__123207 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123207__delegate.call(this, x, y, more);
};
G__123207.cljs$lang$maxFixedArity = 2;
G__123207.cljs$lang$applyTo = (function (arglist__123211){
var x = cljs.core.first(arglist__123211);
var y = cljs.core.first(cljs.core.next(arglist__123211));
var more = cljs.core.rest(cljs.core.next(arglist__123211));
return G__123207__delegate(x, y, more);
});
G__123207.cljs$lang$arity$variadic = G__123207__delegate;
return G__123207;
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
var G__123212__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__123213 = y;
var G__123214 = cljs.core.first.call(null,more);
var G__123215 = cljs.core.next.call(null,more);
x = G__123213;
y = G__123214;
more = G__123215;
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
var G__123212 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123212__delegate.call(this, x, y, more);
};
G__123212.cljs$lang$maxFixedArity = 2;
G__123212.cljs$lang$applyTo = (function (arglist__123216){
var x = cljs.core.first(arglist__123216);
var y = cljs.core.first(cljs.core.next(arglist__123216));
var more = cljs.core.rest(cljs.core.next(arglist__123216));
return G__123212__delegate(x, y, more);
});
G__123212.cljs$lang$arity$variadic = G__123212__delegate;
return G__123212;
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
var G__123217__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__123218 = y;
var G__123219 = cljs.core.first.call(null,more);
var G__123220 = cljs.core.next.call(null,more);
x = G__123218;
y = G__123219;
more = G__123220;
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
var G__123217 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123217__delegate.call(this, x, y, more);
};
G__123217.cljs$lang$maxFixedArity = 2;
G__123217.cljs$lang$applyTo = (function (arglist__123221){
var x = cljs.core.first(arglist__123221);
var y = cljs.core.first(cljs.core.next(arglist__123221));
var more = cljs.core.rest(cljs.core.next(arglist__123221));
return G__123217__delegate(x, y, more);
});
G__123217.cljs$lang$arity$variadic = G__123217__delegate;
return G__123217;
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
var G__123222__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__123223 = y;
var G__123224 = cljs.core.first.call(null,more);
var G__123225 = cljs.core.next.call(null,more);
x = G__123223;
y = G__123224;
more = G__123225;
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
var G__123222 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123222__delegate.call(this, x, y, more);
};
G__123222.cljs$lang$maxFixedArity = 2;
G__123222.cljs$lang$applyTo = (function (arglist__123226){
var x = cljs.core.first(arglist__123226);
var y = cljs.core.first(cljs.core.next(arglist__123226));
var more = cljs.core.rest(cljs.core.next(arglist__123226));
return G__123222__delegate(x, y, more);
});
G__123222.cljs$lang$arity$variadic = G__123222__delegate;
return G__123222;
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
var G__123227__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__123227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123227__delegate.call(this, x, y, more);
};
G__123227.cljs$lang$maxFixedArity = 2;
G__123227.cljs$lang$applyTo = (function (arglist__123228){
var x = cljs.core.first(arglist__123228);
var y = cljs.core.first(cljs.core.next(arglist__123228));
var more = cljs.core.rest(cljs.core.next(arglist__123228));
return G__123227__delegate(x, y, more);
});
G__123227.cljs$lang$arity$variadic = G__123227__delegate;
return G__123227;
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
var G__123229__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__123229 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123229__delegate.call(this, x, y, more);
};
G__123229.cljs$lang$maxFixedArity = 2;
G__123229.cljs$lang$applyTo = (function (arglist__123230){
var x = cljs.core.first(arglist__123230);
var y = cljs.core.first(cljs.core.next(arglist__123230));
var more = cljs.core.rest(cljs.core.next(arglist__123230));
return G__123229__delegate(x, y, more);
});
G__123229.cljs$lang$arity$variadic = G__123229__delegate;
return G__123229;
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
var rem__123232 = (n % d);
return cljs.core.fix.call(null,((n - rem__123232) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__123234 = cljs.core.quot.call(null,n,d);
return (n - (d * q__123234));
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
var v__123237 = (v - ((v >> 1) & 1431655765));
var v__123238 = ((v__123237 & 858993459) + ((v__123237 >> 2) & 858993459));
return ((((v__123238 + (v__123238 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__123239__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__123240 = y;
var G__123241 = cljs.core.first.call(null,more);
var G__123242 = cljs.core.next.call(null,more);
x = G__123240;
y = G__123241;
more = G__123242;
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
var G__123239 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123239__delegate.call(this, x, y, more);
};
G__123239.cljs$lang$maxFixedArity = 2;
G__123239.cljs$lang$applyTo = (function (arglist__123243){
var x = cljs.core.first(arglist__123243);
var y = cljs.core.first(cljs.core.next(arglist__123243));
var more = cljs.core.rest(cljs.core.next(arglist__123243));
return G__123239__delegate(x, y, more);
});
G__123239.cljs$lang$arity$variadic = G__123239__delegate;
return G__123239;
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
var n__123247 = n;
var xs__123248 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____123249 = xs__123248;
if(and__3822__auto____123249)
{return (n__123247 > 0);
} else
{return and__3822__auto____123249;
}
})()))
{{
var G__123250 = (n__123247 - 1);
var G__123251 = cljs.core.next.call(null,xs__123248);
n__123247 = G__123250;
xs__123248 = G__123251;
continue;
}
} else
{return xs__123248;
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
var G__123252__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__123253 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__123254 = cljs.core.next.call(null,more);
sb = G__123253;
more = G__123254;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__123252 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__123252__delegate.call(this, x, ys);
};
G__123252.cljs$lang$maxFixedArity = 1;
G__123252.cljs$lang$applyTo = (function (arglist__123255){
var x = cljs.core.first(arglist__123255);
var ys = cljs.core.rest(arglist__123255);
return G__123252__delegate(x, ys);
});
G__123252.cljs$lang$arity$variadic = G__123252__delegate;
return G__123252;
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
var G__123256__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__123257 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__123258 = cljs.core.next.call(null,more);
sb = G__123257;
more = G__123258;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__123256 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__123256__delegate.call(this, x, ys);
};
G__123256.cljs$lang$maxFixedArity = 1;
G__123256.cljs$lang$applyTo = (function (arglist__123259){
var x = cljs.core.first(arglist__123259);
var ys = cljs.core.rest(arglist__123259);
return G__123256__delegate(x, ys);
});
G__123256.cljs$lang$arity$variadic = G__123256__delegate;
return G__123256;
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
var args__123263 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____123262 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____123262)
{return or__3824__auto____123262;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__123263);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__123264){
var fmt = cljs.core.first(arglist__123264);
var args = cljs.core.rest(arglist__123264);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__123267 = cljs.core.seq.call(null,x);
var ys__123268 = cljs.core.seq.call(null,y);
while(true){
if((xs__123267 == null))
{return (ys__123268 == null);
} else
{if((ys__123268 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__123267),cljs.core.first.call(null,ys__123268)))
{{
var G__123269 = cljs.core.next.call(null,xs__123267);
var G__123270 = cljs.core.next.call(null,ys__123268);
xs__123267 = G__123269;
ys__123268 = G__123270;
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
return cljs.core.reduce.call(null,(function (p1__123271_SHARP_,p2__123272_SHARP_){
return cljs.core.hash_combine.call(null,p1__123271_SHARP_,cljs.core.hash.call(null,p2__123272_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__123276 = 0;
var s__123277 = cljs.core.seq.call(null,m);
while(true){
if(s__123277)
{var e__123278 = cljs.core.first.call(null,s__123277);
{
var G__123279 = ((h__123276 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__123278)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__123278)))) % 4503599627370496);
var G__123280 = cljs.core.next.call(null,s__123277);
h__123276 = G__123279;
s__123277 = G__123280;
continue;
}
} else
{return h__123276;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__123284 = 0;
var s__123285 = cljs.core.seq.call(null,s);
while(true){
if(s__123285)
{var e__123286 = cljs.core.first.call(null,s__123285);
{
var G__123287 = ((h__123284 + cljs.core.hash.call(null,e__123286)) % 4503599627370496);
var G__123288 = cljs.core.next.call(null,s__123285);
h__123284 = G__123287;
s__123285 = G__123288;
continue;
}
} else
{return h__123284;
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
var G__123296__123297 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__123296__123297)
{var vec__123298__123299 = cljs.core.first.call(null,G__123296__123297);
var key_name__123300 = cljs.core.nth.call(null,vec__123298__123299,0,null);
var f__123301 = cljs.core.nth.call(null,vec__123298__123299,1,null);
var str_name__123302 = cljs.core.name.call(null,key_name__123300);
(obj[str_name__123302] = f__123301);
{
var G__123303 = cljs.core.next.call(null,G__123296__123297);
G__123296__123297 = G__123303;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__123304 = this;
var h__5444__auto____123305 = this__123304.__hash;
if(!((h__5444__auto____123305 == null)))
{return h__5444__auto____123305;
} else
{var h__5444__auto____123306 = cljs.core.hash_coll.call(null,coll);
this__123304.__hash = h__5444__auto____123306;
return h__5444__auto____123306;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__123307 = this;
if((this__123307.count === 1))
{return null;
} else
{return this__123307.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__123308 = this;
return (new cljs.core.List(this__123308.meta,o,coll,(this__123308.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__123309 = this;
var this__123310 = this;
return cljs.core.pr_str.call(null,this__123310);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__123311 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__123312 = this;
return this__123312.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__123313 = this;
return this__123313.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__123314 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__123315 = this;
return this__123315.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__123316 = this;
if((this__123316.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__123316.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__123317 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__123318 = this;
return (new cljs.core.List(meta,this__123318.first,this__123318.rest,this__123318.count,this__123318.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__123319 = this;
return this__123319.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__123320 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__123321 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__123322 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__123323 = this;
return (new cljs.core.List(this__123323.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__123324 = this;
var this__123325 = this;
return cljs.core.pr_str.call(null,this__123325);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__123326 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__123327 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__123328 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__123329 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__123330 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__123331 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__123332 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__123333 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__123334 = this;
return this__123334.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__123335 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__123339__123340 = coll;
if(G__123339__123340)
{if((function (){var or__3824__auto____123341 = (G__123339__123340.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____123341)
{return or__3824__auto____123341;
} else
{return G__123339__123340.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__123339__123340.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__123339__123340);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__123339__123340);
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
var G__123342__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__123342 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123342__delegate.call(this, x, y, z, items);
};
G__123342.cljs$lang$maxFixedArity = 3;
G__123342.cljs$lang$applyTo = (function (arglist__123343){
var x = cljs.core.first(arglist__123343);
var y = cljs.core.first(cljs.core.next(arglist__123343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123343)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123343)));
return G__123342__delegate(x, y, z, items);
});
G__123342.cljs$lang$arity$variadic = G__123342__delegate;
return G__123342;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__123344 = this;
var h__5444__auto____123345 = this__123344.__hash;
if(!((h__5444__auto____123345 == null)))
{return h__5444__auto____123345;
} else
{var h__5444__auto____123346 = cljs.core.hash_coll.call(null,coll);
this__123344.__hash = h__5444__auto____123346;
return h__5444__auto____123346;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__123347 = this;
if((this__123347.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__123347.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__123348 = this;
return (new cljs.core.Cons(null,o,coll,this__123348.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__123349 = this;
var this__123350 = this;
return cljs.core.pr_str.call(null,this__123350);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__123351 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__123352 = this;
return this__123352.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__123353 = this;
if((this__123353.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__123353.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__123354 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__123355 = this;
return (new cljs.core.Cons(meta,this__123355.first,this__123355.rest,this__123355.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__123356 = this;
return this__123356.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__123357 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__123357.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____123362 = (coll == null);
if(or__3824__auto____123362)
{return or__3824__auto____123362;
} else
{var G__123363__123364 = coll;
if(G__123363__123364)
{if((function (){var or__3824__auto____123365 = (G__123363__123364.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____123365)
{return or__3824__auto____123365;
} else
{return G__123363__123364.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__123363__123364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__123363__123364);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__123363__123364);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__123369__123370 = x;
if(G__123369__123370)
{if((function (){var or__3824__auto____123371 = (G__123369__123370.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____123371)
{return or__3824__auto____123371;
} else
{return G__123369__123370.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__123369__123370.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__123369__123370);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__123369__123370);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__123372 = null;
var G__123372__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__123372__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__123372 = function(string,f,start){
switch(arguments.length){
case 2:
return G__123372__2.call(this,string,f);
case 3:
return G__123372__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__123372;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__123373 = null;
var G__123373__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__123373__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__123373 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__123373__2.call(this,string,k);
case 3:
return G__123373__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__123373;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__123374 = null;
var G__123374__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__123374__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__123374 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__123374__2.call(this,string,n);
case 3:
return G__123374__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__123374;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__123386 = null;
var G__123386__2 = (function (this_sym123377,coll){
var this__123379 = this;
var this_sym123377__123380 = this;
var ___123381 = this_sym123377__123380;
if((coll == null))
{return null;
} else
{var strobj__123382 = coll.strobj;
if((strobj__123382 == null))
{return cljs.core._lookup.call(null,coll,this__123379.k,null);
} else
{return (strobj__123382[this__123379.k]);
}
}
});
var G__123386__3 = (function (this_sym123378,coll,not_found){
var this__123379 = this;
var this_sym123378__123383 = this;
var ___123384 = this_sym123378__123383;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__123379.k,not_found);
}
});
G__123386 = function(this_sym123378,coll,not_found){
switch(arguments.length){
case 2:
return G__123386__2.call(this,this_sym123378,coll);
case 3:
return G__123386__3.call(this,this_sym123378,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__123386;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym123375,args123376){
var this__123385 = this;
return this_sym123375.call.apply(this_sym123375,[this_sym123375].concat(args123376.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__123395 = null;
var G__123395__2 = (function (this_sym123389,coll){
var this_sym123389__123391 = this;
var this__123392 = this_sym123389__123391;
return cljs.core._lookup.call(null,coll,this__123392.toString(),null);
});
var G__123395__3 = (function (this_sym123390,coll,not_found){
var this_sym123390__123393 = this;
var this__123394 = this_sym123390__123393;
return cljs.core._lookup.call(null,coll,this__123394.toString(),not_found);
});
G__123395 = function(this_sym123390,coll,not_found){
switch(arguments.length){
case 2:
return G__123395__2.call(this,this_sym123390,coll);
case 3:
return G__123395__3.call(this,this_sym123390,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__123395;
})()
;
String.prototype.apply = (function (this_sym123387,args123388){
return this_sym123387.call.apply(this_sym123387,[this_sym123387].concat(args123388.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__123397 = lazy_seq.x;
if(lazy_seq.realized)
{return x__123397;
} else
{lazy_seq.x = x__123397.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__123398 = this;
var h__5444__auto____123399 = this__123398.__hash;
if(!((h__5444__auto____123399 == null)))
{return h__5444__auto____123399;
} else
{var h__5444__auto____123400 = cljs.core.hash_coll.call(null,coll);
this__123398.__hash = h__5444__auto____123400;
return h__5444__auto____123400;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__123401 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__123402 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__123403 = this;
var this__123404 = this;
return cljs.core.pr_str.call(null,this__123404);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__123405 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__123406 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__123407 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__123408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__123409 = this;
return (new cljs.core.LazySeq(meta,this__123409.realized,this__123409.x,this__123409.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__123410 = this;
return this__123410.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__123411 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__123411.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__123412 = this;
return this__123412.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__123413 = this;
var ___123414 = this;
(this__123413.buf[this__123413.end] = o);
return this__123413.end = (this__123413.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__123415 = this;
var ___123416 = this;
var ret__123417 = (new cljs.core.ArrayChunk(this__123415.buf,0,this__123415.end));
this__123415.buf = null;
return ret__123417;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__123418 = this;
return cljs.core.array_reduce.call(null,this__123418.arr,f,(this__123418.arr[this__123418.off]),(this__123418.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__123419 = this;
return cljs.core.array_reduce.call(null,this__123419.arr,f,start,this__123419.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__123420 = this;
if((this__123420.off === this__123420.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__123420.arr,(this__123420.off + 1),this__123420.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__123421 = this;
return (this__123421.arr[(this__123421.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__123422 = this;
if((function (){var and__3822__auto____123423 = (i >= 0);
if(and__3822__auto____123423)
{return (i < (this__123422.end - this__123422.off));
} else
{return and__3822__auto____123423;
}
})())
{return (this__123422.arr[(this__123422.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__123424 = this;
return (this__123424.end - this__123424.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__123425 = this;
var h__5444__auto____123426 = this__123425.__hash;
if(!((h__5444__auto____123426 == null)))
{return h__5444__auto____123426;
} else
{var h__5444__auto____123427 = cljs.core.hash_coll.call(null,coll);
this__123425.__hash = h__5444__auto____123427;
return h__5444__auto____123427;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__123428 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__123429 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__123430 = this;
return cljs.core._nth.call(null,this__123430.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__123431 = this;
if((cljs.core._count.call(null,this__123431.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__123431.chunk),this__123431.more,this__123431.meta,null));
} else
{if((this__123431.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__123431.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__123432 = this;
if((this__123432.more == null))
{return null;
} else
{return this__123432.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__123433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__123434 = this;
return (new cljs.core.ChunkedCons(this__123434.chunk,this__123434.more,m,this__123434.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__123435 = this;
return this__123435.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__123436 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__123436.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__123437 = this;
return this__123437.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__123438 = this;
if((this__123438.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__123438.more;
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
if((function (){var G__123442__123443 = s;
if(G__123442__123443)
{if((function (){var or__3824__auto____123444 = (G__123442__123443.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____123444)
{return or__3824__auto____123444;
} else
{return G__123442__123443.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__123442__123443.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__123442__123443);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__123442__123443);
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
var ary__123447 = [];
var s__123448 = s;
while(true){
if(cljs.core.seq.call(null,s__123448))
{ary__123447.push(cljs.core.first.call(null,s__123448));
{
var G__123449 = cljs.core.next.call(null,s__123448);
s__123448 = G__123449;
continue;
}
} else
{return ary__123447;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__123453 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__123454 = 0;
var xs__123455 = cljs.core.seq.call(null,coll);
while(true){
if(xs__123455)
{(ret__123453[i__123454] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__123455)));
{
var G__123456 = (i__123454 + 1);
var G__123457 = cljs.core.next.call(null,xs__123455);
i__123454 = G__123456;
xs__123455 = G__123457;
continue;
}
} else
{}
break;
}
return ret__123453;
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
var a__123465 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__123466 = cljs.core.seq.call(null,init_val_or_seq);
var i__123467 = 0;
var s__123468 = s__123466;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____123469 = s__123468;
if(and__3822__auto____123469)
{return (i__123467 < size);
} else
{return and__3822__auto____123469;
}
})()))
{(a__123465[i__123467] = cljs.core.first.call(null,s__123468));
{
var G__123472 = (i__123467 + 1);
var G__123473 = cljs.core.next.call(null,s__123468);
i__123467 = G__123472;
s__123468 = G__123473;
continue;
}
} else
{return a__123465;
}
break;
}
} else
{var n__5790__auto____123470 = size;
var i__123471 = 0;
while(true){
if((i__123471 < n__5790__auto____123470))
{(a__123465[i__123471] = init_val_or_seq);
{
var G__123474 = (i__123471 + 1);
i__123471 = G__123474;
continue;
}
} else
{}
break;
}
return a__123465;
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
var a__123482 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__123483 = cljs.core.seq.call(null,init_val_or_seq);
var i__123484 = 0;
var s__123485 = s__123483;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____123486 = s__123485;
if(and__3822__auto____123486)
{return (i__123484 < size);
} else
{return and__3822__auto____123486;
}
})()))
{(a__123482[i__123484] = cljs.core.first.call(null,s__123485));
{
var G__123489 = (i__123484 + 1);
var G__123490 = cljs.core.next.call(null,s__123485);
i__123484 = G__123489;
s__123485 = G__123490;
continue;
}
} else
{return a__123482;
}
break;
}
} else
{var n__5790__auto____123487 = size;
var i__123488 = 0;
while(true){
if((i__123488 < n__5790__auto____123487))
{(a__123482[i__123488] = init_val_or_seq);
{
var G__123491 = (i__123488 + 1);
i__123488 = G__123491;
continue;
}
} else
{}
break;
}
return a__123482;
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
var a__123499 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__123500 = cljs.core.seq.call(null,init_val_or_seq);
var i__123501 = 0;
var s__123502 = s__123500;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____123503 = s__123502;
if(and__3822__auto____123503)
{return (i__123501 < size);
} else
{return and__3822__auto____123503;
}
})()))
{(a__123499[i__123501] = cljs.core.first.call(null,s__123502));
{
var G__123506 = (i__123501 + 1);
var G__123507 = cljs.core.next.call(null,s__123502);
i__123501 = G__123506;
s__123502 = G__123507;
continue;
}
} else
{return a__123499;
}
break;
}
} else
{var n__5790__auto____123504 = size;
var i__123505 = 0;
while(true){
if((i__123505 < n__5790__auto____123504))
{(a__123499[i__123505] = init_val_or_seq);
{
var G__123508 = (i__123505 + 1);
i__123505 = G__123508;
continue;
}
} else
{}
break;
}
return a__123499;
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
{var s__123513 = s;
var i__123514 = n;
var sum__123515 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____123516 = (i__123514 > 0);
if(and__3822__auto____123516)
{return cljs.core.seq.call(null,s__123513);
} else
{return and__3822__auto____123516;
}
})()))
{{
var G__123517 = cljs.core.next.call(null,s__123513);
var G__123518 = (i__123514 - 1);
var G__123519 = (sum__123515 + 1);
s__123513 = G__123517;
i__123514 = G__123518;
sum__123515 = G__123519;
continue;
}
} else
{return sum__123515;
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
var s__123524 = cljs.core.seq.call(null,x);
if(s__123524)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__123524))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__123524),concat.call(null,cljs.core.chunk_rest.call(null,s__123524),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__123524),concat.call(null,cljs.core.rest.call(null,s__123524),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__123528__delegate = function (x,y,zs){
var cat__123527 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__123526 = cljs.core.seq.call(null,xys);
if(xys__123526)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__123526))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__123526),cat.call(null,cljs.core.chunk_rest.call(null,xys__123526),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__123526),cat.call(null,cljs.core.rest.call(null,xys__123526),zs));
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
return cat__123527.call(null,concat.call(null,x,y),zs);
};
var G__123528 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123528__delegate.call(this, x, y, zs);
};
G__123528.cljs$lang$maxFixedArity = 2;
G__123528.cljs$lang$applyTo = (function (arglist__123529){
var x = cljs.core.first(arglist__123529);
var y = cljs.core.first(cljs.core.next(arglist__123529));
var zs = cljs.core.rest(cljs.core.next(arglist__123529));
return G__123528__delegate(x, y, zs);
});
G__123528.cljs$lang$arity$variadic = G__123528__delegate;
return G__123528;
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
var G__123530__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__123530 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__123530__delegate.call(this, a, b, c, d, more);
};
G__123530.cljs$lang$maxFixedArity = 4;
G__123530.cljs$lang$applyTo = (function (arglist__123531){
var a = cljs.core.first(arglist__123531);
var b = cljs.core.first(cljs.core.next(arglist__123531));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123531)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123531))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123531))));
return G__123530__delegate(a, b, c, d, more);
});
G__123530.cljs$lang$arity$variadic = G__123530__delegate;
return G__123530;
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
var args__123573 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__123574 = cljs.core._first.call(null,args__123573);
var args__123575 = cljs.core._rest.call(null,args__123573);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__123574);
} else
{return f.call(null,a__123574);
}
} else
{var b__123576 = cljs.core._first.call(null,args__123575);
var args__123577 = cljs.core._rest.call(null,args__123575);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__123574,b__123576);
} else
{return f.call(null,a__123574,b__123576);
}
} else
{var c__123578 = cljs.core._first.call(null,args__123577);
var args__123579 = cljs.core._rest.call(null,args__123577);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__123574,b__123576,c__123578);
} else
{return f.call(null,a__123574,b__123576,c__123578);
}
} else
{var d__123580 = cljs.core._first.call(null,args__123579);
var args__123581 = cljs.core._rest.call(null,args__123579);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__123574,b__123576,c__123578,d__123580);
} else
{return f.call(null,a__123574,b__123576,c__123578,d__123580);
}
} else
{var e__123582 = cljs.core._first.call(null,args__123581);
var args__123583 = cljs.core._rest.call(null,args__123581);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__123574,b__123576,c__123578,d__123580,e__123582);
} else
{return f.call(null,a__123574,b__123576,c__123578,d__123580,e__123582);
}
} else
{var f__123584 = cljs.core._first.call(null,args__123583);
var args__123585 = cljs.core._rest.call(null,args__123583);
if((argc === 6))
{if(f__123584.cljs$lang$arity$6)
{return f__123584.cljs$lang$arity$6(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584);
}
} else
{var g__123586 = cljs.core._first.call(null,args__123585);
var args__123587 = cljs.core._rest.call(null,args__123585);
if((argc === 7))
{if(f__123584.cljs$lang$arity$7)
{return f__123584.cljs$lang$arity$7(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586);
}
} else
{var h__123588 = cljs.core._first.call(null,args__123587);
var args__123589 = cljs.core._rest.call(null,args__123587);
if((argc === 8))
{if(f__123584.cljs$lang$arity$8)
{return f__123584.cljs$lang$arity$8(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588);
}
} else
{var i__123590 = cljs.core._first.call(null,args__123589);
var args__123591 = cljs.core._rest.call(null,args__123589);
if((argc === 9))
{if(f__123584.cljs$lang$arity$9)
{return f__123584.cljs$lang$arity$9(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590);
}
} else
{var j__123592 = cljs.core._first.call(null,args__123591);
var args__123593 = cljs.core._rest.call(null,args__123591);
if((argc === 10))
{if(f__123584.cljs$lang$arity$10)
{return f__123584.cljs$lang$arity$10(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592);
}
} else
{var k__123594 = cljs.core._first.call(null,args__123593);
var args__123595 = cljs.core._rest.call(null,args__123593);
if((argc === 11))
{if(f__123584.cljs$lang$arity$11)
{return f__123584.cljs$lang$arity$11(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594);
}
} else
{var l__123596 = cljs.core._first.call(null,args__123595);
var args__123597 = cljs.core._rest.call(null,args__123595);
if((argc === 12))
{if(f__123584.cljs$lang$arity$12)
{return f__123584.cljs$lang$arity$12(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596);
}
} else
{var m__123598 = cljs.core._first.call(null,args__123597);
var args__123599 = cljs.core._rest.call(null,args__123597);
if((argc === 13))
{if(f__123584.cljs$lang$arity$13)
{return f__123584.cljs$lang$arity$13(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598);
}
} else
{var n__123600 = cljs.core._first.call(null,args__123599);
var args__123601 = cljs.core._rest.call(null,args__123599);
if((argc === 14))
{if(f__123584.cljs$lang$arity$14)
{return f__123584.cljs$lang$arity$14(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600);
}
} else
{var o__123602 = cljs.core._first.call(null,args__123601);
var args__123603 = cljs.core._rest.call(null,args__123601);
if((argc === 15))
{if(f__123584.cljs$lang$arity$15)
{return f__123584.cljs$lang$arity$15(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602);
}
} else
{var p__123604 = cljs.core._first.call(null,args__123603);
var args__123605 = cljs.core._rest.call(null,args__123603);
if((argc === 16))
{if(f__123584.cljs$lang$arity$16)
{return f__123584.cljs$lang$arity$16(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604);
}
} else
{var q__123606 = cljs.core._first.call(null,args__123605);
var args__123607 = cljs.core._rest.call(null,args__123605);
if((argc === 17))
{if(f__123584.cljs$lang$arity$17)
{return f__123584.cljs$lang$arity$17(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606);
}
} else
{var r__123608 = cljs.core._first.call(null,args__123607);
var args__123609 = cljs.core._rest.call(null,args__123607);
if((argc === 18))
{if(f__123584.cljs$lang$arity$18)
{return f__123584.cljs$lang$arity$18(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606,r__123608);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606,r__123608);
}
} else
{var s__123610 = cljs.core._first.call(null,args__123609);
var args__123611 = cljs.core._rest.call(null,args__123609);
if((argc === 19))
{if(f__123584.cljs$lang$arity$19)
{return f__123584.cljs$lang$arity$19(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606,r__123608,s__123610);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606,r__123608,s__123610);
}
} else
{var t__123612 = cljs.core._first.call(null,args__123611);
var args__123613 = cljs.core._rest.call(null,args__123611);
if((argc === 20))
{if(f__123584.cljs$lang$arity$20)
{return f__123584.cljs$lang$arity$20(a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606,r__123608,s__123610,t__123612);
} else
{return f__123584.call(null,a__123574,b__123576,c__123578,d__123580,e__123582,f__123584,g__123586,h__123588,i__123590,j__123592,k__123594,l__123596,m__123598,n__123600,o__123602,p__123604,q__123606,r__123608,s__123610,t__123612);
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
var fixed_arity__123628 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__123629 = cljs.core.bounded_count.call(null,args,(fixed_arity__123628 + 1));
if((bc__123629 <= fixed_arity__123628))
{return cljs.core.apply_to.call(null,f,bc__123629,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__123630 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__123631 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__123632 = cljs.core.bounded_count.call(null,arglist__123630,(fixed_arity__123631 + 1));
if((bc__123632 <= fixed_arity__123631))
{return cljs.core.apply_to.call(null,f,bc__123632,arglist__123630);
} else
{return f.cljs$lang$applyTo(arglist__123630);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__123630));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__123633 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__123634 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__123635 = cljs.core.bounded_count.call(null,arglist__123633,(fixed_arity__123634 + 1));
if((bc__123635 <= fixed_arity__123634))
{return cljs.core.apply_to.call(null,f,bc__123635,arglist__123633);
} else
{return f.cljs$lang$applyTo(arglist__123633);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__123633));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__123636 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__123637 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__123638 = cljs.core.bounded_count.call(null,arglist__123636,(fixed_arity__123637 + 1));
if((bc__123638 <= fixed_arity__123637))
{return cljs.core.apply_to.call(null,f,bc__123638,arglist__123636);
} else
{return f.cljs$lang$applyTo(arglist__123636);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__123636));
}
});
var apply__6 = (function() { 
var G__123642__delegate = function (f,a,b,c,d,args){
var arglist__123639 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__123640 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__123641 = cljs.core.bounded_count.call(null,arglist__123639,(fixed_arity__123640 + 1));
if((bc__123641 <= fixed_arity__123640))
{return cljs.core.apply_to.call(null,f,bc__123641,arglist__123639);
} else
{return f.cljs$lang$applyTo(arglist__123639);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__123639));
}
};
var G__123642 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__123642__delegate.call(this, f, a, b, c, d, args);
};
G__123642.cljs$lang$maxFixedArity = 5;
G__123642.cljs$lang$applyTo = (function (arglist__123643){
var f = cljs.core.first(arglist__123643);
var a = cljs.core.first(cljs.core.next(arglist__123643));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123643)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123643))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123643)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123643)))));
return G__123642__delegate(f, a, b, c, d, args);
});
G__123642.cljs$lang$arity$variadic = G__123642__delegate;
return G__123642;
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
vary_meta.cljs$lang$applyTo = (function (arglist__123644){
var obj = cljs.core.first(arglist__123644);
var f = cljs.core.first(cljs.core.next(arglist__123644));
var args = cljs.core.rest(cljs.core.next(arglist__123644));
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
var G__123645__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__123645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123645__delegate.call(this, x, y, more);
};
G__123645.cljs$lang$maxFixedArity = 2;
G__123645.cljs$lang$applyTo = (function (arglist__123646){
var x = cljs.core.first(arglist__123646);
var y = cljs.core.first(cljs.core.next(arglist__123646));
var more = cljs.core.rest(cljs.core.next(arglist__123646));
return G__123645__delegate(x, y, more);
});
G__123645.cljs$lang$arity$variadic = G__123645__delegate;
return G__123645;
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
var G__123647 = pred;
var G__123648 = cljs.core.next.call(null,coll);
pred = G__123647;
coll = G__123648;
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
{var or__3824__auto____123650 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____123650))
{return or__3824__auto____123650;
} else
{{
var G__123651 = pred;
var G__123652 = cljs.core.next.call(null,coll);
pred = G__123651;
coll = G__123652;
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
var G__123653 = null;
var G__123653__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__123653__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__123653__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__123653__3 = (function() { 
var G__123654__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__123654 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__123654__delegate.call(this, x, y, zs);
};
G__123654.cljs$lang$maxFixedArity = 2;
G__123654.cljs$lang$applyTo = (function (arglist__123655){
var x = cljs.core.first(arglist__123655);
var y = cljs.core.first(cljs.core.next(arglist__123655));
var zs = cljs.core.rest(cljs.core.next(arglist__123655));
return G__123654__delegate(x, y, zs);
});
G__123654.cljs$lang$arity$variadic = G__123654__delegate;
return G__123654;
})()
;
G__123653 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__123653__0.call(this);
case 1:
return G__123653__1.call(this,x);
case 2:
return G__123653__2.call(this,x,y);
default:
return G__123653__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__123653.cljs$lang$maxFixedArity = 2;
G__123653.cljs$lang$applyTo = G__123653__3.cljs$lang$applyTo;
return G__123653;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__123656__delegate = function (args){
return x;
};
var G__123656 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123656__delegate.call(this, args);
};
G__123656.cljs$lang$maxFixedArity = 0;
G__123656.cljs$lang$applyTo = (function (arglist__123657){
var args = cljs.core.seq(arglist__123657);;
return G__123656__delegate(args);
});
G__123656.cljs$lang$arity$variadic = G__123656__delegate;
return G__123656;
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
var G__123664 = null;
var G__123664__0 = (function (){
return f.call(null,g.call(null));
});
var G__123664__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__123664__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__123664__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__123664__4 = (function() { 
var G__123665__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__123665 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123665__delegate.call(this, x, y, z, args);
};
G__123665.cljs$lang$maxFixedArity = 3;
G__123665.cljs$lang$applyTo = (function (arglist__123666){
var x = cljs.core.first(arglist__123666);
var y = cljs.core.first(cljs.core.next(arglist__123666));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123666)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123666)));
return G__123665__delegate(x, y, z, args);
});
G__123665.cljs$lang$arity$variadic = G__123665__delegate;
return G__123665;
})()
;
G__123664 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__123664__0.call(this);
case 1:
return G__123664__1.call(this,x);
case 2:
return G__123664__2.call(this,x,y);
case 3:
return G__123664__3.call(this,x,y,z);
default:
return G__123664__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__123664.cljs$lang$maxFixedArity = 3;
G__123664.cljs$lang$applyTo = G__123664__4.cljs$lang$applyTo;
return G__123664;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__123667 = null;
var G__123667__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__123667__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__123667__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__123667__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__123667__4 = (function() { 
var G__123668__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__123668 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123668__delegate.call(this, x, y, z, args);
};
G__123668.cljs$lang$maxFixedArity = 3;
G__123668.cljs$lang$applyTo = (function (arglist__123669){
var x = cljs.core.first(arglist__123669);
var y = cljs.core.first(cljs.core.next(arglist__123669));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123669)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123669)));
return G__123668__delegate(x, y, z, args);
});
G__123668.cljs$lang$arity$variadic = G__123668__delegate;
return G__123668;
})()
;
G__123667 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__123667__0.call(this);
case 1:
return G__123667__1.call(this,x);
case 2:
return G__123667__2.call(this,x,y);
case 3:
return G__123667__3.call(this,x,y,z);
default:
return G__123667__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__123667.cljs$lang$maxFixedArity = 3;
G__123667.cljs$lang$applyTo = G__123667__4.cljs$lang$applyTo;
return G__123667;
})()
});
var comp__4 = (function() { 
var G__123670__delegate = function (f1,f2,f3,fs){
var fs__123661 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__123671__delegate = function (args){
var ret__123662 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__123661),args);
var fs__123663 = cljs.core.next.call(null,fs__123661);
while(true){
if(fs__123663)
{{
var G__123672 = cljs.core.first.call(null,fs__123663).call(null,ret__123662);
var G__123673 = cljs.core.next.call(null,fs__123663);
ret__123662 = G__123672;
fs__123663 = G__123673;
continue;
}
} else
{return ret__123662;
}
break;
}
};
var G__123671 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123671__delegate.call(this, args);
};
G__123671.cljs$lang$maxFixedArity = 0;
G__123671.cljs$lang$applyTo = (function (arglist__123674){
var args = cljs.core.seq(arglist__123674);;
return G__123671__delegate(args);
});
G__123671.cljs$lang$arity$variadic = G__123671__delegate;
return G__123671;
})()
;
};
var G__123670 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123670__delegate.call(this, f1, f2, f3, fs);
};
G__123670.cljs$lang$maxFixedArity = 3;
G__123670.cljs$lang$applyTo = (function (arglist__123675){
var f1 = cljs.core.first(arglist__123675);
var f2 = cljs.core.first(cljs.core.next(arglist__123675));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123675)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123675)));
return G__123670__delegate(f1, f2, f3, fs);
});
G__123670.cljs$lang$arity$variadic = G__123670__delegate;
return G__123670;
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
var G__123676__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__123676 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123676__delegate.call(this, args);
};
G__123676.cljs$lang$maxFixedArity = 0;
G__123676.cljs$lang$applyTo = (function (arglist__123677){
var args = cljs.core.seq(arglist__123677);;
return G__123676__delegate(args);
});
G__123676.cljs$lang$arity$variadic = G__123676__delegate;
return G__123676;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__123678__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__123678 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123678__delegate.call(this, args);
};
G__123678.cljs$lang$maxFixedArity = 0;
G__123678.cljs$lang$applyTo = (function (arglist__123679){
var args = cljs.core.seq(arglist__123679);;
return G__123678__delegate(args);
});
G__123678.cljs$lang$arity$variadic = G__123678__delegate;
return G__123678;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__123680__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__123680 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123680__delegate.call(this, args);
};
G__123680.cljs$lang$maxFixedArity = 0;
G__123680.cljs$lang$applyTo = (function (arglist__123681){
var args = cljs.core.seq(arglist__123681);;
return G__123680__delegate(args);
});
G__123680.cljs$lang$arity$variadic = G__123680__delegate;
return G__123680;
})()
;
});
var partial__5 = (function() { 
var G__123682__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__123683__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__123683 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__123683__delegate.call(this, args);
};
G__123683.cljs$lang$maxFixedArity = 0;
G__123683.cljs$lang$applyTo = (function (arglist__123684){
var args = cljs.core.seq(arglist__123684);;
return G__123683__delegate(args);
});
G__123683.cljs$lang$arity$variadic = G__123683__delegate;
return G__123683;
})()
;
};
var G__123682 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__123682__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__123682.cljs$lang$maxFixedArity = 4;
G__123682.cljs$lang$applyTo = (function (arglist__123685){
var f = cljs.core.first(arglist__123685);
var arg1 = cljs.core.first(cljs.core.next(arglist__123685));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123685)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123685))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__123685))));
return G__123682__delegate(f, arg1, arg2, arg3, more);
});
G__123682.cljs$lang$arity$variadic = G__123682__delegate;
return G__123682;
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
var G__123686 = null;
var G__123686__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__123686__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__123686__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__123686__4 = (function() { 
var G__123687__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__123687 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123687__delegate.call(this, a, b, c, ds);
};
G__123687.cljs$lang$maxFixedArity = 3;
G__123687.cljs$lang$applyTo = (function (arglist__123688){
var a = cljs.core.first(arglist__123688);
var b = cljs.core.first(cljs.core.next(arglist__123688));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123688)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123688)));
return G__123687__delegate(a, b, c, ds);
});
G__123687.cljs$lang$arity$variadic = G__123687__delegate;
return G__123687;
})()
;
G__123686 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__123686__1.call(this,a);
case 2:
return G__123686__2.call(this,a,b);
case 3:
return G__123686__3.call(this,a,b,c);
default:
return G__123686__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__123686.cljs$lang$maxFixedArity = 3;
G__123686.cljs$lang$applyTo = G__123686__4.cljs$lang$applyTo;
return G__123686;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__123689 = null;
var G__123689__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__123689__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__123689__4 = (function() { 
var G__123690__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__123690 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123690__delegate.call(this, a, b, c, ds);
};
G__123690.cljs$lang$maxFixedArity = 3;
G__123690.cljs$lang$applyTo = (function (arglist__123691){
var a = cljs.core.first(arglist__123691);
var b = cljs.core.first(cljs.core.next(arglist__123691));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123691)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123691)));
return G__123690__delegate(a, b, c, ds);
});
G__123690.cljs$lang$arity$variadic = G__123690__delegate;
return G__123690;
})()
;
G__123689 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__123689__2.call(this,a,b);
case 3:
return G__123689__3.call(this,a,b,c);
default:
return G__123689__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__123689.cljs$lang$maxFixedArity = 3;
G__123689.cljs$lang$applyTo = G__123689__4.cljs$lang$applyTo;
return G__123689;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__123692 = null;
var G__123692__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__123692__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__123692__4 = (function() { 
var G__123693__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__123693 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123693__delegate.call(this, a, b, c, ds);
};
G__123693.cljs$lang$maxFixedArity = 3;
G__123693.cljs$lang$applyTo = (function (arglist__123694){
var a = cljs.core.first(arglist__123694);
var b = cljs.core.first(cljs.core.next(arglist__123694));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123694)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123694)));
return G__123693__delegate(a, b, c, ds);
});
G__123693.cljs$lang$arity$variadic = G__123693__delegate;
return G__123693;
})()
;
G__123692 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__123692__2.call(this,a,b);
case 3:
return G__123692__3.call(this,a,b,c);
default:
return G__123692__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__123692.cljs$lang$maxFixedArity = 3;
G__123692.cljs$lang$applyTo = G__123692__4.cljs$lang$applyTo;
return G__123692;
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
var mapi__123710 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____123718 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____123718)
{var s__123719 = temp__3974__auto____123718;
if(cljs.core.chunked_seq_QMARK_.call(null,s__123719))
{var c__123720 = cljs.core.chunk_first.call(null,s__123719);
var size__123721 = cljs.core.count.call(null,c__123720);
var b__123722 = cljs.core.chunk_buffer.call(null,size__123721);
var n__5790__auto____123723 = size__123721;
var i__123724 = 0;
while(true){
if((i__123724 < n__5790__auto____123723))
{cljs.core.chunk_append.call(null,b__123722,f.call(null,(idx + i__123724),cljs.core._nth.call(null,c__123720,i__123724)));
{
var G__123725 = (i__123724 + 1);
i__123724 = G__123725;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__123722),mapi.call(null,(idx + size__123721),cljs.core.chunk_rest.call(null,s__123719)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__123719)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__123719)));
}
} else
{return null;
}
}),null));
});
return mapi__123710.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____123735 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____123735)
{var s__123736 = temp__3974__auto____123735;
if(cljs.core.chunked_seq_QMARK_.call(null,s__123736))
{var c__123737 = cljs.core.chunk_first.call(null,s__123736);
var size__123738 = cljs.core.count.call(null,c__123737);
var b__123739 = cljs.core.chunk_buffer.call(null,size__123738);
var n__5790__auto____123740 = size__123738;
var i__123741 = 0;
while(true){
if((i__123741 < n__5790__auto____123740))
{var x__123742 = f.call(null,cljs.core._nth.call(null,c__123737,i__123741));
if((x__123742 == null))
{} else
{cljs.core.chunk_append.call(null,b__123739,x__123742);
}
{
var G__123744 = (i__123741 + 1);
i__123741 = G__123744;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__123739),keep.call(null,f,cljs.core.chunk_rest.call(null,s__123736)));
} else
{var x__123743 = f.call(null,cljs.core.first.call(null,s__123736));
if((x__123743 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__123736));
} else
{return cljs.core.cons.call(null,x__123743,keep.call(null,f,cljs.core.rest.call(null,s__123736)));
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
var keepi__123770 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____123780 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____123780)
{var s__123781 = temp__3974__auto____123780;
if(cljs.core.chunked_seq_QMARK_.call(null,s__123781))
{var c__123782 = cljs.core.chunk_first.call(null,s__123781);
var size__123783 = cljs.core.count.call(null,c__123782);
var b__123784 = cljs.core.chunk_buffer.call(null,size__123783);
var n__5790__auto____123785 = size__123783;
var i__123786 = 0;
while(true){
if((i__123786 < n__5790__auto____123785))
{var x__123787 = f.call(null,(idx + i__123786),cljs.core._nth.call(null,c__123782,i__123786));
if((x__123787 == null))
{} else
{cljs.core.chunk_append.call(null,b__123784,x__123787);
}
{
var G__123789 = (i__123786 + 1);
i__123786 = G__123789;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__123784),keepi.call(null,(idx + size__123783),cljs.core.chunk_rest.call(null,s__123781)));
} else
{var x__123788 = f.call(null,idx,cljs.core.first.call(null,s__123781));
if((x__123788 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__123781));
} else
{return cljs.core.cons.call(null,x__123788,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__123781)));
}
}
} else
{return null;
}
}),null));
});
return keepi__123770.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123875 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____123875))
{return p.call(null,y);
} else
{return and__3822__auto____123875;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123876 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____123876))
{var and__3822__auto____123877 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____123877))
{return p.call(null,z);
} else
{return and__3822__auto____123877;
}
} else
{return and__3822__auto____123876;
}
})());
});
var ep1__4 = (function() { 
var G__123946__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123878 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____123878))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____123878;
}
})());
};
var G__123946 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123946__delegate.call(this, x, y, z, args);
};
G__123946.cljs$lang$maxFixedArity = 3;
G__123946.cljs$lang$applyTo = (function (arglist__123947){
var x = cljs.core.first(arglist__123947);
var y = cljs.core.first(cljs.core.next(arglist__123947));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123947)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123947)));
return G__123946__delegate(x, y, z, args);
});
G__123946.cljs$lang$arity$variadic = G__123946__delegate;
return G__123946;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123890 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____123890))
{return p2.call(null,x);
} else
{return and__3822__auto____123890;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123891 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____123891))
{var and__3822__auto____123892 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____123892))
{var and__3822__auto____123893 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____123893))
{return p2.call(null,y);
} else
{return and__3822__auto____123893;
}
} else
{return and__3822__auto____123892;
}
} else
{return and__3822__auto____123891;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123894 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____123894))
{var and__3822__auto____123895 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____123895))
{var and__3822__auto____123896 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____123896))
{var and__3822__auto____123897 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____123897))
{var and__3822__auto____123898 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____123898))
{return p2.call(null,z);
} else
{return and__3822__auto____123898;
}
} else
{return and__3822__auto____123897;
}
} else
{return and__3822__auto____123896;
}
} else
{return and__3822__auto____123895;
}
} else
{return and__3822__auto____123894;
}
})());
});
var ep2__4 = (function() { 
var G__123948__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123899 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____123899))
{return cljs.core.every_QMARK_.call(null,(function (p1__123745_SHARP_){
var and__3822__auto____123900 = p1.call(null,p1__123745_SHARP_);
if(cljs.core.truth_(and__3822__auto____123900))
{return p2.call(null,p1__123745_SHARP_);
} else
{return and__3822__auto____123900;
}
}),args);
} else
{return and__3822__auto____123899;
}
})());
};
var G__123948 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123948__delegate.call(this, x, y, z, args);
};
G__123948.cljs$lang$maxFixedArity = 3;
G__123948.cljs$lang$applyTo = (function (arglist__123949){
var x = cljs.core.first(arglist__123949);
var y = cljs.core.first(cljs.core.next(arglist__123949));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123949)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123949)));
return G__123948__delegate(x, y, z, args);
});
G__123948.cljs$lang$arity$variadic = G__123948__delegate;
return G__123948;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123919 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____123919))
{var and__3822__auto____123920 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____123920))
{return p3.call(null,x);
} else
{return and__3822__auto____123920;
}
} else
{return and__3822__auto____123919;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123921 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____123921))
{var and__3822__auto____123922 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____123922))
{var and__3822__auto____123923 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____123923))
{var and__3822__auto____123924 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____123924))
{var and__3822__auto____123925 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____123925))
{return p3.call(null,y);
} else
{return and__3822__auto____123925;
}
} else
{return and__3822__auto____123924;
}
} else
{return and__3822__auto____123923;
}
} else
{return and__3822__auto____123922;
}
} else
{return and__3822__auto____123921;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123926 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____123926))
{var and__3822__auto____123927 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____123927))
{var and__3822__auto____123928 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____123928))
{var and__3822__auto____123929 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____123929))
{var and__3822__auto____123930 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____123930))
{var and__3822__auto____123931 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____123931))
{var and__3822__auto____123932 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____123932))
{var and__3822__auto____123933 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____123933))
{return p3.call(null,z);
} else
{return and__3822__auto____123933;
}
} else
{return and__3822__auto____123932;
}
} else
{return and__3822__auto____123931;
}
} else
{return and__3822__auto____123930;
}
} else
{return and__3822__auto____123929;
}
} else
{return and__3822__auto____123928;
}
} else
{return and__3822__auto____123927;
}
} else
{return and__3822__auto____123926;
}
})());
});
var ep3__4 = (function() { 
var G__123950__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123934 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____123934))
{return cljs.core.every_QMARK_.call(null,(function (p1__123746_SHARP_){
var and__3822__auto____123935 = p1.call(null,p1__123746_SHARP_);
if(cljs.core.truth_(and__3822__auto____123935))
{var and__3822__auto____123936 = p2.call(null,p1__123746_SHARP_);
if(cljs.core.truth_(and__3822__auto____123936))
{return p3.call(null,p1__123746_SHARP_);
} else
{return and__3822__auto____123936;
}
} else
{return and__3822__auto____123935;
}
}),args);
} else
{return and__3822__auto____123934;
}
})());
};
var G__123950 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123950__delegate.call(this, x, y, z, args);
};
G__123950.cljs$lang$maxFixedArity = 3;
G__123950.cljs$lang$applyTo = (function (arglist__123951){
var x = cljs.core.first(arglist__123951);
var y = cljs.core.first(cljs.core.next(arglist__123951));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123951)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123951)));
return G__123950__delegate(x, y, z, args);
});
G__123950.cljs$lang$arity$variadic = G__123950__delegate;
return G__123950;
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
var G__123952__delegate = function (p1,p2,p3,ps){
var ps__123937 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__123747_SHARP_){
return p1__123747_SHARP_.call(null,x);
}),ps__123937);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__123748_SHARP_){
var and__3822__auto____123942 = p1__123748_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____123942))
{return p1__123748_SHARP_.call(null,y);
} else
{return and__3822__auto____123942;
}
}),ps__123937);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__123749_SHARP_){
var and__3822__auto____123943 = p1__123749_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____123943))
{var and__3822__auto____123944 = p1__123749_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____123944))
{return p1__123749_SHARP_.call(null,z);
} else
{return and__3822__auto____123944;
}
} else
{return and__3822__auto____123943;
}
}),ps__123937);
});
var epn__4 = (function() { 
var G__123953__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____123945 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____123945))
{return cljs.core.every_QMARK_.call(null,(function (p1__123750_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__123750_SHARP_,args);
}),ps__123937);
} else
{return and__3822__auto____123945;
}
})());
};
var G__123953 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123953__delegate.call(this, x, y, z, args);
};
G__123953.cljs$lang$maxFixedArity = 3;
G__123953.cljs$lang$applyTo = (function (arglist__123954){
var x = cljs.core.first(arglist__123954);
var y = cljs.core.first(cljs.core.next(arglist__123954));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123954)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123954)));
return G__123953__delegate(x, y, z, args);
});
G__123953.cljs$lang$arity$variadic = G__123953__delegate;
return G__123953;
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
var G__123952 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__123952__delegate.call(this, p1, p2, p3, ps);
};
G__123952.cljs$lang$maxFixedArity = 3;
G__123952.cljs$lang$applyTo = (function (arglist__123955){
var p1 = cljs.core.first(arglist__123955);
var p2 = cljs.core.first(cljs.core.next(arglist__123955));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__123955)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__123955)));
return G__123952__delegate(p1, p2, p3, ps);
});
G__123952.cljs$lang$arity$variadic = G__123952__delegate;
return G__123952;
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
var or__3824__auto____124036 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____124036))
{return or__3824__auto____124036;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____124037 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____124037))
{return or__3824__auto____124037;
} else
{var or__3824__auto____124038 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____124038))
{return or__3824__auto____124038;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__124107__delegate = function (x,y,z,args){
var or__3824__auto____124039 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____124039))
{return or__3824__auto____124039;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__124107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__124107__delegate.call(this, x, y, z, args);
};
G__124107.cljs$lang$maxFixedArity = 3;
G__124107.cljs$lang$applyTo = (function (arglist__124108){
var x = cljs.core.first(arglist__124108);
var y = cljs.core.first(cljs.core.next(arglist__124108));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124108)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__124108)));
return G__124107__delegate(x, y, z, args);
});
G__124107.cljs$lang$arity$variadic = G__124107__delegate;
return G__124107;
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
var or__3824__auto____124051 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____124051))
{return or__3824__auto____124051;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____124052 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____124052))
{return or__3824__auto____124052;
} else
{var or__3824__auto____124053 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____124053))
{return or__3824__auto____124053;
} else
{var or__3824__auto____124054 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____124054))
{return or__3824__auto____124054;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____124055 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____124055))
{return or__3824__auto____124055;
} else
{var or__3824__auto____124056 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____124056))
{return or__3824__auto____124056;
} else
{var or__3824__auto____124057 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____124057))
{return or__3824__auto____124057;
} else
{var or__3824__auto____124058 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____124058))
{return or__3824__auto____124058;
} else
{var or__3824__auto____124059 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____124059))
{return or__3824__auto____124059;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__124109__delegate = function (x,y,z,args){
var or__3824__auto____124060 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____124060))
{return or__3824__auto____124060;
} else
{return cljs.core.some.call(null,(function (p1__123790_SHARP_){
var or__3824__auto____124061 = p1.call(null,p1__123790_SHARP_);
if(cljs.core.truth_(or__3824__auto____124061))
{return or__3824__auto____124061;
} else
{return p2.call(null,p1__123790_SHARP_);
}
}),args);
}
};
var G__124109 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__124109__delegate.call(this, x, y, z, args);
};
G__124109.cljs$lang$maxFixedArity = 3;
G__124109.cljs$lang$applyTo = (function (arglist__124110){
var x = cljs.core.first(arglist__124110);
var y = cljs.core.first(cljs.core.next(arglist__124110));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124110)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__124110)));
return G__124109__delegate(x, y, z, args);
});
G__124109.cljs$lang$arity$variadic = G__124109__delegate;
return G__124109;
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
var or__3824__auto____124080 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____124080))
{return or__3824__auto____124080;
} else
{var or__3824__auto____124081 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____124081))
{return or__3824__auto____124081;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____124082 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____124082))
{return or__3824__auto____124082;
} else
{var or__3824__auto____124083 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____124083))
{return or__3824__auto____124083;
} else
{var or__3824__auto____124084 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____124084))
{return or__3824__auto____124084;
} else
{var or__3824__auto____124085 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____124085))
{return or__3824__auto____124085;
} else
{var or__3824__auto____124086 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____124086))
{return or__3824__auto____124086;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____124087 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____124087))
{return or__3824__auto____124087;
} else
{var or__3824__auto____124088 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____124088))
{return or__3824__auto____124088;
} else
{var or__3824__auto____124089 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____124089))
{return or__3824__auto____124089;
} else
{var or__3824__auto____124090 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____124090))
{return or__3824__auto____124090;
} else
{var or__3824__auto____124091 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____124091))
{return or__3824__auto____124091;
} else
{var or__3824__auto____124092 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____124092))
{return or__3824__auto____124092;
} else
{var or__3824__auto____124093 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____124093))
{return or__3824__auto____124093;
} else
{var or__3824__auto____124094 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____124094))
{return or__3824__auto____124094;
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
var G__124111__delegate = function (x,y,z,args){
var or__3824__auto____124095 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____124095))
{return or__3824__auto____124095;
} else
{return cljs.core.some.call(null,(function (p1__123791_SHARP_){
var or__3824__auto____124096 = p1.call(null,p1__123791_SHARP_);
if(cljs.core.truth_(or__3824__auto____124096))
{return or__3824__auto____124096;
} else
{var or__3824__auto____124097 = p2.call(null,p1__123791_SHARP_);
if(cljs.core.truth_(or__3824__auto____124097))
{return or__3824__auto____124097;
} else
{return p3.call(null,p1__123791_SHARP_);
}
}
}),args);
}
};
var G__124111 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__124111__delegate.call(this, x, y, z, args);
};
G__124111.cljs$lang$maxFixedArity = 3;
G__124111.cljs$lang$applyTo = (function (arglist__124112){
var x = cljs.core.first(arglist__124112);
var y = cljs.core.first(cljs.core.next(arglist__124112));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124112)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__124112)));
return G__124111__delegate(x, y, z, args);
});
G__124111.cljs$lang$arity$variadic = G__124111__delegate;
return G__124111;
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
var G__124113__delegate = function (p1,p2,p3,ps){
var ps__124098 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__123792_SHARP_){
return p1__123792_SHARP_.call(null,x);
}),ps__124098);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__123793_SHARP_){
var or__3824__auto____124103 = p1__123793_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____124103))
{return or__3824__auto____124103;
} else
{return p1__123793_SHARP_.call(null,y);
}
}),ps__124098);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__123794_SHARP_){
var or__3824__auto____124104 = p1__123794_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____124104))
{return or__3824__auto____124104;
} else
{var or__3824__auto____124105 = p1__123794_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____124105))
{return or__3824__auto____124105;
} else
{return p1__123794_SHARP_.call(null,z);
}
}
}),ps__124098);
});
var spn__4 = (function() { 
var G__124114__delegate = function (x,y,z,args){
var or__3824__auto____124106 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____124106))
{return or__3824__auto____124106;
} else
{return cljs.core.some.call(null,(function (p1__123795_SHARP_){
return cljs.core.some.call(null,p1__123795_SHARP_,args);
}),ps__124098);
}
};
var G__124114 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__124114__delegate.call(this, x, y, z, args);
};
G__124114.cljs$lang$maxFixedArity = 3;
G__124114.cljs$lang$applyTo = (function (arglist__124115){
var x = cljs.core.first(arglist__124115);
var y = cljs.core.first(cljs.core.next(arglist__124115));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124115)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__124115)));
return G__124114__delegate(x, y, z, args);
});
G__124114.cljs$lang$arity$variadic = G__124114__delegate;
return G__124114;
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
var G__124113 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__124113__delegate.call(this, p1, p2, p3, ps);
};
G__124113.cljs$lang$maxFixedArity = 3;
G__124113.cljs$lang$applyTo = (function (arglist__124116){
var p1 = cljs.core.first(arglist__124116);
var p2 = cljs.core.first(cljs.core.next(arglist__124116));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124116)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__124116)));
return G__124113__delegate(p1, p2, p3, ps);
});
G__124113.cljs$lang$arity$variadic = G__124113__delegate;
return G__124113;
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
var temp__3974__auto____124135 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____124135)
{var s__124136 = temp__3974__auto____124135;
if(cljs.core.chunked_seq_QMARK_.call(null,s__124136))
{var c__124137 = cljs.core.chunk_first.call(null,s__124136);
var size__124138 = cljs.core.count.call(null,c__124137);
var b__124139 = cljs.core.chunk_buffer.call(null,size__124138);
var n__5790__auto____124140 = size__124138;
var i__124141 = 0;
while(true){
if((i__124141 < n__5790__auto____124140))
{cljs.core.chunk_append.call(null,b__124139,f.call(null,cljs.core._nth.call(null,c__124137,i__124141)));
{
var G__124153 = (i__124141 + 1);
i__124141 = G__124153;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__124139),map.call(null,f,cljs.core.chunk_rest.call(null,s__124136)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__124136)),map.call(null,f,cljs.core.rest.call(null,s__124136)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__124142 = cljs.core.seq.call(null,c1);
var s2__124143 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____124144 = s1__124142;
if(and__3822__auto____124144)
{return s2__124143;
} else
{return and__3822__auto____124144;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__124142),cljs.core.first.call(null,s2__124143)),map.call(null,f,cljs.core.rest.call(null,s1__124142),cljs.core.rest.call(null,s2__124143)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__124145 = cljs.core.seq.call(null,c1);
var s2__124146 = cljs.core.seq.call(null,c2);
var s3__124147 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____124148 = s1__124145;
if(and__3822__auto____124148)
{var and__3822__auto____124149 = s2__124146;
if(and__3822__auto____124149)
{return s3__124147;
} else
{return and__3822__auto____124149;
}
} else
{return and__3822__auto____124148;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__124145),cljs.core.first.call(null,s2__124146),cljs.core.first.call(null,s3__124147)),map.call(null,f,cljs.core.rest.call(null,s1__124145),cljs.core.rest.call(null,s2__124146),cljs.core.rest.call(null,s3__124147)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__124154__delegate = function (f,c1,c2,c3,colls){
var step__124152 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__124151 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__124151))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__124151),step.call(null,map.call(null,cljs.core.rest,ss__124151)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__123956_SHARP_){
return cljs.core.apply.call(null,f,p1__123956_SHARP_);
}),step__124152.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__124154 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__124154__delegate.call(this, f, c1, c2, c3, colls);
};
G__124154.cljs$lang$maxFixedArity = 4;
G__124154.cljs$lang$applyTo = (function (arglist__124155){
var f = cljs.core.first(arglist__124155);
var c1 = cljs.core.first(cljs.core.next(arglist__124155));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124155)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__124155))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__124155))));
return G__124154__delegate(f, c1, c2, c3, colls);
});
G__124154.cljs$lang$arity$variadic = G__124154__delegate;
return G__124154;
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
{var temp__3974__auto____124158 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____124158)
{var s__124159 = temp__3974__auto____124158;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__124159),take.call(null,(n - 1),cljs.core.rest.call(null,s__124159)));
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
var step__124165 = (function (n,coll){
while(true){
var s__124163 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____124164 = (n > 0);
if(and__3822__auto____124164)
{return s__124163;
} else
{return and__3822__auto____124164;
}
})()))
{{
var G__124166 = (n - 1);
var G__124167 = cljs.core.rest.call(null,s__124163);
n = G__124166;
coll = G__124167;
continue;
}
} else
{return s__124163;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__124165.call(null,n,coll);
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
var s__124170 = cljs.core.seq.call(null,coll);
var lead__124171 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__124171)
{{
var G__124172 = cljs.core.next.call(null,s__124170);
var G__124173 = cljs.core.next.call(null,lead__124171);
s__124170 = G__124172;
lead__124171 = G__124173;
continue;
}
} else
{return s__124170;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__124179 = (function (pred,coll){
while(true){
var s__124177 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____124178 = s__124177;
if(and__3822__auto____124178)
{return pred.call(null,cljs.core.first.call(null,s__124177));
} else
{return and__3822__auto____124178;
}
})()))
{{
var G__124180 = pred;
var G__124181 = cljs.core.rest.call(null,s__124177);
pred = G__124180;
coll = G__124181;
continue;
}
} else
{return s__124177;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__124179.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____124184 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____124184)
{var s__124185 = temp__3974__auto____124184;
return cljs.core.concat.call(null,s__124185,cycle.call(null,s__124185));
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
var s1__124190 = cljs.core.seq.call(null,c1);
var s2__124191 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____124192 = s1__124190;
if(and__3822__auto____124192)
{return s2__124191;
} else
{return and__3822__auto____124192;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__124190),cljs.core.cons.call(null,cljs.core.first.call(null,s2__124191),interleave.call(null,cljs.core.rest.call(null,s1__124190),cljs.core.rest.call(null,s2__124191))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__124194__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__124193 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__124193))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__124193),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__124193)));
} else
{return null;
}
}),null));
};
var G__124194 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__124194__delegate.call(this, c1, c2, colls);
};
G__124194.cljs$lang$maxFixedArity = 2;
G__124194.cljs$lang$applyTo = (function (arglist__124195){
var c1 = cljs.core.first(arglist__124195);
var c2 = cljs.core.first(cljs.core.next(arglist__124195));
var colls = cljs.core.rest(cljs.core.next(arglist__124195));
return G__124194__delegate(c1, c2, colls);
});
G__124194.cljs$lang$arity$variadic = G__124194__delegate;
return G__124194;
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
var cat__124205 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____124203 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____124203)
{var coll__124204 = temp__3971__auto____124203;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__124204),cat.call(null,cljs.core.rest.call(null,coll__124204),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__124205.call(null,null,colls);
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
var G__124206__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__124206 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__124206__delegate.call(this, f, coll, colls);
};
G__124206.cljs$lang$maxFixedArity = 2;
G__124206.cljs$lang$applyTo = (function (arglist__124207){
var f = cljs.core.first(arglist__124207);
var coll = cljs.core.first(cljs.core.next(arglist__124207));
var colls = cljs.core.rest(cljs.core.next(arglist__124207));
return G__124206__delegate(f, coll, colls);
});
G__124206.cljs$lang$arity$variadic = G__124206__delegate;
return G__124206;
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
var temp__3974__auto____124217 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____124217)
{var s__124218 = temp__3974__auto____124217;
if(cljs.core.chunked_seq_QMARK_.call(null,s__124218))
{var c__124219 = cljs.core.chunk_first.call(null,s__124218);
var size__124220 = cljs.core.count.call(null,c__124219);
var b__124221 = cljs.core.chunk_buffer.call(null,size__124220);
var n__5790__auto____124222 = size__124220;
var i__124223 = 0;
while(true){
if((i__124223 < n__5790__auto____124222))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__124219,i__124223))))
{cljs.core.chunk_append.call(null,b__124221,cljs.core._nth.call(null,c__124219,i__124223));
} else
{}
{
var G__124226 = (i__124223 + 1);
i__124223 = G__124226;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__124221),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__124218)));
} else
{var f__124224 = cljs.core.first.call(null,s__124218);
var r__124225 = cljs.core.rest.call(null,s__124218);
if(cljs.core.truth_(pred.call(null,f__124224)))
{return cljs.core.cons.call(null,f__124224,filter.call(null,pred,r__124225));
} else
{return filter.call(null,pred,r__124225);
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
var walk__124229 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__124229.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__124227_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__124227_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__124233__124234 = to;
if(G__124233__124234)
{if((function (){var or__3824__auto____124235 = (G__124233__124234.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____124235)
{return or__3824__auto____124235;
} else
{return G__124233__124234.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__124233__124234.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__124233__124234);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__124233__124234);
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
var G__124236__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__124236 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__124236__delegate.call(this, f, c1, c2, c3, colls);
};
G__124236.cljs$lang$maxFixedArity = 4;
G__124236.cljs$lang$applyTo = (function (arglist__124237){
var f = cljs.core.first(arglist__124237);
var c1 = cljs.core.first(cljs.core.next(arglist__124237));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124237)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__124237))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__124237))));
return G__124236__delegate(f, c1, c2, c3, colls);
});
G__124236.cljs$lang$arity$variadic = G__124236__delegate;
return G__124236;
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
var temp__3974__auto____124244 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____124244)
{var s__124245 = temp__3974__auto____124244;
var p__124246 = cljs.core.take.call(null,n,s__124245);
if((n === cljs.core.count.call(null,p__124246)))
{return cljs.core.cons.call(null,p__124246,partition.call(null,n,step,cljs.core.drop.call(null,step,s__124245)));
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
var temp__3974__auto____124247 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____124247)
{var s__124248 = temp__3974__auto____124247;
var p__124249 = cljs.core.take.call(null,n,s__124248);
if((n === cljs.core.count.call(null,p__124249)))
{return cljs.core.cons.call(null,p__124249,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__124248)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__124249,pad)));
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
var sentinel__124254 = cljs.core.lookup_sentinel;
var m__124255 = m;
var ks__124256 = cljs.core.seq.call(null,ks);
while(true){
if(ks__124256)
{var m__124257 = cljs.core._lookup.call(null,m__124255,cljs.core.first.call(null,ks__124256),sentinel__124254);
if((sentinel__124254 === m__124257))
{return not_found;
} else
{{
var G__124258 = sentinel__124254;
var G__124259 = m__124257;
var G__124260 = cljs.core.next.call(null,ks__124256);
sentinel__124254 = G__124258;
m__124255 = G__124259;
ks__124256 = G__124260;
continue;
}
}
} else
{return m__124255;
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
cljs.core.assoc_in = (function assoc_in(m,p__124261,v){
var vec__124266__124267 = p__124261;
var k__124268 = cljs.core.nth.call(null,vec__124266__124267,0,null);
var ks__124269 = cljs.core.nthnext.call(null,vec__124266__124267,1);
if(cljs.core.truth_(ks__124269))
{return cljs.core.assoc.call(null,m,k__124268,assoc_in.call(null,cljs.core._lookup.call(null,m,k__124268,null),ks__124269,v));
} else
{return cljs.core.assoc.call(null,m,k__124268,v);
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
var update_in__delegate = function (m,p__124270,f,args){
var vec__124275__124276 = p__124270;
var k__124277 = cljs.core.nth.call(null,vec__124275__124276,0,null);
var ks__124278 = cljs.core.nthnext.call(null,vec__124275__124276,1);
if(cljs.core.truth_(ks__124278))
{return cljs.core.assoc.call(null,m,k__124277,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__124277,null),ks__124278,f,args));
} else
{return cljs.core.assoc.call(null,m,k__124277,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__124277,null),args));
}
};
var update_in = function (m,p__124270,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__124270, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__124279){
var m = cljs.core.first(arglist__124279);
var p__124270 = cljs.core.first(cljs.core.next(arglist__124279));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__124279)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__124279)));
return update_in__delegate(m, p__124270, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124282 = this;
var h__5444__auto____124283 = this__124282.__hash;
if(!((h__5444__auto____124283 == null)))
{return h__5444__auto____124283;
} else
{var h__5444__auto____124284 = cljs.core.hash_coll.call(null,coll);
this__124282.__hash = h__5444__auto____124284;
return h__5444__auto____124284;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124285 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124286 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__124287 = this;
var new_array__124288 = this__124287.array.slice();
(new_array__124288[k] = v);
return (new cljs.core.Vector(this__124287.meta,new_array__124288,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__124319 = null;
var G__124319__2 = (function (this_sym124289,k){
var this__124291 = this;
var this_sym124289__124292 = this;
var coll__124293 = this_sym124289__124292;
return coll__124293.cljs$core$ILookup$_lookup$arity$2(coll__124293,k);
});
var G__124319__3 = (function (this_sym124290,k,not_found){
var this__124291 = this;
var this_sym124290__124294 = this;
var coll__124295 = this_sym124290__124294;
return coll__124295.cljs$core$ILookup$_lookup$arity$3(coll__124295,k,not_found);
});
G__124319 = function(this_sym124290,k,not_found){
switch(arguments.length){
case 2:
return G__124319__2.call(this,this_sym124290,k);
case 3:
return G__124319__3.call(this,this_sym124290,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124319;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym124280,args124281){
var this__124296 = this;
return this_sym124280.call.apply(this_sym124280,[this_sym124280].concat(args124281.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__124297 = this;
var new_array__124298 = this__124297.array.slice();
new_array__124298.push(o);
return (new cljs.core.Vector(this__124297.meta,new_array__124298,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__124299 = this;
var this__124300 = this;
return cljs.core.pr_str.call(null,this__124300);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__124301 = this;
return cljs.core.ci_reduce.call(null,this__124301.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__124302 = this;
return cljs.core.ci_reduce.call(null,this__124302.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124303 = this;
if((this__124303.array.length > 0))
{var vector_seq__124304 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__124303.array.length))
{return cljs.core.cons.call(null,(this__124303.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__124304.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124305 = this;
return this__124305.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__124306 = this;
var count__124307 = this__124306.array.length;
if((count__124307 > 0))
{return (this__124306.array[(count__124307 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__124308 = this;
if((this__124308.array.length > 0))
{var new_array__124309 = this__124308.array.slice();
new_array__124309.pop();
return (new cljs.core.Vector(this__124308.meta,new_array__124309,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__124310 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124311 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124312 = this;
return (new cljs.core.Vector(meta,this__124312.array,this__124312.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124313 = this;
return this__124313.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__124314 = this;
if((function (){var and__3822__auto____124315 = (0 <= n);
if(and__3822__auto____124315)
{return (n < this__124314.array.length);
} else
{return and__3822__auto____124315;
}
})())
{return (this__124314.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__124316 = this;
if((function (){var and__3822__auto____124317 = (0 <= n);
if(and__3822__auto____124317)
{return (n < this__124316.array.length);
} else
{return and__3822__auto____124317;
}
})())
{return (this__124316.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124318 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__124318.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5565__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5565__auto__,writer__5566__auto__){
return cljs.core._write.call(null,writer__5566__auto__,"cljs.core/VectorNode");
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
var cnt__124321 = pv.cnt;
if((cnt__124321 < 32))
{return 0;
} else
{return (((cnt__124321 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__124327 = level;
var ret__124328 = node;
while(true){
if((ll__124327 === 0))
{return ret__124328;
} else
{var embed__124329 = ret__124328;
var r__124330 = cljs.core.pv_fresh_node.call(null,edit);
var ___124331 = cljs.core.pv_aset.call(null,r__124330,0,embed__124329);
{
var G__124332 = (ll__124327 - 5);
var G__124333 = r__124330;
ll__124327 = G__124332;
ret__124328 = G__124333;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__124339 = cljs.core.pv_clone_node.call(null,parent);
var subidx__124340 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__124339,subidx__124340,tailnode);
return ret__124339;
} else
{var child__124341 = cljs.core.pv_aget.call(null,parent,subidx__124340);
if(!((child__124341 == null)))
{var node_to_insert__124342 = push_tail.call(null,pv,(level - 5),child__124341,tailnode);
cljs.core.pv_aset.call(null,ret__124339,subidx__124340,node_to_insert__124342);
return ret__124339;
} else
{var node_to_insert__124343 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__124339,subidx__124340,node_to_insert__124343);
return ret__124339;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____124347 = (0 <= i);
if(and__3822__auto____124347)
{return (i < pv.cnt);
} else
{return and__3822__auto____124347;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__124348 = pv.root;
var level__124349 = pv.shift;
while(true){
if((level__124349 > 0))
{{
var G__124350 = cljs.core.pv_aget.call(null,node__124348,((i >>> level__124349) & 31));
var G__124351 = (level__124349 - 5);
node__124348 = G__124350;
level__124349 = G__124351;
continue;
}
} else
{return node__124348.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__124354 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__124354,(i & 31),val);
return ret__124354;
} else
{var subidx__124355 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__124354,subidx__124355,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__124355),i,val));
return ret__124354;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__124361 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__124362 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__124361));
if((function (){var and__3822__auto____124363 = (new_child__124362 == null);
if(and__3822__auto____124363)
{return (subidx__124361 === 0);
} else
{return and__3822__auto____124363;
}
})())
{return null;
} else
{var ret__124364 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__124364,subidx__124361,new_child__124362);
return ret__124364;
}
} else
{if((subidx__124361 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__124365 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__124365,subidx__124361,null);
return ret__124365;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__124368 = this;
return (new cljs.core.TransientVector(this__124368.cnt,this__124368.shift,cljs.core.tv_editable_root.call(null,this__124368.root),cljs.core.tv_editable_tail.call(null,this__124368.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124369 = this;
var h__5444__auto____124370 = this__124369.__hash;
if(!((h__5444__auto____124370 == null)))
{return h__5444__auto____124370;
} else
{var h__5444__auto____124371 = cljs.core.hash_coll.call(null,coll);
this__124369.__hash = h__5444__auto____124371;
return h__5444__auto____124371;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124372 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124373 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__124374 = this;
if((function (){var and__3822__auto____124375 = (0 <= k);
if(and__3822__auto____124375)
{return (k < this__124374.cnt);
} else
{return and__3822__auto____124375;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__124376 = this__124374.tail.slice();
(new_tail__124376[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__124374.meta,this__124374.cnt,this__124374.shift,this__124374.root,new_tail__124376,null));
} else
{return (new cljs.core.PersistentVector(this__124374.meta,this__124374.cnt,this__124374.shift,cljs.core.do_assoc.call(null,coll,this__124374.shift,this__124374.root,k,v),this__124374.tail,null));
}
} else
{if((k === this__124374.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__124374.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__124424 = null;
var G__124424__2 = (function (this_sym124377,k){
var this__124379 = this;
var this_sym124377__124380 = this;
var coll__124381 = this_sym124377__124380;
return coll__124381.cljs$core$ILookup$_lookup$arity$2(coll__124381,k);
});
var G__124424__3 = (function (this_sym124378,k,not_found){
var this__124379 = this;
var this_sym124378__124382 = this;
var coll__124383 = this_sym124378__124382;
return coll__124383.cljs$core$ILookup$_lookup$arity$3(coll__124383,k,not_found);
});
G__124424 = function(this_sym124378,k,not_found){
switch(arguments.length){
case 2:
return G__124424__2.call(this,this_sym124378,k);
case 3:
return G__124424__3.call(this,this_sym124378,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124424;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym124366,args124367){
var this__124384 = this;
return this_sym124366.call.apply(this_sym124366,[this_sym124366].concat(args124367.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__124385 = this;
var step_init__124386 = [0,init];
var i__124387 = 0;
while(true){
if((i__124387 < this__124385.cnt))
{var arr__124388 = cljs.core.array_for.call(null,v,i__124387);
var len__124389 = arr__124388.length;
var init__124393 = (function (){var j__124390 = 0;
var init__124391 = (step_init__124386[1]);
while(true){
if((j__124390 < len__124389))
{var init__124392 = f.call(null,init__124391,(j__124390 + i__124387),(arr__124388[j__124390]));
if(cljs.core.reduced_QMARK_.call(null,init__124392))
{return init__124392;
} else
{{
var G__124425 = (j__124390 + 1);
var G__124426 = init__124392;
j__124390 = G__124425;
init__124391 = G__124426;
continue;
}
}
} else
{(step_init__124386[0] = len__124389);
(step_init__124386[1] = init__124391);
return init__124391;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__124393))
{return cljs.core.deref.call(null,init__124393);
} else
{{
var G__124427 = (i__124387 + (step_init__124386[0]));
i__124387 = G__124427;
continue;
}
}
} else
{return (step_init__124386[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__124394 = this;
if(((this__124394.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__124395 = this__124394.tail.slice();
new_tail__124395.push(o);
return (new cljs.core.PersistentVector(this__124394.meta,(this__124394.cnt + 1),this__124394.shift,this__124394.root,new_tail__124395,null));
} else
{var root_overflow_QMARK___124396 = ((this__124394.cnt >>> 5) > (1 << this__124394.shift));
var new_shift__124397 = ((root_overflow_QMARK___124396)?(this__124394.shift + 5):this__124394.shift);
var new_root__124399 = ((root_overflow_QMARK___124396)?(function (){var n_r__124398 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__124398,0,this__124394.root);
cljs.core.pv_aset.call(null,n_r__124398,1,cljs.core.new_path.call(null,null,this__124394.shift,(new cljs.core.VectorNode(null,this__124394.tail))));
return n_r__124398;
})():cljs.core.push_tail.call(null,coll,this__124394.shift,this__124394.root,(new cljs.core.VectorNode(null,this__124394.tail))));
return (new cljs.core.PersistentVector(this__124394.meta,(this__124394.cnt + 1),new_shift__124397,new_root__124399,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__124400 = this;
if((this__124400.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__124400.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__124401 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__124402 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__124403 = this;
var this__124404 = this;
return cljs.core.pr_str.call(null,this__124404);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__124405 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__124406 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124407 = this;
if((this__124407.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124408 = this;
return this__124408.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__124409 = this;
if((this__124409.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__124409.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__124410 = this;
if((this__124410.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__124410.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__124410.meta);
} else
{if((1 < (this__124410.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__124410.meta,(this__124410.cnt - 1),this__124410.shift,this__124410.root,this__124410.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__124411 = cljs.core.array_for.call(null,coll,(this__124410.cnt - 2));
var nr__124412 = cljs.core.pop_tail.call(null,coll,this__124410.shift,this__124410.root);
var new_root__124413 = (((nr__124412 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__124412);
var cnt_1__124414 = (this__124410.cnt - 1);
if((function (){var and__3822__auto____124415 = (5 < this__124410.shift);
if(and__3822__auto____124415)
{return (cljs.core.pv_aget.call(null,new_root__124413,1) == null);
} else
{return and__3822__auto____124415;
}
})())
{return (new cljs.core.PersistentVector(this__124410.meta,cnt_1__124414,(this__124410.shift - 5),cljs.core.pv_aget.call(null,new_root__124413,0),new_tail__124411,null));
} else
{return (new cljs.core.PersistentVector(this__124410.meta,cnt_1__124414,this__124410.shift,new_root__124413,new_tail__124411,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__124416 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124417 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124418 = this;
return (new cljs.core.PersistentVector(meta,this__124418.cnt,this__124418.shift,this__124418.root,this__124418.tail,this__124418.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124419 = this;
return this__124419.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__124420 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__124421 = this;
if((function (){var and__3822__auto____124422 = (0 <= n);
if(and__3822__auto____124422)
{return (n < this__124421.cnt);
} else
{return and__3822__auto____124422;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124423 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__124423.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__124428 = xs.length;
var xs__124429 = (((no_clone === true))?xs:xs.slice());
if((l__124428 < 32))
{return (new cljs.core.PersistentVector(null,l__124428,5,cljs.core.PersistentVector.EMPTY_NODE,xs__124429,null));
} else
{var node__124430 = xs__124429.slice(0,32);
var v__124431 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__124430,null));
var i__124432 = 32;
var out__124433 = cljs.core._as_transient.call(null,v__124431);
while(true){
if((i__124432 < l__124428))
{{
var G__124434 = (i__124432 + 1);
var G__124435 = cljs.core.conj_BANG_.call(null,out__124433,(xs__124429[i__124432]));
i__124432 = G__124434;
out__124433 = G__124435;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__124433);
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
vector.cljs$lang$applyTo = (function (arglist__124436){
var args = cljs.core.seq(arglist__124436);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124437 = this;
var h__5444__auto____124438 = this__124437.__hash;
if(!((h__5444__auto____124438 == null)))
{return h__5444__auto____124438;
} else
{var h__5444__auto____124439 = cljs.core.hash_coll.call(null,coll);
this__124437.__hash = h__5444__auto____124439;
return h__5444__auto____124439;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__124440 = this;
if(((this__124440.off + 1) < this__124440.node.length))
{var s__124441 = cljs.core.chunked_seq.call(null,this__124440.vec,this__124440.node,this__124440.i,(this__124440.off + 1));
if((s__124441 == null))
{return null;
} else
{return s__124441;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__124442 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124443 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__124444 = this;
return (this__124444.node[this__124444.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__124445 = this;
if(((this__124445.off + 1) < this__124445.node.length))
{var s__124446 = cljs.core.chunked_seq.call(null,this__124445.vec,this__124445.node,this__124445.i,(this__124445.off + 1));
if((s__124446 == null))
{return cljs.core.List.EMPTY;
} else
{return s__124446;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__124447 = this;
var l__124448 = this__124447.node.length;
var s__124449 = ((((this__124447.i + l__124448) < cljs.core._count.call(null,this__124447.vec)))?cljs.core.chunked_seq.call(null,this__124447.vec,(this__124447.i + l__124448),0):null);
if((s__124449 == null))
{return null;
} else
{return s__124449;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124450 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__124451 = this;
return cljs.core.chunked_seq.call(null,this__124451.vec,this__124451.node,this__124451.i,this__124451.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__124452 = this;
return this__124452.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124453 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__124453.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__124454 = this;
return cljs.core.array_chunk.call(null,this__124454.node,this__124454.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__124455 = this;
var l__124456 = this__124455.node.length;
var s__124457 = ((((this__124455.i + l__124456) < cljs.core._count.call(null,this__124455.vec)))?cljs.core.chunked_seq.call(null,this__124455.vec,(this__124455.i + l__124456),0):null);
if((s__124457 == null))
{return cljs.core.List.EMPTY;
} else
{return s__124457;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124460 = this;
var h__5444__auto____124461 = this__124460.__hash;
if(!((h__5444__auto____124461 == null)))
{return h__5444__auto____124461;
} else
{var h__5444__auto____124462 = cljs.core.hash_coll.call(null,coll);
this__124460.__hash = h__5444__auto____124462;
return h__5444__auto____124462;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124463 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124464 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__124465 = this;
var v_pos__124466 = (this__124465.start + key);
return (new cljs.core.Subvec(this__124465.meta,cljs.core._assoc.call(null,this__124465.v,v_pos__124466,val),this__124465.start,((this__124465.end > (v_pos__124466 + 1)) ? this__124465.end : (v_pos__124466 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__124492 = null;
var G__124492__2 = (function (this_sym124467,k){
var this__124469 = this;
var this_sym124467__124470 = this;
var coll__124471 = this_sym124467__124470;
return coll__124471.cljs$core$ILookup$_lookup$arity$2(coll__124471,k);
});
var G__124492__3 = (function (this_sym124468,k,not_found){
var this__124469 = this;
var this_sym124468__124472 = this;
var coll__124473 = this_sym124468__124472;
return coll__124473.cljs$core$ILookup$_lookup$arity$3(coll__124473,k,not_found);
});
G__124492 = function(this_sym124468,k,not_found){
switch(arguments.length){
case 2:
return G__124492__2.call(this,this_sym124468,k);
case 3:
return G__124492__3.call(this,this_sym124468,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124492;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym124458,args124459){
var this__124474 = this;
return this_sym124458.call.apply(this_sym124458,[this_sym124458].concat(args124459.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__124475 = this;
return (new cljs.core.Subvec(this__124475.meta,cljs.core._assoc_n.call(null,this__124475.v,this__124475.end,o),this__124475.start,(this__124475.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__124476 = this;
var this__124477 = this;
return cljs.core.pr_str.call(null,this__124477);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__124478 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__124479 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124480 = this;
var subvec_seq__124481 = (function subvec_seq(i){
if((i === this__124480.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__124480.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__124481.call(null,this__124480.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124482 = this;
return (this__124482.end - this__124482.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__124483 = this;
return cljs.core._nth.call(null,this__124483.v,(this__124483.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__124484 = this;
if((this__124484.start === this__124484.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__124484.meta,this__124484.v,this__124484.start,(this__124484.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__124485 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124486 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124487 = this;
return (new cljs.core.Subvec(meta,this__124487.v,this__124487.start,this__124487.end,this__124487.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124488 = this;
return this__124488.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__124489 = this;
return cljs.core._nth.call(null,this__124489.v,(this__124489.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__124490 = this;
return cljs.core._nth.call(null,this__124490.v,(this__124490.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124491 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__124491.meta);
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
var ret__124494 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__124494,0,tl.length);
return ret__124494;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__124498 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__124499 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__124498,subidx__124499,(((level === 5))?tail_node:(function (){var child__124500 = cljs.core.pv_aget.call(null,ret__124498,subidx__124499);
if(!((child__124500 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__124500,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__124498;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__124505 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__124506 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__124507 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__124505,subidx__124506));
if((function (){var and__3822__auto____124508 = (new_child__124507 == null);
if(and__3822__auto____124508)
{return (subidx__124506 === 0);
} else
{return and__3822__auto____124508;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__124505,subidx__124506,new_child__124507);
return node__124505;
}
} else
{if((subidx__124506 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__124505,subidx__124506,null);
return node__124505;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____124513 = (0 <= i);
if(and__3822__auto____124513)
{return (i < tv.cnt);
} else
{return and__3822__auto____124513;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__124514 = tv.root;
var node__124515 = root__124514;
var level__124516 = tv.shift;
while(true){
if((level__124516 > 0))
{{
var G__124517 = cljs.core.tv_ensure_editable.call(null,root__124514.edit,cljs.core.pv_aget.call(null,node__124515,((i >>> level__124516) & 31)));
var G__124518 = (level__124516 - 5);
node__124515 = G__124517;
level__124516 = G__124518;
continue;
}
} else
{return node__124515.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__124558 = null;
var G__124558__2 = (function (this_sym124521,k){
var this__124523 = this;
var this_sym124521__124524 = this;
var coll__124525 = this_sym124521__124524;
return coll__124525.cljs$core$ILookup$_lookup$arity$2(coll__124525,k);
});
var G__124558__3 = (function (this_sym124522,k,not_found){
var this__124523 = this;
var this_sym124522__124526 = this;
var coll__124527 = this_sym124522__124526;
return coll__124527.cljs$core$ILookup$_lookup$arity$3(coll__124527,k,not_found);
});
G__124558 = function(this_sym124522,k,not_found){
switch(arguments.length){
case 2:
return G__124558__2.call(this,this_sym124522,k);
case 3:
return G__124558__3.call(this,this_sym124522,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124558;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym124519,args124520){
var this__124528 = this;
return this_sym124519.call.apply(this_sym124519,[this_sym124519].concat(args124520.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124529 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124530 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__124531 = this;
if(this__124531.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__124532 = this;
if((function (){var and__3822__auto____124533 = (0 <= n);
if(and__3822__auto____124533)
{return (n < this__124532.cnt);
} else
{return and__3822__auto____124533;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124534 = this;
if(this__124534.root.edit)
{return this__124534.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__124535 = this;
if(this__124535.root.edit)
{if((function (){var and__3822__auto____124536 = (0 <= n);
if(and__3822__auto____124536)
{return (n < this__124535.cnt);
} else
{return and__3822__auto____124536;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__124535.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__124541 = (function go(level,node){
var node__124539 = cljs.core.tv_ensure_editable.call(null,this__124535.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__124539,(n & 31),val);
return node__124539;
} else
{var subidx__124540 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__124539,subidx__124540,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__124539,subidx__124540)));
return node__124539;
}
}).call(null,this__124535.shift,this__124535.root);
this__124535.root = new_root__124541;
return tcoll;
}
} else
{if((n === this__124535.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__124535.cnt)].join('')));
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
var this__124542 = this;
if(this__124542.root.edit)
{if((this__124542.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__124542.cnt))
{this__124542.cnt = 0;
return tcoll;
} else
{if((((this__124542.cnt - 1) & 31) > 0))
{this__124542.cnt = (this__124542.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__124543 = cljs.core.editable_array_for.call(null,tcoll,(this__124542.cnt - 2));
var new_root__124545 = (function (){var nr__124544 = cljs.core.tv_pop_tail.call(null,tcoll,this__124542.shift,this__124542.root);
if(!((nr__124544 == null)))
{return nr__124544;
} else
{return (new cljs.core.VectorNode(this__124542.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____124546 = (5 < this__124542.shift);
if(and__3822__auto____124546)
{return (cljs.core.pv_aget.call(null,new_root__124545,1) == null);
} else
{return and__3822__auto____124546;
}
})())
{var new_root__124547 = cljs.core.tv_ensure_editable.call(null,this__124542.root.edit,cljs.core.pv_aget.call(null,new_root__124545,0));
this__124542.root = new_root__124547;
this__124542.shift = (this__124542.shift - 5);
this__124542.cnt = (this__124542.cnt - 1);
this__124542.tail = new_tail__124543;
return tcoll;
} else
{this__124542.root = new_root__124545;
this__124542.cnt = (this__124542.cnt - 1);
this__124542.tail = new_tail__124543;
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
var this__124548 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__124549 = this;
if(this__124549.root.edit)
{if(((this__124549.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__124549.tail[(this__124549.cnt & 31)] = o);
this__124549.cnt = (this__124549.cnt + 1);
return tcoll;
} else
{var tail_node__124550 = (new cljs.core.VectorNode(this__124549.root.edit,this__124549.tail));
var new_tail__124551 = cljs.core.make_array.call(null,32);
(new_tail__124551[0] = o);
this__124549.tail = new_tail__124551;
if(((this__124549.cnt >>> 5) > (1 << this__124549.shift)))
{var new_root_array__124552 = cljs.core.make_array.call(null,32);
var new_shift__124553 = (this__124549.shift + 5);
(new_root_array__124552[0] = this__124549.root);
(new_root_array__124552[1] = cljs.core.new_path.call(null,this__124549.root.edit,this__124549.shift,tail_node__124550));
this__124549.root = (new cljs.core.VectorNode(this__124549.root.edit,new_root_array__124552));
this__124549.shift = new_shift__124553;
this__124549.cnt = (this__124549.cnt + 1);
return tcoll;
} else
{var new_root__124554 = cljs.core.tv_push_tail.call(null,tcoll,this__124549.shift,this__124549.root,tail_node__124550);
this__124549.root = new_root__124554;
this__124549.cnt = (this__124549.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__124555 = this;
if(this__124555.root.edit)
{this__124555.root.edit = null;
var len__124556 = (this__124555.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__124557 = cljs.core.make_array.call(null,len__124556);
cljs.core.array_copy.call(null,this__124555.tail,0,trimmed_tail__124557,0,len__124556);
return (new cljs.core.PersistentVector(null,this__124555.cnt,this__124555.shift,this__124555.root,trimmed_tail__124557,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124559 = this;
var h__5444__auto____124560 = this__124559.__hash;
if(!((h__5444__auto____124560 == null)))
{return h__5444__auto____124560;
} else
{var h__5444__auto____124561 = cljs.core.hash_coll.call(null,coll);
this__124559.__hash = h__5444__auto____124561;
return h__5444__auto____124561;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__124562 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__124563 = this;
var this__124564 = this;
return cljs.core.pr_str.call(null,this__124564);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124565 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__124566 = this;
return cljs.core._first.call(null,this__124566.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__124567 = this;
var temp__3971__auto____124568 = cljs.core.next.call(null,this__124567.front);
if(temp__3971__auto____124568)
{var f1__124569 = temp__3971__auto____124568;
return (new cljs.core.PersistentQueueSeq(this__124567.meta,f1__124569,this__124567.rear,null));
} else
{if((this__124567.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__124567.meta,this__124567.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124571 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__124571.front,this__124571.rear,this__124571.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124572 = this;
return this__124572.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124573 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__124573.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124574 = this;
var h__5444__auto____124575 = this__124574.__hash;
if(!((h__5444__auto____124575 == null)))
{return h__5444__auto____124575;
} else
{var h__5444__auto____124576 = cljs.core.hash_coll.call(null,coll);
this__124574.__hash = h__5444__auto____124576;
return h__5444__auto____124576;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__124577 = this;
if(cljs.core.truth_(this__124577.front))
{return (new cljs.core.PersistentQueue(this__124577.meta,(this__124577.count + 1),this__124577.front,cljs.core.conj.call(null,(function (){var or__3824__auto____124578 = this__124577.rear;
if(cljs.core.truth_(or__3824__auto____124578))
{return or__3824__auto____124578;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__124577.meta,(this__124577.count + 1),cljs.core.conj.call(null,this__124577.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__124579 = this;
var this__124580 = this;
return cljs.core.pr_str.call(null,this__124580);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124581 = this;
var rear__124582 = cljs.core.seq.call(null,this__124581.rear);
if(cljs.core.truth_((function (){var or__3824__auto____124583 = this__124581.front;
if(cljs.core.truth_(or__3824__auto____124583))
{return or__3824__auto____124583;
} else
{return rear__124582;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__124581.front,cljs.core.seq.call(null,rear__124582),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124584 = this;
return this__124584.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__124585 = this;
return cljs.core._first.call(null,this__124585.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__124586 = this;
if(cljs.core.truth_(this__124586.front))
{var temp__3971__auto____124587 = cljs.core.next.call(null,this__124586.front);
if(temp__3971__auto____124587)
{var f1__124588 = temp__3971__auto____124587;
return (new cljs.core.PersistentQueue(this__124586.meta,(this__124586.count - 1),f1__124588,this__124586.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__124586.meta,(this__124586.count - 1),cljs.core.seq.call(null,this__124586.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__124589 = this;
return cljs.core.first.call(null,this__124589.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__124590 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124591 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124592 = this;
return (new cljs.core.PersistentQueue(meta,this__124592.count,this__124592.front,this__124592.rear,this__124592.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124593 = this;
return this__124593.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124594 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__124595 = this;
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
var len__124598 = array.length;
var i__124599 = 0;
while(true){
if((i__124599 < len__124598))
{if((k === (array[i__124599])))
{return i__124599;
} else
{{
var G__124600 = (i__124599 + incr);
i__124599 = G__124600;
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
var a__124603 = cljs.core.hash.call(null,a);
var b__124604 = cljs.core.hash.call(null,b);
if((a__124603 < b__124604))
{return -1;
} else
{if((a__124603 > b__124604))
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
var ks__124612 = m.keys;
var len__124613 = ks__124612.length;
var so__124614 = m.strobj;
var out__124615 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__124616 = 0;
var out__124617 = cljs.core.transient$.call(null,out__124615);
while(true){
if((i__124616 < len__124613))
{var k__124618 = (ks__124612[i__124616]);
{
var G__124619 = (i__124616 + 1);
var G__124620 = cljs.core.assoc_BANG_.call(null,out__124617,k__124618,(so__124614[k__124618]));
i__124616 = G__124619;
out__124617 = G__124620;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__124617,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__124626 = {};
var l__124627 = ks.length;
var i__124628 = 0;
while(true){
if((i__124628 < l__124627))
{var k__124629 = (ks[i__124628]);
(new_obj__124626[k__124629] = (obj[k__124629]));
{
var G__124630 = (i__124628 + 1);
i__124628 = G__124630;
continue;
}
} else
{}
break;
}
return new_obj__124626;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__124633 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124634 = this;
var h__5444__auto____124635 = this__124634.__hash;
if(!((h__5444__auto____124635 == null)))
{return h__5444__auto____124635;
} else
{var h__5444__auto____124636 = cljs.core.hash_imap.call(null,coll);
this__124634.__hash = h__5444__auto____124636;
return h__5444__auto____124636;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124637 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124638 = this;
if((function (){var and__3822__auto____124639 = goog.isString(k);
if(and__3822__auto____124639)
{return !((cljs.core.scan_array.call(null,1,k,this__124638.keys) == null));
} else
{return and__3822__auto____124639;
}
})())
{return (this__124638.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__124640 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____124641 = (this__124640.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____124641)
{return or__3824__auto____124641;
} else
{return (this__124640.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__124640.keys) == null)))
{var new_strobj__124642 = cljs.core.obj_clone.call(null,this__124640.strobj,this__124640.keys);
(new_strobj__124642[k] = v);
return (new cljs.core.ObjMap(this__124640.meta,this__124640.keys,new_strobj__124642,(this__124640.update_count + 1),null));
} else
{var new_strobj__124643 = cljs.core.obj_clone.call(null,this__124640.strobj,this__124640.keys);
var new_keys__124644 = this__124640.keys.slice();
(new_strobj__124643[k] = v);
new_keys__124644.push(k);
return (new cljs.core.ObjMap(this__124640.meta,new_keys__124644,new_strobj__124643,(this__124640.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__124645 = this;
if((function (){var and__3822__auto____124646 = goog.isString(k);
if(and__3822__auto____124646)
{return !((cljs.core.scan_array.call(null,1,k,this__124645.keys) == null));
} else
{return and__3822__auto____124646;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__124668 = null;
var G__124668__2 = (function (this_sym124647,k){
var this__124649 = this;
var this_sym124647__124650 = this;
var coll__124651 = this_sym124647__124650;
return coll__124651.cljs$core$ILookup$_lookup$arity$2(coll__124651,k);
});
var G__124668__3 = (function (this_sym124648,k,not_found){
var this__124649 = this;
var this_sym124648__124652 = this;
var coll__124653 = this_sym124648__124652;
return coll__124653.cljs$core$ILookup$_lookup$arity$3(coll__124653,k,not_found);
});
G__124668 = function(this_sym124648,k,not_found){
switch(arguments.length){
case 2:
return G__124668__2.call(this,this_sym124648,k);
case 3:
return G__124668__3.call(this,this_sym124648,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124668;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym124631,args124632){
var this__124654 = this;
return this_sym124631.call.apply(this_sym124631,[this_sym124631].concat(args124632.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__124655 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__124656 = this;
var this__124657 = this;
return cljs.core.pr_str.call(null,this__124657);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124658 = this;
if((this__124658.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__124621_SHARP_){
return cljs.core.vector.call(null,p1__124621_SHARP_,(this__124658.strobj[p1__124621_SHARP_]));
}),this__124658.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124659 = this;
return this__124659.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124660 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124661 = this;
return (new cljs.core.ObjMap(meta,this__124661.keys,this__124661.strobj,this__124661.update_count,this__124661.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124662 = this;
return this__124662.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124663 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__124663.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__124664 = this;
if((function (){var and__3822__auto____124665 = goog.isString(k);
if(and__3822__auto____124665)
{return !((cljs.core.scan_array.call(null,1,k,this__124664.keys) == null));
} else
{return and__3822__auto____124665;
}
})())
{var new_keys__124666 = this__124664.keys.slice();
var new_strobj__124667 = cljs.core.obj_clone.call(null,this__124664.strobj,this__124664.keys);
new_keys__124666.splice(cljs.core.scan_array.call(null,1,k,new_keys__124666),1);
cljs.core.js_delete.call(null,new_strobj__124667,k);
return (new cljs.core.ObjMap(this__124664.meta,new_keys__124666,new_strobj__124667,(this__124664.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124672 = this;
var h__5444__auto____124673 = this__124672.__hash;
if(!((h__5444__auto____124673 == null)))
{return h__5444__auto____124673;
} else
{var h__5444__auto____124674 = cljs.core.hash_imap.call(null,coll);
this__124672.__hash = h__5444__auto____124674;
return h__5444__auto____124674;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124675 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124676 = this;
var bucket__124677 = (this__124676.hashobj[cljs.core.hash.call(null,k)]);
var i__124678 = (cljs.core.truth_(bucket__124677)?cljs.core.scan_array.call(null,2,k,bucket__124677):null);
if(cljs.core.truth_(i__124678))
{return (bucket__124677[(i__124678 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__124679 = this;
var h__124680 = cljs.core.hash.call(null,k);
var bucket__124681 = (this__124679.hashobj[h__124680]);
if(cljs.core.truth_(bucket__124681))
{var new_bucket__124682 = bucket__124681.slice();
var new_hashobj__124683 = goog.object.clone(this__124679.hashobj);
(new_hashobj__124683[h__124680] = new_bucket__124682);
var temp__3971__auto____124684 = cljs.core.scan_array.call(null,2,k,new_bucket__124682);
if(cljs.core.truth_(temp__3971__auto____124684))
{var i__124685 = temp__3971__auto____124684;
(new_bucket__124682[(i__124685 + 1)] = v);
return (new cljs.core.HashMap(this__124679.meta,this__124679.count,new_hashobj__124683,null));
} else
{new_bucket__124682.push(k,v);
return (new cljs.core.HashMap(this__124679.meta,(this__124679.count + 1),new_hashobj__124683,null));
}
} else
{var new_hashobj__124686 = goog.object.clone(this__124679.hashobj);
(new_hashobj__124686[h__124680] = [k,v]);
return (new cljs.core.HashMap(this__124679.meta,(this__124679.count + 1),new_hashobj__124686,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__124687 = this;
var bucket__124688 = (this__124687.hashobj[cljs.core.hash.call(null,k)]);
var i__124689 = (cljs.core.truth_(bucket__124688)?cljs.core.scan_array.call(null,2,k,bucket__124688):null);
if(cljs.core.truth_(i__124689))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__124714 = null;
var G__124714__2 = (function (this_sym124690,k){
var this__124692 = this;
var this_sym124690__124693 = this;
var coll__124694 = this_sym124690__124693;
return coll__124694.cljs$core$ILookup$_lookup$arity$2(coll__124694,k);
});
var G__124714__3 = (function (this_sym124691,k,not_found){
var this__124692 = this;
var this_sym124691__124695 = this;
var coll__124696 = this_sym124691__124695;
return coll__124696.cljs$core$ILookup$_lookup$arity$3(coll__124696,k,not_found);
});
G__124714 = function(this_sym124691,k,not_found){
switch(arguments.length){
case 2:
return G__124714__2.call(this,this_sym124691,k);
case 3:
return G__124714__3.call(this,this_sym124691,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124714;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym124670,args124671){
var this__124697 = this;
return this_sym124670.call.apply(this_sym124670,[this_sym124670].concat(args124671.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__124698 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__124699 = this;
var this__124700 = this;
return cljs.core.pr_str.call(null,this__124700);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124701 = this;
if((this__124701.count > 0))
{var hashes__124702 = cljs.core.js_keys.call(null,this__124701.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__124669_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__124701.hashobj[p1__124669_SHARP_])));
}),hashes__124702);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124703 = this;
return this__124703.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124704 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124705 = this;
return (new cljs.core.HashMap(meta,this__124705.count,this__124705.hashobj,this__124705.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124706 = this;
return this__124706.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124707 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__124707.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__124708 = this;
var h__124709 = cljs.core.hash.call(null,k);
var bucket__124710 = (this__124708.hashobj[h__124709]);
var i__124711 = (cljs.core.truth_(bucket__124710)?cljs.core.scan_array.call(null,2,k,bucket__124710):null);
if(cljs.core.not.call(null,i__124711))
{return coll;
} else
{var new_hashobj__124712 = goog.object.clone(this__124708.hashobj);
if((3 > bucket__124710.length))
{cljs.core.js_delete.call(null,new_hashobj__124712,h__124709);
} else
{var new_bucket__124713 = bucket__124710.slice();
new_bucket__124713.splice(i__124711,2);
(new_hashobj__124712[h__124709] = new_bucket__124713);
}
return (new cljs.core.HashMap(this__124708.meta,(this__124708.count - 1),new_hashobj__124712,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__124715 = ks.length;
var i__124716 = 0;
var out__124717 = cljs.core.HashMap.EMPTY;
while(true){
if((i__124716 < len__124715))
{{
var G__124718 = (i__124716 + 1);
var G__124719 = cljs.core.assoc.call(null,out__124717,(ks[i__124716]),(vs[i__124716]));
i__124716 = G__124718;
out__124717 = G__124719;
continue;
}
} else
{return out__124717;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__124723 = m.arr;
var len__124724 = arr__124723.length;
var i__124725 = 0;
while(true){
if((len__124724 <= i__124725))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__124723[i__124725]),k))
{return i__124725;
} else
{if("\uFDD0'else")
{{
var G__124726 = (i__124725 + 2);
i__124725 = G__124726;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__124729 = this;
return (new cljs.core.TransientArrayMap({},this__124729.arr.length,this__124729.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__124730 = this;
var h__5444__auto____124731 = this__124730.__hash;
if(!((h__5444__auto____124731 == null)))
{return h__5444__auto____124731;
} else
{var h__5444__auto____124732 = cljs.core.hash_imap.call(null,coll);
this__124730.__hash = h__5444__auto____124732;
return h__5444__auto____124732;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__124733 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__124734 = this;
var idx__124735 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__124735 === -1))
{return not_found;
} else
{return (this__124734.arr[(idx__124735 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__124736 = this;
var idx__124737 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__124737 === -1))
{if((this__124736.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__124736.meta,(this__124736.cnt + 1),(function (){var G__124738__124739 = this__124736.arr.slice();
G__124738__124739.push(k);
G__124738__124739.push(v);
return G__124738__124739;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__124736.arr[(idx__124737 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__124736.meta,this__124736.cnt,(function (){var G__124740__124741 = this__124736.arr.slice();
(G__124740__124741[(idx__124737 + 1)] = v);
return G__124740__124741;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__124742 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__124774 = null;
var G__124774__2 = (function (this_sym124743,k){
var this__124745 = this;
var this_sym124743__124746 = this;
var coll__124747 = this_sym124743__124746;
return coll__124747.cljs$core$ILookup$_lookup$arity$2(coll__124747,k);
});
var G__124774__3 = (function (this_sym124744,k,not_found){
var this__124745 = this;
var this_sym124744__124748 = this;
var coll__124749 = this_sym124744__124748;
return coll__124749.cljs$core$ILookup$_lookup$arity$3(coll__124749,k,not_found);
});
G__124774 = function(this_sym124744,k,not_found){
switch(arguments.length){
case 2:
return G__124774__2.call(this,this_sym124744,k);
case 3:
return G__124774__3.call(this,this_sym124744,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__124774;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym124727,args124728){
var this__124750 = this;
return this_sym124727.call.apply(this_sym124727,[this_sym124727].concat(args124728.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__124751 = this;
var len__124752 = this__124751.arr.length;
var i__124753 = 0;
var init__124754 = init;
while(true){
if((i__124753 < len__124752))
{var init__124755 = f.call(null,init__124754,(this__124751.arr[i__124753]),(this__124751.arr[(i__124753 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__124755))
{return cljs.core.deref.call(null,init__124755);
} else
{{
var G__124775 = (i__124753 + 2);
var G__124776 = init__124755;
i__124753 = G__124775;
init__124754 = G__124776;
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
var this__124756 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__124757 = this;
var this__124758 = this;
return cljs.core.pr_str.call(null,this__124758);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__124759 = this;
if((this__124759.cnt > 0))
{var len__124760 = this__124759.arr.length;
var array_map_seq__124761 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__124760))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__124759.arr[i]),(this__124759.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__124761.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__124762 = this;
return this__124762.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__124763 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__124764 = this;
return (new cljs.core.PersistentArrayMap(meta,this__124764.cnt,this__124764.arr,this__124764.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__124765 = this;
return this__124765.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__124766 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__124766.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__124767 = this;
var idx__124768 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__124768 >= 0))
{var len__124769 = this__124767.arr.length;
var new_len__124770 = (len__124769 - 2);
if((new_len__124770 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__124771 = cljs.core.make_array.call(null,new_len__124770);
var s__124772 = 0;
var d__124773 = 0;
while(true){
if((s__124772 >= len__124769))
{return (new cljs.core.PersistentArrayMap(this__124767.meta,(this__124767.cnt - 1),new_arr__124771,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__124767.arr[s__124772])))
{{
var G__124777 = (s__124772 + 2);
var G__124778 = d__124773;
s__124772 = G__124777;
d__124773 = G__124778;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__124771[d__124773] = (this__124767.arr[s__124772]));
(new_arr__124771[(d__124773 + 1)] = (this__124767.arr[(s__124772 + 1)]));
{
var G__124779 = (s__124772 + 2);
var G__124780 = (d__124773 + 2);
s__124772 = G__124779;
d__124773 = G__124780;
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
var len__124781 = cljs.core.count.call(null,ks);
var i__124782 = 0;
var out__124783 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__124782 < len__124781))
{{
var G__124784 = (i__124782 + 1);
var G__124785 = cljs.core.assoc_BANG_.call(null,out__124783,(ks[i__124782]),(vs[i__124782]));
i__124782 = G__124784;
out__124783 = G__124785;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__124783);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__124786 = this;
if(cljs.core.truth_(this__124786.editable_QMARK_))
{var idx__124787 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__124787 >= 0))
{(this__124786.arr[idx__124787] = (this__124786.arr[(this__124786.len - 2)]));
(this__124786.arr[(idx__124787 + 1)] = (this__124786.arr[(this__124786.len - 1)]));
var G__124788__124789 = this__124786.arr;
G__124788__124789.pop();
G__124788__124789.pop();
G__124788__124789;
this__124786.len = (this__124786.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__124790 = this;
if(cljs.core.truth_(this__124790.editable_QMARK_))
{var idx__124791 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__124791 === -1))
{if(((this__124790.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__124790.len = (this__124790.len + 2);
this__124790.arr.push(key);
this__124790.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__124790.len,this__124790.arr),key,val);
}
} else
{if((val === (this__124790.arr[(idx__124791 + 1)])))
{return tcoll;
} else
{(this__124790.arr[(idx__124791 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__124792 = this;
if(cljs.core.truth_(this__124792.editable_QMARK_))
{if((function (){var G__124793__124794 = o;
if(G__124793__124794)
{if((function (){var or__3824__auto____124795 = (G__124793__124794.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____124795)
{return or__3824__auto____124795;
} else
{return G__124793__124794.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__124793__124794.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__124793__124794);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__124793__124794);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__124796 = cljs.core.seq.call(null,o);
var tcoll__124797 = tcoll;
while(true){
var temp__3971__auto____124798 = cljs.core.first.call(null,es__124796);
if(cljs.core.truth_(temp__3971__auto____124798))
{var e__124799 = temp__3971__auto____124798;
{
var G__124805 = cljs.core.next.call(null,es__124796);
var G__124806 = tcoll__124797.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__124797,cljs.core.key.call(null,e__124799),cljs.core.val.call(null,e__124799));
es__124796 = G__124805;
tcoll__124797 = G__124806;
continue;
}
} else
{return tcoll__124797;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__124800 = this;
if(cljs.core.truth_(this__124800.editable_QMARK_))
{this__124800.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__124800.len,2),this__124800.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__124801 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__124802 = this;
if(cljs.core.truth_(this__124802.editable_QMARK_))
{var idx__124803 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__124803 === -1))
{return not_found;
} else
{return (this__124802.arr[(idx__124803 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__124804 = this;
if(cljs.core.truth_(this__124804.editable_QMARK_))
{return cljs.core.quot.call(null,this__124804.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__124809 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__124810 = 0;
while(true){
if((i__124810 < len))
{{
var G__124811 = cljs.core.assoc_BANG_.call(null,out__124809,(arr[i__124810]),(arr[(i__124810 + 1)]));
var G__124812 = (i__124810 + 2);
out__124809 = G__124811;
i__124810 = G__124812;
continue;
}
} else
{return out__124809;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5565__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5565__auto__,writer__5566__auto__){
return cljs.core._write.call(null,writer__5566__auto__,"cljs.core/Box");
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
var G__124817__124818 = arr.slice();
(G__124817__124818[i] = a);
return G__124817__124818;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__124819__124820 = arr.slice();
(G__124819__124820[i] = a);
(G__124819__124820[j] = b);
return G__124819__124820;
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
var new_arr__124822 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__124822,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__124822,(2 * i),(new_arr__124822.length - (2 * i)));
return new_arr__124822;
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
var editable__124825 = inode.ensure_editable(edit);
(editable__124825.arr[i] = a);
return editable__124825;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__124826 = inode.ensure_editable(edit);
(editable__124826.arr[i] = a);
(editable__124826.arr[j] = b);
return editable__124826;
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
var len__124833 = arr.length;
var i__124834 = 0;
var init__124835 = init;
while(true){
if((i__124834 < len__124833))
{var init__124838 = (function (){var k__124836 = (arr[i__124834]);
if(!((k__124836 == null)))
{return f.call(null,init__124835,k__124836,(arr[(i__124834 + 1)]));
} else
{var node__124837 = (arr[(i__124834 + 1)]);
if(!((node__124837 == null)))
{return node__124837.kv_reduce(f,init__124835);
} else
{return init__124835;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__124838))
{return cljs.core.deref.call(null,init__124838);
} else
{{
var G__124839 = (i__124834 + 2);
var G__124840 = init__124838;
i__124834 = G__124839;
init__124835 = G__124840;
continue;
}
}
} else
{return init__124835;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__124841 = this;
var inode__124842 = this;
if((this__124841.bitmap === bit))
{return null;
} else
{var editable__124843 = inode__124842.ensure_editable(e);
var earr__124844 = editable__124843.arr;
var len__124845 = earr__124844.length;
editable__124843.bitmap = (bit ^ editable__124843.bitmap);
cljs.core.array_copy.call(null,earr__124844,(2 * (i + 1)),earr__124844,(2 * i),(len__124845 - (2 * (i + 1))));
(earr__124844[(len__124845 - 2)] = null);
(earr__124844[(len__124845 - 1)] = null);
return editable__124843;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__124846 = this;
var inode__124847 = this;
var bit__124848 = (1 << ((hash >>> shift) & 0x01f));
var idx__124849 = cljs.core.bitmap_indexed_node_index.call(null,this__124846.bitmap,bit__124848);
if(((this__124846.bitmap & bit__124848) === 0))
{var n__124850 = cljs.core.bit_count.call(null,this__124846.bitmap);
if(((2 * n__124850) < this__124846.arr.length))
{var editable__124851 = inode__124847.ensure_editable(edit);
var earr__124852 = editable__124851.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__124852,(2 * idx__124849),earr__124852,(2 * (idx__124849 + 1)),(2 * (n__124850 - idx__124849)));
(earr__124852[(2 * idx__124849)] = key);
(earr__124852[((2 * idx__124849) + 1)] = val);
editable__124851.bitmap = (editable__124851.bitmap | bit__124848);
return editable__124851;
} else
{if((n__124850 >= 16))
{var nodes__124853 = cljs.core.make_array.call(null,32);
var jdx__124854 = ((hash >>> shift) & 0x01f);
(nodes__124853[jdx__124854] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__124855 = 0;
var j__124856 = 0;
while(true){
if((i__124855 < 32))
{if((((this__124846.bitmap >>> i__124855) & 1) === 0))
{{
var G__124909 = (i__124855 + 1);
var G__124910 = j__124856;
i__124855 = G__124909;
j__124856 = G__124910;
continue;
}
} else
{(nodes__124853[i__124855] = ((!(((this__124846.arr[j__124856]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__124846.arr[j__124856])),(this__124846.arr[j__124856]),(this__124846.arr[(j__124856 + 1)]),added_leaf_QMARK_):(this__124846.arr[(j__124856 + 1)])));
{
var G__124911 = (i__124855 + 1);
var G__124912 = (j__124856 + 2);
i__124855 = G__124911;
j__124856 = G__124912;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__124850 + 1),nodes__124853));
} else
{if("\uFDD0'else")
{var new_arr__124857 = cljs.core.make_array.call(null,(2 * (n__124850 + 4)));
cljs.core.array_copy.call(null,this__124846.arr,0,new_arr__124857,0,(2 * idx__124849));
(new_arr__124857[(2 * idx__124849)] = key);
(new_arr__124857[((2 * idx__124849) + 1)] = val);
cljs.core.array_copy.call(null,this__124846.arr,(2 * idx__124849),new_arr__124857,(2 * (idx__124849 + 1)),(2 * (n__124850 - idx__124849)));
added_leaf_QMARK_.val = true;
var editable__124858 = inode__124847.ensure_editable(edit);
editable__124858.arr = new_arr__124857;
editable__124858.bitmap = (editable__124858.bitmap | bit__124848);
return editable__124858;
} else
{return null;
}
}
}
} else
{var key_or_nil__124859 = (this__124846.arr[(2 * idx__124849)]);
var val_or_node__124860 = (this__124846.arr[((2 * idx__124849) + 1)]);
if((key_or_nil__124859 == null))
{var n__124861 = val_or_node__124860.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__124861 === val_or_node__124860))
{return inode__124847;
} else
{return cljs.core.edit_and_set.call(null,inode__124847,edit,((2 * idx__124849) + 1),n__124861);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__124859))
{if((val === val_or_node__124860))
{return inode__124847;
} else
{return cljs.core.edit_and_set.call(null,inode__124847,edit,((2 * idx__124849) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__124847,edit,(2 * idx__124849),null,((2 * idx__124849) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__124859,val_or_node__124860,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__124862 = this;
var inode__124863 = this;
return cljs.core.create_inode_seq.call(null,this__124862.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__124864 = this;
var inode__124865 = this;
var bit__124866 = (1 << ((hash >>> shift) & 0x01f));
if(((this__124864.bitmap & bit__124866) === 0))
{return inode__124865;
} else
{var idx__124867 = cljs.core.bitmap_indexed_node_index.call(null,this__124864.bitmap,bit__124866);
var key_or_nil__124868 = (this__124864.arr[(2 * idx__124867)]);
var val_or_node__124869 = (this__124864.arr[((2 * idx__124867) + 1)]);
if((key_or_nil__124868 == null))
{var n__124870 = val_or_node__124869.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__124870 === val_or_node__124869))
{return inode__124865;
} else
{if(!((n__124870 == null)))
{return cljs.core.edit_and_set.call(null,inode__124865,edit,((2 * idx__124867) + 1),n__124870);
} else
{if((this__124864.bitmap === bit__124866))
{return null;
} else
{if("\uFDD0'else")
{return inode__124865.edit_and_remove_pair(edit,bit__124866,idx__124867);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__124868))
{(removed_leaf_QMARK_[0] = true);
return inode__124865.edit_and_remove_pair(edit,bit__124866,idx__124867);
} else
{if("\uFDD0'else")
{return inode__124865;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__124871 = this;
var inode__124872 = this;
if((e === this__124871.edit))
{return inode__124872;
} else
{var n__124873 = cljs.core.bit_count.call(null,this__124871.bitmap);
var new_arr__124874 = cljs.core.make_array.call(null,(((n__124873 < 0))?4:(2 * (n__124873 + 1))));
cljs.core.array_copy.call(null,this__124871.arr,0,new_arr__124874,0,(2 * n__124873));
return (new cljs.core.BitmapIndexedNode(e,this__124871.bitmap,new_arr__124874));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__124875 = this;
var inode__124876 = this;
return cljs.core.inode_kv_reduce.call(null,this__124875.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__124877 = this;
var inode__124878 = this;
var bit__124879 = (1 << ((hash >>> shift) & 0x01f));
if(((this__124877.bitmap & bit__124879) === 0))
{return not_found;
} else
{var idx__124880 = cljs.core.bitmap_indexed_node_index.call(null,this__124877.bitmap,bit__124879);
var key_or_nil__124881 = (this__124877.arr[(2 * idx__124880)]);
var val_or_node__124882 = (this__124877.arr[((2 * idx__124880) + 1)]);
if((key_or_nil__124881 == null))
{return val_or_node__124882.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__124881))
{return cljs.core.PersistentVector.fromArray([key_or_nil__124881,val_or_node__124882], true);
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
var this__124883 = this;
var inode__124884 = this;
var bit__124885 = (1 << ((hash >>> shift) & 0x01f));
if(((this__124883.bitmap & bit__124885) === 0))
{return inode__124884;
} else
{var idx__124886 = cljs.core.bitmap_indexed_node_index.call(null,this__124883.bitmap,bit__124885);
var key_or_nil__124887 = (this__124883.arr[(2 * idx__124886)]);
var val_or_node__124888 = (this__124883.arr[((2 * idx__124886) + 1)]);
if((key_or_nil__124887 == null))
{var n__124889 = val_or_node__124888.inode_without((shift + 5),hash,key);
if((n__124889 === val_or_node__124888))
{return inode__124884;
} else
{if(!((n__124889 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__124883.bitmap,cljs.core.clone_and_set.call(null,this__124883.arr,((2 * idx__124886) + 1),n__124889)));
} else
{if((this__124883.bitmap === bit__124885))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__124883.bitmap ^ bit__124885),cljs.core.remove_pair.call(null,this__124883.arr,idx__124886)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__124887))
{return (new cljs.core.BitmapIndexedNode(null,(this__124883.bitmap ^ bit__124885),cljs.core.remove_pair.call(null,this__124883.arr,idx__124886)));
} else
{if("\uFDD0'else")
{return inode__124884;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__124890 = this;
var inode__124891 = this;
var bit__124892 = (1 << ((hash >>> shift) & 0x01f));
var idx__124893 = cljs.core.bitmap_indexed_node_index.call(null,this__124890.bitmap,bit__124892);
if(((this__124890.bitmap & bit__124892) === 0))
{var n__124894 = cljs.core.bit_count.call(null,this__124890.bitmap);
if((n__124894 >= 16))
{var nodes__124895 = cljs.core.make_array.call(null,32);
var jdx__124896 = ((hash >>> shift) & 0x01f);
(nodes__124895[jdx__124896] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__124897 = 0;
var j__124898 = 0;
while(true){
if((i__124897 < 32))
{if((((this__124890.bitmap >>> i__124897) & 1) === 0))
{{
var G__124913 = (i__124897 + 1);
var G__124914 = j__124898;
i__124897 = G__124913;
j__124898 = G__124914;
continue;
}
} else
{(nodes__124895[i__124897] = ((!(((this__124890.arr[j__124898]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__124890.arr[j__124898])),(this__124890.arr[j__124898]),(this__124890.arr[(j__124898 + 1)]),added_leaf_QMARK_):(this__124890.arr[(j__124898 + 1)])));
{
var G__124915 = (i__124897 + 1);
var G__124916 = (j__124898 + 2);
i__124897 = G__124915;
j__124898 = G__124916;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__124894 + 1),nodes__124895));
} else
{var new_arr__124899 = cljs.core.make_array.call(null,(2 * (n__124894 + 1)));
cljs.core.array_copy.call(null,this__124890.arr,0,new_arr__124899,0,(2 * idx__124893));
(new_arr__124899[(2 * idx__124893)] = key);
(new_arr__124899[((2 * idx__124893) + 1)] = val);
cljs.core.array_copy.call(null,this__124890.arr,(2 * idx__124893),new_arr__124899,(2 * (idx__124893 + 1)),(2 * (n__124894 - idx__124893)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__124890.bitmap | bit__124892),new_arr__124899));
}
} else
{var key_or_nil__124900 = (this__124890.arr[(2 * idx__124893)]);
var val_or_node__124901 = (this__124890.arr[((2 * idx__124893) + 1)]);
if((key_or_nil__124900 == null))
{var n__124902 = val_or_node__124901.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__124902 === val_or_node__124901))
{return inode__124891;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__124890.bitmap,cljs.core.clone_and_set.call(null,this__124890.arr,((2 * idx__124893) + 1),n__124902)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__124900))
{if((val === val_or_node__124901))
{return inode__124891;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__124890.bitmap,cljs.core.clone_and_set.call(null,this__124890.arr,((2 * idx__124893) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__124890.bitmap,cljs.core.clone_and_set.call(null,this__124890.arr,(2 * idx__124893),null,((2 * idx__124893) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__124900,val_or_node__124901,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__124903 = this;
var inode__124904 = this;
var bit__124905 = (1 << ((hash >>> shift) & 0x01f));
if(((this__124903.bitmap & bit__124905) === 0))
{return not_found;
} else
{var idx__124906 = cljs.core.bitmap_indexed_node_index.call(null,this__124903.bitmap,bit__124905);
var key_or_nil__124907 = (this__124903.arr[(2 * idx__124906)]);
var val_or_node__124908 = (this__124903.arr[((2 * idx__124906) + 1)]);
if((key_or_nil__124907 == null))
{return val_or_node__124908.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__124907))
{return val_or_node__124908;
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
var arr__124924 = array_node.arr;
var len__124925 = (2 * (array_node.cnt - 1));
var new_arr__124926 = cljs.core.make_array.call(null,len__124925);
var i__124927 = 0;
var j__124928 = 1;
var bitmap__124929 = 0;
while(true){
if((i__124927 < len__124925))
{if((function (){var and__3822__auto____124930 = !((i__124927 === idx));
if(and__3822__auto____124930)
{return !(((arr__124924[i__124927]) == null));
} else
{return and__3822__auto____124930;
}
})())
{(new_arr__124926[j__124928] = (arr__124924[i__124927]));
{
var G__124931 = (i__124927 + 1);
var G__124932 = (j__124928 + 2);
var G__124933 = (bitmap__124929 | (1 << i__124927));
i__124927 = G__124931;
j__124928 = G__124932;
bitmap__124929 = G__124933;
continue;
}
} else
{{
var G__124934 = (i__124927 + 1);
var G__124935 = j__124928;
var G__124936 = bitmap__124929;
i__124927 = G__124934;
j__124928 = G__124935;
bitmap__124929 = G__124936;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__124929,new_arr__124926));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__124937 = this;
var inode__124938 = this;
var idx__124939 = ((hash >>> shift) & 0x01f);
var node__124940 = (this__124937.arr[idx__124939]);
if((node__124940 == null))
{var editable__124941 = cljs.core.edit_and_set.call(null,inode__124938,edit,idx__124939,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__124941.cnt = (editable__124941.cnt + 1);
return editable__124941;
} else
{var n__124942 = node__124940.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__124942 === node__124940))
{return inode__124938;
} else
{return cljs.core.edit_and_set.call(null,inode__124938,edit,idx__124939,n__124942);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__124943 = this;
var inode__124944 = this;
return cljs.core.create_array_node_seq.call(null,this__124943.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__124945 = this;
var inode__124946 = this;
var idx__124947 = ((hash >>> shift) & 0x01f);
var node__124948 = (this__124945.arr[idx__124947]);
if((node__124948 == null))
{return inode__124946;
} else
{var n__124949 = node__124948.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__124949 === node__124948))
{return inode__124946;
} else
{if((n__124949 == null))
{if((this__124945.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__124946,edit,idx__124947);
} else
{var editable__124950 = cljs.core.edit_and_set.call(null,inode__124946,edit,idx__124947,n__124949);
editable__124950.cnt = (editable__124950.cnt - 1);
return editable__124950;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__124946,edit,idx__124947,n__124949);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__124951 = this;
var inode__124952 = this;
if((e === this__124951.edit))
{return inode__124952;
} else
{return (new cljs.core.ArrayNode(e,this__124951.cnt,this__124951.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__124953 = this;
var inode__124954 = this;
var len__124955 = this__124953.arr.length;
var i__124956 = 0;
var init__124957 = init;
while(true){
if((i__124956 < len__124955))
{var node__124958 = (this__124953.arr[i__124956]);
if(!((node__124958 == null)))
{var init__124959 = node__124958.kv_reduce(f,init__124957);
if(cljs.core.reduced_QMARK_.call(null,init__124959))
{return cljs.core.deref.call(null,init__124959);
} else
{{
var G__124978 = (i__124956 + 1);
var G__124979 = init__124959;
i__124956 = G__124978;
init__124957 = G__124979;
continue;
}
}
} else
{return null;
}
} else
{return init__124957;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__124960 = this;
var inode__124961 = this;
var idx__124962 = ((hash >>> shift) & 0x01f);
var node__124963 = (this__124960.arr[idx__124962]);
if(!((node__124963 == null)))
{return node__124963.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__124964 = this;
var inode__124965 = this;
var idx__124966 = ((hash >>> shift) & 0x01f);
var node__124967 = (this__124964.arr[idx__124966]);
if(!((node__124967 == null)))
{var n__124968 = node__124967.inode_without((shift + 5),hash,key);
if((n__124968 === node__124967))
{return inode__124965;
} else
{if((n__124968 == null))
{if((this__124964.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__124965,null,idx__124966);
} else
{return (new cljs.core.ArrayNode(null,(this__124964.cnt - 1),cljs.core.clone_and_set.call(null,this__124964.arr,idx__124966,n__124968)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__124964.cnt,cljs.core.clone_and_set.call(null,this__124964.arr,idx__124966,n__124968)));
} else
{return null;
}
}
}
} else
{return inode__124965;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__124969 = this;
var inode__124970 = this;
var idx__124971 = ((hash >>> shift) & 0x01f);
var node__124972 = (this__124969.arr[idx__124971]);
if((node__124972 == null))
{return (new cljs.core.ArrayNode(null,(this__124969.cnt + 1),cljs.core.clone_and_set.call(null,this__124969.arr,idx__124971,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__124973 = node__124972.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__124973 === node__124972))
{return inode__124970;
} else
{return (new cljs.core.ArrayNode(null,this__124969.cnt,cljs.core.clone_and_set.call(null,this__124969.arr,idx__124971,n__124973)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__124974 = this;
var inode__124975 = this;
var idx__124976 = ((hash >>> shift) & 0x01f);
var node__124977 = (this__124974.arr[idx__124976]);
if(!((node__124977 == null)))
{return node__124977.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__124982 = (2 * cnt);
var i__124983 = 0;
while(true){
if((i__124983 < lim__124982))
{if(cljs.core.key_test.call(null,key,(arr[i__124983])))
{return i__124983;
} else
{{
var G__124984 = (i__124983 + 2);
i__124983 = G__124984;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__124985 = this;
var inode__124986 = this;
if((hash === this__124985.collision_hash))
{var idx__124987 = cljs.core.hash_collision_node_find_index.call(null,this__124985.arr,this__124985.cnt,key);
if((idx__124987 === -1))
{if((this__124985.arr.length > (2 * this__124985.cnt)))
{var editable__124988 = cljs.core.edit_and_set.call(null,inode__124986,edit,(2 * this__124985.cnt),key,((2 * this__124985.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__124988.cnt = (editable__124988.cnt + 1);
return editable__124988;
} else
{var len__124989 = this__124985.arr.length;
var new_arr__124990 = cljs.core.make_array.call(null,(len__124989 + 2));
cljs.core.array_copy.call(null,this__124985.arr,0,new_arr__124990,0,len__124989);
(new_arr__124990[len__124989] = key);
(new_arr__124990[(len__124989 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__124986.ensure_editable_array(edit,(this__124985.cnt + 1),new_arr__124990);
}
} else
{if(((this__124985.arr[(idx__124987 + 1)]) === val))
{return inode__124986;
} else
{return cljs.core.edit_and_set.call(null,inode__124986,edit,(idx__124987 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__124985.collision_hash >>> shift) & 0x01f)),[null,inode__124986,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__124991 = this;
var inode__124992 = this;
return cljs.core.create_inode_seq.call(null,this__124991.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__124993 = this;
var inode__124994 = this;
var idx__124995 = cljs.core.hash_collision_node_find_index.call(null,this__124993.arr,this__124993.cnt,key);
if((idx__124995 === -1))
{return inode__124994;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__124993.cnt === 1))
{return null;
} else
{var editable__124996 = inode__124994.ensure_editable(edit);
var earr__124997 = editable__124996.arr;
(earr__124997[idx__124995] = (earr__124997[((2 * this__124993.cnt) - 2)]));
(earr__124997[(idx__124995 + 1)] = (earr__124997[((2 * this__124993.cnt) - 1)]));
(earr__124997[((2 * this__124993.cnt) - 1)] = null);
(earr__124997[((2 * this__124993.cnt) - 2)] = null);
editable__124996.cnt = (editable__124996.cnt - 1);
return editable__124996;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__124998 = this;
var inode__124999 = this;
if((e === this__124998.edit))
{return inode__124999;
} else
{var new_arr__125000 = cljs.core.make_array.call(null,(2 * (this__124998.cnt + 1)));
cljs.core.array_copy.call(null,this__124998.arr,0,new_arr__125000,0,(2 * this__124998.cnt));
return (new cljs.core.HashCollisionNode(e,this__124998.collision_hash,this__124998.cnt,new_arr__125000));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__125001 = this;
var inode__125002 = this;
return cljs.core.inode_kv_reduce.call(null,this__125001.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__125003 = this;
var inode__125004 = this;
var idx__125005 = cljs.core.hash_collision_node_find_index.call(null,this__125003.arr,this__125003.cnt,key);
if((idx__125005 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__125003.arr[idx__125005])))
{return cljs.core.PersistentVector.fromArray([(this__125003.arr[idx__125005]),(this__125003.arr[(idx__125005 + 1)])], true);
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
var this__125006 = this;
var inode__125007 = this;
var idx__125008 = cljs.core.hash_collision_node_find_index.call(null,this__125006.arr,this__125006.cnt,key);
if((idx__125008 === -1))
{return inode__125007;
} else
{if((this__125006.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__125006.collision_hash,(this__125006.cnt - 1),cljs.core.remove_pair.call(null,this__125006.arr,cljs.core.quot.call(null,idx__125008,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__125009 = this;
var inode__125010 = this;
if((hash === this__125009.collision_hash))
{var idx__125011 = cljs.core.hash_collision_node_find_index.call(null,this__125009.arr,this__125009.cnt,key);
if((idx__125011 === -1))
{var len__125012 = this__125009.arr.length;
var new_arr__125013 = cljs.core.make_array.call(null,(len__125012 + 2));
cljs.core.array_copy.call(null,this__125009.arr,0,new_arr__125013,0,len__125012);
(new_arr__125013[len__125012] = key);
(new_arr__125013[(len__125012 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__125009.collision_hash,(this__125009.cnt + 1),new_arr__125013));
} else
{if(cljs.core._EQ_.call(null,(this__125009.arr[idx__125011]),val))
{return inode__125010;
} else
{return (new cljs.core.HashCollisionNode(null,this__125009.collision_hash,this__125009.cnt,cljs.core.clone_and_set.call(null,this__125009.arr,(idx__125011 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__125009.collision_hash >>> shift) & 0x01f)),[null,inode__125010])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__125014 = this;
var inode__125015 = this;
var idx__125016 = cljs.core.hash_collision_node_find_index.call(null,this__125014.arr,this__125014.cnt,key);
if((idx__125016 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__125014.arr[idx__125016])))
{return (this__125014.arr[(idx__125016 + 1)]);
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
var this__125017 = this;
var inode__125018 = this;
if((e === this__125017.edit))
{this__125017.arr = array;
this__125017.cnt = count;
return inode__125018;
} else
{return (new cljs.core.HashCollisionNode(this__125017.edit,this__125017.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__125023 = cljs.core.hash.call(null,key1);
if((key1hash__125023 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__125023,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___125024 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__125023,key1,val1,added_leaf_QMARK___125024).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___125024);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__125025 = cljs.core.hash.call(null,key1);
if((key1hash__125025 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__125025,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___125026 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__125025,key1,val1,added_leaf_QMARK___125026).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___125026);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125027 = this;
var h__5444__auto____125028 = this__125027.__hash;
if(!((h__5444__auto____125028 == null)))
{return h__5444__auto____125028;
} else
{var h__5444__auto____125029 = cljs.core.hash_coll.call(null,coll);
this__125027.__hash = h__5444__auto____125029;
return h__5444__auto____125029;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__125030 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__125031 = this;
var this__125032 = this;
return cljs.core.pr_str.call(null,this__125032);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__125033 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__125034 = this;
if((this__125034.s == null))
{return cljs.core.PersistentVector.fromArray([(this__125034.nodes[this__125034.i]),(this__125034.nodes[(this__125034.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__125034.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__125035 = this;
if((this__125035.s == null))
{return cljs.core.create_inode_seq.call(null,this__125035.nodes,(this__125035.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__125035.nodes,this__125035.i,cljs.core.next.call(null,this__125035.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125036 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125037 = this;
return (new cljs.core.NodeSeq(meta,this__125037.nodes,this__125037.i,this__125037.s,this__125037.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125038 = this;
return this__125038.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125039 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__125039.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__125046 = nodes.length;
var j__125047 = i;
while(true){
if((j__125047 < len__125046))
{if(!(((nodes[j__125047]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__125047,null,null));
} else
{var temp__3971__auto____125048 = (nodes[(j__125047 + 1)]);
if(cljs.core.truth_(temp__3971__auto____125048))
{var node__125049 = temp__3971__auto____125048;
var temp__3971__auto____125050 = node__125049.inode_seq();
if(cljs.core.truth_(temp__3971__auto____125050))
{var node_seq__125051 = temp__3971__auto____125050;
return (new cljs.core.NodeSeq(null,nodes,(j__125047 + 2),node_seq__125051,null));
} else
{{
var G__125052 = (j__125047 + 2);
j__125047 = G__125052;
continue;
}
}
} else
{{
var G__125053 = (j__125047 + 2);
j__125047 = G__125053;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125054 = this;
var h__5444__auto____125055 = this__125054.__hash;
if(!((h__5444__auto____125055 == null)))
{return h__5444__auto____125055;
} else
{var h__5444__auto____125056 = cljs.core.hash_coll.call(null,coll);
this__125054.__hash = h__5444__auto____125056;
return h__5444__auto____125056;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__125057 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__125058 = this;
var this__125059 = this;
return cljs.core.pr_str.call(null,this__125059);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__125060 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__125061 = this;
return cljs.core.first.call(null,this__125061.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__125062 = this;
return cljs.core.create_array_node_seq.call(null,null,this__125062.nodes,this__125062.i,cljs.core.next.call(null,this__125062.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125063 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125064 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__125064.nodes,this__125064.i,this__125064.s,this__125064.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125065 = this;
return this__125065.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125066 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__125066.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__125073 = nodes.length;
var j__125074 = i;
while(true){
if((j__125074 < len__125073))
{var temp__3971__auto____125075 = (nodes[j__125074]);
if(cljs.core.truth_(temp__3971__auto____125075))
{var nj__125076 = temp__3971__auto____125075;
var temp__3971__auto____125077 = nj__125076.inode_seq();
if(cljs.core.truth_(temp__3971__auto____125077))
{var ns__125078 = temp__3971__auto____125077;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__125074 + 1),ns__125078,null));
} else
{{
var G__125079 = (j__125074 + 1);
j__125074 = G__125079;
continue;
}
}
} else
{{
var G__125080 = (j__125074 + 1);
j__125074 = G__125080;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__125083 = this;
return (new cljs.core.TransientHashMap({},this__125083.root,this__125083.cnt,this__125083.has_nil_QMARK_,this__125083.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125084 = this;
var h__5444__auto____125085 = this__125084.__hash;
if(!((h__5444__auto____125085 == null)))
{return h__5444__auto____125085;
} else
{var h__5444__auto____125086 = cljs.core.hash_imap.call(null,coll);
this__125084.__hash = h__5444__auto____125086;
return h__5444__auto____125086;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__125087 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__125088 = this;
if((k == null))
{if(this__125088.has_nil_QMARK_)
{return this__125088.nil_val;
} else
{return not_found;
}
} else
{if((this__125088.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__125088.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__125089 = this;
if((k == null))
{if((function (){var and__3822__auto____125090 = this__125089.has_nil_QMARK_;
if(and__3822__auto____125090)
{return (v === this__125089.nil_val);
} else
{return and__3822__auto____125090;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__125089.meta,((this__125089.has_nil_QMARK_)?this__125089.cnt:(this__125089.cnt + 1)),this__125089.root,true,v,null));
}
} else
{var added_leaf_QMARK___125091 = (new cljs.core.Box(false));
var new_root__125092 = (((this__125089.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__125089.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___125091);
if((new_root__125092 === this__125089.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__125089.meta,((added_leaf_QMARK___125091.val)?(this__125089.cnt + 1):this__125089.cnt),new_root__125092,this__125089.has_nil_QMARK_,this__125089.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__125093 = this;
if((k == null))
{return this__125093.has_nil_QMARK_;
} else
{if((this__125093.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__125093.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__125116 = null;
var G__125116__2 = (function (this_sym125094,k){
var this__125096 = this;
var this_sym125094__125097 = this;
var coll__125098 = this_sym125094__125097;
return coll__125098.cljs$core$ILookup$_lookup$arity$2(coll__125098,k);
});
var G__125116__3 = (function (this_sym125095,k,not_found){
var this__125096 = this;
var this_sym125095__125099 = this;
var coll__125100 = this_sym125095__125099;
return coll__125100.cljs$core$ILookup$_lookup$arity$3(coll__125100,k,not_found);
});
G__125116 = function(this_sym125095,k,not_found){
switch(arguments.length){
case 2:
return G__125116__2.call(this,this_sym125095,k);
case 3:
return G__125116__3.call(this,this_sym125095,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125116;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym125081,args125082){
var this__125101 = this;
return this_sym125081.call.apply(this_sym125081,[this_sym125081].concat(args125082.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__125102 = this;
var init__125103 = ((this__125102.has_nil_QMARK_)?f.call(null,init,null,this__125102.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__125103))
{return cljs.core.deref.call(null,init__125103);
} else
{if(!((this__125102.root == null)))
{return this__125102.root.kv_reduce(f,init__125103);
} else
{if("\uFDD0'else")
{return init__125103;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__125104 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__125105 = this;
var this__125106 = this;
return cljs.core.pr_str.call(null,this__125106);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__125107 = this;
if((this__125107.cnt > 0))
{var s__125108 = ((!((this__125107.root == null)))?this__125107.root.inode_seq():null);
if(this__125107.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__125107.nil_val], true),s__125108);
} else
{return s__125108;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__125109 = this;
return this__125109.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125110 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125111 = this;
return (new cljs.core.PersistentHashMap(meta,this__125111.cnt,this__125111.root,this__125111.has_nil_QMARK_,this__125111.nil_val,this__125111.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125112 = this;
return this__125112.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125113 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__125113.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__125114 = this;
if((k == null))
{if(this__125114.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__125114.meta,(this__125114.cnt - 1),this__125114.root,false,null,null));
} else
{return coll;
}
} else
{if((this__125114.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__125115 = this__125114.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__125115 === this__125114.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__125114.meta,(this__125114.cnt - 1),new_root__125115,this__125114.has_nil_QMARK_,this__125114.nil_val,null));
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
var len__125117 = ks.length;
var i__125118 = 0;
var out__125119 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__125118 < len__125117))
{{
var G__125120 = (i__125118 + 1);
var G__125121 = cljs.core.assoc_BANG_.call(null,out__125119,(ks[i__125118]),(vs[i__125118]));
i__125118 = G__125120;
out__125119 = G__125121;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__125119);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__125122 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__125123 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__125124 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__125125 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__125126 = this;
if((k == null))
{if(this__125126.has_nil_QMARK_)
{return this__125126.nil_val;
} else
{return null;
}
} else
{if((this__125126.root == null))
{return null;
} else
{return this__125126.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__125127 = this;
if((k == null))
{if(this__125127.has_nil_QMARK_)
{return this__125127.nil_val;
} else
{return not_found;
}
} else
{if((this__125127.root == null))
{return not_found;
} else
{return this__125127.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__125128 = this;
if(this__125128.edit)
{return this__125128.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__125129 = this;
var tcoll__125130 = this;
if(this__125129.edit)
{if((function (){var G__125131__125132 = o;
if(G__125131__125132)
{if((function (){var or__3824__auto____125133 = (G__125131__125132.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____125133)
{return or__3824__auto____125133;
} else
{return G__125131__125132.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__125131__125132.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__125131__125132);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__125131__125132);
}
})())
{return tcoll__125130.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__125134 = cljs.core.seq.call(null,o);
var tcoll__125135 = tcoll__125130;
while(true){
var temp__3971__auto____125136 = cljs.core.first.call(null,es__125134);
if(cljs.core.truth_(temp__3971__auto____125136))
{var e__125137 = temp__3971__auto____125136;
{
var G__125148 = cljs.core.next.call(null,es__125134);
var G__125149 = tcoll__125135.assoc_BANG_(cljs.core.key.call(null,e__125137),cljs.core.val.call(null,e__125137));
es__125134 = G__125148;
tcoll__125135 = G__125149;
continue;
}
} else
{return tcoll__125135;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__125138 = this;
var tcoll__125139 = this;
if(this__125138.edit)
{if((k == null))
{if((this__125138.nil_val === v))
{} else
{this__125138.nil_val = v;
}
if(this__125138.has_nil_QMARK_)
{} else
{this__125138.count = (this__125138.count + 1);
this__125138.has_nil_QMARK_ = true;
}
return tcoll__125139;
} else
{var added_leaf_QMARK___125140 = (new cljs.core.Box(false));
var node__125141 = (((this__125138.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__125138.root).inode_assoc_BANG_(this__125138.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___125140);
if((node__125141 === this__125138.root))
{} else
{this__125138.root = node__125141;
}
if(added_leaf_QMARK___125140.val)
{this__125138.count = (this__125138.count + 1);
} else
{}
return tcoll__125139;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__125142 = this;
var tcoll__125143 = this;
if(this__125142.edit)
{if((k == null))
{if(this__125142.has_nil_QMARK_)
{this__125142.has_nil_QMARK_ = false;
this__125142.nil_val = null;
this__125142.count = (this__125142.count - 1);
return tcoll__125143;
} else
{return tcoll__125143;
}
} else
{if((this__125142.root == null))
{return tcoll__125143;
} else
{var removed_leaf_QMARK___125144 = (new cljs.core.Box(false));
var node__125145 = this__125142.root.inode_without_BANG_(this__125142.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___125144);
if((node__125145 === this__125142.root))
{} else
{this__125142.root = node__125145;
}
if(cljs.core.truth_((removed_leaf_QMARK___125144[0])))
{this__125142.count = (this__125142.count - 1);
} else
{}
return tcoll__125143;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__125146 = this;
var tcoll__125147 = this;
if(this__125146.edit)
{this__125146.edit = null;
return (new cljs.core.PersistentHashMap(null,this__125146.count,this__125146.root,this__125146.has_nil_QMARK_,this__125146.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__125152 = node;
var stack__125153 = stack;
while(true){
if(!((t__125152 == null)))
{{
var G__125154 = ((ascending_QMARK_)?t__125152.left:t__125152.right);
var G__125155 = cljs.core.conj.call(null,stack__125153,t__125152);
t__125152 = G__125154;
stack__125153 = G__125155;
continue;
}
} else
{return stack__125153;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125156 = this;
var h__5444__auto____125157 = this__125156.__hash;
if(!((h__5444__auto____125157 == null)))
{return h__5444__auto____125157;
} else
{var h__5444__auto____125158 = cljs.core.hash_coll.call(null,coll);
this__125156.__hash = h__5444__auto____125158;
return h__5444__auto____125158;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__125159 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__125160 = this;
var this__125161 = this;
return cljs.core.pr_str.call(null,this__125161);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__125162 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__125163 = this;
if((this__125163.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__125163.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__125164 = this;
return cljs.core.peek.call(null,this__125164.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__125165 = this;
var t__125166 = cljs.core.first.call(null,this__125165.stack);
var next_stack__125167 = cljs.core.tree_map_seq_push.call(null,((this__125165.ascending_QMARK_)?t__125166.right:t__125166.left),cljs.core.next.call(null,this__125165.stack),this__125165.ascending_QMARK_);
if(!((next_stack__125167 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__125167,this__125165.ascending_QMARK_,(this__125165.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125168 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125169 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__125169.stack,this__125169.ascending_QMARK_,this__125169.cnt,this__125169.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125170 = this;
return this__125170.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125171 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__125171.meta);
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
{if((function (){var and__3822__auto____125173 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____125173)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____125173;
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
{if((function (){var and__3822__auto____125175 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____125175)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____125175;
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
var init__125179 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__125179))
{return cljs.core.deref.call(null,init__125179);
} else
{var init__125180 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__125179):init__125179);
if(cljs.core.reduced_QMARK_.call(null,init__125180))
{return cljs.core.deref.call(null,init__125180);
} else
{var init__125181 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__125180):init__125180);
if(cljs.core.reduced_QMARK_.call(null,init__125181))
{return cljs.core.deref.call(null,init__125181);
} else
{return init__125181;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125184 = this;
var h__5444__auto____125185 = this__125184.__hash;
if(!((h__5444__auto____125185 == null)))
{return h__5444__auto____125185;
} else
{var h__5444__auto____125186 = cljs.core.hash_coll.call(null,coll);
this__125184.__hash = h__5444__auto____125186;
return h__5444__auto____125186;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__125187 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__125188 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__125189 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__125189.key,this__125189.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__125237 = null;
var G__125237__2 = (function (this_sym125190,k){
var this__125192 = this;
var this_sym125190__125193 = this;
var node__125194 = this_sym125190__125193;
return node__125194.cljs$core$ILookup$_lookup$arity$2(node__125194,k);
});
var G__125237__3 = (function (this_sym125191,k,not_found){
var this__125192 = this;
var this_sym125191__125195 = this;
var node__125196 = this_sym125191__125195;
return node__125196.cljs$core$ILookup$_lookup$arity$3(node__125196,k,not_found);
});
G__125237 = function(this_sym125191,k,not_found){
switch(arguments.length){
case 2:
return G__125237__2.call(this,this_sym125191,k);
case 3:
return G__125237__3.call(this,this_sym125191,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125237;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym125182,args125183){
var this__125197 = this;
return this_sym125182.call.apply(this_sym125182,[this_sym125182].concat(args125183.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__125198 = this;
return cljs.core.PersistentVector.fromArray([this__125198.key,this__125198.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__125199 = this;
return this__125199.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__125200 = this;
return this__125200.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__125201 = this;
var node__125202 = this;
return ins.balance_right(node__125202);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__125203 = this;
var node__125204 = this;
return (new cljs.core.RedNode(this__125203.key,this__125203.val,this__125203.left,this__125203.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__125205 = this;
var node__125206 = this;
return cljs.core.balance_right_del.call(null,this__125205.key,this__125205.val,this__125205.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__125207 = this;
var node__125208 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__125209 = this;
var node__125210 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__125210,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__125211 = this;
var node__125212 = this;
return cljs.core.balance_left_del.call(null,this__125211.key,this__125211.val,del,this__125211.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__125213 = this;
var node__125214 = this;
return ins.balance_left(node__125214);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__125215 = this;
var node__125216 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__125216,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__125238 = null;
var G__125238__0 = (function (){
var this__125217 = this;
var this__125219 = this;
return cljs.core.pr_str.call(null,this__125219);
});
G__125238 = function(){
switch(arguments.length){
case 0:
return G__125238__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125238;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__125220 = this;
var node__125221 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__125221,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__125222 = this;
var node__125223 = this;
return node__125223;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__125224 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__125225 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__125226 = this;
return cljs.core.list.call(null,this__125226.key,this__125226.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__125227 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__125228 = this;
return this__125228.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__125229 = this;
return cljs.core.PersistentVector.fromArray([this__125229.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__125230 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__125230.key,this__125230.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125231 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__125232 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__125232.key,this__125232.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__125233 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__125234 = this;
if((n === 0))
{return this__125234.key;
} else
{if((n === 1))
{return this__125234.val;
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
var this__125235 = this;
if((n === 0))
{return this__125235.key;
} else
{if((n === 1))
{return this__125235.val;
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
var this__125236 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125241 = this;
var h__5444__auto____125242 = this__125241.__hash;
if(!((h__5444__auto____125242 == null)))
{return h__5444__auto____125242;
} else
{var h__5444__auto____125243 = cljs.core.hash_coll.call(null,coll);
this__125241.__hash = h__5444__auto____125243;
return h__5444__auto____125243;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__125244 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__125245 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__125246 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__125246.key,this__125246.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__125294 = null;
var G__125294__2 = (function (this_sym125247,k){
var this__125249 = this;
var this_sym125247__125250 = this;
var node__125251 = this_sym125247__125250;
return node__125251.cljs$core$ILookup$_lookup$arity$2(node__125251,k);
});
var G__125294__3 = (function (this_sym125248,k,not_found){
var this__125249 = this;
var this_sym125248__125252 = this;
var node__125253 = this_sym125248__125252;
return node__125253.cljs$core$ILookup$_lookup$arity$3(node__125253,k,not_found);
});
G__125294 = function(this_sym125248,k,not_found){
switch(arguments.length){
case 2:
return G__125294__2.call(this,this_sym125248,k);
case 3:
return G__125294__3.call(this,this_sym125248,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125294;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym125239,args125240){
var this__125254 = this;
return this_sym125239.call.apply(this_sym125239,[this_sym125239].concat(args125240.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__125255 = this;
return cljs.core.PersistentVector.fromArray([this__125255.key,this__125255.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__125256 = this;
return this__125256.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__125257 = this;
return this__125257.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__125258 = this;
var node__125259 = this;
return (new cljs.core.RedNode(this__125258.key,this__125258.val,this__125258.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__125260 = this;
var node__125261 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__125262 = this;
var node__125263 = this;
return (new cljs.core.RedNode(this__125262.key,this__125262.val,this__125262.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__125264 = this;
var node__125265 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__125266 = this;
var node__125267 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__125267,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__125268 = this;
var node__125269 = this;
return (new cljs.core.RedNode(this__125268.key,this__125268.val,del,this__125268.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__125270 = this;
var node__125271 = this;
return (new cljs.core.RedNode(this__125270.key,this__125270.val,ins,this__125270.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__125272 = this;
var node__125273 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__125272.left))
{return (new cljs.core.RedNode(this__125272.key,this__125272.val,this__125272.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__125272.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__125272.right))
{return (new cljs.core.RedNode(this__125272.right.key,this__125272.right.val,(new cljs.core.BlackNode(this__125272.key,this__125272.val,this__125272.left,this__125272.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__125272.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__125273,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__125295 = null;
var G__125295__0 = (function (){
var this__125274 = this;
var this__125276 = this;
return cljs.core.pr_str.call(null,this__125276);
});
G__125295 = function(){
switch(arguments.length){
case 0:
return G__125295__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125295;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__125277 = this;
var node__125278 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__125277.right))
{return (new cljs.core.RedNode(this__125277.key,this__125277.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__125277.left,null)),this__125277.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__125277.left))
{return (new cljs.core.RedNode(this__125277.left.key,this__125277.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__125277.left.left,null)),(new cljs.core.BlackNode(this__125277.key,this__125277.val,this__125277.left.right,this__125277.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__125278,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__125279 = this;
var node__125280 = this;
return (new cljs.core.BlackNode(this__125279.key,this__125279.val,this__125279.left,this__125279.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__125281 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__125282 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__125283 = this;
return cljs.core.list.call(null,this__125283.key,this__125283.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__125284 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__125285 = this;
return this__125285.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__125286 = this;
return cljs.core.PersistentVector.fromArray([this__125286.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__125287 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__125287.key,this__125287.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125288 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__125289 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__125289.key,this__125289.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__125290 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__125291 = this;
if((n === 0))
{return this__125291.key;
} else
{if((n === 1))
{return this__125291.val;
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
var this__125292 = this;
if((n === 0))
{return this__125292.key;
} else
{if((n === 1))
{return this__125292.val;
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
var this__125293 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__125299 = comp.call(null,k,tree.key);
if((c__125299 === 0))
{(found[0] = tree);
return null;
} else
{if((c__125299 < 0))
{var ins__125300 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__125300 == null)))
{return tree.add_left(ins__125300);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__125301 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__125301 == null)))
{return tree.add_right(ins__125301);
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
{var app__125304 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__125304))
{return (new cljs.core.RedNode(app__125304.key,app__125304.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__125304.left,null)),(new cljs.core.RedNode(right.key,right.val,app__125304.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__125304,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__125305 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__125305))
{return (new cljs.core.RedNode(app__125305.key,app__125305.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__125305.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__125305.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__125305,right.right,null)));
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
{var c__125311 = comp.call(null,k,tree.key);
if((c__125311 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__125311 < 0))
{var del__125312 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____125313 = !((del__125312 == null));
if(or__3824__auto____125313)
{return or__3824__auto____125313;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__125312,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__125312,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__125314 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____125315 = !((del__125314 == null));
if(or__3824__auto____125315)
{return or__3824__auto____125315;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__125314);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__125314,null));
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
var tk__125318 = tree.key;
var c__125319 = comp.call(null,k,tk__125318);
if((c__125319 === 0))
{return tree.replace(tk__125318,v,tree.left,tree.right);
} else
{if((c__125319 < 0))
{return tree.replace(tk__125318,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__125318,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125322 = this;
var h__5444__auto____125323 = this__125322.__hash;
if(!((h__5444__auto____125323 == null)))
{return h__5444__auto____125323;
} else
{var h__5444__auto____125324 = cljs.core.hash_imap.call(null,coll);
this__125322.__hash = h__5444__auto____125324;
return h__5444__auto____125324;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__125325 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__125326 = this;
var n__125327 = coll.entry_at(k);
if(!((n__125327 == null)))
{return n__125327.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__125328 = this;
var found__125329 = [null];
var t__125330 = cljs.core.tree_map_add.call(null,this__125328.comp,this__125328.tree,k,v,found__125329);
if((t__125330 == null))
{var found_node__125331 = cljs.core.nth.call(null,found__125329,0);
if(cljs.core._EQ_.call(null,v,found_node__125331.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__125328.comp,cljs.core.tree_map_replace.call(null,this__125328.comp,this__125328.tree,k,v),this__125328.cnt,this__125328.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__125328.comp,t__125330.blacken(),(this__125328.cnt + 1),this__125328.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__125332 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__125366 = null;
var G__125366__2 = (function (this_sym125333,k){
var this__125335 = this;
var this_sym125333__125336 = this;
var coll__125337 = this_sym125333__125336;
return coll__125337.cljs$core$ILookup$_lookup$arity$2(coll__125337,k);
});
var G__125366__3 = (function (this_sym125334,k,not_found){
var this__125335 = this;
var this_sym125334__125338 = this;
var coll__125339 = this_sym125334__125338;
return coll__125339.cljs$core$ILookup$_lookup$arity$3(coll__125339,k,not_found);
});
G__125366 = function(this_sym125334,k,not_found){
switch(arguments.length){
case 2:
return G__125366__2.call(this,this_sym125334,k);
case 3:
return G__125366__3.call(this,this_sym125334,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125366;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym125320,args125321){
var this__125340 = this;
return this_sym125320.call.apply(this_sym125320,[this_sym125320].concat(args125321.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__125341 = this;
if(!((this__125341.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__125341.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__125342 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__125343 = this;
if((this__125343.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__125343.tree,false,this__125343.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__125344 = this;
var this__125345 = this;
return cljs.core.pr_str.call(null,this__125345);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__125346 = this;
var coll__125347 = this;
var t__125348 = this__125346.tree;
while(true){
if(!((t__125348 == null)))
{var c__125349 = this__125346.comp.call(null,k,t__125348.key);
if((c__125349 === 0))
{return t__125348;
} else
{if((c__125349 < 0))
{{
var G__125367 = t__125348.left;
t__125348 = G__125367;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__125368 = t__125348.right;
t__125348 = G__125368;
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
var this__125350 = this;
if((this__125350.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__125350.tree,ascending_QMARK_,this__125350.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__125351 = this;
if((this__125351.cnt > 0))
{var stack__125352 = null;
var t__125353 = this__125351.tree;
while(true){
if(!((t__125353 == null)))
{var c__125354 = this__125351.comp.call(null,k,t__125353.key);
if((c__125354 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__125352,t__125353),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__125354 < 0))
{{
var G__125369 = cljs.core.conj.call(null,stack__125352,t__125353);
var G__125370 = t__125353.left;
stack__125352 = G__125369;
t__125353 = G__125370;
continue;
}
} else
{{
var G__125371 = stack__125352;
var G__125372 = t__125353.right;
stack__125352 = G__125371;
t__125353 = G__125372;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__125354 > 0))
{{
var G__125373 = cljs.core.conj.call(null,stack__125352,t__125353);
var G__125374 = t__125353.right;
stack__125352 = G__125373;
t__125353 = G__125374;
continue;
}
} else
{{
var G__125375 = stack__125352;
var G__125376 = t__125353.left;
stack__125352 = G__125375;
t__125353 = G__125376;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__125352 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__125352,ascending_QMARK_,-1,null));
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
var this__125355 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__125356 = this;
return this__125356.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__125357 = this;
if((this__125357.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__125357.tree,true,this__125357.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__125358 = this;
return this__125358.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125359 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125360 = this;
return (new cljs.core.PersistentTreeMap(this__125360.comp,this__125360.tree,this__125360.cnt,meta,this__125360.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125361 = this;
return this__125361.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125362 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__125362.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__125363 = this;
var found__125364 = [null];
var t__125365 = cljs.core.tree_map_remove.call(null,this__125363.comp,this__125363.tree,k,found__125364);
if((t__125365 == null))
{if((cljs.core.nth.call(null,found__125364,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__125363.comp,null,0,this__125363.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__125363.comp,t__125365.blacken(),(this__125363.cnt - 1),this__125363.meta,null));
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
var in__125379 = cljs.core.seq.call(null,keyvals);
var out__125380 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__125379)
{{
var G__125381 = cljs.core.nnext.call(null,in__125379);
var G__125382 = cljs.core.assoc_BANG_.call(null,out__125380,cljs.core.first.call(null,in__125379),cljs.core.second.call(null,in__125379));
in__125379 = G__125381;
out__125380 = G__125382;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__125380);
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
hash_map.cljs$lang$applyTo = (function (arglist__125383){
var keyvals = cljs.core.seq(arglist__125383);;
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
array_map.cljs$lang$applyTo = (function (arglist__125384){
var keyvals = cljs.core.seq(arglist__125384);;
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
var ks__125388 = [];
var obj__125389 = {};
var kvs__125390 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__125390)
{ks__125388.push(cljs.core.first.call(null,kvs__125390));
(obj__125389[cljs.core.first.call(null,kvs__125390)] = cljs.core.second.call(null,kvs__125390));
{
var G__125391 = cljs.core.nnext.call(null,kvs__125390);
kvs__125390 = G__125391;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__125388,obj__125389);
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
obj_map.cljs$lang$applyTo = (function (arglist__125392){
var keyvals = cljs.core.seq(arglist__125392);;
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
var in__125395 = cljs.core.seq.call(null,keyvals);
var out__125396 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__125395)
{{
var G__125397 = cljs.core.nnext.call(null,in__125395);
var G__125398 = cljs.core.assoc.call(null,out__125396,cljs.core.first.call(null,in__125395),cljs.core.second.call(null,in__125395));
in__125395 = G__125397;
out__125396 = G__125398;
continue;
}
} else
{return out__125396;
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
sorted_map.cljs$lang$applyTo = (function (arglist__125399){
var keyvals = cljs.core.seq(arglist__125399);;
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
var in__125402 = cljs.core.seq.call(null,keyvals);
var out__125403 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__125402)
{{
var G__125404 = cljs.core.nnext.call(null,in__125402);
var G__125405 = cljs.core.assoc.call(null,out__125403,cljs.core.first.call(null,in__125402),cljs.core.second.call(null,in__125402));
in__125402 = G__125404;
out__125403 = G__125405;
continue;
}
} else
{return out__125403;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__125406){
var comparator = cljs.core.first(arglist__125406);
var keyvals = cljs.core.rest(arglist__125406);
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
{return cljs.core.reduce.call(null,(function (p1__125407_SHARP_,p2__125408_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____125410 = p1__125407_SHARP_;
if(cljs.core.truth_(or__3824__auto____125410))
{return or__3824__auto____125410;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__125408_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__125411){
var maps = cljs.core.seq(arglist__125411);;
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
{var merge_entry__125419 = (function (m,e){
var k__125417 = cljs.core.first.call(null,e);
var v__125418 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__125417))
{return cljs.core.assoc.call(null,m,k__125417,f.call(null,cljs.core._lookup.call(null,m,k__125417,null),v__125418));
} else
{return cljs.core.assoc.call(null,m,k__125417,v__125418);
}
});
var merge2__125421 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__125419,(function (){var or__3824__auto____125420 = m1;
if(cljs.core.truth_(or__3824__auto____125420))
{return or__3824__auto____125420;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__125421,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__125422){
var f = cljs.core.first(arglist__125422);
var maps = cljs.core.rest(arglist__125422);
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
var ret__125427 = cljs.core.ObjMap.EMPTY;
var keys__125428 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__125428)
{var key__125429 = cljs.core.first.call(null,keys__125428);
var entry__125430 = cljs.core._lookup.call(null,map,key__125429,"\uFDD0'cljs.core/not-found");
{
var G__125431 = ((cljs.core.not_EQ_.call(null,entry__125430,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__125427,key__125429,entry__125430):ret__125427);
var G__125432 = cljs.core.next.call(null,keys__125428);
ret__125427 = G__125431;
keys__125428 = G__125432;
continue;
}
} else
{return ret__125427;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__125436 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__125436.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125437 = this;
var h__5444__auto____125438 = this__125437.__hash;
if(!((h__5444__auto____125438 == null)))
{return h__5444__auto____125438;
} else
{var h__5444__auto____125439 = cljs.core.hash_iset.call(null,coll);
this__125437.__hash = h__5444__auto____125439;
return h__5444__auto____125439;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__125440 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__125441 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__125441.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__125462 = null;
var G__125462__2 = (function (this_sym125442,k){
var this__125444 = this;
var this_sym125442__125445 = this;
var coll__125446 = this_sym125442__125445;
return coll__125446.cljs$core$ILookup$_lookup$arity$2(coll__125446,k);
});
var G__125462__3 = (function (this_sym125443,k,not_found){
var this__125444 = this;
var this_sym125443__125447 = this;
var coll__125448 = this_sym125443__125447;
return coll__125448.cljs$core$ILookup$_lookup$arity$3(coll__125448,k,not_found);
});
G__125462 = function(this_sym125443,k,not_found){
switch(arguments.length){
case 2:
return G__125462__2.call(this,this_sym125443,k);
case 3:
return G__125462__3.call(this,this_sym125443,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125462;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym125434,args125435){
var this__125449 = this;
return this_sym125434.call.apply(this_sym125434,[this_sym125434].concat(args125435.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__125450 = this;
return (new cljs.core.PersistentHashSet(this__125450.meta,cljs.core.assoc.call(null,this__125450.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__125451 = this;
var this__125452 = this;
return cljs.core.pr_str.call(null,this__125452);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__125453 = this;
return cljs.core.keys.call(null,this__125453.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__125454 = this;
return (new cljs.core.PersistentHashSet(this__125454.meta,cljs.core.dissoc.call(null,this__125454.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__125455 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125456 = this;
var and__3822__auto____125457 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____125457)
{var and__3822__auto____125458 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____125458)
{return cljs.core.every_QMARK_.call(null,(function (p1__125433_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__125433_SHARP_);
}),other);
} else
{return and__3822__auto____125458;
}
} else
{return and__3822__auto____125457;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125459 = this;
return (new cljs.core.PersistentHashSet(meta,this__125459.hash_map,this__125459.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125460 = this;
return this__125460.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125461 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__125461.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__125463 = cljs.core.count.call(null,items);
var i__125464 = 0;
var out__125465 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__125464 < len__125463))
{{
var G__125466 = (i__125464 + 1);
var G__125467 = cljs.core.conj_BANG_.call(null,out__125465,(items[i__125464]));
i__125464 = G__125466;
out__125465 = G__125467;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__125465);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__125485 = null;
var G__125485__2 = (function (this_sym125471,k){
var this__125473 = this;
var this_sym125471__125474 = this;
var tcoll__125475 = this_sym125471__125474;
if((cljs.core._lookup.call(null,this__125473.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__125485__3 = (function (this_sym125472,k,not_found){
var this__125473 = this;
var this_sym125472__125476 = this;
var tcoll__125477 = this_sym125472__125476;
if((cljs.core._lookup.call(null,this__125473.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__125485 = function(this_sym125472,k,not_found){
switch(arguments.length){
case 2:
return G__125485__2.call(this,this_sym125472,k);
case 3:
return G__125485__3.call(this,this_sym125472,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125485;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym125469,args125470){
var this__125478 = this;
return this_sym125469.call.apply(this_sym125469,[this_sym125469].concat(args125470.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__125479 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__125480 = this;
if((cljs.core._lookup.call(null,this__125480.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__125481 = this;
return cljs.core.count.call(null,this__125481.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__125482 = this;
this__125482.transient_map = cljs.core.dissoc_BANG_.call(null,this__125482.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__125483 = this;
this__125483.transient_map = cljs.core.assoc_BANG_.call(null,this__125483.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__125484 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__125484.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__125488 = this;
var h__5444__auto____125489 = this__125488.__hash;
if(!((h__5444__auto____125489 == null)))
{return h__5444__auto____125489;
} else
{var h__5444__auto____125490 = cljs.core.hash_iset.call(null,coll);
this__125488.__hash = h__5444__auto____125490;
return h__5444__auto____125490;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__125491 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__125492 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__125492.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__125518 = null;
var G__125518__2 = (function (this_sym125493,k){
var this__125495 = this;
var this_sym125493__125496 = this;
var coll__125497 = this_sym125493__125496;
return coll__125497.cljs$core$ILookup$_lookup$arity$2(coll__125497,k);
});
var G__125518__3 = (function (this_sym125494,k,not_found){
var this__125495 = this;
var this_sym125494__125498 = this;
var coll__125499 = this_sym125494__125498;
return coll__125499.cljs$core$ILookup$_lookup$arity$3(coll__125499,k,not_found);
});
G__125518 = function(this_sym125494,k,not_found){
switch(arguments.length){
case 2:
return G__125518__2.call(this,this_sym125494,k);
case 3:
return G__125518__3.call(this,this_sym125494,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__125518;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym125486,args125487){
var this__125500 = this;
return this_sym125486.call.apply(this_sym125486,[this_sym125486].concat(args125487.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__125501 = this;
return (new cljs.core.PersistentTreeSet(this__125501.meta,cljs.core.assoc.call(null,this__125501.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__125502 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__125502.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__125503 = this;
var this__125504 = this;
return cljs.core.pr_str.call(null,this__125504);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__125505 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__125505.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__125506 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__125506.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__125507 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__125508 = this;
return cljs.core._comparator.call(null,this__125508.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__125509 = this;
return cljs.core.keys.call(null,this__125509.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__125510 = this;
return (new cljs.core.PersistentTreeSet(this__125510.meta,cljs.core.dissoc.call(null,this__125510.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__125511 = this;
return cljs.core.count.call(null,this__125511.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__125512 = this;
var and__3822__auto____125513 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____125513)
{var and__3822__auto____125514 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____125514)
{return cljs.core.every_QMARK_.call(null,(function (p1__125468_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__125468_SHARP_);
}),other);
} else
{return and__3822__auto____125514;
}
} else
{return and__3822__auto____125513;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__125515 = this;
return (new cljs.core.PersistentTreeSet(meta,this__125515.tree_map,this__125515.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__125516 = this;
return this__125516.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__125517 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__125517.meta);
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
var G__125523__delegate = function (keys){
var in__125521 = cljs.core.seq.call(null,keys);
var out__125522 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__125521))
{{
var G__125524 = cljs.core.next.call(null,in__125521);
var G__125525 = cljs.core.conj_BANG_.call(null,out__125522,cljs.core.first.call(null,in__125521));
in__125521 = G__125524;
out__125522 = G__125525;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__125522);
}
break;
}
};
var G__125523 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__125523__delegate.call(this, keys);
};
G__125523.cljs$lang$maxFixedArity = 0;
G__125523.cljs$lang$applyTo = (function (arglist__125526){
var keys = cljs.core.seq(arglist__125526);;
return G__125523__delegate(keys);
});
G__125523.cljs$lang$arity$variadic = G__125523__delegate;
return G__125523;
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
sorted_set.cljs$lang$applyTo = (function (arglist__125527){
var keys = cljs.core.seq(arglist__125527);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__125529){
var comparator = cljs.core.first(arglist__125529);
var keys = cljs.core.rest(arglist__125529);
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
{var n__125535 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____125536 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____125536))
{var e__125537 = temp__3971__auto____125536;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__125537));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__125535,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__125528_SHARP_){
var temp__3971__auto____125538 = cljs.core.find.call(null,smap,p1__125528_SHARP_);
if(cljs.core.truth_(temp__3971__auto____125538))
{var e__125539 = temp__3971__auto____125538;
return cljs.core.second.call(null,e__125539);
} else
{return p1__125528_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__125569 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__125562,seen){
while(true){
var vec__125563__125564 = p__125562;
var f__125565 = cljs.core.nth.call(null,vec__125563__125564,0,null);
var xs__125566 = vec__125563__125564;
var temp__3974__auto____125567 = cljs.core.seq.call(null,xs__125566);
if(temp__3974__auto____125567)
{var s__125568 = temp__3974__auto____125567;
if(cljs.core.contains_QMARK_.call(null,seen,f__125565))
{{
var G__125570 = cljs.core.rest.call(null,s__125568);
var G__125571 = seen;
p__125562 = G__125570;
seen = G__125571;
continue;
}
} else
{return cljs.core.cons.call(null,f__125565,step.call(null,cljs.core.rest.call(null,s__125568),cljs.core.conj.call(null,seen,f__125565)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__125569.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__125574 = cljs.core.PersistentVector.EMPTY;
var s__125575 = s;
while(true){
if(cljs.core.next.call(null,s__125575))
{{
var G__125576 = cljs.core.conj.call(null,ret__125574,cljs.core.first.call(null,s__125575));
var G__125577 = cljs.core.next.call(null,s__125575);
ret__125574 = G__125576;
s__125575 = G__125577;
continue;
}
} else
{return cljs.core.seq.call(null,ret__125574);
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
{if((function (){var or__3824__auto____125580 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____125580)
{return or__3824__auto____125580;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__125581 = x.lastIndexOf("/");
if((i__125581 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__125581 + 1));
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
if((function (){var or__3824__auto____125584 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____125584)
{return or__3824__auto____125584;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__125585 = x.lastIndexOf("/");
if((i__125585 > -1))
{return cljs.core.subs.call(null,x,2,i__125585);
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
var map__125592 = cljs.core.ObjMap.EMPTY;
var ks__125593 = cljs.core.seq.call(null,keys);
var vs__125594 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____125595 = ks__125593;
if(and__3822__auto____125595)
{return vs__125594;
} else
{return and__3822__auto____125595;
}
})())
{{
var G__125596 = cljs.core.assoc.call(null,map__125592,cljs.core.first.call(null,ks__125593),cljs.core.first.call(null,vs__125594));
var G__125597 = cljs.core.next.call(null,ks__125593);
var G__125598 = cljs.core.next.call(null,vs__125594);
map__125592 = G__125596;
ks__125593 = G__125597;
vs__125594 = G__125598;
continue;
}
} else
{return map__125592;
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
var G__125601__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__125586_SHARP_,p2__125587_SHARP_){
return max_key.call(null,k,p1__125586_SHARP_,p2__125587_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__125601 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125601__delegate.call(this, k, x, y, more);
};
G__125601.cljs$lang$maxFixedArity = 3;
G__125601.cljs$lang$applyTo = (function (arglist__125602){
var k = cljs.core.first(arglist__125602);
var x = cljs.core.first(cljs.core.next(arglist__125602));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125602)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125602)));
return G__125601__delegate(k, x, y, more);
});
G__125601.cljs$lang$arity$variadic = G__125601__delegate;
return G__125601;
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
var G__125603__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__125599_SHARP_,p2__125600_SHARP_){
return min_key.call(null,k,p1__125599_SHARP_,p2__125600_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__125603 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125603__delegate.call(this, k, x, y, more);
};
G__125603.cljs$lang$maxFixedArity = 3;
G__125603.cljs$lang$applyTo = (function (arglist__125604){
var k = cljs.core.first(arglist__125604);
var x = cljs.core.first(cljs.core.next(arglist__125604));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125604)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125604)));
return G__125603__delegate(k, x, y, more);
});
G__125603.cljs$lang$arity$variadic = G__125603__delegate;
return G__125603;
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
var temp__3974__auto____125607 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____125607)
{var s__125608 = temp__3974__auto____125607;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__125608),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__125608)));
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
var temp__3974__auto____125611 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____125611)
{var s__125612 = temp__3974__auto____125611;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__125612))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__125612),take_while.call(null,pred,cljs.core.rest.call(null,s__125612)));
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
var comp__125614 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__125614.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__125626 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____125627 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____125627))
{var vec__125628__125629 = temp__3974__auto____125627;
var e__125630 = cljs.core.nth.call(null,vec__125628__125629,0,null);
var s__125631 = vec__125628__125629;
if(cljs.core.truth_(include__125626.call(null,e__125630)))
{return s__125631;
} else
{return cljs.core.next.call(null,s__125631);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__125626,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____125632 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____125632))
{var vec__125633__125634 = temp__3974__auto____125632;
var e__125635 = cljs.core.nth.call(null,vec__125633__125634,0,null);
var s__125636 = vec__125633__125634;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__125635))?s__125636:cljs.core.next.call(null,s__125636)));
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
var include__125648 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____125649 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____125649))
{var vec__125650__125651 = temp__3974__auto____125649;
var e__125652 = cljs.core.nth.call(null,vec__125650__125651,0,null);
var s__125653 = vec__125650__125651;
if(cljs.core.truth_(include__125648.call(null,e__125652)))
{return s__125653;
} else
{return cljs.core.next.call(null,s__125653);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__125648,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____125654 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____125654))
{var vec__125655__125656 = temp__3974__auto____125654;
var e__125657 = cljs.core.nth.call(null,vec__125655__125656,0,null);
var s__125658 = vec__125655__125656;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__125657))?s__125658:cljs.core.next.call(null,s__125658)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__125659 = this;
var h__5444__auto____125660 = this__125659.__hash;
if(!((h__5444__auto____125660 == null)))
{return h__5444__auto____125660;
} else
{var h__5444__auto____125661 = cljs.core.hash_coll.call(null,rng);
this__125659.__hash = h__5444__auto____125661;
return h__5444__auto____125661;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__125662 = this;
if((this__125662.step > 0))
{if(((this__125662.start + this__125662.step) < this__125662.end))
{return (new cljs.core.Range(this__125662.meta,(this__125662.start + this__125662.step),this__125662.end,this__125662.step,null));
} else
{return null;
}
} else
{if(((this__125662.start + this__125662.step) > this__125662.end))
{return (new cljs.core.Range(this__125662.meta,(this__125662.start + this__125662.step),this__125662.end,this__125662.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__125663 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__125664 = this;
var this__125665 = this;
return cljs.core.pr_str.call(null,this__125665);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__125666 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__125667 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__125668 = this;
if((this__125668.step > 0))
{if((this__125668.start < this__125668.end))
{return rng;
} else
{return null;
}
} else
{if((this__125668.start > this__125668.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__125669 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__125669.end - this__125669.start) / this__125669.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__125670 = this;
return this__125670.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__125671 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__125671.meta,(this__125671.start + this__125671.step),this__125671.end,this__125671.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__125672 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__125673 = this;
return (new cljs.core.Range(meta,this__125673.start,this__125673.end,this__125673.step,this__125673.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__125674 = this;
return this__125674.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__125675 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__125675.start + (n * this__125675.step));
} else
{if((function (){var and__3822__auto____125676 = (this__125675.start > this__125675.end);
if(and__3822__auto____125676)
{return (this__125675.step === 0);
} else
{return and__3822__auto____125676;
}
})())
{return this__125675.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__125677 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__125677.start + (n * this__125677.step));
} else
{if((function (){var and__3822__auto____125678 = (this__125677.start > this__125677.end);
if(and__3822__auto____125678)
{return (this__125677.step === 0);
} else
{return and__3822__auto____125678;
}
})())
{return this__125677.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__125679 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__125679.meta);
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
var temp__3974__auto____125682 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____125682)
{var s__125683 = temp__3974__auto____125682;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__125683),take_nth.call(null,n,cljs.core.drop.call(null,n,s__125683)));
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
var temp__3974__auto____125690 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____125690)
{var s__125691 = temp__3974__auto____125690;
var fst__125692 = cljs.core.first.call(null,s__125691);
var fv__125693 = f.call(null,fst__125692);
var run__125694 = cljs.core.cons.call(null,fst__125692,cljs.core.take_while.call(null,(function (p1__125684_SHARP_){
return cljs.core._EQ_.call(null,fv__125693,f.call(null,p1__125684_SHARP_));
}),cljs.core.next.call(null,s__125691)));
return cljs.core.cons.call(null,run__125694,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__125694),s__125691))));
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
var temp__3971__auto____125709 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____125709)
{var s__125710 = temp__3971__auto____125709;
return reductions.call(null,f,cljs.core.first.call(null,s__125710),cljs.core.rest.call(null,s__125710));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____125711 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____125711)
{var s__125712 = temp__3974__auto____125711;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__125712)),cljs.core.rest.call(null,s__125712));
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
var G__125715 = null;
var G__125715__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__125715__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__125715__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__125715__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__125715__4 = (function() { 
var G__125716__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__125716 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125716__delegate.call(this, x, y, z, args);
};
G__125716.cljs$lang$maxFixedArity = 3;
G__125716.cljs$lang$applyTo = (function (arglist__125717){
var x = cljs.core.first(arglist__125717);
var y = cljs.core.first(cljs.core.next(arglist__125717));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125717)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125717)));
return G__125716__delegate(x, y, z, args);
});
G__125716.cljs$lang$arity$variadic = G__125716__delegate;
return G__125716;
})()
;
G__125715 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__125715__0.call(this);
case 1:
return G__125715__1.call(this,x);
case 2:
return G__125715__2.call(this,x,y);
case 3:
return G__125715__3.call(this,x,y,z);
default:
return G__125715__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__125715.cljs$lang$maxFixedArity = 3;
G__125715.cljs$lang$applyTo = G__125715__4.cljs$lang$applyTo;
return G__125715;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__125718 = null;
var G__125718__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__125718__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__125718__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__125718__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__125718__4 = (function() { 
var G__125719__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__125719 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125719__delegate.call(this, x, y, z, args);
};
G__125719.cljs$lang$maxFixedArity = 3;
G__125719.cljs$lang$applyTo = (function (arglist__125720){
var x = cljs.core.first(arglist__125720);
var y = cljs.core.first(cljs.core.next(arglist__125720));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125720)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125720)));
return G__125719__delegate(x, y, z, args);
});
G__125719.cljs$lang$arity$variadic = G__125719__delegate;
return G__125719;
})()
;
G__125718 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__125718__0.call(this);
case 1:
return G__125718__1.call(this,x);
case 2:
return G__125718__2.call(this,x,y);
case 3:
return G__125718__3.call(this,x,y,z);
default:
return G__125718__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__125718.cljs$lang$maxFixedArity = 3;
G__125718.cljs$lang$applyTo = G__125718__4.cljs$lang$applyTo;
return G__125718;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__125721 = null;
var G__125721__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__125721__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__125721__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__125721__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__125721__4 = (function() { 
var G__125722__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__125722 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125722__delegate.call(this, x, y, z, args);
};
G__125722.cljs$lang$maxFixedArity = 3;
G__125722.cljs$lang$applyTo = (function (arglist__125723){
var x = cljs.core.first(arglist__125723);
var y = cljs.core.first(cljs.core.next(arglist__125723));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125723)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125723)));
return G__125722__delegate(x, y, z, args);
});
G__125722.cljs$lang$arity$variadic = G__125722__delegate;
return G__125722;
})()
;
G__125721 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__125721__0.call(this);
case 1:
return G__125721__1.call(this,x);
case 2:
return G__125721__2.call(this,x,y);
case 3:
return G__125721__3.call(this,x,y,z);
default:
return G__125721__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__125721.cljs$lang$maxFixedArity = 3;
G__125721.cljs$lang$applyTo = G__125721__4.cljs$lang$applyTo;
return G__125721;
})()
});
var juxt__4 = (function() { 
var G__125724__delegate = function (f,g,h,fs){
var fs__125714 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__125725 = null;
var G__125725__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__125695_SHARP_,p2__125696_SHARP_){
return cljs.core.conj.call(null,p1__125695_SHARP_,p2__125696_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__125714);
});
var G__125725__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__125697_SHARP_,p2__125698_SHARP_){
return cljs.core.conj.call(null,p1__125697_SHARP_,p2__125698_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__125714);
});
var G__125725__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__125699_SHARP_,p2__125700_SHARP_){
return cljs.core.conj.call(null,p1__125699_SHARP_,p2__125700_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__125714);
});
var G__125725__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__125701_SHARP_,p2__125702_SHARP_){
return cljs.core.conj.call(null,p1__125701_SHARP_,p2__125702_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__125714);
});
var G__125725__4 = (function() { 
var G__125726__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__125703_SHARP_,p2__125704_SHARP_){
return cljs.core.conj.call(null,p1__125703_SHARP_,cljs.core.apply.call(null,p2__125704_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__125714);
};
var G__125726 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125726__delegate.call(this, x, y, z, args);
};
G__125726.cljs$lang$maxFixedArity = 3;
G__125726.cljs$lang$applyTo = (function (arglist__125727){
var x = cljs.core.first(arglist__125727);
var y = cljs.core.first(cljs.core.next(arglist__125727));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125727)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125727)));
return G__125726__delegate(x, y, z, args);
});
G__125726.cljs$lang$arity$variadic = G__125726__delegate;
return G__125726;
})()
;
G__125725 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__125725__0.call(this);
case 1:
return G__125725__1.call(this,x);
case 2:
return G__125725__2.call(this,x,y);
case 3:
return G__125725__3.call(this,x,y,z);
default:
return G__125725__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__125725.cljs$lang$maxFixedArity = 3;
G__125725.cljs$lang$applyTo = G__125725__4.cljs$lang$applyTo;
return G__125725;
})()
};
var G__125724 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__125724__delegate.call(this, f, g, h, fs);
};
G__125724.cljs$lang$maxFixedArity = 3;
G__125724.cljs$lang$applyTo = (function (arglist__125728){
var f = cljs.core.first(arglist__125728);
var g = cljs.core.first(cljs.core.next(arglist__125728));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125728)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__125728)));
return G__125724__delegate(f, g, h, fs);
});
G__125724.cljs$lang$arity$variadic = G__125724__delegate;
return G__125724;
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
var G__125731 = cljs.core.next.call(null,coll);
coll = G__125731;
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
if(cljs.core.truth_((function (){var and__3822__auto____125730 = cljs.core.seq.call(null,coll);
if(and__3822__auto____125730)
{return (n > 0);
} else
{return and__3822__auto____125730;
}
})()))
{{
var G__125732 = (n - 1);
var G__125733 = cljs.core.next.call(null,coll);
n = G__125732;
coll = G__125733;
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
var matches__125735 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__125735),s))
{if((cljs.core.count.call(null,matches__125735) === 1))
{return cljs.core.first.call(null,matches__125735);
} else
{return cljs.core.vec.call(null,matches__125735);
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
var matches__125737 = re.exec(s);
if((matches__125737 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__125737) === 1))
{return cljs.core.first.call(null,matches__125737);
} else
{return cljs.core.vec.call(null,matches__125737);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__125742 = cljs.core.re_find.call(null,re,s);
var match_idx__125743 = s.search(re);
var match_str__125744 = ((cljs.core.coll_QMARK_.call(null,match_data__125742))?cljs.core.first.call(null,match_data__125742):match_data__125742);
var post_match__125745 = cljs.core.subs.call(null,s,(match_idx__125743 + cljs.core.count.call(null,match_str__125744)));
if(cljs.core.truth_(match_data__125742))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__125742,re_seq.call(null,re,post_match__125745));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__125752__125753 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___125754 = cljs.core.nth.call(null,vec__125752__125753,0,null);
var flags__125755 = cljs.core.nth.call(null,vec__125752__125753,1,null);
var pattern__125756 = cljs.core.nth.call(null,vec__125752__125753,2,null);
return (new RegExp(pattern__125756,flags__125755));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__125746_SHARP_){
return print_one.call(null,p1__125746_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__125760__125761 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__125760__125761)
{var o__125762 = cljs.core.first.call(null,G__125760__125761);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__125762,writer,opts);
{
var G__125763 = cljs.core.next.call(null,G__125760__125761);
G__125760__125761 = G__125763;
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
var G__125767__125768 = cljs.core.seq.call(null,ss);
while(true){
if(G__125767__125768)
{var s__125769 = cljs.core.first.call(null,G__125767__125768);
cljs.core._write.call(null,writer,s__125769);
{
var G__125770 = cljs.core.next.call(null,G__125767__125768);
G__125767__125768 = G__125770;
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
write_all.cljs$lang$applyTo = (function (arglist__125771){
var writer = cljs.core.first(arglist__125771);
var ss = cljs.core.rest(arglist__125771);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__125772 = this;
return this__125772.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__125773 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____125783 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____125783))
{var and__3822__auto____125787 = (function (){var G__125784__125785 = obj;
if(G__125784__125785)
{if((function (){var or__3824__auto____125786 = (G__125784__125785.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____125786)
{return or__3824__auto____125786;
} else
{return G__125784__125785.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__125784__125785.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__125784__125785);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__125784__125785);
}
})();
if(cljs.core.truth_(and__3822__auto____125787))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____125787;
}
} else
{return and__3822__auto____125783;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____125788 = !((obj == null));
if(and__3822__auto____125788)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____125788;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__125789__125790 = obj;
if(G__125789__125790)
{if((function (){var or__3824__auto____125791 = (G__125789__125790.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____125791)
{return or__3824__auto____125791;
} else
{return G__125789__125790.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__125789__125790.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__125789__125790);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__125789__125790);
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
{if(cljs.core.truth_((function (){var and__3822__auto____125804 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____125804))
{var and__3822__auto____125808 = (function (){var G__125805__125806 = obj;
if(G__125805__125806)
{if((function (){var or__3824__auto____125807 = (G__125805__125806.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____125807)
{return or__3824__auto____125807;
} else
{return G__125805__125806.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__125805__125806.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__125805__125806);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__125805__125806);
}
})();
if(cljs.core.truth_(and__3822__auto____125808))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____125808;
}
} else
{return and__3822__auto____125804;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____125809 = !((obj == null));
if(and__3822__auto____125809)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____125809;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__125810__125811 = obj;
if(G__125810__125811)
{if((function (){var or__3824__auto____125812 = (G__125810__125811.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____125812)
{return or__3824__auto____125812;
} else
{return G__125810__125811.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__125810__125811.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__125810__125811);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__125810__125811);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__125813__125814 = obj;
if(G__125813__125814)
{if((function (){var or__3824__auto____125815 = (G__125813__125814.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____125815)
{return or__3824__auto____125815;
} else
{return G__125813__125814.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__125813__125814.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__125813__125814);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__125813__125814);
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
var G__125819__125820 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__125819__125820)
{var obj__125821 = cljs.core.first.call(null,G__125819__125820);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__125821,writer,opts);
{
var G__125822 = cljs.core.next.call(null,G__125819__125820);
G__125819__125820 = G__125822;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__125825 = (new goog.string.StringBuffer());
var writer__125826 = (new cljs.core.StringBufferWriter(sb__125825));
cljs.core.pr_seq_writer.call(null,objs,writer__125826,opts);
cljs.core._flush.call(null,writer__125826);
return sb__125825;
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
{var sb__125828 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__125828.append("\n");
return [cljs.core.str(sb__125828)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__125829){
var objs = cljs.core.seq(arglist__125829);;
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
prn_str.cljs$lang$applyTo = (function (arglist__125830){
var objs = cljs.core.seq(arglist__125830);;
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
pr.cljs$lang$applyTo = (function (arglist__125831){
var objs = cljs.core.seq(arglist__125831);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__125832){
var objs = cljs.core.seq(arglist__125832);;
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
print_str.cljs$lang$applyTo = (function (arglist__125833){
var objs = cljs.core.seq(arglist__125833);;
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
println.cljs$lang$applyTo = (function (arglist__125834){
var objs = cljs.core.seq(arglist__125834);;
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
println_str.cljs$lang$applyTo = (function (arglist__125835){
var objs = cljs.core.seq(arglist__125835);;
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
prn.cljs$lang$applyTo = (function (arglist__125836){
var objs = cljs.core.seq(arglist__125836);;
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
printf.cljs$lang$applyTo = (function (arglist__125837){
var fmt = cljs.core.first(arglist__125837);
var args = cljs.core.rest(arglist__125837);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__125838 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__125838,"{",", ","}",opts,coll);
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
var pr_pair__125839 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__125839,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__125840 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__125840,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____125841 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____125841))
{var nspc__125842 = temp__3974__auto____125841;
return [cljs.core.str(nspc__125842),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____125843 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____125843))
{var nspc__125844 = temp__3974__auto____125843;
return [cljs.core.str(nspc__125844),cljs.core.str("/")].join('');
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
var pr_pair__125845 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__125845,"{",", ","}",opts,coll);
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
var normalize__125847 = (function (n,len){
var ns__125846 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__125846) < len))
{{
var G__125849 = [cljs.core.str("0"),cljs.core.str(ns__125846)].join('');
ns__125846 = G__125849;
continue;
}
} else
{return ns__125846;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__125847.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__125847.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__125847.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__125847.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__125847.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__125847.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__125848 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__125848,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__125850 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__125850,"{",", ","}",opts,coll);
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
var pr_pair__125851 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__125851,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__125852 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__125852,"{",", ","}",opts,coll);
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
var temp__3974__auto____125853 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____125853))
{var nspc__125854 = temp__3974__auto____125853;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__125854)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____125855 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____125855))
{var nspc__125856 = temp__3974__auto____125855;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__125856)].join(''),"/");
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
var pr_pair__125857 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__125857,"{",", ","}",opts,coll);
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
var normalize__125859 = (function (n,len){
var ns__125858 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__125858) < len))
{{
var G__125861 = [cljs.core.str("0"),cljs.core.str(ns__125858)].join('');
ns__125858 = G__125861;
continue;
}
} else
{return ns__125858;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__125859.call(null,(d.getUTCMonth() + 1),2),"-",normalize__125859.call(null,d.getUTCDate(),2),"T",normalize__125859.call(null,d.getUTCHours(),2),":",normalize__125859.call(null,d.getUTCMinutes(),2),":",normalize__125859.call(null,d.getUTCSeconds(),2),".",normalize__125859.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__125860 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__125860,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__125862 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__125863 = this;
var G__125864__125865 = cljs.core.seq.call(null,this__125863.watches);
while(true){
if(G__125864__125865)
{var vec__125866__125867 = cljs.core.first.call(null,G__125864__125865);
var key__125868 = cljs.core.nth.call(null,vec__125866__125867,0,null);
var f__125869 = cljs.core.nth.call(null,vec__125866__125867,1,null);
f__125869.call(null,key__125868,this$,oldval,newval);
{
var G__125877 = cljs.core.next.call(null,G__125864__125865);
G__125864__125865 = G__125877;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__125870 = this;
return this$.watches = cljs.core.assoc.call(null,this__125870.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__125871 = this;
return this$.watches = cljs.core.dissoc.call(null,this__125871.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__125872 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__125872.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__125873 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__125873.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__125874 = this;
return this__125874.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__125875 = this;
return this__125875.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__125876 = this;
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
var G__125889__delegate = function (x,p__125878){
var map__125884__125885 = p__125878;
var map__125884__125886 = ((cljs.core.seq_QMARK_.call(null,map__125884__125885))?cljs.core.apply.call(null,cljs.core.hash_map,map__125884__125885):map__125884__125885);
var validator__125887 = cljs.core._lookup.call(null,map__125884__125886,"\uFDD0'validator",null);
var meta__125888 = cljs.core._lookup.call(null,map__125884__125886,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__125888,validator__125887,null));
};
var G__125889 = function (x,var_args){
var p__125878 = null;
if (goog.isDef(var_args)) {
  p__125878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__125889__delegate.call(this, x, p__125878);
};
G__125889.cljs$lang$maxFixedArity = 1;
G__125889.cljs$lang$applyTo = (function (arglist__125890){
var x = cljs.core.first(arglist__125890);
var p__125878 = cljs.core.rest(arglist__125890);
return G__125889__delegate(x, p__125878);
});
G__125889.cljs$lang$arity$variadic = G__125889__delegate;
return G__125889;
})()
;
atom = function(x,var_args){
var p__125878 = var_args;
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
var temp__3974__auto____125894 = a.validator;
if(cljs.core.truth_(temp__3974__auto____125894))
{var validate__125895 = temp__3974__auto____125894;
if(cljs.core.truth_(validate__125895.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__125896 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__125896,new_value);
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
var G__125897__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__125897 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__125897__delegate.call(this, a, f, x, y, z, more);
};
G__125897.cljs$lang$maxFixedArity = 5;
G__125897.cljs$lang$applyTo = (function (arglist__125898){
var a = cljs.core.first(arglist__125898);
var f = cljs.core.first(cljs.core.next(arglist__125898));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__125898)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__125898))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__125898)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__125898)))));
return G__125897__delegate(a, f, x, y, z, more);
});
G__125897.cljs$lang$arity$variadic = G__125897__delegate;
return G__125897;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__125899){
var iref = cljs.core.first(arglist__125899);
var f = cljs.core.first(cljs.core.next(arglist__125899));
var args = cljs.core.rest(cljs.core.next(arglist__125899));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__125900 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__125900.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__125901 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__125901.state,(function (p__125902){
var map__125903__125904 = p__125902;
var map__125903__125905 = ((cljs.core.seq_QMARK_.call(null,map__125903__125904))?cljs.core.apply.call(null,cljs.core.hash_map,map__125903__125904):map__125903__125904);
var curr_state__125906 = map__125903__125905;
var done__125907 = cljs.core._lookup.call(null,map__125903__125905,"\uFDD0'done",null);
if(cljs.core.truth_(done__125907))
{return curr_state__125906;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__125901.f.call(null)});
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
var map__125928__125929 = options;
var map__125928__125930 = ((cljs.core.seq_QMARK_.call(null,map__125928__125929))?cljs.core.apply.call(null,cljs.core.hash_map,map__125928__125929):map__125928__125929);
var keywordize_keys__125931 = cljs.core._lookup.call(null,map__125928__125930,"\uFDD0'keywordize-keys",null);
var keyfn__125932 = (cljs.core.truth_(keywordize_keys__125931)?cljs.core.keyword:cljs.core.str);
var f__125947 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5725__auto____125946 = (function iter__125940(s__125941){
return (new cljs.core.LazySeq(null,false,(function (){
var s__125941__125944 = s__125941;
while(true){
if(cljs.core.seq.call(null,s__125941__125944))
{var k__125945 = cljs.core.first.call(null,s__125941__125944);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__125932.call(null,k__125945),thisfn.call(null,(x[k__125945]))], true),iter__125940.call(null,cljs.core.rest.call(null,s__125941__125944)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5725__auto____125946.call(null,cljs.core.js_keys.call(null,x));
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
return f__125947.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__125948){
var x = cljs.core.first(arglist__125948);
var options = cljs.core.rest(arglist__125948);
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
var mem__125953 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__125957__delegate = function (args){
var temp__3971__auto____125954 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__125953),args,null);
if(cljs.core.truth_(temp__3971__auto____125954))
{var v__125955 = temp__3971__auto____125954;
return v__125955;
} else
{var ret__125956 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__125953,cljs.core.assoc,args,ret__125956);
return ret__125956;
}
};
var G__125957 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__125957__delegate.call(this, args);
};
G__125957.cljs$lang$maxFixedArity = 0;
G__125957.cljs$lang$applyTo = (function (arglist__125958){
var args = cljs.core.seq(arglist__125958);;
return G__125957__delegate(args);
});
G__125957.cljs$lang$arity$variadic = G__125957__delegate;
return G__125957;
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
var ret__125960 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__125960))
{{
var G__125961 = ret__125960;
f = G__125961;
continue;
}
} else
{return ret__125960;
}
break;
}
});
var trampoline__2 = (function() { 
var G__125962__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__125962 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__125962__delegate.call(this, f, args);
};
G__125962.cljs$lang$maxFixedArity = 1;
G__125962.cljs$lang$applyTo = (function (arglist__125963){
var f = cljs.core.first(arglist__125963);
var args = cljs.core.rest(arglist__125963);
return G__125962__delegate(f, args);
});
G__125962.cljs$lang$arity$variadic = G__125962__delegate;
return G__125962;
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
var k__125965 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__125965,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__125965,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____125974 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____125974)
{return or__3824__auto____125974;
} else
{var or__3824__auto____125975 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____125975)
{return or__3824__auto____125975;
} else
{var and__3822__auto____125976 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____125976)
{var and__3822__auto____125977 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____125977)
{var and__3822__auto____125978 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____125978)
{var ret__125979 = true;
var i__125980 = 0;
while(true){
if((function (){var or__3824__auto____125981 = cljs.core.not.call(null,ret__125979);
if(or__3824__auto____125981)
{return or__3824__auto____125981;
} else
{return (i__125980 === cljs.core.count.call(null,parent));
}
})())
{return ret__125979;
} else
{{
var G__125982 = isa_QMARK_.call(null,h,child.call(null,i__125980),parent.call(null,i__125980));
var G__125983 = (i__125980 + 1);
ret__125979 = G__125982;
i__125980 = G__125983;
continue;
}
}
break;
}
} else
{return and__3822__auto____125978;
}
} else
{return and__3822__auto____125977;
}
} else
{return and__3822__auto____125976;
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
var tp__125992 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__125993 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__125994 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__125995 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____125996 = ((cljs.core.contains_QMARK_.call(null,tp__125992.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__125994.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__125994.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__125992,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__125995.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__125993,parent,ta__125994),"\uFDD0'descendants":tf__125995.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__125994,tag,td__125993)});
})());
if(cljs.core.truth_(or__3824__auto____125996))
{return or__3824__auto____125996;
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
var parentMap__126001 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__126002 = (cljs.core.truth_(parentMap__126001.call(null,tag))?cljs.core.disj.call(null,parentMap__126001.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__126003 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__126002))?cljs.core.assoc.call(null,parentMap__126001,tag,childsParents__126002):cljs.core.dissoc.call(null,parentMap__126001,tag));
var deriv_seq__126004 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__125984_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__125984_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__125984_SHARP_),cljs.core.second.call(null,p1__125984_SHARP_)));
}),cljs.core.seq.call(null,newParents__126003)));
if(cljs.core.contains_QMARK_.call(null,parentMap__126001.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__125985_SHARP_,p2__125986_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__125985_SHARP_,p2__125986_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__126004));
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
var xprefs__126012 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____126014 = (cljs.core.truth_((function (){var and__3822__auto____126013 = xprefs__126012;
if(cljs.core.truth_(and__3822__auto____126013))
{return xprefs__126012.call(null,y);
} else
{return and__3822__auto____126013;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____126014))
{return or__3824__auto____126014;
} else
{var or__3824__auto____126016 = (function (){var ps__126015 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__126015) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__126015),prefer_table)))
{} else
{}
{
var G__126019 = cljs.core.rest.call(null,ps__126015);
ps__126015 = G__126019;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____126016))
{return or__3824__auto____126016;
} else
{var or__3824__auto____126018 = (function (){var ps__126017 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__126017) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__126017),y,prefer_table)))
{} else
{}
{
var G__126020 = cljs.core.rest.call(null,ps__126017);
ps__126017 = G__126020;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____126018))
{return or__3824__auto____126018;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____126022 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____126022))
{return or__3824__auto____126022;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__126040 = cljs.core.reduce.call(null,(function (be,p__126032){
var vec__126033__126034 = p__126032;
var k__126035 = cljs.core.nth.call(null,vec__126033__126034,0,null);
var ___126036 = cljs.core.nth.call(null,vec__126033__126034,1,null);
var e__126037 = vec__126033__126034;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__126035))
{var be2__126039 = (cljs.core.truth_((function (){var or__3824__auto____126038 = (be == null);
if(or__3824__auto____126038)
{return or__3824__auto____126038;
} else
{return cljs.core.dominates.call(null,k__126035,cljs.core.first.call(null,be),prefer_table);
}
})())?e__126037:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__126039),k__126035,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__126035),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__126039)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__126039;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__126040))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__126040));
return cljs.core.second.call(null,best_entry__126040);
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
if((function (){var and__3822__auto____126045 = mf;
if(and__3822__auto____126045)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____126045;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5628__auto____126046 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126047 = (cljs.core._reset[goog.typeOf(x__5628__auto____126046)]);
if(or__3824__auto____126047)
{return or__3824__auto____126047;
} else
{var or__3824__auto____126048 = (cljs.core._reset["_"]);
if(or__3824__auto____126048)
{return or__3824__auto____126048;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____126053 = mf;
if(and__3822__auto____126053)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____126053;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5628__auto____126054 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126055 = (cljs.core._add_method[goog.typeOf(x__5628__auto____126054)]);
if(or__3824__auto____126055)
{return or__3824__auto____126055;
} else
{var or__3824__auto____126056 = (cljs.core._add_method["_"]);
if(or__3824__auto____126056)
{return or__3824__auto____126056;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____126061 = mf;
if(and__3822__auto____126061)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____126061;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5628__auto____126062 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126063 = (cljs.core._remove_method[goog.typeOf(x__5628__auto____126062)]);
if(or__3824__auto____126063)
{return or__3824__auto____126063;
} else
{var or__3824__auto____126064 = (cljs.core._remove_method["_"]);
if(or__3824__auto____126064)
{return or__3824__auto____126064;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____126069 = mf;
if(and__3822__auto____126069)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____126069;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5628__auto____126070 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126071 = (cljs.core._prefer_method[goog.typeOf(x__5628__auto____126070)]);
if(or__3824__auto____126071)
{return or__3824__auto____126071;
} else
{var or__3824__auto____126072 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____126072)
{return or__3824__auto____126072;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____126077 = mf;
if(and__3822__auto____126077)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____126077;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5628__auto____126078 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126079 = (cljs.core._get_method[goog.typeOf(x__5628__auto____126078)]);
if(or__3824__auto____126079)
{return or__3824__auto____126079;
} else
{var or__3824__auto____126080 = (cljs.core._get_method["_"]);
if(or__3824__auto____126080)
{return or__3824__auto____126080;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____126085 = mf;
if(and__3822__auto____126085)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____126085;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5628__auto____126086 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126087 = (cljs.core._methods[goog.typeOf(x__5628__auto____126086)]);
if(or__3824__auto____126087)
{return or__3824__auto____126087;
} else
{var or__3824__auto____126088 = (cljs.core._methods["_"]);
if(or__3824__auto____126088)
{return or__3824__auto____126088;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____126093 = mf;
if(and__3822__auto____126093)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____126093;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5628__auto____126094 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126095 = (cljs.core._prefers[goog.typeOf(x__5628__auto____126094)]);
if(or__3824__auto____126095)
{return or__3824__auto____126095;
} else
{var or__3824__auto____126096 = (cljs.core._prefers["_"]);
if(or__3824__auto____126096)
{return or__3824__auto____126096;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____126101 = mf;
if(and__3822__auto____126101)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____126101;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5628__auto____126102 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____126103 = (cljs.core._dispatch[goog.typeOf(x__5628__auto____126102)]);
if(or__3824__auto____126103)
{return or__3824__auto____126103;
} else
{var or__3824__auto____126104 = (cljs.core._dispatch["_"]);
if(or__3824__auto____126104)
{return or__3824__auto____126104;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__126107 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__126108 = cljs.core._get_method.call(null,mf,dispatch_val__126107);
if(cljs.core.truth_(target_fn__126108))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__126107)].join('')));
}
return cljs.core.apply.call(null,target_fn__126108,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__126109 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__126110 = this;
cljs.core.swap_BANG_.call(null,this__126110.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__126110.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__126110.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__126110.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__126111 = this;
cljs.core.swap_BANG_.call(null,this__126111.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__126111.method_cache,this__126111.method_table,this__126111.cached_hierarchy,this__126111.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__126112 = this;
cljs.core.swap_BANG_.call(null,this__126112.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__126112.method_cache,this__126112.method_table,this__126112.cached_hierarchy,this__126112.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__126113 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__126113.cached_hierarchy),cljs.core.deref.call(null,this__126113.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__126113.method_cache,this__126113.method_table,this__126113.cached_hierarchy,this__126113.hierarchy);
}
var temp__3971__auto____126114 = cljs.core.deref.call(null,this__126113.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____126114))
{var target_fn__126115 = temp__3971__auto____126114;
return target_fn__126115;
} else
{var temp__3971__auto____126116 = cljs.core.find_and_cache_best_method.call(null,this__126113.name,dispatch_val,this__126113.hierarchy,this__126113.method_table,this__126113.prefer_table,this__126113.method_cache,this__126113.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____126116))
{var target_fn__126117 = temp__3971__auto____126116;
return target_fn__126117;
} else
{return cljs.core.deref.call(null,this__126113.method_table).call(null,this__126113.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__126118 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__126118.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__126118.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__126118.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__126118.method_cache,this__126118.method_table,this__126118.cached_hierarchy,this__126118.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__126119 = this;
return cljs.core.deref.call(null,this__126119.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__126120 = this;
return cljs.core.deref.call(null,this__126120.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__126121 = this;
return cljs.core.do_dispatch.call(null,mf,this__126121.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__126123__delegate = function (_,args){
var self__126122 = this;
return cljs.core._dispatch.call(null,self__126122,args);
};
var G__126123 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__126123__delegate.call(this, _, args);
};
G__126123.cljs$lang$maxFixedArity = 1;
G__126123.cljs$lang$applyTo = (function (arglist__126124){
var _ = cljs.core.first(arglist__126124);
var args = cljs.core.rest(arglist__126124);
return G__126123__delegate(_, args);
});
G__126123.cljs$lang$arity$variadic = G__126123__delegate;
return G__126123;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__126125 = this;
return cljs.core._dispatch.call(null,self__126125,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__126126 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_126128,writer,_){
var this__126127 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__126127.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_126130,_){
var this__126129 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__126129.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__126131 = this;
var and__3822__auto____126132 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____126132)
{return (this__126131.uuid === other.uuid);
} else
{return and__3822__auto____126132;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__126133 = this;
var this__126134 = this;
return cljs.core.pr_str.call(null,this__126134);
});
cljs.core.UUID;
