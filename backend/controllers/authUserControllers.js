const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin=require("../schemas/adminModel");
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
            password:user.password,
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
