const express = require("express");
const Colony = require("../models/Colony");
const router = express.Router();

// Get all colonies
router.get("/", async (req, res) => {
  const colonies = await Colony.find();
  res.json(colonies);
});

// Add colony
router.post("/", async (req, res) => {
  try {
    const colony = new Colony(req.body);
    await colony.save();
    res.json(colony);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
