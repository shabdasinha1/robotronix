import express from "express";
import { uploadResume } from "../../../middlewares/upload.middleware.js";
import {
  submitApplication,
  listApplications,
  updateApplicationStatus,
} from "./application.controller.js";
import authMiddleware from "../../../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * Public: Submit application
 */
router.post("/", uploadResume, submitApplication);

/**
 * Admin: Get applications
 */
router.get("/", authMiddleware, listApplications);
/* UPDATE STATUS */
router.patch("/:id/status", authMiddleware, updateApplicationStatus);

export default router;
