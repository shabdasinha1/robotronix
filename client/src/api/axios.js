import axios from "axios";

/* ===============================
   AXIOS INSTANCE
================================ */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===============================
   REQUEST INTERCEPTOR
   → Attach JWT automatically
================================ */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ===============================
   RESPONSE INTERCEPTOR
   → Global error handling
================================ */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Token expired / invalid
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("admin_token");

      // Optional: hard redirect (safe for admin)
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(
      error.response?.data || { message: "Something went wrong" }
    );
  }
);

export default api;
