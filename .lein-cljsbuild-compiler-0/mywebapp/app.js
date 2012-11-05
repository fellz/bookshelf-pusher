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
var a__422648 = [cljs.core.str("https://s3.amazonaws.com/chater/"),cljs.core.str(url.key)].join('');
return fetch.remotes.remote_callback.call(null,"store-image",cljs.core.PersistentVector.fromArray([a__422648,bid], true),(function (result){
jayq.core.inner.call(null,jayq.core.$.call(null,[cljs.core.str("#book-img-"),cljs.core.str(bid)].join('')),[cljs.core.str("<img src='"),cljs.core.str(a__422648),cljs.core.str("'>")].join(''));
return jayq.core.hide.call(null,jayq.core.$.call(null,[cljs.core.str("#image-loader-"),cljs.core.str(bid)].join('')));
}));
}));
});
testpro.app.convert_andstore_img = (function convert_andstore_img(fpfile,bid){
return filepicker.convert(fpfile,jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'fit"],{"\uFDD0'width":80,"\uFDD0'fit":"scale"})),(function (new_fpfile){
return testpro.app.store_img.call(null,new_fpfile,bid);
}));
});
testpro.app.getimage = (function getimage(fpfile,bid){
return testpro.app.convert_andstore_img.call(null,fpfile,bid);
});
testpro.app.show_img_loader = (function show_img_loader(bid,e){
jayq.core.prevent.call(null,e);
var boid__422650 = jayq.core.attr.call(null,jayq.core.$.call(null,bid),"\uFDD0'bookid");
return jayq.core.toggle.call(null,jayq.core.$.call(null,[cljs.core.str("#image-loader-"),cljs.core.str(boid__422650)].join('')));
});
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'.show-img-loader",(function (e){
var bid__422651 = this;
return testpro.app.show_img_loader.call(null,bid__422651,e);
}));
