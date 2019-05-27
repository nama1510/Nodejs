const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First Middleware");
//   next();
// });
// app.use((req, res, next) => {
//     console.log("Second Middleware");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("Third Middleware");
//     res.send("<h1>Assignemnt solved</h1>");
// });

app.use("/users", (reg, res, next) => {
  res.send("<h1>This is the users page</h1>");
});
app.use("/", (reg, res, next) => {
  res.send("<h1>This is the home page</h1>");
});

app.listen(3000);
