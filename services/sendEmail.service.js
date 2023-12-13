const nodemailer = require("nodemailer");
require("dotenv").config();

const service = process.env.EMAIL_SERVICE;
const emailFrom = process.env.EMAIL_FROM;
const passEmail = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO;

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
<<<<<<< HEAD
      to: [emailTo],
      subject: "Notification - Task Entries Departures Vehicle",
=======
      to: emailTo,
      subject: "Notification - Task Entries Departures Vehicle ",
>>>>>>> 8e37ca821c72d54a1b7bc5aa1a0defb70e605af8
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
