const Application = require("../models/applicationModel");

exports.applyJob = async (req, res) => {
  try {
    const { jobId, name, email, phone, coverLetter } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    // 🔍 Check for duplicate application using email or phone for the same job
    const existingApplication = await Application.findOne({
      jobId,
      $or: [{ email }, { phone }],
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message:
          "You have already applied for this job using the same email or phone number.",
      });
    }

    // ✅ Create new application
    const application = await Application.create({
      jobId,
      name,
      email,
      phone,
      coverLetter,
      resume: req.file.filename,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to apply",
      error: error.message,
    });
  }
};
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate(
      "jobId",
      "title location"
    ); // optional populate
    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch applications",
      error: error.message,
    });
  }
};