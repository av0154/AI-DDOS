const express = require("express");
const Attack = require("../models/attackModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newAttack = new Attack(req.body);
    await newAttack.save();
    res.status(201).json({ message: "Attack logged ", attack: newAttack });
  } catch (err) {
    res.status(500).json({ error: "Failed to log attack ", details: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const attacks = await Attack.find();
    res.json(attacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch attacks ", details: err });
  }
});

module.exports = router;
