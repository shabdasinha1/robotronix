const express = require("express");
const router = express.Router();
const {
  getAllJob,
  createJob,
  getJobById,
} = require("./../controllers/jobController");

router.get("/getAlljob", getAllJob);
router.post("/createJob", createJob);
// Get job by ID
router.get("/getJob/:id", getJobById);

module.exports = router;
