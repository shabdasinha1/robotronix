import express from "express";
import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import messageRoutes from "../modules/messages/message.routes.js";
import testimonialRoutes from "../modules/testimonials/testimonial.routes.js";
import industryLeaderRoutes from "../modules/industryLeaders/industryLeader.routes.js";
// import jobRoutes from "../modules/career-copy/job/job.routes.js";
// import internshipRoutes from "../modules/career-copy/internship/internship.routes.js";
import application from "../modules/career/application/application.routes.js";
import opportunityRoutes from "../modules/career/opportunity/opportunity.routes.js";
const router = Router();

router.use("/auth", authRoutes);
router.use("/messages", messageRoutes);

/*=========================================================
            HOME (HERO) PAGE API 
========================================================= */
// ---------------------TESTIMONIALS------------------------
router.use("/testimonial", testimonialRoutes);
// ---------------------INDUSTRYLEADERS------------------------
router.use("/industry-leaders", industryLeaderRoutes);

/*=========================================================
CAREER PAGE API (JOB/INTERNSHIP)
========================================================= */

// ----------- JOB/INTERNSHIP OPENINGS--------------------
router.use("/opportunities", opportunityRoutes);

//  ---------------- APPLICATION FOR CURRENT OPENINGS--------------------
router.use("/application", application);
export default router;
