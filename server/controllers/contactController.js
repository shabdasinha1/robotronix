const Contact = require("../models/contactModel");

// 📩 Save new contact message
exports.submitContact = async (req, res) => {
  try {
    let { fullName, email, contact, message, project } = req.body;

    // ✅ Normalize project value: if empty string, set it to null
    if (!project || project.trim() === "") {
      project = null;
    }

    const newContact = new Contact({
      fullName,
      email,
      contact,
      message,
      project,
    });

    await newContact.save();
    res
      .status(201)
      .json({ success: true, message: "Contact submitted successfully!" });
  } catch (error) {
    console.error("❌ Contact save error:", error); // 👈 helpful for debugging
    res
      .status(500)
      .json({ success: false, message: "Failed to submit contact", error });
  }
};

// 📋 Get all contact messages
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch contacts", error });
  }
};
