import express from "express";
import {
  addInternship,
  getInternships,
  getInternshipDetail,
  updateInternshipController,
  removeInternship,
} from "./internship.controller.js";

import validate from "../../../middlewares/validate.middleware.js";
import {
  createInternshipSchema,
  updateInternshipSchema,
} from "./internship.validation.js";

const router = express.Router();

/* CREATE */
router.post("/",  addInternship);

/* GET ALL */
router.get("/", getInternships);

/* GET SINGLE */
router.get("/:id", getInternshipDetail);

/* UPDATE */
router.patch("/:id", validate(updateInternshipSchema), updateInternshipController);

/* DELETE */
router.delete("/:id", removeInternship);

export default router;