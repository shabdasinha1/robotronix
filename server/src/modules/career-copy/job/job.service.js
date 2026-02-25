import Job from "./job.model.js";

/* -------------------- CREATE JOB -------------------- */
export const createJob = async (data) => {
  return await Job.create(data);
};

/* -------------------- GET ALL ACTIVE JOBS -------------------- */
export const getAllJobs = async () => {
  return await Job.find({ isActive: true }).sort({ createdAt: -1 });
};

/* -------------------- GET SINGLE JOB -------------------- */
export const getJobById = async (id) => {
  const job = await Job.findById(id);
  if (!job) throw new Error("Job not found");
  return job;
};

/* -------------------- UPDATE JOB -------------------- */
export const updateJob = async (id, data) => {
  const job = await Job.findByIdAndUpdate(id, data, { new: true });
  if (!job) throw new Error("Job not found");
  return job;
};

/* -------------------- DELETE JOB -------------------- */
export const deleteJob = async (id) => {
  const job = await Job.findByIdAndDelete(id);
  if (!job) throw new Error("Job not found");
  return job;
};