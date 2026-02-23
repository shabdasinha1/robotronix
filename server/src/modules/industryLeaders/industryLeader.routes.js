import express from "express";
import {
  uploadLeaderImage,
  getLeaders,
  removeLeader,
} from "./industryLeader.controller.js";
import { uploadIndustryLeader } from "../../middlewares/upload.middleware.js";
import validate  from "../../middlewares/validate.middleware.js";
import { createIndustryLeaderSchema } from "./industryLeader.validation.js";

const router = express.Router();

/* CREATE LEADER */
router.post(
  "/",
  uploadIndustryLeader, // multer first
  validate(createIndustryLeaderSchema), // zod validation
  uploadLeaderImage,
);

/* GET ALL */
router.get("/", getLeaders);

/* DELETE */
router.delete("/:id", removeLeader);

export default router;