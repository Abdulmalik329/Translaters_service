const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define(
  "admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
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
  },
  is_creater: DataTypes.BOOLEAN,
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  activation_link: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
});

module.exports = Admin;
