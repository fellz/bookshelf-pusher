(ns mywebapp.app
  (:use [jayq.core :only [$ ajax bind append prepend on inner val attr show hide prevent toggle]]
        [jayq.util :only [clj->js]])
  (:use-macros [fetch.macros :only [remote]])
  (:require 
    [fetch.remotes :as remotes])
) 

(def pusher (js/Pusher. "you pusher API key"))
(def channel (.subscribe pusher "test_channel" ))

;Callback for event
(defn callbk [data]
  (remote (last-book-rem (.-message data)) [result]
    (prepend ($ "#books-list") result) ; Get last book and prepend that to the list.
    ))
;If event ( someone added a book) was triggered then event is fired and callback in invoked.
(.bind channel "my_event" (fn[data](callbk data))) 

; Take values from our fields ( author and title ) send them to 
; store-book function. 
(defn store-book [e]
  (prevent e)
   ; Trigger event - in our case store book in db
  (let [author (val ($ :#author))
        title (val ($ :#title))
    ]
      (remote (store-book author title) [result]) ; Just store the book
      (val ($ :#author) "")
      (val ($ :#title) "")
   ))


; Here e is event object !
(on ($ :body) :click :#add-book-btn (fn[e](store-book e)))
