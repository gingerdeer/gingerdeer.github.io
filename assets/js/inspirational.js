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
                 '',
                ]
  var insp = document.getElementById("inspirational");
  insp.innerHTML = phrases[Math.floor(Math.random()*phrases.length)];
   
});
