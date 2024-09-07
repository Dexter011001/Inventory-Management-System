// index.js

// Import Dependencies

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

// Initializing Express App

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(morgan("dev")); // Log requests to the console

// Simple route

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// Start the server

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
