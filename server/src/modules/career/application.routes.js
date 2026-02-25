import express from "express";
import { uploadResume } from "../../middlewares/upload.middleware.js";
import {
  submitApplication,
  listApplications,
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

export default router;