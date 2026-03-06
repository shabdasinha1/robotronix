import Application from "./application.model.js";

export const createApplicationService = async (data) => {
  return await Application.create(data);
};

export const getApplicationsService = async (query) => {
  const {
    category,
    status,
    search,
    city,
    from,
    to,
    page = 1,
    limit = 10,
    sortBy,
    order,
  } = query;

  /* SORTING */
  let sortQuery = { createdAt: -1 }; // default latest first

  if (sortBy) {
    sortQuery = {
      [sortBy]: order === "asc" ? 1 : -1,
    };
  }
  const filter = {};

  /* CATEGORY FILTER */
  if (category) {
    filter.category = category;
  }

  /* STATUS FILTER */
  if (status) {
    filter.status = status;
  }

  /* CITY FILTER */
  if (city) {
    filter.city = { $regex: city, $options: "i" };
  }

  /* SEARCH BY NAME OR EMAIL */
  if (search) {
    filter.$or = [
      { fullName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  /* DATE RANGE FILTER */
  if (from || to) {
    filter.createdAt = {};

    if (from) {
      filter.createdAt.$gte = new Date(from);
    }

    if (to) {
      filter.createdAt.$lte = new Date(to);
    }
  }

  const skip = (Number(page) - 1) * Number(limit);

  const [applications, total] = await Promise.all([
    Application.find(filter)
      .populate("jobId", "title type")
      .sort(sortQuery)
      .skip(skip)
      .limit(Number(limit))
      .lean(),

    Application.countDocuments(filter),
  ]);

  return {
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
    applications,
  };
};
export const updateApplicationStatusService = async (id, status) => {
  const application = await Application.findById(id);

  if (!application) {
    throw new Error("Application not found");
  }

  application.status = status;
  await application.save();

  return application;
};
