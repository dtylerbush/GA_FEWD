
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "ITLOhWQF2M8EcgU871kaKuXaXduX3Uoi";

async function giphySearch(e) {

  // prevent the page from submitting/reloading
  e.preventDefault();

  console.log("WEEEEE")

  // get the user input from the form
  let userInput = document.querySelector('#search-form input[name="search-term"]').value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)

  const requestURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + userInput;

  const potato = await fetch(requestURL);

  const giphyData = await potato.json();

  console.log(giphyData);

  // convert your response data into .json()

  // print your data to the console to see its format, dont forget to delete later

  // clear out all gifs from previous searches

  document.getElementById('giphy-results').innerHTML = "";

  // use a loop to create and append each image to the dom
  for(let g = 0; g < giphyData['data'].length; g++ ){
    console.log(g);
  
let imgURL = giphyData['data'][g]['images']['fixed_width']['url'];

const newImgTag = document.createElement("img");
newImgTag.setAttribute('src', imgURL);
document.getElementById('giphy-results').appendChild(newImgTag);

}}

// dont forget your event listener

document.getElementById('search-form').addEventListener('submit', giphySearch);

