const port = 8001;
const http = require("http"); //object creation
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end((home.html));
  })
  .listen(port);
console.log(`Server running at http://127.0.0.1:${port}/`);