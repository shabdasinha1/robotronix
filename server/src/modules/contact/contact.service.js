import Contact from "./contact.model.js";

/**
 * Fetch contact settings
 */
export const getContact = async () => {
  const contact = await Contact.findOne();

  return contact;
};

/**
 * Update or create contact settings
 */
export const updateContact = async (payload) => {
  let contact = await Contact.findOne();

  /**
   * If document doesn't exist create one
   */
  if (!contact) {
    contact = await Contact.create(payload);
    return contact;
  }

  /**
   * Update existing document
   */
  Object.assign(contact, payload);

  await contact.save();

  return contact;
};