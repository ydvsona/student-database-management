const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;