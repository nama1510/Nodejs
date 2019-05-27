const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>"); //send a response
});

module.exports = router;
