import * as service from "./opportunity.service.js";
import {
  createOpportunitySchema,
  updateOpportunitySchema,
} from "./opportunity.validation.js";

export const create = async (req, res) => {
  try {
    const parsed = createOpportunitySchema.parse(req.body);
    const result = await service.createOpportunity(parsed);

    res.status(201).json({
      success: true,
      message: "Opportunity created successfully",
      data: result,
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await service.getAllOpportunities(req.query);
    res.json({ success: true, data: result });
  } catch (error) {
    handleError(res, error);
  }
};

export const getById = async (req, res) => {
  try {
    const result = await service.getOpportunityById(req.params.id);
    res.json({ success: true, data: result });
  } catch (error) {
    handleError(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const parsed = updateOpportunitySchema.parse(req.body);
    const result = await service.updateOpportunity(req.params.id, parsed);

    res.json({
      success: true,
      message: "Opportunity updated successfully",
      data: result,
    });
  } catch (error) {
    handleError(res, error);
  }
};

export const remove = async (req, res) => {
  try {
    await service.deleteOpportunity(req.params.id);
    res.json({ success: true, message: "Opportunity deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

export const getCurrentOpenings = async (req, res) => {
  try {
    const result = await service.getCurrentOpenings();
    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    handleError(res, error);
  }
};

const handleError = (res, error) => {
  if (error.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.issues.map((e) => ({
        field: e.path[0],
        message: e.message,
      })),
    });
  }

  res.status(400).json({
    success: false,
    message: error.message || "Something went wrong",
  });
};
