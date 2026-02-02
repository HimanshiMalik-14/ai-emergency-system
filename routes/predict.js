const express = require("express");
const router = express.Router();
const { predictLoad } = require("../controllers/predictController");

router.get("/:hospitalId", predictLoad);

module.exports = router;