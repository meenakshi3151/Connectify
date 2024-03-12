const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin = require("../schemas/adminModel")

//register the user(role)
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !password || !phone) {
        res.status(400)
        throw new Error("Please enter all the fields")
    }

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
    const user = await User.create({
        name,
        phone,
        password,
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
module.exports = {registerUser};
