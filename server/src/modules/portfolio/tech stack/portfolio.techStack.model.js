import mongoose from "mongoose";

const techItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const techStackSchema = new mongoose.Schema(
  {
    group: {
      type: String,
      required: true,
      trim: true,
    },

    items: {
      type: [techItemSchema],
      required: true,
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "Tech stack items cannot be empty",
      },
    },

    order: {
      type: Number,
      
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PortfolioTechStack", techStackSchema);