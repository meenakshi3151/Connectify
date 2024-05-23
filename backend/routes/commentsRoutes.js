const express = require("express");
const router = express.Router();

const { createcomment,deletecomment, updateReaction ,getcomments ,updatecomment} = require("../controllers/commentController");

router.post("/createcomment", createcomment);
router.post("/deletecomment/:id" , deletecomment);
router.post("/updatereaction" , updateReaction); 
router.get("/comments/:postId" , getcomments);
router.put("/updatecomment/:id" , updatecomment);
module.exports = router;