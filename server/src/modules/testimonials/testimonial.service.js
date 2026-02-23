import Testimonial from "./testimonial.model.js";

// Create
export const createTestimonial = async (data) => {
  return await Testimonial.create(data);
};

// Get All (only active)
export const getAllTestimonials = async () => {
  return await Testimonial.find({ isActive: true })
    .sort({ createdAt: -1 });
};

// Get Single
export const getTestimonialById = async (id) => {
  return await Testimonial.findById(id);
};

// Update
export const updateTestimonial = async (id, data) => {
  return await Testimonial.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Soft Delete
export const deleteTestimonial = async (id) => {
  return await Testimonial.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};