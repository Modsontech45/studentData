const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

/** Load students data */
app.get("/students", (req, res) => {
  fs.readFile("students.json", "utf8", (err, file) => {
    if (err) {
      return res.status(500).json({ error: "Unable to load student data" });
    }

    try {
      const students = JSON.parse(file);
      res.status(200).json(students);
    } catch (parseError) {
      res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

/** Root endpoint */
app.get("/", (req, res) => {
  res.status(200).send("🔥 Student API is online and ready!");
});

/** Start server */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
