const express=require('express')

const Comment=require("../schemas/commentModel")
const Post=require("../schemas/postsModel")

//CREATE
const createcomment = async (req, res) => {
    const { comment, author, postId, userId } = req.body;
  
    try {
      const newComment = new Comment({
        comment,
        author,
        postId,
        userId,
      });
  
      const savedComment = await newComment.save();
  
      // Add the comment to the post's Comments array
      await Post.findByIdAndUpdate(postId, { $push: { Comments: savedComment } });
  
      res.status(200).json(savedComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add comment" });
    }
  };
  
 
  
  

  

// UPDATE
const updatecomment = (async (req,res)=>{
    try{
        
        const updatedComment=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
const deletecomment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        
        if (!deletedComment) {
            return res.status(404).json("Comment not found!");
        }
        
        res.status(200).json("Comment has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
};






//GET POST COMMENTS
const getcomments =async(req,res) =>{
       
        try{
            const postId = req.params.id;
            const comments = await Comment.find({postId});
            res.status(200).json(comments);
        } catch(error){
             res.status(500).json({message: "Failed to get comments" ,error:error});
        }
}


const updateReaction = (async (req,res)=>{
    const { postId, userId, reaction } = req.body;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
    
        if (!post.reactions) {
            post.reactions = new Map();
        }


        for (let [key, users] of post.reactions.entries()) {
            post.reactions.set(key, users.filter(id => id !== userId));
        }

        // Add user to the new reaction
        if (!post.reactions.has(reaction)) {
            post.reactions.set(reaction, []);
        }
        post.reactions.get(reaction).push(userId);

        await post.save();

        res.status(200).json({ message: "Reaction updated successfully", post });

       
       
    }  catch (error) {
        console.error("Error updating reaction:", error);
        res.status(500).json({ message: "Server error", error });
    }
});


module.exports = { createcomment,deletecomment, updateReaction ,getcomments ,updatecomment};