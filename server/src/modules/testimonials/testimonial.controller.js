import * as testimonialService from "./testimonial.service.js";
import {testimonialService_dummy} from "./testimonial.data.js";

// Create
export const create = async (req, res) => {
  try {
    const testimonial = await testimonialService.createTestimonial(req.body);

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All
export const getAll = async (req, res) => {
  try {
    // const testimonials = await testimonialService.getAllTestimonials();
    const testimonials = await testimonialService_dummy.filter((item) => item.isActive);

    // console.log("Testimonial Data : ",testimonials);

    res.status(200).json({
      success: true,
      message: "Testimonials fetched successfully",
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get By Id
export const getById = async (req, res) => {
  try {
    const testimonial = await testimonialService.getTestimonialById(
      req.params.id,
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update
export const update = async (req, res) => {
  try {
    const testimonial = await testimonialService.updateTestimonial(
      req.params.id,
      req.body,
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Soft Delete
export const remove = async (req, res) => {
  try {
    const testimonial = await testimonialService.deleteTestimonial(
      req.params.id,
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
