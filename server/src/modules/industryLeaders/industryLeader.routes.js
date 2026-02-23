import express from "express";
import {
  uploadLeaderImage,
  getLeaders,
  removeLeader,
} from "./industryLeader.controller.js";
import { uploadIndustryLeader } from "../../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/", uploadIndustryLeader, uploadLeaderImage);
router.get("/", getLeaders);
router.delete("/:id", removeLeader);

export default router;