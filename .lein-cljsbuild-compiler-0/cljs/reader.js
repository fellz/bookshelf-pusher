goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____14356 = reader;
if(and__3822__auto____14356)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____14356;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5892__auto____14357 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____14358 = (cljs.reader.read_char[goog.typeOf(x__5892__auto____14357)]);
if(or__3824__auto____14358)
{return or__3824__auto____14358;
} else
{var or__3824__auto____14359 = (cljs.reader.read_char["_"]);
if(or__3824__auto____14359)
{return or__3824__auto____14359;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____14364 = reader;
if(and__3822__auto____14364)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____14364;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5892__auto____14365 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____14366 = (cljs.reader.unread[goog.typeOf(x__5892__auto____14365)]);
if(or__3824__auto____14366)
{return or__3824__auto____14366;
} else
{var or__3824__auto____14367 = (cljs.reader.unread["_"]);
if(or__3824__auto____14367)
{return or__3824__auto____14367;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5827__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5827__auto__,writer__5828__auto__){
return cljs.core._write.call(null,writer__5828__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__14368 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__14368.buffer_atom)))
{var idx__14369 = cljs.core.deref.call(null,this__14368.index_atom);
cljs.core.swap_BANG_.call(null,this__14368.index_atom,cljs.core.inc);
return (this__14368.s[idx__14369]);
} else
{var buf__14370 = cljs.core.deref.call(null,this__14368.buffer_atom);
cljs.core.swap_BANG_.call(null,this__14368.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__14370);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__14371 = this;
return cljs.core.swap_BANG_.call(null,this__14371.buffer_atom,(function (p1__14351_SHARP_){
return cljs.core.cons.call(null,ch,p1__14351_SHARP_);
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
var or__3824__auto____14373 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____14373))
{return or__3824__auto____14373;
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
var or__3824__auto____14378 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____14378)
{return or__3824__auto____14378;
} else
{var and__3822__auto____14380 = (function (){var or__3824__auto____14379 = ("+" === initch);
if(or__3824__auto____14379)
{return or__3824__auto____14379;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____14380))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__14381 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__14381);
return next_ch__14381;
})());
} else
{return and__3822__auto____14380;
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
reader_error.cljs$lang$applyTo = (function (arglist__14382){
var rdr = cljs.core.first(arglist__14382);
var msg = cljs.core.rest(arglist__14382);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____14386 = !((ch === "#"));
if(and__3822__auto____14386)
{var and__3822__auto____14387 = !((ch === "'"));
if(and__3822__auto____14387)
{var and__3822__auto____14388 = !((ch === ":"));
if(and__3822__auto____14388)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____14388;
}
} else
{return and__3822__auto____14387;
}
} else
{return and__3822__auto____14386;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__14393 = (new goog.string.StringBuffer(initch));
var ch__14394 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____14395 = (ch__14394 == null);
if(or__3824__auto____14395)
{return or__3824__auto____14395;
} else
{var or__3824__auto____14396 = cljs.reader.whitespace_QMARK_.call(null,ch__14394);
if(or__3824__auto____14396)
{return or__3824__auto____14396;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__14394);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__14394);
return sb__14393.toString();
} else
{{
var G__14397 = (function (){sb__14393.append(ch__14394);
return sb__14393;
})();
var G__14398 = cljs.reader.read_char.call(null,rdr);
sb__14393 = G__14397;
ch__14394 = G__14398;
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
var ch__14402 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____14403 = (ch__14402 === "n");
if(or__3824__auto____14403)
{return or__3824__auto____14403;
} else
{var or__3824__auto____14404 = (ch__14402 === "r");
if(or__3824__auto____14404)
{return or__3824__auto____14404;
} else
{return (ch__14402 == null);
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
var matches__14406 = re.exec(s);
if((matches__14406 == null))
{return null;
} else
{if((matches__14406.length === 1))
{return (matches__14406[0]);
} else
{return matches__14406;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__14414 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__14415 = (groups__14414[2]);
if(!((function (){var or__3824__auto____14416 = (group3__14415 == null);
if(or__3824__auto____14416)
{return or__3824__auto____14416;
} else
{return (group3__14415.length < 1);
}
})()))
{return 0;
} else
{var negate__14417 = ((("-" === (groups__14414[1])))?-1:1);
var a__14418 = (cljs.core.truth_((groups__14414[3]))?[(groups__14414[3]),10]:(cljs.core.truth_((groups__14414[4]))?[(groups__14414[4]),16]:(cljs.core.truth_((groups__14414[5]))?[(groups__14414[5]),8]:(cljs.core.truth_((groups__14414[7]))?[(groups__14414[7]),parseInt((groups__14414[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__14419 = (a__14418[0]);
var radix__14420 = (a__14418[1]);
if((n__14419 == null))
{return null;
} else
{return (negate__14417 * parseInt(n__14419,radix__14420));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__14424 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__14425 = (groups__14424[1]);
var denominator__14426 = (groups__14424[2]);
return (parseInt(numinator__14425) / parseInt(denominator__14426));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__14429 = re.exec(s);
if((function (){var and__3822__auto____14430 = !((matches__14429 == null));
if(and__3822__auto____14430)
{return ((matches__14429[0]) === s);
} else
{return and__3822__auto____14430;
}
})())
{if((matches__14429.length === 1))
{return (matches__14429[0]);
} else
{return matches__14429;
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
var code__14432 = parseInt(code_str,16);
return String.fromCharCode(code__14432);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__14435 = cljs.reader.read_char.call(null,reader);
var mapresult__14436 = cljs.reader.escape_char_map.call(null,ch__14435);
if(cljs.core.truth_(mapresult__14436))
{return mapresult__14436;
} else
{if((ch__14435 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__14435,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__14435 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__14435,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__14435))
{return String.fromCharCode(ch__14435);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__14435);
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
var ch__14438 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__14438)))
{{
var G__14439 = cljs.reader.read_char.call(null,rdr);
ch__14438 = G__14439;
continue;
}
} else
{return ch__14438;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__14446 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__14447 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__14447))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__14447))
{return cljs.core.persistent_BANG_.call(null,a__14446);
} else
{var temp__3971__auto____14448 = cljs.reader.macros.call(null,ch__14447);
if(cljs.core.truth_(temp__3971__auto____14448))
{var macrofn__14449 = temp__3971__auto____14448;
var mret__14450 = macrofn__14449.call(null,rdr,ch__14447);
{
var G__14452 = (((mret__14450 === rdr))?a__14446:cljs.core.conj_BANG_.call(null,a__14446,mret__14450));
a__14446 = G__14452;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__14447);
var o__14451 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__14453 = (((o__14451 === rdr))?a__14446:cljs.core.conj_BANG_.call(null,a__14446,o__14451));
a__14446 = G__14453;
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
var ch__14458 = cljs.reader.read_char.call(null,rdr);
var dm__14459 = cljs.reader.dispatch_macros.call(null,ch__14458);
if(cljs.core.truth_(dm__14459))
{return dm__14459.call(null,rdr,_);
} else
{var temp__3971__auto____14460 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__14458);
if(cljs.core.truth_(temp__3971__auto____14460))
{var obj__14461 = temp__3971__auto____14460;
return obj__14461;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__14458);
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
var l__14463 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__14463)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__14463);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__14470 = (new goog.string.StringBuffer(initch));
var ch__14471 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____14472 = (ch__14471 == null);
if(or__3824__auto____14472)
{return or__3824__auto____14472;
} else
{var or__3824__auto____14473 = cljs.reader.whitespace_QMARK_.call(null,ch__14471);
if(or__3824__auto____14473)
{return or__3824__auto____14473;
} else
{return cljs.reader.macros.call(null,ch__14471);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__14471);
var s__14474 = buffer__14470.toString();
var or__3824__auto____14475 = cljs.reader.match_number.call(null,s__14474);
if(cljs.core.truth_(or__3824__auto____14475))
{return or__3824__auto____14475;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__14474,"]");
}
} else
{{
var G__14476 = (function (){buffer__14470.append(ch__14471);
return buffer__14470;
})();
var G__14477 = cljs.reader.read_char.call(null,reader);
buffer__14470 = G__14476;
ch__14471 = G__14477;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__14480 = (new goog.string.StringBuffer());
var ch__14481 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__14481 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__14481))
{{
var G__14482 = (function (){buffer__14480.append(cljs.reader.escape_char.call(null,buffer__14480,reader));
return buffer__14480;
})();
var G__14483 = cljs.reader.read_char.call(null,reader);
buffer__14480 = G__14482;
ch__14481 = G__14483;
continue;
}
} else
{if(("\"" === ch__14481))
{return buffer__14480.toString();
} else
{if("\uFDD0'default")
{{
var G__14484 = (function (){buffer__14480.append(ch__14481);
return buffer__14480;
})();
var G__14485 = cljs.reader.read_char.call(null,reader);
buffer__14480 = G__14484;
ch__14481 = G__14485;
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
var token__14487 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__14487,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__14487,0,token__14487.indexOf("/")),cljs.core.subs.call(null,token__14487,(token__14487.indexOf("/") + 1),token__14487.length));
} else
{return cljs.reader.special_symbols.call(null,token__14487,cljs.core.symbol.call(null,token__14487));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__14497 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__14498 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__14497);
var token__14499 = (a__14498[0]);
var ns__14500 = (a__14498[1]);
var name__14501 = (a__14498[2]);
if(cljs.core.truth_((function (){var or__3824__auto____14503 = (function (){var and__3822__auto____14502 = !((void 0 === ns__14500));
if(and__3822__auto____14502)
{return (ns__14500.substring((ns__14500.length - 2),ns__14500.length) === ":/");
} else
{return and__3822__auto____14502;
}
})();
if(cljs.core.truth_(or__3824__auto____14503))
{return or__3824__auto____14503;
} else
{var or__3824__auto____14504 = ((name__14501[(name__14501.length - 1)]) === ":");
if(or__3824__auto____14504)
{return or__3824__auto____14504;
} else
{return !((token__14499.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__14499);
} else
{if((function (){var and__3822__auto____14505 = !((ns__14500 == null));
if(and__3822__auto____14505)
{return (ns__14500.length > 0);
} else
{return and__3822__auto____14505;
}
})())
{return cljs.core.keyword.call(null,ns__14500.substring(0,ns__14500.indexOf("/")),name__14501);
} else
{return cljs.core.keyword.call(null,token__14499);
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
var m__14511 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__14511))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__14512 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__14513__14514 = o__14512;
if(G__14513__14514)
{if((function (){var or__3824__auto____14515 = (G__14513__14514.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____14515)
{return or__3824__auto____14515;
} else
{return G__14513__14514.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__14513__14514.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__14513__14514);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__14513__14514);
}
})())
{return cljs.core.with_meta.call(null,o__14512,cljs.core.merge.call(null,cljs.core.meta.call(null,o__14512),m__14511));
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
var ch__14519 = cljs.reader.read_char.call(null,reader);
if((ch__14519 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__14519))
{{
var G__14522 = reader;
var G__14523 = eof_is_error;
var G__14524 = sentinel;
var G__14525 = is_recursive;
reader = G__14522;
eof_is_error = G__14523;
sentinel = G__14524;
is_recursive = G__14525;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__14519))
{{
var G__14526 = cljs.reader.read_comment.call(null,reader,ch__14519);
var G__14527 = eof_is_error;
var G__14528 = sentinel;
var G__14529 = is_recursive;
reader = G__14526;
eof_is_error = G__14527;
sentinel = G__14528;
is_recursive = G__14529;
continue;
}
} else
{if("\uFDD0'else")
{var f__14520 = cljs.reader.macros.call(null,ch__14519);
var res__14521 = (cljs.core.truth_(f__14520)?f__14520.call(null,reader,ch__14519):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__14519))?cljs.reader.read_number.call(null,reader,ch__14519):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__14519):null)));
if((res__14521 === reader))
{{
var G__14530 = reader;
var G__14531 = eof_is_error;
var G__14532 = sentinel;
var G__14533 = is_recursive;
reader = G__14530;
eof_is_error = G__14531;
sentinel = G__14532;
is_recursive = G__14533;
continue;
}
} else
{return res__14521;
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
var r__14535 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__14535,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__14537 = (new goog.string.StringBuffer(s));
while(true){
if((b__14537.getLength() < width))
{{
var G__14538 = b__14537.append("0");
b__14537 = G__14538;
continue;
}
} else
{return b__14537.toString();
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
var and__3822__auto____14541 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____14541))
{var or__3824__auto____14542 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____14542))
{return or__3824__auto____14542;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____14541;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__14547 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__14548 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__14548:dim_norm__14547),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__14549 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__14551 = (function (low,n,high,msg){
if((function (){var and__3822__auto____14550 = (low <= n);
if(and__3822__auto____14550)
{return (n <= high);
} else
{return and__3822__auto____14550;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____14552 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__14549,ts)));
if(cljs.core.truth_(temp__3974__auto____14552))
{var vec__14553__14556 = temp__3974__auto____14552;
var vec__14554__14557 = cljs.core.nth.call(null,vec__14553__14556,0,null);
var ___14558 = cljs.core.nth.call(null,vec__14554__14557,0,null);
var years__14559 = cljs.core.nth.call(null,vec__14554__14557,1,null);
var months__14560 = cljs.core.nth.call(null,vec__14554__14557,2,null);
var days__14561 = cljs.core.nth.call(null,vec__14554__14557,3,null);
var hours__14562 = cljs.core.nth.call(null,vec__14554__14557,4,null);
var minutes__14563 = cljs.core.nth.call(null,vec__14554__14557,5,null);
var seconds__14564 = cljs.core.nth.call(null,vec__14554__14557,6,null);
var milliseconds__14565 = cljs.core.nth.call(null,vec__14554__14557,7,null);
var vec__14555__14566 = cljs.core.nth.call(null,vec__14553__14556,1,null);
var ___14567 = cljs.core.nth.call(null,vec__14555__14566,0,null);
var ___14568 = cljs.core.nth.call(null,vec__14555__14566,1,null);
var ___14569 = cljs.core.nth.call(null,vec__14555__14566,2,null);
var V__14570 = vec__14553__14556;
var vec__14571__14574 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__14546_SHARP_){
return parseInt(p1__14546_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__14544_SHARP_,p2__14543_SHARP_){
return cljs.core.update_in.call(null,p2__14543_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__14544_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__14545_SHARP_){
if(cljs.core._EQ_.call(null,p1__14545_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__14570));
var vec__14572__14575 = cljs.core.nth.call(null,vec__14571__14574,0,null);
var ___14576 = cljs.core.nth.call(null,vec__14572__14575,0,null);
var y__14577 = cljs.core.nth.call(null,vec__14572__14575,1,null);
var mo__14578 = cljs.core.nth.call(null,vec__14572__14575,2,null);
var d__14579 = cljs.core.nth.call(null,vec__14572__14575,3,null);
var h__14580 = cljs.core.nth.call(null,vec__14572__14575,4,null);
var m__14581 = cljs.core.nth.call(null,vec__14572__14575,5,null);
var s__14582 = cljs.core.nth.call(null,vec__14572__14575,6,null);
var ms__14583 = cljs.core.nth.call(null,vec__14572__14575,7,null);
var vec__14573__14584 = cljs.core.nth.call(null,vec__14571__14574,1,null);
var offset_sign__14585 = cljs.core.nth.call(null,vec__14573__14584,0,null);
var offset_hours__14586 = cljs.core.nth.call(null,vec__14573__14584,1,null);
var offset_minutes__14587 = cljs.core.nth.call(null,vec__14573__14584,2,null);
var offset__14588 = (offset_sign__14585 * ((offset_hours__14586 * 60) + offset_minutes__14587));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__14559))?1970:y__14577),((cljs.core.not.call(null,months__14560))?1:check__14551.call(null,1,mo__14578,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__14561))?1:check__14551.call(null,1,d__14579,cljs.reader.days_in_month.call(null,mo__14578,cljs.reader.leap_year_QMARK_.call(null,y__14577)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__14562))?0:check__14551.call(null,0,h__14580,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__14563))?0:check__14551.call(null,0,m__14581,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__14564))?0:check__14551.call(null,0,s__14582,((cljs.core._EQ_.call(null,m__14581,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__14565))?0:check__14551.call(null,0,ms__14583,999,"timestamp millisecond field must be in range 0..999")),offset__14588], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____14600 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____14600))
{var vec__14601__14602 = temp__3971__auto____14600;
var years__14603 = cljs.core.nth.call(null,vec__14601__14602,0,null);
var months__14604 = cljs.core.nth.call(null,vec__14601__14602,1,null);
var days__14605 = cljs.core.nth.call(null,vec__14601__14602,2,null);
var hours__14606 = cljs.core.nth.call(null,vec__14601__14602,3,null);
var minutes__14607 = cljs.core.nth.call(null,vec__14601__14602,4,null);
var seconds__14608 = cljs.core.nth.call(null,vec__14601__14602,5,null);
var ms__14609 = cljs.core.nth.call(null,vec__14601__14602,6,null);
var offset__14610 = cljs.core.nth.call(null,vec__14601__14602,7,null);
return (new Date((Date.UTC(years__14603,(months__14604 - 1),days__14605,hours__14606,minutes__14607,seconds__14608,ms__14609) - ((offset__14610 * 60) * 1000))));
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
var tag__14614 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____14615 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__14614),null);
if(cljs.core.truth_(temp__3971__auto____14615))
{var pfn__14616 = temp__3971__auto____14615;
return pfn__14616.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__14614)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__14619 = cljs.core.name.call(null,tag);
var old_parser__14620 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__14619,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__14619,f);
return old_parser__14620;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__14623 = cljs.core.name.call(null,tag);
var old_parser__14624 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__14623,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__14623);
return old_parser__14624;
});
