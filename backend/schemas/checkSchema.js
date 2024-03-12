const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const validate = require("mongoose-validator");
const checkSchema = mongoose.Schema(    {
    name:{
        type:String,
        required:true
    },
    email: { 
        type: String,
         unique: true, 
        required: true 
    },
    phone:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("check", checkSchema);