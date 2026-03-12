import express from "express";
import * as contactController from "./contact.controller.js";
import validate from "../../middlewares/validate.middleware.js";
import { updateContactSchema } from "./contact.validation.js";

const router = express.Router();

/**
 * Get contact details
 */
router.get("/", contactController.getContact);

/**
 * Update contact details
 */
router.patch(
  "/",
  validate(updateContactSchema),
  contactController.updateContact,
);

export default router;
