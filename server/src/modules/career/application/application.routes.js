import express from "express";
import { uploadResume } from "../../../middlewares/upload.middleware.js";
import {
  submitApplication,
  listApplications,
  updateApplicationStatus,
} from "./application.controller.js";

const router = express.Router();

/**
 * Public: Submit application
 */
router.post("/", uploadResume, submitApplication);

/**
 * Admin: Get applications
 */
router.get("/", listApplications);
/* UPDATE STATUS */
router.patch("/:id/status", updateApplicationStatus);

export default router;
