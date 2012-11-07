(ns mywebapp.views.welcome
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.form]
        [noir.fetch.remotes])  
  (:require [mywebapp.views.common :as common]
            [noir.response :as response]
            [mywebapp.models.books :as mbooks]
            [monger.collection :as monger])

  (:import (org.bson.types ObjectId))
)  

;Form to send title and author
(defpartial add-book-form []
          [:p (text-field {:placeholder "title" :id "title"} "title")]
          [:p (text-field {:placeholder "author" :id "author"} "author")]
          (hidden-field {:id "book-img" :book-img-url "none"} "") ; This field needed for Submit it contains picture url
          [:div#bimg ] ;Handler for picture that will be inserted here after succesful upload
          [:p [:a#upload-img {:href "#"} "upload image"]] ; Link for picture uploading
          [:p (submit-button {:id "add-book-btn"} "Submit")]
          [:br]
          [:br ] )
  
;[Templae] Book box with title and author  
(defpartial book-box [{:keys [ _id title author imgurl]}]
  [:div.row 
    [:div.span2 {:id "img-box"} 
      [:p {:id (str "book-img-"_id)}
        (if imgurl [:img {:src imgurl}])]
      [:a.show-img-loader {:href "#" :bookid _id} "change pic"]
      [:hr]    
    ]
    [:div.span6
      [:p [:span.lbl "Author: "]
        [:span author]]
      [:p [:span.lbl "Title: " ]
        [:span title]]
    ]
  ])

;Pass data to template
(defpartial books-list []
  (map book-box (mbooks/all-books))
  )

;Main page 
(defpage "/" []
         (common/layout
           [:div#books-list 
              (books-list)]
           [:hr]
           [:h3 "Add book"]
           (add-book-form)))



(defremote store-image [url bid] 
  (mbooks/store-image url bid)
  "ok" ; Need to return something readble here - for example string
  )

;Save our data in db
(defremote store-book [author title iurl]
  (if (monger/insert "books" 
        {:_id (ObjectId.)
        :title title
        :author author
        :imgurl iurl })
    (books-list))
  )
