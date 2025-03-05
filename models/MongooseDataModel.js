const mongoose = require("mongoose");
// This creates the data model mongoose will use to store data in Mongo
const DataSchema = new mongoose.Schema({
  expenses: [
    {
      title: String,
      description: String,
      amount: Number,
      date: Date,
      category: String
    }
  ]
});

const MongooseDataModel = mongoose.model("expenseGroupData", DataSchema);

module.exports = MongooseDataModel;
