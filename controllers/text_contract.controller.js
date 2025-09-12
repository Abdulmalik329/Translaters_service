const TextContract = require("../models/text_contract");

// Hammasini olish
const getAllContracts = async (req, res) => {
  try {
    const contracts = await TextContract.findAll();
    res.json(contracts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Yangi contract yaratish
const createContract = async (req, res) => {
  try {
    const contract = await TextContract.create(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ID bo‘yicha contract olish
const getContractById = async (req, res) => {
  try {
    const contract = await TextContract.findByPk(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: "Contract not found" });
    }
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ID bo‘yicha contractni yangilash
const updateContract = async (req, res) => {
  try {
    const contract = await TextContract.findByPk(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: "Contract not found" });
    }
    await contract.update(req.body);
    res.json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ID bo‘yicha contractni o‘chirish
const deleteContract = async (req, res) => {
  try {
    const contract = await TextContract.findByPk(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: "Contract not found" });
    }
    await contract.destroy();
    res.json({ message: "Contract deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllContracts,
  createContract,
  getContractById,
  updateContract,
  deleteContract,
};
