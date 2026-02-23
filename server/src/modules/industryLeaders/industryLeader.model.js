import mongoose from "mongoose";

const industryLeaderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("IndustryLeader", industryLeaderSchema);
