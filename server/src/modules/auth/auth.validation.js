import { z } from "zod";

export const createAdminSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[0-9]/, "Must contain a number"),
});


export const forgotOtpSchema = z.object({
  email: z.string().email(),
});

export const resetOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
  newPassword: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[0-9]/),
});
