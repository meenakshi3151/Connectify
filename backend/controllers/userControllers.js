const asyncHandler = require("express-async-handler");
const User = require("../schemas/userModel");
const Admin = require("../schemas/adminModel")

//register the user(role)
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password,photoEncode } = req.body;
    if (!name || !email || !password || !phone || !photoEncode) {
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
    if (photoEncode !== null) {
      profileimg = Buffer.from(photoEncode, "base64");
    
  }
    const user = await User.create({
        name,
        phone,
        password,
        email,
        profileimg
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profileimg:user.profileimg

        });
    }
    else {
        res.status(400);
        throw new Error("User not created");
    }
});
const getUserProfile = asyncHandler(async (req, res) => {
    const userId = req.params.id; // Assuming the ID is provided in the URL parameter
    const user = await User.findById(userId).populate('followers'); // Populate followers array

    if (!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        // Get the number of followers
        const followersCount = user.followers.length;
         const followingCount = user.followingList.length;
        
        // Construct the response object
        const userProfile = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            followers: followersCount,
            following: followingCount,
            profileImage:user.profileImage,            // Include the number of followers
            // Add more details as needed
        };

        res.json(userProfile);
    }
});

const editProfile = async (req, res) => {
  const { name, phone, id } = req.body;

  try {
    // Attempt to find the user or admin
    let userOrAdmin = await User.findById(id) || await Admin.findById(id);

    if (!userOrAdmin) {
      return res.status(404).json({ message: "User or Admin not found" });
    }

    userOrAdmin.name = name;
    userOrAdmin.phone = phone;
    
    await userOrAdmin.save();
    
    const role = userOrAdmin instanceof User ? "User" : "Admin";
    return res.status(200).json({ message: `${role} profile updated successfully` });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};




module.exports = {registerUser ,getUserProfile,editProfile};

