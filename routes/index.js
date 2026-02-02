const express = require("express");
const router = express.Router();

const predictRoutes = require("./predict");
router.use("/predict", predictRoutes);

router.get("/", (req, res) => {
  res.json({ message: "AI Emergency System running" });
});

module.exports = router;