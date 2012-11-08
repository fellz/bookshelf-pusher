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
var x__11017 = (((x == null))?null:x);
if((p[goog.typeOf(x__11017)]))
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
var G__11018__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__11018 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11018__delegate.call(this, array, i, idxs);
};
G__11018.cljs$lang$maxFixedArity = 2;
G__11018.cljs$lang$applyTo = (function (arglist__11019){
var array = cljs.core.first(arglist__11019);
var i = cljs.core.first(cljs.core.next(arglist__11019));
var idxs = cljs.core.rest(cljs.core.next(arglist__11019));
return G__11018__delegate(array, i, idxs);
});
G__11018.cljs$lang$arity$variadic = G__11018__delegate;
return G__11018;
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
if((function (){var and__3822__auto____11104 = this$;
if(and__3822__auto____11104)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____11104;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__6763__auto____11105 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11106 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11105)]);
if(or__3824__auto____11106)
{return or__3824__auto____11106;
} else
{var or__3824__auto____11107 = (cljs.core._invoke["_"]);
if(or__3824__auto____11107)
{return or__3824__auto____11107;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____11108 = this$;
if(and__3822__auto____11108)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____11108;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__6763__auto____11109 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11110 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11109)]);
if(or__3824__auto____11110)
{return or__3824__auto____11110;
} else
{var or__3824__auto____11111 = (cljs.core._invoke["_"]);
if(or__3824__auto____11111)
{return or__3824__auto____11111;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____11112 = this$;
if(and__3822__auto____11112)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____11112;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__6763__auto____11113 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11114 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11113)]);
if(or__3824__auto____11114)
{return or__3824__auto____11114;
} else
{var or__3824__auto____11115 = (cljs.core._invoke["_"]);
if(or__3824__auto____11115)
{return or__3824__auto____11115;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____11116 = this$;
if(and__3822__auto____11116)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____11116;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__6763__auto____11117 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11118 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11117)]);
if(or__3824__auto____11118)
{return or__3824__auto____11118;
} else
{var or__3824__auto____11119 = (cljs.core._invoke["_"]);
if(or__3824__auto____11119)
{return or__3824__auto____11119;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____11120 = this$;
if(and__3822__auto____11120)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____11120;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__6763__auto____11121 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11122 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11121)]);
if(or__3824__auto____11122)
{return or__3824__auto____11122;
} else
{var or__3824__auto____11123 = (cljs.core._invoke["_"]);
if(or__3824__auto____11123)
{return or__3824__auto____11123;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____11124 = this$;
if(and__3822__auto____11124)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____11124;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__6763__auto____11125 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11126 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11125)]);
if(or__3824__auto____11126)
{return or__3824__auto____11126;
} else
{var or__3824__auto____11127 = (cljs.core._invoke["_"]);
if(or__3824__auto____11127)
{return or__3824__auto____11127;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____11128 = this$;
if(and__3822__auto____11128)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____11128;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__6763__auto____11129 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11130 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11129)]);
if(or__3824__auto____11130)
{return or__3824__auto____11130;
} else
{var or__3824__auto____11131 = (cljs.core._invoke["_"]);
if(or__3824__auto____11131)
{return or__3824__auto____11131;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____11132 = this$;
if(and__3822__auto____11132)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____11132;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__6763__auto____11133 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11134 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11133)]);
if(or__3824__auto____11134)
{return or__3824__auto____11134;
} else
{var or__3824__auto____11135 = (cljs.core._invoke["_"]);
if(or__3824__auto____11135)
{return or__3824__auto____11135;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____11136 = this$;
if(and__3822__auto____11136)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____11136;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__6763__auto____11137 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11138 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11137)]);
if(or__3824__auto____11138)
{return or__3824__auto____11138;
} else
{var or__3824__auto____11139 = (cljs.core._invoke["_"]);
if(or__3824__auto____11139)
{return or__3824__auto____11139;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____11140 = this$;
if(and__3822__auto____11140)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____11140;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__6763__auto____11141 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11142 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11141)]);
if(or__3824__auto____11142)
{return or__3824__auto____11142;
} else
{var or__3824__auto____11143 = (cljs.core._invoke["_"]);
if(or__3824__auto____11143)
{return or__3824__auto____11143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____11144 = this$;
if(and__3822__auto____11144)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____11144;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__6763__auto____11145 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11146 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11145)]);
if(or__3824__auto____11146)
{return or__3824__auto____11146;
} else
{var or__3824__auto____11147 = (cljs.core._invoke["_"]);
if(or__3824__auto____11147)
{return or__3824__auto____11147;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____11148 = this$;
if(and__3822__auto____11148)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____11148;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__6763__auto____11149 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11150 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11149)]);
if(or__3824__auto____11150)
{return or__3824__auto____11150;
} else
{var or__3824__auto____11151 = (cljs.core._invoke["_"]);
if(or__3824__auto____11151)
{return or__3824__auto____11151;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____11152 = this$;
if(and__3822__auto____11152)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____11152;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__6763__auto____11153 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11154 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11153)]);
if(or__3824__auto____11154)
{return or__3824__auto____11154;
} else
{var or__3824__auto____11155 = (cljs.core._invoke["_"]);
if(or__3824__auto____11155)
{return or__3824__auto____11155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____11156 = this$;
if(and__3822__auto____11156)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____11156;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__6763__auto____11157 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11158 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11157)]);
if(or__3824__auto____11158)
{return or__3824__auto____11158;
} else
{var or__3824__auto____11159 = (cljs.core._invoke["_"]);
if(or__3824__auto____11159)
{return or__3824__auto____11159;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____11160 = this$;
if(and__3822__auto____11160)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____11160;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__6763__auto____11161 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11162 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11161)]);
if(or__3824__auto____11162)
{return or__3824__auto____11162;
} else
{var or__3824__auto____11163 = (cljs.core._invoke["_"]);
if(or__3824__auto____11163)
{return or__3824__auto____11163;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____11164 = this$;
if(and__3822__auto____11164)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____11164;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__6763__auto____11165 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11166 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11165)]);
if(or__3824__auto____11166)
{return or__3824__auto____11166;
} else
{var or__3824__auto____11167 = (cljs.core._invoke["_"]);
if(or__3824__auto____11167)
{return or__3824__auto____11167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____11168 = this$;
if(and__3822__auto____11168)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____11168;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__6763__auto____11169 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11170 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11169)]);
if(or__3824__auto____11170)
{return or__3824__auto____11170;
} else
{var or__3824__auto____11171 = (cljs.core._invoke["_"]);
if(or__3824__auto____11171)
{return or__3824__auto____11171;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____11172 = this$;
if(and__3822__auto____11172)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____11172;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__6763__auto____11173 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11174 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11173)]);
if(or__3824__auto____11174)
{return or__3824__auto____11174;
} else
{var or__3824__auto____11175 = (cljs.core._invoke["_"]);
if(or__3824__auto____11175)
{return or__3824__auto____11175;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____11176 = this$;
if(and__3822__auto____11176)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____11176;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__6763__auto____11177 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11178 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11177)]);
if(or__3824__auto____11178)
{return or__3824__auto____11178;
} else
{var or__3824__auto____11179 = (cljs.core._invoke["_"]);
if(or__3824__auto____11179)
{return or__3824__auto____11179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____11180 = this$;
if(and__3822__auto____11180)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____11180;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__6763__auto____11181 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11182 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11181)]);
if(or__3824__auto____11182)
{return or__3824__auto____11182;
} else
{var or__3824__auto____11183 = (cljs.core._invoke["_"]);
if(or__3824__auto____11183)
{return or__3824__auto____11183;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____11184 = this$;
if(and__3822__auto____11184)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____11184;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__6763__auto____11185 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11186 = (cljs.core._invoke[goog.typeOf(x__6763__auto____11185)]);
if(or__3824__auto____11186)
{return or__3824__auto____11186;
} else
{var or__3824__auto____11187 = (cljs.core._invoke["_"]);
if(or__3824__auto____11187)
{return or__3824__auto____11187;
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
if((function (){var and__3822__auto____11192 = coll;
if(and__3822__auto____11192)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____11192;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__6763__auto____11193 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11194 = (cljs.core._count[goog.typeOf(x__6763__auto____11193)]);
if(or__3824__auto____11194)
{return or__3824__auto____11194;
} else
{var or__3824__auto____11195 = (cljs.core._count["_"]);
if(or__3824__auto____11195)
{return or__3824__auto____11195;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____11200 = coll;
if(and__3822__auto____11200)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____11200;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__6763__auto____11201 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11202 = (cljs.core._empty[goog.typeOf(x__6763__auto____11201)]);
if(or__3824__auto____11202)
{return or__3824__auto____11202;
} else
{var or__3824__auto____11203 = (cljs.core._empty["_"]);
if(or__3824__auto____11203)
{return or__3824__auto____11203;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____11208 = coll;
if(and__3822__auto____11208)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____11208;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__6763__auto____11209 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11210 = (cljs.core._conj[goog.typeOf(x__6763__auto____11209)]);
if(or__3824__auto____11210)
{return or__3824__auto____11210;
} else
{var or__3824__auto____11211 = (cljs.core._conj["_"]);
if(or__3824__auto____11211)
{return or__3824__auto____11211;
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
if((function (){var and__3822__auto____11220 = coll;
if(and__3822__auto____11220)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____11220;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__6763__auto____11221 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11222 = (cljs.core._nth[goog.typeOf(x__6763__auto____11221)]);
if(or__3824__auto____11222)
{return or__3824__auto____11222;
} else
{var or__3824__auto____11223 = (cljs.core._nth["_"]);
if(or__3824__auto____11223)
{return or__3824__auto____11223;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____11224 = coll;
if(and__3822__auto____11224)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____11224;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__6763__auto____11225 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11226 = (cljs.core._nth[goog.typeOf(x__6763__auto____11225)]);
if(or__3824__auto____11226)
{return or__3824__auto____11226;
} else
{var or__3824__auto____11227 = (cljs.core._nth["_"]);
if(or__3824__auto____11227)
{return or__3824__auto____11227;
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
if((function (){var and__3822__auto____11232 = coll;
if(and__3822__auto____11232)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____11232;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__6763__auto____11233 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11234 = (cljs.core._first[goog.typeOf(x__6763__auto____11233)]);
if(or__3824__auto____11234)
{return or__3824__auto____11234;
} else
{var or__3824__auto____11235 = (cljs.core._first["_"]);
if(or__3824__auto____11235)
{return or__3824__auto____11235;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____11240 = coll;
if(and__3822__auto____11240)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____11240;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__6763__auto____11241 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11242 = (cljs.core._rest[goog.typeOf(x__6763__auto____11241)]);
if(or__3824__auto____11242)
{return or__3824__auto____11242;
} else
{var or__3824__auto____11243 = (cljs.core._rest["_"]);
if(or__3824__auto____11243)
{return or__3824__auto____11243;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____11248 = coll;
if(and__3822__auto____11248)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____11248;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__6763__auto____11249 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11250 = (cljs.core._next[goog.typeOf(x__6763__auto____11249)]);
if(or__3824__auto____11250)
{return or__3824__auto____11250;
} else
{var or__3824__auto____11251 = (cljs.core._next["_"]);
if(or__3824__auto____11251)
{return or__3824__auto____11251;
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
if((function (){var and__3822__auto____11260 = o;
if(and__3822__auto____11260)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____11260;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__6763__auto____11261 = (((o == null))?null:o);
return (function (){var or__3824__auto____11262 = (cljs.core._lookup[goog.typeOf(x__6763__auto____11261)]);
if(or__3824__auto____11262)
{return or__3824__auto____11262;
} else
{var or__3824__auto____11263 = (cljs.core._lookup["_"]);
if(or__3824__auto____11263)
{return or__3824__auto____11263;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____11264 = o;
if(and__3822__auto____11264)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____11264;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__6763__auto____11265 = (((o == null))?null:o);
return (function (){var or__3824__auto____11266 = (cljs.core._lookup[goog.typeOf(x__6763__auto____11265)]);
if(or__3824__auto____11266)
{return or__3824__auto____11266;
} else
{var or__3824__auto____11267 = (cljs.core._lookup["_"]);
if(or__3824__auto____11267)
{return or__3824__auto____11267;
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
if((function (){var and__3822__auto____11272 = coll;
if(and__3822__auto____11272)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____11272;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__6763__auto____11273 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11274 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__6763__auto____11273)]);
if(or__3824__auto____11274)
{return or__3824__auto____11274;
} else
{var or__3824__auto____11275 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____11275)
{return or__3824__auto____11275;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____11280 = coll;
if(and__3822__auto____11280)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____11280;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__6763__auto____11281 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11282 = (cljs.core._assoc[goog.typeOf(x__6763__auto____11281)]);
if(or__3824__auto____11282)
{return or__3824__auto____11282;
} else
{var or__3824__auto____11283 = (cljs.core._assoc["_"]);
if(or__3824__auto____11283)
{return or__3824__auto____11283;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____11288 = coll;
if(and__3822__auto____11288)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____11288;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__6763__auto____11289 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11290 = (cljs.core._dissoc[goog.typeOf(x__6763__auto____11289)]);
if(or__3824__auto____11290)
{return or__3824__auto____11290;
} else
{var or__3824__auto____11291 = (cljs.core._dissoc["_"]);
if(or__3824__auto____11291)
{return or__3824__auto____11291;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____11296 = coll;
if(and__3822__auto____11296)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____11296;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__6763__auto____11297 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11298 = (cljs.core._key[goog.typeOf(x__6763__auto____11297)]);
if(or__3824__auto____11298)
{return or__3824__auto____11298;
} else
{var or__3824__auto____11299 = (cljs.core._key["_"]);
if(or__3824__auto____11299)
{return or__3824__auto____11299;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____11304 = coll;
if(and__3822__auto____11304)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____11304;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__6763__auto____11305 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11306 = (cljs.core._val[goog.typeOf(x__6763__auto____11305)]);
if(or__3824__auto____11306)
{return or__3824__auto____11306;
} else
{var or__3824__auto____11307 = (cljs.core._val["_"]);
if(or__3824__auto____11307)
{return or__3824__auto____11307;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____11312 = coll;
if(and__3822__auto____11312)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____11312;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__6763__auto____11313 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11314 = (cljs.core._disjoin[goog.typeOf(x__6763__auto____11313)]);
if(or__3824__auto____11314)
{return or__3824__auto____11314;
} else
{var or__3824__auto____11315 = (cljs.core._disjoin["_"]);
if(or__3824__auto____11315)
{return or__3824__auto____11315;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____11320 = coll;
if(and__3822__auto____11320)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____11320;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__6763__auto____11321 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11322 = (cljs.core._peek[goog.typeOf(x__6763__auto____11321)]);
if(or__3824__auto____11322)
{return or__3824__auto____11322;
} else
{var or__3824__auto____11323 = (cljs.core._peek["_"]);
if(or__3824__auto____11323)
{return or__3824__auto____11323;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____11328 = coll;
if(and__3822__auto____11328)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____11328;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__6763__auto____11329 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11330 = (cljs.core._pop[goog.typeOf(x__6763__auto____11329)]);
if(or__3824__auto____11330)
{return or__3824__auto____11330;
} else
{var or__3824__auto____11331 = (cljs.core._pop["_"]);
if(or__3824__auto____11331)
{return or__3824__auto____11331;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____11336 = coll;
if(and__3822__auto____11336)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____11336;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__6763__auto____11337 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11338 = (cljs.core._assoc_n[goog.typeOf(x__6763__auto____11337)]);
if(or__3824__auto____11338)
{return or__3824__auto____11338;
} else
{var or__3824__auto____11339 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____11339)
{return or__3824__auto____11339;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____11344 = o;
if(and__3822__auto____11344)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____11344;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__6763__auto____11345 = (((o == null))?null:o);
return (function (){var or__3824__auto____11346 = (cljs.core._deref[goog.typeOf(x__6763__auto____11345)]);
if(or__3824__auto____11346)
{return or__3824__auto____11346;
} else
{var or__3824__auto____11347 = (cljs.core._deref["_"]);
if(or__3824__auto____11347)
{return or__3824__auto____11347;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____11352 = o;
if(and__3822__auto____11352)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____11352;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__6763__auto____11353 = (((o == null))?null:o);
return (function (){var or__3824__auto____11354 = (cljs.core._deref_with_timeout[goog.typeOf(x__6763__auto____11353)]);
if(or__3824__auto____11354)
{return or__3824__auto____11354;
} else
{var or__3824__auto____11355 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____11355)
{return or__3824__auto____11355;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____11360 = o;
if(and__3822__auto____11360)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____11360;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__6763__auto____11361 = (((o == null))?null:o);
return (function (){var or__3824__auto____11362 = (cljs.core._meta[goog.typeOf(x__6763__auto____11361)]);
if(or__3824__auto____11362)
{return or__3824__auto____11362;
} else
{var or__3824__auto____11363 = (cljs.core._meta["_"]);
if(or__3824__auto____11363)
{return or__3824__auto____11363;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____11368 = o;
if(and__3822__auto____11368)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____11368;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__6763__auto____11369 = (((o == null))?null:o);
return (function (){var or__3824__auto____11370 = (cljs.core._with_meta[goog.typeOf(x__6763__auto____11369)]);
if(or__3824__auto____11370)
{return or__3824__auto____11370;
} else
{var or__3824__auto____11371 = (cljs.core._with_meta["_"]);
if(or__3824__auto____11371)
{return or__3824__auto____11371;
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
if((function (){var and__3822__auto____11380 = coll;
if(and__3822__auto____11380)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____11380;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__6763__auto____11381 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11382 = (cljs.core._reduce[goog.typeOf(x__6763__auto____11381)]);
if(or__3824__auto____11382)
{return or__3824__auto____11382;
} else
{var or__3824__auto____11383 = (cljs.core._reduce["_"]);
if(or__3824__auto____11383)
{return or__3824__auto____11383;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____11384 = coll;
if(and__3822__auto____11384)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____11384;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__6763__auto____11385 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11386 = (cljs.core._reduce[goog.typeOf(x__6763__auto____11385)]);
if(or__3824__auto____11386)
{return or__3824__auto____11386;
} else
{var or__3824__auto____11387 = (cljs.core._reduce["_"]);
if(or__3824__auto____11387)
{return or__3824__auto____11387;
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
if((function (){var and__3822__auto____11392 = coll;
if(and__3822__auto____11392)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____11392;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__6763__auto____11393 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11394 = (cljs.core._kv_reduce[goog.typeOf(x__6763__auto____11393)]);
if(or__3824__auto____11394)
{return or__3824__auto____11394;
} else
{var or__3824__auto____11395 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____11395)
{return or__3824__auto____11395;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____11400 = o;
if(and__3822__auto____11400)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____11400;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__6763__auto____11401 = (((o == null))?null:o);
return (function (){var or__3824__auto____11402 = (cljs.core._equiv[goog.typeOf(x__6763__auto____11401)]);
if(or__3824__auto____11402)
{return or__3824__auto____11402;
} else
{var or__3824__auto____11403 = (cljs.core._equiv["_"]);
if(or__3824__auto____11403)
{return or__3824__auto____11403;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____11408 = o;
if(and__3822__auto____11408)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____11408;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__6763__auto____11409 = (((o == null))?null:o);
return (function (){var or__3824__auto____11410 = (cljs.core._hash[goog.typeOf(x__6763__auto____11409)]);
if(or__3824__auto____11410)
{return or__3824__auto____11410;
} else
{var or__3824__auto____11411 = (cljs.core._hash["_"]);
if(or__3824__auto____11411)
{return or__3824__auto____11411;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____11416 = o;
if(and__3822__auto____11416)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____11416;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__6763__auto____11417 = (((o == null))?null:o);
return (function (){var or__3824__auto____11418 = (cljs.core._seq[goog.typeOf(x__6763__auto____11417)]);
if(or__3824__auto____11418)
{return or__3824__auto____11418;
} else
{var or__3824__auto____11419 = (cljs.core._seq["_"]);
if(or__3824__auto____11419)
{return or__3824__auto____11419;
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
if((function (){var and__3822__auto____11424 = coll;
if(and__3822__auto____11424)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____11424;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__6763__auto____11425 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11426 = (cljs.core._rseq[goog.typeOf(x__6763__auto____11425)]);
if(or__3824__auto____11426)
{return or__3824__auto____11426;
} else
{var or__3824__auto____11427 = (cljs.core._rseq["_"]);
if(or__3824__auto____11427)
{return or__3824__auto____11427;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____11432 = coll;
if(and__3822__auto____11432)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____11432;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__6763__auto____11433 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11434 = (cljs.core._sorted_seq[goog.typeOf(x__6763__auto____11433)]);
if(or__3824__auto____11434)
{return or__3824__auto____11434;
} else
{var or__3824__auto____11435 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____11435)
{return or__3824__auto____11435;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____11440 = coll;
if(and__3822__auto____11440)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____11440;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__6763__auto____11441 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11442 = (cljs.core._sorted_seq_from[goog.typeOf(x__6763__auto____11441)]);
if(or__3824__auto____11442)
{return or__3824__auto____11442;
} else
{var or__3824__auto____11443 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____11443)
{return or__3824__auto____11443;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____11448 = coll;
if(and__3822__auto____11448)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____11448;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__6763__auto____11449 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11450 = (cljs.core._entry_key[goog.typeOf(x__6763__auto____11449)]);
if(or__3824__auto____11450)
{return or__3824__auto____11450;
} else
{var or__3824__auto____11451 = (cljs.core._entry_key["_"]);
if(or__3824__auto____11451)
{return or__3824__auto____11451;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____11456 = coll;
if(and__3822__auto____11456)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____11456;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__6763__auto____11457 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11458 = (cljs.core._comparator[goog.typeOf(x__6763__auto____11457)]);
if(or__3824__auto____11458)
{return or__3824__auto____11458;
} else
{var or__3824__auto____11459 = (cljs.core._comparator["_"]);
if(or__3824__auto____11459)
{return or__3824__auto____11459;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____11464 = o;
if(and__3822__auto____11464)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____11464;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__6763__auto____11465 = (((o == null))?null:o);
return (function (){var or__3824__auto____11466 = (cljs.core._pr_seq[goog.typeOf(x__6763__auto____11465)]);
if(or__3824__auto____11466)
{return or__3824__auto____11466;
} else
{var or__3824__auto____11467 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____11467)
{return or__3824__auto____11467;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____11472 = writer;
if(and__3822__auto____11472)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____11472;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__6763__auto____11473 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____11474 = (cljs.core._write[goog.typeOf(x__6763__auto____11473)]);
if(or__3824__auto____11474)
{return or__3824__auto____11474;
} else
{var or__3824__auto____11475 = (cljs.core._write["_"]);
if(or__3824__auto____11475)
{return or__3824__auto____11475;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____11480 = writer;
if(and__3822__auto____11480)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____11480;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__6763__auto____11481 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____11482 = (cljs.core._flush[goog.typeOf(x__6763__auto____11481)]);
if(or__3824__auto____11482)
{return or__3824__auto____11482;
} else
{var or__3824__auto____11483 = (cljs.core._flush["_"]);
if(or__3824__auto____11483)
{return or__3824__auto____11483;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____11488 = o;
if(and__3822__auto____11488)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____11488;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__6763__auto____11489 = (((o == null))?null:o);
return (function (){var or__3824__auto____11490 = (cljs.core._pr_writer[goog.typeOf(x__6763__auto____11489)]);
if(or__3824__auto____11490)
{return or__3824__auto____11490;
} else
{var or__3824__auto____11491 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____11491)
{return or__3824__auto____11491;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____11496 = d;
if(and__3822__auto____11496)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____11496;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__6763__auto____11497 = (((d == null))?null:d);
return (function (){var or__3824__auto____11498 = (cljs.core._realized_QMARK_[goog.typeOf(x__6763__auto____11497)]);
if(or__3824__auto____11498)
{return or__3824__auto____11498;
} else
{var or__3824__auto____11499 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____11499)
{return or__3824__auto____11499;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____11504 = this$;
if(and__3822__auto____11504)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____11504;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__6763__auto____11505 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11506 = (cljs.core._notify_watches[goog.typeOf(x__6763__auto____11505)]);
if(or__3824__auto____11506)
{return or__3824__auto____11506;
} else
{var or__3824__auto____11507 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____11507)
{return or__3824__auto____11507;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____11512 = this$;
if(and__3822__auto____11512)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____11512;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__6763__auto____11513 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11514 = (cljs.core._add_watch[goog.typeOf(x__6763__auto____11513)]);
if(or__3824__auto____11514)
{return or__3824__auto____11514;
} else
{var or__3824__auto____11515 = (cljs.core._add_watch["_"]);
if(or__3824__auto____11515)
{return or__3824__auto____11515;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____11520 = this$;
if(and__3822__auto____11520)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____11520;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__6763__auto____11521 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11522 = (cljs.core._remove_watch[goog.typeOf(x__6763__auto____11521)]);
if(or__3824__auto____11522)
{return or__3824__auto____11522;
} else
{var or__3824__auto____11523 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____11523)
{return or__3824__auto____11523;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____11528 = coll;
if(and__3822__auto____11528)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____11528;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__6763__auto____11529 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11530 = (cljs.core._as_transient[goog.typeOf(x__6763__auto____11529)]);
if(or__3824__auto____11530)
{return or__3824__auto____11530;
} else
{var or__3824__auto____11531 = (cljs.core._as_transient["_"]);
if(or__3824__auto____11531)
{return or__3824__auto____11531;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____11536 = tcoll;
if(and__3822__auto____11536)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____11536;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__6763__auto____11537 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11538 = (cljs.core._conj_BANG_[goog.typeOf(x__6763__auto____11537)]);
if(or__3824__auto____11538)
{return or__3824__auto____11538;
} else
{var or__3824__auto____11539 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____11539)
{return or__3824__auto____11539;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____11544 = tcoll;
if(and__3822__auto____11544)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____11544;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__6763__auto____11545 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11546 = (cljs.core._persistent_BANG_[goog.typeOf(x__6763__auto____11545)]);
if(or__3824__auto____11546)
{return or__3824__auto____11546;
} else
{var or__3824__auto____11547 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____11547)
{return or__3824__auto____11547;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____11552 = tcoll;
if(and__3822__auto____11552)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____11552;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__6763__auto____11553 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11554 = (cljs.core._assoc_BANG_[goog.typeOf(x__6763__auto____11553)]);
if(or__3824__auto____11554)
{return or__3824__auto____11554;
} else
{var or__3824__auto____11555 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____11555)
{return or__3824__auto____11555;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____11560 = tcoll;
if(and__3822__auto____11560)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____11560;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__6763__auto____11561 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11562 = (cljs.core._dissoc_BANG_[goog.typeOf(x__6763__auto____11561)]);
if(or__3824__auto____11562)
{return or__3824__auto____11562;
} else
{var or__3824__auto____11563 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____11563)
{return or__3824__auto____11563;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____11568 = tcoll;
if(and__3822__auto____11568)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____11568;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__6763__auto____11569 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11570 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__6763__auto____11569)]);
if(or__3824__auto____11570)
{return or__3824__auto____11570;
} else
{var or__3824__auto____11571 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____11571)
{return or__3824__auto____11571;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____11576 = tcoll;
if(and__3822__auto____11576)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____11576;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__6763__auto____11577 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11578 = (cljs.core._pop_BANG_[goog.typeOf(x__6763__auto____11577)]);
if(or__3824__auto____11578)
{return or__3824__auto____11578;
} else
{var or__3824__auto____11579 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____11579)
{return or__3824__auto____11579;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____11584 = tcoll;
if(and__3822__auto____11584)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____11584;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__6763__auto____11585 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____11586 = (cljs.core._disjoin_BANG_[goog.typeOf(x__6763__auto____11585)]);
if(or__3824__auto____11586)
{return or__3824__auto____11586;
} else
{var or__3824__auto____11587 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____11587)
{return or__3824__auto____11587;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____11592 = x;
if(and__3822__auto____11592)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____11592;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__6763__auto____11593 = (((x == null))?null:x);
return (function (){var or__3824__auto____11594 = (cljs.core._compare[goog.typeOf(x__6763__auto____11593)]);
if(or__3824__auto____11594)
{return or__3824__auto____11594;
} else
{var or__3824__auto____11595 = (cljs.core._compare["_"]);
if(or__3824__auto____11595)
{return or__3824__auto____11595;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____11600 = coll;
if(and__3822__auto____11600)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____11600;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__6763__auto____11601 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11602 = (cljs.core._drop_first[goog.typeOf(x__6763__auto____11601)]);
if(or__3824__auto____11602)
{return or__3824__auto____11602;
} else
{var or__3824__auto____11603 = (cljs.core._drop_first["_"]);
if(or__3824__auto____11603)
{return or__3824__auto____11603;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____11608 = coll;
if(and__3822__auto____11608)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____11608;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__6763__auto____11609 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11610 = (cljs.core._chunked_first[goog.typeOf(x__6763__auto____11609)]);
if(or__3824__auto____11610)
{return or__3824__auto____11610;
} else
{var or__3824__auto____11611 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____11611)
{return or__3824__auto____11611;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____11616 = coll;
if(and__3822__auto____11616)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____11616;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__6763__auto____11617 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11618 = (cljs.core._chunked_rest[goog.typeOf(x__6763__auto____11617)]);
if(or__3824__auto____11618)
{return or__3824__auto____11618;
} else
{var or__3824__auto____11619 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____11619)
{return or__3824__auto____11619;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____11624 = coll;
if(and__3822__auto____11624)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____11624;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__6763__auto____11625 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____11626 = (cljs.core._chunked_next[goog.typeOf(x__6763__auto____11625)]);
if(or__3824__auto____11626)
{return or__3824__auto____11626;
} else
{var or__3824__auto____11627 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____11627)
{return or__3824__auto____11627;
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
{if((function (){var G__11631__11632 = coll;
if(G__11631__11632)
{if((function (){var or__3824__auto____11633 = (G__11631__11632.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____11633)
{return or__3824__auto____11633;
} else
{return G__11631__11632.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__11631__11632.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11631__11632);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11631__11632);
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
{if((function (){var G__11638__11639 = coll;
if(G__11638__11639)
{if((function (){var or__3824__auto____11640 = (G__11638__11639.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11640)
{return or__3824__auto____11640;
} else
{return G__11638__11639.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11638__11639.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11638__11639);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11638__11639);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__11641 = cljs.core.seq.call(null,coll);
if((s__11641 == null))
{return null;
} else
{return cljs.core._first.call(null,s__11641);
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
{if((function (){var G__11646__11647 = coll;
if(G__11646__11647)
{if((function (){var or__3824__auto____11648 = (G__11646__11647.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11648)
{return or__3824__auto____11648;
} else
{return G__11646__11647.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11646__11647.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11646__11647);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11646__11647);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__11649 = cljs.core.seq.call(null,coll);
if(!((s__11649 == null)))
{return cljs.core._rest.call(null,s__11649);
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
{if((function (){var G__11653__11654 = coll;
if(G__11653__11654)
{if((function (){var or__3824__auto____11655 = (G__11653__11654.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____11655)
{return or__3824__auto____11655;
} else
{return G__11653__11654.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__11653__11654.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__11653__11654);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__11653__11654);
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
var or__3824__auto____11657 = (x === y);
if(or__3824__auto____11657)
{return or__3824__auto____11657;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__11658__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__11659 = y;
var G__11660 = cljs.core.first.call(null,more);
var G__11661 = cljs.core.next.call(null,more);
x = G__11659;
y = G__11660;
more = G__11661;
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
var G__11658 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11658__delegate.call(this, x, y, more);
};
G__11658.cljs$lang$maxFixedArity = 2;
G__11658.cljs$lang$applyTo = (function (arglist__11662){
var x = cljs.core.first(arglist__11662);
var y = cljs.core.first(cljs.core.next(arglist__11662));
var more = cljs.core.rest(cljs.core.next(arglist__11662));
return G__11658__delegate(x, y, more);
});
G__11658.cljs$lang$arity$variadic = G__11658__delegate;
return G__11658;
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
var G__11663 = null;
var G__11663__2 = (function (o,k){
return null;
});
var G__11663__3 = (function (o,k,not_found){
return not_found;
});
G__11663 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__11663__2.call(this,o,k);
case 3:
return G__11663__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11663;
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
var G__11664 = null;
var G__11664__2 = (function (_,f){
return f.call(null);
});
var G__11664__3 = (function (_,f,start){
return start;
});
G__11664 = function(_,f,start){
switch(arguments.length){
case 2:
return G__11664__2.call(this,_,f);
case 3:
return G__11664__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11664;
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
var G__11665 = null;
var G__11665__2 = (function (_,n){
return null;
});
var G__11665__3 = (function (_,n,not_found){
return not_found;
});
G__11665 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__11665__2.call(this,_,n);
case 3:
return G__11665__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11665;
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
var and__3822__auto____11666 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____11666)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____11666;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__11667 = this;
return this__11667.val;
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
var cnt__11680 = cljs.core._count.call(null,cicoll);
if((cnt__11680 === 0))
{return f.call(null);
} else
{var val__11681 = cljs.core._nth.call(null,cicoll,0);
var n__11682 = 1;
while(true){
if((n__11682 < cnt__11680))
{var nval__11683 = f.call(null,val__11681,cljs.core._nth.call(null,cicoll,n__11682));
if(cljs.core.reduced_QMARK_.call(null,nval__11683))
{return cljs.core.deref.call(null,nval__11683);
} else
{{
var G__11692 = nval__11683;
var G__11693 = (n__11682 + 1);
val__11681 = G__11692;
n__11682 = G__11693;
continue;
}
}
} else
{return val__11681;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__11684 = cljs.core._count.call(null,cicoll);
var val__11685 = val;
var n__11686 = 0;
while(true){
if((n__11686 < cnt__11684))
{var nval__11687 = f.call(null,val__11685,cljs.core._nth.call(null,cicoll,n__11686));
if(cljs.core.reduced_QMARK_.call(null,nval__11687))
{return cljs.core.deref.call(null,nval__11687);
} else
{{
var G__11694 = nval__11687;
var G__11695 = (n__11686 + 1);
val__11685 = G__11694;
n__11686 = G__11695;
continue;
}
}
} else
{return val__11685;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__11688 = cljs.core._count.call(null,cicoll);
var val__11689 = val;
var n__11690 = idx;
while(true){
if((n__11690 < cnt__11688))
{var nval__11691 = f.call(null,val__11689,cljs.core._nth.call(null,cicoll,n__11690));
if(cljs.core.reduced_QMARK_.call(null,nval__11691))
{return cljs.core.deref.call(null,nval__11691);
} else
{{
var G__11696 = nval__11691;
var G__11697 = (n__11690 + 1);
val__11689 = G__11696;
n__11690 = G__11697;
continue;
}
}
} else
{return val__11689;
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
var cnt__11710 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__11711 = (arr[0]);
var n__11712 = 1;
while(true){
if((n__11712 < cnt__11710))
{var nval__11713 = f.call(null,val__11711,(arr[n__11712]));
if(cljs.core.reduced_QMARK_.call(null,nval__11713))
{return cljs.core.deref.call(null,nval__11713);
} else
{{
var G__11722 = nval__11713;
var G__11723 = (n__11712 + 1);
val__11711 = G__11722;
n__11712 = G__11723;
continue;
}
}
} else
{return val__11711;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__11714 = arr.length;
var val__11715 = val;
var n__11716 = 0;
while(true){
if((n__11716 < cnt__11714))
{var nval__11717 = f.call(null,val__11715,(arr[n__11716]));
if(cljs.core.reduced_QMARK_.call(null,nval__11717))
{return cljs.core.deref.call(null,nval__11717);
} else
{{
var G__11724 = nval__11717;
var G__11725 = (n__11716 + 1);
val__11715 = G__11724;
n__11716 = G__11725;
continue;
}
}
} else
{return val__11715;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__11718 = arr.length;
var val__11719 = val;
var n__11720 = idx;
while(true){
if((n__11720 < cnt__11718))
{var nval__11721 = f.call(null,val__11719,(arr[n__11720]));
if(cljs.core.reduced_QMARK_.call(null,nval__11721))
{return cljs.core.deref.call(null,nval__11721);
} else
{{
var G__11726 = nval__11721;
var G__11727 = (n__11720 + 1);
val__11719 = G__11726;
n__11720 = G__11727;
continue;
}
}
} else
{return val__11719;
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
var G__11731__11732 = x;
if(G__11731__11732)
{if((function (){var or__3824__auto____11733 = (G__11731__11732.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____11733)
{return or__3824__auto____11733;
} else
{return G__11731__11732.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__11731__11732.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11731__11732);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11731__11732);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__11737__11738 = x;
if(G__11737__11738)
{if((function (){var or__3824__auto____11739 = (G__11737__11738.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11739)
{return or__3824__auto____11739;
} else
{return G__11737__11738.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11737__11738.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11737__11738);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11737__11738);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11740 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__11741 = this;
if(((this__11741.i + 1) < this__11741.a.length))
{return (new cljs.core.IndexedSeq(this__11741.a,(this__11741.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11742 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11743 = this;
var c__11744 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__11744 > 0))
{return (new cljs.core.RSeq(coll,(c__11744 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__11745 = this;
var this__11746 = this;
return cljs.core.pr_str.call(null,this__11746);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11747 = this;
if(cljs.core.counted_QMARK_.call(null,this__11747.a))
{return cljs.core.ci_reduce.call(null,this__11747.a,f,(this__11747.a[this__11747.i]),(this__11747.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__11747.a[this__11747.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11748 = this;
if(cljs.core.counted_QMARK_.call(null,this__11748.a))
{return cljs.core.ci_reduce.call(null,this__11748.a,f,start,this__11748.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11749 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11750 = this;
return (this__11750.a.length - this__11750.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__11751 = this;
return (this__11751.a[this__11751.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__11752 = this;
if(((this__11752.i + 1) < this__11752.a.length))
{return (new cljs.core.IndexedSeq(this__11752.a,(this__11752.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11753 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11754 = this;
var i__11755 = (n + this__11754.i);
if((i__11755 < this__11754.a.length))
{return (this__11754.a[i__11755]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11756 = this;
var i__11757 = (n + this__11756.i);
if((i__11757 < this__11756.a.length))
{return (this__11756.a[i__11757]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11758 = this;
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
var G__11759 = null;
var G__11759__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__11759__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__11759 = function(array,f,start){
switch(arguments.length){
case 2:
return G__11759__2.call(this,array,f);
case 3:
return G__11759__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11759;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11760 = null;
var G__11760__2 = (function (array,k){
return (array[k]);
});
var G__11760__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__11760 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__11760__2.call(this,array,k);
case 3:
return G__11760__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11760;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11761 = null;
var G__11761__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__11761__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__11761 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__11761__2.call(this,array,n);
case 3:
return G__11761__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11761;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11762 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11763 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__11764 = this;
var this__11765 = this;
return cljs.core.pr_str.call(null,this__11765);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11766 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11767 = this;
return (this__11767.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11768 = this;
return cljs.core._nth.call(null,this__11768.ci,this__11768.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11769 = this;
if((this__11769.i > 0))
{return (new cljs.core.RSeq(this__11769.ci,(this__11769.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11770 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__11771 = this;
return (new cljs.core.RSeq(this__11771.ci,this__11771.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11772 = this;
return this__11772.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11773 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11773.meta);
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
var sn__11775 = cljs.core.next.call(null,s);
if(!((sn__11775 == null)))
{{
var G__11776 = sn__11775;
s = G__11776;
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
var G__11777__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11778 = conj.call(null,coll,x);
var G__11779 = cljs.core.first.call(null,xs);
var G__11780 = cljs.core.next.call(null,xs);
coll = G__11778;
x = G__11779;
xs = G__11780;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11777 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11777__delegate.call(this, coll, x, xs);
};
G__11777.cljs$lang$maxFixedArity = 2;
G__11777.cljs$lang$applyTo = (function (arglist__11781){
var coll = cljs.core.first(arglist__11781);
var x = cljs.core.first(cljs.core.next(arglist__11781));
var xs = cljs.core.rest(cljs.core.next(arglist__11781));
return G__11777__delegate(coll, x, xs);
});
G__11777.cljs$lang$arity$variadic = G__11777__delegate;
return G__11777;
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
var s__11784 = cljs.core.seq.call(null,coll);
var acc__11785 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__11784))
{return (acc__11785 + cljs.core._count.call(null,s__11784));
} else
{{
var G__11786 = cljs.core.next.call(null,s__11784);
var G__11787 = (acc__11785 + 1);
s__11784 = G__11786;
acc__11785 = G__11787;
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
var G__11788 = cljs.core.next.call(null,coll);
var G__11789 = (n - 1);
coll = G__11788;
n = G__11789;
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
var G__11790 = cljs.core.next.call(null,coll);
var G__11791 = (n - 1);
var G__11792 = not_found;
coll = G__11790;
n = G__11791;
not_found = G__11792;
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
{if((function (){var G__11799__11800 = coll;
if(G__11799__11800)
{if((function (){var or__3824__auto____11801 = (G__11799__11800.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11801)
{return or__3824__auto____11801;
} else
{return G__11799__11800.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11799__11800.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11799__11800);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11799__11800);
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
{if((function (){var G__11802__11803 = coll;
if(G__11802__11803)
{if((function (){var or__3824__auto____11804 = (G__11802__11803.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11804)
{return or__3824__auto____11804;
} else
{return G__11802__11803.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11802__11803.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11802__11803);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11802__11803);
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
var G__11807__delegate = function (coll,k,v,kvs){
while(true){
var ret__11806 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__11808 = ret__11806;
var G__11809 = cljs.core.first.call(null,kvs);
var G__11810 = cljs.core.second.call(null,kvs);
var G__11811 = cljs.core.nnext.call(null,kvs);
coll = G__11808;
k = G__11809;
v = G__11810;
kvs = G__11811;
continue;
}
} else
{return ret__11806;
}
break;
}
};
var G__11807 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11807__delegate.call(this, coll, k, v, kvs);
};
G__11807.cljs$lang$maxFixedArity = 3;
G__11807.cljs$lang$applyTo = (function (arglist__11812){
var coll = cljs.core.first(arglist__11812);
var k = cljs.core.first(cljs.core.next(arglist__11812));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11812)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11812)));
return G__11807__delegate(coll, k, v, kvs);
});
G__11807.cljs$lang$arity$variadic = G__11807__delegate;
return G__11807;
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
var G__11815__delegate = function (coll,k,ks){
while(true){
var ret__11814 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11816 = ret__11814;
var G__11817 = cljs.core.first.call(null,ks);
var G__11818 = cljs.core.next.call(null,ks);
coll = G__11816;
k = G__11817;
ks = G__11818;
continue;
}
} else
{return ret__11814;
}
break;
}
};
var G__11815 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11815__delegate.call(this, coll, k, ks);
};
G__11815.cljs$lang$maxFixedArity = 2;
G__11815.cljs$lang$applyTo = (function (arglist__11819){
var coll = cljs.core.first(arglist__11819);
var k = cljs.core.first(cljs.core.next(arglist__11819));
var ks = cljs.core.rest(cljs.core.next(arglist__11819));
return G__11815__delegate(coll, k, ks);
});
G__11815.cljs$lang$arity$variadic = G__11815__delegate;
return G__11815;
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
if((function (){var G__11823__11824 = o;
if(G__11823__11824)
{if((function (){var or__3824__auto____11825 = (G__11823__11824.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11825)
{return or__3824__auto____11825;
} else
{return G__11823__11824.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11823__11824.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11823__11824);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11823__11824);
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
var G__11828__delegate = function (coll,k,ks){
while(true){
var ret__11827 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11829 = ret__11827;
var G__11830 = cljs.core.first.call(null,ks);
var G__11831 = cljs.core.next.call(null,ks);
coll = G__11829;
k = G__11830;
ks = G__11831;
continue;
}
} else
{return ret__11827;
}
break;
}
};
var G__11828 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11828__delegate.call(this, coll, k, ks);
};
G__11828.cljs$lang$maxFixedArity = 2;
G__11828.cljs$lang$applyTo = (function (arglist__11832){
var coll = cljs.core.first(arglist__11832);
var k = cljs.core.first(cljs.core.next(arglist__11832));
var ks = cljs.core.rest(cljs.core.next(arglist__11832));
return G__11828__delegate(coll, k, ks);
});
G__11828.cljs$lang$arity$variadic = G__11828__delegate;
return G__11828;
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
var h__11834 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__11834);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__11834;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__11836 = (cljs.core.string_hash_cache[k]);
if(!((h__11836 == null)))
{return h__11836;
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
if((function (){var and__3822__auto____11838 = goog.isString(o);
if(and__3822__auto____11838)
{return check_cache;
} else
{return and__3822__auto____11838;
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
{var G__11842__11843 = x;
if(G__11842__11843)
{if((function (){var or__3824__auto____11844 = (G__11842__11843.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____11844)
{return or__3824__auto____11844;
} else
{return G__11842__11843.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__11842__11843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11842__11843);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11842__11843);
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
{var G__11848__11849 = x;
if(G__11848__11849)
{if((function (){var or__3824__auto____11850 = (G__11848__11849.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____11850)
{return or__3824__auto____11850;
} else
{return G__11848__11849.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__11848__11849.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11848__11849);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11848__11849);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__11854__11855 = x;
if(G__11854__11855)
{if((function (){var or__3824__auto____11856 = (G__11854__11855.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____11856)
{return or__3824__auto____11856;
} else
{return G__11854__11855.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__11854__11855.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11854__11855);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11854__11855);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__11860__11861 = x;
if(G__11860__11861)
{if((function (){var or__3824__auto____11862 = (G__11860__11861.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____11862)
{return or__3824__auto____11862;
} else
{return G__11860__11861.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__11860__11861.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11860__11861);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11860__11861);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11866__11867 = x;
if(G__11866__11867)
{if((function (){var or__3824__auto____11868 = (G__11866__11867.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____11868)
{return or__3824__auto____11868;
} else
{return G__11866__11867.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11866__11867.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11866__11867);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11866__11867);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11872__11873 = x;
if(G__11872__11873)
{if((function (){var or__3824__auto____11874 = (G__11872__11873.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____11874)
{return or__3824__auto____11874;
} else
{return G__11872__11873.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__11872__11873.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11872__11873);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11872__11873);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__11878__11879 = x;
if(G__11878__11879)
{if((function (){var or__3824__auto____11880 = (G__11878__11879.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____11880)
{return or__3824__auto____11880;
} else
{return G__11878__11879.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__11878__11879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11878__11879);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11878__11879);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__11884__11885 = x;
if(G__11884__11885)
{if((function (){var or__3824__auto____11886 = (G__11884__11885.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____11886)
{return or__3824__auto____11886;
} else
{return G__11884__11885.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__11884__11885.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11884__11885);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__11884__11885);
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
var G__11887__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__11887 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11887__delegate.call(this, keyvals);
};
G__11887.cljs$lang$maxFixedArity = 0;
G__11887.cljs$lang$applyTo = (function (arglist__11888){
var keyvals = cljs.core.seq(arglist__11888);;
return G__11887__delegate(keyvals);
});
G__11887.cljs$lang$arity$variadic = G__11887__delegate;
return G__11887;
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
var keys__11890 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__11890.push(key);
}));
return keys__11890;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__11894 = i;
var j__11895 = j;
var len__11896 = len;
while(true){
if((len__11896 === 0))
{return to;
} else
{(to[j__11895] = (from[i__11894]));
{
var G__11897 = (i__11894 + 1);
var G__11898 = (j__11895 + 1);
var G__11899 = (len__11896 - 1);
i__11894 = G__11897;
j__11895 = G__11898;
len__11896 = G__11899;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__11903 = (i + (len - 1));
var j__11904 = (j + (len - 1));
var len__11905 = len;
while(true){
if((len__11905 === 0))
{return to;
} else
{(to[j__11904] = (from[i__11903]));
{
var G__11906 = (i__11903 - 1);
var G__11907 = (j__11904 - 1);
var G__11908 = (len__11905 - 1);
i__11903 = G__11906;
j__11904 = G__11907;
len__11905 = G__11908;
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
{var G__11912__11913 = s;
if(G__11912__11913)
{if((function (){var or__3824__auto____11914 = (G__11912__11913.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11914)
{return or__3824__auto____11914;
} else
{return G__11912__11913.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11912__11913.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11912__11913);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11912__11913);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11918__11919 = s;
if(G__11918__11919)
{if((function (){var or__3824__auto____11920 = (G__11918__11919.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11920)
{return or__3824__auto____11920;
} else
{return G__11918__11919.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11918__11919.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11918__11919);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11918__11919);
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
var and__3822__auto____11923 = goog.isString(x);
if(and__3822__auto____11923)
{return !((function (){var or__3824__auto____11924 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____11924)
{return or__3824__auto____11924;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____11923;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____11926 = goog.isString(x);
if(and__3822__auto____11926)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____11926;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____11928 = goog.isString(x);
if(and__3822__auto____11928)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____11928;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____11933 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____11933)
{return or__3824__auto____11933;
} else
{var G__11934__11935 = f;
if(G__11934__11935)
{if((function (){var or__3824__auto____11936 = (G__11934__11935.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____11936)
{return or__3824__auto____11936;
} else
{return G__11934__11935.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__11934__11935.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11934__11935);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11934__11935);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____11940 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____11940)
{var and__3822__auto____11941 = !(isNaN(n));
if(and__3822__auto____11941)
{var and__3822__auto____11942 = !((n === Infinity));
if(and__3822__auto____11942)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____11942;
}
} else
{return and__3822__auto____11941;
}
} else
{return and__3822__auto____11940;
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
if((function (){var and__3822__auto____11945 = !((coll == null));
if(and__3822__auto____11945)
{var and__3822__auto____11946 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____11946)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____11946;
}
} else
{return and__3822__auto____11945;
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
var G__11955__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__11951 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__11952 = more;
while(true){
var x__11953 = cljs.core.first.call(null,xs__11952);
var etc__11954 = cljs.core.next.call(null,xs__11952);
if(cljs.core.truth_(xs__11952))
{if(cljs.core.contains_QMARK_.call(null,s__11951,x__11953))
{return false;
} else
{{
var G__11956 = cljs.core.conj.call(null,s__11951,x__11953);
var G__11957 = etc__11954;
s__11951 = G__11956;
xs__11952 = G__11957;
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
var G__11955 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11955__delegate.call(this, x, y, more);
};
G__11955.cljs$lang$maxFixedArity = 2;
G__11955.cljs$lang$applyTo = (function (arglist__11958){
var x = cljs.core.first(arglist__11958);
var y = cljs.core.first(cljs.core.next(arglist__11958));
var more = cljs.core.rest(cljs.core.next(arglist__11958));
return G__11955__delegate(x, y, more);
});
G__11955.cljs$lang$arity$variadic = G__11955__delegate;
return G__11955;
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
{if((function (){var G__11962__11963 = x;
if(G__11962__11963)
{if((function (){var or__3824__auto____11964 = (G__11962__11963.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____11964)
{return or__3824__auto____11964;
} else
{return G__11962__11963.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__11962__11963.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11962__11963);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__11962__11963);
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
var xl__11969 = cljs.core.count.call(null,xs);
var yl__11970 = cljs.core.count.call(null,ys);
if((xl__11969 < yl__11970))
{return -1;
} else
{if((xl__11969 > yl__11970))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__11969,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__11971 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____11972 = (d__11971 === 0);
if(and__3822__auto____11972)
{return ((n + 1) < len);
} else
{return and__3822__auto____11972;
}
})())
{{
var G__11973 = xs;
var G__11974 = ys;
var G__11975 = len;
var G__11976 = (n + 1);
xs = G__11973;
ys = G__11974;
len = G__11975;
n = G__11976;
continue;
}
} else
{return d__11971;
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
var r__11978 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__11978))
{return r__11978;
} else
{if(cljs.core.truth_(r__11978))
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
{var a__11980 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__11980,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11980);
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
var temp__3971__auto____11986 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____11986)
{var s__11987 = temp__3971__auto____11986;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11987),cljs.core.next.call(null,s__11987));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__11988 = val;
var coll__11989 = cljs.core.seq.call(null,coll);
while(true){
if(coll__11989)
{var nval__11990 = f.call(null,val__11988,cljs.core.first.call(null,coll__11989));
if(cljs.core.reduced_QMARK_.call(null,nval__11990))
{return cljs.core.deref.call(null,nval__11990);
} else
{{
var G__11991 = nval__11990;
var G__11992 = cljs.core.next.call(null,coll__11989);
val__11988 = G__11991;
coll__11989 = G__11992;
continue;
}
}
} else
{return val__11988;
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
var a__11994 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__11994);
return cljs.core.vec.call(null,a__11994);
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
if((function (){var G__12001__12002 = coll;
if(G__12001__12002)
{if((function (){var or__3824__auto____12003 = (G__12001__12002.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____12003)
{return or__3824__auto____12003;
} else
{return G__12001__12002.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__12001__12002.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12001__12002);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12001__12002);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__12004__12005 = coll;
if(G__12004__12005)
{if((function (){var or__3824__auto____12006 = (G__12004__12005.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____12006)
{return or__3824__auto____12006;
} else
{return G__12004__12005.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__12004__12005.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12004__12005);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12004__12005);
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
var G__12007__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__12007 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12007__delegate.call(this, x, y, more);
};
G__12007.cljs$lang$maxFixedArity = 2;
G__12007.cljs$lang$applyTo = (function (arglist__12008){
var x = cljs.core.first(arglist__12008);
var y = cljs.core.first(cljs.core.next(arglist__12008));
var more = cljs.core.rest(cljs.core.next(arglist__12008));
return G__12007__delegate(x, y, more);
});
G__12007.cljs$lang$arity$variadic = G__12007__delegate;
return G__12007;
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
var G__12009__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__12009 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12009__delegate.call(this, x, y, more);
};
G__12009.cljs$lang$maxFixedArity = 2;
G__12009.cljs$lang$applyTo = (function (arglist__12010){
var x = cljs.core.first(arglist__12010);
var y = cljs.core.first(cljs.core.next(arglist__12010));
var more = cljs.core.rest(cljs.core.next(arglist__12010));
return G__12009__delegate(x, y, more);
});
G__12009.cljs$lang$arity$variadic = G__12009__delegate;
return G__12009;
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
var G__12011__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__12011 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12011__delegate.call(this, x, y, more);
};
G__12011.cljs$lang$maxFixedArity = 2;
G__12011.cljs$lang$applyTo = (function (arglist__12012){
var x = cljs.core.first(arglist__12012);
var y = cljs.core.first(cljs.core.next(arglist__12012));
var more = cljs.core.rest(cljs.core.next(arglist__12012));
return G__12011__delegate(x, y, more);
});
G__12011.cljs$lang$arity$variadic = G__12011__delegate;
return G__12011;
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
var G__12013__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__12013 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12013__delegate.call(this, x, y, more);
};
G__12013.cljs$lang$maxFixedArity = 2;
G__12013.cljs$lang$applyTo = (function (arglist__12014){
var x = cljs.core.first(arglist__12014);
var y = cljs.core.first(cljs.core.next(arglist__12014));
var more = cljs.core.rest(cljs.core.next(arglist__12014));
return G__12013__delegate(x, y, more);
});
G__12013.cljs$lang$arity$variadic = G__12013__delegate;
return G__12013;
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
var G__12015__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__12016 = y;
var G__12017 = cljs.core.first.call(null,more);
var G__12018 = cljs.core.next.call(null,more);
x = G__12016;
y = G__12017;
more = G__12018;
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
var G__12015 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12015__delegate.call(this, x, y, more);
};
G__12015.cljs$lang$maxFixedArity = 2;
G__12015.cljs$lang$applyTo = (function (arglist__12019){
var x = cljs.core.first(arglist__12019);
var y = cljs.core.first(cljs.core.next(arglist__12019));
var more = cljs.core.rest(cljs.core.next(arglist__12019));
return G__12015__delegate(x, y, more);
});
G__12015.cljs$lang$arity$variadic = G__12015__delegate;
return G__12015;
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
var G__12020__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__12021 = y;
var G__12022 = cljs.core.first.call(null,more);
var G__12023 = cljs.core.next.call(null,more);
x = G__12021;
y = G__12022;
more = G__12023;
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
var G__12020 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12020__delegate.call(this, x, y, more);
};
G__12020.cljs$lang$maxFixedArity = 2;
G__12020.cljs$lang$applyTo = (function (arglist__12024){
var x = cljs.core.first(arglist__12024);
var y = cljs.core.first(cljs.core.next(arglist__12024));
var more = cljs.core.rest(cljs.core.next(arglist__12024));
return G__12020__delegate(x, y, more);
});
G__12020.cljs$lang$arity$variadic = G__12020__delegate;
return G__12020;
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
var G__12025__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__12026 = y;
var G__12027 = cljs.core.first.call(null,more);
var G__12028 = cljs.core.next.call(null,more);
x = G__12026;
y = G__12027;
more = G__12028;
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
var G__12025 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12025__delegate.call(this, x, y, more);
};
G__12025.cljs$lang$maxFixedArity = 2;
G__12025.cljs$lang$applyTo = (function (arglist__12029){
var x = cljs.core.first(arglist__12029);
var y = cljs.core.first(cljs.core.next(arglist__12029));
var more = cljs.core.rest(cljs.core.next(arglist__12029));
return G__12025__delegate(x, y, more);
});
G__12025.cljs$lang$arity$variadic = G__12025__delegate;
return G__12025;
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
var G__12030__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__12031 = y;
var G__12032 = cljs.core.first.call(null,more);
var G__12033 = cljs.core.next.call(null,more);
x = G__12031;
y = G__12032;
more = G__12033;
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
var G__12030 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12030__delegate.call(this, x, y, more);
};
G__12030.cljs$lang$maxFixedArity = 2;
G__12030.cljs$lang$applyTo = (function (arglist__12034){
var x = cljs.core.first(arglist__12034);
var y = cljs.core.first(cljs.core.next(arglist__12034));
var more = cljs.core.rest(cljs.core.next(arglist__12034));
return G__12030__delegate(x, y, more);
});
G__12030.cljs$lang$arity$variadic = G__12030__delegate;
return G__12030;
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
var G__12035__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__12035 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12035__delegate.call(this, x, y, more);
};
G__12035.cljs$lang$maxFixedArity = 2;
G__12035.cljs$lang$applyTo = (function (arglist__12036){
var x = cljs.core.first(arglist__12036);
var y = cljs.core.first(cljs.core.next(arglist__12036));
var more = cljs.core.rest(cljs.core.next(arglist__12036));
return G__12035__delegate(x, y, more);
});
G__12035.cljs$lang$arity$variadic = G__12035__delegate;
return G__12035;
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
var G__12037__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__12037 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12037__delegate.call(this, x, y, more);
};
G__12037.cljs$lang$maxFixedArity = 2;
G__12037.cljs$lang$applyTo = (function (arglist__12038){
var x = cljs.core.first(arglist__12038);
var y = cljs.core.first(cljs.core.next(arglist__12038));
var more = cljs.core.rest(cljs.core.next(arglist__12038));
return G__12037__delegate(x, y, more);
});
G__12037.cljs$lang$arity$variadic = G__12037__delegate;
return G__12037;
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
var rem__12040 = (n % d);
return cljs.core.fix.call(null,((n - rem__12040) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__12042 = cljs.core.quot.call(null,n,d);
return (n - (d * q__12042));
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
var v__12045 = (v - ((v >> 1) & 1431655765));
var v__12046 = ((v__12045 & 858993459) + ((v__12045 >> 2) & 858993459));
return ((((v__12046 + (v__12046 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__12047__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__12048 = y;
var G__12049 = cljs.core.first.call(null,more);
var G__12050 = cljs.core.next.call(null,more);
x = G__12048;
y = G__12049;
more = G__12050;
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
var G__12047 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12047__delegate.call(this, x, y, more);
};
G__12047.cljs$lang$maxFixedArity = 2;
G__12047.cljs$lang$applyTo = (function (arglist__12051){
var x = cljs.core.first(arglist__12051);
var y = cljs.core.first(cljs.core.next(arglist__12051));
var more = cljs.core.rest(cljs.core.next(arglist__12051));
return G__12047__delegate(x, y, more);
});
G__12047.cljs$lang$arity$variadic = G__12047__delegate;
return G__12047;
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
var n__12055 = n;
var xs__12056 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12057 = xs__12056;
if(and__3822__auto____12057)
{return (n__12055 > 0);
} else
{return and__3822__auto____12057;
}
})()))
{{
var G__12058 = (n__12055 - 1);
var G__12059 = cljs.core.next.call(null,xs__12056);
n__12055 = G__12058;
xs__12056 = G__12059;
continue;
}
} else
{return xs__12056;
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
var G__12060__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12061 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__12062 = cljs.core.next.call(null,more);
sb = G__12061;
more = G__12062;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__12060 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12060__delegate.call(this, x, ys);
};
G__12060.cljs$lang$maxFixedArity = 1;
G__12060.cljs$lang$applyTo = (function (arglist__12063){
var x = cljs.core.first(arglist__12063);
var ys = cljs.core.rest(arglist__12063);
return G__12060__delegate(x, ys);
});
G__12060.cljs$lang$arity$variadic = G__12060__delegate;
return G__12060;
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
var G__12064__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12065 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__12066 = cljs.core.next.call(null,more);
sb = G__12065;
more = G__12066;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__12064 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12064__delegate.call(this, x, ys);
};
G__12064.cljs$lang$maxFixedArity = 1;
G__12064.cljs$lang$applyTo = (function (arglist__12067){
var x = cljs.core.first(arglist__12067);
var ys = cljs.core.rest(arglist__12067);
return G__12064__delegate(x, ys);
});
G__12064.cljs$lang$arity$variadic = G__12064__delegate;
return G__12064;
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
var args__12071 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____12070 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12070)
{return or__3824__auto____12070;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__12071);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__12072){
var fmt = cljs.core.first(arglist__12072);
var args = cljs.core.rest(arglist__12072);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__12075 = cljs.core.seq.call(null,x);
var ys__12076 = cljs.core.seq.call(null,y);
while(true){
if((xs__12075 == null))
{return (ys__12076 == null);
} else
{if((ys__12076 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__12075),cljs.core.first.call(null,ys__12076)))
{{
var G__12077 = cljs.core.next.call(null,xs__12075);
var G__12078 = cljs.core.next.call(null,ys__12076);
xs__12075 = G__12077;
ys__12076 = G__12078;
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
return cljs.core.reduce.call(null,(function (p1__12079_SHARP_,p2__12080_SHARP_){
return cljs.core.hash_combine.call(null,p1__12079_SHARP_,cljs.core.hash.call(null,p2__12080_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__12084 = 0;
var s__12085 = cljs.core.seq.call(null,m);
while(true){
if(s__12085)
{var e__12086 = cljs.core.first.call(null,s__12085);
{
var G__12087 = ((h__12084 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__12086)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__12086)))) % 4503599627370496);
var G__12088 = cljs.core.next.call(null,s__12085);
h__12084 = G__12087;
s__12085 = G__12088;
continue;
}
} else
{return h__12084;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__12092 = 0;
var s__12093 = cljs.core.seq.call(null,s);
while(true){
if(s__12093)
{var e__12094 = cljs.core.first.call(null,s__12093);
{
var G__12095 = ((h__12092 + cljs.core.hash.call(null,e__12094)) % 4503599627370496);
var G__12096 = cljs.core.next.call(null,s__12093);
h__12092 = G__12095;
s__12093 = G__12096;
continue;
}
} else
{return h__12092;
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
var G__12104__12105 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__12104__12105)
{var vec__12106__12107 = cljs.core.first.call(null,G__12104__12105);
var key_name__12108 = cljs.core.nth.call(null,vec__12106__12107,0,null);
var f__12109 = cljs.core.nth.call(null,vec__12106__12107,1,null);
var str_name__12110 = cljs.core.name.call(null,key_name__12108);
(obj[str_name__12110] = f__12109);
{
var G__12111 = cljs.core.next.call(null,G__12104__12105);
G__12104__12105 = G__12111;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12112 = this;
var h__6579__auto____12113 = this__12112.__hash;
if(!((h__6579__auto____12113 == null)))
{return h__6579__auto____12113;
} else
{var h__6579__auto____12114 = cljs.core.hash_coll.call(null,coll);
this__12112.__hash = h__6579__auto____12114;
return h__6579__auto____12114;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12115 = this;
if((this__12115.count === 1))
{return null;
} else
{return this__12115.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12116 = this;
return (new cljs.core.List(this__12116.meta,o,coll,(this__12116.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__12117 = this;
var this__12118 = this;
return cljs.core.pr_str.call(null,this__12118);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12119 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12120 = this;
return this__12120.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12121 = this;
return this__12121.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12122 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12123 = this;
return this__12123.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12124 = this;
if((this__12124.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__12124.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12125 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12126 = this;
return (new cljs.core.List(meta,this__12126.first,this__12126.rest,this__12126.count,this__12126.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12127 = this;
return this__12127.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12128 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12129 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12130 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12131 = this;
return (new cljs.core.List(this__12131.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__12132 = this;
var this__12133 = this;
return cljs.core.pr_str.call(null,this__12133);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12134 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12135 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12136 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12137 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12138 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12139 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12140 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12141 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12142 = this;
return this__12142.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12143 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__12147__12148 = coll;
if(G__12147__12148)
{if((function (){var or__3824__auto____12149 = (G__12147__12148.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____12149)
{return or__3824__auto____12149;
} else
{return G__12147__12148.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__12147__12148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__12147__12148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__12147__12148);
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
var G__12150__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__12150 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12150__delegate.call(this, x, y, z, items);
};
G__12150.cljs$lang$maxFixedArity = 3;
G__12150.cljs$lang$applyTo = (function (arglist__12151){
var x = cljs.core.first(arglist__12151);
var y = cljs.core.first(cljs.core.next(arglist__12151));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12151)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12151)));
return G__12150__delegate(x, y, z, items);
});
G__12150.cljs$lang$arity$variadic = G__12150__delegate;
return G__12150;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12152 = this;
var h__6579__auto____12153 = this__12152.__hash;
if(!((h__6579__auto____12153 == null)))
{return h__6579__auto____12153;
} else
{var h__6579__auto____12154 = cljs.core.hash_coll.call(null,coll);
this__12152.__hash = h__6579__auto____12154;
return h__6579__auto____12154;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12155 = this;
if((this__12155.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__12155.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12156 = this;
return (new cljs.core.Cons(null,o,coll,this__12156.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__12157 = this;
var this__12158 = this;
return cljs.core.pr_str.call(null,this__12158);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12159 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12160 = this;
return this__12160.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12161 = this;
if((this__12161.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__12161.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12162 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12163 = this;
return (new cljs.core.Cons(meta,this__12163.first,this__12163.rest,this__12163.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12164 = this;
return this__12164.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12165 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12165.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____12170 = (coll == null);
if(or__3824__auto____12170)
{return or__3824__auto____12170;
} else
{var G__12171__12172 = coll;
if(G__12171__12172)
{if((function (){var or__3824__auto____12173 = (G__12171__12172.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____12173)
{return or__3824__auto____12173;
} else
{return G__12171__12172.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__12171__12172.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__12171__12172);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__12171__12172);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__12177__12178 = x;
if(G__12177__12178)
{if((function (){var or__3824__auto____12179 = (G__12177__12178.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____12179)
{return or__3824__auto____12179;
} else
{return G__12177__12178.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__12177__12178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__12177__12178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__12177__12178);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__12180 = null;
var G__12180__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__12180__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__12180 = function(string,f,start){
switch(arguments.length){
case 2:
return G__12180__2.call(this,string,f);
case 3:
return G__12180__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12180;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__12181 = null;
var G__12181__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__12181__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__12181 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__12181__2.call(this,string,k);
case 3:
return G__12181__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12181;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__12182 = null;
var G__12182__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__12182__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__12182 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__12182__2.call(this,string,n);
case 3:
return G__12182__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12182;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__12194 = null;
var G__12194__2 = (function (this_sym12185,coll){
var this__12187 = this;
var this_sym12185__12188 = this;
var ___12189 = this_sym12185__12188;
if((coll == null))
{return null;
} else
{var strobj__12190 = coll.strobj;
if((strobj__12190 == null))
{return cljs.core._lookup.call(null,coll,this__12187.k,null);
} else
{return (strobj__12190[this__12187.k]);
}
}
});
var G__12194__3 = (function (this_sym12186,coll,not_found){
var this__12187 = this;
var this_sym12186__12191 = this;
var ___12192 = this_sym12186__12191;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__12187.k,not_found);
}
});
G__12194 = function(this_sym12186,coll,not_found){
switch(arguments.length){
case 2:
return G__12194__2.call(this,this_sym12186,coll);
case 3:
return G__12194__3.call(this,this_sym12186,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12194;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym12183,args12184){
var this__12193 = this;
return this_sym12183.call.apply(this_sym12183,[this_sym12183].concat(args12184.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__12203 = null;
var G__12203__2 = (function (this_sym12197,coll){
var this_sym12197__12199 = this;
var this__12200 = this_sym12197__12199;
return cljs.core._lookup.call(null,coll,this__12200.toString(),null);
});
var G__12203__3 = (function (this_sym12198,coll,not_found){
var this_sym12198__12201 = this;
var this__12202 = this_sym12198__12201;
return cljs.core._lookup.call(null,coll,this__12202.toString(),not_found);
});
G__12203 = function(this_sym12198,coll,not_found){
switch(arguments.length){
case 2:
return G__12203__2.call(this,this_sym12198,coll);
case 3:
return G__12203__3.call(this,this_sym12198,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12203;
})()
;
String.prototype.apply = (function (this_sym12195,args12196){
return this_sym12195.call.apply(this_sym12195,[this_sym12195].concat(args12196.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__12205 = lazy_seq.x;
if(lazy_seq.realized)
{return x__12205;
} else
{lazy_seq.x = x__12205.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12206 = this;
var h__6579__auto____12207 = this__12206.__hash;
if(!((h__6579__auto____12207 == null)))
{return h__6579__auto____12207;
} else
{var h__6579__auto____12208 = cljs.core.hash_coll.call(null,coll);
this__12206.__hash = h__6579__auto____12208;
return h__6579__auto____12208;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12209 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12210 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__12211 = this;
var this__12212 = this;
return cljs.core.pr_str.call(null,this__12212);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12213 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12214 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12215 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12216 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12217 = this;
return (new cljs.core.LazySeq(meta,this__12217.realized,this__12217.x,this__12217.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12218 = this;
return this__12218.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12219 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12219.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__12220 = this;
return this__12220.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__12221 = this;
var ___12222 = this;
(this__12221.buf[this__12221.end] = o);
return this__12221.end = (this__12221.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__12223 = this;
var ___12224 = this;
var ret__12225 = (new cljs.core.ArrayChunk(this__12223.buf,0,this__12223.end));
this__12223.buf = null;
return ret__12225;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__12226 = this;
return cljs.core.array_reduce.call(null,this__12226.arr,f,(this__12226.arr[this__12226.off]),(this__12226.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__12227 = this;
return cljs.core.array_reduce.call(null,this__12227.arr,f,start,this__12227.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__12228 = this;
if((this__12228.off === this__12228.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__12228.arr,(this__12228.off + 1),this__12228.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__12229 = this;
return (this__12229.arr[(this__12229.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__12230 = this;
if((function (){var and__3822__auto____12231 = (i >= 0);
if(and__3822__auto____12231)
{return (i < (this__12230.end - this__12230.off));
} else
{return and__3822__auto____12231;
}
})())
{return (this__12230.arr[(this__12230.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__12232 = this;
return (this__12232.end - this__12232.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12233 = this;
var h__6579__auto____12234 = this__12233.__hash;
if(!((h__6579__auto____12234 == null)))
{return h__6579__auto____12234;
} else
{var h__6579__auto____12235 = cljs.core.hash_coll.call(null,coll);
this__12233.__hash = h__6579__auto____12235;
return h__6579__auto____12235;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__12236 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12237 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12238 = this;
return cljs.core._nth.call(null,this__12238.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12239 = this;
if((cljs.core._count.call(null,this__12239.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__12239.chunk),this__12239.more,this__12239.meta,null));
} else
{if((this__12239.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__12239.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__12240 = this;
if((this__12240.more == null))
{return null;
} else
{return this__12240.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12241 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__12242 = this;
return (new cljs.core.ChunkedCons(this__12242.chunk,this__12242.more,m,this__12242.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12243 = this;
return this__12243.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12244 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12244.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__12245 = this;
return this__12245.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__12246 = this;
if((this__12246.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__12246.more;
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
if((function (){var G__12250__12251 = s;
if(G__12250__12251)
{if((function (){var or__3824__auto____12252 = (G__12250__12251.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____12252)
{return or__3824__auto____12252;
} else
{return G__12250__12251.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__12250__12251.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__12250__12251);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__12250__12251);
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
var ary__12255 = [];
var s__12256 = s;
while(true){
if(cljs.core.seq.call(null,s__12256))
{ary__12255.push(cljs.core.first.call(null,s__12256));
{
var G__12257 = cljs.core.next.call(null,s__12256);
s__12256 = G__12257;
continue;
}
} else
{return ary__12255;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__12261 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__12262 = 0;
var xs__12263 = cljs.core.seq.call(null,coll);
while(true){
if(xs__12263)
{(ret__12261[i__12262] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__12263)));
{
var G__12264 = (i__12262 + 1);
var G__12265 = cljs.core.next.call(null,xs__12263);
i__12262 = G__12264;
xs__12263 = G__12265;
continue;
}
} else
{}
break;
}
return ret__12261;
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
var a__12273 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__12274 = cljs.core.seq.call(null,init_val_or_seq);
var i__12275 = 0;
var s__12276 = s__12274;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12277 = s__12276;
if(and__3822__auto____12277)
{return (i__12275 < size);
} else
{return and__3822__auto____12277;
}
})()))
{(a__12273[i__12275] = cljs.core.first.call(null,s__12276));
{
var G__12280 = (i__12275 + 1);
var G__12281 = cljs.core.next.call(null,s__12276);
i__12275 = G__12280;
s__12276 = G__12281;
continue;
}
} else
{return a__12273;
}
break;
}
} else
{var n__6925__auto____12278 = size;
var i__12279 = 0;
while(true){
if((i__12279 < n__6925__auto____12278))
{(a__12273[i__12279] = init_val_or_seq);
{
var G__12282 = (i__12279 + 1);
i__12279 = G__12282;
continue;
}
} else
{}
break;
}
return a__12273;
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
var a__12290 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__12291 = cljs.core.seq.call(null,init_val_or_seq);
var i__12292 = 0;
var s__12293 = s__12291;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12294 = s__12293;
if(and__3822__auto____12294)
{return (i__12292 < size);
} else
{return and__3822__auto____12294;
}
})()))
{(a__12290[i__12292] = cljs.core.first.call(null,s__12293));
{
var G__12297 = (i__12292 + 1);
var G__12298 = cljs.core.next.call(null,s__12293);
i__12292 = G__12297;
s__12293 = G__12298;
continue;
}
} else
{return a__12290;
}
break;
}
} else
{var n__6925__auto____12295 = size;
var i__12296 = 0;
while(true){
if((i__12296 < n__6925__auto____12295))
{(a__12290[i__12296] = init_val_or_seq);
{
var G__12299 = (i__12296 + 1);
i__12296 = G__12299;
continue;
}
} else
{}
break;
}
return a__12290;
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
var a__12307 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__12308 = cljs.core.seq.call(null,init_val_or_seq);
var i__12309 = 0;
var s__12310 = s__12308;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12311 = s__12310;
if(and__3822__auto____12311)
{return (i__12309 < size);
} else
{return and__3822__auto____12311;
}
})()))
{(a__12307[i__12309] = cljs.core.first.call(null,s__12310));
{
var G__12314 = (i__12309 + 1);
var G__12315 = cljs.core.next.call(null,s__12310);
i__12309 = G__12314;
s__12310 = G__12315;
continue;
}
} else
{return a__12307;
}
break;
}
} else
{var n__6925__auto____12312 = size;
var i__12313 = 0;
while(true){
if((i__12313 < n__6925__auto____12312))
{(a__12307[i__12313] = init_val_or_seq);
{
var G__12316 = (i__12313 + 1);
i__12313 = G__12316;
continue;
}
} else
{}
break;
}
return a__12307;
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
{var s__12321 = s;
var i__12322 = n;
var sum__12323 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12324 = (i__12322 > 0);
if(and__3822__auto____12324)
{return cljs.core.seq.call(null,s__12321);
} else
{return and__3822__auto____12324;
}
})()))
{{
var G__12325 = cljs.core.next.call(null,s__12321);
var G__12326 = (i__12322 - 1);
var G__12327 = (sum__12323 + 1);
s__12321 = G__12325;
i__12322 = G__12326;
sum__12323 = G__12327;
continue;
}
} else
{return sum__12323;
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
var s__12332 = cljs.core.seq.call(null,x);
if(s__12332)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__12332))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__12332),concat.call(null,cljs.core.chunk_rest.call(null,s__12332),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12332),concat.call(null,cljs.core.rest.call(null,s__12332),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__12336__delegate = function (x,y,zs){
var cat__12335 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__12334 = cljs.core.seq.call(null,xys);
if(xys__12334)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__12334))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__12334),cat.call(null,cljs.core.chunk_rest.call(null,xys__12334),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__12334),cat.call(null,cljs.core.rest.call(null,xys__12334),zs));
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
return cat__12335.call(null,concat.call(null,x,y),zs);
};
var G__12336 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12336__delegate.call(this, x, y, zs);
};
G__12336.cljs$lang$maxFixedArity = 2;
G__12336.cljs$lang$applyTo = (function (arglist__12337){
var x = cljs.core.first(arglist__12337);
var y = cljs.core.first(cljs.core.next(arglist__12337));
var zs = cljs.core.rest(cljs.core.next(arglist__12337));
return G__12336__delegate(x, y, zs);
});
G__12336.cljs$lang$arity$variadic = G__12336__delegate;
return G__12336;
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
var G__12338__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__12338 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12338__delegate.call(this, a, b, c, d, more);
};
G__12338.cljs$lang$maxFixedArity = 4;
G__12338.cljs$lang$applyTo = (function (arglist__12339){
var a = cljs.core.first(arglist__12339);
var b = cljs.core.first(cljs.core.next(arglist__12339));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12339)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12339))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12339))));
return G__12338__delegate(a, b, c, d, more);
});
G__12338.cljs$lang$arity$variadic = G__12338__delegate;
return G__12338;
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
var args__12381 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__12382 = cljs.core._first.call(null,args__12381);
var args__12383 = cljs.core._rest.call(null,args__12381);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__12382);
} else
{return f.call(null,a__12382);
}
} else
{var b__12384 = cljs.core._first.call(null,args__12383);
var args__12385 = cljs.core._rest.call(null,args__12383);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__12382,b__12384);
} else
{return f.call(null,a__12382,b__12384);
}
} else
{var c__12386 = cljs.core._first.call(null,args__12385);
var args__12387 = cljs.core._rest.call(null,args__12385);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__12382,b__12384,c__12386);
} else
{return f.call(null,a__12382,b__12384,c__12386);
}
} else
{var d__12388 = cljs.core._first.call(null,args__12387);
var args__12389 = cljs.core._rest.call(null,args__12387);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__12382,b__12384,c__12386,d__12388);
} else
{return f.call(null,a__12382,b__12384,c__12386,d__12388);
}
} else
{var e__12390 = cljs.core._first.call(null,args__12389);
var args__12391 = cljs.core._rest.call(null,args__12389);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__12382,b__12384,c__12386,d__12388,e__12390);
} else
{return f.call(null,a__12382,b__12384,c__12386,d__12388,e__12390);
}
} else
{var f__12392 = cljs.core._first.call(null,args__12391);
var args__12393 = cljs.core._rest.call(null,args__12391);
if((argc === 6))
{if(f__12392.cljs$lang$arity$6)
{return f__12392.cljs$lang$arity$6(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392);
}
} else
{var g__12394 = cljs.core._first.call(null,args__12393);
var args__12395 = cljs.core._rest.call(null,args__12393);
if((argc === 7))
{if(f__12392.cljs$lang$arity$7)
{return f__12392.cljs$lang$arity$7(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394);
}
} else
{var h__12396 = cljs.core._first.call(null,args__12395);
var args__12397 = cljs.core._rest.call(null,args__12395);
if((argc === 8))
{if(f__12392.cljs$lang$arity$8)
{return f__12392.cljs$lang$arity$8(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396);
}
} else
{var i__12398 = cljs.core._first.call(null,args__12397);
var args__12399 = cljs.core._rest.call(null,args__12397);
if((argc === 9))
{if(f__12392.cljs$lang$arity$9)
{return f__12392.cljs$lang$arity$9(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398);
}
} else
{var j__12400 = cljs.core._first.call(null,args__12399);
var args__12401 = cljs.core._rest.call(null,args__12399);
if((argc === 10))
{if(f__12392.cljs$lang$arity$10)
{return f__12392.cljs$lang$arity$10(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400);
}
} else
{var k__12402 = cljs.core._first.call(null,args__12401);
var args__12403 = cljs.core._rest.call(null,args__12401);
if((argc === 11))
{if(f__12392.cljs$lang$arity$11)
{return f__12392.cljs$lang$arity$11(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402);
}
} else
{var l__12404 = cljs.core._first.call(null,args__12403);
var args__12405 = cljs.core._rest.call(null,args__12403);
if((argc === 12))
{if(f__12392.cljs$lang$arity$12)
{return f__12392.cljs$lang$arity$12(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404);
}
} else
{var m__12406 = cljs.core._first.call(null,args__12405);
var args__12407 = cljs.core._rest.call(null,args__12405);
if((argc === 13))
{if(f__12392.cljs$lang$arity$13)
{return f__12392.cljs$lang$arity$13(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406);
}
} else
{var n__12408 = cljs.core._first.call(null,args__12407);
var args__12409 = cljs.core._rest.call(null,args__12407);
if((argc === 14))
{if(f__12392.cljs$lang$arity$14)
{return f__12392.cljs$lang$arity$14(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408);
}
} else
{var o__12410 = cljs.core._first.call(null,args__12409);
var args__12411 = cljs.core._rest.call(null,args__12409);
if((argc === 15))
{if(f__12392.cljs$lang$arity$15)
{return f__12392.cljs$lang$arity$15(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410);
}
} else
{var p__12412 = cljs.core._first.call(null,args__12411);
var args__12413 = cljs.core._rest.call(null,args__12411);
if((argc === 16))
{if(f__12392.cljs$lang$arity$16)
{return f__12392.cljs$lang$arity$16(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412);
}
} else
{var q__12414 = cljs.core._first.call(null,args__12413);
var args__12415 = cljs.core._rest.call(null,args__12413);
if((argc === 17))
{if(f__12392.cljs$lang$arity$17)
{return f__12392.cljs$lang$arity$17(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414);
}
} else
{var r__12416 = cljs.core._first.call(null,args__12415);
var args__12417 = cljs.core._rest.call(null,args__12415);
if((argc === 18))
{if(f__12392.cljs$lang$arity$18)
{return f__12392.cljs$lang$arity$18(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414,r__12416);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414,r__12416);
}
} else
{var s__12418 = cljs.core._first.call(null,args__12417);
var args__12419 = cljs.core._rest.call(null,args__12417);
if((argc === 19))
{if(f__12392.cljs$lang$arity$19)
{return f__12392.cljs$lang$arity$19(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414,r__12416,s__12418);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414,r__12416,s__12418);
}
} else
{var t__12420 = cljs.core._first.call(null,args__12419);
var args__12421 = cljs.core._rest.call(null,args__12419);
if((argc === 20))
{if(f__12392.cljs$lang$arity$20)
{return f__12392.cljs$lang$arity$20(a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414,r__12416,s__12418,t__12420);
} else
{return f__12392.call(null,a__12382,b__12384,c__12386,d__12388,e__12390,f__12392,g__12394,h__12396,i__12398,j__12400,k__12402,l__12404,m__12406,n__12408,o__12410,p__12412,q__12414,r__12416,s__12418,t__12420);
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
var fixed_arity__12436 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__12437 = cljs.core.bounded_count.call(null,args,(fixed_arity__12436 + 1));
if((bc__12437 <= fixed_arity__12436))
{return cljs.core.apply_to.call(null,f,bc__12437,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__12438 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__12439 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__12440 = cljs.core.bounded_count.call(null,arglist__12438,(fixed_arity__12439 + 1));
if((bc__12440 <= fixed_arity__12439))
{return cljs.core.apply_to.call(null,f,bc__12440,arglist__12438);
} else
{return f.cljs$lang$applyTo(arglist__12438);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12438));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__12441 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__12442 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__12443 = cljs.core.bounded_count.call(null,arglist__12441,(fixed_arity__12442 + 1));
if((bc__12443 <= fixed_arity__12442))
{return cljs.core.apply_to.call(null,f,bc__12443,arglist__12441);
} else
{return f.cljs$lang$applyTo(arglist__12441);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12441));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__12444 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__12445 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__12446 = cljs.core.bounded_count.call(null,arglist__12444,(fixed_arity__12445 + 1));
if((bc__12446 <= fixed_arity__12445))
{return cljs.core.apply_to.call(null,f,bc__12446,arglist__12444);
} else
{return f.cljs$lang$applyTo(arglist__12444);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12444));
}
});
var apply__6 = (function() { 
var G__12450__delegate = function (f,a,b,c,d,args){
var arglist__12447 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__12448 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__12449 = cljs.core.bounded_count.call(null,arglist__12447,(fixed_arity__12448 + 1));
if((bc__12449 <= fixed_arity__12448))
{return cljs.core.apply_to.call(null,f,bc__12449,arglist__12447);
} else
{return f.cljs$lang$applyTo(arglist__12447);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12447));
}
};
var G__12450 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12450__delegate.call(this, f, a, b, c, d, args);
};
G__12450.cljs$lang$maxFixedArity = 5;
G__12450.cljs$lang$applyTo = (function (arglist__12451){
var f = cljs.core.first(arglist__12451);
var a = cljs.core.first(cljs.core.next(arglist__12451));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12451)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12451))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12451)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12451)))));
return G__12450__delegate(f, a, b, c, d, args);
});
G__12450.cljs$lang$arity$variadic = G__12450__delegate;
return G__12450;
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
vary_meta.cljs$lang$applyTo = (function (arglist__12452){
var obj = cljs.core.first(arglist__12452);
var f = cljs.core.first(cljs.core.next(arglist__12452));
var args = cljs.core.rest(cljs.core.next(arglist__12452));
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
var G__12453__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__12453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12453__delegate.call(this, x, y, more);
};
G__12453.cljs$lang$maxFixedArity = 2;
G__12453.cljs$lang$applyTo = (function (arglist__12454){
var x = cljs.core.first(arglist__12454);
var y = cljs.core.first(cljs.core.next(arglist__12454));
var more = cljs.core.rest(cljs.core.next(arglist__12454));
return G__12453__delegate(x, y, more);
});
G__12453.cljs$lang$arity$variadic = G__12453__delegate;
return G__12453;
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
var G__12455 = pred;
var G__12456 = cljs.core.next.call(null,coll);
pred = G__12455;
coll = G__12456;
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
{var or__3824__auto____12458 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____12458))
{return or__3824__auto____12458;
} else
{{
var G__12459 = pred;
var G__12460 = cljs.core.next.call(null,coll);
pred = G__12459;
coll = G__12460;
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
var G__12461 = null;
var G__12461__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__12461__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__12461__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__12461__3 = (function() { 
var G__12462__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__12462 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12462__delegate.call(this, x, y, zs);
};
G__12462.cljs$lang$maxFixedArity = 2;
G__12462.cljs$lang$applyTo = (function (arglist__12463){
var x = cljs.core.first(arglist__12463);
var y = cljs.core.first(cljs.core.next(arglist__12463));
var zs = cljs.core.rest(cljs.core.next(arglist__12463));
return G__12462__delegate(x, y, zs);
});
G__12462.cljs$lang$arity$variadic = G__12462__delegate;
return G__12462;
})()
;
G__12461 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__12461__0.call(this);
case 1:
return G__12461__1.call(this,x);
case 2:
return G__12461__2.call(this,x,y);
default:
return G__12461__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__12461.cljs$lang$maxFixedArity = 2;
G__12461.cljs$lang$applyTo = G__12461__3.cljs$lang$applyTo;
return G__12461;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12464__delegate = function (args){
return x;
};
var G__12464 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12464__delegate.call(this, args);
};
G__12464.cljs$lang$maxFixedArity = 0;
G__12464.cljs$lang$applyTo = (function (arglist__12465){
var args = cljs.core.seq(arglist__12465);;
return G__12464__delegate(args);
});
G__12464.cljs$lang$arity$variadic = G__12464__delegate;
return G__12464;
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
var G__12472 = null;
var G__12472__0 = (function (){
return f.call(null,g.call(null));
});
var G__12472__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12472__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12472__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12472__4 = (function() { 
var G__12473__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12473 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12473__delegate.call(this, x, y, z, args);
};
G__12473.cljs$lang$maxFixedArity = 3;
G__12473.cljs$lang$applyTo = (function (arglist__12474){
var x = cljs.core.first(arglist__12474);
var y = cljs.core.first(cljs.core.next(arglist__12474));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12474)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12474)));
return G__12473__delegate(x, y, z, args);
});
G__12473.cljs$lang$arity$variadic = G__12473__delegate;
return G__12473;
})()
;
G__12472 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12472__0.call(this);
case 1:
return G__12472__1.call(this,x);
case 2:
return G__12472__2.call(this,x,y);
case 3:
return G__12472__3.call(this,x,y,z);
default:
return G__12472__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12472.cljs$lang$maxFixedArity = 3;
G__12472.cljs$lang$applyTo = G__12472__4.cljs$lang$applyTo;
return G__12472;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__12475 = null;
var G__12475__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12475__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12475__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12475__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12475__4 = (function() { 
var G__12476__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__12476 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12476__delegate.call(this, x, y, z, args);
};
G__12476.cljs$lang$maxFixedArity = 3;
G__12476.cljs$lang$applyTo = (function (arglist__12477){
var x = cljs.core.first(arglist__12477);
var y = cljs.core.first(cljs.core.next(arglist__12477));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12477)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12477)));
return G__12476__delegate(x, y, z, args);
});
G__12476.cljs$lang$arity$variadic = G__12476__delegate;
return G__12476;
})()
;
G__12475 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12475__0.call(this);
case 1:
return G__12475__1.call(this,x);
case 2:
return G__12475__2.call(this,x,y);
case 3:
return G__12475__3.call(this,x,y,z);
default:
return G__12475__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12475.cljs$lang$maxFixedArity = 3;
G__12475.cljs$lang$applyTo = G__12475__4.cljs$lang$applyTo;
return G__12475;
})()
});
var comp__4 = (function() { 
var G__12478__delegate = function (f1,f2,f3,fs){
var fs__12469 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__12479__delegate = function (args){
var ret__12470 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__12469),args);
var fs__12471 = cljs.core.next.call(null,fs__12469);
while(true){
if(fs__12471)
{{
var G__12480 = cljs.core.first.call(null,fs__12471).call(null,ret__12470);
var G__12481 = cljs.core.next.call(null,fs__12471);
ret__12470 = G__12480;
fs__12471 = G__12481;
continue;
}
} else
{return ret__12470;
}
break;
}
};
var G__12479 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12479__delegate.call(this, args);
};
G__12479.cljs$lang$maxFixedArity = 0;
G__12479.cljs$lang$applyTo = (function (arglist__12482){
var args = cljs.core.seq(arglist__12482);;
return G__12479__delegate(args);
});
G__12479.cljs$lang$arity$variadic = G__12479__delegate;
return G__12479;
})()
;
};
var G__12478 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12478__delegate.call(this, f1, f2, f3, fs);
};
G__12478.cljs$lang$maxFixedArity = 3;
G__12478.cljs$lang$applyTo = (function (arglist__12483){
var f1 = cljs.core.first(arglist__12483);
var f2 = cljs.core.first(cljs.core.next(arglist__12483));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12483)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12483)));
return G__12478__delegate(f1, f2, f3, fs);
});
G__12478.cljs$lang$arity$variadic = G__12478__delegate;
return G__12478;
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
var G__12484__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__12484 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12484__delegate.call(this, args);
};
G__12484.cljs$lang$maxFixedArity = 0;
G__12484.cljs$lang$applyTo = (function (arglist__12485){
var args = cljs.core.seq(arglist__12485);;
return G__12484__delegate(args);
});
G__12484.cljs$lang$arity$variadic = G__12484__delegate;
return G__12484;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__12486__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__12486 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12486__delegate.call(this, args);
};
G__12486.cljs$lang$maxFixedArity = 0;
G__12486.cljs$lang$applyTo = (function (arglist__12487){
var args = cljs.core.seq(arglist__12487);;
return G__12486__delegate(args);
});
G__12486.cljs$lang$arity$variadic = G__12486__delegate;
return G__12486;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12488__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__12488 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12488__delegate.call(this, args);
};
G__12488.cljs$lang$maxFixedArity = 0;
G__12488.cljs$lang$applyTo = (function (arglist__12489){
var args = cljs.core.seq(arglist__12489);;
return G__12488__delegate(args);
});
G__12488.cljs$lang$arity$variadic = G__12488__delegate;
return G__12488;
})()
;
});
var partial__5 = (function() { 
var G__12490__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12491__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__12491 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12491__delegate.call(this, args);
};
G__12491.cljs$lang$maxFixedArity = 0;
G__12491.cljs$lang$applyTo = (function (arglist__12492){
var args = cljs.core.seq(arglist__12492);;
return G__12491__delegate(args);
});
G__12491.cljs$lang$arity$variadic = G__12491__delegate;
return G__12491;
})()
;
};
var G__12490 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12490__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__12490.cljs$lang$maxFixedArity = 4;
G__12490.cljs$lang$applyTo = (function (arglist__12493){
var f = cljs.core.first(arglist__12493);
var arg1 = cljs.core.first(cljs.core.next(arglist__12493));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12493)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12493))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12493))));
return G__12490__delegate(f, arg1, arg2, arg3, more);
});
G__12490.cljs$lang$arity$variadic = G__12490__delegate;
return G__12490;
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
var G__12494 = null;
var G__12494__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__12494__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__12494__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__12494__4 = (function() { 
var G__12495__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__12495 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12495__delegate.call(this, a, b, c, ds);
};
G__12495.cljs$lang$maxFixedArity = 3;
G__12495.cljs$lang$applyTo = (function (arglist__12496){
var a = cljs.core.first(arglist__12496);
var b = cljs.core.first(cljs.core.next(arglist__12496));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12496)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12496)));
return G__12495__delegate(a, b, c, ds);
});
G__12495.cljs$lang$arity$variadic = G__12495__delegate;
return G__12495;
})()
;
G__12494 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__12494__1.call(this,a);
case 2:
return G__12494__2.call(this,a,b);
case 3:
return G__12494__3.call(this,a,b,c);
default:
return G__12494__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12494.cljs$lang$maxFixedArity = 3;
G__12494.cljs$lang$applyTo = G__12494__4.cljs$lang$applyTo;
return G__12494;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__12497 = null;
var G__12497__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__12497__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__12497__4 = (function() { 
var G__12498__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__12498 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12498__delegate.call(this, a, b, c, ds);
};
G__12498.cljs$lang$maxFixedArity = 3;
G__12498.cljs$lang$applyTo = (function (arglist__12499){
var a = cljs.core.first(arglist__12499);
var b = cljs.core.first(cljs.core.next(arglist__12499));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12499)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12499)));
return G__12498__delegate(a, b, c, ds);
});
G__12498.cljs$lang$arity$variadic = G__12498__delegate;
return G__12498;
})()
;
G__12497 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12497__2.call(this,a,b);
case 3:
return G__12497__3.call(this,a,b,c);
default:
return G__12497__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12497.cljs$lang$maxFixedArity = 3;
G__12497.cljs$lang$applyTo = G__12497__4.cljs$lang$applyTo;
return G__12497;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__12500 = null;
var G__12500__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__12500__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__12500__4 = (function() { 
var G__12501__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__12501 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12501__delegate.call(this, a, b, c, ds);
};
G__12501.cljs$lang$maxFixedArity = 3;
G__12501.cljs$lang$applyTo = (function (arglist__12502){
var a = cljs.core.first(arglist__12502);
var b = cljs.core.first(cljs.core.next(arglist__12502));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12502)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12502)));
return G__12501__delegate(a, b, c, ds);
});
G__12501.cljs$lang$arity$variadic = G__12501__delegate;
return G__12501;
})()
;
G__12500 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12500__2.call(this,a,b);
case 3:
return G__12500__3.call(this,a,b,c);
default:
return G__12500__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12500.cljs$lang$maxFixedArity = 3;
G__12500.cljs$lang$applyTo = G__12500__4.cljs$lang$applyTo;
return G__12500;
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
var mapi__12518 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12526 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12526)
{var s__12527 = temp__3974__auto____12526;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12527))
{var c__12528 = cljs.core.chunk_first.call(null,s__12527);
var size__12529 = cljs.core.count.call(null,c__12528);
var b__12530 = cljs.core.chunk_buffer.call(null,size__12529);
var n__6925__auto____12531 = size__12529;
var i__12532 = 0;
while(true){
if((i__12532 < n__6925__auto____12531))
{cljs.core.chunk_append.call(null,b__12530,f.call(null,(idx + i__12532),cljs.core._nth.call(null,c__12528,i__12532)));
{
var G__12533 = (i__12532 + 1);
i__12532 = G__12533;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12530),mapi.call(null,(idx + size__12529),cljs.core.chunk_rest.call(null,s__12527)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__12527)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__12527)));
}
} else
{return null;
}
}),null));
});
return mapi__12518.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12543 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12543)
{var s__12544 = temp__3974__auto____12543;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12544))
{var c__12545 = cljs.core.chunk_first.call(null,s__12544);
var size__12546 = cljs.core.count.call(null,c__12545);
var b__12547 = cljs.core.chunk_buffer.call(null,size__12546);
var n__6925__auto____12548 = size__12546;
var i__12549 = 0;
while(true){
if((i__12549 < n__6925__auto____12548))
{var x__12550 = f.call(null,cljs.core._nth.call(null,c__12545,i__12549));
if((x__12550 == null))
{} else
{cljs.core.chunk_append.call(null,b__12547,x__12550);
}
{
var G__12552 = (i__12549 + 1);
i__12549 = G__12552;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12547),keep.call(null,f,cljs.core.chunk_rest.call(null,s__12544)));
} else
{var x__12551 = f.call(null,cljs.core.first.call(null,s__12544));
if((x__12551 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__12544));
} else
{return cljs.core.cons.call(null,x__12551,keep.call(null,f,cljs.core.rest.call(null,s__12544)));
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
var keepi__12578 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12588 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12588)
{var s__12589 = temp__3974__auto____12588;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12589))
{var c__12590 = cljs.core.chunk_first.call(null,s__12589);
var size__12591 = cljs.core.count.call(null,c__12590);
var b__12592 = cljs.core.chunk_buffer.call(null,size__12591);
var n__6925__auto____12593 = size__12591;
var i__12594 = 0;
while(true){
if((i__12594 < n__6925__auto____12593))
{var x__12595 = f.call(null,(idx + i__12594),cljs.core._nth.call(null,c__12590,i__12594));
if((x__12595 == null))
{} else
{cljs.core.chunk_append.call(null,b__12592,x__12595);
}
{
var G__12597 = (i__12594 + 1);
i__12594 = G__12597;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12592),keepi.call(null,(idx + size__12591),cljs.core.chunk_rest.call(null,s__12589)));
} else
{var x__12596 = f.call(null,idx,cljs.core.first.call(null,s__12589));
if((x__12596 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__12589));
} else
{return cljs.core.cons.call(null,x__12596,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__12589)));
}
}
} else
{return null;
}
}),null));
});
return keepi__12578.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12683 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____12683))
{return p.call(null,y);
} else
{return and__3822__auto____12683;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12684 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____12684))
{var and__3822__auto____12685 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____12685))
{return p.call(null,z);
} else
{return and__3822__auto____12685;
}
} else
{return and__3822__auto____12684;
}
})());
});
var ep1__4 = (function() { 
var G__12754__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12686 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12686))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____12686;
}
})());
};
var G__12754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12754__delegate.call(this, x, y, z, args);
};
G__12754.cljs$lang$maxFixedArity = 3;
G__12754.cljs$lang$applyTo = (function (arglist__12755){
var x = cljs.core.first(arglist__12755);
var y = cljs.core.first(cljs.core.next(arglist__12755));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12755)));
return G__12754__delegate(x, y, z, args);
});
G__12754.cljs$lang$arity$variadic = G__12754__delegate;
return G__12754;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12698 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12698))
{return p2.call(null,x);
} else
{return and__3822__auto____12698;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12699 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12699))
{var and__3822__auto____12700 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12700))
{var and__3822__auto____12701 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12701))
{return p2.call(null,y);
} else
{return and__3822__auto____12701;
}
} else
{return and__3822__auto____12700;
}
} else
{return and__3822__auto____12699;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12702 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12702))
{var and__3822__auto____12703 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12703))
{var and__3822__auto____12704 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____12704))
{var and__3822__auto____12705 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12705))
{var and__3822__auto____12706 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12706))
{return p2.call(null,z);
} else
{return and__3822__auto____12706;
}
} else
{return and__3822__auto____12705;
}
} else
{return and__3822__auto____12704;
}
} else
{return and__3822__auto____12703;
}
} else
{return and__3822__auto____12702;
}
})());
});
var ep2__4 = (function() { 
var G__12756__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12707 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12707))
{return cljs.core.every_QMARK_.call(null,(function (p1__12553_SHARP_){
var and__3822__auto____12708 = p1.call(null,p1__12553_SHARP_);
if(cljs.core.truth_(and__3822__auto____12708))
{return p2.call(null,p1__12553_SHARP_);
} else
{return and__3822__auto____12708;
}
}),args);
} else
{return and__3822__auto____12707;
}
})());
};
var G__12756 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12756__delegate.call(this, x, y, z, args);
};
G__12756.cljs$lang$maxFixedArity = 3;
G__12756.cljs$lang$applyTo = (function (arglist__12757){
var x = cljs.core.first(arglist__12757);
var y = cljs.core.first(cljs.core.next(arglist__12757));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12757)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12757)));
return G__12756__delegate(x, y, z, args);
});
G__12756.cljs$lang$arity$variadic = G__12756__delegate;
return G__12756;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12727 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12727))
{var and__3822__auto____12728 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12728))
{return p3.call(null,x);
} else
{return and__3822__auto____12728;
}
} else
{return and__3822__auto____12727;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12729 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12729))
{var and__3822__auto____12730 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12730))
{var and__3822__auto____12731 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____12731))
{var and__3822__auto____12732 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12732))
{var and__3822__auto____12733 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12733))
{return p3.call(null,y);
} else
{return and__3822__auto____12733;
}
} else
{return and__3822__auto____12732;
}
} else
{return and__3822__auto____12731;
}
} else
{return and__3822__auto____12730;
}
} else
{return and__3822__auto____12729;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12734 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12734))
{var and__3822__auto____12735 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12735))
{var and__3822__auto____12736 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____12736))
{var and__3822__auto____12737 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12737))
{var and__3822__auto____12738 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12738))
{var and__3822__auto____12739 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____12739))
{var and__3822__auto____12740 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____12740))
{var and__3822__auto____12741 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____12741))
{return p3.call(null,z);
} else
{return and__3822__auto____12741;
}
} else
{return and__3822__auto____12740;
}
} else
{return and__3822__auto____12739;
}
} else
{return and__3822__auto____12738;
}
} else
{return and__3822__auto____12737;
}
} else
{return and__3822__auto____12736;
}
} else
{return and__3822__auto____12735;
}
} else
{return and__3822__auto____12734;
}
})());
});
var ep3__4 = (function() { 
var G__12758__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12742 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12742))
{return cljs.core.every_QMARK_.call(null,(function (p1__12554_SHARP_){
var and__3822__auto____12743 = p1.call(null,p1__12554_SHARP_);
if(cljs.core.truth_(and__3822__auto____12743))
{var and__3822__auto____12744 = p2.call(null,p1__12554_SHARP_);
if(cljs.core.truth_(and__3822__auto____12744))
{return p3.call(null,p1__12554_SHARP_);
} else
{return and__3822__auto____12744;
}
} else
{return and__3822__auto____12743;
}
}),args);
} else
{return and__3822__auto____12742;
}
})());
};
var G__12758 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12758__delegate.call(this, x, y, z, args);
};
G__12758.cljs$lang$maxFixedArity = 3;
G__12758.cljs$lang$applyTo = (function (arglist__12759){
var x = cljs.core.first(arglist__12759);
var y = cljs.core.first(cljs.core.next(arglist__12759));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12759)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12759)));
return G__12758__delegate(x, y, z, args);
});
G__12758.cljs$lang$arity$variadic = G__12758__delegate;
return G__12758;
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
var G__12760__delegate = function (p1,p2,p3,ps){
var ps__12745 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12555_SHARP_){
return p1__12555_SHARP_.call(null,x);
}),ps__12745);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12556_SHARP_){
var and__3822__auto____12750 = p1__12556_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____12750))
{return p1__12556_SHARP_.call(null,y);
} else
{return and__3822__auto____12750;
}
}),ps__12745);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12557_SHARP_){
var and__3822__auto____12751 = p1__12557_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____12751))
{var and__3822__auto____12752 = p1__12557_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____12752))
{return p1__12557_SHARP_.call(null,z);
} else
{return and__3822__auto____12752;
}
} else
{return and__3822__auto____12751;
}
}),ps__12745);
});
var epn__4 = (function() { 
var G__12761__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12753 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12753))
{return cljs.core.every_QMARK_.call(null,(function (p1__12558_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12558_SHARP_,args);
}),ps__12745);
} else
{return and__3822__auto____12753;
}
})());
};
var G__12761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12761__delegate.call(this, x, y, z, args);
};
G__12761.cljs$lang$maxFixedArity = 3;
G__12761.cljs$lang$applyTo = (function (arglist__12762){
var x = cljs.core.first(arglist__12762);
var y = cljs.core.first(cljs.core.next(arglist__12762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12762)));
return G__12761__delegate(x, y, z, args);
});
G__12761.cljs$lang$arity$variadic = G__12761__delegate;
return G__12761;
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
var G__12760 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12760__delegate.call(this, p1, p2, p3, ps);
};
G__12760.cljs$lang$maxFixedArity = 3;
G__12760.cljs$lang$applyTo = (function (arglist__12763){
var p1 = cljs.core.first(arglist__12763);
var p2 = cljs.core.first(cljs.core.next(arglist__12763));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12763)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12763)));
return G__12760__delegate(p1, p2, p3, ps);
});
G__12760.cljs$lang$arity$variadic = G__12760__delegate;
return G__12760;
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
var or__3824__auto____12844 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____12844))
{return or__3824__auto____12844;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____12845 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____12845))
{return or__3824__auto____12845;
} else
{var or__3824__auto____12846 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____12846))
{return or__3824__auto____12846;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__12915__delegate = function (x,y,z,args){
var or__3824__auto____12847 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12847))
{return or__3824__auto____12847;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12915 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12915__delegate.call(this, x, y, z, args);
};
G__12915.cljs$lang$maxFixedArity = 3;
G__12915.cljs$lang$applyTo = (function (arglist__12916){
var x = cljs.core.first(arglist__12916);
var y = cljs.core.first(cljs.core.next(arglist__12916));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12916)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12916)));
return G__12915__delegate(x, y, z, args);
});
G__12915.cljs$lang$arity$variadic = G__12915__delegate;
return G__12915;
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
var or__3824__auto____12859 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12859))
{return or__3824__auto____12859;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____12860 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12860))
{return or__3824__auto____12860;
} else
{var or__3824__auto____12861 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12861))
{return or__3824__auto____12861;
} else
{var or__3824__auto____12862 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12862))
{return or__3824__auto____12862;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____12863 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12863))
{return or__3824__auto____12863;
} else
{var or__3824__auto____12864 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12864))
{return or__3824__auto____12864;
} else
{var or__3824__auto____12865 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12865))
{return or__3824__auto____12865;
} else
{var or__3824__auto____12866 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12866))
{return or__3824__auto____12866;
} else
{var or__3824__auto____12867 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12867))
{return or__3824__auto____12867;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__12917__delegate = function (x,y,z,args){
var or__3824__auto____12868 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12868))
{return or__3824__auto____12868;
} else
{return cljs.core.some.call(null,(function (p1__12598_SHARP_){
var or__3824__auto____12869 = p1.call(null,p1__12598_SHARP_);
if(cljs.core.truth_(or__3824__auto____12869))
{return or__3824__auto____12869;
} else
{return p2.call(null,p1__12598_SHARP_);
}
}),args);
}
};
var G__12917 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12917__delegate.call(this, x, y, z, args);
};
G__12917.cljs$lang$maxFixedArity = 3;
G__12917.cljs$lang$applyTo = (function (arglist__12918){
var x = cljs.core.first(arglist__12918);
var y = cljs.core.first(cljs.core.next(arglist__12918));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12918)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12918)));
return G__12917__delegate(x, y, z, args);
});
G__12917.cljs$lang$arity$variadic = G__12917__delegate;
return G__12917;
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
var or__3824__auto____12888 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12888))
{return or__3824__auto____12888;
} else
{var or__3824__auto____12889 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12889))
{return or__3824__auto____12889;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____12890 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12890))
{return or__3824__auto____12890;
} else
{var or__3824__auto____12891 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12891))
{return or__3824__auto____12891;
} else
{var or__3824__auto____12892 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12892))
{return or__3824__auto____12892;
} else
{var or__3824__auto____12893 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12893))
{return or__3824__auto____12893;
} else
{var or__3824__auto____12894 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12894))
{return or__3824__auto____12894;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____12895 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____12895))
{return or__3824__auto____12895;
} else
{var or__3824__auto____12896 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____12896))
{return or__3824__auto____12896;
} else
{var or__3824__auto____12897 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____12897))
{return or__3824__auto____12897;
} else
{var or__3824__auto____12898 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____12898))
{return or__3824__auto____12898;
} else
{var or__3824__auto____12899 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____12899))
{return or__3824__auto____12899;
} else
{var or__3824__auto____12900 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____12900))
{return or__3824__auto____12900;
} else
{var or__3824__auto____12901 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____12901))
{return or__3824__auto____12901;
} else
{var or__3824__auto____12902 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____12902))
{return or__3824__auto____12902;
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
var G__12919__delegate = function (x,y,z,args){
var or__3824__auto____12903 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12903))
{return or__3824__auto____12903;
} else
{return cljs.core.some.call(null,(function (p1__12599_SHARP_){
var or__3824__auto____12904 = p1.call(null,p1__12599_SHARP_);
if(cljs.core.truth_(or__3824__auto____12904))
{return or__3824__auto____12904;
} else
{var or__3824__auto____12905 = p2.call(null,p1__12599_SHARP_);
if(cljs.core.truth_(or__3824__auto____12905))
{return or__3824__auto____12905;
} else
{return p3.call(null,p1__12599_SHARP_);
}
}
}),args);
}
};
var G__12919 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12919__delegate.call(this, x, y, z, args);
};
G__12919.cljs$lang$maxFixedArity = 3;
G__12919.cljs$lang$applyTo = (function (arglist__12920){
var x = cljs.core.first(arglist__12920);
var y = cljs.core.first(cljs.core.next(arglist__12920));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12920)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12920)));
return G__12919__delegate(x, y, z, args);
});
G__12919.cljs$lang$arity$variadic = G__12919__delegate;
return G__12919;
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
var G__12921__delegate = function (p1,p2,p3,ps){
var ps__12906 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__12600_SHARP_){
return p1__12600_SHARP_.call(null,x);
}),ps__12906);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12601_SHARP_){
var or__3824__auto____12911 = p1__12601_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12911))
{return or__3824__auto____12911;
} else
{return p1__12601_SHARP_.call(null,y);
}
}),ps__12906);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12602_SHARP_){
var or__3824__auto____12912 = p1__12602_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____12912))
{return or__3824__auto____12912;
} else
{var or__3824__auto____12913 = p1__12602_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____12913))
{return or__3824__auto____12913;
} else
{return p1__12602_SHARP_.call(null,z);
}
}
}),ps__12906);
});
var spn__4 = (function() { 
var G__12922__delegate = function (x,y,z,args){
var or__3824__auto____12914 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12914))
{return or__3824__auto____12914;
} else
{return cljs.core.some.call(null,(function (p1__12603_SHARP_){
return cljs.core.some.call(null,p1__12603_SHARP_,args);
}),ps__12906);
}
};
var G__12922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12922__delegate.call(this, x, y, z, args);
};
G__12922.cljs$lang$maxFixedArity = 3;
G__12922.cljs$lang$applyTo = (function (arglist__12923){
var x = cljs.core.first(arglist__12923);
var y = cljs.core.first(cljs.core.next(arglist__12923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12923)));
return G__12922__delegate(x, y, z, args);
});
G__12922.cljs$lang$arity$variadic = G__12922__delegate;
return G__12922;
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
var G__12921 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12921__delegate.call(this, p1, p2, p3, ps);
};
G__12921.cljs$lang$maxFixedArity = 3;
G__12921.cljs$lang$applyTo = (function (arglist__12924){
var p1 = cljs.core.first(arglist__12924);
var p2 = cljs.core.first(cljs.core.next(arglist__12924));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12924)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12924)));
return G__12921__delegate(p1, p2, p3, ps);
});
G__12921.cljs$lang$arity$variadic = G__12921__delegate;
return G__12921;
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
var temp__3974__auto____12943 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12943)
{var s__12944 = temp__3974__auto____12943;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12944))
{var c__12945 = cljs.core.chunk_first.call(null,s__12944);
var size__12946 = cljs.core.count.call(null,c__12945);
var b__12947 = cljs.core.chunk_buffer.call(null,size__12946);
var n__6925__auto____12948 = size__12946;
var i__12949 = 0;
while(true){
if((i__12949 < n__6925__auto____12948))
{cljs.core.chunk_append.call(null,b__12947,f.call(null,cljs.core._nth.call(null,c__12945,i__12949)));
{
var G__12961 = (i__12949 + 1);
i__12949 = G__12961;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12947),map.call(null,f,cljs.core.chunk_rest.call(null,s__12944)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12944)),map.call(null,f,cljs.core.rest.call(null,s__12944)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12950 = cljs.core.seq.call(null,c1);
var s2__12951 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____12952 = s1__12950;
if(and__3822__auto____12952)
{return s2__12951;
} else
{return and__3822__auto____12952;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12950),cljs.core.first.call(null,s2__12951)),map.call(null,f,cljs.core.rest.call(null,s1__12950),cljs.core.rest.call(null,s2__12951)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12953 = cljs.core.seq.call(null,c1);
var s2__12954 = cljs.core.seq.call(null,c2);
var s3__12955 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____12956 = s1__12953;
if(and__3822__auto____12956)
{var and__3822__auto____12957 = s2__12954;
if(and__3822__auto____12957)
{return s3__12955;
} else
{return and__3822__auto____12957;
}
} else
{return and__3822__auto____12956;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12953),cljs.core.first.call(null,s2__12954),cljs.core.first.call(null,s3__12955)),map.call(null,f,cljs.core.rest.call(null,s1__12953),cljs.core.rest.call(null,s2__12954),cljs.core.rest.call(null,s3__12955)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__12962__delegate = function (f,c1,c2,c3,colls){
var step__12960 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12959 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12959))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12959),step.call(null,map.call(null,cljs.core.rest,ss__12959)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__12764_SHARP_){
return cljs.core.apply.call(null,f,p1__12764_SHARP_);
}),step__12960.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12962 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12962__delegate.call(this, f, c1, c2, c3, colls);
};
G__12962.cljs$lang$maxFixedArity = 4;
G__12962.cljs$lang$applyTo = (function (arglist__12963){
var f = cljs.core.first(arglist__12963);
var c1 = cljs.core.first(cljs.core.next(arglist__12963));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12963)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12963))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12963))));
return G__12962__delegate(f, c1, c2, c3, colls);
});
G__12962.cljs$lang$arity$variadic = G__12962__delegate;
return G__12962;
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
{var temp__3974__auto____12966 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12966)
{var s__12967 = temp__3974__auto____12966;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12967),take.call(null,(n - 1),cljs.core.rest.call(null,s__12967)));
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
var step__12973 = (function (n,coll){
while(true){
var s__12971 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12972 = (n > 0);
if(and__3822__auto____12972)
{return s__12971;
} else
{return and__3822__auto____12972;
}
})()))
{{
var G__12974 = (n - 1);
var G__12975 = cljs.core.rest.call(null,s__12971);
n = G__12974;
coll = G__12975;
continue;
}
} else
{return s__12971;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12973.call(null,n,coll);
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
var s__12978 = cljs.core.seq.call(null,coll);
var lead__12979 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__12979)
{{
var G__12980 = cljs.core.next.call(null,s__12978);
var G__12981 = cljs.core.next.call(null,lead__12979);
s__12978 = G__12980;
lead__12979 = G__12981;
continue;
}
} else
{return s__12978;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12987 = (function (pred,coll){
while(true){
var s__12985 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____12986 = s__12985;
if(and__3822__auto____12986)
{return pred.call(null,cljs.core.first.call(null,s__12985));
} else
{return and__3822__auto____12986;
}
})()))
{{
var G__12988 = pred;
var G__12989 = cljs.core.rest.call(null,s__12985);
pred = G__12988;
coll = G__12989;
continue;
}
} else
{return s__12985;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12987.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12992 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12992)
{var s__12993 = temp__3974__auto____12992;
return cljs.core.concat.call(null,s__12993,cycle.call(null,s__12993));
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
var s1__12998 = cljs.core.seq.call(null,c1);
var s2__12999 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____13000 = s1__12998;
if(and__3822__auto____13000)
{return s2__12999;
} else
{return and__3822__auto____13000;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12998),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12999),interleave.call(null,cljs.core.rest.call(null,s1__12998),cljs.core.rest.call(null,s2__12999))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__13002__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__13001 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__13001))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__13001),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__13001)));
} else
{return null;
}
}),null));
};
var G__13002 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13002__delegate.call(this, c1, c2, colls);
};
G__13002.cljs$lang$maxFixedArity = 2;
G__13002.cljs$lang$applyTo = (function (arglist__13003){
var c1 = cljs.core.first(arglist__13003);
var c2 = cljs.core.first(cljs.core.next(arglist__13003));
var colls = cljs.core.rest(cljs.core.next(arglist__13003));
return G__13002__delegate(c1, c2, colls);
});
G__13002.cljs$lang$arity$variadic = G__13002__delegate;
return G__13002;
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
var cat__13013 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____13011 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____13011)
{var coll__13012 = temp__3971__auto____13011;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__13012),cat.call(null,cljs.core.rest.call(null,coll__13012),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__13013.call(null,null,colls);
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
var G__13014__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__13014 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13014__delegate.call(this, f, coll, colls);
};
G__13014.cljs$lang$maxFixedArity = 2;
G__13014.cljs$lang$applyTo = (function (arglist__13015){
var f = cljs.core.first(arglist__13015);
var coll = cljs.core.first(cljs.core.next(arglist__13015));
var colls = cljs.core.rest(cljs.core.next(arglist__13015));
return G__13014__delegate(f, coll, colls);
});
G__13014.cljs$lang$arity$variadic = G__13014__delegate;
return G__13014;
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
var temp__3974__auto____13025 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13025)
{var s__13026 = temp__3974__auto____13025;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13026))
{var c__13027 = cljs.core.chunk_first.call(null,s__13026);
var size__13028 = cljs.core.count.call(null,c__13027);
var b__13029 = cljs.core.chunk_buffer.call(null,size__13028);
var n__6925__auto____13030 = size__13028;
var i__13031 = 0;
while(true){
if((i__13031 < n__6925__auto____13030))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__13027,i__13031))))
{cljs.core.chunk_append.call(null,b__13029,cljs.core._nth.call(null,c__13027,i__13031));
} else
{}
{
var G__13034 = (i__13031 + 1);
i__13031 = G__13034;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13029),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__13026)));
} else
{var f__13032 = cljs.core.first.call(null,s__13026);
var r__13033 = cljs.core.rest.call(null,s__13026);
if(cljs.core.truth_(pred.call(null,f__13032)))
{return cljs.core.cons.call(null,f__13032,filter.call(null,pred,r__13033));
} else
{return filter.call(null,pred,r__13033);
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
var walk__13037 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__13037.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__13035_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__13035_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__13041__13042 = to;
if(G__13041__13042)
{if((function (){var or__3824__auto____13043 = (G__13041__13042.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____13043)
{return or__3824__auto____13043;
} else
{return G__13041__13042.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__13041__13042.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__13041__13042);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__13041__13042);
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
var G__13044__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__13044 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13044__delegate.call(this, f, c1, c2, c3, colls);
};
G__13044.cljs$lang$maxFixedArity = 4;
G__13044.cljs$lang$applyTo = (function (arglist__13045){
var f = cljs.core.first(arglist__13045);
var c1 = cljs.core.first(cljs.core.next(arglist__13045));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13045)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13045))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13045))));
return G__13044__delegate(f, c1, c2, c3, colls);
});
G__13044.cljs$lang$arity$variadic = G__13044__delegate;
return G__13044;
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
var temp__3974__auto____13052 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13052)
{var s__13053 = temp__3974__auto____13052;
var p__13054 = cljs.core.take.call(null,n,s__13053);
if((n === cljs.core.count.call(null,p__13054)))
{return cljs.core.cons.call(null,p__13054,partition.call(null,n,step,cljs.core.drop.call(null,step,s__13053)));
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
var temp__3974__auto____13055 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13055)
{var s__13056 = temp__3974__auto____13055;
var p__13057 = cljs.core.take.call(null,n,s__13056);
if((n === cljs.core.count.call(null,p__13057)))
{return cljs.core.cons.call(null,p__13057,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__13056)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__13057,pad)));
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
var sentinel__13062 = cljs.core.lookup_sentinel;
var m__13063 = m;
var ks__13064 = cljs.core.seq.call(null,ks);
while(true){
if(ks__13064)
{var m__13065 = cljs.core._lookup.call(null,m__13063,cljs.core.first.call(null,ks__13064),sentinel__13062);
if((sentinel__13062 === m__13065))
{return not_found;
} else
{{
var G__13066 = sentinel__13062;
var G__13067 = m__13065;
var G__13068 = cljs.core.next.call(null,ks__13064);
sentinel__13062 = G__13066;
m__13063 = G__13067;
ks__13064 = G__13068;
continue;
}
}
} else
{return m__13063;
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
cljs.core.assoc_in = (function assoc_in(m,p__13069,v){
var vec__13074__13075 = p__13069;
var k__13076 = cljs.core.nth.call(null,vec__13074__13075,0,null);
var ks__13077 = cljs.core.nthnext.call(null,vec__13074__13075,1);
if(cljs.core.truth_(ks__13077))
{return cljs.core.assoc.call(null,m,k__13076,assoc_in.call(null,cljs.core._lookup.call(null,m,k__13076,null),ks__13077,v));
} else
{return cljs.core.assoc.call(null,m,k__13076,v);
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
var update_in__delegate = function (m,p__13078,f,args){
var vec__13083__13084 = p__13078;
var k__13085 = cljs.core.nth.call(null,vec__13083__13084,0,null);
var ks__13086 = cljs.core.nthnext.call(null,vec__13083__13084,1);
if(cljs.core.truth_(ks__13086))
{return cljs.core.assoc.call(null,m,k__13085,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__13085,null),ks__13086,f,args));
} else
{return cljs.core.assoc.call(null,m,k__13085,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__13085,null),args));
}
};
var update_in = function (m,p__13078,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__13078, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__13087){
var m = cljs.core.first(arglist__13087);
var p__13078 = cljs.core.first(cljs.core.next(arglist__13087));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13087)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13087)));
return update_in__delegate(m, p__13078, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13090 = this;
var h__6579__auto____13091 = this__13090.__hash;
if(!((h__6579__auto____13091 == null)))
{return h__6579__auto____13091;
} else
{var h__6579__auto____13092 = cljs.core.hash_coll.call(null,coll);
this__13090.__hash = h__6579__auto____13092;
return h__6579__auto____13092;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13093 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13094 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13095 = this;
var new_array__13096 = this__13095.array.slice();
(new_array__13096[k] = v);
return (new cljs.core.Vector(this__13095.meta,new_array__13096,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__13127 = null;
var G__13127__2 = (function (this_sym13097,k){
var this__13099 = this;
var this_sym13097__13100 = this;
var coll__13101 = this_sym13097__13100;
return coll__13101.cljs$core$ILookup$_lookup$arity$2(coll__13101,k);
});
var G__13127__3 = (function (this_sym13098,k,not_found){
var this__13099 = this;
var this_sym13098__13102 = this;
var coll__13103 = this_sym13098__13102;
return coll__13103.cljs$core$ILookup$_lookup$arity$3(coll__13103,k,not_found);
});
G__13127 = function(this_sym13098,k,not_found){
switch(arguments.length){
case 2:
return G__13127__2.call(this,this_sym13098,k);
case 3:
return G__13127__3.call(this,this_sym13098,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13127;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym13088,args13089){
var this__13104 = this;
return this_sym13088.call.apply(this_sym13088,[this_sym13088].concat(args13089.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13105 = this;
var new_array__13106 = this__13105.array.slice();
new_array__13106.push(o);
return (new cljs.core.Vector(this__13105.meta,new_array__13106,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__13107 = this;
var this__13108 = this;
return cljs.core.pr_str.call(null,this__13108);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__13109 = this;
return cljs.core.ci_reduce.call(null,this__13109.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__13110 = this;
return cljs.core.ci_reduce.call(null,this__13110.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13111 = this;
if((this__13111.array.length > 0))
{var vector_seq__13112 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__13111.array.length))
{return cljs.core.cons.call(null,(this__13111.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__13112.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13113 = this;
return this__13113.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13114 = this;
var count__13115 = this__13114.array.length;
if((count__13115 > 0))
{return (this__13114.array[(count__13115 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13116 = this;
if((this__13116.array.length > 0))
{var new_array__13117 = this__13116.array.slice();
new_array__13117.pop();
return (new cljs.core.Vector(this__13116.meta,new_array__13117,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13118 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13119 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13120 = this;
return (new cljs.core.Vector(meta,this__13120.array,this__13120.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13121 = this;
return this__13121.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13122 = this;
if((function (){var and__3822__auto____13123 = (0 <= n);
if(and__3822__auto____13123)
{return (n < this__13122.array.length);
} else
{return and__3822__auto____13123;
}
})())
{return (this__13122.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13124 = this;
if((function (){var and__3822__auto____13125 = (0 <= n);
if(and__3822__auto____13125)
{return (n < this__13124.array.length);
} else
{return and__3822__auto____13125;
}
})())
{return (this__13124.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13126 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13126.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__6700__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__6700__auto__,writer__6701__auto__){
return cljs.core._write.call(null,writer__6701__auto__,"cljs.core/VectorNode");
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
var cnt__13129 = pv.cnt;
if((cnt__13129 < 32))
{return 0;
} else
{return (((cnt__13129 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__13135 = level;
var ret__13136 = node;
while(true){
if((ll__13135 === 0))
{return ret__13136;
} else
{var embed__13137 = ret__13136;
var r__13138 = cljs.core.pv_fresh_node.call(null,edit);
var ___13139 = cljs.core.pv_aset.call(null,r__13138,0,embed__13137);
{
var G__13140 = (ll__13135 - 5);
var G__13141 = r__13138;
ll__13135 = G__13140;
ret__13136 = G__13141;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__13147 = cljs.core.pv_clone_node.call(null,parent);
var subidx__13148 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__13147,subidx__13148,tailnode);
return ret__13147;
} else
{var child__13149 = cljs.core.pv_aget.call(null,parent,subidx__13148);
if(!((child__13149 == null)))
{var node_to_insert__13150 = push_tail.call(null,pv,(level - 5),child__13149,tailnode);
cljs.core.pv_aset.call(null,ret__13147,subidx__13148,node_to_insert__13150);
return ret__13147;
} else
{var node_to_insert__13151 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__13147,subidx__13148,node_to_insert__13151);
return ret__13147;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____13155 = (0 <= i);
if(and__3822__auto____13155)
{return (i < pv.cnt);
} else
{return and__3822__auto____13155;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__13156 = pv.root;
var level__13157 = pv.shift;
while(true){
if((level__13157 > 0))
{{
var G__13158 = cljs.core.pv_aget.call(null,node__13156,((i >>> level__13157) & 31));
var G__13159 = (level__13157 - 5);
node__13156 = G__13158;
level__13157 = G__13159;
continue;
}
} else
{return node__13156.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__13162 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__13162,(i & 31),val);
return ret__13162;
} else
{var subidx__13163 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__13162,subidx__13163,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__13163),i,val));
return ret__13162;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__13169 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__13170 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__13169));
if((function (){var and__3822__auto____13171 = (new_child__13170 == null);
if(and__3822__auto____13171)
{return (subidx__13169 === 0);
} else
{return and__3822__auto____13171;
}
})())
{return null;
} else
{var ret__13172 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__13172,subidx__13169,new_child__13170);
return ret__13172;
}
} else
{if((subidx__13169 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__13173 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__13173,subidx__13169,null);
return ret__13173;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13176 = this;
return (new cljs.core.TransientVector(this__13176.cnt,this__13176.shift,cljs.core.tv_editable_root.call(null,this__13176.root),cljs.core.tv_editable_tail.call(null,this__13176.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13177 = this;
var h__6579__auto____13178 = this__13177.__hash;
if(!((h__6579__auto____13178 == null)))
{return h__6579__auto____13178;
} else
{var h__6579__auto____13179 = cljs.core.hash_coll.call(null,coll);
this__13177.__hash = h__6579__auto____13179;
return h__6579__auto____13179;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13180 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13181 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13182 = this;
if((function (){var and__3822__auto____13183 = (0 <= k);
if(and__3822__auto____13183)
{return (k < this__13182.cnt);
} else
{return and__3822__auto____13183;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__13184 = this__13182.tail.slice();
(new_tail__13184[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__13182.meta,this__13182.cnt,this__13182.shift,this__13182.root,new_tail__13184,null));
} else
{return (new cljs.core.PersistentVector(this__13182.meta,this__13182.cnt,this__13182.shift,cljs.core.do_assoc.call(null,coll,this__13182.shift,this__13182.root,k,v),this__13182.tail,null));
}
} else
{if((k === this__13182.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__13182.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__13232 = null;
var G__13232__2 = (function (this_sym13185,k){
var this__13187 = this;
var this_sym13185__13188 = this;
var coll__13189 = this_sym13185__13188;
return coll__13189.cljs$core$ILookup$_lookup$arity$2(coll__13189,k);
});
var G__13232__3 = (function (this_sym13186,k,not_found){
var this__13187 = this;
var this_sym13186__13190 = this;
var coll__13191 = this_sym13186__13190;
return coll__13191.cljs$core$ILookup$_lookup$arity$3(coll__13191,k,not_found);
});
G__13232 = function(this_sym13186,k,not_found){
switch(arguments.length){
case 2:
return G__13232__2.call(this,this_sym13186,k);
case 3:
return G__13232__3.call(this,this_sym13186,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13232;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym13174,args13175){
var this__13192 = this;
return this_sym13174.call.apply(this_sym13174,[this_sym13174].concat(args13175.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__13193 = this;
var step_init__13194 = [0,init];
var i__13195 = 0;
while(true){
if((i__13195 < this__13193.cnt))
{var arr__13196 = cljs.core.array_for.call(null,v,i__13195);
var len__13197 = arr__13196.length;
var init__13201 = (function (){var j__13198 = 0;
var init__13199 = (step_init__13194[1]);
while(true){
if((j__13198 < len__13197))
{var init__13200 = f.call(null,init__13199,(j__13198 + i__13195),(arr__13196[j__13198]));
if(cljs.core.reduced_QMARK_.call(null,init__13200))
{return init__13200;
} else
{{
var G__13233 = (j__13198 + 1);
var G__13234 = init__13200;
j__13198 = G__13233;
init__13199 = G__13234;
continue;
}
}
} else
{(step_init__13194[0] = len__13197);
(step_init__13194[1] = init__13199);
return init__13199;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__13201))
{return cljs.core.deref.call(null,init__13201);
} else
{{
var G__13235 = (i__13195 + (step_init__13194[0]));
i__13195 = G__13235;
continue;
}
}
} else
{return (step_init__13194[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13202 = this;
if(((this__13202.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__13203 = this__13202.tail.slice();
new_tail__13203.push(o);
return (new cljs.core.PersistentVector(this__13202.meta,(this__13202.cnt + 1),this__13202.shift,this__13202.root,new_tail__13203,null));
} else
{var root_overflow_QMARK___13204 = ((this__13202.cnt >>> 5) > (1 << this__13202.shift));
var new_shift__13205 = ((root_overflow_QMARK___13204)?(this__13202.shift + 5):this__13202.shift);
var new_root__13207 = ((root_overflow_QMARK___13204)?(function (){var n_r__13206 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__13206,0,this__13202.root);
cljs.core.pv_aset.call(null,n_r__13206,1,cljs.core.new_path.call(null,null,this__13202.shift,(new cljs.core.VectorNode(null,this__13202.tail))));
return n_r__13206;
})():cljs.core.push_tail.call(null,coll,this__13202.shift,this__13202.root,(new cljs.core.VectorNode(null,this__13202.tail))));
return (new cljs.core.PersistentVector(this__13202.meta,(this__13202.cnt + 1),new_shift__13205,new_root__13207,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13208 = this;
if((this__13208.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__13208.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__13209 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__13210 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__13211 = this;
var this__13212 = this;
return cljs.core.pr_str.call(null,this__13212);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__13213 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__13214 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13215 = this;
if((this__13215.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13216 = this;
return this__13216.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13217 = this;
if((this__13217.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__13217.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13218 = this;
if((this__13218.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__13218.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13218.meta);
} else
{if((1 < (this__13218.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__13218.meta,(this__13218.cnt - 1),this__13218.shift,this__13218.root,this__13218.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__13219 = cljs.core.array_for.call(null,coll,(this__13218.cnt - 2));
var nr__13220 = cljs.core.pop_tail.call(null,coll,this__13218.shift,this__13218.root);
var new_root__13221 = (((nr__13220 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__13220);
var cnt_1__13222 = (this__13218.cnt - 1);
if((function (){var and__3822__auto____13223 = (5 < this__13218.shift);
if(and__3822__auto____13223)
{return (cljs.core.pv_aget.call(null,new_root__13221,1) == null);
} else
{return and__3822__auto____13223;
}
})())
{return (new cljs.core.PersistentVector(this__13218.meta,cnt_1__13222,(this__13218.shift - 5),cljs.core.pv_aget.call(null,new_root__13221,0),new_tail__13219,null));
} else
{return (new cljs.core.PersistentVector(this__13218.meta,cnt_1__13222,this__13218.shift,new_root__13221,new_tail__13219,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13224 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13225 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13226 = this;
return (new cljs.core.PersistentVector(meta,this__13226.cnt,this__13226.shift,this__13226.root,this__13226.tail,this__13226.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13227 = this;
return this__13227.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13228 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13229 = this;
if((function (){var and__3822__auto____13230 = (0 <= n);
if(and__3822__auto____13230)
{return (n < this__13229.cnt);
} else
{return and__3822__auto____13230;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13231 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13231.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__13236 = xs.length;
var xs__13237 = (((no_clone === true))?xs:xs.slice());
if((l__13236 < 32))
{return (new cljs.core.PersistentVector(null,l__13236,5,cljs.core.PersistentVector.EMPTY_NODE,xs__13237,null));
} else
{var node__13238 = xs__13237.slice(0,32);
var v__13239 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__13238,null));
var i__13240 = 32;
var out__13241 = cljs.core._as_transient.call(null,v__13239);
while(true){
if((i__13240 < l__13236))
{{
var G__13242 = (i__13240 + 1);
var G__13243 = cljs.core.conj_BANG_.call(null,out__13241,(xs__13237[i__13240]));
i__13240 = G__13242;
out__13241 = G__13243;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13241);
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
vector.cljs$lang$applyTo = (function (arglist__13244){
var args = cljs.core.seq(arglist__13244);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13245 = this;
var h__6579__auto____13246 = this__13245.__hash;
if(!((h__6579__auto____13246 == null)))
{return h__6579__auto____13246;
} else
{var h__6579__auto____13247 = cljs.core.hash_coll.call(null,coll);
this__13245.__hash = h__6579__auto____13247;
return h__6579__auto____13247;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__13248 = this;
if(((this__13248.off + 1) < this__13248.node.length))
{var s__13249 = cljs.core.chunked_seq.call(null,this__13248.vec,this__13248.node,this__13248.i,(this__13248.off + 1));
if((s__13249 == null))
{return null;
} else
{return s__13249;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13250 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13251 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13252 = this;
return (this__13252.node[this__13252.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13253 = this;
if(((this__13253.off + 1) < this__13253.node.length))
{var s__13254 = cljs.core.chunked_seq.call(null,this__13253.vec,this__13253.node,this__13253.i,(this__13253.off + 1));
if((s__13254 == null))
{return cljs.core.List.EMPTY;
} else
{return s__13254;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__13255 = this;
var l__13256 = this__13255.node.length;
var s__13257 = ((((this__13255.i + l__13256) < cljs.core._count.call(null,this__13255.vec)))?cljs.core.chunked_seq.call(null,this__13255.vec,(this__13255.i + l__13256),0):null);
if((s__13257 == null))
{return null;
} else
{return s__13257;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13258 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__13259 = this;
return cljs.core.chunked_seq.call(null,this__13259.vec,this__13259.node,this__13259.i,this__13259.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__13260 = this;
return this__13260.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13261 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13261.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__13262 = this;
return cljs.core.array_chunk.call(null,this__13262.node,this__13262.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__13263 = this;
var l__13264 = this__13263.node.length;
var s__13265 = ((((this__13263.i + l__13264) < cljs.core._count.call(null,this__13263.vec)))?cljs.core.chunked_seq.call(null,this__13263.vec,(this__13263.i + l__13264),0):null);
if((s__13265 == null))
{return cljs.core.List.EMPTY;
} else
{return s__13265;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13268 = this;
var h__6579__auto____13269 = this__13268.__hash;
if(!((h__6579__auto____13269 == null)))
{return h__6579__auto____13269;
} else
{var h__6579__auto____13270 = cljs.core.hash_coll.call(null,coll);
this__13268.__hash = h__6579__auto____13270;
return h__6579__auto____13270;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13271 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13272 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__13273 = this;
var v_pos__13274 = (this__13273.start + key);
return (new cljs.core.Subvec(this__13273.meta,cljs.core._assoc.call(null,this__13273.v,v_pos__13274,val),this__13273.start,((this__13273.end > (v_pos__13274 + 1)) ? this__13273.end : (v_pos__13274 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__13300 = null;
var G__13300__2 = (function (this_sym13275,k){
var this__13277 = this;
var this_sym13275__13278 = this;
var coll__13279 = this_sym13275__13278;
return coll__13279.cljs$core$ILookup$_lookup$arity$2(coll__13279,k);
});
var G__13300__3 = (function (this_sym13276,k,not_found){
var this__13277 = this;
var this_sym13276__13280 = this;
var coll__13281 = this_sym13276__13280;
return coll__13281.cljs$core$ILookup$_lookup$arity$3(coll__13281,k,not_found);
});
G__13300 = function(this_sym13276,k,not_found){
switch(arguments.length){
case 2:
return G__13300__2.call(this,this_sym13276,k);
case 3:
return G__13300__3.call(this,this_sym13276,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13300;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym13266,args13267){
var this__13282 = this;
return this_sym13266.call.apply(this_sym13266,[this_sym13266].concat(args13267.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13283 = this;
return (new cljs.core.Subvec(this__13283.meta,cljs.core._assoc_n.call(null,this__13283.v,this__13283.end,o),this__13283.start,(this__13283.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__13284 = this;
var this__13285 = this;
return cljs.core.pr_str.call(null,this__13285);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__13286 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__13287 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13288 = this;
var subvec_seq__13289 = (function subvec_seq(i){
if((i === this__13288.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__13288.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__13289.call(null,this__13288.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13290 = this;
return (this__13290.end - this__13290.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13291 = this;
return cljs.core._nth.call(null,this__13291.v,(this__13291.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13292 = this;
if((this__13292.start === this__13292.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__13292.meta,this__13292.v,this__13292.start,(this__13292.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13293 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13294 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13295 = this;
return (new cljs.core.Subvec(meta,this__13295.v,this__13295.start,this__13295.end,this__13295.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13296 = this;
return this__13296.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13297 = this;
return cljs.core._nth.call(null,this__13297.v,(this__13297.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13298 = this;
return cljs.core._nth.call(null,this__13298.v,(this__13298.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13299 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13299.meta);
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
var ret__13302 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__13302,0,tl.length);
return ret__13302;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__13306 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__13307 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__13306,subidx__13307,(((level === 5))?tail_node:(function (){var child__13308 = cljs.core.pv_aget.call(null,ret__13306,subidx__13307);
if(!((child__13308 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__13308,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__13306;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__13313 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__13314 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__13315 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__13313,subidx__13314));
if((function (){var and__3822__auto____13316 = (new_child__13315 == null);
if(and__3822__auto____13316)
{return (subidx__13314 === 0);
} else
{return and__3822__auto____13316;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__13313,subidx__13314,new_child__13315);
return node__13313;
}
} else
{if((subidx__13314 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__13313,subidx__13314,null);
return node__13313;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____13321 = (0 <= i);
if(and__3822__auto____13321)
{return (i < tv.cnt);
} else
{return and__3822__auto____13321;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__13322 = tv.root;
var node__13323 = root__13322;
var level__13324 = tv.shift;
while(true){
if((level__13324 > 0))
{{
var G__13325 = cljs.core.tv_ensure_editable.call(null,root__13322.edit,cljs.core.pv_aget.call(null,node__13323,((i >>> level__13324) & 31)));
var G__13326 = (level__13324 - 5);
node__13323 = G__13325;
level__13324 = G__13326;
continue;
}
} else
{return node__13323.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__13366 = null;
var G__13366__2 = (function (this_sym13329,k){
var this__13331 = this;
var this_sym13329__13332 = this;
var coll__13333 = this_sym13329__13332;
return coll__13333.cljs$core$ILookup$_lookup$arity$2(coll__13333,k);
});
var G__13366__3 = (function (this_sym13330,k,not_found){
var this__13331 = this;
var this_sym13330__13334 = this;
var coll__13335 = this_sym13330__13334;
return coll__13335.cljs$core$ILookup$_lookup$arity$3(coll__13335,k,not_found);
});
G__13366 = function(this_sym13330,k,not_found){
switch(arguments.length){
case 2:
return G__13366__2.call(this,this_sym13330,k);
case 3:
return G__13366__3.call(this,this_sym13330,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13366;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym13327,args13328){
var this__13336 = this;
return this_sym13327.call.apply(this_sym13327,[this_sym13327].concat(args13328.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13337 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13338 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13339 = this;
if(this__13339.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13340 = this;
if((function (){var and__3822__auto____13341 = (0 <= n);
if(and__3822__auto____13341)
{return (n < this__13340.cnt);
} else
{return and__3822__auto____13341;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13342 = this;
if(this__13342.root.edit)
{return this__13342.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__13343 = this;
if(this__13343.root.edit)
{if((function (){var and__3822__auto____13344 = (0 <= n);
if(and__3822__auto____13344)
{return (n < this__13343.cnt);
} else
{return and__3822__auto____13344;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__13343.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__13349 = (function go(level,node){
var node__13347 = cljs.core.tv_ensure_editable.call(null,this__13343.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__13347,(n & 31),val);
return node__13347;
} else
{var subidx__13348 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__13347,subidx__13348,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__13347,subidx__13348)));
return node__13347;
}
}).call(null,this__13343.shift,this__13343.root);
this__13343.root = new_root__13349;
return tcoll;
}
} else
{if((n === this__13343.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__13343.cnt)].join('')));
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
var this__13350 = this;
if(this__13350.root.edit)
{if((this__13350.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__13350.cnt))
{this__13350.cnt = 0;
return tcoll;
} else
{if((((this__13350.cnt - 1) & 31) > 0))
{this__13350.cnt = (this__13350.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__13351 = cljs.core.editable_array_for.call(null,tcoll,(this__13350.cnt - 2));
var new_root__13353 = (function (){var nr__13352 = cljs.core.tv_pop_tail.call(null,tcoll,this__13350.shift,this__13350.root);
if(!((nr__13352 == null)))
{return nr__13352;
} else
{return (new cljs.core.VectorNode(this__13350.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____13354 = (5 < this__13350.shift);
if(and__3822__auto____13354)
{return (cljs.core.pv_aget.call(null,new_root__13353,1) == null);
} else
{return and__3822__auto____13354;
}
})())
{var new_root__13355 = cljs.core.tv_ensure_editable.call(null,this__13350.root.edit,cljs.core.pv_aget.call(null,new_root__13353,0));
this__13350.root = new_root__13355;
this__13350.shift = (this__13350.shift - 5);
this__13350.cnt = (this__13350.cnt - 1);
this__13350.tail = new_tail__13351;
return tcoll;
} else
{this__13350.root = new_root__13353;
this__13350.cnt = (this__13350.cnt - 1);
this__13350.tail = new_tail__13351;
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
var this__13356 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13357 = this;
if(this__13357.root.edit)
{if(((this__13357.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__13357.tail[(this__13357.cnt & 31)] = o);
this__13357.cnt = (this__13357.cnt + 1);
return tcoll;
} else
{var tail_node__13358 = (new cljs.core.VectorNode(this__13357.root.edit,this__13357.tail));
var new_tail__13359 = cljs.core.make_array.call(null,32);
(new_tail__13359[0] = o);
this__13357.tail = new_tail__13359;
if(((this__13357.cnt >>> 5) > (1 << this__13357.shift)))
{var new_root_array__13360 = cljs.core.make_array.call(null,32);
var new_shift__13361 = (this__13357.shift + 5);
(new_root_array__13360[0] = this__13357.root);
(new_root_array__13360[1] = cljs.core.new_path.call(null,this__13357.root.edit,this__13357.shift,tail_node__13358));
this__13357.root = (new cljs.core.VectorNode(this__13357.root.edit,new_root_array__13360));
this__13357.shift = new_shift__13361;
this__13357.cnt = (this__13357.cnt + 1);
return tcoll;
} else
{var new_root__13362 = cljs.core.tv_push_tail.call(null,tcoll,this__13357.shift,this__13357.root,tail_node__13358);
this__13357.root = new_root__13362;
this__13357.cnt = (this__13357.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13363 = this;
if(this__13363.root.edit)
{this__13363.root.edit = null;
var len__13364 = (this__13363.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__13365 = cljs.core.make_array.call(null,len__13364);
cljs.core.array_copy.call(null,this__13363.tail,0,trimmed_tail__13365,0,len__13364);
return (new cljs.core.PersistentVector(null,this__13363.cnt,this__13363.shift,this__13363.root,trimmed_tail__13365,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13367 = this;
var h__6579__auto____13368 = this__13367.__hash;
if(!((h__6579__auto____13368 == null)))
{return h__6579__auto____13368;
} else
{var h__6579__auto____13369 = cljs.core.hash_coll.call(null,coll);
this__13367.__hash = h__6579__auto____13369;
return h__6579__auto____13369;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13370 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__13371 = this;
var this__13372 = this;
return cljs.core.pr_str.call(null,this__13372);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13373 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13374 = this;
return cljs.core._first.call(null,this__13374.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13375 = this;
var temp__3971__auto____13376 = cljs.core.next.call(null,this__13375.front);
if(temp__3971__auto____13376)
{var f1__13377 = temp__3971__auto____13376;
return (new cljs.core.PersistentQueueSeq(this__13375.meta,f1__13377,this__13375.rear,null));
} else
{if((this__13375.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13375.meta,this__13375.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13378 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13379 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13379.front,this__13379.rear,this__13379.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13380 = this;
return this__13380.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13381 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13381.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13382 = this;
var h__6579__auto____13383 = this__13382.__hash;
if(!((h__6579__auto____13383 == null)))
{return h__6579__auto____13383;
} else
{var h__6579__auto____13384 = cljs.core.hash_coll.call(null,coll);
this__13382.__hash = h__6579__auto____13384;
return h__6579__auto____13384;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13385 = this;
if(cljs.core.truth_(this__13385.front))
{return (new cljs.core.PersistentQueue(this__13385.meta,(this__13385.count + 1),this__13385.front,cljs.core.conj.call(null,(function (){var or__3824__auto____13386 = this__13385.rear;
if(cljs.core.truth_(or__3824__auto____13386))
{return or__3824__auto____13386;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__13385.meta,(this__13385.count + 1),cljs.core.conj.call(null,this__13385.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__13387 = this;
var this__13388 = this;
return cljs.core.pr_str.call(null,this__13388);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13389 = this;
var rear__13390 = cljs.core.seq.call(null,this__13389.rear);
if(cljs.core.truth_((function (){var or__3824__auto____13391 = this__13389.front;
if(cljs.core.truth_(or__3824__auto____13391))
{return or__3824__auto____13391;
} else
{return rear__13390;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13389.front,cljs.core.seq.call(null,rear__13390),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13392 = this;
return this__13392.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13393 = this;
return cljs.core._first.call(null,this__13393.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13394 = this;
if(cljs.core.truth_(this__13394.front))
{var temp__3971__auto____13395 = cljs.core.next.call(null,this__13394.front);
if(temp__3971__auto____13395)
{var f1__13396 = temp__3971__auto____13395;
return (new cljs.core.PersistentQueue(this__13394.meta,(this__13394.count - 1),f1__13396,this__13394.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__13394.meta,(this__13394.count - 1),cljs.core.seq.call(null,this__13394.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13397 = this;
return cljs.core.first.call(null,this__13397.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13398 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13399 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13400 = this;
return (new cljs.core.PersistentQueue(meta,this__13400.count,this__13400.front,this__13400.rear,this__13400.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13401 = this;
return this__13401.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13402 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13403 = this;
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
var len__13406 = array.length;
var i__13407 = 0;
while(true){
if((i__13407 < len__13406))
{if((k === (array[i__13407])))
{return i__13407;
} else
{{
var G__13408 = (i__13407 + incr);
i__13407 = G__13408;
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
var a__13411 = cljs.core.hash.call(null,a);
var b__13412 = cljs.core.hash.call(null,b);
if((a__13411 < b__13412))
{return -1;
} else
{if((a__13411 > b__13412))
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
var ks__13420 = m.keys;
var len__13421 = ks__13420.length;
var so__13422 = m.strobj;
var out__13423 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__13424 = 0;
var out__13425 = cljs.core.transient$.call(null,out__13423);
while(true){
if((i__13424 < len__13421))
{var k__13426 = (ks__13420[i__13424]);
{
var G__13427 = (i__13424 + 1);
var G__13428 = cljs.core.assoc_BANG_.call(null,out__13425,k__13426,(so__13422[k__13426]));
i__13424 = G__13427;
out__13425 = G__13428;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__13425,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__13434 = {};
var l__13435 = ks.length;
var i__13436 = 0;
while(true){
if((i__13436 < l__13435))
{var k__13437 = (ks[i__13436]);
(new_obj__13434[k__13437] = (obj[k__13437]));
{
var G__13438 = (i__13436 + 1);
i__13436 = G__13438;
continue;
}
} else
{}
break;
}
return new_obj__13434;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13441 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13442 = this;
var h__6579__auto____13443 = this__13442.__hash;
if(!((h__6579__auto____13443 == null)))
{return h__6579__auto____13443;
} else
{var h__6579__auto____13444 = cljs.core.hash_imap.call(null,coll);
this__13442.__hash = h__6579__auto____13444;
return h__6579__auto____13444;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13445 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13446 = this;
if((function (){var and__3822__auto____13447 = goog.isString(k);
if(and__3822__auto____13447)
{return !((cljs.core.scan_array.call(null,1,k,this__13446.keys) == null));
} else
{return and__3822__auto____13447;
}
})())
{return (this__13446.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13448 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____13449 = (this__13448.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____13449)
{return or__3824__auto____13449;
} else
{return (this__13448.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__13448.keys) == null)))
{var new_strobj__13450 = cljs.core.obj_clone.call(null,this__13448.strobj,this__13448.keys);
(new_strobj__13450[k] = v);
return (new cljs.core.ObjMap(this__13448.meta,this__13448.keys,new_strobj__13450,(this__13448.update_count + 1),null));
} else
{var new_strobj__13451 = cljs.core.obj_clone.call(null,this__13448.strobj,this__13448.keys);
var new_keys__13452 = this__13448.keys.slice();
(new_strobj__13451[k] = v);
new_keys__13452.push(k);
return (new cljs.core.ObjMap(this__13448.meta,new_keys__13452,new_strobj__13451,(this__13448.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13453 = this;
if((function (){var and__3822__auto____13454 = goog.isString(k);
if(and__3822__auto____13454)
{return !((cljs.core.scan_array.call(null,1,k,this__13453.keys) == null));
} else
{return and__3822__auto____13454;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__13476 = null;
var G__13476__2 = (function (this_sym13455,k){
var this__13457 = this;
var this_sym13455__13458 = this;
var coll__13459 = this_sym13455__13458;
return coll__13459.cljs$core$ILookup$_lookup$arity$2(coll__13459,k);
});
var G__13476__3 = (function (this_sym13456,k,not_found){
var this__13457 = this;
var this_sym13456__13460 = this;
var coll__13461 = this_sym13456__13460;
return coll__13461.cljs$core$ILookup$_lookup$arity$3(coll__13461,k,not_found);
});
G__13476 = function(this_sym13456,k,not_found){
switch(arguments.length){
case 2:
return G__13476__2.call(this,this_sym13456,k);
case 3:
return G__13476__3.call(this,this_sym13456,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13476;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym13439,args13440){
var this__13462 = this;
return this_sym13439.call.apply(this_sym13439,[this_sym13439].concat(args13440.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13463 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__13464 = this;
var this__13465 = this;
return cljs.core.pr_str.call(null,this__13465);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13466 = this;
if((this__13466.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__13429_SHARP_){
return cljs.core.vector.call(null,p1__13429_SHARP_,(this__13466.strobj[p1__13429_SHARP_]));
}),this__13466.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13467 = this;
return this__13467.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13468 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13469 = this;
return (new cljs.core.ObjMap(meta,this__13469.keys,this__13469.strobj,this__13469.update_count,this__13469.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13470 = this;
return this__13470.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13471 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13471.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13472 = this;
if((function (){var and__3822__auto____13473 = goog.isString(k);
if(and__3822__auto____13473)
{return !((cljs.core.scan_array.call(null,1,k,this__13472.keys) == null));
} else
{return and__3822__auto____13473;
}
})())
{var new_keys__13474 = this__13472.keys.slice();
var new_strobj__13475 = cljs.core.obj_clone.call(null,this__13472.strobj,this__13472.keys);
new_keys__13474.splice(cljs.core.scan_array.call(null,1,k,new_keys__13474),1);
cljs.core.js_delete.call(null,new_strobj__13475,k);
return (new cljs.core.ObjMap(this__13472.meta,new_keys__13474,new_strobj__13475,(this__13472.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13480 = this;
var h__6579__auto____13481 = this__13480.__hash;
if(!((h__6579__auto____13481 == null)))
{return h__6579__auto____13481;
} else
{var h__6579__auto____13482 = cljs.core.hash_imap.call(null,coll);
this__13480.__hash = h__6579__auto____13482;
return h__6579__auto____13482;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13483 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13484 = this;
var bucket__13485 = (this__13484.hashobj[cljs.core.hash.call(null,k)]);
var i__13486 = (cljs.core.truth_(bucket__13485)?cljs.core.scan_array.call(null,2,k,bucket__13485):null);
if(cljs.core.truth_(i__13486))
{return (bucket__13485[(i__13486 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13487 = this;
var h__13488 = cljs.core.hash.call(null,k);
var bucket__13489 = (this__13487.hashobj[h__13488]);
if(cljs.core.truth_(bucket__13489))
{var new_bucket__13490 = bucket__13489.slice();
var new_hashobj__13491 = goog.object.clone(this__13487.hashobj);
(new_hashobj__13491[h__13488] = new_bucket__13490);
var temp__3971__auto____13492 = cljs.core.scan_array.call(null,2,k,new_bucket__13490);
if(cljs.core.truth_(temp__3971__auto____13492))
{var i__13493 = temp__3971__auto____13492;
(new_bucket__13490[(i__13493 + 1)] = v);
return (new cljs.core.HashMap(this__13487.meta,this__13487.count,new_hashobj__13491,null));
} else
{new_bucket__13490.push(k,v);
return (new cljs.core.HashMap(this__13487.meta,(this__13487.count + 1),new_hashobj__13491,null));
}
} else
{var new_hashobj__13494 = goog.object.clone(this__13487.hashobj);
(new_hashobj__13494[h__13488] = [k,v]);
return (new cljs.core.HashMap(this__13487.meta,(this__13487.count + 1),new_hashobj__13494,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13495 = this;
var bucket__13496 = (this__13495.hashobj[cljs.core.hash.call(null,k)]);
var i__13497 = (cljs.core.truth_(bucket__13496)?cljs.core.scan_array.call(null,2,k,bucket__13496):null);
if(cljs.core.truth_(i__13497))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__13522 = null;
var G__13522__2 = (function (this_sym13498,k){
var this__13500 = this;
var this_sym13498__13501 = this;
var coll__13502 = this_sym13498__13501;
return coll__13502.cljs$core$ILookup$_lookup$arity$2(coll__13502,k);
});
var G__13522__3 = (function (this_sym13499,k,not_found){
var this__13500 = this;
var this_sym13499__13503 = this;
var coll__13504 = this_sym13499__13503;
return coll__13504.cljs$core$ILookup$_lookup$arity$3(coll__13504,k,not_found);
});
G__13522 = function(this_sym13499,k,not_found){
switch(arguments.length){
case 2:
return G__13522__2.call(this,this_sym13499,k);
case 3:
return G__13522__3.call(this,this_sym13499,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13522;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym13478,args13479){
var this__13505 = this;
return this_sym13478.call.apply(this_sym13478,[this_sym13478].concat(args13479.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13506 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__13507 = this;
var this__13508 = this;
return cljs.core.pr_str.call(null,this__13508);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13509 = this;
if((this__13509.count > 0))
{var hashes__13510 = cljs.core.js_keys.call(null,this__13509.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__13477_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13509.hashobj[p1__13477_SHARP_])));
}),hashes__13510);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13511 = this;
return this__13511.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13512 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13513 = this;
return (new cljs.core.HashMap(meta,this__13513.count,this__13513.hashobj,this__13513.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13514 = this;
return this__13514.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13515 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13515.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13516 = this;
var h__13517 = cljs.core.hash.call(null,k);
var bucket__13518 = (this__13516.hashobj[h__13517]);
var i__13519 = (cljs.core.truth_(bucket__13518)?cljs.core.scan_array.call(null,2,k,bucket__13518):null);
if(cljs.core.not.call(null,i__13519))
{return coll;
} else
{var new_hashobj__13520 = goog.object.clone(this__13516.hashobj);
if((3 > bucket__13518.length))
{cljs.core.js_delete.call(null,new_hashobj__13520,h__13517);
} else
{var new_bucket__13521 = bucket__13518.slice();
new_bucket__13521.splice(i__13519,2);
(new_hashobj__13520[h__13517] = new_bucket__13521);
}
return (new cljs.core.HashMap(this__13516.meta,(this__13516.count - 1),new_hashobj__13520,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13523 = ks.length;
var i__13524 = 0;
var out__13525 = cljs.core.HashMap.EMPTY;
while(true){
if((i__13524 < len__13523))
{{
var G__13526 = (i__13524 + 1);
var G__13527 = cljs.core.assoc.call(null,out__13525,(ks[i__13524]),(vs[i__13524]));
i__13524 = G__13526;
out__13525 = G__13527;
continue;
}
} else
{return out__13525;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__13531 = m.arr;
var len__13532 = arr__13531.length;
var i__13533 = 0;
while(true){
if((len__13532 <= i__13533))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__13531[i__13533]),k))
{return i__13533;
} else
{if("\uFDD0'else")
{{
var G__13534 = (i__13533 + 2);
i__13533 = G__13534;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13537 = this;
return (new cljs.core.TransientArrayMap({},this__13537.arr.length,this__13537.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13538 = this;
var h__6579__auto____13539 = this__13538.__hash;
if(!((h__6579__auto____13539 == null)))
{return h__6579__auto____13539;
} else
{var h__6579__auto____13540 = cljs.core.hash_imap.call(null,coll);
this__13538.__hash = h__6579__auto____13540;
return h__6579__auto____13540;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13541 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13542 = this;
var idx__13543 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__13543 === -1))
{return not_found;
} else
{return (this__13542.arr[(idx__13543 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13544 = this;
var idx__13545 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__13545 === -1))
{if((this__13544.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__13544.meta,(this__13544.cnt + 1),(function (){var G__13546__13547 = this__13544.arr.slice();
G__13546__13547.push(k);
G__13546__13547.push(v);
return G__13546__13547;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__13544.arr[(idx__13545 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__13544.meta,this__13544.cnt,(function (){var G__13548__13549 = this__13544.arr.slice();
(G__13548__13549[(idx__13545 + 1)] = v);
return G__13548__13549;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13550 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__13582 = null;
var G__13582__2 = (function (this_sym13551,k){
var this__13553 = this;
var this_sym13551__13554 = this;
var coll__13555 = this_sym13551__13554;
return coll__13555.cljs$core$ILookup$_lookup$arity$2(coll__13555,k);
});
var G__13582__3 = (function (this_sym13552,k,not_found){
var this__13553 = this;
var this_sym13552__13556 = this;
var coll__13557 = this_sym13552__13556;
return coll__13557.cljs$core$ILookup$_lookup$arity$3(coll__13557,k,not_found);
});
G__13582 = function(this_sym13552,k,not_found){
switch(arguments.length){
case 2:
return G__13582__2.call(this,this_sym13552,k);
case 3:
return G__13582__3.call(this,this_sym13552,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13582;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym13535,args13536){
var this__13558 = this;
return this_sym13535.call.apply(this_sym13535,[this_sym13535].concat(args13536.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13559 = this;
var len__13560 = this__13559.arr.length;
var i__13561 = 0;
var init__13562 = init;
while(true){
if((i__13561 < len__13560))
{var init__13563 = f.call(null,init__13562,(this__13559.arr[i__13561]),(this__13559.arr[(i__13561 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__13563))
{return cljs.core.deref.call(null,init__13563);
} else
{{
var G__13583 = (i__13561 + 2);
var G__13584 = init__13563;
i__13561 = G__13583;
init__13562 = G__13584;
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
var this__13564 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__13565 = this;
var this__13566 = this;
return cljs.core.pr_str.call(null,this__13566);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13567 = this;
if((this__13567.cnt > 0))
{var len__13568 = this__13567.arr.length;
var array_map_seq__13569 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__13568))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__13567.arr[i]),(this__13567.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__13569.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13570 = this;
return this__13570.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13571 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13572 = this;
return (new cljs.core.PersistentArrayMap(meta,this__13572.cnt,this__13572.arr,this__13572.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13573 = this;
return this__13573.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13574 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13574.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13575 = this;
var idx__13576 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__13576 >= 0))
{var len__13577 = this__13575.arr.length;
var new_len__13578 = (len__13577 - 2);
if((new_len__13578 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__13579 = cljs.core.make_array.call(null,new_len__13578);
var s__13580 = 0;
var d__13581 = 0;
while(true){
if((s__13580 >= len__13577))
{return (new cljs.core.PersistentArrayMap(this__13575.meta,(this__13575.cnt - 1),new_arr__13579,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__13575.arr[s__13580])))
{{
var G__13585 = (s__13580 + 2);
var G__13586 = d__13581;
s__13580 = G__13585;
d__13581 = G__13586;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__13579[d__13581] = (this__13575.arr[s__13580]));
(new_arr__13579[(d__13581 + 1)] = (this__13575.arr[(s__13580 + 1)]));
{
var G__13587 = (s__13580 + 2);
var G__13588 = (d__13581 + 2);
s__13580 = G__13587;
d__13581 = G__13588;
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
var len__13589 = cljs.core.count.call(null,ks);
var i__13590 = 0;
var out__13591 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__13590 < len__13589))
{{
var G__13592 = (i__13590 + 1);
var G__13593 = cljs.core.assoc_BANG_.call(null,out__13591,(ks[i__13590]),(vs[i__13590]));
i__13590 = G__13592;
out__13591 = G__13593;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13591);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__13594 = this;
if(cljs.core.truth_(this__13594.editable_QMARK_))
{var idx__13595 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__13595 >= 0))
{(this__13594.arr[idx__13595] = (this__13594.arr[(this__13594.len - 2)]));
(this__13594.arr[(idx__13595 + 1)] = (this__13594.arr[(this__13594.len - 1)]));
var G__13596__13597 = this__13594.arr;
G__13596__13597.pop();
G__13596__13597.pop();
G__13596__13597;
this__13594.len = (this__13594.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13598 = this;
if(cljs.core.truth_(this__13598.editable_QMARK_))
{var idx__13599 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__13599 === -1))
{if(((this__13598.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__13598.len = (this__13598.len + 2);
this__13598.arr.push(key);
this__13598.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__13598.len,this__13598.arr),key,val);
}
} else
{if((val === (this__13598.arr[(idx__13599 + 1)])))
{return tcoll;
} else
{(this__13598.arr[(idx__13599 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13600 = this;
if(cljs.core.truth_(this__13600.editable_QMARK_))
{if((function (){var G__13601__13602 = o;
if(G__13601__13602)
{if((function (){var or__3824__auto____13603 = (G__13601__13602.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13603)
{return or__3824__auto____13603;
} else
{return G__13601__13602.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__13601__13602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13601__13602);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13601__13602);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13604 = cljs.core.seq.call(null,o);
var tcoll__13605 = tcoll;
while(true){
var temp__3971__auto____13606 = cljs.core.first.call(null,es__13604);
if(cljs.core.truth_(temp__3971__auto____13606))
{var e__13607 = temp__3971__auto____13606;
{
var G__13613 = cljs.core.next.call(null,es__13604);
var G__13614 = tcoll__13605.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__13605,cljs.core.key.call(null,e__13607),cljs.core.val.call(null,e__13607));
es__13604 = G__13613;
tcoll__13605 = G__13614;
continue;
}
} else
{return tcoll__13605;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13608 = this;
if(cljs.core.truth_(this__13608.editable_QMARK_))
{this__13608.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__13608.len,2),this__13608.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__13609 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__13610 = this;
if(cljs.core.truth_(this__13610.editable_QMARK_))
{var idx__13611 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__13611 === -1))
{return not_found;
} else
{return (this__13610.arr[(idx__13611 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__13612 = this;
if(cljs.core.truth_(this__13612.editable_QMARK_))
{return cljs.core.quot.call(null,this__13612.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__13617 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__13618 = 0;
while(true){
if((i__13618 < len))
{{
var G__13619 = cljs.core.assoc_BANG_.call(null,out__13617,(arr[i__13618]),(arr[(i__13618 + 1)]));
var G__13620 = (i__13618 + 2);
out__13617 = G__13619;
i__13618 = G__13620;
continue;
}
} else
{return out__13617;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__6700__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__6700__auto__,writer__6701__auto__){
return cljs.core._write.call(null,writer__6701__auto__,"cljs.core/Box");
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
var G__13625__13626 = arr.slice();
(G__13625__13626[i] = a);
return G__13625__13626;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__13627__13628 = arr.slice();
(G__13627__13628[i] = a);
(G__13627__13628[j] = b);
return G__13627__13628;
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
var new_arr__13630 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__13630,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__13630,(2 * i),(new_arr__13630.length - (2 * i)));
return new_arr__13630;
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
var editable__13633 = inode.ensure_editable(edit);
(editable__13633.arr[i] = a);
return editable__13633;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__13634 = inode.ensure_editable(edit);
(editable__13634.arr[i] = a);
(editable__13634.arr[j] = b);
return editable__13634;
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
var len__13641 = arr.length;
var i__13642 = 0;
var init__13643 = init;
while(true){
if((i__13642 < len__13641))
{var init__13646 = (function (){var k__13644 = (arr[i__13642]);
if(!((k__13644 == null)))
{return f.call(null,init__13643,k__13644,(arr[(i__13642 + 1)]));
} else
{var node__13645 = (arr[(i__13642 + 1)]);
if(!((node__13645 == null)))
{return node__13645.kv_reduce(f,init__13643);
} else
{return init__13643;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__13646))
{return cljs.core.deref.call(null,init__13646);
} else
{{
var G__13647 = (i__13642 + 2);
var G__13648 = init__13646;
i__13642 = G__13647;
init__13643 = G__13648;
continue;
}
}
} else
{return init__13643;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__13649 = this;
var inode__13650 = this;
if((this__13649.bitmap === bit))
{return null;
} else
{var editable__13651 = inode__13650.ensure_editable(e);
var earr__13652 = editable__13651.arr;
var len__13653 = earr__13652.length;
editable__13651.bitmap = (bit ^ editable__13651.bitmap);
cljs.core.array_copy.call(null,earr__13652,(2 * (i + 1)),earr__13652,(2 * i),(len__13653 - (2 * (i + 1))));
(earr__13652[(len__13653 - 2)] = null);
(earr__13652[(len__13653 - 1)] = null);
return editable__13651;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13654 = this;
var inode__13655 = this;
var bit__13656 = (1 << ((hash >>> shift) & 0x01f));
var idx__13657 = cljs.core.bitmap_indexed_node_index.call(null,this__13654.bitmap,bit__13656);
if(((this__13654.bitmap & bit__13656) === 0))
{var n__13658 = cljs.core.bit_count.call(null,this__13654.bitmap);
if(((2 * n__13658) < this__13654.arr.length))
{var editable__13659 = inode__13655.ensure_editable(edit);
var earr__13660 = editable__13659.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__13660,(2 * idx__13657),earr__13660,(2 * (idx__13657 + 1)),(2 * (n__13658 - idx__13657)));
(earr__13660[(2 * idx__13657)] = key);
(earr__13660[((2 * idx__13657) + 1)] = val);
editable__13659.bitmap = (editable__13659.bitmap | bit__13656);
return editable__13659;
} else
{if((n__13658 >= 16))
{var nodes__13661 = cljs.core.make_array.call(null,32);
var jdx__13662 = ((hash >>> shift) & 0x01f);
(nodes__13661[jdx__13662] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__13663 = 0;
var j__13664 = 0;
while(true){
if((i__13663 < 32))
{if((((this__13654.bitmap >>> i__13663) & 1) === 0))
{{
var G__13717 = (i__13663 + 1);
var G__13718 = j__13664;
i__13663 = G__13717;
j__13664 = G__13718;
continue;
}
} else
{(nodes__13661[i__13663] = ((!(((this__13654.arr[j__13664]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__13654.arr[j__13664])),(this__13654.arr[j__13664]),(this__13654.arr[(j__13664 + 1)]),added_leaf_QMARK_):(this__13654.arr[(j__13664 + 1)])));
{
var G__13719 = (i__13663 + 1);
var G__13720 = (j__13664 + 2);
i__13663 = G__13719;
j__13664 = G__13720;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__13658 + 1),nodes__13661));
} else
{if("\uFDD0'else")
{var new_arr__13665 = cljs.core.make_array.call(null,(2 * (n__13658 + 4)));
cljs.core.array_copy.call(null,this__13654.arr,0,new_arr__13665,0,(2 * idx__13657));
(new_arr__13665[(2 * idx__13657)] = key);
(new_arr__13665[((2 * idx__13657) + 1)] = val);
cljs.core.array_copy.call(null,this__13654.arr,(2 * idx__13657),new_arr__13665,(2 * (idx__13657 + 1)),(2 * (n__13658 - idx__13657)));
added_leaf_QMARK_.val = true;
var editable__13666 = inode__13655.ensure_editable(edit);
editable__13666.arr = new_arr__13665;
editable__13666.bitmap = (editable__13666.bitmap | bit__13656);
return editable__13666;
} else
{return null;
}
}
}
} else
{var key_or_nil__13667 = (this__13654.arr[(2 * idx__13657)]);
var val_or_node__13668 = (this__13654.arr[((2 * idx__13657) + 1)]);
if((key_or_nil__13667 == null))
{var n__13669 = val_or_node__13668.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13669 === val_or_node__13668))
{return inode__13655;
} else
{return cljs.core.edit_and_set.call(null,inode__13655,edit,((2 * idx__13657) + 1),n__13669);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13667))
{if((val === val_or_node__13668))
{return inode__13655;
} else
{return cljs.core.edit_and_set.call(null,inode__13655,edit,((2 * idx__13657) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__13655,edit,(2 * idx__13657),null,((2 * idx__13657) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__13667,val_or_node__13668,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__13670 = this;
var inode__13671 = this;
return cljs.core.create_inode_seq.call(null,this__13670.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13672 = this;
var inode__13673 = this;
var bit__13674 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13672.bitmap & bit__13674) === 0))
{return inode__13673;
} else
{var idx__13675 = cljs.core.bitmap_indexed_node_index.call(null,this__13672.bitmap,bit__13674);
var key_or_nil__13676 = (this__13672.arr[(2 * idx__13675)]);
var val_or_node__13677 = (this__13672.arr[((2 * idx__13675) + 1)]);
if((key_or_nil__13676 == null))
{var n__13678 = val_or_node__13677.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__13678 === val_or_node__13677))
{return inode__13673;
} else
{if(!((n__13678 == null)))
{return cljs.core.edit_and_set.call(null,inode__13673,edit,((2 * idx__13675) + 1),n__13678);
} else
{if((this__13672.bitmap === bit__13674))
{return null;
} else
{if("\uFDD0'else")
{return inode__13673.edit_and_remove_pair(edit,bit__13674,idx__13675);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13676))
{(removed_leaf_QMARK_[0] = true);
return inode__13673.edit_and_remove_pair(edit,bit__13674,idx__13675);
} else
{if("\uFDD0'else")
{return inode__13673;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__13679 = this;
var inode__13680 = this;
if((e === this__13679.edit))
{return inode__13680;
} else
{var n__13681 = cljs.core.bit_count.call(null,this__13679.bitmap);
var new_arr__13682 = cljs.core.make_array.call(null,(((n__13681 < 0))?4:(2 * (n__13681 + 1))));
cljs.core.array_copy.call(null,this__13679.arr,0,new_arr__13682,0,(2 * n__13681));
return (new cljs.core.BitmapIndexedNode(e,this__13679.bitmap,new_arr__13682));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__13683 = this;
var inode__13684 = this;
return cljs.core.inode_kv_reduce.call(null,this__13683.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13685 = this;
var inode__13686 = this;
var bit__13687 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13685.bitmap & bit__13687) === 0))
{return not_found;
} else
{var idx__13688 = cljs.core.bitmap_indexed_node_index.call(null,this__13685.bitmap,bit__13687);
var key_or_nil__13689 = (this__13685.arr[(2 * idx__13688)]);
var val_or_node__13690 = (this__13685.arr[((2 * idx__13688) + 1)]);
if((key_or_nil__13689 == null))
{return val_or_node__13690.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13689))
{return cljs.core.PersistentVector.fromArray([key_or_nil__13689,val_or_node__13690], true);
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
var this__13691 = this;
var inode__13692 = this;
var bit__13693 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13691.bitmap & bit__13693) === 0))
{return inode__13692;
} else
{var idx__13694 = cljs.core.bitmap_indexed_node_index.call(null,this__13691.bitmap,bit__13693);
var key_or_nil__13695 = (this__13691.arr[(2 * idx__13694)]);
var val_or_node__13696 = (this__13691.arr[((2 * idx__13694) + 1)]);
if((key_or_nil__13695 == null))
{var n__13697 = val_or_node__13696.inode_without((shift + 5),hash,key);
if((n__13697 === val_or_node__13696))
{return inode__13692;
} else
{if(!((n__13697 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__13691.bitmap,cljs.core.clone_and_set.call(null,this__13691.arr,((2 * idx__13694) + 1),n__13697)));
} else
{if((this__13691.bitmap === bit__13693))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__13691.bitmap ^ bit__13693),cljs.core.remove_pair.call(null,this__13691.arr,idx__13694)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13695))
{return (new cljs.core.BitmapIndexedNode(null,(this__13691.bitmap ^ bit__13693),cljs.core.remove_pair.call(null,this__13691.arr,idx__13694)));
} else
{if("\uFDD0'else")
{return inode__13692;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13698 = this;
var inode__13699 = this;
var bit__13700 = (1 << ((hash >>> shift) & 0x01f));
var idx__13701 = cljs.core.bitmap_indexed_node_index.call(null,this__13698.bitmap,bit__13700);
if(((this__13698.bitmap & bit__13700) === 0))
{var n__13702 = cljs.core.bit_count.call(null,this__13698.bitmap);
if((n__13702 >= 16))
{var nodes__13703 = cljs.core.make_array.call(null,32);
var jdx__13704 = ((hash >>> shift) & 0x01f);
(nodes__13703[jdx__13704] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__13705 = 0;
var j__13706 = 0;
while(true){
if((i__13705 < 32))
{if((((this__13698.bitmap >>> i__13705) & 1) === 0))
{{
var G__13721 = (i__13705 + 1);
var G__13722 = j__13706;
i__13705 = G__13721;
j__13706 = G__13722;
continue;
}
} else
{(nodes__13703[i__13705] = ((!(((this__13698.arr[j__13706]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__13698.arr[j__13706])),(this__13698.arr[j__13706]),(this__13698.arr[(j__13706 + 1)]),added_leaf_QMARK_):(this__13698.arr[(j__13706 + 1)])));
{
var G__13723 = (i__13705 + 1);
var G__13724 = (j__13706 + 2);
i__13705 = G__13723;
j__13706 = G__13724;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__13702 + 1),nodes__13703));
} else
{var new_arr__13707 = cljs.core.make_array.call(null,(2 * (n__13702 + 1)));
cljs.core.array_copy.call(null,this__13698.arr,0,new_arr__13707,0,(2 * idx__13701));
(new_arr__13707[(2 * idx__13701)] = key);
(new_arr__13707[((2 * idx__13701) + 1)] = val);
cljs.core.array_copy.call(null,this__13698.arr,(2 * idx__13701),new_arr__13707,(2 * (idx__13701 + 1)),(2 * (n__13702 - idx__13701)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__13698.bitmap | bit__13700),new_arr__13707));
}
} else
{var key_or_nil__13708 = (this__13698.arr[(2 * idx__13701)]);
var val_or_node__13709 = (this__13698.arr[((2 * idx__13701) + 1)]);
if((key_or_nil__13708 == null))
{var n__13710 = val_or_node__13709.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13710 === val_or_node__13709))
{return inode__13699;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__13698.bitmap,cljs.core.clone_and_set.call(null,this__13698.arr,((2 * idx__13701) + 1),n__13710)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13708))
{if((val === val_or_node__13709))
{return inode__13699;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__13698.bitmap,cljs.core.clone_and_set.call(null,this__13698.arr,((2 * idx__13701) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__13698.bitmap,cljs.core.clone_and_set.call(null,this__13698.arr,(2 * idx__13701),null,((2 * idx__13701) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__13708,val_or_node__13709,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13711 = this;
var inode__13712 = this;
var bit__13713 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13711.bitmap & bit__13713) === 0))
{return not_found;
} else
{var idx__13714 = cljs.core.bitmap_indexed_node_index.call(null,this__13711.bitmap,bit__13713);
var key_or_nil__13715 = (this__13711.arr[(2 * idx__13714)]);
var val_or_node__13716 = (this__13711.arr[((2 * idx__13714) + 1)]);
if((key_or_nil__13715 == null))
{return val_or_node__13716.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13715))
{return val_or_node__13716;
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
var arr__13732 = array_node.arr;
var len__13733 = (2 * (array_node.cnt - 1));
var new_arr__13734 = cljs.core.make_array.call(null,len__13733);
var i__13735 = 0;
var j__13736 = 1;
var bitmap__13737 = 0;
while(true){
if((i__13735 < len__13733))
{if((function (){var and__3822__auto____13738 = !((i__13735 === idx));
if(and__3822__auto____13738)
{return !(((arr__13732[i__13735]) == null));
} else
{return and__3822__auto____13738;
}
})())
{(new_arr__13734[j__13736] = (arr__13732[i__13735]));
{
var G__13739 = (i__13735 + 1);
var G__13740 = (j__13736 + 2);
var G__13741 = (bitmap__13737 | (1 << i__13735));
i__13735 = G__13739;
j__13736 = G__13740;
bitmap__13737 = G__13741;
continue;
}
} else
{{
var G__13742 = (i__13735 + 1);
var G__13743 = j__13736;
var G__13744 = bitmap__13737;
i__13735 = G__13742;
j__13736 = G__13743;
bitmap__13737 = G__13744;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__13737,new_arr__13734));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13745 = this;
var inode__13746 = this;
var idx__13747 = ((hash >>> shift) & 0x01f);
var node__13748 = (this__13745.arr[idx__13747]);
if((node__13748 == null))
{var editable__13749 = cljs.core.edit_and_set.call(null,inode__13746,edit,idx__13747,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__13749.cnt = (editable__13749.cnt + 1);
return editable__13749;
} else
{var n__13750 = node__13748.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13750 === node__13748))
{return inode__13746;
} else
{return cljs.core.edit_and_set.call(null,inode__13746,edit,idx__13747,n__13750);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__13751 = this;
var inode__13752 = this;
return cljs.core.create_array_node_seq.call(null,this__13751.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13753 = this;
var inode__13754 = this;
var idx__13755 = ((hash >>> shift) & 0x01f);
var node__13756 = (this__13753.arr[idx__13755]);
if((node__13756 == null))
{return inode__13754;
} else
{var n__13757 = node__13756.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__13757 === node__13756))
{return inode__13754;
} else
{if((n__13757 == null))
{if((this__13753.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__13754,edit,idx__13755);
} else
{var editable__13758 = cljs.core.edit_and_set.call(null,inode__13754,edit,idx__13755,n__13757);
editable__13758.cnt = (editable__13758.cnt - 1);
return editable__13758;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__13754,edit,idx__13755,n__13757);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__13759 = this;
var inode__13760 = this;
if((e === this__13759.edit))
{return inode__13760;
} else
{return (new cljs.core.ArrayNode(e,this__13759.cnt,this__13759.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__13761 = this;
var inode__13762 = this;
var len__13763 = this__13761.arr.length;
var i__13764 = 0;
var init__13765 = init;
while(true){
if((i__13764 < len__13763))
{var node__13766 = (this__13761.arr[i__13764]);
if(!((node__13766 == null)))
{var init__13767 = node__13766.kv_reduce(f,init__13765);
if(cljs.core.reduced_QMARK_.call(null,init__13767))
{return cljs.core.deref.call(null,init__13767);
} else
{{
var G__13786 = (i__13764 + 1);
var G__13787 = init__13767;
i__13764 = G__13786;
init__13765 = G__13787;
continue;
}
}
} else
{return null;
}
} else
{return init__13765;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13768 = this;
var inode__13769 = this;
var idx__13770 = ((hash >>> shift) & 0x01f);
var node__13771 = (this__13768.arr[idx__13770]);
if(!((node__13771 == null)))
{return node__13771.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__13772 = this;
var inode__13773 = this;
var idx__13774 = ((hash >>> shift) & 0x01f);
var node__13775 = (this__13772.arr[idx__13774]);
if(!((node__13775 == null)))
{var n__13776 = node__13775.inode_without((shift + 5),hash,key);
if((n__13776 === node__13775))
{return inode__13773;
} else
{if((n__13776 == null))
{if((this__13772.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__13773,null,idx__13774);
} else
{return (new cljs.core.ArrayNode(null,(this__13772.cnt - 1),cljs.core.clone_and_set.call(null,this__13772.arr,idx__13774,n__13776)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__13772.cnt,cljs.core.clone_and_set.call(null,this__13772.arr,idx__13774,n__13776)));
} else
{return null;
}
}
}
} else
{return inode__13773;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13777 = this;
var inode__13778 = this;
var idx__13779 = ((hash >>> shift) & 0x01f);
var node__13780 = (this__13777.arr[idx__13779]);
if((node__13780 == null))
{return (new cljs.core.ArrayNode(null,(this__13777.cnt + 1),cljs.core.clone_and_set.call(null,this__13777.arr,idx__13779,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__13781 = node__13780.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13781 === node__13780))
{return inode__13778;
} else
{return (new cljs.core.ArrayNode(null,this__13777.cnt,cljs.core.clone_and_set.call(null,this__13777.arr,idx__13779,n__13781)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13782 = this;
var inode__13783 = this;
var idx__13784 = ((hash >>> shift) & 0x01f);
var node__13785 = (this__13782.arr[idx__13784]);
if(!((node__13785 == null)))
{return node__13785.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__13790 = (2 * cnt);
var i__13791 = 0;
while(true){
if((i__13791 < lim__13790))
{if(cljs.core.key_test.call(null,key,(arr[i__13791])))
{return i__13791;
} else
{{
var G__13792 = (i__13791 + 2);
i__13791 = G__13792;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13793 = this;
var inode__13794 = this;
if((hash === this__13793.collision_hash))
{var idx__13795 = cljs.core.hash_collision_node_find_index.call(null,this__13793.arr,this__13793.cnt,key);
if((idx__13795 === -1))
{if((this__13793.arr.length > (2 * this__13793.cnt)))
{var editable__13796 = cljs.core.edit_and_set.call(null,inode__13794,edit,(2 * this__13793.cnt),key,((2 * this__13793.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__13796.cnt = (editable__13796.cnt + 1);
return editable__13796;
} else
{var len__13797 = this__13793.arr.length;
var new_arr__13798 = cljs.core.make_array.call(null,(len__13797 + 2));
cljs.core.array_copy.call(null,this__13793.arr,0,new_arr__13798,0,len__13797);
(new_arr__13798[len__13797] = key);
(new_arr__13798[(len__13797 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__13794.ensure_editable_array(edit,(this__13793.cnt + 1),new_arr__13798);
}
} else
{if(((this__13793.arr[(idx__13795 + 1)]) === val))
{return inode__13794;
} else
{return cljs.core.edit_and_set.call(null,inode__13794,edit,(idx__13795 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__13793.collision_hash >>> shift) & 0x01f)),[null,inode__13794,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__13799 = this;
var inode__13800 = this;
return cljs.core.create_inode_seq.call(null,this__13799.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13801 = this;
var inode__13802 = this;
var idx__13803 = cljs.core.hash_collision_node_find_index.call(null,this__13801.arr,this__13801.cnt,key);
if((idx__13803 === -1))
{return inode__13802;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__13801.cnt === 1))
{return null;
} else
{var editable__13804 = inode__13802.ensure_editable(edit);
var earr__13805 = editable__13804.arr;
(earr__13805[idx__13803] = (earr__13805[((2 * this__13801.cnt) - 2)]));
(earr__13805[(idx__13803 + 1)] = (earr__13805[((2 * this__13801.cnt) - 1)]));
(earr__13805[((2 * this__13801.cnt) - 1)] = null);
(earr__13805[((2 * this__13801.cnt) - 2)] = null);
editable__13804.cnt = (editable__13804.cnt - 1);
return editable__13804;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__13806 = this;
var inode__13807 = this;
if((e === this__13806.edit))
{return inode__13807;
} else
{var new_arr__13808 = cljs.core.make_array.call(null,(2 * (this__13806.cnt + 1)));
cljs.core.array_copy.call(null,this__13806.arr,0,new_arr__13808,0,(2 * this__13806.cnt));
return (new cljs.core.HashCollisionNode(e,this__13806.collision_hash,this__13806.cnt,new_arr__13808));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__13809 = this;
var inode__13810 = this;
return cljs.core.inode_kv_reduce.call(null,this__13809.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13811 = this;
var inode__13812 = this;
var idx__13813 = cljs.core.hash_collision_node_find_index.call(null,this__13811.arr,this__13811.cnt,key);
if((idx__13813 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__13811.arr[idx__13813])))
{return cljs.core.PersistentVector.fromArray([(this__13811.arr[idx__13813]),(this__13811.arr[(idx__13813 + 1)])], true);
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
var this__13814 = this;
var inode__13815 = this;
var idx__13816 = cljs.core.hash_collision_node_find_index.call(null,this__13814.arr,this__13814.cnt,key);
if((idx__13816 === -1))
{return inode__13815;
} else
{if((this__13814.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__13814.collision_hash,(this__13814.cnt - 1),cljs.core.remove_pair.call(null,this__13814.arr,cljs.core.quot.call(null,idx__13816,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13817 = this;
var inode__13818 = this;
if((hash === this__13817.collision_hash))
{var idx__13819 = cljs.core.hash_collision_node_find_index.call(null,this__13817.arr,this__13817.cnt,key);
if((idx__13819 === -1))
{var len__13820 = this__13817.arr.length;
var new_arr__13821 = cljs.core.make_array.call(null,(len__13820 + 2));
cljs.core.array_copy.call(null,this__13817.arr,0,new_arr__13821,0,len__13820);
(new_arr__13821[len__13820] = key);
(new_arr__13821[(len__13820 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__13817.collision_hash,(this__13817.cnt + 1),new_arr__13821));
} else
{if(cljs.core._EQ_.call(null,(this__13817.arr[idx__13819]),val))
{return inode__13818;
} else
{return (new cljs.core.HashCollisionNode(null,this__13817.collision_hash,this__13817.cnt,cljs.core.clone_and_set.call(null,this__13817.arr,(idx__13819 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__13817.collision_hash >>> shift) & 0x01f)),[null,inode__13818])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13822 = this;
var inode__13823 = this;
var idx__13824 = cljs.core.hash_collision_node_find_index.call(null,this__13822.arr,this__13822.cnt,key);
if((idx__13824 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__13822.arr[idx__13824])))
{return (this__13822.arr[(idx__13824 + 1)]);
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
var this__13825 = this;
var inode__13826 = this;
if((e === this__13825.edit))
{this__13825.arr = array;
this__13825.cnt = count;
return inode__13826;
} else
{return (new cljs.core.HashCollisionNode(this__13825.edit,this__13825.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__13831 = cljs.core.hash.call(null,key1);
if((key1hash__13831 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__13831,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___13832 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__13831,key1,val1,added_leaf_QMARK___13832).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___13832);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__13833 = cljs.core.hash.call(null,key1);
if((key1hash__13833 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__13833,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___13834 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__13833,key1,val1,added_leaf_QMARK___13834).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___13834);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13835 = this;
var h__6579__auto____13836 = this__13835.__hash;
if(!((h__6579__auto____13836 == null)))
{return h__6579__auto____13836;
} else
{var h__6579__auto____13837 = cljs.core.hash_coll.call(null,coll);
this__13835.__hash = h__6579__auto____13837;
return h__6579__auto____13837;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13838 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__13839 = this;
var this__13840 = this;
return cljs.core.pr_str.call(null,this__13840);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13841 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13842 = this;
if((this__13842.s == null))
{return cljs.core.PersistentVector.fromArray([(this__13842.nodes[this__13842.i]),(this__13842.nodes[(this__13842.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__13842.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13843 = this;
if((this__13843.s == null))
{return cljs.core.create_inode_seq.call(null,this__13843.nodes,(this__13843.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__13843.nodes,this__13843.i,cljs.core.next.call(null,this__13843.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13844 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13845 = this;
return (new cljs.core.NodeSeq(meta,this__13845.nodes,this__13845.i,this__13845.s,this__13845.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13846 = this;
return this__13846.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13847 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13847.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__13854 = nodes.length;
var j__13855 = i;
while(true){
if((j__13855 < len__13854))
{if(!(((nodes[j__13855]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__13855,null,null));
} else
{var temp__3971__auto____13856 = (nodes[(j__13855 + 1)]);
if(cljs.core.truth_(temp__3971__auto____13856))
{var node__13857 = temp__3971__auto____13856;
var temp__3971__auto____13858 = node__13857.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13858))
{var node_seq__13859 = temp__3971__auto____13858;
return (new cljs.core.NodeSeq(null,nodes,(j__13855 + 2),node_seq__13859,null));
} else
{{
var G__13860 = (j__13855 + 2);
j__13855 = G__13860;
continue;
}
}
} else
{{
var G__13861 = (j__13855 + 2);
j__13855 = G__13861;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13862 = this;
var h__6579__auto____13863 = this__13862.__hash;
if(!((h__6579__auto____13863 == null)))
{return h__6579__auto____13863;
} else
{var h__6579__auto____13864 = cljs.core.hash_coll.call(null,coll);
this__13862.__hash = h__6579__auto____13864;
return h__6579__auto____13864;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13865 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__13866 = this;
var this__13867 = this;
return cljs.core.pr_str.call(null,this__13867);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13868 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13869 = this;
return cljs.core.first.call(null,this__13869.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13870 = this;
return cljs.core.create_array_node_seq.call(null,null,this__13870.nodes,this__13870.i,cljs.core.next.call(null,this__13870.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13871 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13872 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__13872.nodes,this__13872.i,this__13872.s,this__13872.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13873 = this;
return this__13873.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13874 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13874.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__13881 = nodes.length;
var j__13882 = i;
while(true){
if((j__13882 < len__13881))
{var temp__3971__auto____13883 = (nodes[j__13882]);
if(cljs.core.truth_(temp__3971__auto____13883))
{var nj__13884 = temp__3971__auto____13883;
var temp__3971__auto____13885 = nj__13884.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13885))
{var ns__13886 = temp__3971__auto____13885;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__13882 + 1),ns__13886,null));
} else
{{
var G__13887 = (j__13882 + 1);
j__13882 = G__13887;
continue;
}
}
} else
{{
var G__13888 = (j__13882 + 1);
j__13882 = G__13888;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13891 = this;
return (new cljs.core.TransientHashMap({},this__13891.root,this__13891.cnt,this__13891.has_nil_QMARK_,this__13891.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13892 = this;
var h__6579__auto____13893 = this__13892.__hash;
if(!((h__6579__auto____13893 == null)))
{return h__6579__auto____13893;
} else
{var h__6579__auto____13894 = cljs.core.hash_imap.call(null,coll);
this__13892.__hash = h__6579__auto____13894;
return h__6579__auto____13894;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13895 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13896 = this;
if((k == null))
{if(this__13896.has_nil_QMARK_)
{return this__13896.nil_val;
} else
{return not_found;
}
} else
{if((this__13896.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__13896.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13897 = this;
if((k == null))
{if((function (){var and__3822__auto____13898 = this__13897.has_nil_QMARK_;
if(and__3822__auto____13898)
{return (v === this__13897.nil_val);
} else
{return and__3822__auto____13898;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13897.meta,((this__13897.has_nil_QMARK_)?this__13897.cnt:(this__13897.cnt + 1)),this__13897.root,true,v,null));
}
} else
{var added_leaf_QMARK___13899 = (new cljs.core.Box(false));
var new_root__13900 = (((this__13897.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13897.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13899);
if((new_root__13900 === this__13897.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13897.meta,((added_leaf_QMARK___13899.val)?(this__13897.cnt + 1):this__13897.cnt),new_root__13900,this__13897.has_nil_QMARK_,this__13897.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13901 = this;
if((k == null))
{return this__13901.has_nil_QMARK_;
} else
{if((this__13901.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__13901.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__13924 = null;
var G__13924__2 = (function (this_sym13902,k){
var this__13904 = this;
var this_sym13902__13905 = this;
var coll__13906 = this_sym13902__13905;
return coll__13906.cljs$core$ILookup$_lookup$arity$2(coll__13906,k);
});
var G__13924__3 = (function (this_sym13903,k,not_found){
var this__13904 = this;
var this_sym13903__13907 = this;
var coll__13908 = this_sym13903__13907;
return coll__13908.cljs$core$ILookup$_lookup$arity$3(coll__13908,k,not_found);
});
G__13924 = function(this_sym13903,k,not_found){
switch(arguments.length){
case 2:
return G__13924__2.call(this,this_sym13903,k);
case 3:
return G__13924__3.call(this,this_sym13903,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13924;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym13889,args13890){
var this__13909 = this;
return this_sym13889.call.apply(this_sym13889,[this_sym13889].concat(args13890.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13910 = this;
var init__13911 = ((this__13910.has_nil_QMARK_)?f.call(null,init,null,this__13910.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__13911))
{return cljs.core.deref.call(null,init__13911);
} else
{if(!((this__13910.root == null)))
{return this__13910.root.kv_reduce(f,init__13911);
} else
{if("\uFDD0'else")
{return init__13911;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13912 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__13913 = this;
var this__13914 = this;
return cljs.core.pr_str.call(null,this__13914);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13915 = this;
if((this__13915.cnt > 0))
{var s__13916 = ((!((this__13915.root == null)))?this__13915.root.inode_seq():null);
if(this__13915.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__13915.nil_val], true),s__13916);
} else
{return s__13916;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13917 = this;
return this__13917.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13918 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13919 = this;
return (new cljs.core.PersistentHashMap(meta,this__13919.cnt,this__13919.root,this__13919.has_nil_QMARK_,this__13919.nil_val,this__13919.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13920 = this;
return this__13920.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13921 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__13921.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13922 = this;
if((k == null))
{if(this__13922.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__13922.meta,(this__13922.cnt - 1),this__13922.root,false,null,null));
} else
{return coll;
}
} else
{if((this__13922.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__13923 = this__13922.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__13923 === this__13922.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__13922.meta,(this__13922.cnt - 1),new_root__13923,this__13922.has_nil_QMARK_,this__13922.nil_val,null));
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
var len__13925 = ks.length;
var i__13926 = 0;
var out__13927 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__13926 < len__13925))
{{
var G__13928 = (i__13926 + 1);
var G__13929 = cljs.core.assoc_BANG_.call(null,out__13927,(ks[i__13926]),(vs[i__13926]));
i__13926 = G__13928;
out__13927 = G__13929;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13927);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__13930 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13931 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__13932 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13933 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__13934 = this;
if((k == null))
{if(this__13934.has_nil_QMARK_)
{return this__13934.nil_val;
} else
{return null;
}
} else
{if((this__13934.root == null))
{return null;
} else
{return this__13934.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__13935 = this;
if((k == null))
{if(this__13935.has_nil_QMARK_)
{return this__13935.nil_val;
} else
{return not_found;
}
} else
{if((this__13935.root == null))
{return not_found;
} else
{return this__13935.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13936 = this;
if(this__13936.edit)
{return this__13936.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__13937 = this;
var tcoll__13938 = this;
if(this__13937.edit)
{if((function (){var G__13939__13940 = o;
if(G__13939__13940)
{if((function (){var or__3824__auto____13941 = (G__13939__13940.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13941)
{return or__3824__auto____13941;
} else
{return G__13939__13940.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__13939__13940.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13939__13940);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13939__13940);
}
})())
{return tcoll__13938.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13942 = cljs.core.seq.call(null,o);
var tcoll__13943 = tcoll__13938;
while(true){
var temp__3971__auto____13944 = cljs.core.first.call(null,es__13942);
if(cljs.core.truth_(temp__3971__auto____13944))
{var e__13945 = temp__3971__auto____13944;
{
var G__13956 = cljs.core.next.call(null,es__13942);
var G__13957 = tcoll__13943.assoc_BANG_(cljs.core.key.call(null,e__13945),cljs.core.val.call(null,e__13945));
es__13942 = G__13956;
tcoll__13943 = G__13957;
continue;
}
} else
{return tcoll__13943;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__13946 = this;
var tcoll__13947 = this;
if(this__13946.edit)
{if((k == null))
{if((this__13946.nil_val === v))
{} else
{this__13946.nil_val = v;
}
if(this__13946.has_nil_QMARK_)
{} else
{this__13946.count = (this__13946.count + 1);
this__13946.has_nil_QMARK_ = true;
}
return tcoll__13947;
} else
{var added_leaf_QMARK___13948 = (new cljs.core.Box(false));
var node__13949 = (((this__13946.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13946.root).inode_assoc_BANG_(this__13946.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13948);
if((node__13949 === this__13946.root))
{} else
{this__13946.root = node__13949;
}
if(added_leaf_QMARK___13948.val)
{this__13946.count = (this__13946.count + 1);
} else
{}
return tcoll__13947;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__13950 = this;
var tcoll__13951 = this;
if(this__13950.edit)
{if((k == null))
{if(this__13950.has_nil_QMARK_)
{this__13950.has_nil_QMARK_ = false;
this__13950.nil_val = null;
this__13950.count = (this__13950.count - 1);
return tcoll__13951;
} else
{return tcoll__13951;
}
} else
{if((this__13950.root == null))
{return tcoll__13951;
} else
{var removed_leaf_QMARK___13952 = (new cljs.core.Box(false));
var node__13953 = this__13950.root.inode_without_BANG_(this__13950.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___13952);
if((node__13953 === this__13950.root))
{} else
{this__13950.root = node__13953;
}
if(cljs.core.truth_((removed_leaf_QMARK___13952[0])))
{this__13950.count = (this__13950.count - 1);
} else
{}
return tcoll__13951;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__13954 = this;
var tcoll__13955 = this;
if(this__13954.edit)
{this__13954.edit = null;
return (new cljs.core.PersistentHashMap(null,this__13954.count,this__13954.root,this__13954.has_nil_QMARK_,this__13954.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__13960 = node;
var stack__13961 = stack;
while(true){
if(!((t__13960 == null)))
{{
var G__13962 = ((ascending_QMARK_)?t__13960.left:t__13960.right);
var G__13963 = cljs.core.conj.call(null,stack__13961,t__13960);
t__13960 = G__13962;
stack__13961 = G__13963;
continue;
}
} else
{return stack__13961;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13964 = this;
var h__6579__auto____13965 = this__13964.__hash;
if(!((h__6579__auto____13965 == null)))
{return h__6579__auto____13965;
} else
{var h__6579__auto____13966 = cljs.core.hash_coll.call(null,coll);
this__13964.__hash = h__6579__auto____13966;
return h__6579__auto____13966;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13967 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__13968 = this;
var this__13969 = this;
return cljs.core.pr_str.call(null,this__13969);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13970 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13971 = this;
if((this__13971.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__13971.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__13972 = this;
return cljs.core.peek.call(null,this__13972.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__13973 = this;
var t__13974 = cljs.core.first.call(null,this__13973.stack);
var next_stack__13975 = cljs.core.tree_map_seq_push.call(null,((this__13973.ascending_QMARK_)?t__13974.right:t__13974.left),cljs.core.next.call(null,this__13973.stack),this__13973.ascending_QMARK_);
if(!((next_stack__13975 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__13975,this__13973.ascending_QMARK_,(this__13973.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13976 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13977 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__13977.stack,this__13977.ascending_QMARK_,this__13977.cnt,this__13977.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13978 = this;
return this__13978.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13979 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13979.meta);
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
{if((function (){var and__3822__auto____13981 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____13981)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____13981;
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
{if((function (){var and__3822__auto____13983 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____13983)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____13983;
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
var init__13987 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__13987))
{return cljs.core.deref.call(null,init__13987);
} else
{var init__13988 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__13987):init__13987);
if(cljs.core.reduced_QMARK_.call(null,init__13988))
{return cljs.core.deref.call(null,init__13988);
} else
{var init__13989 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__13988):init__13988);
if(cljs.core.reduced_QMARK_.call(null,init__13989))
{return cljs.core.deref.call(null,init__13989);
} else
{return init__13989;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13992 = this;
var h__6579__auto____13993 = this__13992.__hash;
if(!((h__6579__auto____13993 == null)))
{return h__6579__auto____13993;
} else
{var h__6579__auto____13994 = cljs.core.hash_coll.call(null,coll);
this__13992.__hash = h__6579__auto____13994;
return h__6579__auto____13994;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13995 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13996 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13997 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13997.key,this__13997.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__14045 = null;
var G__14045__2 = (function (this_sym13998,k){
var this__14000 = this;
var this_sym13998__14001 = this;
var node__14002 = this_sym13998__14001;
return node__14002.cljs$core$ILookup$_lookup$arity$2(node__14002,k);
});
var G__14045__3 = (function (this_sym13999,k,not_found){
var this__14000 = this;
var this_sym13999__14003 = this;
var node__14004 = this_sym13999__14003;
return node__14004.cljs$core$ILookup$_lookup$arity$3(node__14004,k,not_found);
});
G__14045 = function(this_sym13999,k,not_found){
switch(arguments.length){
case 2:
return G__14045__2.call(this,this_sym13999,k);
case 3:
return G__14045__3.call(this,this_sym13999,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14045;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym13990,args13991){
var this__14005 = this;
return this_sym13990.call.apply(this_sym13990,[this_sym13990].concat(args13991.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__14006 = this;
return cljs.core.PersistentVector.fromArray([this__14006.key,this__14006.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__14007 = this;
return this__14007.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__14008 = this;
return this__14008.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__14009 = this;
var node__14010 = this;
return ins.balance_right(node__14010);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__14011 = this;
var node__14012 = this;
return (new cljs.core.RedNode(this__14011.key,this__14011.val,this__14011.left,this__14011.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__14013 = this;
var node__14014 = this;
return cljs.core.balance_right_del.call(null,this__14013.key,this__14013.val,this__14013.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__14015 = this;
var node__14016 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__14017 = this;
var node__14018 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__14018,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__14019 = this;
var node__14020 = this;
return cljs.core.balance_left_del.call(null,this__14019.key,this__14019.val,del,this__14019.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__14021 = this;
var node__14022 = this;
return ins.balance_left(node__14022);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__14023 = this;
var node__14024 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__14024,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__14046 = null;
var G__14046__0 = (function (){
var this__14025 = this;
var this__14027 = this;
return cljs.core.pr_str.call(null,this__14027);
});
G__14046 = function(){
switch(arguments.length){
case 0:
return G__14046__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14046;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__14028 = this;
var node__14029 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__14029,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__14030 = this;
var node__14031 = this;
return node__14031;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__14032 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__14033 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__14034 = this;
return cljs.core.list.call(null,this__14034.key,this__14034.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__14035 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__14036 = this;
return this__14036.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__14037 = this;
return cljs.core.PersistentVector.fromArray([this__14037.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__14038 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__14038.key,this__14038.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14039 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__14040 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__14040.key,this__14040.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__14041 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__14042 = this;
if((n === 0))
{return this__14042.key;
} else
{if((n === 1))
{return this__14042.val;
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
var this__14043 = this;
if((n === 0))
{return this__14043.key;
} else
{if((n === 1))
{return this__14043.val;
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
var this__14044 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14049 = this;
var h__6579__auto____14050 = this__14049.__hash;
if(!((h__6579__auto____14050 == null)))
{return h__6579__auto____14050;
} else
{var h__6579__auto____14051 = cljs.core.hash_coll.call(null,coll);
this__14049.__hash = h__6579__auto____14051;
return h__6579__auto____14051;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__14052 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__14053 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__14054 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__14054.key,this__14054.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__14102 = null;
var G__14102__2 = (function (this_sym14055,k){
var this__14057 = this;
var this_sym14055__14058 = this;
var node__14059 = this_sym14055__14058;
return node__14059.cljs$core$ILookup$_lookup$arity$2(node__14059,k);
});
var G__14102__3 = (function (this_sym14056,k,not_found){
var this__14057 = this;
var this_sym14056__14060 = this;
var node__14061 = this_sym14056__14060;
return node__14061.cljs$core$ILookup$_lookup$arity$3(node__14061,k,not_found);
});
G__14102 = function(this_sym14056,k,not_found){
switch(arguments.length){
case 2:
return G__14102__2.call(this,this_sym14056,k);
case 3:
return G__14102__3.call(this,this_sym14056,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14102;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym14047,args14048){
var this__14062 = this;
return this_sym14047.call.apply(this_sym14047,[this_sym14047].concat(args14048.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__14063 = this;
return cljs.core.PersistentVector.fromArray([this__14063.key,this__14063.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__14064 = this;
return this__14064.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__14065 = this;
return this__14065.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__14066 = this;
var node__14067 = this;
return (new cljs.core.RedNode(this__14066.key,this__14066.val,this__14066.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__14068 = this;
var node__14069 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__14070 = this;
var node__14071 = this;
return (new cljs.core.RedNode(this__14070.key,this__14070.val,this__14070.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__14072 = this;
var node__14073 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__14074 = this;
var node__14075 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__14075,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__14076 = this;
var node__14077 = this;
return (new cljs.core.RedNode(this__14076.key,this__14076.val,del,this__14076.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__14078 = this;
var node__14079 = this;
return (new cljs.core.RedNode(this__14078.key,this__14078.val,ins,this__14078.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__14080 = this;
var node__14081 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14080.left))
{return (new cljs.core.RedNode(this__14080.key,this__14080.val,this__14080.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__14080.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14080.right))
{return (new cljs.core.RedNode(this__14080.right.key,this__14080.right.val,(new cljs.core.BlackNode(this__14080.key,this__14080.val,this__14080.left,this__14080.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__14080.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__14081,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__14103 = null;
var G__14103__0 = (function (){
var this__14082 = this;
var this__14084 = this;
return cljs.core.pr_str.call(null,this__14084);
});
G__14103 = function(){
switch(arguments.length){
case 0:
return G__14103__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14103;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__14085 = this;
var node__14086 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14085.right))
{return (new cljs.core.RedNode(this__14085.key,this__14085.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__14085.left,null)),this__14085.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14085.left))
{return (new cljs.core.RedNode(this__14085.left.key,this__14085.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__14085.left.left,null)),(new cljs.core.BlackNode(this__14085.key,this__14085.val,this__14085.left.right,this__14085.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__14086,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__14087 = this;
var node__14088 = this;
return (new cljs.core.BlackNode(this__14087.key,this__14087.val,this__14087.left,this__14087.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__14089 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__14090 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__14091 = this;
return cljs.core.list.call(null,this__14091.key,this__14091.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__14092 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__14093 = this;
return this__14093.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__14094 = this;
return cljs.core.PersistentVector.fromArray([this__14094.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__14095 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__14095.key,this__14095.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14096 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__14097 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__14097.key,this__14097.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__14098 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__14099 = this;
if((n === 0))
{return this__14099.key;
} else
{if((n === 1))
{return this__14099.val;
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
var this__14100 = this;
if((n === 0))
{return this__14100.key;
} else
{if((n === 1))
{return this__14100.val;
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
var this__14101 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__14107 = comp.call(null,k,tree.key);
if((c__14107 === 0))
{(found[0] = tree);
return null;
} else
{if((c__14107 < 0))
{var ins__14108 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__14108 == null)))
{return tree.add_left(ins__14108);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__14109 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__14109 == null)))
{return tree.add_right(ins__14109);
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
{var app__14112 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__14112))
{return (new cljs.core.RedNode(app__14112.key,app__14112.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__14112.left,null)),(new cljs.core.RedNode(right.key,right.val,app__14112.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__14112,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__14113 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__14113))
{return (new cljs.core.RedNode(app__14113.key,app__14113.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__14113.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__14113.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__14113,right.right,null)));
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
{var c__14119 = comp.call(null,k,tree.key);
if((c__14119 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__14119 < 0))
{var del__14120 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____14121 = !((del__14120 == null));
if(or__3824__auto____14121)
{return or__3824__auto____14121;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__14120,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__14120,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__14122 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____14123 = !((del__14122 == null));
if(or__3824__auto____14123)
{return or__3824__auto____14123;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__14122);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__14122,null));
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
var tk__14126 = tree.key;
var c__14127 = comp.call(null,k,tk__14126);
if((c__14127 === 0))
{return tree.replace(tk__14126,v,tree.left,tree.right);
} else
{if((c__14127 < 0))
{return tree.replace(tk__14126,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__14126,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14130 = this;
var h__6579__auto____14131 = this__14130.__hash;
if(!((h__6579__auto____14131 == null)))
{return h__6579__auto____14131;
} else
{var h__6579__auto____14132 = cljs.core.hash_imap.call(null,coll);
this__14130.__hash = h__6579__auto____14132;
return h__6579__auto____14132;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14133 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14134 = this;
var n__14135 = coll.entry_at(k);
if(!((n__14135 == null)))
{return n__14135.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14136 = this;
var found__14137 = [null];
var t__14138 = cljs.core.tree_map_add.call(null,this__14136.comp,this__14136.tree,k,v,found__14137);
if((t__14138 == null))
{var found_node__14139 = cljs.core.nth.call(null,found__14137,0);
if(cljs.core._EQ_.call(null,v,found_node__14139.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__14136.comp,cljs.core.tree_map_replace.call(null,this__14136.comp,this__14136.tree,k,v),this__14136.cnt,this__14136.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__14136.comp,t__14138.blacken(),(this__14136.cnt + 1),this__14136.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14140 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__14174 = null;
var G__14174__2 = (function (this_sym14141,k){
var this__14143 = this;
var this_sym14141__14144 = this;
var coll__14145 = this_sym14141__14144;
return coll__14145.cljs$core$ILookup$_lookup$arity$2(coll__14145,k);
});
var G__14174__3 = (function (this_sym14142,k,not_found){
var this__14143 = this;
var this_sym14142__14146 = this;
var coll__14147 = this_sym14142__14146;
return coll__14147.cljs$core$ILookup$_lookup$arity$3(coll__14147,k,not_found);
});
G__14174 = function(this_sym14142,k,not_found){
switch(arguments.length){
case 2:
return G__14174__2.call(this,this_sym14142,k);
case 3:
return G__14174__3.call(this,this_sym14142,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14174;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym14128,args14129){
var this__14148 = this;
return this_sym14128.call.apply(this_sym14128,[this_sym14128].concat(args14129.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__14149 = this;
if(!((this__14149.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__14149.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14150 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14151 = this;
if((this__14151.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14151.tree,false,this__14151.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__14152 = this;
var this__14153 = this;
return cljs.core.pr_str.call(null,this__14153);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__14154 = this;
var coll__14155 = this;
var t__14156 = this__14154.tree;
while(true){
if(!((t__14156 == null)))
{var c__14157 = this__14154.comp.call(null,k,t__14156.key);
if((c__14157 === 0))
{return t__14156;
} else
{if((c__14157 < 0))
{{
var G__14175 = t__14156.left;
t__14156 = G__14175;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__14176 = t__14156.right;
t__14156 = G__14176;
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
var this__14158 = this;
if((this__14158.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14158.tree,ascending_QMARK_,this__14158.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__14159 = this;
if((this__14159.cnt > 0))
{var stack__14160 = null;
var t__14161 = this__14159.tree;
while(true){
if(!((t__14161 == null)))
{var c__14162 = this__14159.comp.call(null,k,t__14161.key);
if((c__14162 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__14160,t__14161),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__14162 < 0))
{{
var G__14177 = cljs.core.conj.call(null,stack__14160,t__14161);
var G__14178 = t__14161.left;
stack__14160 = G__14177;
t__14161 = G__14178;
continue;
}
} else
{{
var G__14179 = stack__14160;
var G__14180 = t__14161.right;
stack__14160 = G__14179;
t__14161 = G__14180;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__14162 > 0))
{{
var G__14181 = cljs.core.conj.call(null,stack__14160,t__14161);
var G__14182 = t__14161.right;
stack__14160 = G__14181;
t__14161 = G__14182;
continue;
}
} else
{{
var G__14183 = stack__14160;
var G__14184 = t__14161.left;
stack__14160 = G__14183;
t__14161 = G__14184;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__14160 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__14160,ascending_QMARK_,-1,null));
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
var this__14163 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__14164 = this;
return this__14164.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14165 = this;
if((this__14165.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14165.tree,true,this__14165.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14166 = this;
return this__14166.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14167 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14168 = this;
return (new cljs.core.PersistentTreeMap(this__14168.comp,this__14168.tree,this__14168.cnt,meta,this__14168.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14169 = this;
return this__14169.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14170 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__14170.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14171 = this;
var found__14172 = [null];
var t__14173 = cljs.core.tree_map_remove.call(null,this__14171.comp,this__14171.tree,k,found__14172);
if((t__14173 == null))
{if((cljs.core.nth.call(null,found__14172,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__14171.comp,null,0,this__14171.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__14171.comp,t__14173.blacken(),(this__14171.cnt - 1),this__14171.meta,null));
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
var in__14187 = cljs.core.seq.call(null,keyvals);
var out__14188 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__14187)
{{
var G__14189 = cljs.core.nnext.call(null,in__14187);
var G__14190 = cljs.core.assoc_BANG_.call(null,out__14188,cljs.core.first.call(null,in__14187),cljs.core.second.call(null,in__14187));
in__14187 = G__14189;
out__14188 = G__14190;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14188);
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
hash_map.cljs$lang$applyTo = (function (arglist__14191){
var keyvals = cljs.core.seq(arglist__14191);;
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
array_map.cljs$lang$applyTo = (function (arglist__14192){
var keyvals = cljs.core.seq(arglist__14192);;
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
var ks__14196 = [];
var obj__14197 = {};
var kvs__14198 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__14198)
{ks__14196.push(cljs.core.first.call(null,kvs__14198));
(obj__14197[cljs.core.first.call(null,kvs__14198)] = cljs.core.second.call(null,kvs__14198));
{
var G__14199 = cljs.core.nnext.call(null,kvs__14198);
kvs__14198 = G__14199;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__14196,obj__14197);
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
obj_map.cljs$lang$applyTo = (function (arglist__14200){
var keyvals = cljs.core.seq(arglist__14200);;
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
var in__14203 = cljs.core.seq.call(null,keyvals);
var out__14204 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__14203)
{{
var G__14205 = cljs.core.nnext.call(null,in__14203);
var G__14206 = cljs.core.assoc.call(null,out__14204,cljs.core.first.call(null,in__14203),cljs.core.second.call(null,in__14203));
in__14203 = G__14205;
out__14204 = G__14206;
continue;
}
} else
{return out__14204;
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
sorted_map.cljs$lang$applyTo = (function (arglist__14207){
var keyvals = cljs.core.seq(arglist__14207);;
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
var in__14210 = cljs.core.seq.call(null,keyvals);
var out__14211 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__14210)
{{
var G__14212 = cljs.core.nnext.call(null,in__14210);
var G__14213 = cljs.core.assoc.call(null,out__14211,cljs.core.first.call(null,in__14210),cljs.core.second.call(null,in__14210));
in__14210 = G__14212;
out__14211 = G__14213;
continue;
}
} else
{return out__14211;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__14214){
var comparator = cljs.core.first(arglist__14214);
var keyvals = cljs.core.rest(arglist__14214);
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
{return cljs.core.reduce.call(null,(function (p1__14215_SHARP_,p2__14216_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____14218 = p1__14215_SHARP_;
if(cljs.core.truth_(or__3824__auto____14218))
{return or__3824__auto____14218;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__14216_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__14219){
var maps = cljs.core.seq(arglist__14219);;
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
{var merge_entry__14227 = (function (m,e){
var k__14225 = cljs.core.first.call(null,e);
var v__14226 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__14225))
{return cljs.core.assoc.call(null,m,k__14225,f.call(null,cljs.core._lookup.call(null,m,k__14225,null),v__14226));
} else
{return cljs.core.assoc.call(null,m,k__14225,v__14226);
}
});
var merge2__14229 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__14227,(function (){var or__3824__auto____14228 = m1;
if(cljs.core.truth_(or__3824__auto____14228))
{return or__3824__auto____14228;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__14229,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__14230){
var f = cljs.core.first(arglist__14230);
var maps = cljs.core.rest(arglist__14230);
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
var ret__14235 = cljs.core.ObjMap.EMPTY;
var keys__14236 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__14236)
{var key__14237 = cljs.core.first.call(null,keys__14236);
var entry__14238 = cljs.core._lookup.call(null,map,key__14237,"\uFDD0'cljs.core/not-found");
{
var G__14239 = ((cljs.core.not_EQ_.call(null,entry__14238,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__14235,key__14237,entry__14238):ret__14235);
var G__14240 = cljs.core.next.call(null,keys__14236);
ret__14235 = G__14239;
keys__14236 = G__14240;
continue;
}
} else
{return ret__14235;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14244 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__14244.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14245 = this;
var h__6579__auto____14246 = this__14245.__hash;
if(!((h__6579__auto____14246 == null)))
{return h__6579__auto____14246;
} else
{var h__6579__auto____14247 = cljs.core.hash_iset.call(null,coll);
this__14245.__hash = h__6579__auto____14247;
return h__6579__auto____14247;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__14248 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__14249 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14249.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__14270 = null;
var G__14270__2 = (function (this_sym14250,k){
var this__14252 = this;
var this_sym14250__14253 = this;
var coll__14254 = this_sym14250__14253;
return coll__14254.cljs$core$ILookup$_lookup$arity$2(coll__14254,k);
});
var G__14270__3 = (function (this_sym14251,k,not_found){
var this__14252 = this;
var this_sym14251__14255 = this;
var coll__14256 = this_sym14251__14255;
return coll__14256.cljs$core$ILookup$_lookup$arity$3(coll__14256,k,not_found);
});
G__14270 = function(this_sym14251,k,not_found){
switch(arguments.length){
case 2:
return G__14270__2.call(this,this_sym14251,k);
case 3:
return G__14270__3.call(this,this_sym14251,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14270;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym14242,args14243){
var this__14257 = this;
return this_sym14242.call.apply(this_sym14242,[this_sym14242].concat(args14243.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14258 = this;
return (new cljs.core.PersistentHashSet(this__14258.meta,cljs.core.assoc.call(null,this__14258.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__14259 = this;
var this__14260 = this;
return cljs.core.pr_str.call(null,this__14260);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14261 = this;
return cljs.core.keys.call(null,this__14261.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__14262 = this;
return (new cljs.core.PersistentHashSet(this__14262.meta,cljs.core.dissoc.call(null,this__14262.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14263 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14264 = this;
var and__3822__auto____14265 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____14265)
{var and__3822__auto____14266 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____14266)
{return cljs.core.every_QMARK_.call(null,(function (p1__14241_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14241_SHARP_);
}),other);
} else
{return and__3822__auto____14266;
}
} else
{return and__3822__auto____14265;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14267 = this;
return (new cljs.core.PersistentHashSet(meta,this__14267.hash_map,this__14267.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14268 = this;
return this__14268.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14269 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__14269.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__14271 = cljs.core.count.call(null,items);
var i__14272 = 0;
var out__14273 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__14272 < len__14271))
{{
var G__14274 = (i__14272 + 1);
var G__14275 = cljs.core.conj_BANG_.call(null,out__14273,(items[i__14272]));
i__14272 = G__14274;
out__14273 = G__14275;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14273);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__14293 = null;
var G__14293__2 = (function (this_sym14279,k){
var this__14281 = this;
var this_sym14279__14282 = this;
var tcoll__14283 = this_sym14279__14282;
if((cljs.core._lookup.call(null,this__14281.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__14293__3 = (function (this_sym14280,k,not_found){
var this__14281 = this;
var this_sym14280__14284 = this;
var tcoll__14285 = this_sym14280__14284;
if((cljs.core._lookup.call(null,this__14281.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__14293 = function(this_sym14280,k,not_found){
switch(arguments.length){
case 2:
return G__14293__2.call(this,this_sym14280,k);
case 3:
return G__14293__3.call(this,this_sym14280,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14293;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym14277,args14278){
var this__14286 = this;
return this_sym14277.call.apply(this_sym14277,[this_sym14277].concat(args14278.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__14287 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__14288 = this;
if((cljs.core._lookup.call(null,this__14288.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__14289 = this;
return cljs.core.count.call(null,this__14289.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__14290 = this;
this__14290.transient_map = cljs.core.dissoc_BANG_.call(null,this__14290.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__14291 = this;
this__14291.transient_map = cljs.core.assoc_BANG_.call(null,this__14291.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__14292 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__14292.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14296 = this;
var h__6579__auto____14297 = this__14296.__hash;
if(!((h__6579__auto____14297 == null)))
{return h__6579__auto____14297;
} else
{var h__6579__auto____14298 = cljs.core.hash_iset.call(null,coll);
this__14296.__hash = h__6579__auto____14298;
return h__6579__auto____14298;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__14299 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__14300 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14300.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__14326 = null;
var G__14326__2 = (function (this_sym14301,k){
var this__14303 = this;
var this_sym14301__14304 = this;
var coll__14305 = this_sym14301__14304;
return coll__14305.cljs$core$ILookup$_lookup$arity$2(coll__14305,k);
});
var G__14326__3 = (function (this_sym14302,k,not_found){
var this__14303 = this;
var this_sym14302__14306 = this;
var coll__14307 = this_sym14302__14306;
return coll__14307.cljs$core$ILookup$_lookup$arity$3(coll__14307,k,not_found);
});
G__14326 = function(this_sym14302,k,not_found){
switch(arguments.length){
case 2:
return G__14326__2.call(this,this_sym14302,k);
case 3:
return G__14326__3.call(this,this_sym14302,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14326;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym14294,args14295){
var this__14308 = this;
return this_sym14294.call.apply(this_sym14294,[this_sym14294].concat(args14295.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14309 = this;
return (new cljs.core.PersistentTreeSet(this__14309.meta,cljs.core.assoc.call(null,this__14309.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14310 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__14310.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__14311 = this;
var this__14312 = this;
return cljs.core.pr_str.call(null,this__14312);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__14313 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__14313.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__14314 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__14314.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__14315 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__14316 = this;
return cljs.core._comparator.call(null,this__14316.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14317 = this;
return cljs.core.keys.call(null,this__14317.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__14318 = this;
return (new cljs.core.PersistentTreeSet(this__14318.meta,cljs.core.dissoc.call(null,this__14318.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14319 = this;
return cljs.core.count.call(null,this__14319.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14320 = this;
var and__3822__auto____14321 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____14321)
{var and__3822__auto____14322 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____14322)
{return cljs.core.every_QMARK_.call(null,(function (p1__14276_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14276_SHARP_);
}),other);
} else
{return and__3822__auto____14322;
}
} else
{return and__3822__auto____14321;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14323 = this;
return (new cljs.core.PersistentTreeSet(meta,this__14323.tree_map,this__14323.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14324 = this;
return this__14324.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14325 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__14325.meta);
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
var G__14331__delegate = function (keys){
var in__14329 = cljs.core.seq.call(null,keys);
var out__14330 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__14329))
{{
var G__14332 = cljs.core.next.call(null,in__14329);
var G__14333 = cljs.core.conj_BANG_.call(null,out__14330,cljs.core.first.call(null,in__14329));
in__14329 = G__14332;
out__14330 = G__14333;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14330);
}
break;
}
};
var G__14331 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14331__delegate.call(this, keys);
};
G__14331.cljs$lang$maxFixedArity = 0;
G__14331.cljs$lang$applyTo = (function (arglist__14334){
var keys = cljs.core.seq(arglist__14334);;
return G__14331__delegate(keys);
});
G__14331.cljs$lang$arity$variadic = G__14331__delegate;
return G__14331;
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
sorted_set.cljs$lang$applyTo = (function (arglist__14335){
var keys = cljs.core.seq(arglist__14335);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__14337){
var comparator = cljs.core.first(arglist__14337);
var keys = cljs.core.rest(arglist__14337);
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
{var n__14343 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____14344 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____14344))
{var e__14345 = temp__3971__auto____14344;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__14345));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__14343,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__14336_SHARP_){
var temp__3971__auto____14346 = cljs.core.find.call(null,smap,p1__14336_SHARP_);
if(cljs.core.truth_(temp__3971__auto____14346))
{var e__14347 = temp__3971__auto____14346;
return cljs.core.second.call(null,e__14347);
} else
{return p1__14336_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__14377 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__14370,seen){
while(true){
var vec__14371__14372 = p__14370;
var f__14373 = cljs.core.nth.call(null,vec__14371__14372,0,null);
var xs__14374 = vec__14371__14372;
var temp__3974__auto____14375 = cljs.core.seq.call(null,xs__14374);
if(temp__3974__auto____14375)
{var s__14376 = temp__3974__auto____14375;
if(cljs.core.contains_QMARK_.call(null,seen,f__14373))
{{
var G__14378 = cljs.core.rest.call(null,s__14376);
var G__14379 = seen;
p__14370 = G__14378;
seen = G__14379;
continue;
}
} else
{return cljs.core.cons.call(null,f__14373,step.call(null,cljs.core.rest.call(null,s__14376),cljs.core.conj.call(null,seen,f__14373)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__14377.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__14382 = cljs.core.PersistentVector.EMPTY;
var s__14383 = s;
while(true){
if(cljs.core.next.call(null,s__14383))
{{
var G__14384 = cljs.core.conj.call(null,ret__14382,cljs.core.first.call(null,s__14383));
var G__14385 = cljs.core.next.call(null,s__14383);
ret__14382 = G__14384;
s__14383 = G__14385;
continue;
}
} else
{return cljs.core.seq.call(null,ret__14382);
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
{if((function (){var or__3824__auto____14388 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____14388)
{return or__3824__auto____14388;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__14389 = x.lastIndexOf("/");
if((i__14389 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__14389 + 1));
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
if((function (){var or__3824__auto____14392 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____14392)
{return or__3824__auto____14392;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__14393 = x.lastIndexOf("/");
if((i__14393 > -1))
{return cljs.core.subs.call(null,x,2,i__14393);
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
var map__14400 = cljs.core.ObjMap.EMPTY;
var ks__14401 = cljs.core.seq.call(null,keys);
var vs__14402 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____14403 = ks__14401;
if(and__3822__auto____14403)
{return vs__14402;
} else
{return and__3822__auto____14403;
}
})())
{{
var G__14404 = cljs.core.assoc.call(null,map__14400,cljs.core.first.call(null,ks__14401),cljs.core.first.call(null,vs__14402));
var G__14405 = cljs.core.next.call(null,ks__14401);
var G__14406 = cljs.core.next.call(null,vs__14402);
map__14400 = G__14404;
ks__14401 = G__14405;
vs__14402 = G__14406;
continue;
}
} else
{return map__14400;
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
var G__14409__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14394_SHARP_,p2__14395_SHARP_){
return max_key.call(null,k,p1__14394_SHARP_,p2__14395_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14409 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14409__delegate.call(this, k, x, y, more);
};
G__14409.cljs$lang$maxFixedArity = 3;
G__14409.cljs$lang$applyTo = (function (arglist__14410){
var k = cljs.core.first(arglist__14410);
var x = cljs.core.first(cljs.core.next(arglist__14410));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14410)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14410)));
return G__14409__delegate(k, x, y, more);
});
G__14409.cljs$lang$arity$variadic = G__14409__delegate;
return G__14409;
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
var G__14411__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14407_SHARP_,p2__14408_SHARP_){
return min_key.call(null,k,p1__14407_SHARP_,p2__14408_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14411 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14411__delegate.call(this, k, x, y, more);
};
G__14411.cljs$lang$maxFixedArity = 3;
G__14411.cljs$lang$applyTo = (function (arglist__14412){
var k = cljs.core.first(arglist__14412);
var x = cljs.core.first(cljs.core.next(arglist__14412));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14412)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14412)));
return G__14411__delegate(k, x, y, more);
});
G__14411.cljs$lang$arity$variadic = G__14411__delegate;
return G__14411;
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
var temp__3974__auto____14415 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14415)
{var s__14416 = temp__3974__auto____14415;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14416),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14416)));
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
var temp__3974__auto____14419 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14419)
{var s__14420 = temp__3974__auto____14419;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14420))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14420),take_while.call(null,pred,cljs.core.rest.call(null,s__14420)));
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
var comp__14422 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__14422.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__14434 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____14435 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____14435))
{var vec__14436__14437 = temp__3974__auto____14435;
var e__14438 = cljs.core.nth.call(null,vec__14436__14437,0,null);
var s__14439 = vec__14436__14437;
if(cljs.core.truth_(include__14434.call(null,e__14438)))
{return s__14439;
} else
{return cljs.core.next.call(null,s__14439);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__14434,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____14440 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____14440))
{var vec__14441__14442 = temp__3974__auto____14440;
var e__14443 = cljs.core.nth.call(null,vec__14441__14442,0,null);
var s__14444 = vec__14441__14442;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__14443))?s__14444:cljs.core.next.call(null,s__14444)));
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
var include__14456 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____14457 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____14457))
{var vec__14458__14459 = temp__3974__auto____14457;
var e__14460 = cljs.core.nth.call(null,vec__14458__14459,0,null);
var s__14461 = vec__14458__14459;
if(cljs.core.truth_(include__14456.call(null,e__14460)))
{return s__14461;
} else
{return cljs.core.next.call(null,s__14461);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__14456,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____14462 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____14462))
{var vec__14463__14464 = temp__3974__auto____14462;
var e__14465 = cljs.core.nth.call(null,vec__14463__14464,0,null);
var s__14466 = vec__14463__14464;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__14465))?s__14466:cljs.core.next.call(null,s__14466)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__14467 = this;
var h__6579__auto____14468 = this__14467.__hash;
if(!((h__6579__auto____14468 == null)))
{return h__6579__auto____14468;
} else
{var h__6579__auto____14469 = cljs.core.hash_coll.call(null,rng);
this__14467.__hash = h__6579__auto____14469;
return h__6579__auto____14469;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__14470 = this;
if((this__14470.step > 0))
{if(((this__14470.start + this__14470.step) < this__14470.end))
{return (new cljs.core.Range(this__14470.meta,(this__14470.start + this__14470.step),this__14470.end,this__14470.step,null));
} else
{return null;
}
} else
{if(((this__14470.start + this__14470.step) > this__14470.end))
{return (new cljs.core.Range(this__14470.meta,(this__14470.start + this__14470.step),this__14470.end,this__14470.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__14471 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__14472 = this;
var this__14473 = this;
return cljs.core.pr_str.call(null,this__14473);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__14474 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__14475 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__14476 = this;
if((this__14476.step > 0))
{if((this__14476.start < this__14476.end))
{return rng;
} else
{return null;
}
} else
{if((this__14476.start > this__14476.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__14477 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__14477.end - this__14477.start) / this__14477.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__14478 = this;
return this__14478.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__14479 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__14479.meta,(this__14479.start + this__14479.step),this__14479.end,this__14479.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__14480 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__14481 = this;
return (new cljs.core.Range(meta,this__14481.start,this__14481.end,this__14481.step,this__14481.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__14482 = this;
return this__14482.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__14483 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__14483.start + (n * this__14483.step));
} else
{if((function (){var and__3822__auto____14484 = (this__14483.start > this__14483.end);
if(and__3822__auto____14484)
{return (this__14483.step === 0);
} else
{return and__3822__auto____14484;
}
})())
{return this__14483.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__14485 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__14485.start + (n * this__14485.step));
} else
{if((function (){var and__3822__auto____14486 = (this__14485.start > this__14485.end);
if(and__3822__auto____14486)
{return (this__14485.step === 0);
} else
{return and__3822__auto____14486;
}
})())
{return this__14485.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__14487 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14487.meta);
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
var temp__3974__auto____14490 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14490)
{var s__14491 = temp__3974__auto____14490;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__14491),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14491)));
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
var temp__3974__auto____14498 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14498)
{var s__14499 = temp__3974__auto____14498;
var fst__14500 = cljs.core.first.call(null,s__14499);
var fv__14501 = f.call(null,fst__14500);
var run__14502 = cljs.core.cons.call(null,fst__14500,cljs.core.take_while.call(null,(function (p1__14492_SHARP_){
return cljs.core._EQ_.call(null,fv__14501,f.call(null,p1__14492_SHARP_));
}),cljs.core.next.call(null,s__14499)));
return cljs.core.cons.call(null,run__14502,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14502),s__14499))));
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
var temp__3971__auto____14517 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____14517)
{var s__14518 = temp__3971__auto____14517;
return reductions.call(null,f,cljs.core.first.call(null,s__14518),cljs.core.rest.call(null,s__14518));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14519 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14519)
{var s__14520 = temp__3974__auto____14519;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14520)),cljs.core.rest.call(null,s__14520));
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
var G__14523 = null;
var G__14523__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14523__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14523__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14523__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14523__4 = (function() { 
var G__14524__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14524 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14524__delegate.call(this, x, y, z, args);
};
G__14524.cljs$lang$maxFixedArity = 3;
G__14524.cljs$lang$applyTo = (function (arglist__14525){
var x = cljs.core.first(arglist__14525);
var y = cljs.core.first(cljs.core.next(arglist__14525));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14525)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14525)));
return G__14524__delegate(x, y, z, args);
});
G__14524.cljs$lang$arity$variadic = G__14524__delegate;
return G__14524;
})()
;
G__14523 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14523__0.call(this);
case 1:
return G__14523__1.call(this,x);
case 2:
return G__14523__2.call(this,x,y);
case 3:
return G__14523__3.call(this,x,y,z);
default:
return G__14523__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14523.cljs$lang$maxFixedArity = 3;
G__14523.cljs$lang$applyTo = G__14523__4.cljs$lang$applyTo;
return G__14523;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__14526 = null;
var G__14526__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14526__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14526__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14526__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14526__4 = (function() { 
var G__14527__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14527 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14527__delegate.call(this, x, y, z, args);
};
G__14527.cljs$lang$maxFixedArity = 3;
G__14527.cljs$lang$applyTo = (function (arglist__14528){
var x = cljs.core.first(arglist__14528);
var y = cljs.core.first(cljs.core.next(arglist__14528));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14528)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14528)));
return G__14527__delegate(x, y, z, args);
});
G__14527.cljs$lang$arity$variadic = G__14527__delegate;
return G__14527;
})()
;
G__14526 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14526__0.call(this);
case 1:
return G__14526__1.call(this,x);
case 2:
return G__14526__2.call(this,x,y);
case 3:
return G__14526__3.call(this,x,y,z);
default:
return G__14526__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14526.cljs$lang$maxFixedArity = 3;
G__14526.cljs$lang$applyTo = G__14526__4.cljs$lang$applyTo;
return G__14526;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__14529 = null;
var G__14529__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14529__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14529__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14529__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14529__4 = (function() { 
var G__14530__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14530__delegate.call(this, x, y, z, args);
};
G__14530.cljs$lang$maxFixedArity = 3;
G__14530.cljs$lang$applyTo = (function (arglist__14531){
var x = cljs.core.first(arglist__14531);
var y = cljs.core.first(cljs.core.next(arglist__14531));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14531)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14531)));
return G__14530__delegate(x, y, z, args);
});
G__14530.cljs$lang$arity$variadic = G__14530__delegate;
return G__14530;
})()
;
G__14529 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14529__0.call(this);
case 1:
return G__14529__1.call(this,x);
case 2:
return G__14529__2.call(this,x,y);
case 3:
return G__14529__3.call(this,x,y,z);
default:
return G__14529__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14529.cljs$lang$maxFixedArity = 3;
G__14529.cljs$lang$applyTo = G__14529__4.cljs$lang$applyTo;
return G__14529;
})()
});
var juxt__4 = (function() { 
var G__14532__delegate = function (f,g,h,fs){
var fs__14522 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__14533 = null;
var G__14533__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__14503_SHARP_,p2__14504_SHARP_){
return cljs.core.conj.call(null,p1__14503_SHARP_,p2__14504_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__14522);
});
var G__14533__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14505_SHARP_,p2__14506_SHARP_){
return cljs.core.conj.call(null,p1__14505_SHARP_,p2__14506_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__14522);
});
var G__14533__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14507_SHARP_,p2__14508_SHARP_){
return cljs.core.conj.call(null,p1__14507_SHARP_,p2__14508_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__14522);
});
var G__14533__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14509_SHARP_,p2__14510_SHARP_){
return cljs.core.conj.call(null,p1__14509_SHARP_,p2__14510_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__14522);
});
var G__14533__4 = (function() { 
var G__14534__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14511_SHARP_,p2__14512_SHARP_){
return cljs.core.conj.call(null,p1__14511_SHARP_,cljs.core.apply.call(null,p2__14512_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__14522);
};
var G__14534 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14534__delegate.call(this, x, y, z, args);
};
G__14534.cljs$lang$maxFixedArity = 3;
G__14534.cljs$lang$applyTo = (function (arglist__14535){
var x = cljs.core.first(arglist__14535);
var y = cljs.core.first(cljs.core.next(arglist__14535));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14535)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14535)));
return G__14534__delegate(x, y, z, args);
});
G__14534.cljs$lang$arity$variadic = G__14534__delegate;
return G__14534;
})()
;
G__14533 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14533__0.call(this);
case 1:
return G__14533__1.call(this,x);
case 2:
return G__14533__2.call(this,x,y);
case 3:
return G__14533__3.call(this,x,y,z);
default:
return G__14533__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14533.cljs$lang$maxFixedArity = 3;
G__14533.cljs$lang$applyTo = G__14533__4.cljs$lang$applyTo;
return G__14533;
})()
};
var G__14532 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14532__delegate.call(this, f, g, h, fs);
};
G__14532.cljs$lang$maxFixedArity = 3;
G__14532.cljs$lang$applyTo = (function (arglist__14536){
var f = cljs.core.first(arglist__14536);
var g = cljs.core.first(cljs.core.next(arglist__14536));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14536)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14536)));
return G__14532__delegate(f, g, h, fs);
});
G__14532.cljs$lang$arity$variadic = G__14532__delegate;
return G__14532;
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
var G__14539 = cljs.core.next.call(null,coll);
coll = G__14539;
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
if(cljs.core.truth_((function (){var and__3822__auto____14538 = cljs.core.seq.call(null,coll);
if(and__3822__auto____14538)
{return (n > 0);
} else
{return and__3822__auto____14538;
}
})()))
{{
var G__14540 = (n - 1);
var G__14541 = cljs.core.next.call(null,coll);
n = G__14540;
coll = G__14541;
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
var matches__14543 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14543),s))
{if((cljs.core.count.call(null,matches__14543) === 1))
{return cljs.core.first.call(null,matches__14543);
} else
{return cljs.core.vec.call(null,matches__14543);
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
var matches__14545 = re.exec(s);
if((matches__14545 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__14545) === 1))
{return cljs.core.first.call(null,matches__14545);
} else
{return cljs.core.vec.call(null,matches__14545);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14550 = cljs.core.re_find.call(null,re,s);
var match_idx__14551 = s.search(re);
var match_str__14552 = ((cljs.core.coll_QMARK_.call(null,match_data__14550))?cljs.core.first.call(null,match_data__14550):match_data__14550);
var post_match__14553 = cljs.core.subs.call(null,s,(match_idx__14551 + cljs.core.count.call(null,match_str__14552)));
if(cljs.core.truth_(match_data__14550))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14550,re_seq.call(null,re,post_match__14553));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__14560__14561 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___14562 = cljs.core.nth.call(null,vec__14560__14561,0,null);
var flags__14563 = cljs.core.nth.call(null,vec__14560__14561,1,null);
var pattern__14564 = cljs.core.nth.call(null,vec__14560__14561,2,null);
return (new RegExp(pattern__14564,flags__14563));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__14554_SHARP_){
return print_one.call(null,p1__14554_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__14568__14569 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__14568__14569)
{var o__14570 = cljs.core.first.call(null,G__14568__14569);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__14570,writer,opts);
{
var G__14571 = cljs.core.next.call(null,G__14568__14569);
G__14568__14569 = G__14571;
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
var G__14575__14576 = cljs.core.seq.call(null,ss);
while(true){
if(G__14575__14576)
{var s__14577 = cljs.core.first.call(null,G__14575__14576);
cljs.core._write.call(null,writer,s__14577);
{
var G__14578 = cljs.core.next.call(null,G__14575__14576);
G__14575__14576 = G__14578;
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
write_all.cljs$lang$applyTo = (function (arglist__14579){
var writer = cljs.core.first(arglist__14579);
var ss = cljs.core.rest(arglist__14579);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__14580 = this;
return this__14580.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__14581 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____14591 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____14591))
{var and__3822__auto____14595 = (function (){var G__14592__14593 = obj;
if(G__14592__14593)
{if((function (){var or__3824__auto____14594 = (G__14592__14593.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____14594)
{return or__3824__auto____14594;
} else
{return G__14592__14593.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__14592__14593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14592__14593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14592__14593);
}
})();
if(cljs.core.truth_(and__3822__auto____14595))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____14595;
}
} else
{return and__3822__auto____14591;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____14596 = !((obj == null));
if(and__3822__auto____14596)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____14596;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__14597__14598 = obj;
if(G__14597__14598)
{if((function (){var or__3824__auto____14599 = (G__14597__14598.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____14599)
{return or__3824__auto____14599;
} else
{return G__14597__14598.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__14597__14598.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14597__14598);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14597__14598);
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
{if(cljs.core.truth_((function (){var and__3822__auto____14612 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____14612))
{var and__3822__auto____14616 = (function (){var G__14613__14614 = obj;
if(G__14613__14614)
{if((function (){var or__3824__auto____14615 = (G__14613__14614.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____14615)
{return or__3824__auto____14615;
} else
{return G__14613__14614.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__14613__14614.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14613__14614);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14613__14614);
}
})();
if(cljs.core.truth_(and__3822__auto____14616))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____14616;
}
} else
{return and__3822__auto____14612;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____14617 = !((obj == null));
if(and__3822__auto____14617)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____14617;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__14618__14619 = obj;
if(G__14618__14619)
{if((function (){var or__3824__auto____14620 = (G__14618__14619.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____14620)
{return or__3824__auto____14620;
} else
{return G__14618__14619.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__14618__14619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__14618__14619);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__14618__14619);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__14621__14622 = obj;
if(G__14621__14622)
{if((function (){var or__3824__auto____14623 = (G__14621__14622.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____14623)
{return or__3824__auto____14623;
} else
{return G__14621__14622.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__14621__14622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14621__14622);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14621__14622);
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
var G__14627__14628 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__14627__14628)
{var obj__14629 = cljs.core.first.call(null,G__14627__14628);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__14629,writer,opts);
{
var G__14630 = cljs.core.next.call(null,G__14627__14628);
G__14627__14628 = G__14630;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__14633 = (new goog.string.StringBuffer());
var writer__14634 = (new cljs.core.StringBufferWriter(sb__14633));
cljs.core.pr_seq_writer.call(null,objs,writer__14634,opts);
cljs.core._flush.call(null,writer__14634);
return sb__14633;
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
{var sb__14636 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__14636.append("\n");
return [cljs.core.str(sb__14636)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__14637){
var objs = cljs.core.seq(arglist__14637);;
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
prn_str.cljs$lang$applyTo = (function (arglist__14638){
var objs = cljs.core.seq(arglist__14638);;
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
pr.cljs$lang$applyTo = (function (arglist__14639){
var objs = cljs.core.seq(arglist__14639);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14640){
var objs = cljs.core.seq(arglist__14640);;
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
print_str.cljs$lang$applyTo = (function (arglist__14641){
var objs = cljs.core.seq(arglist__14641);;
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
println.cljs$lang$applyTo = (function (arglist__14642){
var objs = cljs.core.seq(arglist__14642);;
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
println_str.cljs$lang$applyTo = (function (arglist__14643){
var objs = cljs.core.seq(arglist__14643);;
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
prn.cljs$lang$applyTo = (function (arglist__14644){
var objs = cljs.core.seq(arglist__14644);;
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
printf.cljs$lang$applyTo = (function (arglist__14645){
var fmt = cljs.core.first(arglist__14645);
var args = cljs.core.rest(arglist__14645);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14646 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14646,"{",", ","}",opts,coll);
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
var pr_pair__14647 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14647,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14648 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14648,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____14649 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14649))
{var nspc__14650 = temp__3974__auto____14649;
return [cljs.core.str(nspc__14650),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____14651 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14651))
{var nspc__14652 = temp__3974__auto____14651;
return [cljs.core.str(nspc__14652),cljs.core.str("/")].join('');
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
var pr_pair__14653 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14653,"{",", ","}",opts,coll);
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
var normalize__14655 = (function (n,len){
var ns__14654 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__14654) < len))
{{
var G__14657 = [cljs.core.str("0"),cljs.core.str(ns__14654)].join('');
ns__14654 = G__14657;
continue;
}
} else
{return ns__14654;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__14655.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__14655.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__14655.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__14655.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__14655.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__14655.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__14656 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14656,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__14658 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__14658,"{",", ","}",opts,coll);
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
var pr_pair__14659 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__14659,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__14660 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__14660,"{",", ","}",opts,coll);
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
var temp__3974__auto____14661 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14661))
{var nspc__14662 = temp__3974__auto____14661;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__14662)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____14663 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14663))
{var nspc__14664 = temp__3974__auto____14663;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__14664)].join(''),"/");
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
var pr_pair__14665 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__14665,"{",", ","}",opts,coll);
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
var normalize__14667 = (function (n,len){
var ns__14666 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__14666) < len))
{{
var G__14669 = [cljs.core.str("0"),cljs.core.str(ns__14666)].join('');
ns__14666 = G__14669;
continue;
}
} else
{return ns__14666;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__14667.call(null,(d.getUTCMonth() + 1),2),"-",normalize__14667.call(null,d.getUTCDate(),2),"T",normalize__14667.call(null,d.getUTCHours(),2),":",normalize__14667.call(null,d.getUTCMinutes(),2),":",normalize__14667.call(null,d.getUTCSeconds(),2),".",normalize__14667.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__14668 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__14668,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14670 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__14671 = this;
var G__14672__14673 = cljs.core.seq.call(null,this__14671.watches);
while(true){
if(G__14672__14673)
{var vec__14674__14675 = cljs.core.first.call(null,G__14672__14673);
var key__14676 = cljs.core.nth.call(null,vec__14674__14675,0,null);
var f__14677 = cljs.core.nth.call(null,vec__14674__14675,1,null);
f__14677.call(null,key__14676,this$,oldval,newval);
{
var G__14685 = cljs.core.next.call(null,G__14672__14673);
G__14672__14673 = G__14685;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__14678 = this;
return this$.watches = cljs.core.assoc.call(null,this__14678.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__14679 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14679.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__14680 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__14680.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__14681 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__14681.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__14682 = this;
return this__14682.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__14683 = this;
return this__14683.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__14684 = this;
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
var G__14697__delegate = function (x,p__14686){
var map__14692__14693 = p__14686;
var map__14692__14694 = ((cljs.core.seq_QMARK_.call(null,map__14692__14693))?cljs.core.apply.call(null,cljs.core.hash_map,map__14692__14693):map__14692__14693);
var validator__14695 = cljs.core._lookup.call(null,map__14692__14694,"\uFDD0'validator",null);
var meta__14696 = cljs.core._lookup.call(null,map__14692__14694,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__14696,validator__14695,null));
};
var G__14697 = function (x,var_args){
var p__14686 = null;
if (goog.isDef(var_args)) {
  p__14686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14697__delegate.call(this, x, p__14686);
};
G__14697.cljs$lang$maxFixedArity = 1;
G__14697.cljs$lang$applyTo = (function (arglist__14698){
var x = cljs.core.first(arglist__14698);
var p__14686 = cljs.core.rest(arglist__14698);
return G__14697__delegate(x, p__14686);
});
G__14697.cljs$lang$arity$variadic = G__14697__delegate;
return G__14697;
})()
;
atom = function(x,var_args){
var p__14686 = var_args;
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
var temp__3974__auto____14702 = a.validator;
if(cljs.core.truth_(temp__3974__auto____14702))
{var validate__14703 = temp__3974__auto____14702;
if(cljs.core.truth_(validate__14703.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__14704 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14704,new_value);
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
var G__14705__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14705 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14705__delegate.call(this, a, f, x, y, z, more);
};
G__14705.cljs$lang$maxFixedArity = 5;
G__14705.cljs$lang$applyTo = (function (arglist__14706){
var a = cljs.core.first(arglist__14706);
var f = cljs.core.first(cljs.core.next(arglist__14706));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14706)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14706))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14706)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14706)))));
return G__14705__delegate(a, f, x, y, z, more);
});
G__14705.cljs$lang$arity$variadic = G__14705__delegate;
return G__14705;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14707){
var iref = cljs.core.first(arglist__14707);
var f = cljs.core.first(cljs.core.next(arglist__14707));
var args = cljs.core.rest(cljs.core.next(arglist__14707));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__14708 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__14708.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__14709 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__14709.state,(function (p__14710){
var map__14711__14712 = p__14710;
var map__14711__14713 = ((cljs.core.seq_QMARK_.call(null,map__14711__14712))?cljs.core.apply.call(null,cljs.core.hash_map,map__14711__14712):map__14711__14712);
var curr_state__14714 = map__14711__14713;
var done__14715 = cljs.core._lookup.call(null,map__14711__14713,"\uFDD0'done",null);
if(cljs.core.truth_(done__14715))
{return curr_state__14714;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__14709.f.call(null)});
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
var map__14736__14737 = options;
var map__14736__14738 = ((cljs.core.seq_QMARK_.call(null,map__14736__14737))?cljs.core.apply.call(null,cljs.core.hash_map,map__14736__14737):map__14736__14737);
var keywordize_keys__14739 = cljs.core._lookup.call(null,map__14736__14738,"\uFDD0'keywordize-keys",null);
var keyfn__14740 = (cljs.core.truth_(keywordize_keys__14739)?cljs.core.keyword:cljs.core.str);
var f__14755 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__6860__auto____14754 = (function iter__14748(s__14749){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14749__14752 = s__14749;
while(true){
if(cljs.core.seq.call(null,s__14749__14752))
{var k__14753 = cljs.core.first.call(null,s__14749__14752);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__14740.call(null,k__14753),thisfn.call(null,(x[k__14753]))], true),iter__14748.call(null,cljs.core.rest.call(null,s__14749__14752)));
} else
{return null;
}
break;
}
}),null));
});
return iter__6860__auto____14754.call(null,cljs.core.js_keys.call(null,x));
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
return f__14755.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14756){
var x = cljs.core.first(arglist__14756);
var options = cljs.core.rest(arglist__14756);
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
var mem__14761 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__14765__delegate = function (args){
var temp__3971__auto____14762 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__14761),args,null);
if(cljs.core.truth_(temp__3971__auto____14762))
{var v__14763 = temp__3971__auto____14762;
return v__14763;
} else
{var ret__14764 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__14761,cljs.core.assoc,args,ret__14764);
return ret__14764;
}
};
var G__14765 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14765__delegate.call(this, args);
};
G__14765.cljs$lang$maxFixedArity = 0;
G__14765.cljs$lang$applyTo = (function (arglist__14766){
var args = cljs.core.seq(arglist__14766);;
return G__14765__delegate(args);
});
G__14765.cljs$lang$arity$variadic = G__14765__delegate;
return G__14765;
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
var ret__14768 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__14768))
{{
var G__14769 = ret__14768;
f = G__14769;
continue;
}
} else
{return ret__14768;
}
break;
}
});
var trampoline__2 = (function() { 
var G__14770__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14770 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14770__delegate.call(this, f, args);
};
G__14770.cljs$lang$maxFixedArity = 1;
G__14770.cljs$lang$applyTo = (function (arglist__14771){
var f = cljs.core.first(arglist__14771);
var args = cljs.core.rest(arglist__14771);
return G__14770__delegate(f, args);
});
G__14770.cljs$lang$arity$variadic = G__14770__delegate;
return G__14770;
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
var k__14773 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__14773,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__14773,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____14782 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____14782)
{return or__3824__auto____14782;
} else
{var or__3824__auto____14783 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____14783)
{return or__3824__auto____14783;
} else
{var and__3822__auto____14784 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____14784)
{var and__3822__auto____14785 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____14785)
{var and__3822__auto____14786 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____14786)
{var ret__14787 = true;
var i__14788 = 0;
while(true){
if((function (){var or__3824__auto____14789 = cljs.core.not.call(null,ret__14787);
if(or__3824__auto____14789)
{return or__3824__auto____14789;
} else
{return (i__14788 === cljs.core.count.call(null,parent));
}
})())
{return ret__14787;
} else
{{
var G__14790 = isa_QMARK_.call(null,h,child.call(null,i__14788),parent.call(null,i__14788));
var G__14791 = (i__14788 + 1);
ret__14787 = G__14790;
i__14788 = G__14791;
continue;
}
}
break;
}
} else
{return and__3822__auto____14786;
}
} else
{return and__3822__auto____14785;
}
} else
{return and__3822__auto____14784;
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
var tp__14800 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__14801 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__14802 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__14803 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____14804 = ((cljs.core.contains_QMARK_.call(null,tp__14800.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__14802.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__14802.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__14800,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__14803.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__14801,parent,ta__14802),"\uFDD0'descendants":tf__14803.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__14802,tag,td__14801)});
})());
if(cljs.core.truth_(or__3824__auto____14804))
{return or__3824__auto____14804;
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
var parentMap__14809 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__14810 = (cljs.core.truth_(parentMap__14809.call(null,tag))?cljs.core.disj.call(null,parentMap__14809.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__14811 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14810))?cljs.core.assoc.call(null,parentMap__14809,tag,childsParents__14810):cljs.core.dissoc.call(null,parentMap__14809,tag));
var deriv_seq__14812 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14792_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14792_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14792_SHARP_),cljs.core.second.call(null,p1__14792_SHARP_)));
}),cljs.core.seq.call(null,newParents__14811)));
if(cljs.core.contains_QMARK_.call(null,parentMap__14809.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__14793_SHARP_,p2__14794_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14793_SHARP_,p2__14794_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14812));
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
var xprefs__14820 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____14822 = (cljs.core.truth_((function (){var and__3822__auto____14821 = xprefs__14820;
if(cljs.core.truth_(and__3822__auto____14821))
{return xprefs__14820.call(null,y);
} else
{return and__3822__auto____14821;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____14822))
{return or__3824__auto____14822;
} else
{var or__3824__auto____14824 = (function (){var ps__14823 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__14823) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14823),prefer_table)))
{} else
{}
{
var G__14827 = cljs.core.rest.call(null,ps__14823);
ps__14823 = G__14827;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____14824))
{return or__3824__auto____14824;
} else
{var or__3824__auto____14826 = (function (){var ps__14825 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__14825) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14825),y,prefer_table)))
{} else
{}
{
var G__14828 = cljs.core.rest.call(null,ps__14825);
ps__14825 = G__14828;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____14826))
{return or__3824__auto____14826;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____14830 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____14830))
{return or__3824__auto____14830;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14848 = cljs.core.reduce.call(null,(function (be,p__14840){
var vec__14841__14842 = p__14840;
var k__14843 = cljs.core.nth.call(null,vec__14841__14842,0,null);
var ___14844 = cljs.core.nth.call(null,vec__14841__14842,1,null);
var e__14845 = vec__14841__14842;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14843))
{var be2__14847 = (cljs.core.truth_((function (){var or__3824__auto____14846 = (be == null);
if(or__3824__auto____14846)
{return or__3824__auto____14846;
} else
{return cljs.core.dominates.call(null,k__14843,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14845:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14847),k__14843,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__14843),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__14847)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__14847;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__14848))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14848));
return cljs.core.second.call(null,best_entry__14848);
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
if((function (){var and__3822__auto____14853 = mf;
if(and__3822__auto____14853)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____14853;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__6763__auto____14854 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14855 = (cljs.core._reset[goog.typeOf(x__6763__auto____14854)]);
if(or__3824__auto____14855)
{return or__3824__auto____14855;
} else
{var or__3824__auto____14856 = (cljs.core._reset["_"]);
if(or__3824__auto____14856)
{return or__3824__auto____14856;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____14861 = mf;
if(and__3822__auto____14861)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____14861;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__6763__auto____14862 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14863 = (cljs.core._add_method[goog.typeOf(x__6763__auto____14862)]);
if(or__3824__auto____14863)
{return or__3824__auto____14863;
} else
{var or__3824__auto____14864 = (cljs.core._add_method["_"]);
if(or__3824__auto____14864)
{return or__3824__auto____14864;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____14869 = mf;
if(and__3822__auto____14869)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____14869;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__6763__auto____14870 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14871 = (cljs.core._remove_method[goog.typeOf(x__6763__auto____14870)]);
if(or__3824__auto____14871)
{return or__3824__auto____14871;
} else
{var or__3824__auto____14872 = (cljs.core._remove_method["_"]);
if(or__3824__auto____14872)
{return or__3824__auto____14872;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____14877 = mf;
if(and__3822__auto____14877)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____14877;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__6763__auto____14878 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14879 = (cljs.core._prefer_method[goog.typeOf(x__6763__auto____14878)]);
if(or__3824__auto____14879)
{return or__3824__auto____14879;
} else
{var or__3824__auto____14880 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____14880)
{return or__3824__auto____14880;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____14885 = mf;
if(and__3822__auto____14885)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____14885;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__6763__auto____14886 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14887 = (cljs.core._get_method[goog.typeOf(x__6763__auto____14886)]);
if(or__3824__auto____14887)
{return or__3824__auto____14887;
} else
{var or__3824__auto____14888 = (cljs.core._get_method["_"]);
if(or__3824__auto____14888)
{return or__3824__auto____14888;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____14893 = mf;
if(and__3822__auto____14893)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____14893;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__6763__auto____14894 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14895 = (cljs.core._methods[goog.typeOf(x__6763__auto____14894)]);
if(or__3824__auto____14895)
{return or__3824__auto____14895;
} else
{var or__3824__auto____14896 = (cljs.core._methods["_"]);
if(or__3824__auto____14896)
{return or__3824__auto____14896;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____14901 = mf;
if(and__3822__auto____14901)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____14901;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__6763__auto____14902 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14903 = (cljs.core._prefers[goog.typeOf(x__6763__auto____14902)]);
if(or__3824__auto____14903)
{return or__3824__auto____14903;
} else
{var or__3824__auto____14904 = (cljs.core._prefers["_"]);
if(or__3824__auto____14904)
{return or__3824__auto____14904;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____14909 = mf;
if(and__3822__auto____14909)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____14909;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__6763__auto____14910 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____14911 = (cljs.core._dispatch[goog.typeOf(x__6763__auto____14910)]);
if(or__3824__auto____14911)
{return or__3824__auto____14911;
} else
{var or__3824__auto____14912 = (cljs.core._dispatch["_"]);
if(or__3824__auto____14912)
{return or__3824__auto____14912;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14915 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14916 = cljs.core._get_method.call(null,mf,dispatch_val__14915);
if(cljs.core.truth_(target_fn__14916))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__14915)].join('')));
}
return cljs.core.apply.call(null,target_fn__14916,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14917 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__14918 = this;
cljs.core.swap_BANG_.call(null,this__14918.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14918.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14918.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__14918.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__14919 = this;
cljs.core.swap_BANG_.call(null,this__14919.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14919.method_cache,this__14919.method_table,this__14919.cached_hierarchy,this__14919.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__14920 = this;
cljs.core.swap_BANG_.call(null,this__14920.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14920.method_cache,this__14920.method_table,this__14920.cached_hierarchy,this__14920.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__14921 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14921.cached_hierarchy),cljs.core.deref.call(null,this__14921.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__14921.method_cache,this__14921.method_table,this__14921.cached_hierarchy,this__14921.hierarchy);
}
var temp__3971__auto____14922 = cljs.core.deref.call(null,this__14921.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____14922))
{var target_fn__14923 = temp__3971__auto____14922;
return target_fn__14923;
} else
{var temp__3971__auto____14924 = cljs.core.find_and_cache_best_method.call(null,this__14921.name,dispatch_val,this__14921.hierarchy,this__14921.method_table,this__14921.prefer_table,this__14921.method_cache,this__14921.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____14924))
{var target_fn__14925 = temp__3971__auto____14924;
return target_fn__14925;
} else
{return cljs.core.deref.call(null,this__14921.method_table).call(null,this__14921.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14926 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14926.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__14926.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__14926.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14926.method_cache,this__14926.method_table,this__14926.cached_hierarchy,this__14926.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__14927 = this;
return cljs.core.deref.call(null,this__14927.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__14928 = this;
return cljs.core.deref.call(null,this__14928.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__14929 = this;
return cljs.core.do_dispatch.call(null,mf,this__14929.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14931__delegate = function (_,args){
var self__14930 = this;
return cljs.core._dispatch.call(null,self__14930,args);
};
var G__14931 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14931__delegate.call(this, _, args);
};
G__14931.cljs$lang$maxFixedArity = 1;
G__14931.cljs$lang$applyTo = (function (arglist__14932){
var _ = cljs.core.first(arglist__14932);
var args = cljs.core.rest(arglist__14932);
return G__14931__delegate(_, args);
});
G__14931.cljs$lang$arity$variadic = G__14931__delegate;
return G__14931;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__14933 = this;
return cljs.core._dispatch.call(null,self__14933,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14934 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_14936,writer,_){
var this__14935 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__14935.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_14938,_){
var this__14937 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__14937.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__14939 = this;
var and__3822__auto____14940 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____14940)
{return (this__14939.uuid === other.uuid);
} else
{return and__3822__auto____14940;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__14941 = this;
var this__14942 = this;
return cljs.core.pr_str.call(null,this__14942);
});
cljs.core.UUID;
