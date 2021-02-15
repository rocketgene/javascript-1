/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/**
 * An array of objects.
 * @type {array}
 * 
 * @property {string} quote - The quote
 * @property {string} source - Who said the quote
 * @property {string} citation - Where the quote was from
 * @property {string} year - Which year it was said
 * @property {boolean} favorite - My favorite quote
 */

let quotes = [
  {
    quote: "There is no charm equal to tenderness of heart.",
    source: "Jane Austen",
    citation: "From Emma"
  }, {
    quote: "Learning never exhausts the mind.",
    source: "Leonardo da Vinci",
    year: "1472"
  },{
    quote: "All that we see or seem is but a dream within a dream.",
    source: "Edgar Allan Poe",
    favorite: true
  },{
    quote: "The only journey is the one within.",
    source: "Rainer Maria Rilke" 
  },{
    quote: "It is far better to be alone, than to be in bad company.",
    source: "George Washington" 
  }
]

/**
 * Generate a random quote.
 * 
 * @return {object} The randomly generated quote.
 */

function getRandomQuote () {
  randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

/**
 * Generate html string containing quote information and pass it to the quotebox div.
 * 
 * @type {string} Html string structuring the quote's information.
 * @return {string} Passing html string to quotebox div.
 * 
 */

function printQuote () {
  let randQuote = getRandomQuote();
  let html = ` 
  <p class="quote"> ${randQuote.quote}</p>
  <p class="source"> ${randQuote.source}`;
  let quotePropsArr = Object.keys(randQuote)

  for (quoteProp in quotePropsArr) {
    if (quotePropsArr[quoteProp] == "citation") {
      html += `<span class="citation"> ${randQuote.citation} </span>`
    } else if (quotePropsArr[quoteProp] == "year") {
      html += `<span class="year"> ${randQuote.year} </span>`
    } else if (quotePropsArr[quoteProp] == "favorite") {
      html += `<span class="year">(my favorite quote!)</span>`
    }
  }
  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html, document.body.style.background = `rgb(${randColorGen()}, ${randColorGen()}, ${randColorGen()})`;
}

// Generate random color 
randColorGen = () => Math.floor(Math.random() * 255);

// Generates a new quote every 10s 
setInterval(printQuote, 10000);

// Loads the first quote 
printQuote();

// Click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);