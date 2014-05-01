(ns lt.plugins.gitstatusbar
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.canvas :as canvas]
            [lt.objs.command :as cmd]
            [lt.objs.bottombar :as bottombar]
            [lt.objs.editor :as ed]
            [lt.objs.context :as ctx]
            [lt.objs.statusbar :as statusbar]
            [lt.util.dom :as dom]
            [lt.util.cljs :as cljs]
            [lt.objs.workspace :as workspace]
            [lt.objs.editor.pool :as pool]
            [crate.binding :refer [bound map-bound]]
            [lt.util.load :as load]
            [clojure.set :as set]
            [clojure.string :as str]
            )
  (:require-macros [lt.macros :refer [behavior]]))

(def fs (js/require "fs"))
(def cp (js/require "child_process"))

(defn is-git? [path]
  (when (.existsSync fs path)
    (let [stat (.statSync fs path)]
      (.isDirectory stat))))

(def repos (atom {}))

(def ss (atom {}))

(def git (atom {}))


(defn update-repo [path change]
  (when path
    (swap! repos update-in [path] merge change)))

(defn repo-dirty-git [path]
  (when path
    (.exec cp
           "git status --porcelain"
           #js {:cwd path}
           (fn [e out err]
             (when (and (not e) (empty? err))
               (update-repo path {:dirty (not (empty? out))}))))))

(defn repo-branch-git [path]
  (when path
    (.exec cp
           "git rev-parse --abbrev-ref HEAD"
           #js {:cwd path}
           (fn [e out err]
             (when (and (not e) out (empty? err))
               (update-repo path {:branch (str/trim out)}))))))

(defn repo-git [path]
  (repo-dirty-git path)
  (repo-branch-git path))

(defn render-branch [container]
  (if (-> container ::repo :branch)
    [:li.repo-container
     (if (-> container ::repo :dirty)
       [:i.fa.fa-circle-o.dirty-indicator {:title "uncommitted changes in repo"}]
       [:i.fa.fa-check-circle.dirty-indicator {:title "no uncommitted changes"}])
     [:i.fa.fa-code-fork]
     (-> container ::repo :branch)]
    [:span]))

(defn slurp [path]
  (.readFileSync fs path #js {:encoding "utf-8"}))

(defn on-head-change [path]
  (repo-git path))

(defn track-repo [path]
  (when (and (.existsSync fs (str path "/.git/HEAD"))
             (not (get @ss path)))
    (on-head-change path)
    (.watch fs
            (str path "/.git")
            #js {:persistent false}
            (fn [event filename]
              (when (= "HEAD" filename)
                (on-head-change path))))))

(defn untrack-repo [path]
  (when-let [watcher (get @ss path)]
    (.close watcher)))

(defn watch-dirs [dirs]
  (let [existing-paths (-> @ss keys set)
        new-paths (-> dirs set)
        to-add (set/difference new-paths existing-paths)
        to-rem (set/difference existing-paths new-paths)]
    (swap! ss merge (->> to-add (map #(vector %1 (track-repo %1))) doall (into {})))
    (doseq [path to-rem]
      (untrack-repo path))
    (swap! ss #(apply dissoc % to-rem))))

(defn path->repo-path [path]
  (->> @repos
       keys
       (filter #(and path
                     (.startsWith path %)))
       first
       ))

(object/object* ::container
                :init (fn [this]
                        (when this
                          ;; span hack to prevent extra space w/ an empty li element
                          [:span
                           (bound this render-branch)])))

(def container (object/create ::container))

(statusbar/add-statusbar-item container)

;; Container
;;
;; Questions
;; * how to compose updates?
;;
;; Updates from:
;; * x switch editor panes
;; * x fs change / command line
;; * x projects added / removed from workspace
;;
;; Change flow:
;; editor switch \                   / workspace dirty indicator
;; fs change     | -> atom update -> | branch / dirty status in statusbar
;; workspace chg /

(behavior ::watch-editor
          :triggers #{:save}
          :reaction (fn [this]
                      (->> @this
                           :info
                           :path
                           path->repo-path
                           repo-git)))

(behavior ::attach
          :triggers #{:active}
          :reaction (fn [this]
                      (when (tabs/active-tab)
                        (object/merge! container {::repo (->> @(tabs/active-tab)
                                                              :info
                                                              :path
                                                              path->repo-path
                                                              (get @repos))}))))

(behavior ::workspace
          :triggers #{:updated :set}
          :reaction (fn [this]
                      (-> @this :folders watch-dirs)))

(add-watch
 repos :repos-watch
 (fn [k r o n]
   (object/merge! container {::repo (when (tabs/active-tab)
                                      (->> @(tabs/active-tab)
                                           :info
                                           :path
                                           path->repo-path
                                           (get n)))})))

(when workspace/current-ws
  (-> @workspace/current-ws :folders watch-dirs))


