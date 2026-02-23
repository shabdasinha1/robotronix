import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import messageRoutes from "../modules/messages/message.routes.js";
import testimonialRoutes from "../modules/testimonials/testimonial.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/messages", messageRoutes);

router.use("/testimonial", testimonialRoutes)

export default router;
