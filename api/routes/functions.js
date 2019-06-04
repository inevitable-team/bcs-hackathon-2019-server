const express = require('express');
const router = express.Router();
const client = require('twilio')(require("../../keys").twilioAccountSid || process.env.twilioAccountSid, require("../../keys").twilioAuthToken || process.env.twilioAuthToken);

router.get('/', (req, res, next) => {
    res.status(200).json("Hello World!")
});

router.post('/checkInHospital', (req, res, next) => {
    // send(`Your relative ${ req.body.name || "Sean" } has arrived at ward ${ req.body.ward || "114" }, download the app.`, req.body.to || "+447933343042", res);
});

router.post('/checkInAppointment', (req, res, next) => {
    // send(``, req.body.to || "+447933343042", res);
});

router.post('/checkOutAppointment', (req, res, next) => {
    // send(``, req.body.to || "+447933343042", res);
});

router.post('/text', (req, res, next) => {
    sendMessage(req.body.to, req.body.message).then(result => {
        res.status(200).json(result);
    });
});

async function sendMessage(toNumber, message) {
    return new Promise(resolve => {
        client.messages
        .create({
           body: message,
           from: '+441604420846',
           to: toNumber
         })
        .then(result => resolve(result));
    })
}

module.exports = router;