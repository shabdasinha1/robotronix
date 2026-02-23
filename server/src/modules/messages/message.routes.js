import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

import {
  postMessage,
  fetchMessages,
} from "./message.controller.js";

import { createMessageSchema } from "./message.validation.js";

const router = Router();

/* ===============================
   PUBLIC ROUTE
================================ */
router.post("/", validate(createMessageSchema), postMessage);

/* ===============================
   PROTECTED ADMIN ROUTE
================================ */
router.get("/",  fetchMessages);
// router.get("/", authMiddleware, fetchMessages);

export default router;
