const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("emergency_db", "postgres", "helloPost@26", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;

// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     port: process.env.DB_PORT
//   }
// );
// module.exports = sequelize;