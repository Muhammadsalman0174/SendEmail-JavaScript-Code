const nodemailer = require('nodemailer');
const filepath = 'D:/Automation Projects/SalesIQ Cypress Project/mochawesome-report/AutomationReports/SalesIQAutomationReport_04142023_102047.json';

function sendMail(to,subject,text,message=null){
const transporter = nodemailer.createTransport({
 host: "smtp.mail.yahoo.com",
 port: 465,
 secure: true,
      auth: {
        user: process.env.USEREMAIL,
        pass: process.env.USERPASS,
      },

    });
    const mailOptions = {
      from: process.env.USEREMAIL,
      to: to,
      subject: subject,
      message:message,
      text: text,
       attachments: [
         {
          path: filepath,
         },
       ],
    };
     return new Promise((resolve, reject) => {
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error('Error sending email:', error);
                  reject(error);
                } else {
                  console.log('Email sent:', info.response);
                  resolve(info);
                }
              });
            });
          }
          //call function with optional parameters
   sendMail('salman.excelsious1@gmail.com','Sample Testing email','Sample Testing email');
