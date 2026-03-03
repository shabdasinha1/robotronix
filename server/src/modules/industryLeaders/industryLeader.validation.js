import { z } from "zod";

/**
 * Create Industry Leader
 */
export const createIndustryLeaderSchema = z.object({
  leaderName: z
    .string()
    .min(2, "Leader name must be at least 2 characters")
    .trim(),

  isActive: z.string().optional(), // because multipart sends string
});
/**
 * Update Industry Leader
 */
export const updateIndustryLeaderSchema = z.object({
  body: z.object({
    leaderName: z.string().min(2).trim().optional(),
    isActive: z.union([z.boolean(), z.string()]).optional(), // optional
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
