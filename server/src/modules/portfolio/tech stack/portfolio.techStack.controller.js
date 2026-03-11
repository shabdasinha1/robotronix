import * as techStackService from "./portfolio.techStack.service.js";
import { createTechStackSchema, techStackSchema } from "./portfolio.techStack.validation.js";

export const createTechStack = async (req, res) => {
  try {
    const validated = createTechStackSchema.parse(req.body);

    const result = await techStackService.createTechStack(validated);

    res.status(201).json({
      success: true,
      message: "Tech stack created successfully",
      data: result,
    });
  } catch (error) {
    if (error.name === "ZodError") {
        console.log(error);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getTechStack = async (req, res) => {
  try {
    const isActive =
      req.query.isActive === undefined ? true : req.query.isActive === "true";

    const result = await techStackService.getTechStack({ isActive });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tech stack",
    });
  }
};

export const updateTechStack = async (req, res) => {
  try {
    // const validated = createTechStackSchema.parse(req.body);
    const validated = techStackSchema.parse(req.body);

    const result = await techStackService.updateTechStack(
      req.params.id,
      validated,
    );

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTechStack = async (req, res) => {
  try {
    const result = await techStackService.softDeleteTechStack(req.params.id);

    res.json({
      success: true,
      message: "Tech stack deactivated",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const restoreTechStack = async (req, res) => {
  try {
    const result = await techStackService.restoreTechStack(req.params.id);

    res.json({
      success: true,
      message: "Tech stack restored",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
