// services/predictionService.js
const AccidentLogs = require('../models/AccidentLogs');
// Dummy prediction (Phase 1 style)
function dummyPrediction(hospitalId) {
  const predictedLoad = Math.floor(Math.random() * 200);
  return {
    hospitalId,
    predictedLoad,
    alert: predictedLoad > 150,
  };
}
// Real prediction (Phase 2 style)
async function predictAccidentLoad() {
  const logs = await AccidentLogs.findAll();

  // Guard clause: if no logs, return empty result
  if (!logs || logs.length === 0) {
    return { peakHour: null, countsByHour: {} };
  }
  const countsByHour = {};
  logs.forEach(log => {
    const hour = new Date(log.timestamp).getHours();
    countsByHour[hour] = (countsByHour[hour] || 0) + 1;
  });

  const hours = Object.keys(countsByHour);

  // Extra guard: if countsByHour is empty, return safely
  if (hours.length === 0) {
    return { peakHour: null, countsByHour };
  }
   const peakHour = hours.reduce((a, b) =>
    countsByHour[a] > countsByHour[b] ? a : b,
   hours[0]
  );
  return { peakHour, countsByHour };
}
module.exports = { dummyPrediction, predictAccidentLoad };