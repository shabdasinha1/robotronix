import Message from "./message.model.js";

/* ===============================
   CREATE MESSAGE (PUBLIC)
================================ */
export const createMessage = async (payload) => {
  const message = await Message.create(payload);
  return message;
};

/* ===============================
   GET ALL MESSAGES (ADMIN)
================================ */
export const getMessages = async () => {
  return Message.find({ deletedAt: null }).sort({ createdAt: -1 });
};
