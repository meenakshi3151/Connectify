import cors from "cors";
import express  from 'express';
import Connection from "./db.js";

import dotenv from 'dotenv';


dotenv.config();

const app=express();
app.use(cors());


const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

Connection();