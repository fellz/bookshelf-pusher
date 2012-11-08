(ns mywebapp.views.welcome
  (:use [noir.core :only [defpage defpartial]]
        [hiccup.form]
        [noir.fetch.remotes]
        [pusher])  
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
          [:p (submit-button {:id "add-book-btn"} "Submit")]
          [:br]
          [:br ] )
  
;[Templae] Book box with title and author  
(defpartial book-box [{:keys [ _id title author ]}]
  [:div.row 
    [:div.span6
      [:p [:span.lbl "Author: "]
        [:span.lbla author]]
      [:p [:span.lbl "Title: " ]
        [:span.lbla title]]
      [:p "----------------------------------------"]  
    ]
  ])

;Pass data to template
(defpartial books-list []
  (reverse (map book-box (mbooks/all-books)))
  )

(defpartial last-book [id]
  (book-box (mbooks/last-book id) )
  )

;Main page 
(defpage "/" []
         (common/layout
           [:div#books-list 
              (books-list)]
           [:hr]
           [:h3 "Add book"]
           (add-book-form)))

(defn pusher-event [id]
          (with-pusher-auth ["appid" "your pusher API key" "API secret"]
            (with-pusher-channel "test_channel"
                                 (trigger "my_event" {:message id}))))


;Save our data in db
(defremote store-book [author title ]
  (let [id (ObjectId.)]
    (if (monger/insert "books" 
          {:_id id
          :title title
          :author author
          })
        "ok")
      (pusher-event (str id)) ; Trigger pusher event 
  ))
; Get last book added
(defremote last-book-rem [id]
  (last-book id)
  )