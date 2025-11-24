const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    id: { type: String, required: true }, // e.g., "React JS"
    title: { type: String, required: true }, // e.g., "Frontend Developer"
    experience: { type: String, required: true }, // e.g., "5+ Years"
    location: { type: String, required: true }, // e.g., "Indore"
    jobSummary: { type: String, required: true },

    keyResponsibilities: {
      type: [String],
      required: true,
    },

    requiredSkillsQualifications: {
      type: [String],
      required: true,
    },

    preferredQualifications: {
      type: [String],
      default: [],
    },

    jobType: { type: String, required: true }, // e.g., "Full-time / Contract"
    locationType: { type: String, required: true }, // e.g., "Remote / Onsite"
    salary: { type: String, required: true }, // e.g., "Competitive"
    isActive: {
      type: Boolean,
      default: true, // by default jobs are active
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
