import express from "express";
import * as techStackController from "./portfolio.techStack.controller.js";

const router = express.Router();

// Create Tech Stack
router.post("/", techStackController.createTechStack);

// Get Tech Stack
router.get("/", techStackController.getTechStack);

// Update Tech Stack
router.patch("/:id", techStackController.updateTechStack);

// Delete Tech Stack
router.delete("/:id", techStackController.deleteTechStack);

router.patch("/:id/restore", techStackController.restoreTechStack);

export default router;