const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router");
dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Allows parsing of JSON request bodies

app.use(cors()); // Enables Cross-Origin Resource Sharing

app.use(router); // This sends requests to the router.js file

// Connect to MongoDB
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;
