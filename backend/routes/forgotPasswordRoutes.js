const express = require("express");
const router = express.Router();
const { forgetPassword, resetPassword } = require("../controllers/forgottenPasswordControllers");
router.post("/forgetPassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);
module.exports = router;