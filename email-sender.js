const nodemailer = require('nodemailer');

// Create a transporter using your email service's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fatmabenyouness@gmail.com',
        pass: 'xrwo wyqu rkyr lhrh',
    },
});

// Email content
const mailOptions = {
    from: 'fatmabenyouness@gmail.com',
    to: 'mouhammedalifaidi@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
