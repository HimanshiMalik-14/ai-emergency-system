const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ambulance = sequelize.define('Ambulance', {
  hospitalId: DataTypes.INTEGER,
  status: DataTypes.STRING
});

module.exports = Ambulance;