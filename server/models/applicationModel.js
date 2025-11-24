const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { type: String, required: true }, // Store file path or URL
    coverLetter: { type: String }, // Optional
  },
  { timestamps: true }
);

// 🔐 Add compound unique indexes to prevent duplicate applications
applicationSchema.index({ jobId: 1, email: 1 }, { unique: true });
applicationSchema.index({ jobId: 1, phone: 1 }, { unique: true });

module.exports = mongoose.model("Application", applicationSchema);
