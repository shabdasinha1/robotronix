const Application = require("../models/applicationModel");

exports.createApplication = async (data) => {
  return await Application.create(data);
};
