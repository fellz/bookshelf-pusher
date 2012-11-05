(ns testpro.app
  (:use [jayq.core :only [$ bind append on inner val attr show hide prevent toggle]]
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
      (let [a (str "https://s3.amazonaws.com/chater/" (.-key url))] ; Here is your S3 store
        ;(.log js/console a)
        ;(.log js/console bid)
        (remote (store-image a bid) [result] ; Store image url
            ;(.log js/console ($ (str "#book-img-" bid)))
            (inner ($ (str "#book-img-" bid)) (str "<img src='" a "'>")) ; Update current picture 
            ;(hide ($ "#flash-message")) ; End of flash                            
            (hide ($ (str "#image-loader-" bid))) ; Hide image loader  
            )))))

;Convert and invoke store img func
; fpfile - js object
; bid - book id string 
(defn convert-andstore-img [fpfile bid]
  ;(show ($ "#flash-message")) ; Beginning of flash message
  (.convert js/filepicker
    fpfile
    (clj->js {:width 80 :fit "scale"})
    (fn[new_fpfile](store-img new_fpfile bid)) ;Helper method store-img
    )
  )
;Get image url from filepicker and fetch img from it and then insert in picture placeholder. 
(defn getimage [fpfile bid]
  ;(.log js/console fpfile)
  ;(.log js/console bid)
  (convert-andstore-img fpfile bid)
)

(defn show-img-loader [bid e]
  (prevent e)
  (let [boid (attr ($ bid) :bookid)]
    (toggle ($ (str "#image-loader-" boid)))
    )
  )

(on ($ :body) :click :.show-img-loader (fn[e](this-as bid (show-img-loader bid e))))