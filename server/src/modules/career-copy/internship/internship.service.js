import Internship from "./internship.model.js";

/* CREATE */
export const createInternship = async (data) => {
  try {
    return await Internship.create(data);
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Internship already exists for this category");
    }
    throw error;
  }
};

/* GET ALL */
export const getAllInternships = async () => {
  return await Internship.find({ isActive: true }).sort({ createdAt: -1 });
};

/* GET SINGLE */
export const getInternshipById = async (id) => {
  const internship = await Internship.findById(id);

  if (!internship) {
    throw new Error("Internship not found");
  }

  return internship;
};

/* UPDATE */
export const updateInternship = async (id, data) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!internship) {
      throw new Error("Internship not found");
    }

    return internship;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate internship entry");
    }
    throw error;
  }
};

/* DELETE */
export const deleteInternship = async (id) => {
  const internship = await Internship.findByIdAndDelete(id);

  if (!internship) {
    throw new Error("Internship not found");
  }

  return internship;
};