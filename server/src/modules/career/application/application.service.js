import Application from "./application.model.js";

export const createApplicationService = async (data) => {
  return await Application.create(data);
};

export const getApplicationsService = async (query) => {
  const { category, status, page = 1, limit = 10 } = query;

  const filter = {};
  if (category) filter.category = category;
  if (status) filter.status = status;

  const skip = (page - 1) * limit;

  const [applications, total] = await Promise.all([
    Application.find(filter)
      .populate("jobId", "title type")
      .sort({ createdAt: -1 })
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
