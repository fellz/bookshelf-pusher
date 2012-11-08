(defproject mywebapp "0.1.0-SNAPSHOT"
    :plugins [
             [lein-cljsbuild "0.2.8"]]
    :cljsbuild {:builds [
    {
      :source-path "src"
      :compiler {
        :output-to "resources/public/js/main.js"
        :optimizations :simple
        :pretty-print true 
    }}]}  
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [noir "1.3.0-beta10"]
                           [com.novemberain/monger "1.3.1"]
                           [fetch "0.1.0-alpha2"]
                           [clj-time "0.4.4"]
                           [jayq "0.1.0-alpha3"]
                           [clj-http "0.5.5"]
                           [clj-pusher "0.3.0"]]
                           
            :production {:misc "configuration"
               :mirrors {#"central|clojars"
                       "http://s3pository.herokuapp.com/clojure"}}
            :min-lein-version "2.0.0"
            :main mywebapp.server)

