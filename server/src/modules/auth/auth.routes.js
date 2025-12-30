import { Router } from "express";
import {
  login,
  forgot,
  reset,
  registerAdmin,
  forgotPasswordOtp,
  resetPasswordOtp,
} from "./auth.controller.js";

import validate from "../../middlewares/validate.middleware.js";
import { createAdminSchema, forgotOtpSchema,
  resetOtpSchema, } from "./auth.validation.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = Router();

router.post("/register",authMiddleware, validate(createAdminSchema), registerAdmin);

router.post(
  "/forgot-password-otp",
  validate(forgotOtpSchema),
  forgotPasswordOtp
);

router.post(
  "/reset-password-otp",
  validate(resetOtpSchema),
  resetPasswordOtp
);

router.post("/login", login);
router.post("/forgot-password", forgot);
router.post("/reset-password/:token", reset);

export default router;
