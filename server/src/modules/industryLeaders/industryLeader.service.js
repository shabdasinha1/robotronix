import IndustryLeader from "./industryLeader.model.js";
import fs from "fs";

export const createLeader = async (data) => {
  return await IndustryLeader.create(data);
};

export const getAllLeaders = async () => {
  return await IndustryLeader.find().sort({ createdAt: -1 });
};

export const deleteLeader = async (id) => {
  const leader = await IndustryLeader.findById(id);
  if (!leader) {
    throw new Error("Industry Leader not found");
  }

  // Delete image file
  if (fs.existsSync(leader.image)) {
    fs.unlinkSync(leader.image);
  }

  await leader.deleteOne();
  return leader;
};
