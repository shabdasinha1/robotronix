import { z } from "zod";

export const techItemSchema = z.object({
  name: z
    .string({
      required_error: "Tech stack item is required",
    })
    .trim()
    .min(1, "Tech stack item cannot be empty"),
});

export const techStackSchema = z.object({
  group: z
    .string({
      required_error: "Group name is required",
    })
    .trim()
    .min(1, "Group name cannot be empty"),

  order: z.number().int().min(1).optional(),

  items: z
    .array(techItemSchema)
    .min(1, "At least one tech stack item required"),
});

/*
Supports:
1️⃣ single object
2️⃣ array of objects
*/
export const createTechStackSchema = z.union([
  techStackSchema,
  z.array(techStackSchema),
]);
