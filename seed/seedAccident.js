// seedAccidents.js
const sequelize = require('../config/database');
const AccidentLogs = require('../models/AccidentLogs');

async function seedAccident() {
  try {
    await sequelize.sync();

    // Clear existing records
    await AccidentLogs.destroy({ where: {}, truncate: true });

    // Insert fresh records with coordinates
    await AccidentLogs.bulkCreate([
      {
        timestamp: new Date('2026-02-03T08:15:00Z'),
        location: 'Ghaziabad',
        severity: 2,
        latitude: 28.6692,
        longitude: 77.4538
      },
      {
        timestamp: new Date('2026-02-03T09:30:00Z'),
        location: 'Ghaziabad',
        severity: 3,
        latitude: 28.6692,
        longitude: 77.4538
      },
      {
        timestamp: new Date('2026-02-03T09:45:00Z'),
        location: 'Delhi',
        severity: 1,
        latitude: 28.7041,
        longitude: 77.1025
      },
      {
        timestamp: new Date('2026-02-03T17:00:00Z'),
        location: 'Noida',
        severity: 4,
        latitude: 28.5355,
        longitude: 77.3910
      }
    ]);

    console.log("✅ Accident logs truncated and reseeded with coordinates");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding accident logs:", err);
    process.exit(1);
  }
}

seedAccident();