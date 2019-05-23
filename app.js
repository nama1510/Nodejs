const http = require("http");

//Create Server
const server = http.createServer((req, res) => {
  console.log(req.url, req.nethod, req.headers);
  //process.exit();
});

//Listen on port 3000
server.listen(3000);
