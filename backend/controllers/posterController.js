const db = require("../config/db");
const fs = require("fs");
const path = require("path");

// GET all posters
const getAllPosters = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM posters ORDER BY created_at DESC"
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST create poster
const createPoster = async (req, res) => {
  try {
    const { title, category } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ success: false, message: "Image is required." });
    }
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, message: "Title is required." });
    }

    const imageUrl = `/uploads/${file.filename}`;

    const [result] = await db.query(
      "INSERT INTO posters (title, category, image_url) VALUES (?, ?, ?)",
      [title.trim(), category?.trim() || "Uploaded Artwork", imageUrl]
    );

    const [newPoster] = await db.query(
      "SELECT * FROM posters WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({ success: true, data: newPoster[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT update poster
const updatePoster = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category } = req.body;

    const [existing] = await db.query("SELECT * FROM posters WHERE id = ?", [id]);
    if (!existing.length) {
      return res.status(404).json({ success: false, message: "Poster not found." });
    }

    let imageUrl = existing[0].image_url;

    if (req.file) {
      // Delete old file
      const oldPath = path.join(__dirname, "..", imageUrl);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      imageUrl = `/uploads/${req.file.filename}`;
    }

    await db.query(
      "UPDATE posters SET title = ?, category = ?, image_url = ? WHERE id = ?",
      [
        title?.trim() || existing[0].title,
        category?.trim() || existing[0].category,
        imageUrl,
        id,
      ]
    );

    const [updated] = await db.query("SELECT * FROM posters WHERE id = ?", [id]);
    res.json({ success: true, data: updated[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE poster
const deletePoster = async (req, res) => {
  try {
    const { id } = req.params;

    const [existing] = await db.query("SELECT * FROM posters WHERE id = ?", [id]);
    if (!existing.length) {
      return res.status(404).json({ success: false, message: "Poster not found." });
    }

    // Delete image file from disk
    const filePath = path.join(__dirname, "..", existing[0].image_url);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await db.query("DELETE FROM posters WHERE id = ?", [id]);

    res.json({ success: true, message: "Poster deleted successfully." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getAllPosters, createPoster, updatePoster, deletePoster };