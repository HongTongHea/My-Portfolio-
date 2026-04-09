const express = require("express");
const cors    = require("cors");
const path    = require("path");
const fs      = require("fs");
require("dotenv").config();

const posterRoutes = require("./routes/posterRoutes");

const app = express();

// Create uploads folder if missing
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

app.use(cors({ origin: "https://my-portfolio-kyc6.onrender.com" })); // adjust to your React port
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/posters", posterRoutes);

// Health check
app.get("/", (req, res) => res.json({ message: "Poster API running ✅" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on https://my-portfolio-kyc6.onrender.com:${PORT}`));