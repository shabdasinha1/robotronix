import api from "./axios";

/* ===============================
   ADMIN AUTH APIS
================================ */

const authApi = {
  /* LOGIN */
  login: async (payload) => {
    const res = await api.post("/auth/login", payload);
    return res.data;
  },

  /* FORGOT PASSWORD (OTP) */
  forgotPasswordOtp: async (email) => {
    const res = await api.post("/auth/forgot-password-otp", { email });
    return res.data;
  },

  /* RESET PASSWORD (OTP) */
  resetPasswordOtp: async ({ email, otp, newPassword }) => {
    const res = await api.post("/auth/reset-password-otp", {
      email,
      otp,
      newPassword,
    });
    return res.data;
  },

  /* LOGOUT (FRONTEND ONLY) */
  logout: () => {
  sessionStorage.removeItem("admin_token");
  sessionStorage.removeItem("admin_auth");
},
};

export default authApi;
