import { z } from "zod";

export const createTestimonialSchema = z.object({
  body: z.object({
    clientName: z.string().min(2, "Client name is required"),
    companyName: z.string().optional(),
    designation: z.string().optional(),
    review: z.string().min(10, "Review must be at least 10 characters"),
    rating: z.number().min(1).max(5).optional(),
  }),
});

export const updateTestimonialSchema = z.object({
  body: z.object({
    clientName: z.string().min(2).optional(),
    companyName: z.string().optional(),
    designation: z.string().optional(),
    review: z.string().min(10).optional(),
    rating: z.number().min(1).max(5).optional(),
    isActive: z.boolean().optional(),
  }),
});