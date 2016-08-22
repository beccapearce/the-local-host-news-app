var headlines = [];

function guardianAPI() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
    headlines.push(JSON.parse(request.responseText));
      }
  };
  request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=politics&show-fields=thumbnail&show-editors-picks=true');
  request.send();
  return headlines;
}
