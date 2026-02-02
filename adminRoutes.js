const express = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const router = express.Router();

router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const admin = new Admin({ email: req.body.email, password: hashed });
  await admin.save();
  res.json({ message: "Admin created" });
});

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(401).json("Invalid");

  const isMatch = await bcrypt.compare(req.body.password, admin.password);
  if (!isMatch) return res.status(401).json("Invalid");

  res.json({ message: "Login successful" });
});

module.exports = router;