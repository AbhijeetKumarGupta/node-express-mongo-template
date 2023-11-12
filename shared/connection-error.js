const { STATUS_MESSAGES, STATUS_CODES } = require("./constant");

const ConnectionError = (res, err) => {
  const response = {
    status_code: STATUS_CODES.ERROR,
    success: false,
    message:
      err.message.includes("select") ||
      err.message.includes("update") ||
      err.message.includes("insert")
        ? STATUS_MESSAGES.ERROR
        : err.message,
    data: null,
  };
  return res.status(STATUS_CODES.ERROR).send(response);
};

module.exports = ConnectionError;