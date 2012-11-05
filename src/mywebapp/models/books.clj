(ns mywebapp.models.books
  (:require [monger.collection :as monger])
  
(:import [org.bson.types ObjectId]))

(defn unidify [doc]
  (assoc doc :_id (str (:_id doc))))

(defn store-image [url id]
  (monger/update "books" {:_id (ObjectId. id)} {"$set" {:imgurl url}})
  )

(defn all-books []
  (map unidify (monger/find-maps "books" {} )))

(defn save-book [title author]
(monger/insert "books" 
    {:_id (ObjectId.)
    :title title
    :author author 
    })
  )