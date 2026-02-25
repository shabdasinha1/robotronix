import { z } from "zod";

export const applicationSchemaZod = z
  .object({
    category: z.enum(["job", "internship"], {
      errorMap: () => ({ message: "Application category is required" }),
    }),

    jobId: z.string().optional(),
    // jobId: z.string().min(1, { message: "Job reference is required" }),

    // fullName: z
    //   .string()
    //   .min(3, { message: "Full name must be at least 3 characters" }),
    fullName: z
      .string({
        required_error: "Full name is required",
      })
      .min(3, { message: "Full name must be at least 3 characters" }),

    email: z.string().email({ message: "Please enter a valid email address" }),

    phone: z.string().regex(/^[0-9]{10}$/, {
      message: "Phone number must be between 10 digits",
    }),

    city: z
      .string()
      .min(2, { message: "City name must be at least 2 characters" }),

    experience: z.string().optional(),
    currentCompany: z.string().optional(),

    college: z.string().optional(),
    degree: z.string().optional(),
    year: z.string().optional(),

    duration: z.enum(["1 month", "3 months", "6 months", "1 year"]).optional(),

    coverLetter: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.category === "job" && !data.experience) {
      ctx.addIssue({
        path: ["experience"],
        message: "Experience is required for job application",
        code: z.ZodIssueCode.custom,
      });
    }

    if (data.category === "internship") {
      const internshipMessages = {
        college: "College name is required for internship",
        degree: "Degree is required for internship",
        year: "Current academic year is required",
        duration: "Internship duration is required",
      };

      Object.entries(internshipMessages).forEach(([field, msg]) => {
        if (!data[field]) {
          ctx.addIssue({
            path: [field],
            message: msg,
            code: z.ZodIssueCode.custom,
          });
        }
      });
    }
  });
