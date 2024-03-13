const { createTransport } = require('nodemailer');
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
});

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
  
const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
  

})

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log( info.response);
    }
});