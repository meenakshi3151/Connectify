const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin=require("../schemas/adminModel");

const getAllUsers = asyncHandler(async (req, res) => {
    const { name } = req.query; // Extract the 'name' query parameter from the request
    console.log(name); // Log the received name

    // Construct the query to perform case-insensitive search by name
    const query = { name: { $regex: new RegExp(name, 'i') } };
    console.log(query); // Log the constructed query

    try {
        const users = await User.find(query);

        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "No users found with the provided name" });
        }
    } catch (error) {
        console.error(error); // Log any errors that occur during database operation
        res.status(500).json({ message: "Internal Server Error" });
    }
});

const getAllAdmins = asyncHandler(async(req,res)=>{
    const { name } = req.body; 
    
    const query = { name: { $regex: new RegExp(name, 'i') } };

    try {
        const users = await Admin.find(query);

        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "No users found with the provided name" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
module.exports={getAllUsers ,getAllAdmins};