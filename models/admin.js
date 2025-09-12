const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const admin = sequelize.define(
  "admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
    },
    is_creater: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = admin;
