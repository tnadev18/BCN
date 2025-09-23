const express = require("express");
const Payment = require("../models/Payment");
const Customer = require("../models/Customer");
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

    // Update customer's outstanding balance
    const customer = await Customer.findById(payment.customer_id);
    customer.outstanding_balance -= payment.amount_paid;
    await customer.save();

    res.json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get payment history for a customer
router.get("/history/:customerId", async (req, res) => {
  try {
    const payments = await Payment.find({ customer_id: req.params.customerId });
    res.json(payments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
