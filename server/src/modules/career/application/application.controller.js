import { applicationSchemaZod } from "./application.validation.js";
import {
  createApplicationService,
  getApplicationsService,
} from "./application.service.js";
import { updateStatusSchemaZod } from "./application.validation.js";
import { updateApplicationStatusService } from "./application.service.js";

export const submitApplication = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    // Validate body
    const parsed = applicationSchemaZod.parse(req.body);

    const application = await createApplicationService({
      ...parsed,
      resume: req.file.path,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

export const listApplications = async (req, res, next) => {
  try {
    const data = await getApplicationsService(req.query);
    res.json({ success: true, ...data });
  } catch (error) {
    console.log("error : ",error);
    next(error);
  }
};
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate body
    const parsed = updateStatusSchemaZod.parse(req.body);

    const updatedApplication = await updateApplicationStatusService(
      id,
      parsed.status
    );

    res.json({
      success: true,
      message: "Application status updated successfully",
      data: updatedApplication,
    });
  } catch (error) {
    next(error);
  }
};