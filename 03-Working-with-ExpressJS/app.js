const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs");
    next();
});

app.use("/add-product", (req, res, next) => {
  res.send("<h1>The Add Product page</h1>"); //send a response
});

app.use("/", (req, res, next) => {
  console.log("In another the middleware");
  res.send("<h1>Hello from express</h1>"); //send a response
});

//Create Server
app.listen(3000);
