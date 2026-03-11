import TechStack from "./portfolio.techStack.model.js";

export const createTechStack = async (data) => {
  /* ================= BULK INSERT ================= */

  if (Array.isArray(data)) {
    const last = await TechStack.findOne().sort({ order: -1 }).select("order");

    let nextOrder = last ? last.order + 1 : 1;

    data = data.map((item) => ({
      ...item,
      order: item.order ?? nextOrder++,
    }));

    return await TechStack.insertMany(data);
  }

  /* ================= SINGLE INSERT ================= */

  if (!data.order) {
    const last = await TechStack.findOne().sort({ order: -1 }).select("order");

    data.order = last ? last.order + 1 : 1;
  }

  const techStack = new TechStack(data);

  return await techStack.save();
};

export const getTechStack = async (filter) => {
  return await TechStack.find(filter).sort({ order: 1 });
};

export const updateTechStack = async (id, data) => {
  const updated = await TechStack.findByIdAndUpdate(
    id,
    {
      $set: {
        group: data.group,
        items: data.items,
      },
    },
    { new: true },
  );

  return updated;
};

export const softDeleteTechStack = async (id) => {
  return await TechStack.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true },
  );
};

export const restoreTechStack = async (id) => {
  return await TechStack.findByIdAndUpdate(
    id,
    { isActive: true },
    { new: true },
  );
};
