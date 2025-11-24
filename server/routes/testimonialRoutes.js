const express = require("express");
const router = express.Router();
const { getTestimonial } = require("./../controllers/testimonialController");
const { postTestimonial } = require("./../controllers/testimonialController");
const { deleteTestimonial } = require("./../controllers/testimonialController");
const upload = require("../middlewares/upload")

router.get("/testimonials", getTestimonial);
// router.post("/post-testimonials", upload.single("image"), postTestimonial);

// 🖼️ Testimonial image upload: only images
const uploadImage = upload([".jpg", ".jpeg", ".png"]);
router.post("/post-testimonials", uploadImage.single("image"), postTestimonial);
router.delete("/delete-testimonials/:id", deleteTestimonial);

module.exports = router;
