const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hospital = sequelize.define('Hospital', {
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER,
  location: DataTypes.STRING
});

module.exports = Hospital;