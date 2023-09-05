const {
    getLastDateLogRecordRepository
  } = require("../repositories/lastDateLogRecord.repository");

  const getLastDateLogRecordService = async () => {
    try {
        const resp = await getLastDateLogRecordRepository();
        return resp;
    } catch (error) {
        throw error;
    }
}

module.exports = {
  getLastDateLogRecordService
};