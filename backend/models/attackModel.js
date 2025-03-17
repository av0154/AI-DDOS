const mongoose = require("mongoose");

const attackSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ipAddress: String,
  attackType: String,
  detectedBy: String,
});

module.exports = mongoose.model("Attack", attackSchema);
