goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____109791 = reader;
if(and__3822__auto____109791)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____109791;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__5628__auto____109792 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____109793 = (cljs.reader.read_char[goog.typeOf(x__5628__auto____109792)]);
if(or__3824__auto____109793)
{return or__3824__auto____109793;
} else
{var or__3824__auto____109794 = (cljs.reader.read_char["_"]);
if(or__3824__auto____109794)
{return or__3824__auto____109794;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____109799 = reader;
if(and__3822__auto____109799)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____109799;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__5628__auto____109800 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____109801 = (cljs.reader.unread[goog.typeOf(x__5628__auto____109800)]);
if(or__3824__auto____109801)
{return or__3824__auto____109801;
} else
{var or__3824__auto____109802 = (cljs.reader.unread["_"]);
if(or__3824__auto____109802)
{return or__3824__auto____109802;
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
var this__109803 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__109803.buffer_atom)))
{var idx__109804 = cljs.core.deref.call(null,this__109803.index_atom);
cljs.core.swap_BANG_.call(null,this__109803.index_atom,cljs.core.inc);
return (this__109803.s[idx__109804]);
} else
{var buf__109805 = cljs.core.deref.call(null,this__109803.buffer_atom);
cljs.core.swap_BANG_.call(null,this__109803.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__109805);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__109806 = this;
return cljs.core.swap_BANG_.call(null,this__109806.buffer_atom,(function (p1__109786_SHARP_){
return cljs.core.cons.call(null,ch,p1__109786_SHARP_);
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
var or__3824__auto____109808 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____109808))
{return or__3824__auto____109808;
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
var or__3824__auto____109813 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____109813)
{return or__3824__auto____109813;
} else
{var and__3822__auto____109815 = (function (){var or__3824__auto____109814 = ("+" === initch);
if(or__3824__auto____109814)
{return or__3824__auto____109814;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____109815))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__109816 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__109816);
return next_ch__109816;
})());
} else
{return and__3822__auto____109815;
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
reader_error.cljs$lang$applyTo = (function (arglist__109817){
var rdr = cljs.core.first(arglist__109817);
var msg = cljs.core.rest(arglist__109817);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____109821 = !((ch === "#"));
if(and__3822__auto____109821)
{var and__3822__auto____109822 = !((ch === "'"));
if(and__3822__auto____109822)
{var and__3822__auto____109823 = !((ch === ":"));
if(and__3822__auto____109823)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____109823;
}
} else
{return and__3822__auto____109822;
}
} else
{return and__3822__auto____109821;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__109828 = (new goog.string.StringBuffer(initch));
var ch__109829 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____109830 = (ch__109829 == null);
if(or__3824__auto____109830)
{return or__3824__auto____109830;
} else
{var or__3824__auto____109831 = cljs.reader.whitespace_QMARK_.call(null,ch__109829);
if(or__3824__auto____109831)
{return or__3824__auto____109831;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__109829);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__109829);
return sb__109828.toString();
} else
{{
var G__109832 = (function (){sb__109828.append(ch__109829);
return sb__109828;
})();
var G__109833 = cljs.reader.read_char.call(null,rdr);
sb__109828 = G__109832;
ch__109829 = G__109833;
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
var ch__109837 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____109838 = (ch__109837 === "n");
if(or__3824__auto____109838)
{return or__3824__auto____109838;
} else
{var or__3824__auto____109839 = (ch__109837 === "r");
if(or__3824__auto____109839)
{return or__3824__auto____109839;
} else
{return (ch__109837 == null);
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
var matches__109841 = re.exec(s);
if((matches__109841 == null))
{return null;
} else
{if((matches__109841.length === 1))
{return (matches__109841[0]);
} else
{return matches__109841;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__109849 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__109850 = (groups__109849[2]);
if(!((function (){var or__3824__auto____109851 = (group3__109850 == null);
if(or__3824__auto____109851)
{return or__3824__auto____109851;
} else
{return (group3__109850.length < 1);
}
})()))
{return 0;
} else
{var negate__109852 = ((("-" === (groups__109849[1])))?-1:1);
var a__109853 = (cljs.core.truth_((groups__109849[3]))?[(groups__109849[3]),10]:(cljs.core.truth_((groups__109849[4]))?[(groups__109849[4]),16]:(cljs.core.truth_((groups__109849[5]))?[(groups__109849[5]),8]:(cljs.core.truth_((groups__109849[7]))?[(groups__109849[7]),parseInt((groups__109849[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__109854 = (a__109853[0]);
var radix__109855 = (a__109853[1]);
if((n__109854 == null))
{return null;
} else
{return (negate__109852 * parseInt(n__109854,radix__109855));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__109859 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__109860 = (groups__109859[1]);
var denominator__109861 = (groups__109859[2]);
return (parseInt(numinator__109860) / parseInt(denominator__109861));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__109864 = re.exec(s);
if((function (){var and__3822__auto____109865 = !((matches__109864 == null));
if(and__3822__auto____109865)
{return ((matches__109864[0]) === s);
} else
{return and__3822__auto____109865;
}
})())
{if((matches__109864.length === 1))
{return (matches__109864[0]);
} else
{return matches__109864;
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
var code__109867 = parseInt(code_str,16);
return String.fromCharCode(code__109867);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__109870 = cljs.reader.read_char.call(null,reader);
var mapresult__109871 = cljs.reader.escape_char_map.call(null,ch__109870);
if(cljs.core.truth_(mapresult__109871))
{return mapresult__109871;
} else
{if((ch__109870 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__109870,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__109870 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__109870,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__109870))
{return String.fromCharCode(ch__109870);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__109870);
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
var ch__109873 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__109873)))
{{
var G__109874 = cljs.reader.read_char.call(null,rdr);
ch__109873 = G__109874;
continue;
}
} else
{return ch__109873;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__109881 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__109882 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__109882))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF while reading");
}
if((delim === ch__109882))
{return cljs.core.persistent_BANG_.call(null,a__109881);
} else
{var temp__3971__auto____109883 = cljs.reader.macros.call(null,ch__109882);
if(cljs.core.truth_(temp__3971__auto____109883))
{var macrofn__109884 = temp__3971__auto____109883;
var mret__109885 = macrofn__109884.call(null,rdr,ch__109882);
{
var G__109887 = (((mret__109885 === rdr))?a__109881:cljs.core.conj_BANG_.call(null,a__109881,mret__109885));
a__109881 = G__109887;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__109882);
var o__109886 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__109888 = (((o__109886 === rdr))?a__109881:cljs.core.conj_BANG_.call(null,a__109881,o__109886));
a__109881 = G__109888;
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
var ch__109893 = cljs.reader.read_char.call(null,rdr);
var dm__109894 = cljs.reader.dispatch_macros.call(null,ch__109893);
if(cljs.core.truth_(dm__109894))
{return dm__109894.call(null,rdr,_);
} else
{var temp__3971__auto____109895 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__109893);
if(cljs.core.truth_(temp__3971__auto____109895))
{var obj__109896 = temp__3971__auto____109895;
return obj__109896;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__109893);
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
var l__109898 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__109898)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__109898);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__109905 = (new goog.string.StringBuffer(initch));
var ch__109906 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____109907 = (ch__109906 == null);
if(or__3824__auto____109907)
{return or__3824__auto____109907;
} else
{var or__3824__auto____109908 = cljs.reader.whitespace_QMARK_.call(null,ch__109906);
if(or__3824__auto____109908)
{return or__3824__auto____109908;
} else
{return cljs.reader.macros.call(null,ch__109906);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__109906);
var s__109909 = buffer__109905.toString();
var or__3824__auto____109910 = cljs.reader.match_number.call(null,s__109909);
if(cljs.core.truth_(or__3824__auto____109910))
{return or__3824__auto____109910;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__109909,"]");
}
} else
{{
var G__109911 = (function (){buffer__109905.append(ch__109906);
return buffer__109905;
})();
var G__109912 = cljs.reader.read_char.call(null,reader);
buffer__109905 = G__109911;
ch__109906 = G__109912;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__109915 = (new goog.string.StringBuffer());
var ch__109916 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__109916 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{if(("\\" === ch__109916))
{{
var G__109917 = (function (){buffer__109915.append(cljs.reader.escape_char.call(null,buffer__109915,reader));
return buffer__109915;
})();
var G__109918 = cljs.reader.read_char.call(null,reader);
buffer__109915 = G__109917;
ch__109916 = G__109918;
continue;
}
} else
{if(("\"" === ch__109916))
{return buffer__109915.toString();
} else
{if("\uFDD0'default")
{{
var G__109919 = (function (){buffer__109915.append(ch__109916);
return buffer__109915;
})();
var G__109920 = cljs.reader.read_char.call(null,reader);
buffer__109915 = G__109919;
ch__109916 = G__109920;
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
var token__109922 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__109922,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__109922,0,token__109922.indexOf("/")),cljs.core.subs.call(null,token__109922,(token__109922.indexOf("/") + 1),token__109922.length));
} else
{return cljs.reader.special_symbols.call(null,token__109922,cljs.core.symbol.call(null,token__109922));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__109932 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__109933 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__109932);
var token__109934 = (a__109933[0]);
var ns__109935 = (a__109933[1]);
var name__109936 = (a__109933[2]);
if(cljs.core.truth_((function (){var or__3824__auto____109938 = (function (){var and__3822__auto____109937 = !((void 0 === ns__109935));
if(and__3822__auto____109937)
{return (ns__109935.substring((ns__109935.length - 2),ns__109935.length) === ":/");
} else
{return and__3822__auto____109937;
}
})();
if(cljs.core.truth_(or__3824__auto____109938))
{return or__3824__auto____109938;
} else
{var or__3824__auto____109939 = ((name__109936[(name__109936.length - 1)]) === ":");
if(or__3824__auto____109939)
{return or__3824__auto____109939;
} else
{return !((token__109934.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__109934);
} else
{if((function (){var and__3822__auto____109940 = !((ns__109935 == null));
if(and__3822__auto____109940)
{return (ns__109935.length > 0);
} else
{return and__3822__auto____109940;
}
})())
{return cljs.core.keyword.call(null,ns__109935.substring(0,ns__109935.indexOf("/")),name__109936);
} else
{return cljs.core.keyword.call(null,token__109934);
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
var m__109946 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__109946))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__109947 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__109948__109949 = o__109947;
if(G__109948__109949)
{if((function (){var or__3824__auto____109950 = (G__109948__109949.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____109950)
{return or__3824__auto____109950;
} else
{return G__109948__109949.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__109948__109949.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__109948__109949);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__109948__109949);
}
})())
{return cljs.core.with_meta.call(null,o__109947,cljs.core.merge.call(null,cljs.core.meta.call(null,o__109947),m__109946));
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
var ch__109954 = cljs.reader.read_char.call(null,reader);
if((ch__109954 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__109954))
{{
var G__109957 = reader;
var G__109958 = eof_is_error;
var G__109959 = sentinel;
var G__109960 = is_recursive;
reader = G__109957;
eof_is_error = G__109958;
sentinel = G__109959;
is_recursive = G__109960;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__109954))
{{
var G__109961 = cljs.reader.read_comment.call(null,reader,ch__109954);
var G__109962 = eof_is_error;
var G__109963 = sentinel;
var G__109964 = is_recursive;
reader = G__109961;
eof_is_error = G__109962;
sentinel = G__109963;
is_recursive = G__109964;
continue;
}
} else
{if("\uFDD0'else")
{var f__109955 = cljs.reader.macros.call(null,ch__109954);
var res__109956 = (cljs.core.truth_(f__109955)?f__109955.call(null,reader,ch__109954):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__109954))?cljs.reader.read_number.call(null,reader,ch__109954):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__109954):null)));
if((res__109956 === reader))
{{
var G__109965 = reader;
var G__109966 = eof_is_error;
var G__109967 = sentinel;
var G__109968 = is_recursive;
reader = G__109965;
eof_is_error = G__109966;
sentinel = G__109967;
is_recursive = G__109968;
continue;
}
} else
{return res__109956;
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
var r__109970 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__109970,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__109972 = (new goog.string.StringBuffer(s));
while(true){
if((b__109972.getLength() < width))
{{
var G__109973 = b__109972.append("0");
b__109972 = G__109973;
continue;
}
} else
{return b__109972.toString();
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
var and__3822__auto____109976 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____109976))
{var or__3824__auto____109977 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____109977))
{return or__3824__auto____109977;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____109976;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__109982 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__109983 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__109983:dim_norm__109982),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__109984 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__109986 = (function (low,n,high,msg){
if((function (){var and__3822__auto____109985 = (low <= n);
if(and__3822__auto____109985)
{return (n <= high);
} else
{return and__3822__auto____109985;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____109987 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__109984,ts)));
if(cljs.core.truth_(temp__3974__auto____109987))
{var vec__109988__109991 = temp__3974__auto____109987;
var vec__109989__109992 = cljs.core.nth.call(null,vec__109988__109991,0,null);
var ___109993 = cljs.core.nth.call(null,vec__109989__109992,0,null);
var years__109994 = cljs.core.nth.call(null,vec__109989__109992,1,null);
var months__109995 = cljs.core.nth.call(null,vec__109989__109992,2,null);
var days__109996 = cljs.core.nth.call(null,vec__109989__109992,3,null);
var hours__109997 = cljs.core.nth.call(null,vec__109989__109992,4,null);
var minutes__109998 = cljs.core.nth.call(null,vec__109989__109992,5,null);
var seconds__109999 = cljs.core.nth.call(null,vec__109989__109992,6,null);
var milliseconds__110000 = cljs.core.nth.call(null,vec__109989__109992,7,null);
var vec__109990__110001 = cljs.core.nth.call(null,vec__109988__109991,1,null);
var ___110002 = cljs.core.nth.call(null,vec__109990__110001,0,null);
var ___110003 = cljs.core.nth.call(null,vec__109990__110001,1,null);
var ___110004 = cljs.core.nth.call(null,vec__109990__110001,2,null);
var V__110005 = vec__109988__109991;
var vec__110006__110009 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__109981_SHARP_){
return parseInt(p1__109981_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__109979_SHARP_,p2__109978_SHARP_){
return cljs.core.update_in.call(null,p2__109978_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__109979_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__109980_SHARP_){
if(cljs.core._EQ_.call(null,p1__109980_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__110005));
var vec__110007__110010 = cljs.core.nth.call(null,vec__110006__110009,0,null);
var ___110011 = cljs.core.nth.call(null,vec__110007__110010,0,null);
var y__110012 = cljs.core.nth.call(null,vec__110007__110010,1,null);
var mo__110013 = cljs.core.nth.call(null,vec__110007__110010,2,null);
var d__110014 = cljs.core.nth.call(null,vec__110007__110010,3,null);
var h__110015 = cljs.core.nth.call(null,vec__110007__110010,4,null);
var m__110016 = cljs.core.nth.call(null,vec__110007__110010,5,null);
var s__110017 = cljs.core.nth.call(null,vec__110007__110010,6,null);
var ms__110018 = cljs.core.nth.call(null,vec__110007__110010,7,null);
var vec__110008__110019 = cljs.core.nth.call(null,vec__110006__110009,1,null);
var offset_sign__110020 = cljs.core.nth.call(null,vec__110008__110019,0,null);
var offset_hours__110021 = cljs.core.nth.call(null,vec__110008__110019,1,null);
var offset_minutes__110022 = cljs.core.nth.call(null,vec__110008__110019,2,null);
var offset__110023 = (offset_sign__110020 * ((offset_hours__110021 * 60) + offset_minutes__110022));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__109994))?1970:y__110012),((cljs.core.not.call(null,months__109995))?1:check__109986.call(null,1,mo__110013,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__109996))?1:check__109986.call(null,1,d__110014,cljs.reader.days_in_month.call(null,mo__110013,cljs.reader.leap_year_QMARK_.call(null,y__110012)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__109997))?0:check__109986.call(null,0,h__110015,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__109998))?0:check__109986.call(null,0,m__110016,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__109999))?0:check__109986.call(null,0,s__110017,((cljs.core._EQ_.call(null,m__110016,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__110000))?0:check__109986.call(null,0,ms__110018,999,"timestamp millisecond field must be in range 0..999")),offset__110023], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____110035 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____110035))
{var vec__110036__110037 = temp__3971__auto____110035;
var years__110038 = cljs.core.nth.call(null,vec__110036__110037,0,null);
var months__110039 = cljs.core.nth.call(null,vec__110036__110037,1,null);
var days__110040 = cljs.core.nth.call(null,vec__110036__110037,2,null);
var hours__110041 = cljs.core.nth.call(null,vec__110036__110037,3,null);
var minutes__110042 = cljs.core.nth.call(null,vec__110036__110037,4,null);
var seconds__110043 = cljs.core.nth.call(null,vec__110036__110037,5,null);
var ms__110044 = cljs.core.nth.call(null,vec__110036__110037,6,null);
var offset__110045 = cljs.core.nth.call(null,vec__110036__110037,7,null);
return (new Date((Date.UTC(years__110038,(months__110039 - 1),days__110040,hours__110041,minutes__110042,seconds__110043,ms__110044) - ((offset__110045 * 60) * 1000))));
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
var tag__110049 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____110050 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__110049),null);
if(cljs.core.truth_(temp__3971__auto____110050))
{var pfn__110051 = temp__3971__auto____110050;
return pfn__110051.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__110049)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__110054 = cljs.core.name.call(null,tag);
var old_parser__110055 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__110054,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__110054,f);
return old_parser__110055;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__110058 = cljs.core.name.call(null,tag);
var old_parser__110059 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__110058,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__110058);
return old_parser__110059;
});
