const dotenv = require("dotenv");
dotenv.config();

const app = require("./app.js"); // Import the Express app

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
