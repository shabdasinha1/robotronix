import mongoose from "mongoose";

const industryLeaderSchema = new mongoose.Schema(
  {
    leaderName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, // prevents case-duplicate
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model("IndustryLeader", industryLeaderSchema);