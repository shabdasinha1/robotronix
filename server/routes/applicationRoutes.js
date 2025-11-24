const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const applicationController = require("../controllers/applicationController");

// router.post("/apply", upload.single("resume"), applicationController.applyJob);
// 📄 Resume upload: only PDFs
const uploadResume = upload([".pdf"]);
router.post(
  "/apply",
  uploadResume.single("resume"),
  applicationController.applyJob
);

router.get("/applications",applicationController.getAllApplications);
module.exports = router;
