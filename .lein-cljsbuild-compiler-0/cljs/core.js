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
var x__422653 = (((x == null))?null:x);
if((p[goog.typeOf(x__422653)]))
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
var G__422654__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__422654 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__422654__delegate.call(this, array, i, idxs);
};
G__422654.cljs$lang$maxFixedArity = 2;
G__422654.cljs$lang$applyTo = (function (arglist__422655){
var array = cljs.core.first(arglist__422655);
var i = cljs.core.first(cljs.core.next(arglist__422655));
var idxs = cljs.core.rest(cljs.core.next(arglist__422655));
return G__422654__delegate(array, i, idxs);
});
G__422654.cljs$lang$arity$variadic = G__422654__delegate;
return G__422654;
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
if((function (){var and__3822__auto____422740 = this$;
if(and__3822__auto____422740)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____422740;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__5854__auto____422741 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422742 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422741)]);
if(or__3824__auto____422742)
{return or__3824__auto____422742;
} else
{var or__3824__auto____422743 = (cljs.core._invoke["_"]);
if(or__3824__auto____422743)
{return or__3824__auto____422743;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____422744 = this$;
if(and__3822__auto____422744)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____422744;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__5854__auto____422745 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422746 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422745)]);
if(or__3824__auto____422746)
{return or__3824__auto____422746;
} else
{var or__3824__auto____422747 = (cljs.core._invoke["_"]);
if(or__3824__auto____422747)
{return or__3824__auto____422747;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____422748 = this$;
if(and__3822__auto____422748)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____422748;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__5854__auto____422749 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422750 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422749)]);
if(or__3824__auto____422750)
{return or__3824__auto____422750;
} else
{var or__3824__auto____422751 = (cljs.core._invoke["_"]);
if(or__3824__auto____422751)
{return or__3824__auto____422751;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____422752 = this$;
if(and__3822__auto____422752)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____422752;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__5854__auto____422753 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422754 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422753)]);
if(or__3824__auto____422754)
{return or__3824__auto____422754;
} else
{var or__3824__auto____422755 = (cljs.core._invoke["_"]);
if(or__3824__auto____422755)
{return or__3824__auto____422755;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____422756 = this$;
if(and__3822__auto____422756)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____422756;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__5854__auto____422757 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422758 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422757)]);
if(or__3824__auto____422758)
{return or__3824__auto____422758;
} else
{var or__3824__auto____422759 = (cljs.core._invoke["_"]);
if(or__3824__auto____422759)
{return or__3824__auto____422759;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____422760 = this$;
if(and__3822__auto____422760)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____422760;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__5854__auto____422761 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422762 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422761)]);
if(or__3824__auto____422762)
{return or__3824__auto____422762;
} else
{var or__3824__auto____422763 = (cljs.core._invoke["_"]);
if(or__3824__auto____422763)
{return or__3824__auto____422763;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____422764 = this$;
if(and__3822__auto____422764)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____422764;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__5854__auto____422765 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422766 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422765)]);
if(or__3824__auto____422766)
{return or__3824__auto____422766;
} else
{var or__3824__auto____422767 = (cljs.core._invoke["_"]);
if(or__3824__auto____422767)
{return or__3824__auto____422767;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____422768 = this$;
if(and__3822__auto____422768)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____422768;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__5854__auto____422769 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422770 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422769)]);
if(or__3824__auto____422770)
{return or__3824__auto____422770;
} else
{var or__3824__auto____422771 = (cljs.core._invoke["_"]);
if(or__3824__auto____422771)
{return or__3824__auto____422771;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____422772 = this$;
if(and__3822__auto____422772)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____422772;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__5854__auto____422773 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422774 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422773)]);
if(or__3824__auto____422774)
{return or__3824__auto____422774;
} else
{var or__3824__auto____422775 = (cljs.core._invoke["_"]);
if(or__3824__auto____422775)
{return or__3824__auto____422775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____422776 = this$;
if(and__3822__auto____422776)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____422776;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__5854__auto____422777 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422778 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422777)]);
if(or__3824__auto____422778)
{return or__3824__auto____422778;
} else
{var or__3824__auto____422779 = (cljs.core._invoke["_"]);
if(or__3824__auto____422779)
{return or__3824__auto____422779;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____422780 = this$;
if(and__3822__auto____422780)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____422780;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__5854__auto____422781 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422782 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422781)]);
if(or__3824__auto____422782)
{return or__3824__auto____422782;
} else
{var or__3824__auto____422783 = (cljs.core._invoke["_"]);
if(or__3824__auto____422783)
{return or__3824__auto____422783;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____422784 = this$;
if(and__3822__auto____422784)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____422784;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__5854__auto____422785 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422786 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422785)]);
if(or__3824__auto____422786)
{return or__3824__auto____422786;
} else
{var or__3824__auto____422787 = (cljs.core._invoke["_"]);
if(or__3824__auto____422787)
{return or__3824__auto____422787;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____422788 = this$;
if(and__3822__auto____422788)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____422788;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__5854__auto____422789 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422790 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422789)]);
if(or__3824__auto____422790)
{return or__3824__auto____422790;
} else
{var or__3824__auto____422791 = (cljs.core._invoke["_"]);
if(or__3824__auto____422791)
{return or__3824__auto____422791;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____422792 = this$;
if(and__3822__auto____422792)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____422792;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__5854__auto____422793 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422794 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422793)]);
if(or__3824__auto____422794)
{return or__3824__auto____422794;
} else
{var or__3824__auto____422795 = (cljs.core._invoke["_"]);
if(or__3824__auto____422795)
{return or__3824__auto____422795;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____422796 = this$;
if(and__3822__auto____422796)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____422796;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__5854__auto____422797 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422798 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422797)]);
if(or__3824__auto____422798)
{return or__3824__auto____422798;
} else
{var or__3824__auto____422799 = (cljs.core._invoke["_"]);
if(or__3824__auto____422799)
{return or__3824__auto____422799;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____422800 = this$;
if(and__3822__auto____422800)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____422800;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__5854__auto____422801 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422802 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422801)]);
if(or__3824__auto____422802)
{return or__3824__auto____422802;
} else
{var or__3824__auto____422803 = (cljs.core._invoke["_"]);
if(or__3824__auto____422803)
{return or__3824__auto____422803;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____422804 = this$;
if(and__3822__auto____422804)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____422804;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__5854__auto____422805 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422806 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422805)]);
if(or__3824__auto____422806)
{return or__3824__auto____422806;
} else
{var or__3824__auto____422807 = (cljs.core._invoke["_"]);
if(or__3824__auto____422807)
{return or__3824__auto____422807;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____422808 = this$;
if(and__3822__auto____422808)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____422808;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__5854__auto____422809 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422810 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422809)]);
if(or__3824__auto____422810)
{return or__3824__auto____422810;
} else
{var or__3824__auto____422811 = (cljs.core._invoke["_"]);
if(or__3824__auto____422811)
{return or__3824__auto____422811;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____422812 = this$;
if(and__3822__auto____422812)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____422812;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__5854__auto____422813 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422814 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422813)]);
if(or__3824__auto____422814)
{return or__3824__auto____422814;
} else
{var or__3824__auto____422815 = (cljs.core._invoke["_"]);
if(or__3824__auto____422815)
{return or__3824__auto____422815;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____422816 = this$;
if(and__3822__auto____422816)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____422816;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__5854__auto____422817 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422818 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422817)]);
if(or__3824__auto____422818)
{return or__3824__auto____422818;
} else
{var or__3824__auto____422819 = (cljs.core._invoke["_"]);
if(or__3824__auto____422819)
{return or__3824__auto____422819;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____422820 = this$;
if(and__3822__auto____422820)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____422820;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__5854__auto____422821 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____422822 = (cljs.core._invoke[goog.typeOf(x__5854__auto____422821)]);
if(or__3824__auto____422822)
{return or__3824__auto____422822;
} else
{var or__3824__auto____422823 = (cljs.core._invoke["_"]);
if(or__3824__auto____422823)
{return or__3824__auto____422823;
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
if((function (){var and__3822__auto____422828 = coll;
if(and__3822__auto____422828)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____422828;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__5854__auto____422829 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422830 = (cljs.core._count[goog.typeOf(x__5854__auto____422829)]);
if(or__3824__auto____422830)
{return or__3824__auto____422830;
} else
{var or__3824__auto____422831 = (cljs.core._count["_"]);
if(or__3824__auto____422831)
{return or__3824__auto____422831;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____422836 = coll;
if(and__3822__auto____422836)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____422836;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__5854__auto____422837 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422838 = (cljs.core._empty[goog.typeOf(x__5854__auto____422837)]);
if(or__3824__auto____422838)
{return or__3824__auto____422838;
} else
{var or__3824__auto____422839 = (cljs.core._empty["_"]);
if(or__3824__auto____422839)
{return or__3824__auto____422839;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____422844 = coll;
if(and__3822__auto____422844)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____422844;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__5854__auto____422845 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422846 = (cljs.core._conj[goog.typeOf(x__5854__auto____422845)]);
if(or__3824__auto____422846)
{return or__3824__auto____422846;
} else
{var or__3824__auto____422847 = (cljs.core._conj["_"]);
if(or__3824__auto____422847)
{return or__3824__auto____422847;
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
if((function (){var and__3822__auto____422856 = coll;
if(and__3822__auto____422856)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____422856;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__5854__auto____422857 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422858 = (cljs.core._nth[goog.typeOf(x__5854__auto____422857)]);
if(or__3824__auto____422858)
{return or__3824__auto____422858;
} else
{var or__3824__auto____422859 = (cljs.core._nth["_"]);
if(or__3824__auto____422859)
{return or__3824__auto____422859;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____422860 = coll;
if(and__3822__auto____422860)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____422860;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__5854__auto____422861 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422862 = (cljs.core._nth[goog.typeOf(x__5854__auto____422861)]);
if(or__3824__auto____422862)
{return or__3824__auto____422862;
} else
{var or__3824__auto____422863 = (cljs.core._nth["_"]);
if(or__3824__auto____422863)
{return or__3824__auto____422863;
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
if((function (){var and__3822__auto____422868 = coll;
if(and__3822__auto____422868)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____422868;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__5854__auto____422869 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422870 = (cljs.core._first[goog.typeOf(x__5854__auto____422869)]);
if(or__3824__auto____422870)
{return or__3824__auto____422870;
} else
{var or__3824__auto____422871 = (cljs.core._first["_"]);
if(or__3824__auto____422871)
{return or__3824__auto____422871;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____422876 = coll;
if(and__3822__auto____422876)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____422876;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__5854__auto____422877 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422878 = (cljs.core._rest[goog.typeOf(x__5854__auto____422877)]);
if(or__3824__auto____422878)
{return or__3824__auto____422878;
} else
{var or__3824__auto____422879 = (cljs.core._rest["_"]);
if(or__3824__auto____422879)
{return or__3824__auto____422879;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____422884 = coll;
if(and__3822__auto____422884)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____422884;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__5854__auto____422885 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422886 = (cljs.core._next[goog.typeOf(x__5854__auto____422885)]);
if(or__3824__auto____422886)
{return or__3824__auto____422886;
} else
{var or__3824__auto____422887 = (cljs.core._next["_"]);
if(or__3824__auto____422887)
{return or__3824__auto____422887;
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
if((function (){var and__3822__auto____422896 = o;
if(and__3822__auto____422896)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____422896;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__5854__auto____422897 = (((o == null))?null:o);
return (function (){var or__3824__auto____422898 = (cljs.core._lookup[goog.typeOf(x__5854__auto____422897)]);
if(or__3824__auto____422898)
{return or__3824__auto____422898;
} else
{var or__3824__auto____422899 = (cljs.core._lookup["_"]);
if(or__3824__auto____422899)
{return or__3824__auto____422899;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____422900 = o;
if(and__3822__auto____422900)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____422900;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__5854__auto____422901 = (((o == null))?null:o);
return (function (){var or__3824__auto____422902 = (cljs.core._lookup[goog.typeOf(x__5854__auto____422901)]);
if(or__3824__auto____422902)
{return or__3824__auto____422902;
} else
{var or__3824__auto____422903 = (cljs.core._lookup["_"]);
if(or__3824__auto____422903)
{return or__3824__auto____422903;
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
if((function (){var and__3822__auto____422908 = coll;
if(and__3822__auto____422908)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____422908;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__5854__auto____422909 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422910 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__5854__auto____422909)]);
if(or__3824__auto____422910)
{return or__3824__auto____422910;
} else
{var or__3824__auto____422911 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____422911)
{return or__3824__auto____422911;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____422916 = coll;
if(and__3822__auto____422916)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____422916;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__5854__auto____422917 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422918 = (cljs.core._assoc[goog.typeOf(x__5854__auto____422917)]);
if(or__3824__auto____422918)
{return or__3824__auto____422918;
} else
{var or__3824__auto____422919 = (cljs.core._assoc["_"]);
if(or__3824__auto____422919)
{return or__3824__auto____422919;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____422924 = coll;
if(and__3822__auto____422924)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____422924;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__5854__auto____422925 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422926 = (cljs.core._dissoc[goog.typeOf(x__5854__auto____422925)]);
if(or__3824__auto____422926)
{return or__3824__auto____422926;
} else
{var or__3824__auto____422927 = (cljs.core._dissoc["_"]);
if(or__3824__auto____422927)
{return or__3824__auto____422927;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____422932 = coll;
if(and__3822__auto____422932)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____422932;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__5854__auto____422933 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422934 = (cljs.core._key[goog.typeOf(x__5854__auto____422933)]);
if(or__3824__auto____422934)
{return or__3824__auto____422934;
} else
{var or__3824__auto____422935 = (cljs.core._key["_"]);
if(or__3824__auto____422935)
{return or__3824__auto____422935;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____422940 = coll;
if(and__3822__auto____422940)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____422940;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__5854__auto____422941 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422942 = (cljs.core._val[goog.typeOf(x__5854__auto____422941)]);
if(or__3824__auto____422942)
{return or__3824__auto____422942;
} else
{var or__3824__auto____422943 = (cljs.core._val["_"]);
if(or__3824__auto____422943)
{return or__3824__auto____422943;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____422948 = coll;
if(and__3822__auto____422948)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____422948;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__5854__auto____422949 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422950 = (cljs.core._disjoin[goog.typeOf(x__5854__auto____422949)]);
if(or__3824__auto____422950)
{return or__3824__auto____422950;
} else
{var or__3824__auto____422951 = (cljs.core._disjoin["_"]);
if(or__3824__auto____422951)
{return or__3824__auto____422951;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____422956 = coll;
if(and__3822__auto____422956)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____422956;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__5854__auto____422957 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422958 = (cljs.core._peek[goog.typeOf(x__5854__auto____422957)]);
if(or__3824__auto____422958)
{return or__3824__auto____422958;
} else
{var or__3824__auto____422959 = (cljs.core._peek["_"]);
if(or__3824__auto____422959)
{return or__3824__auto____422959;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____422964 = coll;
if(and__3822__auto____422964)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____422964;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__5854__auto____422965 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422966 = (cljs.core._pop[goog.typeOf(x__5854__auto____422965)]);
if(or__3824__auto____422966)
{return or__3824__auto____422966;
} else
{var or__3824__auto____422967 = (cljs.core._pop["_"]);
if(or__3824__auto____422967)
{return or__3824__auto____422967;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____422972 = coll;
if(and__3822__auto____422972)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____422972;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__5854__auto____422973 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____422974 = (cljs.core._assoc_n[goog.typeOf(x__5854__auto____422973)]);
if(or__3824__auto____422974)
{return or__3824__auto____422974;
} else
{var or__3824__auto____422975 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____422975)
{return or__3824__auto____422975;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____422980 = o;
if(and__3822__auto____422980)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____422980;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__5854__auto____422981 = (((o == null))?null:o);
return (function (){var or__3824__auto____422982 = (cljs.core._deref[goog.typeOf(x__5854__auto____422981)]);
if(or__3824__auto____422982)
{return or__3824__auto____422982;
} else
{var or__3824__auto____422983 = (cljs.core._deref["_"]);
if(or__3824__auto____422983)
{return or__3824__auto____422983;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____422988 = o;
if(and__3822__auto____422988)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____422988;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__5854__auto____422989 = (((o == null))?null:o);
return (function (){var or__3824__auto____422990 = (cljs.core._deref_with_timeout[goog.typeOf(x__5854__auto____422989)]);
if(or__3824__auto____422990)
{return or__3824__auto____422990;
} else
{var or__3824__auto____422991 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____422991)
{return or__3824__auto____422991;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____422996 = o;
if(and__3822__auto____422996)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____422996;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__5854__auto____422997 = (((o == null))?null:o);
return (function (){var or__3824__auto____422998 = (cljs.core._meta[goog.typeOf(x__5854__auto____422997)]);
if(or__3824__auto____422998)
{return or__3824__auto____422998;
} else
{var or__3824__auto____422999 = (cljs.core._meta["_"]);
if(or__3824__auto____422999)
{return or__3824__auto____422999;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____423004 = o;
if(and__3822__auto____423004)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____423004;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__5854__auto____423005 = (((o == null))?null:o);
return (function (){var or__3824__auto____423006 = (cljs.core._with_meta[goog.typeOf(x__5854__auto____423005)]);
if(or__3824__auto____423006)
{return or__3824__auto____423006;
} else
{var or__3824__auto____423007 = (cljs.core._with_meta["_"]);
if(or__3824__auto____423007)
{return or__3824__auto____423007;
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
if((function (){var and__3822__auto____423016 = coll;
if(and__3822__auto____423016)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____423016;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__5854__auto____423017 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423018 = (cljs.core._reduce[goog.typeOf(x__5854__auto____423017)]);
if(or__3824__auto____423018)
{return or__3824__auto____423018;
} else
{var or__3824__auto____423019 = (cljs.core._reduce["_"]);
if(or__3824__auto____423019)
{return or__3824__auto____423019;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____423020 = coll;
if(and__3822__auto____423020)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____423020;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__5854__auto____423021 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423022 = (cljs.core._reduce[goog.typeOf(x__5854__auto____423021)]);
if(or__3824__auto____423022)
{return or__3824__auto____423022;
} else
{var or__3824__auto____423023 = (cljs.core._reduce["_"]);
if(or__3824__auto____423023)
{return or__3824__auto____423023;
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
if((function (){var and__3822__auto____423028 = coll;
if(and__3822__auto____423028)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____423028;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__5854__auto____423029 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423030 = (cljs.core._kv_reduce[goog.typeOf(x__5854__auto____423029)]);
if(or__3824__auto____423030)
{return or__3824__auto____423030;
} else
{var or__3824__auto____423031 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____423031)
{return or__3824__auto____423031;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____423036 = o;
if(and__3822__auto____423036)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____423036;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__5854__auto____423037 = (((o == null))?null:o);
return (function (){var or__3824__auto____423038 = (cljs.core._equiv[goog.typeOf(x__5854__auto____423037)]);
if(or__3824__auto____423038)
{return or__3824__auto____423038;
} else
{var or__3824__auto____423039 = (cljs.core._equiv["_"]);
if(or__3824__auto____423039)
{return or__3824__auto____423039;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____423044 = o;
if(and__3822__auto____423044)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____423044;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__5854__auto____423045 = (((o == null))?null:o);
return (function (){var or__3824__auto____423046 = (cljs.core._hash[goog.typeOf(x__5854__auto____423045)]);
if(or__3824__auto____423046)
{return or__3824__auto____423046;
} else
{var or__3824__auto____423047 = (cljs.core._hash["_"]);
if(or__3824__auto____423047)
{return or__3824__auto____423047;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____423052 = o;
if(and__3822__auto____423052)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____423052;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__5854__auto____423053 = (((o == null))?null:o);
return (function (){var or__3824__auto____423054 = (cljs.core._seq[goog.typeOf(x__5854__auto____423053)]);
if(or__3824__auto____423054)
{return or__3824__auto____423054;
} else
{var or__3824__auto____423055 = (cljs.core._seq["_"]);
if(or__3824__auto____423055)
{return or__3824__auto____423055;
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
if((function (){var and__3822__auto____423060 = coll;
if(and__3822__auto____423060)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____423060;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__5854__auto____423061 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423062 = (cljs.core._rseq[goog.typeOf(x__5854__auto____423061)]);
if(or__3824__auto____423062)
{return or__3824__auto____423062;
} else
{var or__3824__auto____423063 = (cljs.core._rseq["_"]);
if(or__3824__auto____423063)
{return or__3824__auto____423063;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____423068 = coll;
if(and__3822__auto____423068)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____423068;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__5854__auto____423069 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423070 = (cljs.core._sorted_seq[goog.typeOf(x__5854__auto____423069)]);
if(or__3824__auto____423070)
{return or__3824__auto____423070;
} else
{var or__3824__auto____423071 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____423071)
{return or__3824__auto____423071;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____423076 = coll;
if(and__3822__auto____423076)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____423076;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__5854__auto____423077 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423078 = (cljs.core._sorted_seq_from[goog.typeOf(x__5854__auto____423077)]);
if(or__3824__auto____423078)
{return or__3824__auto____423078;
} else
{var or__3824__auto____423079 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____423079)
{return or__3824__auto____423079;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____423084 = coll;
if(and__3822__auto____423084)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____423084;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__5854__auto____423085 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423086 = (cljs.core._entry_key[goog.typeOf(x__5854__auto____423085)]);
if(or__3824__auto____423086)
{return or__3824__auto____423086;
} else
{var or__3824__auto____423087 = (cljs.core._entry_key["_"]);
if(or__3824__auto____423087)
{return or__3824__auto____423087;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____423092 = coll;
if(and__3822__auto____423092)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____423092;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__5854__auto____423093 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423094 = (cljs.core._comparator[goog.typeOf(x__5854__auto____423093)]);
if(or__3824__auto____423094)
{return or__3824__auto____423094;
} else
{var or__3824__auto____423095 = (cljs.core._comparator["_"]);
if(or__3824__auto____423095)
{return or__3824__auto____423095;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____423100 = o;
if(and__3822__auto____423100)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____423100;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__5854__auto____423101 = (((o == null))?null:o);
return (function (){var or__3824__auto____423102 = (cljs.core._pr_seq[goog.typeOf(x__5854__auto____423101)]);
if(or__3824__auto____423102)
{return or__3824__auto____423102;
} else
{var or__3824__auto____423103 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____423103)
{return or__3824__auto____423103;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____423108 = writer;
if(and__3822__auto____423108)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____423108;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__5854__auto____423109 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____423110 = (cljs.core._write[goog.typeOf(x__5854__auto____423109)]);
if(or__3824__auto____423110)
{return or__3824__auto____423110;
} else
{var or__3824__auto____423111 = (cljs.core._write["_"]);
if(or__3824__auto____423111)
{return or__3824__auto____423111;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____423116 = writer;
if(and__3822__auto____423116)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____423116;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__5854__auto____423117 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____423118 = (cljs.core._flush[goog.typeOf(x__5854__auto____423117)]);
if(or__3824__auto____423118)
{return or__3824__auto____423118;
} else
{var or__3824__auto____423119 = (cljs.core._flush["_"]);
if(or__3824__auto____423119)
{return or__3824__auto____423119;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____423124 = o;
if(and__3822__auto____423124)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____423124;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__5854__auto____423125 = (((o == null))?null:o);
return (function (){var or__3824__auto____423126 = (cljs.core._pr_writer[goog.typeOf(x__5854__auto____423125)]);
if(or__3824__auto____423126)
{return or__3824__auto____423126;
} else
{var or__3824__auto____423127 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____423127)
{return or__3824__auto____423127;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____423132 = d;
if(and__3822__auto____423132)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____423132;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__5854__auto____423133 = (((d == null))?null:d);
return (function (){var or__3824__auto____423134 = (cljs.core._realized_QMARK_[goog.typeOf(x__5854__auto____423133)]);
if(or__3824__auto____423134)
{return or__3824__auto____423134;
} else
{var or__3824__auto____423135 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____423135)
{return or__3824__auto____423135;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____423140 = this$;
if(and__3822__auto____423140)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____423140;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__5854__auto____423141 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____423142 = (cljs.core._notify_watches[goog.typeOf(x__5854__auto____423141)]);
if(or__3824__auto____423142)
{return or__3824__auto____423142;
} else
{var or__3824__auto____423143 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____423143)
{return or__3824__auto____423143;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____423148 = this$;
if(and__3822__auto____423148)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____423148;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__5854__auto____423149 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____423150 = (cljs.core._add_watch[goog.typeOf(x__5854__auto____423149)]);
if(or__3824__auto____423150)
{return or__3824__auto____423150;
} else
{var or__3824__auto____423151 = (cljs.core._add_watch["_"]);
if(or__3824__auto____423151)
{return or__3824__auto____423151;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____423156 = this$;
if(and__3822__auto____423156)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____423156;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__5854__auto____423157 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____423158 = (cljs.core._remove_watch[goog.typeOf(x__5854__auto____423157)]);
if(or__3824__auto____423158)
{return or__3824__auto____423158;
} else
{var or__3824__auto____423159 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____423159)
{return or__3824__auto____423159;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____423164 = coll;
if(and__3822__auto____423164)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____423164;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__5854__auto____423165 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423166 = (cljs.core._as_transient[goog.typeOf(x__5854__auto____423165)]);
if(or__3824__auto____423166)
{return or__3824__auto____423166;
} else
{var or__3824__auto____423167 = (cljs.core._as_transient["_"]);
if(or__3824__auto____423167)
{return or__3824__auto____423167;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____423172 = tcoll;
if(and__3822__auto____423172)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____423172;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__5854__auto____423173 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423174 = (cljs.core._conj_BANG_[goog.typeOf(x__5854__auto____423173)]);
if(or__3824__auto____423174)
{return or__3824__auto____423174;
} else
{var or__3824__auto____423175 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____423175)
{return or__3824__auto____423175;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____423180 = tcoll;
if(and__3822__auto____423180)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____423180;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__5854__auto____423181 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423182 = (cljs.core._persistent_BANG_[goog.typeOf(x__5854__auto____423181)]);
if(or__3824__auto____423182)
{return or__3824__auto____423182;
} else
{var or__3824__auto____423183 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____423183)
{return or__3824__auto____423183;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____423188 = tcoll;
if(and__3822__auto____423188)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____423188;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__5854__auto____423189 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423190 = (cljs.core._assoc_BANG_[goog.typeOf(x__5854__auto____423189)]);
if(or__3824__auto____423190)
{return or__3824__auto____423190;
} else
{var or__3824__auto____423191 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____423191)
{return or__3824__auto____423191;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____423196 = tcoll;
if(and__3822__auto____423196)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____423196;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__5854__auto____423197 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423198 = (cljs.core._dissoc_BANG_[goog.typeOf(x__5854__auto____423197)]);
if(or__3824__auto____423198)
{return or__3824__auto____423198;
} else
{var or__3824__auto____423199 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____423199)
{return or__3824__auto____423199;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____423204 = tcoll;
if(and__3822__auto____423204)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____423204;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__5854__auto____423205 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423206 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__5854__auto____423205)]);
if(or__3824__auto____423206)
{return or__3824__auto____423206;
} else
{var or__3824__auto____423207 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____423207)
{return or__3824__auto____423207;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____423212 = tcoll;
if(and__3822__auto____423212)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____423212;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__5854__auto____423213 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423214 = (cljs.core._pop_BANG_[goog.typeOf(x__5854__auto____423213)]);
if(or__3824__auto____423214)
{return or__3824__auto____423214;
} else
{var or__3824__auto____423215 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____423215)
{return or__3824__auto____423215;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____423220 = tcoll;
if(and__3822__auto____423220)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____423220;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__5854__auto____423221 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____423222 = (cljs.core._disjoin_BANG_[goog.typeOf(x__5854__auto____423221)]);
if(or__3824__auto____423222)
{return or__3824__auto____423222;
} else
{var or__3824__auto____423223 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____423223)
{return or__3824__auto____423223;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____423228 = x;
if(and__3822__auto____423228)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____423228;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__5854__auto____423229 = (((x == null))?null:x);
return (function (){var or__3824__auto____423230 = (cljs.core._compare[goog.typeOf(x__5854__auto____423229)]);
if(or__3824__auto____423230)
{return or__3824__auto____423230;
} else
{var or__3824__auto____423231 = (cljs.core._compare["_"]);
if(or__3824__auto____423231)
{return or__3824__auto____423231;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____423236 = coll;
if(and__3822__auto____423236)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____423236;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__5854__auto____423237 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423238 = (cljs.core._drop_first[goog.typeOf(x__5854__auto____423237)]);
if(or__3824__auto____423238)
{return or__3824__auto____423238;
} else
{var or__3824__auto____423239 = (cljs.core._drop_first["_"]);
if(or__3824__auto____423239)
{return or__3824__auto____423239;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____423244 = coll;
if(and__3822__auto____423244)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____423244;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__5854__auto____423245 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423246 = (cljs.core._chunked_first[goog.typeOf(x__5854__auto____423245)]);
if(or__3824__auto____423246)
{return or__3824__auto____423246;
} else
{var or__3824__auto____423247 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____423247)
{return or__3824__auto____423247;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____423252 = coll;
if(and__3822__auto____423252)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____423252;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__5854__auto____423253 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423254 = (cljs.core._chunked_rest[goog.typeOf(x__5854__auto____423253)]);
if(or__3824__auto____423254)
{return or__3824__auto____423254;
} else
{var or__3824__auto____423255 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____423255)
{return or__3824__auto____423255;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____423260 = coll;
if(and__3822__auto____423260)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____423260;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__5854__auto____423261 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____423262 = (cljs.core._chunked_next[goog.typeOf(x__5854__auto____423261)]);
if(or__3824__auto____423262)
{return or__3824__auto____423262;
} else
{var or__3824__auto____423263 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____423263)
{return or__3824__auto____423263;
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
{if((function (){var G__423267__423268 = coll;
if(G__423267__423268)
{if((function (){var or__3824__auto____423269 = (G__423267__423268.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____423269)
{return or__3824__auto____423269;
} else
{return G__423267__423268.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__423267__423268.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__423267__423268);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__423267__423268);
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
{if((function (){var G__423274__423275 = coll;
if(G__423274__423275)
{if((function (){var or__3824__auto____423276 = (G__423274__423275.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____423276)
{return or__3824__auto____423276;
} else
{return G__423274__423275.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__423274__423275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423274__423275);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423274__423275);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__423277 = cljs.core.seq.call(null,coll);
if((s__423277 == null))
{return null;
} else
{return cljs.core._first.call(null,s__423277);
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
{if((function (){var G__423282__423283 = coll;
if(G__423282__423283)
{if((function (){var or__3824__auto____423284 = (G__423282__423283.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____423284)
{return or__3824__auto____423284;
} else
{return G__423282__423283.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__423282__423283.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423282__423283);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423282__423283);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__423285 = cljs.core.seq.call(null,coll);
if(!((s__423285 == null)))
{return cljs.core._rest.call(null,s__423285);
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
{if((function (){var G__423289__423290 = coll;
if(G__423289__423290)
{if((function (){var or__3824__auto____423291 = (G__423289__423290.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____423291)
{return or__3824__auto____423291;
} else
{return G__423289__423290.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__423289__423290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__423289__423290);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__423289__423290);
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
var or__3824__auto____423293 = (x === y);
if(or__3824__auto____423293)
{return or__3824__auto____423293;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__423294__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__423295 = y;
var G__423296 = cljs.core.first.call(null,more);
var G__423297 = cljs.core.next.call(null,more);
x = G__423295;
y = G__423296;
more = G__423297;
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
var G__423294 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423294__delegate.call(this, x, y, more);
};
G__423294.cljs$lang$maxFixedArity = 2;
G__423294.cljs$lang$applyTo = (function (arglist__423298){
var x = cljs.core.first(arglist__423298);
var y = cljs.core.first(cljs.core.next(arglist__423298));
var more = cljs.core.rest(cljs.core.next(arglist__423298));
return G__423294__delegate(x, y, more);
});
G__423294.cljs$lang$arity$variadic = G__423294__delegate;
return G__423294;
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
var G__423299 = null;
var G__423299__2 = (function (o,k){
return null;
});
var G__423299__3 = (function (o,k,not_found){
return not_found;
});
G__423299 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__423299__2.call(this,o,k);
case 3:
return G__423299__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423299;
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
var G__423300 = null;
var G__423300__2 = (function (_,f){
return f.call(null);
});
var G__423300__3 = (function (_,f,start){
return start;
});
G__423300 = function(_,f,start){
switch(arguments.length){
case 2:
return G__423300__2.call(this,_,f);
case 3:
return G__423300__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423300;
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
var G__423301 = null;
var G__423301__2 = (function (_,n){
return null;
});
var G__423301__3 = (function (_,n,not_found){
return not_found;
});
G__423301 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__423301__2.call(this,_,n);
case 3:
return G__423301__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423301;
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
var and__3822__auto____423302 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____423302)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____423302;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__423303 = this;
return this__423303.val;
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
var cnt__423316 = cljs.core._count.call(null,cicoll);
if((cnt__423316 === 0))
{return f.call(null);
} else
{var val__423317 = cljs.core._nth.call(null,cicoll,0);
var n__423318 = 1;
while(true){
if((n__423318 < cnt__423316))
{var nval__423319 = f.call(null,val__423317,cljs.core._nth.call(null,cicoll,n__423318));
if(cljs.core.reduced_QMARK_.call(null,nval__423319))
{return cljs.core.deref.call(null,nval__423319);
} else
{{
var G__423328 = nval__423319;
var G__423329 = (n__423318 + 1);
val__423317 = G__423328;
n__423318 = G__423329;
continue;
}
}
} else
{return val__423317;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__423320 = cljs.core._count.call(null,cicoll);
var val__423321 = val;
var n__423322 = 0;
while(true){
if((n__423322 < cnt__423320))
{var nval__423323 = f.call(null,val__423321,cljs.core._nth.call(null,cicoll,n__423322));
if(cljs.core.reduced_QMARK_.call(null,nval__423323))
{return cljs.core.deref.call(null,nval__423323);
} else
{{
var G__423330 = nval__423323;
var G__423331 = (n__423322 + 1);
val__423321 = G__423330;
n__423322 = G__423331;
continue;
}
}
} else
{return val__423321;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__423324 = cljs.core._count.call(null,cicoll);
var val__423325 = val;
var n__423326 = idx;
while(true){
if((n__423326 < cnt__423324))
{var nval__423327 = f.call(null,val__423325,cljs.core._nth.call(null,cicoll,n__423326));
if(cljs.core.reduced_QMARK_.call(null,nval__423327))
{return cljs.core.deref.call(null,nval__423327);
} else
{{
var G__423332 = nval__423327;
var G__423333 = (n__423326 + 1);
val__423325 = G__423332;
n__423326 = G__423333;
continue;
}
}
} else
{return val__423325;
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
var cnt__423346 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__423347 = (arr[0]);
var n__423348 = 1;
while(true){
if((n__423348 < cnt__423346))
{var nval__423349 = f.call(null,val__423347,(arr[n__423348]));
if(cljs.core.reduced_QMARK_.call(null,nval__423349))
{return cljs.core.deref.call(null,nval__423349);
} else
{{
var G__423358 = nval__423349;
var G__423359 = (n__423348 + 1);
val__423347 = G__423358;
n__423348 = G__423359;
continue;
}
}
} else
{return val__423347;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__423350 = arr.length;
var val__423351 = val;
var n__423352 = 0;
while(true){
if((n__423352 < cnt__423350))
{var nval__423353 = f.call(null,val__423351,(arr[n__423352]));
if(cljs.core.reduced_QMARK_.call(null,nval__423353))
{return cljs.core.deref.call(null,nval__423353);
} else
{{
var G__423360 = nval__423353;
var G__423361 = (n__423352 + 1);
val__423351 = G__423360;
n__423352 = G__423361;
continue;
}
}
} else
{return val__423351;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__423354 = arr.length;
var val__423355 = val;
var n__423356 = idx;
while(true){
if((n__423356 < cnt__423354))
{var nval__423357 = f.call(null,val__423355,(arr[n__423356]));
if(cljs.core.reduced_QMARK_.call(null,nval__423357))
{return cljs.core.deref.call(null,nval__423357);
} else
{{
var G__423362 = nval__423357;
var G__423363 = (n__423356 + 1);
val__423355 = G__423362;
n__423356 = G__423363;
continue;
}
}
} else
{return val__423355;
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
var G__423367__423368 = x;
if(G__423367__423368)
{if((function (){var or__3824__auto____423369 = (G__423367__423368.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____423369)
{return or__3824__auto____423369;
} else
{return G__423367__423368.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__423367__423368.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__423367__423368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__423367__423368);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__423373__423374 = x;
if(G__423373__423374)
{if((function (){var or__3824__auto____423375 = (G__423373__423374.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____423375)
{return or__3824__auto____423375;
} else
{return G__423373__423374.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__423373__423374.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__423373__423374);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__423373__423374);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423376 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__423377 = this;
if(((this__423377.i + 1) < this__423377.a.length))
{return (new cljs.core.IndexedSeq(this__423377.a,(this__423377.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__423378 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__423379 = this;
var c__423380 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__423380 > 0))
{return (new cljs.core.RSeq(coll,(c__423380 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__423381 = this;
var this__423382 = this;
return cljs.core.pr_str.call(null,this__423382);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__423383 = this;
if(cljs.core.counted_QMARK_.call(null,this__423383.a))
{return cljs.core.ci_reduce.call(null,this__423383.a,f,(this__423383.a[this__423383.i]),(this__423383.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__423383.a[this__423383.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__423384 = this;
if(cljs.core.counted_QMARK_.call(null,this__423384.a))
{return cljs.core.ci_reduce.call(null,this__423384.a,f,start,this__423384.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__423385 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__423386 = this;
return (this__423386.a.length - this__423386.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__423387 = this;
return (this__423387.a[this__423387.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__423388 = this;
if(((this__423388.i + 1) < this__423388.a.length))
{return (new cljs.core.IndexedSeq(this__423388.a,(this__423388.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423389 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__423390 = this;
var i__423391 = (n + this__423390.i);
if((i__423391 < this__423390.a.length))
{return (this__423390.a[i__423391]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__423392 = this;
var i__423393 = (n + this__423392.i);
if((i__423393 < this__423392.a.length))
{return (this__423392.a[i__423393]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423394 = this;
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
var G__423395 = null;
var G__423395__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__423395__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__423395 = function(array,f,start){
switch(arguments.length){
case 2:
return G__423395__2.call(this,array,f);
case 3:
return G__423395__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423395;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__423396 = null;
var G__423396__2 = (function (array,k){
return (array[k]);
});
var G__423396__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__423396 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__423396__2.call(this,array,k);
case 3:
return G__423396__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423396;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__423397 = null;
var G__423397__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__423397__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__423397 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__423397__2.call(this,array,n);
case 3:
return G__423397__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423397;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423398 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__423399 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__423400 = this;
var this__423401 = this;
return cljs.core.pr_str.call(null,this__423401);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__423402 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__423403 = this;
return (this__423403.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__423404 = this;
return cljs.core._nth.call(null,this__423404.ci,this__423404.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__423405 = this;
if((this__423405.i > 0))
{return (new cljs.core.RSeq(this__423405.ci,(this__423405.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423406 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__423407 = this;
return (new cljs.core.RSeq(this__423407.ci,this__423407.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__423408 = this;
return this__423408.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423409 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__423409.meta);
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
var sn__423411 = cljs.core.next.call(null,s);
if(!((sn__423411 == null)))
{{
var G__423412 = sn__423411;
s = G__423412;
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
var G__423413__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__423414 = conj.call(null,coll,x);
var G__423415 = cljs.core.first.call(null,xs);
var G__423416 = cljs.core.next.call(null,xs);
coll = G__423414;
x = G__423415;
xs = G__423416;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__423413 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423413__delegate.call(this, coll, x, xs);
};
G__423413.cljs$lang$maxFixedArity = 2;
G__423413.cljs$lang$applyTo = (function (arglist__423417){
var coll = cljs.core.first(arglist__423417);
var x = cljs.core.first(cljs.core.next(arglist__423417));
var xs = cljs.core.rest(cljs.core.next(arglist__423417));
return G__423413__delegate(coll, x, xs);
});
G__423413.cljs$lang$arity$variadic = G__423413__delegate;
return G__423413;
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
var s__423420 = cljs.core.seq.call(null,coll);
var acc__423421 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__423420))
{return (acc__423421 + cljs.core._count.call(null,s__423420));
} else
{{
var G__423422 = cljs.core.next.call(null,s__423420);
var G__423423 = (acc__423421 + 1);
s__423420 = G__423422;
acc__423421 = G__423423;
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
var G__423424 = cljs.core.next.call(null,coll);
var G__423425 = (n - 1);
coll = G__423424;
n = G__423425;
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
var G__423426 = cljs.core.next.call(null,coll);
var G__423427 = (n - 1);
var G__423428 = not_found;
coll = G__423426;
n = G__423427;
not_found = G__423428;
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
{if((function (){var G__423435__423436 = coll;
if(G__423435__423436)
{if((function (){var or__3824__auto____423437 = (G__423435__423436.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____423437)
{return or__3824__auto____423437;
} else
{return G__423435__423436.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__423435__423436.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__423435__423436);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__423435__423436);
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
{if((function (){var G__423438__423439 = coll;
if(G__423438__423439)
{if((function (){var or__3824__auto____423440 = (G__423438__423439.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____423440)
{return or__3824__auto____423440;
} else
{return G__423438__423439.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__423438__423439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__423438__423439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__423438__423439);
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
var G__423443__delegate = function (coll,k,v,kvs){
while(true){
var ret__423442 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__423444 = ret__423442;
var G__423445 = cljs.core.first.call(null,kvs);
var G__423446 = cljs.core.second.call(null,kvs);
var G__423447 = cljs.core.nnext.call(null,kvs);
coll = G__423444;
k = G__423445;
v = G__423446;
kvs = G__423447;
continue;
}
} else
{return ret__423442;
}
break;
}
};
var G__423443 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__423443__delegate.call(this, coll, k, v, kvs);
};
G__423443.cljs$lang$maxFixedArity = 3;
G__423443.cljs$lang$applyTo = (function (arglist__423448){
var coll = cljs.core.first(arglist__423448);
var k = cljs.core.first(cljs.core.next(arglist__423448));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__423448)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__423448)));
return G__423443__delegate(coll, k, v, kvs);
});
G__423443.cljs$lang$arity$variadic = G__423443__delegate;
return G__423443;
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
var G__423451__delegate = function (coll,k,ks){
while(true){
var ret__423450 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__423452 = ret__423450;
var G__423453 = cljs.core.first.call(null,ks);
var G__423454 = cljs.core.next.call(null,ks);
coll = G__423452;
k = G__423453;
ks = G__423454;
continue;
}
} else
{return ret__423450;
}
break;
}
};
var G__423451 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423451__delegate.call(this, coll, k, ks);
};
G__423451.cljs$lang$maxFixedArity = 2;
G__423451.cljs$lang$applyTo = (function (arglist__423455){
var coll = cljs.core.first(arglist__423455);
var k = cljs.core.first(cljs.core.next(arglist__423455));
var ks = cljs.core.rest(cljs.core.next(arglist__423455));
return G__423451__delegate(coll, k, ks);
});
G__423451.cljs$lang$arity$variadic = G__423451__delegate;
return G__423451;
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
if((function (){var G__423459__423460 = o;
if(G__423459__423460)
{if((function (){var or__3824__auto____423461 = (G__423459__423460.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____423461)
{return or__3824__auto____423461;
} else
{return G__423459__423460.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__423459__423460.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__423459__423460);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__423459__423460);
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
var G__423464__delegate = function (coll,k,ks){
while(true){
var ret__423463 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__423465 = ret__423463;
var G__423466 = cljs.core.first.call(null,ks);
var G__423467 = cljs.core.next.call(null,ks);
coll = G__423465;
k = G__423466;
ks = G__423467;
continue;
}
} else
{return ret__423463;
}
break;
}
};
var G__423464 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423464__delegate.call(this, coll, k, ks);
};
G__423464.cljs$lang$maxFixedArity = 2;
G__423464.cljs$lang$applyTo = (function (arglist__423468){
var coll = cljs.core.first(arglist__423468);
var k = cljs.core.first(cljs.core.next(arglist__423468));
var ks = cljs.core.rest(cljs.core.next(arglist__423468));
return G__423464__delegate(coll, k, ks);
});
G__423464.cljs$lang$arity$variadic = G__423464__delegate;
return G__423464;
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
var h__423470 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__423470);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__423470;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__423472 = (cljs.core.string_hash_cache[k]);
if(!((h__423472 == null)))
{return h__423472;
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
if((function (){var and__3822__auto____423474 = goog.isString(o);
if(and__3822__auto____423474)
{return check_cache;
} else
{return and__3822__auto____423474;
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
{var G__423478__423479 = x;
if(G__423478__423479)
{if((function (){var or__3824__auto____423480 = (G__423478__423479.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____423480)
{return or__3824__auto____423480;
} else
{return G__423478__423479.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__423478__423479.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__423478__423479);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__423478__423479);
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
{var G__423484__423485 = x;
if(G__423484__423485)
{if((function (){var or__3824__auto____423486 = (G__423484__423485.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____423486)
{return or__3824__auto____423486;
} else
{return G__423484__423485.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__423484__423485.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__423484__423485);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__423484__423485);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__423490__423491 = x;
if(G__423490__423491)
{if((function (){var or__3824__auto____423492 = (G__423490__423491.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____423492)
{return or__3824__auto____423492;
} else
{return G__423490__423491.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__423490__423491.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__423490__423491);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__423490__423491);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__423496__423497 = x;
if(G__423496__423497)
{if((function (){var or__3824__auto____423498 = (G__423496__423497.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____423498)
{return or__3824__auto____423498;
} else
{return G__423496__423497.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__423496__423497.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__423496__423497);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__423496__423497);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__423502__423503 = x;
if(G__423502__423503)
{if((function (){var or__3824__auto____423504 = (G__423502__423503.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____423504)
{return or__3824__auto____423504;
} else
{return G__423502__423503.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__423502__423503.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__423502__423503);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__423502__423503);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__423508__423509 = x;
if(G__423508__423509)
{if((function (){var or__3824__auto____423510 = (G__423508__423509.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____423510)
{return or__3824__auto____423510;
} else
{return G__423508__423509.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__423508__423509.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__423508__423509);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__423508__423509);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__423514__423515 = x;
if(G__423514__423515)
{if((function (){var or__3824__auto____423516 = (G__423514__423515.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____423516)
{return or__3824__auto____423516;
} else
{return G__423514__423515.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__423514__423515.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__423514__423515);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__423514__423515);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__423520__423521 = x;
if(G__423520__423521)
{if((function (){var or__3824__auto____423522 = (G__423520__423521.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____423522)
{return or__3824__auto____423522;
} else
{return G__423520__423521.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__423520__423521.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__423520__423521);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__423520__423521);
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
var G__423523__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__423523 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__423523__delegate.call(this, keyvals);
};
G__423523.cljs$lang$maxFixedArity = 0;
G__423523.cljs$lang$applyTo = (function (arglist__423524){
var keyvals = cljs.core.seq(arglist__423524);;
return G__423523__delegate(keyvals);
});
G__423523.cljs$lang$arity$variadic = G__423523__delegate;
return G__423523;
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
var keys__423526 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__423526.push(key);
}));
return keys__423526;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__423530 = i;
var j__423531 = j;
var len__423532 = len;
while(true){
if((len__423532 === 0))
{return to;
} else
{(to[j__423531] = (from[i__423530]));
{
var G__423533 = (i__423530 + 1);
var G__423534 = (j__423531 + 1);
var G__423535 = (len__423532 - 1);
i__423530 = G__423533;
j__423531 = G__423534;
len__423532 = G__423535;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__423539 = (i + (len - 1));
var j__423540 = (j + (len - 1));
var len__423541 = len;
while(true){
if((len__423541 === 0))
{return to;
} else
{(to[j__423540] = (from[i__423539]));
{
var G__423542 = (i__423539 - 1);
var G__423543 = (j__423540 - 1);
var G__423544 = (len__423541 - 1);
i__423539 = G__423542;
j__423540 = G__423543;
len__423541 = G__423544;
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
{var G__423548__423549 = s;
if(G__423548__423549)
{if((function (){var or__3824__auto____423550 = (G__423548__423549.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____423550)
{return or__3824__auto____423550;
} else
{return G__423548__423549.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__423548__423549.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423548__423549);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423548__423549);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__423554__423555 = s;
if(G__423554__423555)
{if((function (){var or__3824__auto____423556 = (G__423554__423555.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____423556)
{return or__3824__auto____423556;
} else
{return G__423554__423555.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__423554__423555.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__423554__423555);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__423554__423555);
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
var and__3822__auto____423559 = goog.isString(x);
if(and__3822__auto____423559)
{return !((function (){var or__3824__auto____423560 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____423560)
{return or__3824__auto____423560;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____423559;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____423562 = goog.isString(x);
if(and__3822__auto____423562)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____423562;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____423564 = goog.isString(x);
if(and__3822__auto____423564)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____423564;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____423569 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____423569)
{return or__3824__auto____423569;
} else
{var G__423570__423571 = f;
if(G__423570__423571)
{if((function (){var or__3824__auto____423572 = (G__423570__423571.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____423572)
{return or__3824__auto____423572;
} else
{return G__423570__423571.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__423570__423571.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__423570__423571);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__423570__423571);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____423576 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____423576)
{var and__3822__auto____423577 = !(isNaN(n));
if(and__3822__auto____423577)
{var and__3822__auto____423578 = !((n === Infinity));
if(and__3822__auto____423578)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____423578;
}
} else
{return and__3822__auto____423577;
}
} else
{return and__3822__auto____423576;
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
if((function (){var and__3822__auto____423581 = !((coll == null));
if(and__3822__auto____423581)
{var and__3822__auto____423582 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____423582)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____423582;
}
} else
{return and__3822__auto____423581;
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
var G__423591__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__423587 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__423588 = more;
while(true){
var x__423589 = cljs.core.first.call(null,xs__423588);
var etc__423590 = cljs.core.next.call(null,xs__423588);
if(cljs.core.truth_(xs__423588))
{if(cljs.core.contains_QMARK_.call(null,s__423587,x__423589))
{return false;
} else
{{
var G__423592 = cljs.core.conj.call(null,s__423587,x__423589);
var G__423593 = etc__423590;
s__423587 = G__423592;
xs__423588 = G__423593;
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
var G__423591 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423591__delegate.call(this, x, y, more);
};
G__423591.cljs$lang$maxFixedArity = 2;
G__423591.cljs$lang$applyTo = (function (arglist__423594){
var x = cljs.core.first(arglist__423594);
var y = cljs.core.first(cljs.core.next(arglist__423594));
var more = cljs.core.rest(cljs.core.next(arglist__423594));
return G__423591__delegate(x, y, more);
});
G__423591.cljs$lang$arity$variadic = G__423591__delegate;
return G__423591;
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
{if((function (){var G__423598__423599 = x;
if(G__423598__423599)
{if((function (){var or__3824__auto____423600 = (G__423598__423599.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____423600)
{return or__3824__auto____423600;
} else
{return G__423598__423599.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__423598__423599.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__423598__423599);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__423598__423599);
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
var xl__423605 = cljs.core.count.call(null,xs);
var yl__423606 = cljs.core.count.call(null,ys);
if((xl__423605 < yl__423606))
{return -1;
} else
{if((xl__423605 > yl__423606))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__423605,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__423607 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____423608 = (d__423607 === 0);
if(and__3822__auto____423608)
{return ((n + 1) < len);
} else
{return and__3822__auto____423608;
}
})())
{{
var G__423609 = xs;
var G__423610 = ys;
var G__423611 = len;
var G__423612 = (n + 1);
xs = G__423609;
ys = G__423610;
len = G__423611;
n = G__423612;
continue;
}
} else
{return d__423607;
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
var r__423614 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__423614))
{return r__423614;
} else
{if(cljs.core.truth_(r__423614))
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
{var a__423616 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__423616,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__423616);
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
var temp__3971__auto____423622 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____423622)
{var s__423623 = temp__3971__auto____423622;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__423623),cljs.core.next.call(null,s__423623));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__423624 = val;
var coll__423625 = cljs.core.seq.call(null,coll);
while(true){
if(coll__423625)
{var nval__423626 = f.call(null,val__423624,cljs.core.first.call(null,coll__423625));
if(cljs.core.reduced_QMARK_.call(null,nval__423626))
{return cljs.core.deref.call(null,nval__423626);
} else
{{
var G__423627 = nval__423626;
var G__423628 = cljs.core.next.call(null,coll__423625);
val__423624 = G__423627;
coll__423625 = G__423628;
continue;
}
}
} else
{return val__423624;
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
var a__423630 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__423630);
return cljs.core.vec.call(null,a__423630);
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
if((function (){var G__423637__423638 = coll;
if(G__423637__423638)
{if((function (){var or__3824__auto____423639 = (G__423637__423638.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____423639)
{return or__3824__auto____423639;
} else
{return G__423637__423638.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__423637__423638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__423637__423638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__423637__423638);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__423640__423641 = coll;
if(G__423640__423641)
{if((function (){var or__3824__auto____423642 = (G__423640__423641.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____423642)
{return or__3824__auto____423642;
} else
{return G__423640__423641.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__423640__423641.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__423640__423641);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__423640__423641);
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
var G__423643__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__423643 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423643__delegate.call(this, x, y, more);
};
G__423643.cljs$lang$maxFixedArity = 2;
G__423643.cljs$lang$applyTo = (function (arglist__423644){
var x = cljs.core.first(arglist__423644);
var y = cljs.core.first(cljs.core.next(arglist__423644));
var more = cljs.core.rest(cljs.core.next(arglist__423644));
return G__423643__delegate(x, y, more);
});
G__423643.cljs$lang$arity$variadic = G__423643__delegate;
return G__423643;
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
var G__423645__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__423645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423645__delegate.call(this, x, y, more);
};
G__423645.cljs$lang$maxFixedArity = 2;
G__423645.cljs$lang$applyTo = (function (arglist__423646){
var x = cljs.core.first(arglist__423646);
var y = cljs.core.first(cljs.core.next(arglist__423646));
var more = cljs.core.rest(cljs.core.next(arglist__423646));
return G__423645__delegate(x, y, more);
});
G__423645.cljs$lang$arity$variadic = G__423645__delegate;
return G__423645;
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
var G__423647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__423647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423647__delegate.call(this, x, y, more);
};
G__423647.cljs$lang$maxFixedArity = 2;
G__423647.cljs$lang$applyTo = (function (arglist__423648){
var x = cljs.core.first(arglist__423648);
var y = cljs.core.first(cljs.core.next(arglist__423648));
var more = cljs.core.rest(cljs.core.next(arglist__423648));
return G__423647__delegate(x, y, more);
});
G__423647.cljs$lang$arity$variadic = G__423647__delegate;
return G__423647;
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
var G__423649__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__423649 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423649__delegate.call(this, x, y, more);
};
G__423649.cljs$lang$maxFixedArity = 2;
G__423649.cljs$lang$applyTo = (function (arglist__423650){
var x = cljs.core.first(arglist__423650);
var y = cljs.core.first(cljs.core.next(arglist__423650));
var more = cljs.core.rest(cljs.core.next(arglist__423650));
return G__423649__delegate(x, y, more);
});
G__423649.cljs$lang$arity$variadic = G__423649__delegate;
return G__423649;
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
var G__423651__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__423652 = y;
var G__423653 = cljs.core.first.call(null,more);
var G__423654 = cljs.core.next.call(null,more);
x = G__423652;
y = G__423653;
more = G__423654;
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
var G__423651 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423651__delegate.call(this, x, y, more);
};
G__423651.cljs$lang$maxFixedArity = 2;
G__423651.cljs$lang$applyTo = (function (arglist__423655){
var x = cljs.core.first(arglist__423655);
var y = cljs.core.first(cljs.core.next(arglist__423655));
var more = cljs.core.rest(cljs.core.next(arglist__423655));
return G__423651__delegate(x, y, more);
});
G__423651.cljs$lang$arity$variadic = G__423651__delegate;
return G__423651;
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
var G__423656__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__423657 = y;
var G__423658 = cljs.core.first.call(null,more);
var G__423659 = cljs.core.next.call(null,more);
x = G__423657;
y = G__423658;
more = G__423659;
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
var G__423656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423656__delegate.call(this, x, y, more);
};
G__423656.cljs$lang$maxFixedArity = 2;
G__423656.cljs$lang$applyTo = (function (arglist__423660){
var x = cljs.core.first(arglist__423660);
var y = cljs.core.first(cljs.core.next(arglist__423660));
var more = cljs.core.rest(cljs.core.next(arglist__423660));
return G__423656__delegate(x, y, more);
});
G__423656.cljs$lang$arity$variadic = G__423656__delegate;
return G__423656;
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
var G__423661__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__423662 = y;
var G__423663 = cljs.core.first.call(null,more);
var G__423664 = cljs.core.next.call(null,more);
x = G__423662;
y = G__423663;
more = G__423664;
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
var G__423661 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423661__delegate.call(this, x, y, more);
};
G__423661.cljs$lang$maxFixedArity = 2;
G__423661.cljs$lang$applyTo = (function (arglist__423665){
var x = cljs.core.first(arglist__423665);
var y = cljs.core.first(cljs.core.next(arglist__423665));
var more = cljs.core.rest(cljs.core.next(arglist__423665));
return G__423661__delegate(x, y, more);
});
G__423661.cljs$lang$arity$variadic = G__423661__delegate;
return G__423661;
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
var G__423666__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__423667 = y;
var G__423668 = cljs.core.first.call(null,more);
var G__423669 = cljs.core.next.call(null,more);
x = G__423667;
y = G__423668;
more = G__423669;
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
var G__423666 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423666__delegate.call(this, x, y, more);
};
G__423666.cljs$lang$maxFixedArity = 2;
G__423666.cljs$lang$applyTo = (function (arglist__423670){
var x = cljs.core.first(arglist__423670);
var y = cljs.core.first(cljs.core.next(arglist__423670));
var more = cljs.core.rest(cljs.core.next(arglist__423670));
return G__423666__delegate(x, y, more);
});
G__423666.cljs$lang$arity$variadic = G__423666__delegate;
return G__423666;
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
var G__423671__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__423671 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423671__delegate.call(this, x, y, more);
};
G__423671.cljs$lang$maxFixedArity = 2;
G__423671.cljs$lang$applyTo = (function (arglist__423672){
var x = cljs.core.first(arglist__423672);
var y = cljs.core.first(cljs.core.next(arglist__423672));
var more = cljs.core.rest(cljs.core.next(arglist__423672));
return G__423671__delegate(x, y, more);
});
G__423671.cljs$lang$arity$variadic = G__423671__delegate;
return G__423671;
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
var G__423673__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__423673 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423673__delegate.call(this, x, y, more);
};
G__423673.cljs$lang$maxFixedArity = 2;
G__423673.cljs$lang$applyTo = (function (arglist__423674){
var x = cljs.core.first(arglist__423674);
var y = cljs.core.first(cljs.core.next(arglist__423674));
var more = cljs.core.rest(cljs.core.next(arglist__423674));
return G__423673__delegate(x, y, more);
});
G__423673.cljs$lang$arity$variadic = G__423673__delegate;
return G__423673;
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
var rem__423676 = (n % d);
return cljs.core.fix.call(null,((n - rem__423676) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__423678 = cljs.core.quot.call(null,n,d);
return (n - (d * q__423678));
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
var v__423681 = (v - ((v >> 1) & 1431655765));
var v__423682 = ((v__423681 & 858993459) + ((v__423681 >> 2) & 858993459));
return ((((v__423682 + (v__423682 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__423683__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__423684 = y;
var G__423685 = cljs.core.first.call(null,more);
var G__423686 = cljs.core.next.call(null,more);
x = G__423684;
y = G__423685;
more = G__423686;
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
var G__423683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423683__delegate.call(this, x, y, more);
};
G__423683.cljs$lang$maxFixedArity = 2;
G__423683.cljs$lang$applyTo = (function (arglist__423687){
var x = cljs.core.first(arglist__423687);
var y = cljs.core.first(cljs.core.next(arglist__423687));
var more = cljs.core.rest(cljs.core.next(arglist__423687));
return G__423683__delegate(x, y, more);
});
G__423683.cljs$lang$arity$variadic = G__423683__delegate;
return G__423683;
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
var n__423691 = n;
var xs__423692 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____423693 = xs__423692;
if(and__3822__auto____423693)
{return (n__423691 > 0);
} else
{return and__3822__auto____423693;
}
})()))
{{
var G__423694 = (n__423691 - 1);
var G__423695 = cljs.core.next.call(null,xs__423692);
n__423691 = G__423694;
xs__423692 = G__423695;
continue;
}
} else
{return xs__423692;
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
var G__423696__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__423697 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__423698 = cljs.core.next.call(null,more);
sb = G__423697;
more = G__423698;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__423696 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__423696__delegate.call(this, x, ys);
};
G__423696.cljs$lang$maxFixedArity = 1;
G__423696.cljs$lang$applyTo = (function (arglist__423699){
var x = cljs.core.first(arglist__423699);
var ys = cljs.core.rest(arglist__423699);
return G__423696__delegate(x, ys);
});
G__423696.cljs$lang$arity$variadic = G__423696__delegate;
return G__423696;
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
var G__423700__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__423701 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__423702 = cljs.core.next.call(null,more);
sb = G__423701;
more = G__423702;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__423700 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__423700__delegate.call(this, x, ys);
};
G__423700.cljs$lang$maxFixedArity = 1;
G__423700.cljs$lang$applyTo = (function (arglist__423703){
var x = cljs.core.first(arglist__423703);
var ys = cljs.core.rest(arglist__423703);
return G__423700__delegate(x, ys);
});
G__423700.cljs$lang$arity$variadic = G__423700__delegate;
return G__423700;
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
var args__423707 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____423706 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____423706)
{return or__3824__auto____423706;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__423707);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__423708){
var fmt = cljs.core.first(arglist__423708);
var args = cljs.core.rest(arglist__423708);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__423711 = cljs.core.seq.call(null,x);
var ys__423712 = cljs.core.seq.call(null,y);
while(true){
if((xs__423711 == null))
{return (ys__423712 == null);
} else
{if((ys__423712 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__423711),cljs.core.first.call(null,ys__423712)))
{{
var G__423713 = cljs.core.next.call(null,xs__423711);
var G__423714 = cljs.core.next.call(null,ys__423712);
xs__423711 = G__423713;
ys__423712 = G__423714;
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
return cljs.core.reduce.call(null,(function (p1__423715_SHARP_,p2__423716_SHARP_){
return cljs.core.hash_combine.call(null,p1__423715_SHARP_,cljs.core.hash.call(null,p2__423716_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__423720 = 0;
var s__423721 = cljs.core.seq.call(null,m);
while(true){
if(s__423721)
{var e__423722 = cljs.core.first.call(null,s__423721);
{
var G__423723 = ((h__423720 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__423722)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__423722)))) % 4503599627370496);
var G__423724 = cljs.core.next.call(null,s__423721);
h__423720 = G__423723;
s__423721 = G__423724;
continue;
}
} else
{return h__423720;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__423728 = 0;
var s__423729 = cljs.core.seq.call(null,s);
while(true){
if(s__423729)
{var e__423730 = cljs.core.first.call(null,s__423729);
{
var G__423731 = ((h__423728 + cljs.core.hash.call(null,e__423730)) % 4503599627370496);
var G__423732 = cljs.core.next.call(null,s__423729);
h__423728 = G__423731;
s__423729 = G__423732;
continue;
}
} else
{return h__423728;
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
var G__423740__423741 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__423740__423741)
{var vec__423742__423743 = cljs.core.first.call(null,G__423740__423741);
var key_name__423744 = cljs.core.nth.call(null,vec__423742__423743,0,null);
var f__423745 = cljs.core.nth.call(null,vec__423742__423743,1,null);
var str_name__423746 = cljs.core.name.call(null,key_name__423744);
(obj[str_name__423746] = f__423745);
{
var G__423747 = cljs.core.next.call(null,G__423740__423741);
G__423740__423741 = G__423747;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423748 = this;
var h__5670__auto____423749 = this__423748.__hash;
if(!((h__5670__auto____423749 == null)))
{return h__5670__auto____423749;
} else
{var h__5670__auto____423750 = cljs.core.hash_coll.call(null,coll);
this__423748.__hash = h__5670__auto____423750;
return h__5670__auto____423750;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__423751 = this;
if((this__423751.count === 1))
{return null;
} else
{return this__423751.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__423752 = this;
return (new cljs.core.List(this__423752.meta,o,coll,(this__423752.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__423753 = this;
var this__423754 = this;
return cljs.core.pr_str.call(null,this__423754);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__423755 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__423756 = this;
return this__423756.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__423757 = this;
return this__423757.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__423758 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__423759 = this;
return this__423759.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__423760 = this;
if((this__423760.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__423760.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423761 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__423762 = this;
return (new cljs.core.List(meta,this__423762.first,this__423762.rest,this__423762.count,this__423762.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__423763 = this;
return this__423763.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423764 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423765 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__423766 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__423767 = this;
return (new cljs.core.List(this__423767.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__423768 = this;
var this__423769 = this;
return cljs.core.pr_str.call(null,this__423769);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__423770 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__423771 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__423772 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__423773 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__423774 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__423775 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__423777 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__423778 = this;
return this__423778.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423779 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__423783__423784 = coll;
if(G__423783__423784)
{if((function (){var or__3824__auto____423785 = (G__423783__423784.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____423785)
{return or__3824__auto____423785;
} else
{return G__423783__423784.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__423783__423784.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__423783__423784);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__423783__423784);
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
var G__423786__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__423786 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__423786__delegate.call(this, x, y, z, items);
};
G__423786.cljs$lang$maxFixedArity = 3;
G__423786.cljs$lang$applyTo = (function (arglist__423787){
var x = cljs.core.first(arglist__423787);
var y = cljs.core.first(cljs.core.next(arglist__423787));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__423787)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__423787)));
return G__423786__delegate(x, y, z, items);
});
G__423786.cljs$lang$arity$variadic = G__423786__delegate;
return G__423786;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423788 = this;
var h__5670__auto____423789 = this__423788.__hash;
if(!((h__5670__auto____423789 == null)))
{return h__5670__auto____423789;
} else
{var h__5670__auto____423790 = cljs.core.hash_coll.call(null,coll);
this__423788.__hash = h__5670__auto____423790;
return h__5670__auto____423790;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__423791 = this;
if((this__423791.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__423791.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__423792 = this;
return (new cljs.core.Cons(null,o,coll,this__423792.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__423793 = this;
var this__423794 = this;
return cljs.core.pr_str.call(null,this__423794);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__423795 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__423796 = this;
return this__423796.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__423797 = this;
if((this__423797.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__423797.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423798 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__423799 = this;
return (new cljs.core.Cons(meta,this__423799.first,this__423799.rest,this__423799.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__423800 = this;
return this__423800.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423801 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__423801.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____423806 = (coll == null);
if(or__3824__auto____423806)
{return or__3824__auto____423806;
} else
{var G__423807__423808 = coll;
if(G__423807__423808)
{if((function (){var or__3824__auto____423809 = (G__423807__423808.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____423809)
{return or__3824__auto____423809;
} else
{return G__423807__423808.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__423807__423808.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423807__423808);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__423807__423808);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__423813__423814 = x;
if(G__423813__423814)
{if((function (){var or__3824__auto____423815 = (G__423813__423814.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____423815)
{return or__3824__auto____423815;
} else
{return G__423813__423814.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__423813__423814.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__423813__423814);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__423813__423814);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__423816 = null;
var G__423816__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__423816__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__423816 = function(string,f,start){
switch(arguments.length){
case 2:
return G__423816__2.call(this,string,f);
case 3:
return G__423816__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423816;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__423817 = null;
var G__423817__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__423817__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__423817 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__423817__2.call(this,string,k);
case 3:
return G__423817__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423817;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__423818 = null;
var G__423818__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__423818__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__423818 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__423818__2.call(this,string,n);
case 3:
return G__423818__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423818;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__423830 = null;
var G__423830__2 = (function (this_sym423821,coll){
var this__423823 = this;
var this_sym423821__423824 = this;
var ___423825 = this_sym423821__423824;
if((coll == null))
{return null;
} else
{var strobj__423826 = coll.strobj;
if((strobj__423826 == null))
{return cljs.core._lookup.call(null,coll,this__423823.k,null);
} else
{return (strobj__423826[this__423823.k]);
}
}
});
var G__423830__3 = (function (this_sym423822,coll,not_found){
var this__423823 = this;
var this_sym423822__423827 = this;
var ___423828 = this_sym423822__423827;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__423823.k,not_found);
}
});
G__423830 = function(this_sym423822,coll,not_found){
switch(arguments.length){
case 2:
return G__423830__2.call(this,this_sym423822,coll);
case 3:
return G__423830__3.call(this,this_sym423822,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423830;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym423819,args423820){
var this__423829 = this;
return this_sym423819.call.apply(this_sym423819,[this_sym423819].concat(args423820.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__423839 = null;
var G__423839__2 = (function (this_sym423833,coll){
var this_sym423833__423835 = this;
var this__423836 = this_sym423833__423835;
return cljs.core._lookup.call(null,coll,this__423836.toString(),null);
});
var G__423839__3 = (function (this_sym423834,coll,not_found){
var this_sym423834__423837 = this;
var this__423838 = this_sym423834__423837;
return cljs.core._lookup.call(null,coll,this__423838.toString(),not_found);
});
G__423839 = function(this_sym423834,coll,not_found){
switch(arguments.length){
case 2:
return G__423839__2.call(this,this_sym423834,coll);
case 3:
return G__423839__3.call(this,this_sym423834,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__423839;
})()
;
String.prototype.apply = (function (this_sym423831,args423832){
return this_sym423831.call.apply(this_sym423831,[this_sym423831].concat(args423832.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__423841 = lazy_seq.x;
if(lazy_seq.realized)
{return x__423841;
} else
{lazy_seq.x = x__423841.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423842 = this;
var h__5670__auto____423843 = this__423842.__hash;
if(!((h__5670__auto____423843 == null)))
{return h__5670__auto____423843;
} else
{var h__5670__auto____423844 = cljs.core.hash_coll.call(null,coll);
this__423842.__hash = h__5670__auto____423844;
return h__5670__auto____423844;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__423845 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__423846 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__423847 = this;
var this__423848 = this;
return cljs.core.pr_str.call(null,this__423848);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__423849 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__423850 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__423851 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__423853 = this;
return (new cljs.core.LazySeq(meta,this__423853.realized,this__423853.x,this__423853.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__423854 = this;
return this__423854.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423855 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__423855.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__423856 = this;
return this__423856.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__423857 = this;
var ___423858 = this;
(this__423857.buf[this__423857.end] = o);
return this__423857.end = (this__423857.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__423859 = this;
var ___423860 = this;
var ret__423861 = (new cljs.core.ArrayChunk(this__423859.buf,0,this__423859.end));
this__423859.buf = null;
return ret__423861;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__423862 = this;
return cljs.core.array_reduce.call(null,this__423862.arr,f,(this__423862.arr[this__423862.off]),(this__423862.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__423863 = this;
return cljs.core.array_reduce.call(null,this__423863.arr,f,start,this__423863.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__423864 = this;
if((this__423864.off === this__423864.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__423864.arr,(this__423864.off + 1),this__423864.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__423865 = this;
return (this__423865.arr[(this__423865.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__423866 = this;
if((function (){var and__3822__auto____423867 = (i >= 0);
if(and__3822__auto____423867)
{return (i < (this__423866.end - this__423866.off));
} else
{return and__3822__auto____423867;
}
})())
{return (this__423866.arr[(this__423866.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__423868 = this;
return (this__423868.end - this__423868.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__423869 = this;
var h__5670__auto____423870 = this__423869.__hash;
if(!((h__5670__auto____423870 == null)))
{return h__5670__auto____423870;
} else
{var h__5670__auto____423871 = cljs.core.hash_coll.call(null,coll);
this__423869.__hash = h__5670__auto____423871;
return h__5670__auto____423871;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__423872 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__423873 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__423874 = this;
return cljs.core._nth.call(null,this__423874.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__423875 = this;
if((cljs.core._count.call(null,this__423875.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__423875.chunk),this__423875.more,this__423875.meta,null));
} else
{if((this__423875.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__423875.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__423876 = this;
if((this__423876.more == null))
{return null;
} else
{return this__423876.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__423877 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__423878 = this;
return (new cljs.core.ChunkedCons(this__423878.chunk,this__423878.more,m,this__423878.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__423879 = this;
return this__423879.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__423880 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__423880.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__423881 = this;
return this__423881.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__423882 = this;
if((this__423882.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__423882.more;
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
if((function (){var G__423886__423887 = s;
if(G__423886__423887)
{if((function (){var or__3824__auto____423888 = (G__423886__423887.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____423888)
{return or__3824__auto____423888;
} else
{return G__423886__423887.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__423886__423887.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__423886__423887);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__423886__423887);
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
var ary__423891 = [];
var s__423892 = s;
while(true){
if(cljs.core.seq.call(null,s__423892))
{ary__423891.push(cljs.core.first.call(null,s__423892));
{
var G__423893 = cljs.core.next.call(null,s__423892);
s__423892 = G__423893;
continue;
}
} else
{return ary__423891;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__423897 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__423898 = 0;
var xs__423899 = cljs.core.seq.call(null,coll);
while(true){
if(xs__423899)
{(ret__423897[i__423898] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__423899)));
{
var G__423900 = (i__423898 + 1);
var G__423901 = cljs.core.next.call(null,xs__423899);
i__423898 = G__423900;
xs__423899 = G__423901;
continue;
}
} else
{}
break;
}
return ret__423897;
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
var a__423909 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__423910 = cljs.core.seq.call(null,init_val_or_seq);
var i__423911 = 0;
var s__423912 = s__423910;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____423913 = s__423912;
if(and__3822__auto____423913)
{return (i__423911 < size);
} else
{return and__3822__auto____423913;
}
})()))
{(a__423909[i__423911] = cljs.core.first.call(null,s__423912));
{
var G__423916 = (i__423911 + 1);
var G__423917 = cljs.core.next.call(null,s__423912);
i__423911 = G__423916;
s__423912 = G__423917;
continue;
}
} else
{return a__423909;
}
break;
}
} else
{var n__6016__auto____423914 = size;
var i__423915 = 0;
while(true){
if((i__423915 < n__6016__auto____423914))
{(a__423909[i__423915] = init_val_or_seq);
{
var G__423918 = (i__423915 + 1);
i__423915 = G__423918;
continue;
}
} else
{}
break;
}
return a__423909;
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
var a__423926 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__423927 = cljs.core.seq.call(null,init_val_or_seq);
var i__423928 = 0;
var s__423929 = s__423927;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____423930 = s__423929;
if(and__3822__auto____423930)
{return (i__423928 < size);
} else
{return and__3822__auto____423930;
}
})()))
{(a__423926[i__423928] = cljs.core.first.call(null,s__423929));
{
var G__423933 = (i__423928 + 1);
var G__423934 = cljs.core.next.call(null,s__423929);
i__423928 = G__423933;
s__423929 = G__423934;
continue;
}
} else
{return a__423926;
}
break;
}
} else
{var n__6016__auto____423931 = size;
var i__423932 = 0;
while(true){
if((i__423932 < n__6016__auto____423931))
{(a__423926[i__423932] = init_val_or_seq);
{
var G__423935 = (i__423932 + 1);
i__423932 = G__423935;
continue;
}
} else
{}
break;
}
return a__423926;
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
var a__423943 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__423944 = cljs.core.seq.call(null,init_val_or_seq);
var i__423945 = 0;
var s__423946 = s__423944;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____423947 = s__423946;
if(and__3822__auto____423947)
{return (i__423945 < size);
} else
{return and__3822__auto____423947;
}
})()))
{(a__423943[i__423945] = cljs.core.first.call(null,s__423946));
{
var G__423950 = (i__423945 + 1);
var G__423951 = cljs.core.next.call(null,s__423946);
i__423945 = G__423950;
s__423946 = G__423951;
continue;
}
} else
{return a__423943;
}
break;
}
} else
{var n__6016__auto____423948 = size;
var i__423949 = 0;
while(true){
if((i__423949 < n__6016__auto____423948))
{(a__423943[i__423949] = init_val_or_seq);
{
var G__423952 = (i__423949 + 1);
i__423949 = G__423952;
continue;
}
} else
{}
break;
}
return a__423943;
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
{var s__423957 = s;
var i__423958 = n;
var sum__423959 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____423960 = (i__423958 > 0);
if(and__3822__auto____423960)
{return cljs.core.seq.call(null,s__423957);
} else
{return and__3822__auto____423960;
}
})()))
{{
var G__423961 = cljs.core.next.call(null,s__423957);
var G__423962 = (i__423958 - 1);
var G__423963 = (sum__423959 + 1);
s__423957 = G__423961;
i__423958 = G__423962;
sum__423959 = G__423963;
continue;
}
} else
{return sum__423959;
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
var s__423968 = cljs.core.seq.call(null,x);
if(s__423968)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__423968))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__423968),concat.call(null,cljs.core.chunk_rest.call(null,s__423968),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__423968),concat.call(null,cljs.core.rest.call(null,s__423968),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__423972__delegate = function (x,y,zs){
var cat__423971 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__423970 = cljs.core.seq.call(null,xys);
if(xys__423970)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__423970))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__423970),cat.call(null,cljs.core.chunk_rest.call(null,xys__423970),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__423970),cat.call(null,cljs.core.rest.call(null,xys__423970),zs));
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
return cat__423971.call(null,concat.call(null,x,y),zs);
};
var G__423972 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__423972__delegate.call(this, x, y, zs);
};
G__423972.cljs$lang$maxFixedArity = 2;
G__423972.cljs$lang$applyTo = (function (arglist__423973){
var x = cljs.core.first(arglist__423973);
var y = cljs.core.first(cljs.core.next(arglist__423973));
var zs = cljs.core.rest(cljs.core.next(arglist__423973));
return G__423972__delegate(x, y, zs);
});
G__423972.cljs$lang$arity$variadic = G__423972__delegate;
return G__423972;
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
var G__423974__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__423974 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__423974__delegate.call(this, a, b, c, d, more);
};
G__423974.cljs$lang$maxFixedArity = 4;
G__423974.cljs$lang$applyTo = (function (arglist__423975){
var a = cljs.core.first(arglist__423975);
var b = cljs.core.first(cljs.core.next(arglist__423975));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__423975)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__423975))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__423975))));
return G__423974__delegate(a, b, c, d, more);
});
G__423974.cljs$lang$arity$variadic = G__423974__delegate;
return G__423974;
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
var args__424017 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__424018 = cljs.core._first.call(null,args__424017);
var args__424019 = cljs.core._rest.call(null,args__424017);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__424018);
} else
{return f.call(null,a__424018);
}
} else
{var b__424020 = cljs.core._first.call(null,args__424019);
var args__424021 = cljs.core._rest.call(null,args__424019);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__424018,b__424020);
} else
{return f.call(null,a__424018,b__424020);
}
} else
{var c__424022 = cljs.core._first.call(null,args__424021);
var args__424023 = cljs.core._rest.call(null,args__424021);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__424018,b__424020,c__424022);
} else
{return f.call(null,a__424018,b__424020,c__424022);
}
} else
{var d__424024 = cljs.core._first.call(null,args__424023);
var args__424025 = cljs.core._rest.call(null,args__424023);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__424018,b__424020,c__424022,d__424024);
} else
{return f.call(null,a__424018,b__424020,c__424022,d__424024);
}
} else
{var e__424026 = cljs.core._first.call(null,args__424025);
var args__424027 = cljs.core._rest.call(null,args__424025);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__424018,b__424020,c__424022,d__424024,e__424026);
} else
{return f.call(null,a__424018,b__424020,c__424022,d__424024,e__424026);
}
} else
{var f__424028 = cljs.core._first.call(null,args__424027);
var args__424029 = cljs.core._rest.call(null,args__424027);
if((argc === 6))
{if(f__424028.cljs$lang$arity$6)
{return f__424028.cljs$lang$arity$6(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028);
}
} else
{var g__424030 = cljs.core._first.call(null,args__424029);
var args__424031 = cljs.core._rest.call(null,args__424029);
if((argc === 7))
{if(f__424028.cljs$lang$arity$7)
{return f__424028.cljs$lang$arity$7(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030);
}
} else
{var h__424032 = cljs.core._first.call(null,args__424031);
var args__424033 = cljs.core._rest.call(null,args__424031);
if((argc === 8))
{if(f__424028.cljs$lang$arity$8)
{return f__424028.cljs$lang$arity$8(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032);
}
} else
{var i__424034 = cljs.core._first.call(null,args__424033);
var args__424035 = cljs.core._rest.call(null,args__424033);
if((argc === 9))
{if(f__424028.cljs$lang$arity$9)
{return f__424028.cljs$lang$arity$9(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034);
}
} else
{var j__424036 = cljs.core._first.call(null,args__424035);
var args__424037 = cljs.core._rest.call(null,args__424035);
if((argc === 10))
{if(f__424028.cljs$lang$arity$10)
{return f__424028.cljs$lang$arity$10(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036);
}
} else
{var k__424038 = cljs.core._first.call(null,args__424037);
var args__424039 = cljs.core._rest.call(null,args__424037);
if((argc === 11))
{if(f__424028.cljs$lang$arity$11)
{return f__424028.cljs$lang$arity$11(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038);
}
} else
{var l__424040 = cljs.core._first.call(null,args__424039);
var args__424041 = cljs.core._rest.call(null,args__424039);
if((argc === 12))
{if(f__424028.cljs$lang$arity$12)
{return f__424028.cljs$lang$arity$12(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040);
}
} else
{var m__424042 = cljs.core._first.call(null,args__424041);
var args__424043 = cljs.core._rest.call(null,args__424041);
if((argc === 13))
{if(f__424028.cljs$lang$arity$13)
{return f__424028.cljs$lang$arity$13(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042);
}
} else
{var n__424044 = cljs.core._first.call(null,args__424043);
var args__424045 = cljs.core._rest.call(null,args__424043);
if((argc === 14))
{if(f__424028.cljs$lang$arity$14)
{return f__424028.cljs$lang$arity$14(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044);
}
} else
{var o__424046 = cljs.core._first.call(null,args__424045);
var args__424047 = cljs.core._rest.call(null,args__424045);
if((argc === 15))
{if(f__424028.cljs$lang$arity$15)
{return f__424028.cljs$lang$arity$15(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046);
}
} else
{var p__424048 = cljs.core._first.call(null,args__424047);
var args__424049 = cljs.core._rest.call(null,args__424047);
if((argc === 16))
{if(f__424028.cljs$lang$arity$16)
{return f__424028.cljs$lang$arity$16(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048);
}
} else
{var q__424050 = cljs.core._first.call(null,args__424049);
var args__424051 = cljs.core._rest.call(null,args__424049);
if((argc === 17))
{if(f__424028.cljs$lang$arity$17)
{return f__424028.cljs$lang$arity$17(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050);
}
} else
{var r__424052 = cljs.core._first.call(null,args__424051);
var args__424053 = cljs.core._rest.call(null,args__424051);
if((argc === 18))
{if(f__424028.cljs$lang$arity$18)
{return f__424028.cljs$lang$arity$18(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050,r__424052);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050,r__424052);
}
} else
{var s__424054 = cljs.core._first.call(null,args__424053);
var args__424055 = cljs.core._rest.call(null,args__424053);
if((argc === 19))
{if(f__424028.cljs$lang$arity$19)
{return f__424028.cljs$lang$arity$19(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050,r__424052,s__424054);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050,r__424052,s__424054);
}
} else
{var t__424056 = cljs.core._first.call(null,args__424055);
var args__424057 = cljs.core._rest.call(null,args__424055);
if((argc === 20))
{if(f__424028.cljs$lang$arity$20)
{return f__424028.cljs$lang$arity$20(a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050,r__424052,s__424054,t__424056);
} else
{return f__424028.call(null,a__424018,b__424020,c__424022,d__424024,e__424026,f__424028,g__424030,h__424032,i__424034,j__424036,k__424038,l__424040,m__424042,n__424044,o__424046,p__424048,q__424050,r__424052,s__424054,t__424056);
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
var fixed_arity__424072 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__424073 = cljs.core.bounded_count.call(null,args,(fixed_arity__424072 + 1));
if((bc__424073 <= fixed_arity__424072))
{return cljs.core.apply_to.call(null,f,bc__424073,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__424074 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__424075 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__424076 = cljs.core.bounded_count.call(null,arglist__424074,(fixed_arity__424075 + 1));
if((bc__424076 <= fixed_arity__424075))
{return cljs.core.apply_to.call(null,f,bc__424076,arglist__424074);
} else
{return f.cljs$lang$applyTo(arglist__424074);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__424074));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__424077 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__424078 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__424079 = cljs.core.bounded_count.call(null,arglist__424077,(fixed_arity__424078 + 1));
if((bc__424079 <= fixed_arity__424078))
{return cljs.core.apply_to.call(null,f,bc__424079,arglist__424077);
} else
{return f.cljs$lang$applyTo(arglist__424077);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__424077));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__424080 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__424081 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__424082 = cljs.core.bounded_count.call(null,arglist__424080,(fixed_arity__424081 + 1));
if((bc__424082 <= fixed_arity__424081))
{return cljs.core.apply_to.call(null,f,bc__424082,arglist__424080);
} else
{return f.cljs$lang$applyTo(arglist__424080);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__424080));
}
});
var apply__6 = (function() { 
var G__424086__delegate = function (f,a,b,c,d,args){
var arglist__424083 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__424084 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__424085 = cljs.core.bounded_count.call(null,arglist__424083,(fixed_arity__424084 + 1));
if((bc__424085 <= fixed_arity__424084))
{return cljs.core.apply_to.call(null,f,bc__424085,arglist__424083);
} else
{return f.cljs$lang$applyTo(arglist__424083);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__424083));
}
};
var G__424086 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__424086__delegate.call(this, f, a, b, c, d, args);
};
G__424086.cljs$lang$maxFixedArity = 5;
G__424086.cljs$lang$applyTo = (function (arglist__424087){
var f = cljs.core.first(arglist__424087);
var a = cljs.core.first(cljs.core.next(arglist__424087));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424087)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424087))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424087)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424087)))));
return G__424086__delegate(f, a, b, c, d, args);
});
G__424086.cljs$lang$arity$variadic = G__424086__delegate;
return G__424086;
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
vary_meta.cljs$lang$applyTo = (function (arglist__424088){
var obj = cljs.core.first(arglist__424088);
var f = cljs.core.first(cljs.core.next(arglist__424088));
var args = cljs.core.rest(cljs.core.next(arglist__424088));
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
var G__424089__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__424089 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__424089__delegate.call(this, x, y, more);
};
G__424089.cljs$lang$maxFixedArity = 2;
G__424089.cljs$lang$applyTo = (function (arglist__424090){
var x = cljs.core.first(arglist__424090);
var y = cljs.core.first(cljs.core.next(arglist__424090));
var more = cljs.core.rest(cljs.core.next(arglist__424090));
return G__424089__delegate(x, y, more);
});
G__424089.cljs$lang$arity$variadic = G__424089__delegate;
return G__424089;
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
var G__424091 = pred;
var G__424092 = cljs.core.next.call(null,coll);
pred = G__424091;
coll = G__424092;
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
{var or__3824__auto____424094 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____424094))
{return or__3824__auto____424094;
} else
{{
var G__424095 = pred;
var G__424096 = cljs.core.next.call(null,coll);
pred = G__424095;
coll = G__424096;
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
var G__424097 = null;
var G__424097__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__424097__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__424097__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__424097__3 = (function() { 
var G__424098__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__424098 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__424098__delegate.call(this, x, y, zs);
};
G__424098.cljs$lang$maxFixedArity = 2;
G__424098.cljs$lang$applyTo = (function (arglist__424099){
var x = cljs.core.first(arglist__424099);
var y = cljs.core.first(cljs.core.next(arglist__424099));
var zs = cljs.core.rest(cljs.core.next(arglist__424099));
return G__424098__delegate(x, y, zs);
});
G__424098.cljs$lang$arity$variadic = G__424098__delegate;
return G__424098;
})()
;
G__424097 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__424097__0.call(this);
case 1:
return G__424097__1.call(this,x);
case 2:
return G__424097__2.call(this,x,y);
default:
return G__424097__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__424097.cljs$lang$maxFixedArity = 2;
G__424097.cljs$lang$applyTo = G__424097__3.cljs$lang$applyTo;
return G__424097;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__424100__delegate = function (args){
return x;
};
var G__424100 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__424100__delegate.call(this, args);
};
G__424100.cljs$lang$maxFixedArity = 0;
G__424100.cljs$lang$applyTo = (function (arglist__424101){
var args = cljs.core.seq(arglist__424101);;
return G__424100__delegate(args);
});
G__424100.cljs$lang$arity$variadic = G__424100__delegate;
return G__424100;
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
var G__424108 = null;
var G__424108__0 = (function (){
return f.call(null,g.call(null));
});
var G__424108__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__424108__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__424108__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__424108__4 = (function() { 
var G__424109__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__424109 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424109__delegate.call(this, x, y, z, args);
};
G__424109.cljs$lang$maxFixedArity = 3;
G__424109.cljs$lang$applyTo = (function (arglist__424110){
var x = cljs.core.first(arglist__424110);
var y = cljs.core.first(cljs.core.next(arglist__424110));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424110)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424110)));
return G__424109__delegate(x, y, z, args);
});
G__424109.cljs$lang$arity$variadic = G__424109__delegate;
return G__424109;
})()
;
G__424108 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__424108__0.call(this);
case 1:
return G__424108__1.call(this,x);
case 2:
return G__424108__2.call(this,x,y);
case 3:
return G__424108__3.call(this,x,y,z);
default:
return G__424108__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__424108.cljs$lang$maxFixedArity = 3;
G__424108.cljs$lang$applyTo = G__424108__4.cljs$lang$applyTo;
return G__424108;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__424111 = null;
var G__424111__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__424111__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__424111__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__424111__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__424111__4 = (function() { 
var G__424112__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__424112 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424112__delegate.call(this, x, y, z, args);
};
G__424112.cljs$lang$maxFixedArity = 3;
G__424112.cljs$lang$applyTo = (function (arglist__424113){
var x = cljs.core.first(arglist__424113);
var y = cljs.core.first(cljs.core.next(arglist__424113));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424113)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424113)));
return G__424112__delegate(x, y, z, args);
});
G__424112.cljs$lang$arity$variadic = G__424112__delegate;
return G__424112;
})()
;
G__424111 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__424111__0.call(this);
case 1:
return G__424111__1.call(this,x);
case 2:
return G__424111__2.call(this,x,y);
case 3:
return G__424111__3.call(this,x,y,z);
default:
return G__424111__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__424111.cljs$lang$maxFixedArity = 3;
G__424111.cljs$lang$applyTo = G__424111__4.cljs$lang$applyTo;
return G__424111;
})()
});
var comp__4 = (function() { 
var G__424114__delegate = function (f1,f2,f3,fs){
var fs__424105 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__424115__delegate = function (args){
var ret__424106 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__424105),args);
var fs__424107 = cljs.core.next.call(null,fs__424105);
while(true){
if(fs__424107)
{{
var G__424116 = cljs.core.first.call(null,fs__424107).call(null,ret__424106);
var G__424117 = cljs.core.next.call(null,fs__424107);
ret__424106 = G__424116;
fs__424107 = G__424117;
continue;
}
} else
{return ret__424106;
}
break;
}
};
var G__424115 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__424115__delegate.call(this, args);
};
G__424115.cljs$lang$maxFixedArity = 0;
G__424115.cljs$lang$applyTo = (function (arglist__424118){
var args = cljs.core.seq(arglist__424118);;
return G__424115__delegate(args);
});
G__424115.cljs$lang$arity$variadic = G__424115__delegate;
return G__424115;
})()
;
};
var G__424114 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424114__delegate.call(this, f1, f2, f3, fs);
};
G__424114.cljs$lang$maxFixedArity = 3;
G__424114.cljs$lang$applyTo = (function (arglist__424119){
var f1 = cljs.core.first(arglist__424119);
var f2 = cljs.core.first(cljs.core.next(arglist__424119));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424119)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424119)));
return G__424114__delegate(f1, f2, f3, fs);
});
G__424114.cljs$lang$arity$variadic = G__424114__delegate;
return G__424114;
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
var G__424120__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__424120 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__424120__delegate.call(this, args);
};
G__424120.cljs$lang$maxFixedArity = 0;
G__424120.cljs$lang$applyTo = (function (arglist__424121){
var args = cljs.core.seq(arglist__424121);;
return G__424120__delegate(args);
});
G__424120.cljs$lang$arity$variadic = G__424120__delegate;
return G__424120;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__424122__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__424122 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__424122__delegate.call(this, args);
};
G__424122.cljs$lang$maxFixedArity = 0;
G__424122.cljs$lang$applyTo = (function (arglist__424123){
var args = cljs.core.seq(arglist__424123);;
return G__424122__delegate(args);
});
G__424122.cljs$lang$arity$variadic = G__424122__delegate;
return G__424122;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__424124__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__424124 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__424124__delegate.call(this, args);
};
G__424124.cljs$lang$maxFixedArity = 0;
G__424124.cljs$lang$applyTo = (function (arglist__424125){
var args = cljs.core.seq(arglist__424125);;
return G__424124__delegate(args);
});
G__424124.cljs$lang$arity$variadic = G__424124__delegate;
return G__424124;
})()
;
});
var partial__5 = (function() { 
var G__424126__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__424127__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__424127 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__424127__delegate.call(this, args);
};
G__424127.cljs$lang$maxFixedArity = 0;
G__424127.cljs$lang$applyTo = (function (arglist__424128){
var args = cljs.core.seq(arglist__424128);;
return G__424127__delegate(args);
});
G__424127.cljs$lang$arity$variadic = G__424127__delegate;
return G__424127;
})()
;
};
var G__424126 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__424126__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__424126.cljs$lang$maxFixedArity = 4;
G__424126.cljs$lang$applyTo = (function (arglist__424129){
var f = cljs.core.first(arglist__424129);
var arg1 = cljs.core.first(cljs.core.next(arglist__424129));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424129)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424129))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424129))));
return G__424126__delegate(f, arg1, arg2, arg3, more);
});
G__424126.cljs$lang$arity$variadic = G__424126__delegate;
return G__424126;
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
var G__424130 = null;
var G__424130__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__424130__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__424130__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__424130__4 = (function() { 
var G__424131__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__424131 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424131__delegate.call(this, a, b, c, ds);
};
G__424131.cljs$lang$maxFixedArity = 3;
G__424131.cljs$lang$applyTo = (function (arglist__424132){
var a = cljs.core.first(arglist__424132);
var b = cljs.core.first(cljs.core.next(arglist__424132));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424132)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424132)));
return G__424131__delegate(a, b, c, ds);
});
G__424131.cljs$lang$arity$variadic = G__424131__delegate;
return G__424131;
})()
;
G__424130 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__424130__1.call(this,a);
case 2:
return G__424130__2.call(this,a,b);
case 3:
return G__424130__3.call(this,a,b,c);
default:
return G__424130__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__424130.cljs$lang$maxFixedArity = 3;
G__424130.cljs$lang$applyTo = G__424130__4.cljs$lang$applyTo;
return G__424130;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__424133 = null;
var G__424133__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__424133__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__424133__4 = (function() { 
var G__424134__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__424134 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424134__delegate.call(this, a, b, c, ds);
};
G__424134.cljs$lang$maxFixedArity = 3;
G__424134.cljs$lang$applyTo = (function (arglist__424135){
var a = cljs.core.first(arglist__424135);
var b = cljs.core.first(cljs.core.next(arglist__424135));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424135)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424135)));
return G__424134__delegate(a, b, c, ds);
});
G__424134.cljs$lang$arity$variadic = G__424134__delegate;
return G__424134;
})()
;
G__424133 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__424133__2.call(this,a,b);
case 3:
return G__424133__3.call(this,a,b,c);
default:
return G__424133__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__424133.cljs$lang$maxFixedArity = 3;
G__424133.cljs$lang$applyTo = G__424133__4.cljs$lang$applyTo;
return G__424133;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__424136 = null;
var G__424136__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__424136__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__424136__4 = (function() { 
var G__424137__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__424137 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424137__delegate.call(this, a, b, c, ds);
};
G__424137.cljs$lang$maxFixedArity = 3;
G__424137.cljs$lang$applyTo = (function (arglist__424138){
var a = cljs.core.first(arglist__424138);
var b = cljs.core.first(cljs.core.next(arglist__424138));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424138)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424138)));
return G__424137__delegate(a, b, c, ds);
});
G__424137.cljs$lang$arity$variadic = G__424137__delegate;
return G__424137;
})()
;
G__424136 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__424136__2.call(this,a,b);
case 3:
return G__424136__3.call(this,a,b,c);
default:
return G__424136__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__424136.cljs$lang$maxFixedArity = 3;
G__424136.cljs$lang$applyTo = G__424136__4.cljs$lang$applyTo;
return G__424136;
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
var mapi__424154 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____424162 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424162)
{var s__424163 = temp__3974__auto____424162;
if(cljs.core.chunked_seq_QMARK_.call(null,s__424163))
{var c__424164 = cljs.core.chunk_first.call(null,s__424163);
var size__424165 = cljs.core.count.call(null,c__424164);
var b__424166 = cljs.core.chunk_buffer.call(null,size__424165);
var n__6016__auto____424167 = size__424165;
var i__424168 = 0;
while(true){
if((i__424168 < n__6016__auto____424167))
{cljs.core.chunk_append.call(null,b__424166,f.call(null,(idx + i__424168),cljs.core._nth.call(null,c__424164,i__424168)));
{
var G__424169 = (i__424168 + 1);
i__424168 = G__424169;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__424166),mapi.call(null,(idx + size__424165),cljs.core.chunk_rest.call(null,s__424163)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__424163)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__424163)));
}
} else
{return null;
}
}),null));
});
return mapi__424154.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____424179 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424179)
{var s__424180 = temp__3974__auto____424179;
if(cljs.core.chunked_seq_QMARK_.call(null,s__424180))
{var c__424181 = cljs.core.chunk_first.call(null,s__424180);
var size__424182 = cljs.core.count.call(null,c__424181);
var b__424183 = cljs.core.chunk_buffer.call(null,size__424182);
var n__6016__auto____424184 = size__424182;
var i__424185 = 0;
while(true){
if((i__424185 < n__6016__auto____424184))
{var x__424186 = f.call(null,cljs.core._nth.call(null,c__424181,i__424185));
if((x__424186 == null))
{} else
{cljs.core.chunk_append.call(null,b__424183,x__424186);
}
{
var G__424188 = (i__424185 + 1);
i__424185 = G__424188;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__424183),keep.call(null,f,cljs.core.chunk_rest.call(null,s__424180)));
} else
{var x__424187 = f.call(null,cljs.core.first.call(null,s__424180));
if((x__424187 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__424180));
} else
{return cljs.core.cons.call(null,x__424187,keep.call(null,f,cljs.core.rest.call(null,s__424180)));
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
var keepi__424214 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____424224 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424224)
{var s__424225 = temp__3974__auto____424224;
if(cljs.core.chunked_seq_QMARK_.call(null,s__424225))
{var c__424226 = cljs.core.chunk_first.call(null,s__424225);
var size__424227 = cljs.core.count.call(null,c__424226);
var b__424228 = cljs.core.chunk_buffer.call(null,size__424227);
var n__6016__auto____424229 = size__424227;
var i__424230 = 0;
while(true){
if((i__424230 < n__6016__auto____424229))
{var x__424231 = f.call(null,(idx + i__424230),cljs.core._nth.call(null,c__424226,i__424230));
if((x__424231 == null))
{} else
{cljs.core.chunk_append.call(null,b__424228,x__424231);
}
{
var G__424233 = (i__424230 + 1);
i__424230 = G__424233;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__424228),keepi.call(null,(idx + size__424227),cljs.core.chunk_rest.call(null,s__424225)));
} else
{var x__424232 = f.call(null,idx,cljs.core.first.call(null,s__424225));
if((x__424232 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__424225));
} else
{return cljs.core.cons.call(null,x__424232,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__424225)));
}
}
} else
{return null;
}
}),null));
});
return keepi__424214.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424319 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____424319))
{return p.call(null,y);
} else
{return and__3822__auto____424319;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424320 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____424320))
{var and__3822__auto____424321 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____424321))
{return p.call(null,z);
} else
{return and__3822__auto____424321;
}
} else
{return and__3822__auto____424320;
}
})());
});
var ep1__4 = (function() { 
var G__424390__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424322 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____424322))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____424322;
}
})());
};
var G__424390 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424390__delegate.call(this, x, y, z, args);
};
G__424390.cljs$lang$maxFixedArity = 3;
G__424390.cljs$lang$applyTo = (function (arglist__424391){
var x = cljs.core.first(arglist__424391);
var y = cljs.core.first(cljs.core.next(arglist__424391));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424391)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424391)));
return G__424390__delegate(x, y, z, args);
});
G__424390.cljs$lang$arity$variadic = G__424390__delegate;
return G__424390;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424334 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____424334))
{return p2.call(null,x);
} else
{return and__3822__auto____424334;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424335 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____424335))
{var and__3822__auto____424336 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____424336))
{var and__3822__auto____424337 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____424337))
{return p2.call(null,y);
} else
{return and__3822__auto____424337;
}
} else
{return and__3822__auto____424336;
}
} else
{return and__3822__auto____424335;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424338 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____424338))
{var and__3822__auto____424339 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____424339))
{var and__3822__auto____424340 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____424340))
{var and__3822__auto____424341 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____424341))
{var and__3822__auto____424342 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____424342))
{return p2.call(null,z);
} else
{return and__3822__auto____424342;
}
} else
{return and__3822__auto____424341;
}
} else
{return and__3822__auto____424340;
}
} else
{return and__3822__auto____424339;
}
} else
{return and__3822__auto____424338;
}
})());
});
var ep2__4 = (function() { 
var G__424392__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424343 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____424343))
{return cljs.core.every_QMARK_.call(null,(function (p1__424189_SHARP_){
var and__3822__auto____424344 = p1.call(null,p1__424189_SHARP_);
if(cljs.core.truth_(and__3822__auto____424344))
{return p2.call(null,p1__424189_SHARP_);
} else
{return and__3822__auto____424344;
}
}),args);
} else
{return and__3822__auto____424343;
}
})());
};
var G__424392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424392__delegate.call(this, x, y, z, args);
};
G__424392.cljs$lang$maxFixedArity = 3;
G__424392.cljs$lang$applyTo = (function (arglist__424393){
var x = cljs.core.first(arglist__424393);
var y = cljs.core.first(cljs.core.next(arglist__424393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424393)));
return G__424392__delegate(x, y, z, args);
});
G__424392.cljs$lang$arity$variadic = G__424392__delegate;
return G__424392;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424363 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____424363))
{var and__3822__auto____424364 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____424364))
{return p3.call(null,x);
} else
{return and__3822__auto____424364;
}
} else
{return and__3822__auto____424363;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424365 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____424365))
{var and__3822__auto____424366 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____424366))
{var and__3822__auto____424367 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____424367))
{var and__3822__auto____424368 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____424368))
{var and__3822__auto____424369 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____424369))
{return p3.call(null,y);
} else
{return and__3822__auto____424369;
}
} else
{return and__3822__auto____424368;
}
} else
{return and__3822__auto____424367;
}
} else
{return and__3822__auto____424366;
}
} else
{return and__3822__auto____424365;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424370 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____424370))
{var and__3822__auto____424371 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____424371))
{var and__3822__auto____424372 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____424372))
{var and__3822__auto____424373 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____424373))
{var and__3822__auto____424374 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____424374))
{var and__3822__auto____424375 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____424375))
{var and__3822__auto____424376 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____424376))
{var and__3822__auto____424377 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____424377))
{return p3.call(null,z);
} else
{return and__3822__auto____424377;
}
} else
{return and__3822__auto____424376;
}
} else
{return and__3822__auto____424375;
}
} else
{return and__3822__auto____424374;
}
} else
{return and__3822__auto____424373;
}
} else
{return and__3822__auto____424372;
}
} else
{return and__3822__auto____424371;
}
} else
{return and__3822__auto____424370;
}
})());
});
var ep3__4 = (function() { 
var G__424394__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424378 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____424378))
{return cljs.core.every_QMARK_.call(null,(function (p1__424190_SHARP_){
var and__3822__auto____424379 = p1.call(null,p1__424190_SHARP_);
if(cljs.core.truth_(and__3822__auto____424379))
{var and__3822__auto____424380 = p2.call(null,p1__424190_SHARP_);
if(cljs.core.truth_(and__3822__auto____424380))
{return p3.call(null,p1__424190_SHARP_);
} else
{return and__3822__auto____424380;
}
} else
{return and__3822__auto____424379;
}
}),args);
} else
{return and__3822__auto____424378;
}
})());
};
var G__424394 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424394__delegate.call(this, x, y, z, args);
};
G__424394.cljs$lang$maxFixedArity = 3;
G__424394.cljs$lang$applyTo = (function (arglist__424395){
var x = cljs.core.first(arglist__424395);
var y = cljs.core.first(cljs.core.next(arglist__424395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424395)));
return G__424394__delegate(x, y, z, args);
});
G__424394.cljs$lang$arity$variadic = G__424394__delegate;
return G__424394;
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
var G__424396__delegate = function (p1,p2,p3,ps){
var ps__424381 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__424191_SHARP_){
return p1__424191_SHARP_.call(null,x);
}),ps__424381);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__424192_SHARP_){
var and__3822__auto____424386 = p1__424192_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____424386))
{return p1__424192_SHARP_.call(null,y);
} else
{return and__3822__auto____424386;
}
}),ps__424381);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__424193_SHARP_){
var and__3822__auto____424387 = p1__424193_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____424387))
{var and__3822__auto____424388 = p1__424193_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____424388))
{return p1__424193_SHARP_.call(null,z);
} else
{return and__3822__auto____424388;
}
} else
{return and__3822__auto____424387;
}
}),ps__424381);
});
var epn__4 = (function() { 
var G__424397__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____424389 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____424389))
{return cljs.core.every_QMARK_.call(null,(function (p1__424194_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__424194_SHARP_,args);
}),ps__424381);
} else
{return and__3822__auto____424389;
}
})());
};
var G__424397 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424397__delegate.call(this, x, y, z, args);
};
G__424397.cljs$lang$maxFixedArity = 3;
G__424397.cljs$lang$applyTo = (function (arglist__424398){
var x = cljs.core.first(arglist__424398);
var y = cljs.core.first(cljs.core.next(arglist__424398));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424398)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424398)));
return G__424397__delegate(x, y, z, args);
});
G__424397.cljs$lang$arity$variadic = G__424397__delegate;
return G__424397;
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
var G__424396 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424396__delegate.call(this, p1, p2, p3, ps);
};
G__424396.cljs$lang$maxFixedArity = 3;
G__424396.cljs$lang$applyTo = (function (arglist__424399){
var p1 = cljs.core.first(arglist__424399);
var p2 = cljs.core.first(cljs.core.next(arglist__424399));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424399)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424399)));
return G__424396__delegate(p1, p2, p3, ps);
});
G__424396.cljs$lang$arity$variadic = G__424396__delegate;
return G__424396;
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
var or__3824__auto____424480 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____424480))
{return or__3824__auto____424480;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____424481 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____424481))
{return or__3824__auto____424481;
} else
{var or__3824__auto____424482 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____424482))
{return or__3824__auto____424482;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__424551__delegate = function (x,y,z,args){
var or__3824__auto____424483 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____424483))
{return or__3824__auto____424483;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__424551 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424551__delegate.call(this, x, y, z, args);
};
G__424551.cljs$lang$maxFixedArity = 3;
G__424551.cljs$lang$applyTo = (function (arglist__424552){
var x = cljs.core.first(arglist__424552);
var y = cljs.core.first(cljs.core.next(arglist__424552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424552)));
return G__424551__delegate(x, y, z, args);
});
G__424551.cljs$lang$arity$variadic = G__424551__delegate;
return G__424551;
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
var or__3824__auto____424495 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____424495))
{return or__3824__auto____424495;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____424496 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____424496))
{return or__3824__auto____424496;
} else
{var or__3824__auto____424497 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____424497))
{return or__3824__auto____424497;
} else
{var or__3824__auto____424498 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____424498))
{return or__3824__auto____424498;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____424499 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____424499))
{return or__3824__auto____424499;
} else
{var or__3824__auto____424500 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____424500))
{return or__3824__auto____424500;
} else
{var or__3824__auto____424501 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____424501))
{return or__3824__auto____424501;
} else
{var or__3824__auto____424502 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____424502))
{return or__3824__auto____424502;
} else
{var or__3824__auto____424503 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____424503))
{return or__3824__auto____424503;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__424553__delegate = function (x,y,z,args){
var or__3824__auto____424504 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____424504))
{return or__3824__auto____424504;
} else
{return cljs.core.some.call(null,(function (p1__424234_SHARP_){
var or__3824__auto____424505 = p1.call(null,p1__424234_SHARP_);
if(cljs.core.truth_(or__3824__auto____424505))
{return or__3824__auto____424505;
} else
{return p2.call(null,p1__424234_SHARP_);
}
}),args);
}
};
var G__424553 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424553__delegate.call(this, x, y, z, args);
};
G__424553.cljs$lang$maxFixedArity = 3;
G__424553.cljs$lang$applyTo = (function (arglist__424554){
var x = cljs.core.first(arglist__424554);
var y = cljs.core.first(cljs.core.next(arglist__424554));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424554)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424554)));
return G__424553__delegate(x, y, z, args);
});
G__424553.cljs$lang$arity$variadic = G__424553__delegate;
return G__424553;
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
var or__3824__auto____424524 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____424524))
{return or__3824__auto____424524;
} else
{var or__3824__auto____424525 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____424525))
{return or__3824__auto____424525;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____424526 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____424526))
{return or__3824__auto____424526;
} else
{var or__3824__auto____424527 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____424527))
{return or__3824__auto____424527;
} else
{var or__3824__auto____424528 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____424528))
{return or__3824__auto____424528;
} else
{var or__3824__auto____424529 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____424529))
{return or__3824__auto____424529;
} else
{var or__3824__auto____424530 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____424530))
{return or__3824__auto____424530;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____424531 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____424531))
{return or__3824__auto____424531;
} else
{var or__3824__auto____424532 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____424532))
{return or__3824__auto____424532;
} else
{var or__3824__auto____424533 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____424533))
{return or__3824__auto____424533;
} else
{var or__3824__auto____424534 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____424534))
{return or__3824__auto____424534;
} else
{var or__3824__auto____424535 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____424535))
{return or__3824__auto____424535;
} else
{var or__3824__auto____424536 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____424536))
{return or__3824__auto____424536;
} else
{var or__3824__auto____424537 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____424537))
{return or__3824__auto____424537;
} else
{var or__3824__auto____424538 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____424538))
{return or__3824__auto____424538;
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
var G__424555__delegate = function (x,y,z,args){
var or__3824__auto____424539 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____424539))
{return or__3824__auto____424539;
} else
{return cljs.core.some.call(null,(function (p1__424235_SHARP_){
var or__3824__auto____424540 = p1.call(null,p1__424235_SHARP_);
if(cljs.core.truth_(or__3824__auto____424540))
{return or__3824__auto____424540;
} else
{var or__3824__auto____424541 = p2.call(null,p1__424235_SHARP_);
if(cljs.core.truth_(or__3824__auto____424541))
{return or__3824__auto____424541;
} else
{return p3.call(null,p1__424235_SHARP_);
}
}
}),args);
}
};
var G__424555 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424555__delegate.call(this, x, y, z, args);
};
G__424555.cljs$lang$maxFixedArity = 3;
G__424555.cljs$lang$applyTo = (function (arglist__424556){
var x = cljs.core.first(arglist__424556);
var y = cljs.core.first(cljs.core.next(arglist__424556));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424556)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424556)));
return G__424555__delegate(x, y, z, args);
});
G__424555.cljs$lang$arity$variadic = G__424555__delegate;
return G__424555;
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
var G__424557__delegate = function (p1,p2,p3,ps){
var ps__424542 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__424236_SHARP_){
return p1__424236_SHARP_.call(null,x);
}),ps__424542);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__424237_SHARP_){
var or__3824__auto____424547 = p1__424237_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____424547))
{return or__3824__auto____424547;
} else
{return p1__424237_SHARP_.call(null,y);
}
}),ps__424542);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__424238_SHARP_){
var or__3824__auto____424548 = p1__424238_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____424548))
{return or__3824__auto____424548;
} else
{var or__3824__auto____424549 = p1__424238_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____424549))
{return or__3824__auto____424549;
} else
{return p1__424238_SHARP_.call(null,z);
}
}
}),ps__424542);
});
var spn__4 = (function() { 
var G__424558__delegate = function (x,y,z,args){
var or__3824__auto____424550 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____424550))
{return or__3824__auto____424550;
} else
{return cljs.core.some.call(null,(function (p1__424239_SHARP_){
return cljs.core.some.call(null,p1__424239_SHARP_,args);
}),ps__424542);
}
};
var G__424558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424558__delegate.call(this, x, y, z, args);
};
G__424558.cljs$lang$maxFixedArity = 3;
G__424558.cljs$lang$applyTo = (function (arglist__424559){
var x = cljs.core.first(arglist__424559);
var y = cljs.core.first(cljs.core.next(arglist__424559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424559)));
return G__424558__delegate(x, y, z, args);
});
G__424558.cljs$lang$arity$variadic = G__424558__delegate;
return G__424558;
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
var G__424557 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__424557__delegate.call(this, p1, p2, p3, ps);
};
G__424557.cljs$lang$maxFixedArity = 3;
G__424557.cljs$lang$applyTo = (function (arglist__424560){
var p1 = cljs.core.first(arglist__424560);
var p2 = cljs.core.first(cljs.core.next(arglist__424560));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424560)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424560)));
return G__424557__delegate(p1, p2, p3, ps);
});
G__424557.cljs$lang$arity$variadic = G__424557__delegate;
return G__424557;
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
var temp__3974__auto____424579 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424579)
{var s__424580 = temp__3974__auto____424579;
if(cljs.core.chunked_seq_QMARK_.call(null,s__424580))
{var c__424581 = cljs.core.chunk_first.call(null,s__424580);
var size__424582 = cljs.core.count.call(null,c__424581);
var b__424583 = cljs.core.chunk_buffer.call(null,size__424582);
var n__6016__auto____424584 = size__424582;
var i__424585 = 0;
while(true){
if((i__424585 < n__6016__auto____424584))
{cljs.core.chunk_append.call(null,b__424583,f.call(null,cljs.core._nth.call(null,c__424581,i__424585)));
{
var G__424597 = (i__424585 + 1);
i__424585 = G__424597;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__424583),map.call(null,f,cljs.core.chunk_rest.call(null,s__424580)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__424580)),map.call(null,f,cljs.core.rest.call(null,s__424580)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__424586 = cljs.core.seq.call(null,c1);
var s2__424587 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____424588 = s1__424586;
if(and__3822__auto____424588)
{return s2__424587;
} else
{return and__3822__auto____424588;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__424586),cljs.core.first.call(null,s2__424587)),map.call(null,f,cljs.core.rest.call(null,s1__424586),cljs.core.rest.call(null,s2__424587)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__424589 = cljs.core.seq.call(null,c1);
var s2__424590 = cljs.core.seq.call(null,c2);
var s3__424591 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____424592 = s1__424589;
if(and__3822__auto____424592)
{var and__3822__auto____424593 = s2__424590;
if(and__3822__auto____424593)
{return s3__424591;
} else
{return and__3822__auto____424593;
}
} else
{return and__3822__auto____424592;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__424589),cljs.core.first.call(null,s2__424590),cljs.core.first.call(null,s3__424591)),map.call(null,f,cljs.core.rest.call(null,s1__424589),cljs.core.rest.call(null,s2__424590),cljs.core.rest.call(null,s3__424591)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__424598__delegate = function (f,c1,c2,c3,colls){
var step__424596 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__424595 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__424595))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__424595),step.call(null,map.call(null,cljs.core.rest,ss__424595)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__424400_SHARP_){
return cljs.core.apply.call(null,f,p1__424400_SHARP_);
}),step__424596.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__424598 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__424598__delegate.call(this, f, c1, c2, c3, colls);
};
G__424598.cljs$lang$maxFixedArity = 4;
G__424598.cljs$lang$applyTo = (function (arglist__424599){
var f = cljs.core.first(arglist__424599);
var c1 = cljs.core.first(cljs.core.next(arglist__424599));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424599)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424599))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424599))));
return G__424598__delegate(f, c1, c2, c3, colls);
});
G__424598.cljs$lang$arity$variadic = G__424598__delegate;
return G__424598;
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
{var temp__3974__auto____424602 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424602)
{var s__424603 = temp__3974__auto____424602;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__424603),take.call(null,(n - 1),cljs.core.rest.call(null,s__424603)));
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
var step__424609 = (function (n,coll){
while(true){
var s__424607 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____424608 = (n > 0);
if(and__3822__auto____424608)
{return s__424607;
} else
{return and__3822__auto____424608;
}
})()))
{{
var G__424610 = (n - 1);
var G__424611 = cljs.core.rest.call(null,s__424607);
n = G__424610;
coll = G__424611;
continue;
}
} else
{return s__424607;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__424609.call(null,n,coll);
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
var s__424614 = cljs.core.seq.call(null,coll);
var lead__424615 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__424615)
{{
var G__424616 = cljs.core.next.call(null,s__424614);
var G__424617 = cljs.core.next.call(null,lead__424615);
s__424614 = G__424616;
lead__424615 = G__424617;
continue;
}
} else
{return s__424614;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__424623 = (function (pred,coll){
while(true){
var s__424621 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____424622 = s__424621;
if(and__3822__auto____424622)
{return pred.call(null,cljs.core.first.call(null,s__424621));
} else
{return and__3822__auto____424622;
}
})()))
{{
var G__424624 = pred;
var G__424625 = cljs.core.rest.call(null,s__424621);
pred = G__424624;
coll = G__424625;
continue;
}
} else
{return s__424621;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__424623.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____424628 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424628)
{var s__424629 = temp__3974__auto____424628;
return cljs.core.concat.call(null,s__424629,cycle.call(null,s__424629));
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
var s1__424634 = cljs.core.seq.call(null,c1);
var s2__424635 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____424636 = s1__424634;
if(and__3822__auto____424636)
{return s2__424635;
} else
{return and__3822__auto____424636;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__424634),cljs.core.cons.call(null,cljs.core.first.call(null,s2__424635),interleave.call(null,cljs.core.rest.call(null,s1__424634),cljs.core.rest.call(null,s2__424635))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__424638__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__424637 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__424637))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__424637),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__424637)));
} else
{return null;
}
}),null));
};
var G__424638 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__424638__delegate.call(this, c1, c2, colls);
};
G__424638.cljs$lang$maxFixedArity = 2;
G__424638.cljs$lang$applyTo = (function (arglist__424639){
var c1 = cljs.core.first(arglist__424639);
var c2 = cljs.core.first(cljs.core.next(arglist__424639));
var colls = cljs.core.rest(cljs.core.next(arglist__424639));
return G__424638__delegate(c1, c2, colls);
});
G__424638.cljs$lang$arity$variadic = G__424638__delegate;
return G__424638;
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
var cat__424649 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____424647 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____424647)
{var coll__424648 = temp__3971__auto____424647;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__424648),cat.call(null,cljs.core.rest.call(null,coll__424648),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__424649.call(null,null,colls);
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
var G__424650__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__424650 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__424650__delegate.call(this, f, coll, colls);
};
G__424650.cljs$lang$maxFixedArity = 2;
G__424650.cljs$lang$applyTo = (function (arglist__424651){
var f = cljs.core.first(arglist__424651);
var coll = cljs.core.first(cljs.core.next(arglist__424651));
var colls = cljs.core.rest(cljs.core.next(arglist__424651));
return G__424650__delegate(f, coll, colls);
});
G__424650.cljs$lang$arity$variadic = G__424650__delegate;
return G__424650;
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
var temp__3974__auto____424661 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424661)
{var s__424662 = temp__3974__auto____424661;
if(cljs.core.chunked_seq_QMARK_.call(null,s__424662))
{var c__424663 = cljs.core.chunk_first.call(null,s__424662);
var size__424664 = cljs.core.count.call(null,c__424663);
var b__424665 = cljs.core.chunk_buffer.call(null,size__424664);
var n__6016__auto____424666 = size__424664;
var i__424667 = 0;
while(true){
if((i__424667 < n__6016__auto____424666))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__424663,i__424667))))
{cljs.core.chunk_append.call(null,b__424665,cljs.core._nth.call(null,c__424663,i__424667));
} else
{}
{
var G__424670 = (i__424667 + 1);
i__424667 = G__424670;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__424665),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__424662)));
} else
{var f__424668 = cljs.core.first.call(null,s__424662);
var r__424669 = cljs.core.rest.call(null,s__424662);
if(cljs.core.truth_(pred.call(null,f__424668)))
{return cljs.core.cons.call(null,f__424668,filter.call(null,pred,r__424669));
} else
{return filter.call(null,pred,r__424669);
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
var walk__424673 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__424673.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__424671_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__424671_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__424677__424678 = to;
if(G__424677__424678)
{if((function (){var or__3824__auto____424679 = (G__424677__424678.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____424679)
{return or__3824__auto____424679;
} else
{return G__424677__424678.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__424677__424678.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__424677__424678);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__424677__424678);
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
var G__424680__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__424680 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__424680__delegate.call(this, f, c1, c2, c3, colls);
};
G__424680.cljs$lang$maxFixedArity = 4;
G__424680.cljs$lang$applyTo = (function (arglist__424681){
var f = cljs.core.first(arglist__424681);
var c1 = cljs.core.first(cljs.core.next(arglist__424681));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424681)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424681))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__424681))));
return G__424680__delegate(f, c1, c2, c3, colls);
});
G__424680.cljs$lang$arity$variadic = G__424680__delegate;
return G__424680;
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
var temp__3974__auto____424688 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424688)
{var s__424689 = temp__3974__auto____424688;
var p__424690 = cljs.core.take.call(null,n,s__424689);
if((n === cljs.core.count.call(null,p__424690)))
{return cljs.core.cons.call(null,p__424690,partition.call(null,n,step,cljs.core.drop.call(null,step,s__424689)));
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
var temp__3974__auto____424691 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____424691)
{var s__424692 = temp__3974__auto____424691;
var p__424693 = cljs.core.take.call(null,n,s__424692);
if((n === cljs.core.count.call(null,p__424693)))
{return cljs.core.cons.call(null,p__424693,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__424692)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__424693,pad)));
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
var sentinel__424698 = cljs.core.lookup_sentinel;
var m__424699 = m;
var ks__424700 = cljs.core.seq.call(null,ks);
while(true){
if(ks__424700)
{var m__424701 = cljs.core._lookup.call(null,m__424699,cljs.core.first.call(null,ks__424700),sentinel__424698);
if((sentinel__424698 === m__424701))
{return not_found;
} else
{{
var G__424702 = sentinel__424698;
var G__424703 = m__424701;
var G__424704 = cljs.core.next.call(null,ks__424700);
sentinel__424698 = G__424702;
m__424699 = G__424703;
ks__424700 = G__424704;
continue;
}
}
} else
{return m__424699;
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
cljs.core.assoc_in = (function assoc_in(m,p__424705,v){
var vec__424710__424711 = p__424705;
var k__424712 = cljs.core.nth.call(null,vec__424710__424711,0,null);
var ks__424713 = cljs.core.nthnext.call(null,vec__424710__424711,1);
if(cljs.core.truth_(ks__424713))
{return cljs.core.assoc.call(null,m,k__424712,assoc_in.call(null,cljs.core._lookup.call(null,m,k__424712,null),ks__424713,v));
} else
{return cljs.core.assoc.call(null,m,k__424712,v);
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
var update_in__delegate = function (m,p__424714,f,args){
var vec__424719__424720 = p__424714;
var k__424721 = cljs.core.nth.call(null,vec__424719__424720,0,null);
var ks__424722 = cljs.core.nthnext.call(null,vec__424719__424720,1);
if(cljs.core.truth_(ks__424722))
{return cljs.core.assoc.call(null,m,k__424721,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__424721,null),ks__424722,f,args));
} else
{return cljs.core.assoc.call(null,m,k__424721,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__424721,null),args));
}
};
var update_in = function (m,p__424714,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__424714, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__424723){
var m = cljs.core.first(arglist__424723);
var p__424714 = cljs.core.first(cljs.core.next(arglist__424723));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__424723)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__424723)));
return update_in__delegate(m, p__424714, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__424726 = this;
var h__5670__auto____424727 = this__424726.__hash;
if(!((h__5670__auto____424727 == null)))
{return h__5670__auto____424727;
} else
{var h__5670__auto____424728 = cljs.core.hash_coll.call(null,coll);
this__424726.__hash = h__5670__auto____424728;
return h__5670__auto____424728;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__424729 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__424730 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__424731 = this;
var new_array__424732 = this__424731.array.slice();
(new_array__424732[k] = v);
return (new cljs.core.Vector(this__424731.meta,new_array__424732,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__424763 = null;
var G__424763__2 = (function (this_sym424733,k){
var this__424735 = this;
var this_sym424733__424736 = this;
var coll__424737 = this_sym424733__424736;
return coll__424737.cljs$core$ILookup$_lookup$arity$2(coll__424737,k);
});
var G__424763__3 = (function (this_sym424734,k,not_found){
var this__424735 = this;
var this_sym424734__424738 = this;
var coll__424739 = this_sym424734__424738;
return coll__424739.cljs$core$ILookup$_lookup$arity$3(coll__424739,k,not_found);
});
G__424763 = function(this_sym424734,k,not_found){
switch(arguments.length){
case 2:
return G__424763__2.call(this,this_sym424734,k);
case 3:
return G__424763__3.call(this,this_sym424734,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__424763;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym424724,args424725){
var this__424740 = this;
return this_sym424724.call.apply(this_sym424724,[this_sym424724].concat(args424725.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__424741 = this;
var new_array__424742 = this__424741.array.slice();
new_array__424742.push(o);
return (new cljs.core.Vector(this__424741.meta,new_array__424742,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__424743 = this;
var this__424744 = this;
return cljs.core.pr_str.call(null,this__424744);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__424745 = this;
return cljs.core.ci_reduce.call(null,this__424745.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__424746 = this;
return cljs.core.ci_reduce.call(null,this__424746.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__424747 = this;
if((this__424747.array.length > 0))
{var vector_seq__424748 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__424747.array.length))
{return cljs.core.cons.call(null,(this__424747.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__424748.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__424749 = this;
return this__424749.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__424750 = this;
var count__424751 = this__424750.array.length;
if((count__424751 > 0))
{return (this__424750.array[(count__424751 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__424752 = this;
if((this__424752.array.length > 0))
{var new_array__424753 = this__424752.array.slice();
new_array__424753.pop();
return (new cljs.core.Vector(this__424752.meta,new_array__424753,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__424754 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__424755 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__424756 = this;
return (new cljs.core.Vector(meta,this__424756.array,this__424756.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__424757 = this;
return this__424757.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__424758 = this;
if((function (){var and__3822__auto____424759 = (0 <= n);
if(and__3822__auto____424759)
{return (n < this__424758.array.length);
} else
{return and__3822__auto____424759;
}
})())
{return (this__424758.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__424760 = this;
if((function (){var and__3822__auto____424761 = (0 <= n);
if(and__3822__auto____424761)
{return (n < this__424760.array.length);
} else
{return and__3822__auto____424761;
}
})())
{return (this__424760.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__424762 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__424762.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__5791__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__5791__auto__,writer__5792__auto__){
return cljs.core._write.call(null,writer__5792__auto__,"cljs.core/VectorNode");
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
var cnt__424765 = pv.cnt;
if((cnt__424765 < 32))
{return 0;
} else
{return (((cnt__424765 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__424771 = level;
var ret__424772 = node;
while(true){
if((ll__424771 === 0))
{return ret__424772;
} else
{var embed__424773 = ret__424772;
var r__424774 = cljs.core.pv_fresh_node.call(null,edit);
var ___424775 = cljs.core.pv_aset.call(null,r__424774,0,embed__424773);
{
var G__424776 = (ll__424771 - 5);
var G__424777 = r__424774;
ll__424771 = G__424776;
ret__424772 = G__424777;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__424783 = cljs.core.pv_clone_node.call(null,parent);
var subidx__424784 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__424783,subidx__424784,tailnode);
return ret__424783;
} else
{var child__424785 = cljs.core.pv_aget.call(null,parent,subidx__424784);
if(!((child__424785 == null)))
{var node_to_insert__424786 = push_tail.call(null,pv,(level - 5),child__424785,tailnode);
cljs.core.pv_aset.call(null,ret__424783,subidx__424784,node_to_insert__424786);
return ret__424783;
} else
{var node_to_insert__424787 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__424783,subidx__424784,node_to_insert__424787);
return ret__424783;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____424791 = (0 <= i);
if(and__3822__auto____424791)
{return (i < pv.cnt);
} else
{return and__3822__auto____424791;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__424792 = pv.root;
var level__424793 = pv.shift;
while(true){
if((level__424793 > 0))
{{
var G__424794 = cljs.core.pv_aget.call(null,node__424792,((i >>> level__424793) & 31));
var G__424795 = (level__424793 - 5);
node__424792 = G__424794;
level__424793 = G__424795;
continue;
}
} else
{return node__424792.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__424798 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__424798,(i & 31),val);
return ret__424798;
} else
{var subidx__424799 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__424798,subidx__424799,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__424799),i,val));
return ret__424798;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__424805 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__424806 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__424805));
if((function (){var and__3822__auto____424807 = (new_child__424806 == null);
if(and__3822__auto____424807)
{return (subidx__424805 === 0);
} else
{return and__3822__auto____424807;
}
})())
{return null;
} else
{var ret__424808 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__424808,subidx__424805,new_child__424806);
return ret__424808;
}
} else
{if((subidx__424805 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__424809 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__424809,subidx__424805,null);
return ret__424809;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__424812 = this;
return (new cljs.core.TransientVector(this__424812.cnt,this__424812.shift,cljs.core.tv_editable_root.call(null,this__424812.root),cljs.core.tv_editable_tail.call(null,this__424812.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__424813 = this;
var h__5670__auto____424814 = this__424813.__hash;
if(!((h__5670__auto____424814 == null)))
{return h__5670__auto____424814;
} else
{var h__5670__auto____424815 = cljs.core.hash_coll.call(null,coll);
this__424813.__hash = h__5670__auto____424815;
return h__5670__auto____424815;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__424816 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__424817 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__424818 = this;
if((function (){var and__3822__auto____424819 = (0 <= k);
if(and__3822__auto____424819)
{return (k < this__424818.cnt);
} else
{return and__3822__auto____424819;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__424820 = this__424818.tail.slice();
(new_tail__424820[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__424818.meta,this__424818.cnt,this__424818.shift,this__424818.root,new_tail__424820,null));
} else
{return (new cljs.core.PersistentVector(this__424818.meta,this__424818.cnt,this__424818.shift,cljs.core.do_assoc.call(null,coll,this__424818.shift,this__424818.root,k,v),this__424818.tail,null));
}
} else
{if((k === this__424818.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__424818.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__424868 = null;
var G__424868__2 = (function (this_sym424821,k){
var this__424823 = this;
var this_sym424821__424824 = this;
var coll__424825 = this_sym424821__424824;
return coll__424825.cljs$core$ILookup$_lookup$arity$2(coll__424825,k);
});
var G__424868__3 = (function (this_sym424822,k,not_found){
var this__424823 = this;
var this_sym424822__424826 = this;
var coll__424827 = this_sym424822__424826;
return coll__424827.cljs$core$ILookup$_lookup$arity$3(coll__424827,k,not_found);
});
G__424868 = function(this_sym424822,k,not_found){
switch(arguments.length){
case 2:
return G__424868__2.call(this,this_sym424822,k);
case 3:
return G__424868__3.call(this,this_sym424822,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__424868;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym424810,args424811){
var this__424828 = this;
return this_sym424810.call.apply(this_sym424810,[this_sym424810].concat(args424811.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__424829 = this;
var step_init__424830 = [0,init];
var i__424831 = 0;
while(true){
if((i__424831 < this__424829.cnt))
{var arr__424832 = cljs.core.array_for.call(null,v,i__424831);
var len__424833 = arr__424832.length;
var init__424837 = (function (){var j__424834 = 0;
var init__424835 = (step_init__424830[1]);
while(true){
if((j__424834 < len__424833))
{var init__424836 = f.call(null,init__424835,(j__424834 + i__424831),(arr__424832[j__424834]));
if(cljs.core.reduced_QMARK_.call(null,init__424836))
{return init__424836;
} else
{{
var G__424869 = (j__424834 + 1);
var G__424870 = init__424836;
j__424834 = G__424869;
init__424835 = G__424870;
continue;
}
}
} else
{(step_init__424830[0] = len__424833);
(step_init__424830[1] = init__424835);
return init__424835;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__424837))
{return cljs.core.deref.call(null,init__424837);
} else
{{
var G__424871 = (i__424831 + (step_init__424830[0]));
i__424831 = G__424871;
continue;
}
}
} else
{return (step_init__424830[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__424838 = this;
if(((this__424838.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__424839 = this__424838.tail.slice();
new_tail__424839.push(o);
return (new cljs.core.PersistentVector(this__424838.meta,(this__424838.cnt + 1),this__424838.shift,this__424838.root,new_tail__424839,null));
} else
{var root_overflow_QMARK___424840 = ((this__424838.cnt >>> 5) > (1 << this__424838.shift));
var new_shift__424841 = ((root_overflow_QMARK___424840)?(this__424838.shift + 5):this__424838.shift);
var new_root__424843 = ((root_overflow_QMARK___424840)?(function (){var n_r__424842 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__424842,0,this__424838.root);
cljs.core.pv_aset.call(null,n_r__424842,1,cljs.core.new_path.call(null,null,this__424838.shift,(new cljs.core.VectorNode(null,this__424838.tail))));
return n_r__424842;
})():cljs.core.push_tail.call(null,coll,this__424838.shift,this__424838.root,(new cljs.core.VectorNode(null,this__424838.tail))));
return (new cljs.core.PersistentVector(this__424838.meta,(this__424838.cnt + 1),new_shift__424841,new_root__424843,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__424844 = this;
if((this__424844.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__424844.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__424845 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__424846 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__424847 = this;
var this__424848 = this;
return cljs.core.pr_str.call(null,this__424848);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__424849 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__424850 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__424851 = this;
if((this__424851.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__424852 = this;
return this__424852.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__424853 = this;
if((this__424853.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__424853.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__424854 = this;
if((this__424854.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__424854.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__424854.meta);
} else
{if((1 < (this__424854.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__424854.meta,(this__424854.cnt - 1),this__424854.shift,this__424854.root,this__424854.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__424855 = cljs.core.array_for.call(null,coll,(this__424854.cnt - 2));
var nr__424856 = cljs.core.pop_tail.call(null,coll,this__424854.shift,this__424854.root);
var new_root__424857 = (((nr__424856 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__424856);
var cnt_1__424858 = (this__424854.cnt - 1);
if((function (){var and__3822__auto____424859 = (5 < this__424854.shift);
if(and__3822__auto____424859)
{return (cljs.core.pv_aget.call(null,new_root__424857,1) == null);
} else
{return and__3822__auto____424859;
}
})())
{return (new cljs.core.PersistentVector(this__424854.meta,cnt_1__424858,(this__424854.shift - 5),cljs.core.pv_aget.call(null,new_root__424857,0),new_tail__424855,null));
} else
{return (new cljs.core.PersistentVector(this__424854.meta,cnt_1__424858,this__424854.shift,new_root__424857,new_tail__424855,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__424860 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__424861 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__424862 = this;
return (new cljs.core.PersistentVector(meta,this__424862.cnt,this__424862.shift,this__424862.root,this__424862.tail,this__424862.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__424863 = this;
return this__424863.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__424864 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__424865 = this;
if((function (){var and__3822__auto____424866 = (0 <= n);
if(and__3822__auto____424866)
{return (n < this__424865.cnt);
} else
{return and__3822__auto____424866;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__424867 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__424867.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__424872 = xs.length;
var xs__424873 = (((no_clone === true))?xs:xs.slice());
if((l__424872 < 32))
{return (new cljs.core.PersistentVector(null,l__424872,5,cljs.core.PersistentVector.EMPTY_NODE,xs__424873,null));
} else
{var node__424874 = xs__424873.slice(0,32);
var v__424875 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__424874,null));
var i__424876 = 32;
var out__424877 = cljs.core._as_transient.call(null,v__424875);
while(true){
if((i__424876 < l__424872))
{{
var G__424878 = (i__424876 + 1);
var G__424879 = cljs.core.conj_BANG_.call(null,out__424877,(xs__424873[i__424876]));
i__424876 = G__424878;
out__424877 = G__424879;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__424877);
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
vector.cljs$lang$applyTo = (function (arglist__424880){
var args = cljs.core.seq(arglist__424880);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__424881 = this;
var h__5670__auto____424882 = this__424881.__hash;
if(!((h__5670__auto____424882 == null)))
{return h__5670__auto____424882;
} else
{var h__5670__auto____424883 = cljs.core.hash_coll.call(null,coll);
this__424881.__hash = h__5670__auto____424883;
return h__5670__auto____424883;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__424884 = this;
if(((this__424884.off + 1) < this__424884.node.length))
{var s__424885 = cljs.core.chunked_seq.call(null,this__424884.vec,this__424884.node,this__424884.i,(this__424884.off + 1));
if((s__424885 == null))
{return null;
} else
{return s__424885;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__424886 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__424887 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__424888 = this;
return (this__424888.node[this__424888.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__424889 = this;
if(((this__424889.off + 1) < this__424889.node.length))
{var s__424890 = cljs.core.chunked_seq.call(null,this__424889.vec,this__424889.node,this__424889.i,(this__424889.off + 1));
if((s__424890 == null))
{return cljs.core.List.EMPTY;
} else
{return s__424890;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__424891 = this;
var l__424892 = this__424891.node.length;
var s__424893 = ((((this__424891.i + l__424892) < cljs.core._count.call(null,this__424891.vec)))?cljs.core.chunked_seq.call(null,this__424891.vec,(this__424891.i + l__424892),0):null);
if((s__424893 == null))
{return null;
} else
{return s__424893;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__424894 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__424895 = this;
return cljs.core.chunked_seq.call(null,this__424895.vec,this__424895.node,this__424895.i,this__424895.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__424896 = this;
return this__424896.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__424897 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__424897.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__424898 = this;
return cljs.core.array_chunk.call(null,this__424898.node,this__424898.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__424899 = this;
var l__424900 = this__424899.node.length;
var s__424901 = ((((this__424899.i + l__424900) < cljs.core._count.call(null,this__424899.vec)))?cljs.core.chunked_seq.call(null,this__424899.vec,(this__424899.i + l__424900),0):null);
if((s__424901 == null))
{return cljs.core.List.EMPTY;
} else
{return s__424901;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__424904 = this;
var h__5670__auto____424905 = this__424904.__hash;
if(!((h__5670__auto____424905 == null)))
{return h__5670__auto____424905;
} else
{var h__5670__auto____424906 = cljs.core.hash_coll.call(null,coll);
this__424904.__hash = h__5670__auto____424906;
return h__5670__auto____424906;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__424907 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__424908 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__424909 = this;
var v_pos__424910 = (this__424909.start + key);
return (new cljs.core.Subvec(this__424909.meta,cljs.core._assoc.call(null,this__424909.v,v_pos__424910,val),this__424909.start,((this__424909.end > (v_pos__424910 + 1)) ? this__424909.end : (v_pos__424910 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__424936 = null;
var G__424936__2 = (function (this_sym424911,k){
var this__424913 = this;
var this_sym424911__424914 = this;
var coll__424915 = this_sym424911__424914;
return coll__424915.cljs$core$ILookup$_lookup$arity$2(coll__424915,k);
});
var G__424936__3 = (function (this_sym424912,k,not_found){
var this__424913 = this;
var this_sym424912__424916 = this;
var coll__424917 = this_sym424912__424916;
return coll__424917.cljs$core$ILookup$_lookup$arity$3(coll__424917,k,not_found);
});
G__424936 = function(this_sym424912,k,not_found){
switch(arguments.length){
case 2:
return G__424936__2.call(this,this_sym424912,k);
case 3:
return G__424936__3.call(this,this_sym424912,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__424936;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym424902,args424903){
var this__424918 = this;
return this_sym424902.call.apply(this_sym424902,[this_sym424902].concat(args424903.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__424919 = this;
return (new cljs.core.Subvec(this__424919.meta,cljs.core._assoc_n.call(null,this__424919.v,this__424919.end,o),this__424919.start,(this__424919.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__424920 = this;
var this__424921 = this;
return cljs.core.pr_str.call(null,this__424921);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__424922 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__424923 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__424924 = this;
var subvec_seq__424925 = (function subvec_seq(i){
if((i === this__424924.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__424924.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__424925.call(null,this__424924.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__424926 = this;
return (this__424926.end - this__424926.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__424927 = this;
return cljs.core._nth.call(null,this__424927.v,(this__424927.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__424928 = this;
if((this__424928.start === this__424928.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__424928.meta,this__424928.v,this__424928.start,(this__424928.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__424929 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__424930 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__424931 = this;
return (new cljs.core.Subvec(meta,this__424931.v,this__424931.start,this__424931.end,this__424931.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__424932 = this;
return this__424932.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__424933 = this;
return cljs.core._nth.call(null,this__424933.v,(this__424933.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__424934 = this;
return cljs.core._nth.call(null,this__424934.v,(this__424934.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__424935 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__424935.meta);
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
var ret__424938 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__424938,0,tl.length);
return ret__424938;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__424942 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__424943 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__424942,subidx__424943,(((level === 5))?tail_node:(function (){var child__424944 = cljs.core.pv_aget.call(null,ret__424942,subidx__424943);
if(!((child__424944 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__424944,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__424942;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__424949 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__424950 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__424951 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__424949,subidx__424950));
if((function (){var and__3822__auto____424952 = (new_child__424951 == null);
if(and__3822__auto____424952)
{return (subidx__424950 === 0);
} else
{return and__3822__auto____424952;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__424949,subidx__424950,new_child__424951);
return node__424949;
}
} else
{if((subidx__424950 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__424949,subidx__424950,null);
return node__424949;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____424957 = (0 <= i);
if(and__3822__auto____424957)
{return (i < tv.cnt);
} else
{return and__3822__auto____424957;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__424958 = tv.root;
var node__424959 = root__424958;
var level__424960 = tv.shift;
while(true){
if((level__424960 > 0))
{{
var G__424961 = cljs.core.tv_ensure_editable.call(null,root__424958.edit,cljs.core.pv_aget.call(null,node__424959,((i >>> level__424960) & 31)));
var G__424962 = (level__424960 - 5);
node__424959 = G__424961;
level__424960 = G__424962;
continue;
}
} else
{return node__424959.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__425002 = null;
var G__425002__2 = (function (this_sym424965,k){
var this__424967 = this;
var this_sym424965__424968 = this;
var coll__424969 = this_sym424965__424968;
return coll__424969.cljs$core$ILookup$_lookup$arity$2(coll__424969,k);
});
var G__425002__3 = (function (this_sym424966,k,not_found){
var this__424967 = this;
var this_sym424966__424970 = this;
var coll__424971 = this_sym424966__424970;
return coll__424971.cljs$core$ILookup$_lookup$arity$3(coll__424971,k,not_found);
});
G__425002 = function(this_sym424966,k,not_found){
switch(arguments.length){
case 2:
return G__425002__2.call(this,this_sym424966,k);
case 3:
return G__425002__3.call(this,this_sym424966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425002;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym424963,args424964){
var this__424972 = this;
return this_sym424963.call.apply(this_sym424963,[this_sym424963].concat(args424964.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__424973 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__424974 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__424975 = this;
if(this__424975.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__424976 = this;
if((function (){var and__3822__auto____424977 = (0 <= n);
if(and__3822__auto____424977)
{return (n < this__424976.cnt);
} else
{return and__3822__auto____424977;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__424978 = this;
if(this__424978.root.edit)
{return this__424978.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__424979 = this;
if(this__424979.root.edit)
{if((function (){var and__3822__auto____424980 = (0 <= n);
if(and__3822__auto____424980)
{return (n < this__424979.cnt);
} else
{return and__3822__auto____424980;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__424979.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__424985 = (function go(level,node){
var node__424983 = cljs.core.tv_ensure_editable.call(null,this__424979.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__424983,(n & 31),val);
return node__424983;
} else
{var subidx__424984 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__424983,subidx__424984,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__424983,subidx__424984)));
return node__424983;
}
}).call(null,this__424979.shift,this__424979.root);
this__424979.root = new_root__424985;
return tcoll;
}
} else
{if((n === this__424979.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__424979.cnt)].join('')));
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
var this__424986 = this;
if(this__424986.root.edit)
{if((this__424986.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__424986.cnt))
{this__424986.cnt = 0;
return tcoll;
} else
{if((((this__424986.cnt - 1) & 31) > 0))
{this__424986.cnt = (this__424986.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__424987 = cljs.core.editable_array_for.call(null,tcoll,(this__424986.cnt - 2));
var new_root__424989 = (function (){var nr__424988 = cljs.core.tv_pop_tail.call(null,tcoll,this__424986.shift,this__424986.root);
if(!((nr__424988 == null)))
{return nr__424988;
} else
{return (new cljs.core.VectorNode(this__424986.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____424990 = (5 < this__424986.shift);
if(and__3822__auto____424990)
{return (cljs.core.pv_aget.call(null,new_root__424989,1) == null);
} else
{return and__3822__auto____424990;
}
})())
{var new_root__424991 = cljs.core.tv_ensure_editable.call(null,this__424986.root.edit,cljs.core.pv_aget.call(null,new_root__424989,0));
this__424986.root = new_root__424991;
this__424986.shift = (this__424986.shift - 5);
this__424986.cnt = (this__424986.cnt - 1);
this__424986.tail = new_tail__424987;
return tcoll;
} else
{this__424986.root = new_root__424989;
this__424986.cnt = (this__424986.cnt - 1);
this__424986.tail = new_tail__424987;
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
var this__424992 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__424993 = this;
if(this__424993.root.edit)
{if(((this__424993.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__424993.tail[(this__424993.cnt & 31)] = o);
this__424993.cnt = (this__424993.cnt + 1);
return tcoll;
} else
{var tail_node__424994 = (new cljs.core.VectorNode(this__424993.root.edit,this__424993.tail));
var new_tail__424995 = cljs.core.make_array.call(null,32);
(new_tail__424995[0] = o);
this__424993.tail = new_tail__424995;
if(((this__424993.cnt >>> 5) > (1 << this__424993.shift)))
{var new_root_array__424996 = cljs.core.make_array.call(null,32);
var new_shift__424997 = (this__424993.shift + 5);
(new_root_array__424996[0] = this__424993.root);
(new_root_array__424996[1] = cljs.core.new_path.call(null,this__424993.root.edit,this__424993.shift,tail_node__424994));
this__424993.root = (new cljs.core.VectorNode(this__424993.root.edit,new_root_array__424996));
this__424993.shift = new_shift__424997;
this__424993.cnt = (this__424993.cnt + 1);
return tcoll;
} else
{var new_root__424998 = cljs.core.tv_push_tail.call(null,tcoll,this__424993.shift,this__424993.root,tail_node__424994);
this__424993.root = new_root__424998;
this__424993.cnt = (this__424993.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__424999 = this;
if(this__424999.root.edit)
{this__424999.root.edit = null;
var len__425000 = (this__424999.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__425001 = cljs.core.make_array.call(null,len__425000);
cljs.core.array_copy.call(null,this__424999.tail,0,trimmed_tail__425001,0,len__425000);
return (new cljs.core.PersistentVector(null,this__424999.cnt,this__424999.shift,this__424999.root,trimmed_tail__425001,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425003 = this;
var h__5670__auto____425004 = this__425003.__hash;
if(!((h__5670__auto____425004 == null)))
{return h__5670__auto____425004;
} else
{var h__5670__auto____425005 = cljs.core.hash_coll.call(null,coll);
this__425003.__hash = h__5670__auto____425005;
return h__5670__auto____425005;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425006 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__425007 = this;
var this__425008 = this;
return cljs.core.pr_str.call(null,this__425008);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425009 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__425010 = this;
return cljs.core._first.call(null,this__425010.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__425011 = this;
var temp__3971__auto____425012 = cljs.core.next.call(null,this__425011.front);
if(temp__3971__auto____425012)
{var f1__425013 = temp__3971__auto____425012;
return (new cljs.core.PersistentQueueSeq(this__425011.meta,f1__425013,this__425011.rear,null));
} else
{if((this__425011.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__425011.meta,this__425011.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425014 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425015 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__425015.front,this__425015.rear,this__425015.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425016 = this;
return this__425016.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425017 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__425017.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425018 = this;
var h__5670__auto____425019 = this__425018.__hash;
if(!((h__5670__auto____425019 == null)))
{return h__5670__auto____425019;
} else
{var h__5670__auto____425020 = cljs.core.hash_coll.call(null,coll);
this__425018.__hash = h__5670__auto____425020;
return h__5670__auto____425020;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425021 = this;
if(cljs.core.truth_(this__425021.front))
{return (new cljs.core.PersistentQueue(this__425021.meta,(this__425021.count + 1),this__425021.front,cljs.core.conj.call(null,(function (){var or__3824__auto____425022 = this__425021.rear;
if(cljs.core.truth_(or__3824__auto____425022))
{return or__3824__auto____425022;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__425021.meta,(this__425021.count + 1),cljs.core.conj.call(null,this__425021.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__425023 = this;
var this__425024 = this;
return cljs.core.pr_str.call(null,this__425024);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425025 = this;
var rear__425026 = cljs.core.seq.call(null,this__425025.rear);
if(cljs.core.truth_((function (){var or__3824__auto____425027 = this__425025.front;
if(cljs.core.truth_(or__3824__auto____425027))
{return or__3824__auto____425027;
} else
{return rear__425026;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__425025.front,cljs.core.seq.call(null,rear__425026),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425028 = this;
return this__425028.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__425029 = this;
return cljs.core._first.call(null,this__425029.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__425030 = this;
if(cljs.core.truth_(this__425030.front))
{var temp__3971__auto____425031 = cljs.core.next.call(null,this__425030.front);
if(temp__3971__auto____425031)
{var f1__425032 = temp__3971__auto____425031;
return (new cljs.core.PersistentQueue(this__425030.meta,(this__425030.count - 1),f1__425032,this__425030.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__425030.meta,(this__425030.count - 1),cljs.core.seq.call(null,this__425030.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__425033 = this;
return cljs.core.first.call(null,this__425033.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__425034 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425036 = this;
return (new cljs.core.PersistentQueue(meta,this__425036.count,this__425036.front,this__425036.rear,this__425036.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425037 = this;
return this__425037.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425038 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__425039 = this;
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
var len__425042 = array.length;
var i__425043 = 0;
while(true){
if((i__425043 < len__425042))
{if((k === (array[i__425043])))
{return i__425043;
} else
{{
var G__425044 = (i__425043 + incr);
i__425043 = G__425044;
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
var a__425047 = cljs.core.hash.call(null,a);
var b__425048 = cljs.core.hash.call(null,b);
if((a__425047 < b__425048))
{return -1;
} else
{if((a__425047 > b__425048))
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
var ks__425056 = m.keys;
var len__425057 = ks__425056.length;
var so__425058 = m.strobj;
var out__425059 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__425060 = 0;
var out__425061 = cljs.core.transient$.call(null,out__425059);
while(true){
if((i__425060 < len__425057))
{var k__425062 = (ks__425056[i__425060]);
{
var G__425063 = (i__425060 + 1);
var G__425064 = cljs.core.assoc_BANG_.call(null,out__425061,k__425062,(so__425058[k__425062]));
i__425060 = G__425063;
out__425061 = G__425064;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__425061,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__425070 = {};
var l__425071 = ks.length;
var i__425072 = 0;
while(true){
if((i__425072 < l__425071))
{var k__425073 = (ks[i__425072]);
(new_obj__425070[k__425073] = (obj[k__425073]));
{
var G__425074 = (i__425072 + 1);
i__425072 = G__425074;
continue;
}
} else
{}
break;
}
return new_obj__425070;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__425077 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425078 = this;
var h__5670__auto____425079 = this__425078.__hash;
if(!((h__5670__auto____425079 == null)))
{return h__5670__auto____425079;
} else
{var h__5670__auto____425080 = cljs.core.hash_imap.call(null,coll);
this__425078.__hash = h__5670__auto____425080;
return h__5670__auto____425080;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__425081 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__425082 = this;
if((function (){var and__3822__auto____425083 = goog.isString(k);
if(and__3822__auto____425083)
{return !((cljs.core.scan_array.call(null,1,k,this__425082.keys) == null));
} else
{return and__3822__auto____425083;
}
})())
{return (this__425082.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__425084 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____425085 = (this__425084.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____425085)
{return or__3824__auto____425085;
} else
{return (this__425084.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__425084.keys) == null)))
{var new_strobj__425086 = cljs.core.obj_clone.call(null,this__425084.strobj,this__425084.keys);
(new_strobj__425086[k] = v);
return (new cljs.core.ObjMap(this__425084.meta,this__425084.keys,new_strobj__425086,(this__425084.update_count + 1),null));
} else
{var new_strobj__425087 = cljs.core.obj_clone.call(null,this__425084.strobj,this__425084.keys);
var new_keys__425088 = this__425084.keys.slice();
(new_strobj__425087[k] = v);
new_keys__425088.push(k);
return (new cljs.core.ObjMap(this__425084.meta,new_keys__425088,new_strobj__425087,(this__425084.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__425089 = this;
if((function (){var and__3822__auto____425090 = goog.isString(k);
if(and__3822__auto____425090)
{return !((cljs.core.scan_array.call(null,1,k,this__425089.keys) == null));
} else
{return and__3822__auto____425090;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__425112 = null;
var G__425112__2 = (function (this_sym425091,k){
var this__425093 = this;
var this_sym425091__425094 = this;
var coll__425095 = this_sym425091__425094;
return coll__425095.cljs$core$ILookup$_lookup$arity$2(coll__425095,k);
});
var G__425112__3 = (function (this_sym425092,k,not_found){
var this__425093 = this;
var this_sym425092__425096 = this;
var coll__425097 = this_sym425092__425096;
return coll__425097.cljs$core$ILookup$_lookup$arity$3(coll__425097,k,not_found);
});
G__425112 = function(this_sym425092,k,not_found){
switch(arguments.length){
case 2:
return G__425112__2.call(this,this_sym425092,k);
case 3:
return G__425112__3.call(this,this_sym425092,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425112;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym425075,args425076){
var this__425098 = this;
return this_sym425075.call.apply(this_sym425075,[this_sym425075].concat(args425076.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__425099 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__425100 = this;
var this__425101 = this;
return cljs.core.pr_str.call(null,this__425101);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425102 = this;
if((this__425102.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__425065_SHARP_){
return cljs.core.vector.call(null,p1__425065_SHARP_,(this__425102.strobj[p1__425065_SHARP_]));
}),this__425102.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425103 = this;
return this__425103.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425104 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425105 = this;
return (new cljs.core.ObjMap(meta,this__425105.keys,this__425105.strobj,this__425105.update_count,this__425105.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425106 = this;
return this__425106.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425107 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__425107.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__425108 = this;
if((function (){var and__3822__auto____425109 = goog.isString(k);
if(and__3822__auto____425109)
{return !((cljs.core.scan_array.call(null,1,k,this__425108.keys) == null));
} else
{return and__3822__auto____425109;
}
})())
{var new_keys__425110 = this__425108.keys.slice();
var new_strobj__425111 = cljs.core.obj_clone.call(null,this__425108.strobj,this__425108.keys);
new_keys__425110.splice(cljs.core.scan_array.call(null,1,k,new_keys__425110),1);
cljs.core.js_delete.call(null,new_strobj__425111,k);
return (new cljs.core.ObjMap(this__425108.meta,new_keys__425110,new_strobj__425111,(this__425108.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425116 = this;
var h__5670__auto____425117 = this__425116.__hash;
if(!((h__5670__auto____425117 == null)))
{return h__5670__auto____425117;
} else
{var h__5670__auto____425118 = cljs.core.hash_imap.call(null,coll);
this__425116.__hash = h__5670__auto____425118;
return h__5670__auto____425118;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__425119 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__425120 = this;
var bucket__425121 = (this__425120.hashobj[cljs.core.hash.call(null,k)]);
var i__425122 = (cljs.core.truth_(bucket__425121)?cljs.core.scan_array.call(null,2,k,bucket__425121):null);
if(cljs.core.truth_(i__425122))
{return (bucket__425121[(i__425122 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__425123 = this;
var h__425124 = cljs.core.hash.call(null,k);
var bucket__425125 = (this__425123.hashobj[h__425124]);
if(cljs.core.truth_(bucket__425125))
{var new_bucket__425126 = bucket__425125.slice();
var new_hashobj__425127 = goog.object.clone(this__425123.hashobj);
(new_hashobj__425127[h__425124] = new_bucket__425126);
var temp__3971__auto____425128 = cljs.core.scan_array.call(null,2,k,new_bucket__425126);
if(cljs.core.truth_(temp__3971__auto____425128))
{var i__425129 = temp__3971__auto____425128;
(new_bucket__425126[(i__425129 + 1)] = v);
return (new cljs.core.HashMap(this__425123.meta,this__425123.count,new_hashobj__425127,null));
} else
{new_bucket__425126.push(k,v);
return (new cljs.core.HashMap(this__425123.meta,(this__425123.count + 1),new_hashobj__425127,null));
}
} else
{var new_hashobj__425130 = goog.object.clone(this__425123.hashobj);
(new_hashobj__425130[h__425124] = [k,v]);
return (new cljs.core.HashMap(this__425123.meta,(this__425123.count + 1),new_hashobj__425130,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__425131 = this;
var bucket__425132 = (this__425131.hashobj[cljs.core.hash.call(null,k)]);
var i__425133 = (cljs.core.truth_(bucket__425132)?cljs.core.scan_array.call(null,2,k,bucket__425132):null);
if(cljs.core.truth_(i__425133))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__425158 = null;
var G__425158__2 = (function (this_sym425134,k){
var this__425136 = this;
var this_sym425134__425137 = this;
var coll__425138 = this_sym425134__425137;
return coll__425138.cljs$core$ILookup$_lookup$arity$2(coll__425138,k);
});
var G__425158__3 = (function (this_sym425135,k,not_found){
var this__425136 = this;
var this_sym425135__425139 = this;
var coll__425140 = this_sym425135__425139;
return coll__425140.cljs$core$ILookup$_lookup$arity$3(coll__425140,k,not_found);
});
G__425158 = function(this_sym425135,k,not_found){
switch(arguments.length){
case 2:
return G__425158__2.call(this,this_sym425135,k);
case 3:
return G__425158__3.call(this,this_sym425135,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425158;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym425114,args425115){
var this__425141 = this;
return this_sym425114.call.apply(this_sym425114,[this_sym425114].concat(args425115.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__425142 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__425143 = this;
var this__425144 = this;
return cljs.core.pr_str.call(null,this__425144);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425145 = this;
if((this__425145.count > 0))
{var hashes__425146 = cljs.core.js_keys.call(null,this__425145.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__425113_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__425145.hashobj[p1__425113_SHARP_])));
}),hashes__425146);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425147 = this;
return this__425147.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425148 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425149 = this;
return (new cljs.core.HashMap(meta,this__425149.count,this__425149.hashobj,this__425149.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425150 = this;
return this__425150.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425151 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__425151.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__425152 = this;
var h__425153 = cljs.core.hash.call(null,k);
var bucket__425154 = (this__425152.hashobj[h__425153]);
var i__425155 = (cljs.core.truth_(bucket__425154)?cljs.core.scan_array.call(null,2,k,bucket__425154):null);
if(cljs.core.not.call(null,i__425155))
{return coll;
} else
{var new_hashobj__425156 = goog.object.clone(this__425152.hashobj);
if((3 > bucket__425154.length))
{cljs.core.js_delete.call(null,new_hashobj__425156,h__425153);
} else
{var new_bucket__425157 = bucket__425154.slice();
new_bucket__425157.splice(i__425155,2);
(new_hashobj__425156[h__425153] = new_bucket__425157);
}
return (new cljs.core.HashMap(this__425152.meta,(this__425152.count - 1),new_hashobj__425156,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__425159 = ks.length;
var i__425160 = 0;
var out__425161 = cljs.core.HashMap.EMPTY;
while(true){
if((i__425160 < len__425159))
{{
var G__425162 = (i__425160 + 1);
var G__425163 = cljs.core.assoc.call(null,out__425161,(ks[i__425160]),(vs[i__425160]));
i__425160 = G__425162;
out__425161 = G__425163;
continue;
}
} else
{return out__425161;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__425167 = m.arr;
var len__425168 = arr__425167.length;
var i__425169 = 0;
while(true){
if((len__425168 <= i__425169))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__425167[i__425169]),k))
{return i__425169;
} else
{if("\uFDD0'else")
{{
var G__425170 = (i__425169 + 2);
i__425169 = G__425170;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__425173 = this;
return (new cljs.core.TransientArrayMap({},this__425173.arr.length,this__425173.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425174 = this;
var h__5670__auto____425175 = this__425174.__hash;
if(!((h__5670__auto____425175 == null)))
{return h__5670__auto____425175;
} else
{var h__5670__auto____425176 = cljs.core.hash_imap.call(null,coll);
this__425174.__hash = h__5670__auto____425176;
return h__5670__auto____425176;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__425177 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__425178 = this;
var idx__425179 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__425179 === -1))
{return not_found;
} else
{return (this__425178.arr[(idx__425179 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__425180 = this;
var idx__425181 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__425181 === -1))
{if((this__425180.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__425180.meta,(this__425180.cnt + 1),(function (){var G__425182__425183 = this__425180.arr.slice();
G__425182__425183.push(k);
G__425182__425183.push(v);
return G__425182__425183;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__425180.arr[(idx__425181 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__425180.meta,this__425180.cnt,(function (){var G__425184__425185 = this__425180.arr.slice();
(G__425184__425185[(idx__425181 + 1)] = v);
return G__425184__425185;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__425186 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__425218 = null;
var G__425218__2 = (function (this_sym425187,k){
var this__425189 = this;
var this_sym425187__425190 = this;
var coll__425191 = this_sym425187__425190;
return coll__425191.cljs$core$ILookup$_lookup$arity$2(coll__425191,k);
});
var G__425218__3 = (function (this_sym425188,k,not_found){
var this__425189 = this;
var this_sym425188__425192 = this;
var coll__425193 = this_sym425188__425192;
return coll__425193.cljs$core$ILookup$_lookup$arity$3(coll__425193,k,not_found);
});
G__425218 = function(this_sym425188,k,not_found){
switch(arguments.length){
case 2:
return G__425218__2.call(this,this_sym425188,k);
case 3:
return G__425218__3.call(this,this_sym425188,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425218;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym425171,args425172){
var this__425194 = this;
return this_sym425171.call.apply(this_sym425171,[this_sym425171].concat(args425172.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__425195 = this;
var len__425196 = this__425195.arr.length;
var i__425197 = 0;
var init__425198 = init;
while(true){
if((i__425197 < len__425196))
{var init__425199 = f.call(null,init__425198,(this__425195.arr[i__425197]),(this__425195.arr[(i__425197 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__425199))
{return cljs.core.deref.call(null,init__425199);
} else
{{
var G__425219 = (i__425197 + 2);
var G__425220 = init__425199;
i__425197 = G__425219;
init__425198 = G__425220;
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
var this__425200 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__425201 = this;
var this__425202 = this;
return cljs.core.pr_str.call(null,this__425202);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425203 = this;
if((this__425203.cnt > 0))
{var len__425204 = this__425203.arr.length;
var array_map_seq__425205 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__425204))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__425203.arr[i]),(this__425203.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__425205.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425206 = this;
return this__425206.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425207 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425208 = this;
return (new cljs.core.PersistentArrayMap(meta,this__425208.cnt,this__425208.arr,this__425208.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425209 = this;
return this__425209.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425210 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__425210.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__425211 = this;
var idx__425212 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__425212 >= 0))
{var len__425213 = this__425211.arr.length;
var new_len__425214 = (len__425213 - 2);
if((new_len__425214 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__425215 = cljs.core.make_array.call(null,new_len__425214);
var s__425216 = 0;
var d__425217 = 0;
while(true){
if((s__425216 >= len__425213))
{return (new cljs.core.PersistentArrayMap(this__425211.meta,(this__425211.cnt - 1),new_arr__425215,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__425211.arr[s__425216])))
{{
var G__425221 = (s__425216 + 2);
var G__425222 = d__425217;
s__425216 = G__425221;
d__425217 = G__425222;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__425215[d__425217] = (this__425211.arr[s__425216]));
(new_arr__425215[(d__425217 + 1)] = (this__425211.arr[(s__425216 + 1)]));
{
var G__425223 = (s__425216 + 2);
var G__425224 = (d__425217 + 2);
s__425216 = G__425223;
d__425217 = G__425224;
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
var len__425225 = cljs.core.count.call(null,ks);
var i__425226 = 0;
var out__425227 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__425226 < len__425225))
{{
var G__425228 = (i__425226 + 1);
var G__425229 = cljs.core.assoc_BANG_.call(null,out__425227,(ks[i__425226]),(vs[i__425226]));
i__425226 = G__425228;
out__425227 = G__425229;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__425227);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__425230 = this;
if(cljs.core.truth_(this__425230.editable_QMARK_))
{var idx__425231 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__425231 >= 0))
{(this__425230.arr[idx__425231] = (this__425230.arr[(this__425230.len - 2)]));
(this__425230.arr[(idx__425231 + 1)] = (this__425230.arr[(this__425230.len - 1)]));
var G__425232__425233 = this__425230.arr;
G__425232__425233.pop();
G__425232__425233.pop();
G__425232__425233;
this__425230.len = (this__425230.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__425234 = this;
if(cljs.core.truth_(this__425234.editable_QMARK_))
{var idx__425235 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__425235 === -1))
{if(((this__425234.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__425234.len = (this__425234.len + 2);
this__425234.arr.push(key);
this__425234.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__425234.len,this__425234.arr),key,val);
}
} else
{if((val === (this__425234.arr[(idx__425235 + 1)])))
{return tcoll;
} else
{(this__425234.arr[(idx__425235 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__425236 = this;
if(cljs.core.truth_(this__425236.editable_QMARK_))
{if((function (){var G__425237__425238 = o;
if(G__425237__425238)
{if((function (){var or__3824__auto____425239 = (G__425237__425238.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____425239)
{return or__3824__auto____425239;
} else
{return G__425237__425238.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__425237__425238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__425237__425238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__425237__425238);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__425240 = cljs.core.seq.call(null,o);
var tcoll__425241 = tcoll;
while(true){
var temp__3971__auto____425242 = cljs.core.first.call(null,es__425240);
if(cljs.core.truth_(temp__3971__auto____425242))
{var e__425243 = temp__3971__auto____425242;
{
var G__425249 = cljs.core.next.call(null,es__425240);
var G__425250 = tcoll__425241.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__425241,cljs.core.key.call(null,e__425243),cljs.core.val.call(null,e__425243));
es__425240 = G__425249;
tcoll__425241 = G__425250;
continue;
}
} else
{return tcoll__425241;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__425244 = this;
if(cljs.core.truth_(this__425244.editable_QMARK_))
{this__425244.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__425244.len,2),this__425244.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__425245 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__425246 = this;
if(cljs.core.truth_(this__425246.editable_QMARK_))
{var idx__425247 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__425247 === -1))
{return not_found;
} else
{return (this__425246.arr[(idx__425247 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__425248 = this;
if(cljs.core.truth_(this__425248.editable_QMARK_))
{return cljs.core.quot.call(null,this__425248.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__425253 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__425254 = 0;
while(true){
if((i__425254 < len))
{{
var G__425255 = cljs.core.assoc_BANG_.call(null,out__425253,(arr[i__425254]),(arr[(i__425254 + 1)]));
var G__425256 = (i__425254 + 2);
out__425253 = G__425255;
i__425254 = G__425256;
continue;
}
} else
{return out__425253;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__5791__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__5791__auto__,writer__5792__auto__){
return cljs.core._write.call(null,writer__5792__auto__,"cljs.core/Box");
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
var G__425261__425262 = arr.slice();
(G__425261__425262[i] = a);
return G__425261__425262;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__425263__425264 = arr.slice();
(G__425263__425264[i] = a);
(G__425263__425264[j] = b);
return G__425263__425264;
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
var new_arr__425266 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__425266,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__425266,(2 * i),(new_arr__425266.length - (2 * i)));
return new_arr__425266;
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
var editable__425269 = inode.ensure_editable(edit);
(editable__425269.arr[i] = a);
return editable__425269;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__425270 = inode.ensure_editable(edit);
(editable__425270.arr[i] = a);
(editable__425270.arr[j] = b);
return editable__425270;
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
var len__425277 = arr.length;
var i__425278 = 0;
var init__425279 = init;
while(true){
if((i__425278 < len__425277))
{var init__425282 = (function (){var k__425280 = (arr[i__425278]);
if(!((k__425280 == null)))
{return f.call(null,init__425279,k__425280,(arr[(i__425278 + 1)]));
} else
{var node__425281 = (arr[(i__425278 + 1)]);
if(!((node__425281 == null)))
{return node__425281.kv_reduce(f,init__425279);
} else
{return init__425279;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__425282))
{return cljs.core.deref.call(null,init__425282);
} else
{{
var G__425283 = (i__425278 + 2);
var G__425284 = init__425282;
i__425278 = G__425283;
init__425279 = G__425284;
continue;
}
}
} else
{return init__425279;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__425285 = this;
var inode__425286 = this;
if((this__425285.bitmap === bit))
{return null;
} else
{var editable__425287 = inode__425286.ensure_editable(e);
var earr__425288 = editable__425287.arr;
var len__425289 = earr__425288.length;
editable__425287.bitmap = (bit ^ editable__425287.bitmap);
cljs.core.array_copy.call(null,earr__425288,(2 * (i + 1)),earr__425288,(2 * i),(len__425289 - (2 * (i + 1))));
(earr__425288[(len__425289 - 2)] = null);
(earr__425288[(len__425289 - 1)] = null);
return editable__425287;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__425290 = this;
var inode__425291 = this;
var bit__425292 = (1 << ((hash >>> shift) & 0x01f));
var idx__425293 = cljs.core.bitmap_indexed_node_index.call(null,this__425290.bitmap,bit__425292);
if(((this__425290.bitmap & bit__425292) === 0))
{var n__425294 = cljs.core.bit_count.call(null,this__425290.bitmap);
if(((2 * n__425294) < this__425290.arr.length))
{var editable__425295 = inode__425291.ensure_editable(edit);
var earr__425296 = editable__425295.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__425296,(2 * idx__425293),earr__425296,(2 * (idx__425293 + 1)),(2 * (n__425294 - idx__425293)));
(earr__425296[(2 * idx__425293)] = key);
(earr__425296[((2 * idx__425293) + 1)] = val);
editable__425295.bitmap = (editable__425295.bitmap | bit__425292);
return editable__425295;
} else
{if((n__425294 >= 16))
{var nodes__425297 = cljs.core.make_array.call(null,32);
var jdx__425298 = ((hash >>> shift) & 0x01f);
(nodes__425297[jdx__425298] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__425299 = 0;
var j__425300 = 0;
while(true){
if((i__425299 < 32))
{if((((this__425290.bitmap >>> i__425299) & 1) === 0))
{{
var G__425353 = (i__425299 + 1);
var G__425354 = j__425300;
i__425299 = G__425353;
j__425300 = G__425354;
continue;
}
} else
{(nodes__425297[i__425299] = ((!(((this__425290.arr[j__425300]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__425290.arr[j__425300])),(this__425290.arr[j__425300]),(this__425290.arr[(j__425300 + 1)]),added_leaf_QMARK_):(this__425290.arr[(j__425300 + 1)])));
{
var G__425355 = (i__425299 + 1);
var G__425356 = (j__425300 + 2);
i__425299 = G__425355;
j__425300 = G__425356;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__425294 + 1),nodes__425297));
} else
{if("\uFDD0'else")
{var new_arr__425301 = cljs.core.make_array.call(null,(2 * (n__425294 + 4)));
cljs.core.array_copy.call(null,this__425290.arr,0,new_arr__425301,0,(2 * idx__425293));
(new_arr__425301[(2 * idx__425293)] = key);
(new_arr__425301[((2 * idx__425293) + 1)] = val);
cljs.core.array_copy.call(null,this__425290.arr,(2 * idx__425293),new_arr__425301,(2 * (idx__425293 + 1)),(2 * (n__425294 - idx__425293)));
added_leaf_QMARK_.val = true;
var editable__425302 = inode__425291.ensure_editable(edit);
editable__425302.arr = new_arr__425301;
editable__425302.bitmap = (editable__425302.bitmap | bit__425292);
return editable__425302;
} else
{return null;
}
}
}
} else
{var key_or_nil__425303 = (this__425290.arr[(2 * idx__425293)]);
var val_or_node__425304 = (this__425290.arr[((2 * idx__425293) + 1)]);
if((key_or_nil__425303 == null))
{var n__425305 = val_or_node__425304.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__425305 === val_or_node__425304))
{return inode__425291;
} else
{return cljs.core.edit_and_set.call(null,inode__425291,edit,((2 * idx__425293) + 1),n__425305);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__425303))
{if((val === val_or_node__425304))
{return inode__425291;
} else
{return cljs.core.edit_and_set.call(null,inode__425291,edit,((2 * idx__425293) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__425291,edit,(2 * idx__425293),null,((2 * idx__425293) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__425303,val_or_node__425304,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__425306 = this;
var inode__425307 = this;
return cljs.core.create_inode_seq.call(null,this__425306.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__425308 = this;
var inode__425309 = this;
var bit__425310 = (1 << ((hash >>> shift) & 0x01f));
if(((this__425308.bitmap & bit__425310) === 0))
{return inode__425309;
} else
{var idx__425311 = cljs.core.bitmap_indexed_node_index.call(null,this__425308.bitmap,bit__425310);
var key_or_nil__425312 = (this__425308.arr[(2 * idx__425311)]);
var val_or_node__425313 = (this__425308.arr[((2 * idx__425311) + 1)]);
if((key_or_nil__425312 == null))
{var n__425314 = val_or_node__425313.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__425314 === val_or_node__425313))
{return inode__425309;
} else
{if(!((n__425314 == null)))
{return cljs.core.edit_and_set.call(null,inode__425309,edit,((2 * idx__425311) + 1),n__425314);
} else
{if((this__425308.bitmap === bit__425310))
{return null;
} else
{if("\uFDD0'else")
{return inode__425309.edit_and_remove_pair(edit,bit__425310,idx__425311);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__425312))
{(removed_leaf_QMARK_[0] = true);
return inode__425309.edit_and_remove_pair(edit,bit__425310,idx__425311);
} else
{if("\uFDD0'else")
{return inode__425309;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__425315 = this;
var inode__425316 = this;
if((e === this__425315.edit))
{return inode__425316;
} else
{var n__425317 = cljs.core.bit_count.call(null,this__425315.bitmap);
var new_arr__425318 = cljs.core.make_array.call(null,(((n__425317 < 0))?4:(2 * (n__425317 + 1))));
cljs.core.array_copy.call(null,this__425315.arr,0,new_arr__425318,0,(2 * n__425317));
return (new cljs.core.BitmapIndexedNode(e,this__425315.bitmap,new_arr__425318));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__425319 = this;
var inode__425320 = this;
return cljs.core.inode_kv_reduce.call(null,this__425319.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__425321 = this;
var inode__425322 = this;
var bit__425323 = (1 << ((hash >>> shift) & 0x01f));
if(((this__425321.bitmap & bit__425323) === 0))
{return not_found;
} else
{var idx__425324 = cljs.core.bitmap_indexed_node_index.call(null,this__425321.bitmap,bit__425323);
var key_or_nil__425325 = (this__425321.arr[(2 * idx__425324)]);
var val_or_node__425326 = (this__425321.arr[((2 * idx__425324) + 1)]);
if((key_or_nil__425325 == null))
{return val_or_node__425326.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__425325))
{return cljs.core.PersistentVector.fromArray([key_or_nil__425325,val_or_node__425326], true);
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
var this__425327 = this;
var inode__425328 = this;
var bit__425329 = (1 << ((hash >>> shift) & 0x01f));
if(((this__425327.bitmap & bit__425329) === 0))
{return inode__425328;
} else
{var idx__425330 = cljs.core.bitmap_indexed_node_index.call(null,this__425327.bitmap,bit__425329);
var key_or_nil__425331 = (this__425327.arr[(2 * idx__425330)]);
var val_or_node__425332 = (this__425327.arr[((2 * idx__425330) + 1)]);
if((key_or_nil__425331 == null))
{var n__425333 = val_or_node__425332.inode_without((shift + 5),hash,key);
if((n__425333 === val_or_node__425332))
{return inode__425328;
} else
{if(!((n__425333 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__425327.bitmap,cljs.core.clone_and_set.call(null,this__425327.arr,((2 * idx__425330) + 1),n__425333)));
} else
{if((this__425327.bitmap === bit__425329))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__425327.bitmap ^ bit__425329),cljs.core.remove_pair.call(null,this__425327.arr,idx__425330)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__425331))
{return (new cljs.core.BitmapIndexedNode(null,(this__425327.bitmap ^ bit__425329),cljs.core.remove_pair.call(null,this__425327.arr,idx__425330)));
} else
{if("\uFDD0'else")
{return inode__425328;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__425334 = this;
var inode__425335 = this;
var bit__425336 = (1 << ((hash >>> shift) & 0x01f));
var idx__425337 = cljs.core.bitmap_indexed_node_index.call(null,this__425334.bitmap,bit__425336);
if(((this__425334.bitmap & bit__425336) === 0))
{var n__425338 = cljs.core.bit_count.call(null,this__425334.bitmap);
if((n__425338 >= 16))
{var nodes__425339 = cljs.core.make_array.call(null,32);
var jdx__425340 = ((hash >>> shift) & 0x01f);
(nodes__425339[jdx__425340] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__425341 = 0;
var j__425342 = 0;
while(true){
if((i__425341 < 32))
{if((((this__425334.bitmap >>> i__425341) & 1) === 0))
{{
var G__425357 = (i__425341 + 1);
var G__425358 = j__425342;
i__425341 = G__425357;
j__425342 = G__425358;
continue;
}
} else
{(nodes__425339[i__425341] = ((!(((this__425334.arr[j__425342]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__425334.arr[j__425342])),(this__425334.arr[j__425342]),(this__425334.arr[(j__425342 + 1)]),added_leaf_QMARK_):(this__425334.arr[(j__425342 + 1)])));
{
var G__425359 = (i__425341 + 1);
var G__425360 = (j__425342 + 2);
i__425341 = G__425359;
j__425342 = G__425360;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__425338 + 1),nodes__425339));
} else
{var new_arr__425343 = cljs.core.make_array.call(null,(2 * (n__425338 + 1)));
cljs.core.array_copy.call(null,this__425334.arr,0,new_arr__425343,0,(2 * idx__425337));
(new_arr__425343[(2 * idx__425337)] = key);
(new_arr__425343[((2 * idx__425337) + 1)] = val);
cljs.core.array_copy.call(null,this__425334.arr,(2 * idx__425337),new_arr__425343,(2 * (idx__425337 + 1)),(2 * (n__425338 - idx__425337)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__425334.bitmap | bit__425336),new_arr__425343));
}
} else
{var key_or_nil__425344 = (this__425334.arr[(2 * idx__425337)]);
var val_or_node__425345 = (this__425334.arr[((2 * idx__425337) + 1)]);
if((key_or_nil__425344 == null))
{var n__425346 = val_or_node__425345.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__425346 === val_or_node__425345))
{return inode__425335;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__425334.bitmap,cljs.core.clone_and_set.call(null,this__425334.arr,((2 * idx__425337) + 1),n__425346)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__425344))
{if((val === val_or_node__425345))
{return inode__425335;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__425334.bitmap,cljs.core.clone_and_set.call(null,this__425334.arr,((2 * idx__425337) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__425334.bitmap,cljs.core.clone_and_set.call(null,this__425334.arr,(2 * idx__425337),null,((2 * idx__425337) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__425344,val_or_node__425345,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__425347 = this;
var inode__425348 = this;
var bit__425349 = (1 << ((hash >>> shift) & 0x01f));
if(((this__425347.bitmap & bit__425349) === 0))
{return not_found;
} else
{var idx__425350 = cljs.core.bitmap_indexed_node_index.call(null,this__425347.bitmap,bit__425349);
var key_or_nil__425351 = (this__425347.arr[(2 * idx__425350)]);
var val_or_node__425352 = (this__425347.arr[((2 * idx__425350) + 1)]);
if((key_or_nil__425351 == null))
{return val_or_node__425352.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__425351))
{return val_or_node__425352;
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
var arr__425368 = array_node.arr;
var len__425369 = (2 * (array_node.cnt - 1));
var new_arr__425370 = cljs.core.make_array.call(null,len__425369);
var i__425371 = 0;
var j__425372 = 1;
var bitmap__425373 = 0;
while(true){
if((i__425371 < len__425369))
{if((function (){var and__3822__auto____425374 = !((i__425371 === idx));
if(and__3822__auto____425374)
{return !(((arr__425368[i__425371]) == null));
} else
{return and__3822__auto____425374;
}
})())
{(new_arr__425370[j__425372] = (arr__425368[i__425371]));
{
var G__425375 = (i__425371 + 1);
var G__425376 = (j__425372 + 2);
var G__425377 = (bitmap__425373 | (1 << i__425371));
i__425371 = G__425375;
j__425372 = G__425376;
bitmap__425373 = G__425377;
continue;
}
} else
{{
var G__425378 = (i__425371 + 1);
var G__425379 = j__425372;
var G__425380 = bitmap__425373;
i__425371 = G__425378;
j__425372 = G__425379;
bitmap__425373 = G__425380;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__425373,new_arr__425370));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__425381 = this;
var inode__425382 = this;
var idx__425383 = ((hash >>> shift) & 0x01f);
var node__425384 = (this__425381.arr[idx__425383]);
if((node__425384 == null))
{var editable__425385 = cljs.core.edit_and_set.call(null,inode__425382,edit,idx__425383,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__425385.cnt = (editable__425385.cnt + 1);
return editable__425385;
} else
{var n__425386 = node__425384.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__425386 === node__425384))
{return inode__425382;
} else
{return cljs.core.edit_and_set.call(null,inode__425382,edit,idx__425383,n__425386);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__425387 = this;
var inode__425388 = this;
return cljs.core.create_array_node_seq.call(null,this__425387.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__425389 = this;
var inode__425390 = this;
var idx__425391 = ((hash >>> shift) & 0x01f);
var node__425392 = (this__425389.arr[idx__425391]);
if((node__425392 == null))
{return inode__425390;
} else
{var n__425393 = node__425392.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__425393 === node__425392))
{return inode__425390;
} else
{if((n__425393 == null))
{if((this__425389.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__425390,edit,idx__425391);
} else
{var editable__425394 = cljs.core.edit_and_set.call(null,inode__425390,edit,idx__425391,n__425393);
editable__425394.cnt = (editable__425394.cnt - 1);
return editable__425394;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__425390,edit,idx__425391,n__425393);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__425395 = this;
var inode__425396 = this;
if((e === this__425395.edit))
{return inode__425396;
} else
{return (new cljs.core.ArrayNode(e,this__425395.cnt,this__425395.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__425397 = this;
var inode__425398 = this;
var len__425399 = this__425397.arr.length;
var i__425400 = 0;
var init__425401 = init;
while(true){
if((i__425400 < len__425399))
{var node__425402 = (this__425397.arr[i__425400]);
if(!((node__425402 == null)))
{var init__425403 = node__425402.kv_reduce(f,init__425401);
if(cljs.core.reduced_QMARK_.call(null,init__425403))
{return cljs.core.deref.call(null,init__425403);
} else
{{
var G__425422 = (i__425400 + 1);
var G__425423 = init__425403;
i__425400 = G__425422;
init__425401 = G__425423;
continue;
}
}
} else
{return null;
}
} else
{return init__425401;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__425404 = this;
var inode__425405 = this;
var idx__425406 = ((hash >>> shift) & 0x01f);
var node__425407 = (this__425404.arr[idx__425406]);
if(!((node__425407 == null)))
{return node__425407.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__425408 = this;
var inode__425409 = this;
var idx__425410 = ((hash >>> shift) & 0x01f);
var node__425411 = (this__425408.arr[idx__425410]);
if(!((node__425411 == null)))
{var n__425412 = node__425411.inode_without((shift + 5),hash,key);
if((n__425412 === node__425411))
{return inode__425409;
} else
{if((n__425412 == null))
{if((this__425408.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__425409,null,idx__425410);
} else
{return (new cljs.core.ArrayNode(null,(this__425408.cnt - 1),cljs.core.clone_and_set.call(null,this__425408.arr,idx__425410,n__425412)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__425408.cnt,cljs.core.clone_and_set.call(null,this__425408.arr,idx__425410,n__425412)));
} else
{return null;
}
}
}
} else
{return inode__425409;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__425413 = this;
var inode__425414 = this;
var idx__425415 = ((hash >>> shift) & 0x01f);
var node__425416 = (this__425413.arr[idx__425415]);
if((node__425416 == null))
{return (new cljs.core.ArrayNode(null,(this__425413.cnt + 1),cljs.core.clone_and_set.call(null,this__425413.arr,idx__425415,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__425417 = node__425416.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__425417 === node__425416))
{return inode__425414;
} else
{return (new cljs.core.ArrayNode(null,this__425413.cnt,cljs.core.clone_and_set.call(null,this__425413.arr,idx__425415,n__425417)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__425418 = this;
var inode__425419 = this;
var idx__425420 = ((hash >>> shift) & 0x01f);
var node__425421 = (this__425418.arr[idx__425420]);
if(!((node__425421 == null)))
{return node__425421.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__425426 = (2 * cnt);
var i__425427 = 0;
while(true){
if((i__425427 < lim__425426))
{if(cljs.core.key_test.call(null,key,(arr[i__425427])))
{return i__425427;
} else
{{
var G__425428 = (i__425427 + 2);
i__425427 = G__425428;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__425429 = this;
var inode__425430 = this;
if((hash === this__425429.collision_hash))
{var idx__425431 = cljs.core.hash_collision_node_find_index.call(null,this__425429.arr,this__425429.cnt,key);
if((idx__425431 === -1))
{if((this__425429.arr.length > (2 * this__425429.cnt)))
{var editable__425432 = cljs.core.edit_and_set.call(null,inode__425430,edit,(2 * this__425429.cnt),key,((2 * this__425429.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__425432.cnt = (editable__425432.cnt + 1);
return editable__425432;
} else
{var len__425433 = this__425429.arr.length;
var new_arr__425434 = cljs.core.make_array.call(null,(len__425433 + 2));
cljs.core.array_copy.call(null,this__425429.arr,0,new_arr__425434,0,len__425433);
(new_arr__425434[len__425433] = key);
(new_arr__425434[(len__425433 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__425430.ensure_editable_array(edit,(this__425429.cnt + 1),new_arr__425434);
}
} else
{if(((this__425429.arr[(idx__425431 + 1)]) === val))
{return inode__425430;
} else
{return cljs.core.edit_and_set.call(null,inode__425430,edit,(idx__425431 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__425429.collision_hash >>> shift) & 0x01f)),[null,inode__425430,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__425435 = this;
var inode__425436 = this;
return cljs.core.create_inode_seq.call(null,this__425435.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__425437 = this;
var inode__425438 = this;
var idx__425439 = cljs.core.hash_collision_node_find_index.call(null,this__425437.arr,this__425437.cnt,key);
if((idx__425439 === -1))
{return inode__425438;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__425437.cnt === 1))
{return null;
} else
{var editable__425440 = inode__425438.ensure_editable(edit);
var earr__425441 = editable__425440.arr;
(earr__425441[idx__425439] = (earr__425441[((2 * this__425437.cnt) - 2)]));
(earr__425441[(idx__425439 + 1)] = (earr__425441[((2 * this__425437.cnt) - 1)]));
(earr__425441[((2 * this__425437.cnt) - 1)] = null);
(earr__425441[((2 * this__425437.cnt) - 2)] = null);
editable__425440.cnt = (editable__425440.cnt - 1);
return editable__425440;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__425442 = this;
var inode__425443 = this;
if((e === this__425442.edit))
{return inode__425443;
} else
{var new_arr__425444 = cljs.core.make_array.call(null,(2 * (this__425442.cnt + 1)));
cljs.core.array_copy.call(null,this__425442.arr,0,new_arr__425444,0,(2 * this__425442.cnt));
return (new cljs.core.HashCollisionNode(e,this__425442.collision_hash,this__425442.cnt,new_arr__425444));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__425445 = this;
var inode__425446 = this;
return cljs.core.inode_kv_reduce.call(null,this__425445.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__425447 = this;
var inode__425448 = this;
var idx__425449 = cljs.core.hash_collision_node_find_index.call(null,this__425447.arr,this__425447.cnt,key);
if((idx__425449 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__425447.arr[idx__425449])))
{return cljs.core.PersistentVector.fromArray([(this__425447.arr[idx__425449]),(this__425447.arr[(idx__425449 + 1)])], true);
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
var this__425450 = this;
var inode__425451 = this;
var idx__425452 = cljs.core.hash_collision_node_find_index.call(null,this__425450.arr,this__425450.cnt,key);
if((idx__425452 === -1))
{return inode__425451;
} else
{if((this__425450.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__425450.collision_hash,(this__425450.cnt - 1),cljs.core.remove_pair.call(null,this__425450.arr,cljs.core.quot.call(null,idx__425452,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__425453 = this;
var inode__425454 = this;
if((hash === this__425453.collision_hash))
{var idx__425455 = cljs.core.hash_collision_node_find_index.call(null,this__425453.arr,this__425453.cnt,key);
if((idx__425455 === -1))
{var len__425456 = this__425453.arr.length;
var new_arr__425457 = cljs.core.make_array.call(null,(len__425456 + 2));
cljs.core.array_copy.call(null,this__425453.arr,0,new_arr__425457,0,len__425456);
(new_arr__425457[len__425456] = key);
(new_arr__425457[(len__425456 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__425453.collision_hash,(this__425453.cnt + 1),new_arr__425457));
} else
{if(cljs.core._EQ_.call(null,(this__425453.arr[idx__425455]),val))
{return inode__425454;
} else
{return (new cljs.core.HashCollisionNode(null,this__425453.collision_hash,this__425453.cnt,cljs.core.clone_and_set.call(null,this__425453.arr,(idx__425455 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__425453.collision_hash >>> shift) & 0x01f)),[null,inode__425454])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__425458 = this;
var inode__425459 = this;
var idx__425460 = cljs.core.hash_collision_node_find_index.call(null,this__425458.arr,this__425458.cnt,key);
if((idx__425460 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__425458.arr[idx__425460])))
{return (this__425458.arr[(idx__425460 + 1)]);
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
var this__425461 = this;
var inode__425462 = this;
if((e === this__425461.edit))
{this__425461.arr = array;
this__425461.cnt = count;
return inode__425462;
} else
{return (new cljs.core.HashCollisionNode(this__425461.edit,this__425461.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__425467 = cljs.core.hash.call(null,key1);
if((key1hash__425467 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__425467,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___425468 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__425467,key1,val1,added_leaf_QMARK___425468).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___425468);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__425469 = cljs.core.hash.call(null,key1);
if((key1hash__425469 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__425469,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___425470 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__425469,key1,val1,added_leaf_QMARK___425470).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___425470);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425471 = this;
var h__5670__auto____425472 = this__425471.__hash;
if(!((h__5670__auto____425472 == null)))
{return h__5670__auto____425472;
} else
{var h__5670__auto____425473 = cljs.core.hash_coll.call(null,coll);
this__425471.__hash = h__5670__auto____425473;
return h__5670__auto____425473;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425474 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__425475 = this;
var this__425476 = this;
return cljs.core.pr_str.call(null,this__425476);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__425477 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__425478 = this;
if((this__425478.s == null))
{return cljs.core.PersistentVector.fromArray([(this__425478.nodes[this__425478.i]),(this__425478.nodes[(this__425478.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__425478.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__425479 = this;
if((this__425479.s == null))
{return cljs.core.create_inode_seq.call(null,this__425479.nodes,(this__425479.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__425479.nodes,this__425479.i,cljs.core.next.call(null,this__425479.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425480 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425481 = this;
return (new cljs.core.NodeSeq(meta,this__425481.nodes,this__425481.i,this__425481.s,this__425481.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425482 = this;
return this__425482.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425483 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__425483.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__425490 = nodes.length;
var j__425491 = i;
while(true){
if((j__425491 < len__425490))
{if(!(((nodes[j__425491]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__425491,null,null));
} else
{var temp__3971__auto____425492 = (nodes[(j__425491 + 1)]);
if(cljs.core.truth_(temp__3971__auto____425492))
{var node__425493 = temp__3971__auto____425492;
var temp__3971__auto____425494 = node__425493.inode_seq();
if(cljs.core.truth_(temp__3971__auto____425494))
{var node_seq__425495 = temp__3971__auto____425494;
return (new cljs.core.NodeSeq(null,nodes,(j__425491 + 2),node_seq__425495,null));
} else
{{
var G__425496 = (j__425491 + 2);
j__425491 = G__425496;
continue;
}
}
} else
{{
var G__425497 = (j__425491 + 2);
j__425491 = G__425497;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425498 = this;
var h__5670__auto____425499 = this__425498.__hash;
if(!((h__5670__auto____425499 == null)))
{return h__5670__auto____425499;
} else
{var h__5670__auto____425500 = cljs.core.hash_coll.call(null,coll);
this__425498.__hash = h__5670__auto____425500;
return h__5670__auto____425500;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425501 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__425502 = this;
var this__425503 = this;
return cljs.core.pr_str.call(null,this__425503);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__425504 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__425505 = this;
return cljs.core.first.call(null,this__425505.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__425506 = this;
return cljs.core.create_array_node_seq.call(null,null,this__425506.nodes,this__425506.i,cljs.core.next.call(null,this__425506.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425507 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425508 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__425508.nodes,this__425508.i,this__425508.s,this__425508.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425509 = this;
return this__425509.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425510 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__425510.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__425517 = nodes.length;
var j__425518 = i;
while(true){
if((j__425518 < len__425517))
{var temp__3971__auto____425519 = (nodes[j__425518]);
if(cljs.core.truth_(temp__3971__auto____425519))
{var nj__425520 = temp__3971__auto____425519;
var temp__3971__auto____425521 = nj__425520.inode_seq();
if(cljs.core.truth_(temp__3971__auto____425521))
{var ns__425522 = temp__3971__auto____425521;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__425518 + 1),ns__425522,null));
} else
{{
var G__425523 = (j__425518 + 1);
j__425518 = G__425523;
continue;
}
}
} else
{{
var G__425524 = (j__425518 + 1);
j__425518 = G__425524;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__425527 = this;
return (new cljs.core.TransientHashMap({},this__425527.root,this__425527.cnt,this__425527.has_nil_QMARK_,this__425527.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425528 = this;
var h__5670__auto____425529 = this__425528.__hash;
if(!((h__5670__auto____425529 == null)))
{return h__5670__auto____425529;
} else
{var h__5670__auto____425530 = cljs.core.hash_imap.call(null,coll);
this__425528.__hash = h__5670__auto____425530;
return h__5670__auto____425530;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__425531 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__425532 = this;
if((k == null))
{if(this__425532.has_nil_QMARK_)
{return this__425532.nil_val;
} else
{return not_found;
}
} else
{if((this__425532.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__425532.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__425533 = this;
if((k == null))
{if((function (){var and__3822__auto____425534 = this__425533.has_nil_QMARK_;
if(and__3822__auto____425534)
{return (v === this__425533.nil_val);
} else
{return and__3822__auto____425534;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__425533.meta,((this__425533.has_nil_QMARK_)?this__425533.cnt:(this__425533.cnt + 1)),this__425533.root,true,v,null));
}
} else
{var added_leaf_QMARK___425535 = (new cljs.core.Box(false));
var new_root__425536 = (((this__425533.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__425533.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___425535);
if((new_root__425536 === this__425533.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__425533.meta,((added_leaf_QMARK___425535.val)?(this__425533.cnt + 1):this__425533.cnt),new_root__425536,this__425533.has_nil_QMARK_,this__425533.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__425537 = this;
if((k == null))
{return this__425537.has_nil_QMARK_;
} else
{if((this__425537.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__425537.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__425560 = null;
var G__425560__2 = (function (this_sym425538,k){
var this__425540 = this;
var this_sym425538__425541 = this;
var coll__425542 = this_sym425538__425541;
return coll__425542.cljs$core$ILookup$_lookup$arity$2(coll__425542,k);
});
var G__425560__3 = (function (this_sym425539,k,not_found){
var this__425540 = this;
var this_sym425539__425543 = this;
var coll__425544 = this_sym425539__425543;
return coll__425544.cljs$core$ILookup$_lookup$arity$3(coll__425544,k,not_found);
});
G__425560 = function(this_sym425539,k,not_found){
switch(arguments.length){
case 2:
return G__425560__2.call(this,this_sym425539,k);
case 3:
return G__425560__3.call(this,this_sym425539,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425560;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym425525,args425526){
var this__425545 = this;
return this_sym425525.call.apply(this_sym425525,[this_sym425525].concat(args425526.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__425546 = this;
var init__425547 = ((this__425546.has_nil_QMARK_)?f.call(null,init,null,this__425546.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__425547))
{return cljs.core.deref.call(null,init__425547);
} else
{if(!((this__425546.root == null)))
{return this__425546.root.kv_reduce(f,init__425547);
} else
{if("\uFDD0'else")
{return init__425547;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__425548 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__425549 = this;
var this__425550 = this;
return cljs.core.pr_str.call(null,this__425550);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425551 = this;
if((this__425551.cnt > 0))
{var s__425552 = ((!((this__425551.root == null)))?this__425551.root.inode_seq():null);
if(this__425551.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__425551.nil_val], true),s__425552);
} else
{return s__425552;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425553 = this;
return this__425553.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425554 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425555 = this;
return (new cljs.core.PersistentHashMap(meta,this__425555.cnt,this__425555.root,this__425555.has_nil_QMARK_,this__425555.nil_val,this__425555.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425556 = this;
return this__425556.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425557 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__425557.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__425558 = this;
if((k == null))
{if(this__425558.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__425558.meta,(this__425558.cnt - 1),this__425558.root,false,null,null));
} else
{return coll;
}
} else
{if((this__425558.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__425559 = this__425558.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__425559 === this__425558.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__425558.meta,(this__425558.cnt - 1),new_root__425559,this__425558.has_nil_QMARK_,this__425558.nil_val,null));
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
var len__425561 = ks.length;
var i__425562 = 0;
var out__425563 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__425562 < len__425561))
{{
var G__425564 = (i__425562 + 1);
var G__425565 = cljs.core.assoc_BANG_.call(null,out__425563,(ks[i__425562]),(vs[i__425562]));
i__425562 = G__425564;
out__425563 = G__425565;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__425563);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__425566 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__425567 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__425568 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__425569 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__425570 = this;
if((k == null))
{if(this__425570.has_nil_QMARK_)
{return this__425570.nil_val;
} else
{return null;
}
} else
{if((this__425570.root == null))
{return null;
} else
{return this__425570.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__425571 = this;
if((k == null))
{if(this__425571.has_nil_QMARK_)
{return this__425571.nil_val;
} else
{return not_found;
}
} else
{if((this__425571.root == null))
{return not_found;
} else
{return this__425571.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425572 = this;
if(this__425572.edit)
{return this__425572.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__425573 = this;
var tcoll__425574 = this;
if(this__425573.edit)
{if((function (){var G__425575__425576 = o;
if(G__425575__425576)
{if((function (){var or__3824__auto____425577 = (G__425575__425576.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____425577)
{return or__3824__auto____425577;
} else
{return G__425575__425576.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__425575__425576.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__425575__425576);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__425575__425576);
}
})())
{return tcoll__425574.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__425578 = cljs.core.seq.call(null,o);
var tcoll__425579 = tcoll__425574;
while(true){
var temp__3971__auto____425580 = cljs.core.first.call(null,es__425578);
if(cljs.core.truth_(temp__3971__auto____425580))
{var e__425581 = temp__3971__auto____425580;
{
var G__425592 = cljs.core.next.call(null,es__425578);
var G__425593 = tcoll__425579.assoc_BANG_(cljs.core.key.call(null,e__425581),cljs.core.val.call(null,e__425581));
es__425578 = G__425592;
tcoll__425579 = G__425593;
continue;
}
} else
{return tcoll__425579;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__425582 = this;
var tcoll__425583 = this;
if(this__425582.edit)
{if((k == null))
{if((this__425582.nil_val === v))
{} else
{this__425582.nil_val = v;
}
if(this__425582.has_nil_QMARK_)
{} else
{this__425582.count = (this__425582.count + 1);
this__425582.has_nil_QMARK_ = true;
}
return tcoll__425583;
} else
{var added_leaf_QMARK___425584 = (new cljs.core.Box(false));
var node__425585 = (((this__425582.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__425582.root).inode_assoc_BANG_(this__425582.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___425584);
if((node__425585 === this__425582.root))
{} else
{this__425582.root = node__425585;
}
if(added_leaf_QMARK___425584.val)
{this__425582.count = (this__425582.count + 1);
} else
{}
return tcoll__425583;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__425586 = this;
var tcoll__425587 = this;
if(this__425586.edit)
{if((k == null))
{if(this__425586.has_nil_QMARK_)
{this__425586.has_nil_QMARK_ = false;
this__425586.nil_val = null;
this__425586.count = (this__425586.count - 1);
return tcoll__425587;
} else
{return tcoll__425587;
}
} else
{if((this__425586.root == null))
{return tcoll__425587;
} else
{var removed_leaf_QMARK___425588 = (new cljs.core.Box(false));
var node__425589 = this__425586.root.inode_without_BANG_(this__425586.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___425588);
if((node__425589 === this__425586.root))
{} else
{this__425586.root = node__425589;
}
if(cljs.core.truth_((removed_leaf_QMARK___425588[0])))
{this__425586.count = (this__425586.count - 1);
} else
{}
return tcoll__425587;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__425590 = this;
var tcoll__425591 = this;
if(this__425590.edit)
{this__425590.edit = null;
return (new cljs.core.PersistentHashMap(null,this__425590.count,this__425590.root,this__425590.has_nil_QMARK_,this__425590.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__425596 = node;
var stack__425597 = stack;
while(true){
if(!((t__425596 == null)))
{{
var G__425598 = ((ascending_QMARK_)?t__425596.left:t__425596.right);
var G__425599 = cljs.core.conj.call(null,stack__425597,t__425596);
t__425596 = G__425598;
stack__425597 = G__425599;
continue;
}
} else
{return stack__425597;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425600 = this;
var h__5670__auto____425601 = this__425600.__hash;
if(!((h__5670__auto____425601 == null)))
{return h__5670__auto____425601;
} else
{var h__5670__auto____425602 = cljs.core.hash_coll.call(null,coll);
this__425600.__hash = h__5670__auto____425602;
return h__5670__auto____425602;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425603 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__425604 = this;
var this__425605 = this;
return cljs.core.pr_str.call(null,this__425605);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__425606 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425607 = this;
if((this__425607.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__425607.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__425608 = this;
return cljs.core.peek.call(null,this__425608.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__425609 = this;
var t__425610 = cljs.core.first.call(null,this__425609.stack);
var next_stack__425611 = cljs.core.tree_map_seq_push.call(null,((this__425609.ascending_QMARK_)?t__425610.right:t__425610.left),cljs.core.next.call(null,this__425609.stack),this__425609.ascending_QMARK_);
if(!((next_stack__425611 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__425611,this__425609.ascending_QMARK_,(this__425609.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425613 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__425613.stack,this__425613.ascending_QMARK_,this__425613.cnt,this__425613.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425614 = this;
return this__425614.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425615 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__425615.meta);
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
{if((function (){var and__3822__auto____425617 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____425617)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____425617;
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
{if((function (){var and__3822__auto____425619 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____425619)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____425619;
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
var init__425623 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__425623))
{return cljs.core.deref.call(null,init__425623);
} else
{var init__425624 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__425623):init__425623);
if(cljs.core.reduced_QMARK_.call(null,init__425624))
{return cljs.core.deref.call(null,init__425624);
} else
{var init__425625 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__425624):init__425624);
if(cljs.core.reduced_QMARK_.call(null,init__425625))
{return cljs.core.deref.call(null,init__425625);
} else
{return init__425625;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425628 = this;
var h__5670__auto____425629 = this__425628.__hash;
if(!((h__5670__auto____425629 == null)))
{return h__5670__auto____425629;
} else
{var h__5670__auto____425630 = cljs.core.hash_coll.call(null,coll);
this__425628.__hash = h__5670__auto____425630;
return h__5670__auto____425630;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__425631 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__425632 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__425633 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__425633.key,this__425633.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__425681 = null;
var G__425681__2 = (function (this_sym425634,k){
var this__425636 = this;
var this_sym425634__425637 = this;
var node__425638 = this_sym425634__425637;
return node__425638.cljs$core$ILookup$_lookup$arity$2(node__425638,k);
});
var G__425681__3 = (function (this_sym425635,k,not_found){
var this__425636 = this;
var this_sym425635__425639 = this;
var node__425640 = this_sym425635__425639;
return node__425640.cljs$core$ILookup$_lookup$arity$3(node__425640,k,not_found);
});
G__425681 = function(this_sym425635,k,not_found){
switch(arguments.length){
case 2:
return G__425681__2.call(this,this_sym425635,k);
case 3:
return G__425681__3.call(this,this_sym425635,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425681;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym425626,args425627){
var this__425641 = this;
return this_sym425626.call.apply(this_sym425626,[this_sym425626].concat(args425627.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__425642 = this;
return cljs.core.PersistentVector.fromArray([this__425642.key,this__425642.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__425643 = this;
return this__425643.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__425644 = this;
return this__425644.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__425645 = this;
var node__425646 = this;
return ins.balance_right(node__425646);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__425647 = this;
var node__425648 = this;
return (new cljs.core.RedNode(this__425647.key,this__425647.val,this__425647.left,this__425647.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__425649 = this;
var node__425650 = this;
return cljs.core.balance_right_del.call(null,this__425649.key,this__425649.val,this__425649.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__425651 = this;
var node__425652 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__425653 = this;
var node__425654 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__425654,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__425655 = this;
var node__425656 = this;
return cljs.core.balance_left_del.call(null,this__425655.key,this__425655.val,del,this__425655.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__425657 = this;
var node__425658 = this;
return ins.balance_left(node__425658);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__425659 = this;
var node__425660 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__425660,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__425682 = null;
var G__425682__0 = (function (){
var this__425661 = this;
var this__425663 = this;
return cljs.core.pr_str.call(null,this__425663);
});
G__425682 = function(){
switch(arguments.length){
case 0:
return G__425682__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425682;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__425664 = this;
var node__425665 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__425665,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__425666 = this;
var node__425667 = this;
return node__425667;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__425668 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__425669 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__425670 = this;
return cljs.core.list.call(null,this__425670.key,this__425670.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__425671 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__425672 = this;
return this__425672.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__425673 = this;
return cljs.core.PersistentVector.fromArray([this__425673.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__425674 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__425674.key,this__425674.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425675 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__425676 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__425676.key,this__425676.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__425677 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__425678 = this;
if((n === 0))
{return this__425678.key;
} else
{if((n === 1))
{return this__425678.val;
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
var this__425679 = this;
if((n === 0))
{return this__425679.key;
} else
{if((n === 1))
{return this__425679.val;
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
var this__425680 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425685 = this;
var h__5670__auto____425686 = this__425685.__hash;
if(!((h__5670__auto____425686 == null)))
{return h__5670__auto____425686;
} else
{var h__5670__auto____425687 = cljs.core.hash_coll.call(null,coll);
this__425685.__hash = h__5670__auto____425687;
return h__5670__auto____425687;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__425688 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__425689 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__425690 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__425690.key,this__425690.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__425738 = null;
var G__425738__2 = (function (this_sym425691,k){
var this__425693 = this;
var this_sym425691__425694 = this;
var node__425695 = this_sym425691__425694;
return node__425695.cljs$core$ILookup$_lookup$arity$2(node__425695,k);
});
var G__425738__3 = (function (this_sym425692,k,not_found){
var this__425693 = this;
var this_sym425692__425696 = this;
var node__425697 = this_sym425692__425696;
return node__425697.cljs$core$ILookup$_lookup$arity$3(node__425697,k,not_found);
});
G__425738 = function(this_sym425692,k,not_found){
switch(arguments.length){
case 2:
return G__425738__2.call(this,this_sym425692,k);
case 3:
return G__425738__3.call(this,this_sym425692,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425738;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym425683,args425684){
var this__425698 = this;
return this_sym425683.call.apply(this_sym425683,[this_sym425683].concat(args425684.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__425699 = this;
return cljs.core.PersistentVector.fromArray([this__425699.key,this__425699.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__425700 = this;
return this__425700.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__425701 = this;
return this__425701.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__425702 = this;
var node__425703 = this;
return (new cljs.core.RedNode(this__425702.key,this__425702.val,this__425702.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__425704 = this;
var node__425705 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__425706 = this;
var node__425707 = this;
return (new cljs.core.RedNode(this__425706.key,this__425706.val,this__425706.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__425708 = this;
var node__425709 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__425710 = this;
var node__425711 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__425711,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__425712 = this;
var node__425713 = this;
return (new cljs.core.RedNode(this__425712.key,this__425712.val,del,this__425712.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__425714 = this;
var node__425715 = this;
return (new cljs.core.RedNode(this__425714.key,this__425714.val,ins,this__425714.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__425716 = this;
var node__425717 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__425716.left))
{return (new cljs.core.RedNode(this__425716.key,this__425716.val,this__425716.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__425716.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__425716.right))
{return (new cljs.core.RedNode(this__425716.right.key,this__425716.right.val,(new cljs.core.BlackNode(this__425716.key,this__425716.val,this__425716.left,this__425716.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__425716.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__425717,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__425739 = null;
var G__425739__0 = (function (){
var this__425718 = this;
var this__425720 = this;
return cljs.core.pr_str.call(null,this__425720);
});
G__425739 = function(){
switch(arguments.length){
case 0:
return G__425739__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425739;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__425721 = this;
var node__425722 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__425721.right))
{return (new cljs.core.RedNode(this__425721.key,this__425721.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__425721.left,null)),this__425721.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__425721.left))
{return (new cljs.core.RedNode(this__425721.left.key,this__425721.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__425721.left.left,null)),(new cljs.core.BlackNode(this__425721.key,this__425721.val,this__425721.left.right,this__425721.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__425722,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__425723 = this;
var node__425724 = this;
return (new cljs.core.BlackNode(this__425723.key,this__425723.val,this__425723.left,this__425723.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__425725 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__425726 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__425727 = this;
return cljs.core.list.call(null,this__425727.key,this__425727.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__425728 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__425729 = this;
return this__425729.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__425730 = this;
return cljs.core.PersistentVector.fromArray([this__425730.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__425731 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__425731.key,this__425731.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425732 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__425733 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__425733.key,this__425733.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__425734 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__425735 = this;
if((n === 0))
{return this__425735.key;
} else
{if((n === 1))
{return this__425735.val;
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
var this__425736 = this;
if((n === 0))
{return this__425736.key;
} else
{if((n === 1))
{return this__425736.val;
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
var this__425737 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__425743 = comp.call(null,k,tree.key);
if((c__425743 === 0))
{(found[0] = tree);
return null;
} else
{if((c__425743 < 0))
{var ins__425744 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__425744 == null)))
{return tree.add_left(ins__425744);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__425745 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__425745 == null)))
{return tree.add_right(ins__425745);
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
{var app__425748 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__425748))
{return (new cljs.core.RedNode(app__425748.key,app__425748.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__425748.left,null)),(new cljs.core.RedNode(right.key,right.val,app__425748.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__425748,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__425749 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__425749))
{return (new cljs.core.RedNode(app__425749.key,app__425749.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__425749.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__425749.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__425749,right.right,null)));
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
{var c__425755 = comp.call(null,k,tree.key);
if((c__425755 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__425755 < 0))
{var del__425756 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____425757 = !((del__425756 == null));
if(or__3824__auto____425757)
{return or__3824__auto____425757;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__425756,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__425756,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__425758 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____425759 = !((del__425758 == null));
if(or__3824__auto____425759)
{return or__3824__auto____425759;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__425758);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__425758,null));
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
var tk__425762 = tree.key;
var c__425763 = comp.call(null,k,tk__425762);
if((c__425763 === 0))
{return tree.replace(tk__425762,v,tree.left,tree.right);
} else
{if((c__425763 < 0))
{return tree.replace(tk__425762,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__425762,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425766 = this;
var h__5670__auto____425767 = this__425766.__hash;
if(!((h__5670__auto____425767 == null)))
{return h__5670__auto____425767;
} else
{var h__5670__auto____425768 = cljs.core.hash_imap.call(null,coll);
this__425766.__hash = h__5670__auto____425768;
return h__5670__auto____425768;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__425769 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__425770 = this;
var n__425771 = coll.entry_at(k);
if(!((n__425771 == null)))
{return n__425771.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__425772 = this;
var found__425773 = [null];
var t__425774 = cljs.core.tree_map_add.call(null,this__425772.comp,this__425772.tree,k,v,found__425773);
if((t__425774 == null))
{var found_node__425775 = cljs.core.nth.call(null,found__425773,0);
if(cljs.core._EQ_.call(null,v,found_node__425775.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__425772.comp,cljs.core.tree_map_replace.call(null,this__425772.comp,this__425772.tree,k,v),this__425772.cnt,this__425772.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__425772.comp,t__425774.blacken(),(this__425772.cnt + 1),this__425772.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__425776 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__425810 = null;
var G__425810__2 = (function (this_sym425777,k){
var this__425779 = this;
var this_sym425777__425780 = this;
var coll__425781 = this_sym425777__425780;
return coll__425781.cljs$core$ILookup$_lookup$arity$2(coll__425781,k);
});
var G__425810__3 = (function (this_sym425778,k,not_found){
var this__425779 = this;
var this_sym425778__425782 = this;
var coll__425783 = this_sym425778__425782;
return coll__425783.cljs$core$ILookup$_lookup$arity$3(coll__425783,k,not_found);
});
G__425810 = function(this_sym425778,k,not_found){
switch(arguments.length){
case 2:
return G__425810__2.call(this,this_sym425778,k);
case 3:
return G__425810__3.call(this,this_sym425778,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425810;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym425764,args425765){
var this__425784 = this;
return this_sym425764.call.apply(this_sym425764,[this_sym425764].concat(args425765.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__425785 = this;
if(!((this__425785.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__425785.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__425786 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__425787 = this;
if((this__425787.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__425787.tree,false,this__425787.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__425788 = this;
var this__425789 = this;
return cljs.core.pr_str.call(null,this__425789);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__425790 = this;
var coll__425791 = this;
var t__425792 = this__425790.tree;
while(true){
if(!((t__425792 == null)))
{var c__425793 = this__425790.comp.call(null,k,t__425792.key);
if((c__425793 === 0))
{return t__425792;
} else
{if((c__425793 < 0))
{{
var G__425811 = t__425792.left;
t__425792 = G__425811;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__425812 = t__425792.right;
t__425792 = G__425812;
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
var this__425794 = this;
if((this__425794.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__425794.tree,ascending_QMARK_,this__425794.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__425795 = this;
if((this__425795.cnt > 0))
{var stack__425796 = null;
var t__425797 = this__425795.tree;
while(true){
if(!((t__425797 == null)))
{var c__425798 = this__425795.comp.call(null,k,t__425797.key);
if((c__425798 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__425796,t__425797),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__425798 < 0))
{{
var G__425813 = cljs.core.conj.call(null,stack__425796,t__425797);
var G__425814 = t__425797.left;
stack__425796 = G__425813;
t__425797 = G__425814;
continue;
}
} else
{{
var G__425815 = stack__425796;
var G__425816 = t__425797.right;
stack__425796 = G__425815;
t__425797 = G__425816;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__425798 > 0))
{{
var G__425817 = cljs.core.conj.call(null,stack__425796,t__425797);
var G__425818 = t__425797.right;
stack__425796 = G__425817;
t__425797 = G__425818;
continue;
}
} else
{{
var G__425819 = stack__425796;
var G__425820 = t__425797.left;
stack__425796 = G__425819;
t__425797 = G__425820;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__425796 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__425796,ascending_QMARK_,-1,null));
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
var this__425799 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__425800 = this;
return this__425800.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425801 = this;
if((this__425801.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__425801.tree,true,this__425801.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425802 = this;
return this__425802.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425803 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425804 = this;
return (new cljs.core.PersistentTreeMap(this__425804.comp,this__425804.tree,this__425804.cnt,meta,this__425804.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425805 = this;
return this__425805.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425806 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__425806.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__425807 = this;
var found__425808 = [null];
var t__425809 = cljs.core.tree_map_remove.call(null,this__425807.comp,this__425807.tree,k,found__425808);
if((t__425809 == null))
{if((cljs.core.nth.call(null,found__425808,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__425807.comp,null,0,this__425807.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__425807.comp,t__425809.blacken(),(this__425807.cnt - 1),this__425807.meta,null));
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
var in__425823 = cljs.core.seq.call(null,keyvals);
var out__425824 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__425823)
{{
var G__425825 = cljs.core.nnext.call(null,in__425823);
var G__425826 = cljs.core.assoc_BANG_.call(null,out__425824,cljs.core.first.call(null,in__425823),cljs.core.second.call(null,in__425823));
in__425823 = G__425825;
out__425824 = G__425826;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__425824);
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
hash_map.cljs$lang$applyTo = (function (arglist__425827){
var keyvals = cljs.core.seq(arglist__425827);;
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
array_map.cljs$lang$applyTo = (function (arglist__425828){
var keyvals = cljs.core.seq(arglist__425828);;
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
var ks__425832 = [];
var obj__425833 = {};
var kvs__425834 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__425834)
{ks__425832.push(cljs.core.first.call(null,kvs__425834));
(obj__425833[cljs.core.first.call(null,kvs__425834)] = cljs.core.second.call(null,kvs__425834));
{
var G__425835 = cljs.core.nnext.call(null,kvs__425834);
kvs__425834 = G__425835;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__425832,obj__425833);
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
obj_map.cljs$lang$applyTo = (function (arglist__425836){
var keyvals = cljs.core.seq(arglist__425836);;
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
var in__425839 = cljs.core.seq.call(null,keyvals);
var out__425840 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__425839)
{{
var G__425841 = cljs.core.nnext.call(null,in__425839);
var G__425842 = cljs.core.assoc.call(null,out__425840,cljs.core.first.call(null,in__425839),cljs.core.second.call(null,in__425839));
in__425839 = G__425841;
out__425840 = G__425842;
continue;
}
} else
{return out__425840;
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
sorted_map.cljs$lang$applyTo = (function (arglist__425843){
var keyvals = cljs.core.seq(arglist__425843);;
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
var in__425846 = cljs.core.seq.call(null,keyvals);
var out__425847 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__425846)
{{
var G__425848 = cljs.core.nnext.call(null,in__425846);
var G__425849 = cljs.core.assoc.call(null,out__425847,cljs.core.first.call(null,in__425846),cljs.core.second.call(null,in__425846));
in__425846 = G__425848;
out__425847 = G__425849;
continue;
}
} else
{return out__425847;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__425850){
var comparator = cljs.core.first(arglist__425850);
var keyvals = cljs.core.rest(arglist__425850);
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
{return cljs.core.reduce.call(null,(function (p1__425851_SHARP_,p2__425852_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____425854 = p1__425851_SHARP_;
if(cljs.core.truth_(or__3824__auto____425854))
{return or__3824__auto____425854;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__425852_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__425855){
var maps = cljs.core.seq(arglist__425855);;
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
{var merge_entry__425863 = (function (m,e){
var k__425861 = cljs.core.first.call(null,e);
var v__425862 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__425861))
{return cljs.core.assoc.call(null,m,k__425861,f.call(null,cljs.core._lookup.call(null,m,k__425861,null),v__425862));
} else
{return cljs.core.assoc.call(null,m,k__425861,v__425862);
}
});
var merge2__425865 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__425863,(function (){var or__3824__auto____425864 = m1;
if(cljs.core.truth_(or__3824__auto____425864))
{return or__3824__auto____425864;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__425865,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__425866){
var f = cljs.core.first(arglist__425866);
var maps = cljs.core.rest(arglist__425866);
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
var ret__425871 = cljs.core.ObjMap.EMPTY;
var keys__425872 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__425872)
{var key__425873 = cljs.core.first.call(null,keys__425872);
var entry__425874 = cljs.core._lookup.call(null,map,key__425873,"\uFDD0'cljs.core/not-found");
{
var G__425875 = ((cljs.core.not_EQ_.call(null,entry__425874,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__425871,key__425873,entry__425874):ret__425871);
var G__425876 = cljs.core.next.call(null,keys__425872);
ret__425871 = G__425875;
keys__425872 = G__425876;
continue;
}
} else
{return ret__425871;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__425880 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__425880.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425881 = this;
var h__5670__auto____425882 = this__425881.__hash;
if(!((h__5670__auto____425882 == null)))
{return h__5670__auto____425882;
} else
{var h__5670__auto____425883 = cljs.core.hash_iset.call(null,coll);
this__425881.__hash = h__5670__auto____425883;
return h__5670__auto____425883;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__425884 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__425885 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__425885.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__425906 = null;
var G__425906__2 = (function (this_sym425886,k){
var this__425888 = this;
var this_sym425886__425889 = this;
var coll__425890 = this_sym425886__425889;
return coll__425890.cljs$core$ILookup$_lookup$arity$2(coll__425890,k);
});
var G__425906__3 = (function (this_sym425887,k,not_found){
var this__425888 = this;
var this_sym425887__425891 = this;
var coll__425892 = this_sym425887__425891;
return coll__425892.cljs$core$ILookup$_lookup$arity$3(coll__425892,k,not_found);
});
G__425906 = function(this_sym425887,k,not_found){
switch(arguments.length){
case 2:
return G__425906__2.call(this,this_sym425887,k);
case 3:
return G__425906__3.call(this,this_sym425887,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425906;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym425878,args425879){
var this__425893 = this;
return this_sym425878.call.apply(this_sym425878,[this_sym425878].concat(args425879.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425894 = this;
return (new cljs.core.PersistentHashSet(this__425894.meta,cljs.core.assoc.call(null,this__425894.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__425895 = this;
var this__425896 = this;
return cljs.core.pr_str.call(null,this__425896);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425897 = this;
return cljs.core.keys.call(null,this__425897.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__425898 = this;
return (new cljs.core.PersistentHashSet(this__425898.meta,cljs.core.dissoc.call(null,this__425898.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425899 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425900 = this;
var and__3822__auto____425901 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____425901)
{var and__3822__auto____425902 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____425902)
{return cljs.core.every_QMARK_.call(null,(function (p1__425877_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__425877_SHARP_);
}),other);
} else
{return and__3822__auto____425902;
}
} else
{return and__3822__auto____425901;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425903 = this;
return (new cljs.core.PersistentHashSet(meta,this__425903.hash_map,this__425903.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425904 = this;
return this__425904.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425905 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__425905.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__425907 = cljs.core.count.call(null,items);
var i__425908 = 0;
var out__425909 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__425908 < len__425907))
{{
var G__425910 = (i__425908 + 1);
var G__425911 = cljs.core.conj_BANG_.call(null,out__425909,(items[i__425908]));
i__425908 = G__425910;
out__425909 = G__425911;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__425909);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__425929 = null;
var G__425929__2 = (function (this_sym425915,k){
var this__425917 = this;
var this_sym425915__425918 = this;
var tcoll__425919 = this_sym425915__425918;
if((cljs.core._lookup.call(null,this__425917.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__425929__3 = (function (this_sym425916,k,not_found){
var this__425917 = this;
var this_sym425916__425920 = this;
var tcoll__425921 = this_sym425916__425920;
if((cljs.core._lookup.call(null,this__425917.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__425929 = function(this_sym425916,k,not_found){
switch(arguments.length){
case 2:
return G__425929__2.call(this,this_sym425916,k);
case 3:
return G__425929__3.call(this,this_sym425916,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425929;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym425913,args425914){
var this__425922 = this;
return this_sym425913.call.apply(this_sym425913,[this_sym425913].concat(args425914.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__425923 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__425924 = this;
if((cljs.core._lookup.call(null,this__425924.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__425925 = this;
return cljs.core.count.call(null,this__425925.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__425926 = this;
this__425926.transient_map = cljs.core.dissoc_BANG_.call(null,this__425926.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__425927 = this;
this__425927.transient_map = cljs.core.assoc_BANG_.call(null,this__425927.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__425928 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__425928.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__425932 = this;
var h__5670__auto____425933 = this__425932.__hash;
if(!((h__5670__auto____425933 == null)))
{return h__5670__auto____425933;
} else
{var h__5670__auto____425934 = cljs.core.hash_iset.call(null,coll);
this__425932.__hash = h__5670__auto____425934;
return h__5670__auto____425934;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__425935 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__425936 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__425936.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__425962 = null;
var G__425962__2 = (function (this_sym425937,k){
var this__425939 = this;
var this_sym425937__425940 = this;
var coll__425941 = this_sym425937__425940;
return coll__425941.cljs$core$ILookup$_lookup$arity$2(coll__425941,k);
});
var G__425962__3 = (function (this_sym425938,k,not_found){
var this__425939 = this;
var this_sym425938__425942 = this;
var coll__425943 = this_sym425938__425942;
return coll__425943.cljs$core$ILookup$_lookup$arity$3(coll__425943,k,not_found);
});
G__425962 = function(this_sym425938,k,not_found){
switch(arguments.length){
case 2:
return G__425962__2.call(this,this_sym425938,k);
case 3:
return G__425962__3.call(this,this_sym425938,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__425962;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym425930,args425931){
var this__425944 = this;
return this_sym425930.call.apply(this_sym425930,[this_sym425930].concat(args425931.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__425945 = this;
return (new cljs.core.PersistentTreeSet(this__425945.meta,cljs.core.assoc.call(null,this__425945.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__425946 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__425946.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__425947 = this;
var this__425948 = this;
return cljs.core.pr_str.call(null,this__425948);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__425949 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__425949.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__425950 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__425950.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__425951 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__425952 = this;
return cljs.core._comparator.call(null,this__425952.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__425953 = this;
return cljs.core.keys.call(null,this__425953.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__425954 = this;
return (new cljs.core.PersistentTreeSet(this__425954.meta,cljs.core.dissoc.call(null,this__425954.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__425955 = this;
return cljs.core.count.call(null,this__425955.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__425956 = this;
var and__3822__auto____425957 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____425957)
{var and__3822__auto____425958 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____425958)
{return cljs.core.every_QMARK_.call(null,(function (p1__425912_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__425912_SHARP_);
}),other);
} else
{return and__3822__auto____425958;
}
} else
{return and__3822__auto____425957;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__425959 = this;
return (new cljs.core.PersistentTreeSet(meta,this__425959.tree_map,this__425959.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__425960 = this;
return this__425960.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__425961 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__425961.meta);
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
var G__425967__delegate = function (keys){
var in__425965 = cljs.core.seq.call(null,keys);
var out__425966 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__425965))
{{
var G__425968 = cljs.core.next.call(null,in__425965);
var G__425969 = cljs.core.conj_BANG_.call(null,out__425966,cljs.core.first.call(null,in__425965));
in__425965 = G__425968;
out__425966 = G__425969;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__425966);
}
break;
}
};
var G__425967 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__425967__delegate.call(this, keys);
};
G__425967.cljs$lang$maxFixedArity = 0;
G__425967.cljs$lang$applyTo = (function (arglist__425970){
var keys = cljs.core.seq(arglist__425970);;
return G__425967__delegate(keys);
});
G__425967.cljs$lang$arity$variadic = G__425967__delegate;
return G__425967;
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
sorted_set.cljs$lang$applyTo = (function (arglist__425971){
var keys = cljs.core.seq(arglist__425971);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__425973){
var comparator = cljs.core.first(arglist__425973);
var keys = cljs.core.rest(arglist__425973);
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
{var n__425979 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____425980 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____425980))
{var e__425981 = temp__3971__auto____425980;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__425981));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__425979,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__425972_SHARP_){
var temp__3971__auto____425982 = cljs.core.find.call(null,smap,p1__425972_SHARP_);
if(cljs.core.truth_(temp__3971__auto____425982))
{var e__425983 = temp__3971__auto____425982;
return cljs.core.second.call(null,e__425983);
} else
{return p1__425972_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__426013 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__426006,seen){
while(true){
var vec__426007__426008 = p__426006;
var f__426009 = cljs.core.nth.call(null,vec__426007__426008,0,null);
var xs__426010 = vec__426007__426008;
var temp__3974__auto____426011 = cljs.core.seq.call(null,xs__426010);
if(temp__3974__auto____426011)
{var s__426012 = temp__3974__auto____426011;
if(cljs.core.contains_QMARK_.call(null,seen,f__426009))
{{
var G__426014 = cljs.core.rest.call(null,s__426012);
var G__426015 = seen;
p__426006 = G__426014;
seen = G__426015;
continue;
}
} else
{return cljs.core.cons.call(null,f__426009,step.call(null,cljs.core.rest.call(null,s__426012),cljs.core.conj.call(null,seen,f__426009)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__426013.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__426018 = cljs.core.PersistentVector.EMPTY;
var s__426019 = s;
while(true){
if(cljs.core.next.call(null,s__426019))
{{
var G__426020 = cljs.core.conj.call(null,ret__426018,cljs.core.first.call(null,s__426019));
var G__426021 = cljs.core.next.call(null,s__426019);
ret__426018 = G__426020;
s__426019 = G__426021;
continue;
}
} else
{return cljs.core.seq.call(null,ret__426018);
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
{if((function (){var or__3824__auto____426024 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____426024)
{return or__3824__auto____426024;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__426025 = x.lastIndexOf("/");
if((i__426025 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__426025 + 1));
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
if((function (){var or__3824__auto____426028 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____426028)
{return or__3824__auto____426028;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__426029 = x.lastIndexOf("/");
if((i__426029 > -1))
{return cljs.core.subs.call(null,x,2,i__426029);
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
var map__426036 = cljs.core.ObjMap.EMPTY;
var ks__426037 = cljs.core.seq.call(null,keys);
var vs__426038 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____426039 = ks__426037;
if(and__3822__auto____426039)
{return vs__426038;
} else
{return and__3822__auto____426039;
}
})())
{{
var G__426040 = cljs.core.assoc.call(null,map__426036,cljs.core.first.call(null,ks__426037),cljs.core.first.call(null,vs__426038));
var G__426041 = cljs.core.next.call(null,ks__426037);
var G__426042 = cljs.core.next.call(null,vs__426038);
map__426036 = G__426040;
ks__426037 = G__426041;
vs__426038 = G__426042;
continue;
}
} else
{return map__426036;
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
var G__426045__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__426030_SHARP_,p2__426031_SHARP_){
return max_key.call(null,k,p1__426030_SHARP_,p2__426031_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__426045 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426045__delegate.call(this, k, x, y, more);
};
G__426045.cljs$lang$maxFixedArity = 3;
G__426045.cljs$lang$applyTo = (function (arglist__426046){
var k = cljs.core.first(arglist__426046);
var x = cljs.core.first(cljs.core.next(arglist__426046));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426046)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426046)));
return G__426045__delegate(k, x, y, more);
});
G__426045.cljs$lang$arity$variadic = G__426045__delegate;
return G__426045;
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
var G__426047__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__426043_SHARP_,p2__426044_SHARP_){
return min_key.call(null,k,p1__426043_SHARP_,p2__426044_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__426047 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426047__delegate.call(this, k, x, y, more);
};
G__426047.cljs$lang$maxFixedArity = 3;
G__426047.cljs$lang$applyTo = (function (arglist__426048){
var k = cljs.core.first(arglist__426048);
var x = cljs.core.first(cljs.core.next(arglist__426048));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426048)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426048)));
return G__426047__delegate(k, x, y, more);
});
G__426047.cljs$lang$arity$variadic = G__426047__delegate;
return G__426047;
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
var temp__3974__auto____426051 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____426051)
{var s__426052 = temp__3974__auto____426051;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__426052),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__426052)));
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
var temp__3974__auto____426055 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____426055)
{var s__426056 = temp__3974__auto____426055;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__426056))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__426056),take_while.call(null,pred,cljs.core.rest.call(null,s__426056)));
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
var comp__426058 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__426058.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__426070 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____426071 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____426071))
{var vec__426072__426073 = temp__3974__auto____426071;
var e__426074 = cljs.core.nth.call(null,vec__426072__426073,0,null);
var s__426075 = vec__426072__426073;
if(cljs.core.truth_(include__426070.call(null,e__426074)))
{return s__426075;
} else
{return cljs.core.next.call(null,s__426075);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__426070,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____426076 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____426076))
{var vec__426077__426078 = temp__3974__auto____426076;
var e__426079 = cljs.core.nth.call(null,vec__426077__426078,0,null);
var s__426080 = vec__426077__426078;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__426079))?s__426080:cljs.core.next.call(null,s__426080)));
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
var include__426092 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____426093 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____426093))
{var vec__426094__426095 = temp__3974__auto____426093;
var e__426096 = cljs.core.nth.call(null,vec__426094__426095,0,null);
var s__426097 = vec__426094__426095;
if(cljs.core.truth_(include__426092.call(null,e__426096)))
{return s__426097;
} else
{return cljs.core.next.call(null,s__426097);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__426092,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____426098 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____426098))
{var vec__426099__426100 = temp__3974__auto____426098;
var e__426101 = cljs.core.nth.call(null,vec__426099__426100,0,null);
var s__426102 = vec__426099__426100;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__426101))?s__426102:cljs.core.next.call(null,s__426102)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__426103 = this;
var h__5670__auto____426104 = this__426103.__hash;
if(!((h__5670__auto____426104 == null)))
{return h__5670__auto____426104;
} else
{var h__5670__auto____426105 = cljs.core.hash_coll.call(null,rng);
this__426103.__hash = h__5670__auto____426105;
return h__5670__auto____426105;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__426106 = this;
if((this__426106.step > 0))
{if(((this__426106.start + this__426106.step) < this__426106.end))
{return (new cljs.core.Range(this__426106.meta,(this__426106.start + this__426106.step),this__426106.end,this__426106.step,null));
} else
{return null;
}
} else
{if(((this__426106.start + this__426106.step) > this__426106.end))
{return (new cljs.core.Range(this__426106.meta,(this__426106.start + this__426106.step),this__426106.end,this__426106.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__426107 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__426108 = this;
var this__426109 = this;
return cljs.core.pr_str.call(null,this__426109);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__426110 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__426111 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__426112 = this;
if((this__426112.step > 0))
{if((this__426112.start < this__426112.end))
{return rng;
} else
{return null;
}
} else
{if((this__426112.start > this__426112.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__426113 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__426113.end - this__426113.start) / this__426113.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__426114 = this;
return this__426114.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__426115 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__426115.meta,(this__426115.start + this__426115.step),this__426115.end,this__426115.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__426116 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__426117 = this;
return (new cljs.core.Range(meta,this__426117.start,this__426117.end,this__426117.step,this__426117.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__426118 = this;
return this__426118.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__426119 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__426119.start + (n * this__426119.step));
} else
{if((function (){var and__3822__auto____426120 = (this__426119.start > this__426119.end);
if(and__3822__auto____426120)
{return (this__426119.step === 0);
} else
{return and__3822__auto____426120;
}
})())
{return this__426119.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__426121 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__426121.start + (n * this__426121.step));
} else
{if((function (){var and__3822__auto____426122 = (this__426121.start > this__426121.end);
if(and__3822__auto____426122)
{return (this__426121.step === 0);
} else
{return and__3822__auto____426122;
}
})())
{return this__426121.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__426123 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__426123.meta);
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
var temp__3974__auto____426126 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____426126)
{var s__426127 = temp__3974__auto____426126;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__426127),take_nth.call(null,n,cljs.core.drop.call(null,n,s__426127)));
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
var temp__3974__auto____426134 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____426134)
{var s__426135 = temp__3974__auto____426134;
var fst__426136 = cljs.core.first.call(null,s__426135);
var fv__426137 = f.call(null,fst__426136);
var run__426138 = cljs.core.cons.call(null,fst__426136,cljs.core.take_while.call(null,(function (p1__426128_SHARP_){
return cljs.core._EQ_.call(null,fv__426137,f.call(null,p1__426128_SHARP_));
}),cljs.core.next.call(null,s__426135)));
return cljs.core.cons.call(null,run__426138,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__426138),s__426135))));
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
var temp__3971__auto____426153 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____426153)
{var s__426154 = temp__3971__auto____426153;
return reductions.call(null,f,cljs.core.first.call(null,s__426154),cljs.core.rest.call(null,s__426154));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____426155 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____426155)
{var s__426156 = temp__3974__auto____426155;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__426156)),cljs.core.rest.call(null,s__426156));
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
var G__426159 = null;
var G__426159__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__426159__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__426159__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__426159__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__426159__4 = (function() { 
var G__426160__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__426160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426160__delegate.call(this, x, y, z, args);
};
G__426160.cljs$lang$maxFixedArity = 3;
G__426160.cljs$lang$applyTo = (function (arglist__426161){
var x = cljs.core.first(arglist__426161);
var y = cljs.core.first(cljs.core.next(arglist__426161));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426161)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426161)));
return G__426160__delegate(x, y, z, args);
});
G__426160.cljs$lang$arity$variadic = G__426160__delegate;
return G__426160;
})()
;
G__426159 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__426159__0.call(this);
case 1:
return G__426159__1.call(this,x);
case 2:
return G__426159__2.call(this,x,y);
case 3:
return G__426159__3.call(this,x,y,z);
default:
return G__426159__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__426159.cljs$lang$maxFixedArity = 3;
G__426159.cljs$lang$applyTo = G__426159__4.cljs$lang$applyTo;
return G__426159;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__426162 = null;
var G__426162__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__426162__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__426162__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__426162__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__426162__4 = (function() { 
var G__426163__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__426163 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426163__delegate.call(this, x, y, z, args);
};
G__426163.cljs$lang$maxFixedArity = 3;
G__426163.cljs$lang$applyTo = (function (arglist__426164){
var x = cljs.core.first(arglist__426164);
var y = cljs.core.first(cljs.core.next(arglist__426164));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426164)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426164)));
return G__426163__delegate(x, y, z, args);
});
G__426163.cljs$lang$arity$variadic = G__426163__delegate;
return G__426163;
})()
;
G__426162 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__426162__0.call(this);
case 1:
return G__426162__1.call(this,x);
case 2:
return G__426162__2.call(this,x,y);
case 3:
return G__426162__3.call(this,x,y,z);
default:
return G__426162__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__426162.cljs$lang$maxFixedArity = 3;
G__426162.cljs$lang$applyTo = G__426162__4.cljs$lang$applyTo;
return G__426162;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__426165 = null;
var G__426165__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__426165__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__426165__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__426165__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__426165__4 = (function() { 
var G__426166__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__426166 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426166__delegate.call(this, x, y, z, args);
};
G__426166.cljs$lang$maxFixedArity = 3;
G__426166.cljs$lang$applyTo = (function (arglist__426167){
var x = cljs.core.first(arglist__426167);
var y = cljs.core.first(cljs.core.next(arglist__426167));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426167)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426167)));
return G__426166__delegate(x, y, z, args);
});
G__426166.cljs$lang$arity$variadic = G__426166__delegate;
return G__426166;
})()
;
G__426165 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__426165__0.call(this);
case 1:
return G__426165__1.call(this,x);
case 2:
return G__426165__2.call(this,x,y);
case 3:
return G__426165__3.call(this,x,y,z);
default:
return G__426165__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__426165.cljs$lang$maxFixedArity = 3;
G__426165.cljs$lang$applyTo = G__426165__4.cljs$lang$applyTo;
return G__426165;
})()
});
var juxt__4 = (function() { 
var G__426168__delegate = function (f,g,h,fs){
var fs__426158 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__426169 = null;
var G__426169__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__426139_SHARP_,p2__426140_SHARP_){
return cljs.core.conj.call(null,p1__426139_SHARP_,p2__426140_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__426158);
});
var G__426169__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__426141_SHARP_,p2__426142_SHARP_){
return cljs.core.conj.call(null,p1__426141_SHARP_,p2__426142_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__426158);
});
var G__426169__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__426143_SHARP_,p2__426144_SHARP_){
return cljs.core.conj.call(null,p1__426143_SHARP_,p2__426144_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__426158);
});
var G__426169__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__426145_SHARP_,p2__426146_SHARP_){
return cljs.core.conj.call(null,p1__426145_SHARP_,p2__426146_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__426158);
});
var G__426169__4 = (function() { 
var G__426170__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__426147_SHARP_,p2__426148_SHARP_){
return cljs.core.conj.call(null,p1__426147_SHARP_,cljs.core.apply.call(null,p2__426148_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__426158);
};
var G__426170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426170__delegate.call(this, x, y, z, args);
};
G__426170.cljs$lang$maxFixedArity = 3;
G__426170.cljs$lang$applyTo = (function (arglist__426171){
var x = cljs.core.first(arglist__426171);
var y = cljs.core.first(cljs.core.next(arglist__426171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426171)));
return G__426170__delegate(x, y, z, args);
});
G__426170.cljs$lang$arity$variadic = G__426170__delegate;
return G__426170;
})()
;
G__426169 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__426169__0.call(this);
case 1:
return G__426169__1.call(this,x);
case 2:
return G__426169__2.call(this,x,y);
case 3:
return G__426169__3.call(this,x,y,z);
default:
return G__426169__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__426169.cljs$lang$maxFixedArity = 3;
G__426169.cljs$lang$applyTo = G__426169__4.cljs$lang$applyTo;
return G__426169;
})()
};
var G__426168 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__426168__delegate.call(this, f, g, h, fs);
};
G__426168.cljs$lang$maxFixedArity = 3;
G__426168.cljs$lang$applyTo = (function (arglist__426172){
var f = cljs.core.first(arglist__426172);
var g = cljs.core.first(cljs.core.next(arglist__426172));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426172)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__426172)));
return G__426168__delegate(f, g, h, fs);
});
G__426168.cljs$lang$arity$variadic = G__426168__delegate;
return G__426168;
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
var G__426175 = cljs.core.next.call(null,coll);
coll = G__426175;
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
if(cljs.core.truth_((function (){var and__3822__auto____426174 = cljs.core.seq.call(null,coll);
if(and__3822__auto____426174)
{return (n > 0);
} else
{return and__3822__auto____426174;
}
})()))
{{
var G__426176 = (n - 1);
var G__426177 = cljs.core.next.call(null,coll);
n = G__426176;
coll = G__426177;
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
var matches__426179 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__426179),s))
{if((cljs.core.count.call(null,matches__426179) === 1))
{return cljs.core.first.call(null,matches__426179);
} else
{return cljs.core.vec.call(null,matches__426179);
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
var matches__426181 = re.exec(s);
if((matches__426181 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__426181) === 1))
{return cljs.core.first.call(null,matches__426181);
} else
{return cljs.core.vec.call(null,matches__426181);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__426186 = cljs.core.re_find.call(null,re,s);
var match_idx__426187 = s.search(re);
var match_str__426188 = ((cljs.core.coll_QMARK_.call(null,match_data__426186))?cljs.core.first.call(null,match_data__426186):match_data__426186);
var post_match__426189 = cljs.core.subs.call(null,s,(match_idx__426187 + cljs.core.count.call(null,match_str__426188)));
if(cljs.core.truth_(match_data__426186))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__426186,re_seq.call(null,re,post_match__426189));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__426196__426197 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___426198 = cljs.core.nth.call(null,vec__426196__426197,0,null);
var flags__426199 = cljs.core.nth.call(null,vec__426196__426197,1,null);
var pattern__426200 = cljs.core.nth.call(null,vec__426196__426197,2,null);
return (new RegExp(pattern__426200,flags__426199));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__426190_SHARP_){
return print_one.call(null,p1__426190_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__426204__426205 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__426204__426205)
{var o__426206 = cljs.core.first.call(null,G__426204__426205);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__426206,writer,opts);
{
var G__426207 = cljs.core.next.call(null,G__426204__426205);
G__426204__426205 = G__426207;
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
var G__426211__426212 = cljs.core.seq.call(null,ss);
while(true){
if(G__426211__426212)
{var s__426213 = cljs.core.first.call(null,G__426211__426212);
cljs.core._write.call(null,writer,s__426213);
{
var G__426214 = cljs.core.next.call(null,G__426211__426212);
G__426211__426212 = G__426214;
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
write_all.cljs$lang$applyTo = (function (arglist__426215){
var writer = cljs.core.first(arglist__426215);
var ss = cljs.core.rest(arglist__426215);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__426216 = this;
return this__426216.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__426217 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____426227 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____426227))
{var and__3822__auto____426231 = (function (){var G__426228__426229 = obj;
if(G__426228__426229)
{if((function (){var or__3824__auto____426230 = (G__426228__426229.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____426230)
{return or__3824__auto____426230;
} else
{return G__426228__426229.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__426228__426229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__426228__426229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__426228__426229);
}
})();
if(cljs.core.truth_(and__3822__auto____426231))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____426231;
}
} else
{return and__3822__auto____426227;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____426232 = !((obj == null));
if(and__3822__auto____426232)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____426232;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__426233__426234 = obj;
if(G__426233__426234)
{if((function (){var or__3824__auto____426235 = (G__426233__426234.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____426235)
{return or__3824__auto____426235;
} else
{return G__426233__426234.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__426233__426234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__426233__426234);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__426233__426234);
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
{if(cljs.core.truth_((function (){var and__3822__auto____426248 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____426248))
{var and__3822__auto____426252 = (function (){var G__426249__426250 = obj;
if(G__426249__426250)
{if((function (){var or__3824__auto____426251 = (G__426249__426250.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____426251)
{return or__3824__auto____426251;
} else
{return G__426249__426250.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__426249__426250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__426249__426250);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__426249__426250);
}
})();
if(cljs.core.truth_(and__3822__auto____426252))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____426252;
}
} else
{return and__3822__auto____426248;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____426253 = !((obj == null));
if(and__3822__auto____426253)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____426253;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__426254__426255 = obj;
if(G__426254__426255)
{if((function (){var or__3824__auto____426256 = (G__426254__426255.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____426256)
{return or__3824__auto____426256;
} else
{return G__426254__426255.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__426254__426255.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__426254__426255);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__426254__426255);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__426257__426258 = obj;
if(G__426257__426258)
{if((function (){var or__3824__auto____426259 = (G__426257__426258.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____426259)
{return or__3824__auto____426259;
} else
{return G__426257__426258.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__426257__426258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__426257__426258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__426257__426258);
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
var G__426263__426264 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__426263__426264)
{var obj__426265 = cljs.core.first.call(null,G__426263__426264);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__426265,writer,opts);
{
var G__426266 = cljs.core.next.call(null,G__426263__426264);
G__426263__426264 = G__426266;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__426269 = (new goog.string.StringBuffer());
var writer__426270 = (new cljs.core.StringBufferWriter(sb__426269));
cljs.core.pr_seq_writer.call(null,objs,writer__426270,opts);
cljs.core._flush.call(null,writer__426270);
return sb__426269;
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
{var sb__426272 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__426272.append("\n");
return [cljs.core.str(sb__426272)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__426273){
var objs = cljs.core.seq(arglist__426273);;
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
prn_str.cljs$lang$applyTo = (function (arglist__426274){
var objs = cljs.core.seq(arglist__426274);;
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
pr.cljs$lang$applyTo = (function (arglist__426275){
var objs = cljs.core.seq(arglist__426275);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__426276){
var objs = cljs.core.seq(arglist__426276);;
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
print_str.cljs$lang$applyTo = (function (arglist__426277){
var objs = cljs.core.seq(arglist__426277);;
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
println.cljs$lang$applyTo = (function (arglist__426278){
var objs = cljs.core.seq(arglist__426278);;
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
println_str.cljs$lang$applyTo = (function (arglist__426279){
var objs = cljs.core.seq(arglist__426279);;
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
prn.cljs$lang$applyTo = (function (arglist__426280){
var objs = cljs.core.seq(arglist__426280);;
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
printf.cljs$lang$applyTo = (function (arglist__426281){
var fmt = cljs.core.first(arglist__426281);
var args = cljs.core.rest(arglist__426281);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__426282 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__426282,"{",", ","}",opts,coll);
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
var pr_pair__426283 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__426283,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__426284 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__426284,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____426285 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____426285))
{var nspc__426286 = temp__3974__auto____426285;
return [cljs.core.str(nspc__426286),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____426287 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____426287))
{var nspc__426288 = temp__3974__auto____426287;
return [cljs.core.str(nspc__426288),cljs.core.str("/")].join('');
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
var pr_pair__426289 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__426289,"{",", ","}",opts,coll);
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
var normalize__426291 = (function (n,len){
var ns__426290 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__426290) < len))
{{
var G__426293 = [cljs.core.str("0"),cljs.core.str(ns__426290)].join('');
ns__426290 = G__426293;
continue;
}
} else
{return ns__426290;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__426291.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__426291.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__426291.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__426291.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__426291.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__426291.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__426292 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__426292,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__426294 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__426294,"{",", ","}",opts,coll);
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
var pr_pair__426295 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__426295,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__426296 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__426296,"{",", ","}",opts,coll);
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
var temp__3974__auto____426297 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____426297))
{var nspc__426298 = temp__3974__auto____426297;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__426298)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____426299 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____426299))
{var nspc__426300 = temp__3974__auto____426299;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__426300)].join(''),"/");
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
var pr_pair__426301 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__426301,"{",", ","}",opts,coll);
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
var normalize__426303 = (function (n,len){
var ns__426302 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__426302) < len))
{{
var G__426305 = [cljs.core.str("0"),cljs.core.str(ns__426302)].join('');
ns__426302 = G__426305;
continue;
}
} else
{return ns__426302;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__426303.call(null,(d.getUTCMonth() + 1),2),"-",normalize__426303.call(null,d.getUTCDate(),2),"T",normalize__426303.call(null,d.getUTCHours(),2),":",normalize__426303.call(null,d.getUTCMinutes(),2),":",normalize__426303.call(null,d.getUTCSeconds(),2),".",normalize__426303.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__426304 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__426304,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__426306 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__426307 = this;
var G__426308__426309 = cljs.core.seq.call(null,this__426307.watches);
while(true){
if(G__426308__426309)
{var vec__426310__426311 = cljs.core.first.call(null,G__426308__426309);
var key__426312 = cljs.core.nth.call(null,vec__426310__426311,0,null);
var f__426313 = cljs.core.nth.call(null,vec__426310__426311,1,null);
f__426313.call(null,key__426312,this$,oldval,newval);
{
var G__426321 = cljs.core.next.call(null,G__426308__426309);
G__426308__426309 = G__426321;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__426314 = this;
return this$.watches = cljs.core.assoc.call(null,this__426314.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__426315 = this;
return this$.watches = cljs.core.dissoc.call(null,this__426315.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__426316 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__426316.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__426317 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__426317.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__426318 = this;
return this__426318.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__426319 = this;
return this__426319.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__426320 = this;
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
var G__426333__delegate = function (x,p__426322){
var map__426328__426329 = p__426322;
var map__426328__426330 = ((cljs.core.seq_QMARK_.call(null,map__426328__426329))?cljs.core.apply.call(null,cljs.core.hash_map,map__426328__426329):map__426328__426329);
var validator__426331 = cljs.core._lookup.call(null,map__426328__426330,"\uFDD0'validator",null);
var meta__426332 = cljs.core._lookup.call(null,map__426328__426330,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__426332,validator__426331,null));
};
var G__426333 = function (x,var_args){
var p__426322 = null;
if (goog.isDef(var_args)) {
  p__426322 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__426333__delegate.call(this, x, p__426322);
};
G__426333.cljs$lang$maxFixedArity = 1;
G__426333.cljs$lang$applyTo = (function (arglist__426334){
var x = cljs.core.first(arglist__426334);
var p__426322 = cljs.core.rest(arglist__426334);
return G__426333__delegate(x, p__426322);
});
G__426333.cljs$lang$arity$variadic = G__426333__delegate;
return G__426333;
})()
;
atom = function(x,var_args){
var p__426322 = var_args;
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
var temp__3974__auto____426338 = a.validator;
if(cljs.core.truth_(temp__3974__auto____426338))
{var validate__426339 = temp__3974__auto____426338;
if(cljs.core.truth_(validate__426339.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__426340 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__426340,new_value);
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
var G__426341__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__426341 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__426341__delegate.call(this, a, f, x, y, z, more);
};
G__426341.cljs$lang$maxFixedArity = 5;
G__426341.cljs$lang$applyTo = (function (arglist__426342){
var a = cljs.core.first(arglist__426342);
var f = cljs.core.first(cljs.core.next(arglist__426342));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__426342)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__426342))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__426342)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__426342)))));
return G__426341__delegate(a, f, x, y, z, more);
});
G__426341.cljs$lang$arity$variadic = G__426341__delegate;
return G__426341;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__426343){
var iref = cljs.core.first(arglist__426343);
var f = cljs.core.first(cljs.core.next(arglist__426343));
var args = cljs.core.rest(cljs.core.next(arglist__426343));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__426344 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__426344.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__426345 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__426345.state,(function (p__426346){
var map__426347__426348 = p__426346;
var map__426347__426349 = ((cljs.core.seq_QMARK_.call(null,map__426347__426348))?cljs.core.apply.call(null,cljs.core.hash_map,map__426347__426348):map__426347__426348);
var curr_state__426350 = map__426347__426349;
var done__426351 = cljs.core._lookup.call(null,map__426347__426349,"\uFDD0'done",null);
if(cljs.core.truth_(done__426351))
{return curr_state__426350;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__426345.f.call(null)});
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
var map__426372__426373 = options;
var map__426372__426374 = ((cljs.core.seq_QMARK_.call(null,map__426372__426373))?cljs.core.apply.call(null,cljs.core.hash_map,map__426372__426373):map__426372__426373);
var keywordize_keys__426375 = cljs.core._lookup.call(null,map__426372__426374,"\uFDD0'keywordize-keys",null);
var keyfn__426376 = (cljs.core.truth_(keywordize_keys__426375)?cljs.core.keyword:cljs.core.str);
var f__426391 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5951__auto____426390 = (function iter__426384(s__426385){
return (new cljs.core.LazySeq(null,false,(function (){
var s__426385__426388 = s__426385;
while(true){
if(cljs.core.seq.call(null,s__426385__426388))
{var k__426389 = cljs.core.first.call(null,s__426385__426388);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__426376.call(null,k__426389),thisfn.call(null,(x[k__426389]))], true),iter__426384.call(null,cljs.core.rest.call(null,s__426385__426388)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5951__auto____426390.call(null,cljs.core.js_keys.call(null,x));
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
return f__426391.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__426392){
var x = cljs.core.first(arglist__426392);
var options = cljs.core.rest(arglist__426392);
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
var mem__426397 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__426401__delegate = function (args){
var temp__3971__auto____426398 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__426397),args,null);
if(cljs.core.truth_(temp__3971__auto____426398))
{var v__426399 = temp__3971__auto____426398;
return v__426399;
} else
{var ret__426400 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__426397,cljs.core.assoc,args,ret__426400);
return ret__426400;
}
};
var G__426401 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__426401__delegate.call(this, args);
};
G__426401.cljs$lang$maxFixedArity = 0;
G__426401.cljs$lang$applyTo = (function (arglist__426402){
var args = cljs.core.seq(arglist__426402);;
return G__426401__delegate(args);
});
G__426401.cljs$lang$arity$variadic = G__426401__delegate;
return G__426401;
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
var ret__426404 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__426404))
{{
var G__426405 = ret__426404;
f = G__426405;
continue;
}
} else
{return ret__426404;
}
break;
}
});
var trampoline__2 = (function() { 
var G__426406__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__426406 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__426406__delegate.call(this, f, args);
};
G__426406.cljs$lang$maxFixedArity = 1;
G__426406.cljs$lang$applyTo = (function (arglist__426407){
var f = cljs.core.first(arglist__426407);
var args = cljs.core.rest(arglist__426407);
return G__426406__delegate(f, args);
});
G__426406.cljs$lang$arity$variadic = G__426406__delegate;
return G__426406;
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
var k__426409 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__426409,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__426409,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____426418 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____426418)
{return or__3824__auto____426418;
} else
{var or__3824__auto____426419 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____426419)
{return or__3824__auto____426419;
} else
{var and__3822__auto____426420 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____426420)
{var and__3822__auto____426421 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____426421)
{var and__3822__auto____426422 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____426422)
{var ret__426423 = true;
var i__426424 = 0;
while(true){
if((function (){var or__3824__auto____426425 = cljs.core.not.call(null,ret__426423);
if(or__3824__auto____426425)
{return or__3824__auto____426425;
} else
{return (i__426424 === cljs.core.count.call(null,parent));
}
})())
{return ret__426423;
} else
{{
var G__426426 = isa_QMARK_.call(null,h,child.call(null,i__426424),parent.call(null,i__426424));
var G__426427 = (i__426424 + 1);
ret__426423 = G__426426;
i__426424 = G__426427;
continue;
}
}
break;
}
} else
{return and__3822__auto____426422;
}
} else
{return and__3822__auto____426421;
}
} else
{return and__3822__auto____426420;
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
var tp__426436 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__426437 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__426438 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__426439 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____426440 = ((cljs.core.contains_QMARK_.call(null,tp__426436.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__426438.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__426438.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__426436,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__426439.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__426437,parent,ta__426438),"\uFDD0'descendants":tf__426439.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__426438,tag,td__426437)});
})());
if(cljs.core.truth_(or__3824__auto____426440))
{return or__3824__auto____426440;
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
var parentMap__426445 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__426446 = (cljs.core.truth_(parentMap__426445.call(null,tag))?cljs.core.disj.call(null,parentMap__426445.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__426447 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__426446))?cljs.core.assoc.call(null,parentMap__426445,tag,childsParents__426446):cljs.core.dissoc.call(null,parentMap__426445,tag));
var deriv_seq__426448 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__426428_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__426428_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__426428_SHARP_),cljs.core.second.call(null,p1__426428_SHARP_)));
}),cljs.core.seq.call(null,newParents__426447)));
if(cljs.core.contains_QMARK_.call(null,parentMap__426445.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__426429_SHARP_,p2__426430_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__426429_SHARP_,p2__426430_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__426448));
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
var xprefs__426456 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____426458 = (cljs.core.truth_((function (){var and__3822__auto____426457 = xprefs__426456;
if(cljs.core.truth_(and__3822__auto____426457))
{return xprefs__426456.call(null,y);
} else
{return and__3822__auto____426457;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____426458))
{return or__3824__auto____426458;
} else
{var or__3824__auto____426460 = (function (){var ps__426459 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__426459) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__426459),prefer_table)))
{} else
{}
{
var G__426463 = cljs.core.rest.call(null,ps__426459);
ps__426459 = G__426463;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____426460))
{return or__3824__auto____426460;
} else
{var or__3824__auto____426462 = (function (){var ps__426461 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__426461) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__426461),y,prefer_table)))
{} else
{}
{
var G__426464 = cljs.core.rest.call(null,ps__426461);
ps__426461 = G__426464;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____426462))
{return or__3824__auto____426462;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____426466 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____426466))
{return or__3824__auto____426466;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__426484 = cljs.core.reduce.call(null,(function (be,p__426476){
var vec__426477__426478 = p__426476;
var k__426479 = cljs.core.nth.call(null,vec__426477__426478,0,null);
var ___426480 = cljs.core.nth.call(null,vec__426477__426478,1,null);
var e__426481 = vec__426477__426478;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__426479))
{var be2__426483 = (cljs.core.truth_((function (){var or__3824__auto____426482 = (be == null);
if(or__3824__auto____426482)
{return or__3824__auto____426482;
} else
{return cljs.core.dominates.call(null,k__426479,cljs.core.first.call(null,be),prefer_table);
}
})())?e__426481:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__426483),k__426479,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__426479),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__426483)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__426483;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__426484))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__426484));
return cljs.core.second.call(null,best_entry__426484);
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
if((function (){var and__3822__auto____426489 = mf;
if(and__3822__auto____426489)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____426489;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__5854__auto____426490 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426491 = (cljs.core._reset[goog.typeOf(x__5854__auto____426490)]);
if(or__3824__auto____426491)
{return or__3824__auto____426491;
} else
{var or__3824__auto____426492 = (cljs.core._reset["_"]);
if(or__3824__auto____426492)
{return or__3824__auto____426492;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____426497 = mf;
if(and__3822__auto____426497)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____426497;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__5854__auto____426498 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426499 = (cljs.core._add_method[goog.typeOf(x__5854__auto____426498)]);
if(or__3824__auto____426499)
{return or__3824__auto____426499;
} else
{var or__3824__auto____426500 = (cljs.core._add_method["_"]);
if(or__3824__auto____426500)
{return or__3824__auto____426500;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____426505 = mf;
if(and__3822__auto____426505)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____426505;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__5854__auto____426506 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426507 = (cljs.core._remove_method[goog.typeOf(x__5854__auto____426506)]);
if(or__3824__auto____426507)
{return or__3824__auto____426507;
} else
{var or__3824__auto____426508 = (cljs.core._remove_method["_"]);
if(or__3824__auto____426508)
{return or__3824__auto____426508;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____426513 = mf;
if(and__3822__auto____426513)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____426513;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__5854__auto____426514 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426515 = (cljs.core._prefer_method[goog.typeOf(x__5854__auto____426514)]);
if(or__3824__auto____426515)
{return or__3824__auto____426515;
} else
{var or__3824__auto____426516 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____426516)
{return or__3824__auto____426516;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____426521 = mf;
if(and__3822__auto____426521)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____426521;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__5854__auto____426522 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426523 = (cljs.core._get_method[goog.typeOf(x__5854__auto____426522)]);
if(or__3824__auto____426523)
{return or__3824__auto____426523;
} else
{var or__3824__auto____426524 = (cljs.core._get_method["_"]);
if(or__3824__auto____426524)
{return or__3824__auto____426524;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____426529 = mf;
if(and__3822__auto____426529)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____426529;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__5854__auto____426530 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426531 = (cljs.core._methods[goog.typeOf(x__5854__auto____426530)]);
if(or__3824__auto____426531)
{return or__3824__auto____426531;
} else
{var or__3824__auto____426532 = (cljs.core._methods["_"]);
if(or__3824__auto____426532)
{return or__3824__auto____426532;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____426537 = mf;
if(and__3822__auto____426537)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____426537;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__5854__auto____426538 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426539 = (cljs.core._prefers[goog.typeOf(x__5854__auto____426538)]);
if(or__3824__auto____426539)
{return or__3824__auto____426539;
} else
{var or__3824__auto____426540 = (cljs.core._prefers["_"]);
if(or__3824__auto____426540)
{return or__3824__auto____426540;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____426545 = mf;
if(and__3822__auto____426545)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____426545;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__5854__auto____426546 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____426547 = (cljs.core._dispatch[goog.typeOf(x__5854__auto____426546)]);
if(or__3824__auto____426547)
{return or__3824__auto____426547;
} else
{var or__3824__auto____426548 = (cljs.core._dispatch["_"]);
if(or__3824__auto____426548)
{return or__3824__auto____426548;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__426551 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__426552 = cljs.core._get_method.call(null,mf,dispatch_val__426551);
if(cljs.core.truth_(target_fn__426552))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__426551)].join('')));
}
return cljs.core.apply.call(null,target_fn__426552,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__426553 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__426554 = this;
cljs.core.swap_BANG_.call(null,this__426554.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__426554.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__426554.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__426554.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__426555 = this;
cljs.core.swap_BANG_.call(null,this__426555.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__426555.method_cache,this__426555.method_table,this__426555.cached_hierarchy,this__426555.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__426556 = this;
cljs.core.swap_BANG_.call(null,this__426556.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__426556.method_cache,this__426556.method_table,this__426556.cached_hierarchy,this__426556.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__426557 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__426557.cached_hierarchy),cljs.core.deref.call(null,this__426557.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__426557.method_cache,this__426557.method_table,this__426557.cached_hierarchy,this__426557.hierarchy);
}
var temp__3971__auto____426558 = cljs.core.deref.call(null,this__426557.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____426558))
{var target_fn__426559 = temp__3971__auto____426558;
return target_fn__426559;
} else
{var temp__3971__auto____426560 = cljs.core.find_and_cache_best_method.call(null,this__426557.name,dispatch_val,this__426557.hierarchy,this__426557.method_table,this__426557.prefer_table,this__426557.method_cache,this__426557.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____426560))
{var target_fn__426561 = temp__3971__auto____426560;
return target_fn__426561;
} else
{return cljs.core.deref.call(null,this__426557.method_table).call(null,this__426557.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__426562 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__426562.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__426562.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__426562.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__426562.method_cache,this__426562.method_table,this__426562.cached_hierarchy,this__426562.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__426563 = this;
return cljs.core.deref.call(null,this__426563.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__426564 = this;
return cljs.core.deref.call(null,this__426564.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__426565 = this;
return cljs.core.do_dispatch.call(null,mf,this__426565.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__426567__delegate = function (_,args){
var self__426566 = this;
return cljs.core._dispatch.call(null,self__426566,args);
};
var G__426567 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__426567__delegate.call(this, _, args);
};
G__426567.cljs$lang$maxFixedArity = 1;
G__426567.cljs$lang$applyTo = (function (arglist__426568){
var _ = cljs.core.first(arglist__426568);
var args = cljs.core.rest(arglist__426568);
return G__426567__delegate(_, args);
});
G__426567.cljs$lang$arity$variadic = G__426567__delegate;
return G__426567;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__426569 = this;
return cljs.core._dispatch.call(null,self__426569,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__426570 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_426572,writer,_){
var this__426571 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__426571.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_426574,_){
var this__426573 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__426573.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__426575 = this;
var and__3822__auto____426576 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____426576)
{return (this__426575.uuid === other.uuid);
} else
{return and__3822__auto____426576;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__426577 = this;
var this__426578 = this;
return cljs.core.pr_str.call(null,this__426578);
});
cljs.core.UUID;
