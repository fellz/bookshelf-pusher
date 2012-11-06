goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____126412 = reader;
if(and__3822__auto____126412)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____126412;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5628__auto____126413 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____126414 = (cljs.reader.read_char[goog.typeOf(x__5628__auto____126413)]);
if(or__3824__auto____126414)
{return or__3824__auto____126414;
} else
{var or__3824__auto____126415 = (cljs.reader.read_char["_"]);
if(or__3824__auto____126415)
{return or__3824__auto____126415;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____126420 = reader;
if(and__3822__auto____126420)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____126420;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5628__auto____126421 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____126422 = (cljs.reader.unread[goog.typeOf(x__5628__auto____126421)]);
if(or__3824__auto____126422)
{return or__3824__auto____126422;
} else
{var or__3824__auto____126423 = (cljs.reader.unread["_"]);
if(or__3824__auto____126423)
{return or__3824__auto____126423;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5563__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5563__auto__,writer__5564__auto__){
return cljs.core._write.call(null,writer__5564__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__126424 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__126424.buffer_atom)))
{var idx__126425 = cljs.core.deref.call(null,this__126424.index_atom);
cljs.core.swap_BANG_.call(null,this__126424.index_atom,cljs.core.inc);
return (this__126424.s[idx__126425]);
} else
{var buf__126426 = cljs.core.deref.call(null,this__126424.buffer_atom);
cljs.core.swap_BANG_.call(null,this__126424.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__126426);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__126427 = this;
return cljs.core.swap_BANG_.call(null,this__126427.buffer_atom,(function (p1__126407_SHARP_){
return cljs.core.cons.call(null,ch,p1__126407_SHARP_);
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
var or__3824__auto____126429 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____126429))
{return or__3824__auto____126429;
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
var or__3824__auto____126434 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____126434)
{return or__3824__auto____126434;
} else
{var and__3822__auto____126436 = (function (){var or__3824__auto____126435 = ("+" === initch);
if(or__3824__auto____126435)
{return or__3824__auto____126435;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____126436))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__126437 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__126437);
return next_ch__126437;
})());
} else
{return and__3822__auto____126436;
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
reader_error.cljs$lang$applyTo = (function (arglist__126438){
var rdr = cljs.core.first(arglist__126438);
var msg = cljs.core.rest(arglist__126438);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____126442 = !((ch === "#"));
if(and__3822__auto____126442)
{var and__3822__auto____126443 = !((ch === "'"));
if(and__3822__auto____126443)
{var and__3822__auto____126444 = !((ch === ":"));
if(and__3822__auto____126444)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____126444;
}
} else
{return and__3822__auto____126443;
}
} else
{return and__3822__auto____126442;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__126449 = (new goog.string.StringBuffer(initch));
var ch__126450 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____126451 = (ch__126450 == null);
if(or__3824__auto____126451)
{return or__3824__auto____126451;
} else
{var or__3824__auto____126452 = cljs.reader.whitespace_QMARK_.call(null,ch__126450);
if(or__3824__auto____126452)
{return or__3824__auto____126452;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__126450);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__126450);
return sb__126449.toString();
} else
{{
var G__126453 = (function (){sb__126449.append(ch__126450);
return sb__126449;
})();
var G__126454 = cljs.reader.read_char.call(null,rdr);
sb__126449 = G__126453;
ch__126450 = G__126454;
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
var ch__126458 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____126459 = (ch__126458 === "n");
if(or__3824__auto____126459)
{return or__3824__auto____126459;
} else
{var or__3824__auto____126460 = (ch__126458 === "r");
if(or__3824__auto____126460)
{return or__3824__auto____126460;
} else
{return (ch__126458 == null);
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
var matches__126462 = re.exec(s);
if((matches__126462 == null))
{return null;
} else
{if((matches__126462.length === 1))
{return (matches__126462[0]);
} else
{return matches__126462;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__126470 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__126471 = (groups__126470[2]);
if(!((function (){var or__3824__auto____126472 = (group3__126471 == null);
if(or__3824__auto____126472)
{return or__3824__auto____126472;
} else
{return (group3__126471.length < 1);
}
})()))
{return 0;
} else
{var negate__126473 = ((("-" === (groups__126470[1])))?-1:1);
var a__126474 = (cljs.core.truth_((groups__126470[3]))?[(groups__126470[3]),10]:(cljs.core.truth_((groups__126470[4]))?[(groups__126470[4]),16]:(cljs.core.truth_((groups__126470[5]))?[(groups__126470[5]),8]:(cljs.core.truth_((groups__126470[7]))?[(groups__126470[7]),parseInt((groups__126470[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__126475 = (a__126474[0]);
var radix__126476 = (a__126474[1]);
if((n__126475 == null))
{return null;
} else
{return (negate__126473 * parseInt(n__126475,radix__126476));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__126480 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__126481 = (groups__126480[1]);
var denominator__126482 = (groups__126480[2]);
return (parseInt(numinator__126481) / parseInt(denominator__126482));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__126485 = re.exec(s);
if((function (){var and__3822__auto____126486 = !((matches__126485 == null));
if(and__3822__auto____126486)
{return ((matches__126485[0]) === s);
} else
{return and__3822__auto____126486;
}
})())
{if((matches__126485.length === 1))
{return (matches__126485[0]);
} else
{return matches__126485;
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
var code__126488 = parseInt(code_str,16);
return String.fromCharCode(code__126488);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__126491 = cljs.reader.read_char.call(null,reader);
var mapresult__126492 = cljs.reader.escape_char_map.call(null,ch__126491);
if(cljs.core.truth_(mapresult__126492))
{return mapresult__126492;
} else
{if((ch__126491 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__126491,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__126491 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__126491,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__126491))
{return String.fromCharCode(ch__126491);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__126491);
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
var ch__126494 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__126494)))
{{
var G__126495 = cljs.reader.read_char.call(null,rdr);
ch__126494 = G__126495;
continue;
}
} else
{return ch__126494;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__126502 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__126503 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__126503))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__126503))
{return cljs.core.persistent_BANG_.call(null,a__126502);
} else
{var temp__3971__auto____126504 = cljs.reader.macros.call(null,ch__126503);
if(cljs.core.truth_(temp__3971__auto____126504))
{var macrofn__126505 = temp__3971__auto____126504;
var mret__126506 = macrofn__126505.call(null,rdr,ch__126503);
{
var G__126508 = (((mret__126506 === rdr))?a__126502:cljs.core.conj_BANG_.call(null,a__126502,mret__126506));
a__126502 = G__126508;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__126503);
var o__126507 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__126509 = (((o__126507 === rdr))?a__126502:cljs.core.conj_BANG_.call(null,a__126502,o__126507));
a__126502 = G__126509;
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
var ch__126514 = cljs.reader.read_char.call(null,rdr);
var dm__126515 = cljs.reader.dispatch_macros.call(null,ch__126514);
if(cljs.core.truth_(dm__126515))
{return dm__126515.call(null,rdr,_);
} else
{var temp__3971__auto____126516 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__126514);
if(cljs.core.truth_(temp__3971__auto____126516))
{var obj__126517 = temp__3971__auto____126516;
return obj__126517;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__126514);
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
var l__126519 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__126519)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__126519);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__126526 = (new goog.string.StringBuffer(initch));
var ch__126527 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____126528 = (ch__126527 == null);
if(or__3824__auto____126528)
{return or__3824__auto____126528;
} else
{var or__3824__auto____126529 = cljs.reader.whitespace_QMARK_.call(null,ch__126527);
if(or__3824__auto____126529)
{return or__3824__auto____126529;
} else
{return cljs.reader.macros.call(null,ch__126527);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__126527);
var s__126530 = buffer__126526.toString();
var or__3824__auto____126531 = cljs.reader.match_number.call(null,s__126530);
if(cljs.core.truth_(or__3824__auto____126531))
{return or__3824__auto____126531;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__126530,"]");
}
} else
{{
var G__126532 = (function (){buffer__126526.append(ch__126527);
return buffer__126526;
})();
var G__126533 = cljs.reader.read_char.call(null,reader);
buffer__126526 = G__126532;
ch__126527 = G__126533;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__126536 = (new goog.string.StringBuffer());
var ch__126537 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__126537 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__126537))
{{
var G__126538 = (function (){buffer__126536.append(cljs.reader.escape_char.call(null,buffer__126536,reader));
return buffer__126536;
})();
var G__126539 = cljs.reader.read_char.call(null,reader);
buffer__126536 = G__126538;
ch__126537 = G__126539;
continue;
}
} else
{if(("\"" === ch__126537))
{return buffer__126536.toString();
} else
{if("\uFDD0'default")
{{
var G__126540 = (function (){buffer__126536.append(ch__126537);
return buffer__126536;
})();
var G__126541 = cljs.reader.read_char.call(null,reader);
buffer__126536 = G__126540;
ch__126537 = G__126541;
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
var token__126543 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__126543,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__126543,0,token__126543.indexOf("/")),cljs.core.subs.call(null,token__126543,(token__126543.indexOf("/") + 1),token__126543.length));
} else
{return cljs.reader.special_symbols.call(null,token__126543,cljs.core.symbol.call(null,token__126543));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__126553 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__126554 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__126553);
var token__126555 = (a__126554[0]);
var ns__126556 = (a__126554[1]);
var name__126557 = (a__126554[2]);
if(cljs.core.truth_((function (){var or__3824__auto____126559 = (function (){var and__3822__auto____126558 = !((void 0 === ns__126556));
if(and__3822__auto____126558)
{return (ns__126556.substring((ns__126556.length - 2),ns__126556.length) === ":/");
} else
{return and__3822__auto____126558;
}
})();
if(cljs.core.truth_(or__3824__auto____126559))
{return or__3824__auto____126559;
} else
{var or__3824__auto____126560 = ((name__126557[(name__126557.length - 1)]) === ":");
if(or__3824__auto____126560)
{return or__3824__auto____126560;
} else
{return !((token__126555.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__126555);
} else
{if((function (){var and__3822__auto____126561 = !((ns__126556 == null));
if(and__3822__auto____126561)
{return (ns__126556.length > 0);
} else
{return and__3822__auto____126561;
}
})())
{return cljs.core.keyword.call(null,ns__126556.substring(0,ns__126556.indexOf("/")),name__126557);
} else
{return cljs.core.keyword.call(null,token__126555);
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
var m__126567 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__126567))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__126568 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__126569__126570 = o__126568;
if(G__126569__126570)
{if((function (){var or__3824__auto____126571 = (G__126569__126570.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____126571)
{return or__3824__auto____126571;
} else
{return G__126569__126570.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__126569__126570.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__126569__126570);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__126569__126570);
}
})())
{return cljs.core.with_meta.call(null,o__126568,cljs.core.merge.call(null,cljs.core.meta.call(null,o__126568),m__126567));
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
var ch__126575 = cljs.reader.read_char.call(null,reader);
if((ch__126575 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__126575))
{{
var G__126578 = reader;
var G__126579 = eof_is_error;
var G__126580 = sentinel;
var G__126581 = is_recursive;
reader = G__126578;
eof_is_error = G__126579;
sentinel = G__126580;
is_recursive = G__126581;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__126575))
{{
var G__126582 = cljs.reader.read_comment.call(null,reader,ch__126575);
var G__126583 = eof_is_error;
var G__126584 = sentinel;
var G__126585 = is_recursive;
reader = G__126582;
eof_is_error = G__126583;
sentinel = G__126584;
is_recursive = G__126585;
continue;
}
} else
{if("\uFDD0'else")
{var f__126576 = cljs.reader.macros.call(null,ch__126575);
var res__126577 = (cljs.core.truth_(f__126576)?f__126576.call(null,reader,ch__126575):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__126575))?cljs.reader.read_number.call(null,reader,ch__126575):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__126575):null)));
if((res__126577 === reader))
{{
var G__126586 = reader;
var G__126587 = eof_is_error;
var G__126588 = sentinel;
var G__126589 = is_recursive;
reader = G__126586;
eof_is_error = G__126587;
sentinel = G__126588;
is_recursive = G__126589;
continue;
}
} else
{return res__126577;
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
var r__126591 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__126591,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__126593 = (new goog.string.StringBuffer(s));
while(true){
if((b__126593.getLength() < width))
{{
var G__126594 = b__126593.append("0");
b__126593 = G__126594;
continue;
}
} else
{return b__126593.toString();
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
var and__3822__auto____126597 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____126597))
{var or__3824__auto____126598 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____126598))
{return or__3824__auto____126598;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____126597;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__126603 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__126604 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__126604:dim_norm__126603),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__126605 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__126607 = (function (low,n,high,msg){
if((function (){var and__3822__auto____126606 = (low <= n);
if(and__3822__auto____126606)
{return (n <= high);
} else
{return and__3822__auto____126606;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____126608 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__126605,ts)));
if(cljs.core.truth_(temp__3974__auto____126608))
{var vec__126609__126612 = temp__3974__auto____126608;
var vec__126610__126613 = cljs.core.nth.call(null,vec__126609__126612,0,null);
var ___126614 = cljs.core.nth.call(null,vec__126610__126613,0,null);
var years__126615 = cljs.core.nth.call(null,vec__126610__126613,1,null);
var months__126616 = cljs.core.nth.call(null,vec__126610__126613,2,null);
var days__126617 = cljs.core.nth.call(null,vec__126610__126613,3,null);
var hours__126618 = cljs.core.nth.call(null,vec__126610__126613,4,null);
var minutes__126619 = cljs.core.nth.call(null,vec__126610__126613,5,null);
var seconds__126620 = cljs.core.nth.call(null,vec__126610__126613,6,null);
var milliseconds__126621 = cljs.core.nth.call(null,vec__126610__126613,7,null);
var vec__126611__126622 = cljs.core.nth.call(null,vec__126609__126612,1,null);
var ___126623 = cljs.core.nth.call(null,vec__126611__126622,0,null);
var ___126624 = cljs.core.nth.call(null,vec__126611__126622,1,null);
var ___126625 = cljs.core.nth.call(null,vec__126611__126622,2,null);
var V__126626 = vec__126609__126612;
var vec__126627__126630 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__126602_SHARP_){
return parseInt(p1__126602_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__126600_SHARP_,p2__126599_SHARP_){
return cljs.core.update_in.call(null,p2__126599_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__126600_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__126601_SHARP_){
if(cljs.core._EQ_.call(null,p1__126601_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__126626));
var vec__126628__126631 = cljs.core.nth.call(null,vec__126627__126630,0,null);
var ___126632 = cljs.core.nth.call(null,vec__126628__126631,0,null);
var y__126633 = cljs.core.nth.call(null,vec__126628__126631,1,null);
var mo__126634 = cljs.core.nth.call(null,vec__126628__126631,2,null);
var d__126635 = cljs.core.nth.call(null,vec__126628__126631,3,null);
var h__126636 = cljs.core.nth.call(null,vec__126628__126631,4,null);
var m__126637 = cljs.core.nth.call(null,vec__126628__126631,5,null);
var s__126638 = cljs.core.nth.call(null,vec__126628__126631,6,null);
var ms__126639 = cljs.core.nth.call(null,vec__126628__126631,7,null);
var vec__126629__126640 = cljs.core.nth.call(null,vec__126627__126630,1,null);
var offset_sign__126641 = cljs.core.nth.call(null,vec__126629__126640,0,null);
var offset_hours__126642 = cljs.core.nth.call(null,vec__126629__126640,1,null);
var offset_minutes__126643 = cljs.core.nth.call(null,vec__126629__126640,2,null);
var offset__126644 = (offset_sign__126641 * ((offset_hours__126642 * 60) + offset_minutes__126643));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__126615))?1970:y__126633),((cljs.core.not.call(null,months__126616))?1:check__126607.call(null,1,mo__126634,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__126617))?1:check__126607.call(null,1,d__126635,cljs.reader.days_in_month.call(null,mo__126634,cljs.reader.leap_year_QMARK_.call(null,y__126633)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__126618))?0:check__126607.call(null,0,h__126636,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__126619))?0:check__126607.call(null,0,m__126637,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__126620))?0:check__126607.call(null,0,s__126638,((cljs.core._EQ_.call(null,m__126637,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__126621))?0:check__126607.call(null,0,ms__126639,999,"timestamp millisecond field must be in range 0..999")),offset__126644], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____126656 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____126656))
{var vec__126657__126658 = temp__3971__auto____126656;
var years__126659 = cljs.core.nth.call(null,vec__126657__126658,0,null);
var months__126660 = cljs.core.nth.call(null,vec__126657__126658,1,null);
var days__126661 = cljs.core.nth.call(null,vec__126657__126658,2,null);
var hours__126662 = cljs.core.nth.call(null,vec__126657__126658,3,null);
var minutes__126663 = cljs.core.nth.call(null,vec__126657__126658,4,null);
var seconds__126664 = cljs.core.nth.call(null,vec__126657__126658,5,null);
var ms__126665 = cljs.core.nth.call(null,vec__126657__126658,6,null);
var offset__126666 = cljs.core.nth.call(null,vec__126657__126658,7,null);
return (new Date((Date.UTC(years__126659,(months__126660 - 1),days__126661,hours__126662,minutes__126663,seconds__126664,ms__126665) - ((offset__126666 * 60) * 1000))));
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
var tag__126670 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____126671 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__126670),null);
if(cljs.core.truth_(temp__3971__auto____126671))
{var pfn__126672 = temp__3971__auto____126671;
return pfn__126672.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__126670)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__126675 = cljs.core.name.call(null,tag);
var old_parser__126676 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__126675,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__126675,f);
return old_parser__126676;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__126679 = cljs.core.name.call(null,tag);
var old_parser__126680 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__126679,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__126679);
return old_parser__126680;
});
