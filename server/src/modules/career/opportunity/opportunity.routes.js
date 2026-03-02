import express from "express";
import * as controller from "./opportunity.controller.js";

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.getAll);

// ✅ PUT THIS BEFORE :id
router.get("/current-openings", controller.getCurrentOpenings);

router.get("/:id", controller.getById);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;