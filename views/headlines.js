function printnews(headlines) {
var printednews;
for(var i = 0; i < headlines.length; i++) {
  printednews += "<div id=" + i + ">" + "<a href=#" + i +">" + headlines[i].webTitle + ".</a></div>";
}
return printednews;
}
