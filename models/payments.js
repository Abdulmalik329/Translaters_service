const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const payments = sequelize.define(
  "payments",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    price: { type: DataTypes.INTEGER },
    servic: { type: DataTypes.STRING },
    first_language: { type: DataTypes.STRING },
    second_language: { type: DataTypes.STRING },
  },
  { freezeTableName: true }
);

module.exports = payments;
