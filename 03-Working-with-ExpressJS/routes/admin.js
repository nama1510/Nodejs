const path = require("path");
const express = require("express");
const router = express.Router(); //kinda like a mini express app

router.get("/add-product", (req, res, next) => {
  // __dirname: the directory in which the current file is located
  // ../: go up one level
  // views: views folder
  // add-product.html: the page we want to link
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
