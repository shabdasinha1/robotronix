import { z } from "zod";

/**
 * Create Industry Leader
 */
export const createIndustryLeaderSchema = z.object({
  body: z.object({
    leaderName: z
      .string()
      .min(2, "Leader name must be at least 2 characters")
      .trim(),

    isActive: z.boolean().optional(),
  }),
});
/**
 * Update Industry Leader
 */
export const updateIndustryLeaderSchema = z.object({
  body: z.object({
    image: z.string().min(1, "Image cannot be empty").trim().optional(),

    isActive: z.boolean().optional(),
  }),
});

/**
 * Toggle Status (Optional Separate Validation)
 */
export const toggleIndustryLeaderStatusSchema = z.object({
  body: z.object({
    isActive: z.boolean({
      required_error: "isActive is required",
    }),
  }),
});
