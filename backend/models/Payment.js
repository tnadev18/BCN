const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  payment_date: { type: Date, default: Date.now },
  month: { type: String, required: true },
  year: { type: Number, required: true },
  amount_paid: { type: Number, required: true }
});

module.exports = mongoose.model("Payment", paymentSchema);
