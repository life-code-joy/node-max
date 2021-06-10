const http = require("http");

// SIDE NOTE : (./ is a relative path and / is an absolute path)

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
