goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____14336 = reader;
if(and__3822__auto____14336)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____14336;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5874__auto____14337 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____14338 = (cljs.reader.read_char[goog.typeOf(x__5874__auto____14337)]);
if(or__3824__auto____14338)
{return or__3824__auto____14338;
} else
{var or__3824__auto____14339 = (cljs.reader.read_char["_"]);
if(or__3824__auto____14339)
{return or__3824__auto____14339;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____14344 = reader;
if(and__3822__auto____14344)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____14344;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5874__auto____14345 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____14346 = (cljs.reader.unread[goog.typeOf(x__5874__auto____14345)]);
if(or__3824__auto____14346)
{return or__3824__auto____14346;
} else
{var or__3824__auto____14347 = (cljs.reader.unread["_"]);
if(or__3824__auto____14347)
{return or__3824__auto____14347;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

goog.provide('cljs.reader.StringPushbackReader');

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5809__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5809__auto__,writer__5810__auto__){
return cljs.core._write.call(null,writer__5810__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__14348 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__14348.buffer_atom)))
{var idx__14349 = cljs.core.deref.call(null,this__14348.index_atom);
cljs.core.swap_BANG_.call(null,this__14348.index_atom,cljs.core.inc);
return (this__14348.s[idx__14349]);
} else
{var buf__14350 = cljs.core.deref.call(null,this__14348.buffer_atom);
cljs.core.swap_BANG_.call(null,this__14348.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__14350);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__14351 = this;
return cljs.core.swap_BANG_.call(null,this__14351.buffer_atom,(function (p1__14331_SHARP_){
return cljs.core.cons.call(null,ch,p1__14331_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____14353 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____14353))
{return or__3824__auto____14353;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____14358 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____14358)
{return or__3824__auto____14358;
} else
{var and__3822__auto____14360 = (function (){var or__3824__auto____14359 = ("+" === initch);
if(or__3824__auto____14359)
{return or__3824__auto____14359;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____14360))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__14361 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__14361);
return next_ch__14361;
})());
} else
{return and__3822__auto____14360;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__14362){
var rdr = cljs.core.first(arglist__14362);
var msg = cljs.core.rest(arglist__14362);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____14366 = !((ch === "#"));
if(and__3822__auto____14366)
{var and__3822__auto____14367 = !((ch === "'"));
if(and__3822__auto____14367)
{var and__3822__auto____14368 = !((ch === ":"));
if(and__3822__auto____14368)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____14368;
}
} else
{return and__3822__auto____14367;
}
} else
{return and__3822__auto____14366;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__14373 = (new goog.string.StringBuffer(initch));
var ch__14374 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____14375 = (ch__14374 == null);
if(or__3824__auto____14375)
{return or__3824__auto____14375;
} else
{var or__3824__auto____14376 = cljs.reader.whitespace_QMARK_.call(null,ch__14374);
if(or__3824__auto____14376)
{return or__3824__auto____14376;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__14374);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__14374);
return sb__14373.toString();
} else
{{
var G__14377 = (function (){sb__14373.append(ch__14374);
return sb__14373;
})();
var G__14378 = cljs.reader.read_char.call(null,rdr);
sb__14373 = G__14377;
ch__14374 = G__14378;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__14382 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____14383 = (ch__14382 === "n");
if(or__3824__auto____14383)
{return or__3824__auto____14383;
} else
{var or__3824__auto____14384 = (ch__14382 === "r");
if(or__3824__auto____14384)
{return or__3824__auto____14384;
} else
{return (ch__14382 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__14386 = re.exec(s);
if((matches__14386 == null))
{return null;
} else
{if((matches__14386.length === 1))
{return (matches__14386[0]);
} else
{return matches__14386;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__14394 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__14395 = (groups__14394[2]);
if(!((function (){var or__3824__auto____14396 = (group3__14395 == null);
if(or__3824__auto____14396)
{return or__3824__auto____14396;
} else
{return (group3__14395.length < 1);
}
})()))
{return 0;
} else
{var negate__14397 = ((("-" === (groups__14394[1])))?-1:1);
var a__14398 = (cljs.core.truth_((groups__14394[3]))?[(groups__14394[3]),10]:(cljs.core.truth_((groups__14394[4]))?[(groups__14394[4]),16]:(cljs.core.truth_((groups__14394[5]))?[(groups__14394[5]),8]:(cljs.core.truth_((groups__14394[7]))?[(groups__14394[7]),parseInt((groups__14394[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__14399 = (a__14398[0]);
var radix__14400 = (a__14398[1]);
if((n__14399 == null))
{return null;
} else
{return (negate__14397 * parseInt(n__14399,radix__14400));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__14404 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__14405 = (groups__14404[1]);
var denominator__14406 = (groups__14404[2]);
return (parseInt(numinator__14405) / parseInt(denominator__14406));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__14409 = re.exec(s);
if((function (){var and__3822__auto____14410 = !((matches__14409 == null));
if(and__3822__auto____14410)
{return ((matches__14409[0]) === s);
} else
{return and__3822__auto____14410;
}
})())
{if((matches__14409.length === 1))
{return (matches__14409[0]);
} else
{return matches__14409;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__14412 = parseInt(code_str,16);
return String.fromCharCode(code__14412);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__14415 = cljs.reader.read_char.call(null,reader);
var mapresult__14416 = cljs.reader.escape_char_map.call(null,ch__14415);
if(cljs.core.truth_(mapresult__14416))
{return mapresult__14416;
} else
{if((ch__14415 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__14415,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__14415 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__14415,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__14415))
{return String.fromCharCode(ch__14415);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__14415);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__14418 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__14418)))
{{
var G__14419 = cljs.reader.read_char.call(null,rdr);
ch__14418 = G__14419;
continue;
}
} else
{return ch__14418;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__14426 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__14427 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__14427))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__14427))
{return cljs.core.persistent_BANG_.call(null,a__14426);
} else
{var temp__3971__auto____14428 = cljs.reader.macros.call(null,ch__14427);
if(cljs.core.truth_(temp__3971__auto____14428))
{var macrofn__14429 = temp__3971__auto____14428;
var mret__14430 = macrofn__14429.call(null,rdr,ch__14427);
{
var G__14432 = (((mret__14430 === rdr))?a__14426:cljs.core.conj_BANG_.call(null,a__14426,mret__14430));
a__14426 = G__14432;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__14427);
var o__14431 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__14433 = (((o__14431 === rdr))?a__14426:cljs.core.conj_BANG_.call(null,a__14426,o__14431));
a__14426 = G__14433;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__14438 = cljs.reader.read_char.call(null,rdr);
var dm__14439 = cljs.reader.dispatch_macros.call(null,ch__14438);
if(cljs.core.truth_(dm__14439))
{return dm__14439.call(null,rdr,_);
} else
{var temp__3971__auto____14440 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__14438);
if(cljs.core.truth_(temp__3971__auto____14440))
{var obj__14441 = temp__3971__auto____14440;
return obj__14441;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__14438);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__14443 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__14443)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__14443);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__14450 = (new goog.string.StringBuffer(initch));
var ch__14451 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____14452 = (ch__14451 == null);
if(or__3824__auto____14452)
{return or__3824__auto____14452;
} else
{var or__3824__auto____14453 = cljs.reader.whitespace_QMARK_.call(null,ch__14451);
if(or__3824__auto____14453)
{return or__3824__auto____14453;
} else
{return cljs.reader.macros.call(null,ch__14451);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__14451);
var s__14454 = buffer__14450.toString();
var or__3824__auto____14455 = cljs.reader.match_number.call(null,s__14454);
if(cljs.core.truth_(or__3824__auto____14455))
{return or__3824__auto____14455;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__14454,"]");
}
} else
{{
var G__14456 = (function (){buffer__14450.append(ch__14451);
return buffer__14450;
})();
var G__14457 = cljs.reader.read_char.call(null,reader);
buffer__14450 = G__14456;
ch__14451 = G__14457;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__14460 = (new goog.string.StringBuffer());
var ch__14461 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__14461 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__14461))
{{
var G__14462 = (function (){buffer__14460.append(cljs.reader.escape_char.call(null,buffer__14460,reader));
return buffer__14460;
})();
var G__14463 = cljs.reader.read_char.call(null,reader);
buffer__14460 = G__14462;
ch__14461 = G__14463;
continue;
}
} else
{if(("\"" === ch__14461))
{return buffer__14460.toString();
} else
{if("\uFDD0'default")
{{
var G__14464 = (function (){buffer__14460.append(ch__14461);
return buffer__14460;
})();
var G__14465 = cljs.reader.read_char.call(null,reader);
buffer__14460 = G__14464;
ch__14461 = G__14465;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
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
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__14467 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__14467,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__14467,0,token__14467.indexOf("/")),cljs.core.subs.call(null,token__14467,(token__14467.indexOf("/") + 1),token__14467.length));
} else
{return cljs.reader.special_symbols.call(null,token__14467,cljs.core.symbol.call(null,token__14467));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__14477 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__14478 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__14477);
var token__14479 = (a__14478[0]);
var ns__14480 = (a__14478[1]);
var name__14481 = (a__14478[2]);
if(cljs.core.truth_((function (){var or__3824__auto____14483 = (function (){var and__3822__auto____14482 = !((void 0 === ns__14480));
if(and__3822__auto____14482)
{return (ns__14480.substring((ns__14480.length - 2),ns__14480.length) === ":/");
} else
{return and__3822__auto____14482;
}
})();
if(cljs.core.truth_(or__3824__auto____14483))
{return or__3824__auto____14483;
} else
{var or__3824__auto____14484 = ((name__14481[(name__14481.length - 1)]) === ":");
if(or__3824__auto____14484)
{return or__3824__auto____14484;
} else
{return !((token__14479.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__14479);
} else
{if((function (){var and__3822__auto____14485 = !((ns__14480 == null));
if(and__3822__auto____14485)
{return (ns__14480.length > 0);
} else
{return and__3822__auto____14485;
}
})())
{return cljs.core.keyword.call(null,ns__14480.substring(0,ns__14480.indexOf("/")),name__14481);
} else
{return cljs.core.keyword.call(null,token__14479);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__14491 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__14491))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__14492 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__14493__14494 = o__14492;
if(G__14493__14494)
{if((function (){var or__3824__auto____14495 = (G__14493__14494.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____14495)
{return or__3824__auto____14495;
} else
{return G__14493__14494.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__14493__14494.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__14493__14494);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__14493__14494);
}
})())
{return cljs.core.with_meta.call(null,o__14492,cljs.core.merge.call(null,cljs.core.meta.call(null,o__14492),m__14491));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__14499 = cljs.reader.read_char.call(null,reader);
if((ch__14499 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__14499))
{{
var G__14502 = reader;
var G__14503 = eof_is_error;
var G__14504 = sentinel;
var G__14505 = is_recursive;
reader = G__14502;
eof_is_error = G__14503;
sentinel = G__14504;
is_recursive = G__14505;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__14499))
{{
var G__14506 = cljs.reader.read_comment.call(null,reader,ch__14499);
var G__14507 = eof_is_error;
var G__14508 = sentinel;
var G__14509 = is_recursive;
reader = G__14506;
eof_is_error = G__14507;
sentinel = G__14508;
is_recursive = G__14509;
continue;
}
} else
{if("\uFDD0'else")
{var f__14500 = cljs.reader.macros.call(null,ch__14499);
var res__14501 = (cljs.core.truth_(f__14500)?f__14500.call(null,reader,ch__14499):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__14499))?cljs.reader.read_number.call(null,reader,ch__14499):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__14499):null)));
if((res__14501 === reader))
{{
var G__14510 = reader;
var G__14511 = eof_is_error;
var G__14512 = sentinel;
var G__14513 = is_recursive;
reader = G__14510;
eof_is_error = G__14511;
sentinel = G__14512;
is_recursive = G__14513;
continue;
}
} else
{return res__14501;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__14515 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__14515,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__14517 = (new goog.string.StringBuffer(s));
while(true){
if((b__14517.getLength() < width))
{{
var G__14518 = b__14517.append("0");
b__14517 = G__14518;
continue;
}
} else
{return b__14517.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____14521 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____14521))
{var or__3824__auto____14522 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____14522))
{return or__3824__auto____14522;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____14521;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__14527 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__14528 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__14528:dim_norm__14527),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__14529 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__14531 = (function (low,n,high,msg){
if((function (){var and__3822__auto____14530 = (low <= n);
if(and__3822__auto____14530)
{return (n <= high);
} else
{return and__3822__auto____14530;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____14532 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__14529,ts)));
if(cljs.core.truth_(temp__3974__auto____14532))
{var vec__14533__14536 = temp__3974__auto____14532;
var vec__14534__14537 = cljs.core.nth.call(null,vec__14533__14536,0,null);
var ___14538 = cljs.core.nth.call(null,vec__14534__14537,0,null);
var years__14539 = cljs.core.nth.call(null,vec__14534__14537,1,null);
var months__14540 = cljs.core.nth.call(null,vec__14534__14537,2,null);
var days__14541 = cljs.core.nth.call(null,vec__14534__14537,3,null);
var hours__14542 = cljs.core.nth.call(null,vec__14534__14537,4,null);
var minutes__14543 = cljs.core.nth.call(null,vec__14534__14537,5,null);
var seconds__14544 = cljs.core.nth.call(null,vec__14534__14537,6,null);
var milliseconds__14545 = cljs.core.nth.call(null,vec__14534__14537,7,null);
var vec__14535__14546 = cljs.core.nth.call(null,vec__14533__14536,1,null);
var ___14547 = cljs.core.nth.call(null,vec__14535__14546,0,null);
var ___14548 = cljs.core.nth.call(null,vec__14535__14546,1,null);
var ___14549 = cljs.core.nth.call(null,vec__14535__14546,2,null);
var V__14550 = vec__14533__14536;
var vec__14551__14554 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__14526_SHARP_){
return parseInt(p1__14526_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__14524_SHARP_,p2__14523_SHARP_){
return cljs.core.update_in.call(null,p2__14523_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__14524_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__14525_SHARP_){
if(cljs.core._EQ_.call(null,p1__14525_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__14550));
var vec__14552__14555 = cljs.core.nth.call(null,vec__14551__14554,0,null);
var ___14556 = cljs.core.nth.call(null,vec__14552__14555,0,null);
var y__14557 = cljs.core.nth.call(null,vec__14552__14555,1,null);
var mo__14558 = cljs.core.nth.call(null,vec__14552__14555,2,null);
var d__14559 = cljs.core.nth.call(null,vec__14552__14555,3,null);
var h__14560 = cljs.core.nth.call(null,vec__14552__14555,4,null);
var m__14561 = cljs.core.nth.call(null,vec__14552__14555,5,null);
var s__14562 = cljs.core.nth.call(null,vec__14552__14555,6,null);
var ms__14563 = cljs.core.nth.call(null,vec__14552__14555,7,null);
var vec__14553__14564 = cljs.core.nth.call(null,vec__14551__14554,1,null);
var offset_sign__14565 = cljs.core.nth.call(null,vec__14553__14564,0,null);
var offset_hours__14566 = cljs.core.nth.call(null,vec__14553__14564,1,null);
var offset_minutes__14567 = cljs.core.nth.call(null,vec__14553__14564,2,null);
var offset__14568 = (offset_sign__14565 * ((offset_hours__14566 * 60) + offset_minutes__14567));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__14539))?1970:y__14557),((cljs.core.not.call(null,months__14540))?1:check__14531.call(null,1,mo__14558,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__14541))?1:check__14531.call(null,1,d__14559,cljs.reader.days_in_month.call(null,mo__14558,cljs.reader.leap_year_QMARK_.call(null,y__14557)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__14542))?0:check__14531.call(null,0,h__14560,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__14543))?0:check__14531.call(null,0,m__14561,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__14544))?0:check__14531.call(null,0,s__14562,((cljs.core._EQ_.call(null,m__14561,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__14545))?0:check__14531.call(null,0,ms__14563,999,"timestamp millisecond field must be in range 0..999")),offset__14568], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____14580 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____14580))
{var vec__14581__14582 = temp__3971__auto____14580;
var years__14583 = cljs.core.nth.call(null,vec__14581__14582,0,null);
var months__14584 = cljs.core.nth.call(null,vec__14581__14582,1,null);
var days__14585 = cljs.core.nth.call(null,vec__14581__14582,2,null);
var hours__14586 = cljs.core.nth.call(null,vec__14581__14582,3,null);
var minutes__14587 = cljs.core.nth.call(null,vec__14581__14582,4,null);
var seconds__14588 = cljs.core.nth.call(null,vec__14581__14582,5,null);
var ms__14589 = cljs.core.nth.call(null,vec__14581__14582,6,null);
var offset__14590 = cljs.core.nth.call(null,vec__14581__14582,7,null);
return (new Date((Date.UTC(years__14583,(months__14584 - 1),days__14585,hours__14586,minutes__14587,seconds__14588,ms__14589) - ((offset__14590 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__14594 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____14595 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__14594),null);
if(cljs.core.truth_(temp__3971__auto____14595))
{var pfn__14596 = temp__3971__auto____14595;
return pfn__14596.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__14594)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__14599 = cljs.core.name.call(null,tag);
var old_parser__14600 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__14599,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__14599,f);
return old_parser__14600;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__14603 = cljs.core.name.call(null,tag);
var old_parser__14604 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__14603,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__14603);
return old_parser__14604;
});
