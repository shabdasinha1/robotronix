const express = require("express");
const router = express.Router();
const {
    updateProfileInfo,
    getProfileInfo
} = require("./../controllers/profileController");
const authenticateToken = require("../middlewares/authMiddleware");

router.put("/profile-info", authenticateToken, updateProfileInfo);
router.get("/profile-info", getProfileInfo);

module.exports = router;
