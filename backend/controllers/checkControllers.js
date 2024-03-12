const check = require("../schemas/checkSchema");
const asyncHandler = require("express-async-handler");
const checkAdmin = asyncHandler(async(req,res)=>{
    const {name,email,phone}=req.body;
    if(!name || !email ||  !phone){
        res.status(400)
        throw new Error("Please enter all the fields")
    }
    const existinUser=await check.findOne({email}); 
    if(existinUser){
        res.status(400);
        throw new Error("User already exists ");
    }
    const user=await check.create({
        name,
        phone,
        email
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,

        });
    }
    else {
        res.status(400);
        throw new Error("User not created");
    }
});
module.exports={checkAdmin};