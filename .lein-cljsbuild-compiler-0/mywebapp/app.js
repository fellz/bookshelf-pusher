goog.provide('testpro.app');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('fetch.remotes');
goog.require('jayq.util');
goog.require('jayq.core');
filepicker.setKey("AZ-vVu5NwT22-bgz82uDtz");
testpro.app.store_img = (function store_img(fpfile,bid){
return filepicker.store(fpfile,cljs.core.ObjMap.fromObject(["\uFDD0'location"],{"\uFDD0'location":"\uFDD1'S3'"}),(function (url){
var iurl__122198 = [cljs.core.str("https://s3.amazonaws.com/chater/"),cljs.core.str(url.key)].join('');
return fetch.remotes.remote_callback.call(null,"store-image",cljs.core.PersistentVector.fromArray([iurl__122198,bid], true),(function (result){
if(!(cljs.core._EQ_.call(null,bid,"")))
{jayq.core.inner.call(null,jayq.core.$.call(null,[cljs.core.str("#book-img-"),cljs.core.str(bid)].join('')),[cljs.core.str("<img src='"),cljs.core.str(iurl__122198),cljs.core.str("'>")].join(''));
} else
{jayq.core.attr.call(null,jayq.core.$.call(null,"\uFDD0'#book-img"),"\uFDD0'book-img-url",iurl__122198);
}
jayq.core.hide.call(null,jayq.core.$.call(null,"#flash-message"));
return jayq.core.hide.call(null,jayq.core.$.call(null,[cljs.core.str("#image-loader-"),cljs.core.str(bid)].join('')));
}));
}));
});
testpro.app.convert_andstore_img = (function convert_andstore_img(fpfile,bid){
jayq.core.show.call(null,jayq.core.$.call(null,"#flash-message"));
return filepicker.convert(fpfile,jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'fit"],{"\uFDD0'width":80,"\uFDD0'fit":"scale"})),(function (new_fpfile){
return testpro.app.store_img.call(null,new_fpfile,bid);
}));
});
testpro.app.getimage = (function getimage(fpfile,bid){
return testpro.app.convert_andstore_img.call(null,fpfile,bid);
});
testpro.app.show_img_loader = (function show_img_loader(bid,e){
jayq.core.prevent.call(null,e);
var boid__122200 = jayq.core.attr.call(null,jayq.core.$.call(null,bid),"\uFDD0'bookid");
return jayq.core.toggle.call(null,jayq.core.$.call(null,[cljs.core.str("#image-loader-"),cljs.core.str(boid__122200)].join('')));
});
testpro.app.store_book = (function store_book(e){
jayq.core.prevent.call(null,e);
var author__122204 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"));
var title__122205 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"));
var iurl__122206 = jayq.core.attr.call(null,jayq.core.$.call(null,"\uFDD0'#book-img"),"\uFDD0'book-img-url");
fetch.remotes.remote_callback.call(null,"store-book",cljs.core.PersistentVector.fromArray([author__122204,title__122205,iurl__122206], true),(function (result){
return fetch.remotes.remote_callback.call(null,"books-list-rem",cljs.core.PersistentVector.EMPTY,(function (result){
return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#books-list"),result);
}));
}));
jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"),"");
return jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"),"");
});
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'#add-book-btn",(function (e){
return testpro.app.store_book.call(null,e);
}));
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'.show-img-loader",(function (e){
var bid__122207 = this;
return testpro.app.show_img_loader.call(null,bid__122207,e);
}));
