
var switchLang = function(lang) {
  Array.from(document.getElementsByClassName("lang")).forEach(function(elem){ elem.setAttribute("style","display:none")   }); 
  Array.from(document.getElementsByClassName(lang)).forEach(function(elem){ elem.setAttribute("style","display:block")   });
}

var randomColor = function() {
  var symbols = "0123456789abcdef";
  var ans = "#";
  for (var i=0;i<6;i++) {
    ans += symbols[Math.floor(Math.random()*symbols.length)];
  }
  return ans;
}

var discoMode = function() {
  document.body.style.background = "#badfab";
  document.getElementById("sitelogo").setAttribute("src","/images/discomon.png");
  document.getElementById("sitelogo").style.opacity = "0.5";
  document.getElementById("sitelogo").style.filter  = "alpha(opacity=50)";
  setInterval( function(){document.body.style.background = randomColor(); }, Math.random()*1069 );
}

// ********** STACKOVERFLOW COPYPASTE *****************
// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

// ****************************************************

$(document).ready(function() {
  // phrase of the day(/refresh)
  var phrases = ['shaman says yaman',
                 'bestest site in the multiverse',
                 'ayy',
                 '',
                 'just your average cultist next door',
                 '. . .',
                 '...',
                 'laozi says:<br> you should visit this site more often',
                 'nsfw',
                 'i like pizza',
                 '',
                 '<a href="https://linktr.ee/gidemusic">linktr.ee/gidemusic</a>',
                 'semmi látnivaló',
                 'meep'
                ]
  var insp = document.getElementById("inspirational");
  insp.innerHTML = phrases[Math.floor(Math.random()*phrases.length)];
  //insp.innerHTML = phrases[phrases.length-1];
  setInterval(function(){  Array.from(document.getElementsByClassName("pps")).forEach(function(elem){ elem.setAttribute("style","display:none")   });  },500);
  if(getCookie("meep")!==null) { document.body.innerHTML = "yikes" }
  setInterval(function(){ eraseCookie("meep"); }, 100000)

});

