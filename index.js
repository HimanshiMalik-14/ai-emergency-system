require('dotenv').config();

console.log("Starting server...");
const express = require("express");
const app = express();
const routes = require("./routes");   
const sequelize = require("./config/database"); 

app.use(express.json());
app.use("/", routes);

// Test DB connection
sequelize.authenticate()
  .then(() => console.log("✅ Database connection established successfully"))
  .catch(err => console.error("❌ Unable to connect to the database:", err));

// Sync DB and start server
sequelize.sync()
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch(err => console.error("❌ Error syncing database:", err));