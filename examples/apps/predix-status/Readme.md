# Project Name

Alexa Skill to ask app status 

## Steps to create the skill
- Read https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/understanding-custom-skills to understand the development model
- Write code to perform the intended function. In this case the code checks the status of predix app and returns the status.
- Create a lambda function in Amazon AWS - ![alt tag](https://github.com/akshaybagai/alexa-app-server/blob/master/examples/apps/predix-status/Screen%20Shot%202016-11-27%20at%203.05.40%20PM.png?raw=true)
- Configure lambda function ![alt tag](https://github.com/akshaybagai/alexa-app-server/blob/master/examples/apps/predix-status/Screen%20Shot%202016-11-27%20at%203.06.39%20PM.png?raw=true)
- Follow the defaults and copy the unique ID of the function. (Not sharing image because of security concerns)
- Open Alexa Development console and start setting up the new skill. ![alt tag](https://github.com/akshaybagai/alexa-app-server/blob/master/examples/apps/predix-status/Screen%20Shot%202016-11-27%20at%203.07.56%20PM.png?raw=true)
- Use Echoism to test the response. ![alt tag](https://github.com/akshaybagai/alexa-app-server/blob/master/examples/apps/predix-status/Screen%20Shot%202016-11-27%20at%203.10.43%20PM.png?raw=true)

## Sample response from lambda function

```sh
{
  "version": "1.0",
  "response": {
    "outputSpeech": {
      "type": "SSML",
      "ssml": "<speak>Relax! Your app is working fine.</speak>"
    },
    "shouldEndSession": true
  },
  "sessionAttributes": {}
}
```


