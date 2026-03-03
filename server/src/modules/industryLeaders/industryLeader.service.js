import IndustryLeader from "./industryLeader.model.js";
import fs from "fs";

export const createLeader = async (data) => {
  return await IndustryLeader.create(data);
};

export const getAllLeaders = async (filter = {}) => {
  return await IndustryLeader.find(filter).sort({ createdAt: -1 });
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
export const updateLeaderById = async (id, data) => {
  const leader = await IndustryLeader.findById(id);
  if (!leader) throw new Error("Industry Leader not found");

  // If new image uploaded → delete old image
  if (data.image && fs.existsSync(leader.image)) {
    fs.unlinkSync(leader.image);
  }

  Object.assign(leader, data);

  await leader.save();
  return leader;
};
