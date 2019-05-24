const http = require("http");
const routes = require("./routes");

//Create Server
const server = http.createServer((routes.handler));

//Listen on port 3000
server.listen(3000);
