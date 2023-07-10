
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
        subject: " your OTP for new Password",
        html: "<h3>your OTP for new password is </h3>" + "<h1 '>" + otp + "</h1>" 
    }
    return transport.sendMail(mailDescription, function (error, res) {
        if (error) throw error;
        console.log('email has been sent');
    })

};

module.exports = {Otp}