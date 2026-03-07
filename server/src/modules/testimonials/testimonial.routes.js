import express from "express";
import * as testimonialController from "./testimonial.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, testimonialController.create);
router.get("/alltestimonials", testimonialController.getAll);
router.get("/:id", authMiddleware, testimonialController.getById);
router.patch("/:id", authMiddleware, testimonialController.update);
router.delete("/:id", authMiddleware, testimonialController.remove);

export default router;
