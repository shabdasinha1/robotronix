import mongoose from "mongoose";

/**
 * Phone schema for storing multiple phone numbers
 */
const phoneSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      enum: ["sales", "support", "office", "landline", "other"],
      default: "office",
    },
    number: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
  },
  { _id: false },
);

/**
 * Email schema for storing multiple email addresses
 */
const emailSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      enum: ["general", "support", "sales", "hr", "other"],
      default: "general",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
  },
  { _id: false },
);

/**
 * Address schema
 */
const addressSchema = new mongoose.Schema(
  {
    line1: String,
    area: String,
    landmark: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
  },
  { _id: false },
);

/**
 * Social media links schema
 */
const socialLinksSchema = new mongoose.Schema(
  {
    linkedin: String,
    instagram: String,
    facebook: String,
    youtube: String,
    twitter: String,
    whatsapp: String,
  },
  { _id: false },
);

/**
 * Location schema (for Google Maps)
 */

/**
 * Main Contact schema
 * This should ideally contain only ONE document
 */
const contactSchema = new mongoose.Schema(
  {
    phones: [phoneSchema],

    emails: [emailSchema],

    address: addressSchema,

    socialLinks: socialLinksSchema,

    mapsLink: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Contact", contactSchema);
