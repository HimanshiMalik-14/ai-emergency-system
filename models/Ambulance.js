const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Ambulance = sequelize.define("Ambulance", {
  zone: DataTypes.STRING,
  hospitalId: DataTypes.INTEGER,
});

module.exports = Ambulance;