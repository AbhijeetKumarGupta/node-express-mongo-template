const { getDetailsService, getAllService } = require("../services");
const ConnectionError = require("../shared/connection-error");
const { STATUS_MESSAGES } = require("../shared/constant");
const { Success } = require("../shared/response");

const getAll = async (req, res) => {
  getAllService(req, (err, response) => {
    if(err) return ConnectionError(res, err);
    return Success(req, res, response, STATUS_MESSAGES.SUCCESS);
  })
}

const getDetails = async (req, res) => {
  getDetailsService(req, (err, response) => {
    if (err) return ConnectionError(res, err);
    return Success(req, res, response, STATUS_MESSAGES.SUCCESS);
  });
};

module.exports = {
    getDetails,
    getAll
};