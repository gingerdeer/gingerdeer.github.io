---
title: "An excursion into Tidal"
last_modified_at:
tags:
  - Haskell
  - Tidal
  - Programming
  - livecoding
  - algorithmic
  - electronic
  - soundcloud
  
---

About a year ago, I was experimenting with Tidal. [Tidal](http://pages.tidalcycles.org/
) is a framework for the Haskell programming language that allows for music programming, and more specifically, live coding. Live coding is a practice where a programmer creates music with a programming tool in a real-time fashion, so instead of creating a song.file that, when evaluated, produces song.mp3 or whatever, the code is created real-time while performing or recording, and modified on-the-fly.   


An example of Tidal code is shown below:
{% highlight haskell %}
d1 $ slow 1 $ stack [
  every (choose [2,4]) (slow 2) $ slow 2
  $ n "a4 as4 d4 d4"
  -- $ n (scramble 8 "[d4 a4] d4 [d4 as4] f5 [d4 g4] as4 [d4 f4] g4")
  # s "supermandolin" # pan (slow 8 (rand)) # gain "1.2" # sustain "1.5",
  every 2 (slow (choose [3, 2])) $ slow 2
  $ n (scramble 4 "[d4,f4,a3] [as3,f3] [f4,d3,a3] [e3,g3]")
  # s "supercomparator" # gain 0.75 # sustain 2.0 # attack 2.0,
  sound "bd:3 ~ bd:3 ~" # gain 1.2,
  every 2 (slow 2) $ sound "ho*4" # gain "0.45" # pan (slow 4 (rand)),
  slow 2 $ sound "cp" # gain "0.8"
]
{% endhighlight %}
where the code defines five different sound sources: a "supermandolin" sound, a "supercomparator" sound, and the percussion elements consisting of a bass-drum ("bd:3"), hi-hats ("ho") and a clap sound ("cp"), that play simultaneously when running the code . The supermandolin and supercomparator are presets within the built-in synth, and can be configured with parameters such as attack, delay, sustain and release. The percussion elements, "bd:3", "ho", and "cp", are samples included with the software.   

Most of my recordings from that time can be found in [this playlist](https://soundcloud.com/gingerdeer-1/sets/tidalcycles). I only scratched the surface of what is possible with the tool, but already found the results quite fun and interesting. A lot of things are possible with the built-in synth, samples and the basic patterns that can be found in the documentation.  
<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/397908705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
The most aurally pleasing / closest to serious music is this first track, "Tidal1.mp3 / synth efektei", where I was able to reach some pretty nice sounds when I discovered the effect parameters that could be given into the synth, such as reverb and such. The melodies are all partly randomized, choosing notes from a given list of notes according to different patterns.  

The others are largely experiments in rhythm and the different patterns doable in Tidal.  



Particularly interesting was when I went a bit nuts with the file pianoimpro.tidal.  
<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423257679%3Fsecret_token%3Ds-Lwd38&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>  
Where IMO the quite heavily randomized piano can be made to sound quite lively. I took this craziness even further to create the following track:
<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/422984802%3Fsecret_token%3Ds-dcX3b&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
where the distortion at the end was caused by my managing to cap my CPU levels with the code :)  

 
In effect, the melodies and "melodies" are created by insane long lines of, say, the form below, and then occasionally changing the effective note-producing line by commenting/uncommenting.  

{% highlight haskell %}
d5 $ slow 128 $ every (choose[16,64,32,32,64,128]) (slow 1) $ every (choose [1,1]) (degradeBy 0.5 . slow 1 . loopAt 0.25 . gap 4 . striate 128 . degradeBy 0.5 . fast 1) $ stack [
  every (choose [2,4,8,16]) (degradeBy 0.2 . slow (choose [1,2])) $ degradeBy 0.01 $ slow 8
    $ slow 4 $ every 4 (degradeBy 0.25 . fast 1)  $ every (choose [1,1]) (linger 0.75 . degradeBy 0.25 . gap 2 . loopAt 1 . fast 1 . striate 128 . degradeBy 0.95 . fast 2)  $ n (scramble 16 "[ ~ ~ fs4] [~ [g4,b4]] [~ a4 ~] [~ [fs4,as4]] [fs4 ~ a4/2] [[fs4,a4] ~ a4] [as4 [ds4, gs4] ds4] [f4 [f4,a4] f4] [~ ds4,g4] [[g4,b4] ~] [~ [fs4,as4]] [c4 ~ ~] [ ~ ~ as4] [fs4,as4] [as4 g4 ~] [[c4,ds4] ~]")
  # s "superpiano" # pan (slow 2048 (sine)) # gain 0.8 # sustain 4 # crush 7
  # attack 0.1 # release 2
] # room 0.3 # size 0.3
{% endhighlight %}

The heights of my Tidal madness from this period are distilled into the following two recordings, "not asmr" and "mystic", where I used a plucked-string sound with the randomized melody creation methods. The results are reasonably creepy, being 
at times musical and at others, quite something else. 
<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423003819%3Fsecret_token%3Ds-81utW&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/423274542%3Fsecret_token%3Ds-ovxI9&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

I've put a dump of most of the files I created while I was playing with Tidal into the following github repository. I created most of the recordings by evaluating the files or parts of them and then changing the parameters by toggling different commented lines as evaluated / not. I used Audacity to record these tracks.   
[https://github.com/gingerdeer/tidalcycles-ideas](https://github.com/gingerdeer/tidalcycles-ideas)  


Tidal can be made to output MIDI, and can therefore be used with any software synths and virtual instruments that accept midi input, that is to say: all of them.  
 If I'm to return to Tidal some day, I will likely start by hooking it to my favourite synths and going for something a bit less random with the available commands.

<div style="display:none">
it's pronounced /ˈɹændəm/
</div>

