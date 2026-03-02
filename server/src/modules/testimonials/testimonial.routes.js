import express from "express";
import * as testimonialController from "./testimonial.controller.js";

const router = express.Router();

router.post("/", testimonialController.create);
router.get("/alltestimonials", testimonialController.getAll);
router.get("/:id", testimonialController.getById);
router.patch("/:id", testimonialController.update);
router.delete("/:id", testimonialController.remove);

export default router;
