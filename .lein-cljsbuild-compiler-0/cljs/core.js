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
var x__105588 = (((x == null))?null:x);
if((p[goog.typeOf(x__105588)]))
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
var G__105589__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__105589 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__105589__delegate.call(this, array, i, idxs);
};
G__105589.cljs$lang$maxFixedArity = 2;
G__105589.cljs$lang$applyTo = (function (arglist__105590){
var array = cljs.core.first(arglist__105590);
var i = cljs.core.first(cljs.core.next(arglist__105590));
var idxs = cljs.core.rest(cljs.core.next(arglist__105590));
return G__105589__delegate(array, i, idxs);
});
G__105589.cljs$lang$arity$variadic = G__105589__delegate;
return G__105589;
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
if((function (){var and__3822__auto____105675 = this$;
if(and__3822__auto____105675)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____105675;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5628__auto____105676 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105677 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105676)]);
if(or__3824__auto____105677)
{return or__3824__auto____105677;
} else
{var or__3824__auto____105678 = (cljs.core._invoke["_"]);
if(or__3824__auto____105678)
{return or__3824__auto____105678;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____105679 = this$;
if(and__3822__auto____105679)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____105679;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5628__auto____105680 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105681 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105680)]);
if(or__3824__auto____105681)
{return or__3824__auto____105681;
} else
{var or__3824__auto____105682 = (cljs.core._invoke["_"]);
if(or__3824__auto____105682)
{return or__3824__auto____105682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____105683 = this$;
if(and__3822__auto____105683)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____105683;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5628__auto____105684 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105685 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105684)]);
if(or__3824__auto____105685)
{return or__3824__auto____105685;
} else
{var or__3824__auto____105686 = (cljs.core._invoke["_"]);
if(or__3824__auto____105686)
{return or__3824__auto____105686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____105687 = this$;
if(and__3822__auto____105687)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____105687;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5628__auto____105688 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105689 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105688)]);
if(or__3824__auto____105689)
{return or__3824__auto____105689;
} else
{var or__3824__auto____105690 = (cljs.core._invoke["_"]);
if(or__3824__auto____105690)
{return or__3824__auto____105690;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____105691 = this$;
if(and__3822__auto____105691)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____105691;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5628__auto____105692 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105693 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105692)]);
if(or__3824__auto____105693)
{return or__3824__auto____105693;
} else
{var or__3824__auto____105694 = (cljs.core._invoke["_"]);
if(or__3824__auto____105694)
{return or__3824__auto____105694;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____105695 = this$;
if(and__3822__auto____105695)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____105695;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5628__auto____105696 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105697 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105696)]);
if(or__3824__auto____105697)
{return or__3824__auto____105697;
} else
{var or__3824__auto____105698 = (cljs.core._invoke["_"]);
if(or__3824__auto____105698)
{return or__3824__auto____105698;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____105699 = this$;
if(and__3822__auto____105699)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____105699;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5628__auto____105700 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105701 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105700)]);
if(or__3824__auto____105701)
{return or__3824__auto____105701;
} else
{var or__3824__auto____105702 = (cljs.core._invoke["_"]);
if(or__3824__auto____105702)
{return or__3824__auto____105702;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____105703 = this$;
if(and__3822__auto____105703)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____105703;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5628__auto____105704 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105705 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105704)]);
if(or__3824__auto____105705)
{return or__3824__auto____105705;
} else
{var or__3824__auto____105706 = (cljs.core._invoke["_"]);
if(or__3824__auto____105706)
{return or__3824__auto____105706;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____105707 = this$;
if(and__3822__auto____105707)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____105707;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5628__auto____105708 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105709 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105708)]);
if(or__3824__auto____105709)
{return or__3824__auto____105709;
} else
{var or__3824__auto____105710 = (cljs.core._invoke["_"]);
if(or__3824__auto____105710)
{return or__3824__auto____105710;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____105711 = this$;
if(and__3822__auto____105711)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____105711;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5628__auto____105712 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105713 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105712)]);
if(or__3824__auto____105713)
{return or__3824__auto____105713;
} else
{var or__3824__auto____105714 = (cljs.core._invoke["_"]);
if(or__3824__auto____105714)
{return or__3824__auto____105714;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____105715 = this$;
if(and__3822__auto____105715)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____105715;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5628__auto____105716 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105717 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105716)]);
if(or__3824__auto____105717)
{return or__3824__auto____105717;
} else
{var or__3824__auto____105718 = (cljs.core._invoke["_"]);
if(or__3824__auto____105718)
{return or__3824__auto____105718;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____105719 = this$;
if(and__3822__auto____105719)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____105719;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5628__auto____105720 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105721 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105720)]);
if(or__3824__auto____105721)
{return or__3824__auto____105721;
} else
{var or__3824__auto____105722 = (cljs.core._invoke["_"]);
if(or__3824__auto____105722)
{return or__3824__auto____105722;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____105723 = this$;
if(and__3822__auto____105723)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____105723;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5628__auto____105724 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105725 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105724)]);
if(or__3824__auto____105725)
{return or__3824__auto____105725;
} else
{var or__3824__auto____105726 = (cljs.core._invoke["_"]);
if(or__3824__auto____105726)
{return or__3824__auto____105726;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____105727 = this$;
if(and__3822__auto____105727)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____105727;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5628__auto____105728 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105729 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105728)]);
if(or__3824__auto____105729)
{return or__3824__auto____105729;
} else
{var or__3824__auto____105730 = (cljs.core._invoke["_"]);
if(or__3824__auto____105730)
{return or__3824__auto____105730;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____105731 = this$;
if(and__3822__auto____105731)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____105731;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5628__auto____105732 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105733 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105732)]);
if(or__3824__auto____105733)
{return or__3824__auto____105733;
} else
{var or__3824__auto____105734 = (cljs.core._invoke["_"]);
if(or__3824__auto____105734)
{return or__3824__auto____105734;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____105735 = this$;
if(and__3822__auto____105735)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____105735;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5628__auto____105736 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105737 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105736)]);
if(or__3824__auto____105737)
{return or__3824__auto____105737;
} else
{var or__3824__auto____105738 = (cljs.core._invoke["_"]);
if(or__3824__auto____105738)
{return or__3824__auto____105738;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____105739 = this$;
if(and__3822__auto____105739)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____105739;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5628__auto____105740 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105741 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105740)]);
if(or__3824__auto____105741)
{return or__3824__auto____105741;
} else
{var or__3824__auto____105742 = (cljs.core._invoke["_"]);
if(or__3824__auto____105742)
{return or__3824__auto____105742;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____105743 = this$;
if(and__3822__auto____105743)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____105743;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5628__auto____105744 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105745 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105744)]);
if(or__3824__auto____105745)
{return or__3824__auto____105745;
} else
{var or__3824__auto____105746 = (cljs.core._invoke["_"]);
if(or__3824__auto____105746)
{return or__3824__auto____105746;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____105747 = this$;
if(and__3822__auto____105747)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____105747;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5628__auto____105748 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105749 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105748)]);
if(or__3824__auto____105749)
{return or__3824__auto____105749;
} else
{var or__3824__auto____105750 = (cljs.core._invoke["_"]);
if(or__3824__auto____105750)
{return or__3824__auto____105750;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____105751 = this$;
if(and__3822__auto____105751)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____105751;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5628__auto____105752 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105753 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105752)]);
if(or__3824__auto____105753)
{return or__3824__auto____105753;
} else
{var or__3824__auto____105754 = (cljs.core._invoke["_"]);
if(or__3824__auto____105754)
{return or__3824__auto____105754;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____105755 = this$;
if(and__3822__auto____105755)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____105755;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5628__auto____105756 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____105757 = (cljs.core._invoke[goog.typeOf(x__5628__auto____105756)]);
if(or__3824__auto____105757)
{return or__3824__auto____105757;
} else
{var or__3824__auto____105758 = (cljs.core._invoke["_"]);
if(or__3824__auto____105758)
{return or__3824__auto____105758;
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
if((function (){var and__3822__auto____105763 = coll;
if(and__3822__auto____105763)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____105763;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5628__auto____105764 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105765 = (cljs.core._count[goog.typeOf(x__5628__auto____105764)]);
if(or__3824__auto____105765)
{return or__3824__auto____105765;
} else
{var or__3824__auto____105766 = (cljs.core._count["_"]);
if(or__3824__auto____105766)
{return or__3824__auto____105766;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____105771 = coll;
if(and__3822__auto____105771)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____105771;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5628__auto____105772 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105773 = (cljs.core._empty[goog.typeOf(x__5628__auto____105772)]);
if(or__3824__auto____105773)
{return or__3824__auto____105773;
} else
{var or__3824__auto____105774 = (cljs.core._empty["_"]);
if(or__3824__auto____105774)
{return or__3824__auto____105774;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____105779 = coll;
if(and__3822__auto____105779)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____105779;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5628__auto____105780 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105781 = (cljs.core._conj[goog.typeOf(x__5628__auto____105780)]);
if(or__3824__auto____105781)
{return or__3824__auto____105781;
} else
{var or__3824__auto____105782 = (cljs.core._conj["_"]);
if(or__3824__auto____105782)
{return or__3824__auto____105782;
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
if((function (){var and__3822__auto____105791 = coll;
if(and__3822__auto____105791)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____105791;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5628__auto____105792 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105793 = (cljs.core._nth[goog.typeOf(x__5628__auto____105792)]);
if(or__3824__auto____105793)
{return or__3824__auto____105793;
} else
{var or__3824__auto____105794 = (cljs.core._nth["_"]);
if(or__3824__auto____105794)
{return or__3824__auto____105794;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____105795 = coll;
if(and__3822__auto____105795)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____105795;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5628__auto____105796 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105797 = (cljs.core._nth[goog.typeOf(x__5628__auto____105796)]);
if(or__3824__auto____105797)
{return or__3824__auto____105797;
} else
{var or__3824__auto____105798 = (cljs.core._nth["_"]);
if(or__3824__auto____105798)
{return or__3824__auto____105798;
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
if((function (){var and__3822__auto____105803 = coll;
if(and__3822__auto____105803)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____105803;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5628__auto____105804 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105805 = (cljs.core._first[goog.typeOf(x__5628__auto____105804)]);
if(or__3824__auto____105805)
{return or__3824__auto____105805;
} else
{var or__3824__auto____105806 = (cljs.core._first["_"]);
if(or__3824__auto____105806)
{return or__3824__auto____105806;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____105811 = coll;
if(and__3822__auto____105811)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____105811;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5628__auto____105812 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105813 = (cljs.core._rest[goog.typeOf(x__5628__auto____105812)]);
if(or__3824__auto____105813)
{return or__3824__auto____105813;
} else
{var or__3824__auto____105814 = (cljs.core._rest["_"]);
if(or__3824__auto____105814)
{return or__3824__auto____105814;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____105819 = coll;
if(and__3822__auto____105819)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____105819;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5628__auto____105820 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105821 = (cljs.core._next[goog.typeOf(x__5628__auto____105820)]);
if(or__3824__auto____105821)
{return or__3824__auto____105821;
} else
{var or__3824__auto____105822 = (cljs.core._next["_"]);
if(or__3824__auto____105822)
{return or__3824__auto____105822;
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
if((function (){var and__3822__auto____105831 = o;
if(and__3822__auto____105831)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____105831;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5628__auto____105832 = (((o == null))?null:o);
return (function (){var or__3824__auto____105833 = (cljs.core._lookup[goog.typeOf(x__5628__auto____105832)]);
if(or__3824__auto____105833)
{return or__3824__auto____105833;
} else
{var or__3824__auto____105834 = (cljs.core._lookup["_"]);
if(or__3824__auto____105834)
{return or__3824__auto____105834;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____105835 = o;
if(and__3822__auto____105835)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____105835;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5628__auto____105836 = (((o == null))?null:o);
return (function (){var or__3824__auto____105837 = (cljs.core._lookup[goog.typeOf(x__5628__auto____105836)]);
if(or__3824__auto____105837)
{return or__3824__auto____105837;
} else
{var or__3824__auto____105838 = (cljs.core._lookup["_"]);
if(or__3824__auto____105838)
{return or__3824__auto____105838;
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
if((function (){var and__3822__auto____105843 = coll;
if(and__3822__auto____105843)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____105843;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5628__auto____105844 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105845 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5628__auto____105844)]);
if(or__3824__auto____105845)
{return or__3824__auto____105845;
} else
{var or__3824__auto____105846 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____105846)
{return or__3824__auto____105846;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____105851 = coll;
if(and__3822__auto____105851)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____105851;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5628__auto____105852 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105853 = (cljs.core._assoc[goog.typeOf(x__5628__auto____105852)]);
if(or__3824__auto____105853)
{return or__3824__auto____105853;
} else
{var or__3824__auto____105854 = (cljs.core._assoc["_"]);
if(or__3824__auto____105854)
{return or__3824__auto____105854;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____105859 = coll;
if(and__3822__auto____105859)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____105859;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5628__auto____105860 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105861 = (cljs.core._dissoc[goog.typeOf(x__5628__auto____105860)]);
if(or__3824__auto____105861)
{return or__3824__auto____105861;
} else
{var or__3824__auto____105862 = (cljs.core._dissoc["_"]);
if(or__3824__auto____105862)
{return or__3824__auto____105862;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____105867 = coll;
if(and__3822__auto____105867)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____105867;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5628__auto____105868 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105869 = (cljs.core._key[goog.typeOf(x__5628__auto____105868)]);
if(or__3824__auto____105869)
{return or__3824__auto____105869;
} else
{var or__3824__auto____105870 = (cljs.core._key["_"]);
if(or__3824__auto____105870)
{return or__3824__auto____105870;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____105875 = coll;
if(and__3822__auto____105875)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____105875;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5628__auto____105876 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105877 = (cljs.core._val[goog.typeOf(x__5628__auto____105876)]);
if(or__3824__auto____105877)
{return or__3824__auto____105877;
} else
{var or__3824__auto____105878 = (cljs.core._val["_"]);
if(or__3824__auto____105878)
{return or__3824__auto____105878;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____105883 = coll;
if(and__3822__auto____105883)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____105883;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5628__auto____105884 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105885 = (cljs.core._disjoin[goog.typeOf(x__5628__auto____105884)]);
if(or__3824__auto____105885)
{return or__3824__auto____105885;
} else
{var or__3824__auto____105886 = (cljs.core._disjoin["_"]);
if(or__3824__auto____105886)
{return or__3824__auto____105886;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____105891 = coll;
if(and__3822__auto____105891)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____105891;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5628__auto____105892 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105893 = (cljs.core._peek[goog.typeOf(x__5628__auto____105892)]);
if(or__3824__auto____105893)
{return or__3824__auto____105893;
} else
{var or__3824__auto____105894 = (cljs.core._peek["_"]);
if(or__3824__auto____105894)
{return or__3824__auto____105894;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____105899 = coll;
if(and__3822__auto____105899)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____105899;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5628__auto____105900 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105901 = (cljs.core._pop[goog.typeOf(x__5628__auto____105900)]);
if(or__3824__auto____105901)
{return or__3824__auto____105901;
} else
{var or__3824__auto____105902 = (cljs.core._pop["_"]);
if(or__3824__auto____105902)
{return or__3824__auto____105902;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____105907 = coll;
if(and__3822__auto____105907)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____105907;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5628__auto____105908 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105909 = (cljs.core._assoc_n[goog.typeOf(x__5628__auto____105908)]);
if(or__3824__auto____105909)
{return or__3824__auto____105909;
} else
{var or__3824__auto____105910 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____105910)
{return or__3824__auto____105910;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____105915 = o;
if(and__3822__auto____105915)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____105915;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5628__auto____105916 = (((o == null))?null:o);
return (function (){var or__3824__auto____105917 = (cljs.core._deref[goog.typeOf(x__5628__auto____105916)]);
if(or__3824__auto____105917)
{return or__3824__auto____105917;
} else
{var or__3824__auto____105918 = (cljs.core._deref["_"]);
if(or__3824__auto____105918)
{return or__3824__auto____105918;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____105923 = o;
if(and__3822__auto____105923)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____105923;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5628__auto____105924 = (((o == null))?null:o);
return (function (){var or__3824__auto____105925 = (cljs.core._deref_with_timeout[goog.typeOf(x__5628__auto____105924)]);
if(or__3824__auto____105925)
{return or__3824__auto____105925;
} else
{var or__3824__auto____105926 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____105926)
{return or__3824__auto____105926;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____105931 = o;
if(and__3822__auto____105931)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____105931;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5628__auto____105932 = (((o == null))?null:o);
return (function (){var or__3824__auto____105933 = (cljs.core._meta[goog.typeOf(x__5628__auto____105932)]);
if(or__3824__auto____105933)
{return or__3824__auto____105933;
} else
{var or__3824__auto____105934 = (cljs.core._meta["_"]);
if(or__3824__auto____105934)
{return or__3824__auto____105934;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____105939 = o;
if(and__3822__auto____105939)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____105939;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5628__auto____105940 = (((o == null))?null:o);
return (function (){var or__3824__auto____105941 = (cljs.core._with_meta[goog.typeOf(x__5628__auto____105940)]);
if(or__3824__auto____105941)
{return or__3824__auto____105941;
} else
{var or__3824__auto____105942 = (cljs.core._with_meta["_"]);
if(or__3824__auto____105942)
{return or__3824__auto____105942;
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
if((function (){var and__3822__auto____105951 = coll;
if(and__3822__auto____105951)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____105951;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5628__auto____105952 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105953 = (cljs.core._reduce[goog.typeOf(x__5628__auto____105952)]);
if(or__3824__auto____105953)
{return or__3824__auto____105953;
} else
{var or__3824__auto____105954 = (cljs.core._reduce["_"]);
if(or__3824__auto____105954)
{return or__3824__auto____105954;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____105955 = coll;
if(and__3822__auto____105955)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____105955;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5628__auto____105956 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105957 = (cljs.core._reduce[goog.typeOf(x__5628__auto____105956)]);
if(or__3824__auto____105957)
{return or__3824__auto____105957;
} else
{var or__3824__auto____105958 = (cljs.core._reduce["_"]);
if(or__3824__auto____105958)
{return or__3824__auto____105958;
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
if((function (){var and__3822__auto____105963 = coll;
if(and__3822__auto____105963)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____105963;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5628__auto____105964 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105965 = (cljs.core._kv_reduce[goog.typeOf(x__5628__auto____105964)]);
if(or__3824__auto____105965)
{return or__3824__auto____105965;
} else
{var or__3824__auto____105966 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____105966)
{return or__3824__auto____105966;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____105971 = o;
if(and__3822__auto____105971)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____105971;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5628__auto____105972 = (((o == null))?null:o);
return (function (){var or__3824__auto____105973 = (cljs.core._equiv[goog.typeOf(x__5628__auto____105972)]);
if(or__3824__auto____105973)
{return or__3824__auto____105973;
} else
{var or__3824__auto____105974 = (cljs.core._equiv["_"]);
if(or__3824__auto____105974)
{return or__3824__auto____105974;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____105979 = o;
if(and__3822__auto____105979)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____105979;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5628__auto____105980 = (((o == null))?null:o);
return (function (){var or__3824__auto____105981 = (cljs.core._hash[goog.typeOf(x__5628__auto____105980)]);
if(or__3824__auto____105981)
{return or__3824__auto____105981;
} else
{var or__3824__auto____105982 = (cljs.core._hash["_"]);
if(or__3824__auto____105982)
{return or__3824__auto____105982;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____105987 = o;
if(and__3822__auto____105987)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____105987;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5628__auto____105988 = (((o == null))?null:o);
return (function (){var or__3824__auto____105989 = (cljs.core._seq[goog.typeOf(x__5628__auto____105988)]);
if(or__3824__auto____105989)
{return or__3824__auto____105989;
} else
{var or__3824__auto____105990 = (cljs.core._seq["_"]);
if(or__3824__auto____105990)
{return or__3824__auto____105990;
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
if((function (){var and__3822__auto____105995 = coll;
if(and__3822__auto____105995)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____105995;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5628__auto____105996 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____105997 = (cljs.core._rseq[goog.typeOf(x__5628__auto____105996)]);
if(or__3824__auto____105997)
{return or__3824__auto____105997;
} else
{var or__3824__auto____105998 = (cljs.core._rseq["_"]);
if(or__3824__auto____105998)
{return or__3824__auto____105998;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____106003 = coll;
if(and__3822__auto____106003)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____106003;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5628__auto____106004 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106005 = (cljs.core._sorted_seq[goog.typeOf(x__5628__auto____106004)]);
if(or__3824__auto____106005)
{return or__3824__auto____106005;
} else
{var or__3824__auto____106006 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____106006)
{return or__3824__auto____106006;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____106011 = coll;
if(and__3822__auto____106011)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____106011;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5628__auto____106012 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106013 = (cljs.core._sorted_seq_from[goog.typeOf(x__5628__auto____106012)]);
if(or__3824__auto____106013)
{return or__3824__auto____106013;
} else
{var or__3824__auto____106014 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____106014)
{return or__3824__auto____106014;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____106019 = coll;
if(and__3822__auto____106019)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____106019;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5628__auto____106020 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106021 = (cljs.core._entry_key[goog.typeOf(x__5628__auto____106020)]);
if(or__3824__auto____106021)
{return or__3824__auto____106021;
} else
{var or__3824__auto____106022 = (cljs.core._entry_key["_"]);
if(or__3824__auto____106022)
{return or__3824__auto____106022;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____106027 = coll;
if(and__3822__auto____106027)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____106027;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5628__auto____106028 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106029 = (cljs.core._comparator[goog.typeOf(x__5628__auto____106028)]);
if(or__3824__auto____106029)
{return or__3824__auto____106029;
} else
{var or__3824__auto____106030 = (cljs.core._comparator["_"]);
if(or__3824__auto____106030)
{return or__3824__auto____106030;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____106035 = o;
if(and__3822__auto____106035)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____106035;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5628__auto____106036 = (((o == null))?null:o);
return (function (){var or__3824__auto____106037 = (cljs.core._pr_seq[goog.typeOf(x__5628__auto____106036)]);
if(or__3824__auto____106037)
{return or__3824__auto____106037;
} else
{var or__3824__auto____106038 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____106038)
{return or__3824__auto____106038;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____106043 = writer;
if(and__3822__auto____106043)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____106043;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5628__auto____106044 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____106045 = (cljs.core._write[goog.typeOf(x__5628__auto____106044)]);
if(or__3824__auto____106045)
{return or__3824__auto____106045;
} else
{var or__3824__auto____106046 = (cljs.core._write["_"]);
if(or__3824__auto____106046)
{return or__3824__auto____106046;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____106051 = writer;
if(and__3822__auto____106051)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____106051;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5628__auto____106052 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____106053 = (cljs.core._flush[goog.typeOf(x__5628__auto____106052)]);
if(or__3824__auto____106053)
{return or__3824__auto____106053;
} else
{var or__3824__auto____106054 = (cljs.core._flush["_"]);
if(or__3824__auto____106054)
{return or__3824__auto____106054;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____106059 = o;
if(and__3822__auto____106059)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____106059;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5628__auto____106060 = (((o == null))?null:o);
return (function (){var or__3824__auto____106061 = (cljs.core._pr_writer[goog.typeOf(x__5628__auto____106060)]);
if(or__3824__auto____106061)
{return or__3824__auto____106061;
} else
{var or__3824__auto____106062 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____106062)
{return or__3824__auto____106062;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____106067 = d;
if(and__3822__auto____106067)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____106067;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5628__auto____106068 = (((d == null))?null:d);
return (function (){var or__3824__auto____106069 = (cljs.core._realized_QMARK_[goog.typeOf(x__5628__auto____106068)]);
if(or__3824__auto____106069)
{return or__3824__auto____106069;
} else
{var or__3824__auto____106070 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____106070)
{return or__3824__auto____106070;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____106075 = this$;
if(and__3822__auto____106075)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____106075;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5628__auto____106076 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____106077 = (cljs.core._notify_watches[goog.typeOf(x__5628__auto____106076)]);
if(or__3824__auto____106077)
{return or__3824__auto____106077;
} else
{var or__3824__auto____106078 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____106078)
{return or__3824__auto____106078;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____106083 = this$;
if(and__3822__auto____106083)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____106083;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5628__auto____106084 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____106085 = (cljs.core._add_watch[goog.typeOf(x__5628__auto____106084)]);
if(or__3824__auto____106085)
{return or__3824__auto____106085;
} else
{var or__3824__auto____106086 = (cljs.core._add_watch["_"]);
if(or__3824__auto____106086)
{return or__3824__auto____106086;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____106091 = this$;
if(and__3822__auto____106091)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____106091;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5628__auto____106092 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____106093 = (cljs.core._remove_watch[goog.typeOf(x__5628__auto____106092)]);
if(or__3824__auto____106093)
{return or__3824__auto____106093;
} else
{var or__3824__auto____106094 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____106094)
{return or__3824__auto____106094;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____106099 = coll;
if(and__3822__auto____106099)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____106099;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5628__auto____106100 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106101 = (cljs.core._as_transient[goog.typeOf(x__5628__auto____106100)]);
if(or__3824__auto____106101)
{return or__3824__auto____106101;
} else
{var or__3824__auto____106102 = (cljs.core._as_transient["_"]);
if(or__3824__auto____106102)
{return or__3824__auto____106102;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____106107 = tcoll;
if(and__3822__auto____106107)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____106107;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5628__auto____106108 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106109 = (cljs.core._conj_BANG_[goog.typeOf(x__5628__auto____106108)]);
if(or__3824__auto____106109)
{return or__3824__auto____106109;
} else
{var or__3824__auto____106110 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____106110)
{return or__3824__auto____106110;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____106115 = tcoll;
if(and__3822__auto____106115)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____106115;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5628__auto____106116 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106117 = (cljs.core._persistent_BANG_[goog.typeOf(x__5628__auto____106116)]);
if(or__3824__auto____106117)
{return or__3824__auto____106117;
} else
{var or__3824__auto____106118 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____106118)
{return or__3824__auto____106118;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____106123 = tcoll;
if(and__3822__auto____106123)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____106123;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5628__auto____106124 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106125 = (cljs.core._assoc_BANG_[goog.typeOf(x__5628__auto____106124)]);
if(or__3824__auto____106125)
{return or__3824__auto____106125;
} else
{var or__3824__auto____106126 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____106126)
{return or__3824__auto____106126;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____106131 = tcoll;
if(and__3822__auto____106131)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____106131;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5628__auto____106132 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106133 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5628__auto____106132)]);
if(or__3824__auto____106133)
{return or__3824__auto____106133;
} else
{var or__3824__auto____106134 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____106134)
{return or__3824__auto____106134;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____106139 = tcoll;
if(and__3822__auto____106139)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____106139;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5628__auto____106140 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106141 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5628__auto____106140)]);
if(or__3824__auto____106141)
{return or__3824__auto____106141;
} else
{var or__3824__auto____106142 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____106142)
{return or__3824__auto____106142;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____106147 = tcoll;
if(and__3822__auto____106147)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____106147;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5628__auto____106148 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106149 = (cljs.core._pop_BANG_[goog.typeOf(x__5628__auto____106148)]);
if(or__3824__auto____106149)
{return or__3824__auto____106149;
} else
{var or__3824__auto____106150 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____106150)
{return or__3824__auto____106150;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____106155 = tcoll;
if(and__3822__auto____106155)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____106155;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5628__auto____106156 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____106157 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5628__auto____106156)]);
if(or__3824__auto____106157)
{return or__3824__auto____106157;
} else
{var or__3824__auto____106158 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____106158)
{return or__3824__auto____106158;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____106163 = x;
if(and__3822__auto____106163)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____106163;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5628__auto____106164 = (((x == null))?null:x);
return (function (){var or__3824__auto____106165 = (cljs.core._compare[goog.typeOf(x__5628__auto____106164)]);
if(or__3824__auto____106165)
{return or__3824__auto____106165;
} else
{var or__3824__auto____106166 = (cljs.core._compare["_"]);
if(or__3824__auto____106166)
{return or__3824__auto____106166;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____106171 = coll;
if(and__3822__auto____106171)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____106171;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5628__auto____106172 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106173 = (cljs.core._drop_first[goog.typeOf(x__5628__auto____106172)]);
if(or__3824__auto____106173)
{return or__3824__auto____106173;
} else
{var or__3824__auto____106174 = (cljs.core._drop_first["_"]);
if(or__3824__auto____106174)
{return or__3824__auto____106174;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____106179 = coll;
if(and__3822__auto____106179)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____106179;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5628__auto____106180 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106181 = (cljs.core._chunked_first[goog.typeOf(x__5628__auto____106180)]);
if(or__3824__auto____106181)
{return or__3824__auto____106181;
} else
{var or__3824__auto____106182 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____106182)
{return or__3824__auto____106182;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____106187 = coll;
if(and__3822__auto____106187)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____106187;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5628__auto____106188 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106189 = (cljs.core._chunked_rest[goog.typeOf(x__5628__auto____106188)]);
if(or__3824__auto____106189)
{return or__3824__auto____106189;
} else
{var or__3824__auto____106190 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____106190)
{return or__3824__auto____106190;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____106195 = coll;
if(and__3822__auto____106195)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____106195;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5628__auto____106196 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____106197 = (cljs.core._chunked_next[goog.typeOf(x__5628__auto____106196)]);
if(or__3824__auto____106197)
{return or__3824__auto____106197;
} else
{var or__3824__auto____106198 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____106198)
{return or__3824__auto____106198;
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
{if((function (){var G__106202__106203 = coll;
if(G__106202__106203)
{if((function (){var or__3824__auto____106204 = (G__106202__106203.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____106204)
{return or__3824__auto____106204;
} else
{return G__106202__106203.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__106202__106203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__106202__106203);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__106202__106203);
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
{if((function (){var G__106209__106210 = coll;
if(G__106209__106210)
{if((function (){var or__3824__auto____106211 = (G__106209__106210.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____106211)
{return or__3824__auto____106211;
} else
{return G__106209__106210.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__106209__106210.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106209__106210);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106209__106210);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__106212 = cljs.core.seq.call(null,coll);
if((s__106212 == null))
{return null;
} else
{return cljs.core._first.call(null,s__106212);
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
{if((function (){var G__106217__106218 = coll;
if(G__106217__106218)
{if((function (){var or__3824__auto____106219 = (G__106217__106218.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____106219)
{return or__3824__auto____106219;
} else
{return G__106217__106218.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__106217__106218.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106217__106218);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106217__106218);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__106220 = cljs.core.seq.call(null,coll);
if(!((s__106220 == null)))
{return cljs.core._rest.call(null,s__106220);
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
{if((function (){var G__106224__106225 = coll;
if(G__106224__106225)
{if((function (){var or__3824__auto____106226 = (G__106224__106225.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____106226)
{return or__3824__auto____106226;
} else
{return G__106224__106225.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__106224__106225.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__106224__106225);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__106224__106225);
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
var or__3824__auto____106228 = (x === y);
if(or__3824__auto____106228)
{return or__3824__auto____106228;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__106229__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__106230 = y;
var G__106231 = cljs.core.first.call(null,more);
var G__106232 = cljs.core.next.call(null,more);
x = G__106230;
y = G__106231;
more = G__106232;
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
var G__106229 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106229__delegate.call(this, x, y, more);
};
G__106229.cljs$lang$maxFixedArity = 2;
G__106229.cljs$lang$applyTo = (function (arglist__106233){
var x = cljs.core.first(arglist__106233);
var y = cljs.core.first(cljs.core.next(arglist__106233));
var more = cljs.core.rest(cljs.core.next(arglist__106233));
return G__106229__delegate(x, y, more);
});
G__106229.cljs$lang$arity$variadic = G__106229__delegate;
return G__106229;
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
var G__106234 = null;
var G__106234__2 = (function (o,k){
return null;
});
var G__106234__3 = (function (o,k,not_found){
return not_found;
});
G__106234 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__106234__2.call(this,o,k);
case 3:
return G__106234__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106234;
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
var G__106235 = null;
var G__106235__2 = (function (_,f){
return f.call(null);
});
var G__106235__3 = (function (_,f,start){
return start;
});
G__106235 = function(_,f,start){
switch(arguments.length){
case 2:
return G__106235__2.call(this,_,f);
case 3:
return G__106235__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106235;
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
var G__106236 = null;
var G__106236__2 = (function (_,n){
return null;
});
var G__106236__3 = (function (_,n,not_found){
return not_found;
});
G__106236 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__106236__2.call(this,_,n);
case 3:
return G__106236__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106236;
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
var and__3822__auto____106237 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____106237)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____106237;
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
var this__106238 = this;
return this__106238.val;
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
var cnt__106251 = cljs.core._count.call(null,cicoll);
if((cnt__106251 === 0))
{return f.call(null);
} else
{var val__106252 = cljs.core._nth.call(null,cicoll,0);
var n__106253 = 1;
while(true){
if((n__106253 < cnt__106251))
{var nval__106254 = f.call(null,val__106252,cljs.core._nth.call(null,cicoll,n__106253));
if(cljs.core.reduced_QMARK_.call(null,nval__106254))
{return cljs.core.deref.call(null,nval__106254);
} else
{{
var G__106263 = nval__106254;
var G__106264 = (n__106253 + 1);
val__106252 = G__106263;
n__106253 = G__106264;
continue;
}
}
} else
{return val__106252;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__106255 = cljs.core._count.call(null,cicoll);
var val__106256 = val;
var n__106257 = 0;
while(true){
if((n__106257 < cnt__106255))
{var nval__106258 = f.call(null,val__106256,cljs.core._nth.call(null,cicoll,n__106257));
if(cljs.core.reduced_QMARK_.call(null,nval__106258))
{return cljs.core.deref.call(null,nval__106258);
} else
{{
var G__106265 = nval__106258;
var G__106266 = (n__106257 + 1);
val__106256 = G__106265;
n__106257 = G__106266;
continue;
}
}
} else
{return val__106256;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__106259 = cljs.core._count.call(null,cicoll);
var val__106260 = val;
var n__106261 = idx;
while(true){
if((n__106261 < cnt__106259))
{var nval__106262 = f.call(null,val__106260,cljs.core._nth.call(null,cicoll,n__106261));
if(cljs.core.reduced_QMARK_.call(null,nval__106262))
{return cljs.core.deref.call(null,nval__106262);
} else
{{
var G__106267 = nval__106262;
var G__106268 = (n__106261 + 1);
val__106260 = G__106267;
n__106261 = G__106268;
continue;
}
}
} else
{return val__106260;
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
var cnt__106281 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__106282 = (arr[0]);
var n__106283 = 1;
while(true){
if((n__106283 < cnt__106281))
{var nval__106284 = f.call(null,val__106282,(arr[n__106283]));
if(cljs.core.reduced_QMARK_.call(null,nval__106284))
{return cljs.core.deref.call(null,nval__106284);
} else
{{
var G__106293 = nval__106284;
var G__106294 = (n__106283 + 1);
val__106282 = G__106293;
n__106283 = G__106294;
continue;
}
}
} else
{return val__106282;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__106285 = arr.length;
var val__106286 = val;
var n__106287 = 0;
while(true){
if((n__106287 < cnt__106285))
{var nval__106288 = f.call(null,val__106286,(arr[n__106287]));
if(cljs.core.reduced_QMARK_.call(null,nval__106288))
{return cljs.core.deref.call(null,nval__106288);
} else
{{
var G__106295 = nval__106288;
var G__106296 = (n__106287 + 1);
val__106286 = G__106295;
n__106287 = G__106296;
continue;
}
}
} else
{return val__106286;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__106289 = arr.length;
var val__106290 = val;
var n__106291 = idx;
while(true){
if((n__106291 < cnt__106289))
{var nval__106292 = f.call(null,val__106290,(arr[n__106291]));
if(cljs.core.reduced_QMARK_.call(null,nval__106292))
{return cljs.core.deref.call(null,nval__106292);
} else
{{
var G__106297 = nval__106292;
var G__106298 = (n__106291 + 1);
val__106290 = G__106297;
n__106291 = G__106298;
continue;
}
}
} else
{return val__106290;
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
var G__106302__106303 = x;
if(G__106302__106303)
{if((function (){var or__3824__auto____106304 = (G__106302__106303.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____106304)
{return or__3824__auto____106304;
} else
{return G__106302__106303.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__106302__106303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__106302__106303);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__106302__106303);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__106308__106309 = x;
if(G__106308__106309)
{if((function (){var or__3824__auto____106310 = (G__106308__106309.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____106310)
{return or__3824__auto____106310;
} else
{return G__106308__106309.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__106308__106309.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__106308__106309);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__106308__106309);
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
var this__106311 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__106312 = this;
if(((this__106312.i + 1) < this__106312.a.length))
{return (new cljs.core.IndexedSeq(this__106312.a,(this__106312.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__106313 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__106314 = this;
var c__106315 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__106315 > 0))
{return (new cljs.core.RSeq(coll,(c__106315 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__106316 = this;
var this__106317 = this;
return cljs.core.pr_str.call(null,this__106317);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__106318 = this;
if(cljs.core.counted_QMARK_.call(null,this__106318.a))
{return cljs.core.ci_reduce.call(null,this__106318.a,f,(this__106318.a[this__106318.i]),(this__106318.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__106318.a[this__106318.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__106319 = this;
if(cljs.core.counted_QMARK_.call(null,this__106319.a))
{return cljs.core.ci_reduce.call(null,this__106319.a,f,start,this__106319.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__106320 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__106321 = this;
return (this__106321.a.length - this__106321.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__106322 = this;
return (this__106322.a[this__106322.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__106323 = this;
if(((this__106323.i + 1) < this__106323.a.length))
{return (new cljs.core.IndexedSeq(this__106323.a,(this__106323.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106324 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__106325 = this;
var i__106326 = (n + this__106325.i);
if((i__106326 < this__106325.a.length))
{return (this__106325.a[i__106326]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__106327 = this;
var i__106328 = (n + this__106327.i);
if((i__106328 < this__106327.a.length))
{return (this__106327.a[i__106328]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106329 = this;
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
var G__106330 = null;
var G__106330__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__106330__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__106330 = function(array,f,start){
switch(arguments.length){
case 2:
return G__106330__2.call(this,array,f);
case 3:
return G__106330__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106330;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__106331 = null;
var G__106331__2 = (function (array,k){
return (array[k]);
});
var G__106331__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__106331 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__106331__2.call(this,array,k);
case 3:
return G__106331__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106331;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__106332 = null;
var G__106332__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__106332__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__106332 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__106332__2.call(this,array,n);
case 3:
return G__106332__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106332;
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
var this__106333 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__106334 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__106335 = this;
var this__106336 = this;
return cljs.core.pr_str.call(null,this__106336);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__106337 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__106338 = this;
return (this__106338.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__106339 = this;
return cljs.core._nth.call(null,this__106339.ci,this__106339.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__106340 = this;
if((this__106340.i > 0))
{return (new cljs.core.RSeq(this__106340.ci,(this__106340.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106341 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__106342 = this;
return (new cljs.core.RSeq(this__106342.ci,this__106342.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__106343 = this;
return this__106343.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106344 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__106344.meta);
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
var sn__106346 = cljs.core.next.call(null,s);
if(!((sn__106346 == null)))
{{
var G__106347 = sn__106346;
s = G__106347;
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
var G__106348__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__106349 = conj.call(null,coll,x);
var G__106350 = cljs.core.first.call(null,xs);
var G__106351 = cljs.core.next.call(null,xs);
coll = G__106349;
x = G__106350;
xs = G__106351;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__106348 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106348__delegate.call(this, coll, x, xs);
};
G__106348.cljs$lang$maxFixedArity = 2;
G__106348.cljs$lang$applyTo = (function (arglist__106352){
var coll = cljs.core.first(arglist__106352);
var x = cljs.core.first(cljs.core.next(arglist__106352));
var xs = cljs.core.rest(cljs.core.next(arglist__106352));
return G__106348__delegate(coll, x, xs);
});
G__106348.cljs$lang$arity$variadic = G__106348__delegate;
return G__106348;
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
var s__106355 = cljs.core.seq.call(null,coll);
var acc__106356 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__106355))
{return (acc__106356 + cljs.core._count.call(null,s__106355));
} else
{{
var G__106357 = cljs.core.next.call(null,s__106355);
var G__106358 = (acc__106356 + 1);
s__106355 = G__106357;
acc__106356 = G__106358;
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
var G__106359 = cljs.core.next.call(null,coll);
var G__106360 = (n - 1);
coll = G__106359;
n = G__106360;
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
var G__106361 = cljs.core.next.call(null,coll);
var G__106362 = (n - 1);
var G__106363 = not_found;
coll = G__106361;
n = G__106362;
not_found = G__106363;
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
{if((function (){var G__106370__106371 = coll;
if(G__106370__106371)
{if((function (){var or__3824__auto____106372 = (G__106370__106371.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____106372)
{return or__3824__auto____106372;
} else
{return G__106370__106371.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__106370__106371.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__106370__106371);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__106370__106371);
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
{if((function (){var G__106373__106374 = coll;
if(G__106373__106374)
{if((function (){var or__3824__auto____106375 = (G__106373__106374.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____106375)
{return or__3824__auto____106375;
} else
{return G__106373__106374.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__106373__106374.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__106373__106374);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__106373__106374);
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
var G__106378__delegate = function (coll,k,v,kvs){
while(true){
var ret__106377 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__106379 = ret__106377;
var G__106380 = cljs.core.first.call(null,kvs);
var G__106381 = cljs.core.second.call(null,kvs);
var G__106382 = cljs.core.nnext.call(null,kvs);
coll = G__106379;
k = G__106380;
v = G__106381;
kvs = G__106382;
continue;
}
} else
{return ret__106377;
}
break;
}
};
var G__106378 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106378__delegate.call(this, coll, k, v, kvs);
};
G__106378.cljs$lang$maxFixedArity = 3;
G__106378.cljs$lang$applyTo = (function (arglist__106383){
var coll = cljs.core.first(arglist__106383);
var k = cljs.core.first(cljs.core.next(arglist__106383));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106383)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106383)));
return G__106378__delegate(coll, k, v, kvs);
});
G__106378.cljs$lang$arity$variadic = G__106378__delegate;
return G__106378;
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
var G__106386__delegate = function (coll,k,ks){
while(true){
var ret__106385 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__106387 = ret__106385;
var G__106388 = cljs.core.first.call(null,ks);
var G__106389 = cljs.core.next.call(null,ks);
coll = G__106387;
k = G__106388;
ks = G__106389;
continue;
}
} else
{return ret__106385;
}
break;
}
};
var G__106386 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106386__delegate.call(this, coll, k, ks);
};
G__106386.cljs$lang$maxFixedArity = 2;
G__106386.cljs$lang$applyTo = (function (arglist__106390){
var coll = cljs.core.first(arglist__106390);
var k = cljs.core.first(cljs.core.next(arglist__106390));
var ks = cljs.core.rest(cljs.core.next(arglist__106390));
return G__106386__delegate(coll, k, ks);
});
G__106386.cljs$lang$arity$variadic = G__106386__delegate;
return G__106386;
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
if((function (){var G__106394__106395 = o;
if(G__106394__106395)
{if((function (){var or__3824__auto____106396 = (G__106394__106395.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____106396)
{return or__3824__auto____106396;
} else
{return G__106394__106395.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__106394__106395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__106394__106395);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__106394__106395);
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
var G__106399__delegate = function (coll,k,ks){
while(true){
var ret__106398 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__106400 = ret__106398;
var G__106401 = cljs.core.first.call(null,ks);
var G__106402 = cljs.core.next.call(null,ks);
coll = G__106400;
k = G__106401;
ks = G__106402;
continue;
}
} else
{return ret__106398;
}
break;
}
};
var G__106399 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106399__delegate.call(this, coll, k, ks);
};
G__106399.cljs$lang$maxFixedArity = 2;
G__106399.cljs$lang$applyTo = (function (arglist__106403){
var coll = cljs.core.first(arglist__106403);
var k = cljs.core.first(cljs.core.next(arglist__106403));
var ks = cljs.core.rest(cljs.core.next(arglist__106403));
return G__106399__delegate(coll, k, ks);
});
G__106399.cljs$lang$arity$variadic = G__106399__delegate;
return G__106399;
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
var h__106405 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__106405);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__106405;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__106407 = (cljs.core.string_hash_cache[k]);
if(!((h__106407 == null)))
{return h__106407;
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
if((function (){var and__3822__auto____106409 = goog.isString(o);
if(and__3822__auto____106409)
{return check_cache;
} else
{return and__3822__auto____106409;
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
{var G__106413__106414 = x;
if(G__106413__106414)
{if((function (){var or__3824__auto____106415 = (G__106413__106414.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____106415)
{return or__3824__auto____106415;
} else
{return G__106413__106414.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__106413__106414.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__106413__106414);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__106413__106414);
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
{var G__106419__106420 = x;
if(G__106419__106420)
{if((function (){var or__3824__auto____106421 = (G__106419__106420.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____106421)
{return or__3824__auto____106421;
} else
{return G__106419__106420.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__106419__106420.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__106419__106420);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__106419__106420);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__106425__106426 = x;
if(G__106425__106426)
{if((function (){var or__3824__auto____106427 = (G__106425__106426.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____106427)
{return or__3824__auto____106427;
} else
{return G__106425__106426.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__106425__106426.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__106425__106426);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__106425__106426);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__106431__106432 = x;
if(G__106431__106432)
{if((function (){var or__3824__auto____106433 = (G__106431__106432.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____106433)
{return or__3824__auto____106433;
} else
{return G__106431__106432.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__106431__106432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__106431__106432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__106431__106432);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__106437__106438 = x;
if(G__106437__106438)
{if((function (){var or__3824__auto____106439 = (G__106437__106438.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____106439)
{return or__3824__auto____106439;
} else
{return G__106437__106438.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__106437__106438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__106437__106438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__106437__106438);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__106443__106444 = x;
if(G__106443__106444)
{if((function (){var or__3824__auto____106445 = (G__106443__106444.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____106445)
{return or__3824__auto____106445;
} else
{return G__106443__106444.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__106443__106444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__106443__106444);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__106443__106444);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__106449__106450 = x;
if(G__106449__106450)
{if((function (){var or__3824__auto____106451 = (G__106449__106450.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____106451)
{return or__3824__auto____106451;
} else
{return G__106449__106450.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__106449__106450.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__106449__106450);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__106449__106450);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__106455__106456 = x;
if(G__106455__106456)
{if((function (){var or__3824__auto____106457 = (G__106455__106456.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____106457)
{return or__3824__auto____106457;
} else
{return G__106455__106456.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__106455__106456.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__106455__106456);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__106455__106456);
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
var G__106458__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__106458 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__106458__delegate.call(this, keyvals);
};
G__106458.cljs$lang$maxFixedArity = 0;
G__106458.cljs$lang$applyTo = (function (arglist__106459){
var keyvals = cljs.core.seq(arglist__106459);;
return G__106458__delegate(keyvals);
});
G__106458.cljs$lang$arity$variadic = G__106458__delegate;
return G__106458;
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
var keys__106461 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__106461.push(key);
}));
return keys__106461;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__106465 = i;
var j__106466 = j;
var len__106467 = len;
while(true){
if((len__106467 === 0))
{return to;
} else
{(to[j__106466] = (from[i__106465]));
{
var G__106468 = (i__106465 + 1);
var G__106469 = (j__106466 + 1);
var G__106470 = (len__106467 - 1);
i__106465 = G__106468;
j__106466 = G__106469;
len__106467 = G__106470;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__106474 = (i + (len - 1));
var j__106475 = (j + (len - 1));
var len__106476 = len;
while(true){
if((len__106476 === 0))
{return to;
} else
{(to[j__106475] = (from[i__106474]));
{
var G__106477 = (i__106474 - 1);
var G__106478 = (j__106475 - 1);
var G__106479 = (len__106476 - 1);
i__106474 = G__106477;
j__106475 = G__106478;
len__106476 = G__106479;
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
{var G__106483__106484 = s;
if(G__106483__106484)
{if((function (){var or__3824__auto____106485 = (G__106483__106484.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____106485)
{return or__3824__auto____106485;
} else
{return G__106483__106484.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__106483__106484.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106483__106484);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106483__106484);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__106489__106490 = s;
if(G__106489__106490)
{if((function (){var or__3824__auto____106491 = (G__106489__106490.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____106491)
{return or__3824__auto____106491;
} else
{return G__106489__106490.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__106489__106490.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__106489__106490);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__106489__106490);
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
var and__3822__auto____106494 = goog.isString(x);
if(and__3822__auto____106494)
{return !((function (){var or__3824__auto____106495 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____106495)
{return or__3824__auto____106495;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____106494;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____106497 = goog.isString(x);
if(and__3822__auto____106497)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____106497;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____106499 = goog.isString(x);
if(and__3822__auto____106499)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____106499;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____106504 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____106504)
{return or__3824__auto____106504;
} else
{var G__106505__106506 = f;
if(G__106505__106506)
{if((function (){var or__3824__auto____106507 = (G__106505__106506.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____106507)
{return or__3824__auto____106507;
} else
{return G__106505__106506.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__106505__106506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__106505__106506);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__106505__106506);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____106511 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____106511)
{var and__3822__auto____106512 = !(isNaN(n));
if(and__3822__auto____106512)
{var and__3822__auto____106513 = !((n === Infinity));
if(and__3822__auto____106513)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____106513;
}
} else
{return and__3822__auto____106512;
}
} else
{return and__3822__auto____106511;
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
if((function (){var and__3822__auto____106516 = !((coll == null));
if(and__3822__auto____106516)
{var and__3822__auto____106517 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____106517)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____106517;
}
} else
{return and__3822__auto____106516;
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
var G__106526__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__106522 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__106523 = more;
while(true){
var x__106524 = cljs.core.first.call(null,xs__106523);
var etc__106525 = cljs.core.next.call(null,xs__106523);
if(cljs.core.truth_(xs__106523))
{if(cljs.core.contains_QMARK_.call(null,s__106522,x__106524))
{return false;
} else
{{
var G__106527 = cljs.core.conj.call(null,s__106522,x__106524);
var G__106528 = etc__106525;
s__106522 = G__106527;
xs__106523 = G__106528;
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
var G__106526 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106526__delegate.call(this, x, y, more);
};
G__106526.cljs$lang$maxFixedArity = 2;
G__106526.cljs$lang$applyTo = (function (arglist__106529){
var x = cljs.core.first(arglist__106529);
var y = cljs.core.first(cljs.core.next(arglist__106529));
var more = cljs.core.rest(cljs.core.next(arglist__106529));
return G__106526__delegate(x, y, more);
});
G__106526.cljs$lang$arity$variadic = G__106526__delegate;
return G__106526;
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
{if((function (){var G__106533__106534 = x;
if(G__106533__106534)
{if((function (){var or__3824__auto____106535 = (G__106533__106534.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____106535)
{return or__3824__auto____106535;
} else
{return G__106533__106534.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__106533__106534.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__106533__106534);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__106533__106534);
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
var xl__106540 = cljs.core.count.call(null,xs);
var yl__106541 = cljs.core.count.call(null,ys);
if((xl__106540 < yl__106541))
{return -1;
} else
{if((xl__106540 > yl__106541))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__106540,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__106542 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____106543 = (d__106542 === 0);
if(and__3822__auto____106543)
{return ((n + 1) < len);
} else
{return and__3822__auto____106543;
}
})())
{{
var G__106544 = xs;
var G__106545 = ys;
var G__106546 = len;
var G__106547 = (n + 1);
xs = G__106544;
ys = G__106545;
len = G__106546;
n = G__106547;
continue;
}
} else
{return d__106542;
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
var r__106549 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__106549))
{return r__106549;
} else
{if(cljs.core.truth_(r__106549))
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
{var a__106551 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__106551,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__106551);
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
var temp__3971__auto____106557 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____106557)
{var s__106558 = temp__3971__auto____106557;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__106558),cljs.core.next.call(null,s__106558));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__106559 = val;
var coll__106560 = cljs.core.seq.call(null,coll);
while(true){
if(coll__106560)
{var nval__106561 = f.call(null,val__106559,cljs.core.first.call(null,coll__106560));
if(cljs.core.reduced_QMARK_.call(null,nval__106561))
{return cljs.core.deref.call(null,nval__106561);
} else
{{
var G__106562 = nval__106561;
var G__106563 = cljs.core.next.call(null,coll__106560);
val__106559 = G__106562;
coll__106560 = G__106563;
continue;
}
}
} else
{return val__106559;
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
var a__106565 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__106565);
return cljs.core.vec.call(null,a__106565);
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
if((function (){var G__106572__106573 = coll;
if(G__106572__106573)
{if((function (){var or__3824__auto____106574 = (G__106572__106573.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____106574)
{return or__3824__auto____106574;
} else
{return G__106572__106573.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__106572__106573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__106572__106573);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__106572__106573);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__106575__106576 = coll;
if(G__106575__106576)
{if((function (){var or__3824__auto____106577 = (G__106575__106576.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____106577)
{return or__3824__auto____106577;
} else
{return G__106575__106576.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__106575__106576.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__106575__106576);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__106575__106576);
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
var G__106578__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__106578 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106578__delegate.call(this, x, y, more);
};
G__106578.cljs$lang$maxFixedArity = 2;
G__106578.cljs$lang$applyTo = (function (arglist__106579){
var x = cljs.core.first(arglist__106579);
var y = cljs.core.first(cljs.core.next(arglist__106579));
var more = cljs.core.rest(cljs.core.next(arglist__106579));
return G__106578__delegate(x, y, more);
});
G__106578.cljs$lang$arity$variadic = G__106578__delegate;
return G__106578;
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
var G__106580__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__106580 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106580__delegate.call(this, x, y, more);
};
G__106580.cljs$lang$maxFixedArity = 2;
G__106580.cljs$lang$applyTo = (function (arglist__106581){
var x = cljs.core.first(arglist__106581);
var y = cljs.core.first(cljs.core.next(arglist__106581));
var more = cljs.core.rest(cljs.core.next(arglist__106581));
return G__106580__delegate(x, y, more);
});
G__106580.cljs$lang$arity$variadic = G__106580__delegate;
return G__106580;
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
var G__106582__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__106582 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106582__delegate.call(this, x, y, more);
};
G__106582.cljs$lang$maxFixedArity = 2;
G__106582.cljs$lang$applyTo = (function (arglist__106583){
var x = cljs.core.first(arglist__106583);
var y = cljs.core.first(cljs.core.next(arglist__106583));
var more = cljs.core.rest(cljs.core.next(arglist__106583));
return G__106582__delegate(x, y, more);
});
G__106582.cljs$lang$arity$variadic = G__106582__delegate;
return G__106582;
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
var G__106584__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__106584 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106584__delegate.call(this, x, y, more);
};
G__106584.cljs$lang$maxFixedArity = 2;
G__106584.cljs$lang$applyTo = (function (arglist__106585){
var x = cljs.core.first(arglist__106585);
var y = cljs.core.first(cljs.core.next(arglist__106585));
var more = cljs.core.rest(cljs.core.next(arglist__106585));
return G__106584__delegate(x, y, more);
});
G__106584.cljs$lang$arity$variadic = G__106584__delegate;
return G__106584;
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
var G__106586__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__106587 = y;
var G__106588 = cljs.core.first.call(null,more);
var G__106589 = cljs.core.next.call(null,more);
x = G__106587;
y = G__106588;
more = G__106589;
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
var G__106586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106586__delegate.call(this, x, y, more);
};
G__106586.cljs$lang$maxFixedArity = 2;
G__106586.cljs$lang$applyTo = (function (arglist__106590){
var x = cljs.core.first(arglist__106590);
var y = cljs.core.first(cljs.core.next(arglist__106590));
var more = cljs.core.rest(cljs.core.next(arglist__106590));
return G__106586__delegate(x, y, more);
});
G__106586.cljs$lang$arity$variadic = G__106586__delegate;
return G__106586;
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
var G__106591__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__106592 = y;
var G__106593 = cljs.core.first.call(null,more);
var G__106594 = cljs.core.next.call(null,more);
x = G__106592;
y = G__106593;
more = G__106594;
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
var G__106591 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106591__delegate.call(this, x, y, more);
};
G__106591.cljs$lang$maxFixedArity = 2;
G__106591.cljs$lang$applyTo = (function (arglist__106595){
var x = cljs.core.first(arglist__106595);
var y = cljs.core.first(cljs.core.next(arglist__106595));
var more = cljs.core.rest(cljs.core.next(arglist__106595));
return G__106591__delegate(x, y, more);
});
G__106591.cljs$lang$arity$variadic = G__106591__delegate;
return G__106591;
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
var G__106596__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__106597 = y;
var G__106598 = cljs.core.first.call(null,more);
var G__106599 = cljs.core.next.call(null,more);
x = G__106597;
y = G__106598;
more = G__106599;
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
var G__106596 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106596__delegate.call(this, x, y, more);
};
G__106596.cljs$lang$maxFixedArity = 2;
G__106596.cljs$lang$applyTo = (function (arglist__106600){
var x = cljs.core.first(arglist__106600);
var y = cljs.core.first(cljs.core.next(arglist__106600));
var more = cljs.core.rest(cljs.core.next(arglist__106600));
return G__106596__delegate(x, y, more);
});
G__106596.cljs$lang$arity$variadic = G__106596__delegate;
return G__106596;
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
var G__106601__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__106602 = y;
var G__106603 = cljs.core.first.call(null,more);
var G__106604 = cljs.core.next.call(null,more);
x = G__106602;
y = G__106603;
more = G__106604;
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
var G__106601 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106601__delegate.call(this, x, y, more);
};
G__106601.cljs$lang$maxFixedArity = 2;
G__106601.cljs$lang$applyTo = (function (arglist__106605){
var x = cljs.core.first(arglist__106605);
var y = cljs.core.first(cljs.core.next(arglist__106605));
var more = cljs.core.rest(cljs.core.next(arglist__106605));
return G__106601__delegate(x, y, more);
});
G__106601.cljs$lang$arity$variadic = G__106601__delegate;
return G__106601;
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
var G__106606__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__106606 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106606__delegate.call(this, x, y, more);
};
G__106606.cljs$lang$maxFixedArity = 2;
G__106606.cljs$lang$applyTo = (function (arglist__106607){
var x = cljs.core.first(arglist__106607);
var y = cljs.core.first(cljs.core.next(arglist__106607));
var more = cljs.core.rest(cljs.core.next(arglist__106607));
return G__106606__delegate(x, y, more);
});
G__106606.cljs$lang$arity$variadic = G__106606__delegate;
return G__106606;
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
var G__106608__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__106608 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106608__delegate.call(this, x, y, more);
};
G__106608.cljs$lang$maxFixedArity = 2;
G__106608.cljs$lang$applyTo = (function (arglist__106609){
var x = cljs.core.first(arglist__106609);
var y = cljs.core.first(cljs.core.next(arglist__106609));
var more = cljs.core.rest(cljs.core.next(arglist__106609));
return G__106608__delegate(x, y, more);
});
G__106608.cljs$lang$arity$variadic = G__106608__delegate;
return G__106608;
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
var rem__106611 = (n % d);
return cljs.core.fix.call(null,((n - rem__106611) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__106613 = cljs.core.quot.call(null,n,d);
return (n - (d * q__106613));
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
var v__106616 = (v - ((v >> 1) & 1431655765));
var v__106617 = ((v__106616 & 858993459) + ((v__106616 >> 2) & 858993459));
return ((((v__106617 + (v__106617 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__106618__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__106619 = y;
var G__106620 = cljs.core.first.call(null,more);
var G__106621 = cljs.core.next.call(null,more);
x = G__106619;
y = G__106620;
more = G__106621;
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
var G__106618 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106618__delegate.call(this, x, y, more);
};
G__106618.cljs$lang$maxFixedArity = 2;
G__106618.cljs$lang$applyTo = (function (arglist__106622){
var x = cljs.core.first(arglist__106622);
var y = cljs.core.first(cljs.core.next(arglist__106622));
var more = cljs.core.rest(cljs.core.next(arglist__106622));
return G__106618__delegate(x, y, more);
});
G__106618.cljs$lang$arity$variadic = G__106618__delegate;
return G__106618;
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
var n__106626 = n;
var xs__106627 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____106628 = xs__106627;
if(and__3822__auto____106628)
{return (n__106626 > 0);
} else
{return and__3822__auto____106628;
}
})()))
{{
var G__106629 = (n__106626 - 1);
var G__106630 = cljs.core.next.call(null,xs__106627);
n__106626 = G__106629;
xs__106627 = G__106630;
continue;
}
} else
{return xs__106627;
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
var G__106631__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__106632 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__106633 = cljs.core.next.call(null,more);
sb = G__106632;
more = G__106633;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__106631 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__106631__delegate.call(this, x, ys);
};
G__106631.cljs$lang$maxFixedArity = 1;
G__106631.cljs$lang$applyTo = (function (arglist__106634){
var x = cljs.core.first(arglist__106634);
var ys = cljs.core.rest(arglist__106634);
return G__106631__delegate(x, ys);
});
G__106631.cljs$lang$arity$variadic = G__106631__delegate;
return G__106631;
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
var G__106635__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__106636 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__106637 = cljs.core.next.call(null,more);
sb = G__106636;
more = G__106637;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__106635 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__106635__delegate.call(this, x, ys);
};
G__106635.cljs$lang$maxFixedArity = 1;
G__106635.cljs$lang$applyTo = (function (arglist__106638){
var x = cljs.core.first(arglist__106638);
var ys = cljs.core.rest(arglist__106638);
return G__106635__delegate(x, ys);
});
G__106635.cljs$lang$arity$variadic = G__106635__delegate;
return G__106635;
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
var args__106642 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____106641 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____106641)
{return or__3824__auto____106641;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__106642);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__106643){
var fmt = cljs.core.first(arglist__106643);
var args = cljs.core.rest(arglist__106643);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__106646 = cljs.core.seq.call(null,x);
var ys__106647 = cljs.core.seq.call(null,y);
while(true){
if((xs__106646 == null))
{return (ys__106647 == null);
} else
{if((ys__106647 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__106646),cljs.core.first.call(null,ys__106647)))
{{
var G__106648 = cljs.core.next.call(null,xs__106646);
var G__106649 = cljs.core.next.call(null,ys__106647);
xs__106646 = G__106648;
ys__106647 = G__106649;
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
return cljs.core.reduce.call(null,(function (p1__106650_SHARP_,p2__106651_SHARP_){
return cljs.core.hash_combine.call(null,p1__106650_SHARP_,cljs.core.hash.call(null,p2__106651_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__106655 = 0;
var s__106656 = cljs.core.seq.call(null,m);
while(true){
if(s__106656)
{var e__106657 = cljs.core.first.call(null,s__106656);
{
var G__106658 = ((h__106655 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__106657)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__106657)))) % 4503599627370496);
var G__106659 = cljs.core.next.call(null,s__106656);
h__106655 = G__106658;
s__106656 = G__106659;
continue;
}
} else
{return h__106655;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__106663 = 0;
var s__106664 = cljs.core.seq.call(null,s);
while(true){
if(s__106664)
{var e__106665 = cljs.core.first.call(null,s__106664);
{
var G__106666 = ((h__106663 + cljs.core.hash.call(null,e__106665)) % 4503599627370496);
var G__106667 = cljs.core.next.call(null,s__106664);
h__106663 = G__106666;
s__106664 = G__106667;
continue;
}
} else
{return h__106663;
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
var G__106675__106676 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__106675__106676)
{var vec__106677__106678 = cljs.core.first.call(null,G__106675__106676);
var key_name__106679 = cljs.core.nth.call(null,vec__106677__106678,0,null);
var f__106680 = cljs.core.nth.call(null,vec__106677__106678,1,null);
var str_name__106681 = cljs.core.name.call(null,key_name__106679);
(obj[str_name__106681] = f__106680);
{
var G__106682 = cljs.core.next.call(null,G__106675__106676);
G__106675__106676 = G__106682;
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
var this__106683 = this;
var h__5444__auto____106684 = this__106683.__hash;
if(!((h__5444__auto____106684 == null)))
{return h__5444__auto____106684;
} else
{var h__5444__auto____106685 = cljs.core.hash_coll.call(null,coll);
this__106683.__hash = h__5444__auto____106685;
return h__5444__auto____106685;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__106686 = this;
if((this__106686.count === 1))
{return null;
} else
{return this__106686.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__106687 = this;
return (new cljs.core.List(this__106687.meta,o,coll,(this__106687.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__106688 = this;
var this__106689 = this;
return cljs.core.pr_str.call(null,this__106689);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__106690 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__106691 = this;
return this__106691.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__106692 = this;
return this__106692.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__106693 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__106694 = this;
return this__106694.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__106695 = this;
if((this__106695.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__106695.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106696 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__106697 = this;
return (new cljs.core.List(meta,this__106697.first,this__106697.rest,this__106697.count,this__106697.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__106698 = this;
return this__106698.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106699 = this;
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
var this__106700 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__106701 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__106702 = this;
return (new cljs.core.List(this__106702.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__106703 = this;
var this__106704 = this;
return cljs.core.pr_str.call(null,this__106704);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__106705 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__106706 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__106707 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__106708 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__106709 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__106710 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106711 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__106712 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__106713 = this;
return this__106713.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106714 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__106718__106719 = coll;
if(G__106718__106719)
{if((function (){var or__3824__auto____106720 = (G__106718__106719.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____106720)
{return or__3824__auto____106720;
} else
{return G__106718__106719.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__106718__106719.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__106718__106719);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__106718__106719);
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
var G__106721__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__106721 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__106721__delegate.call(this, x, y, z, items);
};
G__106721.cljs$lang$maxFixedArity = 3;
G__106721.cljs$lang$applyTo = (function (arglist__106722){
var x = cljs.core.first(arglist__106722);
var y = cljs.core.first(cljs.core.next(arglist__106722));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106722)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__106722)));
return G__106721__delegate(x, y, z, items);
});
G__106721.cljs$lang$arity$variadic = G__106721__delegate;
return G__106721;
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
var this__106723 = this;
var h__5444__auto____106724 = this__106723.__hash;
if(!((h__5444__auto____106724 == null)))
{return h__5444__auto____106724;
} else
{var h__5444__auto____106725 = cljs.core.hash_coll.call(null,coll);
this__106723.__hash = h__5444__auto____106725;
return h__5444__auto____106725;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__106726 = this;
if((this__106726.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__106726.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__106727 = this;
return (new cljs.core.Cons(null,o,coll,this__106727.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__106728 = this;
var this__106729 = this;
return cljs.core.pr_str.call(null,this__106729);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__106730 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__106731 = this;
return this__106731.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__106732 = this;
if((this__106732.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__106732.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106733 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__106734 = this;
return (new cljs.core.Cons(meta,this__106734.first,this__106734.rest,this__106734.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__106735 = this;
return this__106735.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106736 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__106736.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____106741 = (coll == null);
if(or__3824__auto____106741)
{return or__3824__auto____106741;
} else
{var G__106742__106743 = coll;
if(G__106742__106743)
{if((function (){var or__3824__auto____106744 = (G__106742__106743.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____106744)
{return or__3824__auto____106744;
} else
{return G__106742__106743.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__106742__106743.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106742__106743);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__106742__106743);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__106748__106749 = x;
if(G__106748__106749)
{if((function (){var or__3824__auto____106750 = (G__106748__106749.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____106750)
{return or__3824__auto____106750;
} else
{return G__106748__106749.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__106748__106749.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__106748__106749);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__106748__106749);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__106751 = null;
var G__106751__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__106751__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__106751 = function(string,f,start){
switch(arguments.length){
case 2:
return G__106751__2.call(this,string,f);
case 3:
return G__106751__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106751;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__106752 = null;
var G__106752__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__106752__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__106752 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__106752__2.call(this,string,k);
case 3:
return G__106752__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106752;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__106753 = null;
var G__106753__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__106753__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__106753 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__106753__2.call(this,string,n);
case 3:
return G__106753__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106753;
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
var G__106765 = null;
var G__106765__2 = (function (this_sym106756,coll){
var this__106758 = this;
var this_sym106756__106759 = this;
var ___106760 = this_sym106756__106759;
if((coll == null))
{return null;
} else
{var strobj__106761 = coll.strobj;
if((strobj__106761 == null))
{return cljs.core._lookup.call(null,coll,this__106758.k,null);
} else
{return (strobj__106761[this__106758.k]);
}
}
});
var G__106765__3 = (function (this_sym106757,coll,not_found){
var this__106758 = this;
var this_sym106757__106762 = this;
var ___106763 = this_sym106757__106762;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__106758.k,not_found);
}
});
G__106765 = function(this_sym106757,coll,not_found){
switch(arguments.length){
case 2:
return G__106765__2.call(this,this_sym106757,coll);
case 3:
return G__106765__3.call(this,this_sym106757,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106765;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym106754,args106755){
var this__106764 = this;
return this_sym106754.call.apply(this_sym106754,[this_sym106754].concat(args106755.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__106774 = null;
var G__106774__2 = (function (this_sym106768,coll){
var this_sym106768__106770 = this;
var this__106771 = this_sym106768__106770;
return cljs.core._lookup.call(null,coll,this__106771.toString(),null);
});
var G__106774__3 = (function (this_sym106769,coll,not_found){
var this_sym106769__106772 = this;
var this__106773 = this_sym106769__106772;
return cljs.core._lookup.call(null,coll,this__106773.toString(),not_found);
});
G__106774 = function(this_sym106769,coll,not_found){
switch(arguments.length){
case 2:
return G__106774__2.call(this,this_sym106769,coll);
case 3:
return G__106774__3.call(this,this_sym106769,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__106774;
})()
;
String.prototype.apply = (function (this_sym106766,args106767){
return this_sym106766.call.apply(this_sym106766,[this_sym106766].concat(args106767.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__106776 = lazy_seq.x;
if(lazy_seq.realized)
{return x__106776;
} else
{lazy_seq.x = x__106776.call(null);
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
var this__106777 = this;
var h__5444__auto____106778 = this__106777.__hash;
if(!((h__5444__auto____106778 == null)))
{return h__5444__auto____106778;
} else
{var h__5444__auto____106779 = cljs.core.hash_coll.call(null,coll);
this__106777.__hash = h__5444__auto____106779;
return h__5444__auto____106779;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__106780 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__106781 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__106782 = this;
var this__106783 = this;
return cljs.core.pr_str.call(null,this__106783);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__106784 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__106785 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__106786 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106787 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__106788 = this;
return (new cljs.core.LazySeq(meta,this__106788.realized,this__106788.x,this__106788.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__106789 = this;
return this__106789.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106790 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__106790.meta);
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
var this__106791 = this;
return this__106791.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__106792 = this;
var ___106793 = this;
(this__106792.buf[this__106792.end] = o);
return this__106792.end = (this__106792.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__106794 = this;
var ___106795 = this;
var ret__106796 = (new cljs.core.ArrayChunk(this__106794.buf,0,this__106794.end));
this__106794.buf = null;
return ret__106796;
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
var this__106797 = this;
return cljs.core.array_reduce.call(null,this__106797.arr,f,(this__106797.arr[this__106797.off]),(this__106797.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__106798 = this;
return cljs.core.array_reduce.call(null,this__106798.arr,f,start,this__106798.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__106799 = this;
if((this__106799.off === this__106799.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__106799.arr,(this__106799.off + 1),this__106799.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__106800 = this;
return (this__106800.arr[(this__106800.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__106801 = this;
if((function (){var and__3822__auto____106802 = (i >= 0);
if(and__3822__auto____106802)
{return (i < (this__106801.end - this__106801.off));
} else
{return and__3822__auto____106802;
}
})())
{return (this__106801.arr[(this__106801.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__106803 = this;
return (this__106803.end - this__106803.off);
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
var this__106804 = this;
var h__5444__auto____106805 = this__106804.__hash;
if(!((h__5444__auto____106805 == null)))
{return h__5444__auto____106805;
} else
{var h__5444__auto____106806 = cljs.core.hash_coll.call(null,coll);
this__106804.__hash = h__5444__auto____106806;
return h__5444__auto____106806;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__106807 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__106808 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__106809 = this;
return cljs.core._nth.call(null,this__106809.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__106810 = this;
if((cljs.core._count.call(null,this__106810.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__106810.chunk),this__106810.more,this__106810.meta,null));
} else
{if((this__106810.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__106810.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__106811 = this;
if((this__106811.more == null))
{return null;
} else
{return this__106811.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__106812 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__106813 = this;
return (new cljs.core.ChunkedCons(this__106813.chunk,this__106813.more,m,this__106813.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__106814 = this;
return this__106814.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__106815 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__106815.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__106816 = this;
return this__106816.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__106817 = this;
if((this__106817.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__106817.more;
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
if((function (){var G__106821__106822 = s;
if(G__106821__106822)
{if((function (){var or__3824__auto____106823 = (G__106821__106822.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____106823)
{return or__3824__auto____106823;
} else
{return G__106821__106822.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__106821__106822.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__106821__106822);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__106821__106822);
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
var ary__106826 = [];
var s__106827 = s;
while(true){
if(cljs.core.seq.call(null,s__106827))
{ary__106826.push(cljs.core.first.call(null,s__106827));
{
var G__106828 = cljs.core.next.call(null,s__106827);
s__106827 = G__106828;
continue;
}
} else
{return ary__106826;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__106832 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__106833 = 0;
var xs__106834 = cljs.core.seq.call(null,coll);
while(true){
if(xs__106834)
{(ret__106832[i__106833] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__106834)));
{
var G__106835 = (i__106833 + 1);
var G__106836 = cljs.core.next.call(null,xs__106834);
i__106833 = G__106835;
xs__106834 = G__106836;
continue;
}
} else
{}
break;
}
return ret__106832;
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
var a__106844 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__106845 = cljs.core.seq.call(null,init_val_or_seq);
var i__106846 = 0;
var s__106847 = s__106845;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____106848 = s__106847;
if(and__3822__auto____106848)
{return (i__106846 < size);
} else
{return and__3822__auto____106848;
}
})()))
{(a__106844[i__106846] = cljs.core.first.call(null,s__106847));
{
var G__106851 = (i__106846 + 1);
var G__106852 = cljs.core.next.call(null,s__106847);
i__106846 = G__106851;
s__106847 = G__106852;
continue;
}
} else
{return a__106844;
}
break;
}
} else
{var n__5790__auto____106849 = size;
var i__106850 = 0;
while(true){
if((i__106850 < n__5790__auto____106849))
{(a__106844[i__106850] = init_val_or_seq);
{
var G__106853 = (i__106850 + 1);
i__106850 = G__106853;
continue;
}
} else
{}
break;
}
return a__106844;
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
var a__106861 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__106862 = cljs.core.seq.call(null,init_val_or_seq);
var i__106863 = 0;
var s__106864 = s__106862;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____106865 = s__106864;
if(and__3822__auto____106865)
{return (i__106863 < size);
} else
{return and__3822__auto____106865;
}
})()))
{(a__106861[i__106863] = cljs.core.first.call(null,s__106864));
{
var G__106868 = (i__106863 + 1);
var G__106869 = cljs.core.next.call(null,s__106864);
i__106863 = G__106868;
s__106864 = G__106869;
continue;
}
} else
{return a__106861;
}
break;
}
} else
{var n__5790__auto____106866 = size;
var i__106867 = 0;
while(true){
if((i__106867 < n__5790__auto____106866))
{(a__106861[i__106867] = init_val_or_seq);
{
var G__106870 = (i__106867 + 1);
i__106867 = G__106870;
continue;
}
} else
{}
break;
}
return a__106861;
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
var a__106878 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__106879 = cljs.core.seq.call(null,init_val_or_seq);
var i__106880 = 0;
var s__106881 = s__106879;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____106882 = s__106881;
if(and__3822__auto____106882)
{return (i__106880 < size);
} else
{return and__3822__auto____106882;
}
})()))
{(a__106878[i__106880] = cljs.core.first.call(null,s__106881));
{
var G__106885 = (i__106880 + 1);
var G__106886 = cljs.core.next.call(null,s__106881);
i__106880 = G__106885;
s__106881 = G__106886;
continue;
}
} else
{return a__106878;
}
break;
}
} else
{var n__5790__auto____106883 = size;
var i__106884 = 0;
while(true){
if((i__106884 < n__5790__auto____106883))
{(a__106878[i__106884] = init_val_or_seq);
{
var G__106887 = (i__106884 + 1);
i__106884 = G__106887;
continue;
}
} else
{}
break;
}
return a__106878;
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
{var s__106892 = s;
var i__106893 = n;
var sum__106894 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____106895 = (i__106893 > 0);
if(and__3822__auto____106895)
{return cljs.core.seq.call(null,s__106892);
} else
{return and__3822__auto____106895;
}
})()))
{{
var G__106896 = cljs.core.next.call(null,s__106892);
var G__106897 = (i__106893 - 1);
var G__106898 = (sum__106894 + 1);
s__106892 = G__106896;
i__106893 = G__106897;
sum__106894 = G__106898;
continue;
}
} else
{return sum__106894;
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
var s__106903 = cljs.core.seq.call(null,x);
if(s__106903)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__106903))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__106903),concat.call(null,cljs.core.chunk_rest.call(null,s__106903),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__106903),concat.call(null,cljs.core.rest.call(null,s__106903),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__106907__delegate = function (x,y,zs){
var cat__106906 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__106905 = cljs.core.seq.call(null,xys);
if(xys__106905)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__106905))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__106905),cat.call(null,cljs.core.chunk_rest.call(null,xys__106905),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__106905),cat.call(null,cljs.core.rest.call(null,xys__106905),zs));
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
return cat__106906.call(null,concat.call(null,x,y),zs);
};
var G__106907 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__106907__delegate.call(this, x, y, zs);
};
G__106907.cljs$lang$maxFixedArity = 2;
G__106907.cljs$lang$applyTo = (function (arglist__106908){
var x = cljs.core.first(arglist__106908);
var y = cljs.core.first(cljs.core.next(arglist__106908));
var zs = cljs.core.rest(cljs.core.next(arglist__106908));
return G__106907__delegate(x, y, zs);
});
G__106907.cljs$lang$arity$variadic = G__106907__delegate;
return G__106907;
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
var G__106909__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__106909 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__106909__delegate.call(this, a, b, c, d, more);
};
G__106909.cljs$lang$maxFixedArity = 4;
G__106909.cljs$lang$applyTo = (function (arglist__106910){
var a = cljs.core.first(arglist__106910);
var b = cljs.core.first(cljs.core.next(arglist__106910));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__106910)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__106910))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__106910))));
return G__106909__delegate(a, b, c, d, more);
});
G__106909.cljs$lang$arity$variadic = G__106909__delegate;
return G__106909;
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
var args__106952 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__106953 = cljs.core._first.call(null,args__106952);
var args__106954 = cljs.core._rest.call(null,args__106952);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__106953);
} else
{return f.call(null,a__106953);
}
} else
{var b__106955 = cljs.core._first.call(null,args__106954);
var args__106956 = cljs.core._rest.call(null,args__106954);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__106953,b__106955);
} else
{return f.call(null,a__106953,b__106955);
}
} else
{var c__106957 = cljs.core._first.call(null,args__106956);
var args__106958 = cljs.core._rest.call(null,args__106956);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__106953,b__106955,c__106957);
} else
{return f.call(null,a__106953,b__106955,c__106957);
}
} else
{var d__106959 = cljs.core._first.call(null,args__106958);
var args__106960 = cljs.core._rest.call(null,args__106958);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__106953,b__106955,c__106957,d__106959);
} else
{return f.call(null,a__106953,b__106955,c__106957,d__106959);
}
} else
{var e__106961 = cljs.core._first.call(null,args__106960);
var args__106962 = cljs.core._rest.call(null,args__106960);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__106953,b__106955,c__106957,d__106959,e__106961);
} else
{return f.call(null,a__106953,b__106955,c__106957,d__106959,e__106961);
}
} else
{var f__106963 = cljs.core._first.call(null,args__106962);
var args__106964 = cljs.core._rest.call(null,args__106962);
if((argc === 6))
{if(f__106963.cljs$lang$arity$6)
{return f__106963.cljs$lang$arity$6(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963);
}
} else
{var g__106965 = cljs.core._first.call(null,args__106964);
var args__106966 = cljs.core._rest.call(null,args__106964);
if((argc === 7))
{if(f__106963.cljs$lang$arity$7)
{return f__106963.cljs$lang$arity$7(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965);
}
} else
{var h__106967 = cljs.core._first.call(null,args__106966);
var args__106968 = cljs.core._rest.call(null,args__106966);
if((argc === 8))
{if(f__106963.cljs$lang$arity$8)
{return f__106963.cljs$lang$arity$8(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967);
}
} else
{var i__106969 = cljs.core._first.call(null,args__106968);
var args__106970 = cljs.core._rest.call(null,args__106968);
if((argc === 9))
{if(f__106963.cljs$lang$arity$9)
{return f__106963.cljs$lang$arity$9(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969);
}
} else
{var j__106971 = cljs.core._first.call(null,args__106970);
var args__106972 = cljs.core._rest.call(null,args__106970);
if((argc === 10))
{if(f__106963.cljs$lang$arity$10)
{return f__106963.cljs$lang$arity$10(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971);
}
} else
{var k__106973 = cljs.core._first.call(null,args__106972);
var args__106974 = cljs.core._rest.call(null,args__106972);
if((argc === 11))
{if(f__106963.cljs$lang$arity$11)
{return f__106963.cljs$lang$arity$11(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973);
}
} else
{var l__106975 = cljs.core._first.call(null,args__106974);
var args__106976 = cljs.core._rest.call(null,args__106974);
if((argc === 12))
{if(f__106963.cljs$lang$arity$12)
{return f__106963.cljs$lang$arity$12(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975);
}
} else
{var m__106977 = cljs.core._first.call(null,args__106976);
var args__106978 = cljs.core._rest.call(null,args__106976);
if((argc === 13))
{if(f__106963.cljs$lang$arity$13)
{return f__106963.cljs$lang$arity$13(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977);
}
} else
{var n__106979 = cljs.core._first.call(null,args__106978);
var args__106980 = cljs.core._rest.call(null,args__106978);
if((argc === 14))
{if(f__106963.cljs$lang$arity$14)
{return f__106963.cljs$lang$arity$14(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979);
}
} else
{var o__106981 = cljs.core._first.call(null,args__106980);
var args__106982 = cljs.core._rest.call(null,args__106980);
if((argc === 15))
{if(f__106963.cljs$lang$arity$15)
{return f__106963.cljs$lang$arity$15(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981);
}
} else
{var p__106983 = cljs.core._first.call(null,args__106982);
var args__106984 = cljs.core._rest.call(null,args__106982);
if((argc === 16))
{if(f__106963.cljs$lang$arity$16)
{return f__106963.cljs$lang$arity$16(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983);
}
} else
{var q__106985 = cljs.core._first.call(null,args__106984);
var args__106986 = cljs.core._rest.call(null,args__106984);
if((argc === 17))
{if(f__106963.cljs$lang$arity$17)
{return f__106963.cljs$lang$arity$17(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985);
}
} else
{var r__106987 = cljs.core._first.call(null,args__106986);
var args__106988 = cljs.core._rest.call(null,args__106986);
if((argc === 18))
{if(f__106963.cljs$lang$arity$18)
{return f__106963.cljs$lang$arity$18(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985,r__106987);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985,r__106987);
}
} else
{var s__106989 = cljs.core._first.call(null,args__106988);
var args__106990 = cljs.core._rest.call(null,args__106988);
if((argc === 19))
{if(f__106963.cljs$lang$arity$19)
{return f__106963.cljs$lang$arity$19(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985,r__106987,s__106989);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985,r__106987,s__106989);
}
} else
{var t__106991 = cljs.core._first.call(null,args__106990);
var args__106992 = cljs.core._rest.call(null,args__106990);
if((argc === 20))
{if(f__106963.cljs$lang$arity$20)
{return f__106963.cljs$lang$arity$20(a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985,r__106987,s__106989,t__106991);
} else
{return f__106963.call(null,a__106953,b__106955,c__106957,d__106959,e__106961,f__106963,g__106965,h__106967,i__106969,j__106971,k__106973,l__106975,m__106977,n__106979,o__106981,p__106983,q__106985,r__106987,s__106989,t__106991);
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
var fixed_arity__107007 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__107008 = cljs.core.bounded_count.call(null,args,(fixed_arity__107007 + 1));
if((bc__107008 <= fixed_arity__107007))
{return cljs.core.apply_to.call(null,f,bc__107008,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__107009 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__107010 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__107011 = cljs.core.bounded_count.call(null,arglist__107009,(fixed_arity__107010 + 1));
if((bc__107011 <= fixed_arity__107010))
{return cljs.core.apply_to.call(null,f,bc__107011,arglist__107009);
} else
{return f.cljs$lang$applyTo(arglist__107009);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__107009));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__107012 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__107013 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__107014 = cljs.core.bounded_count.call(null,arglist__107012,(fixed_arity__107013 + 1));
if((bc__107014 <= fixed_arity__107013))
{return cljs.core.apply_to.call(null,f,bc__107014,arglist__107012);
} else
{return f.cljs$lang$applyTo(arglist__107012);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__107012));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__107015 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__107016 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__107017 = cljs.core.bounded_count.call(null,arglist__107015,(fixed_arity__107016 + 1));
if((bc__107017 <= fixed_arity__107016))
{return cljs.core.apply_to.call(null,f,bc__107017,arglist__107015);
} else
{return f.cljs$lang$applyTo(arglist__107015);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__107015));
}
});
var apply__6 = (function() { 
var G__107021__delegate = function (f,a,b,c,d,args){
var arglist__107018 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__107019 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__107020 = cljs.core.bounded_count.call(null,arglist__107018,(fixed_arity__107019 + 1));
if((bc__107020 <= fixed_arity__107019))
{return cljs.core.apply_to.call(null,f,bc__107020,arglist__107018);
} else
{return f.cljs$lang$applyTo(arglist__107018);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__107018));
}
};
var G__107021 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__107021__delegate.call(this, f, a, b, c, d, args);
};
G__107021.cljs$lang$maxFixedArity = 5;
G__107021.cljs$lang$applyTo = (function (arglist__107022){
var f = cljs.core.first(arglist__107022);
var a = cljs.core.first(cljs.core.next(arglist__107022));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107022)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107022))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107022)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107022)))));
return G__107021__delegate(f, a, b, c, d, args);
});
G__107021.cljs$lang$arity$variadic = G__107021__delegate;
return G__107021;
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
vary_meta.cljs$lang$applyTo = (function (arglist__107023){
var obj = cljs.core.first(arglist__107023);
var f = cljs.core.first(cljs.core.next(arglist__107023));
var args = cljs.core.rest(cljs.core.next(arglist__107023));
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
var G__107024__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__107024 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__107024__delegate.call(this, x, y, more);
};
G__107024.cljs$lang$maxFixedArity = 2;
G__107024.cljs$lang$applyTo = (function (arglist__107025){
var x = cljs.core.first(arglist__107025);
var y = cljs.core.first(cljs.core.next(arglist__107025));
var more = cljs.core.rest(cljs.core.next(arglist__107025));
return G__107024__delegate(x, y, more);
});
G__107024.cljs$lang$arity$variadic = G__107024__delegate;
return G__107024;
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
var G__107026 = pred;
var G__107027 = cljs.core.next.call(null,coll);
pred = G__107026;
coll = G__107027;
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
{var or__3824__auto____107029 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____107029))
{return or__3824__auto____107029;
} else
{{
var G__107030 = pred;
var G__107031 = cljs.core.next.call(null,coll);
pred = G__107030;
coll = G__107031;
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
var G__107032 = null;
var G__107032__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__107032__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__107032__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__107032__3 = (function() { 
var G__107033__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__107033 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__107033__delegate.call(this, x, y, zs);
};
G__107033.cljs$lang$maxFixedArity = 2;
G__107033.cljs$lang$applyTo = (function (arglist__107034){
var x = cljs.core.first(arglist__107034);
var y = cljs.core.first(cljs.core.next(arglist__107034));
var zs = cljs.core.rest(cljs.core.next(arglist__107034));
return G__107033__delegate(x, y, zs);
});
G__107033.cljs$lang$arity$variadic = G__107033__delegate;
return G__107033;
})()
;
G__107032 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__107032__0.call(this);
case 1:
return G__107032__1.call(this,x);
case 2:
return G__107032__2.call(this,x,y);
default:
return G__107032__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__107032.cljs$lang$maxFixedArity = 2;
G__107032.cljs$lang$applyTo = G__107032__3.cljs$lang$applyTo;
return G__107032;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__107035__delegate = function (args){
return x;
};
var G__107035 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__107035__delegate.call(this, args);
};
G__107035.cljs$lang$maxFixedArity = 0;
G__107035.cljs$lang$applyTo = (function (arglist__107036){
var args = cljs.core.seq(arglist__107036);;
return G__107035__delegate(args);
});
G__107035.cljs$lang$arity$variadic = G__107035__delegate;
return G__107035;
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
var G__107043 = null;
var G__107043__0 = (function (){
return f.call(null,g.call(null));
});
var G__107043__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__107043__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__107043__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__107043__4 = (function() { 
var G__107044__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__107044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107044__delegate.call(this, x, y, z, args);
};
G__107044.cljs$lang$maxFixedArity = 3;
G__107044.cljs$lang$applyTo = (function (arglist__107045){
var x = cljs.core.first(arglist__107045);
var y = cljs.core.first(cljs.core.next(arglist__107045));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107045)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107045)));
return G__107044__delegate(x, y, z, args);
});
G__107044.cljs$lang$arity$variadic = G__107044__delegate;
return G__107044;
})()
;
G__107043 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__107043__0.call(this);
case 1:
return G__107043__1.call(this,x);
case 2:
return G__107043__2.call(this,x,y);
case 3:
return G__107043__3.call(this,x,y,z);
default:
return G__107043__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__107043.cljs$lang$maxFixedArity = 3;
G__107043.cljs$lang$applyTo = G__107043__4.cljs$lang$applyTo;
return G__107043;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__107046 = null;
var G__107046__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__107046__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__107046__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__107046__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__107046__4 = (function() { 
var G__107047__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__107047 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107047__delegate.call(this, x, y, z, args);
};
G__107047.cljs$lang$maxFixedArity = 3;
G__107047.cljs$lang$applyTo = (function (arglist__107048){
var x = cljs.core.first(arglist__107048);
var y = cljs.core.first(cljs.core.next(arglist__107048));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107048)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107048)));
return G__107047__delegate(x, y, z, args);
});
G__107047.cljs$lang$arity$variadic = G__107047__delegate;
return G__107047;
})()
;
G__107046 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__107046__0.call(this);
case 1:
return G__107046__1.call(this,x);
case 2:
return G__107046__2.call(this,x,y);
case 3:
return G__107046__3.call(this,x,y,z);
default:
return G__107046__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__107046.cljs$lang$maxFixedArity = 3;
G__107046.cljs$lang$applyTo = G__107046__4.cljs$lang$applyTo;
return G__107046;
})()
});
var comp__4 = (function() { 
var G__107049__delegate = function (f1,f2,f3,fs){
var fs__107040 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__107050__delegate = function (args){
var ret__107041 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__107040),args);
var fs__107042 = cljs.core.next.call(null,fs__107040);
while(true){
if(fs__107042)
{{
var G__107051 = cljs.core.first.call(null,fs__107042).call(null,ret__107041);
var G__107052 = cljs.core.next.call(null,fs__107042);
ret__107041 = G__107051;
fs__107042 = G__107052;
continue;
}
} else
{return ret__107041;
}
break;
}
};
var G__107050 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__107050__delegate.call(this, args);
};
G__107050.cljs$lang$maxFixedArity = 0;
G__107050.cljs$lang$applyTo = (function (arglist__107053){
var args = cljs.core.seq(arglist__107053);;
return G__107050__delegate(args);
});
G__107050.cljs$lang$arity$variadic = G__107050__delegate;
return G__107050;
})()
;
};
var G__107049 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107049__delegate.call(this, f1, f2, f3, fs);
};
G__107049.cljs$lang$maxFixedArity = 3;
G__107049.cljs$lang$applyTo = (function (arglist__107054){
var f1 = cljs.core.first(arglist__107054);
var f2 = cljs.core.first(cljs.core.next(arglist__107054));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107054)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107054)));
return G__107049__delegate(f1, f2, f3, fs);
});
G__107049.cljs$lang$arity$variadic = G__107049__delegate;
return G__107049;
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
var G__107055__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__107055 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__107055__delegate.call(this, args);
};
G__107055.cljs$lang$maxFixedArity = 0;
G__107055.cljs$lang$applyTo = (function (arglist__107056){
var args = cljs.core.seq(arglist__107056);;
return G__107055__delegate(args);
});
G__107055.cljs$lang$arity$variadic = G__107055__delegate;
return G__107055;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__107057__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__107057 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__107057__delegate.call(this, args);
};
G__107057.cljs$lang$maxFixedArity = 0;
G__107057.cljs$lang$applyTo = (function (arglist__107058){
var args = cljs.core.seq(arglist__107058);;
return G__107057__delegate(args);
});
G__107057.cljs$lang$arity$variadic = G__107057__delegate;
return G__107057;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__107059__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__107059 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__107059__delegate.call(this, args);
};
G__107059.cljs$lang$maxFixedArity = 0;
G__107059.cljs$lang$applyTo = (function (arglist__107060){
var args = cljs.core.seq(arglist__107060);;
return G__107059__delegate(args);
});
G__107059.cljs$lang$arity$variadic = G__107059__delegate;
return G__107059;
})()
;
});
var partial__5 = (function() { 
var G__107061__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__107062__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__107062 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__107062__delegate.call(this, args);
};
G__107062.cljs$lang$maxFixedArity = 0;
G__107062.cljs$lang$applyTo = (function (arglist__107063){
var args = cljs.core.seq(arglist__107063);;
return G__107062__delegate(args);
});
G__107062.cljs$lang$arity$variadic = G__107062__delegate;
return G__107062;
})()
;
};
var G__107061 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__107061__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__107061.cljs$lang$maxFixedArity = 4;
G__107061.cljs$lang$applyTo = (function (arglist__107064){
var f = cljs.core.first(arglist__107064);
var arg1 = cljs.core.first(cljs.core.next(arglist__107064));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107064)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107064))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107064))));
return G__107061__delegate(f, arg1, arg2, arg3, more);
});
G__107061.cljs$lang$arity$variadic = G__107061__delegate;
return G__107061;
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
var G__107065 = null;
var G__107065__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__107065__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__107065__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__107065__4 = (function() { 
var G__107066__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__107066 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107066__delegate.call(this, a, b, c, ds);
};
G__107066.cljs$lang$maxFixedArity = 3;
G__107066.cljs$lang$applyTo = (function (arglist__107067){
var a = cljs.core.first(arglist__107067);
var b = cljs.core.first(cljs.core.next(arglist__107067));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107067)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107067)));
return G__107066__delegate(a, b, c, ds);
});
G__107066.cljs$lang$arity$variadic = G__107066__delegate;
return G__107066;
})()
;
G__107065 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__107065__1.call(this,a);
case 2:
return G__107065__2.call(this,a,b);
case 3:
return G__107065__3.call(this,a,b,c);
default:
return G__107065__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__107065.cljs$lang$maxFixedArity = 3;
G__107065.cljs$lang$applyTo = G__107065__4.cljs$lang$applyTo;
return G__107065;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__107068 = null;
var G__107068__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__107068__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__107068__4 = (function() { 
var G__107069__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__107069 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107069__delegate.call(this, a, b, c, ds);
};
G__107069.cljs$lang$maxFixedArity = 3;
G__107069.cljs$lang$applyTo = (function (arglist__107070){
var a = cljs.core.first(arglist__107070);
var b = cljs.core.first(cljs.core.next(arglist__107070));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107070)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107070)));
return G__107069__delegate(a, b, c, ds);
});
G__107069.cljs$lang$arity$variadic = G__107069__delegate;
return G__107069;
})()
;
G__107068 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__107068__2.call(this,a,b);
case 3:
return G__107068__3.call(this,a,b,c);
default:
return G__107068__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__107068.cljs$lang$maxFixedArity = 3;
G__107068.cljs$lang$applyTo = G__107068__4.cljs$lang$applyTo;
return G__107068;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__107071 = null;
var G__107071__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__107071__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__107071__4 = (function() { 
var G__107072__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__107072 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107072__delegate.call(this, a, b, c, ds);
};
G__107072.cljs$lang$maxFixedArity = 3;
G__107072.cljs$lang$applyTo = (function (arglist__107073){
var a = cljs.core.first(arglist__107073);
var b = cljs.core.first(cljs.core.next(arglist__107073));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107073)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107073)));
return G__107072__delegate(a, b, c, ds);
});
G__107072.cljs$lang$arity$variadic = G__107072__delegate;
return G__107072;
})()
;
G__107071 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__107071__2.call(this,a,b);
case 3:
return G__107071__3.call(this,a,b,c);
default:
return G__107071__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__107071.cljs$lang$maxFixedArity = 3;
G__107071.cljs$lang$applyTo = G__107071__4.cljs$lang$applyTo;
return G__107071;
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
var mapi__107089 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____107097 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107097)
{var s__107098 = temp__3974__auto____107097;
if(cljs.core.chunked_seq_QMARK_.call(null,s__107098))
{var c__107099 = cljs.core.chunk_first.call(null,s__107098);
var size__107100 = cljs.core.count.call(null,c__107099);
var b__107101 = cljs.core.chunk_buffer.call(null,size__107100);
var n__5790__auto____107102 = size__107100;
var i__107103 = 0;
while(true){
if((i__107103 < n__5790__auto____107102))
{cljs.core.chunk_append.call(null,b__107101,f.call(null,(idx + i__107103),cljs.core._nth.call(null,c__107099,i__107103)));
{
var G__107104 = (i__107103 + 1);
i__107103 = G__107104;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__107101),mapi.call(null,(idx + size__107100),cljs.core.chunk_rest.call(null,s__107098)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__107098)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__107098)));
}
} else
{return null;
}
}),null));
});
return mapi__107089.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____107114 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107114)
{var s__107115 = temp__3974__auto____107114;
if(cljs.core.chunked_seq_QMARK_.call(null,s__107115))
{var c__107116 = cljs.core.chunk_first.call(null,s__107115);
var size__107117 = cljs.core.count.call(null,c__107116);
var b__107118 = cljs.core.chunk_buffer.call(null,size__107117);
var n__5790__auto____107119 = size__107117;
var i__107120 = 0;
while(true){
if((i__107120 < n__5790__auto____107119))
{var x__107121 = f.call(null,cljs.core._nth.call(null,c__107116,i__107120));
if((x__107121 == null))
{} else
{cljs.core.chunk_append.call(null,b__107118,x__107121);
}
{
var G__107123 = (i__107120 + 1);
i__107120 = G__107123;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__107118),keep.call(null,f,cljs.core.chunk_rest.call(null,s__107115)));
} else
{var x__107122 = f.call(null,cljs.core.first.call(null,s__107115));
if((x__107122 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__107115));
} else
{return cljs.core.cons.call(null,x__107122,keep.call(null,f,cljs.core.rest.call(null,s__107115)));
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
var keepi__107149 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____107159 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107159)
{var s__107160 = temp__3974__auto____107159;
if(cljs.core.chunked_seq_QMARK_.call(null,s__107160))
{var c__107161 = cljs.core.chunk_first.call(null,s__107160);
var size__107162 = cljs.core.count.call(null,c__107161);
var b__107163 = cljs.core.chunk_buffer.call(null,size__107162);
var n__5790__auto____107164 = size__107162;
var i__107165 = 0;
while(true){
if((i__107165 < n__5790__auto____107164))
{var x__107166 = f.call(null,(idx + i__107165),cljs.core._nth.call(null,c__107161,i__107165));
if((x__107166 == null))
{} else
{cljs.core.chunk_append.call(null,b__107163,x__107166);
}
{
var G__107168 = (i__107165 + 1);
i__107165 = G__107168;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__107163),keepi.call(null,(idx + size__107162),cljs.core.chunk_rest.call(null,s__107160)));
} else
{var x__107167 = f.call(null,idx,cljs.core.first.call(null,s__107160));
if((x__107167 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__107160));
} else
{return cljs.core.cons.call(null,x__107167,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__107160)));
}
}
} else
{return null;
}
}),null));
});
return keepi__107149.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107254 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____107254))
{return p.call(null,y);
} else
{return and__3822__auto____107254;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107255 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____107255))
{var and__3822__auto____107256 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____107256))
{return p.call(null,z);
} else
{return and__3822__auto____107256;
}
} else
{return and__3822__auto____107255;
}
})());
});
var ep1__4 = (function() { 
var G__107325__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107257 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____107257))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____107257;
}
})());
};
var G__107325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107325__delegate.call(this, x, y, z, args);
};
G__107325.cljs$lang$maxFixedArity = 3;
G__107325.cljs$lang$applyTo = (function (arglist__107326){
var x = cljs.core.first(arglist__107326);
var y = cljs.core.first(cljs.core.next(arglist__107326));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107326)));
return G__107325__delegate(x, y, z, args);
});
G__107325.cljs$lang$arity$variadic = G__107325__delegate;
return G__107325;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107269 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____107269))
{return p2.call(null,x);
} else
{return and__3822__auto____107269;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107270 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____107270))
{var and__3822__auto____107271 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____107271))
{var and__3822__auto____107272 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____107272))
{return p2.call(null,y);
} else
{return and__3822__auto____107272;
}
} else
{return and__3822__auto____107271;
}
} else
{return and__3822__auto____107270;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107273 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____107273))
{var and__3822__auto____107274 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____107274))
{var and__3822__auto____107275 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____107275))
{var and__3822__auto____107276 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____107276))
{var and__3822__auto____107277 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____107277))
{return p2.call(null,z);
} else
{return and__3822__auto____107277;
}
} else
{return and__3822__auto____107276;
}
} else
{return and__3822__auto____107275;
}
} else
{return and__3822__auto____107274;
}
} else
{return and__3822__auto____107273;
}
})());
});
var ep2__4 = (function() { 
var G__107327__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107278 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____107278))
{return cljs.core.every_QMARK_.call(null,(function (p1__107124_SHARP_){
var and__3822__auto____107279 = p1.call(null,p1__107124_SHARP_);
if(cljs.core.truth_(and__3822__auto____107279))
{return p2.call(null,p1__107124_SHARP_);
} else
{return and__3822__auto____107279;
}
}),args);
} else
{return and__3822__auto____107278;
}
})());
};
var G__107327 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107327__delegate.call(this, x, y, z, args);
};
G__107327.cljs$lang$maxFixedArity = 3;
G__107327.cljs$lang$applyTo = (function (arglist__107328){
var x = cljs.core.first(arglist__107328);
var y = cljs.core.first(cljs.core.next(arglist__107328));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107328)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107328)));
return G__107327__delegate(x, y, z, args);
});
G__107327.cljs$lang$arity$variadic = G__107327__delegate;
return G__107327;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107298 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____107298))
{var and__3822__auto____107299 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____107299))
{return p3.call(null,x);
} else
{return and__3822__auto____107299;
}
} else
{return and__3822__auto____107298;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107300 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____107300))
{var and__3822__auto____107301 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____107301))
{var and__3822__auto____107302 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____107302))
{var and__3822__auto____107303 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____107303))
{var and__3822__auto____107304 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____107304))
{return p3.call(null,y);
} else
{return and__3822__auto____107304;
}
} else
{return and__3822__auto____107303;
}
} else
{return and__3822__auto____107302;
}
} else
{return and__3822__auto____107301;
}
} else
{return and__3822__auto____107300;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107305 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____107305))
{var and__3822__auto____107306 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____107306))
{var and__3822__auto____107307 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____107307))
{var and__3822__auto____107308 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____107308))
{var and__3822__auto____107309 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____107309))
{var and__3822__auto____107310 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____107310))
{var and__3822__auto____107311 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____107311))
{var and__3822__auto____107312 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____107312))
{return p3.call(null,z);
} else
{return and__3822__auto____107312;
}
} else
{return and__3822__auto____107311;
}
} else
{return and__3822__auto____107310;
}
} else
{return and__3822__auto____107309;
}
} else
{return and__3822__auto____107308;
}
} else
{return and__3822__auto____107307;
}
} else
{return and__3822__auto____107306;
}
} else
{return and__3822__auto____107305;
}
})());
});
var ep3__4 = (function() { 
var G__107329__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107313 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____107313))
{return cljs.core.every_QMARK_.call(null,(function (p1__107125_SHARP_){
var and__3822__auto____107314 = p1.call(null,p1__107125_SHARP_);
if(cljs.core.truth_(and__3822__auto____107314))
{var and__3822__auto____107315 = p2.call(null,p1__107125_SHARP_);
if(cljs.core.truth_(and__3822__auto____107315))
{return p3.call(null,p1__107125_SHARP_);
} else
{return and__3822__auto____107315;
}
} else
{return and__3822__auto____107314;
}
}),args);
} else
{return and__3822__auto____107313;
}
})());
};
var G__107329 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107329__delegate.call(this, x, y, z, args);
};
G__107329.cljs$lang$maxFixedArity = 3;
G__107329.cljs$lang$applyTo = (function (arglist__107330){
var x = cljs.core.first(arglist__107330);
var y = cljs.core.first(cljs.core.next(arglist__107330));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107330)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107330)));
return G__107329__delegate(x, y, z, args);
});
G__107329.cljs$lang$arity$variadic = G__107329__delegate;
return G__107329;
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
var G__107331__delegate = function (p1,p2,p3,ps){
var ps__107316 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__107126_SHARP_){
return p1__107126_SHARP_.call(null,x);
}),ps__107316);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__107127_SHARP_){
var and__3822__auto____107321 = p1__107127_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____107321))
{return p1__107127_SHARP_.call(null,y);
} else
{return and__3822__auto____107321;
}
}),ps__107316);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__107128_SHARP_){
var and__3822__auto____107322 = p1__107128_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____107322))
{var and__3822__auto____107323 = p1__107128_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____107323))
{return p1__107128_SHARP_.call(null,z);
} else
{return and__3822__auto____107323;
}
} else
{return and__3822__auto____107322;
}
}),ps__107316);
});
var epn__4 = (function() { 
var G__107332__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____107324 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____107324))
{return cljs.core.every_QMARK_.call(null,(function (p1__107129_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__107129_SHARP_,args);
}),ps__107316);
} else
{return and__3822__auto____107324;
}
})());
};
var G__107332 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107332__delegate.call(this, x, y, z, args);
};
G__107332.cljs$lang$maxFixedArity = 3;
G__107332.cljs$lang$applyTo = (function (arglist__107333){
var x = cljs.core.first(arglist__107333);
var y = cljs.core.first(cljs.core.next(arglist__107333));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107333)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107333)));
return G__107332__delegate(x, y, z, args);
});
G__107332.cljs$lang$arity$variadic = G__107332__delegate;
return G__107332;
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
var G__107331 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107331__delegate.call(this, p1, p2, p3, ps);
};
G__107331.cljs$lang$maxFixedArity = 3;
G__107331.cljs$lang$applyTo = (function (arglist__107334){
var p1 = cljs.core.first(arglist__107334);
var p2 = cljs.core.first(cljs.core.next(arglist__107334));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107334)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107334)));
return G__107331__delegate(p1, p2, p3, ps);
});
G__107331.cljs$lang$arity$variadic = G__107331__delegate;
return G__107331;
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
var or__3824__auto____107415 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____107415))
{return or__3824__auto____107415;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____107416 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____107416))
{return or__3824__auto____107416;
} else
{var or__3824__auto____107417 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____107417))
{return or__3824__auto____107417;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__107486__delegate = function (x,y,z,args){
var or__3824__auto____107418 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____107418))
{return or__3824__auto____107418;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__107486 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107486__delegate.call(this, x, y, z, args);
};
G__107486.cljs$lang$maxFixedArity = 3;
G__107486.cljs$lang$applyTo = (function (arglist__107487){
var x = cljs.core.first(arglist__107487);
var y = cljs.core.first(cljs.core.next(arglist__107487));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107487)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107487)));
return G__107486__delegate(x, y, z, args);
});
G__107486.cljs$lang$arity$variadic = G__107486__delegate;
return G__107486;
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
var or__3824__auto____107430 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____107430))
{return or__3824__auto____107430;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____107431 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____107431))
{return or__3824__auto____107431;
} else
{var or__3824__auto____107432 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____107432))
{return or__3824__auto____107432;
} else
{var or__3824__auto____107433 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____107433))
{return or__3824__auto____107433;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____107434 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____107434))
{return or__3824__auto____107434;
} else
{var or__3824__auto____107435 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____107435))
{return or__3824__auto____107435;
} else
{var or__3824__auto____107436 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____107436))
{return or__3824__auto____107436;
} else
{var or__3824__auto____107437 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____107437))
{return or__3824__auto____107437;
} else
{var or__3824__auto____107438 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____107438))
{return or__3824__auto____107438;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__107488__delegate = function (x,y,z,args){
var or__3824__auto____107439 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____107439))
{return or__3824__auto____107439;
} else
{return cljs.core.some.call(null,(function (p1__107169_SHARP_){
var or__3824__auto____107440 = p1.call(null,p1__107169_SHARP_);
if(cljs.core.truth_(or__3824__auto____107440))
{return or__3824__auto____107440;
} else
{return p2.call(null,p1__107169_SHARP_);
}
}),args);
}
};
var G__107488 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107488__delegate.call(this, x, y, z, args);
};
G__107488.cljs$lang$maxFixedArity = 3;
G__107488.cljs$lang$applyTo = (function (arglist__107489){
var x = cljs.core.first(arglist__107489);
var y = cljs.core.first(cljs.core.next(arglist__107489));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107489)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107489)));
return G__107488__delegate(x, y, z, args);
});
G__107488.cljs$lang$arity$variadic = G__107488__delegate;
return G__107488;
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
var or__3824__auto____107459 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____107459))
{return or__3824__auto____107459;
} else
{var or__3824__auto____107460 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____107460))
{return or__3824__auto____107460;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____107461 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____107461))
{return or__3824__auto____107461;
} else
{var or__3824__auto____107462 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____107462))
{return or__3824__auto____107462;
} else
{var or__3824__auto____107463 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____107463))
{return or__3824__auto____107463;
} else
{var or__3824__auto____107464 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____107464))
{return or__3824__auto____107464;
} else
{var or__3824__auto____107465 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____107465))
{return or__3824__auto____107465;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____107466 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____107466))
{return or__3824__auto____107466;
} else
{var or__3824__auto____107467 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____107467))
{return or__3824__auto____107467;
} else
{var or__3824__auto____107468 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____107468))
{return or__3824__auto____107468;
} else
{var or__3824__auto____107469 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____107469))
{return or__3824__auto____107469;
} else
{var or__3824__auto____107470 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____107470))
{return or__3824__auto____107470;
} else
{var or__3824__auto____107471 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____107471))
{return or__3824__auto____107471;
} else
{var or__3824__auto____107472 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____107472))
{return or__3824__auto____107472;
} else
{var or__3824__auto____107473 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____107473))
{return or__3824__auto____107473;
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
var G__107490__delegate = function (x,y,z,args){
var or__3824__auto____107474 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____107474))
{return or__3824__auto____107474;
} else
{return cljs.core.some.call(null,(function (p1__107170_SHARP_){
var or__3824__auto____107475 = p1.call(null,p1__107170_SHARP_);
if(cljs.core.truth_(or__3824__auto____107475))
{return or__3824__auto____107475;
} else
{var or__3824__auto____107476 = p2.call(null,p1__107170_SHARP_);
if(cljs.core.truth_(or__3824__auto____107476))
{return or__3824__auto____107476;
} else
{return p3.call(null,p1__107170_SHARP_);
}
}
}),args);
}
};
var G__107490 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107490__delegate.call(this, x, y, z, args);
};
G__107490.cljs$lang$maxFixedArity = 3;
G__107490.cljs$lang$applyTo = (function (arglist__107491){
var x = cljs.core.first(arglist__107491);
var y = cljs.core.first(cljs.core.next(arglist__107491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107491)));
return G__107490__delegate(x, y, z, args);
});
G__107490.cljs$lang$arity$variadic = G__107490__delegate;
return G__107490;
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
var G__107492__delegate = function (p1,p2,p3,ps){
var ps__107477 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__107171_SHARP_){
return p1__107171_SHARP_.call(null,x);
}),ps__107477);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__107172_SHARP_){
var or__3824__auto____107482 = p1__107172_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____107482))
{return or__3824__auto____107482;
} else
{return p1__107172_SHARP_.call(null,y);
}
}),ps__107477);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__107173_SHARP_){
var or__3824__auto____107483 = p1__107173_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____107483))
{return or__3824__auto____107483;
} else
{var or__3824__auto____107484 = p1__107173_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____107484))
{return or__3824__auto____107484;
} else
{return p1__107173_SHARP_.call(null,z);
}
}
}),ps__107477);
});
var spn__4 = (function() { 
var G__107493__delegate = function (x,y,z,args){
var or__3824__auto____107485 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____107485))
{return or__3824__auto____107485;
} else
{return cljs.core.some.call(null,(function (p1__107174_SHARP_){
return cljs.core.some.call(null,p1__107174_SHARP_,args);
}),ps__107477);
}
};
var G__107493 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107493__delegate.call(this, x, y, z, args);
};
G__107493.cljs$lang$maxFixedArity = 3;
G__107493.cljs$lang$applyTo = (function (arglist__107494){
var x = cljs.core.first(arglist__107494);
var y = cljs.core.first(cljs.core.next(arglist__107494));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107494)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107494)));
return G__107493__delegate(x, y, z, args);
});
G__107493.cljs$lang$arity$variadic = G__107493__delegate;
return G__107493;
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
var G__107492 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__107492__delegate.call(this, p1, p2, p3, ps);
};
G__107492.cljs$lang$maxFixedArity = 3;
G__107492.cljs$lang$applyTo = (function (arglist__107495){
var p1 = cljs.core.first(arglist__107495);
var p2 = cljs.core.first(cljs.core.next(arglist__107495));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107495)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107495)));
return G__107492__delegate(p1, p2, p3, ps);
});
G__107492.cljs$lang$arity$variadic = G__107492__delegate;
return G__107492;
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
var temp__3974__auto____107514 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107514)
{var s__107515 = temp__3974__auto____107514;
if(cljs.core.chunked_seq_QMARK_.call(null,s__107515))
{var c__107516 = cljs.core.chunk_first.call(null,s__107515);
var size__107517 = cljs.core.count.call(null,c__107516);
var b__107518 = cljs.core.chunk_buffer.call(null,size__107517);
var n__5790__auto____107519 = size__107517;
var i__107520 = 0;
while(true){
if((i__107520 < n__5790__auto____107519))
{cljs.core.chunk_append.call(null,b__107518,f.call(null,cljs.core._nth.call(null,c__107516,i__107520)));
{
var G__107532 = (i__107520 + 1);
i__107520 = G__107532;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__107518),map.call(null,f,cljs.core.chunk_rest.call(null,s__107515)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__107515)),map.call(null,f,cljs.core.rest.call(null,s__107515)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__107521 = cljs.core.seq.call(null,c1);
var s2__107522 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____107523 = s1__107521;
if(and__3822__auto____107523)
{return s2__107522;
} else
{return and__3822__auto____107523;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__107521),cljs.core.first.call(null,s2__107522)),map.call(null,f,cljs.core.rest.call(null,s1__107521),cljs.core.rest.call(null,s2__107522)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__107524 = cljs.core.seq.call(null,c1);
var s2__107525 = cljs.core.seq.call(null,c2);
var s3__107526 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____107527 = s1__107524;
if(and__3822__auto____107527)
{var and__3822__auto____107528 = s2__107525;
if(and__3822__auto____107528)
{return s3__107526;
} else
{return and__3822__auto____107528;
}
} else
{return and__3822__auto____107527;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__107524),cljs.core.first.call(null,s2__107525),cljs.core.first.call(null,s3__107526)),map.call(null,f,cljs.core.rest.call(null,s1__107524),cljs.core.rest.call(null,s2__107525),cljs.core.rest.call(null,s3__107526)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__107533__delegate = function (f,c1,c2,c3,colls){
var step__107531 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__107530 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__107530))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__107530),step.call(null,map.call(null,cljs.core.rest,ss__107530)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__107335_SHARP_){
return cljs.core.apply.call(null,f,p1__107335_SHARP_);
}),step__107531.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__107533 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__107533__delegate.call(this, f, c1, c2, c3, colls);
};
G__107533.cljs$lang$maxFixedArity = 4;
G__107533.cljs$lang$applyTo = (function (arglist__107534){
var f = cljs.core.first(arglist__107534);
var c1 = cljs.core.first(cljs.core.next(arglist__107534));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107534)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107534))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107534))));
return G__107533__delegate(f, c1, c2, c3, colls);
});
G__107533.cljs$lang$arity$variadic = G__107533__delegate;
return G__107533;
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
{var temp__3974__auto____107537 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107537)
{var s__107538 = temp__3974__auto____107537;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__107538),take.call(null,(n - 1),cljs.core.rest.call(null,s__107538)));
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
var step__107544 = (function (n,coll){
while(true){
var s__107542 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____107543 = (n > 0);
if(and__3822__auto____107543)
{return s__107542;
} else
{return and__3822__auto____107543;
}
})()))
{{
var G__107545 = (n - 1);
var G__107546 = cljs.core.rest.call(null,s__107542);
n = G__107545;
coll = G__107546;
continue;
}
} else
{return s__107542;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__107544.call(null,n,coll);
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
var s__107549 = cljs.core.seq.call(null,coll);
var lead__107550 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__107550)
{{
var G__107551 = cljs.core.next.call(null,s__107549);
var G__107552 = cljs.core.next.call(null,lead__107550);
s__107549 = G__107551;
lead__107550 = G__107552;
continue;
}
} else
{return s__107549;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__107558 = (function (pred,coll){
while(true){
var s__107556 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____107557 = s__107556;
if(and__3822__auto____107557)
{return pred.call(null,cljs.core.first.call(null,s__107556));
} else
{return and__3822__auto____107557;
}
})()))
{{
var G__107559 = pred;
var G__107560 = cljs.core.rest.call(null,s__107556);
pred = G__107559;
coll = G__107560;
continue;
}
} else
{return s__107556;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__107558.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____107563 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107563)
{var s__107564 = temp__3974__auto____107563;
return cljs.core.concat.call(null,s__107564,cycle.call(null,s__107564));
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
var s1__107569 = cljs.core.seq.call(null,c1);
var s2__107570 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____107571 = s1__107569;
if(and__3822__auto____107571)
{return s2__107570;
} else
{return and__3822__auto____107571;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__107569),cljs.core.cons.call(null,cljs.core.first.call(null,s2__107570),interleave.call(null,cljs.core.rest.call(null,s1__107569),cljs.core.rest.call(null,s2__107570))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__107573__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__107572 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__107572))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__107572),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__107572)));
} else
{return null;
}
}),null));
};
var G__107573 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__107573__delegate.call(this, c1, c2, colls);
};
G__107573.cljs$lang$maxFixedArity = 2;
G__107573.cljs$lang$applyTo = (function (arglist__107574){
var c1 = cljs.core.first(arglist__107574);
var c2 = cljs.core.first(cljs.core.next(arglist__107574));
var colls = cljs.core.rest(cljs.core.next(arglist__107574));
return G__107573__delegate(c1, c2, colls);
});
G__107573.cljs$lang$arity$variadic = G__107573__delegate;
return G__107573;
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
var cat__107584 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____107582 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____107582)
{var coll__107583 = temp__3971__auto____107582;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__107583),cat.call(null,cljs.core.rest.call(null,coll__107583),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__107584.call(null,null,colls);
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
var G__107585__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__107585 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__107585__delegate.call(this, f, coll, colls);
};
G__107585.cljs$lang$maxFixedArity = 2;
G__107585.cljs$lang$applyTo = (function (arglist__107586){
var f = cljs.core.first(arglist__107586);
var coll = cljs.core.first(cljs.core.next(arglist__107586));
var colls = cljs.core.rest(cljs.core.next(arglist__107586));
return G__107585__delegate(f, coll, colls);
});
G__107585.cljs$lang$arity$variadic = G__107585__delegate;
return G__107585;
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
var temp__3974__auto____107596 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107596)
{var s__107597 = temp__3974__auto____107596;
if(cljs.core.chunked_seq_QMARK_.call(null,s__107597))
{var c__107598 = cljs.core.chunk_first.call(null,s__107597);
var size__107599 = cljs.core.count.call(null,c__107598);
var b__107600 = cljs.core.chunk_buffer.call(null,size__107599);
var n__5790__auto____107601 = size__107599;
var i__107602 = 0;
while(true){
if((i__107602 < n__5790__auto____107601))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__107598,i__107602))))
{cljs.core.chunk_append.call(null,b__107600,cljs.core._nth.call(null,c__107598,i__107602));
} else
{}
{
var G__107605 = (i__107602 + 1);
i__107602 = G__107605;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__107600),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__107597)));
} else
{var f__107603 = cljs.core.first.call(null,s__107597);
var r__107604 = cljs.core.rest.call(null,s__107597);
if(cljs.core.truth_(pred.call(null,f__107603)))
{return cljs.core.cons.call(null,f__107603,filter.call(null,pred,r__107604));
} else
{return filter.call(null,pred,r__107604);
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
var walk__107608 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__107608.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__107606_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__107606_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__107612__107613 = to;
if(G__107612__107613)
{if((function (){var or__3824__auto____107614 = (G__107612__107613.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____107614)
{return or__3824__auto____107614;
} else
{return G__107612__107613.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__107612__107613.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__107612__107613);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__107612__107613);
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
var G__107615__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__107615 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__107615__delegate.call(this, f, c1, c2, c3, colls);
};
G__107615.cljs$lang$maxFixedArity = 4;
G__107615.cljs$lang$applyTo = (function (arglist__107616){
var f = cljs.core.first(arglist__107616);
var c1 = cljs.core.first(cljs.core.next(arglist__107616));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107616)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107616))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__107616))));
return G__107615__delegate(f, c1, c2, c3, colls);
});
G__107615.cljs$lang$arity$variadic = G__107615__delegate;
return G__107615;
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
var temp__3974__auto____107623 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107623)
{var s__107624 = temp__3974__auto____107623;
var p__107625 = cljs.core.take.call(null,n,s__107624);
if((n === cljs.core.count.call(null,p__107625)))
{return cljs.core.cons.call(null,p__107625,partition.call(null,n,step,cljs.core.drop.call(null,step,s__107624)));
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
var temp__3974__auto____107626 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____107626)
{var s__107627 = temp__3974__auto____107626;
var p__107628 = cljs.core.take.call(null,n,s__107627);
if((n === cljs.core.count.call(null,p__107628)))
{return cljs.core.cons.call(null,p__107628,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__107627)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__107628,pad)));
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
var sentinel__107633 = cljs.core.lookup_sentinel;
var m__107634 = m;
var ks__107635 = cljs.core.seq.call(null,ks);
while(true){
if(ks__107635)
{var m__107636 = cljs.core._lookup.call(null,m__107634,cljs.core.first.call(null,ks__107635),sentinel__107633);
if((sentinel__107633 === m__107636))
{return not_found;
} else
{{
var G__107637 = sentinel__107633;
var G__107638 = m__107636;
var G__107639 = cljs.core.next.call(null,ks__107635);
sentinel__107633 = G__107637;
m__107634 = G__107638;
ks__107635 = G__107639;
continue;
}
}
} else
{return m__107634;
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
cljs.core.assoc_in = (function assoc_in(m,p__107640,v){
var vec__107645__107646 = p__107640;
var k__107647 = cljs.core.nth.call(null,vec__107645__107646,0,null);
var ks__107648 = cljs.core.nthnext.call(null,vec__107645__107646,1);
if(cljs.core.truth_(ks__107648))
{return cljs.core.assoc.call(null,m,k__107647,assoc_in.call(null,cljs.core._lookup.call(null,m,k__107647,null),ks__107648,v));
} else
{return cljs.core.assoc.call(null,m,k__107647,v);
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
var update_in__delegate = function (m,p__107649,f,args){
var vec__107654__107655 = p__107649;
var k__107656 = cljs.core.nth.call(null,vec__107654__107655,0,null);
var ks__107657 = cljs.core.nthnext.call(null,vec__107654__107655,1);
if(cljs.core.truth_(ks__107657))
{return cljs.core.assoc.call(null,m,k__107656,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__107656,null),ks__107657,f,args));
} else
{return cljs.core.assoc.call(null,m,k__107656,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__107656,null),args));
}
};
var update_in = function (m,p__107649,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__107649, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__107658){
var m = cljs.core.first(arglist__107658);
var p__107649 = cljs.core.first(cljs.core.next(arglist__107658));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__107658)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__107658)));
return update_in__delegate(m, p__107649, f, args);
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
var this__107661 = this;
var h__5444__auto____107662 = this__107661.__hash;
if(!((h__5444__auto____107662 == null)))
{return h__5444__auto____107662;
} else
{var h__5444__auto____107663 = cljs.core.hash_coll.call(null,coll);
this__107661.__hash = h__5444__auto____107663;
return h__5444__auto____107663;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__107664 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__107665 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__107666 = this;
var new_array__107667 = this__107666.array.slice();
(new_array__107667[k] = v);
return (new cljs.core.Vector(this__107666.meta,new_array__107667,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__107698 = null;
var G__107698__2 = (function (this_sym107668,k){
var this__107670 = this;
var this_sym107668__107671 = this;
var coll__107672 = this_sym107668__107671;
return coll__107672.cljs$core$ILookup$_lookup$arity$2(coll__107672,k);
});
var G__107698__3 = (function (this_sym107669,k,not_found){
var this__107670 = this;
var this_sym107669__107673 = this;
var coll__107674 = this_sym107669__107673;
return coll__107674.cljs$core$ILookup$_lookup$arity$3(coll__107674,k,not_found);
});
G__107698 = function(this_sym107669,k,not_found){
switch(arguments.length){
case 2:
return G__107698__2.call(this,this_sym107669,k);
case 3:
return G__107698__3.call(this,this_sym107669,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__107698;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym107659,args107660){
var this__107675 = this;
return this_sym107659.call.apply(this_sym107659,[this_sym107659].concat(args107660.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__107676 = this;
var new_array__107677 = this__107676.array.slice();
new_array__107677.push(o);
return (new cljs.core.Vector(this__107676.meta,new_array__107677,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__107678 = this;
var this__107679 = this;
return cljs.core.pr_str.call(null,this__107679);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__107680 = this;
return cljs.core.ci_reduce.call(null,this__107680.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__107681 = this;
return cljs.core.ci_reduce.call(null,this__107681.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__107682 = this;
if((this__107682.array.length > 0))
{var vector_seq__107683 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__107682.array.length))
{return cljs.core.cons.call(null,(this__107682.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__107683.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__107684 = this;
return this__107684.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__107685 = this;
var count__107686 = this__107685.array.length;
if((count__107686 > 0))
{return (this__107685.array[(count__107686 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__107687 = this;
if((this__107687.array.length > 0))
{var new_array__107688 = this__107687.array.slice();
new_array__107688.pop();
return (new cljs.core.Vector(this__107687.meta,new_array__107688,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__107689 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__107690 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__107691 = this;
return (new cljs.core.Vector(meta,this__107691.array,this__107691.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__107692 = this;
return this__107692.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__107693 = this;
if((function (){var and__3822__auto____107694 = (0 <= n);
if(and__3822__auto____107694)
{return (n < this__107693.array.length);
} else
{return and__3822__auto____107694;
}
})())
{return (this__107693.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__107695 = this;
if((function (){var and__3822__auto____107696 = (0 <= n);
if(and__3822__auto____107696)
{return (n < this__107695.array.length);
} else
{return and__3822__auto____107696;
}
})())
{return (this__107695.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__107697 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__107697.meta);
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
var cnt__107700 = pv.cnt;
if((cnt__107700 < 32))
{return 0;
} else
{return (((cnt__107700 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__107706 = level;
var ret__107707 = node;
while(true){
if((ll__107706 === 0))
{return ret__107707;
} else
{var embed__107708 = ret__107707;
var r__107709 = cljs.core.pv_fresh_node.call(null,edit);
var ___107710 = cljs.core.pv_aset.call(null,r__107709,0,embed__107708);
{
var G__107711 = (ll__107706 - 5);
var G__107712 = r__107709;
ll__107706 = G__107711;
ret__107707 = G__107712;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__107718 = cljs.core.pv_clone_node.call(null,parent);
var subidx__107719 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__107718,subidx__107719,tailnode);
return ret__107718;
} else
{var child__107720 = cljs.core.pv_aget.call(null,parent,subidx__107719);
if(!((child__107720 == null)))
{var node_to_insert__107721 = push_tail.call(null,pv,(level - 5),child__107720,tailnode);
cljs.core.pv_aset.call(null,ret__107718,subidx__107719,node_to_insert__107721);
return ret__107718;
} else
{var node_to_insert__107722 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__107718,subidx__107719,node_to_insert__107722);
return ret__107718;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____107726 = (0 <= i);
if(and__3822__auto____107726)
{return (i < pv.cnt);
} else
{return and__3822__auto____107726;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__107727 = pv.root;
var level__107728 = pv.shift;
while(true){
if((level__107728 > 0))
{{
var G__107729 = cljs.core.pv_aget.call(null,node__107727,((i >>> level__107728) & 31));
var G__107730 = (level__107728 - 5);
node__107727 = G__107729;
level__107728 = G__107730;
continue;
}
} else
{return node__107727.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__107733 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__107733,(i & 31),val);
return ret__107733;
} else
{var subidx__107734 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__107733,subidx__107734,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__107734),i,val));
return ret__107733;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__107740 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__107741 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__107740));
if((function (){var and__3822__auto____107742 = (new_child__107741 == null);
if(and__3822__auto____107742)
{return (subidx__107740 === 0);
} else
{return and__3822__auto____107742;
}
})())
{return null;
} else
{var ret__107743 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__107743,subidx__107740,new_child__107741);
return ret__107743;
}
} else
{if((subidx__107740 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__107744 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__107744,subidx__107740,null);
return ret__107744;
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
var this__107747 = this;
return (new cljs.core.TransientVector(this__107747.cnt,this__107747.shift,cljs.core.tv_editable_root.call(null,this__107747.root),cljs.core.tv_editable_tail.call(null,this__107747.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__107748 = this;
var h__5444__auto____107749 = this__107748.__hash;
if(!((h__5444__auto____107749 == null)))
{return h__5444__auto____107749;
} else
{var h__5444__auto____107750 = cljs.core.hash_coll.call(null,coll);
this__107748.__hash = h__5444__auto____107750;
return h__5444__auto____107750;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__107751 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__107752 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__107753 = this;
if((function (){var and__3822__auto____107754 = (0 <= k);
if(and__3822__auto____107754)
{return (k < this__107753.cnt);
} else
{return and__3822__auto____107754;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__107755 = this__107753.tail.slice();
(new_tail__107755[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__107753.meta,this__107753.cnt,this__107753.shift,this__107753.root,new_tail__107755,null));
} else
{return (new cljs.core.PersistentVector(this__107753.meta,this__107753.cnt,this__107753.shift,cljs.core.do_assoc.call(null,coll,this__107753.shift,this__107753.root,k,v),this__107753.tail,null));
}
} else
{if((k === this__107753.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__107753.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__107803 = null;
var G__107803__2 = (function (this_sym107756,k){
var this__107758 = this;
var this_sym107756__107759 = this;
var coll__107760 = this_sym107756__107759;
return coll__107760.cljs$core$ILookup$_lookup$arity$2(coll__107760,k);
});
var G__107803__3 = (function (this_sym107757,k,not_found){
var this__107758 = this;
var this_sym107757__107761 = this;
var coll__107762 = this_sym107757__107761;
return coll__107762.cljs$core$ILookup$_lookup$arity$3(coll__107762,k,not_found);
});
G__107803 = function(this_sym107757,k,not_found){
switch(arguments.length){
case 2:
return G__107803__2.call(this,this_sym107757,k);
case 3:
return G__107803__3.call(this,this_sym107757,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__107803;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym107745,args107746){
var this__107763 = this;
return this_sym107745.call.apply(this_sym107745,[this_sym107745].concat(args107746.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__107764 = this;
var step_init__107765 = [0,init];
var i__107766 = 0;
while(true){
if((i__107766 < this__107764.cnt))
{var arr__107767 = cljs.core.array_for.call(null,v,i__107766);
var len__107768 = arr__107767.length;
var init__107772 = (function (){var j__107769 = 0;
var init__107770 = (step_init__107765[1]);
while(true){
if((j__107769 < len__107768))
{var init__107771 = f.call(null,init__107770,(j__107769 + i__107766),(arr__107767[j__107769]));
if(cljs.core.reduced_QMARK_.call(null,init__107771))
{return init__107771;
} else
{{
var G__107804 = (j__107769 + 1);
var G__107805 = init__107771;
j__107769 = G__107804;
init__107770 = G__107805;
continue;
}
}
} else
{(step_init__107765[0] = len__107768);
(step_init__107765[1] = init__107770);
return init__107770;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__107772))
{return cljs.core.deref.call(null,init__107772);
} else
{{
var G__107806 = (i__107766 + (step_init__107765[0]));
i__107766 = G__107806;
continue;
}
}
} else
{return (step_init__107765[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__107773 = this;
if(((this__107773.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__107774 = this__107773.tail.slice();
new_tail__107774.push(o);
return (new cljs.core.PersistentVector(this__107773.meta,(this__107773.cnt + 1),this__107773.shift,this__107773.root,new_tail__107774,null));
} else
{var root_overflow_QMARK___107775 = ((this__107773.cnt >>> 5) > (1 << this__107773.shift));
var new_shift__107776 = ((root_overflow_QMARK___107775)?(this__107773.shift + 5):this__107773.shift);
var new_root__107778 = ((root_overflow_QMARK___107775)?(function (){var n_r__107777 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__107777,0,this__107773.root);
cljs.core.pv_aset.call(null,n_r__107777,1,cljs.core.new_path.call(null,null,this__107773.shift,(new cljs.core.VectorNode(null,this__107773.tail))));
return n_r__107777;
})():cljs.core.push_tail.call(null,coll,this__107773.shift,this__107773.root,(new cljs.core.VectorNode(null,this__107773.tail))));
return (new cljs.core.PersistentVector(this__107773.meta,(this__107773.cnt + 1),new_shift__107776,new_root__107778,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__107779 = this;
if((this__107779.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__107779.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__107780 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__107781 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__107782 = this;
var this__107783 = this;
return cljs.core.pr_str.call(null,this__107783);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__107784 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__107785 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__107786 = this;
if((this__107786.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__107787 = this;
return this__107787.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__107788 = this;
if((this__107788.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__107788.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__107789 = this;
if((this__107789.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__107789.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__107789.meta);
} else
{if((1 < (this__107789.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__107789.meta,(this__107789.cnt - 1),this__107789.shift,this__107789.root,this__107789.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__107790 = cljs.core.array_for.call(null,coll,(this__107789.cnt - 2));
var nr__107791 = cljs.core.pop_tail.call(null,coll,this__107789.shift,this__107789.root);
var new_root__107792 = (((nr__107791 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__107791);
var cnt_1__107793 = (this__107789.cnt - 1);
if((function (){var and__3822__auto____107794 = (5 < this__107789.shift);
if(and__3822__auto____107794)
{return (cljs.core.pv_aget.call(null,new_root__107792,1) == null);
} else
{return and__3822__auto____107794;
}
})())
{return (new cljs.core.PersistentVector(this__107789.meta,cnt_1__107793,(this__107789.shift - 5),cljs.core.pv_aget.call(null,new_root__107792,0),new_tail__107790,null));
} else
{return (new cljs.core.PersistentVector(this__107789.meta,cnt_1__107793,this__107789.shift,new_root__107792,new_tail__107790,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__107795 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__107796 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__107797 = this;
return (new cljs.core.PersistentVector(meta,this__107797.cnt,this__107797.shift,this__107797.root,this__107797.tail,this__107797.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__107798 = this;
return this__107798.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__107799 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__107800 = this;
if((function (){var and__3822__auto____107801 = (0 <= n);
if(and__3822__auto____107801)
{return (n < this__107800.cnt);
} else
{return and__3822__auto____107801;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__107802 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__107802.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__107807 = xs.length;
var xs__107808 = (((no_clone === true))?xs:xs.slice());
if((l__107807 < 32))
{return (new cljs.core.PersistentVector(null,l__107807,5,cljs.core.PersistentVector.EMPTY_NODE,xs__107808,null));
} else
{var node__107809 = xs__107808.slice(0,32);
var v__107810 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__107809,null));
var i__107811 = 32;
var out__107812 = cljs.core._as_transient.call(null,v__107810);
while(true){
if((i__107811 < l__107807))
{{
var G__107813 = (i__107811 + 1);
var G__107814 = cljs.core.conj_BANG_.call(null,out__107812,(xs__107808[i__107811]));
i__107811 = G__107813;
out__107812 = G__107814;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__107812);
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
vector.cljs$lang$applyTo = (function (arglist__107815){
var args = cljs.core.seq(arglist__107815);;
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
var this__107816 = this;
var h__5444__auto____107817 = this__107816.__hash;
if(!((h__5444__auto____107817 == null)))
{return h__5444__auto____107817;
} else
{var h__5444__auto____107818 = cljs.core.hash_coll.call(null,coll);
this__107816.__hash = h__5444__auto____107818;
return h__5444__auto____107818;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__107819 = this;
if(((this__107819.off + 1) < this__107819.node.length))
{var s__107820 = cljs.core.chunked_seq.call(null,this__107819.vec,this__107819.node,this__107819.i,(this__107819.off + 1));
if((s__107820 == null))
{return null;
} else
{return s__107820;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__107821 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__107822 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__107823 = this;
return (this__107823.node[this__107823.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__107824 = this;
if(((this__107824.off + 1) < this__107824.node.length))
{var s__107825 = cljs.core.chunked_seq.call(null,this__107824.vec,this__107824.node,this__107824.i,(this__107824.off + 1));
if((s__107825 == null))
{return cljs.core.List.EMPTY;
} else
{return s__107825;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__107826 = this;
var l__107827 = this__107826.node.length;
var s__107828 = ((((this__107826.i + l__107827) < cljs.core._count.call(null,this__107826.vec)))?cljs.core.chunked_seq.call(null,this__107826.vec,(this__107826.i + l__107827),0):null);
if((s__107828 == null))
{return null;
} else
{return s__107828;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__107829 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__107830 = this;
return cljs.core.chunked_seq.call(null,this__107830.vec,this__107830.node,this__107830.i,this__107830.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__107831 = this;
return this__107831.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__107832 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__107832.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__107833 = this;
return cljs.core.array_chunk.call(null,this__107833.node,this__107833.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__107834 = this;
var l__107835 = this__107834.node.length;
var s__107836 = ((((this__107834.i + l__107835) < cljs.core._count.call(null,this__107834.vec)))?cljs.core.chunked_seq.call(null,this__107834.vec,(this__107834.i + l__107835),0):null);
if((s__107836 == null))
{return cljs.core.List.EMPTY;
} else
{return s__107836;
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
var this__107839 = this;
var h__5444__auto____107840 = this__107839.__hash;
if(!((h__5444__auto____107840 == null)))
{return h__5444__auto____107840;
} else
{var h__5444__auto____107841 = cljs.core.hash_coll.call(null,coll);
this__107839.__hash = h__5444__auto____107841;
return h__5444__auto____107841;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__107842 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__107843 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__107844 = this;
var v_pos__107845 = (this__107844.start + key);
return (new cljs.core.Subvec(this__107844.meta,cljs.core._assoc.call(null,this__107844.v,v_pos__107845,val),this__107844.start,((this__107844.end > (v_pos__107845 + 1)) ? this__107844.end : (v_pos__107845 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__107871 = null;
var G__107871__2 = (function (this_sym107846,k){
var this__107848 = this;
var this_sym107846__107849 = this;
var coll__107850 = this_sym107846__107849;
return coll__107850.cljs$core$ILookup$_lookup$arity$2(coll__107850,k);
});
var G__107871__3 = (function (this_sym107847,k,not_found){
var this__107848 = this;
var this_sym107847__107851 = this;
var coll__107852 = this_sym107847__107851;
return coll__107852.cljs$core$ILookup$_lookup$arity$3(coll__107852,k,not_found);
});
G__107871 = function(this_sym107847,k,not_found){
switch(arguments.length){
case 2:
return G__107871__2.call(this,this_sym107847,k);
case 3:
return G__107871__3.call(this,this_sym107847,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__107871;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym107837,args107838){
var this__107853 = this;
return this_sym107837.call.apply(this_sym107837,[this_sym107837].concat(args107838.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__107854 = this;
return (new cljs.core.Subvec(this__107854.meta,cljs.core._assoc_n.call(null,this__107854.v,this__107854.end,o),this__107854.start,(this__107854.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__107855 = this;
var this__107856 = this;
return cljs.core.pr_str.call(null,this__107856);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__107857 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__107858 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__107859 = this;
var subvec_seq__107860 = (function subvec_seq(i){
if((i === this__107859.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__107859.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__107860.call(null,this__107859.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__107861 = this;
return (this__107861.end - this__107861.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__107862 = this;
return cljs.core._nth.call(null,this__107862.v,(this__107862.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__107863 = this;
if((this__107863.start === this__107863.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__107863.meta,this__107863.v,this__107863.start,(this__107863.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__107864 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__107865 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__107866 = this;
return (new cljs.core.Subvec(meta,this__107866.v,this__107866.start,this__107866.end,this__107866.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__107867 = this;
return this__107867.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__107868 = this;
return cljs.core._nth.call(null,this__107868.v,(this__107868.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__107869 = this;
return cljs.core._nth.call(null,this__107869.v,(this__107869.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__107870 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__107870.meta);
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
var ret__107873 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__107873,0,tl.length);
return ret__107873;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__107877 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__107878 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__107877,subidx__107878,(((level === 5))?tail_node:(function (){var child__107879 = cljs.core.pv_aget.call(null,ret__107877,subidx__107878);
if(!((child__107879 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__107879,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__107877;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__107884 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__107885 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__107886 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__107884,subidx__107885));
if((function (){var and__3822__auto____107887 = (new_child__107886 == null);
if(and__3822__auto____107887)
{return (subidx__107885 === 0);
} else
{return and__3822__auto____107887;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__107884,subidx__107885,new_child__107886);
return node__107884;
}
} else
{if((subidx__107885 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__107884,subidx__107885,null);
return node__107884;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____107892 = (0 <= i);
if(and__3822__auto____107892)
{return (i < tv.cnt);
} else
{return and__3822__auto____107892;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__107893 = tv.root;
var node__107894 = root__107893;
var level__107895 = tv.shift;
while(true){
if((level__107895 > 0))
{{
var G__107896 = cljs.core.tv_ensure_editable.call(null,root__107893.edit,cljs.core.pv_aget.call(null,node__107894,((i >>> level__107895) & 31)));
var G__107897 = (level__107895 - 5);
node__107894 = G__107896;
level__107895 = G__107897;
continue;
}
} else
{return node__107894.arr;
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
var G__107937 = null;
var G__107937__2 = (function (this_sym107900,k){
var this__107902 = this;
var this_sym107900__107903 = this;
var coll__107904 = this_sym107900__107903;
return coll__107904.cljs$core$ILookup$_lookup$arity$2(coll__107904,k);
});
var G__107937__3 = (function (this_sym107901,k,not_found){
var this__107902 = this;
var this_sym107901__107905 = this;
var coll__107906 = this_sym107901__107905;
return coll__107906.cljs$core$ILookup$_lookup$arity$3(coll__107906,k,not_found);
});
G__107937 = function(this_sym107901,k,not_found){
switch(arguments.length){
case 2:
return G__107937__2.call(this,this_sym107901,k);
case 3:
return G__107937__3.call(this,this_sym107901,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__107937;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym107898,args107899){
var this__107907 = this;
return this_sym107898.call.apply(this_sym107898,[this_sym107898].concat(args107899.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__107908 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__107909 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__107910 = this;
if(this__107910.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__107911 = this;
if((function (){var and__3822__auto____107912 = (0 <= n);
if(and__3822__auto____107912)
{return (n < this__107911.cnt);
} else
{return and__3822__auto____107912;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__107913 = this;
if(this__107913.root.edit)
{return this__107913.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__107914 = this;
if(this__107914.root.edit)
{if((function (){var and__3822__auto____107915 = (0 <= n);
if(and__3822__auto____107915)
{return (n < this__107914.cnt);
} else
{return and__3822__auto____107915;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__107914.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__107920 = (function go(level,node){
var node__107918 = cljs.core.tv_ensure_editable.call(null,this__107914.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__107918,(n & 31),val);
return node__107918;
} else
{var subidx__107919 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__107918,subidx__107919,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__107918,subidx__107919)));
return node__107918;
}
}).call(null,this__107914.shift,this__107914.root);
this__107914.root = new_root__107920;
return tcoll;
}
} else
{if((n === this__107914.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__107914.cnt)].join('')));
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
var this__107921 = this;
if(this__107921.root.edit)
{if((this__107921.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__107921.cnt))
{this__107921.cnt = 0;
return tcoll;
} else
{if((((this__107921.cnt - 1) & 31) > 0))
{this__107921.cnt = (this__107921.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__107922 = cljs.core.editable_array_for.call(null,tcoll,(this__107921.cnt - 2));
var new_root__107924 = (function (){var nr__107923 = cljs.core.tv_pop_tail.call(null,tcoll,this__107921.shift,this__107921.root);
if(!((nr__107923 == null)))
{return nr__107923;
} else
{return (new cljs.core.VectorNode(this__107921.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____107925 = (5 < this__107921.shift);
if(and__3822__auto____107925)
{return (cljs.core.pv_aget.call(null,new_root__107924,1) == null);
} else
{return and__3822__auto____107925;
}
})())
{var new_root__107926 = cljs.core.tv_ensure_editable.call(null,this__107921.root.edit,cljs.core.pv_aget.call(null,new_root__107924,0));
this__107921.root = new_root__107926;
this__107921.shift = (this__107921.shift - 5);
this__107921.cnt = (this__107921.cnt - 1);
this__107921.tail = new_tail__107922;
return tcoll;
} else
{this__107921.root = new_root__107924;
this__107921.cnt = (this__107921.cnt - 1);
this__107921.tail = new_tail__107922;
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
var this__107927 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__107928 = this;
if(this__107928.root.edit)
{if(((this__107928.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__107928.tail[(this__107928.cnt & 31)] = o);
this__107928.cnt = (this__107928.cnt + 1);
return tcoll;
} else
{var tail_node__107929 = (new cljs.core.VectorNode(this__107928.root.edit,this__107928.tail));
var new_tail__107930 = cljs.core.make_array.call(null,32);
(new_tail__107930[0] = o);
this__107928.tail = new_tail__107930;
if(((this__107928.cnt >>> 5) > (1 << this__107928.shift)))
{var new_root_array__107931 = cljs.core.make_array.call(null,32);
var new_shift__107932 = (this__107928.shift + 5);
(new_root_array__107931[0] = this__107928.root);
(new_root_array__107931[1] = cljs.core.new_path.call(null,this__107928.root.edit,this__107928.shift,tail_node__107929));
this__107928.root = (new cljs.core.VectorNode(this__107928.root.edit,new_root_array__107931));
this__107928.shift = new_shift__107932;
this__107928.cnt = (this__107928.cnt + 1);
return tcoll;
} else
{var new_root__107933 = cljs.core.tv_push_tail.call(null,tcoll,this__107928.shift,this__107928.root,tail_node__107929);
this__107928.root = new_root__107933;
this__107928.cnt = (this__107928.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__107934 = this;
if(this__107934.root.edit)
{this__107934.root.edit = null;
var len__107935 = (this__107934.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__107936 = cljs.core.make_array.call(null,len__107935);
cljs.core.array_copy.call(null,this__107934.tail,0,trimmed_tail__107936,0,len__107935);
return (new cljs.core.PersistentVector(null,this__107934.cnt,this__107934.shift,this__107934.root,trimmed_tail__107936,null));
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
var this__107938 = this;
var h__5444__auto____107939 = this__107938.__hash;
if(!((h__5444__auto____107939 == null)))
{return h__5444__auto____107939;
} else
{var h__5444__auto____107940 = cljs.core.hash_coll.call(null,coll);
this__107938.__hash = h__5444__auto____107940;
return h__5444__auto____107940;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__107941 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__107942 = this;
var this__107943 = this;
return cljs.core.pr_str.call(null,this__107943);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__107944 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__107945 = this;
return cljs.core._first.call(null,this__107945.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__107946 = this;
var temp__3971__auto____107947 = cljs.core.next.call(null,this__107946.front);
if(temp__3971__auto____107947)
{var f1__107948 = temp__3971__auto____107947;
return (new cljs.core.PersistentQueueSeq(this__107946.meta,f1__107948,this__107946.rear,null));
} else
{if((this__107946.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__107946.meta,this__107946.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__107949 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__107950 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__107950.front,this__107950.rear,this__107950.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__107951 = this;
return this__107951.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__107952 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__107952.meta);
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
var this__107953 = this;
var h__5444__auto____107954 = this__107953.__hash;
if(!((h__5444__auto____107954 == null)))
{return h__5444__auto____107954;
} else
{var h__5444__auto____107955 = cljs.core.hash_coll.call(null,coll);
this__107953.__hash = h__5444__auto____107955;
return h__5444__auto____107955;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__107956 = this;
if(cljs.core.truth_(this__107956.front))
{return (new cljs.core.PersistentQueue(this__107956.meta,(this__107956.count + 1),this__107956.front,cljs.core.conj.call(null,(function (){var or__3824__auto____107957 = this__107956.rear;
if(cljs.core.truth_(or__3824__auto____107957))
{return or__3824__auto____107957;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__107956.meta,(this__107956.count + 1),cljs.core.conj.call(null,this__107956.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__107958 = this;
var this__107959 = this;
return cljs.core.pr_str.call(null,this__107959);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__107960 = this;
var rear__107961 = cljs.core.seq.call(null,this__107960.rear);
if(cljs.core.truth_((function (){var or__3824__auto____107962 = this__107960.front;
if(cljs.core.truth_(or__3824__auto____107962))
{return or__3824__auto____107962;
} else
{return rear__107961;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__107960.front,cljs.core.seq.call(null,rear__107961),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__107963 = this;
return this__107963.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__107964 = this;
return cljs.core._first.call(null,this__107964.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__107965 = this;
if(cljs.core.truth_(this__107965.front))
{var temp__3971__auto____107966 = cljs.core.next.call(null,this__107965.front);
if(temp__3971__auto____107966)
{var f1__107967 = temp__3971__auto____107966;
return (new cljs.core.PersistentQueue(this__107965.meta,(this__107965.count - 1),f1__107967,this__107965.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__107965.meta,(this__107965.count - 1),cljs.core.seq.call(null,this__107965.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__107968 = this;
return cljs.core.first.call(null,this__107968.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__107969 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__107970 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__107971 = this;
return (new cljs.core.PersistentQueue(meta,this__107971.count,this__107971.front,this__107971.rear,this__107971.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__107972 = this;
return this__107972.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__107973 = this;
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
var this__107974 = this;
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
var len__107977 = array.length;
var i__107978 = 0;
while(true){
if((i__107978 < len__107977))
{if((k === (array[i__107978])))
{return i__107978;
} else
{{
var G__107979 = (i__107978 + incr);
i__107978 = G__107979;
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
var a__107982 = cljs.core.hash.call(null,a);
var b__107983 = cljs.core.hash.call(null,b);
if((a__107982 < b__107983))
{return -1;
} else
{if((a__107982 > b__107983))
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
var ks__107991 = m.keys;
var len__107992 = ks__107991.length;
var so__107993 = m.strobj;
var out__107994 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__107995 = 0;
var out__107996 = cljs.core.transient$.call(null,out__107994);
while(true){
if((i__107995 < len__107992))
{var k__107997 = (ks__107991[i__107995]);
{
var G__107998 = (i__107995 + 1);
var G__107999 = cljs.core.assoc_BANG_.call(null,out__107996,k__107997,(so__107993[k__107997]));
i__107995 = G__107998;
out__107996 = G__107999;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__107996,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__108005 = {};
var l__108006 = ks.length;
var i__108007 = 0;
while(true){
if((i__108007 < l__108006))
{var k__108008 = (ks[i__108007]);
(new_obj__108005[k__108008] = (obj[k__108008]));
{
var G__108009 = (i__108007 + 1);
i__108007 = G__108009;
continue;
}
} else
{}
break;
}
return new_obj__108005;
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
var this__108012 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__108013 = this;
var h__5444__auto____108014 = this__108013.__hash;
if(!((h__5444__auto____108014 == null)))
{return h__5444__auto____108014;
} else
{var h__5444__auto____108015 = cljs.core.hash_imap.call(null,coll);
this__108013.__hash = h__5444__auto____108015;
return h__5444__auto____108015;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__108016 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__108017 = this;
if((function (){var and__3822__auto____108018 = goog.isString(k);
if(and__3822__auto____108018)
{return !((cljs.core.scan_array.call(null,1,k,this__108017.keys) == null));
} else
{return and__3822__auto____108018;
}
})())
{return (this__108017.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__108019 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____108020 = (this__108019.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____108020)
{return or__3824__auto____108020;
} else
{return (this__108019.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__108019.keys) == null)))
{var new_strobj__108021 = cljs.core.obj_clone.call(null,this__108019.strobj,this__108019.keys);
(new_strobj__108021[k] = v);
return (new cljs.core.ObjMap(this__108019.meta,this__108019.keys,new_strobj__108021,(this__108019.update_count + 1),null));
} else
{var new_strobj__108022 = cljs.core.obj_clone.call(null,this__108019.strobj,this__108019.keys);
var new_keys__108023 = this__108019.keys.slice();
(new_strobj__108022[k] = v);
new_keys__108023.push(k);
return (new cljs.core.ObjMap(this__108019.meta,new_keys__108023,new_strobj__108022,(this__108019.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__108024 = this;
if((function (){var and__3822__auto____108025 = goog.isString(k);
if(and__3822__auto____108025)
{return !((cljs.core.scan_array.call(null,1,k,this__108024.keys) == null));
} else
{return and__3822__auto____108025;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__108047 = null;
var G__108047__2 = (function (this_sym108026,k){
var this__108028 = this;
var this_sym108026__108029 = this;
var coll__108030 = this_sym108026__108029;
return coll__108030.cljs$core$ILookup$_lookup$arity$2(coll__108030,k);
});
var G__108047__3 = (function (this_sym108027,k,not_found){
var this__108028 = this;
var this_sym108027__108031 = this;
var coll__108032 = this_sym108027__108031;
return coll__108032.cljs$core$ILookup$_lookup$arity$3(coll__108032,k,not_found);
});
G__108047 = function(this_sym108027,k,not_found){
switch(arguments.length){
case 2:
return G__108047__2.call(this,this_sym108027,k);
case 3:
return G__108047__3.call(this,this_sym108027,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108047;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym108010,args108011){
var this__108033 = this;
return this_sym108010.call.apply(this_sym108010,[this_sym108010].concat(args108011.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__108034 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__108035 = this;
var this__108036 = this;
return cljs.core.pr_str.call(null,this__108036);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108037 = this;
if((this__108037.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__108000_SHARP_){
return cljs.core.vector.call(null,p1__108000_SHARP_,(this__108037.strobj[p1__108000_SHARP_]));
}),this__108037.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108038 = this;
return this__108038.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108039 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108040 = this;
return (new cljs.core.ObjMap(meta,this__108040.keys,this__108040.strobj,this__108040.update_count,this__108040.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108041 = this;
return this__108041.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108042 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__108042.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__108043 = this;
if((function (){var and__3822__auto____108044 = goog.isString(k);
if(and__3822__auto____108044)
{return !((cljs.core.scan_array.call(null,1,k,this__108043.keys) == null));
} else
{return and__3822__auto____108044;
}
})())
{var new_keys__108045 = this__108043.keys.slice();
var new_strobj__108046 = cljs.core.obj_clone.call(null,this__108043.strobj,this__108043.keys);
new_keys__108045.splice(cljs.core.scan_array.call(null,1,k,new_keys__108045),1);
cljs.core.js_delete.call(null,new_strobj__108046,k);
return (new cljs.core.ObjMap(this__108043.meta,new_keys__108045,new_strobj__108046,(this__108043.update_count + 1),null));
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
var this__108051 = this;
var h__5444__auto____108052 = this__108051.__hash;
if(!((h__5444__auto____108052 == null)))
{return h__5444__auto____108052;
} else
{var h__5444__auto____108053 = cljs.core.hash_imap.call(null,coll);
this__108051.__hash = h__5444__auto____108053;
return h__5444__auto____108053;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__108054 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__108055 = this;
var bucket__108056 = (this__108055.hashobj[cljs.core.hash.call(null,k)]);
var i__108057 = (cljs.core.truth_(bucket__108056)?cljs.core.scan_array.call(null,2,k,bucket__108056):null);
if(cljs.core.truth_(i__108057))
{return (bucket__108056[(i__108057 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__108058 = this;
var h__108059 = cljs.core.hash.call(null,k);
var bucket__108060 = (this__108058.hashobj[h__108059]);
if(cljs.core.truth_(bucket__108060))
{var new_bucket__108061 = bucket__108060.slice();
var new_hashobj__108062 = goog.object.clone(this__108058.hashobj);
(new_hashobj__108062[h__108059] = new_bucket__108061);
var temp__3971__auto____108063 = cljs.core.scan_array.call(null,2,k,new_bucket__108061);
if(cljs.core.truth_(temp__3971__auto____108063))
{var i__108064 = temp__3971__auto____108063;
(new_bucket__108061[(i__108064 + 1)] = v);
return (new cljs.core.HashMap(this__108058.meta,this__108058.count,new_hashobj__108062,null));
} else
{new_bucket__108061.push(k,v);
return (new cljs.core.HashMap(this__108058.meta,(this__108058.count + 1),new_hashobj__108062,null));
}
} else
{var new_hashobj__108065 = goog.object.clone(this__108058.hashobj);
(new_hashobj__108065[h__108059] = [k,v]);
return (new cljs.core.HashMap(this__108058.meta,(this__108058.count + 1),new_hashobj__108065,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__108066 = this;
var bucket__108067 = (this__108066.hashobj[cljs.core.hash.call(null,k)]);
var i__108068 = (cljs.core.truth_(bucket__108067)?cljs.core.scan_array.call(null,2,k,bucket__108067):null);
if(cljs.core.truth_(i__108068))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__108093 = null;
var G__108093__2 = (function (this_sym108069,k){
var this__108071 = this;
var this_sym108069__108072 = this;
var coll__108073 = this_sym108069__108072;
return coll__108073.cljs$core$ILookup$_lookup$arity$2(coll__108073,k);
});
var G__108093__3 = (function (this_sym108070,k,not_found){
var this__108071 = this;
var this_sym108070__108074 = this;
var coll__108075 = this_sym108070__108074;
return coll__108075.cljs$core$ILookup$_lookup$arity$3(coll__108075,k,not_found);
});
G__108093 = function(this_sym108070,k,not_found){
switch(arguments.length){
case 2:
return G__108093__2.call(this,this_sym108070,k);
case 3:
return G__108093__3.call(this,this_sym108070,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108093;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym108049,args108050){
var this__108076 = this;
return this_sym108049.call.apply(this_sym108049,[this_sym108049].concat(args108050.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__108077 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__108078 = this;
var this__108079 = this;
return cljs.core.pr_str.call(null,this__108079);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108080 = this;
if((this__108080.count > 0))
{var hashes__108081 = cljs.core.js_keys.call(null,this__108080.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__108048_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__108080.hashobj[p1__108048_SHARP_])));
}),hashes__108081);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108082 = this;
return this__108082.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108083 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108084 = this;
return (new cljs.core.HashMap(meta,this__108084.count,this__108084.hashobj,this__108084.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108085 = this;
return this__108085.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108086 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__108086.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__108087 = this;
var h__108088 = cljs.core.hash.call(null,k);
var bucket__108089 = (this__108087.hashobj[h__108088]);
var i__108090 = (cljs.core.truth_(bucket__108089)?cljs.core.scan_array.call(null,2,k,bucket__108089):null);
if(cljs.core.not.call(null,i__108090))
{return coll;
} else
{var new_hashobj__108091 = goog.object.clone(this__108087.hashobj);
if((3 > bucket__108089.length))
{cljs.core.js_delete.call(null,new_hashobj__108091,h__108088);
} else
{var new_bucket__108092 = bucket__108089.slice();
new_bucket__108092.splice(i__108090,2);
(new_hashobj__108091[h__108088] = new_bucket__108092);
}
return (new cljs.core.HashMap(this__108087.meta,(this__108087.count - 1),new_hashobj__108091,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__108094 = ks.length;
var i__108095 = 0;
var out__108096 = cljs.core.HashMap.EMPTY;
while(true){
if((i__108095 < len__108094))
{{
var G__108097 = (i__108095 + 1);
var G__108098 = cljs.core.assoc.call(null,out__108096,(ks[i__108095]),(vs[i__108095]));
i__108095 = G__108097;
out__108096 = G__108098;
continue;
}
} else
{return out__108096;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__108102 = m.arr;
var len__108103 = arr__108102.length;
var i__108104 = 0;
while(true){
if((len__108103 <= i__108104))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__108102[i__108104]),k))
{return i__108104;
} else
{if("\uFDD0'else")
{{
var G__108105 = (i__108104 + 2);
i__108104 = G__108105;
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
var this__108108 = this;
return (new cljs.core.TransientArrayMap({},this__108108.arr.length,this__108108.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__108109 = this;
var h__5444__auto____108110 = this__108109.__hash;
if(!((h__5444__auto____108110 == null)))
{return h__5444__auto____108110;
} else
{var h__5444__auto____108111 = cljs.core.hash_imap.call(null,coll);
this__108109.__hash = h__5444__auto____108111;
return h__5444__auto____108111;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__108112 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__108113 = this;
var idx__108114 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__108114 === -1))
{return not_found;
} else
{return (this__108113.arr[(idx__108114 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__108115 = this;
var idx__108116 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__108116 === -1))
{if((this__108115.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__108115.meta,(this__108115.cnt + 1),(function (){var G__108117__108118 = this__108115.arr.slice();
G__108117__108118.push(k);
G__108117__108118.push(v);
return G__108117__108118;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__108115.arr[(idx__108116 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__108115.meta,this__108115.cnt,(function (){var G__108119__108120 = this__108115.arr.slice();
(G__108119__108120[(idx__108116 + 1)] = v);
return G__108119__108120;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__108121 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__108153 = null;
var G__108153__2 = (function (this_sym108122,k){
var this__108124 = this;
var this_sym108122__108125 = this;
var coll__108126 = this_sym108122__108125;
return coll__108126.cljs$core$ILookup$_lookup$arity$2(coll__108126,k);
});
var G__108153__3 = (function (this_sym108123,k,not_found){
var this__108124 = this;
var this_sym108123__108127 = this;
var coll__108128 = this_sym108123__108127;
return coll__108128.cljs$core$ILookup$_lookup$arity$3(coll__108128,k,not_found);
});
G__108153 = function(this_sym108123,k,not_found){
switch(arguments.length){
case 2:
return G__108153__2.call(this,this_sym108123,k);
case 3:
return G__108153__3.call(this,this_sym108123,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108153;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym108106,args108107){
var this__108129 = this;
return this_sym108106.call.apply(this_sym108106,[this_sym108106].concat(args108107.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__108130 = this;
var len__108131 = this__108130.arr.length;
var i__108132 = 0;
var init__108133 = init;
while(true){
if((i__108132 < len__108131))
{var init__108134 = f.call(null,init__108133,(this__108130.arr[i__108132]),(this__108130.arr[(i__108132 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__108134))
{return cljs.core.deref.call(null,init__108134);
} else
{{
var G__108154 = (i__108132 + 2);
var G__108155 = init__108134;
i__108132 = G__108154;
init__108133 = G__108155;
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
var this__108135 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__108136 = this;
var this__108137 = this;
return cljs.core.pr_str.call(null,this__108137);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108138 = this;
if((this__108138.cnt > 0))
{var len__108139 = this__108138.arr.length;
var array_map_seq__108140 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__108139))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__108138.arr[i]),(this__108138.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__108140.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108141 = this;
return this__108141.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108142 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108143 = this;
return (new cljs.core.PersistentArrayMap(meta,this__108143.cnt,this__108143.arr,this__108143.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108144 = this;
return this__108144.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108145 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__108145.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__108146 = this;
var idx__108147 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__108147 >= 0))
{var len__108148 = this__108146.arr.length;
var new_len__108149 = (len__108148 - 2);
if((new_len__108149 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__108150 = cljs.core.make_array.call(null,new_len__108149);
var s__108151 = 0;
var d__108152 = 0;
while(true){
if((s__108151 >= len__108148))
{return (new cljs.core.PersistentArrayMap(this__108146.meta,(this__108146.cnt - 1),new_arr__108150,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__108146.arr[s__108151])))
{{
var G__108156 = (s__108151 + 2);
var G__108157 = d__108152;
s__108151 = G__108156;
d__108152 = G__108157;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__108150[d__108152] = (this__108146.arr[s__108151]));
(new_arr__108150[(d__108152 + 1)] = (this__108146.arr[(s__108151 + 1)]));
{
var G__108158 = (s__108151 + 2);
var G__108159 = (d__108152 + 2);
s__108151 = G__108158;
d__108152 = G__108159;
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
var len__108160 = cljs.core.count.call(null,ks);
var i__108161 = 0;
var out__108162 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__108161 < len__108160))
{{
var G__108163 = (i__108161 + 1);
var G__108164 = cljs.core.assoc_BANG_.call(null,out__108162,(ks[i__108161]),(vs[i__108161]));
i__108161 = G__108163;
out__108162 = G__108164;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__108162);
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
var this__108165 = this;
if(cljs.core.truth_(this__108165.editable_QMARK_))
{var idx__108166 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__108166 >= 0))
{(this__108165.arr[idx__108166] = (this__108165.arr[(this__108165.len - 2)]));
(this__108165.arr[(idx__108166 + 1)] = (this__108165.arr[(this__108165.len - 1)]));
var G__108167__108168 = this__108165.arr;
G__108167__108168.pop();
G__108167__108168.pop();
G__108167__108168;
this__108165.len = (this__108165.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__108169 = this;
if(cljs.core.truth_(this__108169.editable_QMARK_))
{var idx__108170 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__108170 === -1))
{if(((this__108169.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__108169.len = (this__108169.len + 2);
this__108169.arr.push(key);
this__108169.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__108169.len,this__108169.arr),key,val);
}
} else
{if((val === (this__108169.arr[(idx__108170 + 1)])))
{return tcoll;
} else
{(this__108169.arr[(idx__108170 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__108171 = this;
if(cljs.core.truth_(this__108171.editable_QMARK_))
{if((function (){var G__108172__108173 = o;
if(G__108172__108173)
{if((function (){var or__3824__auto____108174 = (G__108172__108173.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____108174)
{return or__3824__auto____108174;
} else
{return G__108172__108173.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__108172__108173.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__108172__108173);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__108172__108173);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__108175 = cljs.core.seq.call(null,o);
var tcoll__108176 = tcoll;
while(true){
var temp__3971__auto____108177 = cljs.core.first.call(null,es__108175);
if(cljs.core.truth_(temp__3971__auto____108177))
{var e__108178 = temp__3971__auto____108177;
{
var G__108184 = cljs.core.next.call(null,es__108175);
var G__108185 = tcoll__108176.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__108176,cljs.core.key.call(null,e__108178),cljs.core.val.call(null,e__108178));
es__108175 = G__108184;
tcoll__108176 = G__108185;
continue;
}
} else
{return tcoll__108176;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__108179 = this;
if(cljs.core.truth_(this__108179.editable_QMARK_))
{this__108179.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__108179.len,2),this__108179.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__108180 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__108181 = this;
if(cljs.core.truth_(this__108181.editable_QMARK_))
{var idx__108182 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__108182 === -1))
{return not_found;
} else
{return (this__108181.arr[(idx__108182 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__108183 = this;
if(cljs.core.truth_(this__108183.editable_QMARK_))
{return cljs.core.quot.call(null,this__108183.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__108188 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__108189 = 0;
while(true){
if((i__108189 < len))
{{
var G__108190 = cljs.core.assoc_BANG_.call(null,out__108188,(arr[i__108189]),(arr[(i__108189 + 1)]));
var G__108191 = (i__108189 + 2);
out__108188 = G__108190;
i__108189 = G__108191;
continue;
}
} else
{return out__108188;
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
var G__108196__108197 = arr.slice();
(G__108196__108197[i] = a);
return G__108196__108197;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__108198__108199 = arr.slice();
(G__108198__108199[i] = a);
(G__108198__108199[j] = b);
return G__108198__108199;
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
var new_arr__108201 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__108201,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__108201,(2 * i),(new_arr__108201.length - (2 * i)));
return new_arr__108201;
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
var editable__108204 = inode.ensure_editable(edit);
(editable__108204.arr[i] = a);
return editable__108204;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__108205 = inode.ensure_editable(edit);
(editable__108205.arr[i] = a);
(editable__108205.arr[j] = b);
return editable__108205;
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
var len__108212 = arr.length;
var i__108213 = 0;
var init__108214 = init;
while(true){
if((i__108213 < len__108212))
{var init__108217 = (function (){var k__108215 = (arr[i__108213]);
if(!((k__108215 == null)))
{return f.call(null,init__108214,k__108215,(arr[(i__108213 + 1)]));
} else
{var node__108216 = (arr[(i__108213 + 1)]);
if(!((node__108216 == null)))
{return node__108216.kv_reduce(f,init__108214);
} else
{return init__108214;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__108217))
{return cljs.core.deref.call(null,init__108217);
} else
{{
var G__108218 = (i__108213 + 2);
var G__108219 = init__108217;
i__108213 = G__108218;
init__108214 = G__108219;
continue;
}
}
} else
{return init__108214;
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
var this__108220 = this;
var inode__108221 = this;
if((this__108220.bitmap === bit))
{return null;
} else
{var editable__108222 = inode__108221.ensure_editable(e);
var earr__108223 = editable__108222.arr;
var len__108224 = earr__108223.length;
editable__108222.bitmap = (bit ^ editable__108222.bitmap);
cljs.core.array_copy.call(null,earr__108223,(2 * (i + 1)),earr__108223,(2 * i),(len__108224 - (2 * (i + 1))));
(earr__108223[(len__108224 - 2)] = null);
(earr__108223[(len__108224 - 1)] = null);
return editable__108222;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__108225 = this;
var inode__108226 = this;
var bit__108227 = (1 << ((hash >>> shift) & 0x01f));
var idx__108228 = cljs.core.bitmap_indexed_node_index.call(null,this__108225.bitmap,bit__108227);
if(((this__108225.bitmap & bit__108227) === 0))
{var n__108229 = cljs.core.bit_count.call(null,this__108225.bitmap);
if(((2 * n__108229) < this__108225.arr.length))
{var editable__108230 = inode__108226.ensure_editable(edit);
var earr__108231 = editable__108230.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__108231,(2 * idx__108228),earr__108231,(2 * (idx__108228 + 1)),(2 * (n__108229 - idx__108228)));
(earr__108231[(2 * idx__108228)] = key);
(earr__108231[((2 * idx__108228) + 1)] = val);
editable__108230.bitmap = (editable__108230.bitmap | bit__108227);
return editable__108230;
} else
{if((n__108229 >= 16))
{var nodes__108232 = cljs.core.make_array.call(null,32);
var jdx__108233 = ((hash >>> shift) & 0x01f);
(nodes__108232[jdx__108233] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__108234 = 0;
var j__108235 = 0;
while(true){
if((i__108234 < 32))
{if((((this__108225.bitmap >>> i__108234) & 1) === 0))
{{
var G__108288 = (i__108234 + 1);
var G__108289 = j__108235;
i__108234 = G__108288;
j__108235 = G__108289;
continue;
}
} else
{(nodes__108232[i__108234] = ((!(((this__108225.arr[j__108235]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__108225.arr[j__108235])),(this__108225.arr[j__108235]),(this__108225.arr[(j__108235 + 1)]),added_leaf_QMARK_):(this__108225.arr[(j__108235 + 1)])));
{
var G__108290 = (i__108234 + 1);
var G__108291 = (j__108235 + 2);
i__108234 = G__108290;
j__108235 = G__108291;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__108229 + 1),nodes__108232));
} else
{if("\uFDD0'else")
{var new_arr__108236 = cljs.core.make_array.call(null,(2 * (n__108229 + 4)));
cljs.core.array_copy.call(null,this__108225.arr,0,new_arr__108236,0,(2 * idx__108228));
(new_arr__108236[(2 * idx__108228)] = key);
(new_arr__108236[((2 * idx__108228) + 1)] = val);
cljs.core.array_copy.call(null,this__108225.arr,(2 * idx__108228),new_arr__108236,(2 * (idx__108228 + 1)),(2 * (n__108229 - idx__108228)));
added_leaf_QMARK_.val = true;
var editable__108237 = inode__108226.ensure_editable(edit);
editable__108237.arr = new_arr__108236;
editable__108237.bitmap = (editable__108237.bitmap | bit__108227);
return editable__108237;
} else
{return null;
}
}
}
} else
{var key_or_nil__108238 = (this__108225.arr[(2 * idx__108228)]);
var val_or_node__108239 = (this__108225.arr[((2 * idx__108228) + 1)]);
if((key_or_nil__108238 == null))
{var n__108240 = val_or_node__108239.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__108240 === val_or_node__108239))
{return inode__108226;
} else
{return cljs.core.edit_and_set.call(null,inode__108226,edit,((2 * idx__108228) + 1),n__108240);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__108238))
{if((val === val_or_node__108239))
{return inode__108226;
} else
{return cljs.core.edit_and_set.call(null,inode__108226,edit,((2 * idx__108228) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__108226,edit,(2 * idx__108228),null,((2 * idx__108228) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__108238,val_or_node__108239,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__108241 = this;
var inode__108242 = this;
return cljs.core.create_inode_seq.call(null,this__108241.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__108243 = this;
var inode__108244 = this;
var bit__108245 = (1 << ((hash >>> shift) & 0x01f));
if(((this__108243.bitmap & bit__108245) === 0))
{return inode__108244;
} else
{var idx__108246 = cljs.core.bitmap_indexed_node_index.call(null,this__108243.bitmap,bit__108245);
var key_or_nil__108247 = (this__108243.arr[(2 * idx__108246)]);
var val_or_node__108248 = (this__108243.arr[((2 * idx__108246) + 1)]);
if((key_or_nil__108247 == null))
{var n__108249 = val_or_node__108248.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__108249 === val_or_node__108248))
{return inode__108244;
} else
{if(!((n__108249 == null)))
{return cljs.core.edit_and_set.call(null,inode__108244,edit,((2 * idx__108246) + 1),n__108249);
} else
{if((this__108243.bitmap === bit__108245))
{return null;
} else
{if("\uFDD0'else")
{return inode__108244.edit_and_remove_pair(edit,bit__108245,idx__108246);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__108247))
{(removed_leaf_QMARK_[0] = true);
return inode__108244.edit_and_remove_pair(edit,bit__108245,idx__108246);
} else
{if("\uFDD0'else")
{return inode__108244;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__108250 = this;
var inode__108251 = this;
if((e === this__108250.edit))
{return inode__108251;
} else
{var n__108252 = cljs.core.bit_count.call(null,this__108250.bitmap);
var new_arr__108253 = cljs.core.make_array.call(null,(((n__108252 < 0))?4:(2 * (n__108252 + 1))));
cljs.core.array_copy.call(null,this__108250.arr,0,new_arr__108253,0,(2 * n__108252));
return (new cljs.core.BitmapIndexedNode(e,this__108250.bitmap,new_arr__108253));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__108254 = this;
var inode__108255 = this;
return cljs.core.inode_kv_reduce.call(null,this__108254.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__108256 = this;
var inode__108257 = this;
var bit__108258 = (1 << ((hash >>> shift) & 0x01f));
if(((this__108256.bitmap & bit__108258) === 0))
{return not_found;
} else
{var idx__108259 = cljs.core.bitmap_indexed_node_index.call(null,this__108256.bitmap,bit__108258);
var key_or_nil__108260 = (this__108256.arr[(2 * idx__108259)]);
var val_or_node__108261 = (this__108256.arr[((2 * idx__108259) + 1)]);
if((key_or_nil__108260 == null))
{return val_or_node__108261.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__108260))
{return cljs.core.PersistentVector.fromArray([key_or_nil__108260,val_or_node__108261], true);
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
var this__108262 = this;
var inode__108263 = this;
var bit__108264 = (1 << ((hash >>> shift) & 0x01f));
if(((this__108262.bitmap & bit__108264) === 0))
{return inode__108263;
} else
{var idx__108265 = cljs.core.bitmap_indexed_node_index.call(null,this__108262.bitmap,bit__108264);
var key_or_nil__108266 = (this__108262.arr[(2 * idx__108265)]);
var val_or_node__108267 = (this__108262.arr[((2 * idx__108265) + 1)]);
if((key_or_nil__108266 == null))
{var n__108268 = val_or_node__108267.inode_without((shift + 5),hash,key);
if((n__108268 === val_or_node__108267))
{return inode__108263;
} else
{if(!((n__108268 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__108262.bitmap,cljs.core.clone_and_set.call(null,this__108262.arr,((2 * idx__108265) + 1),n__108268)));
} else
{if((this__108262.bitmap === bit__108264))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__108262.bitmap ^ bit__108264),cljs.core.remove_pair.call(null,this__108262.arr,idx__108265)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__108266))
{return (new cljs.core.BitmapIndexedNode(null,(this__108262.bitmap ^ bit__108264),cljs.core.remove_pair.call(null,this__108262.arr,idx__108265)));
} else
{if("\uFDD0'else")
{return inode__108263;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__108269 = this;
var inode__108270 = this;
var bit__108271 = (1 << ((hash >>> shift) & 0x01f));
var idx__108272 = cljs.core.bitmap_indexed_node_index.call(null,this__108269.bitmap,bit__108271);
if(((this__108269.bitmap & bit__108271) === 0))
{var n__108273 = cljs.core.bit_count.call(null,this__108269.bitmap);
if((n__108273 >= 16))
{var nodes__108274 = cljs.core.make_array.call(null,32);
var jdx__108275 = ((hash >>> shift) & 0x01f);
(nodes__108274[jdx__108275] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__108276 = 0;
var j__108277 = 0;
while(true){
if((i__108276 < 32))
{if((((this__108269.bitmap >>> i__108276) & 1) === 0))
{{
var G__108292 = (i__108276 + 1);
var G__108293 = j__108277;
i__108276 = G__108292;
j__108277 = G__108293;
continue;
}
} else
{(nodes__108274[i__108276] = ((!(((this__108269.arr[j__108277]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__108269.arr[j__108277])),(this__108269.arr[j__108277]),(this__108269.arr[(j__108277 + 1)]),added_leaf_QMARK_):(this__108269.arr[(j__108277 + 1)])));
{
var G__108294 = (i__108276 + 1);
var G__108295 = (j__108277 + 2);
i__108276 = G__108294;
j__108277 = G__108295;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__108273 + 1),nodes__108274));
} else
{var new_arr__108278 = cljs.core.make_array.call(null,(2 * (n__108273 + 1)));
cljs.core.array_copy.call(null,this__108269.arr,0,new_arr__108278,0,(2 * idx__108272));
(new_arr__108278[(2 * idx__108272)] = key);
(new_arr__108278[((2 * idx__108272) + 1)] = val);
cljs.core.array_copy.call(null,this__108269.arr,(2 * idx__108272),new_arr__108278,(2 * (idx__108272 + 1)),(2 * (n__108273 - idx__108272)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__108269.bitmap | bit__108271),new_arr__108278));
}
} else
{var key_or_nil__108279 = (this__108269.arr[(2 * idx__108272)]);
var val_or_node__108280 = (this__108269.arr[((2 * idx__108272) + 1)]);
if((key_or_nil__108279 == null))
{var n__108281 = val_or_node__108280.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__108281 === val_or_node__108280))
{return inode__108270;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__108269.bitmap,cljs.core.clone_and_set.call(null,this__108269.arr,((2 * idx__108272) + 1),n__108281)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__108279))
{if((val === val_or_node__108280))
{return inode__108270;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__108269.bitmap,cljs.core.clone_and_set.call(null,this__108269.arr,((2 * idx__108272) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__108269.bitmap,cljs.core.clone_and_set.call(null,this__108269.arr,(2 * idx__108272),null,((2 * idx__108272) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__108279,val_or_node__108280,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__108282 = this;
var inode__108283 = this;
var bit__108284 = (1 << ((hash >>> shift) & 0x01f));
if(((this__108282.bitmap & bit__108284) === 0))
{return not_found;
} else
{var idx__108285 = cljs.core.bitmap_indexed_node_index.call(null,this__108282.bitmap,bit__108284);
var key_or_nil__108286 = (this__108282.arr[(2 * idx__108285)]);
var val_or_node__108287 = (this__108282.arr[((2 * idx__108285) + 1)]);
if((key_or_nil__108286 == null))
{return val_or_node__108287.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__108286))
{return val_or_node__108287;
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
var arr__108303 = array_node.arr;
var len__108304 = (2 * (array_node.cnt - 1));
var new_arr__108305 = cljs.core.make_array.call(null,len__108304);
var i__108306 = 0;
var j__108307 = 1;
var bitmap__108308 = 0;
while(true){
if((i__108306 < len__108304))
{if((function (){var and__3822__auto____108309 = !((i__108306 === idx));
if(and__3822__auto____108309)
{return !(((arr__108303[i__108306]) == null));
} else
{return and__3822__auto____108309;
}
})())
{(new_arr__108305[j__108307] = (arr__108303[i__108306]));
{
var G__108310 = (i__108306 + 1);
var G__108311 = (j__108307 + 2);
var G__108312 = (bitmap__108308 | (1 << i__108306));
i__108306 = G__108310;
j__108307 = G__108311;
bitmap__108308 = G__108312;
continue;
}
} else
{{
var G__108313 = (i__108306 + 1);
var G__108314 = j__108307;
var G__108315 = bitmap__108308;
i__108306 = G__108313;
j__108307 = G__108314;
bitmap__108308 = G__108315;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__108308,new_arr__108305));
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
var this__108316 = this;
var inode__108317 = this;
var idx__108318 = ((hash >>> shift) & 0x01f);
var node__108319 = (this__108316.arr[idx__108318]);
if((node__108319 == null))
{var editable__108320 = cljs.core.edit_and_set.call(null,inode__108317,edit,idx__108318,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__108320.cnt = (editable__108320.cnt + 1);
return editable__108320;
} else
{var n__108321 = node__108319.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__108321 === node__108319))
{return inode__108317;
} else
{return cljs.core.edit_and_set.call(null,inode__108317,edit,idx__108318,n__108321);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__108322 = this;
var inode__108323 = this;
return cljs.core.create_array_node_seq.call(null,this__108322.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__108324 = this;
var inode__108325 = this;
var idx__108326 = ((hash >>> shift) & 0x01f);
var node__108327 = (this__108324.arr[idx__108326]);
if((node__108327 == null))
{return inode__108325;
} else
{var n__108328 = node__108327.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__108328 === node__108327))
{return inode__108325;
} else
{if((n__108328 == null))
{if((this__108324.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__108325,edit,idx__108326);
} else
{var editable__108329 = cljs.core.edit_and_set.call(null,inode__108325,edit,idx__108326,n__108328);
editable__108329.cnt = (editable__108329.cnt - 1);
return editable__108329;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__108325,edit,idx__108326,n__108328);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__108330 = this;
var inode__108331 = this;
if((e === this__108330.edit))
{return inode__108331;
} else
{return (new cljs.core.ArrayNode(e,this__108330.cnt,this__108330.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__108332 = this;
var inode__108333 = this;
var len__108334 = this__108332.arr.length;
var i__108335 = 0;
var init__108336 = init;
while(true){
if((i__108335 < len__108334))
{var node__108337 = (this__108332.arr[i__108335]);
if(!((node__108337 == null)))
{var init__108338 = node__108337.kv_reduce(f,init__108336);
if(cljs.core.reduced_QMARK_.call(null,init__108338))
{return cljs.core.deref.call(null,init__108338);
} else
{{
var G__108357 = (i__108335 + 1);
var G__108358 = init__108338;
i__108335 = G__108357;
init__108336 = G__108358;
continue;
}
}
} else
{return null;
}
} else
{return init__108336;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__108339 = this;
var inode__108340 = this;
var idx__108341 = ((hash >>> shift) & 0x01f);
var node__108342 = (this__108339.arr[idx__108341]);
if(!((node__108342 == null)))
{return node__108342.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__108343 = this;
var inode__108344 = this;
var idx__108345 = ((hash >>> shift) & 0x01f);
var node__108346 = (this__108343.arr[idx__108345]);
if(!((node__108346 == null)))
{var n__108347 = node__108346.inode_without((shift + 5),hash,key);
if((n__108347 === node__108346))
{return inode__108344;
} else
{if((n__108347 == null))
{if((this__108343.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__108344,null,idx__108345);
} else
{return (new cljs.core.ArrayNode(null,(this__108343.cnt - 1),cljs.core.clone_and_set.call(null,this__108343.arr,idx__108345,n__108347)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__108343.cnt,cljs.core.clone_and_set.call(null,this__108343.arr,idx__108345,n__108347)));
} else
{return null;
}
}
}
} else
{return inode__108344;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__108348 = this;
var inode__108349 = this;
var idx__108350 = ((hash >>> shift) & 0x01f);
var node__108351 = (this__108348.arr[idx__108350]);
if((node__108351 == null))
{return (new cljs.core.ArrayNode(null,(this__108348.cnt + 1),cljs.core.clone_and_set.call(null,this__108348.arr,idx__108350,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__108352 = node__108351.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__108352 === node__108351))
{return inode__108349;
} else
{return (new cljs.core.ArrayNode(null,this__108348.cnt,cljs.core.clone_and_set.call(null,this__108348.arr,idx__108350,n__108352)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__108353 = this;
var inode__108354 = this;
var idx__108355 = ((hash >>> shift) & 0x01f);
var node__108356 = (this__108353.arr[idx__108355]);
if(!((node__108356 == null)))
{return node__108356.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__108361 = (2 * cnt);
var i__108362 = 0;
while(true){
if((i__108362 < lim__108361))
{if(cljs.core.key_test.call(null,key,(arr[i__108362])))
{return i__108362;
} else
{{
var G__108363 = (i__108362 + 2);
i__108362 = G__108363;
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
var this__108364 = this;
var inode__108365 = this;
if((hash === this__108364.collision_hash))
{var idx__108366 = cljs.core.hash_collision_node_find_index.call(null,this__108364.arr,this__108364.cnt,key);
if((idx__108366 === -1))
{if((this__108364.arr.length > (2 * this__108364.cnt)))
{var editable__108367 = cljs.core.edit_and_set.call(null,inode__108365,edit,(2 * this__108364.cnt),key,((2 * this__108364.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__108367.cnt = (editable__108367.cnt + 1);
return editable__108367;
} else
{var len__108368 = this__108364.arr.length;
var new_arr__108369 = cljs.core.make_array.call(null,(len__108368 + 2));
cljs.core.array_copy.call(null,this__108364.arr,0,new_arr__108369,0,len__108368);
(new_arr__108369[len__108368] = key);
(new_arr__108369[(len__108368 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__108365.ensure_editable_array(edit,(this__108364.cnt + 1),new_arr__108369);
}
} else
{if(((this__108364.arr[(idx__108366 + 1)]) === val))
{return inode__108365;
} else
{return cljs.core.edit_and_set.call(null,inode__108365,edit,(idx__108366 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__108364.collision_hash >>> shift) & 0x01f)),[null,inode__108365,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__108370 = this;
var inode__108371 = this;
return cljs.core.create_inode_seq.call(null,this__108370.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__108372 = this;
var inode__108373 = this;
var idx__108374 = cljs.core.hash_collision_node_find_index.call(null,this__108372.arr,this__108372.cnt,key);
if((idx__108374 === -1))
{return inode__108373;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__108372.cnt === 1))
{return null;
} else
{var editable__108375 = inode__108373.ensure_editable(edit);
var earr__108376 = editable__108375.arr;
(earr__108376[idx__108374] = (earr__108376[((2 * this__108372.cnt) - 2)]));
(earr__108376[(idx__108374 + 1)] = (earr__108376[((2 * this__108372.cnt) - 1)]));
(earr__108376[((2 * this__108372.cnt) - 1)] = null);
(earr__108376[((2 * this__108372.cnt) - 2)] = null);
editable__108375.cnt = (editable__108375.cnt - 1);
return editable__108375;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__108377 = this;
var inode__108378 = this;
if((e === this__108377.edit))
{return inode__108378;
} else
{var new_arr__108379 = cljs.core.make_array.call(null,(2 * (this__108377.cnt + 1)));
cljs.core.array_copy.call(null,this__108377.arr,0,new_arr__108379,0,(2 * this__108377.cnt));
return (new cljs.core.HashCollisionNode(e,this__108377.collision_hash,this__108377.cnt,new_arr__108379));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__108380 = this;
var inode__108381 = this;
return cljs.core.inode_kv_reduce.call(null,this__108380.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__108382 = this;
var inode__108383 = this;
var idx__108384 = cljs.core.hash_collision_node_find_index.call(null,this__108382.arr,this__108382.cnt,key);
if((idx__108384 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__108382.arr[idx__108384])))
{return cljs.core.PersistentVector.fromArray([(this__108382.arr[idx__108384]),(this__108382.arr[(idx__108384 + 1)])], true);
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
var this__108385 = this;
var inode__108386 = this;
var idx__108387 = cljs.core.hash_collision_node_find_index.call(null,this__108385.arr,this__108385.cnt,key);
if((idx__108387 === -1))
{return inode__108386;
} else
{if((this__108385.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__108385.collision_hash,(this__108385.cnt - 1),cljs.core.remove_pair.call(null,this__108385.arr,cljs.core.quot.call(null,idx__108387,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__108388 = this;
var inode__108389 = this;
if((hash === this__108388.collision_hash))
{var idx__108390 = cljs.core.hash_collision_node_find_index.call(null,this__108388.arr,this__108388.cnt,key);
if((idx__108390 === -1))
{var len__108391 = this__108388.arr.length;
var new_arr__108392 = cljs.core.make_array.call(null,(len__108391 + 2));
cljs.core.array_copy.call(null,this__108388.arr,0,new_arr__108392,0,len__108391);
(new_arr__108392[len__108391] = key);
(new_arr__108392[(len__108391 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__108388.collision_hash,(this__108388.cnt + 1),new_arr__108392));
} else
{if(cljs.core._EQ_.call(null,(this__108388.arr[idx__108390]),val))
{return inode__108389;
} else
{return (new cljs.core.HashCollisionNode(null,this__108388.collision_hash,this__108388.cnt,cljs.core.clone_and_set.call(null,this__108388.arr,(idx__108390 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__108388.collision_hash >>> shift) & 0x01f)),[null,inode__108389])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__108393 = this;
var inode__108394 = this;
var idx__108395 = cljs.core.hash_collision_node_find_index.call(null,this__108393.arr,this__108393.cnt,key);
if((idx__108395 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__108393.arr[idx__108395])))
{return (this__108393.arr[(idx__108395 + 1)]);
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
var this__108396 = this;
var inode__108397 = this;
if((e === this__108396.edit))
{this__108396.arr = array;
this__108396.cnt = count;
return inode__108397;
} else
{return (new cljs.core.HashCollisionNode(this__108396.edit,this__108396.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__108402 = cljs.core.hash.call(null,key1);
if((key1hash__108402 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__108402,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___108403 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__108402,key1,val1,added_leaf_QMARK___108403).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___108403);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__108404 = cljs.core.hash.call(null,key1);
if((key1hash__108404 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__108404,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___108405 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__108404,key1,val1,added_leaf_QMARK___108405).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___108405);
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
var this__108406 = this;
var h__5444__auto____108407 = this__108406.__hash;
if(!((h__5444__auto____108407 == null)))
{return h__5444__auto____108407;
} else
{var h__5444__auto____108408 = cljs.core.hash_coll.call(null,coll);
this__108406.__hash = h__5444__auto____108408;
return h__5444__auto____108408;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__108409 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__108410 = this;
var this__108411 = this;
return cljs.core.pr_str.call(null,this__108411);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__108412 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__108413 = this;
if((this__108413.s == null))
{return cljs.core.PersistentVector.fromArray([(this__108413.nodes[this__108413.i]),(this__108413.nodes[(this__108413.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__108413.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__108414 = this;
if((this__108414.s == null))
{return cljs.core.create_inode_seq.call(null,this__108414.nodes,(this__108414.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__108414.nodes,this__108414.i,cljs.core.next.call(null,this__108414.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108415 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108416 = this;
return (new cljs.core.NodeSeq(meta,this__108416.nodes,this__108416.i,this__108416.s,this__108416.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108417 = this;
return this__108417.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108418 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__108418.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__108425 = nodes.length;
var j__108426 = i;
while(true){
if((j__108426 < len__108425))
{if(!(((nodes[j__108426]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__108426,null,null));
} else
{var temp__3971__auto____108427 = (nodes[(j__108426 + 1)]);
if(cljs.core.truth_(temp__3971__auto____108427))
{var node__108428 = temp__3971__auto____108427;
var temp__3971__auto____108429 = node__108428.inode_seq();
if(cljs.core.truth_(temp__3971__auto____108429))
{var node_seq__108430 = temp__3971__auto____108429;
return (new cljs.core.NodeSeq(null,nodes,(j__108426 + 2),node_seq__108430,null));
} else
{{
var G__108431 = (j__108426 + 2);
j__108426 = G__108431;
continue;
}
}
} else
{{
var G__108432 = (j__108426 + 2);
j__108426 = G__108432;
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
var this__108433 = this;
var h__5444__auto____108434 = this__108433.__hash;
if(!((h__5444__auto____108434 == null)))
{return h__5444__auto____108434;
} else
{var h__5444__auto____108435 = cljs.core.hash_coll.call(null,coll);
this__108433.__hash = h__5444__auto____108435;
return h__5444__auto____108435;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__108436 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__108437 = this;
var this__108438 = this;
return cljs.core.pr_str.call(null,this__108438);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__108439 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__108440 = this;
return cljs.core.first.call(null,this__108440.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__108441 = this;
return cljs.core.create_array_node_seq.call(null,null,this__108441.nodes,this__108441.i,cljs.core.next.call(null,this__108441.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108442 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108443 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__108443.nodes,this__108443.i,this__108443.s,this__108443.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108444 = this;
return this__108444.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108445 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__108445.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__108452 = nodes.length;
var j__108453 = i;
while(true){
if((j__108453 < len__108452))
{var temp__3971__auto____108454 = (nodes[j__108453]);
if(cljs.core.truth_(temp__3971__auto____108454))
{var nj__108455 = temp__3971__auto____108454;
var temp__3971__auto____108456 = nj__108455.inode_seq();
if(cljs.core.truth_(temp__3971__auto____108456))
{var ns__108457 = temp__3971__auto____108456;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__108453 + 1),ns__108457,null));
} else
{{
var G__108458 = (j__108453 + 1);
j__108453 = G__108458;
continue;
}
}
} else
{{
var G__108459 = (j__108453 + 1);
j__108453 = G__108459;
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
var this__108462 = this;
return (new cljs.core.TransientHashMap({},this__108462.root,this__108462.cnt,this__108462.has_nil_QMARK_,this__108462.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__108463 = this;
var h__5444__auto____108464 = this__108463.__hash;
if(!((h__5444__auto____108464 == null)))
{return h__5444__auto____108464;
} else
{var h__5444__auto____108465 = cljs.core.hash_imap.call(null,coll);
this__108463.__hash = h__5444__auto____108465;
return h__5444__auto____108465;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__108466 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__108467 = this;
if((k == null))
{if(this__108467.has_nil_QMARK_)
{return this__108467.nil_val;
} else
{return not_found;
}
} else
{if((this__108467.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__108467.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__108468 = this;
if((k == null))
{if((function (){var and__3822__auto____108469 = this__108468.has_nil_QMARK_;
if(and__3822__auto____108469)
{return (v === this__108468.nil_val);
} else
{return and__3822__auto____108469;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__108468.meta,((this__108468.has_nil_QMARK_)?this__108468.cnt:(this__108468.cnt + 1)),this__108468.root,true,v,null));
}
} else
{var added_leaf_QMARK___108470 = (new cljs.core.Box(false));
var new_root__108471 = (((this__108468.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__108468.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___108470);
if((new_root__108471 === this__108468.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__108468.meta,((added_leaf_QMARK___108470.val)?(this__108468.cnt + 1):this__108468.cnt),new_root__108471,this__108468.has_nil_QMARK_,this__108468.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__108472 = this;
if((k == null))
{return this__108472.has_nil_QMARK_;
} else
{if((this__108472.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__108472.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__108495 = null;
var G__108495__2 = (function (this_sym108473,k){
var this__108475 = this;
var this_sym108473__108476 = this;
var coll__108477 = this_sym108473__108476;
return coll__108477.cljs$core$ILookup$_lookup$arity$2(coll__108477,k);
});
var G__108495__3 = (function (this_sym108474,k,not_found){
var this__108475 = this;
var this_sym108474__108478 = this;
var coll__108479 = this_sym108474__108478;
return coll__108479.cljs$core$ILookup$_lookup$arity$3(coll__108479,k,not_found);
});
G__108495 = function(this_sym108474,k,not_found){
switch(arguments.length){
case 2:
return G__108495__2.call(this,this_sym108474,k);
case 3:
return G__108495__3.call(this,this_sym108474,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108495;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym108460,args108461){
var this__108480 = this;
return this_sym108460.call.apply(this_sym108460,[this_sym108460].concat(args108461.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__108481 = this;
var init__108482 = ((this__108481.has_nil_QMARK_)?f.call(null,init,null,this__108481.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__108482))
{return cljs.core.deref.call(null,init__108482);
} else
{if(!((this__108481.root == null)))
{return this__108481.root.kv_reduce(f,init__108482);
} else
{if("\uFDD0'else")
{return init__108482;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__108483 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__108484 = this;
var this__108485 = this;
return cljs.core.pr_str.call(null,this__108485);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108486 = this;
if((this__108486.cnt > 0))
{var s__108487 = ((!((this__108486.root == null)))?this__108486.root.inode_seq():null);
if(this__108486.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__108486.nil_val], true),s__108487);
} else
{return s__108487;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108488 = this;
return this__108488.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108489 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108490 = this;
return (new cljs.core.PersistentHashMap(meta,this__108490.cnt,this__108490.root,this__108490.has_nil_QMARK_,this__108490.nil_val,this__108490.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108491 = this;
return this__108491.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108492 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__108492.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__108493 = this;
if((k == null))
{if(this__108493.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__108493.meta,(this__108493.cnt - 1),this__108493.root,false,null,null));
} else
{return coll;
}
} else
{if((this__108493.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__108494 = this__108493.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__108494 === this__108493.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__108493.meta,(this__108493.cnt - 1),new_root__108494,this__108493.has_nil_QMARK_,this__108493.nil_val,null));
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
var len__108496 = ks.length;
var i__108497 = 0;
var out__108498 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__108497 < len__108496))
{{
var G__108499 = (i__108497 + 1);
var G__108500 = cljs.core.assoc_BANG_.call(null,out__108498,(ks[i__108497]),(vs[i__108497]));
i__108497 = G__108499;
out__108498 = G__108500;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__108498);
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
var this__108501 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__108502 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__108503 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__108504 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__108505 = this;
if((k == null))
{if(this__108505.has_nil_QMARK_)
{return this__108505.nil_val;
} else
{return null;
}
} else
{if((this__108505.root == null))
{return null;
} else
{return this__108505.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__108506 = this;
if((k == null))
{if(this__108506.has_nil_QMARK_)
{return this__108506.nil_val;
} else
{return not_found;
}
} else
{if((this__108506.root == null))
{return not_found;
} else
{return this__108506.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108507 = this;
if(this__108507.edit)
{return this__108507.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__108508 = this;
var tcoll__108509 = this;
if(this__108508.edit)
{if((function (){var G__108510__108511 = o;
if(G__108510__108511)
{if((function (){var or__3824__auto____108512 = (G__108510__108511.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____108512)
{return or__3824__auto____108512;
} else
{return G__108510__108511.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__108510__108511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__108510__108511);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__108510__108511);
}
})())
{return tcoll__108509.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__108513 = cljs.core.seq.call(null,o);
var tcoll__108514 = tcoll__108509;
while(true){
var temp__3971__auto____108515 = cljs.core.first.call(null,es__108513);
if(cljs.core.truth_(temp__3971__auto____108515))
{var e__108516 = temp__3971__auto____108515;
{
var G__108527 = cljs.core.next.call(null,es__108513);
var G__108528 = tcoll__108514.assoc_BANG_(cljs.core.key.call(null,e__108516),cljs.core.val.call(null,e__108516));
es__108513 = G__108527;
tcoll__108514 = G__108528;
continue;
}
} else
{return tcoll__108514;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__108517 = this;
var tcoll__108518 = this;
if(this__108517.edit)
{if((k == null))
{if((this__108517.nil_val === v))
{} else
{this__108517.nil_val = v;
}
if(this__108517.has_nil_QMARK_)
{} else
{this__108517.count = (this__108517.count + 1);
this__108517.has_nil_QMARK_ = true;
}
return tcoll__108518;
} else
{var added_leaf_QMARK___108519 = (new cljs.core.Box(false));
var node__108520 = (((this__108517.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__108517.root).inode_assoc_BANG_(this__108517.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___108519);
if((node__108520 === this__108517.root))
{} else
{this__108517.root = node__108520;
}
if(added_leaf_QMARK___108519.val)
{this__108517.count = (this__108517.count + 1);
} else
{}
return tcoll__108518;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__108521 = this;
var tcoll__108522 = this;
if(this__108521.edit)
{if((k == null))
{if(this__108521.has_nil_QMARK_)
{this__108521.has_nil_QMARK_ = false;
this__108521.nil_val = null;
this__108521.count = (this__108521.count - 1);
return tcoll__108522;
} else
{return tcoll__108522;
}
} else
{if((this__108521.root == null))
{return tcoll__108522;
} else
{var removed_leaf_QMARK___108523 = (new cljs.core.Box(false));
var node__108524 = this__108521.root.inode_without_BANG_(this__108521.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___108523);
if((node__108524 === this__108521.root))
{} else
{this__108521.root = node__108524;
}
if(cljs.core.truth_((removed_leaf_QMARK___108523[0])))
{this__108521.count = (this__108521.count - 1);
} else
{}
return tcoll__108522;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__108525 = this;
var tcoll__108526 = this;
if(this__108525.edit)
{this__108525.edit = null;
return (new cljs.core.PersistentHashMap(null,this__108525.count,this__108525.root,this__108525.has_nil_QMARK_,this__108525.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__108531 = node;
var stack__108532 = stack;
while(true){
if(!((t__108531 == null)))
{{
var G__108533 = ((ascending_QMARK_)?t__108531.left:t__108531.right);
var G__108534 = cljs.core.conj.call(null,stack__108532,t__108531);
t__108531 = G__108533;
stack__108532 = G__108534;
continue;
}
} else
{return stack__108532;
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
var this__108535 = this;
var h__5444__auto____108536 = this__108535.__hash;
if(!((h__5444__auto____108536 == null)))
{return h__5444__auto____108536;
} else
{var h__5444__auto____108537 = cljs.core.hash_coll.call(null,coll);
this__108535.__hash = h__5444__auto____108537;
return h__5444__auto____108537;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__108538 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__108539 = this;
var this__108540 = this;
return cljs.core.pr_str.call(null,this__108540);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__108541 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108542 = this;
if((this__108542.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__108542.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__108543 = this;
return cljs.core.peek.call(null,this__108543.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__108544 = this;
var t__108545 = cljs.core.first.call(null,this__108544.stack);
var next_stack__108546 = cljs.core.tree_map_seq_push.call(null,((this__108544.ascending_QMARK_)?t__108545.right:t__108545.left),cljs.core.next.call(null,this__108544.stack),this__108544.ascending_QMARK_);
if(!((next_stack__108546 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__108546,this__108544.ascending_QMARK_,(this__108544.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108547 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108548 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__108548.stack,this__108548.ascending_QMARK_,this__108548.cnt,this__108548.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108549 = this;
return this__108549.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108550 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__108550.meta);
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
{if((function (){var and__3822__auto____108552 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____108552)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____108552;
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
{if((function (){var and__3822__auto____108554 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____108554)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____108554;
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
var init__108558 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__108558))
{return cljs.core.deref.call(null,init__108558);
} else
{var init__108559 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__108558):init__108558);
if(cljs.core.reduced_QMARK_.call(null,init__108559))
{return cljs.core.deref.call(null,init__108559);
} else
{var init__108560 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__108559):init__108559);
if(cljs.core.reduced_QMARK_.call(null,init__108560))
{return cljs.core.deref.call(null,init__108560);
} else
{return init__108560;
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
var this__108563 = this;
var h__5444__auto____108564 = this__108563.__hash;
if(!((h__5444__auto____108564 == null)))
{return h__5444__auto____108564;
} else
{var h__5444__auto____108565 = cljs.core.hash_coll.call(null,coll);
this__108563.__hash = h__5444__auto____108565;
return h__5444__auto____108565;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__108566 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__108567 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__108568 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__108568.key,this__108568.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__108616 = null;
var G__108616__2 = (function (this_sym108569,k){
var this__108571 = this;
var this_sym108569__108572 = this;
var node__108573 = this_sym108569__108572;
return node__108573.cljs$core$ILookup$_lookup$arity$2(node__108573,k);
});
var G__108616__3 = (function (this_sym108570,k,not_found){
var this__108571 = this;
var this_sym108570__108574 = this;
var node__108575 = this_sym108570__108574;
return node__108575.cljs$core$ILookup$_lookup$arity$3(node__108575,k,not_found);
});
G__108616 = function(this_sym108570,k,not_found){
switch(arguments.length){
case 2:
return G__108616__2.call(this,this_sym108570,k);
case 3:
return G__108616__3.call(this,this_sym108570,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108616;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym108561,args108562){
var this__108576 = this;
return this_sym108561.call.apply(this_sym108561,[this_sym108561].concat(args108562.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__108577 = this;
return cljs.core.PersistentVector.fromArray([this__108577.key,this__108577.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__108578 = this;
return this__108578.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__108579 = this;
return this__108579.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__108580 = this;
var node__108581 = this;
return ins.balance_right(node__108581);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__108582 = this;
var node__108583 = this;
return (new cljs.core.RedNode(this__108582.key,this__108582.val,this__108582.left,this__108582.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__108584 = this;
var node__108585 = this;
return cljs.core.balance_right_del.call(null,this__108584.key,this__108584.val,this__108584.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__108586 = this;
var node__108587 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__108588 = this;
var node__108589 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__108589,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__108590 = this;
var node__108591 = this;
return cljs.core.balance_left_del.call(null,this__108590.key,this__108590.val,del,this__108590.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__108592 = this;
var node__108593 = this;
return ins.balance_left(node__108593);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__108594 = this;
var node__108595 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__108595,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__108617 = null;
var G__108617__0 = (function (){
var this__108596 = this;
var this__108598 = this;
return cljs.core.pr_str.call(null,this__108598);
});
G__108617 = function(){
switch(arguments.length){
case 0:
return G__108617__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108617;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__108599 = this;
var node__108600 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__108600,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__108601 = this;
var node__108602 = this;
return node__108602;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__108603 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__108604 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__108605 = this;
return cljs.core.list.call(null,this__108605.key,this__108605.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__108606 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__108607 = this;
return this__108607.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__108608 = this;
return cljs.core.PersistentVector.fromArray([this__108608.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__108609 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__108609.key,this__108609.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108610 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__108611 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__108611.key,this__108611.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__108612 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__108613 = this;
if((n === 0))
{return this__108613.key;
} else
{if((n === 1))
{return this__108613.val;
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
var this__108614 = this;
if((n === 0))
{return this__108614.key;
} else
{if((n === 1))
{return this__108614.val;
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
var this__108615 = this;
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
var this__108620 = this;
var h__5444__auto____108621 = this__108620.__hash;
if(!((h__5444__auto____108621 == null)))
{return h__5444__auto____108621;
} else
{var h__5444__auto____108622 = cljs.core.hash_coll.call(null,coll);
this__108620.__hash = h__5444__auto____108622;
return h__5444__auto____108622;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__108623 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__108624 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__108625 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__108625.key,this__108625.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__108673 = null;
var G__108673__2 = (function (this_sym108626,k){
var this__108628 = this;
var this_sym108626__108629 = this;
var node__108630 = this_sym108626__108629;
return node__108630.cljs$core$ILookup$_lookup$arity$2(node__108630,k);
});
var G__108673__3 = (function (this_sym108627,k,not_found){
var this__108628 = this;
var this_sym108627__108631 = this;
var node__108632 = this_sym108627__108631;
return node__108632.cljs$core$ILookup$_lookup$arity$3(node__108632,k,not_found);
});
G__108673 = function(this_sym108627,k,not_found){
switch(arguments.length){
case 2:
return G__108673__2.call(this,this_sym108627,k);
case 3:
return G__108673__3.call(this,this_sym108627,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108673;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym108618,args108619){
var this__108633 = this;
return this_sym108618.call.apply(this_sym108618,[this_sym108618].concat(args108619.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__108634 = this;
return cljs.core.PersistentVector.fromArray([this__108634.key,this__108634.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__108635 = this;
return this__108635.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__108636 = this;
return this__108636.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__108637 = this;
var node__108638 = this;
return (new cljs.core.RedNode(this__108637.key,this__108637.val,this__108637.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__108639 = this;
var node__108640 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__108641 = this;
var node__108642 = this;
return (new cljs.core.RedNode(this__108641.key,this__108641.val,this__108641.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__108643 = this;
var node__108644 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__108645 = this;
var node__108646 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__108646,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__108647 = this;
var node__108648 = this;
return (new cljs.core.RedNode(this__108647.key,this__108647.val,del,this__108647.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__108649 = this;
var node__108650 = this;
return (new cljs.core.RedNode(this__108649.key,this__108649.val,ins,this__108649.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__108651 = this;
var node__108652 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__108651.left))
{return (new cljs.core.RedNode(this__108651.key,this__108651.val,this__108651.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__108651.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__108651.right))
{return (new cljs.core.RedNode(this__108651.right.key,this__108651.right.val,(new cljs.core.BlackNode(this__108651.key,this__108651.val,this__108651.left,this__108651.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__108651.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__108652,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__108674 = null;
var G__108674__0 = (function (){
var this__108653 = this;
var this__108655 = this;
return cljs.core.pr_str.call(null,this__108655);
});
G__108674 = function(){
switch(arguments.length){
case 0:
return G__108674__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108674;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__108656 = this;
var node__108657 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__108656.right))
{return (new cljs.core.RedNode(this__108656.key,this__108656.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__108656.left,null)),this__108656.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__108656.left))
{return (new cljs.core.RedNode(this__108656.left.key,this__108656.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__108656.left.left,null)),(new cljs.core.BlackNode(this__108656.key,this__108656.val,this__108656.left.right,this__108656.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__108657,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__108658 = this;
var node__108659 = this;
return (new cljs.core.BlackNode(this__108658.key,this__108658.val,this__108658.left,this__108658.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__108660 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__108661 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__108662 = this;
return cljs.core.list.call(null,this__108662.key,this__108662.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__108663 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__108664 = this;
return this__108664.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__108665 = this;
return cljs.core.PersistentVector.fromArray([this__108665.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__108666 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__108666.key,this__108666.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108667 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__108668 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__108668.key,this__108668.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__108669 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__108670 = this;
if((n === 0))
{return this__108670.key;
} else
{if((n === 1))
{return this__108670.val;
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
var this__108671 = this;
if((n === 0))
{return this__108671.key;
} else
{if((n === 1))
{return this__108671.val;
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
var this__108672 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__108678 = comp.call(null,k,tree.key);
if((c__108678 === 0))
{(found[0] = tree);
return null;
} else
{if((c__108678 < 0))
{var ins__108679 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__108679 == null)))
{return tree.add_left(ins__108679);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__108680 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__108680 == null)))
{return tree.add_right(ins__108680);
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
{var app__108683 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__108683))
{return (new cljs.core.RedNode(app__108683.key,app__108683.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__108683.left,null)),(new cljs.core.RedNode(right.key,right.val,app__108683.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__108683,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__108684 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__108684))
{return (new cljs.core.RedNode(app__108684.key,app__108684.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__108684.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__108684.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__108684,right.right,null)));
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
{var c__108690 = comp.call(null,k,tree.key);
if((c__108690 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__108690 < 0))
{var del__108691 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____108692 = !((del__108691 == null));
if(or__3824__auto____108692)
{return or__3824__auto____108692;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__108691,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__108691,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__108693 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____108694 = !((del__108693 == null));
if(or__3824__auto____108694)
{return or__3824__auto____108694;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__108693);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__108693,null));
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
var tk__108697 = tree.key;
var c__108698 = comp.call(null,k,tk__108697);
if((c__108698 === 0))
{return tree.replace(tk__108697,v,tree.left,tree.right);
} else
{if((c__108698 < 0))
{return tree.replace(tk__108697,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__108697,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__108701 = this;
var h__5444__auto____108702 = this__108701.__hash;
if(!((h__5444__auto____108702 == null)))
{return h__5444__auto____108702;
} else
{var h__5444__auto____108703 = cljs.core.hash_imap.call(null,coll);
this__108701.__hash = h__5444__auto____108703;
return h__5444__auto____108703;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__108704 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__108705 = this;
var n__108706 = coll.entry_at(k);
if(!((n__108706 == null)))
{return n__108706.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__108707 = this;
var found__108708 = [null];
var t__108709 = cljs.core.tree_map_add.call(null,this__108707.comp,this__108707.tree,k,v,found__108708);
if((t__108709 == null))
{var found_node__108710 = cljs.core.nth.call(null,found__108708,0);
if(cljs.core._EQ_.call(null,v,found_node__108710.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__108707.comp,cljs.core.tree_map_replace.call(null,this__108707.comp,this__108707.tree,k,v),this__108707.cnt,this__108707.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__108707.comp,t__108709.blacken(),(this__108707.cnt + 1),this__108707.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__108711 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__108745 = null;
var G__108745__2 = (function (this_sym108712,k){
var this__108714 = this;
var this_sym108712__108715 = this;
var coll__108716 = this_sym108712__108715;
return coll__108716.cljs$core$ILookup$_lookup$arity$2(coll__108716,k);
});
var G__108745__3 = (function (this_sym108713,k,not_found){
var this__108714 = this;
var this_sym108713__108717 = this;
var coll__108718 = this_sym108713__108717;
return coll__108718.cljs$core$ILookup$_lookup$arity$3(coll__108718,k,not_found);
});
G__108745 = function(this_sym108713,k,not_found){
switch(arguments.length){
case 2:
return G__108745__2.call(this,this_sym108713,k);
case 3:
return G__108745__3.call(this,this_sym108713,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108745;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym108699,args108700){
var this__108719 = this;
return this_sym108699.call.apply(this_sym108699,[this_sym108699].concat(args108700.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__108720 = this;
if(!((this__108720.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__108720.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__108721 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__108722 = this;
if((this__108722.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__108722.tree,false,this__108722.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__108723 = this;
var this__108724 = this;
return cljs.core.pr_str.call(null,this__108724);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__108725 = this;
var coll__108726 = this;
var t__108727 = this__108725.tree;
while(true){
if(!((t__108727 == null)))
{var c__108728 = this__108725.comp.call(null,k,t__108727.key);
if((c__108728 === 0))
{return t__108727;
} else
{if((c__108728 < 0))
{{
var G__108746 = t__108727.left;
t__108727 = G__108746;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__108747 = t__108727.right;
t__108727 = G__108747;
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
var this__108729 = this;
if((this__108729.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__108729.tree,ascending_QMARK_,this__108729.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__108730 = this;
if((this__108730.cnt > 0))
{var stack__108731 = null;
var t__108732 = this__108730.tree;
while(true){
if(!((t__108732 == null)))
{var c__108733 = this__108730.comp.call(null,k,t__108732.key);
if((c__108733 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__108731,t__108732),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__108733 < 0))
{{
var G__108748 = cljs.core.conj.call(null,stack__108731,t__108732);
var G__108749 = t__108732.left;
stack__108731 = G__108748;
t__108732 = G__108749;
continue;
}
} else
{{
var G__108750 = stack__108731;
var G__108751 = t__108732.right;
stack__108731 = G__108750;
t__108732 = G__108751;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__108733 > 0))
{{
var G__108752 = cljs.core.conj.call(null,stack__108731,t__108732);
var G__108753 = t__108732.right;
stack__108731 = G__108752;
t__108732 = G__108753;
continue;
}
} else
{{
var G__108754 = stack__108731;
var G__108755 = t__108732.left;
stack__108731 = G__108754;
t__108732 = G__108755;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__108731 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__108731,ascending_QMARK_,-1,null));
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
var this__108734 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__108735 = this;
return this__108735.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108736 = this;
if((this__108736.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__108736.tree,true,this__108736.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108737 = this;
return this__108737.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108738 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108739 = this;
return (new cljs.core.PersistentTreeMap(this__108739.comp,this__108739.tree,this__108739.cnt,meta,this__108739.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108740 = this;
return this__108740.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108741 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__108741.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__108742 = this;
var found__108743 = [null];
var t__108744 = cljs.core.tree_map_remove.call(null,this__108742.comp,this__108742.tree,k,found__108743);
if((t__108744 == null))
{if((cljs.core.nth.call(null,found__108743,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__108742.comp,null,0,this__108742.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__108742.comp,t__108744.blacken(),(this__108742.cnt - 1),this__108742.meta,null));
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
var in__108758 = cljs.core.seq.call(null,keyvals);
var out__108759 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__108758)
{{
var G__108760 = cljs.core.nnext.call(null,in__108758);
var G__108761 = cljs.core.assoc_BANG_.call(null,out__108759,cljs.core.first.call(null,in__108758),cljs.core.second.call(null,in__108758));
in__108758 = G__108760;
out__108759 = G__108761;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__108759);
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
hash_map.cljs$lang$applyTo = (function (arglist__108762){
var keyvals = cljs.core.seq(arglist__108762);;
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
array_map.cljs$lang$applyTo = (function (arglist__108763){
var keyvals = cljs.core.seq(arglist__108763);;
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
var ks__108767 = [];
var obj__108768 = {};
var kvs__108769 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__108769)
{ks__108767.push(cljs.core.first.call(null,kvs__108769));
(obj__108768[cljs.core.first.call(null,kvs__108769)] = cljs.core.second.call(null,kvs__108769));
{
var G__108770 = cljs.core.nnext.call(null,kvs__108769);
kvs__108769 = G__108770;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__108767,obj__108768);
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
obj_map.cljs$lang$applyTo = (function (arglist__108771){
var keyvals = cljs.core.seq(arglist__108771);;
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
var in__108774 = cljs.core.seq.call(null,keyvals);
var out__108775 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__108774)
{{
var G__108776 = cljs.core.nnext.call(null,in__108774);
var G__108777 = cljs.core.assoc.call(null,out__108775,cljs.core.first.call(null,in__108774),cljs.core.second.call(null,in__108774));
in__108774 = G__108776;
out__108775 = G__108777;
continue;
}
} else
{return out__108775;
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
sorted_map.cljs$lang$applyTo = (function (arglist__108778){
var keyvals = cljs.core.seq(arglist__108778);;
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
var in__108781 = cljs.core.seq.call(null,keyvals);
var out__108782 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__108781)
{{
var G__108783 = cljs.core.nnext.call(null,in__108781);
var G__108784 = cljs.core.assoc.call(null,out__108782,cljs.core.first.call(null,in__108781),cljs.core.second.call(null,in__108781));
in__108781 = G__108783;
out__108782 = G__108784;
continue;
}
} else
{return out__108782;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__108785){
var comparator = cljs.core.first(arglist__108785);
var keyvals = cljs.core.rest(arglist__108785);
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
{return cljs.core.reduce.call(null,(function (p1__108786_SHARP_,p2__108787_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____108789 = p1__108786_SHARP_;
if(cljs.core.truth_(or__3824__auto____108789))
{return or__3824__auto____108789;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__108787_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__108790){
var maps = cljs.core.seq(arglist__108790);;
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
{var merge_entry__108798 = (function (m,e){
var k__108796 = cljs.core.first.call(null,e);
var v__108797 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__108796))
{return cljs.core.assoc.call(null,m,k__108796,f.call(null,cljs.core._lookup.call(null,m,k__108796,null),v__108797));
} else
{return cljs.core.assoc.call(null,m,k__108796,v__108797);
}
});
var merge2__108800 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__108798,(function (){var or__3824__auto____108799 = m1;
if(cljs.core.truth_(or__3824__auto____108799))
{return or__3824__auto____108799;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__108800,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__108801){
var f = cljs.core.first(arglist__108801);
var maps = cljs.core.rest(arglist__108801);
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
var ret__108806 = cljs.core.ObjMap.EMPTY;
var keys__108807 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__108807)
{var key__108808 = cljs.core.first.call(null,keys__108807);
var entry__108809 = cljs.core._lookup.call(null,map,key__108808,"\uFDD0'cljs.core/not-found");
{
var G__108810 = ((cljs.core.not_EQ_.call(null,entry__108809,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__108806,key__108808,entry__108809):ret__108806);
var G__108811 = cljs.core.next.call(null,keys__108807);
ret__108806 = G__108810;
keys__108807 = G__108811;
continue;
}
} else
{return ret__108806;
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
var this__108815 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__108815.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__108816 = this;
var h__5444__auto____108817 = this__108816.__hash;
if(!((h__5444__auto____108817 == null)))
{return h__5444__auto____108817;
} else
{var h__5444__auto____108818 = cljs.core.hash_iset.call(null,coll);
this__108816.__hash = h__5444__auto____108818;
return h__5444__auto____108818;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__108819 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__108820 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__108820.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__108841 = null;
var G__108841__2 = (function (this_sym108821,k){
var this__108823 = this;
var this_sym108821__108824 = this;
var coll__108825 = this_sym108821__108824;
return coll__108825.cljs$core$ILookup$_lookup$arity$2(coll__108825,k);
});
var G__108841__3 = (function (this_sym108822,k,not_found){
var this__108823 = this;
var this_sym108822__108826 = this;
var coll__108827 = this_sym108822__108826;
return coll__108827.cljs$core$ILookup$_lookup$arity$3(coll__108827,k,not_found);
});
G__108841 = function(this_sym108822,k,not_found){
switch(arguments.length){
case 2:
return G__108841__2.call(this,this_sym108822,k);
case 3:
return G__108841__3.call(this,this_sym108822,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108841;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym108813,args108814){
var this__108828 = this;
return this_sym108813.call.apply(this_sym108813,[this_sym108813].concat(args108814.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__108829 = this;
return (new cljs.core.PersistentHashSet(this__108829.meta,cljs.core.assoc.call(null,this__108829.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__108830 = this;
var this__108831 = this;
return cljs.core.pr_str.call(null,this__108831);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108832 = this;
return cljs.core.keys.call(null,this__108832.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__108833 = this;
return (new cljs.core.PersistentHashSet(this__108833.meta,cljs.core.dissoc.call(null,this__108833.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108834 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108835 = this;
var and__3822__auto____108836 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____108836)
{var and__3822__auto____108837 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____108837)
{return cljs.core.every_QMARK_.call(null,(function (p1__108812_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__108812_SHARP_);
}),other);
} else
{return and__3822__auto____108837;
}
} else
{return and__3822__auto____108836;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108838 = this;
return (new cljs.core.PersistentHashSet(meta,this__108838.hash_map,this__108838.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108839 = this;
return this__108839.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108840 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__108840.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__108842 = cljs.core.count.call(null,items);
var i__108843 = 0;
var out__108844 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__108843 < len__108842))
{{
var G__108845 = (i__108843 + 1);
var G__108846 = cljs.core.conj_BANG_.call(null,out__108844,(items[i__108843]));
i__108843 = G__108845;
out__108844 = G__108846;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__108844);
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
var G__108864 = null;
var G__108864__2 = (function (this_sym108850,k){
var this__108852 = this;
var this_sym108850__108853 = this;
var tcoll__108854 = this_sym108850__108853;
if((cljs.core._lookup.call(null,this__108852.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__108864__3 = (function (this_sym108851,k,not_found){
var this__108852 = this;
var this_sym108851__108855 = this;
var tcoll__108856 = this_sym108851__108855;
if((cljs.core._lookup.call(null,this__108852.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__108864 = function(this_sym108851,k,not_found){
switch(arguments.length){
case 2:
return G__108864__2.call(this,this_sym108851,k);
case 3:
return G__108864__3.call(this,this_sym108851,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108864;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym108848,args108849){
var this__108857 = this;
return this_sym108848.call.apply(this_sym108848,[this_sym108848].concat(args108849.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__108858 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__108859 = this;
if((cljs.core._lookup.call(null,this__108859.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__108860 = this;
return cljs.core.count.call(null,this__108860.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__108861 = this;
this__108861.transient_map = cljs.core.dissoc_BANG_.call(null,this__108861.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__108862 = this;
this__108862.transient_map = cljs.core.assoc_BANG_.call(null,this__108862.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__108863 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__108863.transient_map),null));
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
var this__108867 = this;
var h__5444__auto____108868 = this__108867.__hash;
if(!((h__5444__auto____108868 == null)))
{return h__5444__auto____108868;
} else
{var h__5444__auto____108869 = cljs.core.hash_iset.call(null,coll);
this__108867.__hash = h__5444__auto____108869;
return h__5444__auto____108869;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__108870 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__108871 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__108871.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__108897 = null;
var G__108897__2 = (function (this_sym108872,k){
var this__108874 = this;
var this_sym108872__108875 = this;
var coll__108876 = this_sym108872__108875;
return coll__108876.cljs$core$ILookup$_lookup$arity$2(coll__108876,k);
});
var G__108897__3 = (function (this_sym108873,k,not_found){
var this__108874 = this;
var this_sym108873__108877 = this;
var coll__108878 = this_sym108873__108877;
return coll__108878.cljs$core$ILookup$_lookup$arity$3(coll__108878,k,not_found);
});
G__108897 = function(this_sym108873,k,not_found){
switch(arguments.length){
case 2:
return G__108897__2.call(this,this_sym108873,k);
case 3:
return G__108897__3.call(this,this_sym108873,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__108897;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym108865,args108866){
var this__108879 = this;
return this_sym108865.call.apply(this_sym108865,[this_sym108865].concat(args108866.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__108880 = this;
return (new cljs.core.PersistentTreeSet(this__108880.meta,cljs.core.assoc.call(null,this__108880.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__108881 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__108881.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__108882 = this;
var this__108883 = this;
return cljs.core.pr_str.call(null,this__108883);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__108884 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__108884.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__108885 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__108885.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__108886 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__108887 = this;
return cljs.core._comparator.call(null,this__108887.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__108888 = this;
return cljs.core.keys.call(null,this__108888.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__108889 = this;
return (new cljs.core.PersistentTreeSet(this__108889.meta,cljs.core.dissoc.call(null,this__108889.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__108890 = this;
return cljs.core.count.call(null,this__108890.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__108891 = this;
var and__3822__auto____108892 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____108892)
{var and__3822__auto____108893 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____108893)
{return cljs.core.every_QMARK_.call(null,(function (p1__108847_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__108847_SHARP_);
}),other);
} else
{return and__3822__auto____108893;
}
} else
{return and__3822__auto____108892;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__108894 = this;
return (new cljs.core.PersistentTreeSet(meta,this__108894.tree_map,this__108894.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__108895 = this;
return this__108895.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__108896 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__108896.meta);
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
var G__108902__delegate = function (keys){
var in__108900 = cljs.core.seq.call(null,keys);
var out__108901 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__108900))
{{
var G__108903 = cljs.core.next.call(null,in__108900);
var G__108904 = cljs.core.conj_BANG_.call(null,out__108901,cljs.core.first.call(null,in__108900));
in__108900 = G__108903;
out__108901 = G__108904;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__108901);
}
break;
}
};
var G__108902 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__108902__delegate.call(this, keys);
};
G__108902.cljs$lang$maxFixedArity = 0;
G__108902.cljs$lang$applyTo = (function (arglist__108905){
var keys = cljs.core.seq(arglist__108905);;
return G__108902__delegate(keys);
});
G__108902.cljs$lang$arity$variadic = G__108902__delegate;
return G__108902;
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
sorted_set.cljs$lang$applyTo = (function (arglist__108906){
var keys = cljs.core.seq(arglist__108906);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__108908){
var comparator = cljs.core.first(arglist__108908);
var keys = cljs.core.rest(arglist__108908);
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
{var n__108914 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____108915 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____108915))
{var e__108916 = temp__3971__auto____108915;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__108916));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__108914,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__108907_SHARP_){
var temp__3971__auto____108917 = cljs.core.find.call(null,smap,p1__108907_SHARP_);
if(cljs.core.truth_(temp__3971__auto____108917))
{var e__108918 = temp__3971__auto____108917;
return cljs.core.second.call(null,e__108918);
} else
{return p1__108907_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__108948 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__108941,seen){
while(true){
var vec__108942__108943 = p__108941;
var f__108944 = cljs.core.nth.call(null,vec__108942__108943,0,null);
var xs__108945 = vec__108942__108943;
var temp__3974__auto____108946 = cljs.core.seq.call(null,xs__108945);
if(temp__3974__auto____108946)
{var s__108947 = temp__3974__auto____108946;
if(cljs.core.contains_QMARK_.call(null,seen,f__108944))
{{
var G__108949 = cljs.core.rest.call(null,s__108947);
var G__108950 = seen;
p__108941 = G__108949;
seen = G__108950;
continue;
}
} else
{return cljs.core.cons.call(null,f__108944,step.call(null,cljs.core.rest.call(null,s__108947),cljs.core.conj.call(null,seen,f__108944)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__108948.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__108953 = cljs.core.PersistentVector.EMPTY;
var s__108954 = s;
while(true){
if(cljs.core.next.call(null,s__108954))
{{
var G__108955 = cljs.core.conj.call(null,ret__108953,cljs.core.first.call(null,s__108954));
var G__108956 = cljs.core.next.call(null,s__108954);
ret__108953 = G__108955;
s__108954 = G__108956;
continue;
}
} else
{return cljs.core.seq.call(null,ret__108953);
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
{if((function (){var or__3824__auto____108959 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____108959)
{return or__3824__auto____108959;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__108960 = x.lastIndexOf("/");
if((i__108960 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__108960 + 1));
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
if((function (){var or__3824__auto____108963 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____108963)
{return or__3824__auto____108963;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__108964 = x.lastIndexOf("/");
if((i__108964 > -1))
{return cljs.core.subs.call(null,x,2,i__108964);
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
var map__108971 = cljs.core.ObjMap.EMPTY;
var ks__108972 = cljs.core.seq.call(null,keys);
var vs__108973 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____108974 = ks__108972;
if(and__3822__auto____108974)
{return vs__108973;
} else
{return and__3822__auto____108974;
}
})())
{{
var G__108975 = cljs.core.assoc.call(null,map__108971,cljs.core.first.call(null,ks__108972),cljs.core.first.call(null,vs__108973));
var G__108976 = cljs.core.next.call(null,ks__108972);
var G__108977 = cljs.core.next.call(null,vs__108973);
map__108971 = G__108975;
ks__108972 = G__108976;
vs__108973 = G__108977;
continue;
}
} else
{return map__108971;
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
var G__108980__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__108965_SHARP_,p2__108966_SHARP_){
return max_key.call(null,k,p1__108965_SHARP_,p2__108966_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__108980 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__108980__delegate.call(this, k, x, y, more);
};
G__108980.cljs$lang$maxFixedArity = 3;
G__108980.cljs$lang$applyTo = (function (arglist__108981){
var k = cljs.core.first(arglist__108981);
var x = cljs.core.first(cljs.core.next(arglist__108981));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__108981)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__108981)));
return G__108980__delegate(k, x, y, more);
});
G__108980.cljs$lang$arity$variadic = G__108980__delegate;
return G__108980;
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
var G__108982__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__108978_SHARP_,p2__108979_SHARP_){
return min_key.call(null,k,p1__108978_SHARP_,p2__108979_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__108982 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__108982__delegate.call(this, k, x, y, more);
};
G__108982.cljs$lang$maxFixedArity = 3;
G__108982.cljs$lang$applyTo = (function (arglist__108983){
var k = cljs.core.first(arglist__108983);
var x = cljs.core.first(cljs.core.next(arglist__108983));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__108983)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__108983)));
return G__108982__delegate(k, x, y, more);
});
G__108982.cljs$lang$arity$variadic = G__108982__delegate;
return G__108982;
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
var temp__3974__auto____108986 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____108986)
{var s__108987 = temp__3974__auto____108986;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__108987),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__108987)));
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
var temp__3974__auto____108990 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____108990)
{var s__108991 = temp__3974__auto____108990;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__108991))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__108991),take_while.call(null,pred,cljs.core.rest.call(null,s__108991)));
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
var comp__108993 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__108993.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__109005 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____109006 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____109006))
{var vec__109007__109008 = temp__3974__auto____109006;
var e__109009 = cljs.core.nth.call(null,vec__109007__109008,0,null);
var s__109010 = vec__109007__109008;
if(cljs.core.truth_(include__109005.call(null,e__109009)))
{return s__109010;
} else
{return cljs.core.next.call(null,s__109010);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__109005,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____109011 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____109011))
{var vec__109012__109013 = temp__3974__auto____109011;
var e__109014 = cljs.core.nth.call(null,vec__109012__109013,0,null);
var s__109015 = vec__109012__109013;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__109014))?s__109015:cljs.core.next.call(null,s__109015)));
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
var include__109027 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____109028 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____109028))
{var vec__109029__109030 = temp__3974__auto____109028;
var e__109031 = cljs.core.nth.call(null,vec__109029__109030,0,null);
var s__109032 = vec__109029__109030;
if(cljs.core.truth_(include__109027.call(null,e__109031)))
{return s__109032;
} else
{return cljs.core.next.call(null,s__109032);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__109027,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____109033 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____109033))
{var vec__109034__109035 = temp__3974__auto____109033;
var e__109036 = cljs.core.nth.call(null,vec__109034__109035,0,null);
var s__109037 = vec__109034__109035;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__109036))?s__109037:cljs.core.next.call(null,s__109037)));
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
var this__109038 = this;
var h__5444__auto____109039 = this__109038.__hash;
if(!((h__5444__auto____109039 == null)))
{return h__5444__auto____109039;
} else
{var h__5444__auto____109040 = cljs.core.hash_coll.call(null,rng);
this__109038.__hash = h__5444__auto____109040;
return h__5444__auto____109040;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__109041 = this;
if((this__109041.step > 0))
{if(((this__109041.start + this__109041.step) < this__109041.end))
{return (new cljs.core.Range(this__109041.meta,(this__109041.start + this__109041.step),this__109041.end,this__109041.step,null));
} else
{return null;
}
} else
{if(((this__109041.start + this__109041.step) > this__109041.end))
{return (new cljs.core.Range(this__109041.meta,(this__109041.start + this__109041.step),this__109041.end,this__109041.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__109042 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__109043 = this;
var this__109044 = this;
return cljs.core.pr_str.call(null,this__109044);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__109045 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__109046 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__109047 = this;
if((this__109047.step > 0))
{if((this__109047.start < this__109047.end))
{return rng;
} else
{return null;
}
} else
{if((this__109047.start > this__109047.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__109048 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__109048.end - this__109048.start) / this__109048.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__109049 = this;
return this__109049.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__109050 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__109050.meta,(this__109050.start + this__109050.step),this__109050.end,this__109050.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__109051 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__109052 = this;
return (new cljs.core.Range(meta,this__109052.start,this__109052.end,this__109052.step,this__109052.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__109053 = this;
return this__109053.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__109054 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__109054.start + (n * this__109054.step));
} else
{if((function (){var and__3822__auto____109055 = (this__109054.start > this__109054.end);
if(and__3822__auto____109055)
{return (this__109054.step === 0);
} else
{return and__3822__auto____109055;
}
})())
{return this__109054.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__109056 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__109056.start + (n * this__109056.step));
} else
{if((function (){var and__3822__auto____109057 = (this__109056.start > this__109056.end);
if(and__3822__auto____109057)
{return (this__109056.step === 0);
} else
{return and__3822__auto____109057;
}
})())
{return this__109056.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__109058 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__109058.meta);
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
var temp__3974__auto____109061 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____109061)
{var s__109062 = temp__3974__auto____109061;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__109062),take_nth.call(null,n,cljs.core.drop.call(null,n,s__109062)));
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
var temp__3974__auto____109069 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____109069)
{var s__109070 = temp__3974__auto____109069;
var fst__109071 = cljs.core.first.call(null,s__109070);
var fv__109072 = f.call(null,fst__109071);
var run__109073 = cljs.core.cons.call(null,fst__109071,cljs.core.take_while.call(null,(function (p1__109063_SHARP_){
return cljs.core._EQ_.call(null,fv__109072,f.call(null,p1__109063_SHARP_));
}),cljs.core.next.call(null,s__109070)));
return cljs.core.cons.call(null,run__109073,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__109073),s__109070))));
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
var temp__3971__auto____109088 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____109088)
{var s__109089 = temp__3971__auto____109088;
return reductions.call(null,f,cljs.core.first.call(null,s__109089),cljs.core.rest.call(null,s__109089));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____109090 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____109090)
{var s__109091 = temp__3974__auto____109090;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__109091)),cljs.core.rest.call(null,s__109091));
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
var G__109094 = null;
var G__109094__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__109094__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__109094__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__109094__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__109094__4 = (function() { 
var G__109095__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__109095 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__109095__delegate.call(this, x, y, z, args);
};
G__109095.cljs$lang$maxFixedArity = 3;
G__109095.cljs$lang$applyTo = (function (arglist__109096){
var x = cljs.core.first(arglist__109096);
var y = cljs.core.first(cljs.core.next(arglist__109096));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109096)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__109096)));
return G__109095__delegate(x, y, z, args);
});
G__109095.cljs$lang$arity$variadic = G__109095__delegate;
return G__109095;
})()
;
G__109094 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__109094__0.call(this);
case 1:
return G__109094__1.call(this,x);
case 2:
return G__109094__2.call(this,x,y);
case 3:
return G__109094__3.call(this,x,y,z);
default:
return G__109094__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__109094.cljs$lang$maxFixedArity = 3;
G__109094.cljs$lang$applyTo = G__109094__4.cljs$lang$applyTo;
return G__109094;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__109097 = null;
var G__109097__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__109097__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__109097__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__109097__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__109097__4 = (function() { 
var G__109098__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__109098 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__109098__delegate.call(this, x, y, z, args);
};
G__109098.cljs$lang$maxFixedArity = 3;
G__109098.cljs$lang$applyTo = (function (arglist__109099){
var x = cljs.core.first(arglist__109099);
var y = cljs.core.first(cljs.core.next(arglist__109099));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109099)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__109099)));
return G__109098__delegate(x, y, z, args);
});
G__109098.cljs$lang$arity$variadic = G__109098__delegate;
return G__109098;
})()
;
G__109097 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__109097__0.call(this);
case 1:
return G__109097__1.call(this,x);
case 2:
return G__109097__2.call(this,x,y);
case 3:
return G__109097__3.call(this,x,y,z);
default:
return G__109097__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__109097.cljs$lang$maxFixedArity = 3;
G__109097.cljs$lang$applyTo = G__109097__4.cljs$lang$applyTo;
return G__109097;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__109100 = null;
var G__109100__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__109100__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__109100__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__109100__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__109100__4 = (function() { 
var G__109101__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__109101 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__109101__delegate.call(this, x, y, z, args);
};
G__109101.cljs$lang$maxFixedArity = 3;
G__109101.cljs$lang$applyTo = (function (arglist__109102){
var x = cljs.core.first(arglist__109102);
var y = cljs.core.first(cljs.core.next(arglist__109102));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109102)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__109102)));
return G__109101__delegate(x, y, z, args);
});
G__109101.cljs$lang$arity$variadic = G__109101__delegate;
return G__109101;
})()
;
G__109100 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__109100__0.call(this);
case 1:
return G__109100__1.call(this,x);
case 2:
return G__109100__2.call(this,x,y);
case 3:
return G__109100__3.call(this,x,y,z);
default:
return G__109100__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__109100.cljs$lang$maxFixedArity = 3;
G__109100.cljs$lang$applyTo = G__109100__4.cljs$lang$applyTo;
return G__109100;
})()
});
var juxt__4 = (function() { 
var G__109103__delegate = function (f,g,h,fs){
var fs__109093 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__109104 = null;
var G__109104__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__109074_SHARP_,p2__109075_SHARP_){
return cljs.core.conj.call(null,p1__109074_SHARP_,p2__109075_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__109093);
});
var G__109104__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__109076_SHARP_,p2__109077_SHARP_){
return cljs.core.conj.call(null,p1__109076_SHARP_,p2__109077_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__109093);
});
var G__109104__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__109078_SHARP_,p2__109079_SHARP_){
return cljs.core.conj.call(null,p1__109078_SHARP_,p2__109079_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__109093);
});
var G__109104__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__109080_SHARP_,p2__109081_SHARP_){
return cljs.core.conj.call(null,p1__109080_SHARP_,p2__109081_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__109093);
});
var G__109104__4 = (function() { 
var G__109105__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__109082_SHARP_,p2__109083_SHARP_){
return cljs.core.conj.call(null,p1__109082_SHARP_,cljs.core.apply.call(null,p2__109083_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__109093);
};
var G__109105 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__109105__delegate.call(this, x, y, z, args);
};
G__109105.cljs$lang$maxFixedArity = 3;
G__109105.cljs$lang$applyTo = (function (arglist__109106){
var x = cljs.core.first(arglist__109106);
var y = cljs.core.first(cljs.core.next(arglist__109106));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109106)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__109106)));
return G__109105__delegate(x, y, z, args);
});
G__109105.cljs$lang$arity$variadic = G__109105__delegate;
return G__109105;
})()
;
G__109104 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__109104__0.call(this);
case 1:
return G__109104__1.call(this,x);
case 2:
return G__109104__2.call(this,x,y);
case 3:
return G__109104__3.call(this,x,y,z);
default:
return G__109104__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__109104.cljs$lang$maxFixedArity = 3;
G__109104.cljs$lang$applyTo = G__109104__4.cljs$lang$applyTo;
return G__109104;
})()
};
var G__109103 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__109103__delegate.call(this, f, g, h, fs);
};
G__109103.cljs$lang$maxFixedArity = 3;
G__109103.cljs$lang$applyTo = (function (arglist__109107){
var f = cljs.core.first(arglist__109107);
var g = cljs.core.first(cljs.core.next(arglist__109107));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109107)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__109107)));
return G__109103__delegate(f, g, h, fs);
});
G__109103.cljs$lang$arity$variadic = G__109103__delegate;
return G__109103;
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
var G__109110 = cljs.core.next.call(null,coll);
coll = G__109110;
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
if(cljs.core.truth_((function (){var and__3822__auto____109109 = cljs.core.seq.call(null,coll);
if(and__3822__auto____109109)
{return (n > 0);
} else
{return and__3822__auto____109109;
}
})()))
{{
var G__109111 = (n - 1);
var G__109112 = cljs.core.next.call(null,coll);
n = G__109111;
coll = G__109112;
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
var matches__109114 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__109114),s))
{if((cljs.core.count.call(null,matches__109114) === 1))
{return cljs.core.first.call(null,matches__109114);
} else
{return cljs.core.vec.call(null,matches__109114);
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
var matches__109116 = re.exec(s);
if((matches__109116 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__109116) === 1))
{return cljs.core.first.call(null,matches__109116);
} else
{return cljs.core.vec.call(null,matches__109116);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__109121 = cljs.core.re_find.call(null,re,s);
var match_idx__109122 = s.search(re);
var match_str__109123 = ((cljs.core.coll_QMARK_.call(null,match_data__109121))?cljs.core.first.call(null,match_data__109121):match_data__109121);
var post_match__109124 = cljs.core.subs.call(null,s,(match_idx__109122 + cljs.core.count.call(null,match_str__109123)));
if(cljs.core.truth_(match_data__109121))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__109121,re_seq.call(null,re,post_match__109124));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__109131__109132 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___109133 = cljs.core.nth.call(null,vec__109131__109132,0,null);
var flags__109134 = cljs.core.nth.call(null,vec__109131__109132,1,null);
var pattern__109135 = cljs.core.nth.call(null,vec__109131__109132,2,null);
return (new RegExp(pattern__109135,flags__109134));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__109125_SHARP_){
return print_one.call(null,p1__109125_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__109139__109140 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__109139__109140)
{var o__109141 = cljs.core.first.call(null,G__109139__109140);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__109141,writer,opts);
{
var G__109142 = cljs.core.next.call(null,G__109139__109140);
G__109139__109140 = G__109142;
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
var G__109146__109147 = cljs.core.seq.call(null,ss);
while(true){
if(G__109146__109147)
{var s__109148 = cljs.core.first.call(null,G__109146__109147);
cljs.core._write.call(null,writer,s__109148);
{
var G__109149 = cljs.core.next.call(null,G__109146__109147);
G__109146__109147 = G__109149;
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
write_all.cljs$lang$applyTo = (function (arglist__109150){
var writer = cljs.core.first(arglist__109150);
var ss = cljs.core.rest(arglist__109150);
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
var this__109151 = this;
return this__109151.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__109152 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____109162 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____109162))
{var and__3822__auto____109166 = (function (){var G__109163__109164 = obj;
if(G__109163__109164)
{if((function (){var or__3824__auto____109165 = (G__109163__109164.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____109165)
{return or__3824__auto____109165;
} else
{return G__109163__109164.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__109163__109164.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__109163__109164);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__109163__109164);
}
})();
if(cljs.core.truth_(and__3822__auto____109166))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____109166;
}
} else
{return and__3822__auto____109162;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____109167 = !((obj == null));
if(and__3822__auto____109167)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____109167;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__109168__109169 = obj;
if(G__109168__109169)
{if((function (){var or__3824__auto____109170 = (G__109168__109169.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____109170)
{return or__3824__auto____109170;
} else
{return G__109168__109169.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__109168__109169.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__109168__109169);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__109168__109169);
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
{if(cljs.core.truth_((function (){var and__3822__auto____109183 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____109183))
{var and__3822__auto____109187 = (function (){var G__109184__109185 = obj;
if(G__109184__109185)
{if((function (){var or__3824__auto____109186 = (G__109184__109185.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____109186)
{return or__3824__auto____109186;
} else
{return G__109184__109185.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__109184__109185.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__109184__109185);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__109184__109185);
}
})();
if(cljs.core.truth_(and__3822__auto____109187))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____109187;
}
} else
{return and__3822__auto____109183;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____109188 = !((obj == null));
if(and__3822__auto____109188)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____109188;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__109189__109190 = obj;
if(G__109189__109190)
{if((function (){var or__3824__auto____109191 = (G__109189__109190.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____109191)
{return or__3824__auto____109191;
} else
{return G__109189__109190.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__109189__109190.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__109189__109190);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__109189__109190);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__109192__109193 = obj;
if(G__109192__109193)
{if((function (){var or__3824__auto____109194 = (G__109192__109193.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____109194)
{return or__3824__auto____109194;
} else
{return G__109192__109193.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__109192__109193.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__109192__109193);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__109192__109193);
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
var G__109198__109199 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__109198__109199)
{var obj__109200 = cljs.core.first.call(null,G__109198__109199);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__109200,writer,opts);
{
var G__109201 = cljs.core.next.call(null,G__109198__109199);
G__109198__109199 = G__109201;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__109204 = (new goog.string.StringBuffer());
var writer__109205 = (new cljs.core.StringBufferWriter(sb__109204));
cljs.core.pr_seq_writer.call(null,objs,writer__109205,opts);
cljs.core._flush.call(null,writer__109205);
return sb__109204;
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
{var sb__109207 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__109207.append("\n");
return [cljs.core.str(sb__109207)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__109208){
var objs = cljs.core.seq(arglist__109208);;
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
prn_str.cljs$lang$applyTo = (function (arglist__109209){
var objs = cljs.core.seq(arglist__109209);;
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
pr.cljs$lang$applyTo = (function (arglist__109210){
var objs = cljs.core.seq(arglist__109210);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__109211){
var objs = cljs.core.seq(arglist__109211);;
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
print_str.cljs$lang$applyTo = (function (arglist__109212){
var objs = cljs.core.seq(arglist__109212);;
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
println.cljs$lang$applyTo = (function (arglist__109213){
var objs = cljs.core.seq(arglist__109213);;
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
println_str.cljs$lang$applyTo = (function (arglist__109214){
var objs = cljs.core.seq(arglist__109214);;
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
prn.cljs$lang$applyTo = (function (arglist__109215){
var objs = cljs.core.seq(arglist__109215);;
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
printf.cljs$lang$applyTo = (function (arglist__109216){
var fmt = cljs.core.first(arglist__109216);
var args = cljs.core.rest(arglist__109216);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__109217 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__109217,"{",", ","}",opts,coll);
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
var pr_pair__109218 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__109218,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__109219 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__109219,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____109220 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____109220))
{var nspc__109221 = temp__3974__auto____109220;
return [cljs.core.str(nspc__109221),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____109222 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____109222))
{var nspc__109223 = temp__3974__auto____109222;
return [cljs.core.str(nspc__109223),cljs.core.str("/")].join('');
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
var pr_pair__109224 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__109224,"{",", ","}",opts,coll);
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
var normalize__109226 = (function (n,len){
var ns__109225 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__109225) < len))
{{
var G__109228 = [cljs.core.str("0"),cljs.core.str(ns__109225)].join('');
ns__109225 = G__109228;
continue;
}
} else
{return ns__109225;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__109226.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__109226.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__109226.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__109226.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__109226.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__109226.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__109227 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__109227,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__109229 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__109229,"{",", ","}",opts,coll);
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
var pr_pair__109230 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__109230,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__109231 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__109231,"{",", ","}",opts,coll);
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
var temp__3974__auto____109232 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____109232))
{var nspc__109233 = temp__3974__auto____109232;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__109233)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____109234 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____109234))
{var nspc__109235 = temp__3974__auto____109234;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__109235)].join(''),"/");
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
var pr_pair__109236 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__109236,"{",", ","}",opts,coll);
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
var normalize__109238 = (function (n,len){
var ns__109237 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__109237) < len))
{{
var G__109240 = [cljs.core.str("0"),cljs.core.str(ns__109237)].join('');
ns__109237 = G__109240;
continue;
}
} else
{return ns__109237;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__109238.call(null,(d.getUTCMonth() + 1),2),"-",normalize__109238.call(null,d.getUTCDate(),2),"T",normalize__109238.call(null,d.getUTCHours(),2),":",normalize__109238.call(null,d.getUTCMinutes(),2),":",normalize__109238.call(null,d.getUTCSeconds(),2),".",normalize__109238.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__109239 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__109239,"{",", ","}",opts,coll);
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
var this__109241 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__109242 = this;
var G__109243__109244 = cljs.core.seq.call(null,this__109242.watches);
while(true){
if(G__109243__109244)
{var vec__109245__109246 = cljs.core.first.call(null,G__109243__109244);
var key__109247 = cljs.core.nth.call(null,vec__109245__109246,0,null);
var f__109248 = cljs.core.nth.call(null,vec__109245__109246,1,null);
f__109248.call(null,key__109247,this$,oldval,newval);
{
var G__109256 = cljs.core.next.call(null,G__109243__109244);
G__109243__109244 = G__109256;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__109249 = this;
return this$.watches = cljs.core.assoc.call(null,this__109249.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__109250 = this;
return this$.watches = cljs.core.dissoc.call(null,this__109250.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__109251 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__109251.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__109252 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__109252.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__109253 = this;
return this__109253.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__109254 = this;
return this__109254.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__109255 = this;
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
var G__109268__delegate = function (x,p__109257){
var map__109263__109264 = p__109257;
var map__109263__109265 = ((cljs.core.seq_QMARK_.call(null,map__109263__109264))?cljs.core.apply.call(null,cljs.core.hash_map,map__109263__109264):map__109263__109264);
var validator__109266 = cljs.core._lookup.call(null,map__109263__109265,"\uFDD0'validator",null);
var meta__109267 = cljs.core._lookup.call(null,map__109263__109265,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__109267,validator__109266,null));
};
var G__109268 = function (x,var_args){
var p__109257 = null;
if (goog.isDef(var_args)) {
  p__109257 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__109268__delegate.call(this, x, p__109257);
};
G__109268.cljs$lang$maxFixedArity = 1;
G__109268.cljs$lang$applyTo = (function (arglist__109269){
var x = cljs.core.first(arglist__109269);
var p__109257 = cljs.core.rest(arglist__109269);
return G__109268__delegate(x, p__109257);
});
G__109268.cljs$lang$arity$variadic = G__109268__delegate;
return G__109268;
})()
;
atom = function(x,var_args){
var p__109257 = var_args;
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
var temp__3974__auto____109273 = a.validator;
if(cljs.core.truth_(temp__3974__auto____109273))
{var validate__109274 = temp__3974__auto____109273;
if(cljs.core.truth_(validate__109274.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__109275 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__109275,new_value);
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
var G__109276__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__109276 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__109276__delegate.call(this, a, f, x, y, z, more);
};
G__109276.cljs$lang$maxFixedArity = 5;
G__109276.cljs$lang$applyTo = (function (arglist__109277){
var a = cljs.core.first(arglist__109277);
var f = cljs.core.first(cljs.core.next(arglist__109277));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__109277)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__109277))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__109277)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__109277)))));
return G__109276__delegate(a, f, x, y, z, more);
});
G__109276.cljs$lang$arity$variadic = G__109276__delegate;
return G__109276;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__109278){
var iref = cljs.core.first(arglist__109278);
var f = cljs.core.first(cljs.core.next(arglist__109278));
var args = cljs.core.rest(cljs.core.next(arglist__109278));
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
var this__109279 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__109279.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__109280 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__109280.state,(function (p__109281){
var map__109282__109283 = p__109281;
var map__109282__109284 = ((cljs.core.seq_QMARK_.call(null,map__109282__109283))?cljs.core.apply.call(null,cljs.core.hash_map,map__109282__109283):map__109282__109283);
var curr_state__109285 = map__109282__109284;
var done__109286 = cljs.core._lookup.call(null,map__109282__109284,"\uFDD0'done",null);
if(cljs.core.truth_(done__109286))
{return curr_state__109285;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__109280.f.call(null)});
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
var map__109307__109308 = options;
var map__109307__109309 = ((cljs.core.seq_QMARK_.call(null,map__109307__109308))?cljs.core.apply.call(null,cljs.core.hash_map,map__109307__109308):map__109307__109308);
var keywordize_keys__109310 = cljs.core._lookup.call(null,map__109307__109309,"\uFDD0'keywordize-keys",null);
var keyfn__109311 = (cljs.core.truth_(keywordize_keys__109310)?cljs.core.keyword:cljs.core.str);
var f__109326 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5725__auto____109325 = (function iter__109319(s__109320){
return (new cljs.core.LazySeq(null,false,(function (){
var s__109320__109323 = s__109320;
while(true){
if(cljs.core.seq.call(null,s__109320__109323))
{var k__109324 = cljs.core.first.call(null,s__109320__109323);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__109311.call(null,k__109324),thisfn.call(null,(x[k__109324]))], true),iter__109319.call(null,cljs.core.rest.call(null,s__109320__109323)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5725__auto____109325.call(null,cljs.core.js_keys.call(null,x));
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
return f__109326.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__109327){
var x = cljs.core.first(arglist__109327);
var options = cljs.core.rest(arglist__109327);
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
var mem__109332 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__109336__delegate = function (args){
var temp__3971__auto____109333 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__109332),args,null);
if(cljs.core.truth_(temp__3971__auto____109333))
{var v__109334 = temp__3971__auto____109333;
return v__109334;
} else
{var ret__109335 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__109332,cljs.core.assoc,args,ret__109335);
return ret__109335;
}
};
var G__109336 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__109336__delegate.call(this, args);
};
G__109336.cljs$lang$maxFixedArity = 0;
G__109336.cljs$lang$applyTo = (function (arglist__109337){
var args = cljs.core.seq(arglist__109337);;
return G__109336__delegate(args);
});
G__109336.cljs$lang$arity$variadic = G__109336__delegate;
return G__109336;
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
var ret__109339 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__109339))
{{
var G__109340 = ret__109339;
f = G__109340;
continue;
}
} else
{return ret__109339;
}
break;
}
});
var trampoline__2 = (function() { 
var G__109341__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__109341 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__109341__delegate.call(this, f, args);
};
G__109341.cljs$lang$maxFixedArity = 1;
G__109341.cljs$lang$applyTo = (function (arglist__109342){
var f = cljs.core.first(arglist__109342);
var args = cljs.core.rest(arglist__109342);
return G__109341__delegate(f, args);
});
G__109341.cljs$lang$arity$variadic = G__109341__delegate;
return G__109341;
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
var k__109344 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__109344,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__109344,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____109353 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____109353)
{return or__3824__auto____109353;
} else
{var or__3824__auto____109354 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____109354)
{return or__3824__auto____109354;
} else
{var and__3822__auto____109355 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____109355)
{var and__3822__auto____109356 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____109356)
{var and__3822__auto____109357 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____109357)
{var ret__109358 = true;
var i__109359 = 0;
while(true){
if((function (){var or__3824__auto____109360 = cljs.core.not.call(null,ret__109358);
if(or__3824__auto____109360)
{return or__3824__auto____109360;
} else
{return (i__109359 === cljs.core.count.call(null,parent));
}
})())
{return ret__109358;
} else
{{
var G__109361 = isa_QMARK_.call(null,h,child.call(null,i__109359),parent.call(null,i__109359));
var G__109362 = (i__109359 + 1);
ret__109358 = G__109361;
i__109359 = G__109362;
continue;
}
}
break;
}
} else
{return and__3822__auto____109357;
}
} else
{return and__3822__auto____109356;
}
} else
{return and__3822__auto____109355;
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
var tp__109371 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__109372 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__109373 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__109374 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____109375 = ((cljs.core.contains_QMARK_.call(null,tp__109371.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__109373.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__109373.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__109371,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__109374.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__109372,parent,ta__109373),"\uFDD0'descendants":tf__109374.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__109373,tag,td__109372)});
})());
if(cljs.core.truth_(or__3824__auto____109375))
{return or__3824__auto____109375;
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
var parentMap__109380 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__109381 = (cljs.core.truth_(parentMap__109380.call(null,tag))?cljs.core.disj.call(null,parentMap__109380.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__109382 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__109381))?cljs.core.assoc.call(null,parentMap__109380,tag,childsParents__109381):cljs.core.dissoc.call(null,parentMap__109380,tag));
var deriv_seq__109383 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__109363_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__109363_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__109363_SHARP_),cljs.core.second.call(null,p1__109363_SHARP_)));
}),cljs.core.seq.call(null,newParents__109382)));
if(cljs.core.contains_QMARK_.call(null,parentMap__109380.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__109364_SHARP_,p2__109365_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__109364_SHARP_,p2__109365_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__109383));
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
var xprefs__109391 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____109393 = (cljs.core.truth_((function (){var and__3822__auto____109392 = xprefs__109391;
if(cljs.core.truth_(and__3822__auto____109392))
{return xprefs__109391.call(null,y);
} else
{return and__3822__auto____109392;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____109393))
{return or__3824__auto____109393;
} else
{var or__3824__auto____109395 = (function (){var ps__109394 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__109394) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__109394),prefer_table)))
{} else
{}
{
var G__109398 = cljs.core.rest.call(null,ps__109394);
ps__109394 = G__109398;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____109395))
{return or__3824__auto____109395;
} else
{var or__3824__auto____109397 = (function (){var ps__109396 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__109396) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__109396),y,prefer_table)))
{} else
{}
{
var G__109399 = cljs.core.rest.call(null,ps__109396);
ps__109396 = G__109399;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____109397))
{return or__3824__auto____109397;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____109401 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____109401))
{return or__3824__auto____109401;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__109419 = cljs.core.reduce.call(null,(function (be,p__109411){
var vec__109412__109413 = p__109411;
var k__109414 = cljs.core.nth.call(null,vec__109412__109413,0,null);
var ___109415 = cljs.core.nth.call(null,vec__109412__109413,1,null);
var e__109416 = vec__109412__109413;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__109414))
{var be2__109418 = (cljs.core.truth_((function (){var or__3824__auto____109417 = (be == null);
if(or__3824__auto____109417)
{return or__3824__auto____109417;
} else
{return cljs.core.dominates.call(null,k__109414,cljs.core.first.call(null,be),prefer_table);
}
})())?e__109416:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__109418),k__109414,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__109414),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__109418)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__109418;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__109419))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__109419));
return cljs.core.second.call(null,best_entry__109419);
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
if((function (){var and__3822__auto____109424 = mf;
if(and__3822__auto____109424)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____109424;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5628__auto____109425 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109426 = (cljs.core._reset[goog.typeOf(x__5628__auto____109425)]);
if(or__3824__auto____109426)
{return or__3824__auto____109426;
} else
{var or__3824__auto____109427 = (cljs.core._reset["_"]);
if(or__3824__auto____109427)
{return or__3824__auto____109427;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____109432 = mf;
if(and__3822__auto____109432)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____109432;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5628__auto____109433 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109434 = (cljs.core._add_method[goog.typeOf(x__5628__auto____109433)]);
if(or__3824__auto____109434)
{return or__3824__auto____109434;
} else
{var or__3824__auto____109435 = (cljs.core._add_method["_"]);
if(or__3824__auto____109435)
{return or__3824__auto____109435;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____109440 = mf;
if(and__3822__auto____109440)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____109440;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5628__auto____109441 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109442 = (cljs.core._remove_method[goog.typeOf(x__5628__auto____109441)]);
if(or__3824__auto____109442)
{return or__3824__auto____109442;
} else
{var or__3824__auto____109443 = (cljs.core._remove_method["_"]);
if(or__3824__auto____109443)
{return or__3824__auto____109443;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____109448 = mf;
if(and__3822__auto____109448)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____109448;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5628__auto____109449 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109450 = (cljs.core._prefer_method[goog.typeOf(x__5628__auto____109449)]);
if(or__3824__auto____109450)
{return or__3824__auto____109450;
} else
{var or__3824__auto____109451 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____109451)
{return or__3824__auto____109451;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____109456 = mf;
if(and__3822__auto____109456)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____109456;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5628__auto____109457 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109458 = (cljs.core._get_method[goog.typeOf(x__5628__auto____109457)]);
if(or__3824__auto____109458)
{return or__3824__auto____109458;
} else
{var or__3824__auto____109459 = (cljs.core._get_method["_"]);
if(or__3824__auto____109459)
{return or__3824__auto____109459;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____109464 = mf;
if(and__3822__auto____109464)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____109464;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5628__auto____109465 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109466 = (cljs.core._methods[goog.typeOf(x__5628__auto____109465)]);
if(or__3824__auto____109466)
{return or__3824__auto____109466;
} else
{var or__3824__auto____109467 = (cljs.core._methods["_"]);
if(or__3824__auto____109467)
{return or__3824__auto____109467;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____109472 = mf;
if(and__3822__auto____109472)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____109472;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5628__auto____109473 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109474 = (cljs.core._prefers[goog.typeOf(x__5628__auto____109473)]);
if(or__3824__auto____109474)
{return or__3824__auto____109474;
} else
{var or__3824__auto____109475 = (cljs.core._prefers["_"]);
if(or__3824__auto____109475)
{return or__3824__auto____109475;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____109480 = mf;
if(and__3822__auto____109480)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____109480;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5628__auto____109481 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____109482 = (cljs.core._dispatch[goog.typeOf(x__5628__auto____109481)]);
if(or__3824__auto____109482)
{return or__3824__auto____109482;
} else
{var or__3824__auto____109483 = (cljs.core._dispatch["_"]);
if(or__3824__auto____109483)
{return or__3824__auto____109483;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__109486 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__109487 = cljs.core._get_method.call(null,mf,dispatch_val__109486);
if(cljs.core.truth_(target_fn__109487))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__109486)].join('')));
}
return cljs.core.apply.call(null,target_fn__109487,args);
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
var this__109488 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__109489 = this;
cljs.core.swap_BANG_.call(null,this__109489.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__109489.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__109489.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__109489.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__109490 = this;
cljs.core.swap_BANG_.call(null,this__109490.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__109490.method_cache,this__109490.method_table,this__109490.cached_hierarchy,this__109490.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__109491 = this;
cljs.core.swap_BANG_.call(null,this__109491.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__109491.method_cache,this__109491.method_table,this__109491.cached_hierarchy,this__109491.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__109492 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__109492.cached_hierarchy),cljs.core.deref.call(null,this__109492.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__109492.method_cache,this__109492.method_table,this__109492.cached_hierarchy,this__109492.hierarchy);
}
var temp__3971__auto____109493 = cljs.core.deref.call(null,this__109492.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____109493))
{var target_fn__109494 = temp__3971__auto____109493;
return target_fn__109494;
} else
{var temp__3971__auto____109495 = cljs.core.find_and_cache_best_method.call(null,this__109492.name,dispatch_val,this__109492.hierarchy,this__109492.method_table,this__109492.prefer_table,this__109492.method_cache,this__109492.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____109495))
{var target_fn__109496 = temp__3971__auto____109495;
return target_fn__109496;
} else
{return cljs.core.deref.call(null,this__109492.method_table).call(null,this__109492.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__109497 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__109497.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__109497.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__109497.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__109497.method_cache,this__109497.method_table,this__109497.cached_hierarchy,this__109497.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__109498 = this;
return cljs.core.deref.call(null,this__109498.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__109499 = this;
return cljs.core.deref.call(null,this__109499.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__109500 = this;
return cljs.core.do_dispatch.call(null,mf,this__109500.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__109502__delegate = function (_,args){
var self__109501 = this;
return cljs.core._dispatch.call(null,self__109501,args);
};
var G__109502 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__109502__delegate.call(this, _, args);
};
G__109502.cljs$lang$maxFixedArity = 1;
G__109502.cljs$lang$applyTo = (function (arglist__109503){
var _ = cljs.core.first(arglist__109503);
var args = cljs.core.rest(arglist__109503);
return G__109502__delegate(_, args);
});
G__109502.cljs$lang$arity$variadic = G__109502__delegate;
return G__109502;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__109504 = this;
return cljs.core._dispatch.call(null,self__109504,args);
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
var this__109505 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_109507,writer,_){
var this__109506 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__109506.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_109509,_){
var this__109508 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__109508.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__109510 = this;
var and__3822__auto____109511 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____109511)
{return (this__109510.uuid === other.uuid);
} else
{return and__3822__auto____109511;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__109512 = this;
var this__109513 = this;
return cljs.core.pr_str.call(null,this__109513);
});
cljs.core.UUID;
