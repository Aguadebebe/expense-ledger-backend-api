const express = require("express");
const {
  registerExpenseData,
  getExpenseData,
  deleteSingleJsonObjectData
} = require("./controllers/expenseDataControllers");

const router = express.Router();

router.post("/register", registerExpenseData);
router.get("/data", getExpenseData);
router.delete("/delete/:id", deleteSingleJsonObjectData);

module.exports = router;
