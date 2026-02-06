// models/AccidentLogs.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AccidentLogs = sequelize.define('AccidentLogs', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  severity: {
    type: DataTypes.INTEGER,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = AccidentLogs;