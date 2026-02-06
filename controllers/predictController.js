const predictionService = require('../services/predictionService');
const geoService = require('../services/geoService');
const { getAlerts } = require('../services/alertService'); // import only getAlerts

// Phase 1 dummy logic
exports.predictLoad = (req, res) => {
  try {
    const hospitalId = req.params.hospitalId;
    const result = predictionService.dummyPrediction(hospitalId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Phase 2 real prediction
exports.getPrediction = async (req, res) => {
  try {
    const result = await predictionService.predictAccidentLoad();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Phase 2 geospatial hotspots
exports.getHotspots = async (req, res) => {
  try {
    const result = await geoService.getHotspots();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Phase 2 alerts
exports.getAlerts = async (req, res) => {
  try {
    // use the alertService wrapper
    const alerts = await getAlerts();
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};