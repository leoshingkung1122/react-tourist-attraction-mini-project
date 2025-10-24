const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const trips = require("./db.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Test endpoint for Vercel
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

// API endpoint for trips
app.get("/trips", (req, res) => {
  let keywords = req.query.keywords;

  if (keywords === undefined) {
    return res.status(400).json({
      message: "Please send keywords parameter in the URL endpoint",
    });
  }

  const regexKeywords = keywords.split(" ").join("|");
  const regex = new RegExp(regexKeywords, "ig");
  const results = trips.filter((trip) => {
    return (
      trip.title.match(regex) ||
      trip.description.match(regex) ||
      trip.tags.filter((tag) => tag.match(regex)).length
    );
  });

  return res.json({
    data: results,
  });
});

// ! สำคัญ - ต้อง export app ออก ไม่ใช่ app.listen
module.exports = app;
