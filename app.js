const http = require("http");

// SIDE NOTE : (./ is a relative path and / is an absolute path)

const server = http.createServer((req, res) => {
  console.log(req, req.url, res.method, req.headers);

  res.setHeader("Content", "text/html");
  res.write("<h1>Hello from the server</h1>");
  res.end();
});

server.listen(3000);
