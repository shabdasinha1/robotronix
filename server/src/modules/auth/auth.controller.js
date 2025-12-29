import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import {
  loginAdmin,
  forgotPassword,
  resetPassword,
} from "./auth.service.js";
import { createAdmin } from "./auth.service.js";


export const registerAdmin = asyncHandler(async (req, res) => {
  const admin = await createAdmin(req.body);

  res.status(201).json(
    new ApiResponse({
      message: "Admin created successfully",
      data: admin,
    })
  );
});

export const login = asyncHandler(async (req, res) => {
  const data = await loginAdmin(req.body);
  res.json(new ApiResponse({ message: "Login successful", data }));
});

export const forgot = asyncHandler(async (req, res) => {
  const token = await forgotPassword(req.body.email);

  // Email sending later
  res.json(
    new ApiResponse({
      message: "Password reset link generated",
      data: { token },
    })
  );
});

export const reset = asyncHandler(async (req, res) => {
  await resetPassword(req.params.token, req.body.password);

  res.json(
    new ApiResponse({ message: "Password reset successful" })
  );
});
