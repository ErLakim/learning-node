const string = "hello"
const { hashPass, comparePass } = require("./bcrypt.js");
const hashedPass = hashPass("string");
const result = comparePass("string", hashedPass);
console.log({ result });
