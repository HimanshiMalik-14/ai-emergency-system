const { getHotspots } = require('../services/geoService');

async function hotspotController(req, res) {
  try {
    const hotspots = await getHotspots();
    res.json(hotspots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = hotspotController;