const express = require("express");
const router = express.Router();

router.use("/", require("./profileRoutes"));
router.use("/", require("./testimonialRoutes"));
router.use("/", require("./jobRoutes"));
router.use("/", require("./applicationRoutes"));
router.use("/", require("./contactRoutes"));
module.exports = router;
