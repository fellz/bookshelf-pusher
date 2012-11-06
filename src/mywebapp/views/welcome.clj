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
          [:p (submit-button {:id "add-book-btn"} "Submit")])
  
;[Templae] Book box with title and author  
(defpartial book-box [{:keys [ _id title author imgurl]}]
  [:div.row 
    [:div.span2 {:id "img-box"} 
      [:p {:id (str "book-img-"_id)}
        (if imgurl [:img {:src imgurl}])]
      [:a.show-img-loader {:href "#" :bookid _id} "upload pic"]
      [:p  {:id (str "image-loader-" _id) :class "img-loader"} 
        [:input {
          :bookid _id
          :type "filepicker-dragdrop" 
          :data-fp-apikey "your filepicker API key"
          :data-fp-container "modal" 
          :data-fp-maxSize "1024000"
          :data-fp-mimetype "image/*"
          :data-fp-services "BOX,COMPUTER,DROPBOX,FACEBOOK"
          :data-fp-bookId _id
          :id "img-input"
          :onchange (str "testpro.app.getimage(event.fpfile,'" _id "')")  }]] ; Note here _id need to be a string !
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
(defremote store-book [author title]
  (if (monger/insert "books" 
      {:_id (ObjectId.)
      :title title
      :author author 
      })
    "ok")
  )
(defremote books-list-rem []
  (books-list)
  )
