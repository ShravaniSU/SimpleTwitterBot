require('dotenv').config()
var Twit = require('twit');
 
var client = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
console.log("Twitter bot has started");
const stream = client.stream('statuses/filter', { track: '#WorkFromHome' });
function responseCallback(err, data, response) {
    console.log(err);
}

stream.on('tweet', tweet => {
    // retweet
    client.post('statuses/retweet/:id', { id: tweet.id_str }, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
        else{
            console.log(error);
        }
    });
    // like
    client.post('favorites/create', { id: tweet.id_str }, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
        else{
            console.log(error);
        }
    });
});