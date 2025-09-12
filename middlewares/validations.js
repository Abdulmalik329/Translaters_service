const Joi = require("joi");


const adminRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(9).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const adminLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


// Admin validation
const adminSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(7).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  is_creater: Joi.boolean().required(),
});

// Client validation
const clientSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(7).max(15).required(),
  email: Joi.string().email().required(),
  service: Joi.string().required(),
});

// Language validation
const languageSchema = Joi.object({
  name: Joi.string().required(),
  translater_id: Joi.number().integer().required(),
});

// Payment validation
const paymentSchema = Joi.object({
  amount: Joi.number().required(),
  text_contract_id: Joi.number().integer().required(),
});

// Text Contract validation
const textContractSchema = Joi.object({
  client_id: Joi.number().integer().required(),
  admin_id: Joi.number().integer().required(),
  price_id: Joi.number().integer().required(),
  translator_id: Joi.number().integer().required(),
  text_size: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  first_language: Joi.string().required(),
  second_language: Joi.string().required(),
  status: Joi.string().valid("pending", "in_progress", "done").required(),
  payment: Joi.string().valid("paid", "unpaid").required(),
});

// Translater validation
const translaterSchema = Joi.object({
  name: Joi.string().required(),
  languages_id: Joi.number().integer().required(),
  qualification: Joi.string().required(),
  diploms: Joi.string().required(),
  experience: Joi.string().required(),
});

// Translater Contract validation
const translaterContractSchema = Joi.object({
  translator_id: Joi.number().required(),
  client_id: Joi.number().required(),
  admin_id: Joi.number().required(),
  data: Joi.date().required(),
  start_time: Joi.string().required(),
  end_time: Joi.string().required(),
  location: Joi.string().required(),
  price_id: Joi.number().required(),
  first_language: Joi.string().required(),
  second_language: Joi.string().required(),
  status: Joi.string().valid("pending", "in_progress", "done").required(),
  payment: Joi.string().valid("paid", "unpaid").required(),
});

module.exports = {
  adminSchema,
  clientSchema,
  languageSchema,
  paymentSchema,
  textContractSchema,
  translaterSchema,
  translaterContractSchema,
  adminRegisterSchema,
  adminLoginSchema,
};
