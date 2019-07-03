---
title: "Ode to Emacs"
last_modified_at:
---

As an avid Lisper, I once took the time to learn the basics of the Emacs text editor. This is an overview of my simple configuration for it.  

Emacs is just the best, I use it for most of my text editing work and for coding. The best thing about it is that it is mostly a platform that you can always tailor to your current usage needs. It can literally be programmed to be your mail client or as a music player.  
I'm no expert myself, and my own .emacs -configuration file is very short and simple, without any fancy tricks. I've still found it quite suitable for most of my needs so far.  

Features include:  
..* downloading of preferred packages at startup, which is always great for new installations.
..* a few usability key-binds
..* visual image: togglable transparency and a changing color theme
..* ido-mode for directory traversal
..* some language specific commands, some of which are for windows only, such that I only keep uncommented those relevant to my current system
..* nyancat in the year 2019

{% highlight elisp %}
        ;; Packages I always want to have
(setq package-list '(ein
                     color-theme
		     cyberpunk-theme
		     markdown-mode
		     ;;ido-ubiquitous
		     json-reformat
		     rainbow-mode
		     ;;magit
		     nyan-mode
		     monokai-theme
		     reykjavik-theme
		     haskell-mode))
;; melpa
(require 'package) ;; You might already have this line
(add-to-list 'package-archives 
            '("melpa" . "https://melpa.org/packages/"))
(when (< emacs-major-version 24)
  ;; For important compatibility libraries like cl-lib
  (add-to-list 'package-archives '("gnu" . "http://elpa.gnu.org/packages/")))
(package-initialize) ;; You might already have this line

;; ORG
(require 'org)
(define-key global-map "\C-cl" 'org-store-link)
(define-key global-map "\C-ca" 'org-agenda)
(setq org-log-done t)
(setq org-agenda-files (list "~/org/personal.org"))

;; Download packages that aren't installed
(unless package-archive-contents
  (package-refresh-contents))
(dolist (package package-list)
  (unless (package-installed-p package)
    (message "Hey, it seems you're missing some packages. gonna download them for you now.")
    (package-install package)))

;; nice to have imo
(global-linum-mode t)

;; So much ido
(ido-mode 1)
(ido-everywhere 1)

;; Custom key bindings
(global-set-key (kbd "C-x C-m") 'compile)

;; ipython
;; (require 'ein)

;; fuck tabs
(setq-default indent-tabs-mode nil)

;; hehe
(nyan-mode t)
;; ipython(
(setq python-shell-interpreter "ipython"
      python-shell-interpreter-args "-i")
(setq-default py-shell-name "ipython")
(setq-default py-which-bufname "IPython")
					; use the wx backend, for both mayavi and matplotlib
(setq py-python-command-args
      '("--gui=wx" "--pylab=wx" "-colors" "Linux"))
(setq py-force-py-shell-name-p t)

;; haskell mode compile
(eval-after-load "haskell-mode"
  '(define-key haskell-mode-map (kbd "C-c C-c") 'haskell-compile))

;; "colors"
(require 'color-theme)
(setq my-color-themes (list 'color-theme-billw 'color-theme-jsc-dark 
                            'color-theme-sitaramv-solaris 'color-theme-resolve
                            'color-theme-classic 'color-theme-jonadabian-slate
                            'color-theme-kingsajz 'color-theme-shaman
                            'color-theme-subtle-blue 'color-theme-snowish
                            'color-theme-sitaramv-nt 'color-theme-wheat))
(color-theme-initialize)

(defun random-color-theme ()
  (interactive)
  (random t)
  (funcall (car (nth (random (length color-themes)) color-themes))))
;;
(random-color-theme)
;;
(run-with-timer 1 (* 60 60) 'random-color-theme)
(global-set-key (kbd "C-c +") 'random-color-theme)

;; switch to prev window
(defun prev-window ()
   (interactive)
   (other-window -1))

 (define-key global-map (kbd "C-x p") 'prev-window)

;; (load (expand-file-name "~/quicklisp/slime-helper.el"))
;;(setq inferior-lisp-program "sbcl")
;;(add-to-list 'load-path "C:/slime-2.22")
;;(require 'slime)
;;(slime-setup)

;; spotify (?)

(defun pl-transparency (value)
  "Set the transparency of the frame window.
Argument VALUE 0 is transparent, 100 is opaque."
  (interactive "nTransparency Value (0 - 100): ")
  (set-frame-parameter (selected-frame) 'alpha value))

(pl-transparency 75)
(menu-bar-mode -1)
(define-key global-map (kbd "C-c C-o -") (lambda () (interactive) (pl-transparency 75)))
(define-key global-map (kbd "C-c C-o +") (lambda () (interactive) (pl-transparency 100)))

{% endhighlight %}

![center-aligned-image](/images/emacs.PNG){: .align-center}

I keep a more or less up to date version of this configuration at:  
[https://github.com/gingerdeer/dotemacs](https://github.com/gingerdeer/dotemacs)  
