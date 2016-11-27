'use strict';
var alexa = require('alexa-app');
var got = require('got');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('predix_status');

app.launch(function(req,res) {
	res.say("Hello!!");
});


app.intent('appstatus',
	{'utterances': ['{|status|latest|update|news}']},
	function (req, res) {
		try {
			got('https://mitpredix-nodejs-starter.run.aws-usw02-pr.ice.predix.io/')
				.then(function(response) {
					res.say('Relax! your app is working fine.').send();
				})
				.catch(function(error) {
					res.say('Oops! The app is down.').send();
				});
		} catch (error) {
			console.log("error", error);
		}
		return false;
	}
);


module.exports = app;
