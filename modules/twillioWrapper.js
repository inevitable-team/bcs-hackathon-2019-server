const keys = require("../keys"),
      client = require('twilio')(keys.twilioAccountSid || process.env.twilioAccountSid, keys.twilioAuthToken || process.env.twilioAuthToken);

module.exports = async (toNumber, message) => {
    return new Promise(resolve => {
        client.messages
        .create({
           body: message,
           from: '+447494464934',
           to: toNumber
         })
        .then(resolve);
    })
}
