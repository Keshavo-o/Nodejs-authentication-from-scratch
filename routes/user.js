const express = require("express");
const router = express.Router();
const { handleUserRequest,handleusersignup,handlecreateuser,handleloginuser,handleloginform } = require("../controllers/user_controller.js");

router
.route("/")
.get(handleUserRequest)
.post(handlecreateuser);

router
.route("/signup")
.get(handleusersignup);

router.route("/login")
.get(handleloginuser)
.post(handleloginform);

module.exports = router;