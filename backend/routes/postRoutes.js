const express = require("express");
const router = express.Router();
const {sendPosttoDB,showAllPosts,getUserPosts}=require("../controllers/postsControllers");
const { setDefaultHighWaterMark } = require("nodemailer/lib/xoauth2");
router.post("/createPost",sendPosttoDB)
router.get("/showAllPosts",showAllPosts)
router.get("/getUserPosts/:id",getUserPosts);
module.exports = router;
