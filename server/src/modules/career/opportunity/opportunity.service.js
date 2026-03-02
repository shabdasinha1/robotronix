import Opportunity from "./opportunity.model.js";

export const createOpportunity = async (data) => {
  try {
    const opportunity = await Opportunity.create(data);
    return opportunity;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error(
        "An opportunity with this title already exists for this type.",
      );
    }
    throw error;
  }
};

export const getAllOpportunities = async (query) => {
  const filter = {};

  // ✅ Filter by type
  if (query.type) {
    filter.type = query.type;
  }

  // ✅ Filter by active status
  if (query.isActive !== undefined) {
    filter.isActive = query.isActive === "true";
  }

  return await Opportunity.find(filter).sort({ createdAt: -1 });
};

export const getOpportunityById = async (id) => {
  const opportunity = await Opportunity.findById(id);
  if (!opportunity) throw new Error("Opportunity not found");
  return opportunity;
};

export const updateOpportunity = async (id, data) => {
  const opportunity = await Opportunity.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!opportunity) throw new Error("Opportunity not found");
  return opportunity;
};

export const deleteOpportunity = async (id) => {
  const opportunity = await Opportunity.findByIdAndDelete(id);
  if (!opportunity) throw new Error("Opportunity not found");
  return opportunity;
};
export const getCurrentOpenings = async () => {
  return Opportunity.find({
    type: "job",
    isActive: true,
  }).sort({ createdAt: -1 });
};
