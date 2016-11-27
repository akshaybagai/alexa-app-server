'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('toptweet');
var Twitter = require('twitter');


function TwitterHelper() {
}

TwitterHelper.prototype.requestAirportStatus = function(req, res) {
    try {
        var client = new Twitter({
            consumer_key: 'AqgVbRU5Ny4fqsEPvqqao8h7b',
            consumer_secret: '2wHATX6EBh6cJ6r9UONy3F5yZj1Dx0FC8uZsuDZ8vhxCU95U6U',
            access_token_key: '52962799-SuyLUo3bAgeayMa8fBNsNCKfGpA7z9T0UuKE0jayD',
            access_token_secret: '149rdvocDD1OuXbnwKgzUD88btemZEMdADsVbLGGBQpkf'
        });

        var params = {screen_name: 'narendramodi', count: 1};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                console.log(tweets[0].text);
                res.say(tweets[0].text).send();
            }
        });
    }
    catch(error) {
        console.log("error", error);
        var prompt = 'Hmm...I couldn\'t get a tweet';
        res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
    }
    return false;
}

app.launch(TwitterHelper.prototype.requestAirportStatus);
 
app.intent('modisays', {'utterances': ['{|says|latest|update|news} {|update|news}']},
    TwitterHelper.prototype.requestAirportStatus
);

app.intent('AMAZON.CancelIntent',
    function(request,response) {
        try {
            response.say('ok').shouldEndSession(true);
        } catch (e) {
            console.log("error", error);
            response.say("Sorry!").shouldEndSession(true).send();
        }
    }
);


app.intent('AMAZON.HelpIntent',
    function(request,response) {
        try {
            var prompt = 'Ask me about latest Narendra Modi tweets!';
            response.say(prompt).reprompt(prompt).shouldEndSession(false);
        } catch (e) {
            console.log("error", error);
            response.say("Sorry!").shouldEndSession(true).send();
        }
    }
);

app.intent('AMAZON.StopIntent',
    function(request,response) {
        try {
            response.say('sure').shouldEndSession(true);
        } catch (e) {
            console.log("error", error);
            response.say("Sorry!").shouldEndSession(true).send();
        }
    }
);





//hack to support custom utterances in utterance expansion string
console.log(app.utterances().replace(/\{\-\|/g, '{'));
module.exports = app;
