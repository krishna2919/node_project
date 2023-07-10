
const nodemailer = require("nodemailer");


let transport = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'krishnapethani.shivinfotech@gmail.com',
        pass: 'bwysmpgqizedcljw'
    }
});

const Otp= (email, otp) => {
    let mailDescription = {
        to: email,
        subject: " here is your otp for new password",
        html: "<h3>here is your otp for new password </h3>" + "<h1 '>" + otp + "</h1>" 
    }
    return transport.sendMail(mailDescription, function (error, res) {
        if (error) throw error;
        console.log('email has been sent');
    })

};

module.exports = {Otp}