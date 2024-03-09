import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


 const Connection = async () => {
     const URL = process.env.MONGO_URL;
      try{
        await mongoose.connect(URL , { useNewUrlParser : true});
        console.log('Connection with database successful');
      } catch (error) {
           console.log('Error while connecting with database ',error);
      }
}

export default Connection;