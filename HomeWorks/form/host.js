const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

http.createServer((request, response) => {
  if (request.url === '/' || request.url === '/form') {
    // Serve the form.html file
    const filePath = path.join(__dirname, 'form.html');
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content);
      }
    });
  } else {
    // Handle other routes if needed
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
