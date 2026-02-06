const AccidentLogs = require('../models/AccidentLogs');
const Hospital = require('../models/Hospital');
const Ambulance = require('../models/Ambulance');

// Haversine formula for distance (km)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) ** 2 +
            Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
            Math.sin(dLon/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// Helpers (internal only)
function checkHospitalLoad(hospital) {
  return hospital.capacityUsed > 0.8 * hospital.capacity;
}

function checkAmbulanceLoad(ambulances) {
  const busy = ambulances.filter(a => a.status === 'busy').length;
  return busy / ambulances.length > 0.7;
}

async function getAlerts() {
  const accidents = await AccidentLogs.findAll();
  const hospitals = await Hospital.findAll();
  const ambulances = await Ambulance.findAll();

  return accidents.map(acc => {
    // nearest hospital
    const nearestHospital = hospitals.reduce((prev, curr) => {
      const dPrev = getDistance(acc.latitude, acc.longitude, prev.latitude, prev.longitude);
      const dCurr = getDistance(acc.latitude, acc.longitude, curr.latitude, curr.longitude);
      return dCurr < dPrev ? curr : prev;
    });

    // nearest ambulance
    const nearestAmbulance = ambulances.reduce((prev, curr) => {
      const dPrev = getDistance(acc.latitude, acc.longitude, prev.latitude, prev.longitude);
      const dCurr = getDistance(acc.latitude, acc.longitude, curr.latitude, curr.longitude);
      return dCurr < dPrev ? curr : prev;
    });

    return {
      accidentId: acc.id,
      location: acc.location,
      nearestHospital: nearestHospital.name,
      hospitalOverloaded: checkHospitalLoad(nearestHospital),
      nearestAmbulance: nearestAmbulance.id,
      ambulanceSystemOverloaded: checkAmbulanceLoad(ambulances)
    };
  });
}

module.exports = { getAlerts };