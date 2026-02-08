const predictionService = require('../services/predictionService');
const geoService = require('../services/geoService');
const { getAlerts } = require('../services/alertService');

// ✅ Phase 1 dummy prediction + Phase 3 security polish
exports.predictLoad = (req, res) => {
  try {
    const hospitalId = parseInt(req.params.hospitalId, 10);
    if (isNaN(hospitalId)) {
      return res.status(400).json({ 
        status: "error", 
        message: "Invalid hospital ID. Please provide a numeric value." 
      });
    }

    const result = predictionService.dummyPrediction(hospitalId);
    res.json({ status: "success", data: result });
  } catch (err) {
    console.error("Error in predictLoad:", err);
    res.status(500).json({ 
      status: "error", 
      message: "Internal server error. Please try again later." 
    });
  }
};

// ✅ Phase 2 accident prediction + Phase 3 UX polish
exports.getPrediction = async (req, res) => {
  try {
    const result = await predictionService.predictAccidentLoad();
    res.json({ status: "success", data: result });
  } catch (err) {
    console.error("Error in getPrediction:", err);
    res.status(500).json({ 
      status: "error", 
      message: "Unable to fetch accident prediction at the moment." 
    });
  }
};

// ✅ Phase 2 geospatial hotspots + Phase 3 structured response
exports.getHotspots = async (req, res) => {
  try {
    const result = await geoService.getHotspots();
    res.json({ status: "success", data: result });
  } catch (err) {
    console.error("Error in getHotspots:", err);
    res.status(500).json({ 
      status: "error", 
      message: "Unable to fetch hotspots currently." 
    });
  }
};

// ✅ Phase 2 alerts + Phase 3 safe error handling
exports.getAlerts = async (req, res) => {
  try {
    const alerts = await getAlerts();
    res.json({ status: "success", data: alerts });
  } catch (err) {
    console.error("Error in getAlerts:", err);
    res.status(500).json({ 
      status: "error", 
      message: "Unable to fetch alerts. Please check back later." 
    });
  }
};