const express = require("express");
const Log = require("../models/logModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newLog = new Log(req.body);
    await newLog.save();
    res.status(201).json({ message: "Log saved ", log: newLog });
  } catch (err) {
    res.status(500).json({ error: "Failed to save log ", details: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch logs ", details: err });
  }
});

module.exports = router;
