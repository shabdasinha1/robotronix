import {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} from "./internship.service.js";

/* CREATE */
export const addInternship = async (req, res) => {
  try {
    const internship = await createInternship(req.body);

    res.status(201).json({
      success: true,
      message: "Internship created successfully",
      data: internship,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* GET ALL */
export const getInternships = async (req, res) => {
  try {
    const internships = await getAllInternships();

    res.status(200).json({
      success: true,
      data: internships,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* GET SINGLE */
export const getInternshipDetail = async (req, res) => {
  try {
    const internship = await getInternshipById(req.params.id);

    res.status(200).json({
      success: true,
      data: internship,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/* UPDATE */
export const updateInternshipController = async (req, res) => {
  try {
    const internship = await updateInternship(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Internship updated successfully",
      data: internship,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* DELETE */
export const removeInternship = async (req, res) => {
  try {
    await deleteInternship(req.params.id);

    res.status(200).json({
      success: true,
      message: "Internship deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};