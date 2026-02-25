import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["job", "internship"],
      required: [true, "Application category is required"],
      index: true,
    },

    jobId: {
      type: String,
      ref: "Career",
      required: false, // ✅ fully optional now
      index: true,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters"],
    },

    email: {
      type: String,
      required: [true, "Email address is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      index: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone number must be between 10 digits"],
    },

    city: {
      type: String,
      required: [true, "City name is required"],
      trim: true,
      minlength: [2, "City name must be at least 2 characters"],
    },

    experience: {
      type: String,
      required: function () {
        return this.category === "job";
      },
    },

    currentCompany: {
      type: String,
      trim: true,
    },

    college: {
      type: String,
      required: function () {
        return this.category === "internship";
      },
      trim: true,
    },

    degree: {
      type: String,
      trim: true,
      required: function () {
        return this.category === "internship";
      },
    },

    year: {
      type: String,
      trim: true,
      required: function () {
        return this.category === "internship";
      },
    },
    duration: {
      type: String,
      enum: ["1 month", "3 months", "6 months", "1 year"],
      required: function () {
        return this.category === "internship";
      },
    },

    coverLetter: {
      type: String,
      trim: true,
    },

    resume: {
      type: String,
      required: [true, "Resume file is required"],
    },

    status: {
      type: String,
      enum: ["pending", "reviewed", "shortlisted", "rejected"],
      default: "pending",
      index: true,
    },
  },
  { timestamps: true },
);

// Performance Indexes
applicationSchema.index({ category: 1, status: 1 });
applicationSchema.index({ email: 1, jobId: 1 }, { unique: true });

export default mongoose.model("Application", applicationSchema);
