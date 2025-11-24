// const { getAllTestimonial } = require("./../services/testimonialService");
const testimonialService = require("../services/testimonialService");

const getTestimonial = async (req, res) => {
  try {
    const testimonials = await testimonialService.getAllTestimonial();

    if (!testimonials || testimonials.length === 0) {
      return res.status(404).json({ message: "No testimonials found." });
    }

    return res.status(200).json(testimonials);
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error.message);
    return res
      .status(500)
      .json({ message: "Server error while fetching testimonials." });
  }
};

const postTestimonial = async (req, res) => {
  try {
    const newTestimonial = await testimonialService.createTestimonial(
      req.body,
      req.file
    );

    res.status(201).json(newTestimonial);
  } catch (err) {
    console.error("❌ Error while creating testimonial:", err.message);
    res.status(500).json({ error: "Failed to create testimonial" });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const deleted = await testimonialService.deleteTestimonial(req.params.id);
    res.status(200).json({ message: "Testimonial deleted", deleted });
  } catch (err) {
    console.error("Error deleting testimonial:", err.message);
    res.status(404).json({ error: err.message });
  }
};

module.exports = { getTestimonial, postTestimonial, deleteTestimonial };
