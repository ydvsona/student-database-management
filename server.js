const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGODB_ATLAS_URL")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/students", studentRoutes);
app.use("/admin", adminRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});