import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      slug: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      label: {
        type: String,
        required: true,
        trim: true,
      },
    },

    industry: {
      type: String,
      required: true,
    },

    heading: {
      type: String,
      default: "",
    },

    tech: [
      {
        type: String,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true },
);
portfolioSchema.index({ "category.slug": 1, isActive: 1 });

// prevent duplicates
portfolioSchema.index({ title: 1, "category.slug": 1 }, { unique: true });

export default mongoose.model("PortfolioProject", portfolioSchema);
