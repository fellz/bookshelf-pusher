goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____15220 = reader;
if(and__3822__auto____15220)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____15220;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__6763__auto____15221 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____15222 = (cljs.reader.read_char[goog.typeOf(x__6763__auto____15221)]);
if(or__3824__auto____15222)
{return or__3824__auto____15222;
} else
{var or__3824__auto____15223 = (cljs.reader.read_char["_"]);
if(or__3824__auto____15223)
{return or__3824__auto____15223;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____15228 = reader;
if(and__3822__auto____15228)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____15228;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__6763__auto____15229 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____15230 = (cljs.reader.unread[goog.typeOf(x__6763__auto____15229)]);
if(or__3824__auto____15230)
{return or__3824__auto____15230;
} else
{var or__3824__auto____15231 = (cljs.reader.unread["_"]);
if(or__3824__auto____15231)
{return or__3824__auto____15231;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__6698__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__6698__auto__,writer__6699__auto__){
return cljs.core._write.call(null,writer__6699__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__15232 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__15232.buffer_atom)))
{var idx__15233 = cljs.core.deref.call(null,this__15232.index_atom);
cljs.core.swap_BANG_.call(null,this__15232.index_atom,cljs.core.inc);
return (this__15232.s[idx__15233]);
} else
{var buf__15234 = cljs.core.deref.call(null,this__15232.buffer_atom);
cljs.core.swap_BANG_.call(null,this__15232.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__15234);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__15235 = this;
return cljs.core.swap_BANG_.call(null,this__15235.buffer_atom,(function (p1__15215_SHARP_){
return cljs.core.cons.call(null,ch,p1__15215_SHARP_);
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
var or__3824__auto____15237 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____15237))
{return or__3824__auto____15237;
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
var or__3824__auto____15242 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____15242)
{return or__3824__auto____15242;
} else
{var and__3822__auto____15244 = (function (){var or__3824__auto____15243 = ("+" === initch);
if(or__3824__auto____15243)
{return or__3824__auto____15243;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____15244))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__15245 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__15245);
return next_ch__15245;
})());
} else
{return and__3822__auto____15244;
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
reader_error.cljs$lang$applyTo = (function (arglist__15246){
var rdr = cljs.core.first(arglist__15246);
var msg = cljs.core.rest(arglist__15246);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____15250 = !((ch === "#"));
if(and__3822__auto____15250)
{var and__3822__auto____15251 = !((ch === "'"));
if(and__3822__auto____15251)
{var and__3822__auto____15252 = !((ch === ":"));
if(and__3822__auto____15252)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____15252;
}
} else
{return and__3822__auto____15251;
}
} else
{return and__3822__auto____15250;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__15257 = (new goog.string.StringBuffer(initch));
var ch__15258 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____15259 = (ch__15258 == null);
if(or__3824__auto____15259)
{return or__3824__auto____15259;
} else
{var or__3824__auto____15260 = cljs.reader.whitespace_QMARK_.call(null,ch__15258);
if(or__3824__auto____15260)
{return or__3824__auto____15260;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__15258);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__15258);
return sb__15257.toString();
} else
{{
var G__15261 = (function (){sb__15257.append(ch__15258);
return sb__15257;
})();
var G__15262 = cljs.reader.read_char.call(null,rdr);
sb__15257 = G__15261;
ch__15258 = G__15262;
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
var ch__15266 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____15267 = (ch__15266 === "n");
if(or__3824__auto____15267)
{return or__3824__auto____15267;
} else
{var or__3824__auto____15268 = (ch__15266 === "r");
if(or__3824__auto____15268)
{return or__3824__auto____15268;
} else
{return (ch__15266 == null);
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
var matches__15270 = re.exec(s);
if((matches__15270 == null))
{return null;
} else
{if((matches__15270.length === 1))
{return (matches__15270[0]);
} else
{return matches__15270;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__15278 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__15279 = (groups__15278[2]);
if(!((function (){var or__3824__auto____15280 = (group3__15279 == null);
if(or__3824__auto____15280)
{return or__3824__auto____15280;
} else
{return (group3__15279.length < 1);
}
})()))
{return 0;
} else
{var negate__15281 = ((("-" === (groups__15278[1])))?-1:1);
var a__15282 = (cljs.core.truth_((groups__15278[3]))?[(groups__15278[3]),10]:(cljs.core.truth_((groups__15278[4]))?[(groups__15278[4]),16]:(cljs.core.truth_((groups__15278[5]))?[(groups__15278[5]),8]:(cljs.core.truth_((groups__15278[7]))?[(groups__15278[7]),parseInt((groups__15278[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__15283 = (a__15282[0]);
var radix__15284 = (a__15282[1]);
if((n__15283 == null))
{return null;
} else
{return (negate__15281 * parseInt(n__15283,radix__15284));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__15288 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__15289 = (groups__15288[1]);
var denominator__15290 = (groups__15288[2]);
return (parseInt(numinator__15289) / parseInt(denominator__15290));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__15293 = re.exec(s);
if((function (){var and__3822__auto____15294 = !((matches__15293 == null));
if(and__3822__auto____15294)
{return ((matches__15293[0]) === s);
} else
{return and__3822__auto____15294;
}
})())
{if((matches__15293.length === 1))
{return (matches__15293[0]);
} else
{return matches__15293;
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
var code__15296 = parseInt(code_str,16);
return String.fromCharCode(code__15296);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__15299 = cljs.reader.read_char.call(null,reader);
var mapresult__15300 = cljs.reader.escape_char_map.call(null,ch__15299);
if(cljs.core.truth_(mapresult__15300))
{return mapresult__15300;
} else
{if((ch__15299 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__15299,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__15299 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__15299,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__15299))
{return String.fromCharCode(ch__15299);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__15299);
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
var ch__15302 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__15302)))
{{
var G__15303 = cljs.reader.read_char.call(null,rdr);
ch__15302 = G__15303;
continue;
}
} else
{return ch__15302;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__15310 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__15311 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__15311))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__15311))
{return cljs.core.persistent_BANG_.call(null,a__15310);
} else
{var temp__3971__auto____15312 = cljs.reader.macros.call(null,ch__15311);
if(cljs.core.truth_(temp__3971__auto____15312))
{var macrofn__15313 = temp__3971__auto____15312;
var mret__15314 = macrofn__15313.call(null,rdr,ch__15311);
{
var G__15316 = (((mret__15314 === rdr))?a__15310:cljs.core.conj_BANG_.call(null,a__15310,mret__15314));
a__15310 = G__15316;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__15311);
var o__15315 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__15317 = (((o__15315 === rdr))?a__15310:cljs.core.conj_BANG_.call(null,a__15310,o__15315));
a__15310 = G__15317;
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
var ch__15322 = cljs.reader.read_char.call(null,rdr);
var dm__15323 = cljs.reader.dispatch_macros.call(null,ch__15322);
if(cljs.core.truth_(dm__15323))
{return dm__15323.call(null,rdr,_);
} else
{var temp__3971__auto____15324 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__15322);
if(cljs.core.truth_(temp__3971__auto____15324))
{var obj__15325 = temp__3971__auto____15324;
return obj__15325;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__15322);
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
var l__15327 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__15327)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__15327);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__15334 = (new goog.string.StringBuffer(initch));
var ch__15335 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____15336 = (ch__15335 == null);
if(or__3824__auto____15336)
{return or__3824__auto____15336;
} else
{var or__3824__auto____15337 = cljs.reader.whitespace_QMARK_.call(null,ch__15335);
if(or__3824__auto____15337)
{return or__3824__auto____15337;
} else
{return cljs.reader.macros.call(null,ch__15335);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__15335);
var s__15338 = buffer__15334.toString();
var or__3824__auto____15339 = cljs.reader.match_number.call(null,s__15338);
if(cljs.core.truth_(or__3824__auto____15339))
{return or__3824__auto____15339;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__15338,"]");
}
} else
{{
var G__15340 = (function (){buffer__15334.append(ch__15335);
return buffer__15334;
})();
var G__15341 = cljs.reader.read_char.call(null,reader);
buffer__15334 = G__15340;
ch__15335 = G__15341;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__15344 = (new goog.string.StringBuffer());
var ch__15345 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__15345 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__15345))
{{
var G__15346 = (function (){buffer__15344.append(cljs.reader.escape_char.call(null,buffer__15344,reader));
return buffer__15344;
})();
var G__15347 = cljs.reader.read_char.call(null,reader);
buffer__15344 = G__15346;
ch__15345 = G__15347;
continue;
}
} else
{if(("\"" === ch__15345))
{return buffer__15344.toString();
} else
{if("\uFDD0'default")
{{
var G__15348 = (function (){buffer__15344.append(ch__15345);
return buffer__15344;
})();
var G__15349 = cljs.reader.read_char.call(null,reader);
buffer__15344 = G__15348;
ch__15345 = G__15349;
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
var token__15351 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__15351,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__15351,0,token__15351.indexOf("/")),cljs.core.subs.call(null,token__15351,(token__15351.indexOf("/") + 1),token__15351.length));
} else
{return cljs.reader.special_symbols.call(null,token__15351,cljs.core.symbol.call(null,token__15351));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__15361 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__15362 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__15361);
var token__15363 = (a__15362[0]);
var ns__15364 = (a__15362[1]);
var name__15365 = (a__15362[2]);
if(cljs.core.truth_((function (){var or__3824__auto____15367 = (function (){var and__3822__auto____15366 = !((void 0 === ns__15364));
if(and__3822__auto____15366)
{return (ns__15364.substring((ns__15364.length - 2),ns__15364.length) === ":/");
} else
{return and__3822__auto____15366;
}
})();
if(cljs.core.truth_(or__3824__auto____15367))
{return or__3824__auto____15367;
} else
{var or__3824__auto____15368 = ((name__15365[(name__15365.length - 1)]) === ":");
if(or__3824__auto____15368)
{return or__3824__auto____15368;
} else
{return !((token__15363.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__15363);
} else
{if((function (){var and__3822__auto____15369 = !((ns__15364 == null));
if(and__3822__auto____15369)
{return (ns__15364.length > 0);
} else
{return and__3822__auto____15369;
}
})())
{return cljs.core.keyword.call(null,ns__15364.substring(0,ns__15364.indexOf("/")),name__15365);
} else
{return cljs.core.keyword.call(null,token__15363);
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
var m__15375 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__15375))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__15376 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__15377__15378 = o__15376;
if(G__15377__15378)
{if((function (){var or__3824__auto____15379 = (G__15377__15378.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____15379)
{return or__3824__auto____15379;
} else
{return G__15377__15378.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__15377__15378.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__15377__15378);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__15377__15378);
}
})())
{return cljs.core.with_meta.call(null,o__15376,cljs.core.merge.call(null,cljs.core.meta.call(null,o__15376),m__15375));
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
var ch__15383 = cljs.reader.read_char.call(null,reader);
if((ch__15383 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__15383))
{{
var G__15386 = reader;
var G__15387 = eof_is_error;
var G__15388 = sentinel;
var G__15389 = is_recursive;
reader = G__15386;
eof_is_error = G__15387;
sentinel = G__15388;
is_recursive = G__15389;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__15383))
{{
var G__15390 = cljs.reader.read_comment.call(null,reader,ch__15383);
var G__15391 = eof_is_error;
var G__15392 = sentinel;
var G__15393 = is_recursive;
reader = G__15390;
eof_is_error = G__15391;
sentinel = G__15392;
is_recursive = G__15393;
continue;
}
} else
{if("\uFDD0'else")
{var f__15384 = cljs.reader.macros.call(null,ch__15383);
var res__15385 = (cljs.core.truth_(f__15384)?f__15384.call(null,reader,ch__15383):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__15383))?cljs.reader.read_number.call(null,reader,ch__15383):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__15383):null)));
if((res__15385 === reader))
{{
var G__15394 = reader;
var G__15395 = eof_is_error;
var G__15396 = sentinel;
var G__15397 = is_recursive;
reader = G__15394;
eof_is_error = G__15395;
sentinel = G__15396;
is_recursive = G__15397;
continue;
}
} else
{return res__15385;
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
var r__15399 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__15399,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__15401 = (new goog.string.StringBuffer(s));
while(true){
if((b__15401.getLength() < width))
{{
var G__15402 = b__15401.append("0");
b__15401 = G__15402;
continue;
}
} else
{return b__15401.toString();
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
var and__3822__auto____15405 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____15405))
{var or__3824__auto____15406 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____15406))
{return or__3824__auto____15406;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____15405;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__15411 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__15412 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__15412:dim_norm__15411),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__15413 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__15415 = (function (low,n,high,msg){
if((function (){var and__3822__auto____15414 = (low <= n);
if(and__3822__auto____15414)
{return (n <= high);
} else
{return and__3822__auto____15414;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____15416 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__15413,ts)));
if(cljs.core.truth_(temp__3974__auto____15416))
{var vec__15417__15420 = temp__3974__auto____15416;
var vec__15418__15421 = cljs.core.nth.call(null,vec__15417__15420,0,null);
var ___15422 = cljs.core.nth.call(null,vec__15418__15421,0,null);
var years__15423 = cljs.core.nth.call(null,vec__15418__15421,1,null);
var months__15424 = cljs.core.nth.call(null,vec__15418__15421,2,null);
var days__15425 = cljs.core.nth.call(null,vec__15418__15421,3,null);
var hours__15426 = cljs.core.nth.call(null,vec__15418__15421,4,null);
var minutes__15427 = cljs.core.nth.call(null,vec__15418__15421,5,null);
var seconds__15428 = cljs.core.nth.call(null,vec__15418__15421,6,null);
var milliseconds__15429 = cljs.core.nth.call(null,vec__15418__15421,7,null);
var vec__15419__15430 = cljs.core.nth.call(null,vec__15417__15420,1,null);
var ___15431 = cljs.core.nth.call(null,vec__15419__15430,0,null);
var ___15432 = cljs.core.nth.call(null,vec__15419__15430,1,null);
var ___15433 = cljs.core.nth.call(null,vec__15419__15430,2,null);
var V__15434 = vec__15417__15420;
var vec__15435__15438 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__15410_SHARP_){
return parseInt(p1__15410_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__15408_SHARP_,p2__15407_SHARP_){
return cljs.core.update_in.call(null,p2__15407_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__15408_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__15409_SHARP_){
if(cljs.core._EQ_.call(null,p1__15409_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__15434));
var vec__15436__15439 = cljs.core.nth.call(null,vec__15435__15438,0,null);
var ___15440 = cljs.core.nth.call(null,vec__15436__15439,0,null);
var y__15441 = cljs.core.nth.call(null,vec__15436__15439,1,null);
var mo__15442 = cljs.core.nth.call(null,vec__15436__15439,2,null);
var d__15443 = cljs.core.nth.call(null,vec__15436__15439,3,null);
var h__15444 = cljs.core.nth.call(null,vec__15436__15439,4,null);
var m__15445 = cljs.core.nth.call(null,vec__15436__15439,5,null);
var s__15446 = cljs.core.nth.call(null,vec__15436__15439,6,null);
var ms__15447 = cljs.core.nth.call(null,vec__15436__15439,7,null);
var vec__15437__15448 = cljs.core.nth.call(null,vec__15435__15438,1,null);
var offset_sign__15449 = cljs.core.nth.call(null,vec__15437__15448,0,null);
var offset_hours__15450 = cljs.core.nth.call(null,vec__15437__15448,1,null);
var offset_minutes__15451 = cljs.core.nth.call(null,vec__15437__15448,2,null);
var offset__15452 = (offset_sign__15449 * ((offset_hours__15450 * 60) + offset_minutes__15451));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__15423))?1970:y__15441),((cljs.core.not.call(null,months__15424))?1:check__15415.call(null,1,mo__15442,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__15425))?1:check__15415.call(null,1,d__15443,cljs.reader.days_in_month.call(null,mo__15442,cljs.reader.leap_year_QMARK_.call(null,y__15441)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__15426))?0:check__15415.call(null,0,h__15444,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__15427))?0:check__15415.call(null,0,m__15445,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__15428))?0:check__15415.call(null,0,s__15446,((cljs.core._EQ_.call(null,m__15445,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__15429))?0:check__15415.call(null,0,ms__15447,999,"timestamp millisecond field must be in range 0..999")),offset__15452], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____15464 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____15464))
{var vec__15465__15466 = temp__3971__auto____15464;
var years__15467 = cljs.core.nth.call(null,vec__15465__15466,0,null);
var months__15468 = cljs.core.nth.call(null,vec__15465__15466,1,null);
var days__15469 = cljs.core.nth.call(null,vec__15465__15466,2,null);
var hours__15470 = cljs.core.nth.call(null,vec__15465__15466,3,null);
var minutes__15471 = cljs.core.nth.call(null,vec__15465__15466,4,null);
var seconds__15472 = cljs.core.nth.call(null,vec__15465__15466,5,null);
var ms__15473 = cljs.core.nth.call(null,vec__15465__15466,6,null);
var offset__15474 = cljs.core.nth.call(null,vec__15465__15466,7,null);
return (new Date((Date.UTC(years__15467,(months__15468 - 1),days__15469,hours__15470,minutes__15471,seconds__15472,ms__15473) - ((offset__15474 * 60) * 1000))));
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
var tag__15478 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____15479 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__15478),null);
if(cljs.core.truth_(temp__3971__auto____15479))
{var pfn__15480 = temp__3971__auto____15479;
return pfn__15480.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__15478)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__15483 = cljs.core.name.call(null,tag);
var old_parser__15484 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__15483,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__15483,f);
return old_parser__15484;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__15487 = cljs.core.name.call(null,tag);
var old_parser__15488 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__15487,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__15487);
return old_parser__15488;
});
