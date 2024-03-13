const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Admin=require("..models/adminModel")
const OTP=require("../models/otpModel");
const bcrypt = require('bcryptjs');

//register the admin(role)
const registerAdmin=asyncHandler(async(req,res)=>{
    const {name,email,phone,password,
    comapny,position}=req.body;
    if(!name || !email || !password || !phone || !company || !position){
        res.status(400)
        throw new error("Please enter all the fields")
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
    const admin=await User.create({
        name,
        phone,
        password,
        email,
        company,
        position
    });

    if(admin){
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            phone: admin.phone,
            comapny: admin.comapny,
            position: admin.position

          });
    }
    else{
        res.status(400);
        throw new Error("User not found");
    }
})
module.exports = registerAdmin;


const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const authUserFunction=asyncHandler(async(req,res)=>{
const {email,password}=req.body;
const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone:user.phone,

      });
    } else {
        //if not in user find in admin 
        const user = await Admin.findOne({ email });

        if (user && (await user.matchPassword(password))) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone:user.phone,
            company:user.company,
            position:user.position
          });
        } 
        else {
          res.status(401);
          throw new Error("Invalid Email or Password");
        }
    }
})

module.exports={authUserFunction}