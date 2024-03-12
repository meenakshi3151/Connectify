// const express = require('express');
// const dotenv = require('dotenv');
// const Connection = require('./db');
// const cors = require('cors');
// // const emailRoutes = require("./routes/emailRoutes");
// // const userRoutes = require("./routes/userRoutes");
// const checkRoutes = require("./routes/checkRoutes");


// dotenv.config();
// Connection();
// const app=express();
// app.use(cors());


// const allowedOrigins = [
//     'http://localhost:3000', 
//   ];
//   const corsOptions = {
//     origin: function (origin, callback) {
//       if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   };
//   app.use(cors(corsOptions));
//   app.use(express.json());
//   app.use("/",checkRoutes);
//   app.listen( ()=> console.log(`Server is running successfully on PORT ${process.env.PORT}`));
 
 
const express = require('express');
const dotenv = require('dotenv');
const Connection = require('./db');
const cors = require('cors');
const checkRoutes = require("./routes/checkRoutes");
const emailRoutes = require("./routes/emailRoutes");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
Connection();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", checkRoutes);

app.use("/",emailRoutes)
app.use("/", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

 

