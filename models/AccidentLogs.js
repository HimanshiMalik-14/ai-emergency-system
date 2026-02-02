const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AccidentLog = sequelize.define("AccidentLog", {
  timestamp: DataTypes.DATE,
  location: DataTypes.STRING,
  severity: DataTypes.INTEGER,
});

module.exports = AccidentLog;