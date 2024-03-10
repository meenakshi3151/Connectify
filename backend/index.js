import cors from "cors";
import express  from 'express';
import Connection from "./db.js";
import router from "./routes/user-routes.js";
import dotenv from 'dotenv';


dotenv.config();

const app=express();
app.use(cors());

app.use("/api/user",router);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

Connection();