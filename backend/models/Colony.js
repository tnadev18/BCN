const mongoose = require("mongoose");

const colonySchema = new mongoose.Schema({
  colony_code: { type: String, required: true, unique: true },
  colony_name: { type: String, required: true },
  description: String
});

module.exports = mongoose.model("Colony", colonySchema);
