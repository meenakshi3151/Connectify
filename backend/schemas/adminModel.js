const mongoose = require("mongoose");
const adminSchema=mongoose.Schema(
    {
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
        },
        password:{
            type:String,
            required:true
        }
,
         companyName:{
            type:String,
            required:true,

         },
         position:{
            type:String,
         },
         role:{
            type:String,
            default: "admin"
         }

    }
)
module.exports=adminSchema;