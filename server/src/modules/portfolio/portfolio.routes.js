import express from "express";
import * as portfolioController from "./portfolio.controller.js";

const router = express.Router();

router.post("/projects", portfolioController.createProject);

router.get("/projects", portfolioController.getProjects);

router.get("/projects/:id", portfolioController.getProjectById);

router.patch("/projects/:id", portfolioController.updateProject);

router.delete("/projects/:id", portfolioController.deleteProject);

router.get("/categories", portfolioController.getCategories);

export default router;