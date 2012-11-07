goog.provide('mywebapp.app');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('fetch.remotes');
goog.require('jayq.util');
goog.require('jayq.core');
filepicker.setKey("AZ-vVu5NwT22-bgz82uDtz");
mywebapp.app.store_img = (function store_img(fpfile,bid){
return filepicker.store(fpfile,cljs.core.ObjMap.fromObject(["\uFDD0'location"],{"\uFDD0'location":"\uFDD1'S3'"}),(function (url){
var iurl__10142 = [cljs.core.str("https://s3.amazonaws.com/chater/"),cljs.core.str(url.key)].join('');
if(!(cljs.core._EQ_.call(null,bid,"")))
{fetch.remotes.remote_callback.call(null,"store-image",cljs.core.PersistentVector.fromArray([iurl__10142,bid], true),(function (result){
return jayq.core.inner.call(null,jayq.core.$.call(null,[cljs.core.str("#book-img-"),cljs.core.str(bid)].join('')),[cljs.core.str("<img src='"),cljs.core.str(iurl__10142),cljs.core.str("'>")].join(''));
}));
} else
{jayq.core.attr.call(null,jayq.core.$.call(null,"\uFDD0'#book-img"),"\uFDD0'book-img-url",iurl__10142);
jayq.core.inner.call(null,jayq.core.$.call(null,"#bimg"),[cljs.core.str("<img src='"),cljs.core.str(iurl__10142),cljs.core.str("'>")].join(''));
}
return jayq.core.hide.call(null,jayq.core.$.call(null,"#flash-message"));
}));
});
mywebapp.app.convert_and_store_img = (function convert_and_store_img(fpfile,bid){
jayq.core.show.call(null,jayq.core.$.call(null,"#flash-message"));
return filepicker.convert(fpfile,jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'fit"],{"\uFDD0'width":80,"\uFDD0'fit":"scale"})),(function (new_fpfile){
return mywebapp.app.store_img.call(null,new_fpfile,bid);
}));
});
mywebapp.app.upload_img = (function upload_img(e){
jayq.core.prevent.call(null,e);
return filepicker.pick((function (fpfile){
return mywebapp.app.convert_and_store_img.call(null,fpfile,"");
}));
});
mywebapp.app.update_img = (function update_img(bid,e){
jayq.core.prevent.call(null,e);
var boid__10144 = jayq.core.attr.call(null,jayq.core.$.call(null,bid),"\uFDD0'bookid");
return filepicker.pick((function (fpfile){
return mywebapp.app.convert_and_store_img.call(null,fpfile,boid__10144);
}));
});
mywebapp.app.store_book = (function store_book(e){
jayq.core.prevent.call(null,e);
var author__10148 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"));
var title__10149 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"));
var iurl__10150 = jayq.core.attr.call(null,jayq.core.$.call(null,"\uFDD0'#book-img"),"\uFDD0'book-img-url");
fetch.remotes.remote_callback.call(null,"store-book",cljs.core.PersistentVector.fromArray([author__10148,title__10149,iurl__10150], true),(function (result){
return jayq.core.inner.call(null,jayq.core.$.call(null,"\uFDD0'#books-list"),result);
}));
jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"),"");
jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"),"");
return jayq.core.inner.call(null,jayq.core.$.call(null,"#bimg"),"");
});
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'#add-book-btn",(function (e){
return mywebapp.app.store_book.call(null,e);
}));
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'.show-img-loader",(function (e){
var bid__10151 = this;
return mywebapp.app.update_img.call(null,bid__10151,e);
}));
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'#upload-img",(function (e){
return mywebapp.app.upload_img.call(null,e);
}));
