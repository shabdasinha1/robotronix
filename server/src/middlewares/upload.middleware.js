import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure folder exists
const createFolderIfNotExists = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/industryLeaders";
    createFolderIfNotExists(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
};

export const uploadIndustryLeader = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter,
}).single("image");

/* =====================================================
   RESUME UPLOAD (Job / Internship)
===================================================== */

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/resumes";
    createFolderIfNotExists(uploadPath);
    cb(null, uploadPath);
  },

  /**
   * Rename file based on category
   * Example:
   * job-1700000000.pdf
   * internship-1700000000.pdf
   */
  filename: (req, file, cb) => {
    const category = req.body.category || "application";
    const ext = path.extname(file.originalname).toLowerCase();

    const uniqueName = `${category}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

const resumeFilter = (req, file, cb) => {
  console.log(file);
  const allowedExtensions = [".pdf", ".doc", ".docx"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(ext)) {
    return cb(new Error("Only PDF/DOC/DOCX resumes allowed"));
  }

  cb(null, true);
};
export const uploadResume = multer({
  storage: resumeStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: resumeFilter,
}).single("resume");
