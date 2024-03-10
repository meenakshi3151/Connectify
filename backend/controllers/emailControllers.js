const nodemailer = require('nodemailer');
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();
const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
  
    var mailOptions = {
      from: email,
      to: process.env.TO_MAIL,
      subject: "Query from " + name,
      text:
        "Received a query from " +
        name +
        " with email id " +
        email +
        " - " +
        message,
    };


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log( info.response);
    }
});
});

const mailSender = async (email, title, body) => {
    try {
      // Create a Transporter to send emails
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
        }
      });
      // Send emails to users
      let info = await transporter.sendMail({
        from: 'MEENAKSHI',
        to: email,
        subject: title,
        html: body,
      });
      console.log("Email info: ", info);
      return info;
    } catch (error) {
      console.log(error.message);
    }
  };

  module.exports = { sendEmail ,mailSender};