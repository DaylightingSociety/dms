const nodemailer = require('nodemailer');
const waitMS = 5000;

console.log('Credentials obtained, sending message...');

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', 
    port: 587,
    auth: {
        user: 'ympjsencdzuybpy5@ethereal.email',
        pass: 'feDttypBmBHBFshJdg'
    }
});

let message = {
    from: 'dms test <dms_test@fake.domain>',
    to: 'fake recipient <fake_recipient@fake.domain>', 
    subject: 'DMS Test', 
    text: 'Testing the DMS!',
    html: 'Testing the <strong>DMS!</strong>'
};

var sendMailCallback = function(err, info) {
    if (err) {
        console.log('Error occured when sending. ' + error.message);
        return process.exit(1);
    }

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};

var sendMail = function() {
    transporter.sendMail(message, sendMailCallback);
}

console.log('waiting for %d ms', waitMS);

setTimeout(sendMail, waitMS);