goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____426856 = reader;
if(and__3822__auto____426856)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____426856;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5854__auto____426857 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____426858 = (cljs.reader.read_char[goog.typeOf(x__5854__auto____426857)]);
if(or__3824__auto____426858)
{return or__3824__auto____426858;
} else
{var or__3824__auto____426859 = (cljs.reader.read_char["_"]);
if(or__3824__auto____426859)
{return or__3824__auto____426859;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____426864 = reader;
if(and__3822__auto____426864)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____426864;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5854__auto____426865 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____426866 = (cljs.reader.unread[goog.typeOf(x__5854__auto____426865)]);
if(or__3824__auto____426866)
{return or__3824__auto____426866;
} else
{var or__3824__auto____426867 = (cljs.reader.unread["_"]);
if(or__3824__auto____426867)
{return or__3824__auto____426867;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__5789__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter = (function (this__5789__auto__,writer__5790__auto__){
return cljs.core._write.call(null,writer__5790__auto__,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__426868 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__426868.buffer_atom)))
{var idx__426869 = cljs.core.deref.call(null,this__426868.index_atom);
cljs.core.swap_BANG_.call(null,this__426868.index_atom,cljs.core.inc);
return (this__426868.s[idx__426869]);
} else
{var buf__426870 = cljs.core.deref.call(null,this__426868.buffer_atom);
cljs.core.swap_BANG_.call(null,this__426868.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__426870);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__426871 = this;
return cljs.core.swap_BANG_.call(null,this__426871.buffer_atom,(function (p1__426851_SHARP_){
return cljs.core.cons.call(null,ch,p1__426851_SHARP_);
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
var or__3824__auto____426873 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____426873))
{return or__3824__auto____426873;
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
var or__3824__auto____426878 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____426878)
{return or__3824__auto____426878;
} else
{var and__3822__auto____426880 = (function (){var or__3824__auto____426879 = ("+" === initch);
if(or__3824__auto____426879)
{return or__3824__auto____426879;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____426880))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__426881 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__426881);
return next_ch__426881;
})());
} else
{return and__3822__auto____426880;
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
reader_error.cljs$lang$applyTo = (function (arglist__426882){
var rdr = cljs.core.first(arglist__426882);
var msg = cljs.core.rest(arglist__426882);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____426886 = !((ch === "#"));
if(and__3822__auto____426886)
{var and__3822__auto____426887 = !((ch === "'"));
if(and__3822__auto____426887)
{var and__3822__auto____426888 = !((ch === ":"));
if(and__3822__auto____426888)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____426888;
}
} else
{return and__3822__auto____426887;
}
} else
{return and__3822__auto____426886;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__426893 = (new goog.string.StringBuffer(initch));
var ch__426894 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____426895 = (ch__426894 == null);
if(or__3824__auto____426895)
{return or__3824__auto____426895;
} else
{var or__3824__auto____426896 = cljs.reader.whitespace_QMARK_.call(null,ch__426894);
if(or__3824__auto____426896)
{return or__3824__auto____426896;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__426894);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__426894);
return sb__426893.toString();
} else
{{
var G__426897 = (function (){sb__426893.append(ch__426894);
return sb__426893;
})();
var G__426898 = cljs.reader.read_char.call(null,rdr);
sb__426893 = G__426897;
ch__426894 = G__426898;
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
var ch__426902 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____426903 = (ch__426902 === "n");
if(or__3824__auto____426903)
{return or__3824__auto____426903;
} else
{var or__3824__auto____426904 = (ch__426902 === "r");
if(or__3824__auto____426904)
{return or__3824__auto____426904;
} else
{return (ch__426902 == null);
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
var matches__426906 = re.exec(s);
if((matches__426906 == null))
{return null;
} else
{if((matches__426906.length === 1))
{return (matches__426906[0]);
} else
{return matches__426906;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__426914 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__426915 = (groups__426914[2]);
if(!((function (){var or__3824__auto____426916 = (group3__426915 == null);
if(or__3824__auto____426916)
{return or__3824__auto____426916;
} else
{return (group3__426915.length < 1);
}
})()))
{return 0;
} else
{var negate__426917 = ((("-" === (groups__426914[1])))?-1:1);
var a__426918 = (cljs.core.truth_((groups__426914[3]))?[(groups__426914[3]),10]:(cljs.core.truth_((groups__426914[4]))?[(groups__426914[4]),16]:(cljs.core.truth_((groups__426914[5]))?[(groups__426914[5]),8]:(cljs.core.truth_((groups__426914[7]))?[(groups__426914[7]),parseInt((groups__426914[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__426919 = (a__426918[0]);
var radix__426920 = (a__426918[1]);
if((n__426919 == null))
{return null;
} else
{return (negate__426917 * parseInt(n__426919,radix__426920));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__426924 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__426925 = (groups__426924[1]);
var denominator__426926 = (groups__426924[2]);
return (parseInt(numinator__426925) / parseInt(denominator__426926));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__426929 = re.exec(s);
if((function (){var and__3822__auto____426930 = !((matches__426929 == null));
if(and__3822__auto____426930)
{return ((matches__426929[0]) === s);
} else
{return and__3822__auto____426930;
}
})())
{if((matches__426929.length === 1))
{return (matches__426929[0]);
} else
{return matches__426929;
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
var code__426932 = parseInt(code_str,16);
return String.fromCharCode(code__426932);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__426935 = cljs.reader.read_char.call(null,reader);
var mapresult__426936 = cljs.reader.escape_char_map.call(null,ch__426935);
if(cljs.core.truth_(mapresult__426936))
{return mapresult__426936;
} else
{if((ch__426935 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__426935,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__426935 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__426935,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__426935))
{return String.fromCharCode(ch__426935);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__426935);
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
var ch__426938 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__426938)))
{{
var G__426939 = cljs.reader.read_char.call(null,rdr);
ch__426938 = G__426939;
continue;
}
} else
{return ch__426938;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__426946 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__426947 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__426947))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__426947))
{return cljs.core.persistent_BANG_.call(null,a__426946);
} else
{var temp__3971__auto____426948 = cljs.reader.macros.call(null,ch__426947);
if(cljs.core.truth_(temp__3971__auto____426948))
{var macrofn__426949 = temp__3971__auto____426948;
var mret__426950 = macrofn__426949.call(null,rdr,ch__426947);
{
var G__426952 = (((mret__426950 === rdr))?a__426946:cljs.core.conj_BANG_.call(null,a__426946,mret__426950));
a__426946 = G__426952;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__426947);
var o__426951 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__426953 = (((o__426951 === rdr))?a__426946:cljs.core.conj_BANG_.call(null,a__426946,o__426951));
a__426946 = G__426953;
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
var ch__426958 = cljs.reader.read_char.call(null,rdr);
var dm__426959 = cljs.reader.dispatch_macros.call(null,ch__426958);
if(cljs.core.truth_(dm__426959))
{return dm__426959.call(null,rdr,_);
} else
{var temp__3971__auto____426960 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__426958);
if(cljs.core.truth_(temp__3971__auto____426960))
{var obj__426961 = temp__3971__auto____426960;
return obj__426961;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__426958);
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
var l__426963 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__426963)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__426963);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__426970 = (new goog.string.StringBuffer(initch));
var ch__426971 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____426972 = (ch__426971 == null);
if(or__3824__auto____426972)
{return or__3824__auto____426972;
} else
{var or__3824__auto____426973 = cljs.reader.whitespace_QMARK_.call(null,ch__426971);
if(or__3824__auto____426973)
{return or__3824__auto____426973;
} else
{return cljs.reader.macros.call(null,ch__426971);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__426971);
var s__426974 = buffer__426970.toString();
var or__3824__auto____426975 = cljs.reader.match_number.call(null,s__426974);
if(cljs.core.truth_(or__3824__auto____426975))
{return or__3824__auto____426975;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__426974,"]");
}
} else
{{
var G__426976 = (function (){buffer__426970.append(ch__426971);
return buffer__426970;
})();
var G__426977 = cljs.reader.read_char.call(null,reader);
buffer__426970 = G__426976;
ch__426971 = G__426977;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__426980 = (new goog.string.StringBuffer());
var ch__426981 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__426981 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__426981))
{{
var G__426982 = (function (){buffer__426980.append(cljs.reader.escape_char.call(null,buffer__426980,reader));
return buffer__426980;
})();
var G__426983 = cljs.reader.read_char.call(null,reader);
buffer__426980 = G__426982;
ch__426981 = G__426983;
continue;
}
} else
{if(("\"" === ch__426981))
{return buffer__426980.toString();
} else
{if("\uFDD0'default")
{{
var G__426984 = (function (){buffer__426980.append(ch__426981);
return buffer__426980;
})();
var G__426985 = cljs.reader.read_char.call(null,reader);
buffer__426980 = G__426984;
ch__426981 = G__426985;
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
var token__426987 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__426987,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__426987,0,token__426987.indexOf("/")),cljs.core.subs.call(null,token__426987,(token__426987.indexOf("/") + 1),token__426987.length));
} else
{return cljs.reader.special_symbols.call(null,token__426987,cljs.core.symbol.call(null,token__426987));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__426997 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__426998 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__426997);
var token__426999 = (a__426998[0]);
var ns__427000 = (a__426998[1]);
var name__427001 = (a__426998[2]);
if(cljs.core.truth_((function (){var or__3824__auto____427003 = (function (){var and__3822__auto____427002 = !((void 0 === ns__427000));
if(and__3822__auto____427002)
{return (ns__427000.substring((ns__427000.length - 2),ns__427000.length) === ":/");
} else
{return and__3822__auto____427002;
}
})();
if(cljs.core.truth_(or__3824__auto____427003))
{return or__3824__auto____427003;
} else
{var or__3824__auto____427004 = ((name__427001[(name__427001.length - 1)]) === ":");
if(or__3824__auto____427004)
{return or__3824__auto____427004;
} else
{return !((token__426999.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__426999);
} else
{if((function (){var and__3822__auto____427005 = !((ns__427000 == null));
if(and__3822__auto____427005)
{return (ns__427000.length > 0);
} else
{return and__3822__auto____427005;
}
})())
{return cljs.core.keyword.call(null,ns__427000.substring(0,ns__427000.indexOf("/")),name__427001);
} else
{return cljs.core.keyword.call(null,token__426999);
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
var m__427011 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__427011))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__427012 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__427013__427014 = o__427012;
if(G__427013__427014)
{if((function (){var or__3824__auto____427015 = (G__427013__427014.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____427015)
{return or__3824__auto____427015;
} else
{return G__427013__427014.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__427013__427014.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__427013__427014);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__427013__427014);
}
})())
{return cljs.core.with_meta.call(null,o__427012,cljs.core.merge.call(null,cljs.core.meta.call(null,o__427012),m__427011));
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
var ch__427019 = cljs.reader.read_char.call(null,reader);
if((ch__427019 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__427019))
{{
var G__427022 = reader;
var G__427023 = eof_is_error;
var G__427024 = sentinel;
var G__427025 = is_recursive;
reader = G__427022;
eof_is_error = G__427023;
sentinel = G__427024;
is_recursive = G__427025;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__427019))
{{
var G__427026 = cljs.reader.read_comment.call(null,reader,ch__427019);
var G__427027 = eof_is_error;
var G__427028 = sentinel;
var G__427029 = is_recursive;
reader = G__427026;
eof_is_error = G__427027;
sentinel = G__427028;
is_recursive = G__427029;
continue;
}
} else
{if("\uFDD0'else")
{var f__427020 = cljs.reader.macros.call(null,ch__427019);
var res__427021 = (cljs.core.truth_(f__427020)?f__427020.call(null,reader,ch__427019):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__427019))?cljs.reader.read_number.call(null,reader,ch__427019):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__427019):null)));
if((res__427021 === reader))
{{
var G__427030 = reader;
var G__427031 = eof_is_error;
var G__427032 = sentinel;
var G__427033 = is_recursive;
reader = G__427030;
eof_is_error = G__427031;
sentinel = G__427032;
is_recursive = G__427033;
continue;
}
} else
{return res__427021;
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
var r__427035 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__427035,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__427037 = (new goog.string.StringBuffer(s));
while(true){
if((b__427037.getLength() < width))
{{
var G__427038 = b__427037.append("0");
b__427037 = G__427038;
continue;
}
} else
{return b__427037.toString();
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
var and__3822__auto____427041 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____427041))
{var or__3824__auto____427042 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____427042))
{return or__3824__auto____427042;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____427041;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__427047 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__427048 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__427048:dim_norm__427047),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__427049 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__427051 = (function (low,n,high,msg){
if((function (){var and__3822__auto____427050 = (low <= n);
if(and__3822__auto____427050)
{return (n <= high);
} else
{return and__3822__auto____427050;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____427052 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__427049,ts)));
if(cljs.core.truth_(temp__3974__auto____427052))
{var vec__427053__427056 = temp__3974__auto____427052;
var vec__427054__427057 = cljs.core.nth.call(null,vec__427053__427056,0,null);
var ___427058 = cljs.core.nth.call(null,vec__427054__427057,0,null);
var years__427059 = cljs.core.nth.call(null,vec__427054__427057,1,null);
var months__427060 = cljs.core.nth.call(null,vec__427054__427057,2,null);
var days__427061 = cljs.core.nth.call(null,vec__427054__427057,3,null);
var hours__427062 = cljs.core.nth.call(null,vec__427054__427057,4,null);
var minutes__427063 = cljs.core.nth.call(null,vec__427054__427057,5,null);
var seconds__427064 = cljs.core.nth.call(null,vec__427054__427057,6,null);
var milliseconds__427065 = cljs.core.nth.call(null,vec__427054__427057,7,null);
var vec__427055__427066 = cljs.core.nth.call(null,vec__427053__427056,1,null);
var ___427067 = cljs.core.nth.call(null,vec__427055__427066,0,null);
var ___427068 = cljs.core.nth.call(null,vec__427055__427066,1,null);
var ___427069 = cljs.core.nth.call(null,vec__427055__427066,2,null);
var V__427070 = vec__427053__427056;
var vec__427071__427074 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__427046_SHARP_){
return parseInt(p1__427046_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__427044_SHARP_,p2__427043_SHARP_){
return cljs.core.update_in.call(null,p2__427043_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__427044_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__427045_SHARP_){
if(cljs.core._EQ_.call(null,p1__427045_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__427070));
var vec__427072__427075 = cljs.core.nth.call(null,vec__427071__427074,0,null);
var ___427076 = cljs.core.nth.call(null,vec__427072__427075,0,null);
var y__427077 = cljs.core.nth.call(null,vec__427072__427075,1,null);
var mo__427078 = cljs.core.nth.call(null,vec__427072__427075,2,null);
var d__427079 = cljs.core.nth.call(null,vec__427072__427075,3,null);
var h__427080 = cljs.core.nth.call(null,vec__427072__427075,4,null);
var m__427081 = cljs.core.nth.call(null,vec__427072__427075,5,null);
var s__427082 = cljs.core.nth.call(null,vec__427072__427075,6,null);
var ms__427083 = cljs.core.nth.call(null,vec__427072__427075,7,null);
var vec__427073__427084 = cljs.core.nth.call(null,vec__427071__427074,1,null);
var offset_sign__427085 = cljs.core.nth.call(null,vec__427073__427084,0,null);
var offset_hours__427086 = cljs.core.nth.call(null,vec__427073__427084,1,null);
var offset_minutes__427087 = cljs.core.nth.call(null,vec__427073__427084,2,null);
var offset__427088 = (offset_sign__427085 * ((offset_hours__427086 * 60) + offset_minutes__427087));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__427059))?1970:y__427077),((cljs.core.not.call(null,months__427060))?1:check__427051.call(null,1,mo__427078,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__427061))?1:check__427051.call(null,1,d__427079,cljs.reader.days_in_month.call(null,mo__427078,cljs.reader.leap_year_QMARK_.call(null,y__427077)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__427062))?0:check__427051.call(null,0,h__427080,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__427063))?0:check__427051.call(null,0,m__427081,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__427064))?0:check__427051.call(null,0,s__427082,((cljs.core._EQ_.call(null,m__427081,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__427065))?0:check__427051.call(null,0,ms__427083,999,"timestamp millisecond field must be in range 0..999")),offset__427088], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____427100 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____427100))
{var vec__427101__427102 = temp__3971__auto____427100;
var years__427103 = cljs.core.nth.call(null,vec__427101__427102,0,null);
var months__427104 = cljs.core.nth.call(null,vec__427101__427102,1,null);
var days__427105 = cljs.core.nth.call(null,vec__427101__427102,2,null);
var hours__427106 = cljs.core.nth.call(null,vec__427101__427102,3,null);
var minutes__427107 = cljs.core.nth.call(null,vec__427101__427102,4,null);
var seconds__427108 = cljs.core.nth.call(null,vec__427101__427102,5,null);
var ms__427109 = cljs.core.nth.call(null,vec__427101__427102,6,null);
var offset__427110 = cljs.core.nth.call(null,vec__427101__427102,7,null);
return (new Date((Date.UTC(years__427103,(months__427104 - 1),days__427105,hours__427106,minutes__427107,seconds__427108,ms__427109) - ((offset__427110 * 60) * 1000))));
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
var tag__427114 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____427115 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__427114),null);
if(cljs.core.truth_(temp__3971__auto____427115))
{var pfn__427116 = temp__3971__auto____427115;
return pfn__427116.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__427114)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__427119 = cljs.core.name.call(null,tag);
var old_parser__427120 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__427119,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__427119,f);
return old_parser__427120;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__427123 = cljs.core.name.call(null,tag);
var old_parser__427124 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__427123,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__427123);
return old_parser__427124;
});
