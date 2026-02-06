// index.js
require('dotenv').config();

console.log("Starting server...");
const express = require("express");
const app = express();
const sequelize = require("./config/database");
const alertRoutes = require('./routes/alertRoutes');

// Import routes
const predictRoutes = require("./routes/predict");
const hotspotRoutes = require("./routes/hotspotRoutes"); // <-- add this

app.use(express.json());

// Mount routes under /api
app.use("/api", predictRoutes);
app.use("/api", hotspotRoutes); // <-- mount hotspot routes
app.use('/api', alertRoutes);

// Test DB connection
sequelize.authenticate()
  .then(() => console.log("✅ Database connection established successfully"))
  .catch(err => console.error("❌ Unable to connect to the database:", err));

// Sync DB and start server
sequelize.sync()
  .then(() => {
    console.log("✅ Database synced");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ Error syncing database:", err));