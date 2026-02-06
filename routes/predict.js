const express = require("express");
const router = express.Router();
const { predictLoad } = require("../controllers/predictController");
const predictController = require('../controllers/predictController');

router.get('/predict/:hospitalId', predictController.predictLoad); // dummy Phase 1
router.get('/predict', predictController.getPrediction);           // Phase 2

router.get('/predict', predictController.getPrediction);
router.get('/hotspots', predictController.getHotspots);
router.get('/alerts', predictController.getAlerts);



router.get("/:hospitalId", predictLoad);

module.exports = router;