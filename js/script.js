/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
var quotes = [
  {
    quote: "Remember that the happiest people are not those getting more, but those giving more.",
    source: "H. Jackson Brown, Jr."
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    citation: 'Stanford Commencement Address',
    year: 2005
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    source: "Bruce Lee"
  },
  {
    quote: "You miss 100 percent of the shots you never take.",
    source: "Wayne Gretzky"
  },
  {
    quote: "The person who reads too much and uses his brain too little will fall into lazy habits of thinking.",
    source: "Albert Einstein"
  },
];


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
  // Closing the p tag of the html variable
  html += '</p>';
  // Setting the innerHTML of the div with the ID 'quote-box' to the html string
  var quoteDiv = document.getElementById('quote-box').innerHTML = html;
}

/*** 
If the "Show another quote" button is clicked the event listener will be triggered
and it will call the printQuote function to generate another random quote
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);