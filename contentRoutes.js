const express = require("express");
const multer = require("multer");
const Content = require("../models/Content");

const router = express.Router();

// File Upload Setup (using Multer)
const upload = multer({ dest: 'uploads/' });

// Create New Content
router.post("/create", upload.single('contentFile'), async (req, res) => {
  const { title, description, contentType, price } = req.body;
  const contentUrl = req.file.path;  // File URL after upload

  try {
    const content = new Content({ title, description, contentType, contentUrl, price });
    await content.save();
    res.status(201).json({ message: "Content created successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error creating content" });
  }
});

// Get All Content
router.get("/", async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;