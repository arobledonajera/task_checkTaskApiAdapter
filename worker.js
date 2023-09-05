const { CronJob } = require("cron");
const {
  getLastDateLogRecordController,
} = require("./controller/lastDateLogRecord.controller");
const { CRONTIME_MAIN } = process.env;
const postgresDbHelper = require("./helpers/postgresDb.helper");
const sendEmail = require("./services/sendEmail.service");

const startTask = new CronJob(CRONTIME_MAIN, async () => {
  try {
    const lastDateLogRecord = await getLastDateLogRecordController();
    if (lastDateLogRecord >= 5) {
      sendEmail(
        `1.- Api Adapter detenido ${new Date().toLocaleString("en-US")}`
      );
    }
    return;
  } catch (error) {}
});

const start = () => {
  postgresDbHelper.postgresSequelize
    .authenticate()
    .then(() => {
      startTask.start();
    })
    .catch((err) => {
      sendEmail(`Error executing the task; ${err.message}`);
      throw err;
    });
};

start();
