const TranslationContract = require("../models/translater_contract");

const getAllTranslationContracts = async (req, res) => {
  try {
    const contracts = await TranslationContract.findAll();
    res.json(contracts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTranslationContract = async (req, res) => {
  try {
    const contract = await TranslationContract.create(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTranslationContractById = async (req, res) => {
  try {
    const contract = await TranslationContract.findByPk(req.params.id);
    if (!contract) return res.status(404).json({ error: "Translation contract not found" });
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTranslationContract = async (req, res) => {
  try {
    const contract = await TranslationContract.findByPk(req.params.id);
    if (!contract) return res.status(404).json({ error: "Translation contract not found" });
    await contract.update(req.body);
    res.json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTranslationContract = async (req, res) => {
  try {
    const contract = await TranslationContract.findByPk(req.params.id);
    if (!contract) return res.status(404).json({ error: "Translation contract not found" });
    await contract.destroy();
    res.json({ message: "Translation contract deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTranslationContracts,
  createTranslationContract,
  getTranslationContractById,
  updateTranslationContract,
  deleteTranslationContract,
};
