import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["job", "internship"],
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    // Internship fields
    category: {
      type: String,
      trim: true,
    },

    duration: {
      type: String,
      trim: true,
    },

    // Job fields
    experience: {
      type: String,
      trim: true,
    },

    employmentType: {
      type: String,
      enum: ["Full Time", "Part Time", "Contract", "Remote"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Unique per type + title
opportunitySchema.index({ type: 1, title: 1 }, { unique: true });

export default mongoose.model("Opportunity", opportunitySchema);