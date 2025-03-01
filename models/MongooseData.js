const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  title: String,
  description: String,
  amount: Number,
  date: Date,
  category: String
});

const MongooseData = mongoose.model("Data", DataSchema);

module.exports = MongooseData;
