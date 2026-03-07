import express from "express";
import {
  uploadLeaderImage,
  getLeaders,
  removeLeader,
  updateLeader,
} from "./industryLeader.controller.js";
import { uploadIndustryLeader } from "../../middlewares/upload.middleware.js";
import validate  from "../../middlewares/validate.middleware.js";
import { createIndustryLeaderSchema, updateIndustryLeaderSchema } from "./industryLeader.validation.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

/* CREATE LEADER */
router.post(
  "/",
  uploadIndustryLeader, // multer first
  validate(createIndustryLeaderSchema), // zod validation
  authMiddleware,
  uploadLeaderImage,
);

/* GET ALL */
router.get("/", getLeaders);

/* DELETE */
router.delete("/:id", authMiddleware, removeLeader);

// UPDATE
router.patch(
  "/:id",
  uploadIndustryLeader, // allow optional image
  validate(updateIndustryLeaderSchema),
  authMiddleware,
  updateLeader
);

export default router;