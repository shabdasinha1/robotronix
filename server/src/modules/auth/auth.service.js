import crypto from "crypto";
import Admin from "./auth.model.js";
import ApiError from "../../utils/ApiError.js";
import generateToken from "../../utils/generateToken.js";

/* ===============================
   CREATE 
================================ */

export const createAdmin = async ({ email, password }) => {
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    throw new ApiError(409, "Admin already exists");
  }

  const admin = await Admin.create({
    email,
    password,
  });

  return {
    id: admin._id,
    email: admin.email,
  };
};


/* ===============================
   LOGIN
================================ */
export const loginAdmin = async ({ email, password }) => {
  const admin = await Admin.findOne({ email }).select("+password");
  if (!admin) throw new ApiError(401, "Invalid credentials");

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  const token = generateToken({ id: admin._id, role: admin.role });

  return { token };
};

/* ===============================
   FORGOT PASSWORD
================================ */
export const forgotPassword = async (email) => {
  const admin = await Admin.findOne({ email });
  if (!admin) throw new ApiError(404, "Admin not found");

  const resetToken = crypto.randomBytes(32).toString("hex");

  admin.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  admin.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 min

  await admin.save({ validateBeforeSave: false });

  return resetToken;
};

/* ===============================
   RESET PASSWORD
================================ */
export const resetPassword = async (token, newPassword) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const admin = await Admin.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!admin) throw new ApiError(400, "Invalid or expired token");

  admin.password = newPassword;
  admin.resetPasswordToken = undefined;
  admin.resetPasswordExpire = undefined;

  await admin.save();

  return true;
};
