const mongoose = require("mongoose");

const Url = process.env.URL;

mongoose.connect(Url)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.error("MongoDB connection error:", err.message);
});
