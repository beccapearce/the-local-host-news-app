guardianAPI();

setTimeout(function() {
  headlines = readNews();
}, 500);

setTimeout(function() {
  document.getElementById("newsstories").innerHTML = printnews(headlines);
}, 600);
