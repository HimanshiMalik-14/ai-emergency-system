const { getAlerts } = require('../services/alertService');

async function alertController(req, res) {
  try {
    const alerts = await getAlerts();
    res.json(alerts);
  } catch (err) {
    console.error("Error in alertController:", err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = alertController;