const famousQuotes = require('./Quotes');
const { postTweet } = require('./postTweet');

function getQuotes () {
    return famousQuotes.QUOTES[Math.floor(Math.random()*famousQuotes.QUOTES.length)];
}

postTweet(getQuotes());