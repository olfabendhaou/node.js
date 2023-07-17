const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'olfa.bendhaou.gmc@gmail.com',
      pass: 'djhlxoflgpvtmiyh'
    }
  });
async function sendEmail(recipient, subject, message) {
    try {
      const mailOptions = {
        from: 'olfa.bendhaou.gmc@gmail.com',
        to: 'olfa.bendhaou.gmc@gmail.com',
        subject: subject,
        text: message
    };
  
     const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  module.exports = sendEmail;