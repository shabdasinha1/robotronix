import { z } from "zod";

const baseSchema = z.object({
  type: z.enum(["job", "internship"], {
    errorMap: () => ({ message: "Type must be either 'job' or 'internship'" }),
  }),

  title: z.string().min(3, "Title must be at least 3 characters"),
  location: z.string().min(2, "Location is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),

  // ✅ ADD THESE
  category: z.string().optional(),
  duration: z.string().optional(),

  experience: z.string().optional(),
  employmentType: z
    .enum(["Full Time", "Part Time", "Contract", "Remote"])
    .optional(),

  isActive: z.boolean().optional(),
});
export const createOpportunitySchema = baseSchema.superRefine((data, ctx) => {
  if (data.type === "job") {
    if (!data.experience)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["experience"],
        message: "Experience is required for job",
      });

    if (!data.employmentType)
      ctx.addIssue({
        path: ["employmentType"],
        message: "Employment type is required for job",
      });
  }

  if (data.type === "internship") {
    if (!data.category)
      ctx.addIssue({
        path: ["category"],
        message: "Category is required for internship",
      });

    if (!data.duration)
      ctx.addIssue({
        path: ["duration"],
        message: "Duration is required for internship",
      });
  }
});

// export const updateOpportunitySchema = createOpportunitySchema.partial();
export const updateOpportunitySchema = baseSchema.partial();
