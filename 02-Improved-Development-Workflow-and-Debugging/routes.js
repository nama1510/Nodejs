const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send message</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    //loading chunks into the body array.
    req.on("data", chunk => {
      body.push(chunk);
    });
    //Once we finish loading all our chunks we parse the data.
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); //We write the data into the file
    });
  }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>My Firtst Page</title></head>");
  // res.write("<body><h1>Hello from my NodeJS server</h1></body>");
  // res.write("</html>");
};

module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text"
};

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';
