goog.provide('mywebapp.app');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('fetch.remotes');
goog.require('jayq.util');
goog.require('jayq.core');
mywebapp.app.pusher = (new Pusher("you pusher API key"));
mywebapp.app.channel = mywebapp.app.pusher.subscribe("test_channel");
mywebapp.app.callbk = (function callbk(data){
return fetch.remotes.remote_callback.call(null,"last-book-rem",cljs.core.PersistentVector.fromArray([data.message], true),(function (result){
return jayq.core.prepend.call(null,jayq.core.$.call(null,"#books-list"),result);
}));
});
mywebapp.app.channel.bind("my_event",(function (data){
return mywebapp.app.callbk.call(null,data);
}));
mywebapp.app.store_book = (function store_book(e){
jayq.core.prevent.call(null,e);
var author__11014 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"));
var title__11015 = jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"));
fetch.remotes.remote_callback.call(null,"store-book",cljs.core.PersistentVector.fromArray([author__11014,title__11015], true),(function (result){
return null;
}));
jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#author"),"");
return jayq.core.val.call(null,jayq.core.$.call(null,"\uFDD0'#title"),"");
});
jayq.core.on.call(null,jayq.core.$.call(null,"\uFDD0'body"),"\uFDD0'click","\uFDD0'#add-book-btn",(function (e){
return mywebapp.app.store_book.call(null,e);
}));
