const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/students", (req, res) => {
  fs.readFile("students.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read file" });
    }

    const students = JSON.parse(data);
    res.json(students);
  });
});

app.get("/", (req, res) => {
  res.send("Student API is running 😎🔥");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
