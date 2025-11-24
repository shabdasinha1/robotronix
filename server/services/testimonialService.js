const Testimonial = require("../models/testimonialModel");

exports.getAllTestimonial = async () => {
  return await Testimonial.find();
};
exports.createTestimonial = async (data, file) => {
  const { name, designation, content } = data;

  // Only check required text fields
  if (!name || !designation || !content) {
    throw new Error("Name, designation and content are required.");
  }

  const newTestimonial = new Testimonial({
    name,
    designation,
    content,
    image: file ? file.filename : "user.png", // 👈 if no file → use default
  });

  return await newTestimonial.save();
};


// ✅ Delete testimonial by ID
exports.deleteTestimonial = async (id) => {
  const result = await Testimonial.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Testimonial not found or already deleted.");
  }
  return result;
};