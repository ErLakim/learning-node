// const userRoles = ["admin", "vendor"];
// const allowedRoles = ["inventoryManager", "vendor"];
// const checkRole = (userRoles, allowedRoles) => {
//   return userRoles.some((role) => allowedRoles.includes(role));
// };
// const check = checkRole(userRoles, allowedRoles);
// console.log(check);

const library = require("./library");
const result = library.divide(10, 2);
console.log(result);
