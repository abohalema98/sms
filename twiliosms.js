
// doucemantion code !!

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// // Find your account sid and auth token in your Twilio account Console.

var accountSid = 'ACf799e4495a9b353145a4164908c6ab86';
var authToken = '3152688d75f7aa76b95eb0f9db6a7f68';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+201225642467',
        to: '+201225642467'
    })
    .then(message => console.log("Message sent successfully."))
    .catch(err => console.log('err'))

