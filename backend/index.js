const express = require('express');
const dotenv = require('dotenv');
const Connection = require('./db.js');
// const emailRoutes = require("./routes/emailRoutes");
const cors = require('cors');

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
const allowedOrigins = [
    'http://localhost:3000', 
  ];
  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
 
  app.use(cors(corsOptions));
//   app.use("/email", emailRoutes);

app.listen( ()=> console.log(`Server is running successfully on PORT ${process.env.PORT}`));

Connection();