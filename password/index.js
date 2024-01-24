// const string = "hello"
// const { hashPass, comparePass } = require("./bcrypt.js");
// const hashedPass = hashPass("string");
// const result = comparePass("string", hashedPass);
// console.log({ result });
const dotenv = require("dotenv").config();

const mailer = require("./nodemailer");
const message ={
    from: '"Lakim Dahal👻" <lakimdahal1@gmail.com>', 
    to: "dwiwediukmsag@gmail.com,er.ajeebrimal@gmail.com", 
    subject: "Namaste ✔", 
    html: "Hello. Lets start studying More",
    attachments: 
       [ {    filename: 'link to youtube',
        path: "https://www.youtube.com/"
        }], 
};
const mailFunction = async (message) => {
  const result = await mailer.sendMail(message);

  console.log(result);
};
mailFunction(message);
