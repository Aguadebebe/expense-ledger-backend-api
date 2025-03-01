const MongooseData = require("../models/MongooseData");

/**  This is a route handler for the post request at the register endpoint in the client.
for (const newStoredExpense of newStoredExpenses) {
        const response = await Axios.post("http://localhost:8080/register", {
          title: newStoredExpense.title,
          description: newStoredExpense.description,
          amount: newStoredExpense.amount, // Numeric value for amount
          date: newStoredExpense.date, // Correct Date
          category: newStoredExpense.category
        });*/

// Save new data to the database
const registerExpenseData = async (request, response) => {
  const { title, description, amount, date, category } = request.body;
  try {
    const newData = new MongooseData({ title, description, amount, date, category });
    await newData.save();
    response.status(201).json({ message: "Data saved successfully!", data: newData });
  } catch (error) {
    response.status(500).json({ error: "Failed to save data" });
  }
};

//Get all stored data from the database (or filter by category if needed)
const getExpenseData = async (request, response) => {
  try {
    const data = await MongooseData.find();
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve data" });
  }
};

const deleteSingleJsonObjectData = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedJsonObjectData = await MongooseData.findByIdAndDelete(id);

    if (!deletedJsonObjectData) {
      return response.status(404).json({ error: "singleJsonObjectData not found!" });
    }
    response.status(200).json({ message: "singleJsonObjectData deleted successfully!", data: deletedJsonObjectData });
  } catch (error) {
    response.status(500).json({ error: "Failed to deleted singleJsonObjectData" });
  }
};

module.exports = { registerExpenseData, getExpenseData, deleteSingleJsonObjectData };
