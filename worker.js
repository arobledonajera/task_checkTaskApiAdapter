const { CronJob } = require("cron");
const {
  getLastDateLogRecordController,
} = require("./controller/lastDateLogRecord.controller");
const { CRONTIME_MAIN } = process.env;
const postgresDbHelper = require("./helpers/postgresDB.helper");
const sendEmail = require("./services/sendEmail.service");

let flag = true;
const startTask = new CronJob(CRONTIME_MAIN, async () => {
  try {
    const lastDateLogRecord = await getLastDateLogRecordController();
    if (lastDateLogRecord >= 5) {
      if (flag === true) {
        sendEmail(
          `1.- Api Adapter detenido ${new Date().toLocaleString("en-US")}`
        );
        flag = false;
      }
    } else {
      flag = true;
    }
    return;
  } catch (error) {}
});

const start = () => {
  postgresDbHelper.postgresSequelize
    .authenticate()
    .then(() => {
      console.log("Init Task");
      startTask.start();
    })
    .catch((err) => {
      sendEmail(`Error executing the task; ${err.message}`);
      throw err;
    });
};

start();
