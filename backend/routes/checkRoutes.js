const {checkAdmin} = require('../controllers/checkControllers');
const express=require('express');
const router=express.Router();
router.post("/checkAdmin",checkAdmin);
module.exports = router;