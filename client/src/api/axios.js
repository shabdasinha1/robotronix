import axios from "axios";

/* ===============================
   AXIOS INSTANCE
================================ */
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===============================
   REQUEST INTERCEPTOR
   → Attach JWT automatically (SESSION)
================================ */
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("admin_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/* ===============================
   RESPONSE INTERCEPTOR
   → Global error handling
================================ */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear session
      sessionStorage.removeItem("admin_token");
      sessionStorage.removeItem("admin_auth");

      // Admin-safe hard redirect
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/admin/login";
      }
    }

    return Promise.reject(
      error.response?.data || { message: "Something went wrong" },
    );
  },
);

// export default api;

/* ===============================
   PUBLIC AXIOS INSTANCE
================================ */
export const publicApi = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/v1",
  timeout: 15000,
  
});

/* ===============================
   RESPONSE INTERCEPTOR
   → Simple error handling
================================ */
publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error.response?.data || { message: "Something went wrong" },
    );
  },
);

// export default publicApi;
