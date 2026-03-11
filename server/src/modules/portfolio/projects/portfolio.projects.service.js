import Portfolio from "./portfolio.projects.model.js";

export const createProject = async (data) => {
  const slug = data.category.slug.toLowerCase();

  const exists = await Portfolio.findOne({
    title: data.title,
    "category.slug": slug,
  });

  if (exists) {
    throw new Error("Project already exists in this category");
  }

  return Portfolio.create({
    ...data,
    category: {
      slug,
      label: data.category.label,
    },
  });
};
export const createManyProjects = async (projects) => {
  const formattedProjects = projects.map((data) => ({
    ...data,
    category: {
      slug: data.category.slug.toLowerCase(),
      label: data.category.label,
    },
  }));

  return Portfolio.insertMany(formattedProjects, {
    ordered: false,
  });
};
export const getProjects = async ({ category, isActive }) => {
  const filter = {};

  if (category) {
    filter["category.slug"] = category;
  }

  // isActive logic
  if (isActive !== undefined) {
    filter.isActive = isActive === "true";
  } else {
    filter.isActive = true; // default for public portfolio
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
export const restoreProject = async (id) => {
  return Portfolio.findByIdAndUpdate(id, { isActive: true }, { new: true });
};
