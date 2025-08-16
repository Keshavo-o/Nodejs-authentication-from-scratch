//This is a default route for path /url* 
const express = require("express");
const{
    createurl,
    geturl,
    handlegeturlbyid,
    giveanalytics
} = require("../controllers/url_controller.js");
const router = express.Router();
router.route("/")//for getting all routes
.post(createurl)
.get(geturl);

router.route("/:url")
.get(handlegeturlbyid);

router.route("/analytics/:url")
.get(giveanalytics);

module.exports = router;