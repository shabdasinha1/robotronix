// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const path = require("path");
// const fs = require("fs");

// dotenv.config(); // Load environment variables

// require("./config/db"); // Database connection
// const router = require("./routes/index.js"); // Import all routes

// const app = express();
// const PORT = process.env.SERVER_PORT || 2001;

// // ✅ Middleware
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(bodyParser.json());
// // ✅ Serve testimonial images statically
// app.use(
//   "/uploads/testimonials",
//   express.static(path.join(__dirname, "uploads/testimonials"))
// );
// app.use("/uploads", express.static("uploads"));

// // ✅ API routes
// app.use("/api", router);

// // ✅ Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

// module.exports = app;



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

dotenv.config(); // Load environment variables

require("./config/db"); // Database connection
const router = require("./routes/index.js"); // Import all routes

const app = express();
const PORT = process.env.SERVER_PORT || 2001;

// ✅ Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        process.env.FRONTEND_URL,
        "http://localhost:3000",
        "http://192.168.1.22:3000",
        "http://192.168.0.190:3000"
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json());
app.use(bodyParser.json());
// ✅ Serve testimonial images statically
app.use(
  "/uploads/testimonials",
  express.static(path.join(__dirname, "uploads/testimonials"))
);
app.use("/uploads", express.static("uploads"));

// ✅ API routes
app.use("/api", router);

// ✅ Start the server
app.listen(PORT, "0.0.0.0", () => {
  const backendUrl = process.env.BACKEND_URL || `http://localhost:${PORT}`;
  console.log(`🚀 Server is running on ${backendUrl}`);
});

module.exports = app;
