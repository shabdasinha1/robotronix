import { ZodError } from "zod";
import mongoose from "mongoose";
import multer from "multer";

export const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // ZOD Errors
  if (err instanceof ZodError) {
    statusCode = 400;
    message = err.issues.map((e) => e.message);
  }

  // Mongoose Validation
  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = Object.values(err.errors).map((val) => val.message);
  }

  // Duplicate Key
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `${field} already applied for this job`;
  }

  // Invalid ObjectId
  if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = "Invalid resource ID";
  }

  // Multer
  if (err instanceof multer.MulterError) {
    statusCode = 400;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message: Array.isArray(message) ? message : [message],
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
    }),
  });
};