const Job = require("../models/jobModel");

// Get all jobs
exports.getAllJob = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw new Error("Failed to fetch job data: " + error.message);
  }
};
// create Job
exports.createJob = async (jobData) => {
  try {
    const newJob = await Job.create(jobData);
    return newJob;
  } catch (error) {
    throw new Error("Failed to create job: " + error.message);
  }
};


exports.getJobById = async (id) => {
  try {
    const job = await Job.findById(id);
    if (!job) {
      throw new Error("Job not found");
    }
    return job;
  } catch (err) {
    throw new Error("Error fetching job: " + err.message);
  }
};