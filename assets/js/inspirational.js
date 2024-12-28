
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


$(document).ready(function() {
  // phrase of the day(/refresh)
  var phrases = ['bestest site in the multiverse',
                 'ayy',
                 '',
                 '. . .',
                 '...',
                 'laozi says:<br> you should visit this site more often',
                 'nsfw',
                 '',
                 '<a href="https://gide.community">gide.community</a>',
                 'semmi látnivaló',
                 'meep',
                 'what\'s up?',
                 'you feel compelled to visit this site more often',
                 'Hey there!',
                 'Work in progress',
                 'A professional idiot',
                 'Opinions are my own, if even that'
                ]
  var insp = document.getElementById("inspirational");
  insp.innerHTML = phrases[Math.floor(Math.random()*phrases.length)];

});

