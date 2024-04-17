
// const asyncHandler = require("express-async-handler");
// const User = require("../schemas/userModel");
// const Admin = require("../schemas/adminModel")

// //register the user(role)
// const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, phone, password } = req.body;
//     if (!name || !email || !password || !phone) {
//         res.status(400)
//         throw new Error("Please enter all the fields")
//     }

//     const existinUser = await User.findOne({ email });
//     const existinAdmin = await Admin.findOne({ email });
//     if (existinAdmin) {
//         res.status(400);
//         throw new Error("User already exists ");
//     }
//     if (existinUser) {
//         res.status(400);
//         throw new Error("User already exists ");
//     }
//     const user = await User.create({
//         name,
//         phone,
//         password,
//         email
//     });
//     if (user) {
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             phone: user.phone,
            
//         });
//     }
//     else {
//         res.status(400);
//         throw new Error("User not created");
//     }
// });

// //get user profile

// const getUserProfile = asyncHandler(async (req, res) => {
//     const userId = req.params.id; // Assuming the ID is provided in the URL parameter
//     const user = await User.findById(userId).populate('followers'); // Populate followers array

//     if (!user) {
//         res.status(404).json({ message: "User not found" });
//     } else {
//         // Get the number of followers
//         const followersCount = user.followers.length;
//          const followingCount = user.followingList.length;
        
//         // Construct the response object
//         const userProfile = {
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             phone: user.phone,
//             followers: followersCount,
//             following: followingCount,
//             profileImage:user.profileImage,            // Include the number of followers
//             // Add more details as needed
//         };

//         res.json(userProfile);
//     }
// });






// module.exports = {registerUser ,getUserProfile};


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

//get user profile

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

// server.js

// Function to upload profile image
const uploadProfileImage = async (req, res) => {
    try {
      const { userId } = req.body; // Assuming the user ID is sent from the frontend
      const profileImage = req.file.path;
      
      // Update user's profile image
      await User.findByIdAndUpdate(userId, { profileImage });
      
      res.json({ message: 'Profile image uploaded successfully' });
    } catch (error) {
      console.error('Error uploading profile image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Function to get profile image
  const getProfileImage = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId);
      
      if (!user || !user.profileImage) {
        return res.status(404).json({ error: 'Profile image not found' });
      }
      
      res.sendFile(user.profileImage);
    } catch (error) {
      console.error('Error getting profile image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
 

  // Follow a user
const followUser = asyncHandler(async (req, res) => {
  const { userIdToFollow } = req.params.id;
  const currentUser = req.user;

  try {
      // Check if the user exists
      const userToFollow = await User.findById(userIdToFollow);
      if (!userToFollow) {
          res.status(404).json({ message: 'User not found' });
          return;
      }

      // Add the user to the follower list of the current user
      currentUser.following.push(userIdToFollow);
      await currentUser.save();

      // Optionally, you can update the followers list of the user being followed
      userToFollow.followers.push(currentUser._id);
      await userToFollow.save();

      res.json({ msg: 'User followed successfully' });
  } catch (error) {
      console.error('Error following user:', error);
      res.status(500).send('Server Error');
  }
});


module.exports = {registerUser ,getUserProfile, uploadProfileImage, getProfileImage,followUser};
