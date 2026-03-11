import { z } from "zod";

export const createMessageSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),

  phone: z.string().optional(),

  message: z
    .string({ required_error: "Message is required" })
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});
