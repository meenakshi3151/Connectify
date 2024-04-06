const asyncHandler = require("express-async-handler");
const Post = require("../schemas/postsModel");

const sendPosttoDB = asyncHandler(async (req, res) => {
    console.log("hi")
    const { title, body, photoEncode, phototype } = req.body;
    console.log(title)
    console.log(body)
    if (!photoEncode || !body || !title || photoEncode === "" || body === "" || title === "") {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    const post = new Post({
        Title: title,
        Body: body,
        PostedBy: req.user,
    });

    if (photoEncode !== null) {
        post.Photo = Buffer.from(photoEncode, "base64");
        post.PhotoType = phototype;
    }

    post.save()
        .then((result) => {
            res.json({ message: "Post created successfully" });
        })
        .catch((err) => {
            console.log(err);
        });
});


const showAllPosts=asyncHandler(async(req,res)=>{
    Post.find()
             .populate("PostedBy","_id Name")
             .sort("-createdAt")
             .then((data)=>{
                let posts=[];
                data.map((item)=>{
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
module.exports = { sendPosttoDB,showAllPosts };
