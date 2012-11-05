(ns mywebapp.views.welcome
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.form]
        [noir.fetch.remotes])  
  (:require [mywebapp.views.common :as common]
            [noir.response :as response]
            [mywebapp.models.books :as mbooks])

  (:import (org.bson.types ObjectId))
)  

;Form to send title and author
(defpartial add-book-form []
     (form-to [:post "/book/new"]
        [:ul  
          [:li (text-field {:placeholder "title"} "title")]
          [:li (text-field {:placeholder "author"} "author")]
          [:li (submit-button "Submit")]]))
  
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
          :data-fp-apikey "AZ-vVu5NwT22-bgz82uDtz" 
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
           (books-list)
           [:hr]
           [:h3 "Add book"]
           (add-book-form)))

; Send our data to dev db and redirect to main page
(defpage [:post "/book/new" ] {:keys [title author]}
  (mbooks/save-book title author)
  (response/redirect "/")
)

(defremote store-image [url bid] 
  (mbooks/store-image url bid)
  "ok" ; Need to return something readble here - for example string
  )
