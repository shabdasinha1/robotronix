const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    message: { type: String, required: true },
    project: { type: String, default: null }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
