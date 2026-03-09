import Portfolio from "./portfolio.model.js";

export const createProject = async (data) => {
  const slug = data.category.slug.toLowerCase();

  return Portfolio.create({
    ...data,
    category: {
      slug,
      label: data.category.label,
    },
  });
};

export const getProjects = async ({ category, isActive }) => {
  const filter = {};

  if (category) {
    filter["category.slug"] = category;
  }

  if (isActive !== undefined) {
    filter.isActive = isActive === "true";
  }

  return Portfolio.find(filter).sort({ createdAt: -1 });
};

export const getProjectById = async (id) => {
  return Portfolio.findOne({
    _id: id,
    isActive: true,
  });
};

export const updateProject = async (id, data) => {
  if (data?.category?.slug) {
    data.category.slug = data.category.slug.toLowerCase();
  }

  return Portfolio.findOneAndUpdate({ _id: id, isActive: true }, data, {
    new: true,
  });
};

/* SOFT DELETE */
export const deleteProject = async (id) => {
  return Portfolio.findByIdAndUpdate(id, { isActive: false }, { new: true });
};

/* GET CATEGORIES FROM ACTIVE PROJECTS */
export const getCategories = async () => {
  return Portfolio.aggregate([
    {
      $match: { isActive: true },
    },
    {
      $group: {
        _id: "$category.slug",
        label: { $first: "$category.label" },
      },
    },
    {
      $project: {
        _id: 0,
        slug: "$_id",
        label: 1,
      },
    },
    {
      $sort: { label: 1 },
    },
  ]);
};
