import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "./job.service.js";

/* -------------------- CREATE JOB -------------------- */
export const createJobController = async (req, res) => {
  try {
    const job = await createJob(req.body);

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------- GET ALL JOBS -------------------- */
export const getJobsController = async (req, res) => {
  try {
    const jobs = await getAllJobs();

    res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------- GET SINGLE JOB -------------------- */
export const getJobController = async (req, res) => {
  try {
    const job = await getJobById(req.params.id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------- UPDATE JOB -------------------- */
export const updateJobController = async (req, res) => {
  try {
    const job = await updateJob(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/* -------------------- DELETE JOB -------------------- */
export const deleteJobController = async (req, res) => {
  try {
    await deleteJob(req.params.id);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};