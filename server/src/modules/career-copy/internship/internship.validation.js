import { z } from "zod";

/* Common Fields */
const internshipBase = {
  category: z.string().trim().min(2, "Category is required"),
  title: z.string().trim().min(2, "Title is required"),
  duration: z.string().min(1, "Duration is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().min(2, "Location is required"),
  isActive: z.boolean().optional(),
};

/* CREATE */
export const createInternshipSchema = z.object({
  body: z.object({
    ...internshipBase,
  }),
});

/* UPDATE */
export const updateInternshipSchema = z.object({
  body: z.object({
    category: internshipBase.category.optional(),
    title: internshipBase.title.optional(),
    duration: internshipBase.duration.optional(),
    description: internshipBase.description.optional(),
    location: internshipBase.location.optional(),
    isActive: internshipBase.isActive.optional(),
  }),
});
