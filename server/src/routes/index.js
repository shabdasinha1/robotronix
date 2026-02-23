import express from "express";
import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import messageRoutes from "../modules/messages/message.routes.js";
import testimonialRoutes from "../modules/testimonials/testimonial.routes.js";
import industryLeaderRoutes from "../modules/industryLeaders/industryLeader.routes.js";
import jobRoutes from "../modules/career/job/job.routes.js";
const router = Router();


router.use("/industry-leaders", industryLeaderRoutes);

router.use("/auth", authRoutes);
router.use("/messages", messageRoutes);

router.use("/testimonial", testimonialRoutes)

router.use("/job", jobRoutes)

export default router;
