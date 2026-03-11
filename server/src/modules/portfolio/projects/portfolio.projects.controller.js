import * as portfolioService from "./portfolio.projects.service.js";

export const createProject = async (req, res) => {
  try {
    let project;

    if (Array.isArray(req.body)) {
      // Bulk insert
      project = await portfolioService.createManyProjects(req.body);
    } else {
      // Single insert
      project = await portfolioService.createProject(req.body);
    }

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate project detected",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    // console.log(req.query);
    const { category, isActive } = req.query;

    const projects = await portfolioService.getProjects({
      category,
      isActive,
    });

    res.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await portfolioService.getProjectById(req.params.id);

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await portfolioService.updateProject(
      req.params.id,
      req.body,
    );

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await portfolioService.deleteProject(req.params.id);

    res.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await portfolioService.getCategories();

    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const restoreProject = async (req, res) => {
  
  try {
    const project = await portfolioService.restoreProject(req.params.id);

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
