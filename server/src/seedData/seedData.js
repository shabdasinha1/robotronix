import mongoose from "mongoose";
import dotenv from "dotenv";
import Testimonial from "../modules/testimonials/testimonial.model.js";
import { testimonialService_dummy } from "../modules/testimonials/testimonial.data.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // Optional: clear old data
    // await Testimonial.deleteMany();

    // Insert new data
    await Testimonial.insertMany(testimonialService_dummy);

    console.log("Testimonials Seeded Successfully ✅");

    process.exit();
  } catch (error) {
    console.error("Seeding Failed ❌", error);
    process.exit(1);
  }
};

seedData();