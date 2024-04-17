const express = require("express");
const router = express.Router();
const {sendPosttoDB,showAllPosts}=require("../controllers/postsControllers");
const { setDefaultHighWaterMark } = require("nodemailer/lib/xoauth2");
router.post("/createPost",sendPosttoDB)
router.get("/showAllPosts",showAllPosts)
module.exports = router;
