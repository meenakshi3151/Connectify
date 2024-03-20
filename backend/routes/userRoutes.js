const express=require('express');
const {registerUser}=require("../controllers/userControllers");
const {registerAdmin}=require("../controllers/adminControllers");
const {getAllAdmins}=require("../controllers/getAllUsersControllers");
const {getAllUsers}=require("../controllers/getAllUsersControllers");
const router=express.Router();
const {authUserFunction}=require("../controllers/authUserControllers");
router.post("/authUser",authUserFunction);
router.post("/registerUser",registerUser);
router.post("/registerAdmin",registerAdmin);
router.get("/registerUser",getAllUsers);    
router.get("/registerAdmin",getAllAdmins);                             
module.exports = router;

