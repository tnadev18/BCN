const express = require("express");
const Customer = require("../models/Customer");
const Payment = require("../models/Payment");
const router = express.Router();

// Get all customers
router.get("/", async (req, res) => {
  const customers = await Customer.find().populate("colony_id");
  res.json(customers);
});

// Add customer
router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

// Calculate outstanding balance for all customers
router.post("/calculate-outstanding", async (req, res) => {
  try {
    const customers = await Customer.find();
    for (const customer of customers) {
      const payments = await Payment.find({ customer_id: customer._id });
      const totalPaid = payments.reduce((sum, p) => sum + p.amount_paid, 0);

      const today = new Date();
      const connectionDate = new Date(customer.connection_date);
      const months = (today.getFullYear() - connectionDate.getFullYear()) * 12 + (today.getMonth() - connectionDate.getMonth());
      const totalCharged = months * customer.monthly_charge;

      customer.outstanding_balance = totalCharged - totalPaid;
      await customer.save();
    }
    res.json({ message: "Outstanding balances calculated successfully." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
