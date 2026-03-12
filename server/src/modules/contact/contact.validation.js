import { z } from "zod";

/* ================= PHONE ================= */

const phoneSchema = z.object({
  label: z
    .enum(["sales", "support", "office", "landline", "other"])
    .optional(),

  number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
});

/* ================= EMAIL ================= */

const emailSchema = z.object({
  label: z
    .enum(["general", "support", "sales", "hr", "other"])
    .optional(),

  email: z.string().email("Invalid email format"),
});

/* ================= ADDRESS ================= */

const addressSchema = z.object({
  line1: z.string().optional(),
  area: z.string().optional(),
  landmark: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),

  pincode: z
    .string()
    .regex(/^\d{6}$/, "Pincode must be 6 digits")
    .optional(),

  country: z.string().optional(),
});

/* ================= SOCIAL ================= */

const socialLinksSchema = z.object({
  linkedin: z.string().url().optional(),
  instagram: z.string().url().optional(),
  facebook: z.string().url().optional(),
  youtube: z.string().url().optional(),
  twitter: z.string().url().optional(),
  whatsapp: z.string().url().optional(),
});

/* ================= UPDATE CONTACT ================= */

export const updateContactSchema = z.object({
  body: z.object({
    phones: z.array(phoneSchema).optional(),

    emails: z.array(emailSchema).optional(),

    address: addressSchema.optional(),

    socialLinks: socialLinksSchema.optional(),

    mapsLink: z
      .string()
      .url("Invalid Google Maps link")
      .optional(),
  }),
});