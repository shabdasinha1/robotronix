const jobService = require("../services/jobService");

exports.getAllJob = async (req, res) => {
  try {
    const jobs = await jobService.getAllJob();

    res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      total: jobs.length,
      data: jobs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: err.message,
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = await jobService.createJob(req.body);
    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create job",
      error: err.message,
    });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Job fetched successfully",
      data: job,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Job not found",
      error: err.message,
    });
  }
};