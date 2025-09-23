const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  mobile: String,
  email: String,
  address: String,
  colony_id: { type: mongoose.Schema.Types.ObjectId, ref: "Colony" },
  nuid_no: String,
  connection_date: { type: Date, default: Date.now },
  connection_type: String,
  plan: String,
  monthly_charge: Number,
  outstanding_balance: { type: Number, default: 0 },
  status: { type: String, default: "Active" }
});

module.exports = mongoose.model("Customer", customerSchema);
