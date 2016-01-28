
// Attach an event listener to the form submit (using jQuery)
$("#artist-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "https://api.spotify.com/v1/search?q=" + $("#query").val()+ "&type=track";
  $.get(url, resultsReceived);
  $('li').remove();
 document.getElementById("artist-search-form").reset();
}


var ul = document.querySelector("#music");

var previewAudio = null

function resultsReceived(results) {
  debugger
  for (var i = 0; i < results.tracks.items.length; i++) {
    var divContainer = document.createElement("div")

    var trackList = document.createElement("li");
    trackList.classList.add("track")

    var img = document.createElement("img");
    img.setAttribute("src", results["tracks"]["items"][i]["album"]["images"][0]["url"]);
    var audioP = new Audio(results["tracks"]["items"][i]["preview_url"])


    var titleContainer = document.createElement("div")
    var title = document.createElement("a")
    title.textContent = results["tracks"]["items"][i]["name"];
    title.setAttribute("href", results["tracks"]["items"][i]["preview_url"])
    title.setAttribute("target", "popup")
    titleContainer.classList.add("movie-title");

    var artist = document.createElement("div");
    artist.textContent = results["tracks"]["items"][i]["artists"][0]["name"];
    artist.classList.add("movie-release-date");

    ul.appendChild(trackList);

    trackList.appendChild(divContainer);
    divContainer.appendChild(img);
    divContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    divContainer.appendChild(artist);


  }

console.log(results)
}
