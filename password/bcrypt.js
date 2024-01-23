const bcrypt = require("bcryptjs");
const hashPass = (string) => {
  return bcrypt.hashSync(string, 10);
};
const comparePass = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};
module.exports = { hashPass, comparePass };

// const bcrypt = require("bcryptjs");
// const hasshedPass = () => {return bcrypt.hashSync(string,10)};
