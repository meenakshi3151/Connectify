const express = require('express');
const dotenv = require('dotenv');
const Connection = require('./db.js');

const cors = require('cors');

dotenv.config();

const app=express();
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

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

Connection();