const asyncHandler = require("express-async-handler");
const Post = require("../schemas/postsModel");
const User=require("../schemas/userModel")
const sendPosttoDB = asyncHandler(async (req, res) => {
   // console.log("hi")
    const { title, body, photoEncode, phototype,userId } = req.body;
    console.log(title)
    console.log(body)
    if (!photoEncode || !body || !title || photoEncode === "" || body === "" || title === "") {
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    const user=  await User.findOne({_id:userId})
    if(!user){
        return res.status(400).send({message:'User not found'})
    }
    const post = new Post({
        Title: title,
        Body: body,
        PostedBy: userId,
    });
   // console.log("Bye")
    await post.save()
    // console.log(user);
    await user.posts.push(post._id)
    // console.log(user)
    console.log(post)
    await user.save()
    if (photoEncode !== null) {
        post.Photo = Buffer.from(photoEncode, "base64");
        post.PhotoType = phototype;
    }
    console.log(user)
    post.save()
        .then((result) => {
            res.json({ message: "Post created successfully" });
        })
        .catch((err) => {
            console.log("bc"+err)
            console.log(err);
        });
});


const showAllPosts=asyncHandler(async(req,res)=>{
    Post.find()
             .populate("PostedBy","_id name")
            //   console.log(PostedBy)
             .sort("-createdAt")
             .then((data)=>{
               // console.log(data) 
            //   console.log(data[0].PostedBy)  
                let posts=[];
                data.map((item)=>{
                    console.log(data)
                    posts.push({
                        _id: item._id,
                        Title: item.Title,
                        Body: item.Body,
                        PostedBy: item.PostedBy,
                        Photo: item.Photo.toString("base64"),
                        PhotoType: item.PhotoType,
                        
                    });
                })
                res.json({ posts });
             })
             .catch((err)=>{
                console.log(err)
             })
})


const getUserPosts = async (req, res) => {
    const userId = req.params.id;
    try {
      const posts = await Post.find({ PostedBy: userId }).populate("PostedBy", "_id name");
      const formattedPosts = posts.map((item) => ({
        _id: item._id,
        Title: item.Title,
        Body: item.Body,
        PostedBy: item.PostedBy,
        Photo: item.Photo ? item.Photo.toString("base64") : null,
        PhotoType: item.PhotoType,
      }));
      console.log(formattedPosts);
      return res.json(formattedPosts);
    } catch (error) {
      console.error("Error fetching user posts:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  

module.exports = { sendPosttoDB,showAllPosts ,getUserPosts};

// const getUserPosts=asyncHandler(async(req,res))=>{
//     const { id } = req.body;

//     try{
//         let user;
//         let admin;
//         user = await User.findOne({ _id: id });
//         if(user){
            
//         }
//     }
// }
