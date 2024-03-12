const express=require('express');
const {registerUser}=require("../controllers/userControllers");
const {registerAdmin}=require("../controllers/adminControllers");

const router=express.Router();
const {authUserFunction}=require("../controllers/authUserControllers");
router.post("/authUser",authUserFunction);
router.post("/registerUser",registerUser);
router.post("/registerAdmin",registerAdmin);
module.exports = router;