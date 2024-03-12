const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin=require("../schemas/adminModel")

//register the admin(role)
const registerAdmin = asyncHandler(async(req,res)=>{
    const {name,email,phone,password,
    company,position}=req.body;
    if(!name || !email || !password || !phone || !company || !position){
        res.status(400)
        throw new Error("Please enter all the fields")
    }

    // const existinUser=await User.findOne({email});
    const existinUser = await User.findOne({ email });
    const existinAdmin = await Admin.findOne({ email });
    if (existinAdmin) {
        res.status(400);
        throw new Error("User already exists ");
    }
    if (existinUser) {
        res.status(400);
        throw new Error("User already exists ");
    }
    const admin=await Admin.create({
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
            company: admin.company,
            position: admin.position
            
          });
    }
    else{
        res.status(400);
        throw new Error("User not found");
    }
});

module.exports={registerAdmin};