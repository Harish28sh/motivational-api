const express = require("express");
const router = express.Router();

let quotes = require("../data/quotes");

// ✅ GET all quotes
router.get("/", (req, res) => {
  res.json(quotes);
});

// ✅ POST a new quote
router.post("/", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Quote text is required" });
  }

  const newQuote = {
    id: quotes.length + 1,
    text
  };

  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

module.exports = router;