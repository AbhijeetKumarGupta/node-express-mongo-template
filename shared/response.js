const { STATUS_CODES, STATUS_MESSAGES } = require("./constant");

const SuccessResponse = (req, res, data = null, message = STATUS_MESSAGES.SUCCESS) => {
    return res.status(STATUS_CODES.SUCCESS).json({
      status_code: STATUS_CODES.SUCCESS,
      success: true,
      message,
      data,
    });
  };
  
  const NotFoundResponse = (
    req,
    res,
    data = null,
    message = STATUS_MESSAGES.NOT_FOUND
  ) => {
    return res.status(STATUS_CODES.SUCCESS).json({
      status_code: STATUS_CODES.SUCCESS,
      success: true,
      message,
      data,
    });
  };
  
  module.exports = { Success: SuccessResponse, NotFound: NotFoundResponse };