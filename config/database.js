const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("emergency_db", "postgres", "helloPost@26", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;