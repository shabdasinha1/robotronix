import express from "express";
import {
  createJobController,
  getJobsController,
  getJobController,
  updateJobController,
  deleteJobController,
} from "./job.controller.js";

import validate from "../../../middlewares/validate.middleware.js";
import { createJobSchema, updateJobSchema } from "./job.validation.js";

const router = express.Router();

/* CREATE */
router.post("/", validate(createJobSchema), createJobController);

/* GET ALL */
router.get("/", getJobsController);

/* GET SINGLE */
router.get("/:id", getJobController);

/* UPDATE */
router.patch("/:id", validate(updateJobSchema), updateJobController);

/* DELETE */
router.delete("/:id", deleteJobController);

export default router;
