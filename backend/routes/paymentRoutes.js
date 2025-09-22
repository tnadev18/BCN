const express = require("express");
const Payment = require("../models/Payment");
const router = express.Router();

// Get all payments
router.get("/", async (req, res) => {
  const payments = await Payment.find().populate("customer_id");
  res.json(payments);
});

// Add payment
router.post("/", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
