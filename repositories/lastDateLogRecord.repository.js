const { executePostgresQuery } = require("../utils/queryGenerator");

const getLastDateLogRecordRepository = async () => {
  try {
    const query = `select check_task_apiadapter_sel();`;
    const result = await executePostgresQuery(query, {}, false);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getLastDateLogRecordRepository,
};
