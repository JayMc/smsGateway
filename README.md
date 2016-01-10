# smsGateway

# description
I need to keep track of text messages I was send from my Raspberry Pi. This project is an API layer with monitoring, opt-out, accounting and rate limiting of sending and receiving text messages via a Pi connected to 3g modem. It doesn't actually send or recieve the messages - that is left to Gammu.

The API provides an end point to send a text message and execute queries on history and billing. Also listens for incoming text messages to allow recipients to opt-out or communicate with your external app via your custom callback URL. This layer is responsible for traffic on the attached SIM card and is agnostic from other external applications calling it. If the API key has exceeded its rate or billing agreement it will not send and respond relevant information to the application.

# gettings started
* git clone https://github.com/JayMc/smsGateway.git
* webpack
* npm start

# run tests
* ```npm test```
It should build a test bundle into build/testBundle.js then run it through mocha

# setup Pi
Compatible 3g modems can be found from $10-$30 like the Huawei e173 or e220.
