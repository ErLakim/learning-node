//write a js function to add 2 number  and print
// let sum = (a, b) =>
//   a + b; implicit function
// console.log(sum(2,3));

// write a js function to that checks username and password.
// use bootstrap for login page design
// result alert you have logged in
// set username and password as your Email till friday.

//using http funcion
const http = require("http"); //object creation
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
  })
  .listen(8000);
console.log("Server Running at port 8000");
