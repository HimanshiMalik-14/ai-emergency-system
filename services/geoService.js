// services/geoService.js
const AccidentLogs = require('../models/AccidentLogs');

async function getHotspots() {
  const logs = await AccidentLogs.findAll();

  const clusters = {};
  logs.forEach(log => {
    // Debugging output
    console.log("DEBUG:", log.latitude, log.longitude);

    const lat = Number(log.latitude);
    const lon = Number(log.longitude);

    if (!isNaN(lat) && !isNaN(lon)) {
      const key = `${lat},${lon}`;
      clusters[key] = (clusters[key] || 0) + 1;
    } else {
      console.warn("Invalid coordinates:", log.latitude, log.longitude);
    }
  });

  return clusters;
}
module.exports = { getHotspots };