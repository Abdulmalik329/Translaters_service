const Admin = require("./admin");
const Client = require("./client");
const Language = require("./languages");
const Payment = require("./payments"); 
const TextContract = require("./text_contract");
const Translater = require("./translater");
const TranslaterContract = require("./translater_contract");

TextContract.belongsTo(Client, { foreignKey: "client_id" });
TextContract.belongsTo(Admin, { foreignKey: "admin_id" });
TextContract.belongsTo(Translater, { foreignKey: "translator_id" });

TextContract.hasMany(Payment, {
  foreignKey: "text_contract_id",
  as: "paymentRecords", 
});

Client.hasMany(TextContract, { foreignKey: "client_id" });
Admin.hasMany(TextContract, { foreignKey: "admin_id" });
Translater.hasMany(TextContract, { foreignKey: "translator_id" });

Payment.belongsTo(TextContract, { foreignKey: "text_contract_id" });

TranslaterContract.belongsTo(Client, { foreignKey: "client_id" });
TranslaterContract.belongsTo(Admin, { foreignKey: "admin_id" });
TranslaterContract.belongsTo(Translater, { foreignKey: "translater_id" });

Client.hasMany(TranslaterContract, { foreignKey: "client_id" });
Admin.hasMany(TranslaterContract, { foreignKey: "admin_id" });
Translater.hasMany(TranslaterContract, { foreignKey: "translater_id" });

Language.belongsTo(Translater, { foreignKey: "translater_id" });
Translater.hasMany(Language, { foreignKey: "translater_id" });

module.exports = {
  Admin,
  Client,
  Language,
  Payment,
  TextContract,
  Translater,
  TranslaterContract,
};
