const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/contact", contactController.submitContact);

router.get("/contacts", contactController.getAllContacts);

module.exports = router;
