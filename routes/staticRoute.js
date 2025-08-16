const express = require("express");
const router = express.Router();
const url = require("../models/url.js");
router.get("/", async (req, res) => {
  // const all_urls = await url.find({});
  // console.log(all_urls);
  // res.render("home", {
  //   urls: all_urls//all_urls is an array of all URL documents from the database
  // })
  res.json({ message: "Static route" });
});
module.exports = router;