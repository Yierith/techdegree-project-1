/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
var quotes = [
  {
    quote: "Remember that the happiest people are not those getting more, but those giving more.",
    source: "H. Jackson Brown, Jr.",
    tag: 'Inspiration'
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    citation: 'Stanford Commencement Address',
    year: 2005,
    tag: 'Life'
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    source: "Bruce Lee",
    tag: 'Sports'
  },
  {
    quote: "You miss 100 percent of the shots you never take.",
    source: "Wayne Gretzky",
    tag: 'Sports'
  },
  {
    quote: "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
    source: "Albert Einstein",
    tag: 'Inspiration'
  },
];

// Function to generate a random RGB Color
function getRandomRGBColor(){
  var maxValue = 256;
  // Generation random numbers betweet 0 and 256 for red, green and blue
  var red = Math.floor(Math.random() * maxValue);
  var green = Math.floor(Math.random() * maxValue);
  var blue = Math.floor(Math.random() * maxValue);
  // Building the rgb() style for the html string
  var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
  // Return the rgbColor style string
  return rgbColor;
}

function getRandomQuote(quotes){
  // Create a random Number from 0 to the length of the quotes array.
  var randomNumber = Math.floor(Math.random() * quotes.length);
  // Return a random quote from the quotes array with the index number of randomNumber
  return quotes[randomNumber];
}


function printQuote(randomQuote){
  // Get a random quote from the getRandomQuotes function and save it into the variable randomQuote
  var randomQuote = getRandomQuote(quotes);
  var html = '';
  // Adding the quote section to the html variable (concatening)
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  // Adding the source section to the html variable (concatening)
  html += '<p class="source">' + randomQuote.source;
  // Check if there is a citation property in the quote object
  if ( randomQuote.citation ) {
    // If yes then adding the citation section to the html variable
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  // Check if there is a year property in the quote object
  if ( randomQuote.year ) {
    // If yes then adding the year section to the html variable
    html += '<span class="year">' + randomQuote.year + '</span>'
  }
  // Check if there is a Tag in the quote object
  if ( randomQuote.tag ){
    // If yes then adding the Tags to the html variable
    html += '<span class="tags">Tag: ' + randomQuote.tag + '</span>'
  }
  // Closing the p tag of the html variable
  html += '</p>';
  // Get a random RGB Color from the getRandomRGBColor function and set the backgroundColor to it
  var randomBackgroundColor = getRandomRGBColor();
  // Changing the backgroundcolor of the body style to randomBackGroundcolor
  document.body.style.backgroundColor = randomBackgroundColor;
  // Setting the innerHTML of the div with the ID 'quote-box' to the html string
  document.getElementById('quote-box').innerHTML = html;
}

// Randomly changing the Quote every 25 Seconds
window.setInterval(printQuote, 25000);

/*** 
If the "Show another quote" button is clicked the event listener will be triggered
and it will call the printQuote function to generate another random quote
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);