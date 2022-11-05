require('dotenv').config();
const Twit = require('twit');

var Twitter = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

//var Twitter = new Twit(config);
console.log("Twitter Bot has Started!!");

const postTweet = (message) => {
    return new Promise((resolve, reject) => {
        Twitter.post("statuses/update", {
            status: message
        }, (error, data, response) => {
            if(error) {
                console.log(error);
                reject(error);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
};

module.exports = { postTweet };