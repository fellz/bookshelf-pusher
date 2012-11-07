(ns mywebapp.app
  (:use [jayq.core :only [$ ajax bind append on inner val attr show hide prevent toggle]]
        [jayq.util :only [clj->js]])
  (:use-macros [fetch.macros :only [remote]])
  (:require 
    [fetch.remotes :as remotes])
) 


(.setKey  js/filepicker "AZ-vVu5NwT22-bgz82uDtz")

; Helper that stores img
(defn store-img [fpfile bid]
   (.store js/filepicker 
    fpfile
    {:location 'S3'} 
    (fn[url]
      (let [iurl (str "https://s3.amazonaws.com/chater/" (.-key url))] ; Here is your S3 store
         (if-not (= bid "") ; If we use initial upload then we define bid as "" if we change picture then we provide book id
            ; Change picture in the list
            (remote (store-image iurl bid) [result] ; Store image url
              (inner ($ (str "#book-img-" bid)) (str "<img src='" iurl "'>"))) ; Update current picture 
            ; Initial upload
            (do (attr ($ :#book-img) :book-img-url iurl ) ; Set attr of hidden field for Submit
                (inner ($ "#bimg" ) (str "<img src='" iurl "'>"))); Load uploaded picture in div.
            )
      )
            (hide ($ "#flash-message")) ; End of flash message                           
             
    )))

;Convert and invoke store img func
; fpfile - js object
; bid - book id string 
(defn convert-and-store-img [fpfile bid]
  (show ($ "#flash-message")) ; Beginning of flash message
  (.convert js/filepicker
    fpfile
    (clj->js {:width 80 :fit "scale"})
    (fn[new_fpfile](store-img new_fpfile bid)) ;Helper method store-img
    )
  )

;Callback from click handler 
;(on ($ :body) :click :#upload-img (fn[e](upload-img e)))
;This function used for initial picture submit in "Add book" section.
;That's why we define secon param to convert func as ""
(defn upload-img [e]
  (prevent e)
  (.pick js/filepicker (fn[fpfile](convert-and-store-img fpfile "")))
  )

;Callback from click handler 
;(on ($ :body) :click :.show-img-loader (fn[e](this-as bid (update-img bid e))))
;This function used for changing picture in books list that's why we define second param as book id
(defn update-img [bid e]
  (prevent e)
  (let [boid (attr ($ bid) :bookid)]
    (.pick js/filepicker (fn[fpfile](convert-and-store-img fpfile boid)))
    )
  )
; Take values from our fields ( author and title picture url) send them to 
; store-book function on the server and insert result under #books-list div.
; Result here list of our books.
; Clear form values and image div.
(defn store-book [e]
  (prevent e)
  (let [author (val ($ :#author))
        title (val ($ :#title))
        iurl (attr ($ :#book-img) :book-img-url)
    ]
      (remote (store-book author title iurl) [result]
        (inner ($ :#books-list) result)
        )
      (val ($ :#author) "")
      (val ($ :#title) "")
      (inner ($ "#bimg" ) ""))
   )


; Here e is event object !
(on ($ :body) :click :#add-book-btn (fn[e](store-book e)))

(on ($ :body) :click :.show-img-loader (fn[e](this-as bid (update-img bid e))))

(on ($ :body) :click :#upload-img (fn[e](upload-img e)))