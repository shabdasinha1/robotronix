import express from "express";
import * as portfolioController from "./portfolio.projects.controller.js";

const router = express.Router();

router.post("/", portfolioController.createProject);

router.get("/", portfolioController.getProjects);

router.get("/categories", portfolioController.getCategories);

router.get("/:id", portfolioController.getProjectById);

router.patch("/:id", portfolioController.updateProject);

router.delete("/:id", portfolioController.deleteProject);

router.patch("/:id/restore", portfolioController.restoreProject);

export default router;
