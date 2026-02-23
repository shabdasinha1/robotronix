import {api} from "./axios";

/* ===============================
   MESSAGES APIS
================================ */

const messagesApi = {
  /* ===============================
     PUBLIC: CREATE MESSAGE
     (Contact Form)
  =============================== */
  createMessage: async (payload) => {
    const res = await api.post("/messages", payload);
    return res.data;
  },

  /* ===============================
     ADMIN: GET ALL MESSAGES
     (JWT auto-attached)
  =============================== */
  getMessages: async () => {
    const res = await api.get("/messages");
    return res.data;
  },
};

export default messagesApi;
