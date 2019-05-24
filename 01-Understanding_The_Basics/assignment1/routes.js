const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My Firtst Assignment</title></head>");
    res.write(
      '<body><h1>Hello from my NodeJS Assignment</h1><form action="/create-user" method="POST"><input type="text" name="createdUser"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> List of Users </title></head>");
    res.write(
      "<body><h1><ul><li> User 1 </li><li> User 2 </li><li> User 3 </li></ul></h1></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    //loading chunks into the body array.
    req.on("data", chunk => {
      body.push(chunk);
    });
    //Once we finish loading all our chunks we parse the data.
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const createdUser = parsedBody.split("=")[1];
      console.log(createdUser);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = {
  handler: requestHandler
};
