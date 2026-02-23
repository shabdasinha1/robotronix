import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

/* ===============================
   TRUST PROXY (If Behind Nginx/Cloudflare)
================================ */
app.set("trust proxy", 1);

/* ===============================
   SECURITY MIDDLEWARES
================================ */

// Helmet - Adds security headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable if CSP causes frontend issues
  })
);

/* ===============================
   CORS (MUST COME BEFORE RATE LIMIT)
================================ */

const allowedOrigins = [
  "https://robotronix.co.in",
  "https://www.robotronix.co.in",
  "http://localhost:3000",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow non-browser requests (like Postman, curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false); // ❗ Do NOT throw error
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));


/* ===============================
   RATE LIMITER (AFTER CORS)
================================ */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

/* ===============================
   BODY PARSERS
================================ */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* ===============================
   LOGGING (DEV ONLY)
================================ */
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* ===============================
   HEALTH CHECK
================================ */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    environment: process.env.NODE_ENV,
    timestamp: new Date(),
  });
});

/* ===============================
   API ROUTES
================================ */
app.use("/api/v1", routes);

/* ===============================
   404 HANDLER
================================ */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ===============================
   GLOBAL ERROR HANDLER
================================ */
app.use(errorHandler);

export default app;
