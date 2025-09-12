const Admin = require("./admin");
const Client = require("./client");
const Language = require("./languages");
const Payment = require("./payments"); // Bu faqat to‘lovlar uchun ishlatiladi
const TextContract = require("./text_contract");
const Translater = require("./translater");
const TranslaterContract = require("./translater_contract");

// TEXT CONTRACT ALOQALARI
TextContract.belongsTo(Client, { foreignKey: "client_id" });
TextContract.belongsTo(Admin, { foreignKey: "admin_id" });
TextContract.belongsTo(Translater, { foreignKey: "translator_id" });

TextContract.hasMany(Payment, {
  foreignKey: "text_contract_id",
  as: "paymentRecords", // ⚠️ to‘qnashuvdan saqlanish uchun 'as' ishlatilmoqda
});

Client.hasMany(TextContract, { foreignKey: "client_id" });
Admin.hasMany(TextContract, { foreignKey: "admin_id" });
Translater.hasMany(TextContract, { foreignKey: "translator_id" });

Payment.belongsTo(TextContract, { foreignKey: "text_contract_id" });

// TRANSLATER CONTRACT ALOQALARI
TranslaterContract.belongsTo(Client, { foreignKey: "client_id" });
TranslaterContract.belongsTo(Admin, { foreignKey: "admin_id" });
TranslaterContract.belongsTo(Translater, { foreignKey: "translater_id" });

Client.hasMany(TranslaterContract, { foreignKey: "client_id" });
Admin.hasMany(TranslaterContract, { foreignKey: "admin_id" });
Translater.hasMany(TranslaterContract, { foreignKey: "translater_id" });

// TRANSLATER - LANGUAGE
Language.belongsTo(Translater, { foreignKey: "translater_id" });
Translater.hasMany(Language, { foreignKey: "translater_id" });

// EXPORT
module.exports = {
  Admin,
  Client,
  Language,
  Payment,
  TextContract,
  Translater,
  TranslaterContract,
};
