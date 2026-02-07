require('dotenv').config();
const sequelize = require('../config/database');
const Hospital = require('../models/Hospital');
const Ambulance = require('../models/Ambulance');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    await Hospital.bulkCreate([
      { name: 'City Hospital', capacity: 100, location: 'Downtown' },
      { name: 'Metro Hospital', capacity: 150, location: 'Uptown' }
    ]);

    await Ambulance.bulkCreate([
      { hospitalId: 1, status: 'available' },
      { hospitalId: 1, status: 'busy' },
      { hospitalId: 2, status: 'available' }
    ]);

    console.log("✅ Seed data inserted successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seed();