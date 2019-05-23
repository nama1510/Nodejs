const http = require("http");

//Create Server
const server = http.createServer((req, res) => {
  console.log(req.url, req.nethod, req.headers);
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write('<html>');
  res.write('<head><title> My First Page </title></head>');
  res.write('<body><h1> Hello from my first NodeJS Server </h1></body>');
  res.write('</html>');
  res.end();
});

//Listen on port 3000
server.listen(3000);
