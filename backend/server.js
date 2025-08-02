const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json({
    name: "Priyanshu",
    referralCode: "priyanshu2025",
    totalDonations: 15000
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Priyanshu", donations: 15000 },
    { name: "Rahul", donations: 12000 },
    { name: "Sneha", donations: 8000 }
  ]);
});

app.get("/", (req, res) => {
  res.send("Backend API is running successfully!");
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
