const MongooseDataModel = require("../models/MongooseDataModel");

// Save new data to the database
const registerExpenseData = async (request, response) => {
  try {
    console.log("Received data:", request.body);

    if (!request.body.expenses || !Array.isArray(request.body.expenses)) {
      return response.status(400).json({ message: "Invalid expense data!" });
    }

    let expenseGroup = await MongooseDataModel.findOne(); // Finds existing expense file
    if (!expenseGroup) {
      expenseGroup = new MongooseDataModel({ expenses: [] });
    }

    // pushes all expenses into the expenses array
    expenseGroup.expenses.push(...request.body.expenses); // Adds new expenses to the array

    // Save the updated expense group
    await expenseGroup.save();

    console.log("Data saved successfully");

    response.status(201).json({ message: "Data saved successfully!", data: expenseGroup });
  } catch (error) {
    console.error("Error saving expense data:", error);
    response.status(500).json({ error: "Failed to save data" });
  }
};

//Get all stored data from the database (or filter by category if needed)
const getExpenseData = async (request, response) => {
  try {
    const data = await MongooseDataModel.find(); // this returns only one model array of expense objects
    response.status(200).json(data || {});
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve data" });
  }
};
// Connects objects to delete button - will need refactoring!
const deleteSingleJsonObjectData = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedJsonObjectData = await MongooseDataModel.findByIdAndDelete(id);

    if (!deletedJsonObjectData) {
      return response.status(404).json({ error: "singleJsonObjectData not found!" });
    }
    response.status(200).json({ message: "singleJsonObjectData deleted successfully!", data: deletedJsonObjectData });
  } catch (error) {
    response.status(500).json({ error: "Failed to deleted singleJsonObjectData" });
  }
};

module.exports = { registerExpenseData, getExpenseData, deleteSingleJsonObjectData };

//Need to refactor  and clearly label
