const {
  getLastDateLogRecordService,
} = require("../services/lastDateLogRecord.services");
const moment = require("moment");

const getLastDateLogRecordController = async () => {
  try {
    let dateLogRecord = "";
    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    //var local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');

    let today = moment(new Date());
    const lastDateLogRecord = await getLastDateLogRecordService();
    dateLogRecord = moment(
      lastDateLogRecord[0].check_task_apiadapter_sel.data[0].DateTime,
      "YYYY-MM-DD HH:mm:ss"
    );

    var subtraction = dateLogRecord.diff(date, "minutes");
    
    return subtraction * -1;
  } catch (err) {
    console.log("Error");
    throw err;
  }
};

module.exports = {
  getLastDateLogRecordController,
};
