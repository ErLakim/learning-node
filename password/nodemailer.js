const nodemailer= require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass : process.env.PASSWORD,
    },
  });
const sendMail= async({from,to,subject,html,attachments})=>{
const message=
        {
            from, 
            to, 
            subject, 
            text: "Hello World", 
            html,
            attachments,
    }
    const result = await transporter.sendMail(message);
return result.messageId;
};

module.exports={
sendMail
};