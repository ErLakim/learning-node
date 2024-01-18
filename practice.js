//write a js function to add 2 number  and print
// let sum = (a, b) =>
//   a + b; implicit function
// console.log(sum(2,3));

// write a js function to that checks username and password.
// use bootstrap for login page design
// result alert you have logged in
// set username and password as your Email till friday.

//using http funcion
const port = 8000;
const http = require("http"); //object creation
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>MERN Class - Lakim Dahal</title>
      </head>
      <body>
      <h1>This is test body.</h1>
      </body>
    </html>`);
  })
  .listen(port);
console.log(`Server running at http://127.0.0.1:${port}/`);
