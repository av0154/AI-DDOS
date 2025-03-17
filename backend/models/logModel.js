const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  sourceIP: String,
  destinationIP: String,
  httpCode: Number,
  requestType: String,
  userAgent: String,
  sqlInjectionAttempt: Boolean,
});

module.exports = mongoose.model("Log", logSchema);
