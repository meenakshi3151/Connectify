const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


 const Connection = async () => {
     const URL = process.env.MONGO_URL;
      try{
        await mongoose.connect(URL );
        console.log('Connection with database successful');
      } catch (error) {
           console.log('Error while connecting with database ',error);
      }
}

module.exports = Connection;