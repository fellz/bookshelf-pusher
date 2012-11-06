(ns testpro.app
  (:use [jayq.core :only [$ bind append on inner val attr show hide prevent toggle]]
        [jayq.util :only [clj->js]])
  (:use-macros [fetch.macros :only [remote]])
  (:require 
    [fetch.remotes :as remotes])
) 


(.setKey  js/filepicker "your filepicker API key")
; Helper that stores img
(defn store-img [fpfile bid]
   (.store js/filepicker 
    fpfile
    {:location 'S3'} 
    (fn[url]
      (let [a (str "https://s3.amazonaws.com/" (.-key url))] ; Here is your S3 store
        (remote (store-image a bid) [result] ; Store image url
            (inner ($ (str "#book-img-" bid)) (str "<img src='" a "'>")) ; Update current picture 
            (hide ($ "#flash-message")) ; End of flash message                           
            (hide ($ (str "#image-loader-" bid))) ; Hide image loader  
            )))))

;Convert and invoke store img func
; fpfile - js object
; bid - book id string 
(defn convert-andstore-img [fpfile bid]
  (show ($ "#flash-message")) ; Beginning of flash message
  (.convert js/filepicker
    fpfile
    (clj->js {:width 80 :fit "scale"})
    (fn[new_fpfile](store-img new_fpfile bid)) ;Helper method store-img
    )
  )
;Get image url from filepicker and fetch img from it and then insert in picture placeholder. 
(defn getimage [fpfile bid]
  (convert-andstore-img fpfile bid)
)

(defn show-img-loader [bid e]
  (prevent e)
  (let [boid (attr ($ bid) :bookid)]
    (toggle ($ (str "#image-loader-" boid)))
    )
  )

; Take values from our fields ( author and title) send them to 
; store-book function on the server then invoke books-list-rem function
; and insert result under #books-list div. Clear form values.
(defn store-book [e]
  (prevent e)
  (let [author (val ($ :#author))
        title (val ($ :#title))
    ]
  (remote (store-book author title) [result]
    (remote (books-list-rem)[result]
      (inner ($ :#books-list) result)
      (val ($ :#author) "")
      (val ($ :#title) "")
      )))
)


; Here e is event object
(on ($ :body) :click :#add-book-btn (fn[e](store-book e)))

(on ($ :body) :click :.show-img-loader (fn[e](this-as bid (show-img-loader bid e))))