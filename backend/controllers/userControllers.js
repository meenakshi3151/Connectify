const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Admin=require("..models/adminModel")
const OTP=require("../models/otpModel");
const bcrypt = require('bcryptjs');

//register the user(role)
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,phone,password}=req.body;
    if(!name || !email || !password || ![phone]){
        res.status(400)
        throw new error("Plaease enter all the fields")
    }
    const existinUser=await User.findOne({email});
    const existinAdmin=await Admin.findOne({email});
    if(existAdmin){
        res.status(400);
        throw new Error("User already exists ");
    }
    if(existinUser){
        res.status(400);
        throw new Error("User already exists ");
    }
    const user=await User.create({
        name,
        phone,
        password,
        email
    });
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone:user.phone,
            
          });
    }
    else{
        res.status(400);
        throw new Error("User not found");
    }
})
module.exports = registerUser;
