const Ambulance = require('../models/Ambulance');
const sequelize = require('../config/database');

async function seedAmbulances() {
  await sequelize.sync();
  await Ambulance.bulkCreate([
    { status: 'available' },
    { status: 'busy' },
    { status: 'available' },
    { status: 'busy' },
    { status: 'available' }
  ]);
  console.log('Ambulances seeded successfully');
}

seedAmbulances();