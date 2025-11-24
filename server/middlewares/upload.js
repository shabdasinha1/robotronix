// middleware/upload.js
const multer = require("multer");
const path = require("path");

/**
 * Returns a multer instance with dynamic file type filtering.
 * All files will be stored in `uploads/` folder.
 *
 * @param {Array<string>} allowedTypes - e.g. ['.pdf'], ['.jpg', '.jpeg', '.png']
 */
const getUploader = (allowedTypes = []) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads"); // Always uploads/ folder
    },

    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  });

  const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.length === 0 || allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`Only ${allowedTypes.join(", ")} files are allowed`));
    }
  };

  return multer({ storage, fileFilter });
};

module.exports = getUploader;
