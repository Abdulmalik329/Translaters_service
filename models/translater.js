const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const translater = sequelize.define(
  "translater",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    languages_id: { type: DataTypes.INTEGER },
    qualification: { type: DataTypes.STRING },
    diploms: { type: DataTypes.STRING },
    experience: { type: DataTypes.STRING },
  },
  { freezeTableName: true }
);

module.exports = translater;
