const Model = require("../models/model");

const getAll = async (req, callback) => {
    try {
        const Persons = await Model.find();
        return callback(null, Persons);
    } catch (err) {
        return callback(err);
    }
}

const getDetails = async (req, callback) => {
    try {
        const PersonDetails = await Model.findById(req?.params?.id);
        return callback(null, PersonDetails);
    } catch (err) {
        return callback(err);
    }
};

module.exports = {
    getDetails,
    getAll
};