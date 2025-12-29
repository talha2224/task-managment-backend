const express = require("express");
const cors = require("cors");

const authRoutes = require("./views/auth.routes");
const taskRoutes = require("./views/task.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

module.exports = app;
