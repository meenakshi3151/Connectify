
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const Connection = require('./db');
const cors = require('cors');
const emailRoutes = require("./routes/emailRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes=require("./routes/postRoutes")
dotenv.config();
Connection();

const app = express();
app.use(cookieParser())
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/",emailRoutes)
app.use("/", userRoutes)
app.use("/",postRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

 

