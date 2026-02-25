import { z } from "zod";

/* -------------------- CREATE JOB VALIDATION -------------------- */
export const createJobSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title is required"),
    experience: z.string().min(1, "Experience is required"),
    location: z.string().min(1, "Location is required"),
    employmentType: z.enum(["Full Time", "Part Time", "Contract", "Remote"]),
    description: z.string().min(10, "Description must be at least 10 characters"),
    isActive: z.boolean().optional(),
  }),
});

/* -------------------- UPDATE JOB VALIDATION -------------------- */
export const updateJobSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    experience: z.string().optional(),
    location: z.string().optional(),
    employmentType: z
      .enum(["Full Time", "Part Time", "Contract", "Remote"])
      .optional(),
    description: z.string().min(10).optional(),
    isActive: z.boolean().optional(),
  }),
});