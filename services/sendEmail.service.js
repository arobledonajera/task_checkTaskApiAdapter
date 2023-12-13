const nodemailer = require("nodemailer");
require("dotenv").config();

const service = process.env.EMAIL_SERVICE;
const emailFrom = process.env.EMAIL_FROM;
const passEmail = process.env.EMAIL_PASS;
const emailTo1 = process.env.EMAIL_TO1;
const emailTo2 = process.env.EMAIL_TO2;

const transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: emailFrom,
    pass: passEmail,
  },
});

module.exports = async function createEmail(data) {
  try {
    const mailOptions = {
      from: emailFrom,
      to: [emailTo1, emailTo2],
      subject: "Notification - Task Entries Departures Vehicle ",
      text: data,
    };

    let today = await transporter.sendMail(mailOptions);
    if (today) {
      console.log("Email sent!");
    }
  } catch (error) {
    throw error;
  }
};
