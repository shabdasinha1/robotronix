import express from "express";
import * as controller from "./opportunity.controller.js";
import authMiddleware from "../../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, controller.create);
router.get("/", controller.getAll);

// ✅ PUT THIS BEFORE :id
router.get("/current-openings", authMiddleware, controller.getCurrentOpenings);

router.get("/:id", authMiddleware, controller.getById);
router.patch("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.remove);

export default router;