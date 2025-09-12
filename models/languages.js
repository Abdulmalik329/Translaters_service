const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const languages = sequelize.define(
  "languages",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    translater_id: { type: DataTypes.INTEGER },
  },
  { freezeTableName: true }
);

module.exports = languages;
