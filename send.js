const Nexmo = require('nexmo')

const nexmo = new Nexmo({
    apiKey: '618b9298',
    apiSecret: 'MaOpbmo9gayNfTFY',
});


const from = 'Vonage APIs';
const to = '+201225642467';
const text = 'from Vonage APIs (Mohamed Abo halema)';

nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if (responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})

