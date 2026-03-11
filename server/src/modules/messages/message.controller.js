import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { createMessage, getMessages } from "./message.service.js";
import { createMessageSchema } from "./message.validation.js";
import { ZodError } from "zod";

/* ===============================
   PUBLIC - POST MESSAGE
================================ */
export const postMessage = asyncHandler(async (req, res) => {
  const message = await createMessage(req.body);

  res.status(201).json(
    new ApiResponse({
      message: "Message received successfully",
      data: message,
    }),
  );
});

/* ===============================
   ADMIN - GET MESSAGES
================================ */
export const fetchMessages = asyncHandler(async (req, res) => {
  const messages = await getMessages();

  res.json(
    new ApiResponse({
      data: messages,
    }),
  );
});
