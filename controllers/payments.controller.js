const Payment = require("../models/payments");

const getAllPayments = async (req, res) => {
  try {
    const prices = await Payment.findAll();
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPayment = async (req, res) => {
  try {
    const price = await Payment.create(req.body);
    res.status(201).json(price);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const price = await Payment.findByPk(req.params.id);
    if (!price) return res.status(404).json({ error: "Service price not found" });
    res.json(price);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const price = await Payment.findByPk(req.params.id);
    if (!price) return res.status(404).json({ error: "Service price not found" });
    await price.update(req.body);
    res.json(price);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const price = await Payment.findByPk(req.params.id);
    if (!price) return res.status(404).json({ error: "Service price not found" });
    await price.destroy();
    res.json({ message: "Service price deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPayments,
  createPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
};
