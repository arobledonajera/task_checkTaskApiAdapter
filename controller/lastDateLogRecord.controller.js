const {
  getLastDateLogRecordService,
} = require("../services/lastDateLogRecord.services");
const moment = require("moment");

const getLastDateLogRecordController = async () => {
  try {
    let dateEntrie = "";
    let today = moment(new Date());
    const lastDateLogRecord = await getLastDateLogRecordService();
    dateEntrie = moment(
      lastDateLogRecord[0].check_task_apiadapter_sel.data[0].DateTime,
      "YYYY-MM-DD HH:mm:ss"
    );

    var subtraction = dateEntrie.diff(today, "minutes");
    return subtraction;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getLastDateLogRecordController,
};
