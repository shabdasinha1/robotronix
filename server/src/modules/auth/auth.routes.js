import { Router } from "express";
import {
  login,
  forgot,
  reset,
  registerAdmin,
} from "./auth.controller.js";

import validate from "../../middlewares/validate.middleware.js";
import { createAdminSchema } from "./auth.validation.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = Router();

router.post("/register",authMiddleware, validate(createAdminSchema), registerAdmin);

router.post("/login", login);
router.post("/forgot-password", forgot);
router.post("/reset-password/:token", reset);

export default router;
