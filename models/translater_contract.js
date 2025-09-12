const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const translation_contract = sequelize.define(
  "translation_contract",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    translator_id: { type: DataTypes.INTEGER },
    client_id: { type: DataTypes.INTEGER },
    admin_id: { type: DataTypes.INTEGER },
    data: { type: DataTypes.DATE },
    start_time: { type: DataTypes.TIME },
    end_time: { type: DataTypes.BIGINT },
    location: { type: DataTypes.STRING },
    price_id: { type: DataTypes.INTEGER },
    first_language: { type: DataTypes.STRING },
    second_language: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM("pending", "active", "completed") },
    payment: { type: DataTypes.ENUM("paid", "unpaid") },
  },
  { freezeTableName: true }
);

module.exports = translation_contract;
