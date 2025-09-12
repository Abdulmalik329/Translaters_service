const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const text_contract = sequelize.define(
  "text_contract",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    client_id: { type: DataTypes.INTEGER },
    admin_id: { type: DataTypes.INTEGER },
    price_id: { type: DataTypes.INTEGER },
    translator_id: { type: DataTypes.INTEGER },
    text_size: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
    first_language: { type: DataTypes.STRING },
    second_language: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM("pending", "in_progress", "done") },
    payment: { type: DataTypes.ENUM("paid", "unpaid") },
  },
  { freezeTableName: true }
);

module.exports = text_contract;
