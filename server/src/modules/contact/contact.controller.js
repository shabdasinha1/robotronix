import * as contactService from "./contact.service.js";

/**
 * GET contact details
 */
export const getContact = async (req, res) => {
  try {
    const contact = await contactService.getContact();

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact details not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact details",
      error: error.message,
    });
  }
};

/**
 * UPDATE contact details
 */
export const updateContact = async (req, res) => {
  try {
    const updatedContact = await contactService.updateContact(req.body);

    res.status(200).json({
      success: true,
      message: "Contact details updated successfully",
      data: updatedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update contact details",
      error: error.message,
    });
  }
};