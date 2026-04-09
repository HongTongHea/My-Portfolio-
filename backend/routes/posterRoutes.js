const express = require("express");
const multer  = require("multer");
const path    = require("path");
const {
  getAllPosters,
  createPoster,
  updatePoster,
  deletePoster,
} = require("../controllers/posterController");

const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename:    (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const valid = allowed.test(path.extname(file.originalname).toLowerCase())
               && allowed.test(file.mimetype);
    valid ? cb(null, true) : cb(new Error("Images only!"));
  },
});

router.get("/",          getAllPosters);
router.post("/",         upload.single("image"), createPoster);
router.put("/:id",       upload.single("image"), updatePoster);
router.delete("/:id",    deletePoster);

module.exports = router;