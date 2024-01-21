// const userRoles = ["admin", "vendor"];
// const allowedRoles = ["inventoryManager", "vendor"];
// const checkRole = (userRoles, allowedRoles) => {
//   return userRoles.some((role) => allowedRoles.includes(role));
// };
// const check = checkRole(userRoles, allowedRoles);
// console.log(check);

// const library = require("./library");
// const result = library.divide(10, 2);
// console.log(result);

// index.js

// Import your library
var MyDateTimeLibrary = require('./myDateTimeLibrary');

// Example usage
var currentDateTime = MyDateTimeLibrary.getCurrentDateTime();
console.log('Current Date and Time: ' + currentDateTime);

